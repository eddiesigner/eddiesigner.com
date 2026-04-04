---
title: 'Use a Spacer component instead of margin with React Native'
description: 'Discover the advantages of using a Spacer component and never worry about fighting with margins again.'
pubDate: 'Dec 05 2021'
tags: ['frontend', 'react', 'react native', 'javascript']
heroImage: ''
---

## The problem with margins

We have all been in that situation, you create a component and decide to add a certain margin because the design requires it, later the requirements change and the same component must also be used in another context where the margin must be different, what do you do? Certainly there are multiple ways to solve this problem but most of the time we resort to add props to be able to adapt the margin as required and in the end we end up with a chaos of props and styles that become more difficult to manage, especially in complex projects.

The biggest problem with margins is that they are codependent, that is, they depend on the context in which you want to use them, generally you must take into account the layout of the design and the components that must be separated by such margins, this goes a little against the principles of using components where they should encapsulate their implementation as much as possible regardless of where they are used and with what other components should interact.

In apps that must also work on tablets the problem is more evident since many times the margin that in cell phones should be vertical must be inverted and work horizontally to take advantage of the device width, in this case the props that were already difficult to maintain are now even more so.

## Spacer component to the rescue

A Spacer component is a type of component whose sole purpose is to create a space between two elements based on the parameters that we provide, the space can be defined in different types of values, either a number or a percentage for example. Likewise, the space created by this component can work both vertically and horizontally.

In practice a basic (often sufficient) implementation of a Spacer component will accept two props: `size` and `horizontal`.

`size` defines the size of the space to be created, this could be defined by a number value or a percentage or some other type of value if required. This prop is mandatory.

`horizontal` defines whether the space created should be horizontal, by default the space will be vertical.

Thanks to [prop-types](https://github.com/facebook/prop-types) we can restrict the values that can be passed for both props. For example we can define that the `size` prop only accepts numbers or strings (to support percentages), likewise, we can define that the `horizontal` prop only accepts `true` or `false` to set the desired direction.

Below you can see the complete definition of this component, it really is a simple but very effective implementation:

```jsx
import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

const Spacer = ({horizontal, size}) => {
  const defaultValue = 'auto';

  return (
    <View
      style={{
        width: horizontal ? size : defaultValue,
        height: !horizontal ? size : defaultValue,
      }}
    />
  );
};

Spacer.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  horizontal: PropTypes.bool,
};

Spacer.defaultProps = {
  horizontal: false,
};

export default Spacer;
```

Its use is very simple, below you can see some examples of how to generate spaces using this component:

```jsx
// Renders a vertical space of 40 points height
<Spacer size={40} />

// Renders a horizontal space of 20 points width
<Spacer size={20} horizontal />

// Renders a vertical space of 100 points height
<Spacer size={100} />

// Renders a horizontal space of 50% width
<Spacer size="50%" horizontal />
```

To give you a better idea of how you could use this component in an app you can take a look at the following image where you can see highlighted in red the position and size of the different instances of the component that could be used to define the spaces between other components:

<figure>
  <img src="https://res.cloudinary.com/edev/image/upload/v1774402019/eddiesigner.com/CleanShot-2021-12-05-at-12.28.47.png" alt="Illustration showing how flexible this component can be." />
  <figcaption>☝️ Illustration showing how flexible this component can be.</figcaption>
</figure>

Something very important to keep in mind is that **a Spacer component is not a replacement for paddings**, if you look at the image above in more detail you will notice that I do not use this component to create the space that exists between the frame of the device and the content of the view, neither do I use it to create the space that exists between the border of the cards and its content, in those cases the padding is the best option.

## Advantages of this approach

1. Goodbye to conflicts with margins.
2. No need to add more props in your components to adapt the margins.
3. The styles of your components become more independent.
4. You can use the same component to separate components safely no matter what context or layout you are presented with.
5. You can adapt the direction and size of spaces dynamically based on factors such as device size or orientation.

This approach could also work in web applications although generally in such projects the space between elements is often defined by other factors besides the margin. Personally I can say that [I have used this approach in some of my apps](https://eddiesigner.com/mabel/) and it has worked great, it is all a matter of stopping a little and thinking when it is convenient to use it and not to exaggerate with its use, as I mentioned before, sometimes the padding is the best option and other times the margin could also be so.

My intention is not to say that you should not use margins at all but to consider other options like this one that may be more effective in many cases, ultimately it's all about creating code that is more scalable and easy to maintain in order to deliver better quality products.
