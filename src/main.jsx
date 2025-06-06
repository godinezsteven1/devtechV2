import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import FrontPage from './Components/frontpage.jsx'
import Projects from './Components/projects.jsx'
import Contact from './Components/contact.jsx'
import About from './Components/about.jsx'

const color = "bg-gradient-to-br from-[#0a0f1c] via-[#1b132b] to-[#221435]"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className={color}>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
)
