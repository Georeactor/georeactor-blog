---
title: You Wouldn't Download a Quinoa
published_at: 2024-01-20T08:33:00.000Z
snippet: AgroNT and plant genomes
tags: ml,codethrough,bioseries
---

This is something which I hope to develop into a talk with more relevant info and title, but just for fun for now!

Following up on InstaDeep's [AgroNT](/agront-1), I wondered if I could do something interesting with quinoa, since it's not in the Plant Genomics Benchmark or mentioned in the pre-print. It turns out that a quinoa genome ([ASM2116424v1](https://www.ebi.ac.uk/ena/browser/view/GCA_021164245.1)) was part of AgroNT pre-training, but that's in the Supplementary Material download.


### How new is quinoa genetics?

Quinoa has been in plant bio news recently with a new and more complete genome published in *Nature / Communications Biology* [in December](https://www.nature.com/articles/s42003-023-05613-4). More genes are mapped to a specific chromosome instead of coming out of a blender of genetic sequences - this affects which traits are inherited together.<br/>
This is not the first quinoa genome though - early research includes a Japanese "draft sequence" from [December 2016](http://quinoa.kazusa.or.jp/), then the first "chromosome-scale" sequence in Nature in [February 2017](https://www.nature.com/articles/nature21370) being the earliest.<br/>
For even earlier quinoa genetics, I found [this 2013 video](https://www.youtube.com/watch?v=QiLyzYxed9Y) on an earlier research technique (BAC), placement in the correct phyla in 2008, and identification of distinguishable highland and lowland quinoas.

Some searches sent me to the Joint Genome Institute, which is oddly run by the US Department of Energy? Research tells me that this happened because DOE was running the Human Genome Project. The registration and download process there is intimidating, and I backed out (I believe this is for researchers to access new genomes without jumping ahead of someone else's publication).

### What is the selling point for studying quinoa?

Compared to other crops quinoa is resilient in high, dry, salty, and high-latitude environments. You can find papers talking up quinoa for a NASA space biosphere concept in 1993, and as "A lesser-known grain" for the FAO in 1998. These days it's considered as a crop resilient to climate change. So quinoa gets tested out in [intercropping](https://www.cgiar.org/news-events/news/dryland-intercropping-of-lentil-and-quinoa-is-sustainable-and-profitable/) with lentils in Morocco, plantings in [Vietnam](https://www.cgiar.org/news-events/news/quinoa-a-promising-new-crop-for-salinity-affected-areas-in-the-mekong-delta/) and [Saudi Arabia](https://insight.kaust.edu.sa/2023/02/06/playing-the-right-cards-to-answer-questions-on-a-hardy-old-grain/), and developing seeds at [a startup](https://radiclecrops.com/technology/) in the Netherlands.

The rabbit hole: quinoa plays a role in wrapping standard agricultural research in a Climate Food Crisis package, but I'm not the person to unpack all of that.

### What use is a genome file?

Once I downloaded a gigabyte file, I started wondering, what does a researcher do with this genome?

My first thought was edit  and make a new GMO, but wheat has been heavily studied this way and its first GMOs are only recently going on the market. Conventional methods benefit already from molecular / marker-assisted breeding.<br/>
The tasks in the Plant Genomics Benchmark suggest an interest in filtering which genes operate in a specific part of the plant, identifying promoters which can be repeated to increase traits, predicting binding locations of histones (epigenetic regulators), and distinguishing coding from non-coding sequences. There are existing software tools for these tasks, but the question is whether LLMs can outperform these as with earlier generations of NLP.

For quinoa specifically, the one trait that I've seen analyzed most is the saponin gene which makes some varieties bitter. A 2022 study of 310 accessions built [a GWAS analysis](https://elifesciences.org/articles/66873) of more traits: yield, flowering time, etc.

This genome collection is small and a newcomer compared to potato or rice research - ([the 3,000 Rice Genomes Project](https://gigascience.biomedcentral.com/articles/10.1186/2047-217X-3-7) was completed in 2014). Those plants have been cultivated and hybridized in so many specific ways, that scientists' main plan was to find genes behind specific traits of those accessions.<br/>
Quinoa is still a lower-tier crop, with much research being rolled into the International Potato Center in Peru, CGIAR institutions, and universities.

### Ideas

In the previous post, I asked about an LLM which had both language and DNA knowledge, enough that it could contextualize or explain. The AgroNT paper chose a MLM / BERT-like training, and scGPT did something custom, so you'd probably need this (Stanford recently released a [super-long context BERT model](https://hazyresearch.stanford.edu/blog/2024-01-11-m2-bert-retrieval)). With special tokens (ACTG and unknown N) so these can be expressed without overlapping with text.

Another option would be to fine-tune a more agent-oriented LLM on retrieval and biology command line tools.


<br/>
<br/>
<br/>
