---
title: Earthy Plant Papers ~1
published_at: 2024-12-02T05:29:00.000Z
tags: bioseries
---

As promised in my last ML Arxiv Haul, I've decided to separate biology papers and links into a new format.

## Concepts

Two articles pose questions about modern genomics. In studying human cells' actual mRNA (transcriptome) and proteins (the proteome) researchers found alternate proteins formed by transcription errors were common and sometimes more prevalent than the "canonical" proteins (particularly if more stable). This raises questions about whether alternate proteins can be expected by genome-centric analyses, or whether the alternate forms are dependent on other genes (i.e. something a human or LLM could not anticipate looking at genes individually).

**[Alternate RNA decoding results in stable and abundant proteins in mammals](https://www.biorxiv.org/content/10.1101/2024.08.26.609665v2)**

The second explores non-canonical open reading frames. Generally we are talking about proteins derived from short sequences once filtered out of genome analysis. Someone on Bluesky referred to this as "the dark proteome". The same term has been used for proteins with unknown 3D forms (Wikipedia) or for coding genes with no observed protein (ACS).
From 2022 [sample](https://www.cell.com/trends/cell-biology/fulltext/S0962-8924%2821%2900226-9) it seems more common to attribute the term and/or this problem to these non-canonical forms.

**[High-quality peptide evidence for annotating non-canonical open reading frames as human proteins](https://www.biorxiv.org/content/10.1101/2024.09.09.612016v1)**

This year I got into polyploid plants, and here's a new article in support: analyzing genetic drift, it appears chromosome duplication events are clustered around short time periods, such as the K-T extinction which ended the dinosaurs. This vibes well with a recent article that leaf-cutter ants learned to farm fungus during the K-T extinction.

**[The Rise of Polyploids During Environmental Catastrophes](https://www.biorxiv.org/content/10.1101/2024.11.22.624806v1)**

Now for something different - the scientific articles studying heart recipients acquiring some traits of the donors. They talk about food and music preferences, and it seems particularly common for medical literature to report traits associated with the donor's death (such as a fear of water). The MDPI article also notes that recipients may fear a personality change now that this is in the public consciousness. Indeed this was something we talked about when my mom received a bone graft (suggesting it could be from a ballerina or a serial killer).<br/>
I can accept that drowning could encode some kind of biological failure mode signal in a heart, but it's harder to imagine fried chicken or Power Rangers making a direct impression.

**[Beyond the Pump: A Narrative Study Exploring Heart Memory](https://pubmed.ncbi.nlm.nih.gov/38694651/)**<br/>
**[Personality Changes Associated with Organ Transplants](https://www.mdpi.com/2673-3943/5/1/2)**

## Crop Research

I started with the prompt from BioRecap to summarize these papers, but I really wanted  to work toward a list of named genes and associated facts. Then I wanted to catch more specific facts and fit on a T4 GPU, so instead of a full paper I am running each paragraph by Llama 3.2 3B Instruct.<br/>
I need to work on the prompt, because it loves to list species or enzymes when there are no genes in a paragraph. When it sees a list of genes (i.e. names without a fact), it likes to describe what it 'thinks' about something, for example:

> FNSII: Catalyzes the conversion of dihydroquercetin-3'-5'-hydroxylase product to quercetin

FNSII is only mentioned as one of the structural genes, and quercetin is not mentioned in the paper. In reality the FSNII gene/enzyme is involved in the biosynthesis of flavones, and quercetin is a flavonol (different type of flavonoid (?)).

Hard to tell what this means for LLMs because names like FNSII are a unique mash of three tokens, but it  might encourage the LLM to pull out any text or vibes that it has from other papers with the same sequence.

In the meantime my idea is to group papers by crop:

**Cacao**: reference genome was in 2011, paper has a more complete genome, talks about pod color but also discusses other flavonoids
https://www.biorxiv.org/content/10.1101/2024.11.23.624982v1.full

**Rice**: use of wild rice, study of bacterial blight and cold tolerance
https://www.nature.com/articles/s41467-024-53611-9
https://www.nature.com/articles/s41587-019-0267-z
https://www.cell.com/molecular-cell/fulltext/S1097-2765(24)00822-0
https://www.technologynetworks.com/genomics/news/researchers-uncover-cold-tolerance-mechanisms-in-rice-392708

**Maize**: working backward from a "natural experiment" (flood) and identifying fields which did better and may have flood tolerance genes
https://www.biorxiv.org/content/10.1101/2024.11.26.625493v1

**Hazelnut**: reference genome might be 2021? Describes pre-Columbian spread of hazelnut forestry by First Nations of Canada.
https://www.science.org/content/article/indigenous-tribes-engineered-british-columbia-s-modern-hazelnut-forests-more-7000-years

**Groundnut/peanut**: reference genome 2017–2019, looked at several crossbreeds to study drought tolerance genes
https://bmcplantbiol.biomedcentral.com/articles/10.1186/s12870-024-05749-3

**Tomato**: reference genome in 2012, here looking at immune response.
https://www.biorxiv.org/content/10.1101/2024.11.04.621969v1

**Barley**: reference genome around 2017, now using genome alignment to compare wild and domestic types.
https://www.nature.com/articles/s41586-024-08187-1

**Fava bean**: reference genome might be 2023? It's diploid but has a "giant" genome. GWAS study of beans used info from the Göttingen Winter Bean Population ongoing since 1989.
https://www.biorxiv.org/content/10.1101/2024.11.27.624268v1

## Pests

I don't know how to summarize these, but Bluesky has multiple papers about aphids and plant immunity.

**[The conserved aphid saliva chemosensory protein effector Mp10 targets plant AMSH deubiquitinases at cellular membranes to suppress pattern-triggered immunity](https://www.biorxiv.org/content/10.1101/2024.11.15.622802v1)** <br/>
**[Aphid effectors suppress plant immunity via recruiting defence proteins to processing bodies](https://www.biorxiv.org/content/10.1101/2024.11.20.624400v1)**

<br/>
<br/>
<br/>
