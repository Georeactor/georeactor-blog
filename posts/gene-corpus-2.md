---
title: Gene annotation corpora ~2
published_at: 2024-05-11T01:26:00.000Z
snippet: GrainGenes web search and apocrypha
tags: ml,data,bioseries
---

When I downloaded plant proteins (annotated or not) from UniProt
into the [GreenBeing dataset](https://huggingface.co/datasets/monsoon-nlp/greenbeing-proteins),
I figured that I had collected an up-to-date databases of ALL well-known genes for those plants.

In April, the International Wheat Genome Sequencing Consortium hosted 
[an online talk](https://www.youtube.com/watch?v=GPQw58qyzZo&ab_channel=InternationalWheatGenomeSequencingConsortium) about 
[GrainGenes](https://wheat.pw.usda.gov/), a USDA website for wheat and oats.
It aspires to be a clean dot-gov:

<img src="/blog-images/graingenes.png"/>

Anyway they host a [Wheat Gene Catalog](https://wheat.pw.usda.gov/GG3/wgc) which is part of a larger project to make names for genes more consistent between research groups.
When I clicked around, I found genes were highlighted here years ago and yet were unmentioned in my UniProt annotated genes.

About the WGC: a full catalogue was released in 2013, followed by annual supplements in PDF format through 2020. Around this time, they switched to [a PHP site](https://wheat.pw.usda.gov/cgi-bin/GG3/browse.cgi?class=protein)
which is challenging to navigate. It either needs to be turned into a dataset, or I need to find where else this information is hosted.

Consider the 2012 paper titled *TaCKX6-D1, the ortholog of rice OsCKX2, is associated with grain weight in hexaploid wheat*.
On UniProt, [the corresponding protein](https://www.uniprot.org/uniprotkb/I4AZT3/entry) for the gene links this paper under **Publications**,
but the **Function** section is left blank. The issue is parsing the paper semantically - the same paper appears under **Publications** for the rice protein.<br/>

Other papers in that section like *The map-based sequence of the rice genome* are more opaque and general to the genome.

We could put these papers into a summarization task for LLMs, but this gene is already spelled out in the Wheat Gene Catalog 2020 supplement:

> 84 Yield and Yield Components<br/>
> 84.3.2 1,000-grain weight<br/>
> **TaCKX6-D1** {11407}. 3D {11407}. Encodes a cytokinin oxidase/dehydrogenase. v: Hap a associated with high TKW **[thousand kernel weight]** has an 18-bp deletion relative to hap b:[citations]

But that's an example of a clear entry. How about this from the 2013 edition:

> 11.1. Low cadmium uptake<br/>
> **Cdu1**{963}. [Cdu1{1128}]. 5BL{10104}.corrected to 5BL{10894}. itv: Kyle*2/Biodur{10104}. tv: Biodur{1128}; Fanfarran{10894}; Hercules{1128}; Nile{1128}. bin: 5BL9 0.76–0.79. ma: Xfcp2–5B - 12 cM - Cdu1–3 cM - ScOPC20{10894}; ScOPC20/Xrz575–5B/XBG608197–0.5 cM - Cdu1/XbF293297/XBF474090/Os03g53590(Xusw15–5B) - 0.2 cM - XBF474164{10895}; Cdu1 is close to Vrn-B1{10895}.<br/>
> **cdu1**{963}. [cdu 1{1128}]. itv: Kofa{10104}. tv: Kyle{1128}; DT369{10894}. ma: Cdu1–4.6 cM - OPC-20{1128}; Cdu1–21.2 cM - UBC-180{1128}.

We'd like to associate this trait with a wheat protein. "Cdu1" is sometimes called a gene, but it's a quantitative trait locus (QTL) which before modern genomics named a section of a chromosome associated with the cadmium traits. <br/>
A [2019 paper](https://www.nature.com/articles/s41588-019-0381-3) can help us out:

> Identification of the gene(s) responsible for **Cdu-B1** has been hampered by the large and repetitive nature of the DW genome and the low recombination rate in the region of interest. <br/>
> [...]<br/>
> A detailed comparison of the Zavitan and Svevo (low and high Cd, respectively) genomes, coupled with exome sequencing, revealed a segment of increased nucleotide variation in this refined region […] the region contains 192 gene models, 48 of which have informative functional annotations <br/> 
> […] One of these genes, TRITD5Bv1G197370, encodes a P1B-type heavy-metal ATPase 3 (HMA3) that is orthologous to rice HMA3 (OsHMA3)

So only working from the catalogue alone, we wouldn't be able to connect this QTL and its label to a modern gene name from UniProt (HMA3-B1) and [that corresponding protein](https://www.uniprot.org/uniprotkb/W5FIP9/entry).
But this information can be associated with the protein with additional work, or we could parse **Publications** on that protein to add up-to-date information.

IDK let's try another supplement section:

> 44 Height<br/>
> 44.2. Reduced Height: GA-sensitive<br/>
> **Rht14**. **GA2oxA9** expression was higher in Castelporziano than in its tall parent Capelli - see Rht18 {11301}.

GA2oxA9 is a protein in UniProt, so that's connectable.<br/>
The GrainGenes page for [Rht14](https://wheat.pw.usda.gov/cgi-bin/GG3/report.cgi?class=gene;name=Rht14+\(Triticum\);id=4289)
is also informative, has links to papers, and links to a page with 
[genes for reduced height trait](https://wheat.pw.usda.gov/cgi-bin/GG3/report.cgi?class=geneclass;name=Reduced%20height;id=435;show=gene).

**Conclusions**

I think with a few different tactics this database, later supplements, and maybe LLM extracts of research papers, could add context to hundreds or thousands more wheat proteins. At first we should err on the side of caution (e.g. not simply associating *the ortholog of rice OsCKX2* with adding text to OsCKX2).
But with practice it'd be possible for new plant genomics to go into this pipeline and update the database.

<br/>
<br/>
<br/>
