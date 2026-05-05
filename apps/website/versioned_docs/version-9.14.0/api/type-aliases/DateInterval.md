# Type Alias: DateInterval

> **DateInterval** = \{ `after`: `Date`; `before`: `Date`; \}

Defined in: [src/types/shared.ts:216](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/shared.ts#L216)

An interval of dates. Unlike [DateRange](DateRange.md), the range ends are not
included.

## Example

```ts
// Match days between February 2 and February 5, 2019
  const matcher: DateInterval = {
    after: new Date(2019, 1, 2),
    before: new Date(2019, 1, 5),
  };
```

## Properties

### after

> **after**: `Date`

Defined in: [src/types/shared.ts:216](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/shared.ts#L216)

***

### before

> **before**: `Date`

Defined in: [src/types/shared.ts:216](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/shared.ts#L216)
