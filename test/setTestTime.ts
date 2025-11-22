export function setTestTime(date: Date) {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(date);
  });

  afterAll(() => {
    jest.useRealTimers();
  });
}
