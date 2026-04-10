---
title: 'How to truncate text with CSS'
description: 'In this post I show a technique of how to truncate one or more lines of text with CSS only and that is compatible with all modern browsers.'
pubDate: 'Jan 13 2021'
tags: ['CSS', 'frontend']
---

In my daily work I have had the need to truncate either one or more lines of text, many times this seems to be a simple task but in reality it is not so much, there is no magic CSS property that solves the problem effectively, it is true that we can use `text-overflow: ellipsis;` but this line alone will not solve the problem, we must add multiple properties, especially if we want to truncate several lines of text.

Wouldn't it be great to reduce all that difficult work into one line that we can reuse in any project?

I usually use [SASS](https://sass-lang.com/) when writing CSS code so I decided to create a [mixin](https://sass-lang.com/documentation/at-rules/mixin) to save myself all that work. Bellow I will show you a couple of examples of how I use this mixin, later I will describe how it works and show you the whole code so you can use it in your projects.

Truncate one line of text:

```sass
.truncate-one-line {
  /* Truncates one line of text with font size of 0.8125rem and 1.4 of line height */
  @include truncate(1, 0.8125, 1.4);
}
```

Truncate seven lines of text:

```sass
.truncate-seven-lines {
  /* Truncates seven lines of text with font size of 0.9375rem and 1.7 of line height */
  @include truncate(7, 0.9375, 1.7);
}
```

Here is a working demo so you can try it out for yourself:

<iframe height="520" style="width: 100%;" scrolling="no" title="How to truncate text with CSS" src="https://codepen.io/eddiesigner/embed/mdrzXQr?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true">
  See the Pen <a href="https://codepen.io/eddiesigner/pen/mdrzXQr">
  How to truncate text with CSS</a> by Eduardo Gómez (<a href="https://codepen.io/eddiesigner">@eddiesigner</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Pretty cool, isn't it? 😎

## Definition of the mixin

The mixin is called `truncate` and accepts three parameters: **number of lines to be truncated**, **font size** and **line height**. All three parameters are necessary in order to calculate the height that the text block will potentially have and thus be able to truncate it effectively.

The first parameter (`$lines`) I think does not need more explanation, it is simply the number of lines that you want to truncate.

As for the second one (`$font-size`) it is important to mention that the value has to be in *rems* and it is not necessary to write `rem` along with the number explicitly since the mixin adds it automatically. If you want to use `em` or `px` you could slightly modify the mixin, in my case I defined it this way because using `rem` has some extra benefits.

The third parameter (`$line-height`) is also self-explanatory although it is convenient to point out that the value must be expressed as a number, either integer or fractional, I consider this better than using some other type of value.

Once we understand the above we can start to define the mixin in the following way:

```sass
@mixin truncate($lines: 1, $font-size: 1rem, $line-height: 1.3) {
  /* Body of the mixin */
}
```

As you may have noticed, the mixin has some default values for each parameter just in case.

## Body of the mixin

Below you can see the first three lines of the body of the mixin with a brief explanation:

```sass
$display: block;
$white-space: nowrap;
```

The following three variables are defined in the previous lines:

`$display`: By default the value of this variable is `block`, later the value should be different in case the number of lines you want to truncate is greater than one.

`$white-space`: The value of this variable is `nowrap` when it is a single line, as in the previous variable this value should change in case the number of lines is greater than one.

The second part of the body of the mixin looks like this:

```sass
@if $lines > 1 {
  $display: -webkit-box;
  $white-space: normal;
}
```

In this part of the mixin I change the values of the first two variables I defined at the beginning in case the number of lines to be truncated is greater than one.

Webkit-based browsers do not allow to truncate text when the number of lines is greater than one unless the value of the `display` property is `-webkit-box`, other browsers such as Firefox and Edge seem to support this value without problems so I guess it works well in all modern browsers.

Since we want the text to collapse in case the number of lines is greater than one we must change the value of the `white-space` property to `normal`.

Now let's describe the last part of the mixin which looks like this:

```sass
display: $display;
max-width: 100%;
max-height: #{$font-size * $line-height * $lines}rem;
font-size: #{$font-size}rem;
line-height: $line-height;
white-space: $white-space;
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: $lines;
-webkit-box-orient: vertical;
```

```sass
display: $display;
```

Here I simply assign the value of the variable `$display` to the property with the same name.

```sass
max-width: 100%;
```

With this line I make sure that the width of the text block is not greater than the width of the element that contains it.

```sass
max-height: #{$font-size * $line-height * $lines}rem;
```

To calculate the maximum height of the text block I first multiply the font size by the line height and that by the number of lines and finally I add `rem` at the end of the value using to keep the same size value.

```sass
font-size: #{$font-size}rem;
line-height: $line-height;
white-space: $white-space;
```

In these three lines I simply assign the value of the variables `$font-size` and `$white-space` to the properties that correspond to them, and also assign the value of the parameter `$line-height` to the property with the same name. Note how I use interpolation to add `rem` at the end of the font size value.

```sass
overflow: hidden;
text-overflow: ellipsis;
```

These two lines are an important part of the mixin since they keep the text within the width of the element itself and also make it possible to display the ellipsis (`...`) at the end of the truncated text.

```sass
-webkit-line-clamp: $lines;
-webkit-box-orient: vertical;
```

The `-webkit-line-clamp` property allows limiting of the contents of the text block to the specified number of lines and it only works in combination with the `display` property set to `-webkit-box` and the `-webkit-box-orient` property set to `vertical`.

## Full implementation of the mixin

Here' s the complete implementation of the mixin so you can appreciate it in detail, if you want to use it in your projects just copy and paste it in one of your SASS documents.

```sass
@mixin truncate($lines: 1, $font-size: 1rem, $line-height: 1.3) {
  $display: block;
  $white-space: nowrap;

  @if $lines > 1 {
    $display: -webkit-box;
    $white-space: normal;
  }

  display: $display;
  max-width: 100%;
  max-height: #{$font-size * $line-height * $lines}rem;
  font-size: #{$font-size}rem;
  line-height: $line-height;
  white-space: $white-space;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: $lines;
  -webkit-box-orient: vertical;
}
```

This implementation has been tested by myself in Chrome, Firefox, Safari, Edge and Brave and works fine. In older browsers like IE 11 the text will be truncated but the ellipsis (`...`) at the end of the truncated text will not be shown.

## Full browser support

As I mentioned before, this implementation works only in modern browsers, if you want to support older browsers I'm afraid you'll need some javascript to achieve it, if so I recommend the [Shave plugin](https://dollarshaveclub.github.io/shave/) which I've also tried in other opportunities and it works very well.
