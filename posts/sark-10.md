---
title: Sark Emoji Episode X - early adopters
published_at: 2024-07-18T21:10:00.000Z
snippet: Emojipedia's work gets the emoji to appear in The Daily Mail, Apple Hub, and even reach the highest levels of Sark's government
tags: sark
---

On the 15th, Emojipedia released their sample designs for Unicode 16.0 emoji, including the Flag of Sark: https://blog.emojipedia.org/new-emojis-in-2024-2025/

I've highlighted SerenityOS and BabelStone's support for 🇨🇶 before, but Emojipedia's work was the push for new emoji to appear in *The Daily Mail*, *Apple Hub*, and even reach the highest levels of Sark's government.

<img src="/blog-images/sark-x-1.png"/>
<br/>

I cringe at a British paper clickbaiting "an unusual flag" at the same time that they're covering their king's visit to Guernsey. But whatevs.

The next day, the Speaker of Chief Pleas was quoted in the *Guernsey Press*: https://guernseypress.com/news/2024/07/18/sark-could-be-getting-its-own-emoji-flag/

> Speaker of Sark Chief Pleas, Paul Armorgie, said that on behalf of the Sark government he was absolutely delighted to hear the news.<br/>
> 'For a small jurisdiction to have its own emoji is a cracking bit of PR for Sark'<br/>
> [..]<br/>
> he had heard rumours of the flag's inclusion on social media back in March. 'I thought it might be a wind up, and in truth I'd forgotten all about it'

The Seigneur also Tweeted a reply to WorldEmojiDay:

<img src="/blog-images/sark-x-2.png"/>
<br/>

Local news channel ITV wrote [a story](https://www.itv.com/news/channel/2024-07-18/find-out-the-new-emojis-and-when-they-are-coming-to-your-keyboard) and included it in the [evening news](https://www.itv.com/watch/news/catch-up-on-itv-news-channel-from-thursday-18th-july-2024/4b1d46n) (20:30 in, I ended up using a UK VPN and Safari).

### Reactions

*Daily Mail* comments are legendary, and did not disappoint:

<img src="/blog-images/sark-x-3.png"/>
<img src="/blog-images/sark-x-4.png"/>
<img src="/blog-images/sark-x-6.png"/>
<br/>

This and other responses introduced me to beliefs: that many people think emoji come from Apple, or cause iPhone updates, and/or that emoji are used only by young people who are illiterate and depressed.

This guy looked up the population of Guernsey (>100x Sark) and is already mad:

<img src="/blog-images/sark-x-5.png"/>
<br/>

If it matters, my current stance is that Kurdistan and other  constitutional  autonomous regions should be prioritized for flag emoji. This would be more consistent with British, French, and American island territories having emoji. This would also maybe resolve local press questions about Alderney and Herm.

### Inside your canton are two lions

The lions in the Emojipedia flag looked unusual to me. I did some reading and though the original flag has "the lion in base impinging on the […] Cross", there is now a distinction between the Seigneur's flag and the island's flag sent to the College of Arms and the Queen in 2020, "in which the lions were only in canton".

Major props to Emojipedia and to the "Flag of Sark" article's Wikipedians for getting it right. This "new" flag image has been on Wikimedia since 2007, and got an update in April 2024, while the main Sark article had the wrong one, so I don't know the complete story.<br/>
I love one of the article sources - [a 1991 issue of "Flagmaster"](https://www.flaginstitute.org/wp/wp-content/uploads/2021/03/Flagmaster-069-1991.pdf) where the emergence of post-Soviet republics pushes Sark news to page 11.

### Patching infrastructure?

I've been searching for open source projects which make assumptions about Sark, ISO codes, and flag emoji. If projects don't have Clipperton Island or other reserved codes, they can stay unchanged.

One repo where I made a PR is part of Meta's OSM editor redesign, RapiD. [This module](https://github.com/rapideditor/country-coder/pull/137) included Sark and its coordinates as a test case without an ISO code or flag emoji.

It seems unlikely that a Sark emoji will break technical infrastructure because it uses existing codepoints (🇨 and 🇶) and only changes appearance when you install a font that supports it.

> Aside: Experiments with the BabelStone font (which has Sark and some old Welsh counties, but misses some countries) showed that unlike "tofu" characters from missing/rare scripts, you can't add fallback fonts CSS, because🇨 and 🇶 are rendering something! Even if it's not a flag.

There might have been issues with the CLDR regions change last year, but I haven't seen that. Maybe if someone got overzealous and added flag emoji to the ferry timetable or soccer scores? Please share if I'm missing something.

<br/>
<br/>
<br/>
