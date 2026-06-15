import type { Page } from '../App'

interface WoodFrogProps {
  onNavigate: (page: Page) => void
}

export default function WoodFrog({ onNavigate }: WoodFrogProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Lithobates_sylvaticus_-_Wood_Frog_01.jpg/1280px-Lithobates_sylvaticus_-_Wood_Frog_01.jpg"
          alt="A Wood Frog on a mossy surface, showing its brown body and the distinctive dark mask stripe behind each eye"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Jasper Shide&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Lithobates_sylvaticus_-_Wood_Frog_01.jpg" target="_blank" rel="noopener noreferrer">CC0 (public domain)</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Wood Frog</h1>
        <p className="hero__lead">
          The Wood Frog is the frog that freezes solid in winter. From October to March it
          lies beneath leaf litter, its heart stopped and up to 65% of its body water frozen
          between its cells. Glucose pumped into its cells prevents ice from forming inside
          them. When temperatures rise in late winter, it thaws, its heart restarts, and
          within days it is calling from a woodland pond. It is one of the most freeze-tolerant
          vertebrates on earth. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Wood Frogs are the most terrestrial of eastern woodland frogs outside of
            breeding season. They spend most of their lives in the forest floor, often
            far from water, foraging for beetles, ants, flies, and caterpillars. They
            are recognized by the dark brown &quot;robber&apos;s mask&quot; across their eyes and
            the light stripe along the upper lip. During breeding season the male
            produces a duck-like clacking quack — a chorus of hundreds of Wood Frogs
            in a vernal pool sounds exactly like ducks. The breeding season lasts one
            to two weeks; after that the frogs disperse completely back into the forest.
            [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lithobates_sylvaticus.jpg/1280px-Lithobates_sylvaticus.jpg"
            alt="A close view of a Wood Frog showing the dark mask behind the eye and its reddish-brown back"
            width={1280}
            height={938}
            loading="lazy"
          />
          <figcaption>
            The dark patch behind each eye — the &quot;robber&apos;s mask&quot; — makes Wood Frogs
            distinctive even when the rest of their coloration varies from deep red-brown
            to tan. Coloration can change with temperature and humidity.
            <span className="photo-credit"> Photo: The Cosmonaut&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Lithobates_sylvaticus.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Wood Frogs are among the first frogs to breed in spring — sometimes before
            ice is fully off the vernal pool. Females lay egg masses that contain 1,000
            to 3,000 eggs; dozens of females often deposit in the same area, forming a
            communal mass on the pond bottom that floats to the surface and absorbs
            solar heat. Tadpoles metamorphose in 45 to 75 days. Young frogs emerge in
            June through August, and by fall they have burrowed into leaf litter to
            hibernate. They are the only North American frog found north of the Arctic
            Circle, a range made possible by their freeze tolerance. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Wood Frog is listed as Least Concern by the IUCN and is common across
            its very broad range. [2] It is a vernal pool obligate — it will only breed
            in fishless seasonal wetlands that dry in summer. Loss of vernal pools
            through draining, filling, or development eliminates local populations that
            cannot recover by moving in from elsewhere. Road mortality during spring
            migrations — large numbers of frogs moving to ponds on the first warm rainy
            nights of late February or March — is significant near breeding pools. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Protect seasonal ponds on your property. Vernal pools — depressions that
              hold water in spring but dry in summer — are the only breeding habitat for
              Wood Frogs. Filling or draining even a small seasonal pond eliminates the
              local population permanently. [3]
            </li>
            <li>
              Keep leaf litter under trees through winter. Wood Frogs hibernate in loose
              soil and leaf litter across the forest floor — sometimes just inches beneath
              the surface. Removing all leaf cover eliminates overwintering habitat. [3]
            </li>
            <li>
              Drive carefully on warm rainy nights in late February and March near
              woodlands. Wood Frogs migrate to breeding ponds in large numbers on the
              first suitable night of the year, often crossing roads; this single migration
              night can represent most of the year&apos;s road mortality for local populations.
              [3]
            </li>
            <li>
              Never introduce fish to a vernal pool or seasonal pond. Fish eat Wood Frog
              eggs and tadpoles on contact. A pond that appears &quot;empty&quot; of fish may be
              supporting hundreds of Wood Frogs each spring — adding fish eliminates them.
              [3]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('spring-peeper')}>
            <span className="neighbor-name">Spring Peeper</span>
            <span className="neighbor-note">The other early-spring voice of the same vernal pools; Spring Peepers typically begin calling a few days after Wood Frogs have already laid their eggs.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-tree-frogs')}>
            <span className="neighbor-name">Gray Tree Frogs</span>
            <span className="neighbor-note">Uses the same woodland ponds later in spring and summer after Wood Frogs have finished breeding and returned to the forest.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-chipmunk')}>
            <span className="neighbor-name">Eastern Chipmunk</span>
            <span className="neighbor-note">Hibernates in the same forest floor where Wood Frogs freeze for the winter; both emerge in the same early spring warm spells, sometimes the same week.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-woodcock')}>
            <span className="neighbor-name">American Woodcock</span>
            <span className="neighbor-note">Returns from the south and begins its display flight over the same moist woodland edges where Wood Frogs are migrating to their breeding ponds.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Lithobates_sylvaticus/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Wood Frog</a></li>
            <li><a href="https://www.iucnredlist.org/species/58681/11818834" target="_blank" rel="noopener noreferrer">IUCN Red List — Wood Frog</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds (and Wildlife)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
