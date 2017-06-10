# Getting started

* The easiest way to see how react-day-picker works is to check the ➡️ [examples with code](http://react-day-picker.js.org/examples).

* Play with [this jsfiddle](https://jsfiddle.net/gpbl/cggxvq6t/) to try the different options

* If you prefer to try the component on your local machine without installing, start with this html as template:

```html
<html>

  <head>
    <meta charset="UTF-8" />
    <script src="https://unpkg.com/react/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom/dist/react-dom.js"></script>
    <script src="https://unpkg.com/babel-standalone/babel.min.js"></script>
    <script src="https://unpkg.com/moment/min/moment.min.js"></script>

    <script src="https://unpkg.com/react-day-picker/daypicker.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/react-day-picker/style.css">

  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      ReactDOM.render(
        <DayPicker />, 
        document.getElementById('root') 
      );
    </script>

  </body>

</html>
```
