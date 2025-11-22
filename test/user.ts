import { userEvent } from "@testing-library/user-event";

const isUsingFakeTimers = () => {
  const timer = setTimeout as unknown as {
    _isMockFunction?: boolean;
    clock?: unknown;
  };
  return Boolean(timer?._isMockFunction || timer?.clock);
};

const advanceTimersIfFake = (delay?: number) => {
  if (isUsingFakeTimers()) {
    jest.advanceTimersByTime(delay ?? 0);
  }
  return Promise.resolve();
};

/** Create a user that will advance timers only when fake timers are enabled. */
export const user = userEvent.setup({
  advanceTimers: advanceTimersIfFake,
});
