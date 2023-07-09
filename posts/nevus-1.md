---
title: An unexpected dive into fundus photography and ML
published_at: 2023-07-09T15:45:00.000Z
snippet: Can computer vision tell a choroidal nevus from a melanoma?
tags: prose,ml,health,metaphysics
---

**Can computer vision tell a choroidal nevus from a melanoma?**

This week, I went to an optometrist and we reviewed Mars-like images of the back of my eyeball, using the latest in a 100-year-old field known as [fundus photography](https://en.wikipedia.org/wiki/Fundus_photography) (this was quite cool; the article includes a few photos).

A choroidal nevus is a mole which occurs in an eye of ~5% of white American adults (one article said an eye doctor sees them daily). A specialist needs to review the location, size, thickness, and internal fluid compared to any previous images to estimate the risk of this interfering with vision or becoming a melanoma. Because I have been putting off eye appointments for years, we don't have context and it's a bit sketchy for now. Looking through datasets of similar cases has put my mini nevus into context and been something of a relief. Considering how common these are, it is quite rare for them to become cancerous. I decided to do a deep dive into ML data around this detection.

## Existing Models and Survey Papers

There is HuggingFace content which mentions melanoma and nevus classes, but these typically focus on skin cancer. Similarly the study *Distinguish the Value of the Benign Nevus and Melanomas Using Machine Learning: A Meta-Analysis and Systematic Review* is in dermatology.

Early this year, two people uploaded fundus-related Spaces:

- Jason Fink uploaded a Space called DeepFundus which rated my eye 92% normal (the next non-zero classes included other conditions which I don't have). Jason's GitHub indicates he's working on a web app for fundus photos.
- Dongsheng Zhu has a Space called fundus_img. I forked this, updated to PyTorch 1.11, and added environment secrets to get a functioning Space. Running took too long and I did not see the results. When I translated the label classes, I did not see nevus/melanoma among these, so it's not useful for my project.

## Datasets

After failing to turn up data on HuggingFace, I found a 2018 ICML workshop on nevus photos, which draws from [28,000](https://imagebank.asrs.org/) images hosted by the American Society of Retina Specialists (ASRS), coincidentally based in Chicago. Only 131 are specifically tagged with choroidal nevus, with just two in the past year (is this site losing momentum?).

A good deal of research into fundus imaging focuses on screening patients for diabetic retinopathy, "the most common cause of blindness in working-age adults". EyePACS currently has over 5 million images related to this screening. Kaggle hosted a competition with them in 2015, and with a separate group (Aravind Eye Hospital, which does screenings across India) in 2019. The community posted a resized and cropped combination of the datasets here: https://www.kaggle.com/datasets/benjaminwarner/resized-2015-2019-blindness-detection-images

## Research

A *White Paper on Ophthalmic Imaging for Choroidal Nevus Identification and Transformation into Melanoma* notes the difficulty of this problem:
> Using fundus photographs taken with a specific digital fundus camera with a preset width of field, image magnification, and resolution, and from patients of similar race could add bias to the results, precluding their generalizability

The recent Cleveland Clinic paper *[A Prediction Model to Discriminate Small
Choroidal Melanoma from Choroidal Nevus](https://pubmed.ncbi.nlm.nih.gov/35356604/)* is highly relevant, but suffers from a small private dataset (123 training, 240 validation from another clinic taken between 1997–2001, half of these positive melanomas; half stable for 2+ years). After a closer read of the paper, measurements and other patient info (such as sex) are entered into a tabular model. When analyzing feature importance, they get the same variables that you'd expect from reading other articles on the condition:
> Patients with melanoma were significantly younger, more frequently male, more frequently presented with symptoms, more frequently located closer to the optic disc and fovea, had a larger largest basal diameter and height, more frequently had SRF and orange pigment, and less frequently had drusen

I assume the measurements came from optometrists or trainees, so I wonder if they could measure without bias for whether it looked good or bad to them overall?<br/>
In a press release, an author of the paper discussed the potential of a model to reduce overtreatment (estimated 25% in retrospective cases).
https://consultqd.clevelandclinic.org/choroidal-nevus-or-melanoma-machine-learning-based-model-may-help-improve-diagnosis/

A new paper *Explaining Eye Diseases Detected by Machine Learning Using SHAP: A Case Study of Diabetic Retinopathy and Choroidal Nevus* came out last month, but I don't have access.

I picked up on three main reasons for choroidal nevus vs. melanoma being under-researched:
- it is uncommon compared to other issues diagnosed with fundus photography
- traits of a problem nevus are generally agreed on (the Cleveland Clinic trusted they could use a table of measurements rather than raw image)
- a person with a nevus should get regular screenings, rather than trying to predict at one point in time

## Aside on probability

A patient walks into an optometrist after several years with a previously undetected choroidal nevus and no other issues. From the doctor's perspective, this looks like a developing problem. When I booked a follow-up, she wrote "4–6 weeks is the latest I would get seen for this".

From my perspective, within 10 days I hitched a ride with a man having an eye problem, got pestered about not using my health benefits, watched a video about the view from an upcoming hike, decided to get new glasses now that I've settled down, then this happened. Most of that was medically irrelevant, but from my perspective the optometrist visit was not a red flag, and finding a time-sensitive problem in this chain of events would be wild.

Anyway I'll agree to keep monitoring (really struggling not to say "keep an eye on it"). I think this could be a case study on Bayesian probability. For example:

- If my glasses got broken and required me to visit the optometrist, would the probability of this being a problem nevus be the same?
- When I hitchhiked, what if I got picked up by an optometrist? Maybe this lowers risk (explains me booking the appointment, increases coincidence if I did have a serious undetected eye problem). Does the effect vary depending on number of optometrists in Upper Peninsula Michigan?
- Possibly I've had a nevus chilling there since birth, like any other freckle. Suppose we could look up the equipment available XOR the Yelp rating for my ophthalmologist when I was a kid in New Hampshire. Which info would we want?

<br/>
<br/>
<br/>
