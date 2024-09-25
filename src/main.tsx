import './index.scss';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Routes } from './pages/Routes';
import { ThemeContextProvider } from './context/ThemeContext';

import './plugins/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  </StrictMode>,
);
