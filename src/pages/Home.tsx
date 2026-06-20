import type { Page } from '../App'

// Real monarch footage (Pexels, free license — no attribution required; courtesy
// credit kept). Tripod-steady close-up of a monarch on native ironweed & goldenrod,
// hosted in /public so it isn't hotlinked. MP4 so it autoplays everywhere incl. iOS.
// Its own frame is the instant poster (and the reduced-motion fallback).
const HERO_VIDEO_URL = '/monarch-hero.mp4'
const HERO_POSTER_URL = '/monarch-hero-poster.jpg'
const HERO_CREDIT_URL = 'https://www.pexels.com/video/3637343/'

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
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>
      <div className="home-hero__scrim" aria-hidden="true" />

      <div className="home-hero__panel">
        <h1 className="home-hero__headline">
          Monarchs are in trouble.{' '}
          <span className="home-hero__headline-accent">You can help.</span>
        </h1>
        <div className="home-hero__actions">
          <button className="hero__cta" onClick={() => onNavigate('habitat-hero')}>
            Be a habitat hero →
          </button>
          <button
            className="hero__cta hero__cta--ghost"
            onClick={() => onNavigate('why-monarchs')}
          >
            Why we need heroes
          </button>
        </div>
      </div>

      <a
        className="home-hero__credit"
        href={HERO_CREDIT_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Video: Pexels
      </a>
    </section>
  )
}
