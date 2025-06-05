import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FrontPage from './Components/frontpage.jsx'
import Info from './Components/info.jsx'
import Projects from './Components/projects.jsx'

const color = "bg-gradient-to-br from-[#0a0f1c] via-[#1b132b] to-[#221435]"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className={color}>
      {/* As of now these are placed randomly, i jsut want to be see pages first then i will fix the layout */}
      <Projects />
      <FrontPage />
      {/* <Info /> */}
    </div>
  </StrictMode>
)
