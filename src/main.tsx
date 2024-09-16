import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { RootPage } from './components/pages/RootMap';
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootPage />
  </StrictMode>,
);
