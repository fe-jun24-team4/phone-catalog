import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { RootPage } from './pages/RootMap';
import { CatalogContextProvider } from './pages/CatalogPage/context/CatalogContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootPage />
  </StrictMode>,
);
