---
title: Cartoon ML - Part 4 - InstructBLIP describes cartoons
published_at: 2023-05-29T00:57:00.000Z
snippet: Progress with InstructBLIP model, prompting, multiple choice
tags: ml,codethrough,nycartoon
---

[Last week](/nycaptions-3), I followed instructions to recreate the Vicuna model on my laptop and feed it into the LAVIS library. Now I've gotten it working on CoLab (unfortunately it requires an upgrade CoLab Pro).

Here's the updated notebook: https://colab.research.google.com/drive/1DwXb67J4TjZYr0x-5cUF55fvNguk57Nx?usp=sharing

Here's the process:

- I uploaded the Vicuna model into my Google Drive (this won't be publicly shared because it is based on LLaMa)
- I set the path of the Vicuna model in the YAML before running `cd LAVIS && pip install .` - this is a little disappointing as it should be settable in the code
- `load_model_and_preprocess` peaks at 28.5 GB System RAM; the GPU goes to 18 GB; this is where online use requires CoLab Pro (warning: it's not sufficient to buy compute credits).


## InstructBLIP on CoLab, proof of concept

After a few test prompts, I went back to the basic prompt "Describe this New Yorker cartoon in detail."

There are some weaker descriptions, some more successful. These tend to be simplistic, but capture enough elements from the image that we can visualize it and understand why the caption fits:

> two dogs are playing fetch in a field with a stick, and one of the dogs is wearing a hat

**caption**: He identifies with the oppressor.

> a group of people are sitting on a bed with a television in front of them

**caption**: So this is what it's like to be a Nielsen family.

> drawing new yorker cartoon featuring a man sitting in a hammock with a crown on his head

**caption**: I kind of like it when he's away on the Crusades.

> a group of business people are sitting around a conference table, and one person is giving a presentation to the rest of the group

**caption**: Welcome to orientation.

> the robots are sitting at a conference table, and one of them is saying, "i don't think we're going to make it"

**caption**: They're programmed to be idiots, Higgins. What's your excuse?

> a person is climbing up a vine to reach the top of a tree where a business meeting is taking place

**caption**: I thought you said the cloud was secure.

> two men are standing in front of an elevator door, with one man holding a suitcase and the other man looking at him with a curious expression on his face. The cartoon depicts a humorous situation where the man with the suitcase is about to enter the elevator, while the other man seems to be hesitant or unsure about the situation. The drawing captures the moment when the man with the suitcase is about to step into the elevator, and the other man is trying to make a last-minute decision about whether to accompany him or stay behind.

**caption**: We promise there will be no awkward silence.

<hr/>

The last one is part of a subset of descriptions which assign a sincere emotion or context to the participants. These are mostly completely off-base. We (and perhaps text models) can use this to look at the caption and description and make a connection.

Or possibly it helps having a long enough description == some words which will match in the description and caption. This helps find a caption for the right cartoon, but probably doesn't help choose the funniest of multiple caption choices.

> there is a man and a woman sitting at a table in a restaurant. the woman is holding a cup of coffee, while the man is talking to her. In the background, there is an alligator standing on its hind legs, seemingly interested in the conversation between the man and the woman. The cartoon captures a humorous moment as the alligator tries to get involved in their conversation.

**caption**: No, you can't have another customer. You haven't finished the last one.

> A cartoon depicts a man shoveling snow in front of his house. The man is wearing a jacket and gloves, and he appears to be focused on clearing the snow from the sidewalk in front of his home. He is holding a shovel and appears to be determined to finish the task at hand. The cartoon captures the essence of winter weather and the challenges that come with clearing snow from sidewalks and driveways.

**caption**: I found your brother...I'm glad we didn't use the snow blower....

> The image features a black-and-white drawing of an airplane parked on the ground, with a woman standing in front of it. The woman is wearing a dress and appears to be preparing to board the airplane. There are several people visible in the scene, including a man and a woman sitting in the airplane's cockpit, as well as another woman standing near the airplane's wing. In total, there are at least four people present in the scene. The drawing captures a moment of anticipation and excitement as the woman prepares to embark on her journey by boarding the airplane.

**caption**: I’m trying to raise money for our squad. Would you like your plane washed?

## Testing out new prompts

After experimenting again with prompts on a set of difficult cartoons, I've settled on: *"Describe all characters and setting of this cartoon in detail. It may be sardonic or absurdist."* <br/>
Specifying "New Yorker cartoon" led to some descriptions simply being "© 2017 New Yorker"; specifying "people and animals" led to a simple list or denying any were present; "might be" phrasing led to answers like "Yes", and so on. It was confusing the model to have a more coherent "New Yorker cartoons are often sardonic or absurdist." before or after the "Describe ... in detail" sentence.

Here are some successful examples with newly prompted description:

> The cartoon depicts a man standing on a small island in the middle of the ocean, surrounded by palm trees. There are two dolphins swimming near the man, and one of them appears to be talking to him. The scene is set in the ocean, with the man and the dolphins being the main characters. The cartoon may be sardonic or absurdist in nature, as it portrays an unlikely scenario where a man is standing on a small island in the middle of the ocean, surrounded by palm trees and talking to dolphins.

**caption**: I'm thinking now I probably should have just trained them to get help.

> The cartoon depicts a large dragon standing in front of a castle, looking at a small child who is trying to enter the castle. The dragon seems to be blocking the child's way, as if it were guarding the entrance. The scene is set in a medieval or fantasy-themed setting, with the castle and the dragon adding to the atmosphere. The dragon appears to be aggressive or intimidating, while the child may be frightened or unsure of what to do next. The overall tone of the cartoon is likely sardonic or absurdist, as the dragon's presence and the child's reaction create an unexpected and humorous situation.

**caption**: I'm sorry. I've been burned too many times.

> the drawing depicts a group of people sitting around a table in an office setting. One person, who appears to be the boss or manager, is talking to another person, possibly an employee or colleague. The third person in the drawing is a monster with a large mouth and sharp teeth, which could be interpreted as a metaphorical representation of a challenging or difficult situation. The cartoon captures the essence of workplace dynamics and the challenges that employees may face in their professional lives.

**caption**: I wish they would just go back to tapping our phone lines.

> The cartoon depicts a group of people gathered in a forest, with one man standing in front of them. The man is wearing a suit and appears to be giving a speech or addressing the group. There are several animals present in the scene, including a snake, a fox, and a rabbit. The animals seem to be listening attentively to the man's words, as if they are interested in what he has to say. The setting of this cartoon is a forest, which adds to the absurdist or sardonic nature of the scene. The animals' presence and their reactions to the man's speech further emphasize the absurdity of the situation.

**caption**: As a weasel, I need your vote.

## Setting groundwork with the original description -> caption matching task

On the FD-Matching task, a model gets a human-written description, and must choose which of five captions relates to this cartoon.

Random chance is 20% accuracy. In the original paper from September 2022, fine-tuned model accuracy ranged from 59.6% accuracy (T5-Large) to 75.1% (GPT3-175B).

The comparable task for visual models had a high score of 62.3%, and for humans was 94.0%. I would need more time to parse the reported loss of [fine-tuned visual + text models](https://huggingface.co/regisss/bridgetower-newyorker-a100-8x) posted on HuggingFace by Régis Pierrard this week, but this may be the current best.

I added the matching task to my fork of the EleutherAI lm-evaluation-harness. I created a PR to address an unrelated Python typing bug (?) and describe this task.

## Comparing models by accuracy

To show sample results, I started out with a variety of models (GPT2 small and large, T5-Large, FLAN-T5, RedPajama INCITE Base and Instruct) with 0-shot to 3-shot context. This takes a High-RAM instance and a V100 GPU.

These got 24-28% accuracy - slightly better than random choice, but quite blah and unresponsive considering the larger models and contexts. I went back to [the paper](https://arxiv.org/abs/2209.06293) and the original prompt in the top half of Figure 9.<br/>
The prompt includes more information, writes *all* answers, then sets up a single-token response for the log-likelihood metric: A, B, C, D, or E.

I copied the prompt with a couple of changes (they use their "uncanny" description and entity info which I think reveal too much). A long prompt makes the small GPT-2 and other `hf-causal` models drop to random chance, but boosts `seq2seq` type model `flan-t5-large` to 45.8% with a 1-shot context. A `t5` model just barely clears random. I'm wondering if this prompt is too large and getting truncated on other models? I might need to hash this out in the PR.

I also want to fine-tune models on the training data instead of these limited few-shot projects, to get competitive results. The Eleuther repo recommends [PEFT](https://github.com/huggingface/peft)? To be continued.

<br/>
<br/>
<br/>
