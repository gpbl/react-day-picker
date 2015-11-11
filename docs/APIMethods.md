# Component methods

#### showMonth(d: Date)

Set the day picker to display the given month.

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

#### showPreviousMonth()

Set the day picker to display the previous month.

---

#### showMonth(d: Date)

Set the day picker to display the next month.


---
