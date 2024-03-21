import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {nav}  from './pages/navbar/nav';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {nav}
  </React.StrictMode>
);


