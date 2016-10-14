# Styling

You must style the component with your own CSS: start with [src/style.css](https://github.com/gpbl/react-day-picker/blob/master/src/style.css) as template, copy it in a new CSS file and hack it to fit the desired style.

> The CSS classes follow a [BEM-like syntax](https://css-tricks.com/bem-101/).

### Modifiers

Modifiers added to the Day Picker through the `modifiers` prop becomes CSS modifiers for the `DayPicker-day` class. For example, if you use a `isFirstDayOfMonth` modifier, the CSS class to style the corrispondent day cells is `DayPicker-day--isFirstDayOfMonth`.

### Importing the style template

You can use import the CSS template in your Sass files, for example from `node_modules`:

```scss
@import "../node_modules/react-day-picker/lib/style"
```

or in your JS files (e.g. when using [webpack-css-loader](https://github.com/webpack/css-loader)):

```javascript
import "react-day-picker/lib/style.css"
```

Keep in mind the default style is not production-tested and may change between releases.
