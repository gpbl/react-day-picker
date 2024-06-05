// jest-custom-matchers.d.ts
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeSunday(): R;
      toBeMonday(): R;
      toBeTuesday(): R;
      toBeWednesday(): R;
      toBeThursday(): R;
      toBeFriday(): R;
      toBeSaturday(): R;
      toHaveDate(expected: number): R;
    }
  }
}

export {};
