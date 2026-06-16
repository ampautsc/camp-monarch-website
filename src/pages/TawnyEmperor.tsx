import type { Page } from '../App'

interface TawnyEmperorProps {
  onNavigate: (page: Page) => void
}

export default function TawnyEmperor({ onNavigate }: TawnyEmperorProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tawny_Emperor_%28Nymphalidae%2C_Asterocampa_clyton%29_%2830293788194%29.jpg/1280px-Tawny_Emperor_%28Nymphalidae%2C_Asterocampa_clyton%29_%2830293788194%29.jpg"
          alt="Tawny Emperor butterfly (Asterocampa clyton) with wings open, showing orange-brown upper wings with dark spots and no white spots near the forewing tip"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Insects Unlocked&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Tawny_Emperor_(Nymphalidae,_Asterocampa_clyton)_(30293788194).jpg" target="_blank" rel="noopener noreferrer">CC0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Tawny Emperor</h1>
        <p className="hero__lead">
          A female Tawny Emperor (<em>Asterocampa clyton</em>) stacks her eggs in a cylinder of
          100 to 500 on a single hackberry leaf — every adult flying from that tree this summer
          started in the same cluster. The Tawny Emperor uses hackberry as its only caterpillar
          host, lands on bare skin to drink sodium just like its close relative the Hackberry
          Emperor, and ignores flowers entirely. The one reliable difference between the two:
          Hackberry Emperor carries white spots near the forewing tip, Tawny Emperor carries
          none. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Males hold perches on hackberry trunks from mid-morning through afternoon, chasing
            any moving object — other butterflies, birds, people — before returning to the same
            spot within seconds. Tawny Emperors run slightly darker and more uniformly
            orange-brown than Hackberry Emperors, which show sharper contrast between spots and
            ground color. Two broods fly each year: spring from late April through June, summer
            from late June through September. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tawny_Emperor_%28Nymphalidae%2C_Asterocampa_clyton%29_%2831066497316%29.jpg/1280px-Tawny_Emperor_%28Nymphalidae%2C_Asterocampa_clyton%29_%2831066497316%29.jpg"
            alt="Tawny Emperor butterfly (Asterocampa clyton) perched on bark, showing the absence of white spots near the forewing tip that distinguishes it from Hackberry Emperor"
            width={1280}
            height={956}
            loading="lazy"
          />
          <figcaption>
            No white spots at the forewing tip — that absence is the field mark. A Hackberry
            Emperor flying the same tree at the same hour carries three to five white spots at
            this exact spot.
            <span className="photo-credit"> Photo: Insects Unlocked&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Tawny_Emperor_(Nymphalidae,_Asterocampa_clyton)_(31066497316).jpg" target="_blank" rel="noopener noreferrer">CC0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Females stack 100 to 500 eggs into a compact pale-green cylinder on one leaf, and
            the caterpillars that hatch feed side by side through their first two or three
            instars before scattering to individual leaves by the fourth. Summer-brood
            caterpillars don&apos;t finish development before cold arrives — once nights drop
            below 50°F in October, they descend the trunk and shelter in the leaf litter at its
            base, rarely traveling more than ten meters. They resume feeding on the same tree
            come April, completing development in time to produce the year&apos;s first
            adults. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Tawny Emperor is common wherever hackberry grows, but every individual&apos;s fate
            still depends on one tree and the few square feet of leaf litter beneath it. A rake
            drawn through that layer in November removes the winter cohort along with the
            leaves — eliminating Hackberry Emperor caterpillars sheltering in the same square
            foot at the same time.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Keep hackberry on the property and leave self-seeded saplings in fence rows — a
              four-inch-diameter tree with corky bark ridges already supports egg-laying. [2]
            </li>
            <li>
              Leave the leaf litter under hackberry from October through late April, when the
              overwintering caterpillar shelters within about ten meters of the trunk. [2]
            </li>
            <li>
              Look for the egg mass in late May and again in early July — a compact pale-green
              cylinder on a leaf's upper surface, visible from two feet away. [2]
            </li>
            <li>
              Apply no systemic insecticide to hackberry or its root zone from May through
              September, when both broods are laying eggs and feeding. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('hackberry')}>
            <span className="neighbor-name">Hackberry</span>
            <span className="neighbor-note">The only caterpillar host; this single tree species breeds three obligate hackberry-only butterflies and supplies the sap flows and bark perches all three depend on as adults.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('hackberry-emperor')}>
            <span className="neighbor-name">Hackberry Emperor</span>
            <span className="neighbor-note">The near-twin flying the same tree at the same time; shares host plant, overwintering habit, and skin-landing behavior, differing only in the white-spotted forewing tip.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-snout')}>
            <span className="neighbor-name">American Snout</span>
            <span className="neighbor-note">The third obligate hackberry butterfly; unlike the two Emperors it visits flowers for nectar and stages mass migrations through Texas in wet years.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('question-mark')}>
            <span className="neighbor-name">Question Mark</span>
            <span className="neighbor-note">Also uses hackberry as a caterpillar host and shares the same sap flows and fermenting fruit with Tawny Emperor through late summer.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.butterfliesandmoths.org/species/Asterocampa-clyton" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Tawny Emperor</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Celtis_occidentalis" target="_blank" rel="noopener noreferrer">Wikipedia — Celtis occidentalis (Common Hackberry)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
