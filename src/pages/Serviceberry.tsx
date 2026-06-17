import type { Page } from '../App'

interface ServiceberryProps {
  onNavigate: (page: Page) => void
}

export default function Serviceberry({ onNavigate }: ServiceberryProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Amelanchier_arborea_kz02.jpg/1280px-Amelanchier_arborea_kz02.jpg"
          alt="Downy serviceberry in full April bloom — loose clusters of white five-petaled flowers covering branch tips before the leaves emerge"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Krzysztof Ziarnek, Kenraiz&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Amelanchier_arborea_kz02.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>Serviceberry</h1>
        <p className="hero__lead">
          Downy serviceberry (<em>Amelanchier arborea</em>) opens white flowers on bare branches in
          April, before its leaves unfold and before the oaks have cracked their buds — a snow-dusted
          crown in the still-gray woods. Six weeks later those flowers become the first soft native
          fruit of the entire year, ripening in June during the exact weeks robins and wood thrushes
          are still carrying food to nestlings. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A loaded serviceberry might hold two hundred berries, and they don't last. Cedar waxwings
            find a tree within days of peak ripeness, arrive in flocks of ten to thirty, and work the
            clusters from the outer branches in — sometimes passing a berry beak-to-beak down a line
            of perched birds before it's swallowed. Robins and wood thrushes carry fruit straight back
            to nestlings too young to fly. On a heavily loaded tree, the whole harvest can be gone in
            under a week. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Amelanchier_canadensis_berry.jpg"
            alt="Clusters of ripe serviceberry fruit — round, blueberry-sized, ripening from red to dark purple among green leaves"
            width={1014}
            height={678}
            loading="lazy"
          />
          <figcaption>
            Blueberry-sized fruit ripens unevenly across a cluster, red to purple-black over 5 to 10
            days — the earliest soft native fruit of the season, with no other tree filling the June
            window.
            <span className="photo-credit"> Photo: Sesamehoneytart&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Amelanchier_canadensis_berry.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The April bloom feeds ruby-throated hummingbirds just back from migration and the
            caterpillars of Spring Azure and Striped Hairstreak, which develop right on the flower
            clusters. In all, serviceberry hosts well over a hundred caterpillar species as a member
            of the rose family — among them the Red-spotted Purple, whose half-grown caterpillar
            spends winter rolled inside a rice-grain-sized tube of leaf at a twig tip. Leaves emerge
            bronze, turn green, and finish the year in yellow, orange, and red, often before other
            trees have peaked. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Serviceberry isn't at risk, but two yard habits quietly cost it: trimming twig tips in
            fall or winter cuts off the rolled-leaf shelters where Red-spotted Purple caterpillars are
            overwintering, and a tree planted off on its own is found late in its brief June fruit
            window by the birds that depend on it.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant it in part shade to full sun — it fruits in both, which makes it useful at a
              canopy edge where cherries and crabapples won't set fruit. [2]
            </li>
            <li>
              Let root sprouts form a multi-stem clump; the denser structure gives catbirds, warblers,
              and sparrows better nesting cover and recovers faster from deer browse. [2]
            </li>
            <li>
              Before pruning twig tips, scan for small brown leaf rolls the size of a grain of rice —
              Red-spotted Purple shelters — and cut back to a branch junction instead. [2]
            </li>
            <li>
              Plant within 30 to 50 feet of an existing feeder or birdbath, so the birds already
              working your yard find the June fruit fast. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('cedar-waxwing')}>
            <span className="neighbor-name">Cedar Waxwing</span>
            <span className="neighbor-note">The first flock to find ripe serviceberry each June, arriving in groups of 10 to 30 and stripping a loaded tree in a single afternoon.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">Nests into early July and carries serviceberry fruit back to nestlings — a breeding pair within 200 feet visits a fruiting tree daily.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('ruby-throated-hummingbird')}>
            <span className="neighbor-name">Ruby-throated Hummingbird</span>
            <span className="neighbor-note">Probes the April flowers for nectar and gleans small insects from the blooms, just after returning from migration when little else is open.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('black-cherry')}>
            <span className="neighbor-name">Black Cherry</span>
            <span className="neighbor-note">Ripens in August as serviceberry finishes in July — the same waxwings, orioles, and thrushes return to the yard for the next fruit in the relay.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Amelanchier_arborea" target="_blank" rel="noopener noreferrer">Wikipedia — Amelanchier arborea (Downy Serviceberry)</a></li>
            <li><a href="https://www.allaboutbirds.org/guide/Cedar_Waxwing/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Cedar Waxwing</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
