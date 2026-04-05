---
title: 'Gumroad Sales'
description: '<a href="https://www.raycast.com/" target="_blank" rel="noopener noreferrer">Raycast</a> extension to see your sales and products from Gumroad.'
tags: ['react', 'typescript']
heroImage: '../../assets/img/labs/gumroad.webp'
pubDate: 'Mar 05 2026'
---

At this point Raycast has become an indispensable application on my computer — I honestly can’t imagine my life without it. I use it practically every minute since it’s a very important part of my workflow. I might write a post about how I use Raycast and which extensions I use every day to boost my productivity.

## Gumroad

For several years I have used [Gumroad](https://www.gumroad.com/) as the platform where I sell the themes I develop, and although I can access the details of my sales through the web app and through their mobile app, I thought there should be a slightly faster way that wouldn’t interrupt my workflow too much. So I looked in the [Raycast extensions store](https://www.raycast.com/store) for one that would let me view my sales easily. To my surprise, I found none, even though there are hundreds of extensions for countless functionalities and services.

Then I thought I could develop an extension myself, so I did a bit of research and discovered that Gumroad offers an API that provides exactly the information I needed.

<figure>
  <img src="https://res.cloudinary.com/edev/image/upload/v1775174915/eddiesigner.com/gumroad-04.webp" alt="View with the list of all sales with the available filters" />
  <figcaption>☝️ View with the list of all sales with the available filters.</figcaption>
</figure>

## Gumroad Sales

My goal was to implement the following features so I could check relevant information about my sales at any time:

1. See the list of my most recent sales and also be able to view older sales
2. Filter sales by product
3. See the details of each sale: price, customer, date, variant, etc.
4. See the list of my available products
5. See the details of each product: price, number of sales, description, status, etc.

Fortunately Raycast has a good developer API and [comprehensive documentation](https://developers.raycast.com/), thanks to which I was able to develop the extension easily in a couple of days. Finally I name it **Gumroad Sales** and publish it in the Raycast extensions store. By the way, Raycast extensions must be developed with React and TypeScript.

<figure>
  <img src="https://res.cloudinary.com/edev/image/upload/v1775174915/eddiesigner.com/gumroad-03.webp" alt="Detail view of one of my Gumroad products" />
  <figcaption>☝️ Detail view of one of my Gumroad products.</figcaption>
</figure>

## The magic of Open Source

Since Raycast extensions are open source, anyone can create their own extension and also contribute to improving other extensions. That’s exactly what happened with my extension: since it became available in the extensions store, two people have contributed by adding more features such as direct authentication with Gumroad (instead of copying a token) and the implementation of additional filters and actions for products.

If you are curious, you can check and download my Gumroad Sales extension from the Raycast extensions store:

<a href="https://www.raycast.com/eddiesigner/gumroad" title="Install gumroad Raycast Extension"><img src="https://www.raycast.com/eddiesigner/gumroad/install_button@2x.png?v=1.1" height="64" style="height: 64px;" alt="" /></a>
