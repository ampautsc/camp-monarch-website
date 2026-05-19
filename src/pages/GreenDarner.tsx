import type { Page } from '../App'

interface GreenDarnerProps {
  onNavigate: (page: Page) => void
}

export default function GreenDarner({ onNavigate }: GreenDarnerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Anax_junius.JPG"
          alt="Common Green Darner dragonfly perched on vegetation, iridescent green thorax and blue abdomen — a migratory species that travels the same fall flyways as monarch butterflies"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Bruce Marlin&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Anax_junius.JPG" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Common Green Darner</h1>
        <p className="hero__lead">
          The green darner naiad hunts in still water for most of a year before it grows wings.
          Its lower jaw stays folded flat beneath its face, held under compression.
          When a mosquito larva moves within range, the jaw shoots forward, impales it, and retracts —
          the whole motion takes under 30 milliseconds.
          The adult that crawls from that naiad, dries its wings on a cattail stem, and lifts into
          the September air above your pond will travel south on the same cold front that carries monarchs.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="naiad-heading">
          <h2 id="naiad-heading">Most of a year underwater, breathing through its rectum</h2>
          <p>
            Green darner naiads draw water through the rectum across internal gill chambers, then expel it.
            Fast expulsion provides a burst of thrust for escaping predators.
            They spend 10 to 12 months in this stage, molting through multiple instars,
            growing with each one.
            A final molt at the water's edge splits the old cuticle down the back.
            The adult pulls itself free, pumps fluid into its wings, and waits a few hours
            for them to harden before flying for the first time.
          </p>
          <p>
            The full development happens in a backyard pond, a rain garden with standing water,
            or a half-barrel planter with native plants and no fish.
            Most people in the eastern United States live within breeding range of a green darner population
            and have never seen a naiad.
          </p>
        </section>

        <section aria-labelledby="migration-heading">
          <h2 id="migration-heading">The September cold front that moves monarchs also moves darners</h2>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Common_Green_Darner_Anax_junius_JG.jpg"
              alt="Common Green Darner dragonfly in flight showing wingspan — one of the few dragonfly species proven to migrate hundreds of miles along the Atlantic flyway each fall"
              loading="lazy"
            />
            <figcaption>
              The green darner is one of the largest dragonflies in North America, with a wingspan reaching 4.5 inches. Individuals travel up to 100 miles in a single day during fall migration, moving south in loose groups triggered by the same cold fronts that concentrate monarch butterflies at Atlantic flyway watch sites.
              <span className="photo-credit"> Photo: JeffreyGammon · <a href="https://commons.wikimedia.org/wiki/File:Common_Green_Darner_Anax_junius_JG.jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a> via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            In late September and early October, cold fronts push green darners south in groups —
            hundreds of individuals moving low over coastal meadows and ridgelines, catching insects as they fly.
            Monarch watchers at Atlantic flyway hawkwatch stations regularly record darner movement
            on the same days as peak butterfly counts.
          </p>
          <p>
            The migration is multigenerational.
            Darners that reach the Gulf states in October breed there.
            Their offspring emerge in late winter and fly north to breed in spring.
            The adults arriving at a northern pond in April are the grandchildren of the ones that left in September.
            This is the same mechanic the monarch uses.
            Neither species navigates to a location it has ever been.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>What stops a naiad from becoming a migrant</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/31/Garden_bird_bath_Nuthurst_West_Sussex_England_01.jpg"
              alt="Garden water feature with shallow open water and surrounding native vegetation"
              loading="lazy"
            />
            <figcaption>
              Green darner naiads complete development in still, fish-free water with native emergent stems to climb during emergence. A half-barrel planter, a shallow garden pond, or a rain garden with standing water qualifies. Ornamental fish eat naiads. Mosquito sprays and lawn herbicides contaminate the water they breathe through.
              <span className="photo-credit"> Photo: Acabashi&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Don't spray for mosquitoes near water.</strong>{' '}
              Adulticide sprays drift into ponds within hours of application.
              Larvicides applied to standing water kill darner naiads directly —
              naiads breathe through the same water column they inhabit.
              A dragonfly population in a pond suppresses mosquitoes at every life stage;
              spraying eliminates both at once.
            </li>
            <li>
              <strong>Build or restore a fish-free pond.</strong>{' '}
              Koi, goldfish, and bass eat naiads on sight.
              A lined half-barrel with native arrowhead or pickerelweed, no fish, and no herbicide
              will be colonized by patrolling darners within a few seasons —
              they locate new water by aerial survey.
            </li>
            <li>
              <strong>Leave emergent stems at the water's edge.</strong>{' '}
              Naiads crawl up cattail and bulrush stems to emerge.
              Trimmed or bare pond edges mean adults fall back into the water before their wings harden.
              Leave at least a few stems standing through midsummer.
            </li>
            <li>
              <strong>Plant native vegetation within 10 feet of the pond perimeter — no lawn up to the edge.</strong>{' '}
              Lawn fertilizers applied within a few yards of still water move into the pond
              through rain runoff. Nitrogen causes algal blooms; algal decomposition after the
              bloom consumes dissolved oxygen in the water column. Green darner naiads breathe
              that water continuously — an oxygen crash kills them before they ever emerge.
              Native riparian plantings (blue flag iris, swamp milkweed, cardinal flower) absorb
              nitrogen from runoff before it reaches the water and provide perch and hunting
              habitat for adult darners flying the pond edge.
            </li>
          </ol>
        </div>

        <section aria-labelledby="indicator-heading">
          <h2 id="indicator-heading">Darners emerging from a pond are two years of water quality evidence</h2>
          <p>
            A green darner naiad breathes water through its gill chambers continuously for 10 to 12 months.
            Pesticides that enter the water accumulate in its tissue.
            A pond that produces adult darners has been free of lethal contamination
            for that full development period.
            A pond that produced darners five years ago and no longer does has changed —
            the most common causes are lawn pesticide runoff, mosquito spray programs,
            and fish introductions.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            Darners need clean water to breed and monarchs need nectar corridors to migrate —
            both movements cross the same mid-Atlantic flyway in September.
            Build the water habitat and the nectar plants and the two migrations converge above the same yard.{' '}
            <button className="link-button" onClick={() => onNavigate('water-for-wildlife')}>
              Water for Wildlife
            </button>
            {' '}covers pond design and rain garden options, and{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>
            {' '}explains how the leaf litter floor supports the insect prey darners need before they migrate.
          </p>
        </div>
      </div>
    </>
  )
}
