import type { Page } from '../App'

interface WildLupineProps {
  onNavigate: (page: Page) => void
}

export default function WildLupine({ onNavigate }: WildLupineProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Wild_Lupine_%28Lupinus_perennis%29_-_Flickr_-_wackybadger.jpg/1280px-Wild_Lupine_%28Lupinus_perennis%29_-_Flickr_-_wackybadger.jpg"
          alt="Wild Lupine (Lupinus perennis) in full bloom showing an upright blue-violet flower spike above the palmate foliage with seven to eleven leaflets radiating from each stem"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={1035}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Joshua Mayer&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Wild_Lupine_(Lupinus_perennis)_-_Flickr_-_wackybadger.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Wild Lupine</h1>
        <p className="hero__lead">
          Wild Lupine is a native perennial legume that grows knee-high in full sun on sandy,
          acidic soils and blooms in May with upright spikes of blue-violet, pea-shaped flowers
          — typically the first large-flowered native perennial of the year. It is the only
          larval host plant for the federally endangered Karner Blue butterfly (Plebejus
          samuelis), and the primary host for Frosted Elfin (Callophrys irus) populations in
          northeast pine barrens. Both butterflies are absent from any site where Wild Lupine
          has been removed. The plant requires sandy, acidic, unamended soil in full sun.
          Adding compost or fertilizer kills it faster than drought. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Wild Lupine blooms in May — two to four weeks before most native wildflowers. The
            flower spikes push from the crown base in late April and open from the bottom
            upward over ten to fourteen days. Each pea-shaped flower has a keel petal that
            guards the reproductive structures; a bumblebee&apos;s body weight pressing down
            springs the keel open, releasing pollen onto the bee&apos;s underside. Smaller bees
            visit without triggering pollination. Karner Blue females walk across lupine leaflets
            pressing their abdomen to the leaf surface, depositing one egg per contact and
            moving to a new stem for each subsequent egg, spreading the clutch across several
            individuals. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Wild_Lupine_%28Lupinus_perennis%29_-_Flickr_-_wackybadger_%281%29.jpg/1280px-Wild_Lupine_%28Lupinus_perennis%29_-_Flickr_-_wackybadger_%281%29.jpg"
            alt="Wild Lupine (Lupinus perennis) close-up showing the palmate leaves with seven to eleven leaflets arranged around a central point, characteristic of the Lupinus genus"
            width={1280}
            height={1912}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            Wild Lupine&apos;s palmate leaves — seven to eleven leaflets radiating from a central
            point — are the foliage Karner Blue caterpillars eat from hatching in April through
            June (first brood) and again from late July through August (second brood). The seed
            pods dry in late June and split open suddenly, flinging seeds two to five feet from
            the parent plant. Where the soil matches — sandy, open, acidic — the seeds germinate
            the following spring.
            <span className="photo-credit"> Photo: Joshua Mayer&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Wild_Lupine_(Lupinus_perennis)_-_Flickr_-_wackybadger_(1).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Wild Lupine is a perennial. Above-ground stems die after the first hard frost, but
            the root system persists through winter and sends up new stems each April. An
            established crown expands outward slowly and may persist in the same location for
            decades. In late June, seed pods dry and the two valves twist suddenly, ejecting
            seeds with a snapping sound audible close to the plant. Seeds land two to five feet
            from the parent. As a legume, Wild Lupine fixes nitrogen through root-nodule
            bacteria — in the lean, acidic soils where it grows naturally, this nitrogen-fixing
            capacity gives it an advantage over competing vegetation. A planting in amended,
            compost-rich soil disrupts this balance and typically fails within two to three
            seasons. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Wild Lupine requires soil conditions — sandy, acidic, low organic matter, full sun —
            found naturally in pine barrens, glacial outwash plains, dry oak savannas, and
            exposed sandy roadsides. These were the first habitats to be plowed, paved, or
            suppressed as European settlement moved through the region. As the host plant
            disappeared, the Karner Blue disappeared with it, county by county, across most of
            its range before the connection was understood. [1] Remaining Karner Blue populations
            exist at managed sites in Michigan, Wisconsin, Indiana, New York, and New Hampshire —
            each maintained by preventing the habitat from succeeding into closed-canopy woodland
            through prescribed fire or mechanical clearing.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Choose a site with sandy or gravelly, well-drained, acidic soil in full sun —
              and do not amend it. Wild Lupine in organically rich soil typically fails before
              its second season. If your ground is loam or clay, look for a dry edge with lean
              conditions: a sandy bank, a gravel margin, or a south-facing slope. The plant
              tolerates drought far better than it tolerates moisture and fertility. [2]
            </li>
            <li>
              Plant nursery-grown transplants in spring rather than starting from seed. Wild
              Lupine seed requires scarification and cold stratification and produces slow
              first-year plants that often fail to compete. Native plant sales specializing
              in pine barren or savanna species typically carry established plants. Plant at
              crown depth, water through the first summer only, and do not mulch — bark mulch
              holds moisture and adds organic matter, both of which work against establishment. [2]
            </li>
            <li>
              Leave the leaf litter at the base of the plant undisturbed from August through
              April. Karner Blue eggs from the late-summer brood overwinter in the soil and
              debris at the root crown. Clearing the ground in fall removes the overwintering
              generation. Leave old stems and surrounding litter in place through winter. Cut
              dead stalks to the ground in late March — not in autumn. [2]
            </li>
            <li>
              Apply no insecticide to the lupine or surrounding soil from April through August.
              Karner Blue caterpillars are present on the plant from late April through mid-August
              across both broods. Early instars are roughly a millimeter long — invisible without
              deliberate searching. A contact spray or a systemic absorbed through the roots
              eliminates the entire caterpillar generation on that plant. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('karner-blue')}>
            <span className="neighbor-name">Karner Blue</span>
            <span className="neighbor-note">A federally endangered butterfly whose caterpillar feeds only on Wild Lupine leaves; the late-summer egg overwinters at the root crown from August through April — if the plant is cleared in autumn, the eggs hatch onto bare ground in spring; the butterfly&apos;s entire remaining range is a map of where lupine survives in managed habitat.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('frosted-elfin')}>
            <span className="neighbor-name">Frosted Elfin</span>
            <span className="neighbor-note">Uses Wild Lupine flower buds and developing seed pods as a caterpillar host in northeast pine barrens; NatureServe rates it globally imperiled; in late May, both Frosted Elfin and Karner Blue caterpillars may be on the same lupine stand simultaneously — the elfin in the flower clusters, the Karner Blue on the leaflets.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-indigo-duskywing')}>
            <span className="neighbor-name">Wild Indigo Duskywing</span>
            <span className="neighbor-note">Also lays on Wild Lupine leaves in the northeast, using the same host-selection chemistry it applies to Baptisia in the midwest; in late May at a New England pine barren, three specialist butterfly species — Karner Blue, Frosted Elfin, and Wild Indigo Duskywing — can be present on the same lupine stand simultaneously.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Queen bumblebees emerging from winter dormancy in April need early-blooming native flowers immediately to fuel colony establishment; Wild Lupine&apos;s May bloom is among the first large-flowered native plants available, and the keel-petal flower structure is built specifically for the bumblebee&apos;s body weight to open it.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://plants.usda.gov/home/plantProfile?symbol=LUPE3" target="_blank" rel="noopener noreferrer">USDA PLANTS Database — Lupinus perennis (Wild Lupine)</a></li>
            <li><a href="https://www.fws.gov/species/karner-blue-butterfly-lycaeides-melissa-samuelis" target="_blank" rel="noopener noreferrer">U.S. Fish &amp; Wildlife Service — Karner Blue Butterfly species profile</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
