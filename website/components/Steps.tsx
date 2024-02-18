import { clx } from "@/lib/clx";

import styles from "./Steps.module.css";

export function Steps({ ...props }) {
  return (
    <div
      className={clx(
        styles.Steps,
        "mb-12 ml-4 border-l dark:border-l-slate-800 border-l-slate-200 pl-8",
      )}
      {...props}
    />
  );
}
