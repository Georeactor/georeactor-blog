---
title: Preparing the quinoa ML model
published_at: 2024-03-31T12:48:00.000Z
snippet: A recipe and a dive into polyploidy
tags: ml,bioseries
---

In two months I'm going to be talking about LLMs and quinoa DNA. Here's a collection of intermediate updates.
My plan for the talk is 5 minutes each on bio background, existing LLM research, my own new stuff, and Q&A.

### Code updates

- The blog post on protein embeddings was posted on LinkedIn by a SentenceTransformers maintainer and got 100+ reactions there. Is this good?
- I uploaded a dataset of proteins from crop species and wild relatives ([GreenBeing](https://huggingface.co/datasets/monsoon-nlp/greenbeing-proteins)) but it feels too early for another HF community blog post. Maybe when I have a model trained on it? I could mention it on `/posts`, but after I accidentally posted and deleted, I need to wait 24 hours to post again.
- Each split on GreenBeing has different schema, so the datasets library initially wouldn't download it. I needed to add some YAML for each to have their own named config.
- To resume pretraining LLaMA, I found code from Axolotl and PyTorch Lightning. Axolotl is more oriented toward LoRAs so it's written for pretraining datasets to have a specific format. I've written a PR to make it flexible enough for GreenBeing and other datasets. Will need to add unit tests.
- The International Potato Center (which also handles quinoa) launched an [AI ideas hackathon](https://cipotato.org/event/ai-griculture-challenge-hackathon-2024/) this month. It's great that they are interested in AI, but ugh I saw this late, and it could be tricky to reach out about collaboration outside the hackathon framework?

### Bio updates

- I researched more about cañihua/kaniwa, which has a common ancestor with quinoa millions of years ago. I made [this soup recipe](https://vibrantwellnessjournal.com/2019/12/01/how-to-cook-with-kaniwa/) with 50–50 cañihua and quinoa.
- Cañihua had a genome published in 2019, yet UniProt has only 6 of its proteins. I don't understand how this works, then? We wouldn't know the function or how common they are in the actual proteome, but the proteins could be uploaded unreviewed, like with quinoa.
- Cañihua is diploid with nine pairs of chromosomes. Quinoa is tetraploid - as a hybrid it has two subgenomes which then got doubled. Polyploidy is the norm in some of our favorite crops: wheat, potato, banana, sugarcane, coffee, and soybeans.

OK this is a tangent, but... I am becoming polyploid-pilled.
It's very cool. You are getting plants with extra copies of genes and more options for hybridization. This makes good plants better. 

Rice is diploid but there are decades of experiments with tetraploid rice and hybridization:

> Polyploid plants are characterized by large size, high nutrient and secondary metabolite content. They also show strong vitality and adaptability, drought and cold resistance, and other advantages. [...]
> Compared with diploid rice, polyploid rice has advantageous agronomic traits which have attracted the widespread attention of rice researchers, such as large grain size, high 1000-grain weight, strong stem, strong stress tolerance, and high adaptability. Polyploid rice was first discovered and reported by Nakamori in 1933 <br/> https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7996342/

Wild asparagus can be polyploid, which inspired researchers to induce polyploidy in the cultivated species, for resilience. https://www.sciencedirect.com/science/article/abs/pii/S0304423819310544

Chili peppers are generally diploid, but [dalle khursani](https://en.wikipedia.org/wiki/Dalle_Khursani) is a polyploid chili grown in West Bengal, Sikkim, and Nepal.

Maize/corn is diploid, but there are papers online about it diverging from a tetraploid genome 10–12 million years ago.

Special 2001 monolith shout-out to a recent hexaploid genome:

> Bread wheat […] is a young hexaploid species formed only 8,500–9,000 years ago <br/> https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9252504/

<br/>
<br/>
<br/>
