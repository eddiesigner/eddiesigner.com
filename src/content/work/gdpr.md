---
title: 'GDPR.fan'
type: 'Website'
year: '2023'
heroImage: '../../assets/img/work/gdpr.webp'
pubDate: 'Mar 02 2026'
---

Thanks to the themes I develop every now and then people who have bought them contact me to ask me if I can work on some of their projects either designing and developing a custom theme or developing other projects, unfortunately most of the time it is not possible for me because I don't have much free time at the moment as I have a [full time job](https://eddiesigner.com/blog/starting-a-new-position-as-senior-frontend-engineer/). However a few months ago I received a message from [Rie](https://www.noties.consulting/author/raw/) where he invited me to work on a new project that I found interesting as it was not too big and where I would also have the opportunity to use [Astro](https://astro.build/) as a framework to create the project's website.

For some time I had heard very good references about Astro and I really wanted to develop a project using this framework, I thought it was an excellent choice because the website should be static, fast and lightweight. In the end I agreed to work on the project and now that [it is finished](https://gdpr.fan/) I can write a little about it.

<figure>
  <img src="https://res.cloudinary.com/edev/image/upload/v1774494860/eddiesigner.com/gdpr-1.webp" alt="☝️ Individual page view of an article in desktop size." />
  <figcaption>☝️ Individual page view of an article in desktop size.</figcaption>
</figure>

## General Data Protection Regulation

Basically [the project](https://gdpr.fan/) is focused on creating a website with the complete information of the [General Data Protection Regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02016R0679-20160504) which can be consulted by people in a quick and easy way.

At first it may seem that it is a very small or simple project but it is worth remembering that the entire regulation consists of 99 articles organized in 11 chapters in addition to 173 unofficial recitals that can also be consulted on the website, this results in **the site having about 300 pages full of legal texts**.

## Fast, lightweight, appealing and privacy-friendly website

### Speed and performance

One of the main requirements was that the website had to be very fast, that is to say that it should load in the shortest time possible, for this obviously the site had to be as light as possible. To satisfy this requirement I chose to use as few assets and libraries as possible, in fact the icons for example are part of a SVG file that weighs only 3.3 KB and for the interactive parts I used [Alpinejs](https://alpinejs.dev/) which is a very light library compared to others.

The size of the page when loading for the first time is about 663 KB but thanks to being hosted on a [CDN](https://bunny.net/) and compression **the transferred size is reduced to just 284 KB**, this makes it load in just one second or sometimes in half a second depending on the connection, super fast 🤯.

<figure>
  <img src="https://res.cloudinary.com/edev/image/upload/v1774494861/eddiesigner.com/gdpr-4.webp" alt="☝️ Screenshot of the PageSpeed Insights performance report." />
  <figcaption>☝️ Screenshot of the PageSpeed Insights performance report.</figcaption>
</figure>

### Friendly and minimalist design

Perhaps one of the biggest challenges of this project was that the website had to be appealing and friendly even though the content was only text. To achieve this I decided to use a typography that was friendly, easy to read and that would allow the content to stand out and not be tedious to consume, in this case I decided to use [Roboto](https://fonts.google.com/specimen/Roboto+Flex) for the body text and [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) for the headers to give them more personality and make them more interesting.

As far as color is concerned I decided to use very bright and friendly colors on the home page to emphasize the first 5 chapters of the regulation and thus invite the user to read more about it since these are the most important and have a greater relevance. I also used various shades of blue in certain elements to provide a sense of tranquility to the user while reading content on legal issues.

Overall the design of the website is clean and minimalist with a layout focused mainly on reading but without leaving aside some small animations and effects to bring a touch of fun to the site, after all, who said that a site of this type should be boring? 😄

<figure>
  <img src="https://res.cloudinary.com/edev/image/upload/v1774494861/eddiesigner.com/gdpr-3.webp" alt="☝️ Different sections of the website viewed on a mobile device." />
  <figcaption>☝️ Different sections of the website viewed on a mobile device.</figcaption>
</figure>

### Privacy first

From the very beginning Rie made a lot of emphasis that **the website should respect people's privacy**, after all this is a site containing data protection information 🙈. To meet this important requirement I had to ensure that both the CDN, Astro and the third party libraries used did not violate users' privacy through the use of cookies, logging of IP addresses or sending certain information to third party sites.

At this point it is worth noting that the site does not use any analytics or advertising plugins that could compromise the privacy of users, this consequently also helped to maintain a fast loading site and improve the SEO of the site.

<figure>
  <img src="https://res.cloudinary.com/edev/image/upload/v1774494860/eddiesigner.com/gdpr-2.webp" alt="☝️ Individual page view of a chapter in desktop size." />
  <figcaption>☝️ Individual page view of a chapter in desktop size.</figcaption>
</figure>

## Final thoughts

I am glad to have had the opportunity to work on this project because in this case it is always nice to be able to design a site from scratch and then develop it, I love to participate in the process from the conception of the idea to the release of the final product.

Also this project allowed me to learn a lot about Astro and now I can say that I feel confident to use it in any future project as it is a great framework that offers a nice development experience.

Finally **I would like to thank Rie** for trusting me and my work, I am very honored that she is happy and delighted with [the result](https://gdpr.fan/) 😍.
