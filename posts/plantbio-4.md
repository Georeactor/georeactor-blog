---
title: Bio + LLM thoughts
published_at: 2025-03-18T03:03:00.000Z
tags: bioseries
---

I have been cooking these for some time and rarely making progress (because I am supposed to be working on a few other things). Writing these down might help get me on the right track.

**Plant-Based LLMs list** - I update [this page](https://mapmeld.com/plant-based-llms/) occasionally when something comes out, like Evo 2. And I subscribed to new citations of some key papers. But I'd like it to maintain example notebooks for inference and fine-tuning, especially for rare architectures (e.g. Plant-Caduceus) which can't just be LoRA'd.

**Genetic counselor Q&A datasets** - for context, this is a patient-focused role where they might answer questions about family history, risks of passing traits to kids, interpreting test results, etc. ([video](https://www.youtube.com/watch?v=k8E0klEbKBU)).
I did a little deep dive and made [a multiple choice dataset](https://huggingface.co/datasets/monsoon-nlp/genetic-counselor-multiple-choice) based on flashcards for the certification exam,
and [free response questions](https://huggingface.co/datasets/monsoon-nlp/genetic-counselor-freeform-questions) from queries on the genetics subreddit.<br/>
There's dissatisfaction with the job market and AI in the GeneticCounseling subreddit, so I should tread lightly on the concept of training or evaluating an LLM in this space.<br/>
When I searched HuggingFace for relevant projects, there's a Japanese-language model from NAIST's Social Computing Lab which was set up in fall 2023 and uses a LoRA (so it was trained on something?) but I haven't found other ML models and datasets.<br/>
I wanted to test this on one of DeepSeek's reasoning models, and discovered that evaluation libraries aren't generally set up for this (it looks for next token instead of waiting for &lt;/think&gt;)
and ended up submitting a pull request.

**Fine-grained protein pairs for GreenBeing** - I didn't confirm this yet, but I believe that the underperformance of last year's Matryoshka embeddings model on TAPE comes from training on a mix of big and small paired proteins and no tiny changes.
This would update my GreenBeing dataset strategically. It's a little odd because I would need to make a DB of embeddings and do queries just to remake an embeddings model? At that point can I show that a new model is still needed?

**Bioinformatics tool-use LLM** - on my todo list for a while, I think I could pick a big GitHub org and then train just on those tools and their tests.

**Pangenomic LLM** - Nucleotide-level LLMs are either training on a very-duplicated genome dataset (Evo 2), or there's semantic/clustering-based deduplication (TattaBio / OMG) based on text LLM research. I was thinking, if we know a gene is only in some accessions, or there are two alleles, instead of reading in both versions, I think it might be interesting to encode those nucleotides differently.
The rational response is, it's the same as training on two similar sentences, we want to see the differences in their larger contexts, but:
- there's plenty of room for more than four nucleotide tokens
- Evo 2 research emphasizes that frequent patterns in training corpus = lower perplexity = better genetic fitness. This could maybe be flawed because we can't deduplicate, it's biased by genome collection and not population, and I might want to explore rare and diverse results (e.g. wild relatives of crops).
- Newer research shows genetic variation in the same field, or an equilibrium in some bio-zones where both alleles are present in a certain ratio.
- I'd actually like to train or encode that ratio / prevalence / association of these alleles as I read the pangenome

I'm not super-confident in the idea. But I see there's some research across multiple genomes from tea or potatoes.

**Reading facts out of scientific papers** - this is almost a classic NLP task for models, reading new scientific papers and attaching them to genes in a genome browser.
Probably this could start with a dataset of PDF source, gene name, source sentence, fact learned from sentence. There's probably more data available in wheat / GrainGenes
and then this could be repurposed for under-researched crops like quinoa.

**Block diffusion** is a new hybrid GPT / text diffusion model. There are some GIFs online which reminded me of *Arrival* or maybe the emergence of bidirectional DNA writing. I have no idea how well this would work for genetics, but worth research.
There isn't a super-long context window, but maybe I go back to the six nucleotides / token model.

OK this last one isn't LLMs but in my mind at the moment - **CRISPR for trees**? Genetics-informed plant breeding is on a roll right now without gene editing,
but if you think about orchards which take years to yield fruit, there's less flexibility to tease out specific genes with trial-and-error or cross-breeding.
You would want to inoculate trees or use "gene circuits" to activate specific genes in each tree or at different stages in development.


<br/><br/><br/>
