---
title: Savvy Code LLaMa ideas
published_at: 2023-08-29T07:56:00.000Z
snippet: QLoRA, Code LLaMa tests, and mGPT
tags: ml,codethrough
---

**QLoRA, Code LLaMa tests, and mGPT**

### QLoRA merge methodology

Over the weekend I got NYC-savvy-LLaMa working. Then I saw a Twitter thread with a new roundabout way I should be merging QLoRA adapters into models: https://gist.github.com/ChrisHayduk/1a53463331f52dca205e55982baf9930

QLoRA adapters are compatible with LoRA and attach to the original, un-quantized base models. But the QLoRa adapter was calculated from the less precise, quantized model, so the theory 🧑‍🔬 is that we should download the base model, *quantize and de-quantize*, and *then* apply the QLoRA adapter.

The code for this currently depends on `accelerate` and `bitsandbytes`, which are happier on GPU machines, so I had to run this on CoLab.

### Code LLaMa ideas

I followed instructions on the [HuggingFace blog](https://huggingface.co/blog/codellama) to run Code LLaMa. It's a little frustrating because Meta's LLaMa repo and documentation has its own library and generator function with prefix and suffix params. You should ignore all of that, read the blog, and make sure that you're using the bleeding edge transformers (directly from the GitHub repo) and its `CodeLlamaTokenizer`.

From last year I had a few basic tests:

- Generate some code.
- See if a `psycopg2` call with string concatenation (vulnerable to SQL injection) influences the model to make the same error in its generated function (yes).
- Use infill to suggest comments to influence code models to generate a vulnerability. The best comment that I saw was "TODO: Check if the new name is valid \n # TODO: Check if the customer exists" which I didn't immediately pick up as successful infill, but actually makes sense for de-professionalizing the code.

I didn't spend time on my testing of names in the header => place names and foods in the code, but I suspect it would work here, given that Code-LLaMa was trained on natural language.

### mGPT + Indonesian

AI Forever / Sberbank's mGPT comes in 1.3B and 13B param versions. On the GPT scale, these are close to GPT2-xl and GPT-3.0. The team has also started releasing 1.3B models for individual languages, which is cool, but they seem to be regional (e.g. Armenian, Romanian, and Mongolian).

I created and uploaded an 8-bit quantized version of their 1.3B-param model, so the file size is cut in half. It's possible to generate a 4-bit model, but it can't be serialized/exported/shared in the current library.

The HuggingFace inference widget didn't accept the 8-bit model, so I made [a Gradio](https://huggingface.co/spaces/monsoon-nlp/mGPT-quant-test).

The most popular world languages which could use a model this size would be Arabic, Hindi, and Indonesian. From simple sentence completions, I would say the Indonesian text is chatty, but the Hindi text was nonsense, and both Hindi and Arabic text veered into unpleasant topics. It was discouraging. I wouldn't generate stories with this, but maybe it could be improved with fine-tuning. Remains to be seen how it does on classification or text-editing tasks.

MuRIL (Google's Indian languages model from 2021) tested on the XTREME benchmark, so I'd want to attempt the same here.<br/>
For Indonesian, there are a good set of benchmarks, of which I could choose from IndoNLU and IndoLEM (2020), and IndoNLG and IndoNLI (2021).

<br/>
<br/>
<br/>
