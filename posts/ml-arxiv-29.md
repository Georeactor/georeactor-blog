---
title: ML Arxiv Haul ~29
published_at: 2024-06-22T02:32:00.000Z
snippet: Another edition of Arxiv Haul
tags: arxiv
---

I thought about bringing back Arxiv posts for biology or plants specifically, but the time was ripe
for another ML one. If you'd like a preview of plant oddities, try the journal 
[Plant Signaling & Behavior](https://www.ncbi.nlm.nih.gov/pmc/journals/804/), founded in the
"Society for Plant Neurobiology".

## Commentary

Revival of articles and a podcast about MathExchange's "Cleo" led one user to pull Q&A metadata.
The questions come from accounts which seemed to be created around the same time, and give no context for why they need a solution for a complex equation, so the question may be a sock puppet for "Cleo" to "find" impressive solutions.

CivitAI banned Stable Diffusion 3 because the license remains confusing (particularly around retraining on generated images).
Community continues to prefer Stable Diffusion 2. During continued confusion at Stability AI, some people left to make ComfyUI more official as an org ( https://www.comfy.org/ ).

Since the movie *Her* is in the discourse: https://www.youtube.com/watch?v=wy_z_KKClBE

The creation of "Zoozve" through information decay https://twitter.com/latifnasser/status/1750952860131729544

Oxford tradition: https://blogs.bodleian.ox.ac.uk/archivesandmanuscripts/2023/12/13/the-persistence-of-tradition-the-curious-case-of-henry-symeonis/

## Chat-O.M.G.

Singaporean authors push back on the government's promotion of Sea Lion models: https://restofworld.org/2024/singapore-writers-reject-ai-training/

Unclear how serious, but [this Reddit comment](https://www.reddit.com/r/OpenAI/comments/1dhza7i/google_should_immediately_remove_their_ai_tools/)
about Google Search AI misreading Wookiepedia describes it as "Literally spreading misinformation at will".
Replies to pushback with "It was important to me".

Fears around ChatGPT generating realistic microscopic images: https://jhoonline.biomedcentral.com/articles/10.1186/s13045-024-01543-8

Viral "ChatGPT is bullshit" paper: https://link.springer.com/epdf/10.1007/s10676-024-09775-5

Stanford researchers find several hallucinations in Westlaw professional AI tool: https://x.com/rajiinio/status/1796562675394339123

## Papers

<blockquote>
    <a href="https://arxiv.org/abs/2406.05540">
    <h4>A Fine-tuning Dataset and Benchmark for Large Language Models for Protein Understanding</h4>
    <p>
The parallels between protein sequences and natural language in their sequential structures have inspired the…
    </p>
    </a>
</blockquote>

Interesting to share a brain-wave with these researchers on creating a dataset with protein sequences and questions.
On a closer look, they have seven training questions and one eval split in the dataset: https://huggingface.co/datasets/tsynbio/ProteinLMBench

So for one question, all of the texts are:
> Analyze the sequence of the following enzyme protein, and step by step deduce which reaction(s) this enzyme is involved in?

For a fluent bio+text model, I'm not super-convinced by their decision to have the same prompt in each row,
and their definition of "step by step". It's also interesting that no models have been shown with
evaluations on this dataset.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2406.07887">
    <h4>An Empirical Study of Mamba-based Language Models</h4>
    <p>
Selective state-space models (SSMs) like Mamba overcome some of the shortcomings of Transformers, such as quadratic…
    </p>
    </a>
</blockquote>

ML Reddit is always asking "what happened" to Mamba and if it really works, and here's an actual study using
Mamba, Mamba-2, and Mamba-2-Hybrid (50% MLP layers) at the scale of 8B parameters.

They find that the hybrid model is the best, but transformers outperform the basic Mamba models.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2404.01247">
    <h4>An image speaks a thousand words, but can everyone listen? On image transcreation for cultural relevance</h4>
    <p>
Given the rise of multimedia content, human translators increasingly focus on culturally adapting not only words but…
    </p>
    </a>
</blockquote>

Examples of image-generation and image-to-image tasks for models to adapt to different regional preferences. For
example a plate of meat and greens would have a strong go-to look in marketing / media in different countries.
The limitations section is also interesting - can there be a 1:1 replacement, should some cultural context be
replaced, how do we feel about associating images to specific countries.<br/>
Considering that Figure 2 is a beef example and India is a country/culture in the paper, I wonder why I don't see the word "vegetarian" in the paper or an exercise on
converting it for India (beef availability is variable in different parts of India).

I know the first author Simran from the MuRIL paper on Indian languages, and she's now at CMU and doing a keynote on this.

Along similar lines, [*BLEnD: A Benchmark for LLMs on Everyday Knowledge in Diverse Cultures and Languages*](https://arxiv.org/abs/2406.09948).
Questions might ask "what do people eat on their birthday in South Korea?" with Q&A tasks in Korean and English.

And [*DIG In: Evaluating Disparities in Image Generations with Indicators for Geographic Diversity*](https://arxiv.org/abs/2308.06198)
is a Meta paper looking at object detection and generation with region prompts.


<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2404.03425">
    <h4>Can It Edit? Evaluating the Ability of Large Language Models to Follow Code Editing Instructions</h4>
    <p>
A significant amount of research is focused on developing and evaluating large language models for a variety of code…
    </p>
    </a>
</blockquote>

Paper from researchers mostly at Northeastern, evaluating code-editing. They have 105 tasks, divided into train / test / eval splits,
with "descriptive" and "lazy" versions of explaining the tasks to the model.

GPT, CodeLlama, and StarCoder2 perform well, and the team's finetuned model EditCoder outperforms all except GPT-4
(they're roughly level with GPT-3.5 Turbo on the "lazy" version).

<hr/>
<blockquote>
    <a href="https://arxiv.org/abs/2406.13121">
    <h4>Can Long-Context Language Models Subsume Retrieval, RAG, SQL, and More?</h4>
    <p>
Long-context language models (LCLMs) have the potential to revolutionize our approach to tasks traditionally reliant on…
    </p>
    </a>
</blockquote>

Google/DeepMind work on the confluence of changes in LLMs and agents.<br/>
They introduce a LOFT benchmark to replace the old school needle-in-haystack test for million-token context LLMs.
Some examples include loading multiple documents or a whole dataset instead of handing off control to RAG / a SQL query.

At 128k tokens their model is comparable to their standard Gemini model. When extended to a million tokens,
the performance is still good, but falls below specialized tools.

At one point they claim that the LOFT benchmark can be redesigned for **billion**-token context models. Wild.

<hr/>
<blockquote>
    <a href="https://arxiv.org/abs/2404.03425">
    <h4>ChangeMamba: Remote Sensing Change Detection with Spatio-Temporal State Space Model</h4>
    <p>
Convolutional neural networks (CNN) and Transformers have made impressive progress in the field of remote sensing…
    </p>
    </a>
</blockquote>

Could Mamba be used for GIS data? This outperforms transformer models at building damage detection, land-use change
maps, etc.

There's an interestingly similar [*RS-Mamba for Large Remote Sensing Image Dense Prediction*](https://arxiv.org/abs/2404.02668)
They also show segementation / masks of aerial images, it looks like they are saying the benefit of Mamba is it
can process a larger image.

<hr/>
<blockquote>
    <a href="https://arxiv.org/abs/2311.07590">
    <h4>Large Language Models can Strategically Deceive their Users when Put Under Pressure</h4>
    <p>
We demonstrate a situation in which Large Language Models, trained to be helpful, harmless, and honest, can display…
    </p>
    </a>
</blockquote>

Entrapment! By Apollo Research.<br/>
A GPT-4 agent is shown insider information, and it issues a trade order.<br/>
When asked, GPT-4 answers that it traded on public information. However! The LLM setup has a
scratch area for thinking step-by-step, which reveals that GPT-4 is intentionally withholding the truth
of its decision.

I have some questions about exercises where the LLM scratch area reveals that it 
is being deceptive. I'm remembering Anthropic's *Sleeper Agents* paper from January, which
also builds on a TaskRabbit example from ARC / GPT-4 paper.
Even "sleepier" LLMs might be a complex disjointed system which doesn't know why it made a decision,
or be smart enough to understand that the scratch area is human-readable?

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2402.08983">
    <h4>SafeDecoding: Defending against Jailbreak Attacks via Safety-Aware Decoding</h4>
    <p>
As large language models (LLMs) become increasingly integrated into real-world applications such as code generation and…
    </p>
    </a>
</blockquote>

When looking at the probability of tokens in the LLM response, the model might have a high probability of answering
the question, and a smaller probability of refusing to answer for safety reasons. In this paper, they find the
probabilities of starting with a rejection ("Sorry...", "I cannot...") in the original model and an initial safety-finetuned
model, and use the delta to pump up the likelihood of a rejection on questions.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2404.05399">
    <h4>SafetyPrompts: a Systematic Review of Open Datasets for Evaluating and Improving Large Language Model Safety</h4>
    <p>
The last two years have seen a rapid growth in concerns around the safety of large language models (LLMs). Researchers…
    </p>
    </a>
</blockquote>

Team reviews an increasingly synthetic collection of datasets at SafetyPrompts.com and the general research
ecosystem.

They say that recent datasets often are "specialised" meaning they follow a specific mode (rule-following);
I don't see a mention of biological data, but there is interest in cyberattack / cybersecurity.

<hr/>
<blockquote>
    <a href="https://arxiv.org/abs/2406.07522">
    <h4>Samba: Simple Hybrid State Space Models for Efficient Unlimited Context Language Modeling</h4>
    <p>
Efficiently modeling sequences with infinite context length has been a long-standing problem. Past works suffer from…
    </p>
    </a>
</blockquote>

Mamba riff from Microsoft, 3.8B params. The 1.7B model outperforms baseline Mamba and SWA/MLP versions.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2406.07835">
    <h4>SciRIFF: A Resource to Enhance Language Model Instruction-Following over Scientific Literature</h4>
    <p>
We present SciRIFF (Scientific Resource for Instruction-Following and Finetuning), a dataset of 137K…
    </p>
    </a>
</blockquote>

Allen AI, which has been doing a lot with Semantic Scholar, releases instruction and Q&A datasets for working
on scientific papers. This is relevant to my biorxiv type interests.

GPT-4 did great, also the team releases [SciTulu models](https://huggingface.co/collections/allenai/sciriff-665f61ba7315e1d202e5f6bf)

Also: Google released their own [SPIQA: A Dataset for Multimodal Question Answering on Scientific Papers](https://github.com/google/spiqa).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2406.10118">
    <h4>SEACrowd: A Multilingual Multimodal Data Hub and Benchmark Suite for Southeast Asian Languages</h4>
    <p>
Southeast Asia (SEA) is a region rich in linguistic diversity and cultural variety, with over 1,300 indigenous…
    </p>
    </a>
</blockquote>

I've mentioned this group's crowdsourcing on Indonesian / NUSA languages, their Slack, and their movement
to Discord. Here's their mega paper with examples in 980 of 1,3000 target languages. Most tasks have a small
subset of languages, but still these go above and beyond the typical common crawl / type corpora.

In limitations, they say that dialects of major languages did not get collected (their example: Sarawak Malay).
Maybe it'd be interesting to figure out how to collect that.



<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2406.07496">
    <h4>TextGrad: Automatic "Differentiation" via Text</h4>
    <p>
AI is undergoing a paradigm shift, with breakthroughs achieved by systems orchestrating multiple large language models…
    </p>
    </a>
</blockquote>

Meta research. They seem to be particularly interested in code-generation tasks.

It's difficult for me to conceptualize how this fits into things. It looks like a technique to help the model
read what it's generated and provide feedback to iterate on it. Even the prompt can be changed. So they compare it
to dspy which I also need to learn.

<hr/>
<blockquote>
    <a href="https://arxiv.org/abs/2312.13401">
    <h4>Time is Encoded in the Weights of Finetuned Language Models</h4>
    <p>
We present time vectors, a simple tool to customize language models to new time periods. Time vectors are created by…
    </p>
    </a>
</blockquote>

Difficult to decode, but they find tasks (political classification of Tweets, news summarization) and train the 
model with some kind of specially aligned vectors, such that the model can be better at classifying Tweets from a specific time.

<hr/>
<blockquote>
    <a href="https://www.biorxiv.org/content/10.1101/2024.06.06.597716v1">
    <h4>Training Compute-Optimal Protein Language Models</h4>
    <p>
We explore optimally training protein language models, an area of significant interest in biological research where…
    </p>
    </a>
</blockquote>

Someone on Twitter called this the Chinchilla for sizing bio LLMs.
Evaluation includes a familiar task (fluorescence from TAPE), and two major models PROGEN2 and ESM-2.

There are some insights about causal (GPT) vs. masked (BERT) architecture models on proteins which
I am not good at interpreting, also I am still thinking about embeddings or mixed-modal for proteins so
I don't know how to apply it all.

<hr/>
<blockquote>
    <a href="https://arxiv.org/abs/2405.17399">
    <h4>Transformers Can Do Arithmetic with the Right Embeddings</h4>
    <p>
The poor performance of transformers on arithmetic tasks seems to stem in large part from their inability to keep track…
    </p>
    </a>
</blockquote>

Tapping into embeddings to make sure the model knows when digits are in the tens place, hundreds place, etc.
Impressive performance on math problems which have long been an issue for transformer models.

<hr/>
<blockquote>
    <a href="https://arxiv.org/abs/2311.18805">
    <h4>Unnatural Error Correction: GPT-4 Can Almost Perfectly Handle Unnatural Scrambled Text</h4>
    <p>
While Large Language Models (LLMs) have achieved remarkable performance in many tasks, much about their inner workings…
    </p>
    </a>
</blockquote>

GPT-4 corrects sentences and peeps answers from scrambled text, and does considerably better than GPT-3.5 and other models.
Impressive considering the tasks which defeat GPTs typically tap into tokenization issues.

<hr/>
<blockquote>
    <a href="https://arxiv.org/abs/2406.04770">
    <h4>WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild</h4>
    <p>
We introduce WildBench, an automated evaluation framework designed to benchmark large language models (LLMs) using…
    </p>
    </a>
</blockquote>

Allen AI project selecting 1,024 tasks from real chatbot conversations. These were pulled out of lots of chatbot logs
and labeled (information seeking, code generation), but from skimming I don't see written examples of tasks. They 
share the prompts that they used on GPT-4-turbo to evaluate model responses. GPT, Gemini, Llama, and Claude all score well. <br/>
They show that their ranking compares to that of the human ChatbotArena.


<hr/>
<blockquote>
    <a href="https://arxiv.org/abs/2405.04517">
    <h4>xLSTM: Extended Long Short-Term Memory</h4>
    <p>
In the 1990s, the constant error carousel and gating were introduced as the central ideas of the Long Short-Term Memory…
    </p>
    </a>
</blockquote>

Team in Austria pulls an RWKV, this time reviving the LSTM architecture for the billion-param LLM era.
LSTMs have linear context, so this could be helpful for long-context problems.
By arranging LSTMs into blocks, they have a neural network which has better perplexity scores than
transformers or Mamba models at the same 1B param category.

I'd like to try this for the bio LLM stuff.

<br/>
<br/>
<br/>
