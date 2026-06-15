import type { Page } from '../App'

interface NativeBeesProps {
  onNavigate: (page: Page) => void
}

export default function NativeBees({ onNavigate }: NativeBeesProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Agapostemon_virescens_female_visiting_Opuntia.jpg/1280px-Agapostemon_virescens_female_visiting_Opuntia.jpg"
          alt="A metallic green sweat bee (Agapostemon virescens) visiting a flower, showing its brilliant iridescent green thorax"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={720}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Muniche&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Agapostemon_virescens_female_visiting_Opuntia.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Native Bees</h1>
        <p className="hero__lead">
          Most people picture the honey bee when they think of bees — but honey bees are a
          single introduced species from Europe. North America has over 4,000 native bee
          species, ranging from tiny metallic green sweat bees a quarter-inch long to
          large carpenter bees with a wingspan approaching an inch. Most are solitary.
          Most are harmless. Most are pollinators that your local plants depend on. They
          were here long before honey bees arrived. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Unlike honey bees, the vast majority of native bees are solitary — each
            female digs or excavates her own nest, provisions it with pollen and nectar,
            lays an egg, and seals the cell. About 70% of native bee species nest in
            the ground, in bare or sparsely-vegetated soil. The other 30% nest in
            hollow or pithy plant stems, beetle tunnels in dead wood, or pre-existing
            cavities. Females forage intensively during their short active season — often
            just a few weeks — visiting dozens of flowers per trip. Most native bees are
            not defensive; they rarely sting unless handled directly. [1][2]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Eastern_carpenter_bee_%2831453%29.jpg/1280px-Eastern_carpenter_bee_%2831453%29.jpg"
            alt="An Eastern Carpenter Bee (Xylocopa virginica) nectaring on a flower, showing its large black body with yellow-furred thorax"
            width={1280}
            height={974}
            loading="lazy"
          />
          <figcaption>
            The Eastern Carpenter Bee (Xylocopa virginica) is one of the most visible
            native bees in the East — large, loud, and often seen hovering near wooden
            eaves. Females drill perfectly circular nesting holes in soft wood; males
            cannot sting and simply hover aggressively.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Eastern_carpenter_bee_(31453).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Different native bee species are active at different times of year, which means
            a healthy native bee community provides pollination services from the first
            warm days of March through October. Mining bees (Andrena) and mason bees
            (Osmia) are among the earliest, emerging in March and April when few other
            pollinators are flying. Sweat bees (Halictus, Agapostemon, Lasioglossum)
            are active through the summer. Bumble bees (Bombus) run colonies from
            spring through fall; only new queens overwinter. The native bee &quot;season&quot;
            begins and ends with the plants they depend on. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Native bees are in significant decline across North America. The Xerces Society
            estimates that over half of North America&apos;s bumble bee species are in decline,
            and some have lost more than 90% of their historical range. [2] The primary
            drivers are the same across species: loss of native wildflowers that provide
            pollen and nectar; pesticide exposure (especially neonicotinoids, which
            impair navigation, foraging, and reproduction); loss of nesting habitat in
            the form of bare ground and dead wood; and disease pressure, particularly
            Nosema pathogen spreading from managed honey bee operations into wild bumble
            bee populations. [2][3]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native wildflowers that bloom in sequence from March through October.
              A single planting of native wildflowers is not enough — native bees need
              continuous bloom. A mix of early-blooming native willows and fruit trees,
              mid-season native coneflowers and milkweeds, and late-season goldenrods
              and native asters keeps bees fed through their full active season. [3]
            </li>
            <li>
              Leave bare ground in a sunny spot. Seventy percent of native bees nest
              in the soil. A patch of south-facing, sparsely-vegetated ground — even
              just a square foot of bare earth in a sunny garden bed — is potential
              nesting habitat for dozens of solitary ground-nesting bee species. [3]
            </li>
            <li>
              Leave dead stems standing through winter. Mason bees and leafcutter bees
              nest in hollow or pithy plant stems. Leaving the upright dried stalks of
              native wildflowers and grasses in place through spring gives these bees
              both overwintering sites and nesting material. Cut stems to 18 inches
              rather than removing them entirely. [3]
            </li>
            <li>
              Stop or reduce pesticide use — especially systemic insecticides
              (imidacloprid, clothianidin, thiamethoxam) applied to soil or plants.
              Systemic pesticides persist in pollen and nectar for months and impair
              bee navigation and reproduction at very low doses. If you must control
              pests, spot-treat rather than broadcasting, and apply only in the evening
              when bees are not foraging. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">One of more than 4,000 native bee species in North America and one of the most imperiled — its 89% range decline illustrates what native bees face across the board.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('great-spangled-fritillary')}>
            <span className="neighbor-name">Great Spangled Fritillary</span>
            <span className="neighbor-note">Nectars on the same native wildflowers native bees depend on; planting for one directly benefits the other.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
            <span className="neighbor-name">Eastern Tiger Swallowtail</span>
            <span className="neighbor-note">Shares the same wildflower meadows and native garden patches; both insects respond immediately to the same habitat improvements.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-meadowlark')}>
            <span className="neighbor-name">Eastern Meadowlark</span>
            <span className="neighbor-note">Nests in the open meadow and grassland habitat where ground-nesting native bees are most abundant — both are indicators of healthy native grassland ecosystems.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.usgs.gov/programs/science-analytics-and-synthesis/bee-monitoring" target="_blank" rel="noopener noreferrer">USGS Bee Monitoring Program</a></li>
            <li><a href="https://xerces.org/bees" target="_blank" rel="noopener noreferrer">Xerces Society — Protecting Native Bees</a></li>
            <li><a href="https://www.fs.usda.gov/wildflowers/pollinators/bees/index.shtml" target="_blank" rel="noopener noreferrer">USDA Forest Service — Native Bees</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
