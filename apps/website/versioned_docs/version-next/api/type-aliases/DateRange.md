# Type Alias: DateRange

> **DateRange** = \{ `from`: `Date` \| `undefined`; `to?`: `Date`; \}

Defined in: [src/types/shared.ts:202](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/shared.ts#L202)

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

Defined in: [src/types/shared.ts:202](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/shared.ts#L202)

***

### to?

> `optional` **to**: `Date`

Defined in: [src/types/shared.ts:202](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/shared.ts#L202)
