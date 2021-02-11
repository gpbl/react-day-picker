---
id: "getcaptionprops"
title: "Function: getCaptionProps"
sidebar_label: "getCaptionProps"
custom_edit_url: null
hide_title: true
---

# Function: getCaptionProps

▸ **getCaptionProps**(`dayPickerProps`: [*DayPickerProps*](../interfaces/daypickerprops.md)): [*CaptionHtmlProps*](../interfaces/captionhtmlprops.md)

Return props for creating a [[MonthCaption]] component.

#### Usage

Use this helper when changing the caption using the
[DayPickerProps.components](../interfaces/daypickerprops.md#components) prop.

```jsx
function MonthCaption({ dayPickerProps }): JSX.Element {
  const { containerProps } = getCaptionProps(dayPickerProps);
  return (
    <caption {...containerProps}>
      Something inside the caption
    </caption>;
  )
}
<DayPicker components={{ MonthCaption }} />
```

#### Parameters:

Name | Type |
------ | ------ |
`dayPickerProps` | [*DayPickerProps*](../interfaces/daypickerprops.md) |

**Returns:** [*CaptionHtmlProps*](../interfaces/captionhtmlprops.md)
