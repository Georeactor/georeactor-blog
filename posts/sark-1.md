---
title: Where do flag Emoji and TLDs come from?
published_at: 2023-01-16T15:40:00.000Z
snippet: Alderney and Sark case study - crown dependencies, CLDR, etc.
tags: prose,language
---

### Intro to Crown Dependencies

There are a handful of English Channel islands (Jersey 🇯🇪, Guernsey 🇬🇬, Alderney, and Sark) which were once part of the Duchy of Normandy, but now are British Crown Dependencies. This means that they are not part of the United Kingdom or Britain. They are not a British Overseas Territory like Gibraltar 🇬🇮  or Akrotiri and Dhekelia; they were never in the EU and never Brexit-ed. There are partnerships with the UK on defense and human rights and things, but many issues are left to these autonomous territories. Are they countries? Debatable.

Don't feel bad about not having heard of them all before - Alderney has a population of 2,000 - and Sark only 500.

### Alderney and Sark as parliamentary monarchies

Similar to the pick-and-choose relationship between a Crown Dependency and the UK, Alderney and Sark have deferred banking rules and education to Guernsey, while keeping tax and other rules to their own islands' governments.

Under the monarchy's original set up, Alderney and Sark had appointed and hereditary leaders. Alderney's Governor resigned to the Crown in 1825, and added democratically elected seats in 1923. Sark's Seigneur continues on and got his first elected counterparts in 2008.

Recently the islands are facing a participation crisis. In 2020 Alderney had 6 candidates for 5 seats, then in 2022 [4 people ran unopposed](https://en.wikipedia.org/wiki/2022_Alderney_general_election). Sark has had enough candidates for contested elections only three times, most recently in 2018. [A by-election in March](https://www.bbc.com/news/world-europe-guernsey-63838585) will try to fill 4 vacant seats from 2022.

There's a libertarian group [getting a foothold on Sark](https://www.youtube.com/watch?v=oINozb1B4oA) since it has only a small property tax, and their autonomy has
a lot of theoretical leeway. In the video it sounds like there are still issues with banking still happening in Guernsey and residents being opposed to new construction, but I don't know a lot about this topic.

### Does every country get a TLD?

In 2013 while working on OLPC in Marshall Islands, I called around for some answers about the lack of .mh websites. The original registry contact then was an engineer named Steve in Wisconsin, but it got claimed by the Marshallese National Telecommunications Authority by 2014.

Later I looked into the steps that disputed states such as Abkhazia and Kosovo need to claim a national TLD. Essentially they *can't* - these **ccTLDs** come from country codes / regions in the UN standards and/or ISO. That's how we have ccTLDs for some international hotspots (.PS, .TW), unpopulated islands (.BV), and USA territories (Puerto Rico's .PR, and Guam's .GU).

Retiring an active ccTLD is rare, with the former Soviet Union (.SU) getting a niche following, and Yugoslavia (.YU) taking years ([2021 report on practices to retire ccTLDs](https://ccnso.icann.org/en/workinggroups/pdp-retirement.htm)).

There continue to be some tricky situations with ccTLD controls changing hands during armed conflict (.LY, .YE) and control being left unassigned due to disputes (Western Sahara's .EH).

Sark petitioned for a country code, which the ISO granted (CQ) in 2020.
[This news article](https://www.theregister.com/2020/03/23/sark_cctld_iso/) was  informative about the processes, the ISO giving itself power to accept or reject codes separately from the UN Statistics Division, etc. In 2021 someone registered [@cctldcq](https://twitter.com/cctldcq) on Twitter. But no sign of a CQ domain yet.

### Start your own TLD

> Declare independence / Don't let them do that to you - [Björk](https://www.youtube.com/watch?v=YMc-iZ5hXcE)

Cities and regions can still buy their way into a TLD just like any company. That's where we get [.CAT](https://en.wikipedia.org/wiki/.cat) (which has its own history
  being raided by Spain), .NYC, .EUS, and .GAL.

You could also convince everyone in a region to use [OpenNIC](https://www.opennic.org) servers (see [new-nations.net](http://new-nations.net/))  or NameCoin to replace standard DNS, but no outsiders would be able to follow the links.

### Does every country get a flag emoji?

There are better posts which explain the nuanced byte-level encoding of emoji, but essentially national flags are made of special letter emoji. Combining two  by country code gives you an emoji flag (🇬 + 🇬 = 🇬🇬 , Guernsey). Using characters to build a flag leaves it up to fonts and vendors and apps to show flags. This also means the depicted flag for that code can change, such as [Afghanistan's flag under the Taliban](https://blog.emojipedia.org/what-about-the-afghanistan-flag-emoji/).

Kosovo is a special case where XK = 🇽🇰 emoji since 2015, even though X- codes are not fully assignable under ISO or ccTLDs.

An entirely different coding is used for flags such as the pirate flag and LGBTQ pride. Unicode [asked people to stop submitting flag ideas](https://blog.unicode.org/2022/03/the-past-and-future-of-flag-emoji.html) in early 2022. The same post explains a bit about subregion exceptions for England, Scotland, and Wales.
New countries and new designs for flags remain OK.

I assumed that an ISO country code for Sark would make 🇨🇶  a valid Sark flag emoji. I Tweeted at Emojipedia and convinced them to [add a page](https://emojipedia.org/flag-sark/). I was advised to look into RGI (recommended for general interchange) documents. Is this sort of a back door into Unicode documenting what are and aren't valid flags? After some more research, I arrived at CLDR (the Common Locale Data Repository). I know about Unicode for text, ICU for [calendars](https://mapmeld.medium.com/adding-myanmar-calendar-to-unicode-e60e07c580c5), and CLDR's [pluralization rules](http://www.unicode.org/cldr/cldr-aux/charts/22/supplemental/language_plural_rules.html), but CLDR also has a regions list. [Here's the regex](https://github.com/unicode-org/cldr/blob/main/common/validity/region.xml) in question. They validate XK (Kosovo) but not CQ yet.

At the end of December 2022, I made a comment on Unicode's relevant Public Review that Sark now has a valid two-letter country code. I also searched through CLDR's Jira system, where I found a relevant ticket buried back in 2019. It had a comment in May 2022 about Sark's updated ISO status, but had gone unanswered. My email led to a new ticket, CLDR-16293, being created in January 2023.

I followed another tip to try Twemoji, but the team left Twitter and it's tough to tell the future of that project.

For now, no one has a Sark flag emoji. But they do have [an island flag](https://en.wikipedia.org/wiki/Flag_of_Sark), inclusion in ISO, and a page on Emojipedia. No other country can sneak its way into CQ now, so I think it's better to move forward on the assumption that it will be fully assigned.

### Wait, did we forgot Alderney?

If Sark gets recognition, you might wonder how the next island over is doing? Alderney did not get involved with the UN Statistical Regions or ISO, no IANA/ICANN, no emoji.

Some theories:

- Sark took until 2008 to abolish feudal rule, and it still has the Seigneur, so the modern monarchy thread gives it international mystique
- Unlike Sark, Alderney pays tax to Guernsey and elects [two representatives](https://www.gov.gg/alderneyrepscontacts) to their parliament (States of Deliberation). Their [island flag](https://en.wikipedia.org/wiki/Flag_of_Alderney) only got made in 1993. So they are not maximizing their autonomy.
- Google Fi's super-inclusive [list of supported regions](https://fi.google.com/about/international-rates/?pli=1) includes both Alderney and Sark, but they also include another Guernsey island ([Herm](https://en.wikipedia.org/wiki/Herm), population 60).
- Sark forbids cars, planes, and helicopter landings. Maybe islanders feel that they're in a quaint village which cannot be associated with the hustle and bustle of Guernsey.
- Maybe it's for the publicity or tourist appeal of being a tiny country?
- In a group of ~250 or ~800 voting adults, one random person being into it or not is influential.

### Conclusions and Chaos

It's an accident of history that the ccTLDs and emoji flags can exist with a somewhat competent ISO list. This hasn't gone through a lot of geopolitical challenges, which won't be true forever. I'd like to see them reserve codes for autonomous regions recognized by their parent country, such as Catalonia, Kurdistan, and First Nations of Canada. This would fix the previous England, Scotland, and Wales exceptions. I've been impressed by OpenStreetMap's general realism on 'groundtruth' and recognizing what areas are under independent control.

The other obvious, widening gap in this space will be areas controversial to the US or Russia: Kosovo, Abkhazia, Transnistria, South Ossetia. I don't see this healing in the near future, and wonder if there could be an exchange to recognize autonomy at some point.

If a dispute over countries' existence like Somaliland, Northern Cyprus, or Western Sahara became visible in Western media, to minimize controversy say [partition of Belgium](https://en.wikipedia.org/wiki/Partition_of_Belgium), I don't have any idea what happens to this system. You could have countries disagreeing over whether .fl emails are valid or not. You could country lists handed over to a W3C process.

<br/>
<br/>
<br/>
<br/>
