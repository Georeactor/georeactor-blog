---
title: Kurdish parentheses on OpenStreetMap, Three Ways
published_at: 2023-11-08T19:10:00.000Z
snippet: Fixing a street name takes a detour
tags: prose,rtl,language,maps
---

**Fixing a street name takes a detour**

While making a proposal to update Noto fonts for OpenStreetMap tiles, which fixes an issue with
Kurdish labels using **ڵا**, I noticed a street with mismatched parentheses and was anticipating a deep dive into the tile renderer. But the actual problem was somewhere else:

<img src="/blog-images/osm-1.png"/>

<br/><br/>
When I looked at the source data in the Map Data view, the full name appeared to be inside the parentheses:

<img src="/blog-images/osm-2.png"/>

<br/>
Then in the iD editor, I see a third rendering. This one is in line with the English name having (*mshko*) in parentheses at the end.
<br/><br/>

<img src="/blog-images/osm-3.png"/>

<br/><br/>
When I paste the name into the Chrome Ctrl+F or address bar, it matches the OpenStreetMap road label (I check some strings here because it's another place where **ڵا** does not render correctly).
<br/>

<img src="/blog-images/osm-4.png"/>

<br/><br/>

So what's the real name? I began looking at the string character by character.<br/>
The correct string is شەقامی شەوکەت سەعید (مشکۆ) ; Let's talk about it.

The user who wrote the name mistakenly used ( - the open parenthesis - twice. One became the 0th character of the string and one was at the start of the "mshko" string.

Chrome and the tile renderer were correctly recognizing right-to-left text, and rendering both open parentheses opening toward the left.

On the Map Data viewer, my understanding  that the full string was wrapped by parentheses was confused by this being a left-to-right language layout table.<br/>
With a wider cell, the string looks like it did in iD - it's showing one open parenthesis at the left end of the text, then printing Arabic with an open parenthesis before the word مشکۆ.

<img src="/blog-images/osm-5.png"/>

<br/><br/>
If we set CSS `direction: rtl`, or HTML `dir="auto"` (preferable for multilingual context) on this table cell, then it reveals the mismatched parentheses, like we saw in the tiles and Chrome:
<br/><br/>

<img src="/blog-images/osm-6.png"/>
<br/>

## Takeaways

I've corrected the name of this way on OpenStreetMap, and the new name renders correctly in tiles, Map Data, and iD editor.

Setting the tag value column cells to be `dir="auto"` - this would help spot errors and being in line with the OSM tiles. I made a pull request on the OpenStreetMap website repo, roughly summarizing the problem and this one-liner fix.

Changing the name input of iD editor - this would affect the alignment of text input, and could weird people out. iD is going through some kind of PR pause / long-needed canvas/GL rewrite, so I'll hold off on proposing changes for now.

<br/>
<br/>
<br/>
