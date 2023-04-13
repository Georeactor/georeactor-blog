---
title: Sark Emoji Episode 4 - A New Note
published_at: 2023-04-13T19:19:00.000Z
snippet: If a new region falls in a forest...
tags: prose,sark
---

On April 12th, a new version of CLDR was released including Sark as a region. It'll be included in Unicode 15.1, which gets its release in September. The organizers also added me to the ~1,000 names in the [Acknowledgements section](https://cldr.unicode.org/index/acknowledgments).

So 🎉 it is done! ...right?

The [release notes](https://cldr.unicode.org/index/downloads/cldr-43) don't mention Sark or its code CQ. The actual changes, such as the validity of CQ in `region.xml` and https://www.unicode.org/cldr/charts/43/delta/en.html are there. But if you imagined the announcement to include the header "NEW: SARK" and every staff emoji scientist to have a red phone ringing on their desk... nope. It's not even in `emoji-test.txt` after Clipperton Island.

The Sark PRs got merged in late February, just before the alpha release, so I didn't expect a note then. But after the subsequent beta and beta2 (data) didn't mention it, my top theories were:

- there are too many changes in CLDR for a human to comprehend
- I didn't make enough noise about this change
- this change was too obnoxious

I reached out to a contact in the Unicode world. I focused on BCP-47, since I knew this change came from within Unicode, the release note has a specific table for BCP-47 changes, and that table had been generated in early February (pre-Sark).

The conversation convinced me that I'd done OK, and could leave it alone (lest I step on Point 3). In the release, [the BCP-47 table](https://www.unicode.org/cldr/charts/43/delta/bcp47.html) got re-generated with more timezone and currency changes. But not Sark?

I also posted issues in the repos for Twemoji and Openmoji, but no one's picked it up yet. So Sark might be falling in a dead zone, where CQ is a valid region in various specs, but no one is aware of it in the emoji font world.  I don't know the next steps in Unicode 15.1, but will keep an eye on it.

<br/>
<br/>
<br/>
