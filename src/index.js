import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/partials/App';
import reportWebVitals from './reportWebVitals';
import { detectUserInput } from 'utils/detectUserInput';
import * as serviceWorker from './serviceWorker';
import polyfill from './utils/polyfill';

import * as icons from './assets/img/icons';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
detectUserInput();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
