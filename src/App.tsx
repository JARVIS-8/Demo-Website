import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useIsMobile, usePrefersReducedMotion } from './hooks/useMediaQuery'

function App() {
  const [count, setCount] = useState(0)
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const handleReset = useCallback(() => {
    setCount(0)
  }, [])

  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main className="main-content">
        <section className="hero-section" aria-label="Introduction">
          <div className="logo-container">
            <a 
              href="https://vite.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Learn more about Vite - External link"
              className="logo-link"
            >
              <img 
                src={viteLogo} 
                className={`logo ${prefersReducedMotion ? '' : 'animate-hover'}`} 
                alt="Vite logo" 
                width="120"
                height="120"
                loading="eager"
              />
            </a>
            <a 
              href="https://react.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Learn more about React - External link"
              className="logo-link"
            >
              <img 
                src={reactLogo} 
                className={`logo react ${prefersReducedMotion ? '' : 'animate-spin'}`} 
                alt="React logo" 
                width="120"
                height="120"
                loading="eager"
              />
            </a>
          </div>
          
          <h1 className="hero-title">
            Vite + React
          </h1>
          
          <p className="hero-subtitle">
            Fast. Modern. Optimized.
          </p>
        </section>

        <section className="demo-section" aria-label="Interactive demo">
          <div className="card">
            <div className="card-header">
              <h2>Interactive Counter</h2>
              <span className="badge">Demo</span>
            </div>
            
            <div className="counter-display" role="status" aria-live="polite">
              <span className="count-value">{count}</span>
              <span className="count-label">clicks</span>
            </div>

            <div className="button-group">
              <button 
                onClick={handleIncrement}
                className="btn-primary"
                aria-label={`Increment count. Current count is ${count}`}
              >
                {isMobile ? '+' : 'Increment'}
              </button>
              
              {count > 0 && (
                <button 
                  onClick={handleReset}
                  className="btn-secondary"
                  aria-label="Reset counter to zero"
                >
                  Reset
                </button>
              )}
            </div>

            <p className="card-hint">
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </section>
        
        <section className="info-section" aria-label="Features">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Instant HMR and optimized builds</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h3>Fully Responsive</h3>
              <p>Works perfectly on all devices</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">♿</div>
              <h3>Accessible</h3>
              <p>ARIA labels and keyboard navigation</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
