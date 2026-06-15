import type { Page } from '../App'

interface PurpleMartinProps {
  onNavigate: (page: Page) => void
}

export default function PurpleMartin({ onNavigate }: PurpleMartinProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Purple_martin_in_flight_%2830977%29.jpg/1280px-Purple_martin_in_flight_%2830977%29.jpg"
          alt="A Purple Martin in flight showing its dark glossy purple-blue plumage and forked tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={873}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Purple_martin_in_flight_(30977).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Purple Martin</h1>
        <p className="hero__lead">
          The Purple Martin is the largest swallow in North America. Males are deep, glossy
          purple-blue all over; females and young birds are brownish above with pale, streaked
          underparts. It breeds across the eastern United States and much of the West, then
          winters in the Amazon basin of South America. In the eastern United States, Purple
          Martins now depend almost entirely on human-provided housing to nest. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Purple Martins are aerial insectivores — they catch everything they eat in flight.
            Their diet includes dragonflies, beetles, flies, wasps, and moths. They forage
            high, often 150 to 500 feet up, and can cover miles in a morning's hunting. They
            drink and bathe by skimming the surface of open water at speed. Colonies at
            martin houses are noisy and social, with birds calling in a rolling, gurgling
            chatter throughout the day. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Purple_martins_at_Montezuma_%2814249%29.jpg/1280px-Purple_martins_at_Montezuma_%2814249%29.jpg"
            alt="Several Purple Martins perched at a colony housing structure, showing males and females"
            width={1280}
            height={886}
            loading="lazy"
          />
          <figcaption>
            Purple Martins nest colonially. In the East, virtually every nesting pair uses
            a human-provided gourd rack or multi-unit martin house.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Purple_martins_at_Montezuma_(14249).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Purple Martins are among the first neotropical migrants to return north in spring,
            with scouts arriving along the Gulf Coast as early as January. They nest
            colonially in multi-unit houses or gourd racks, laying four to five eggs per
            pair. Both parents incubate and feed the young. By late July, they begin
            gathering in pre-migration roosts that can hold tens of thousands of birds
            before departure for South America in August and September. [1]
          </p>
          <p>
            Indigenous peoples in eastern North America were hanging hollowed gourds for
            Purple Martins centuries before European arrival, and the eastern population
            has been using human-provided nest sites for so long that natural cavities are
            no longer used. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 9.3 million. [2]
            The U.S. Breeding Bird Survey shows a cumulative decline of about 25% between
            1966 and 2019. [3] The IUCN lists it as Least Concern. [4] Regional declines
            are steeper in the Great Lakes, New England, and Maritime Provinces. Increased
            competition with House Sparrows and European Starlings for nest cavities, and
            insect population declines, are contributing factors. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              A martin house or gourd rack in an open area at least 40 feet from trees,
              mounted on a 15- to 20-foot pole, is the most direct contribution. The Purple
              Martin Conservation Association provides plans and guidance for setting up and
              managing a colony. [5]
            </li>
            <li>
              Managing the housing — removing House Sparrow and European Starling nests while
              protecting martin nests — dramatically increases martin success rates. [5]
            </li>
            <li>
              Open water nearby provides drinking, bathing, and insect emergence that martins
              need through the breeding season. [5]
            </li>
            <li>
              Skipping insecticides preserves the dragonflies, beetles, and other flying
              insects that make up the martin&apos;s entire diet. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('chimney-swift')}>
            <span className="neighbor-name">Chimney Swift</span>
            <span className="neighbor-note">Another aerial insectivore that nests in human structures and sweeps the same skies.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('tree-swallow')}>
            <span className="neighbor-name">Tree Swallow</span>
            <span className="neighbor-note">A smaller swallow that competes for the same nest boxes but is less colonial.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-bluebird')}>
            <span className="neighbor-name">Eastern Bluebird</span>
            <span className="neighbor-note">Another cavity nester that uses open-area nest boxes in the same habitat.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('common-nighthawk')}>
            <span className="neighbor-name">Common Nighthawk</span>
            <span className="neighbor-note">A crepuscular aerial insect hunter that shares the same evening skies over open ground.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Purple_Martin/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Purple Martin (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/purple-martin-progne-subis" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Purple Martin</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
