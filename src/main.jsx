import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavContext from './context/NavContext'
import Stairs from './components/common/Stairs'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavContext>
        <Stairs>
          <App />
        </Stairs>
      </NavContext>
    </BrowserRouter>
  </StrictMode>,
)
