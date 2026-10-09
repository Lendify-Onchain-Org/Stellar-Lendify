import { Link } from 'react-router-dom'
import { colors } from '../../constants/colors'

export function Footer() {
  return (
    <footer className="border-t mt-16"
      style={{ borderColor: 'rgba(30,58,82,0.4)' }}>
      <div className="max-w-7xl mx-auto px-6 py-5
        flex flex-col md:flex-row items-center
        justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Lendify Logo" className="w-6 h-6 rounded-full object-cover grayscale opacity-80" aria-hidden="true" />
          <span className="font-display font-bold text-text-primary">
            Stellar Lendify
          </span>
          <span className="text-text-muted text-sm">
            © 2026 · MIT License · Built for Stellar
          </span>
        </div>
        <nav aria-label="Footer navigation">
          <div className="flex items-center gap-4 text-sm
            text-text-muted">
            <a href="https://github.com/Lendify-Onchain-Org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
              aria-label="GitHub (opens in new tab)">
              GitHub
            </a>
            <a href="https://stellar-lendify.vercel.app/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
              aria-label="Documentation (opens in new tab)">
              Docs
            </a>
            <Link to="/contracts"
              className="hover:text-brand transition-colors">
              Contracts
            </Link>
            <a href="https://contribute.grantfox.xyz/org/Lendify-Onchain-Org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
              aria-label="Grantfox (opens in new tab)">
              Grantfox
            </a>
          </div>
        </nav>
      </div>
    </footer>
  )
}
