import type { Page } from '../App'

interface JoePyeWeedProps {
  onNavigate: (page: Page) => void
}

export default function JoePyeWeed({ onNavigate }: JoePyeWeedProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Eutrochium_purpureum_kz01.jpg/1280px-Eutrochium_purpureum_kz01.jpg"
          alt="Joe Pye weed in bloom — tall stems topped with large dome-shaped clusters of mauve-pink flowers above whorled leaves"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Krzysztof Ziarnek, Kenraiz&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Eutrochium_purpureum_kz01.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Joe Pye Weed</h1>
        <p className="hero__lead">
          Joe Pye weed (<em>Eutrochium purpureum</em>) opens its dome-shaped mauve flower heads from
          late July through September — filling the August nectar gap between common milkweed in June
          and goldenrod in September, exactly when migrating monarchs need food most. The same
          standing stalks shelter the eupatorium borer moth, a yellowjacket-mimic whose larvae
          overwinter inside the hollow stems. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            An August monarch — already shifting from breeding toward storing fat for the 2,500-mile
            flight to Mexico — works a Joe Pye dome that holds several hundred individual nectar-bearing
            florets. It feeds alongside tiger swallowtails, great spangled fritillaries, silver-spotted
            skippers, and bumblebees, with ruby-throated hummingbirds arriving in late August as their
            own migration begins. For two months, this one plant is a crowded fuel depot. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Der_Wasserdost%2C_lat._Eupatorium_%28Eupatorium_Purpureum%29_06.jpg/1280px-Der_Wasserdost%2C_lat._Eupatorium_%28Eupatorium_Purpureum%29_06.jpg"
            alt="A bumblebee visiting the pink florets and buds of a Joe Pye weed flower cluster in close-up"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            Each dome is several hundred small florets, each producing nectar — and the hollow stem
            beneath it becomes winter shelter for small native bees and the borer moth's larva alike.
            <span className="photo-credit"> Photo: Plenuska&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Der_Wasserdost,_lat._Eupatorium_(Eupatorium_Purpureum)_06.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            After the flowers fade the stalks stay standing, and their hollow cores become
            overwintering quarters — small carpenter bees (<em>Ceratina</em>) and masked bees
            (<em>Hylaeus</em>) shelter inside through winter, and the eupatorium borer larva feeds on
            the pith from October through April. Cut the stalks down in fall and both life cycles end.
            Planted with milkweed and goldenrod, Joe Pye weed completes a June-to-October bloom
            relay that keeps a yard fueling monarchs through the entire breeding-and-migration season. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Joe Pye weed isn't at risk, but two common habits work against it: the standard fall
            cleanup that cuts stalks to the ground destroys the overwintering bees and borer larvae
            inside them, and the popular compact cultivars like 'Little Joe' and 'Baby Joe' are shorter
            than the full-height plant the borer and stem-nesting bees evolved with.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant 3 to 5 together rather than a single specimen — pollinators moving across a yard
              stop at clusters, returning for multiple feeding bouts a day. [2]
            </li>
            <li>
              Use the wet corner, shady edge, or low damp spot where sun-loving natives fail; Joe Pye
              weed grows naturally along stream banks and tolerates wet feet. [2]
            </li>
            <li>
              Leave the stalks standing until April, then cut and lay the cut stems aside for a few
              weeks so any emerging insects can disperse. [2]
            </li>
            <li>
              Buy the straight species, not 'Little Joe' or 'Baby Joe' — the full 4-to-7-foot plant is
              what the borer moth and hollow-stem bees depend on. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">Refuels on Joe Pye weed through August, the pre-migration weeks when adults are storing the fat that fuels the flight to Mexico.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('common-milkweed')}>
            <span className="neighbor-name">Common Milkweed</span>
            <span className="neighbor-note">The June anchor of the bloom relay — finishing just as Joe Pye weed opens, so the two cover early summer into late summer together.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('canada-goldenrod')}>
            <span className="neighbor-name">Canada Goldenrod</span>
            <span className="neighbor-note">Picks up in September as Joe Pye weed winds down, carrying the nectar supply through the tail end of the fall migration.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
            <span className="neighbor-name">Native Bees</span>
            <span className="neighbor-note">Small carpenter and masked bees overwinter inside the hollow stalks — the reason to leave them standing until spring.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Eutrochium_purpureum" target="_blank" rel="noopener noreferrer">Wikipedia — Eutrochium purpureum (Joe Pye Weed)</a></li>
            <li><a href="https://www.xerces.org/monarchs" target="_blank" rel="noopener noreferrer">Xerces Society — Monarchs (nectar and migration)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
