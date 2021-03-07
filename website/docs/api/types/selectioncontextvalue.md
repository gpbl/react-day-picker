---
id: "selectioncontextvalue"
title: "Type alias: SelectionContextValue"
sidebar_label: "SelectionContextValue"
custom_edit_url: null
hide_title: true
---

# Type alias: SelectionContextValue

Ƭ **SelectionContextValue**: *object*

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`handleDayClick` | [*DayClickEventHandler*](dayclickeventhandler.md) | The event handler to add to the `dayclick` event to enable days selection on click.   |
`modifiers` | [*SelectionModifiers*](selectionmodifiers.md) | The modifiers to assign to the days in the calendar according to the selection status.   |
`reset` | () => *void* | Reset the selected days to its initial state.   |
`selected` | [*Matcher*](matcher.md) \| *undefined* | The days that are selected.   |
