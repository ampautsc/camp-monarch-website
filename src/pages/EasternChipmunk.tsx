import type { Page } from '../App'

interface EasternChipmunkProps {
  onNavigate: (page: Page) => void
}

export default function EasternChipmunk({ onNavigate }: EasternChipmunkProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Chipmunk_%2871669%29.jpg/1280px-Chipmunk_%2871669%29.jpg"
          alt="An Eastern Chipmunk sitting on a log, showing its reddish-brown fur with five dark stripes down the back"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={884}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Chipmunk_(71669).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Chipmunk</h1>
        <p className="hero__lead">
          The Eastern Chipmunk is a small ground squirrel of eastern deciduous forests and
          woodland edges, reddish-brown with five dark stripes running down the back and
          sides and a pale stripe on each side of the face. It is active during the day,
          moves fast in short bursts, and calls with a rapid chip or trill when alarmed.
          It lives in eastern North America from the Atlantic coast to the Great Plains and
          from southern Canada to Florida. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Eastern Chipmunks forage on the ground and in low shrubs for seeds, nuts,
            berries, fungi, insects, and occasionally bird eggs or small vertebrates.
            They carry food in large, expandable cheek pouches and transport it to an
            underground burrow for storage. A single chipmunk may hoard a bushel of nuts
            over a season. Unlike true hibernators, chipmunks enter a light torpor in
            winter and wake periodically to eat from their cache. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Chipmunk_with_stuffed_cheeks_in_Prospect_Park_%2805980%29.jpg/1280px-Chipmunk_with_stuffed_cheeks_in_Prospect_Park_%2805980%29.jpg"
            alt="An Eastern Chipmunk with its cheek pouches bulging with stored food"
            width={1280}
            height={926}
            loading="lazy"
          />
          <figcaption>
            Chipmunks can pack their expandable cheek pouches until their head appears
            three times wider than normal, then carry the load underground to cache it.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Chipmunk_with_stuffed_cheeks_in_Prospect_Park_(05980).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Eastern Chipmunks excavate burrows up to 10 feet long with multiple
            chambers for food storage, sleeping, and waste. A single burrow system can
            hold several quarts of seeds and nuts. Chipmunks enter torpor in late October
            or November and emerge in late February or March, depending on conditions.
            They raise one or two litters of two to five young per year, with the first
            litter born in April or May. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Eastern Chipmunk is abundant and not of conservation concern. [2] The IUCN
            lists it as Least Concern. [3] Populations fluctuate with mast crop production
            — chipmunks are more numerous in years following heavy acorn and nut production.
            Predators include hawks, foxes, weasels, and domestic cats. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Native oaks, hickories, and beeches produce the acorns and nuts that chipmunks
              cache — and that eventually become trees when caches are forgotten. Planting
              native mast-producing trees benefits chipmunks and the entire woodland food web.
              [4]
            </li>
            <li>
              Leaf litter and brush piles provide foraging habitat and escape cover. Leaving
              leaves on the ground through fall and winter supports the chipmunks and the
              insects they also eat. [4]
            </li>
            <li>
              Keeping cats indoors protects chipmunks, which are surface-active during the
              day and vulnerable to cat predation. [4]
            </li>
            <li>
              Skipping rodenticides preserves chipmunks — and prevents secondary poisoning
              of the hawks and foxes that eat them. [4]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-gray-squirrel')}>
            <span className="neighbor-name">Eastern Gray Squirrel</span>
            <span className="neighbor-note">A fellow nut-caching mammal that shares the same oak and hickory forest and often forages within a few feet of a chipmunk.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">A forest floor forager that hunts invertebrates in the same leaf litter chipmunks dig through.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('downy-woodpecker')}>
            <span className="neighbor-name">Downy Woodpecker</span>
            <span className="neighbor-note">Works the bark of the same oaks and hickories the chipmunk caches nuts under.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-fox')}>
            <span className="neighbor-name">Red Fox</span>
            <span className="neighbor-note">A regular predator of chipmunks; the distinctive alarm chip of a chipmunk often signals a fox moving through.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Eastern_Chipmunk/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Eastern Chipmunk</a></li>
            <li><a href="https://animaldiversity.org/accounts/Tamias_striatus/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Eastern Chipmunk</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/eastern-chipmunk-tamias-striatus" target="_blank" rel="noopener noreferrer">IUCN Red List — Eastern Chipmunk</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds (and Wildlife)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
