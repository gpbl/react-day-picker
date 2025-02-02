import * as React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Chevron } from "react-day-picker";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

type SelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
>;

const SelectTrigger: React.FC<SelectTriggerProps> = ({
  children,
  ...props
}) => (
  <SelectPrimitive.Trigger
    className={
      "flex h-7 w-full items-center justify-between whitespace-nowrap rounded-md border border-current bg-transparent px-3 py-2 text-sm color-current"
    }
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <Chevron className="h-4 w-4 fill-current" orientation="down" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

type SelectScrollUpButtonProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.ScrollUpButton
>;

const SelectScrollUpButton: React.FC<SelectScrollUpButtonProps> = (props) => (
  <SelectPrimitive.ScrollUpButton
    className="flex cursor-default items-center justify-center py-1"
    {...props}
  >
    <Chevron className="h-4 w-4 fill-current" orientation="up" />
  </SelectPrimitive.ScrollUpButton>
);
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

type SelectScrollDownButtonProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.ScrollDownButton
>;

const SelectScrollDownButton: React.FC<SelectScrollDownButtonProps> = (
  props
) => (
  <SelectPrimitive.ScrollDownButton
    className="flex cursor-default items-center justify-center py-1 color-current"
    {...props}
  >
    <Chevron className="h-4 w-4 fill-current" orientation="down" />
  </SelectPrimitive.ScrollDownButton>
);
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

type SelectContentProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
>;

const SelectContent: React.FC<SelectContentProps> = ({
  children,
  position = "popper",
  ...props
}) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={
        position === "popper"
          ? "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover shadow-md translate-y-1"
          : "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover shadow-md translate-y-1"
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
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

type SelectItemProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Item
>;

const SelectItem: React.FC<SelectItemProps> = ({ children, ...props }) => (
  <SelectPrimitive.Item
    className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground color-current"
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

function SelectStyles() {
  return (
    <style>
      {`
        /* Base styles */
        .h-7 { height: 1.75rem; }
        .w-full { width: 100%; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .justify-center { justify-content: center; }
        .whitespace-nowrap { white-space: nowrap; }
        .rounded-md { border-radius: 0.375rem; }
        .rounded-sm { border-radius: 0.125rem; }
        .border { border-width: 1px; }
        .border-current { border-color: currentColor; }
        .bg-transparent { background-color: transparent; }
        .bg-popover { background-color: var(--root-background-color); }
        .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
        .py-1\\.5 { padding-top: 0.375rem; padding-bottom: 0.375rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .pl-2 { padding-left: 0.5rem; }
        .pr-8 { padding-right: 2rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
        .fill-current { fill: currentColor; }
        .color-current { color: currentColor; }
        
        /* Sizes */
        .h-4 { height: 1rem; }
        .w-4 { width: 1rem; }
        .min-w-[8rem] { min-width: 8rem; }
        .max-h-96 { max-height: 24rem; }
        
        /* Position */
        .relative { position: relative; }
        .z-50 { z-index: 50; }
        
        /* States */
        .cursor-default { cursor: default; }
        .select-none { user-select: none; }
        .outline-none { outline: none; }

        [data-highlighted] { background-color: #383838; }

        @media (prefers-color-scheme: light) {
          [data-highlighted] { background-color: #ebeced; }
        }
        
        /* Translations */
        .translate-y-1 { transform: translateY(0.25rem); }
        
        /* Misc */
        .overflow-hidden { overflow: hidden; }
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
  SelectItem,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectStyles
};
