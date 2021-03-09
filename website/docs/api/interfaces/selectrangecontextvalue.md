---
id: "selectrangecontextvalue"
title: "Interface: SelectRangeContextValue"
sidebar_label: "SelectRangeContextValue"
custom_edit_url: null
hide_title: true
---

# Interface: SelectRangeContextValue

Represents the value of a [[SelectRangeContext]].

## Properties

### handleDayClick

• **handleDayClick**: [*DayClickEventHandler*](../types/dayclickeventhandler.md)

Event handler to attach to the day button to enable the range select.

___

### modifiers

• **modifiers**: *object*

The modifiers for the corresponding selection.

#### Type declaration:

Name | Type |
:------ | :------ |
`disabled`? | [*Matcher*](../types/matcher.md)[] |
`range_end`? | [*Matcher*](../types/matcher.md)[] |
`range_middle`? | [*Matcher*](../types/matcher.md)[] |
`range_start`? | [*Matcher*](../types/matcher.md)[] |
`selected`? | [*Matcher*](../types/matcher.md)[] |

___

### selected

• **selected**: *undefined* \| [*DateRange*](../types/daterange.md)

The range of days that has been selected.
