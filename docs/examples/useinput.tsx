import { DayPicker, useInput } from 'react-day-picker';

export default function App() {
  const { htmlAttributes, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    fromYear: 2021,
    toYear: 2023,
    format: 'PP',
    required: true
  });

  const footer = (
    <form>
      <label>
        <input {...htmlAttributes} />
      </label>
    </form>
  );
  return <DayPicker {...dayPickerProps} footer={footer} />;
}
