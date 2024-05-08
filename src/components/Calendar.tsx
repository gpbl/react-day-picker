import { useEffect, useState } from "react";

import { DayPickerProps } from "../DayPicker";
import { useDayPicker } from "../contexts/DayPicker";
import { useFocusContext } from "../contexts/Focus";
import { useNavigation } from "../contexts/Navigation";

import { Month } from "./Month";
import { Months as DefaultMonths } from "./Months";

function isDataAttributes(attrs: DayPickerProps): attrs is {
  [key: string]: string | boolean | number | undefined;
} {
  return true;
}

export interface CalendarProps {
  initialProps: DayPickerProps;
}

/** Render the DayPicker Calendar with navigation and the month grids. */
export function Calendar({ initialProps }: CalendarProps): JSX.Element {
  const dayPicker = useDayPicker();
  const focusContext = useFocusContext();
  const navigation = useNavigation();

  const [hasInitialFocus, setHasInitialFocus] = useState(false);

  // Focus the focus target when initialFocus is passed in
  useEffect(() => {
    if (!dayPicker.initialFocus) return;
    if (!focusContext.focusTarget) return;
    if (hasInitialFocus) return;

    focusContext.focus(focusContext.focusTarget);
    setHasInitialFocus(true);
  }, [
    dayPicker.initialFocus,
    hasInitialFocus,
    focusContext.focus,
    focusContext.focusTarget,
    focusContext
  ]);

  // Apply classnames according to props
  const classNames = [dayPicker.classNames.root, dayPicker.className];
  if (dayPicker.numberOfMonths > 1) {
    classNames.push(dayPicker.classNames.multiple_months);
  }
  if (dayPicker.showWeekNumber) {
    classNames.push(dayPicker.classNames.with_weeknumber);
  }

  const style = {
    ...dayPicker.styles.root,
    ...dayPicker.style
  };

  const dataAttributes = Object.keys(initialProps)
    .filter((key) => key.startsWith("data-"))
    .reduce((attrs, key) => {
      if (!isDataAttributes(initialProps)) return attrs;
      return {
        ...attrs,
        [key]: initialProps[key]
      };
    }, {});

  const Months = initialProps.components?.Months ?? DefaultMonths;

  return (
    <div
      className={classNames.join(" ")}
      style={style}
      dir={dayPicker.dir}
      id={dayPicker.id}
      nonce={initialProps.nonce}
      title={initialProps.title}
      lang={initialProps.lang}
      {...dataAttributes}
    >
      <Months>
        {navigation.displayMonths.map((month, i) => (
          <Month key={i} displayIndex={i} displayMonth={month} />
        ))}
      </Months>
    </div>
  );
}
