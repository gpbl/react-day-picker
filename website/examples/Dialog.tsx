import { useEffect, useId, useRef, useState } from "react";

import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";

export function Dialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogId = useId();
  const headerId = useId();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [inputValue, setInputValue] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to toggle the dialog visibility
  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  // Hook to handle the body scroll behavior and focus trapping
  useEffect(() => {
    const handleBodyScroll = (isOpen: boolean) => {
      document.body.style.overflow = isOpen ? "hidden" : "";
    };
    if (!dialogRef.current) return;
    if (isDialogOpen) {
      handleBodyScroll(true);
      dialogRef.current.showModal();
    } else {
      handleBodyScroll(false);
      dialogRef.current.close();
    }

    return () => {
      handleBodyScroll(false);
    };
  }, [isDialogOpen]);

  const handleSelect = (date: Date) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setInputValue(format(date, "MM/dd/yyyy"));
    }
    dialogRef.current?.close();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedDate = parse(e.target.value, "MM/dd/yyyy", new Date());
    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
    }
    setInputValue(e.target.value);
  };
  return (
    <div>
      <label htmlFor="date-input">
        <strong>Selected Date: </strong>
      </label>
      <input
        style={{ fontSize: "inherit" }}
        id="date-input"
        type="text"
        value={inputValue}
        placeholder={"MM/dd/yyyy"}
        onChange={handleInputChange}
      />{" "}
      <button
        style={{ fontSize: "inherit" }}
        onClick={toggleDialog}
        aria-controls="dialog"
        aria-haspopup="dialog"
        aria-expanded={isDialogOpen}
        aria-label="Open calendar to choose booking date"
      >
        📆
      </button>
      <p aria-live="assertive" aria-atomic="true">
        {selectedDate !== undefined
          ? selectedDate.toDateString()
          : "Please type or pick a date"}
      </p>
      <dialog
        role="dialog"
        ref={dialogRef}
        id={dialogId}
        aria-modal
        aria-labelledby={headerId}
        onClose={() => setIsDialogOpen(false)}
      >
        <DayPicker
          initialFocus
          mode="single"
          selected={selectedDate}
          onSelect={handleSelect}
        />
      </dialog>
    </div>
  );
}
