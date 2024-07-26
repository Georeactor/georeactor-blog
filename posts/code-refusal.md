---
title: Abliterating Refusal and Code LLMs
published_at: 2024-07-26T04:26:00.000Z
tags: ml,codethrough
---

I did a post about CodeLlama and the paper "Refusal in LLMs is mediated by a single direction" on HuggingFace: 
https://huggingface.co/blog/monsoon-nlp/refusal-in-code-llms

This comes with a CodeLlama model without safety parameters, and another version where I 2x'd the intervention vector.

Some takeaways:
- the modified model can engage with forbidden topics (nuclear energy) and write damaging scripts
- the modified model still refuses to help with a keylogger, when using `[INST] ... [/INST]` prompt format from Llama 2
- the 2x'd model repeats the prompt or other nonsense instead of refusing or assisting on safety-related code
- it might help to use coding-specific safety dataset

<br/>
<br/>
<br/>
