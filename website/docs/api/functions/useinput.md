---
id: "useinput"
title: "Function: useInput"
sidebar_label: "useInput"
custom_edit_url: null
hide_title: true
---

# Function: useInput

▸ **useInput**(`initialDay`: Date, `formatStr`: *string*, `options?`: UseInputOptions): UseInput

Hook to bind a input with a calendar.

```jsx
const { dayPickerProps, inputProps } = useInput(new Date());

<DayPicker {...dayPickerProps} />
<input {...inputProps} />
```

#### Parameters:

Name | Type |
------ | ------ |
`initialDay` | Date |
`formatStr` | *string* |
`options?` | UseInputOptions |

**Returns:** UseInput

Defined in: hooks/useInput/useInput.ts:26
