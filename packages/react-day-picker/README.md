# React DayPicker beta

DayPicker is a date picker component for [React](https://reactjs.org).

To install the beta, make sure you use the `@next` tag:

```
$ npm install react-day-picker@next
```

## Beta version ⚠️

This branch is for the next major version 8 – which is currently in development
and not ready for production. For the stable version see the [**v7
branch**](https://github.com/gpbl/react-day-picker/tree/v7).

See also

- [v8 project](https://github.com/gpbl/react-day-picker/projects/7)
- [discussion on Github](https://github.com/gpbl/react-day-picker/discussions)

## Main features

- depends from [date-fns](http://date-fns.org) as date library
- not opinionated, extensible user interface
- support for
  [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- localizable
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
