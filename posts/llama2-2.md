---
title: Savvy LLM for NYC
published_at: 2023-08-27T07:52:00.000Z
snippet: GPT-NYC upgrade
tags: ml,codethrough
---

**An upgrade to GPT-NYC**

In the [previous LLM post](/llama2-1), I noted how QLoRA's Guanaco script used a dataset from Open Assistant. As I examined making a NYC-savvy model, I discovered that the QLoRA script is converting that oasst1 CLI flag to another dataset path - `timdettmers/openassistant-guanaco` - this is just under 10k rows of Human/Assistant interactions.

I adapted the Reddit -> PushShift -> GPT-NYC dataset to the format used there (`### Human: Question?### Assistant: Answer`). The [AskNYC data](https://huggingface.co/datasets/monsoon-nlp/asknyc-chatassistant-format) is a little larger - 13.4k rows -  and each row has longer questions and responses. Unsure if this is helping the quality, considering the [Less Is More for Alignment](https://arxiv.org/abs/2305.11206) paper. Also this is an odd adaptation as each question has multiple responses and it's up to users whether they answered or riffed on the person's question or what not.<br/>
On CoLab it took about two hours to train with the QLoRA script. Strangely the `max_steps` parameter is what determines when training stops, so I lost some hours debugging a script which would lead to a single epoch of training.

```
python3 qlora.py \
    --model_name_or_path ../llama-2-7b-hf \
    --use_auth \
    --output_dir ../nyc-savvy-llama2-7b \
    --logging_steps 10 \
    --save_strategy steps \
    --data_seed 42 \
    --save_steps 500 \
    --save_total_limit 40 \
    --dataloader_num_workers 1 \
    --group_by_length False \
    --logging_strategy steps \
    --remove_unused_columns False \
    --do_train \
    --num_train_epochs 1 \
    --lora_r 64 \
    --lora_alpha 16 \
    --lora_modules all \
    --double_quant \
    --quant_type nf4 \
    --bf16 \
    --bits 4 \
    --warmup_ratio 0.03 \
    --lr_scheduler_type constant \
    --gradient_checkpointing \
    --dataset /content/gpt_nyc.jsonl \
    --dataset_format oasst1 \
    --source_max_len 16 \
    --target_max_len 512 \
    --per_device_train_batch_size 1 \
    --gradient_accumulation_steps 16 \
    --max_steps 760 \
    --learning_rate 0.0002 \
    --adam_beta2 0.999 \
    --max_grad_norm 0.3 \
    --lora_dropout 0.1 \
    --weight_decay 0.0 \
    --seed 0 \
```

Then it's time to package the model. Every 500/`save_steps` steps and at its conclusion, the QLoRA script outputs checkpoints with an `adapter_config.json` and `adapter_model.bin`. This is the LoRA adapter which someone would use to switch roles for their base/foundation model (*I could have avoided the earlier debugging issue by using one of these checkpoints, but I was expecting the end of the script would output some final/merged files*).<br/>
I haven't seen a consensus yet on HuggingFace in whether people create separate repos for adapter and full-sized model, or include both in one repo? Decided on two repos.

Extracting a final, full-sized model takes a final *merging* step with help from the PEFT library:

```
model = AutoModelForCausalLM.from_pretrained(model_name, torch_dtype=torch.bfloat16)

model = PeftModel.from_pretrained(model, 'adapter-path')
model = model.merge_and_unload()
model.save_pretrained("nyc-savvy")
```

So now I have [a model: nyc-savvy-llama2–7b](https://huggingface.co/monsoon-nlp/nyc-savvy-llama2-7b) which people can query or use for short chats. It's about 20x the parameters of the original GPT-NYC, and I'm sure LLaMa 2 is better trained and has better context, too. Big ups to Meta for releasing this model, and everyone involved in PEFT/LoRA/QLoRA making it easier to mess with these models.

There's a test script in the repo to double-check that it loads, has NYC-specific answers, and wasn't totally borked by this adapting and re-merging process. Maybe I should also create a Space/Gradio/chat thing for it? When I tried that, it decided to tersely respond to my first question with a URL, so each following message it would send another URL with no words.<br/>
*These AIs know us so well.*

I'm not sure what to do with the initial prompt before the User/Assistant section, because I didn't train with it? But I will continue including it based on what's in the QLoRA notebook.

<br/>
<br/>
<br/>
