import { CalendarIcon, Cross2Icon } from "@radix-ui/react-icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useEffect, useId, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";

export function DatePickerModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogId = useId();
  const headerId = useId();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
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

  // Function to handle Enter keypress on the input field
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isDialogOpen) return;
    if (event.key !== "Enter") return;
    dialogRef.current?.showModal();
  };

  const handleSelect = (date: Date) => {
    setSelectedDate(date);
    dialogRef.current?.close();
  };

  return (
    <Flex align="center">
      <Box>
        <Text weight="bold" as="label" htmlFor="input" className="pr-3">
          Your Birthday:
        </Text>
      </Box>
      <TextField.Root size={"3"}>
        <TextField.Input
          id="input"
          type="text"
          onKeyDown={handleKeyDown}
          onClick={toggleDialog}
          readOnly
          aria-controls="dialog"
          aria-haspopup="dialog"
          aria-expanded={isDialogOpen}
          value={selectedDate ? selectedDate.toDateString() : ""}
        />
        <TextField.Slot>
          <IconButton
            variant="ghost"
            onClick={toggleDialog}
            aria-live="assertive"
            aria-controls="dialog"
            aria-haspopup="dialog"
            aria-expanded={isDialogOpen}
          >
            <CalendarIcon width="24" height="24" />
          </IconButton>
        </TextField.Slot>
      </TextField.Root>

      <dialog
        id={dialogId}
        onClose={() => setIsDialogOpen(false)}
        ref={dialogRef}
        className="rounded-md p-8 pt-20"
        aria-labelledby={headerId}
        aria-describedby="dialog-description"
      >
        <DayPicker
          autoFocus
          mode="single"
          selected={selectedDate}
          onSelect={handleSelect}
        />
        <Flex
          justify="between"
          className="absolute left-0 right-0 top-4 mb-8 border-b px-4"
        >
          <Heading id={headerId} className="mb-4">
            Date Picker
          </Heading>
          <IconButton variant="ghost" onClick={toggleDialog}>
            <Cross2Icon width="24" height="24" />
          </IconButton>
        </Flex>
      </dialog>
    </Flex>
  );
}
