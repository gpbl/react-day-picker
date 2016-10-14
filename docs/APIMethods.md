# Component methods

#### showMonth `(d: Date) ⇒ void`

Set the Day Picker to display the given month.

```jsx

class MyComponent extends React {

  handleButtonClick() {
    this.refs.daypicker.showMonth(new Date(2014, 10));
  }

  render() {
    return (
    <div>
      <DayPicker initialMonth={ new Date(2015, 10) } ref="daypicker" />
      <button onClick={ this.handleButtonClick }>Change month</button>
    </div>
    )
  }
}
```

---

#### showPreviousMonth `() ⇒ void`

Set the Day Picker to display the previous month.

---

#### showNextMonth `() ⇒ void`

Set the Day Picker to display the next month.

---

#### showPreviousYear `() ⇒ void`

Set the Day Picker to display the previous year.

---

#### showNextYear `() ⇒ void`

Set the Day Picker to display the next year.
