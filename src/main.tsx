import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// ...existing code...

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App />);
}