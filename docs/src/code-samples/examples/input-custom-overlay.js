import React from 'react';
import PropTypes from 'prop-types';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

function CustomOverlay({ classNames, selectedDay, children, ...props }) {
  return (
    <div
      className={classNames.overlayWrapper}
      style={{ marginLeft: -100 }}
      {...props}
    >
      <div className={classNames.overlay}>
        <h3>Hello day picker!</h3>
        <p>
          <input />
          <button onClick={() => console.log('clicked!')}>button</button>
        </p>
        <p>
          {selectedDay
            ? `You picked: ${selectedDay.toLocaleDateString()}`
            : 'Please pick a day'}
        </p>
        {children}
      </div>
    </div>
  );
}

CustomOverlay.propTypes = {
  classNames: PropTypes.object.isRequired,
  selectedDay: PropTypes.instanceOf(Date),
  children: PropTypes.node.isRequired,
};

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.dayPickerInputRef = React.createRef();

    this.state = {
      showOverlay: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    const dayPickerInputNode = this.dayPickerInputRef.current;
    // Open (or keep open) the panel if you click on it
    if (dayPickerInputNode && dayPickerInputNode.contains(e.target)) {
      this.setState({ showOverlay: true });
      return;
    }

    // If the click is anywhere else, close the panel
    this.setState({ showOverlay: false });
  }

  render() {
    return (
      <div ref={this.dayPickerInputRef}>
        <DayPickerInput
          overlayComponent={CustomOverlay}
          dayPickerProps={{
            todayButton: 'Today',
          }}
          keepFocus={false}
          showOverlay={this.state.showOverlay}
          onDayPickerShow={e => this.setState({ showOverlay: true })}
          onDayPickerHide={e => this.setState({ showOverlay: false })}
        />
      </div>
    );
  }
}

export default Example;
