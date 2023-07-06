import MockDate from 'mockdate';

export function freezeBeforeAll(date: Date) {
  beforeAll(() => MockDate.set(date));
  afterAll(() => MockDate.reset());
}
