import type { Page } from '../App'

interface FooterProps {
  onNavigate: (page: Page) => void
}

// A small, curated set — the full site is reachable from the nav, so the footer
// stays clean rather than repeating every page.
const LINKS: { page: Page; label: string }[] = [
  { page: 'why-monarchs', label: 'Why it matters' },
  { page: 'growing-guide', label: 'Growing guide' },
  { page: 'species-gallery', label: 'Meet your neighbors' },
  { page: 'take-action', label: 'Take action' },
  { page: 'about', label: 'About' },
  { page: 'contact', label: 'Contact' },
]

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="site-footer">
      <nav className="site-footer__links" aria-label="Footer">
        {LINKS.map(link => (
          <button key={link.page} className="site-footer__link" onClick={() => onNavigate(link.page)}>
            {link.label}
          </button>
        ))}
      </nav>
      <p className="site-footer__tagline">
        Connecting people with the natural world, one patch of milkweed at a time.
      </p>
      <p className="site-footer__legal">© {new Date().getFullYear()} Camp Monarch · a 501(c)(3) nonprofit</p>
    </footer>
  )
}
