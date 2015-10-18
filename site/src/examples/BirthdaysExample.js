var React = require("react");
var DayPicker = require("react-day-picker");

require("../style/DayPicker.scss");
require("../style/BirthdaysExample.scss");

var birthdays = {
  3: [{ name: "Mirko", age: 35 }, {name: "Gianluca", age: 29 }],
  8: [{ name: "Elena", age: 21 }],
  9: [{ name: "Irene", age: 43 }],
  12: [{ name: "Paolo", age: 78 }, {name: "Giorgia", age: 18 }],
  18: [{ name: "Claudia", age: 54 }],
  22: [{ name: "Maria", age: 9 }, {name: "Luigi", age: 67 }],
  25: [{ name: "Simone", age: 31 }],
  26: [{ name: "Marta", age: 46 }]
};

module.exports = React.createClass({

  displayName: "BirthdaysExample",

  renderDay(day) {
    var date = day.getDate();
    return (
      <div>
        { day.getDate() }
        <div className="Birthdays-List">
        {
          birthdays[date] && birthdays[date].map((birthday, i) =>
            <div key={i}>
              🎁 { birthday.name } ({ birthday.age})
            </div>
          )
        }
        </div>
      </div>
    );
  },

  render() {
    return <DayPicker canChangeMonth={false}
      className="Birthdays"
      renderDay={ this.renderDay }
    />;
  }

});
