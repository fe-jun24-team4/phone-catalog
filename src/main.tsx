import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import App from './components/app/App'
import './index.scss';
import { RootPage } from './components/pages/RootPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootPage />
  </StrictMode>,
);
