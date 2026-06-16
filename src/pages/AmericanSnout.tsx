import type { Page } from '../App'

interface AmericanSnoutProps {
  onNavigate: (page: Page) => void
}

export default function AmericanSnout({ onNavigate }: AmericanSnoutProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/American_Snout_%28Nymphalidae%2C_Libytheana_carinenta%29_%2830247797595%29.jpg/1280px-American_Snout_%28Nymphalidae%2C_Libytheana_carinenta%29_%2830247797595%29.jpg"
          alt="American Snout butterfly (Libytheana carinenta) resting with wings closed, showing the elongated labial palps projecting forward from the face like a snout"
          className="species-hero-image"
          style={{ objectPosition: 'center 45%' }}
          width={1280}
          height={942}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Insects Unlocked&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:American_Snout_(Nymphalidae,_Libytheana_carinenta)_(30247797595).jpg" target="_blank" rel="noopener noreferrer">CC0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Snout</h1>
        <p className="hero__lead">
          The American Snout (<em>Libytheana carinenta</em>) carries a pair of elongated
          mouthparts that project forward past the head like a twig — when it folds its wings
          and grips a stem, the disguise is structural, not behavioral, and the butterfly
          disappears against the woody plant it&apos;s resting on. Hackberry is its only
          caterpillar host, and in wet years, the population it produces can move south through
          Texas at six million individuals per hour. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Unlike its hackberry-specialist neighbors, the American Snout visits flowers —
            goldenrod, asters, and other composites through late summer and fall — and also
            drinks from puddles and wet soil. Flight is fast and erratic, covering ground
            quickly between nectaring stops. At rest, the forewing folds against the hindwing
            and the projecting palps complete a dead-leaf-petiole silhouette regardless of the
            angle it lands at. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/American_Snout_%28Libytheana_carinenta%29_%2814828026984%29.jpg/1280px-American_Snout_%28Libytheana_carinenta%29_%2814828026984%29.jpg"
            alt="American Snout butterfly (Libytheana carinenta) with wings open, showing the orange, dark brown, and white dorsal wing pattern"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            With wings spread for basking or nectaring, the orange-and-brown pattern is on
            full display. Fold the wings shut against a twig and the same butterfly vanishes —
            the palps becoming the missing leaf stem.
            <span className="photo-credit"> Photo: Andrew C&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:American_Snout_(Libytheana_carinenta)_(14828026984).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Caterpillars feed exclusively on young hackberry leaves and complete egg-to-adult
            development in three to four weeks during summer warmth, producing two generations
            in the north and three to four in the south. Local abundance tracks hackberry leaf
            availability and spring rainfall almost exactly — a dry spring means fewer new
            leaves, lower caterpillar survival, and a quiet year. A wet spring sets up the
            population spikes that trigger the species&apos; famous fall migrations south and
            west through Texas. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            American Snout is common and not at risk, with population swings tied directly to
            weather rather than habitat loss. But the migration spectacle that makes this
            species famous depends entirely on ordinary, overlooked hackberry trees scattered
            across the landscape — there is no single reserve or refuge that produces six
            million butterflies an hour. That number is the sum of countless small, unmanaged
            hackberries doing exactly what they always do.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Keep any hackberry already on the property. Birds plant them in fence rows, and
              a tree with corky bark ridges visible from ten feet is already producing
              caterpillars. [2]
            </li>
            <li>
              Plant goldenrod and asters at the yard&apos;s edge. Adults need fall nectar before
              migration, and Canada goldenrod or New England aster flower in exactly that
              window. [2]
            </li>
            <li>
              Leave the leaf litter under hackberry from October through April, since multiple
              hackberry-specialist butterflies shelter there over winter. [2]
            </li>
            <li>
              Apply no systemic insecticide to hackberry during the growing season — the pale
              green caterpillar is invisible against the leaf but dies within hours of a
              systemic treatment reaching the foliage. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('hackberry')}>
            <span className="neighbor-name">Hackberry</span>
            <span className="neighbor-note">The only caterpillar host plant; no American Snout has been reared to maturity on anything outside the Celtis genus, so the species lives or dies by this one tree.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('hackberry-emperor')}>
            <span className="neighbor-name">Hackberry Emperor</span>
            <span className="neighbor-note">Shares the same host tree but fuels on the opposite resource as an adult — sap, fruit, and sweat instead of nectar — so the two species rarely compete for food even while sharing every leaf.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('tawny-emperor')}>
            <span className="neighbor-name">Tawny Emperor</span>
            <span className="neighbor-note">The third obligate hackberry butterfly, sharing the same host tree and the same overwintering leaf litter as the Snout and the Hackberry Emperor.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cedar-waxwing')}>
            <span className="neighbor-name">Cedar Waxwing</span>
            <span className="neighbor-note">Eats hackberry fruit in nomadic fall flocks and deposits the seeds wherever it perches next — the mechanism that keeps planting new host trees for the next generation of Snouts.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.butterfliesandmoths.org/species/Libytheana-carinenta" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — American Snout</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Celtis_occidentalis" target="_blank" rel="noopener noreferrer">Wikipedia — Celtis occidentalis (Common Hackberry)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
