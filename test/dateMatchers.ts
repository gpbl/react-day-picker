expect.extend({
  toBeSunday(received: Date) {
    const pass = received.getDay() === 0;
    return {
      pass,
      message: () =>
        `expected ${received.toString()} ${pass ? "not " : ""}to be a Sunday`
    };
  },
  toBeMonday(received: Date) {
    const pass = received.getDay() === 1;
    return {
      pass,
      message: () =>
        `expected ${received.toString()} ${pass ? "not " : ""}to be a Monday`
    };
  },
  toBeTuesday(received: Date) {
    const pass = received.getDay() === 2;
    return {
      pass,
      message: () =>
        `expected ${received.toString()} ${pass ? "not " : ""}to be a Tuesday`
    };
  },
  toBeWednesday(received: Date) {
    const pass = received.getDay() === 3;
    return {
      pass,
      message: () =>
        `expected ${received.toString()} ${pass ? "not " : ""}to be a Wednesday`
    };
  },
  toBeThursday(received: Date) {
    const pass = received.getDay() === 4;
    return {
      pass,
      message: () =>
        `expected ${received.toString()} ${pass ? "not " : ""}to be a Thursday`
    };
  },
  toBeFriday(received: Date) {
    const pass = received.getDay() === 5;
    return {
      pass,
      message: () =>
        `expected ${received.toString()} ${pass ? "not " : ""}to be a Friday`
    };
  },
  toBeSaturday(received: Date) {
    const pass = received.getDay() === 6;
    return {
      pass,
      message: () =>
        `expected ${received.toString()} ${pass ? "not " : ""}to be a Saturday`
    };
  },
  toHaveDate(received: Date, expected: number) {
    const pass = received.getDate() === expected;
    return {
      pass,
      message: () =>
        `expected ${received.toString()} ${pass ? "not " : ""}to have the date ${expected}`
    };
  }
});
