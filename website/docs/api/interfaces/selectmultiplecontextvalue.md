---
id: "selectmultiplecontextvalue"
title: "Interface: SelectMultipleContextValue"
sidebar_label: "SelectMultipleContextValue"
custom_edit_url: null
hide_title: true
---

# Interface: SelectMultipleContextValue

Represents the value of a [SelectMultipleContext](../variables/selectmultiplecontext.md).

## Properties

### handleDayClick

• **handleDayClick**: [*DayClickEventHandler*](../types/dayclickeventhandler.md)

Event handler to attach to the day button to enable the multiple select.

___

### modifiers

• **modifiers**: *object*

The modifiers for the corresponding selection.

#### Type declaration:

Name | Type |
:------ | :------ |
`disabled`? | [*Matcher*](../types/matcher.md)[] |
`selected`? | [*Matcher*](../types/matcher.md)[] |

___

### selected

• **selected**: *undefined* \| Date[]

The days that have been selected.
