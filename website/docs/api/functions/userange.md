---
id: "userange"
title: "Function: useRange"
sidebar_label: "useRange"
custom_edit_url: null
hide_title: true
---

# Function: useRange

▸ **useRange**(`initialRange?`: DaysRange): [DaysRange, (`day`: Date) => *void*]

Returns a range and a state setter for handing ranges when selecting dates.

**Example**

```jsx showOutput open=false
function Example() {
  const [range, setRange] = useRange();
  return <DayPicker onDayClick={setRange} selected={range} />;
}
```

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`initialRange` | DaysRange | ... |

**Returns:** [DaysRange, (`day`: Date) => *void*]
