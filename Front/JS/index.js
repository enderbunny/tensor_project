import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './code.js';
import './style.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('hheader'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 

reportWebVitals();
