---
id: "navigationcontextvalue"
title: "Interface: NavigationContextValue"
sidebar_label: "NavigationContextValue"
custom_edit_url: null
hide_title: true
---

# Interface: NavigationContextValue

Represent the value of a [NavigationContext](../variables/navigationcontext.md).

## Properties

### currentMonth

• **currentMonth**: Date

The currently displayed month or, in case of multiple months, the first of them.

___

### displayMonths

• **displayMonths**: Date[]

The months to render with DayPicker. When `numberOfMonths` is `1` contains only the `currentMonth`.

___

### focusedDay

• `Optional` **focusedDay**: *undefined* \| Date

The day that should focus when rendering. Used for keyboard navigation.

___

### nextMonth

• `Optional` **nextMonth**: *undefined* \| Date

The month coming after the current one.  Undefined when cannot navigate later months.

___

### prevMonth

• `Optional` **prevMonth**: *undefined* \| Date

The month coming before the current one. Undefined when cannot navigate earlier months.
