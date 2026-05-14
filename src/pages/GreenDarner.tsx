import type { Page } from '../App'

interface GreenDarnerProps {
  onNavigate: (page: Page) => void
}

export default function GreenDarner({ onNavigate }: GreenDarnerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Anax_junius.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original"
          alt="Common Green Darner dragonfly perched at a backyard pond, iridescent green thorax and blue abdomen visible — a migratory species that travels thousands of miles like the monarch"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Bruce Marlin · <a href="https://commons.wikimedia.org/wiki/File:Anax_junius.JPG" target="_blank" rel="noopener noreferrer">CC BY 3.0</a> via Wikimedia Commons */}
          Photo: Bruce Marlin&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Anax_junius.JPG" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Common Green Darner</h1>
        <p className="hero__lead">
          Common Green Darners are among North America's most widespread large
          dragonflies and one of the few dragonfly species proven to migrate.
          The same fall fronts that move monarchs south can also move Green
          Darners across the landscape.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="migration-heading">
          <h2 id="migration-heading">A migratory dragonfly that travels with fall fronts</h2>
          <p>
            Common Green Darner (<em>Anax junius</em>) migration can exceed
            900 miles. Adults move south in waves triggered by cooling
            temperatures, often on the same days monarch watchers are tracking
            butterfly movement.
          </p>
          <p>
            This makes Green Darners an ideal co-migrant for Camp Monarch:
            they expand the migration story beyond a single species while
            reinforcing the same need for connected seasonal habitat.
          </p>
        </section>

        <section aria-labelledby="water-heading">
          <h2 id="water-heading">Why clean water matters before wings appear</h2>
          <p>
            Green Darner larvae (naiads) spend 1–2 years in freshwater where
            they hunt mosquito larvae and other aquatic prey. Successful
            breeding depends on clean, pesticide-free water with emergent
            native vegetation.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Anax_junius.JPG"
                  alt="Male Green Darner dragonfly perched, showing brilliant green thorax and blue abdomen — North America's largest common dragonfly"
                  loading="lazy"
                />
                <figcaption>
                  The Green Darner is one of the few dragonflies that migrates — traveling in loose swarms along the same Atlantic flyways as monarch butterflies each September and October. Like monarchs, the migration is multigenerational: the darners that leave in fall are not the same individuals that return in spring.
                  <span className="photo-credit"> Photo: Bruce Marlin · <a href="https://commons.wikimedia.org/wiki/File:Anax_junius.JPG" target="_blank" rel="noopener noreferrer">CC BY 3.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            A fish-free backyard pond with native plants can support this full
            aquatic stage. When naiads are present, they provide visible
            evidence that local water quality and habitat structure are working.
          </p>
        </section>

        <section aria-labelledby="threats-heading">
          <h2 id="threats-heading">The preventable threat: mosquito sprays and wetland loss</h2>
          <p>
            Mosquito insecticide programs can kill adult dragonflies and
            contaminate breeding water at the same time. Wetland drainage removes
            larval habitat entirely, leaving fewer places for this migration
            partner to reproduce.
          </p>
          <p>
            Protecting pond and wetland habitat is practical conservation:
            healthy dragonfly populations help suppress mosquitoes naturally
            while keeping seasonal insect migration visible.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three actions that help Green Darners now</h2>
          <ol className="step-list">
            <li>
              <strong>Create or protect a fish-free pond.</strong>{' '}
              Keep water pesticide-free and include native emergent plants so
              naiads can develop and adults can emerge.
            </li>
            <li>
              <strong>Skip mosquito sprays near water.</strong>{' '}
              Use habitat-first mosquito management so dragonfly predators can
              keep working over the long term.
            </li>
            <li>
              <strong>Track fall co-migration.</strong>{' '}
              Watch for Green Darners during monarch migration days and submit
              sightings to citizen-science platforms.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">One corridor can support both dragonflies and monarchs</h2>
          <p>
            Monarch butterflies and Green Darners share fall migration windows
            and many of the same threats: habitat loss and insecticide exposure.
            Protecting clean water plus native nectar corridors strengthens the
            whole seasonal system.
          </p>
          <p>
            Camp Monarch habitat works best when we design for multi-species
            outcomes. The result is not just one recovered species, but a more
            resilient neighborhood ecosystem.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to build migration habitat for more than one species?</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a native plant
            </button>
            {' '}to strengthen nectar corridors and edge habitat, or{' '}
            <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>
              plant milkweed
            </button>
            {' '}as part of a broader migration-ready yard plan.
          </p>
        </div>
      </div>
    </>
  )
}
