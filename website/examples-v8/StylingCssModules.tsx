import defaultStyles from "react-day-picker-v8/dist/style.module.css";

import { DayPicker } from "./react-day-picker-v8";

export function StylingCssModules() {
  return <DayPicker classNames={{ ...defaultStyles }} />;
}
