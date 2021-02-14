---
id: "modifiersstatus"
title: "Type alias: ModifiersStatus"
sidebar_label: "ModifiersStatus"
custom_edit_url: null
hide_title: true
---

# Type alias: ModifiersStatus

Ƭ **ModifiersStatus**: { [modifier in Modifier]?: boolean}

Represent the status of a modifiers if matched against a day according to its
[Matcher](matcher.md).

For example, the following day has the `selected` modifiers, but not `today`
or `custom`.

```js
const modifiers: ModifiersStatus = {
 today: false,
 selected: true,
 custom: false,
}
```

Defined in: [types/ModifiersStatus.ts:18](https://github.com/gpbl/react-day-picker/blob/7a46f8df/packages/react-day-picker/src/types/ModifiersStatus.ts#L18)
