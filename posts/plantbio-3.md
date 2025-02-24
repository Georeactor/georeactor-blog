---
title: Earthy Plant Papers ~2
published_at: 2025-02-24T04:55:00.000Z
tags: bioseries
---

I've been thinking about making my Biorxiv / biology LLM notes into some kind of video
series after I finish the Supreme Court series.
I was thinking that [this paper](https://www.nature.com/articles/s41586-024-08393-x) on AI-designed anti-venoms would be perfect to test the waters.
I kept delaying and now there's an [official Nature podcast interview](https://www.youtube.com/watch?v=dRzDOrc7I3w)
and a bunch of AI-narrated videos covering the story.<br/>
Also I have to come to terms with half of my watch-hours coming from two recent Alice Guo videos (when I had iMovie),
so it is fundamentally not an all-topics channel.
Maybe the biology videos can go on a new channel (to be announced when I have a few uploads).
If it fails, I can recombine the videos, and if it succeeds I don't have to balance everyone's interests.

## News

The soybeans lab at U. Illinois and the cereal diseases lab in St. Paul, MN were closed after severe cuts to USAID and USDA.

"Evo 2" is the big-time eukaryote-inclusive remake of Evo. It's awesome. They left eukaryote-infecting viruses out of the training data, and I've always wondered if this helps or creates a manifold/concept-space of valid-yet-missing virus sequences. The Evo 2 paper takes time to show high perplexity compared to other types of viruses, which doesn't totally satisfy my curiosity but is extremely cool. They also released [their genome dataset](https://huggingface.co/datasets/arcinstitute/opengenome2)
and a "base model" without context-lengthening.
<br/>
Meanwhile Metagene AI trained and evaluated their LLM on wastewater virus sequences… so these aren't at all obscure or beyond the pale. The difference is that the Evo team wants to generate genomes and would rather not be seen churning out viruses.

Why we aren't seeing a boom in gene-editing companies matching the advancements in the science:
https://www.statnews.com/2025/02/06/crispr-gene-editing-medical-breakthrough-not-matched-by-financial-success/

## Concept Papers

With a bunch of recent papers talking about dark proteins, epigenetics, etc. I wanted to highlight this paper which says… 99.5% of transcriptome / proteome / genome studies work the way that they're supposed to under the Central Dogma.

[Revisiting the Central Dogma: the distinct roles of genome, methylation, transcription, and translation on protein expression in *Arabidopsis thaliana*](https://www.biorxiv.org/content/10.1101/2025.01.08.631880v1)

Here's a similar paper which claims that LLMs can re-discover the Central Dogma from scratch:

[Find Central Dogma Again](https://www.biorxiv.org/content/10.1101/2025.02.10.637443v1)

~

Humans have polyploid cells in the liver (?) and they appear to have some interesting structure in their placement:

[Polyploidization in Liver Tissue](https://www.sciencedirect.com/science/article/pii/S000294401300655X)

~

Can mice pass down sensory signals through epigenetics?

[Parental olfactory experience influences behavior and neural structure in subsequent generations](https://pmc.ncbi.nlm.nih.gov/articles/PMC3923835/)

~

Not fully recoding a genome, but editing out some of the redundant stop codons across the whole genome:

[Engineering a genomically recoded organism with one stop codon](https://www.nature.com/articles/s41586-024-08501-x)

~

Protein-protein interaction tasks require structural information. This paper suggests sequence-based approaches are all leaning on the ESM-2 tokens

[Deep learning models for unbiased sequence-based PPI prediction plateau at an accuracy of 0.65](https://www.biorxiv.org/content/10.1101/2025.01.23.634454v1)

Someone in the plant science world recommended I check out [MULAN](https://github.com/DFrolova/MULAN) which merges sequence and structure data from different models

~

[ProtGPS](https://github.com/pgmikhael/protgps) model predicts where a protein will go within a healthy cell. Note that "mamba" is mentioned here but it's the Python package manager  -  [MIT article](https://news.mit.edu/2025/ai-model-deciphers-code-proteins-tells-them-where-to-go-0213)

There's also progress on new benchmark for gene embeddings: https://github.com/ylaboratory/gene-embedding-benchmarks

~

There are some papers about AlphaFold-ology, asking whether protein LLMs are overfitted to existing real-world proteins and can't do as well creating novel and unusual structure proteins

[Have protein-ligand co-folding methods moved beyond memorisation?](https://www.biorxiv.org/content/10.1101/2025.02.03.636309v1)

Also there was interesting stuff on horizontal gene transfer.
There are some papers on a class of ['starship' proteins](https://en.wikipedia.org/wiki/Starship_(genetics)) in fungi including in agriculture and cheeses

[Harbouring *Starships*: The accumulation of large Horizontal Gene Transfers in Domesticated and Pathogenic Fungi](https://www.biorxiv.org/content/10.1101/2024.07.03.601904v3)

And here's a paper on an entire chromosome shifting in a type of fungi which hadn't been thought to transfer genes at all:

[Horizontal transfer of accessory chromosomes in fungi – a regulated process for exchange of genetic material?](https://www.nature.com/articles/s41437-025-00746-0)

HGT was expected in bacteria / prokaryote world, but was shown in fungi (which are eukaryotes) by 2000 and now routinely weirds scientists out when it happens in, for example, fish. This is [a survey paper from 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8401529/) focusing on plants - usually between parasites and viruses and their hosts.

Researchers at Imperial College London got access to Google's 'co-scientist' version of Gemini and generated hypotheses about gene transfer:

[AI mirrors experimental science to uncover a novel mechanism of gene transfer crucial to bacterial evolution](https://www.biorxiv.org/content/10.1101/2025.02.19.639094v1)

## Crop Research

Yerba mate got sequenced! [Yerba mate (*Ilex paraguariensis*) genome provides new insights into convergent evolution of caffeine biosynthesis](https://elifesciences.org/articles/104759)

## Pests

Bacteria / fungi? on leaf surfaces transferred their proteins for digesting cell walls to beetles: https://www.cell.com/current-biology/fulltext/S0960-9822(24)01696-8

A fly has RNA in its saliva which silences genes within a plant: https://plantae.org/double-attack-herbivore-insects-feed-on-plants-and-silence-their-genes/

Some other papers:

Survey of genomic studies of invasive plants: https://nph.onlinelibrary.wiley.com/doi/10.1111/nph.20368

[Improving American chestnut resistance to two invasive pathogens through genome-enabled breeding](https://www.biorxiv.org/content/10.1101/2025.01.30.635736v1)

[Technical Advances Drive the Molecular Understanding of Effectors from Wheat and Barley Powdery Mildew Fungi](https://pubmed.ncbi.nlm.nih.gov/39799551/)

[An Ancient Grapevine Uncorks Clues About a Deadly Plant Pathogen](https://www.the-scientist.com/an-ancient-grapevine-uncorks-clues-about-a-deadly-plant-pathogen-72471)

----




<br/><br/><br/>
