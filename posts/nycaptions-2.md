---
title: Cartoon ML - Part 2 - Progress on Multiple Choice
published_at: 2023-05-11T03:39:00.000Z
snippet: Finding code examples to train a multiple choice model
tags: ml,codethrough,nycartoon
---

Two months ago I wrote [a post](https://blog.georeactor.com/nycaptions-1) about the basics of working with the New Yorker cartoon dataset.

## Getting the dataset

The next steps would be seeing if I can get some preliminary results for selecting the correct caption, then seeing if improvements to the model, prompt, or visual context information improves that score.

```
cartoons = load_dataset("jmhessel/newyorker_caption_contest", "matching")

for cartoon in cartoons['train']:
  print('At ' + cartoon['image_location'] + ' : ' + cartoon['image_description'])
  print(cartoon['caption_choices'])
  break
```

The dataset's "matching" mode gives us a location, the human-written description of the image, and five possible captions. The label is given as a letter (A, B, C, D, E) which either needs to be converted to a number or a matching sentence.

Here's what I extracted from the first cartoon:

```
At a bar : Two priests and a rabbi are walking into a bar, as the bartender and another patron look on. The bartender talks on the phone while looking skeptically at the incoming crew.
['Tell me about your childhood very quickly.', "Believe me . . . it's what's UNDER the ground that's most interesting.", "Stop me if you've heard this one.", 'I have trouble saying no.', 'Yes, I see the train but I think we can beat it.']
```

## Choosing a framework

From some Googling, I found that [HuggingFace Transformers](https://huggingface.co/docs/transformers/tasks/multiple_choice) and [Lightning Transformers](https://lightning-transformers.readthedocs.io/en/latest/tasks/nlp/multiple_choice.html) have multiple-choice examples. To my dismay, unlike other tasks which have a built-in pipeline to insert dataset, model, etc, these example codes make multiple-choice questions seem like a weird hack rather than a common task, would not run correctly on CPU, etc.

I modified the HuggingFace example to accept a sample of my dataset and start training (with a batch size of 1, to ignore an issue with mismatched length of data). The `AutoModelForMultipleChoice` class does not accept GPT-style models, so I followed their example's choice of `bert-base-uncased`.

From this experience, I found how to format this dataset but I needed an up-to-date, GPT-friendly multiple choice runner. I remembered two systems - the BIG-Bench multiple choice runner, and EleutherAI's [evaluation harness](https://github.com/EleutherAI/lm-evaluation-harness), which comes with docs for how to reformat my multiple choice dataset as a task. I see that as my next step.

## Getting closer to new Universal *New Yorker* Captions

Meanwhile, I asked Bard and ChatGPT about *New Yorker* captions. Bard would not engage. After I asked ChatGPT if it was familiar with the 'universal' captions, it created only specific captions, including:

```
"I can't believe I forgot my glasses again."
"Well, that's the last time I take fashion advice from a scarecrow."
```

When I criticized these, and gave two 'official' universal captions as examples, ChatGPT responded with these:

```
"I should have read the fine print."
"Well, that didn't go as planned."
"I've reached the peak of my multitasking abilities."
"Note to self: Avoid Mondays at all costs."
"I never thought I'd miss dial-up internet until now."
"Looks like my shortcut turned into a detour."
"The hazards of overthinking in 3... 2... 1..."
"Sometimes the best response is just a blank stare."
"Who needs luck when you have duct tape?"
"I never imagined my life would become a series of browser tabs."
```

Of these, I think the 'fine print' and 'multitasking' ones have potential for being humorous as universal captions, with 'didn't go as planned' and 'blank stare' as honorable mentions for being *New Yorker*-y.

<br/>
<br/>
<br/>
