import './Sidebar.css'

const trendingCoins = [
  { symbol: 'PEPE', name: 'Pepe', change: 24.5, price: 0.000019 },
  { symbol: 'WIF', name: 'dogwifhat', change: 18.3, price: 2.45 },
  { symbol: 'BONK', name: 'Bonk', change: 15.7, price: 0.000034 },
  { symbol: 'FLOKI', name: 'Floki', change: 12.2, price: 0.000156 },
  { symbol: 'SHIB', name: 'Shiba Inu', change: 8.9, price: 0.000018 },
]

const fearGreed = {
  value: 78,
  label: 'Extreme Greed',
  sentiment: 'greed'
}

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Fear & Greed Index */}
      <div className="sidebar-card">
        <h3 className="sidebar-title">Fear & Greed Index</h3>
        <div className="fear-greed">
          <div className="gauge">
            <div 
              className="gauge-needle" 
              style={{ transform: `rotate(${(fearGreed.value / 100) * 180 - 90}deg)` }}
            />
            <div className="gauge-value">{fearGreed.value}</div>
            <div className="gauge-label">{fearGreed.label}</div>
          </div>
          <div className="gauge-scale">
            <span>Extreme Fear</span>
            <span>Extreme Greed</span>
          </div>
        </div>
      </div>

      {/* Trending Coins */}
      <div className="sidebar-card">
        <h3 className="sidebar-title">🔥 Trending</h3>
        <div className="trending-list">
          {trendingCoins.map((coin, index) => (
            <div key={coin.symbol} className="trending-item">
              <div className="trending-rank">{index + 1}</div>
              <div className="trending-info">
                <div className="trending-name">
                  <span className="symbol">{coin.symbol}</span>
                  <span className="name">{coin.name}</span>
                </div>
                <div className="trending-price">
                  ${coin.price < 0.01 ? coin.price.toExponential(2) : coin.price.toFixed(4)}
                </div>
              </div>
              <div className={`trending-change ${coin.change >= 0 ? 'positive' : 'negative'}`}>
                +{coin.change}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="sidebar-card newsletter">
        <h3 className="sidebar-title">📮 Daily Brief</h3>
        <p className="newsletter-text">
          Get the latest crypto news and market insights delivered to your inbox.
        </p>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="newsletter-input"
        />
        <button className="newsletter-btn">Subscribe</button>
        <p className="newsletter-disclaimer">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
