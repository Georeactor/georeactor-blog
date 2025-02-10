---
title: ML Arxiv Haul ~32
published_at: 2025-02-10T20:56:00.000Z
tags: arxiv,sark
---

It's been ~3 months since the last Arxiv haul, so this is mostly research and "Chat OMG" commentary, then five papers in my bookmarks.

But first, I have some non-ML tech updates:

<ul>
    <li>Since Jan 21st, Unicode 16.0 emoji including the Sark flag are visible in WhatsApp for Android and PCs. They don't appear in the emoji keyboard or on iOS.<br/>
        The iOS 18.4 beta should give us a first look at Apple's take on the emoji. The past two weeks introduced me to the tech news / subreddit cargo cults full of claims about Apple releasing betas on Tuesdays or Thursdays, numbers of days between past .3 and .4 releases, etc.<br/>
        Also - the iOS beta subreddit talks a lot about battery life, water detection, and other things which I'd assume are more hardware-related?
    </li>
    <li>
        An Arabic font change for OpenStreetMap seemed possible again after my Python script PR, but the increased line height doesn't look good (Noto discontinued the UI fonts for Arabic and other languages). I'm suggeting switching to IBM's Plex font.
    </li>
    <li>
        I also ran into complications while adding a visual test for Mapnik to better support Traditional and Simplified Chinese. First, Mapnik is less active as most people moved to vector tiles. I asked on OSM US Slack, and no one was against trying it? But I wonder if it will make an impact before the OSM homepage and whoever else switches over. <br/>
        The current issue is that the 10-year-old Chinese fonts bundled in the tests can be differentiated by changing fonts, but for modern fonts we do want to specify the language. Yet it is possible to 'pass' the test without the code changes.
    </li>
    <li>
        I'm getting to the end of Supreme Court pro se cases on my YouTube channel. The final pre-audio-recording cases probably will get bundled together. I did find one more case which has decades of scams and bizarre letters as background info. I might even do a field trip to La Grange, IL for the video. I've been against even short trips for videos before, because at this pace it would still take months to reach first-tier monetization.<br/>
        The last case argued by a non-lawyer, Sloan, is a complaint against the SEC. Most likely my video would talk more about why this was the last, any later attempts to go pro se at the Court - there is an audio snippet of Larry Flynt trying to say something, the 2013 case which forced the issue, and modern prison letters (Millbrook v US, and Wooden v US).<br/>
        What about the next video topic? I am considering doing ML papers (I have one in mind to test the waters), horizontal gene transfer, or shifting the Alice Guo theme into more general cybercrime topics. Or maybe I will get a job and have less occasion to post?
    </li>
</ul>

## Research Commentary

The number of Nature journals doubles every 5–8 years https://bsky.app/profile/davidamuller.bsky.social/post/3lcfcosu6us2p

Meta's Apollo LLMs have disappeared, joining Microsoft and others in the pile of post-release shunned models https://huggingface.co/Apollo-LMMs

One miscalculation in a study shook edu policy https://www.insidehighered.com/news/quick-takes/2025/01/13/freshman-enrollment-fall-data-error-led-miscount

What does it mean that o3 and other reasoning models do well on ARC, and its missed answers are actually pretty good guesses? Wasn't this supposed to be the general intelligence benchmark?
- https://aiguide.substack.com/p/did-openai-just-solve-abstract-reasoning
- Chollet now saying ARC is basic ability to reason https://bsky.app/profile/fchollet.bsky.social/post/3les3izgdj22j

Somewhat annoyed by people who thought that OpenAI would release their video-generative model immediately after the election.

3,000+ videos identifying image issues in scientific papers https://www.youtube.com/playlist?list=PLlXXK20HE_dV8rBa2h-8P9d-0pwqxyXnA

Explanation of GitHub fake stars https://arxiv.org/abs/2412.13459

## Chat-O.M.G.

Someone posted their screenshot of "Apple Intelligence" summarizing news notifications and each point was wrong (e.g. suggesting Hegseth had been 'fired').

Did some of Trump's executive orders come from generative AI? The evidence provided is weak, such as formatting of lists. https://futurism.com/trump-admin-accused-ai-executive-orders <br/>
By comparison, the Crypto Critics' Corner (which continues to have great coverage of crypto policy) pointed out that a crypto-related executive order plagiarized a definition from the Bank of International Settlements.

Crypto Critics' Corner also has pointed out that Craig Wright, who claimed to be Satoshi Nakamoto, used ChatGPT to support a recent legal appeal.

Is DeepSeek copying OpenAI? We've seen similar issues with Grok using the same 'as a model from OpenAI' hinting it has RLHF instruction / safety tuning based on OpenAI responses. But if it were as easy copying down ChatGPT responses, we would see any more such bots? And the relevant reasoning models aren't visible to users at all? <br/>
I mostly see this being spread as a 'gotcha' because OpenAI and Meta pretrain on copyrighted art and books.

A proposed bill to allow an AI to prescribe medicine? https://bsky.app/profile/drjengunter.bsky.social/post/3lggrb7mx622h

A user on BlueSky pointed out a SchoolAI chat-bot intended to teach kids by impersonating Anne Frank. I was able to ask some difficult multiplication questions, but JavaScript was a bridge too far. I asked about Anne's experiences before the war and when asked about afterward:

> I wish I could tell you about my life after the war, but I didn't survive to see its end. However, I dreamed of a world where people lived in peace and harmony, free from discrimination and hatred.

The prompt includes:

> Closure: Conclude the conversation by expressing hope for the future and encouraging the student to learn from history. <br/>
> Maintain historical accuracy and integrity of Anne Frank's experiences. <br/>
> Provide thoughtful, reflective answers that stimulate critical thinking. <br/>
> Adapt responses to the students' age and understanding level, ensuring clarity and engagement.

Mysterious integral solver Cleo appears to have been a sockpuppet who knew the answer in advance, not an advanced early AI https://www.reddit.com/r/math/comments/1iklgmt/stackexchange_cleo_mystery_cleo_is_finally/ 

Adding expletives to hide AI suggestions https://news.ycombinator.com/item?id=42892191

Is o1 changing a config file really a demonstration of AI safety? https://news.ycombinator.com/item?id=42330666

Jeff Hancock, Stanford expert on elections, deep fakes, and other AI manipulation, cited a hallucinated source. https://www.mercurynews.com/2025/01/15/stanford-artificial-intelligence-experts-credibility-shattered-fake-ai-judge-says/

Some strange claims in an academic paper which credits ChatGPT for clarifying its writing  https://bsky.app/profile/mattlodder.com/post/3lh23uumlvk2y 

https://chiraaggohel.com/posts/llms-eda/ gorilla in data

Redditor shows the foreword of a public domain book which was painfully paraphrased. Some debate over whether it was AI or just bad: https://www.reddit.com/r/ENGLISH/comments/1i0acgt/am_i_stupid_or_does_this_contain_sentences_that/

USA Today did a story about professors accusing students of using ChatGPT (including a professor who asked ChatGPT if it'd written the papers).
https://www.usatoday.com/story/life/health-wellness/2025/01/22/college-students-ai-allegations-mental-health/77723194007/ <br/>
Oddly when I googled this, I saw that USA Today published an op-ed about the same student's plight in April 2024: https://www.usatoday.com/story/opinion/voices/2024/04/17/ai-students-cheating-plagiarism-grammarly/73223779007/

Someone claims that their teacher is openly using AI to grade and to fail student essays https://www.reddit.com/r/legaladvice/comments/1gud0go/school_is_using_ai_for_tests/

The WorldVision charity uses ControlNet to include QR codes in its generative AI ads.

Images which resemble famous optical illusions https://bsky.app/profile/tomerullman.bsky.social/post/3lcatci4fw227

## Papers

<blockquote>
    <a href="https://arxiv.org/abs/2501.08284">
    <h4>AfriHate: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages</h4>
    <p>
        Hate speech and abusive language are global phenomena that need socio-cultural background knowledge to be understood…
    </p>
    </a>
</blockquote>

Researchers from multiple institutions compile a dataset of hate speech in languages including Algerian and Moroccan Arabic,
Amharic and Tigrinya in Ethiopic script, and 11 other more local languages.

Most of the dataset falls into categories of ethnicity and politics.

Related article on [Moderating Maghrebi Arabic Content on Social Media](https://cdt.org/insights/moderating-maghrebi-arabic-content-on-social-media/)

<hr/>

<blockquote>
    <a href="https://huggingface.co/blog/modernbert">
    <h4>Finally, a Replacement for BERT</h4>
    </a>
</blockquote>

Answer.AI releases a "Modern BERT" model with 8k token context. They still want to use BERT-inspired architecture for
its document-encoding and entity extraction abilities.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2502.03387">
    <h4>LIMO: Less is More for Reasoning</h4>
    <p>
        We present a fundamental discovery that challenges our understanding of how complex reasoning emerges in large language…
    </p>
    </a>
</blockquote>

There are a bunch of these reasoning dataset + LLM experiments after the successes of o3 and DeepSeek. It's interesting
that this paper and https://github.com/Jiayi-Pan/TinyZero both make  claims about replicating the reasoning training method,
but both use basic math problems. These lend themselves to being easier for LLMs to solve, easier to produce reasoning
text without truly basing the response on that reasoning, and just not being as hard as the type of general problems that you'd ask ChatGPT or DeepSeek.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2410.21228">
    <h4>LoRA vs Full Fine-tuning: An Illusion of Equivalence</h4>
    <p>
        Fine-tuning is a crucial paradigm for adapting pre-trained large language models to downstream tasks. Recently, methods…
    </p>
    </a>
</blockquote>

I've been using LoRA / QLoRA / UnSloth for a while to finetune big language models without updating all of the weights.
Team from MIT argues that adapter models might pass their trained task, but are architecturally very different, and become less
generalized.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2501.16975">
    <h4>Over-Tokenized Transformer: Vocabulary is Generally Worth Scaling</h4>
    <p>
        Tokenization is a fundamental component of large language models (LLMs), yet its influence on model scaling and…
    </p>
    </a>
</blockquote>

The size of token vocabularies has been something of a dark art, with GPT-3 and 4 famously picking up long meaningless tokens such as magikarp.
When I made the Dhivehi and Hindi models in 2020, I made the vocabulary about the same size as GPT-2, which everyone told me was excessive. This meant
a lot of short tokens and less learning of morphemes or something.<br/>
Nevertheless this paper (from Bytedance) is seeing improvements
even with vocabularies of 12.8 million? The key difference (I think) is that older models were trained
on significantly smaller corpora where a million-token vocabulary would be meaningless and undertrained, and now these
models are trained on a 500 Billion token corpus.

<br/>
<br/>
<br/>
