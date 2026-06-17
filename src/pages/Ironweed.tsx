import type { Page } from '../App'

interface IronweedProps {
  onNavigate: (page: Page) => void
}

export default function Ironweed({ onNavigate }: IronweedProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Vernonia_fasciculata_kz02.jpg/1280px-Vernonia_fasciculata_kz02.jpg"
          alt="Ironweed flower clusters opening in deep purple, with no ray petals around the disc florets"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={1921}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Krzysztof Ziarnek, Kenraiz&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Vernonia_fasciculata_kz02.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Ironweed</h1>
        <p className="hero__lead">
          Ironweed (<em>Vernonia fasciculata</em>) is a native prairie wildflower, 3 to 6 feet
          tall, that opens deep purple flower clusters from late July through September. Each
          flower head is built entirely of disc florets — there's no ring of ray petals around
          the outside, the way a coneflower has — so the color reads as a single uninterrupted
          mass instead of a fringed bloom. It opens during the exact weeks monarchs are building
          fat reserves for the flight to Mexico. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A monarch emerging from its chrysalis in late August carries almost no fat. Over the
            following weeks it has to build enough to fuel a 2,500-mile flight south and several
            months overwintering in Mexico — researchers tracking fall migrants have measured
            abdominal fat climbing from near zero to roughly 125 milligrams. A monarch landing on
            an Ironweed cluster works across the flat top one floret tube at a time, and a single
            cluster stays productive for two to three weeks as florets open in sequence. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Vernonia_fasciculata.jpg"
            alt="Ironweed in full purple bloom in a meadow, with yellow goldenrod flowering nearby"
            width={389}
            height={589}
            loading="lazy"
          />
          <figcaption>
            Ironweed's purple has no warm undertone at all — a sharp contrast next to goldenrod's
            yellow when the two bloom side by side in the same late-summer meadow.
            <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Vernonia_fasciculata.jpg" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            New growth reaches full height by late July, then blooms into September. The name
            "Ironweed" dates to farmers whose scythe blades dulled against its densely fibrous,
            lignin-reinforced stems — the same toughness that keeps the plant standing upright
            through October and November after frost, holding its seed heads above the snow-flattened
            growth around it. American Goldfinches work the dried clusters through fall, and Song
            Sparrows forage in the stem litter below. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Ironweed is common and not at risk, but the name itself works against it: a plant
            tagged a "weed" in a hay meadow a century ago is still the plant most likely to get
            pulled on sight in a tidy yard each June or July, long before its late-summer bloom
            ever has the chance to open.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Site it in full sun with average to moist soil — it tolerates a low spot that
              drains within a week but doesn't need a wet corner the way Swamp Milkweed does. [2]
            </li>
            <li>
              Plant it behind shorter species like Black-eyed Susan or Wild Bergamot; at 3 to 6
              feet, it reads best rising above a finished spring and summer layer. [2]
            </li>
            <li>
              Skip deadheading — the dried flower heads that stand through fall are exactly what
              goldfinches and sparrows work for seed. [2]
            </li>
            <li>
              Cut stems back to about 6 inches in late February, just before new growth starts in
              spring. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">Adults nectaring on Ironweed in August and September build the fat reserves that fuel the 2,500-mile flight to Mexico.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('canada-goldenrod')}>
            <span className="neighbor-name">Canada Goldenrod</span>
            <span className="neighbor-note">Blooms the same late-summer weeks; planted together, the purple-and-yellow pairing doubles fall nectar for migrating monarchs and bees.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Works the dried seed clusters in October and November, picking out the small achene seeds the sturdy stems hold above the litter.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('leonards-skipper')}>
            <span className="neighbor-name">Leonard&apos;s Skipper</span>
            <span className="neighbor-note">Takes nectar from Ironweed during its 7-to-14-day adult window in late August and September — the only weeks this butterfly flies each year.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Vernonia_fasciculata" target="_blank" rel="noopener noreferrer">Wikipedia — Vernonia fasciculata (Ironweed)</a></li>
            <li><a href="https://monarchjointventure.org/monarch-biology" target="_blank" rel="noopener noreferrer">Monarch Joint Venture — Monarch Biology</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
