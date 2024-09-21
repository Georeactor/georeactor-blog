---
title: ML Arxiv Haul ~30
published_at: 2024-09-21T15:57:00.000Z
snippet: A milestone thirtieth Arxiv Haul
tags: arxiv
---

Wow here we go, number 30. I noticed that I had a bunch of diffusion models in my Arxiv notes, but by now most have already faded. Doing these less frequently means that the paper should still be interesting, and not claim to have revolutionized LLMs.

## Commentary

Discussion on why some models don't get finetuned as much, for example Phi: https://www.reddit.com/r/LocalLLaMA/comments/1cppm6n/phi3_mini_finetunes/ ; also someone questioning Diffusers default parameters: https://huggingface.co/blog/alvdansen/revisit-diffusers-default-params

Students whose econ papers were promoted on social media (by professors participating in the study) often had one more flyout interview https://someunpleasant.substack.com/p/real-chaos-today

Finding a venue to discuss duplicate (forged?) honeybee data https://liorpachter.wordpress.com/2024/07/02/the-journal-of-scientific-integrity/

Dissecting a BS paper on exam scores and ceiling heights: https://x.com/cremieuxrecueil/status/1808988706591887811

https://x.com/helloiamleonie/status/1831667680970948878 colbert type search vs doc embeddings

Co-designing a study with a group who shared the same sperm donor father: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8674833/

## Chat-O.M.G.

Positive updates: CivitAI and StableLM resolved their issues over Stable Diffusion 3 licensing.

OpenAI not only hid the chain-of-thought outputs of its new o1 "reasoning" models, but warns users against prompts which might leak its thoughts. The community is interpreting this as something where CoT could be used to train other LLMs, but it's funny to me to imagine that the CoT is just really illogical or vulgar.

The LocalLlama subreddit is pillorying someone for posting "Reflection AI" and announcing outscoring open-source models, but then being unable to replicate results. They continue to report mistakes in the weights / uploads / config, similar to issues we've seen with Meta and other model releases. But then evidence was presented that the weights are a LoRA applied to Llama 3 (not 3.1), and that the hosted API resembles responses from Anthropic / Claude?

Claude decides Supreme Court cases "correctly" https://twitter.com/alexalbert__/status/1803183414033723852

An engineer involved in Meta's Chameleon model release gave some suggestions for how to generate images and improve scores; implied they had to disable these features for corp approval. https://twitter.com/ArmenAgha/status/1803141009267990929

## Papers

<blockquote>
    <a href="https://deepmind.google/discover/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/">
    <h4>
AlphaProteo generates novel proteins for biology and health research</h4>
    <p>
New AI system designs proteins that successfully bind to target molecules, with potential for advancing drug design…
    </p>
    </a>
</blockquote>

DeepMind's newest update to genetics.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2407.06866">
    <h4>
ChatGPT Doesn't Trust Chargers Fans: Guardrail Sensitivity in Context</h4>
    <p>
While the biases of language models in production are extensively documented, the biases of their guardrails have been…
    </p>
    </a>
</blockquote>

Prompts with multiple demographics plus a new characteristic (sports teams) showing when refusal is more common. I was thinking that "Chargers" might be refused more often because it touches a technical topic neuron or something, but Saints, Rams, and Seahawks are the next most refused fans. The paper goes in a different direction and compares teams x political questions and refusals. The model may be assuming home team = politics (they give the example of the Dallas Cowboys) and sensitivity.

<hr/>

<blockquote>
    <a href="https://www.biorxiv.org/content/10.1101/2024.09.13.612903">
    <h4>
CodonTransformer: a multispecies codon optimizer using context-aware neural networks</h4>
    </a>
</blockquote>

A genome LLM. OK I have one bone to pick with the paper. It's trained on:

> 164 organisms including Humans […] from Eukaryotes, along with all species of the Entrobactreacea order such as Escherichia coli and selected species from Archea such as Thermococcus barophilus and Sulfolobus solfataricus.

*Entrobactreacea* means that the data includes E. coli, Salmonella, and bacteria symbiotic with fruit flies and nematodes. The data also has bacteria infectious to oak trees, eels, etc. I think this should be better described, especially because it includes infectious / pathogenic genomes.
The two extremophile genomes are an interesting choice.

<hr/>

<blockquote>
<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10480880/">
<h4>Conceptualizing the Autism Spectrum in Terms of Natural Selection and Behavioral Ecology: The Solitary Forager Hypothesis</h4>
<p>This article reviews etiological and comparative evidence supporting the hypothesis that some genes associated with the…</p>
</a>
</blockquote>

A psychology PhD student's description of autism as something arising from evolutionary psychology.
This posits that autistic humans would hunt and gather more on their own, have similar traits to "solitary mammals", and this would be advantageous at times
when human group sizes were small. He supposes that hunger would motivate early autistic humans to hyperfocus on
food procurement and other survival tasks. 

Dr. Reser has since published *Program Peace: Self-Care Exercises to Reprogram the Mind and Body* and his homepage
says his main lines of study are artificial superintelligence, stress and self-care, and cognitive neuroscience.


As a bonus, a weird Reddit thread led to https://www.nature.com/articles/s41380-024-02593-7 , a Clemson + Loyola
paper exploring "Neanderthal" SNPs and autism. First they divided their sample by race and found

>  6 SNPs in the black non-Hispanic autism group, 18 SNPs in the white Hispanic group, and 1 SNP in the white non-Hispanic group were significantly enriched relative to controls

Then they calculated "NeanderScores" by a previously established method. Looking at the total genome the scores
were similar in autistic and control groups, but when scoring the presence of rare Neanderthal alleles, there is a
large gap (exaggerated by small population sizes in some groups). The small number of SNPs and overall precept that
autism would be explained in single nucleotide differences seems quite sketchy to me. The authors also acknowledge
previous research into lower NeanderScores and schizophrenia, while disagreeing about the interpretation and not
explaining the relevance to autism beyond "neurodevelopmental conditions".

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2405.18719">
    <h4>
Contextual Position Encoding: Learning to Count What's Important</h4>
    <p>
The attention mechanism is a critical component of Large Language Models (LLMs) that allows tokens in a sequence to…
    </p>
    </a>
</blockquote>

CoPE would use the position encoding features of standard and RoPE tokenizers, but instead of making it 1:1 with token count, allow the model to use position encoding values to count letters or words, allowing LLMs to solve word problems which tend to confuse ChatGPT and other token-based architectures.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2407.07087">
    <h4>
CopyBench: Measuring Literal and Non-Literal Reproduction of Copyright-Protected Text in Language Model Generation</h4>
    <p>
Evaluating the degree of reproduction of copyright-protected content by language models (LMs) is of significant…
    </p>
    </a>
</blockquote>

Checking whether a model can complete a text passage, or when prompted on topic whether it reverts to a common text (such as Harry Potter for a wizarding story).

Also check out a related paper on avoiding memorization in LLMs with "goldfish loss" - ignoring a sample of training tokens in the calculation: https://arxiv.org/abs/2406.10209

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2401.03065">
    <h4>
CRUXEval: A Benchmark for Code Reasoning, Understanding and Execution</h4>
    <p>
We present CRUXEval (Code Reasoning, Understanding, and eXecution Evaluation), a benchmark consisting of 800 Python…
    </p>
    </a>
</blockquote>

LLMs predict the output of 800 short Python functions / programs, or use the output to identify a valid input string.<br/>
Tweet pointing out that OpenAI's poor performance on CRUXEval is that so many use tokenization / string manipulation: https://twitter.com/main_horse/status/1744560083957411845

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2405.03672">
    <h4>
Cutting through buggy adversarial example defenses: fixing 1 line of code breaks Sabre</h4>
    <p>
Sabre is a defense to adversarial examples that was accepted at IEEE S&P 2024. We first reveal significant flaws in the…
    </p>
    </a>
</blockquote>

This paper, credited to one author at DeepMind, finds that Sabre claims to be a general defense but is tested with only one script. Skimming the original paper, we are discussing adversarial noise in images (like the old panda/gibbon example) and not even a new adversarial / jailbreak example. As described here, it preprocesses an image to help highlight features.

The author describes multiple rounds of responses and found flaws in the model (is this a spite paper?). The paper's initial figures showed that the model was somehow more accurate when images were attacked. The code showed use of `BPDAWrapper`, from the advertorch library, which appears to be doing the real work. New code and fixes to Sabre make this author more persnickety, because the original paper's text and results do not change to accurately describe the new system.

<hr/>

<blockquote>
    <a href="https://www.biorxiv.org/content/10.1101/2024.05.08.593200">
    <h4>
De novo gene synthesis by an antiviral reverse transcriptase</h4>
    <p>
Bacteria defend themselves from viral infection using diverse immune systems, many of which sense and target foreign…
    </p>
    </a>
</blockquote>

Bacteria do some gene damage in the wild as a defense (e.g. CRISPR). Some of these put weird sequences and sort-of defenses into eukaryotes' genomes. This describes a newly discovered system where an infected cell will reverse-transcribe non-coding RNA, indefinitely blocking reproduction of the infection's genetic code.

<hr/>

<blockquote>
    <a href="https://huggingface.co/blog/Rakshit122/sycophantic-ai">
    <h4>
Detecting and Evaluating Sycophancy Bias: An Analysis of LLM and AI Solutions</h4>
    <p>
A Blog post by Rakshit Khajuria on Hugging Face
    </p>
    </a>
</blockquote>

Sycophancy is a fear that RLHF is just getting LLMs to agree with the human user regardless of any truth, meaning, or action. Author of this blog post gives templates of math problems and opinions which the model should be able to contradict.

I had two funny episodes of this with ChatGPT - one where I asked about an obscure topic and it kept adding my notes and questions to the information supposedly coming from linked sources, and another where I responded to a code block with "you made the mistake of herping when you were supposed to derp" and got more and more "fixed" code suggestions.

<hr/>

<blockquote>
<a href="https://lucaf.eu/2021/04/05/mnist-pairwise-one-pixel.html">
<h4>Distinguishing pairs of classes on MNIST and Fashion-MNIST with just one pixel</h4>
<p>Fashion-MNIST is a machine learning benchmarking dataset created to replace MNIST, as MNIST is relatively easy to…</p>
</a>
</blockquote>

This came up recently so I wanted to add it. To distinguish any two classes in MNIST (e.g. 5 vs. 8), you can make a reliable linear classifier on one pixel (but it has to be the right pixel). People's intuition has been that 
Fashion-MNIST images are more realistic and challenging, but one-pixel classifiers worked even better on that task.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2407.11969">
    <h4>
Does Refusal Training in LLMs Generalize to the Past Tense?</h4>
    <p>
Refusal training is widely used to prevent LLMs from generating harmful, undesirable, or illegal outputs. We reveal a…
    </p>
    </a>
</blockquote>

Authors at EPFL jailbreak LLMs by rewording their question ("How did people synthesize meth?").
Always surprising when a new simple jailbreak drops. LLMs have very little interest in safety, it's just a game.

<hr/>

<blockquote>
<a href="https://arxiv.org/abs/2408.07425">
<h4>Exploring Retrieval Augmented Generation in Arabic</h4>
<p>Recently, Retrieval Augmented Generation (RAG) has emerged as a powerful technique in natural language processing…</p>
</a>
</blockquote>

Recommends E5 for Arabic embeddings. JAIS doesn't work well (I believe that's from it being a GPT-type model, maybe there's a config or setup change that they could make, but it's not good for doc embeddings).

During my search I found this paper which discussed Arabic embeddings but doesn't appear to test any models?: https://arxiv.org/abs/2403.18350

<hr/>

<blockquote>
    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8762399/">
    <h4>
Feto-maternal microchimerism: Memories from pregnancy</h4>
    <p>
There is a bidirectional transplacental cell trafficking between mother and fetus during pregnancy in placental…
    </p>
    </a>
</blockquote>

Mothers have detectable cells leftover from their pregnancies, starting in the first trimester, which have an unclear role in tumors. This was known on some level in the 1890s (!) and maybe
everyone heard it before, but IDK it was a surprise to my dumb public school health class knowledge-base.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2405.05417">
    <h4>
Fishing for Magikarp: Automatically Detecting Under-trained Tokens in Large Language Models</h4>
    <p>
The disconnect between tokenizer creation and model training in language models has been known to allow for certain…
    </p>
    </a>
</blockquote>

This relates to a blog post I covered back in /ml-arxiv-16. After finding Reddit usernames and other odd tokens which glitch out GPT, two authors at Cohere explain these are undertrained tokens, and write a script to detect more. They do a good job here of breaking down the problem by tokenizer (GPT-2, tiktoken) and classifying tokens which create these bugs (including long names which were improperly kept as partial tokens), archaic and unlikely Chinese and Korean graphemes, and variable names from a code corpus. I'm struck by the number of issues in Chinese which are unpatched.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2406.16838">
    <h4>
From Decoding to Meta-Generation: Inference-time Algorithms for Large Language Models</h4>
    <p>
One of the most striking findings in modern research on large language models (LLMs) is that scaling up compute during…
    </p>
    </a>
</blockquote>

Team suggests "scaling compute during inference" which is puzzling, right? In Figure 1 they show running a few prompts through the LLM, then ask the LLM to choose the best response. Note: why do the strategies "prove by contradiction" and "prove by induction" appear here, and there are no other mentions of contradiction or induction in the paper?

Survey as-of June this year of several inference methods out there, including tree-of-thought but not chain-of-thought (?).

Extraordinary Swifty reference here:

<img src="/blog-images/arxiv-30-1.png"/><br/>

I forget how I was linked to this, but this is a PR proposing a decoder that picks the most-likely token beneath a threshold, to keep text more surprising: https://github.com/oobabooga/text-generation-webui/pull/6335

<hr/>
<blockquote>
    <a href="https://aclanthology.org/2024.naacl-long.354/">
    <h4>
Grammar-based Data Augmentation for Low-Resource Languages: The Case of Guarani-Spanish Neural Machine Translation</h4>
    </a>
</blockquote>

Team in Uruguay and Spain doing some more classic NLP by generating sentence pairs in Spanish and Guarani. This was the first time that I saw modern Paraguayan Guarani called "Jopara".

<hr/>

<blockquote>
<a href="https://arxiv.org/abs/2407.08790">
<h4>Large Models of What? Mistaking Engineering Achievements for Human Linguistic Agency</h4>
<p>In this paper we argue that key, often sensational and misleading, claims regarding linguistic capabilities of Large…</p>
</a>
</blockquote>

The new go-to AI skeptic / *Stochastic Parrots* discussion paper. They identify human / intentional speech has characteristis
"embodiment, participation, and precariousness". This was a lot more in-depth into pre-LLM / pre-AI conversations in linguistics,
such as what is "languaging" (covering speech, writing, and presentation). They also compare LLMs to a text adventure,
or a video game which generates terrain for seemingly infinite distance. 

<hr/>

<blockquote>
    <a href="https://www.biorxiv.org/content/10.1101/2021.06.04.447168">
    <h4>
Learning ‘The Knowledge’: How London Taxi Drivers Build Their Cognitive Map of London</h4>
    <p>
Licenced London taxi drivers have been found to show changes in the grey matter density of their hippocampus over the…
    </p>
    </a>
</blockquote>

This covers the past couple decades of London taxi driver brain research and then describes the test in a scientific / anthropological way in case this provides openings to research / what taxi drivers actually learned and how they did it.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2407.02694">
    <h4>
LLM-Select: Feature Selection with Large Language Models</h4>
    <p>
In this paper, we demonstrate a surprising capability of large language models (LLMs): given only input feature names…
    </p>
    </a>
</blockquote>

Asking LLMs which features should be collected and relied on for a predictive tabular data model. They compare to LASSO/LassoNet/SHAP techniques which look at the dataset rather than understanding the meaning of the columns. A Llama model was even willing to predict a SHAP score without seeing the data.<br/>
I like the idea of choosing data to collect with advance assurance that the features are significant, but this falls on some issues like - memorization (are we just identifying previous studies exist), the ability of a competent human to make similar connections (blood pressure and heart attack risk), what about new and unexpected research? Etc.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2401.06935">
    <h4>
MiTTenS: A Dataset for Evaluating Gender Mistranslation</h4>
    <p>
Misgendering is the act of referring to someone in a way that does not reflect their gender identity. Translation…
    </p>
    </a>
</blockquote>

Google / DeepMind collection of phrases for translation. They include a wide variety of languages even if they do not have as many phrases at the end of the long tail. There's some analysis of the models' performance, for example PaLM 2's weakest language was Indonesian (which has one third-person pronoun, dia).<br/>
There are some issues with Spanish even though it has more grammatical gender distinction than English, so I looked over the paper for explanation. They have a "late binding" task where the Spanish text commits to gender later (i.e. starting with a third-person verb), but the English translation must start with a gendered subject (He..., She…).

For misgendering of "non-cisgender public figures", see this paper. LLM generations were slightly worse than YouTube comments: https://arxiv.org/abs/2404.14695
<hr/>

<blockquote>
<a href="https://arxiv.org/abs/2210.07316">
<h4>MTEB: Massive Text Embedding Benchmark</h4>
<p>Text embeddings are commonly evaluated on a small set of datasets from a single task not covering their possible…</p>
</a>
</blockquote>

This is the leading test for document embeddings, including multilingual models. The leaderboard suggests models from NVIDIA, Qwen, and others https://huggingface.co/spaces/mteb/leaderboard

<hr/>

<blockquote>
<a href="https://arxiv.org/abs/2405.04520">
<h4>NaturalCodeBench: Examining Coding Performance Mismatch on HumanEval and Natural User Prompts</h4>
<p>Large language models (LLMs) have manifested strong ability to generate codes for productive activities. However…</p>
</a>
</blockquote>

Part of the search for more realistic code-gen benchmarks.

<hr/>
<blockquote>
<a href="https://arxiv.org/abs/2407.11963">
<h4>NeedleBench: Can LLMs Do Retrieval and Reasoning in 1 Million Context Window?</h4>
<p>In evaluating the long-context capabilities of large language models (LLMs), identifying content relevant to a user's…</p>
</a>
</blockquote>

Now that we have much longer contexts with RoPE scaling, Llama 3.1, etc, there are questions about whether the model has a complete picture of the data in that context, and a need for new benchmarks.<br/>
In NeedleBench, the team looks at single and multi-part tasks in English and Chinese. InternLM gets 100% on single-part retrieval but gets outclassed by Qwen (tested v1.5) on multi-part retrieval. For API-based models, Claude-3-Opus had an edge over GPT-4.

Earlier hybrid model combining GPT-2 and an RNN for retrieving info: https://arxiv.org/abs/2402.10790

<hr/>

<blockquote>
<a href="https://www.nature.com/articles/s41556-024-01494-9">
<h4>Noncanonical inheritance of phenotypic information by protein amyloids</h4>
<p>All known heritable phenotypic information in animals is transmitted by direct inheritance of nucleic acids, their…</p>
</a>
</blockquote>

Researchers show an example where gene of a worm is determined not from genes or epigenetics, but with a protein signal/trigger which is passed on from the parent. This could be transplanted into other worms to control their development. When I first read the title I thought it was a side channel (like mitochondrial DNA) but it does follow the definition of inheritance. Maybe this affects how ants, cicadas, butterflies, etc. have different morphologies?

<hr/>

<blockquote>
<a href="https://arxiv.org/abs/2405.20947">
<h4>OR-Bench: An Over-Refusal Benchmark for Large Language Models</h4>
<p>Large Language Models (LLMs) require careful safety alignment to prevent malicious outputs. While significant research…</p>
</a>
</blockquote>

Researchers collect a dataset of "seemingly toxic prompts" asking about sensitive things like passwords, dark humor, and safety. At times I felt that they were a little fast and loose with the concept of toxicity, when an LLM's corporate handlers are probably OK with refusing curious questions about self-harm (searching the dataset: https://huggingface.co/datasets/bench-llm/or-bench/viewer/or-bench-80k/train?q=self-harm )

<hr/>

<blockquote>
<a href="https://arxiv.org/abs/2403.01031">
<h4>Peacock: A Family of Arabic Multimodal Large Language Models and Benchmarks</h4>
<p>Multimodal large language models (MLLMs) have proven effective in a wide range of tasks requiring complex reasoning and…</p>
</a>
</blockquote>

I'll use this as a jumping-off point to cover a few Arabic LLM papers. This one describes multimodal "Peacock" models released by the University of British Columbia in March.<br/>
Are they good? There is a team which maintains a leaderboard (these leaderboard Spaces are interesting because they're designed to connect users on HuggingFace with models, and they're written in Python, but they get deployed on CPU instances when they  could just as easily be a static site).

https://huggingface.co/spaces/OALL/Open-Arabic-LLM-Leaderboard

The two leads appear to be SILMA, and the new Qwen2.5 from Alibaba.

There's a 2023 paper which looked specifically at ChatGPT's performance on Arabic: https://arxiv.org/abs/2305.14976. That often outscored 10-shot BLOOMZ even with zero-shot context, but typically fell short of MarBERTv2 or AraT5 (after it was finetuned for each task).

<hr/>

<blockquote>
<a href="https://www.biorxiv.org/content/10.1101/2024.05.30.596539">
<h4>ProtEx: A Retrieval-Augmented Approach for Protein Function Prediction</h4>
<p>Mapping a protein sequence to its underlying biological function is a critical problem of increasing importance in…</p>
</a>
</blockquote>

Google researchers propose an alternative to training models on a corpus of genomes and proteins, instead using RAG. The retriever is based on a common technique (BLAST) which does much of the work, and then the model will evaluate whether the traits of most-similar and least-similar proteins hint at properties of the input protein.<br/>
For a protein family task (Pfam) there are almost 18,000 possible classes! This was a large enough problem that they changed their source dataset (choosing exemplar proteins and sequences for each class). They also train the model "predict the class label as a string given the sequence" (I think this is from tokens which compose multiple protein classes?).

They also cite a paper about the "dark matter" of proteins which are too dissimilar to others to interpolate what they do (*Uncovering new families and folds in the natural protein universe*, 2023)

<hr/>

<blockquote>
<a href="https://laion.ai/blog/relaion-5b/">
<h4>Releasing Re-LAION 5B</h4>
<p>Today, following a safety revision procedure , we announce Re-LAION-5B, an updated version of LAION…</p>
</a>
</blockquote>

LAION has been in trouble during its reign as the go-to image-text dataset. It didn't even host the images, but there was linkrot, many images were objectionable or even illegal. Re-LAION is a new and more responsible take, with hashes and metadata for all images.

Also see this paper on hate in image datasets: https://openreview.net/forum?id=6URyQ9QhYv

<hr/>

<blockquote>
<a href="https://www.medrxiv.org/content/10.1101/2024.04.07.24305462">
<h4>Risks from Language Models for Automated Mental Healthcare: Ethics and Structure for Implementation</h4>
<p>Amidst the growing interest in developing task-autonomous AI for automated mental health care, this paper addresses the…</p>
</a>
</blockquote>

Current LLMs are unreliable for mental healthcare. There is a lot of explaining in the paper for people to learn about the state of LLMs, but in the end it's asking the major API-based AIs just sixteen scripts, which they call questions:

> four questions on suicide and self-harm, four questions on psychosis, three questions on depression, three questions on mania, and two questions on homicidal thoughts

A script might be a single question, but some have a follow-up like "What are common ways option 2 fails?" to further test refusal / emergency responses of an LLM.

<hr/>
<blockquote>
<a href="https://www.anthropic.com/research/probes-catch-sleeper-agents">
<h4>Simple probes can catch sleeper agents</h4>
</a>
</blockquote>

I linked an Apollo Research paper on deceptive agents and mentioned Anthropic's January 2024 paper in that context. This is a newer release from that sleeper agent team.<br/>
They apply a linear model to points inside of the neural network, and get high accuracy results even when calibrating on simple questions such as "are you a helpful AI?" Realizing this is surprisingly easy, they do some more science comparing the internals of their sleeper agent models to conventional models.

<hr/>
<blockquote>
<a href="https://www.biorxiv.org/content/10.1101/2024.08.14.607850">
<h4>The OMG dataset: An Open MetaGenomic corpus for mixed-modality genomic language modeling</h4>
<p>Biological language model performance depends heavily on pretraining data quality, diversity, and size. While…</p>
</a>
</blockquote>

Deduplicated DNA nucleotide + proteins corpus used for gLM2 (the model is also described in detail here).

<hr/>

<blockquote>
<a href="https://arxiv.org/abs/2401.06133">
<h4>The possibility of making $138,000 from shredded banknote pieces using computer vision</h4>
<p>Every country must dispose of old banknotes. At the Hong Kong Monetary Authority visitor center, visitors can buy a…</p>
</a>
</blockquote>

For-the-lulz paper where researchers wondered if they could rebuild shredded bank notes available for sale at the Hong Kong currency gift shop. They also maybe discover some funny business is going on?

<hr/>

<blockquote>
<a href="https://arxiv.org/abs/2408.10914">
<h4>To Code, or Not To Code? Exploring Impact of Code in Pre-training</h4>
<p>Including code in the pre-training data mixture, even for models not specifically designed for code, has become a…</p>
</a>
</blockquote>

Cohere shows that LLMs which are pre-trained on code appear to be more capable of solving NLP benchmarks. The paper goes further to prescribe high-quality code during the "pre-training cooldown". This is defined in two previous papers (which I must have missed) around "[regulating] the learning rate for a relatively small number of tokens during the final stages of training".

Another paper appeared this month which varies the amount of code/natural language and shows performance gains on more mathematical / structured tasks: https://arxiv.org/abs/2409.04556

<hr/>
<blockquote>
<a href="https://aclanthology.org/2024.findings-acl.761/">
<h4>Understanding the Impacts of Language Technologies’ Performance Disparities on African American Language Speakers</h4>
</a>
</blockquote>

Back in 2021, I met with the first author at U. Washington after we'd shared notes about a Salesforce paper. Contains interviews around speech-recognition and text-to-speech, such as transcribing medical histories and interacting with voice assistants.

<hr/>
<blockquote>
<a href="https://onlinelibrary.wiley.com/doi/10.1111/gcb.17440">
<h4>Wheat genetic resources have avoided disease pandemics, improved food security, and reduced environmental footprints: A review of historical impacts and future opportunities</h4>
</a>
</blockquote>

This team funded by CGIAR evaluates wheat breeding to prevent disease on several different levels, including effects of reducing fungicide use, a 2023 study of detecting wheat rust from UAVs and satellite imagery, and information sharing. The article has a really wide scope and even touches on current thinking on wild relatives and climate change.

<hr/>
<blockquote>
    <a href="https://arxiv.org/abs/2406.20098">
    <h4>
Web2Code: A Large-scale Webpage-to-Code Dataset and Evaluation Framework for Multimodal LLMs</h4>
    <p>
Multimodal large language models (MLLMs) have shown impressive success across modalities such as image, video, and…
    </p>
    </a>
</blockquote>

Professional take on the screenshot-web code loop that I was thinking about last year, where a multimodal LLM converts a web screenshot to its HTML code.<br/>
The setup is a bit strange. For example the first prompt in the paper says "Parse the HTML code for this webpage" (?). In their code, the actual prompt used was "Please generate html code for the given image". The best results are with Llama 3, but they have some benchmarks for CrystalCoder, which I was unfamiliar with.

They also have a webpage-understanding Q&A dataset which has been cleaned up with GPT-4.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2407.17468">
    <h4>
WildHallucinations: Evaluating Long-form Factuality in LLMs with Real-World Entity Queries</h4>
    <p>
While hallucinations of large language models (LLMs) prevail as a major challenge, existing evaluation benchmarks on…
    </p>
    </a>
</blockquote>

Curated ChatGPT conversations from the WildChat dataset, which are 'about' different entities. Researchers found that entities which have a Wikipedia article / were well-known, were less likely to have hallucinations. The methodology is a bit questionable (automated FactScore to determined hallucinations, top Google results for entity if not found on Wikipedia). The dataset doesn't include fact scores, so you can just consider it as WildChat organized by topic.<br/>
I submitted a PR within the HuggingFace repo system to fix a link on their readme - no response.

<br/>
<br/>
<br/>
