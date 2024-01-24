---
title: HyenaDNA, scGPT, and Mamba in CoLab
published_at: 2024-01-24T02:27:00.000Z
snippet: Alternatives to AgroNT
tags: ml,codethrough,bioseries
---

Earlier I tested out the [AgroNT](/agront-1) pre-trained model for plant DNA.
A comment on an unrelated Reddit thread led me to explore a few different options and make sure I know how to run them in Google CoLab. Two of these models are new to the conversation so I should add detail.

CoLab Link: https://colab.research.google.com/drive/1IftmvxqR0uU1pj9mrHVFMdmBcWNIKh8d?usp=sharing

## HyenaDNA

I had forgotten about this Stanford project which I covered in September's Arxiv Haul: https://github.com/HazyResearch/hyena-dna

This *is* very GPT-like in that its an autoregressive, next-token-predicting model. It's pretrained on the human genome.

Don't run `pip install -r requirements.txt` because it will go back to older PyTorch and CUDA versions and mess with the CoLab environment.

I ran the medium-size `LongSafari/hyenadna-medium-450k-seqlen` model. Other models on their HuggingFace page range from 1k to 1mm parameters. The code adds single-nucleotide tokens ACGT and N (unknown) and it raises an error in current versions of the Transformers library, so it might be helped by some code updates.

## scGPT

I mentioned this model in [the previous post](/agront-2). The recommended model is pretrained on the human genome, but they have subsets based on particular organs. Models are distributed on Google Drive.

Don't run `pip install scgpt` - there is an issue where they used Flash Attention v1 and it can take 30+ minutes to build this old version (?).

I ought to keep working on this to decouple the example code from W&B.

## Mamba

The [Mamba paper](https://arxiv.org/abs/2312.00752) was released on December 1st and has raised attention for being a sequence model without the transformers / attention architecture. Weights are released on their HuggingFace for use with the "transformers" library, even though it is something different.

[On Reddit](https://www.reddit.com/r/MachineLearning/comments/19cwf65/comment/kj1uzms/?utm_source=reddit&utm_medium=web2x&context=3) someone said that long sequences made the model useful with DNA sequences. That's covered in the paper's "DNA Modeling" section 4.3 and appendix E.3. The authors based their input on HyenaDNA (they also used single-nucleotide tokens) and compare favorably to HyenaDNA results on Great Apes species classification.

There were [some CUDA env vars](https://github.com/pytorch/pytorch/issues/107960#issuecomment-1783432552) that I needed to add for CoLab compatibility.

There's been interest on the GitHub to try the DNA models, but [the author responded](https://github.com/state-spaces/mamba/issues/67) to an issue, saying this part of the research was done with an unreleased "slightly earlier version of the model" and were "trained mainly to investigate scaling laws". This explains the paper's interest in technical properties of HyenaDNA and less investigation of Mamba's applications here.

<br/>
<br/>
<br/>
