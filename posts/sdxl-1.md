---
title: Catch-up with the SDXL ecosystem
published_at: 2024-01-31T20:54:00.000Z
snippet: Testing out image gen, LoRA, ControlNet
tags: ml,codethrough
---

**Testing out image gen, LoRA, ControlNet**

I've done a little work with language models, but never had time to take a real dive into the Stable Diffusion ecosystem. About six months ago, their team released SDXL, for larger high-quality images. The HuggingFace code samples are pretty clear, so I was up and running quickly with that.

A second example uses a 'refiner' model. I wasn't familiar with this part? Reddit discussion: https://www.reddit.com/r/StableDiffusion/comments/15ah7uj/can_someone_explain_what_the_sdxl_refiner_does/

<img src="/blog-images/sdxl-rothko-skyline.png" width="450"/>
My evergreen city skyline + Rothko prompt, SDXL Refiner
<br/><br/>

Next I tried the "HelloWorld" LoRA-fied model from LEOSAM on CivitAI. I've been seeing CivitAI come up again and again as the GitHub/HuggingFace for sharng these image LoRAs. The UI is a bit noisy, maybe more like a download site or DeviantArt feel? It seems to be less in public consciousness?<br/>
But Midjourney (and to some extent Stable AI) have the feel of a Discord with a business card, so we can forgive.

Another positive about CivitAI is the sign-up / settings gives you more granular control over types of sensitive media - at the most strict settings it blurred the image of a Lego sword.

DynaVision, a 3D animation style model, has the comment:

> Very beautiful model! Made a lot of content with it, but run in to trouble generating humanoid lizard folk (e.g. killer croc from Batman or Lizardman from Spiderman).

Civit has a Bounties market which pulls strings across the spectrum of all human interests but also this awareness that you are scrolling past a random stranger's interest in a minor celebrity.

<img src="/blog-images/sdxl-bounties.png" width="450"/><br/>

The code for running a LoRA-fied model is similar to previous work, but somehow difficult to find examples. If you have one safetensors download based on SDXL, you want to create the pipeline with:

```
from diffusers import StableDiffusionXLPipeline
pipe = StableDiffusionXLPipeline.from_single_file("./320950.safetensors")
```

This isn't that complicated, but I think it's gotten buried with layers of new models, CLI and UIs, etc. for calling StableDiffusion.

<table border="0">
<tr>
<td>
<img src="/blog-images/sdxl-open-skyline.png" width="400"/>
</td>
<td>
<img src="/blog-images/sdxl-ta-skyline.png" width="400"/>
</td>
<td>
<img src="/blog-images/sdxl-ko-skyline.png" width="400"/>
</td>
</tr>
</table>

The images fall into the uncanny valley when you give them a look-over but it was cool to create something from some basic prompts. For the Chicago skyline, the model is fixed on making the John Hancock building with what I'd call a "stepped pyramid" design. Maybe it's clashing with the 90 degree angles of the Sears Tower which could also appear in the skyline.<br/>
Also it's true what they say about hands and AI! Protect the hands!

**Should I be running the refiner after every LoRA?**

I didn't see a notable difference on my HelloWorld people images, but it was part of this epic Hong Kong neon skyline photo:

<table border="0">
<tr>
<td>
<img src="/blog-images/sdxl-hk-skyline.png" width="400"/>
</td>
<td>
<img src="/blog-images/sdxl-hk-graduation.png" width="400"/>
</td>
</tr>
</table>

In [this Reddit thread](https://reddit.com/r/StableDiffusion/comments/161eskt/whats_the_point_of_sdxl_refiner/) the advice is to use it for detailed background and photoreal human faces, but not for animation (the DynaVision model specifically advises against this).

**Is there only a market for one super-photoreal LoRA?**

CivitAI has a lot of specialized cases including anime, Pixar styles, etc. In the command-line and ComfyUI interfaces you can add parameters and negative prompts / training to nudge outputs in different directions.

There's also a lot more to understand about LoRA-ology, like how many samples should I use to generalize a style, are there particular groupings based on which layers are weighted, or by mode (i.e. anime vs. photorealistic). I'd like to understand these and LoRA combinations (and possible subtractive LoRAs?) better.

**What about the newer "sdxl-turbo" system?**

It has some disclaimers on it, I don't think the LoRAs are there for it.

**What about ControlNet? When do I use it over a LoRA when working with SDXL?**

I found a guide: https://stable-diffusion-art.com/controlnet/ - both this and SDXL can do img2img, but with ControlNet the original image holds a great deal of influence (the prompt is essentially how you would instruct the artist: take image A and replace these things / insert a real person in the sketched pose).<br/>
From a text model perspective I would say ControlNet is one instruct model and LoRAs are fine-tuned for one task (but as we saw in HelloWorld, the task can be a broad photoreal quality thing).

For comparison:
- Generating Lego items with LoRA: https://civitai.com/models/205580/legoxl
- Lego-stylized images ControlNet (some examples on the site indicate it's hit or miss) https://www.reddit.com/r/StableDiffusion/comments/16e5jrk/legofy_anything_controlnet_workflow_in_comment/
- Lego to realism ControlNet https://www.reddit.com/r/StableDiffusion/comments/15phcet/lego_builds_reimagined_via_sdxl_controlnet_canny/

I ran "lego Jefferson Memorial in DC" with Lego LoRA, via the CivitAI UI - this saves the models and LoRAs in the image metadata, so you can post them and get them linked. (I didn't see a way to claim images which I had generated outside the platform with HelloWorld.)

<table><tr>
<td>
<img src="/blog-images/sdxl-jefferson.jpeg" width="400"/>
</td>
<td>
<img src="/blog-images/sdxl-jefferson2.jpeg" width="400"/>
</td>
</tr></table>

Note that the inner space of the memorial seems to be dark glass bricks instead of open air.

With [L3GO Box LoRA](https://civitai.com/models/240432):

<img src="/blog-images/sdxl-jefferson3.jpeg" width="450"/>

Compare to real but unofficial or non-Lego block builds:

<table><tr>
<td>
<img src="/blog-images/sdxl-jefferson-4.jpeg" width="400"/>
</td>
<td>
<img src="/blog-images/sdxl-jefferson-5.jpeg" width="400"/>
</td>
</tr></table>


I want to fully explore ControlNet with artsy digital maps, where the input and output images would be factually accurate and the model is applying some noise or enhancing the original style. Making it look more realistic / model railroad village-y, then I overlay the labels so they don't get scrambled during diffusion? TBD.

<br/>
<br/>
<br/>
