import { CalendarIcon, Cross2Icon } from "@radix-ui/react-icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Separator,
  Text,
  TextField,
  VisuallyHidden,
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

  const handleSelect = (date: Date) => {
    setSelectedDate(date);
    dialogRef.current?.close();
  };

  return (
    <Flex align="center">
      <Box>
        <Text weight="bold" as="label" htmlFor="booking-input" className="pr-3">
          Booking Date:
        </Text>
      </Box>
      <TextField.Root size={"3"}>
        <TextField.Input
          id="booking-input"
          type="text"
          value={selectedDate ? selectedDate.toDateString() : ""}
          readOnly
        />
        <TextField.Slot>
          <IconButton
            variant="ghost"
            onClick={toggleDialog}
            aria-controls="dialog"
            aria-haspopup="dialog"
            aria-expanded={isDialogOpen}
            aria-label=" Open calendar to choose booking date"
          >
            <CalendarIcon width="24" height="24" />
          </IconButton>
        </TextField.Slot>
      </TextField.Root>
      <VisuallyHidden aria-live="assertive" aria-atomic="true">
        {selectedDate !== undefined && (
          <>Selected: {selectedDate.toDateString()}</>
        )}
      </VisuallyHidden>
      <dialog
        ref={dialogRef}
        id={dialogId}
        className="rounded-md p-6"
        role="dialog"
        aria-modal
        aria-labelledby={headerId}
        onClose={() => setIsDialogOpen(false)}
      >
        <Box>
          <Flex justify="between" align="center">
            <Heading id={headerId}>Date Picker</Heading>
            <IconButton
              variant="ghost"
              onClick={toggleDialog}
              aria-label="Close Date Picker Dialog"
            >
              <Cross2Icon width="24" height="24" />
            </IconButton>
          </Flex>
          <Separator size="4" my="4" color="gray" />
        </Box>
        <DayPicker
          autoFocus
          mode="single"
          selected={selectedDate}
          onSelect={handleSelect}
        />
      </dialog>
    </Flex>
  );
}
