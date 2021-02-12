---
id: "useinput"
title: "Function: useInput"
sidebar_label: "useInput"
custom_edit_url: null
hide_title: true
---

# Function: useInput

▸ **useInput**(`initialDay`: Date, `formatStr`: *string*, `options?`: [*UseInputOptions*](../types/useinputoptions.md)): [*UseInput*](../types/useinput.md)

Return the props for binding an input field with DayPicker.

**Example**

```jsx showOutput open=no
function Example() {
  const { dayPickerProps, inputProps } = useInput(new Date(), 'yyyy-MM-dd');
  return (
    <>
      <p>
        Type a day or pick one from the calendar:
        <input {...inputProps} placeholder="YYYY-MM-DD" />
      </p>
      <DayPicker {...dayPickerProps} />
    </>
  );
}
```

#### Parameters:

Name | Type |
------ | ------ |
`initialDay` | Date |
`formatStr` | *string* |
`options?` | [*UseInputOptions*](../types/useinputoptions.md) |

**Returns:** [*UseInput*](../types/useinput.md)
