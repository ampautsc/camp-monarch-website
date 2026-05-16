import type { Page } from '../App'

interface PurpleMartinProps {
  onNavigate: (page: Page) => void
}

export default function PurpleMartin({ onNavigate }: PurpleMartinProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Purple_Martin_%28Progne_subis%29_%287885320572%29.jpg/960px-Purple_Martin_%28Progne_subis%29_%287885320572%29.jpg"
          alt="Male purple martin perched on a gourd rack — an entirely iridescent blue-black swallow that has become 100% dependent on human-provided housing in eastern North America and has declined 40% since 1966"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Andy Reago &amp; Chrissy McClarren&nbsp;·&nbsp;
          <a href="https://www.flickr.com/photos/wildreturn/7885320572/" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Purple Martin</h1>
        <p className="hero__lead">
          The purple martin is North America&apos;s largest swallow — and in eastern North America,
          it is now entirely dependent on housing that humans build and manage. Before European
          settlement, martins nested in hollow trees and native gourds provided by Indigenous
          communities. Today those hollow trees are gone, and every martin colony east of the
          Rockies nests in a human-built structure on a pole in someone&apos;s yard. The population
          has fallen roughly 40 percent since 1966.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">A swallow built for open sky</h2>
          <p>
            <em>Progne subis</em> is the largest member of the swallow family in North America,
            measuring 7 to 8 inches long with a 15-inch wingspan. The male is unmistakable: entirely
            iridescent blue-black, no contrasting belly or wing bars, the deep purple sheen visible
            only when light strikes at the right angle. Females and immature birds are brownish-gray
            above with a grayish-white belly and a faint scaly pattern on the breast — a completely
            different-looking bird that often confuses first-time landlords into thinking they have
            an impostor.
          </p>
          <p>
            Martins are aerial insectivores. They feed entirely in flight, catching flying insects
            at altitudes ranging from a few feet above the water to several hundred feet up. Studies
            using crop content analysis found that their diet consists primarily of larger-bodied
            flying insects: dragonflies, damselflies, beetles, flies, wasps, and flying ants. They
            also take moths and winged termites opportunistically. A breeding colony of 30 pairs with
            chicks is consuming an estimated several thousand insects per day from the surrounding
            airspace. They drink by skimming open water in flight, and on cold days they can enter
            a temporary torpor — dropping their body temperature to conserve energy when insect
            flight stops.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Purple_martin_%28Progne_subis%29_female.jpg/960px-Purple_martin_%28Progne_subis%29_female.jpg"
              alt="Female purple martin at a nest gourd entrance — brownish-gray above with a white belly, a distinctly different appearance from the all-dark male"
              loading="lazy"
            />
            <figcaption>
              A female purple martin at a nest gourd. Females look nothing like the iridescent
              blue-black male and are often mistaken for a different species by new landlords. Both
              sexes spend nearly all daylight hours in the air. They return to the colony structure
              only to feed nestlings, roost, and exchange incubation duties. A pair raises one clutch
              per year — four to five eggs, incubated for about 15 days, with fledging at 26 to 30
              days. The entire nesting cycle from egg to fledgling runs approximately six weeks.
              <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Purple_martin_(Progne_subis)_female_in_Prospect_Park_(09939).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Martin migration is among the most dramatic on the continent. The birds winter in the
            Amazon Basin of Brazil and begin moving north in late January, following a &ldquo;scout&rdquo;
            wave of older males that reach southern Florida as early as the second week of February
            — three months before the insects are reliably flying in the northern states. The birds
            leapfrog northward as temperatures warm, using a general rule of thumb that martins
            arrive at breeding sites roughly two weeks after the average daily high temperature
            first reaches 65°F. In Missouri and Illinois that arrival date is late April; in Minnesota
            and Ontario, mid-May. Scouts are followed by the main flock one to two weeks later.
            By late August, the entire North American population has departed for Brazil, staging in
            massive pre-migratory roosts of hundreds of thousands of birds at sites in Pennsylvania,
            Texas, and the Gulf Coast before making the long southward flight.
          </p>
          <p>
            Colony nesting is the species&apos; core social strategy. A mature colony with multiple
            compartments functions as a shared information center — birds that fail to find food
            over one area can observe returning successful foragers and follow them out on the next
            flight. This means a larger, denser colony has measurably better foraging success than
            a small isolated pair. The implication for landlords is straightforward: one or two
            compartments are difficult to establish and easy for predators to wipe out; 12 or more
            compartments create a stable, self-reinforcing colony.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">From hollow trees to gourds to apartment houses — and losing all three</h2>
          <p>
            The USGS Breeding Bird Survey found that purple martin populations in the eastern United
            States declined approximately 40 percent between 1966 and the early 2020s. Partners in
            Flight lists the species as a &ldquo;Common Bird in Steep Decline&rdquo; — present and
            recognizable, but losing numbers at a pace that will make it rare within decades if
            current trends continue. In Canada, populations have declined even more sharply and the
            species is designated as Threatened in Ontario.
          </p>
          <p>
            The current housing dependency has deep historical roots. Before European settlement,
            eastern North American populations nested primarily in natural cavities — hollow trees,
            old woodpecker holes in standing snags — in open woodlands near water. Indigenous
            peoples across the continent independently discovered that martins would nest in
            hollowed-out gourds hung on poles near villages, a practice that provided both pest
            control and a food source. European colonists continued the gourd tradition and later
            built multi-compartment wooden houses. By the mid-19th century, a dense network of
            martin housing dotted farms, towns, and waterways across eastern North America, and
            the martin population was enormous.
          </p>
          <p>
            Two introduced species nearly collapsed that network. The European Starling, released
            in Central Park in 1890, spread across the continent within decades, aggressively
            taking over any cavity it found — including every martin compartment in every colony
            within reach. The House Sparrow, introduced even earlier, did the same at smaller
            scale. Landlords who did not actively evict these cavity competitors watched their
            martin colonies disappear within a season or two. The population crash that followed
            drove much of the 20th-century decline.
          </p>
          <p>
            Today, active management has stabilized or increased some local populations, but
            the aerial insect base that sustains those colonies is itself declining. Studies
            published since 2000 document 50 to 75 percent reductions in flying insect biomass
            in many regions over three decades. Cold springs — increasingly variable under
            climate change — can kill early-arriving scouts before insects are flying, eliminating
            the scouts that would otherwise have guided the colony back to a known site. The
            martin&apos;s entire survival strategy assumes a predictable, insect-rich northern
            spring. That assumption is becoming less reliable.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that help purple martins</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Purple_Martin_house_at_Nantucket_%284819024%29.jpg/960px-Purple_Martin_house_at_Nantucket_%284819024%29.jpg"
              alt="Multi-compartment purple martin colony house on a telescoping aluminum pole — the standard colony structure used across eastern North America, mounted in an open area with at least 40 feet of clearance to trees and buildings"
              loading="lazy"
            />
            <figcaption>
              A purple martin colony house on a telescoping pole at Nantucket, Massachusetts. The
              pole height (14–18 feet), open-area placement, and SREH (Starling Resistant Entry
              Holes) crescent shape are all critical. A house with round holes will be overrun by
              starlings within days of the martins arriving. The Purple Martin Conservation
              Association (purplemartin.org) offers free guidance on site selection, pole
              installation, and nest management.
              <span className="photo-credit"> Photo: Massachusetts Office of Travel &amp; Tourism&nbsp;·&nbsp;<a href="https://www.flickr.com/photos/masstravel/4819024/" target="_blank" rel="noopener noreferrer">CC BY-ND 2.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Install a colony house or gourd rack on a telescoping pole in an open area.</strong>{' '}
              Mount the structure on a metal telescoping or winch-operated pole at a height of
              14 to 18 feet. The site must have at least 40 feet of unobstructed airspace in all
              directions — martins need a clear flight path to enter and exit at speed. More than
              40 feet from the nearest tree or building is the single most important siting rule;
              structures too close to tree canopies allow predators a launch point and reduce
              the martins&apos; detection of approaching danger. Natural gourds and commercial plastic
              gourds hung on a rack are equally effective and easier to monitor than houses. The
              Purple Martin Conservation Association (purplemartin.org) provides free plans and
              site-selection guidance.
            </li>
            <li>
              <strong>Use SREH — Starling Resistant Entry Holes — on every compartment.</strong>{' '}
              Standard round entrance holes (2.5 inches or larger) are easily used by European
              Starlings. Replacing them with crescent-shaped or key-shaped holes sized to 1.375
              inches at the narrowest point excludes starlings while allowing martins to enter
              normally. SREH conversion kits are available from the PMCA and several martin
              specialty suppliers. This is not optional — a colony house with round holes will
              be colonized by starlings before or as martins arrive, and once starlings establish
              in a compartment they are extremely difficult to evict.
            </li>
            <li>
              <strong>Monitor the colony weekly and evict House Sparrows and European Starlings.</strong>{' '}
              Even with SREH holes, House Sparrows can enter, and starlings will exploit any
              compartment with an oversized hole or a damaged entry. Lower the pole weekly during
              the nesting season (May through July) to inspect each compartment. Remove House
              Sparrow nests and eggs immediately — federal law does not protect introduced species,
              and allowing sparrows to nest in martin housing decimates the colony. A telescoping
              or winch-operated pole makes this weekly inspection a five-minute task rather than
              a ladder-and-scaffold operation.
            </li>
            <li>
              <strong>Plant native trees and shrubs that support flying insect populations.</strong>{' '}
              A martin colony feeds on the aerial insect biomass floating above the surrounding
              neighborhood. Native oaks, willows, wild cherry, elderberry, and serviceberry support
              the caterpillar and adult insect populations that eventually become the flying insects
              martins harvest. A yard or block with several mature native trees has measurably more
              flying insect activity than one planted entirely with non-native ornamentals. Find
              what grows near you at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              . Reduce pesticide use, particularly systemic neonicotinoids in nursery plants —
              see the{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticides &amp; Your Habitat guide
              </button>
              {' '}for which products to avoid.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The aerial insectivore guild above your yard</h2>
          <p>
            The purple martin shares the summer sky above eastern North American neighborhoods with
            a guild of other aerial insectivores that are all in steep decline:{' '}
            <button className="link-button" onClick={() => onNavigate('chimney-swift')}>
              chimney swifts
            </button>
            ,{' '}
            <button className="link-button" onClick={() => onNavigate('common-nighthawk')}>
              common nighthawks
            </button>
            ,{' '}
            <button className="link-button" onClick={() => onNavigate('little-brown-bat')}>
              little brown bats
            </button>
            , barn swallows, and tree swallows. Every member of this guild has declined 40 to
            72 percent since 1966. They are all declining for overlapping reasons: the collapse
            of flying insect abundance, light pollution that disrupts night foraging, and the
            loss of cavity nesting sites across the landscape.
          </p>
          <p>
            The insects the martins are eating in the air above your yard in June are the same
            insects hatching from the native trees you planted for{' '}
            <button className="link-button" onClick={() => onNavigate('black-capped-chickadee')}>
              chickadees
            </button>{' '}
            and{' '}
            <button className="link-button" onClick={() => onNavigate('wood-thrush')}>
              wood thrushes
            </button>
            . The flying dragonflies and damselflies that feature prominently in martin diet start
            life as aquatic larvae in the backyard ponds and rain gardens described in{' '}
            <button className="link-button" onClick={() => onNavigate('water-for-wildlife')}>
              Water for Wildlife
            </button>
            . The American Bumble Bee queens that emerge in April and the{' '}
            <button className="link-button" onClick={() => onNavigate('american-bumble-bee')}>
              bumble bee
            </button>{' '}
            workers that follow represent the same insect biomass pyramid that sustains the martins
            overhead. Everything is connected through the shared insect web.
          </p>
          <p>
            A martin colony that returns to your yard in late April and successfully fledges 30 or
            40 young birds is evidence that the insect web above your neighborhood is still intact
            — that the native plants, the water features, the reduced pesticide use, and the leaf
            litter you left undisturbed over winter are producing enough life to sustain a colony
            of obligate aerial predators through a full nesting season. The martins are a reading
            of your yard&apos;s ecological health, taken from 200 feet up, reported every morning
            when you see them launch from the gourd rack at sunrise.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build the colony housing, manage the predators, and fuel the insect base they need.</strong>{' '}
            Start with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              native plant selection
            </button>
            , explore every aerial neighbor in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            , and read the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            {' '}to understand what&apos;s reducing the insects your martins depend on.
          </p>
        </div>
      </div>
    </>
  )
}
