import type { Page } from '../App'

// Real monarch footage (Gailhampshire, CC BY 2.0, via Wikimedia Commons), hosted in
// /public so it isn't hotlinked. Its own first frame is the instant poster (shown
// while the video loads, and in place of it for reduced-motion users).
const HERO_VIDEO_URL = '/monarch-hero.webm'
const HERO_POSTER_URL = '/monarch-hero-poster.jpg'
const HERO_CREDIT_URL =
  'https://commons.wikimedia.org/wiki/File:Monarch_Butterflies._Danaus_plexippus_video.webm'

interface HomeProps {
  onNavigate: (page: Page) => void
}

// The homepage is intentionally just this hero: the line, two buttons, and real
// monarch video. Everything else lives one click deeper.
export default function Home({ onNavigate }: HomeProps) {
  return (
    <section className="home-hero">
      <img className="home-hero__poster" src={HERO_POSTER_URL} alt="" aria-hidden="true" />
      <video
        className="home-hero__media"
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_POSTER_URL}
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_URL} type="video/webm" />
      </video>
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
        href={HERO_CREDIT_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Video: Gailhampshire · CC BY 2.0
      </a>
    </section>
  )
}
