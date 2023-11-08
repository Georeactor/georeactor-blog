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
Then in the iD editor, I see a third rendering. This one is in line with the English name having (mshko) in parentheses at the end. Something strange must be happening if I see the same text appearing three ways.
<br/><br/>

<img src="/blog-images/osm-3.png"/>

<br/><br/>
When I paste the name into the Chrome Ctrl+F or address bar, it matches the OpenStreetMap road label (I check some strings here because it's another place where **ڵا** does not render correctly).
<br/>

<img src="/blog-images/osm-4.png"/>

<br/><br/>

So what's the real name? I began looking at the string character by character.<br/>
The correct string is شەقامی شەوکەت سەعید (مشکۆ) ; Let's talk about it.

The user who wrote the name made a mistake and used ( - the open parenthesis - twice. One became the 0th character of the string and one was at the start of the "mshko" string.

Chrome and the tile renderer were correctly recognizing right-to-left text, and rendering both open parentheses opening toward the left.

On the Map Data viewer, my perception that the full string was wrapped by parentheses was caused by this being in a left-to-right language layout.<br/>
When the cell is wide enough for the text to be on one line, the string looks like it did in the iD editor input - it's showing one open parenthesis at the left end of the text, then switches to printing Arabic with another open parenthesis before the word مشکۆ. Both of the parens in this line are the character **(**, just the left-most one is appearing out of sequence from where it would be in a right-to-left language string.

<img src="/blog-images/osm-5.png"/>

<br/><br/>
When we set CSS `direction: rtl`, or HTML `dir="auto"` (preferable for multilingual context) on this table cell, then it reveals the mismatched parentheses of the original string, like we saw in the tiles and Chrome:
<br/><br/>

<img src="/blog-images/osm-6.png"/>
<br/>

## Takeaways

I've corrected the name of this way on OpenStreetMap, and the new name renders correctly in tiles, Map Data, and iD editor.

Setting the tag value column cells to be `dir="auto"` - this would help spot errors and being in line with the OSM tiles. I made a pull request on the OpenStreetMap website repo, roughly summarizing the problem and this one-liner fix.

Changing the name input of iD editor - this would affect the left-alignment of text input, and could take people by surprise. iD is going through some kind of PR pause / long-needed canvas/GL rewrite, so I'll hold off on proposing changes for now.

<br/>
<br/>
<br/>
