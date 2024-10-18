import { type Locale, format } from "date-fns";
import { enUS as locale } from "date-fns/locale";

import { DateLib } from "../lib/dateLib";

import { getFormatters } from "./getFormatters";
import { getMonthOptions } from "./getMonthOptions";

test("return correct dropdown options", () => {
  const displayMonth = new Date(2022, 0, 1); // January 2022
  const startMonth = new Date(2022, 0, 1); // January 2022
  const endMonth = new Date(2022, 11, 31); // December 2022
  const formatters = getFormatters({
    formatMonthDropdown: (month: number, locale?: Locale) =>
      format(new Date(2022, month), "MMMM", { locale })
  });
  const result = getMonthOptions(
    displayMonth,
    startMonth,
    endMonth,
    formatters,
    new DateLib({ locale })
  );

  expect(result).toEqual([
    { value: 0, label: "January", disabled: false },
    { value: 1, label: "February", disabled: false },
    { value: 2, label: "March", disabled: false },
    { value: 3, label: "April", disabled: false },
    { value: 4, label: "May", disabled: false },
    { value: 5, label: "June", disabled: false },
    { value: 6, label: "July", disabled: false },
    { value: 7, label: "August", disabled: false },
    { value: 8, label: "September", disabled: false },
    { value: 9, label: "October", disabled: false },
    { value: 10, label: "November", disabled: false },
    { value: 11, label: "December", disabled: false }
  ]);
});
