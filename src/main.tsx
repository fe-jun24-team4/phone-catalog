import './index.scss';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Routes } from './pages/Routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
);
