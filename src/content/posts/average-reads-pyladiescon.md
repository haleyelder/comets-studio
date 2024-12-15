---
date: '2024-12-14T12:00:00.000Z'
image: /images/posts/average-reads/book-shelf.jpg
categories: ['code']
tags: ['code']
draft: false
title: Average Reads and PyLadiesCon 2024
---

### Average Reads version 2!

Version 1 of this project was my final for CS50Python. The write-up can be found here up [here](https://github.com/haleyelder/cs50/tree/main/cs50p/week9/project).

For the next iteration of the project, I wanted to move the functionality to a web-based framework to practice building a python based fullstack application. This would make it easier to use, read, and share what I have been working on. This version is much closer to what I had envisioned when starting! The application is now using Flask and SQLAlchemy to add, edit, and update books across the three reading lists and you can download all three lists in one CSV file to your computer.

The trickiest part, besides deploying a Flask app for the first time, was once again the CSV download portion. I was able to carry over most of the code from my past version to run the "save to a CSV" function, but it had to be set up in a slightly different way for the web app. I had not realized to use the function "send\_from\_directory," the folder had to be created first to save the file, *then* download it to your computer. It was a good feeling figuring that one out though 😄

I was able to keep most of the title formatting and error checking functionality, but was easier to show in a more visual way with on page warnings. Such as, letting you know if a book was already on one of the three lists, if there were no books to download (lists are empty), and title case any entered book titles. There are a few more enhancements I'd like to do with this one, but needed a bit of a break. I definitely want to update the styling a bit more, update the book editing functionality, and add a graphic I had sketched for the header.

![Average Reads application header](/images/posts/average-reads/average-reads-demo.jpg)

***

## PyLadiesCon 2024

Since my reinterest of Python, I searched for the next date and location for the next [PyCascades](https://2025.pycascades.com/) (spoiler alert, Portland, Oregon, February 2025) and came across [PyLadiesCon](https://conference.pyladies.com)! This free online conference took place from December 6 to 8 in multiple timezones and languages. I couldn't make it to listen to all in real time, as there were side chats, questions, and conversations happening in tandem on their Discord server. I'm now going back through some of the recorded talks I was interested in.

[PyLadiesCon Video Playlist](https://www.youtube.com/watch?v=VR16SjT8puc\&list=PLOItnwPQ-eHxWh6Af6xRuKprSk_OBU0cL)

Some of the talks I was most interested in were [How to Stop an Epidemic using the Atomica Python Tool](https://www.youtube.com/watch?v=LXMahU76H4s\&list=PLOItnwPQ-eHxWh6Af6xRuKprSk_OBU0cL\&index=44), [Empowering Sustainable Agriculture: Quantifying the Impact of Water Resources Management Practices with Python](https://www.youtube.com/watch?v=4jiYyEBLhLw\&list=PLOItnwPQ-eHxWh6Af6xRuKprSk_OBU0cL\&index=8), and [PyLadies in Open Source](https://www.youtube.com/watch?v=1IWKkU0WEWY\&list=PLOItnwPQ-eHxWh6Af6xRuKprSk_OBU0cL\&index=6). I plan on researching and hopefully participating in a bit more open-source work starting next year and Python seems to be the community to lean into.

Although JavaScript is a recommended language for newbie coders to pursue and in web development, it can be a bit scary to venture to other languages or even know where to start. CS50Python really helped me get a leg up in learning Python and what can be done with the language, my interest has grown again in the past few months. Even though the fundamentals are generally the same, for some reason, I've enjoyed working with Python and seem to understand it a bit more than JavaScript. I'll still be working with JavaScript (and React) but I'd like to shift a bit more to Python projects. More to come in a future 2025 goals post.
