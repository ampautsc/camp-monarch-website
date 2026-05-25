import type { Page } from '../App'

interface JuvenalsDuskywingProps {
  onNavigate: (page: Page) => void
}

export default function JuvenalsDuskywing({ onNavigate }: JuvenalsDuskywingProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/17117409/large.jpeg"
          alt="Adult Juvenal's Duskywing perched on bare ground with wings held flat, showing the dark brown forewing marked with two rows of pale cream glassy spots and a broad rounded wing outline, Montgomery County Maryland"
          className="species-hero-image"
          style={{ objectPosition: 'center 38%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/195994030/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: mellis&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/photos/17117409" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies &amp; Skippers</div>
        <h1>A Juvenal&apos;s Duskywing caterpillar rolls a white oak leaf into a silk-anchored tube and overwinters inside it on the ground &mdash; the leaf pile raked away in November contains the adults that would have flown in May</h1>
        <p className="hero__lead">
          Juvenal&apos;s Duskywing (<em>Erynnis juvenalis</em>) is a dark brown spring skipper with
          two rows of pale cream glassy spots across the forewing and a wingspan of about 4 to 5
          centimeters. It is larger and broader-winged than Wild Indigo Duskywing. Adults fly from
          late April through June in a single annual brood. When they stop to rest, they hold their
          wings flat on bare ground, packed soil, or low vegetation.
        </p>
        <p className="hero__lead">
          Adults concentrate along oak woodland edges, on paths through oak woods, and on sunny bare
          ground near stands of white oak. Males perch in the open and launch short flights at other
          passing insects. Adults take nectar at blueberry, wild plum, azalea, and viburnum flowers
          during the spring flight period &mdash; the same weeks that white oak&apos;s new leaf
          flush is emerging and eggs are being laid.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="silk-tube-heading">
          <h2 id="silk-tube-heading">The silk tube &mdash; how a Duskywing caterpillar rolls a white oak leaflet and eats it from the inside</h2>
          <p>
            After hatching from an egg laid on the upper surface of a young oak leaf, the caterpillar
            fastens silk threads along the leaflet margins and draws the edges inward until the leaf
            surface curls into a tube. It feeds from inside that shelter, scraping and chewing the
            leaf surface while the outer wall of the roll remains intact.
          </p>
          <p>
            When one leaflet is mostly consumed, the caterpillar leaves the depleted shelter, moves
            to a fresh leaflet, and constructs another tube. Third- through fifth-instar caterpillars
            produce visible rolled leaves on white oak through summer. A white oak leaf found rolled
            into a cigar shape in July is often a Duskywing shelter rather than weather or mechanical
            damage.
          </p>
          <p>
            The final instar overwinters inside a fallen rolled leaf on the ground rather than
            pupating in autumn. Pupation occurs the following spring, and adults eclose from late
            April into June. The leaf on the ground in November is not dead material &mdash; the
            caterpillar inside it is in the larval stage, waiting.
          </p>
        </section>

        <section aria-labelledby="oak-edge-heading">
          <h2 id="oak-edge-heading">When oak woodland edges were cleared across the eastern United States, the Duskywing disappeared from those counties &mdash; and has not returned</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/285987570/large.jpeg"
              alt="Adult Juvenal's Duskywing perched on a stem with wings spread flat, showing the full dorsal pattern of dark brown forewings with cream spots, Baraboo Wisconsin"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/17117409/large.jpeg'
              }}
            />
            <figcaption>
              Juvenal&apos;s Duskywing at rest in Baraboo, Wisconsin. Adults perch with wings open
              flat, which makes the cream spots on the forewing the most visible field mark.
              The species stays near white oak group trees throughout its April&ndash;June flight.
              <span className="photo-credit"> CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            The primary larval host is white oak (<em>Quercus alba</em>), with additional records
            from chestnut oak, bur oak, and swamp white oak &mdash; all members of the white oak
            group. Published host records are from white oak group species. Females seek out the
            young leaves of this oak group in May and deposit eggs singly on the upper surface.
          </p>
          <p>
            The habitat the adult occupies &mdash; sunny oak woodland edge, open paths through oak
            stands, patches of bare ground beside oaks &mdash; is the same habitat that was
            converted most thoroughly as suburban development spread across the eastern United
            States. Closed-canopy forest was left; the sunny transitional edge where oaks grow in
            partial light was replaced.
          </p>
          <p>
            Recent records in heavily developed regions cluster at forest preserves, older parkways
            with mature oaks along the median, and residential yards where white oak trees
            survived the original clearing. In yards where the leaf layer beneath those oaks is
            raked and removed each fall, the caterpillar overwintering inside a rolled leaf is
            removed with it. The tree itself is there. The habitat it provides at the ground level
            is gone.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things a homeowner with a mature oak can do before May</h2>
          <ol className="step-list">
            <li>
              <strong>Leave the leaves beneath the oak each fall.</strong>{' '}
              The overwintering larva is inside a rolled leaf on the ground. Moving or bagging that
              leaf layer removes the caterpillar. Push the leaves against the base of the tree or
              into a nearby garden bed &mdash; a few inches of accumulated leaves is enough to
              keep the larva in place through winter.
            </li>
            <li>
              <strong>If no oak is present, plant a white oak seedling in full sun.</strong>{' '}
              White oak seedlings are available from state forestry programs for $1&ndash;3 each.
              Plant in well-drained soil, at least 20 feet from structures. In ten years, the oak
              will be producing leaves that support hundreds of caterpillar species including
              Duskywing. In fifty years, it will be anchoring the habitat for the next
              generation of oak-dependent wildlife.
            </li>
            <li>
              <strong>Skip systemic pesticide treatment on oaks in May and June.</strong>{' '}
              Juvenal&apos;s Duskywing caterpillars feed on white oak leaves from May through late
              summer. Systemic insecticides applied to oak bark or soil in spring move into leaf
              tissue and kill caterpillars feeding on those leaves &mdash; including every other
              leaf-feeding species on the same tree.
            </li>
            <li>
              <strong>Let the area under the oak&apos;s drip line grow unmowed or lightly mowed.</strong>{' '}
              Adults perch on bare ground and low vegetation at the base of oaks during the flight
              period. A closely mowed, maintained ring around an oak trunk removes the low
              vegetation and bare ground patches where males perch and females search for host
              trees.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who lives in the same oak woodland edge &mdash; the skippers and birds connected through the same habitat</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('white-oak')}>
                White Oak
              </button>{' '}
              &mdash; the larval host for Duskywing caterpillars from hatching in May through
              the overwinter period; also supports 557 Lepidoptera species total and produces
              the acorn crop that feeds wild turkey, blue jays, and deer through fall and winter
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-indigo-duskywing')}>
                Wild Indigo Duskywing
              </button>{' '}
              &mdash; another <em>Erynnis</em> skipper, but uses <em>Baptisia</em> rather than
              oak as its larval host; the two share the same adult flight period (May&ndash;June)
              and the same perching posture but are found in different habitat types
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('leonards-skipper')}>
                Leonard&apos;s Skipper
              </button>{' '}
              &mdash; a woodland-edge skipper that flies later in the season (August&ndash;September)
              when Duskywing adults are gone; both use the same sunny oak openings for perching
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cobweb-skipper')}>
                Cobweb Skipper
              </button>{' '}
              &mdash; another early-spring skipper with a flight window from March into May that
              overlaps the Duskywing&apos;s season; both concentrate at sunny, open woodland margins
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('black-capped-chickadee')}>
                Black-capped Chickadee
              </button>{' '}
              &mdash; makes 350 to 570 foraging trips per day to the nest during nestling season
              in May; the Duskywing caterpillar inside a rolled white oak leaf is exactly what the
              chickadee is searching for on each pass through the canopy
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            Juvenal&apos;s Duskywing is one of 557 Lepidoptera species that complete their larval
            stage on oak. See the full picture at{' '}
            <button className="link-button" onClick={() => onNavigate('white-oak')}>
              White Oak
            </button>
            {' '}or browse all butterfly pages in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
