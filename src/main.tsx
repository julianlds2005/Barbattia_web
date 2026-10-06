import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/sections.css';
import './styles/showcase.css';

const root = document.getElementById('root');
if (!root) throw new Error('No se encontro #root');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
