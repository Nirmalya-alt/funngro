
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  const errorMsg = "CRITICAL: Could not find root element to mount the application. Ensure index.html has an element with id='root'.";
  console.error(errorMsg);
  // Optional: Add visible fallback if root is missing
  document.body.innerHTML = `<div style="color: white; background: #020617; height: 100vh; display: flex; align-items: center; justify-content: center; font-family: sans-serif; padding: 20px; text-align: center;"><h1>${errorMsg}</h1></div>`;
  throw new Error(errorMsg);
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
