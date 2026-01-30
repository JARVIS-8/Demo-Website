import './NewsGrid.css'

interface Article {
  id: number
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  timeAgo: string
  readTime: string
}

const articles: Article[] = [
  {
    id: 1,
    title: "MicroStrategy Adds Another $500M in Bitcoin Purchases",
    excerpt: "The company's Bitcoin holdings now exceed 450,000 BTC as institutional accumulation continues.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop",
    category: "Bitcoin",
    author: "Michael Roberts",
    timeAgo: "1 hour ago",
    readTime: "4 min"
  },
  {
    id: 2,
    title: "Uniswap V4 Protocol Upgrade Set to Launch Next Month",
    excerpt: "New features include hooks for custom pools and improved gas efficiency for traders.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
    category: "DeFi",
    author: "Emma Wilson",
    timeAgo: "3 hours ago",
    readTime: "6 min"
  },
  {
    id: 3,
    title: "NFT Marketplace Volume Surges 200% in December",
    excerpt: "Ethereum-based collections lead the recovery as collector interest returns to the market.",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=400&h=250&fit=crop",
    category: "NFT",
    author: "Alex Thompson",
    timeAgo: "5 hours ago",
    readTime: "5 min"
  },
  {
    id: 4,
    title: "Central Banks Explore CBDC Interoperability Standards",
    excerpt: "New research suggests cross-chain compatibility could accelerate digital currency adoption.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
    category: "Regulation",
    author: "Lisa Chang",
    timeAgo: "7 hours ago",
    readTime: "8 min"
  },
  {
    id: 5,
    title: "Solana Breaks Transaction Speed Records Again",
    excerpt: "The network processed over 65,000 transactions per second during peak load testing.",
    image: "https://images.unsplash.com/photo-1634704784915-aacf363b021f?w=400&h=250&fit=crop",
    category: "Technology",
    author: "James Miller",
    timeAgo: "9 hours ago",
    readTime: "4 min"
  },
  {
    id: 6,
    title: "Crypto Mining Firms Pivot to AI Data Centers",
    excerpt: "Bitcoin miners are repurposing infrastructure to meet growing AI computing demands.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    category: "Mining",
    author: "David Park",
    timeAgo: "12 hours ago",
    readTime: "7 min"
  }
]

const categories = ['All', 'Bitcoin', 'Ethereum', 'DeFi', 'NFT', 'Regulation', 'Technology', 'Mining']

function NewsGrid() {
  return (
    <section className="news-section" id="news">
      <div className="news-container">
        {/* Header */}
        <div className="news-header">
          <h2 className="news-title">Latest News</h2>
          <div className="category-filters">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${cat === 'All' ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="news-grid">
          {articles.map(article => (
            <article key={article.id} className="news-card">
              <div className="news-image">
                <img src={article.image} alt={article.title} loading="lazy" />
                <span className="news-category">{article.category}</span>
              </div>
              <div className="news-content">
                <h3>{article.title}</h3>
                <p className="news-excerpt">{article.excerpt}</p>
                <div className="news-meta">
                  <span className="author">{article.author}</span>
                  <span className="dot">•</span>
                  <span className="time">{article.timeAgo}</span>
                  <span className="dot">•</span>
                  <span className="read-time">{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="load-more">
          <button className="load-more-btn">Load More Articles</button>
        </div>
      </div>
    </section>
  )
}

export default NewsGrid
