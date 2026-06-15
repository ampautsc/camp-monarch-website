import type { Page } from '../App'

interface FirefliesProps {
  onNavigate: (page: Page) => void
}

export default function Fireflies({ onNavigate }: FirefliesProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Eastern_firefly_%28Photinus_pyralis%29%2C_June_2025%2C_Virginia.jpg/1280px-Eastern_firefly_%28Photinus_pyralis%29%2C_June_2025%2C_Virginia.jpg"
          alt="An Eastern Firefly resting on a plant stem, showing its dark wing covers with yellow margins and the light-producing organ at the tip of its abdomen"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={854}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Celari817&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Eastern_firefly_(Photinus_pyralis),_June_2025,_Virginia.jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Fireflies</h1>
        <p className="hero__lead">
          The Eastern Firefly (<em>Photinus pyralis</em>) is the most common firefly in
          eastern North America and the one responsible for the familiar June and July
          light shows over meadows and lawns. Males fly a J-shaped arc and flash every
          5.5 seconds; females answer from the grass 2 seconds later. The cold light
          is produced by a reaction between luciferin and the enzyme luciferase — no
          heat, nearly 100% efficient. Firefly populations are declining in many areas,
          primarily because of light pollution. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Adult fireflies spend the day resting in grass and low vegetation, invisible
            and inactive. The flash display begins about 20 minutes after sunset and
            lasts roughly 45 minutes. Males fly 5 to 15 feet above the ground over open
            areas — meadows, lawns, field edges — while females watch from perches.
            Each species has a signature flash timing that allows females to find males
            of their own species in the dark. Adult fireflies do not eat; they live
            their entire three to four weeks on reserves stored as larvae. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Photinus_pyralis_179780353.jpg/1280px-Photinus_pyralis_179780353.jpg"
            alt="A close view of a firefly showing its bioluminescent abdomen glowing yellow-green"
            width={1280}
            height={959}
            loading="lazy"
          />
          <figcaption>
            The bioluminescent reaction is nearly 100% efficient — almost no energy is
            lost as heat. A firefly&apos;s lantern is the most efficient light-producing
            system known in nature.
            <span className="photo-credit"> Photo: iNaturalist contributor&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Photinus_pyralis_179780353.jpg" target="_blank" rel="noopener noreferrer">CC0 (public domain)</a>&nbsp;via iNaturalist / Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Firefly larvae hatch from eggs laid in moist soil in late summer and spend
            one to two winters underground, hunting earthworms, slugs, and snails.
            The larvae are themselves bioluminescent — the &quot;glowworms&quot; sometimes
            seen in soil. They pupate in the soil in spring and emerge as adults in
            June when evening temperatures consistently reach 65–70°F. The adult
            flash season runs June through July, with the peak around the summer
            solstice. After mating, females lay eggs in moist soil and adults die by
            August. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Xerces Society for Invertebrate Conservation estimates that more than
            18 firefly species in North America are at risk of extinction. [2] The
            Eastern Firefly remains common but is declining in many parts of its range.
            The three primary threats are light pollution (which prevents males from
            finding females when artificial light drowns out flash signals), habitat
            loss of moist meadows and forest edges, and pesticide use that kills larvae
            in soil where they spend the first one to two years of their lives. [1][2]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Turn off or shield outdoor lights during firefly season — mid-June
              through July. Even a single porch light can suppress firefly activity
              across a wide area by drowning out flash signals the beetles use to
              find each other. [2]
            </li>
            <li>
              Leave sections of lawn unmowed through summer. Firefly larvae need moist
              soil and leaf litter, and adult females perch in taller grass to watch
              for flashing males. A patch of unmowed lawn near a tree line is some
              of the best firefly habitat you can create. [2]
            </li>
            <li>
              Stop applying insecticides to soil and lawn. Firefly larvae spend one
              to two years in the ground and are killed directly by lawn insecticides
              and indirectly when their earthworm prey is eliminated. [2]
            </li>
            <li>
              Create a small water feature — a pond, rain garden, or boggy area with
              emergent plants. Moist soil near standing water is where fireflies lay
              eggs and where larvae survive through the year. [2]
            </li>
            <li>
              Plant native shrubs along fence lines and yard edges. The layered
              structure of meadow grading into shrubs grading into trees is the
              classic firefly habitat — open enough for males to fly and flash,
              structured enough for larvae to find their prey. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-meadowlark')}>
            <span className="neighbor-name">Eastern Meadowlark</span>
            <span className="neighbor-note">Nests and forages in the same open meadows where fireflies flash each June — the meadowlark&apos;s song and the firefly&apos;s light mark the same habitat.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('luna-moth')}>
            <span className="neighbor-name">Luna Moth</span>
            <span className="neighbor-note">Another large charismatic insect flying the same summer nights — both species are signals of healthy, low-light habitat.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('common-nighthawk')}>
            <span className="neighbor-name">Common Nighthawk</span>
            <span className="neighbor-note">Hunts flying insects over the same open meadows at the same dusk hour when fireflies begin their display.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-tree-frogs')}>
            <span className="neighbor-name">Gray Tree Frogs</span>
            <span className="neighbor-note">Calls from the same moist forest edges and pond margins where firefly larvae develop in the soil — their trilling is the backdrop to the firefly display.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Photinus_pyralis/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Eastern Firefly</a></li>
            <li><a href="https://xerces.org/fireflies" target="_blank" rel="noopener noreferrer">Xerces Society for Invertebrate Conservation — Fireflies</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
