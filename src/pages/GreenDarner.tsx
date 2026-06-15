import type { Page } from '../App'

interface GreenDarnerProps {
  onNavigate: (page: Page) => void
}

export default function GreenDarner({ onNavigate }: GreenDarnerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Anax_junius-Female-2.jpg/1280px-Anax_junius-Female-2.jpg"
          alt="A Common Green Darner dragonfly perched on a stem, showing its large green thorax, segmented abdomen, and enormous compound eyes"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={975}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Eugene Zelenko&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Anax_junius-Female-2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Common Green Darner</h1>
        <p className="hero__lead">
          The Common Green Darner is one of the largest dragonflies in North America,
          with a wingspan up to 4.5 inches (11 cm). Males have a brilliant green thorax
          and bright blue abdomen; females are green and brown. It is also one of the
          only migratory dragonflies, moving in swarms of thousands along the Atlantic
          coast each fall. Its larvae spend one to two years in ponds and lakes before
          emerging as adult aerial predators. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Common Green Darners are agile aerial hunters, catching flying insects —
            mosquitoes, gnats, small moths, and other dragonflies — in a basket formed
            by their legs in mid-flight. They can fly at over 30 mph and change direction
            instantly. Males patrol territories over ponds, streams, and open water,
            hovering and chasing rivals. Mating happens in flight and while perched;
            females deposit eggs by inserting them into aquatic plants just below the
            water surface. The larvae are aquatic predators in their own right, stalking
            tadpoles, small fish, and aquatic invertebrates in the pond. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Dragonfly_Common_Green_Darner_Female_Anax_junius_2010-04-18.jpg/1280px-Dragonfly_Common_Green_Darner_Female_Anax_junius_2010-04-18.jpg"
            alt="A Common Green Darner dragonfly perched showing its large compound eyes and the distinctive bull's-eye marking on its forehead"
            width={1280}
            height={1024}
            loading="lazy"
          />
          <figcaption>
            Dragonfly compound eyes wrap almost entirely around the head, giving Green
            Darners nearly 360-degree vision — the most comprehensive visual field of
            any aerial predator in North America.
            <span className="photo-credit"> Photo: Chuck Evans (Mcevan)&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Dragonfly_Common_Green_Darner_Female_Anax_junius_2010-04-18.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Common Green Darners have at least two generations per year. Spring migrants
            arrive from the south in March through May and immediately breed. Their
            larvae grow rapidly and emerge as adults by late summer. These new adults,
            plus overwintered migrants from northern breeding sites, form the fall
            migration — large swarms moving south along the coast and interior in
            September and October, sometimes numbering in the thousands. New migrants
            that arrive in spring from the south are the offspring of the previous
            fall&apos;s migration. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Common Green Darner has no formal IUCN listing and remains common across
            North America. Dragonfly populations generally are sensitive to wetland loss —
            the ponds and slow-moving streams where larvae spend one to two years are
            critical habitat. Pesticide use reduces both the aquatic invertebrate prey
            of larvae and the flying insects adult darners hunt. Water quality in breeding
            ponds also matters: Green Darner larvae are sensitive to pollution and do not
            persist in heavily nutrient-polluted water. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Install or maintain a backyard pond. Green Darner larvae need standing
              water at least 2 feet deep with emergent aquatic plants. A pond with no
              fish (fish eat dragonfly larvae) in partial sun can produce dozens of
              adult dragonflies per season. [2]
            </li>
            <li>
              Avoid mosquito control sprays and foggers. These kill dragonfly larvae
              and reduce the flying insect populations adult dragonflies depend on —
              dragonflies are far more effective mosquito controls than pesticides, and
              pesticides kill the dragonflies first. [2]
            </li>
            <li>
              Leave emergent vegetation around pond edges. Cattails, rushes, native
              irises, and other emergent plants are where dragonflies and damselflies
              lay eggs, where larvae cling during emergence, and where adults perch
              while hunting. [2]
            </li>
            <li>
              Reduce fertilizer and pesticide runoff near water. Algae blooms from
              lawn nutrient runoff reduce the oxygen levels and clarity that dragonfly
              larvae need in their pond habitat. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('gray-tree-frogs')}>
            <span className="neighbor-name">Gray Tree Frogs</span>
            <span className="neighbor-note">Breeds in the same ponds where Green Darner larvae develop; adult darners hunt over the same pond margins where tree frogs call each summer.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('garter-snake')}>
            <span className="neighbor-name">Garter Snake</span>
            <span className="neighbor-note">Hunts frogs and invertebrates along the same pond and stream edges where Green Darner females deposit eggs in aquatic plants.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-phoebe')}>
            <span className="neighbor-name">Eastern Phoebe</span>
            <span className="neighbor-note">A flycatcher that catches large flying insects over the same ponds and stream edges where Green Darners patrol; both perch near water between hunting flights.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-woodcock')}>
            <span className="neighbor-name">American Woodcock</span>
            <span className="neighbor-note">Uses the same moist meadow and pond-edge habitat; woodcock probe for worms in the same wet soil where Green Darner larvae develop underground.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Anax_junius/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Common Green Darner</a></li>
            <li><a href="https://xerces.org/endangered-species/dragonflies-and-damselflies" target="_blank" rel="noopener noreferrer">Xerces Society for Invertebrate Conservation — Dragonflies and Damselflies</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
