import type { Page } from '../App'

interface HabitatLayersProps {
  onNavigate: (page: Page) => void
}

export default function HabitatLayers({ onNavigate }: HabitatLayersProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Your Yard as Habitat</div>
        <h1>The Four Layers</h1>
        <p className="hero__lead">
          A yard with a mature oak and two ornamental shrubs by the fence has at most two of
          the four habitat layers that most species in the gallery depend on. The mowed lawn
          between the oak and the fence is not a layer — it is a surface that almost nothing
          in the gallery can use.
        </p>
        <p className="hero__lead">
          The four layers are: a floor of decomposing leaves and logs, a shrub layer from
          ankle height to roughly twelve feet, a canopy of trees above that, and the edges
          where one layer meets another. Each species shows up in one or two of them. A yard
          missing two layers is not visited by the species that need those layers, regardless
          of what the yard looks like from the street.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="floor-heading">
          <h2 id="floor-heading">The floor layer: decomposing leaves and a two-year life underground</h2>
          <p>
            The floor layer is a sheet of decomposing leaves, fallen logs, and organic debris
            that sits between the soil surface and the air above it. In a yard where leaves
            are left in place from fall through spring, this layer accumulates to two or three
            inches over one season. It builds itself wherever raking stops.
          </p>
          <p>
            Firefly larvae overwinter in this layer for one to two full years before they
            flash for the first time. The adults that light up a yard in June hatched at least
            twelve months earlier, burrowed through one winter in the leaf litter, and emerged
            only when soil temperatures climbed above their threshold in late spring. A section
            of yard raked clear every November destroys that cohort — not the adults, which
            have already emerged and died, but the larvae that spent the previous twelve months
            in the leaves that are now at the curb. The following June has fewer flashes because
            of the November before last.
          </p>
          <p>
            Wood thrushes arrive in May and spend the first mornings flipping leaf litter
            with their bills to expose earthworms and beetle larvae beneath. Box turtles press
            into the floor layer in October and stay there until April, using the leaf mass as
            insulation against air temperatures that drop below freezing above them. American
            toads spend most of the year just beneath it, burrowing downward during cold and
            dry periods and surfacing only to breed or after heavy rain.
          </p>
          <p>
            None of these animals require a large floor area. A section of unraked leaves
            along a fence or under a tree — twelve to eighteen inches deep, left from November
            through April — is enough for firefly larvae to overwinter and for a wood thrush
            to spend a morning. The{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>{' '}
            page gives the mechanism and the minimum floor area.
          </p>
        </section>

        <section aria-labelledby="shrub-heading">
          <h2 id="shrub-heading">The shrub layer: branch forks at 3–6 feet and a six-week nesting window</h2>
          <p>
            The shrub layer runs from roughly ankle height to the eave of a one-story house.
            Gray catbirds, yellow warblers, song sparrows, northern cardinals, and brown
            thrashers all nest inside it — specifically in the 3-to-6-foot zone inside a dense
            multi-stemmed shrub, where forking branches anchor a cup-shaped nest. All five
            species have nesting windows that overlap in a six-week band from mid-May through
            late June.
          </p>
          <p>
            What the female looks for when choosing a nest site is not the plant species — it
            is the branch architecture. A gray catbird arriving in late April approaches from
            below, pressing upward into a shrub&apos;s branching structure at three to six feet.
            She tests whether stems fork and cross with enough density that a nest cup can
            anchor across multiple stems rather than rest on a single branch that might flex
            under the weight of rain and nestlings. A shrub pruned to smooth stubs in April
            has had its interior branch forks removed at exactly that height. She tests it and
            moves on.
          </p>
          <p>
            Native shrubs — spicebush, elderberry, native viburnums, native dogwoods —
            provide nesting structure and insect prey from the same planting. An elderberry in
            full leaf in May carries a caterpillar density documented at 40 to 100 times higher
            per unit of canopy area than most non-native ornamental shrubs. Nesting birds make
            multiple prey runs per hour during the 9-to-11-day nestling period, foraging within
            50 to 100 feet of the nest. The shrub that holds the nest also needs to hold food.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('gray-catbird')}>
              Gray Catbird
            </button>
            {', '}
            <button className="link-button" onClick={() => onNavigate('yellow-warbler')}>
              Yellow Warbler
            </button>
            {', '}
            <button className="link-button" onClick={() => onNavigate('song-sparrow')}>
              Song Sparrow
            </button>
            {', and '}
            <button className="link-button" onClick={() => onNavigate('brown-thrasher')}>
              Brown Thrasher
            </button>{' '}
            pages each give the nesting measurements for one species. All four can use the
            same native shrub in the same season.
          </p>
        </section>

        <section aria-labelledby="canopy-heading">
          <h2 id="canopy-heading">The canopy layer: one native oak, 10,000 caterpillars, and the birds that need both</h2>
          <p>
            The canopy layer begins above the height of a one-story building and extends
            through the crowns of mature trees. In most suburban yards it is one or two
            trees — often chosen for shade, fall color, or ornamental form rather than for
            what they produce. A mature native oak produces somewhere between 10,000 and 20,000
            caterpillars across its canopy per season in a yard with no pesticide applications.
            A mature Norway maple in the same yard produces a small fraction of that number.
            Norway maples did not co-evolve with the specialist caterpillar species that
            require oak leaf chemistry to complete their life cycles; most of those species
            cannot use Norway maple leaves at all.
          </p>
          <p>
            Black-capped chickadees require between 6,000 and 9,000 caterpillars to raise a
            single brood of six to eight nestlings through fledging. The female makes dozens
            of foraging runs per day during the 16-day nestling period. The canopy tree
            50 to 100 feet from the nest box is the primary prey source during that window.
            A canopy of non-native ornamentals within that radius cannot sustain a brood from
            hatching to fledging even with a perfectly positioned nest box.
          </p>
          <p>
            The canopy layer is the slowest to build — a white oak planted this spring is a
            canopy-scale tree in 40 to 60 years. Most yards with a canopy layer need to stop
            degrading what they have: removing dead limbs that downy woodpeckers excavate and
            eastern screech owls use for nesting cavities, applying systemic insecticides to
            canopy trees that travel through vascular tissue into the leaves and reduce
            caterpillar survival across the entire crown, replacing native trees with
            ornamentals that carry almost none of the same caterpillar diversity.
          </p>
        </section>

        <section aria-labelledby="edge-heading">
          <h2 id="edge-heading">The edge: where two layers land within 15 feet of each other</h2>
          <p>
            An edge is the zone where one layer meets another — where lawn meets a shrub
            border, where a shrub border meets the base of a canopy tree, where leaf litter
            meets maintained groundcover. Animals that draw resources from two different layers
            need both within the distance they are willing to travel between foraging runs.
          </p>
          <p>
            A gray catbird nesting at four feet inside an elderberry forages at ground level
            for beetles and at shrub height for berries. It needs the shrub layer to nest and
            the floor layer to feed. In a yard where the floor layer begins twelve feet from
            the shrub — separated by open lawn — the catbird spends more energy traveling and
            more time exposed to predators than in a yard where a border of unraked leaves
            runs directly against the shrub&apos;s base. Distance between layers carries a cost
            per foraging run, paid in calories and in exposure.
          </p>
          <p>
            The conventional suburban yard produces one kind of edge: a hard line between
            mowed lawn and a single row of shrubs at the property boundary. A soft edge —
            where low groundcover transitions to taller native shrubs over 6 to 8 feet of
            horizontal space — provides vertical structure at each point along it that the
            hard-line edge does not. Fence-line native plantings left unmanaged for two or
            three seasons tend to accumulate more species than a single clipped hedge along
            the same fence because the shrub layer and the floor layer exist within a short
            horizontal distance of each other.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four questions for your yard</h2>
          <ol className="step-list">
            <li>
              <strong>
                Is there a floor layer anywhere on the property — unraked leaves, at least
                a foot deep, left in place from November through April?
              </strong>{' '}
              If not, a section along a fence or under a tree is enough to start. The{' '}
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>{' '}
              guide explains how much area firefly larvae need to overwinter successfully.
            </li>
            <li>
              <strong>
                Is there a native shrub — unpruned and taller than four feet — anywhere
                in the yard?
              </strong>{' '}
              A single spicebush or native viburnum is the highest-value addition to a yard
              that has a canopy layer but no shrub layer. Find species for your region and
              hardiness zone at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Does the canopy layer include at least one native tree?</strong>{' '}
              Native oaks, cherries, maples, and elms carry caterpillar densities that
              non-native ornamentals do not. &ldquo;Native tree&rdquo; and &ldquo;tree&rdquo; are not the same
              thing — the word native is doing work that the word tree is not.
            </li>
            <li>
              <strong>
                Do any two layers exist within 15 feet of each other somewhere in the yard?
              </strong>{' '}
              A native shrub planted next to a section of unraked leaves creates an edge.
              A native tree with a native shrub underplanting creates an edge. The species
              that need two layers need them close enough to use both in the same hour.
            </li>
          </ol>
          <p style={{ marginTop: '1.5rem' }}>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-score')}>
              Habitat Score
            </button>{' '}
            tool walks through a yard audit that maps these four layers to specific species
            pages in the gallery. Or go directly to the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>{' '}
            to see which species each layer supports.
          </p>
        </div>
      </div>
    </>
  )
}
