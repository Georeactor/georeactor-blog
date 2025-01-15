---
title: Does OSM need any more fonts?
published_at: 2025-01-15T17:38:00.000Z
tags: prose,language,maps
---

For years, an issue with Kurdish language, Arabic script, and OpenStreetMap tiles has been on my radar.
[In 2023](https://github.com/openstreetmap/operations/issues/976) I got OSM to update their Noto fonts, but Google had already moved the latest changes to individual repos.
[Last weekend](https://github.com/gravitystorm/openstreetmap-carto/pull/5052) I suggested a PR which would replace the current Bash script with a partly-fixed and more maintainable Python script,
on the way to land a more comprehensive fix that has been in limbo over a year.

While working on the new PR, I thought to check if OSM needs more of the language-specific Noto fonts.
Back in spring 2019 I did [a mini survey](https://mapmeld.medium.com/finding-vandals-and-language-hotspots-on-openstreetmap-f46c1e825a0b)
of where Unicode blocks were used around the OSM world.

Today I [added Python scripts](https://github.com/mapmeld/osm-unicode-coverage/commit/df622d58e4fcd8e7bd8833e074d99d7d44fe2c8d) to check Planet PBF files (specifically `name` and `alt_name` tags on nodes) and find usage across Unicode blocks.

There are names with Latin alphabet and frequently associated characters (superscripts and subscripts, dingbats, diacritics, IPA, half-width, old italic, runic, spacing modifiers, punctuation, emoticons/emoji, and symbols from math, music, currency, and maps).

- Africa has: TIFINAGH, ARABIC (supplements and presentation forms), CYRILLIC, ETHIOPIC, NKO, HEBREW, CJK, HANGUL, and GREEK.
- Asia has: CYRILLIC, GREEK, HEBREW, ARABIC, SYRIAC, COPTIC, ETHIOPIC, BALINESE, JAVANESE, CJK + YI + BOPOMOFO + KANGXI, HANGUL, MONGOLIAN, TIBETAN, THAI, MYANMAR, LAO, KHMER, ARMENIAN, GEORGIAN, THAANA, SINHALA, TAMIL, ORIYA, BENGALI, GURMUKHI, GUJARATI, DEVANAGARI, KANNADA, MALAYALAM, OL_CHIKI,  and TELUGU.

For the Americas, OSM already includes fonts for Cherokee and Canadian Aboriginal Symbols.

Those two scripts and OGHAM, TAGBANWA, and BAMUM were misused in Asia. On the fence about TAGALOG script.
I removed an Apple logo because it's from the Private Use Area.

I now am considering setting up a script checking weekly edit downloads for common errors and suspicious Unicode blocks.

The current font download script is pretty good, and includes additional fonts (Adlam and Tai Viet) not currently on names. But this could be from editors not seeing others using their script, or noticing any rendering issues.

Glagolitic, a Slavic alphabet, is the one alphabet which I will suggest adding. Glagolitic letter stones appear in several locations around Baška, Croatia (see street view below), but also get misused on tourist site binoculars (assumedly using Ⰹ  to represent its shape) and I'd previously seen it in the Canary Islands.

<img src="/blog-images/osm-2b.png">

<br/><br/><br/>
