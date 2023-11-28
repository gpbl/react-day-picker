import React, { useRef, useEffect } from 'react';

interface FocusTrapProps {
  active: boolean;
  children: React.ReactNode;
}

export function FocusTrap(props: FocusTrapProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // types for focusedElement and firstElement
    let focusedElement: HTMLElement | null | undefined;
    let firstElement: HTMLElement | null | undefined;
    let lastElement: HTMLElement | null | undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab' || event.keyCode === 9) {
        // variables to access the first and last elements
        focusedElement = document.activeElement as HTMLElement;
        firstElement = container.current?.querySelector('button');
        lastElement = container.current?.querySelector('button:last-child');

        if (event.shiftKey) {
          // if shift + tab
          if (focusedElement === firstElement) {
            lastElement?.focus();
            event.preventDefault();
          }
        } else {
          // if tab
          if (focusedElement === lastElement) {
            firstElement?.focus();
            event.preventDefault();
          }
        }
      }
    };

    if (props.active && container.current) {
      container.current.addEventListener('keydown', handleKeyDown);
    }
    const { current } = container;
    return () => {
      current?.removeEventListener('keydown', handleKeyDown);
    };
  }, [props.active]); // Adding active prop in dependency array

  return (
    <div ref={container} tabIndex={-1}>
      {props.children}
    </div>
  );
}

export default FocusTrap;
