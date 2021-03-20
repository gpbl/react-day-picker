import * as React from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function Example() {
  const style = `
    .caption_aqua { 
      color: aquamarine; 
      font-weight: bold; 
      font-size: 140%; 
    }
  `;
  return (
    <>
      <style>{style}</style>
      <DayPicker
        classNames={{
          caption_label: 'caption_aqua'
        }}
      />
    </>
  );
}
