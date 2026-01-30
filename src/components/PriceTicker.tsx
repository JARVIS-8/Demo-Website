import { useEffect, useState, useRef } from 'react'
import './PriceTicker.css'

interface Coin {
  symbol: string
  name: string
  price: number
  change24h: number
}

const mockCoins: Coin[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: 96734.21, change24h: 2.34 },
  { symbol: 'ETH', name: 'Ethereum', price: 3256.89, change24h: -1.23 },
  { symbol: 'SOL', name: 'Solana', price: 198.45, change24h: 5.67 },
  { symbol: 'BNB', name: 'BNB', price: 712.34, change24h: 0.45 },
  { symbol: 'XRP', name: 'XRP', price: 3.12, change24h: -2.89 },
  { symbol: 'DOGE', name: 'Dogecoin', price: 0.34, change24h: 8.91 },
  { symbol: 'ADA', name: 'Cardano', price: 0.98, change24h: -0.76 },
  { symbol: 'AVAX', name: 'Avalanche', price: 35.67, change24h: 4.23 },
]

function PriceTicker() {
  const [prices, setPrices] = useState(mockCoins)
  const tickerRef = useRef<HTMLDivElement>(null)

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => prev.map(coin => ({
        ...coin,
        price: coin.price * (1 + (Math.random() - 0.5) * 0.001),
        change24h: coin.change24h + (Math.random() - 0.5) * 0.1
      })))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    if (price < 1) return `$${price.toFixed(4)}`
    return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : ''
    return `${sign}${change.toFixed(2)}%`
  }

  // Duplicate coins for seamless infinite scroll
  const duplicatedCoins = [...prices, ...prices]

  return (
    <div className="price-ticker">
      <div className="ticker-label">Markets</div>
      <div className="ticker-wrapper" ref={tickerRef}>
        <div className="ticker-content">
          {duplicatedCoins.map((coin, index) => (
            <div key={`${coin.symbol}-${index}`} className="ticker-item">
              <span className="coin-symbol">{coin.symbol}</span>
              <span className="coin-price">{formatPrice(coin.price)}</span>
              <span className={`coin-change ${coin.change24h >= 0 ? 'positive' : 'negative'}`}>
                {formatChange(coin.change24h)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PriceTicker
