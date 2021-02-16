export type MonthChangeEventHandler = (
  month: Date,
  e:
    | React.MouseEvent
    | React.KeyboardEvent
    | React.FocusEvent
    | React.ChangeEvent
) => void;
