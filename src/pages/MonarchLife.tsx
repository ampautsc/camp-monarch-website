import type { Page } from '../App'

interface MonarchLifeProps {
  onNavigate: (page: Page) => void
}

export default function MonarchLife({ onNavigate }: MonarchLifeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/20191008-NRCS-RAM-001_Monarch_on_Conoclinium_greggii_PayneCountyOklahoma_045_%2851000471693%29.jpg/1280px-20191008-NRCS-RAM-001_Monarch_on_Conoclinium_greggii_PayneCountyOklahoma_045_%2851000471693%29.jpg"
          alt="An adult monarch butterfly with orange wings veined and bordered in black, feeding at a cluster of blue mistflower"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={857}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: U.S. Department of Agriculture (NRCS)&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:20191008-NRCS-RAM-001_Monarch_on_Conoclinium_greggii_PayneCountyOklahoma_045_(51000471693).jpg" target="_blank" rel="noopener noreferrer">Public domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>The monarch butterfly</h1>
        <p className="hero__lead">
          The monarch is a large orange-and-black butterfly found across North America. Its
          caterpillars eat only milkweed: a female lays her eggs only on milkweed plants, and a
          caterpillar that hatches anywhere else does not survive. Adults drink nectar from many
          kinds of flowers, but without milkweed there is no next generation. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="milkweed-heading">
          <h2 id="milkweed-heading">Milkweed and nothing else</h2>
          <p>
            A monarch caterpillar eats only milkweed leaves. Over about two weeks it grows through
            five stages, shedding its skin between each one, then forms a green chrysalis and
            emerges as an adult a week or two later. Milkweed also carries bitter toxins that the
            caterpillar stores in its body, which makes both the caterpillar and the adult taste
            bad to most predators. The bright orange wings are a warning. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Danaus_plexippus_caterpillar_on_milkweed.jpg/1280px-Danaus_plexippus_caterpillar_on_milkweed.jpg"
            alt="A monarch caterpillar, banded in yellow, black, and white, feeding on a milkweed leaf"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            Monarch caterpillars feed only on milkweed. No milkweed in a landscape means no monarch
            caterpillars there.
            <span className="photo-credit"> Photo: Captain-tucker&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Danaus_plexippus_caterpillar_on_milkweed.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="migration-heading">
          <h2 id="migration-heading">The long migration</h2>
          <p>
            Monarchs breed across the United States and southern Canada through spring and summer,
            producing several generations, each living only a few weeks. The last generation of the
            year is different: it can live several months, and instead of breeding it flies south.
            Eastern monarchs travel up to about 3,000 miles to a small area of oyamel fir forest in
            the mountains of central Mexico, where they spend the winter clustered in the trees. No
            single butterfly makes the round trip; the monarchs that return north in spring are the
            offspring of the ones that left. Monarchs west of the Rocky Mountains follow a shorter
            route to the California coast. [1][6]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The eastern monarch is measured each winter by the area of Mexican forest its clusters
            cover. In the winter of 2025&ndash;26 they occupied 2.93 hectares, up about 64% from the
            year before, but still below the roughly 6 hectares scientists consider necessary for a
            stable population, and well below the levels of the 1990s. [2] The western population,
            which winters on the California coast, remains very low. The IUCN lists the migratory
            monarch as Vulnerable. In December 2024 the U.S. Fish and Wildlife Service proposed
            listing the monarch as Threatened under the Endangered Species Act; as of mid-2026 that
            proposal has not been finalized. [3] The main causes of decline are the loss of milkweed
            and other habitat, pesticides, climate change, and damage to the overwintering forests.
            [2][4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <p>
            Monarch caterpillars can eat only milkweed, so native milkweed is the most useful plant
            to add for them.
          </p>
          <ol className="step-list">
            <li>
              Native milkweed suited to your area is the one plant a monarch cannot reproduce
              without. A female lays eggs on it, and the caterpillars that hatch can complete their
              life cycle there. [5]
            </li>
            <li>
              Native flowers that bloom into fall give migrating monarchs the nectar they need for
              the trip south. Late-season blooms such as goldenrod and asters are good sources.
            </li>
            <li>
              Skipping pesticides, including on the milkweed itself, spares the caterpillars
              (insecticides kill them) and keeps the milkweed standing (herbicides remove it).
            </li>
            <li>
              Reporting the monarchs you see adds to the community-science data researchers use to
              track the population and the timing of the migration.
            </li>
          </ol>
          <p>
            For step-by-step help, see{' '}
            <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>Plant Milkweed</button>
            {' '}and{' '}
            <button className="link-button" onClick={() => onNavigate('raise-a-monarch')}>Raise a Monarch</button>.
          </p>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('common-milkweed')}>
            <span className="neighbor-name">Common Milkweed</span>
            <span className="neighbor-note">The widespread native milkweed of fields and roadsides, and a main host plant for monarch caterpillars.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('swamp-milkweed')}>
            <span className="neighbor-name">Swamp Milkweed</span>
            <span className="neighbor-note">A milkweed for moist soil and garden beds; another host plant monarchs lay eggs on.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('butterfly-weed')}>
            <span className="neighbor-name">Butterfly Weed</span>
            <span className="neighbor-note">An orange-flowered milkweed for dry, sunny spots; a host for caterpillars and a nectar source for adults.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
            <span className="neighbor-name">Native Bees</span>
            <span className="neighbor-note">Share the same native flowers monarchs nectar on, and benefit from the same pesticide-free, native-plant yard.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://monarchjointventure.org/monarch-biology" target="_blank" rel="noopener noreferrer">Monarch Joint Venture — Monarch Biology</a></li>
            <li><a href="https://www.xerces.org/press/eastern-monarch-butterfly-numbers-increase-but-remain-below-historic-levels" target="_blank" rel="noopener noreferrer">Xerces Society — Eastern Monarch numbers increase but remain below historic levels</a></li>
            <li><a href="https://www.fws.gov/press-release/2024-12/monarch-butterfly-proposed-endangered-species-act-protection" target="_blank" rel="noopener noreferrer">U.S. Fish &amp; Wildlife Service — Monarch proposed for Endangered Species Act protection</a></li>
            <li><a href="https://www.xerces.org/monarchs" target="_blank" rel="noopener noreferrer">Xerces Society — Monarchs (conservation overview)</a></li>
            <li><a href="https://www.fws.gov/initiative/pollinators/save-monarch" target="_blank" rel="noopener noreferrer">U.S. Fish &amp; Wildlife Service — Save the Monarch</a></li>
            <li><a href="https://www.fs.usda.gov/wildflowers/pollinators/Monarch_Butterfly/migration/index.shtml" target="_blank" rel="noopener noreferrer">U.S. Forest Service — Monarch Butterfly Migration and Overwintering</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
