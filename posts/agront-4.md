---
title: LLaMA 3 and Nucleotide-level Tasks
published_at: 2024-05-07T03:52:00.000Z
snippet: Trying out new models
tags: ml,codethrough,bioseries
---

My series of bio-LLMs has gotten to a bit of a crossroads, where I need to invest some $ into fully pretraining and finetuning, getting a holdout dataset to test LLaMA 3 + quantization + LoRA, adding bio-tokens, or some combination. 

A good deal of new research (AgroNT, Evo, Caduceus) is based on DNA / nucleotide-level problems.
So I should take a break from the amino acid sequences.
These models can help predict epigenetic factors, gene expression, and protein locations within the cell. The long context of Microsoft's Phi-3, or tool use with Cohere's Command R Plus, would be helpful. Ultimately I decided my baby project should use LLaMA 3–8B. Gradient AI and Crusoe AI used RoPE to make a 262k-token context version of the instruct model (https://huggingface.co/gradientai/Llama-3-8B-Instruct-262k) - though its utility is debated.

My impulse for the script was to split the kaniwa genome into segments (~20k nucleotides to fit multiple batches on a GPU), and keep an Alpaca-inspired format for each example. For the Annotation section I don't know what the sequence does, so I put basic facts with a randomized pattern. With Unsloth for quantization help, I did training for 3 hours (I count 280 steps = 840 prompts = ~16 million nucleotides?).

CoLab Notebook for kaniwa pretrain: https://colab.research.google.com/drive/1XZcCYGFQGtz3_AKSR4F67WYXl6DIwP4R?usp=sharing

> Aside: I should admit some real doubts. Other people aren't mixing models like this, and it's messing with the instruct, and the context and training aren't intensive enough. Maybe this can be a simple prototype, maybe it looks halfway decent at DNA and natural language, maybe the point is to introduce research concepts for the event and jobs and you get inspired to later train it for 10x longer. <br/>
> It'd be cool to have a bunch of powerful DNA models that you can chat with. But maybe these won't work and the existing DNA-specific models would be better. The potato researchers didn't write back so I'll consider contacting other research centers. This time maybe could've been spent on something more realistic, coauthoring a paper, or hanging out on the right Discords. <br/>
> Hmmm.

Anyway… because my original training was done with a LoRA adapter, I don't need to reinitialize a LoRA model for Unsloth. Most of the AgroNT tasks are binary classifiers, and they're broken down by plant species. I decided to finetune on `lncrna` (whether a sequence is Long non-coding RNA) for maize/corn. The longest sequences are 6,000 base pair, so I allow 8,000 tokens for this Q&A format.

This sounds like an 'easy' task. In the AgroNT paper they got:

> an AUC of 0.991, which was comparable to the reported performance of lncRNA-LSTM (0.9934)

CoLab notebook for task finetune: https://colab.research.google.com/drive/1edDAKQBzYW6X0lXGg-_AHYa3a3VhTpTs 

Unfortunately in my adaptation of EleutherAI/lm-evaluation-harness for this purpose, the LLaMA models respond "Yes" for every sequence. This left no difference between the original LLaMA 3, 'DNA-pretraining', or even the fine-tuning on this specific task (I'm pretty sure I shuffled before training, right?).

CoLab notebook for eval: https://colab.research.google.com/drive/10OHqe29cFeZGk4Fhb-yPnWkiAMsR8tZr?usp=sharing

So the next step has to be using the bio-tokens and seeing if the LoRA can add some meaning there.
<br/>
<br/>
<br/>
