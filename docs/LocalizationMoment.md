# Localization with moment.js

To localize the calendar with [moment.js](http://www.momentjs.com):

1. make sure [moment](https://www.npmjs.com/package/moment) is included in your dependencies 
2. make sure the required moment's locale data is available when rendering the day picker
3. import `LocaleUtils` from `react-day-picker/moment` and pass it to the `localeUtils` props
4. use the `locale` prop to pass the current locale

[See an example](http://www.gpbl.org/react-day-picker/examples/#localized).

### Code

The following component shows four day pickers: english, japanese, arabic and italian.

```jsx

import React from "react";
import DayPicker from "react-day-picker";

// Use this util to format the calendar values according to the
// selected locale with moment.js
import LocaleUtils from "react-day-picker/moment";

// Make sure moment.js has the required locale data
import "moment/locale/ja";
import "moment/locale/ar";
import "moment/locale/it";

function LocalizedExample() {
  return (
    <div>

      <p>English</p>
      <DayPicker localeUtils={ LocaleUtils } locale="en" />

      <p>Japanese</p>
      <DayPicker localeUtils={ LocaleUtils } locale="jp" />

      <p>Arabic</p>
      <DayPicker localeUtils={ LocaleUtils } locale="ar" />

      <p>Italian</p>
      <DayPicker localeUtils={ LocaleUtils } locale="it" />

    </div>
  );
}
```
