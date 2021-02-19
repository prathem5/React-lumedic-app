import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
// import 'core-js/modules/es7.array.includes';
// import 'core-js/modules/es6.array.fill';
// import 'core-js/modules/es6.string.includes';
// import 'core-js/modules/es6.string.trim';
// import 'core-js/modules/es7.object.values';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
