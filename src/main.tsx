import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './scss/index.scss';
import { isProduction } from './config/config';

if (!isProduction)
  import('./utils/randomColors');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
