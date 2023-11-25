---
title: Iterating on CSS with GPT-4 and Puppeteer
published_at: 2023-11-25T21:55:00.000Z
snippet: Adventures in RTL layout
tags: ml,codethrough,rtl
---

**Adventures in right-to-left language layout + ML**

### RTL CSS can become complicated

I've been thinking about a code model which could do my periodic side project, making right-to-left language layouts for web pages. Adaptation 101 is to use `dir="auto"` in HTML, for sections to prefer left or right-alignment based on content, or `direction: rtl` to force direction in CSS.<br/>
The rules get more complex as you explore the UI - the layout might swap padding, margin, and border properties, and either create dual LTR/RTL CSS files, or a list of RTL rules to overwrite LTR rules in a `[dir='rtl'] * .sample { }` context.

We do have libraries to automatically flip CSS properties. In 2017, a small issue on the OpenStreetMap website led to a change in [R2](https://github.com/mzsanford/R2rb), a Ruby gem in this space. Part of the problem is parsing complex CSS such as the values of `background-position`, with a variable-length list of numeric and string values can be provided. But another CSS block referring to an image sprite or a video player shouldn't be modified. We ended up adding a comment for the tool to skip flipping a block of CSS.<br/>
What about the complexities of CSS tables, HTML buttons such as [Next →], and Canvas?

To go deeper, Ahmad Shadeed's https://rtlstyling.com/posts/rtl-styling and Moriel Schottlender's https://rtl.wtf document several UI issues and best practices. I have my own mini-site (with a section on charts) at https://mapmeld.com/rtl-guide/ and recently blogged about a BiDi text confusion on OpenStreetMap at https://blog.georeactor.com/osm-1

### The code / chat prompt concept

Given that these rules eventually require an intelligent or perceptive agent, it could be assigned to an AI such as GPT-4 or Code-LLaMa. Initial concept:

```
As a web developer LLM, you will update the following HTML and CSS files:
[page.html]
...
[page.css]
...
[Instructions]
Change the headings' text color to red
Allow headings to be left-to-right or right-to-left depending on content
```

A model could be fine-tuned with a handful of examples, a battery of tests from RTL Styling and RTl.WTF, or by scanning GitHub for RTL CSS files.

Unfortunately these text and code-based LLaMa models won't 'know' if the style changes work in the browser. I decided to experiment by sending Puppeteer-based screenshots to the OpenAI API.

Second round concept:

```
As a web developer LLM, chat with the user about the HTML and CSS files.
When you respond with new versions of page.html and/or page.css, Puppeteer will send
a rendered version.
When the task is satisfactorily completed, write Final Answer.
[page.html]
...
[page.css]
...
User: Make the headings' text color lighter
AI:
[page.html]
[page.css]
Puppeteer: [image]
AI:
[page.css]
Puppeteer: [image]
AI: Final Answer
```

This opens up questions like, should a CSS expert AI test multiple browsers and window sizes... What about Tailwind and SCSS, cursor, multiple or very long files? I want to keep it compact for now, and use HTML + right-to-left layout as an example of a visual demo.

### A basic demo

CoLab: https://colab.research.google.com/drive/1oDIr-Be987827s3mZbdDnuTho3h4zqst?usp=sharing

- First, you need to sign up for OpenAI's API and get an API key. You must have been billed once before accessing GPT-4 in the API. https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4 - Place the OpenAI key somewhere private in your Google Drive, so you can run a public notebook without revealing the API Key to the world.

- At https://platform.openai.com/docs/guides/vision they have a demo of a first text + image query to send to the model:

```python
response = client.chat.completions.create(
  model="gpt-4-vision-preview",
  messages=[
    {
      "role": "user",
      "content": [
        {"type": "text", "text": "What's in this image?"},
        {
          "type": "image_url",
          "image_url": {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
          },
        },
      ],
    }
  ],
  max_tokens=300,
)
```

- Once that works, install headless Chrome, Selenium, Puppeteer, etc. I did some searching around StackOverflow before finding some shell code which currently works (see CoLab link above). Because the page is being 'translated' to Arabic, I ended up going back and installing a fonts package here too: `fonts-hosny-amiri`.

- My first HTML page is going to be as  basic as possible:

```html
<!DOCTYPE html>
<html>
<h1>Hello World</h1>
<div style='float: right'>Next &rarr;</div>
</html>
```

<img src="/blog-images/x1.png"/>

- Get a screenshot and convert to base64 string to submit it to OpenAI:

```python
import base64

wd.get("file:///content/index.html")
png = wd.get_screenshot_as_png()
img_byte = io.BytesIO(png).getvalue()
base64_image = base64.b64encode(img_byte).decode()
```

- Open the web design request:

```python
opening = {
  "role": "user",
  "content": [
    {"type": "text", "text": "We are working together on a website.
        Can you translate the HTML source to Arabic, including
        right-to-left formatting? The current HTML source and a
        screenshot are attached. I will return a screenshot of the page
        as you change it. When changes are complete, respond
        'final answer'."},
    {
      "type": "text",
      "text": "[index.html]\n" + html,
    },
    {
      "type": "image_url",
      "image_url": {
          "url": f"data:image/png;base64,{base64_image}"
      },
    },
  ],
}

response = client.chat.completions.create(
  model="gpt-4-vision-preview",
  messages=[
      opening,
  ],
  max_tokens=300,
)
```

> Certainly, I can translate that HTML source for you and also include right-to-left formatting which is customary for Arabic text. Here is the translated and updated HTML code:<br/>

```html
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
  <meta charset="UTF-8">
  <title>مرحبا بالعالم</title>
</head>
<body>
  <h1>مرحبا بالعالم</h1>
  <div style='float: left'>التالي &larr;</div>
</body>
</html>
```

> To explain the changes: ...

- I didn't expect this to return a mix of code and text, but I did some basic parsing and observed that GPT-4V had succeeded in flipping and translation:

<img src="/blog-images/x2.png"/>

- Now send a feedback message, asking for "Final Answer" if the task is completed. Note that I must maintain the chat history with `[opening, response.choices[0].message]` and then the additional `feedback` message.


```python
feedback = {
  "role": "user",
  "content": [
    {"type": "text", "text": "Thanks! An updated screenshot is attached.
      Return new HTML source or, respond 'final answer'."},
    {
      "type": "image_url",
      "image_url": {
          "url": f"data:image/png;base64,{base64_image2}"
      },
    },
  ],
}

response2 = client.chat.completions.create(
  model="gpt-4-vision-preview",
  messages=[
      opening,
      response.choices[0].message,
      feedback,
  ],
  max_tokens=300,
)
```

- GPT-4V responds courteously:

> The provided screenshot looks correct based on the changes requested. The text "مرحباً بالعالم" is displayed as "Hello World" translated into Arabic, and the "التالي ←" is correctly placed on the left side of the screen to match the right-to-left text direction.
> If you are satisfied with the result, my response is "final answer". If you need any further adjustments or additions, feel free to let me know.

I didn't expect GPT-4V to be so wordy in these interactions, but it makes sense (it's a chat model!). I would continue to use <html>/</html> to separate out the page. I didn't try making a separate CSS file.

In the future I should give some real-world examples until I find examples which require extra iterations, and/or stump the model.

### Perils of the prompt

Hoping to quickly test a more complex example, I took a snippet of HTML from an Amazon order receipt. I pasted the Amazon CSS within the HTML so it could be rendered in one file:

<img src="/blog-images/x3.png"/>

Unfortunately this starts at 51,000 tokens long, and we need to fit under a 10,000 token limit. After cutting CSS and buttons (not in screenshot) I was down to 31k then 11k, then cutting further so I can have a number of completion tokens afterward.

Noticing a short response and an unformatted screenshot, I noticed this in GPT-4V's source response:

```<style type="text/css">\n    /* Your remaining CSS code, keeping class names and properties as they are */\n    /* Add custom RTL styles if necessary */\n    </style>```

So this doesn't help us. I should find some compact examples and do some prompt engineering so that some CSS gets written. I will probably source some examples from OpenStreetMap / iD editor UI, and try to include some SCSS examples (for fewer tokens).

<br/>
<br/>
<br/>
