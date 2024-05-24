# Function: isMatch()

> **isMatch**(`day`, `matchers`): `boolean`

Returns whether a day matches against at least one of the given Matchers.

```tsx
const day = new Date(2022, 5, 19);
const matcher1: DateRange = {
   from: new Date(2021, 12, 21),
   to: new Date(2021, 12, 30)
}
const matcher2: DateRange = {
   from: new Date(2022, 5, 1),
   to: new Date(2022, 5, 23)
}

const isMatch(day, [matcher1, matcher2]); // true, since day is in the matcher1 range.
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `day` | `Date` |
| `matchers` | [`Matcher`](../type-aliases/Matcher.md)[] |

## Returns

`boolean`

## Source

[src/contexts/Modifiers/utils/isMatch.ts:41](https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/contexts/Modifiers/utils/isMatch.ts#L41)
