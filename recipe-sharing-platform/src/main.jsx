import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import the main App component
import './index.css'; // Import the global styles (which includes Tailwind)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* The App component contains the BrowserRouter, Routes, and all pages */}
    <App />
  </React.StrictMode>
);