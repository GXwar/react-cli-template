import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import Clock from './components/Clock.js';
import Calculator from './components/Calculator.js';

import './styles/reset.js';

ReactDOM.render(
  <Calculator/>,
  document.getElementById('app')
);