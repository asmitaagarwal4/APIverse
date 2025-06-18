import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

// const router = createBrowserRouter([
//   {path:"/", element: <App />},
//   {path: "/about", element: <div>About Page</div>},
//   {path: "/contact", element: <div>Contact Page</div>},
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>,
)
