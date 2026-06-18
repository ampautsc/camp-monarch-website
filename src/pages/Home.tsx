import type { Page } from '../App'

// Verified Wikimedia Commons photo (USFWS Midwest Region, CC BY 2.0). Credited in the hero corner.
// 1920px thumb of the same file the homepage already used, for a crisp full-bleed hero.
const HERO_PHOTO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Monarch_butterfly_on_common_milkweed_%2848372506736%29.jpg/1920px-Monarch_butterfly_on_common_milkweed_%2848372506736%29.jpg'
const HERO_PHOTO_CREDIT_URL =
  'https://commons.wikimedia.org/wiki/File:Monarch_butterfly_on_common_milkweed_(48372506736).jpg'

interface HomeProps {
  onNavigate: (page: Page) => void
}

// The homepage is intentionally just this hero: the line, two buttons, and a
// glorious monarch-on-milkweed photo in slow motion. Everything else lives one
// click deeper, reached by the buttons and the nav.
export default function Home({ onNavigate }: HomeProps) {
  return (
    <section className="home-hero">
      <div
        className="home-hero__media"
        aria-hidden="true"
        style={{ backgroundImage: `url(${HERO_PHOTO_URL})` }}
      />
      <div className="home-hero__scrim" aria-hidden="true" />

      <div className="home-hero__panel">
        <h1 className="home-hero__headline">
          Monarchs are in trouble.{' '}
          <span className="home-hero__headline-accent">You can help.</span>
        </h1>
        <div className="home-hero__actions">
          <button className="hero__cta" onClick={() => onNavigate('growing-guide')}>
            Be a habitat hero →
          </button>
          <button
            className="hero__cta hero__cta--ghost"
            onClick={() => onNavigate('why-monarchs')}
          >
            Learn more about the problem
          </button>
        </div>
      </div>

      <a
        className="home-hero__credit"
        href={HERO_PHOTO_CREDIT_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Photo: USFWS · CC BY 2.0
      </a>
    </section>
  )
}
