---
title: Gene annotation corpora
published_at: 2024-03-17T16:20:00.000Z
snippet: UniProt
tags: ml,data,bioseries
---

In planning an upcoming talk, I've been hoping to find DNA sequences of genes, and text descriptions of those genes, to create a system which learns from both data formats. This dataset / corpus might have been compiled for older models and systems. In the genomics dataset world what I'm looking for is an annotated sequence, hopefully with text, but more likely an ontology (relevant tags).

In some cases the annotation only had a start and end point on a specific genome, and in other cases you can look them up by a gene name (which could be connected to external information). These sequence annotations can cover non-coding DNA. <br/>
On some browsers you can plot other sources' annotations on the same segment, so if a few people agree on this region +/- a few pairs being a gene, that looks pretty solid.<br/>
I read more about FASTA format (which uses codes for amino acids and leftover nucleotides) as an option which might be better for context than FAA (single nucleotides).

Most gene-explaining research is in humans or model organisms such as mice, yeast, and E. coli (for plants, *Arabidopsis thaliana*).
University labs have landing pages and gene browsers for rice and potatoes.
Quinoa is in more general databases.

While looking into this, I became impressed with UniProt.
This database includes proteins from many organisms, allows access through [an API](https://www.uniprot.org/help/programmatic_access)
, and last year added [precalculated embeddings](https://www.youtube.com/watch?v=p4_gGkM-Rfs&ab_channel=UniProt)
for almost all of its proteins using https://github.com/sacdallago/bio_embeddings .

I also was excited about Zhejiang University's [ChatCell](https://huggingface.co/zjunlp/chatcell-large)
 (uploaded mid-February, but now withdrawn on Arxiv?) where they've put gene names and natural language together.
<br/>
Here's their instruction dataset: https://huggingface.co/datasets/zjunlp/ChatCell-Instructions

UC Berkeley's [GPN](https://github.com/songlab-cal/gpn) has been shown to predict genome-wide variant effects. They have uploaded a model trained on eight *Brassicales* plant species (including *Arabidopsis thaliana*).

CEITEC (based in Brno, Czech Republic) has [a set of genome model benchmarks](https://github.com/ML-Bioinfo-CEITEC/genomic_benchmarks)
which were published in 2023. They've kept a little up-to-date, with Hyena being added as SOTA model last month.

When I did my Google and HuggingFace searches, it was good to see leads going back to the GENETAG corpus in 2005.
UniProt might be the best source, as links such as https://www.uniprot.org/uniprotkb/A0A0P0X9Z7/entry include helpful descriptions

> Transcriptional activator that acts as a positive regulator of grain size

but the entry might only indicate an enzyme or be an unreviewed (TrEMBL) entry https://www.uniprot.org/uniprotkb/A0A803KTM7/entry
where the text describes the molecule rather than a biochem function.

> Receptor-like serine/threonine-protein kinase

In an ML corpus these are almost always too short examples for natural language,
so I am thinking to include biology / biochem? text corpora. So the model would have
DNA, natural language, and mixed texts to train on.

<br/>
<br/>
<br/>
