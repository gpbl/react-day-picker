import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

function App() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2026, 3, 19),
  );

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 px-6 py-10">
      <header className="grid gap-2 text-center">
        <p className="text-muted-foreground text-sm font-medium">
          Workspace `react-day-picker`
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Calendar</h1>
      </header>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        startMonth={new Date(1926, 0)}
        endMonth={new Date(2026, 11)}
        className="rounded-lg border"
      />
    </main>
  );
}

export default App;
