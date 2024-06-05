import { debounce } from "./debounce";

describe("debounce", () => {
  jest.useFakeTimers();
  let functionToDebounce: jest.Mock;

  beforeEach(() => {
    functionToDebounce = jest.fn();
  });

  test("only execute the function after the specified wait time", () => {
    const debouncedFunction = debounce(functionToDebounce, 1000);
    debouncedFunction();
    expect(functionToDebounce).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(functionToDebounce).toHaveBeenCalled();
  });

  test("call the debounced function with the correct arguments", () => {
    const debouncedFunction = debounce(functionToDebounce, 1000);
    const args = ["arg1", "arg2"];

    debouncedFunction(...args);
    jest.runAllTimers();

    expect(functionToDebounce).toHaveBeenCalledWith(...args);
  });

  test("cancel the previous timer and start a new one on subsequent calls", () => {
    const debouncedFunction = debounce(functionToDebounce, 1000);
    debouncedFunction();
    debouncedFunction();
    jest.advanceTimersByTime(500);
    expect(functionToDebounce).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    expect(functionToDebounce).toHaveBeenCalledTimes(1);
  });
  afterEach(() => {
    jest.clearAllTimers();
  });
});
