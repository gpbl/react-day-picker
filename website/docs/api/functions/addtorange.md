---
id: "addtorange"
title: "Function: addToRange"
sidebar_label: "addToRange"
custom_edit_url: null
hide_title: true
---

# Function: addToRange

▸ **addToRange**(`range`: [*DateRange*](../types/daterange.md), `day`: Date, `required?`: *boolean*): [*DateRange*](../types/daterange.md)

Add a day to an existing range.

The returned range takes in account the `undefined` values and if the added
day is already present in the range.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`range` | [*DateRange*](../types/daterange.md) | - |
`day` | Date | - |
`required` | *boolean* | false |

**Returns:** [*DateRange*](../types/daterange.md)
