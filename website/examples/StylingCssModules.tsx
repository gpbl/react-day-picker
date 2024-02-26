import { DayPicker } from "react-day-picker";
import defaultStyles from "react-day-picker/style.module.css";

export function StylingCssModules() {
  return <DayPicker classNames={{ ...defaultStyles }} />;
}
