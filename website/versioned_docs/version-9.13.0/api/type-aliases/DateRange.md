# Type Alias: DateRange

> **DateRange** = \{ `from`: `Date` \| `undefined`; `to?`: `Date`; \}

Defined in: [src/types/shared.ts:228](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L228)

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

Defined in: [src/types/shared.ts:228](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L228)

***

### to?

> `optional` **to**: `Date`

Defined in: [src/types/shared.ts:228](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L228)
