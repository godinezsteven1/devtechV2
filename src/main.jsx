import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FrontPage from './Components/frontpage.jsx'
import Info from './Components/info.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FrontPage />
    <Info />
  </StrictMode>
)
