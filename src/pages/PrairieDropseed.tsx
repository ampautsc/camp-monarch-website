import type { Page } from '../App'

interface PrairieDropseedProps {
  onNavigate: (page: Page) => void
}

export default function PrairieDropseed({ onNavigate }: PrairieDropseedProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Sporobolus_heterolepis_-_Garden_in_the_Woods_-_Massachusetts.jpg/1280px-Sporobolus_heterolepis_-_Garden_in_the_Woods_-_Massachusetts.jpg"
          alt="Prairie Dropseed mound of fine, arching green leaves with airy seed panicles rising above the foliage"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={720}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Daderot&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Sporobolus_heterolepis_-_Garden_in_the_Woods_-_Massachusetts.jpg" target="_blank" rel="noopener noreferrer">CC0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Prairie Dropseed</h1>
        <p className="hero__lead">
          Prairie Dropseed (<em>Sporobolus heterolepis</em>) forms a mound of hair-thin, arching
          leaves 18 to 24 inches tall, growing from a single crown in full sun and dry to
          average soil. In September its ripening seeds release volatile oils that smell like
          coriander or buttered popcorn — a fragrance with no confirmed purpose for this
          wind-pollinated grass, since it earns nothing from passing insects. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            On a warm afternoon in the third week of September, walking past a mature clump
            releases the scent into the air — strong enough to stop someone on a garden path who
            has never encountered the plant in seed. The variation in how people describe it —
            coriander, cilantro, buttered popcorn — reflects differences in individual smell
            receptors, not inconsistency in the plant. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Sporobolus_heterolepis_kz2.jpg/1280px-Sporobolus_heterolepis_kz2.jpg"
            alt="Close view of Prairie Dropseed seed panicles on wiry stems above the arching leaf mound"
            width={1280}
            height={1855}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            The seed panicles rise on stems fine enough to nearly disappear against the sky —
            each seed wrapped in the thin, oily husk responsible for the fragrance.
            <span className="photo-credit"> Photo: Krzysztof Ziarnek, Kenraiz&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Sporobolus_heterolepis_kz2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            A plug set out in spring puts down roots and appears as little more than a small
            tuft its first year; by year three it has formed its full arching mound, and the
            same crown will still be in that spot decades later without dividing. Through fall
            and early winter, Dark-eyed Juncos, American Tree Sparrows, and Song Sparrows work
            the dried seed heads, while Leonard's Skipper and Cobweb Skipper — two grass-skipper
            butterflies whose larvae feed on grass blades rather than broadleaf plants — use it
            as a caterpillar host. In fall the foliage turns orange-gold and the dried clump
            persists as a small architectural form through winter. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Prairie Dropseed is a reliable, widely available native grass once it's established
            — the risk is almost entirely at the start. Its slow first two years lead many
            gardeners to assume it failed and pull it before the third-year mound ever forms,
            and competing turf grass can crowd out a young crown before it gets the chance.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Clear a 12-inch radius of competing grass before planting — tall fescue and
              quackgrass outcompete a young crown in its first two seasons. [2]
            </li>
            <li>
              Plant in full sun, in soil that drains within 24 hours of rain. Prairie Dropseed
              declines in wet soil and blooms poorly with more than two hours of daily shade. [2]
            </li>
            <li>
              Leave the dried clump standing until early spring, not fall — the seed heads feed
              birds all winter and may shelter overwintering insects. [2]
            </li>
            <li>
              Plant it alongside Little Bluestem in the same sunny bed. Both host the same two
              skipper butterflies, doubling the egg-laying surface in one planting area. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('leonards-skipper')}>
            <span className="neighbor-name">Leonard's Skipper</span>
            <span className="neighbor-note">Lays eggs on Prairie Dropseed blades in September; a male perches on the seed panicle tip to defend his territory.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cobweb-skipper')}>
            <span className="neighbor-name">Cobweb Skipper</span>
            <span className="neighbor-note">Spring counterpart to Leonard's Skipper; its larva overwinters in a silk shelter at the same crown, seven months earlier in the year.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('little-bluestem')}>
            <span className="neighbor-name">Little Bluestem</span>
            <span className="neighbor-note">A sibling bunchgrass hosting the same two skippers — taller, with copper-red fall color, and the same dry-soil needs.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('song-sparrow')}>
            <span className="neighbor-name">Song Sparrow</span>
            <span className="neighbor-note">Works the dried seed heads through fall and early winter, alongside Dark-eyed Juncos and American Tree Sparrows.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Sporobolus_heterolepis" target="_blank" rel="noopener noreferrer">Wikipedia — Sporobolus heterolepis (Prairie Dropseed)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Hesperia-leonardus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Leonard's Skipper</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
