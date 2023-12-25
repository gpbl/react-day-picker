import MockDate from 'mockdate';
/** Freeze the time to `date`. */
export function freezeTime(date) {
    beforeAll(() => MockDate.set(date));
    afterAll(() => MockDate.reset());
}
