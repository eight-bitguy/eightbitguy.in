import React, { render } from 'preact/compat';

render(
  <React.StrictMode>
      <div>
          This VM's Hostname is - {window._env_.hostname}
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);
