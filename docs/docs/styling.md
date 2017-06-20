---
layout: docs
title: Styling
permalink: docs/styling.html
---

You must style the component with your own CSS: start with [src/style.css](https://github.com/gpbl/react-day-picker/blob/master/src/style.css) as template, copy it in a new CSS file and hack it to fit the desired style.

> The CSS classes follow a [BEM-like syntax](https://css-tricks.com/bem-101/).

* If you need to customize the CSS class names, use the [`classNames`](api.md#classnames) prop.
* You can also use [CSS Modules](css-modules.md).

### Modifiers

Modifiers added to react-day-picker through the `modifiers` prop becomes CSS modifiers for the `DayPicker-day` class. For example, if you use a `isFirstDayOfMonth` modifier, the CSS class to style the corrispondent day cells is `DayPicker-day--isFirstDayOfMonth`.

### Importing the style template

You can use import the CSS template in your Sass files, for example from `node_modules`:

```css
@import "../node_modules/react-day-picker/lib/style"
```

or in your JS files (e.g. when using [webpack-css-loader](https://github.com/webpack/css-loader)):

```js
import "react-day-picker/lib/style.css";
```

Keep in mind the default style is not production-tested and may change between releases.
