import { DayPicker } from "./DayPicker";

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
