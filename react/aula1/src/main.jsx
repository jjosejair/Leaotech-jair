import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Componente1 from './componente/Componente1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Componente1/>
  </StrictMode>,
)
