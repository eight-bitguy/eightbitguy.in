import React, { render } from 'preact/compat';
import './Styles/App.css';
import Router from "./JS/Router";

render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
