---
title: Revisiting 'Which Wiki Edit'
published_at: 2024-02-12T06:27:00.000Z
tags: ml,codethrough,whichwiki
---

In the 2022 paper "Emergent Abilities of Large Language Models", the authors identified
BIG-Bench tasks which show continuous or emergent increases in accuracy vs. model size.
My submitted **Disambiguation** task got highlighted here and in BIG-Bench Hard, and gets some use.
My **Which Wiki Edit** task is generally ignored. The "Emergent Abilities" paper categorizes it as "Flat (no model better than random)" along with tasks such as **Kanji ASCII** art.<br/>
Doing some Google Scholar searches now, I found mentions only for being multilingual (including a note in a Norwegian language benchmark paper).

Looking back from the year 2024, my opinion is that the structure of BIG-Bench missed some creative/novel tasks by focusing on zero-shot English-language questions.
It also missed my original goal, to beat memorization by continually updating the Which Wiki task with new edits via the Wikipedia API.
But it's also my own failing to continue development and tools around it, that have made this task so obscure.

I've wondered whether the task can be learned with the right prompt, or by fine-tuning an LLM. Maybe the way diffs are read, it would be easier for a code LLM?<br/>
Anyway I recently hit on the idea of using Which Wiki multiple choice answers in a RLHF / DPO format. My goals for this include:

- write a script to adapt the existing multiple choice Which Wiki Edit to chosen/rejected responses
- testing a LLaMA vs. Code-LLaMA model on Which Wiki Edit
- download updated English-only edit histories, and release a LLaMA model to answer these

One of the challenges here is how to convert multiple choice into LLM responses. The *New Yorker* cartoon paper wrote all of the responses and then expected the model to generate only the corresponding letter (e.g. 'B').<br/>
For this model's purpose, I prefer training the chosen/rejected part of the model on the text of correct/incorrect responses. If it goes well, we can generate new edit messages, or use log-likelihood/log-probability to pick the 'right' answer in new multiple-choice questions (see: EleutherAI/lm-evaluation-harness).<br/>
I made rows for each correct-incorrect pair, based on how the Intel/Orca DPO dataset is formatted. It looks like OpenHermes DPO supports multiple chosen and rejected responses? This would also be better to avoid leaks between training and validation. Oh well, TBD, a script to generate updating wiki DPO datasets with fixed splits.

I had been thinking of using the TRLX library, but Hacker News today inspired me to try [DataDreamer](https://github.com/datadreamer-dev/DataDreamer). It takes ~70 minutes to train a LoRA for TinyLlama-1.1B-Chat with DPO, 10 minutes to eval.

Here's the notebook! https://colab.research.google.com/drive/157wClbQG1qAnOfD8xPgq_IS1el3RhApC?usp=sharing

Unfortunately the eval step shows loss=0.5 (I believe same as random chance?). Need to rerun this with English dataset + better model.
<br/>
<br/>
<br/>
