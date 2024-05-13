---
title: LLaMA 3 now with Nucleotide BioTokens
published_at: 2024-05-13T00:36:00.000Z
snippet: Possible insight with a better LoRA
tags: ml,codethrough,bioseries
---

After my nucleotide-level LLaMA failed to finetune on tasks, I started over with
'biotokens', which I've created as ∎A, ∎C, ∎G, and ∎T. The leading character is the 'QED' symbol from the math Unicode block. The LoRA needs to be extended to 
include `embed_tokens` as in [the PEFT library example](https://github.com/huggingface/peft/blob/main/examples/causal_language_modeling/peft_lora_clm_with_additional_tokens.ipynb). I also changed some LoRA parameters for more finetunable params.

To fit more params on an L4 GPU, I had to cut back on batches (batch size 1, context 8,000 tokens, ~7,000 biotokens per example). I'm still using the kañiwa genome and GradientAI/Crusoe extended-context LLaMA (they updated the model in the past ~10 days).

Model / Readme: https://huggingface.co/monsoon-nlp/llama3-biotokenpretrain-kaniwa

Training Notebook: https://colab.research.google.com/drive/1FKA3p_jnfRHYd-hqJdYmKn8MQpxec0t5?usp=sharing

Inference Notebook (examples with and without biotokens):
https://colab.research.google.com/drive/1oRS6tvRJNveXw71PscIehFwc0EQvfTcU?usp=sharing

When finetuning on the Long non-coding RNA task, this slightly improved accuracy with
3 more correct answers on the test set (so it's no longer just YES-ing everything...).
With 2-shot, the accuracy goes down?  https://colab.research.google.com/drive/10OHqe29cFeZGk4Fhb-yPnWkiAMsR8tZr

### Thoughts

- With 7,000 tokens x 280 steps, it's seeing 2 million nucleotide tokens in three hours of training. In print that's 700–1000 pages, but it's only ~0.5% of the genome (about 4.5% of one chromosome) - not a ton compared to all of plantkind. If I can look at probabilities and it's actually doing some work on DNA tasks, then it could use some GPU-hours to make it work.
- One of the issues with using a mainstream LLM trainer is that we're training for next-token probability. You already get loss way down by learning that the next token in a nucleotide sequence is in {A,C,G,T} and that sequences repeat a lot.
- This sort of continued pretraining works OK with adapting language models to new natural languages and code, but not to DNA. That makes sense if LLM training amplifies previously-seen snippets of language, or there's some transfer learning / universal grammar going on which obviously wouldn't be present in molecules.
- When it comes to image tokenization / multimodal models, we do believe that the vision neurons pick up general shapes and patterns and can learn new features. Maybe that's how DNA biotokens need to work. Or we have a DNA model generate an embedding that we drop into the model input somehow.
- Even if these baby CoLab models don't work, people will eventually make better ones. We could create ""win-frastructure"" -  Q&A benchmarks, train-test-eval splits, tasks to find disease resistance genes, and have an evaluation to confirm future bio LLMs can use tools and learn tasks.

At this point I've got two weeks to polish up work for CSV Conf. The presentation has a time limit, so I should explain the existing research (AgroNT, Hyena, Evo, Caduceus) and what  tasks exist for them, then mention a mix of hits (protein embeddings) and half-baked stuff (biotokens) from my project. <br/>
After the conference maybe I'm finetuning AgroNT and Mamba models, parsing new sources for the GreenBeing dataset, or going back to exploit code-generation models. IDK

Bonus: I ran into an issue with lm-eval-harness and LoRAs that add tokens, so I proposed [a bug-fix](https://github.com/EleutherAI/lm-evaluation-harness/pull/1828).

<br/>
<br/>
<br/>
