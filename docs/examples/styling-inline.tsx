import { DayPicker } from 'react-day-picker';

export default function App() {
  const monthCaptionStyle = {
    borderBottom: '1px solid currentColor',
    paddingBottom: '0.5em'
  };
  return (
    <DayPicker
      styles={{
        month_caption: monthCaptionStyle
      }}
    />
  );
}
