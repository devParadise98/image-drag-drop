import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Prueba1 from './Prueba1/index.tsx';
import Prueba2 from './Prueba2/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Con la libreria deprecated</h1>
    <Prueba1 />
    <h2>Con la libreria base</h2>
    <Prueba2 />
  </StrictMode>,
)
