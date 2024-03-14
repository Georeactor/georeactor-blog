---
title: Matryoshka Embeddings?
published_at: 2024-03-14T12:19:00.000Z
snippet: Search on long sequences
tags: ml,bioseries
---

Twelve years ago, we got word embeddings in word2vec. The methods for merging multiple words into one scikit-learn row were primitive (I remember adding or averaging the embed values?). There was a foray into ragged (variable length) and padded tensors.

Then during the BERT era, in 2019, transformer models got sentence embeddings: https://github.com/UKPLab/sentence-transformers. In 2022 the SGPT paper and OpenAI's API began providing embeddings for arbitrary input texts into GPT-architecture models.

An issue in the semantic search / vector database world is that larger models are using over a thousand dimensions. It's harder to quickly compare each item to a search using its cosine similarity (though cosine similarity has its own issues: https://arxiv.org/abs/2403.05440 which overlap with those of the ambiguity of sentence similarity).

Last month, OpenAI updated their embedding API to allow requesting embeddings with fewer dimensions, with less loss in usefulness. From what I picked up on the internets, this has parallels to a 2022 paper calling the technique Matryoshka Embeddings, referring to the Russian dolls: https://arxiv.org/abs/2205.13147

HuggingFace blog: https://huggingface.co/blog/matryoshka <br/>
HF docs: https://huggingface.co/docs/hub/en/sentence-transformers <br/>
Supabase blog: https://supabase.com/blog/matryoshka-embeddings

I have been considering whether this model could help make embeddings for DNA's very long sequences. <br/>
I also needed to face my conceptual confusion / blind spots around sentence embeddings in the first place.

When I actually dug into it, the issue is that Matryoshka and other sentence-embedding generation techniques start by training from scratch. The input embeddings are the start of the model, and after you've processed an input, the output embedding uses pooling to make a single embedding to represent the sequence.<br/>
Following the HuggingFace blog, I also need to replace the loss function of the model with a Matryoshka-wrapped sentence similarity loss function. In the post they use CoSENTLoss, which the library describes with:

> CosineSimilarityLoss seems to produce a weaker training signal than CoSENTLoss. In our experiments, CoSENTLoss is recommended.

In the Caduceus DNA LLM, like other GPTs, it uses CrossEntropyLoss on the token level. This wasn't changed much in the original sentence transformers ( https://www.pinecone.io/learn/series/nlp/train-sentence-transformers-softmax/ ) but has since evolved.

After some puzzling avoidance of the topic in my research, I think my best bet might be to find one of the base models (MPNet or similar) and then select one with the longest max sequence length? So far the most I've seen is 512 tokens? A Huawei Ireland paper last year described Attention over Sentence Embeddings (AoSE) but recorded only a small improvement, particularly when using a Longformer BERT model. Developers appear to be taking advantage of 'sentences' generally having a short length. I might need to look for 'document embedding' tools rather than sentences, IDK.



<br/>
<br/>
<br/>
