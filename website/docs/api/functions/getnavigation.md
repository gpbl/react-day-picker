---
id: "getnavigation"
title: "Function: getNavigation"
sidebar_label: "getNavigation"
custom_edit_url: null
hide_title: true
---

# Function: getNavigation

▸ **getNavigation**(`dayPickerProps`: [*DayPickerProps*](../interfaces/daypickerprops.md)): *object*

Return the props to apply to the elements of the [Navigation](navigation.md) component.

#### Parameters:

Name | Type |
------ | ------ |
`dayPickerProps` | [*DayPickerProps*](../interfaces/daypickerprops.md) |

**Returns:** *object*

Name | Type |
------ | ------ |
`containerProps` | *Pick*<JSX.IntrinsicElements[*div*], *className* \| *style*\> |
`nextMonth` | Date \| *undefined* |
`nextProps` | *Pick*<JSX.IntrinsicElements[*button*], *className* \| *style* \| *onClick* \| *disabled*\> |
`prevMonth` | Date \| *undefined* |
`prevProps` | *Pick*<JSX.IntrinsicElements[*button*], *className* \| *style* \| *onClick* \| *disabled*\> |
