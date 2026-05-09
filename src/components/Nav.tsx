import type { Page } from '../App'

interface NavProps {
  current: Page
  onNavigate: (page: Page) => void
}

const links: { id: Page; label: string }[] = [
  { id: 'home',                 label: 'Home' },
  { id: 'why-monarchs',        label: 'Why Monarchs' },
  { id: 'monarch-life',        label: 'The Monarch\'s Life' },
  { id: 'plant-milkweed',      label: 'Plant Milkweed' },
  { id: 'native-plant-near-me', label: 'Find Plants Near Me' },
  { id: 'choose-a-plant',      label: 'Choose a Plant' },
  { id: 'the-migration',       label: 'The Migration' },
  { id: 'log-a-sighting',      label: 'Log a Sighting' },
  { id: 'raise-a-monarch',     label: 'Raise a Monarch' },
  { id: 'the-first-year',      label: 'The First Year' },
  { id: 'waystation-guide',    label: 'Waystation Guide' },
  { id: 'fireflies',           label: 'Fireflies' },
  { id: 'take-action',         label: 'Take Action' },
  { id: 'faq',                 label: 'FAQ' },
]

export default function Nav({ current, onNavigate }: NavProps) {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div
        className="site-nav__brand"
        onClick={() => onNavigate('home')}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && onNavigate('home')}
      >
        🦋 Camp Monarch
      </div>
      <div className="site-nav__links">
        {links.map(link => (
          <button
            key={link.id}
            className={`site-nav__link${current === link.id ? ' active' : ''}`}
            onClick={() => onNavigate(link.id)}
            aria-current={current === link.id ? 'page' : undefined}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
