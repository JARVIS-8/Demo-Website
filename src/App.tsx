import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import PriceTicker from './components/PriceTicker'
import Hero from './components/Hero'
import NewsGrid from './components/NewsGrid'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './styles/theme.css'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <PriceTicker />
        <main className="main-content">
          <Hero />
          <div className="content-layout">
            <div className="news-section-wrapper">
              <NewsGrid />
            </div>
            <aside className="sidebar-wrapper">
              <Sidebar />
            </aside>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
