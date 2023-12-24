import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './App.tsx';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/work/legislative-campaign-official-website/">
    <App />
  </BrowserRouter>

)
