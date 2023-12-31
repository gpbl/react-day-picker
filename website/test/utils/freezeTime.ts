import MockDate from 'mockdate';

/** Freeze the time to `date`. */
export function freezeTime(date: Date) {
  beforeAll(() => MockDate.set(date));
  afterAll(() => MockDate.reset());
}
