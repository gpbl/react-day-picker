# Formatters

Use DayPicker [formatters](/api/interfaces/daypickerdefaultprops#formatters) to change
the default format for the day, the weekday name, etc. Formatters can be useful for
a custom [localization](/basics/localization).

import { Callout } from 'nextra/components';

<Callout emoji="🚧">
  This section is still under construction. If you need help, please reach out
  the maintainers in the [discussion
  page](https://github.com/gpbl/react-day-picker/discussions) on GitHub.
</Callout>

## Example: add emoji to the calendar

The following example add some emoji to the caption and to the day cells.

```tsx example fileName="Formatters.tsx"
import { DayPicker, Formatters } from 'react-day-picker';

import { format } from 'date-fns/format';

const seasonEmoji: Record<string, string> = {
  winter: '⛄️',
  spring: '🌸',
  summer: '🌻',
  autumn: '🍂'
};

const getSeason = (month: Date): string => {
  const monthNumber = month.getMonth();
  if (monthNumber >= 0 && monthNumber < 3) return 'winter';
  if (monthNumber >= 3 && monthNumber < 6) return 'spring';
  if (monthNumber >= 6 && monthNumber < 9) return 'summer';
  else return 'autumn';
};

const formatMonthCaption: Formatters['formatMonthCaption'] = (
  month,
  options
) => {
  const season = getSeason(month);
  return `${seasonEmoji[season]} ${format(month, 'LLLL', {
    locale: options?.locale
  })}`;
};

export function Formatters() {
  return (
    <DayPicker
      fromYear={2020}
      toYear={2025}
      formatters={{ formatMonthCaption }}
    />
  );
}
```