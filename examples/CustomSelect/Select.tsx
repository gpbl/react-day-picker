import * as React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Chevron } from "react-day-picker";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={
      "flex h-7 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground"
    }
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <Chevron className="h-4 w-4 fill-current" orientation="down" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className="flex cursor-default items-center justify-center py-1"
    {...props}
  >
    <Chevron className="h-4 w-4 fill-current" orientation="up" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className="flex cursor-default items-center justify-center py-1"
    {...props}
  >
    <Chevron className="h-4 w-4 fill-current" orientation="down" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={
        position === "popper"
          ? "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md translate-y-1"
          : "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md translate-y-1"
      }
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={position === "popper" ? "p-1 " : "p-1"}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className="px-2 py-1.5 text-sm font-semibold"
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground"
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Chevron className="h-4 w-4" orientation="right" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className="-mx-1 my-1 h-px bg-muted"
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

function SelectStyles() {
  return (
    <style>
      {`
        /* Base styles */
        .h-7 { height: 1.75rem; }
        .h-3\\.5 { height: 0.875rem; }
        .w-3\\.5 { width: 0.875rem; }
        .w-full { width: 100%; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .justify-center { justify-content: center; }
        .whitespace-nowrap { white-space: nowrap; }
        .rounded-md { border-radius: 0.375rem; }
        .rounded-sm { border-radius: 0.125rem; }
        .border { border-width: 1px; }
        .border-input { border-color: #e2e8f0; }
        .bg-transparent { background-color: transparent; }
        .bg-popover { background-color: white; }
        .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
        .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
        .py-1\\.5 { padding-top: 0.375rem; padding-bottom: 0.375rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .pl-2 { padding-left: 0.5rem; }
        .pr-8 { padding-right: 2rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .font-semibold { font-weight: 600; }
        .text-popover-foreground { color: #1f2937; }
        .shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
        .shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
        .fill-current { fill: currentColor; }
        
        /* Sizes */
        .h-4 { height: 1rem; }
        .w-4 { width: 1rem; }
        .h-px { height: 1px; }
        .min-w-[8rem] { min-width: 8rem; }
        .max-h-96 { max-height: 24rem; }
        .-mx-1 { margin-left: -0.25rem; margin-right: -0.25rem; }
        .my-1 { margin-top: 0.25rem; margin-bottom: 0.25rem; }
        
        /* Position */
        .absolute { position: absolute; }
        .relative { position: relative; }
        .right-2 { right: 0.5rem; }
        .z-50 { z-index: 50; }
        
        /* States */
        .cursor-default { cursor: default; }
        .select-none { user-select: none; }
        .outline-none { outline: none; }
        .placeholder\\:text-muted-foreground::placeholder { color: #6b7280; }
        
        /* Translations */
        .translate-y-1 { transform: translateY(0.25rem); }
        
        /* Misc */
        .overflow-hidden { overflow: hidden; }
        .bg-muted { background-color: #f3f4f6; }
        .ring-offset-background { --tw-ring-offset-color: white; }
        .p-1 { padding: 0.25rem; }
      `}
    </style>
  );
}

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectStyles
};
