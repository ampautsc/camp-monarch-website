import type { Page } from '../App'

interface PolyphemusMothProps {
  onNavigate: (page: Page) => void
}

export default function PolyphemusMoth({ onNavigate }: PolyphemusMothProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Polyphemus_Moth_%28Antheraea_polyphemus%29_-3.JPG/1280px-Polyphemus_Moth_%28Antheraea_polyphemus%29_-3.JPG"
          alt="A Polyphemus Moth resting with wings spread, showing its brown wings with large blue, yellow, and black eyespots on the hindwings"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={850}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: The High Fin Sperm Whale&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Polyphemus_Moth_(Antheraea_polyphemus)_-3.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Polyphemus Moth</h1>
        <p className="hero__lead">
          The Polyphemus Moth is one of North America&apos;s largest moths, with a wingspan
          up to 6 inches (15 cm). Its brown wings are marked with four large eyespots —
          the hindwing spots are ringed in blue, black, and yellow and are unveiled
          suddenly when the moth is disturbed, mimicking owl eyes. Named for the one-eyed
          Cyclops of Greek myth, adults have no functional mouths and live only one week,
          spending that time solely on reproduction. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Polyphemus Moths are nocturnal, resting motionless through the day — their
            mottled brown coloring makes them nearly invisible against bark or leaf
            litter. After dark, males use large, feathery antennae to track pheromones
            released by females. They can detect a female from a mile away and fly
            a zigzag course upwind to find her. Mating occurs before dawn. Females lay
            oval, flat-topped eggs individually on the leaves of host trees: oak, maple,
            birch, elm, willow, and many others. An adult Polyphemus Moth does not eat —
            its mouth is non-functional, and it lives entirely on energy stored during
            its caterpillar phase. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Polyphemus_Moth_%28Antheraea_polyphemus%29.JPG/1280px-Polyphemus_Moth_%28Antheraea_polyphemus%29.JPG"
            alt="A Polyphemus Moth from above showing the full wing span and the prominent eyespots on both pairs of wings"
            width={1280}
            height={741}
            loading="lazy"
          />
          <figcaption>
            The large eyespots on the hindwings are normally hidden beneath the forewings.
            When threatened, the moth flares its wings to suddenly reveal the &quot;eyes&quot;
            — a startle display that mimics an owl face.
            <span className="photo-credit"> Photo: The High Fin Sperm Whale&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Polyphemus_Moth_(Antheraea_polyphemus).JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Polyphemus caterpillars hatch in June and feed through August on oak, maple,
            birch, and other tree leaves, reaching about 3 inches (8 cm) in length and
            bright green with a golden sheen. In late summer they spin an oval silk
            cocoon wrapped in a leaf and attached to the tree or fallen to the ground.
            Adults emerge the following May through June; there is one generation per year
            in the north, occasionally two in the south. The adult lifespan is about
            four to seven days. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Polyphemus Moths have no formal IUCN listing but have declined significantly
            since the 1980s. The same parasitoid fly that has devastated Cecropia and
            Luna Moth populations — Compsilura concinnata, introduced to control gypsy
            moth — also attacks Polyphemus caterpillars in large numbers. Light pollution
            interferes with the pheromone-guided mating of both sexes, and habitat loss
            reduces the number of host trees available in many suburban areas. [1][2]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native oaks, maples, birches, and willows. These are the primary
              host trees for Polyphemus caterpillars, and a single large native oak
              can support dozens of caterpillars during its peak summer season. [2]
            </li>
            <li>
              Turn outdoor lights off or use motion-activated switches in late May
              through June. Artificial light at night disrupts the pheromone-following
              flight of male Polyphemus Moths and draws them away from the females they
              would otherwise find. [2]
            </li>
            <li>
              Leave leaf litter and fallen leaves under trees undisturbed from fall
              through early June. Polyphemus cocoons that fall to the ground overwinter
              in the leaf layer; raking or blowing leaves in fall removes and kills them.
              [2]
            </li>
            <li>
              If you find a large caterpillar (bright green, with raised yellow or gold
              spots) on an oak or maple in July or August, leave it — it is likely a
              Polyphemus or other silk moth caterpillar completing the one feeding stage
              of its two-year lifecycle. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('cecropia-moth')}>
            <span className="neighbor-name">Cecropia Moth</span>
            <span className="neighbor-note">North America&apos;s largest moth, sharing the same lifecycle, host trees, and decline story — both were once commonly seen at porch lights.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('luna-moth')}>
            <span className="neighbor-name">Luna Moth</span>
            <span className="neighbor-note">The third giant silk moth of eastern North America, sharing the same nocturnal forest world and facing the same introduced parasitoid threat.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-screech-owl')}>
            <span className="neighbor-name">Eastern Screech-Owl</span>
            <span className="neighbor-note">A nocturnal predator that hunts in the same woodland edges where Polyphemus Moths navigate in darkness; large moths are significant owl prey.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">Forages for caterpillars in the same mature forest understory where Polyphemus caterpillars feed on oak and maple through the summer.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Antheraea_polyphemus/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Polyphemus Moth</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Antheraea-polyphemus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Polyphemus Moth</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
