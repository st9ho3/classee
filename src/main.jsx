import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './components/Student/Student.css'
import './components/Header/Header.css'
import './components/class/Class.css'
import './components/Main/Main.css'
import './components/Store/Store.css'
import './components/Class/CreateClass.css'
import './components/Navbar/Navbar.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
