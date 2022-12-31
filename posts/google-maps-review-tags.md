---
title: Google Maps Review Tags
published_at: 2022-12-04T23:00:00.000Z
snippet: Quirk of the Google Maps review tag in Japan
---

I tend to overprepare before traveling somewhere. For example, I might decide what to order before going to a restaurant.

This leads to me spending a lot of time browsing Google Maps. Recently there is some AI magic to represent a restaurant menu through parsing reviews with photos (creating a card titled 'inedible chicken pieces'), and fuzzy search (searches for 'cannoli' or 'dosa' return Italian and Indian restaurants with no need for the food to appear in a menu or review).

Another feature organizes reviews with phrases tagged with special frequency in this restaurant. This is handy to see popular foods ('fish and chips', 'poke bowl'), or get warnings ('cash', 'spicy', 'attitude'), but breaks in weird ways ('exhibits' on a museum, 'disney' on Disney hotels, 'wall' from hole-in-the-wall). I was clicking around in Shikoku Japan, and the tags were translated for me. Or rather someone tried to translate:

<br/>
<img src="https://blog.georeactor.com/blog-images/gmaps-1.png" width="550"/>
<br/>

The top tag, *Zanthoxylum piperitum*, is the Latin name for a spice. Interestingly, the translated reviews simply call it "Japanese pepper". This gives me a few theories:

- Tags are translated through a separate process from reviews? Or we're seeing in-context vs. 1:1 term translation?
- Extracting tags from the review and translating them relies on  Wikipedia / Wikidata? (the title of the English article is the Latin name, some tags use a full company name)
- Tag translations are just bad? This restaurant has 'paid leave' for holiday/vacation and 'matrix' for queue; others have 'eye' because of the kanji 目 appearing in ordinal numbers (2台目, 二枚目).
- No tags appear on Yasukuni Shrine, and potentially other controversial places. I checked Temple Square in Salt Lake City (tags include 'irreligion' for 'visit even if you're not religious'), the Heart Attack Grill in Vegas (Google allows a 'spanking' tag). They never appear on hotels (likely since Google has a booking widget).
- Tags are bizarre even without translation?  I can't remember every example that I've seen. Browsing California today, 'not dog' is highlighted on a place where all reviews said 'veggie dog'.

Anyway I would love for some of this data to be organized somewhere for a fun / relevant / frequency NER task.
