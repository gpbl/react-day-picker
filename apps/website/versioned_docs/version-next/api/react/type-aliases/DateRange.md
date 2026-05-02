# Type Alias: DateRange

> **DateRange** = \{ `from`: `Date` \| `undefined`; `to?`: `Date`; \}

Defined in: [packages/react-day-picker/src/types/shared.ts:202](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/shared.ts#L202)

A range of dates. Unlike [DateInterval](DateInterval.md), the range ends are included.

## Example

```ts
// Match days between February 2 and February 5, 2019
  const matcher: DateRange = {
    from: new Date(2019, 1, 2),
    to: new Date(2019, 1, 5),
  };
```

## Properties

### from

> **from**: `Date` \| `undefined`

Defined in: [packages/react-day-picker/src/types/shared.ts:202](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/shared.ts#L202)

***

### to?

> `optional` **to?**: `Date`

Defined in: [packages/react-day-picker/src/types/shared.ts:202](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/shared.ts#L202)
