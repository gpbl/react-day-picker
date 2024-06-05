import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
export function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;

  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
