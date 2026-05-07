# Type Alias: DateInterval

> **DateInterval** = \{ `after`: `Date`; `before`: `Date`; \}

Defined in: [packages/react-day-picker/src/types/shared.ts:190](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/shared.ts#L190)

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

Defined in: [packages/react-day-picker/src/types/shared.ts:190](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/shared.ts#L190)

***

### before

> **before**: `Date`

Defined in: [packages/react-day-picker/src/types/shared.ts:190](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/shared.ts#L190)
