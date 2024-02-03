import { classNames } from "@/utils/classNames";

export function Steps({ ...props }) {
  return (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l dark:border-l-slate-800 border-l-slate-200 pl-8 [counter-reset:step]"
      {...props}
    />
  );
}

export function Step({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={classNames(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {props.children}
    </h3>
  );
}
