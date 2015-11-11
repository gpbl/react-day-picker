# Tips

## Memoize the modifiers functions for better performance

Functions passed to `modifiers` prop are called for each day when rendering the component. If you are doing heavy calculations within the modifier functions, you may want to memoize them to improve performance.

For example, with [lodash/memoize](https://lodash.com/docs#memoize):

```jsx
import React from "react";
import { memoize } from "lodash";

function doHeavyThingWithDay (day) {
  // do complex things...
  return true;
}
const modifiers = {
  aModifier: memoize(doHeavyThingWithDay)
};

function myComponent() {
  return <DayPicker modifiers={modifiers} />;
}
```
