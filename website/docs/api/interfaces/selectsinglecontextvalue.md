---
id: "selectsinglecontextvalue"
title: "Interface: SelectSingleContextValue"
sidebar_label: "SelectSingleContextValue"
custom_edit_url: null
hide_title: true
---

# Interface: SelectSingleContextValue

Represents the value of a [[SelectSingleContext]].

## Properties

### handleDayClick

• **handleDayClick**: [*DayClickEventHandler*](../types/dayclickeventhandler.md)

Event handler to attach to the day button to enable the single select.

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

• **selected**: *undefined* \| Date

The day that has been selected.
