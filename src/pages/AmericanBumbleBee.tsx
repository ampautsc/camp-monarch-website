import type { Page } from '../App'

interface AmericanBumbleBeeProps {
  onNavigate: (page: Page) => void
}

export default function AmericanBumbleBee({ onNavigate }: AmericanBumbleBeeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Bombus_pensylvanicus_male_1.jpg/1280px-Bombus_pensylvanicus_male_1.jpg"
          alt="An American Bumble Bee worker showing its yellow and black banded abdomen as it forages on flowers"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={930}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Jacy Lucier&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Bombus_pensylvanicus_male_1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Bumble Bee</h1>
        <p className="hero__lead">
          The American Bumble Bee was once one of the most common bumblebees in eastern
          North America. It is large and fuzzy — mostly yellow with a black patch between
          the wings — and can be found from Texas north into Canada. It is now listed as
          Endangered by the IUCN: its populations have declined by an estimated 89% over
          the past 20 years, and it has disappeared from much of the Northeast. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            American Bumble Bees are generalist foragers, visiting a wide range of
            native wildflowers from spring through fall. Their most distinctive ability
            is buzz pollination (sonication): by vibrating their flight muscles at
            precisely the right frequency while gripping a flower, they shake loose
            pollen that cannot be released by other means. This is how blueberries,
            tomatoes, and many native plants are pollinated. The colony&apos;s queen
            lays all the eggs; workers gather pollen and nectar and tend the brood in
            an underground nest, usually in an abandoned rodent burrow. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Bombus_pensylvanicus_male_on_rough_blazingstar_Ellison_Creek-7907.jpg"
            alt="An American Bumble Bee foraging on rough blazingstar flowers, showing its yellow body and pollen-collecting legs"
            width={1200}
            height={900}
            loading="lazy"
          />
          <figcaption>
            American Bumble Bees use buzz pollination on flowers like blazingstar,
            sunflowers, and goldenrod — vibrating their muscles at exactly the
            right frequency to release pollen that wind and other insects cannot.
            <span className="photo-credit"> Photo: Angella Moorehouse&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Bombus_pensylvanicus_male_on_rough_blazingstar_Ellison_Creek-7907.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            In early spring, a mated queen — the only individual to survive winter —
            emerges from underground and begins searching alone for a nest site. She
            establishes a colony of up to 300 workers through summer. In late summer
            the colony produces new queens and males. These mate, and the new queens
            find overwintering sites underground while all other colony members die.
            The timing of queen emergence in spring, tied to blooming native flowers,
            makes spring wildflower availability critical to colony survival. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The IUCN lists the American Bumble Bee as Endangered, with an estimated
            89% decline in range over the past two decades. [1] It has disappeared
            from New England, the mid-Atlantic, and much of the Southeast. Three
            primary causes are documented: the introduction of a fungal pathogen
            (Nosema bombi) via commercial bumblebee operations in the 1990s, widespread
            habitat loss of native wildflower meadows, and neonicotinoid insecticides
            that persist in pollen and impair bee learning and navigation. [2]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant a diversity of native wildflowers with overlapping bloom times
              from April through September — bumble bee colonies need a continuous
              pollen and nectar supply from queen emergence in spring through colony
              shutdown in fall. Goldenrods, native clovers, asters, and sunflowers
              are especially important late-season resources. [2]
            </li>
            <li>
              Leave patches of bare or sparsely vegetated soil at yard edges. New
              queens need to find overwintering sites and, in spring, abandoned
              rodent burrows to nest in. Compacted soil and turf provide neither. [2]
            </li>
            <li>
              Avoid neonicotinoid insecticides — imidacloprid, clothianidin,
              thiamethoxam, and others. These systemic pesticides persist in pollen
              and nectar and cause sublethal effects on bumblebee navigation, memory,
              and colony development even at low concentrations. [2]
            </li>
            <li>
              Delay mowing spring lawns until 10 AM. Bumble bee queens foraging in
              the early morning on clover and lawn wildflowers are the individuals
              that will establish all new colonies that year. [2]
            </li>
            <li>
              Leave fall stems standing through winter. Grassy stems and dead plant
              stalks are used by overwintering bumble bee queens and native solitary
              bees as sheltered overwintering sites. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">A fellow insect that needs native wildflower meadows — goldenrods, native asters, and milkweed habitat benefits both species at once.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-meadowlark')}>
            <span className="neighbor-name">Eastern Meadowlark</span>
            <span className="neighbor-note">Nests in the same native meadow habitat that bumble bees forage in; both are declining indicators of healthy open meadow ecosystems.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('ruby-throated-hummingbird')}>
            <span className="neighbor-name">Ruby-throated Hummingbird</span>
            <span className="neighbor-note">A fellow pollinator that visits the same native wildflowers; both thrive when yards move from turf to diverse native plantings.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('fireflies')}>
            <span className="neighbor-name">Fireflies</span>
            <span className="neighbor-note">Shares the unmowed meadow margins and moist lawn edges; firefly larvae and bumble bee nests both require undisturbed soil free of pesticides.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.iucnredlist.org/species/44937582/46440211" target="_blank" rel="noopener noreferrer">IUCN Red List — American Bumble Bee</a></li>
            <li><a href="https://xerces.org/bumblebees/american-bumble-bee" target="_blank" rel="noopener noreferrer">Xerces Society for Invertebrate Conservation — American Bumble Bee</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
