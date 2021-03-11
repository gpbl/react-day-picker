---
id: "useinputoptions"
title: "Interface: UseInputOptions"
sidebar_label: "UseInputOptions"
custom_edit_url: null
hide_title: true
---

# Interface: UseInputOptions

## Properties

### defaultSelected

• `Optional` **defaultSelected**: Date

The default selected day.

___

### format

• `Optional` **format**: *string*

The format string for formatting the input field. See https://date-fns.org/docs/format for a list of format strings. Default to `PP`.

___

### fromDate

• `Optional` **fromDate**: Date

The earliest day to start the month navigation.

___

### fromMonth

• `Optional` **fromMonth**: Date

The earliest month to start the month navigation.

___

### fromYear

• `Optional` **fromYear**: *number*

The earliest year to start the month navigation.

___

### locale

• `Optional` **locale**: Locale

The date-fns locale object to localize the user interface. Defaults to
`en-US`.

```
import es from 'date-fns/locale/es';
```

See also date-fns [Internationalization
guide](https://date-fns.org/docs/I18n).

___

### required

• `Optional` **required**: *boolean*

Make the selection required.

___

### toDate

• `Optional` **toDate**: Date

The latest day to end the month navigation.

___

### toMonth

• `Optional` **toMonth**: Date

The latest month to end the month navigation.

___

### toYear

• `Optional` **toYear**: *number*

The latest year to end the month navigation.

___

### today

• `Optional` **today**: Date

The date to use as "today".
