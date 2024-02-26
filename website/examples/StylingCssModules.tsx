import { DayPicker } from "react-day-picker";
import defaultStyles from "react-day-picker/style.css";

// import customStyles from "./StylingCssModules.module.css";

export function StylingCssModules() {
  return <DayPicker classNames={{ ...defaultStyles }} />;
}
