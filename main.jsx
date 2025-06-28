import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const App = () => (
  <div>
    <h1>AideScolaireTogo</h1>
    <p>Bienvenue sur l’application éducative pour les élèves du Togo.</p>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
