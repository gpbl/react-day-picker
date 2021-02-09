# React DayPicker @next

DayPicker is a date picker component for [React](https://reactjs.org).

```
$ npm install react-day-picker@next
```

### Unreleased version ⚠️

This branch is for the next major version – which is not yet released. For the
current stable version see the [**v7
branch**](https://github.com/gpbl/react-day-picker/tree/v7).

## Main features

- unopinionated and extensible user interface
- support for
  [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- adopting [date-fns](http://date-fns.org) as date library
- incomplete "Main features" list

## Documentation

- [v7 website (current version)](http://react-day-picker.js.org)
- [v8 website (beta)](http://react-day-picker-next.netlify.app)

### Example

```jsx showOutput
import { DayPicker } from 'react-day-picker';

function App() {
  const [selected, setSelected] = useState();

  const handleDayClick = (day, { selected }) => {
    if (!selected) setSelected(day);
    else setSelected();
  };

  return <DayPicker onDayClick={handleDayClick} />;
}
```
