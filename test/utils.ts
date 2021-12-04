import tk from 'timekeeper';

/**  */
export function freezeBeforeAll(date: Date) {
  beforeAll(() => tk.freeze(date));
  afterAll(() => tk.reset());
}
