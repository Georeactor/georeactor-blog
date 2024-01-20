---
title: Census API Update
published_at: 2024-01-20T18:57:00.000Z
tags: census
---

Back in summer 2021 when I was doing US Census-related work, I wrote [a Medium post](https://mapmeld.medium.com/studying-a-population-with-the-census-api-d5befe2600ec) about using their API. While I was looking for that, I found [my 2012 post](https://gist.github.com/mapmeld/3241693) from before api.census.gov was even launched. Cool.

Now that numbers are available in the API for the 2020 Census and newer ACS surveys, I revisited my analysis of "4+ race" respondents on the Census. The 2020 data goes up to "Population of six races" (variable `P1_070N`) - all of the race categories available on the current Census. There's also `P2_072N`, the same with Non-Hispanic ethnicity (for a count who are Hispanic or Latino, Census has you do the math).

The URL structure for 2020 Census queries is `api.census.gov/data/2020/dec/pl?get=P1_047N,P1_063N,P1_070N,P2_072N&for=state:*&key=API_KEY` . For counties, substitute `for=county:*&in=state:06` or other FIPS code.

On the 5-year ACS which completed in 2019, the Census estimated 91,629 Americans as 4+ races (0.028%). How many did they find in the actual door-to-door count of 2020? After looking at the [2020 variables list](https://api.census.gov/data/2020/dec/pl/variables.html) (the columns change with every Census) we need to add together `P1_047N`, `P1_063N`, and `P1_070N`.

The new national count found 229,843 of four races, 22,047 of five races, and 2,539 of six races. This means that the ACS estimated only a third of the 4+ race demographic (254,429 / 0.077%).

We also can calculate that 1,535 Americans (0.00046%) selected six races plus Hispanic ethnicity. Which states do they live in?

For all races plus Hispanic, the most by far were in California (320), then New York and Texas. When measuring per-capita, the lead is Hawaii, which has triple the percentage of runners-up Idaho and Puerto Rico (this is where per-capita gets a little odd because 25 Idahoans count for a lot). Zero were recorded in Maine, New Hampshire, Vermont, Delaware, or South Dakota. This is a little unexpected because another low pop. state (Wyoming) has three people in this category, and South Dakota has a significant Native American population.

Within California, a quarter of the group live in Los Angeles County, followed by San Diego and Alameda. Per-capita is won easily by one respondent within Sierra County (pop. 3,236). <br/>
Within Hawaii, 50 people out of 66 live on Oahu.

-

When including people with or without Hispanic ethnicity, we see the same top three (California, New York, Texas). Measured per capita, Alaska moves up to third place here (13 Alaskans selected all six races, only seven of them were also Hispanic).

I was surprised not to see DC after they scored highly for 4+ races on the 2019 ACS. In 2020 for 4+ races they were per-capita behind Hawaii, Puerto Rico, Alaska, Nevada, California, and Rhode Island. And only four DC residents selected all six races (all were also Hispanic or Latino).<br/>
I'm wondering if this is some ACS estimation / margin of error business, or changes in who responded.

Related script: https://gist.github.com/mapmeld/e5d89a75fd41b1234167625a4c35200c

<br/>
<br/>
<br/>
