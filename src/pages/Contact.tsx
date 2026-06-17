import type { Page } from '../App'

interface ContactProps {
  onNavigate: (page: Page) => void
}

const SOCIALS = [
  { label: 'Facebook', url: 'https://www.facebook.com/people/Camp-Monarch/61567548113524' },
  { label: 'Instagram', url: 'https://www.instagram.com/camp.monarch/' },
  { label: 'YouTube', url: 'https://www.youtube.com/@CampMonarch' },
  { label: 'Reddit', url: 'https://www.reddit.com/r/CampMonarch/' },
]

export default function Contact({ onNavigate }: ContactProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Contact</div>
        <h1>Contact Camp Monarch</h1>
        <p className="hero__lead">
          We would like to hear from property owners restoring habitat, people looking for a way to
          help, and potential partners. Questions, ideas, and restoration stories are all welcome.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="email-heading">
          <h2 id="email-heading">Email</h2>
          <p>
            <a href="mailto:contact@campmonarch.org">contact@campmonarch.org</a>
          </p>
        </section>

        <section aria-labelledby="social-heading">
          <h2 id="social-heading">Follow and share</h2>
          <p>
            We post habitat work and the wildlife it brings back, and we share what others are
            doing. Restoration stories are welcome on any of these.
          </p>
          <ul>
            {SOCIALS.map(s => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>While you're here</h2>
          <p style={{ marginBottom: 0 }}>
            <button className="link-button" onClick={() => onNavigate('about')}>About Camp Monarch</button>
            {'  ·  '}
            <button className="link-button" onClick={() => onNavigate('growing-guide')}>How to grow a habitat</button>
            {'  ·  '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>Meet your neighbors</button>
          </p>
        </div>
      </div>
    </>
  )
}
