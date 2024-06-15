---
title: Update on Burmese calendar support
published_at: 2024-06-15T20:30:00.000Z
snippet: Working 1980-present, digging into the history
tags: prose,unicode,history
---

Fearing that the Sark emoji project is less than helpful, I revisited my project to add the traditional Burmese calendar support to the Unicode / ICU library. With a couple of days reserved for this task
during funemployment, this got closer to reality.

Notes:

- Dates within a lunar month are named by (but do not strictly follow) the phase of moon (waxing 1–14, full moon, waning 1–13/14, new moon). For legibility these days will be reported with numbers 1–30.
- The Burmese New Year does not start on "1/1". It typically occurs in the middle of the month of Tagu or Kason. The portion at the end of a year is Late Tagu or Hnaung Tagu (month=14) and the part at the beginning of the year is Tagu (month=1). <br/> The day of the month does not roll back (e.g. 1350–14–11 advances to 1351–1–12).
- If the New Year occurs during Kason, we advance from month=15 to month=2.
- In a  little watat year, a 30-day intercalary / leap month (Second Waso) occurs. This happens on a predictable cycle.
- In a big watat year, an intercalary / leap day is also added to the end of Nayon. This happened maybe once in the past century, in 2015.
- The original mmcal library was written with the first months out of order to handle leap year calculations, etc. but it's fixed now.

After checking the current date, leap months and new years around the 2015 anomaly, and my birthday, the next step will be to validate older decades. This eventually gets into the concept of eras: kings, British colonization, and modern independence, and into the perils of record-keeping.

## A history of previous calendar calculators

In 1848, Reverend Lyman Stilson wrote a Burmese-language book *Stilson's Arithmetic* with tables for traditional calendars and measurements. He returned to the US in 1852, and died in Jefferson, Iowa in 1886.<br/>
His daughter served as the superintendent of county schools. <br/>
During World War II, the *Jefferson Bee* found a local angle through Stilson, [writing](https://www.findagrave.com/memorial/38381455/lyman-stilson) that he "lived at both Maulmain and Rangoon, two places that have been in the theater of war".

Big watat / leap days did not follow the schedule that Stilson had predicted. Between 1901 and 1910, a judge in colonial Burma (Sir Alfred Macdonald Bulteel Irwin, often A. M. B. Irwin) 
updated Stilson's work with *The Burmese Calendar*, *The Burmese & Arakanese Calendars*, and *The elements of the Burmese Calendar from A.D. 638 to 1752*.
 (These are public domain on Google Books and Archive.org, do not purchase copies or "leather-bound" prints).

Sir Irwin names a few Burmese sources, who I should also credit here:
- Htoon Chan of present-day Sittwe, attorney and author of *The Arakanese Calendar* (1905), no known relation to the future chief justice born 1906
- Maung Shwe Bwin, a Recipient of the KSM (Gold Chain of Honour), possibly a judge on a Yangon civil court from 1896–1902
- Maung Kyaw Yan - the Education Department's 1891/1892 Annual Administration Report credited him as "one of our hardest workers, has done another good year's work. He is much respected in our district". Also named in the 1893/1894 report. In 1896 the Central Provinces Gazette had him reassigned from "Mergui" to Deputy Inspector of Schools for Myingyan District. In 1899, he published a ten-year "Almanac of corresponding English and Burmese dates", which was picked up by Irwin. <br/> Maung Kyaw Yan appears after retirement in *Histories of the Non-co-operation and Khilafat Movements*; he gave up his Good Service Medal (ATM) in protest in 1921.
- Saya Maung Maung of present-day Kyimyindaing, Yangon
- U Wizaya of Mandalay
- U Win

Sir Irwin reached the Chief Court of Burma before retiring to Ailesbury Road, Dublin. [He died in 1921](https://www.thepeerage.com/p38989.htm). <br/>
[The National Library of Ireland](https://garms.nli.ie/Collection/vtls000576446/HierarchyTree?recordID=vtls000576446) adds some detail. His son, also named Alfred, served in World War I. During the Irish War of Independence, Sir Irwin wrote to his daughter and son-in-law (Howel Evans Price, Anglican Archdeacon of Yangon) that "six men with revolvers came in and searched whole house for Alfred".

## Tables

Irwin's books contain specific dates (January 1st, 1900 = 2nd of Pyatho, 1261 ME), a table for every Burmese New Year from 1739–1910, and future projections to 2000 (if that era had continued).
This can help me fill the gap to the earliest date in the Android app MmYearX (~1910 AD).

Remaining issues:
- My current script gets a day off in the 1970s, and 30 days offset in the 1950s (that's got to be from Second Waso)
- It's uncommon for people to specify "Late Tagu" today. One of the top search results for Burmese/Myanmar calendar, mmcalendar, just increments the year from the first day of Tagu.
- [CeJS](https://github.com/kanasimi/CeJS/blob/master/data/date/calendar.js#L2264) (which mmcal uses as a source) expect anomalies would be a day lost in 1900 AD (?) and one added in 1873.<br/> Irwin's tables show a long leap year much more often, on average every 5 years, prior to 1900.

<img src="/blog-images/mcaltable.png"/><br/>

- ICU's tests raise thousands of errors for dates outside of the min and max values which I set. Maybe from the skipped months? It's more active on months > 12, but claims the issue is something else. Maybe I need to specify more values for min/max days in a month.

<br/>
<br/>
<br/>
