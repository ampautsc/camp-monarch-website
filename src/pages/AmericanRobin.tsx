import type { Page } from '../App'

interface AmericanRobinProps {
  onNavigate: (page: Page) => void
}

export default function AmericanRobin({ onNavigate }: AmericanRobinProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/97/American_robin_%2871307%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="American Robin on a lawn, rust-orange breast visible, head tilted listening for earthworms beneath the surface"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Rhododendrites · <a href="https://commons.wikimedia.org/wiki/File:American_robin_(71307).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons */}
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:American_robin_(71307).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Robin</h1>
        <p className="hero__lead">
          The American robin is the most abundant landbird in North America.
          It is common enough to feel ordinary, but robin behavior is a real-time
          signal of whether your yard still has living soil, safe food webs, and
          year-round habitat that supports wildlife.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="indicator-heading">
          <h2 id="indicator-heading">A familiar bird that reveals hidden conditions</h2>
          <p>
            American robins (<em>Turdus migratorius</em>) are successful suburban adapters,
            which makes them easy to overlook. But because they are so familiar, they are
            one of the best gateway species for habitat awareness. If a species this common
            starts struggling, the issue is usually not the robin itself. The issue is what
            changed in the yard and soil around it.
          </p>
          <p>
            Robins forage heavily on lawns and open ground for earthworms and invertebrates.
            Persistent robin foraging is often a sign that the soil food web is still alive.
            When robins disappear from areas they used to hunt, that can indicate soil life
            has been suppressed by lawn chemicals or overly tidy landscaping.
          </p>
          <p>
            This species also carries one of conservation&apos;s clearest historical warnings:
            robin die-offs during DDT spraying were a central case in <em>Silent Spring</em>.
            The mechanism was bioaccumulation through food chains, not direct spraying of
            birds. That pattern still matters whenever toxins move through soil and prey.
          </p>
        </section>

        <section aria-labelledby="season-heading">
          <h2 id="season-heading">Year-round habitat requires two food systems</h2>
          <p>
            Robins need both healthy invertebrate-rich ground and reliable fruiting plants.
            During breeding season they depend heavily on worms, beetles, and caterpillars.
            In fall and winter, berries from native shrubs and trees become essential.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6f/American_Robin.jpg"
                  alt="American Robin on a lawn, alert posture, head cocked — the classic earthworm-hunting stance"
                  loading="lazy"
                />
                <figcaption>
                  In summer, robins hunt earthworms by sight and sound in short turf. In winter, they abandon earthworms entirely and rely on berries — serviceberry, holly, dogwood, and native crabapple sustain entire flocks through January and February. A yard with no fruiting native shrubs is a food desert for half the year.
                  <span className="photo-credit"> Photo: Alan Vernon · <a href="https://commons.wikimedia.org/wiki/File:American_Robin.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            A yard that only supports one side of that equation is incomplete habitat.
            Chemical-free soil without berry plants leaves winter gaps. Berry shrubs without
            living soil leaves spring and nesting gaps. Robins make these seasonal gaps
            visible because they stay in our neighborhoods through changing conditions.
          </p>
          <p>
            High juvenile mortality means post-fledging food access matters as much as
            nest success. Seeing fledglings in your yard is a reminder that nearby insect
            abundance during those first vulnerable weeks can determine survival.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three actions that help robins now</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Garden_bird_bath_Nuthurst_West_Sussex_England_01.jpg" alt="Stone bird bath in a garden setting" loading="lazy" />
            <figcaption>
              A ground-level water source earns daily visits from robins foraging nearby. Refresh it every two or three days to disrupt mosquito breeding and maintain what draws them back.
              <span className="photo-credit"> Photo: Acabashi&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Stop using lawn pesticides and herbicides.</strong>{' '}
              Keep the soil food web alive so robins can find worms, beetles, and other prey.
            </li>
            <li>
              <strong>Add native berry-producing shrubs and trees.</strong>{' '}
              Plant serviceberry, native dogwood, winterberry holly, hawthorn, or viburnums
              to provide critical fall and winter food.
            </li>
            <li>
              <strong>Leave leaf litter in place through spring.</strong>{' '}
              Robins forage where leaves are decomposing because those zones hold invertebrates.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The connection to monarch habitat</h2>
          <p>
            Robin-friendly yards and monarch-friendly yards overlap. Reducing pesticides,
            increasing native plant diversity, and allowing living ground cover helps both
            species. One set of yard decisions can support birds, butterflies, and the wider
            food web at the same time.
          </p>
          <p>
            Camp Monarch&apos;s core idea is visible here: when you restore habitat functions,
            familiar species return first. That familiarity can become momentum for broader
            restoration.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to build robin habitat?</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a native plant
            </button>
            {' '}to add berry and nectar structure, or{' '}
            <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>
              plant milkweed
            </button>
            {' '}to strengthen shared habitat for monarchs and neighborhood birds.
          </p>
        </div>
      </div>
    </>
  )
}
