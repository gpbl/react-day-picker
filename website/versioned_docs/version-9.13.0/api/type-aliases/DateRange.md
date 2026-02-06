# Type Alias: DateRange

> **DateRange** = \{ `from`: `Date` \| `undefined`; `to?`: `Date`; \}

Defined in: [src/types/shared.ts:202](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L202)

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

Defined in: [src/types/shared.ts:202](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L202)

***

### to?

> `optional` **to**: `Date`

Defined in: [src/types/shared.ts:202](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L202)
