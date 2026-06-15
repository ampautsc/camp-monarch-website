import type { Page } from '../App'

interface SpringPeeperProps {
  onNavigate: (page: Page) => void
}

export default function SpringPeeper({ onNavigate }: SpringPeeperProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Spring_Peeper_%28Pseudacris_crucifer%29.jpg/1280px-Spring_Peeper_%28Pseudacris_crucifer%29.jpg"
          alt="A Spring Peeper clinging to a plant stem, showing its tiny brown body and the X marking on its back"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={1145}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Peter Paplanus&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Spring_Peeper_(Pseudacris_crucifer).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Spring Peeper</h1>
        <p className="hero__lead">
          The Spring Peeper is a thumbnail-sized treefrog — about an inch long — that
          announces the end of winter. Named for the X (cross) marking on its back,
          it is brown, tan, or gray depending on temperature and background. When
          hundreds of males call together from a vernal pool in March or April, the
          chorus can be heard a mile away. The Spring Peeper is listed as Least Concern
          by the IUCN and is common across eastern North America. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Spring Peepers are heard far more often than they are seen. Males call
            from vegetation at the water&apos;s edge or from just beneath the surface of
            the breeding pond. The call — a clear, high-pitched whistle at about
            2,900 Hz — is produced by a single vocal sac under the chin that swells
            to nearly the size of the frog&apos;s body. Outside of breeding season,
            Spring Peepers disperse into surrounding moist forest and second-growth
            shrub habitat where they hunt beetles, ants, flies, and spiders. They
            use adhesive toe pads to climb vegetation. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pseudacris_crucifer_163199675.jpg/1280px-Pseudacris_crucifer_163199675.jpg"
            alt="A Spring Peeper frog sitting on a surface showing its full body with the characteristic X marking visible on the back"
            width={1280}
            height={961}
            loading="lazy"
          />
          <figcaption>
            The X-shaped mark on the back gives the Spring Peeper its species name
            — crucifer, meaning cross-bearer. The marking breaks up the outline of
            the frog&apos;s body, making it nearly invisible on bark.
            <span className="photo-credit"> Photo: Jake McCumber&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Pseudacris_crucifer_163199675.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Spring Peepers can begin calling on nights when temperatures barely
            reach 35°F — one of the earliest calling frogs in North America. Breeding
            runs from late February through May depending on latitude. Females lay
            800 to 1,200 eggs individually, each attached to submerged vegetation.
            Eggs hatch in two weeks; tadpoles metamorphose in 45 to 65 days. Young
            frogs leave the pond in summer and move into nearby forest. They
            hibernate terrestrially, buried in loose soil or leaf litter, and can
            survive partial freezing using glucose as a cryoprotectant. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Spring Peeper is listed as Least Concern by the IUCN and is abundant
            across eastern North America wherever small seasonal wetlands exist. [2]
            It is heavily dependent on seasonal ponds — even small ditches and
            depressions that hold water for two months in spring — and is locally
            affected wherever these small wetlands are drained or filled. The chorus
            of Spring Peepers is one of the most reliable signs that a landscape
            still has intact wetland habitat. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Protect seasonal puddles and small wet depressions on your property.
              Even a low spot that holds water for 8 to 10 weeks in spring can be
              critical Spring Peeper breeding habitat. These temporary ponds are
              important precisely because they dry up — drying prevents fish from
              establishing and eating the eggs. [3]
            </li>
            <li>
              Install a small fish-free pond with shallow edges. Spring Peepers breed
              in water as shallow as a few inches; a garden pond with no fish and
              some emergent vegetation can attract breeding Spring Peepers within a
              year or two of installation. [3]
            </li>
            <li>
              Leave leaf litter undisturbed under trees through winter. Spring Peepers
              hibernate in loose soil and under leaves; removing all leaf cover from
              the garden in fall eliminates their overwintering habitat. [3]
            </li>
            <li>
              Reduce or eliminate pesticide use near ponds. Spring Peeper tadpoles
              are sensitive to common herbicides and insecticides, and adults bioaccumulate
              pesticides from the small insects they eat. [3]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('wood-frog')}>
            <span className="neighbor-name">Wood Frog</span>
            <span className="neighbor-note">The other early-spring caller sharing the same vernal pools; Wood Frogs often arrive at the pond days before Spring Peepers begin calling.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-tree-frogs')}>
            <span className="neighbor-name">Gray Tree Frogs</span>
            <span className="neighbor-note">Takes over the same ponds in late spring and summer after Spring Peepers have finished breeding and dispersed into the forest.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-woodcock')}>
            <span className="neighbor-name">American Woodcock</span>
            <span className="neighbor-note">Performs its sky dance display over the same moist woodland edges and fields at the same time Spring Peepers begin calling — one of spring&apos;s first double bills.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('little-brown-bat')}>
            <span className="neighbor-name">Little Brown Bat</span>
            <span className="neighbor-note">Hunts insects over the same ponds and woodland edges where Spring Peepers call; bats emerge from hibernation around the same time the chorus begins.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Pseudacris_crucifer/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Spring Peeper</a></li>
            <li><a href="https://www.iucnredlist.org/species/55764/11357456" target="_blank" rel="noopener noreferrer">IUCN Red List — Spring Peeper</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds (and Wildlife)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
