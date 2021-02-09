---
id: "getcaptionprops"
title: "Function: getCaptionProps"
sidebar_label: "getCaptionProps"
custom_edit_url: null
hide_title: true
---

# Function: getCaptionProps

▸ **getCaptionProps**(`dayPickerProps`: [*DayPickerProps*](../interfaces/daypickerprops.md)): [*CaptionHtmlProps*](../types/captionhtmlprops.md)

Return props for creating a [[MonthCaption]] component.

#### Usage

Use this helper when swizzling the caption using the
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

**Returns:** [*CaptionHtmlProps*](../types/captionhtmlprops.md)

Defined in: [components/MonthCaption/getCaptionProps.ts:24](https://github.com/gpbl/react-day-picker/blob/a5117a0c/packages/react-day-picker/src/components/MonthCaption/getCaptionProps.ts#L24)
