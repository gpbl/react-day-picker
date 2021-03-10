---
id: "useinput"
title: "Function: useInput"
sidebar_label: "useInput"
custom_edit_url: null
hide_title: true
---

# Function: useInput

▸ **useInput**(`formatStr`: *string*, `options?`: UseInputOptions): *object*

Return props for binding an input field to DayPicker.

#### Parameters:

Name | Type |
:------ | :------ |
`formatStr` | *string* |
`options?` | UseInputOptions |

**Returns:** *object*

Name | Type | Description |
:------ | :------ | :------ |
`dayPickerProps` | UseInputDayPickerProps | The props to pass to a DayPicker component.   |
`fieldProps` | UseInputFieldProps | The props to pass to an input field.   |
`reset` | () => *void* | A function to reset to the initial state.   |
`setSelected` | (`day`: Date) => *void* | A function to set the selected day.   |
