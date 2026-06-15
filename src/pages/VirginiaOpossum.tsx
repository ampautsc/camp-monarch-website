import type { Page } from '../App'

interface VirginiaOpossumProps {
  onNavigate: (page: Page) => void
}

export default function VirginiaOpossum({ onNavigate }: VirginiaOpossumProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Didelphis_virginiana_188111999.jpg/1280px-Didelphis_virginiana_188111999.jpg"
          alt="A Virginia Opossum on a branch at night, showing its gray fur, white face, and long pink snout"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Matthew Gerke&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Didelphis_virginiana_188111999.jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
          &nbsp;via iNaturalist / Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Virginia Opossum</h1>
        <p className="hero__lead">
          The Virginia Opossum is the only marsupial native to North America north of
          Mexico. It is roughly the size of a house cat, with gray and white fur, a
          white pointed face, hairless ears, and a long prehensile tail. It is an
          opportunistic omnivore and nocturnal, though sometimes seen in daylight. It
          ranges across the eastern United States and into parts of the West, and is one
          of the most medically interesting mammals on the continent. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Virginia Opossums forage at night for fruits, berries, insects, earthworms,
            frogs, birds, eggs, and carrion. They are also remarkable tick predators —
            when ticks crawl onto them, opossums methodically groom themselves and eat
            the ticks, consuming an estimated 90% or more of the ticks that attempt to
            feed on them. A single opossum may kill 5,000 ticks per season. When severely
            threatened, they can enter an involuntary catatonic state — &quot;playing
            possum&quot; — that can last from a few minutes to several hours. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Didelphis_virginiana_189957925.jpg/1280px-Didelphis_virginiana_189957925.jpg"
            alt="A Virginia Opossum on a branch showing its white face and distinctive pointed snout"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            The pointed white face, hairless ears, and long pink tail are distinctive.
            Opossums&apos; impressive resistance to snake venom makes them potential subjects
            for medical research on antivenoms.
            <span className="photo-credit"> Photo: Lauren McLaurin&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Didelphis_virginiana_189957925.jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>&nbsp;via iNaturalist / Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Virginia Opossums are marsupials — young are born after a gestation of only
            13 days, the shortest of any North American mammal. A newborn opossum is the
            size of a honeybee and must crawl immediately from the birth canal to the
            mother&apos;s pouch, where it attaches to a nipple for the next two months.
            After leaving the pouch, young ride on the mother&apos;s back for several more
            weeks. Opossums can raise two or three litters per year. They do not hibernate.
            Their lifespan in the wild is typically only one to two years. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Virginia Opossum is common and not of conservation concern. [2] The IUCN
            lists it as Least Concern. [3] Its range has expanded northward significantly
            over the past century, likely aided by a warming climate and by suburban food
            sources. High mortality from vehicle collisions is the primary human-caused
            threat. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Opossums eat ticks at an extraordinary rate. Simply tolerating them in your
              yard — rather than trapping or removing them — provides meaningful tick
              population control at no cost. [4]
            </li>
            <li>
              Native fruit-bearing plants such as persimmon, crabapple, and wild grapes
              provide food that opossums depend on in fall and winter. [4]
            </li>
            <li>
              Driving carefully at dusk and dawn, especially near wooded areas, reduces
              vehicle collisions, which are the primary cause of opossum death. [4]
            </li>
            <li>
              If you find a living opossum that appears injured or an orphaned young one,
              contact a licensed wildlife rehabilitator rather than attempting to care for
              it yourself. [4]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('red-fox')}>
            <span className="neighbor-name">Red Fox</span>
            <span className="neighbor-note">A fellow nocturnal mammal that moves through the same suburban edges and woodland patches the opossum forages in.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-cottontail')}>
            <span className="neighbor-name">Eastern Cottontail</span>
            <span className="neighbor-note">Shares the same brushy edges and fruit-bearing shrubs, often active in the same areas at dusk.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('carolina-wren')}>
            <span className="neighbor-name">Carolina Wren</span>
            <span className="neighbor-note">Nests in low brushy cover that opossums also move through; the wren&apos;s alarm calls often signal a mammal moving below.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">A ground forager that shares the same forest floor leaf litter the opossum searches for invertebrates and fallen fruit.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Didelphis_virginiana/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Virginia Opossum</a></li>
            <li><a href="https://animaldiversity.org/accounts/Didelphis_virginiana/" target="_blank" rel="noopener noreferrer">Animal Diversity Web: Virginia Opossum (status information)</a></li>
            <li><a href="https://www.iucnredlist.org/species/40502/22176259" target="_blank" rel="noopener noreferrer">IUCN Red List — Virginia Opossum</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds (and Wildlife)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
