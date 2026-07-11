---
title: Immersion in AI-assisted coding
published_at: 2026-07-11T22:43:00.000Z
tags: prose,ml
---

I remember an internship over a decade ago where I wrote all of my code in Notepad++. Because of some old projects, my go-to editor over SSH is nano. And I gave up Atom just a couple of years ago. I'm not going to pretend that these were especially smart or innovative habits, but what they did is center a feeling: I need a mental model of the codebase, where to find files and tests, so when the user reports a bug I can dig in the right place.

## Joining an AI-first project team

When I joined this project, the team was using GitHub Copilot or Claude Code for just about everything. I'd used AI before, but basically like an advanced StackOverflow, asking 'what's the weird bug in this code' or 'implement drag-and-drop file in React component'. Realizing that I've been a late adopter before, I decided to try doing this project with full immersion.

Not that I'm nearing the end of the project, I have to think about where this fits into my programming worldview. Having an OpenAI or Anthropic agent in the IDE, building and debugging, was a couple of levels above my expectations. After working through my first tickets, I was able to review the AI edits, and push back if something looked like it could be implemented better, without knowing where things belonged in the file tree or how pieces all worked together.

Notes:

<ul>
    <li>
        On a team project, it's never been possible to have control or complete knowledge of everything. There's also a risk of the 'bus factor', that one person who knows and maintains a system may disappear to another company or plane of existence. <br/>
        You might assume that AI might play the role of one super-productive, irreplaceable colleague. AI agents can recover some of their past 'mindset'  from conversation history or code comments, but the result was closer to multiple developers dropping in layers of edits and alternative paths. When the team gets feedback, 'the app should now do X when Y' we have to track down multiple parts of the code to make sure that we're addressing every possible route in both our main and fallback processes.
    </li>
    <li>
        AI agents add many lines of comments, code, and tests. They are reluctant to refactor or remove, or notice when tests have been made redundant. I have gotten into the habit of deleting overlong comments and asking to check the tests directly.
    </li>
    <li>
        In  particular setup, the agent runs tests to prove that each edit is correct. Recently there are a lot of git history checks. This really bothers me when the AI has repeatedly not found the true underlying problem, but it spends time assuring me that tests are passing. I am not a TDD person, but if we can't find the bug, I start thinking about tests.
    </li>
    <li>
        When I get an old bug report or make a mistake in instructions, the AI will find something meaningless or create its own interpretation of a problem, rather than saying 'hey, I don't see the bug anymore, and your coworker just edited this file an hour ago'.
    </li>
    <li>
        When I lose patience with a model or a particular conversation, it builds up into real emotional weight. I can usually break out of this when I switch models, or open a new conversation. In reality, this probably only helps if one model is stuck on something, and the other has no issue completing some code. But it has a psychological value for me.
    </li>
    <li>
        Sometimes I have been telling the AI that its suggestions are useless, slop, or GPT-2, and you can observe the agent thought process talking about "the user is frustrated". Is that in the harness or API or instructions to make me feel better? <a href="https://news.ycombinator.com/item?id=48275059">Interesting HN thread about this</a>. <br/>
        I got into a habit of asking the model a series of "__, yes or no?" questions when things get off track or too rambling. But sometimes I make the model list its mistakes, or repeat my original question. <br/>
        Is this going to affect the quality of the coding? Do the AI companies have a basilisk file on me now?
    </li>
    <li>
        Around when I started the project, I saw a viral photo where a car's rear window reads "LLMs aren't conscious but you should still [be] nice to them. […] Kant was right. Being mean to anything ruins your soul!"
        <br/>
        I don't know whether this is true of Kant, and it turns out this was an edited image of scientist Sarah McAnulty's squidmobile, but I did genuinely start to wonder how treating the AI as an antagonistic presence would affect me after the end of the workday. <br/>
        This <i>is</i> something that our team has discussed in real life.
    </li>
    <li>
        When I get a bug report, an AI agent can connect to a remote DB, searching with the given description of the problem, find a likely candidate, then make a copy of the data for my dev environment. On this project, it was incredibly valuable and felt faster / less distracting to my brain than SSH-ing into a server myself.
    </li>
    <li>
        The comms around using AI in the workplace is still in flux, but I have picked up on saying "my agent says __" to convey something open-ended which I haven't confirmed with confidence. I wouldn't say this, for example, after directing the agent to search the database and finding out what results we do and don't have. <br/>
        I am still uncomfortable when someone pastes part of a code review or bug investigation directly from AI into our chat. In the best-case scenario, I don't know the inputs which led to this conclusion. Other times, I cannot find the main point of the feedback and could use a human summary or specific question to respond to. I'm trying to push back on this, by always writing my own summary. <br/>
        From one blog post: <br/>
        <em>"If you're going to use an LLM to write me an email, I'd much rather you just send me the prompt; at least then I'd have an idea of what you actually meant to say."</em>
    </li>
    <li>
        I should say something practical. Stage changes into git as you go along, so the AI doesn't undo something without you knowing.
    </li>
    <li>
        I have a few tasks still such as changing a CSS value, a test, or some text and numbers, where I do a manual edit purely because it's exhausting to risk multiple rounds of AI edits and tests. The agent will spend an odd amount of time re-reading the context around minor changes. For breaking changes, I have to change it myself and then say, look, this  is going to be the new structure, now make it work or show me what's wrong.
    </li>
</ul>

### Trying on an open source project

Recently I was so convinced, that I got a personal subscription and cleared up some C++ code where my contribution to an open source project had been failing tests for years. <br/>
I expected the agent to be confused by details of the work (a calendar system with elements of lunar and solar calendars) but it was able to read my code, and a JS reference implementation, and talk about specific issues. This  AI (Sonnet) wrote a lot of thinking text, and tried going through the code in there. To fix the final bugs, I had to manually add tests before the failing ones, until I narrowed down specific dates which the AI could see were introducing the difference. <br/>
The one downside is that all of this thinking cost actual dollars / credits.

When I submitted the PR, I was conscious of AI code being controversial. I put my prior work into one squashed commit, then  the AI commit, then some cleanup (oops). I wrote the PR message manually to explain what I did, how the AI was working from a reference and passed my pre-existing tests, etc. If there are questions about it, I'll continue to follow-up as myself.

### What now?

So is AI actually intelligent now? The only alternative that I can think of, would be that maybe humans like me are bad at coding?

- I used to memorize and look up a lot of APIs and functions. In VS Code the IntelliSense suggestions and "Go to source definition" stuff really surprised me. I wasted a lot of time, unless we find an intrinsic value to navigating a codebase.
- Tools which have become near-universal in the web space (git, React, Next.js, typed languages) have the right level of sprawl for developers to make changes without having to know every detail of the system. This is working, and AI agents are understanding these systems well, too.
<li>
    Security flaws can sit in massive open source projects for years without being discovered, despite incentives for hackers from hobbyists up to state actors. You could blame other factors (economics of open source, C++ being less safe than Rust, governments buying zero days) but I think it could be that we're all bad at coding and can't connect flaws which are far apart in the code. I think about this a lot in bio + LLMs, how we don't know where to look or how far apart the interactions might be in a genome.<br/>
    When a major flaw is discovered, like Heartbleed, multiple people find it around the same time because there are trending ideas in cybersecurity, and people begin poking at the edges of what they know. This is a good tactic to find <i>some</i> bugs, but a bad way to find <i>all</i> bugs.
</li>


<br/>
<br/>
<br/>
