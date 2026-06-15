import type { Page } from '../App'

interface SilveryCheckerspotProps {
  onNavigate: (page: Page) => void
}

export default function SilveryCheckerspot({ onNavigate }: SilveryCheckerspotProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Silvery_Checkerspot_-_Chlosyne_nycteis%2C_Occoquan_Regional_Park%2C_Lorton%2C_Virginia.jpg/1280px-Silvery_Checkerspot_-_Chlosyne_nycteis%2C_Occoquan_Regional_Park%2C_Lorton%2C_Virginia.jpg"
          alt="A Silvery Checkerspot butterfly with wings fully open showing the orange-brown and black checkerboard pattern with the white marginal spots along the wing borders"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Judy Gallagher&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Silvery_Checkerspot_-_Chlosyne_nycteis,_Occoquan_Regional_Park,_Lorton,_Virginia.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Silvery Checkerspot</h1>
        <p className="hero__lead">
          The Silvery Checkerspot is a medium butterfly with a bold checkerboard pattern
          of orange-brown, black, and cream on the upperwing. The name comes from the
          hindwing underside, which has a row of silvery-white crescents along the
          outer margin. Wingspan is 1.5 to 2.25 inches. It is a butterfly of open
          meadows, roadsides, and forest edges where its host plants — native sunflowers,
          rudbeckia, and native asters — grow in the sun. It is less colonial than the
          Baltimore Checkerspot and more broadly distributed across a range of open
          habitats. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Silvery Checkerspots are active, sun-seeking butterflies that fly low through
            open meadows and along forest edges. Males perch on leaves and flower heads
            in sunny spots, watching for females. Adults nectar on native wildflowers —
            native thistles, black-eyed Susan, native clovers, and native coneflowers
            are favorites. They are most active in the morning and afternoon on warm
            days and take shelter during the hottest part of summer afternoons. Flight
            is relatively slow and deliberate compared to hairstreaks and blues. The
            checkered wing pattern from above is distinctive even in flight. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Silvery_Checkerspot_-_Chlosyne_nycteis%2C_Jones_Preserve%2C_Rappahannock_County%2C_Virginia_%2833775267823%29.jpg/1280px-Silvery_Checkerspot_-_Chlosyne_nycteis%2C_Jones_Preserve%2C_Rappahannock_County%2C_Virginia_%2833775267823%29.jpg"
            alt="A Silvery Checkerspot butterfly nectaring on a native wildflower showing the orange-brown and black upper wing checkered pattern from a slightly different angle"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            Silvery Checkerspot caterpillars are gregarious in early instars — young
            caterpillars from the same egg mass feed together on sunflower or rudbeckia
            leaves, forming a conspicuous black-and-spiny cluster. Later instars
            disperse and feed alone. The gregarious early stage and solitary later
            stage are common in checkerspot species.
            <span className="photo-credit"> Photo: Judy Gallagher&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Silvery_Checkerspot_-_Chlosyne_nycteis,_Jones_Preserve,_Rappahannock_County,_Virginia_(33775267823).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Silvery Checkerspots overwinter as third-instar caterpillars, tucked in
            plant litter at the base of host plants. They complete development in spring
            and pupate in May. Adults emerge in June, and there is one generation per
            year across most of the range, with a partial second generation in the
            south. Females lay eggs in clusters on the underside of sunflower and
            rudbeckia leaves. The caterpillar is black with orange-spotted lateral
            spines — the same bold pattern strategy seen in the Baltimore Checkerspot,
            likely serving as a warning against predators. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Silvery Checkerspot is fairly common in the east but has declined in
            parts of its range, particularly in the northeast. [1] It is not currently
            of conservation concern but is considered locally declining where native
            sunflower and rudbeckia meadows have been lost to development. The species
            benefits from roadside and right-of-way management that maintains native
            wildflower communities rather than mowing to bare ground. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native sunflowers (Helianthus annuus, H. divaricatus, or H. decapetalus).
              Native sunflowers are the primary caterpillar host plant for Silvery
              Checkerspots. They grow vigorously in full sun and are essential for
              supporting local populations of this and several other sunflower-specialist
              butterflies and moths. [2]
            </li>
            <li>
              Plant black-eyed Susan (Rudbeckia hirta or R. fulgida). Both a caterpillar
              host plant and an adult nectar source for Silvery Checkerspots, black-eyed
              Susan is one of the most ecologically important native wildflowers in the
              eastern meadow community and one of the easiest to establish. [2]
            </li>
            <li>
              Allow native coneflowers and asters to grow in the meadow edge. Silvery
              Checkerspots nectar on native asters and coneflowers alongside their
              caterpillar host plants — a meadow edge that includes sunflowers,
              rudbeckia, coneflower, and native asters supports the full life cycle
              in one area. [2]
            </li>
            <li>
              Leave old plant stalks standing through winter. Silvery Checkerspot
              caterpillars overwinter at the base of host plants in plant debris.
              Cutting all native plant stalks to the ground in fall removes this
              overwintering habitat. Leave stalks standing until late April to protect
              overwintering caterpillars. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('baltimore-checkerspot')}>
            <span className="neighbor-name">Baltimore Checkerspot</span>
            <span className="neighbor-note">The other eastern checkerspot — the Baltimore is a wetland specialist with a much more dramatic orange-red pattern, while the Silvery prefers upland meadows and has a more muted orange-brown color.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('pearl-crescent')}>
            <span className="neighbor-name">Pearl Crescent</span>
            <span className="neighbor-note">Similar size and open-meadow habitat preference; Pearl Crescents are often seen alongside Silvery Checkerspots in native wildflower meadows in June and July.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('black-eyed-susan')}>
            <span className="neighbor-name">Black-eyed Susan</span>
            <span className="neighbor-note">A dual-purpose plant for Silvery Checkerspots: both a caterpillar host and a preferred adult nectar source — planting black-eyed Susan supports both life stages in the same plot.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('canada-goldenrod')}>
            <span className="neighbor-name">Canada Goldenrod</span>
            <span className="neighbor-note">A fall nectar source for second-brood adults; goldenrod meadows in August support Silvery Checkerspots, Pearl Crescents, and dozens of other late-summer butterfly species.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Chlosyne_nycteis/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Silvery Checkerspot</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Chlosyne-nycteis" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Silvery Checkerspot</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
