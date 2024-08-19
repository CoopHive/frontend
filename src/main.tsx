import { createRoot } from 'react-dom/client'
import { NavBar } from './components/NavBar.tsx'
import { Home } from '@/Home.tsx'
import { About } from '@/About.tsx'
import { NoPage } from './components/NoPage.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
)
