import React, { render } from 'preact/compat';
import './index.css';
import Router from "./JS/Router";

render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
