---
title: 'Mabel'
type: 'Mobile App'
year: '2021'
heroImage: '../../assets/img/work/mabel.webp'
pubDate: 'Feb 28 2026'
---

## Recognizing a problem

Over time I have accumulated many sources to keep myself updated on topics related to design and frontend development as I am very passionate about these topics, however, that has also meant subscribing to countless newsletters and following many people and topics in various social networks. The problem is that over time you lose track of where you leave your email address, you start receiving spam, not all the content is really relevant and everything is chaos.

So one day I thought that maybe I was not the only one who might have this problem and decided to do something about it. [Mabel](https://getmabel.app/) is my proposal to try to bring some order to this chaos, the idea is that with a single application both designers and developers can read only relevant news about design and frontend development to stay updated in an easy and convenient way, and above all without giving your email address to third parties.

<figure>
  <img src="https://res.cloudinary.com/edev/image/upload/v1774493658/eddiesigner.com/Mabel-Screen-1-min.webp" alt="☝️ App screens showing the list of topics, the inbox and search." />
  <figcaption>☝️ App screens showing the list of topics, the inbox and search.</figcaption>
</figure>

## Design and implementation

Once I defined the problem I wanted to solve, I made a list of the functionalities that the app would offer from the beginning, with the purpose of restricting the number of them in order to be able to launch a functional product in a reasonable time. This list also helped me to carry out a research process to identify the technical challenges and technologies that I could use for the development of the app.

Afterwards I made a low fidelity prototype on paper to define and organize the different sections of the app, as well as to define the information that would be shown in each of them. At the same time this process helped me to discard ideas and rethink some others. Once this process was finished I went on to design all the screens of the app using the typography, colors and illustrations that best suited the identity I wanted it to communicate.

<figure>
  <img src="https://res.cloudinary.com/edev/image/upload/v1774493658/eddiesigner.com/Mabel-Screen-2-min.webp" alt="☝️ Some of the app artboards I made on Sketch." />
  <figcaption>☝️ Some of the app artboards I made on Sketch.</figcaption>
</figure>

Once the design was finished I started with the development of the app, I decided to use [React Native](https://reactnative.dev/) so that with a single code base I could distribute it for both iOS and Android. The app itself may seem simple but in reality the project consists of other parts such as a Firebase database where all the information of the articles is stored, a content manager to manage the information visually ([Retool](https://retool.com/)), a series of cloud functions to synchronize the information of the content manager with the search engine used by the app ([Algolia](https://www.algolia.com/)), a system to integrate push notifications in the app and another system to make in-app purchases within the app ([Revenuecat](https://www.revenuecat.com/)).

<figure>
  <img src="https://res.cloudinary.com/edev/image/upload/v1774493660/eddiesigner.com/Mabel-Screen-3-min.webp" alt="☝️ Screens of the app in dark mode and Mabel Pro subscription screen." />
  <figcaption>☝️ Screens of the app in dark mode and Mabel Pro subscription screen.</figcaption>
</figure>

## Release and next steps

The app is now available on both the [App Store](https://apps.apple.com/app/mabel/id1559316164) and [Google Play](https://play.google.com/store/apps/details?id=io.eduardogomez.mabel) and so far I have fixed some issues and improved some user experience issues thanks to user feedback. I am constantly adding more and more quality articles to the app and I am also planning some future updates where I will implement new features and changes to adapt to the evolution of the industry both in design and frontend development.
