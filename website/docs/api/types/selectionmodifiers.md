---
id: "selectionmodifiers"
title: "Type alias: SelectionModifiers"
sidebar_label: "SelectionModifiers"
custom_edit_url: null
hide_title: true
---

# Type alias: SelectionModifiers

Ƭ **SelectionModifiers**: *object*

The modifiers to add added when days are selected.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`disabled`? | [*Matcher*](matcher.md) | Selection will add this modifier when the min/max amount of days has been selected.   |
`range_end`? | [*Matcher*](matcher.md) | Selection will add this modifier to the day that is starting a selected range.   |
`range_middle`? | [*Matcher*](matcher.md) | Selection will add this modifier to the days inside a range.   |
`range_start`? | [*Matcher*](matcher.md) | Selection will add this modifier to the day that is starting a selected range.   |
`selected`? | [*Matcher*](matcher.md)[] | Selection will add this modifier to the days that have been selected.   |
