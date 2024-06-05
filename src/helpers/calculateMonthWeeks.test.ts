import { enUS } from "date-fns/locale";

import { calculateMonthWeeks } from "./calculateMonthWeeks";

test("calculate weekly ranges correctly without options", () => {
  const startDate = new Date(2023, 0, 1); // January 1, 2023
  const endDate = new Date(2023, 0, 15); // January 15, 2023

  const result = calculateMonthWeeks(startDate, endDate);

  expect(result).toBeInstanceOf(Array);
  expect(result).toHaveLength(3);

  expect(result[0].dates).toHaveLength(7);
  expect(result[0].dates[0]).toBeSunday();

  expect(result[1].dates).toHaveLength(7);
  expect(result[2].dates).toHaveLength(7);
  expect(result[2].dates[6]).toHaveDate(21);
  expect(result[2].dates[6]).toBeSaturday();
});

test("calculate weekly ranges correctly with ISOWeek option", () => {
  const startDate = new Date(2023, 0, 1);
  const endDate = new Date(2023, 0, 17); // January 16, 2023
  const options = { ISOWeek: true };

  const result = calculateMonthWeeks(startDate, endDate, options);

  expect(result[0].dates).toHaveLength(7);
  expect(result[0].dates[0]).toBeMonday();
  expect(result[2].dates[6]).toBeSunday();
  expect(result[2].dates[6]).toHaveDate(15);
  expect(result[3].dates[6]).toHaveDate(22);
});

test("respect locale and weekStartsOn options", () => {
  const startDate = new Date(2023, 0, 1);
  const endDate = new Date(2023, 0, 15);
  const options = { locale: enUS, weekStartsOn: 2 as 0 | 2 }; // start on Tuesday

  const result = calculateMonthWeeks(startDate, endDate, options);

  expect(result[0].dates[0]).toBeTuesday();
  expect(result[1].dates[0]).toBeTuesday();
  expect(result[2].dates[0]).toBeTuesday();
});
