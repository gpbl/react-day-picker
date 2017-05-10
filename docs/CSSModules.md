# Styling with CSS Modules

Once you have setup your build system to import [CSS Modules](https://github.com/css-modules/css-modules), use the [classNames prop](DayPickerAPI.md#classnames) to pass to the component the imported styles:


```jsx
import React from 'react';
import DayPicker from 'react-day-picker';

import styles from '../styles/cssmodules.css';

export default function CSSModules() {
  return <DayPicker classNames={ styles } />
}
```

See also [this example](http://react-day-picker.js.org/examples/?cssModules).
