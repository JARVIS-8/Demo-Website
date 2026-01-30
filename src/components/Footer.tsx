import './Footer.css'

const footerLinks = {
  product: ['News', 'Markets', 'Analysis', 'Learn', 'Podcast'],
  company: ['About', 'Careers', 'Contact', 'Press'],
  resources: ['API', 'Widgets', 'RSS Feeds', 'Brand Assets'],
  legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer']
}

const socialLinks = [
  { name: 'Twitter', icon: '𝕏', href: '#' },
  { name: 'Discord', icon: '◆', href: '#' },
  { name: 'Telegram', icon: '✈', href: '#' },
  { name: 'GitHub', icon: '⌘', href: '#' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="logo-icon">◈</span>
              <span className="logo-text">Cry</span>
            </a>
            <p className="footer-tagline">
              Your trusted source for cryptocurrency news and market analysis.
            </p>
            <div className="social-links">
              {socialLinks.map(social => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <ul>
                {footerLinks.product.map(link => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map(link => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <ul>
                {footerLinks.resources.map(link => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <ul>
                {footerLinks.legal.map(link => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Cry. All rights reserved.
          </p>
          <p className="disclaimer">
            <span className="warning">⚠️</span>
            Cryptocurrency may be unregulated in your jurisdiction. 
            The value of cryptocurrencies may go down as well as up. 
            Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
