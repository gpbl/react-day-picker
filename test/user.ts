import { userEvent } from "@testing-library/user-event";

/** Create a user that will advance timers. */
export const user = userEvent.setup({
  advanceTimers: jest.advanceTimersByTime,
});
