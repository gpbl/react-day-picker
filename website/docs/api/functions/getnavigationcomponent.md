---
id: "getnavigationcomponent"
title: "Function: getNavigationComponent"
sidebar_label: "getNavigationComponent"
custom_edit_url: null
hide_title: true
---

# Function: getNavigationComponent

▸ **getNavigationComponent**(`dayPickerProps`: *Pick*<[*DayPickerProps*](../interfaces/daypickerprops.md), *classNames* \| *styles* \| *onMonthChange*\>): *object*

Return the props to apply to the elements of the [Navigation](navigation.md) component.

#### Parameters:

Name | Type |
------ | ------ |
`dayPickerProps` | *Pick*<[*DayPickerProps*](../interfaces/daypickerprops.md), *classNames* \| *styles* \| *onMonthChange*\> |

**Returns:** *object*

Name | Type |
------ | ------ |
`containerProps` | *Pick*<JSX.IntrinsicElements[*div*], *className* \| *style*\> |
`nextMonth` | Date \| *undefined* |
`nextProps` | *Pick*<JSX.IntrinsicElements[*button*], *className* \| *style* \| *onClick* \| *disabled*\> |
`prevMonth` | Date \| *undefined* |
`prevProps` | *Pick*<JSX.IntrinsicElements[*button*], *className* \| *style* \| *onClick* \| *disabled*\> |
