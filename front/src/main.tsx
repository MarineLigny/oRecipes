import { createRoot } from 'react-dom/client'
import './styles.scss';
import App from './components/App.tsx'
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
