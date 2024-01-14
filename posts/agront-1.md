---
title: Trying out a Plant DNA LLM
published_at: 2024-01-14T05:06:00.000Z
snippet: AgroNT
tags: ml,codethrough,bioseries
---

AgroNT, a foundation model trained on plant genomes, made it into my ML Arxiv Haul posts two months ago. This week, InstaDeep made the 1B parameter [model](https://huggingface.co/InstaDeepAI/agro-nucleotide-transformer-1b) and [their benchmarks dataset](https://huggingface.co/datasets/InstaDeepAI/plant-genomic-benchmark) available on HuggingFace.

I first looked into their gene expression task for rice. Unfortunately this is unconventional structurally (task output is multi-value regression) and each sequence is 6,000 base pairs (1,000 tokens) long. You can try inputs and outputs (inference), but it did not work for training the model on a CPU (crashed RAM) or on a medium GPU.

When I moved on to the `promoter_strength.leaf` task with much shorter sequences (170 base pairs), I was still getting the GPU issues. So I hadn't understood the issue.<br/>
My current thought (though I'm not satisfied with this answer) is that the input is super-padded to the full context window regardless of length. That's reported to be 1,024 tokens, but the model config says 1,026 (?) and the GPU might be further reserving space by powers of 2? The model is 4GB, somehow batches of 4 examples add 16 GB (so on CoLab you need an A100 GPU already). I did a batch of 16. A100s are expensive, though.

Also you need to turn off the default `safetensors` save format due to "non-contiguous tensors".

Notebook / scratch pad: https://colab.research.google.com/drive/1RZtL1odT69FVtiJRPPSDmnyuVM4koIJj?usp=sharing

Over 1 epoch / 20 minutes, training loss continuously decreased from 1.5 to 0.78; this suggests to me that the model was truly getting better at the problem and not memorization or random noise. I should've logged an R² value to compare to claims in the preprint.

### Notes

The architecture is `EsmForMaskedLM`, based on a Facebook ESM model for proteins.<br/>
Could quantization help? I was able to load the original model with `load_in_8bit`, but ESM model type isn't built into PEFT, so any fine-tuning would need some customization or at least an explanation why some RoBERTa-like code isn't working for me (`only Tensors of floating point dtype can require gradients`).

If the GPU issue is its design for very-long-context tasks, it'd be worthwhile to manipulate the model or develop smaller models for the smaller tasks. The paper recommends going in the other direction - a 6,000-token context to improve on the chromatin task.<br/>
`promoter_strength.leaf` is based on the tobacco leaf, so next time I'd experiment more with the "protoplast" task for maize. Source of the promoter datasets: https://github.com/tobjores/Synthetic-Promoter-Designs-Enabled-by-a-Comprehensive-Analysis-of-Plant-Core-Promoters/

I had to dig a bit to figure out why the gene expression output had seven values - these reflect expression of the gene in 7 tissues in a rice plant. Other plants have as many as 56 samples.<br/>
It would be neat to have a model with natural language for more context around the task, or explaining influential base pairs in the output (the original paper discusses importance / influence of specific tokens).<br/>
Maybe all users are domain experts, maybe a pattern across 6,000 base pairs is not conducive to human explanations, maybe the thought was it's tricky to bolt this onto a LLaMA-like natural language model. 🤷

<br/>
<br/>
<br/>
