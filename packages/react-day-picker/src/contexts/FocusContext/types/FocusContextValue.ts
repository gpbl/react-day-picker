export type FocusContextValue = [
  focusedDay: Date | undefined,
  setters: {
    focus: (day: Date) => void;
    blur: () => void;
    focusDayAfter: () => void;
    focusDayBefore: () => void;
    focusDayUp: () => void;
    focusDayDown: () => void;
  }
];
