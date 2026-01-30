import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main className="main-content">
        <div className="logo-container">
          <a 
            href="https://vite.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Learn more about Vite"
          >
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a 
            href="https://react.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Learn more about React"
          >
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        
        <h1>Vite + React</h1>
        
        <div className="card">
          <button 
            onClick={() => setCount((count) => count + 1)}
            aria-label={`Increment count. Current count is ${count}`}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default App
