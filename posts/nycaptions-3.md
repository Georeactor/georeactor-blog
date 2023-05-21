---
title: Cartoon ML - Part 3 - Get your own Vicuna
published_at: 2023-05-21T05:13:00.000Z
snippet: Using Salesforce's new InstructBLIP model
tags: ml,codethrough,nycartoon
---

The same day of my last post about the *New Yorker* cartoon dataset, the Salesforce AI people published [InstructBLIP](https://github.com/salesforce/LAVIS/tree/main/projects/instructblip) and added it to their multimodal library, LAVIS. Based on their examples, my idea is to use prompts to request detailed description of the cartoon, or ask if a caption fits the cartoon. Even asking "Describe this New Yorker cartoon." may result in more useful and distinct captions.

Like the earlier visual question-answering models, InstructBLIP combines the BLIP-2 image encoder with a text model (either T5 or Vicuna-7B). The T5 model is too large for me to work with, so I'm going to push ahead with the Vicuna option.

A vicuña is a llama-like animal which Wiki says is the wild predecessor of the domesticated  alpaca. The Vicuna model was posted in late March, fine-tuned on a chat dataset. I'm a little surprised that the Salesforce didn't use a derivative of Alpaca (RLHF instruction-tuned; the original was described by Stanford but never released, sort of a conceptual art project).

The process to get a Vicuna model takes too many resources for CoLab, so you or someone in your group will need to follow these steps locally, then upload your own Vicuna to a Google Drive or something.

- Meta released LLaMA to a select group of people under a limited license. Though the model weights leaked, the standard practice professional world continues to request that you start by obtaining the original LLaMA weights yourself.<br/>
If someone releases their model as delta weights from LLaMA, you *must* use that as the base model. It would be meaningless to apply the delta weights to, for example, models from RedPajama which pre-trained a new LLaMA-like model from scratch.

- Use [a CLI script from HuggingFace](https://huggingface.co/docs/transformers/main/model_doc/llama) to convert the LLaMA-7B weights into the format preferred by the transformers library.<br/>
<code>input_dir</code> must have tokenizer files<br/>
<code>input_dir</code> must have subfolder named "7B" with the weights

- Follow instructions on https://github.com/lm-sys/FastChat to apply delta weights and convert LLaMA HF model to Vicuna.<br/>
At this point I would really like to see a `sha1sum` or something to know that my weights aren't nonsense.

- LAVIS must be installed from its GitHub repo - PyPi isn't updated yet.<br/>
On OSX, I couldn't install one video dependency (decord) and had to remove it and references from one file before installing LAVIS completely.

- Set path to local Vicuna in [lavis/configs/models/blip2/blip2_instruct_vicuna7b.yaml](https://github.com/salesforce/LAVIS/blob/main/lavis/configs/models/blip2/blip2_instruct_vicuna7b.yaml)

**Now you can get LAVIS to recognize Vicuna, and download the InstructBLIP weights to link it to their image instruction code.**

Sample captioning code:
https://colab.research.google.com/drive/1DwXb67J4TjZYr0x-5cUF55fvNguk57Nx?usp=sharing

I was able to run captioning prompts locally on a CPU, though it takes a lot of time even on resized images.

<br/>
<br/>
<br/>
