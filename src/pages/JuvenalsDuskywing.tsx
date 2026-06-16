import type { Page } from '../App'

interface JuvenalsDuskywingProps {
  onNavigate: (page: Page) => void
}

export default function JuvenalsDuskywing({ onNavigate }: JuvenalsDuskywingProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Juvenal%27s_Duskywing_-_Erynnis_juvenalis%2C_Merrimac_Farm_Wildlife_Management_Area%2C_Aden%2C_Virginia.jpg/1280px-Juvenal%27s_Duskywing_-_Erynnis_juvenalis%2C_Merrimac_Farm_Wildlife_Management_Area%2C_Aden%2C_Virginia.jpg"
          alt="Juvenal's Duskywing (Erynnis juvenalis) adult resting with wings spread flat on bare ground showing the dark brown forewing with two rows of pale cream glassy spots and rounded wing outline"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={936}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Judy Gallagher&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Juvenal%27s_Duskywing_-_Erynnis_juvenalis,_Merrimac_Farm_Wildlife_Management_Area,_Aden,_Virginia.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Juvenal&apos;s Duskywing</h1>
        <p className="hero__lead">
          Juvenal&apos;s Duskywing is a dark brown spring skipper with two rows of pale cream
          glassy spots across the forewing and a wingspan of about 1.5 to 2 inches — larger
          and broader-winged than the Wild Indigo Duskywing. Adults fly from late April
          through June in a single brood. At rest they hold wings flat on bare ground, packed
          soil, or low vegetation, where the mottled brown patterning blends into dried leaf
          litter. The caterpillar feeds only on white oak group trees, rolling individual
          leaflets into silk tubes and feeding from inside. The final instar overwinters in
          a fallen rolled leaf on the ground — not as a pupa. The leaf layer raked away in
          November contains the adults that would have flown in May. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Juvenal&apos;s Duskywings concentrate along oak woodland edges, on paths through
            oak woods, and on sunny bare ground near stands of white oak. Males perch in the
            open and launch short flights at other passing insects. Adults take nectar at
            blueberry, wild plum, azalea, and viburnum flowers during the spring flight
            period — the same weeks that white oak&apos;s new leaf flush is emerging and eggs
            are being laid. The female lays single eggs on the upper surface of young white
            oak leaves. After hatching, the caterpillar spins silk threads along the leaflet
            margins, draws the edges inward into a tube, and feeds on the inner surface from
            inside that shelter. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Juvenal%27s_Duskywing_-_Erynnis_juvenalis%2C_Merrimac_Farm_Wildlife_Management_Area%2C_Aden_%28Virginia%29.jpg/1280px-Juvenal%27s_Duskywing_-_Erynnis_juvenalis%2C_Merrimac_Farm_Wildlife_Management_Area%2C_Aden_%28Virginia%29.jpg"
            alt="Juvenal's Duskywing (Erynnis juvenalis) adult in a slightly different angle showing the dorsal wing pattern with the pale cream spots more visible against the dark brown background"
            width={1280}
            height={882}
            loading="lazy"
          />
          <figcaption>
            A white oak leaflet rolled into a cigar shape in July is usually a Duskywing
            shelter, not weather damage. The third through fifth instar caterpillars produce
            these visible rolled leaves through summer. The final instar overwinters inside
            a fallen rolled leaf on the ground rather than pupating in autumn — pupation
            occurs the following spring, and adults eclose from late April into June.
            <span className="photo-credit"> Photo: Judy Gallagher&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Juvenal%27s_Duskywing_-_Erynnis_juvenalis,_Merrimac_Farm_Wildlife_Management_Area,_Aden_(Virginia).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Juvenal&apos;s Duskywing has one brood per year. Eggs are laid in May on young white
            oak leaves. The caterpillar feeds inside rolled leaflets through summer, constructing
            a new tube from a larger leaflet each time it outgrows the previous one. The primary
            larval host is white oak (Quercus alba), with additional records from chestnut oak,
            bur oak, and swamp white oak — all members of the white oak group. The final instar
            overwinters inside a fallen rolled leaf on the ground. Pupation occurs the following
            March. Adults are on the wing from late April through June. Where the leaf layer
            beneath white oaks is raked away each fall, the caterpillar overwintering inside
            a rolled leaf is removed with it — the tree is there, but the habitat it provides
            at the ground level is gone. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Juvenal&apos;s Duskywing is not listed as threatened or endangered. [1] But recent
            records in heavily developed regions cluster at forest preserves, older parkways
            with mature oaks, and residential yards where white oak trees survived the original
            clearing. The habitat the adult occupies — sunny oak woodland edge, open paths
            through oak stands, patches of bare ground beside oaks — is the same habitat that
            was converted most thoroughly as suburban development spread. Closed-canopy forest
            was left; the sunny transitional edge where oaks grow in partial light was replaced.
            Where that edge structure is gone and the leaf litter beneath oaks is removed each
            fall, this skipper is gone with it.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Leave the leaves beneath the oak each fall. The overwintering caterpillar is
              inside a rolled leaf on the ground. Moving or bagging that leaf layer removes
              it. Push the leaves against the base of the tree or into a nearby garden bed —
              a few inches of accumulated leaves is enough to keep the caterpillar in place
              through winter until it pupates in March. [2]
            </li>
            <li>
              If no oak is present, plant a white oak seedling in full sun. White oak seedlings
              are available from state forestry programs for $1–3 each. Plant in well-drained
              soil at least 20 feet from structures. In ten years the oak will produce leaves
              that support hundreds of caterpillar species including this Duskywing. In fifty
              years it will anchor the habitat for the next generation of oak-dependent wildlife. [2]
            </li>
            <li>
              Skip systemic pesticide treatment on oaks in May and June. Juvenal&apos;s Duskywing
              caterpillars feed on white oak leaves from May through late summer. Systemic
              insecticides applied to oak bark or soil in spring move into leaf tissue and kill
              caterpillars feeding on those leaves — including every other leaf-feeding species
              on the same tree. [2]
            </li>
            <li>
              Let the area under the oak&apos;s drip line grow unmowed or lightly mowed. Adults
              perch on bare ground and low vegetation at the base of oaks during the flight
              period. A closely mowed, maintained ring around an oak trunk removes the low
              vegetation and bare ground patches where males perch and females search for
              host trees. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('wild-indigo-duskywing')}>
            <span className="neighbor-name">Wild Indigo Duskywing</span>
            <span className="neighbor-note">Another Erynnis skipper, but uses Baptisia rather than oak as its larval host; the two species share the same adult flight period in May and June and the same perching posture with wings flat, but are found in entirely different habitat types — oak edges versus open meadows with Wild Blue Indigo.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('black-capped-chickadee')}>
            <span className="neighbor-name">Black-capped Chickadee</span>
            <span className="neighbor-note">Makes 350–570 foraging trips per day to the nest during nestling season in May; the Juvenal&apos;s Duskywing caterpillar inside a rolled white oak leaf is exactly what the chickadee is searching for on each pass through the canopy — the same tree supporting caterpillar development is also feeding the birds raising young.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">Breeds in oak woodlands and forages at the leaf litter layer for invertebrates — including caterpillars and pupae in the ground layer beneath oaks; a mature white oak in May is simultaneously hosting Duskywing caterpillars in its canopy and providing foraging substrate for Wood Thrushes at the ground below.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('spring-azure')}>
            <span className="neighbor-name">Spring Azure</span>
            <span className="neighbor-note">Appears on the same warm April and May days as Juvenal&apos;s Duskywing along oak woodland edges; both are first-of-spring butterflies that disappear before summer, and both are associated with the structural diversity of oak woodland edges rather than closed forest interior.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.butterfliesandmoths.org/species/Erynnis-juvenalis" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Juvenal&apos;s Duskywing</a></li>
            <li><a href="https://www.nwf.org/NativePlantFinder/Plants/5" target="_blank" rel="noopener noreferrer">National Wildlife Federation Native Plant Finder — White Oak (Quercus alba)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
