import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import FrontPage from './Components/frontpage.jsx'
import Projects from './Components/projects.jsx'
import Contact from './Components/contact.jsx'
import About from './Components/about.jsx'
import SignLang from './Components/projects/SignLang.jsx'
import TumorNet from './Components/projects/TumorNet.jsx'
import GraduateAI from './Components/projects/GraduateAI.jsx'
import Keylogger from './Components/projects/Keylogger.jsx'
import Ransom from './Components/projects/Ransom.jsx'
import OldPortfolio from './Components/projects/oldPortfolio.jsx'
import Error404 from './Components/Error404.jsx'
import Scroll from './Components/scroll.jsx'

// const color = "bg-gradient-to-br from-[#0a0f1c] via-[#1b132b] to-[#221435]"
const color2 = "bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Scroll /> {/* to top */}
      <div className={color2}>
        <Routes>
          {/* Main page routes  */}
          <Route path="/" element={<FrontPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Project routes  */}
          <Route path="/projects/SignLang" element={<SignLang />} />
          <Route path="/projects/TumorNet" element={<TumorNet />} />
          <Route path="/projects/GraduateAI" element={<GraduateAI />} />
          <Route path="/projects/Keylogger" element={<Keylogger />} />
          <Route path="/projects/Ransom" element={<Ransom />} />
          <Route path="/projects/oldPortfolio" element={<OldPortfolio />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<Error404 />} />


        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
)
