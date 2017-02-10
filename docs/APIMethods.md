# Component methods

#### showMonth `(month: Date) ⇒ void`

Show the given `month` in the calendar.

Example: 
```jsx
class MyComponent extends React {

  daypicker = null

  handleClick() {
    this.daypicker.showMonth(new Date(2014, 10));
  }

  render() {
    return (
      <div>
        <DayPicker 
          ref={ el => this.daypicker = el } 
          initialMonth={ new Date(2015, 10) } 
        />
        <button onClick={ this.handleClick }>
          Change month
        </button>
      </div>
    )
  }
}
```

---

#### showPreviousMonth `() ⇒ void`

Show the previous month in the calendar.

---

#### showNextMonth `() ⇒ void`

Show the next month in the calendar.

---

#### showPreviousYear `() ⇒ void`

Show the previous year in the calendar.

---

#### showNextYear `() ⇒ void`

Show the next year in the calendar.
