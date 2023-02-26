import { freezeBeforeAll } from 'test/utils';
import { getCalendar } from './getCalendar';

const today = new Date(2023, 3, 16);
freezeBeforeAll(today);

describe('when using the default props', () => {
  const calendar = getCalendar();
  test('should match the snapshot', () => {
    expect(calendar).toMatchInlineSnapshot(`
      {
        "dates": [
          2023-01-29T05:00:00.000Z,
          2023-01-30T05:00:00.000Z,
          2023-01-31T05:00:00.000Z,
          2023-02-01T05:00:00.000Z,
          2023-02-02T05:00:00.000Z,
          2023-02-03T05:00:00.000Z,
          2023-02-04T05:00:00.000Z,
          2023-02-05T05:00:00.000Z,
          2023-02-06T05:00:00.000Z,
          2023-02-07T05:00:00.000Z,
          2023-02-08T05:00:00.000Z,
          2023-02-09T05:00:00.000Z,
          2023-02-10T05:00:00.000Z,
          2023-02-11T05:00:00.000Z,
          2023-02-12T05:00:00.000Z,
          2023-02-13T05:00:00.000Z,
          2023-02-14T05:00:00.000Z,
          2023-02-15T05:00:00.000Z,
          2023-02-16T05:00:00.000Z,
          2023-02-17T05:00:00.000Z,
          2023-02-18T05:00:00.000Z,
          2023-02-19T05:00:00.000Z,
          2023-02-20T05:00:00.000Z,
          2023-02-21T05:00:00.000Z,
          2023-02-22T05:00:00.000Z,
          2023-02-23T05:00:00.000Z,
          2023-02-24T05:00:00.000Z,
          2023-02-25T05:00:00.000Z,
          2023-02-26T05:00:00.000Z,
          2023-02-27T05:00:00.000Z,
          2023-02-28T05:00:00.000Z,
          2023-03-01T05:00:00.000Z,
          2023-03-02T05:00:00.000Z,
          2023-03-03T05:00:00.000Z,
          2023-03-04T05:00:00.000Z,
        ],
        "months": [
          DayPickerMonth {
            "month": 2023-02-01T05:00:00.000Z,
            "weeks": [
              DayPickerWeek {
                "days": [
                  DayPickerDay {
                    "date": 2023-01-29T05:00:00.000Z,
                    "displayMonth": 2023-02-01T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-01-30T05:00:00.000Z,
                    "displayMonth": 2023-02-01T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-01-31T05:00:00.000Z,
                    "displayMonth": 2023-02-01T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-01T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-02T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-03T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-04T05:00:00.000Z,
                  },
                ],
                "weekNumber": 5,
              },
              DayPickerWeek {
                "days": [
                  DayPickerDay {
                    "date": 2023-02-05T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-06T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-07T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-08T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-09T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-10T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-11T05:00:00.000Z,
                  },
                ],
                "weekNumber": 6,
              },
              DayPickerWeek {
                "days": [
                  DayPickerDay {
                    "date": 2023-02-12T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-13T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-14T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-15T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-16T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-17T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-18T05:00:00.000Z,
                  },
                ],
                "weekNumber": 7,
              },
              DayPickerWeek {
                "days": [
                  DayPickerDay {
                    "date": 2023-02-19T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-20T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-21T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-22T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-23T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-24T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-25T05:00:00.000Z,
                  },
                ],
                "weekNumber": 8,
              },
              DayPickerWeek {
                "days": [
                  DayPickerDay {
                    "date": 2023-02-26T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-27T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-02-28T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-03-01T05:00:00.000Z,
                    "displayMonth": 2023-02-01T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-03-02T05:00:00.000Z,
                    "displayMonth": 2023-02-01T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-03-03T05:00:00.000Z,
                    "displayMonth": 2023-02-01T05:00:00.000Z,
                  },
                  DayPickerDay {
                    "date": 2023-03-04T05:00:00.000Z,
                    "displayMonth": 2023-02-01T05:00:00.000Z,
                  },
                ],
                "weekNumber": 9,
              },
            ],
          },
        ],
      }
    `);
  });
  test('should return 1 month', () => {
    expect(calendar.months).toHaveLength(1);
  });
  test('should return 35 dates', () => {
    expect(calendar.dates).toHaveLength(35);
  });
  test('the first date should be sunday', () => {
    expect(calendar.dates[0].getDay()).toBe(0);
  });
  test('the last date should be sunday', () => {
    expect(calendar.dates[0].getDay()).toBe(0);
  });
});
