import type { Page } from '../App'

interface BlackEyedSusanProps {
  onNavigate: (page: Page) => void
}

export default function BlackEyedSusan({ onNavigate }: BlackEyedSusanProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Rudbeckia_hirta_kz03.jpg/1280px-Rudbeckia_hirta_kz03.jpg"
          alt="Black-eyed Susan flower with bright yellow ray petals around a dark brown domed center, with buds opening behind it"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={914}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Krzysztof Ziarnek, Kenraiz&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Rudbeckia_hirta_kz03.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Black-eyed Susan</h1>
        <p className="hero__lead">
          Black-eyed Susan (<em>Rudbeckia hirta</em>) opens its yellow-rayed, dark-domed flowers
          from late June through September, in lean, dry soil too poor for most other garden
          plants. Each spent flower head packs 250 to 300 seeds into a tight cylinder at its
          center — exactly the food American Goldfinches time their unusually late nesting season
          around. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            American Goldfinches nest later than almost any other songbird in the East — typically
            not until July or August, three to four weeks after most species have already fledged
            a first brood. The delay is tied to seed, not insects: goldfinches feed nestlings
            almost entirely on regurgitated seed, so they wait for Black-eyed Susan and other
            composites to start producing. Females also strip the soft pappus fibers from the seed
            heads to line the nest — material only available if the heads are left standing. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Black_eyed_susan_20040717_110754_2.1474.jpg/1280px-Black_eyed_susan_20040717_110754_2.1474.jpg"
            alt="Black-eyed Susan flower in a meadow with other wildflowers blurred in the background"
            width={1280}
            height={1087}
            loading="lazy"
          />
          <figcaption>
            The dark, domed center is a tight cluster of disc florets — and the leaf just behind
            it is exactly where a Silvery Checkerspot female lays a cluster of up to 200 eggs.
            <span className="photo-credit"> Photo: G. Edward Johnson&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Black_eyed_susan_20040717_110754_2.1474.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Silvery Checkerspot caterpillars hatch together from a single clutch and feed as a
            group on Rudbeckia leaves before dispersing individually in later stages — the same
            July and August weeks the plant is in full bloom. Black-eyed Susan itself is
            short-lived, typically two to four years, but reseeds freely into any open, sunny
            patch of bare soil; seed heads left standing through fall let goldfinches feed and let
            seed drop in place for spring. Nursery transplants often bloom in their first season,
            making this one of the fastest natives to close a midsummer gap in a new planting. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Black-eyed Susan itself isn't at risk, but the Silvery Checkerspot that depends on its
            leaves has lost ground across the eastern U.S. as mowed lawn and closed-canopy forest
            have replaced the open meadow habitat both species need — the butterfly now appears on
            watch lists in several states.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Leave seed heads standing through fall and winter — goldfinches strip both the seeds
              and the soft pappus fibers used to line July nests. [2]
            </li>
            <li>
              Skip rich, fertilized beds; lean or disturbed soil with six hours of direct sun
              produces more flowers than amended garden soil. [2]
            </li>
            <li>
              If seed heads must be cut, wait until November, after goldfinches have worked
              through them and seed has had time to drop. [2]
            </li>
            <li>
              Leave Rudbeckia leaves untreated through July and August, when Silvery Checkerspot
              caterpillars feed communally in their early instars. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Times its unusually late July nesting to overlap with Black-eyed Susan's seed production, feeding nestlings almost entirely on seed.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('silvery-checkerspot')}>
            <span className="neighbor-name">Silvery Checkerspot</span>
            <span className="neighbor-note">Lays clusters of up to 200 eggs on Rudbeckia leaves; caterpillars feed communally before dispersing in later instars.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-bergamot')}>
            <span className="neighbor-name">Wild Bergamot</span>
            <span className="neighbor-note">Blooms July through August, overlapping Black-eyed Susan's peak; both support the same midsummer pollinators.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('canada-goldenrod')}>
            <span className="neighbor-name">Canada Goldenrod</span>
            <span className="neighbor-note">Opens in late August as Black-eyed Susan goes to seed, carrying the bloom sequence forward toward October.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Rudbeckia_hirta" target="_blank" rel="noopener noreferrer">Wikipedia — Rudbeckia hirta (Black-eyed Susan)</a></li>
            <li><a href="https://www.allaboutbirds.org/guide/American_Goldfinch/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: American Goldfinch</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
