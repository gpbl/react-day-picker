import locale from "date-fns/locale/en-US";
import { startOfMonth } from "date-fns";

import { DayPickerProps } from "../DayPicker";

import { Caption } from "../Caption";
import { Day } from "../Day";
import { WeekNumber } from "../WeekNumber";
import { Navigation } from "../Navigation";

import { defaultClassNames } from "./defaultClassNames";
import {
  formatDay,
  formatWeekdayName,
  formatCaption,
  formatWeekNumber
} from "./formatters";

/**
 * @category Components
 */
export const defaultProps: DayPickerProps = {
  enableOutsideDaysClick: false,
  classNames: defaultClassNames,
  className: "",
  style: {},
  styles: {},
  components: {
    Caption,
    Day,
    Navigation,
    WeekNumber
  },
  fixedWeeks: false,
  formatCaption,
  formatDay,
  formatWeekdayName,
  formatWeekNumber,
  locale,
  nextLabel: "▶",
  modifiersClassNames: {},
  modifiersStyles: {},
  month: startOfMonth(new Date()),
  numberOfMonths: 1,
  pagedNavigation: false,
  prevLabel: "◀",
  reverseMonths: false,
  showCaption: true,
  showHead: true,
  showNavigation: true,
  showOutsideDays: false,
  showWeekNumber: false
};
