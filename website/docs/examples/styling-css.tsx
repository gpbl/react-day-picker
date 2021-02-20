import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function App() {
  const style = `
    .purple { color: purple; }
  `;
  return (
    <>
      <style>{style}</style>
      <DayPicker
        classNames={{
          caption: 'purple'
        }}
      />
    </>
  );
}
