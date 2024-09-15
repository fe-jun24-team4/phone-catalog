import { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import App from './components/App';
import './index.scss';
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
