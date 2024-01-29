---
title: Sark Emoji Episode 7 - Did you mean Shark Emoji
published_at: 2024-01-29T08:53:00.000Z
tags: prose,sark,maps,language
---

In November, Unicode's Emoji Subcommittee issued [a document](https://www.unicode.org/L2/L2023/23236r-esc-report-q4-2023.pdf) with seven new emoji codepoints which will likely be included in Unicode 16.0 this year. There's a (text) section which confirms the plan to add Sark to the RGI flags.

In December [a fan of "the latest Dev Builds of Windows 11 and Pokémon"](https://twitter.com/giorgos6422) tweeted at Emojipedia about this, and Sark now appears on their "Emoji 16.0" page: https://emojipedia.org/emoji-16.0 This makes it feel more official?

I would wait to see if it gets mentioned in the "new emoji" media cycle in September and the Noto Emoji repo before saying it's real. Then it's up to Apple and Google whether to include it in iOS Beta and new Androids which would be happening in January 2025 (Emoji from Unicode 15.1 arrived this week).

Also: Drupal framework added Sark to their countries list: https://www.drupal.org/project/drupal/issues/3395852

### Non-Sark Flag News

Noto updated their flag of Martinique. They also added to the README: "We no longer source flags from Wikipedia, preferring instead to acquire them directly from the relevant government." (?)<br/>
Apparently the Noto repo has the US state flags but does not include them in the builds. They haven't updated Mississippi: https://github.com/googlefonts/noto-emoji/issues/432

### Non-Sark Unicode News

I came up with a new approach for my OpenStreetMap fonts PR which went up 3 months ago. Instead of complicating a Bash script, let's switch to Python.

The first obstacle is that Noto fonts are "free", but Google and GitHub don't want this to be your CDN, so they release ZIP files and obscure other downloads. The links on their main page go through cdn.jsdelivr.net - in October some of these had filesize-related errors.<br/>
I settled on fonts from the GitHub Pages branch of each script's repo, with some notes for normalizing URLs.

While I was reopening the project today, the Armenian repo had a build failure and skipped fonts, so I filed an issue. The maintainer pointed out that these are development builds, so I looked at jsdelivr again, and now it's working.<br/>
We can't seamlessly switch because the CDN is missing "UI" fonts for Arabic, Khmer, Lao, Myanmar, and Thai. From research, [in the Thai repo](https://github.com/notofonts/thai/issues/25) last year they said that the UI fonts are all deprecated?<br/>
Back in October I already noticed that Oriya UI was unfindable, but that was one script and it's under-used on OSM. We might need specialists to look if we're changing up everything?

Meanwhile I realized that the deprecated "Noto Sans Arabic UI" font never got updated, so my PR isn't resolving my original issue with the ڵا ligature! Oh jeez. What a journey.

<br/>
<br/>
<br/>
