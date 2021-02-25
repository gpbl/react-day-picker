import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function App() {
  const style = `
    .aqua { color: aquamarine; font-weight: bold; font-size: larger }
  `;
  return (
    <>
      <style>{style}</style>
      <DayPicker
        classNames={{
          captionLabel: 'aqua'
        }}
      />
    </>
  );
}
