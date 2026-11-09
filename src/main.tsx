import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Apply the saved theme before the first paint so there is no flash.
const savedTheme = localStorage.getItem('evamo-theme')
const isLight = savedTheme === 'light'
document.documentElement.classList.toggle('light-mode', isLight)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
