import type { Page } from '../App'

interface FooterProps {
  onNavigate: (page: Page) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>
        <button
          onClick={() => onNavigate('take-action')}
          style={{ background: 'none', border: 'none', color: 'var(--monarch-orange)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline' }}
        >
          Take action
        </button>
        {' · '}
        <button
          onClick={() => onNavigate('habitat-score')}
          style={{ background: 'none', border: 'none', color: 'var(--monarch-orange)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline' }}
        >
          Yard check
        </button>
        {' · '}
        <button
          onClick={() => onNavigate('monarch-life')}
          style={{ background: 'none', border: 'none', color: 'var(--monarch-orange)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline' }}
        >
          The monarch's life
        </button>
        {' · '}
        <button
          onClick={() => onNavigate('species-gallery')}
          style={{ background: 'none', border: 'none', color: 'var(--monarch-orange)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline' }}
        >
          Species gallery
        </button>
        {' · '}
        <button
          onClick={() => onNavigate('native-plant-near-me')}
          style={{ background: 'none', border: 'none', color: 'var(--monarch-orange)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline' }}
        >
          Find plants near me
        </button>
        {' · '}
        <button
          onClick={() => onNavigate('choose-a-plant')}
          style={{ background: 'none', border: 'none', color: 'var(--monarch-orange)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline' }}
        >
          Choose a plant
        </button>
        {' · '}
        <button
          onClick={() => onNavigate('plant-milkweed')}
          style={{ background: 'none', border: 'none', color: 'var(--monarch-orange)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline' }}
        >
          Plant milkweed
        </button>
        {' · '}
        <button
          onClick={() => onNavigate('the-migration')}
          style={{ background: 'none', border: 'none', color: 'var(--monarch-orange)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline' }}
        >
          Track the migration
        </button>
        {' · '}
        <button
          onClick={() => onNavigate('seasonal-calendar')}
          style={{ background: 'none', border: 'none', color: 'var(--monarch-orange)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline' }}
        >
          Seasonal calendar
        </button>
        {' · '}
        <button
          onClick={() => onNavigate('invasive-plants')}
          style={{ background: 'none', border: 'none', color: 'var(--monarch-orange)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline' }}
        >
          Invasive plants
        </button>
        {' · '}
        <button
          onClick={() => onNavigate('why-monarchs')}
          style={{ background: 'none', border: 'none', color: 'var(--monarch-orange)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline' }}
        >
          Why it matters
        </button>
      </p>
      <p style={{ marginTop: '0.75rem', opacity: 0.6 }}>
        Camp Monarch — connecting people with the natural world, one patch of milkweed at a time.
      </p>
    </footer>
  )
}
