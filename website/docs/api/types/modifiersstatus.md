---
id: "modifiersstatus"
title: "Type alias: ModifiersStatus"
sidebar_label: "ModifiersStatus"
custom_edit_url: null
hide_title: true
---

# Type alias: ModifiersStatus

Ƭ **ModifiersStatus**: { [modifier in Modifier]?: boolean}

Describe if a modifiers is matched by a day according to its [Matcher](matcher.md).

```
const modifiers: ModifiersStatus = {
 today: false,
 selected: true,
 custom: false,
}
```

Defined in: [components/DayPicker/types/Modifiers.ts:19](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/DayPicker/types/Modifiers.ts#L19)
