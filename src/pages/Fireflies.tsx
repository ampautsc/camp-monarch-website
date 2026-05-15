import type { Page } from '../App'

interface FirefliesProps {
  onNavigate: (page: Page) => void
}

export default function Fireflies({ onNavigate }: FirefliesProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/52/Photuris_lucicrescens.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Firefly resting on a leaf at dusk, bioluminescent lantern organ visible on abdomen — threatened by lawn chemicals and light pollution"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Bruce Marlin · <a href="https://commons.wikimedia.org/wiki/File:Photuris_lucicrescens.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a> via Wikimedia Commons */}
          Photo: Bruce Marlin&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Photuris_lucicrescens.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Fireflies</h1>
        <p className="hero__lead">
          A firefly spends two years as a larva in your soil before it emerges for a few weeks as an adult.
          It needs darkness to find a mate and undisturbed ground to overwinter.
          Modern yards provide neither. If you stopped seeing fireflies, the yard changed before the fireflies did.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="flash-heading">
          <h2 id="flash-heading">What you are watching</h2>
          <p>
            The flash is a conversation. Males fly and flash a species-specific pattern.
            Females perched in vegetation respond with a timed flash of their own.
            They find each other by this light-language, evolved over millions of years.
            Ambient light from porches, streetlights, and screens interrupts the signal.
            In a brightly lit yard, the females cannot distinguish male flashes from background glow.
            Mating fails. The population quietly declines.
          </p>
          <p>
            Firefly larvae are soil predators: they hunt earthworms, slugs, and snails in the leaf litter
            and soft ground beneath trees. When you remove fallen leaves in autumn,
            you are removing the overwintering habitat of the following summer's generation.
            The adults you see in June are the larvae that survived your yard last November.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three things that bring fireflies back</h2>
          <ol className="step-list">
            <li>
              <strong>Turn outdoor lights off after 10pm in June and July.</strong>{' '}
              Peak flash season is roughly 8-11pm. Even one porch light can suppress mating activity
              in a radius of 50 feet. Motion-sensor lights that stay off when nothing is moving
              are a reasonable compromise.
            </li>
          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Fallen_leaves.jpg" alt="Autumn leaves covering garden ground" loading="lazy" />
            <figcaption>
              Firefly larvae overwinter as predators in moist leaf litter and loose soil. The gesture of leaving an unraked layer — even in just one corner of the yard — provides the thermal and moisture conditions that make the following summer's display possible.
              <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;<a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
            <li>
              <strong>Leave the leaves through winter.</strong>{' '}
              Rake paths and lawn if needed, but let a layer remain in garden beds and under trees.
              Fireflies that pupate in your leaves will emerge in your yard the following summer.
              This is the highest-leverage action most yards can take.
            </li>
            <li>
              <strong>Let one corner go unmowed.</strong>{' '}
              Tall grass and native plants provide the moist, shaded ground cover that larvae need
              and the vegetation that females perch in during mating. A 4x6 foot patch is meaningful.
              It does not need to be large.
            </li>
          </ol>
        </div>

        <section aria-labelledby="firefly-signal-heading">
          <h2 id="firefly-signal-heading">What fireflies tell us</h2>
          <p>
            Fireflies are a lagging indicator. If your yard had fireflies ten years ago and doesn't now,
            the habitat change happened before the population disappeared.
            They cannot recover quickly: a two-year larval cycle means a single bad year
            removes two years of breeding output. Recovery from population collapse takes a decade
            even when conditions improve.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/Photinus_pyralis_Firefly_2.jpg"
                  alt="Photinus pyralis firefly resting on a leaf — the most common backyard species in eastern North America"
                  loading="lazy"
                />
                <figcaption>
                  The flashing adult firefly is the brief, visible moment in a two-year life. The larva lives in leaf litter and moist soil for one to two years, hunting snails, slugs, and earthworms. Raking leaves in autumn and treating lawns with pesticides destroys the stage that accounts for 95% of a firefly's life.
                  <span className="photo-credit"> Photo: art farmer · <a href="https://commons.wikimedia.org/wiki/File:Photinus_pyralis_Firefly_2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            They are most sensitive to three things: light pollution, lawn pesticides,
            and the removal of leaf litter. All three are decisions made inside the property line.
          </p>
        </section>
      </div>
    </>
  )
}
