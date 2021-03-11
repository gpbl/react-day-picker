---
id: "useinput"
title: "Interface: UseInput"
sidebar_label: "UseInput"
custom_edit_url: null
hide_title: true
---

# Interface: UseInput

Represent the value returned by [useInput](../functions/useinput.md).

## Properties

### dayPickerProps

• **dayPickerProps**: [*UseInputDayPickerProps*](useinputdaypickerprops.md)

The props to pass to a DayPicker component: `<DayPicker {...dayPickerProps} />`

___

### fieldProps

• **fieldProps**: [*UseInputFieldProps*](useinputfieldprops.md)

The props to pass to an input field: `<input {...fieldProps} />`

___

### reset

• **reset**: () => *void*

A function to reset to the initial state.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

___

### setSelected

• **setSelected**: (`day`: Date) => *void*

A function to set the selected day.

#### Type declaration:

▸ (`day`: Date): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`day` | Date |

**Returns:** *void*
