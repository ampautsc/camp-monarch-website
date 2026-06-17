import type { Page } from '../App'

interface AboutProps {
  onNavigate: (page: Page) => void
}

const VALUES = [
  'Stewardship',
  'Diversity',
  'Do No Harm',
  'Community Empowerment',
  'Sustainability',
  'Well-being',
  'Connection',
]

const BOARD = [
  { name: 'Alan Pautsch', role: 'Founder and President' },
  { name: 'Scott Welzbacher', role: 'Founder and Secretary' },
  { name: 'Chris Melnick', role: 'Founder and Treasurer' },
  { name: 'Ayush Bhattasali', role: 'Outreach and Engagement' },
]

export default function About({ onNavigate }: AboutProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">About</div>
        <h1>About Camp Monarch</h1>
        <p className="hero__lead">
          Camp Monarch is a nonprofit working to address the loss of habitat for the Monarch
          Butterfly and the many other species that depend on the same land across North America. We
          help people restore that habitat where they live, and reconnect with the natural world in
          the process.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="vision-heading">
          <h2 id="vision-heading">Our vision</h2>
          <p>
            A nation restoring nature at home: a network of flourishing habitats across the country,
            each one supporting the monarch and countless other species, close enough together that
            wildlife can move between them. We picture monarch populations rebounding, wildlife
            corridors reconnected, and communities more connected with nature and living healthier,
            more sustainable lives.
          </p>
          <p>
            Most of the ground that network needs is in back yards, schoolyards, farms, and small
            plots. The work begins with the patch of land a person already tends.
          </p>
        </section>

        <section aria-labelledby="values-heading">
          <h2 id="values-heading">What we value</h2>
          <p>Seven values guide the work:</p>
          <ul>
            {VALUES.map(v => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="who-heading">
          <h2 id="who-heading">Who's behind it</h2>
          <p>
            Camp Monarch is a small, newly founded team, and we are recruiting founding members who
            share the vision. The founding board:
          </p>
          <ul>
            {BOARD.map(member => (
              <li key={member.name}>
                <strong>{member.name}</strong> — {member.role}
              </li>
            ))}
          </ul>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Get in touch or get started</h2>
          <p>
            There are two things anyone can do from the first day: talk about the work so more people
            see it is possible, and turn a patch of ground into habitat. A bed as small as ten feet
            by ten feet gives a monarch somewhere to stop.
          </p>
          <p style={{ marginBottom: 0 }}>
            <button className="link-button" onClick={() => onNavigate('growing-guide')}>How to grow a habitat</button>
            {'  ·  '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>Meet your neighbors</button>
            {'  ·  '}
            <button className="link-button" onClick={() => onNavigate('contact')}>Contact us</button>
          </p>
        </div>
      </div>
    </>
  )
}
