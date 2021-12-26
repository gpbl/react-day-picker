import React, { StrictMode } from 'react';
import 'react-day-picker/style.css';
import { render } from 'react-dom';

import App from './App';
import './styles.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
