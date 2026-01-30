import './Hero.css'

const featuredArticle = {
  id: 1,
  title: "Bitcoin Surges Past $96K as Institutional Adoption Accelerates",
  excerpt: "Major financial institutions are increasing their Bitcoin allocations amid growing confidence in digital assets as a hedge against inflation.",
  image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=450&fit=crop",
  category: "Bitcoin",
  author: "Sarah Chen",
  timeAgo: "2 hours ago",
  readTime: "5 min read"
}

const sideArticles = [
  {
    id: 2,
    title: "Ethereum 2.0 Staking Reaches New All-Time High",
    category: "Ethereum",
    timeAgo: "4 hours ago"
  },
  {
    id: 3,
    title: "SEC Approves Spot Solana ETF Applications",
    category: "Regulation",
    timeAgo: "6 hours ago"
  },
  {
    id: 4,
    title: "DeFi Total Value Locked Exceeds $100 Billion",
    category: "DeFi",
    timeAgo: "8 hours ago"
  }
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Main Featured Article */}
        <article className="featured-article">
          <div className="featured-image">
            <img src={featuredArticle.image} alt={featuredArticle.title} loading="eager" />
            <div className="featured-overlay">
              <span className="category-badge">{featuredArticle.category}</span>
            </div>
          </div>
          <div className="featured-content">
            <h1>{featuredArticle.title}</h1>
            <p className="excerpt">{featuredArticle.excerpt}</p>
            <div className="article-meta">
              <span className="author">By {featuredArticle.author}</span>
              <span className="separator">•</span>
              <span className="time">{featuredArticle.timeAgo}</span>
              <span className="separator">•</span>
              <span className="read-time">{featuredArticle.readTime}</span>
            </div>
          </div>
        </article>

        {/* Side Articles */}
        <div className="side-articles">
          <h2 className="section-title">Trending Now</h2>
          {sideArticles.map((article, index) => (
            <article key={article.id} className="side-article">
              <span className="article-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="side-article-content">
                <span className="side-category">{article.category}</span>
                <h3>{article.title}</h3>
                <span className="side-time">{article.timeAgo}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
