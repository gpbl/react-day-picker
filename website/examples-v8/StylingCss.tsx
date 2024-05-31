import { DayPicker } from "./react-day-picker-v8";

export function StylingCss() {
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
          caption: "caption_aqua"
        }}
      />
    </>
  );
}
