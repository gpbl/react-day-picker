---
id: "addtorange"
title: "Function: addToRange"
sidebar_label: "addToRange"
custom_edit_url: null
hide_title: true
---

# Function: addToRange

▸ **addToRange**(`range`: DaysRange, `day`: Date): DaysRange

Use this utility to add a day to an existing range.

The returned range takes in account the `undefined` range values and if the
added day is already present in the range.

#### Parameters:

Name | Type |
------ | ------ |
`range` | DaysRange |
`day` | Date |

**Returns:** DaysRange

Defined in: hooks/useRange/addToRange.ts:13
