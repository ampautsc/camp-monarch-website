import type { Page } from '../App'

interface WildBlueIndigoProps {
  onNavigate: (page: Page) => void
}

export default function WildBlueIndigo({ onNavigate }: WildBlueIndigoProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Baptisia_australis_-_Blue_False_Indigo_2.jpg/1280px-Baptisia_australis_-_Blue_False_Indigo_2.jpg"
          alt="Wild Blue Indigo (Baptisia australis) in full bloom showing upright racemes of blue-violet pea-shaped flowers above rounded blue-green foliage"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Fritzflohrreynolds&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Baptisia_australis_-_Blue_False_Indigo_2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Wild Blue Indigo</h1>
        <p className="hero__lead">
          Wild Blue Indigo is a native perennial legume that blooms in May with upright
          spikes of vivid blue-violet, pea-shaped flowers — among the first native wildflowers
          of the season. It grows two to four feet tall in full sun, forms a rounded mound of
          blue-green foliage through summer, then holds inflated black seed pods on its stems
          through fall and winter. Two specialist butterflies — the Wild Indigo Duskywing and
          the Frosted Elfin — cannot complete their life cycle without it. Once established
          from a deep taproot, the same crown flowers in the same spot for decades. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            In May, Wild Blue Indigo&apos;s flower spikes attract queen bumblebees freshly out
            of winter dormancy, along with Gray Hairstreaks and occasional early butterflies.
            The flower structure requires a bumblebee&apos;s weight to open the keel petal that
            guards the stamens and pistil inside — bumblebees are the primary effective
            pollinators, while smaller bees can reach nectar without triggering pollination.
            Wild Indigo Duskywing females press their feet to the leaves all season to confirm
            the Baptisia chemistry before laying. The distinctive quinolizidine alkaloids in
            the leaves that most insects cannot process are precisely what the Duskywing
            caterpillar has evolved to tolerate — and what makes the plant deer resistant. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Baptisia_australis_-_Blue_False_Indigo.jpg/1280px-Baptisia_australis_-_Blue_False_Indigo.jpg"
            alt="A close-up of Wild Blue Indigo (Baptisia australis) showing the individual blue-violet pea-shaped flowers in detail on an upright flower spike"
            width={1280}
            height={1707}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            Wild Blue Indigo blooms in May — before most native wildflowers are open —
            making it one of the first large-flowered native plants available to queen
            bumblebees establishing new colonies in spring. After the three-week bloom
            period, the plant fills out into a rounded blue-green mound and its foliage
            becomes available to Wild Indigo Duskywing caterpillars through summer.
            <span className="photo-credit"> Photo: Fritzflohrreynolds&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Baptisia_australis_-_Blue_False_Indigo.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Wild Blue Indigo develops a deep, woody taproot that makes the plant drought
            tolerant once established and very difficult to move after a few growing seasons.
            The crown expands slowly each year: in year one, a transplant produces modest
            stems; by year ten, it sends up several dozen flower spikes in May. After the
            bloom period, inflated black seed pods form and persist on the standing stalks
            through fall and into winter, releasing seeds below the plant. Ground-feeding
            birds including Dark-Eyed Juncos and Song Sparrows work the fallen seeds through
            late autumn. The hollow old stems provide overwintering sites for small native
            bees. Cut stems to the ground in late March before new growth pushes from the
            crown base. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Wild Blue Indigo is native and not of conservation concern, but the two butterfly
            specialists that depend on it — the Wild Indigo Duskywing and the Frosted Elfin —
            have both declined as native Baptisia was removed from developed landscapes. [1]
            Where the plant persists in prairie remnants, along roadsides with native vegetation,
            and in residential yards, its specialist butterflies can persist with it. A yard
            with an established Wild Blue Indigo planting is a potential colony site for the
            Wild Indigo Duskywing with few other options in a developed landscape. Planting
            it and leaving it in place is among the highest-value actions for these two
            specialists. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Choose the site before you plant — and commit to it. Wild Blue Indigo develops
              a deep taproot within the first two growing seasons. After that, transplanting
              disrupts enough of the root system to set the plant back significantly. Select
              full sun and well-drained to average soil. Avoid low spots that stay wet through
              winter. [2]
            </li>
            <li>
              Start with a nursery transplant in spring. Wild Blue Indigo seed requires
              scarification and cold stratification and produces slow first-year plants.
              Nursery transplants from native plant sales flower in one to two seasons.
              Plant at crown depth and water through the first season — irrigation is not
              needed after establishment. [2]
            </li>
            <li>
              Leave the seed pods and stems standing through winter. The inflated black pods
              release seeds and provide structure through fall and winter, supporting
              ground-foraging birds and native bees that overwinter in hollow stem cavities.
              Cut old stalks to the ground in late March, before new growth emerges from
              the crown base. [2]
            </li>
            <li>
              Do not apply insecticide on or near the foliage from April through September.
              Wild Indigo Duskywing caterpillars develop inside rolled leaflets from late
              May through late summer. Frosted Elfin caterpillars feed on flower buds and
              developing pods in May and June. A contact spray or systemic insecticide
              eliminates both at any developmental stage. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('wild-indigo-duskywing')}>
            <span className="neighbor-name">Wild Indigo Duskywing</span>
            <span className="neighbor-note">A skipper butterfly that lays exclusively on Baptisia species; caterpillars develop inside rolled leaflets from late May through summer; populations in any given county track Wild Blue Indigo availability directly — where the plant is absent, the duskywing is absent.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('frosted-elfin')}>
            <span className="neighbor-name">Frosted Elfin</span>
            <span className="neighbor-note">A small hairstreak butterfly that lays on Wild Blue Indigo flower buds and developing seed pods in May; caterpillar feeds on floral tissue and immature seeds; range has contracted alongside loss of native Baptisia populations.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-hairstreak')}>
            <span className="neighbor-name">Gray Hairstreak</span>
            <span className="neighbor-note">A generalist hairstreak whose caterpillars feed on flowers and developing seeds of dozens of plant species, including Wild Blue Indigo; females visit the flower clusters in May and June, adding to the community using this plant.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Queen bumblebees emerging from winter dormancy in April need early-blooming native flowers immediately; Wild Blue Indigo&apos;s May bloom provides one of the first large-flowered native nectar sources of the season, and its keel-petal flower structure is built specifically for bumblebee pollinators.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://plants.usda.gov/home/plantProfile?symbol=BAAU2" target="_blank" rel="noopener noreferrer">USDA PLANTS Database — Baptisia australis (Wild Blue Indigo)</a></li>
            <li><a href="https://www.wildflower.org/plants/result.php?id_plant=BAAU2" target="_blank" rel="noopener noreferrer">Lady Bird Johnson Wildflower Center — Wild Blue Indigo</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
