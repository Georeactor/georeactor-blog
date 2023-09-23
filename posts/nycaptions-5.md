---
title: Cartoon ML - Part 5 - IDEFICS
published_at: 2023-09-23T15:11:00.000Z
snippet: Multimodal with a new HuggingFace model
tags: ml,codethrough,nycartoon
---

Two developments:

I saw a Tweet about [multi-modal instruct model IDEFICS](https://huggingface.co/blog/idefics), which was released in August. This offered a newer and more accessible alternative to the InstructBLIP model, so I decided to give it a try. It still requires an A100 to run the 9B-param model.

HuggingFace also recently added community blog posts. For a while I thought about my first post being comments on 5-10 ML papers, then I landed on the idea to write about trying IDEFICS: https://huggingface.co/blog/monsoon-nlp/idefics-newyorker

I like the prompting setup:

```python
prompts = [
    [
        "User: Describe all characters and setting of this cartoon in detail. It may be sardonic or absurdist.",
        image, # PIL object or URL string
        "<end_of_utterance>",
    ],
]
```

This could be used for few-shot multimodal prompts, chat-like prompts, etc.

<br/>
<br/>
<br/>
