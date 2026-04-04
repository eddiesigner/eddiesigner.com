---
title: 'How to create a Heading component with Vue'
description: 'Creating a Heading component can be a bit tricky, this post explains how to create it using Vue in a more efficient way.'
pubDate: 'Dec 03 2021'
tags: ['frontend', 'vue', 'javascript']
heroImage: ''
---

## The problem

In web applications it is very common to use heading elements to display text elements such as page titles or section titles and as you probably already know there are 6 different levels of headings that can be used in a web page, from `<h1>` to `<h6>`. At first you would think that creating a component for this type of element is something very simple but you quickly realize that maybe it is not so simple, why? Let's take a look at the following example of a heading component written using Vue:

```vue
<template>
  <div>
    <h1 v-if="type === 'h1'" class="heading h1">
      <slot />
    </h1>
    <h2 v-if="type === 'h2'" class="heading h2">
      <slot />
    </h2>
    <h3 v-if="type === 'h3'" class="heading h3">
      <slot />
    </h3>
    <h4 v-if="type === 'h4'" class="heading h4">
      <slot />
    </h4>
    <h5 v-if="type === 'h5'" class="heading h5">
      <slot />
    </h5>
    <h6 v-if="type === 'h6'" class="heading h6">
      <slot />
    </h6>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'h1',
      required: true,
    },
  },
}
</script>
```

This component is fully functional, however, it is not the most efficient component in the world and it also generates some code smell, the biggest problem is that there is a lot of repeated code and if you want to change something you will have to do it in multiple places, it is definitely a component that can be improved to make it more manageable and easier to use and maintain.

## The solution

To create a version of this same component much simpler and easier to maintain we can make use of the `render` function which allows us to go beyond the possibilities offered by the templates, thanks to this function we can create nodes programmatically. To better understand how this function can help us in these cases let's see a refactored version of the same component that uses the `render` function:

```vue
<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  render(createElement) {
    return createElement(
      `h${this.level}`, // tag name
      { class: `heading h${this.level}` }, // attributes
      this.$slots.default // array of children
    )
  },
}
</script>
```

Much cleaner! But how does it work? The `render` function accepts the `createElement` function as an argument which you can use to create the element you want, to that function you can pass the following arguments: **tag name**, **attributes object** and an **array of child nodes** (the last two are optional). The `createElement` function will return a virtual node which will be converted to a DOM element and inserted into the document when necessary.

In our case the tag name is defined by concatenating the letter `h` with the value of the `level` prop, for example, if we pass the number `2` as level the tag `<h2>` would be generated. The second argument is an object where we define the class or classes that our heading will have and finally we pass the default slot in which the text that we insert between the tags of our heading component will be displayed.

Below you can see the component working:

<iframe height="300" style="width: 100%;" scrolling="no" title="Vue Heading component" src="https://codepen.io/eddiesigner/embed/ExwjzGO?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true">
  See the Pen <a href="https://codepen.io/eddiesigner/pen/ExwjzGO">
  Vue Heading component</a> by Eduardo Gómez (<a href="https://codepen.io/eddiesigner">@eddiesigner</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Conclusion

While it is true that this technique is very useful for this type of scenarios, don't forget that it could also come in handy for other types of components, for example you could use it for tooltips, alerts, notifications, etc. Usually it is a good option when you need to create a component that can display different variations of the same type of content, if you find yourself repeating the same template for each variation you might want to take a look at this solution.

If you want to know more about the capabilities offered by the `render` function, I recommend that you take a look at the [official documentation](https://vuejs.org/v2/guide/render-function.html) that is available online, I'm sure it will be very helpful for you.
