import React from 'react';
import reactTapEvent from 'react-tap-event-plugin';
import Page from './Page.jsx';

// enable touch-tap events
reactTapEvent();

// inject css
require("../scss/main.scss");

React.render(<Page />, document.body);