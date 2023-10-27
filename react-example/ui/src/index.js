import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = './styles.css';

document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
