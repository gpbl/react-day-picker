export function freezeBeforeAll(date: Date) {
  jest.useFakeTimers().setSystemTime(date);
}
