import type { Page } from '../App'

interface ArrowwoodViburnumProps {
  onNavigate: (page: Page) => void
}

export default function ArrowwoodViburnum({ onNavigate }: ArrowwoodViburnumProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="/images/plants/viburnum-dentatum/viburnum-dentatum-2025-10-23T01-26-44-621Z.jpg"
          alt="Arrowwood viburnum (Viburnum dentatum) with clusters of blue-black drupes on red-tinged stems in October, leaves beginning to color"
          className="species-hero-image"
          style={{ objectPosition: 'center 60%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/662396820/large.jpeg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo from Camp Monarch plant library &middot; October 2025
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Arrowwood viburnum sets blue-black drupes in August while still in full leaf — hidden to the homeowner, visible to every migrating thrush arriving in September.</h1>
        <p className="hero__lead">
          In late August, arrowwood viburnum (<em>Viburnum dentatum</em>) is carrying hundreds of
          pea-sized drupes per branch — blue-black, 6 to 9 mm across, packed with fat — all of it
          buried under dense summer foliage. From five feet away the shrub looks like it does
          in June. Birds know differently. Cedar Waxwings arrive from the north in late August
          and move through the canopy by smell and sight until they reach the loaded branches.
          The plant may be stripped within two days of the flock&apos;s arrival.
        </p>
        <p className="hero__lead">
          Arrowwood viburnum is the August-to-October piece of the staggered-fruit habitat
          strategy. Winterberry holds through January — arrowwood fills the window before
          winterberry is ready. A yard with both shrubs carries native fruit from late summer
          through midwinter with nothing else required.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="pollination-heading">
          <h2 id="pollination-heading">Flat white cymes in May — one plant sets fruit, two plants fruit heavier</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/662396820/large.jpeg"
              alt="Arrowwood viburnum flat-topped flower cyme with white florets open across the surface, May, Haldeman, Kentucky"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = '/images/plants/viburnum-dentatum/viburnum-dentatum-2025-10-23T01-26-44-621Z.jpg'
              }}
            />
            <figcaption>
              Arrowwood viburnum in bloom in May — flat-topped cymes of small white florets
              opening from the outer edge inward over two to three weeks. The floret tubes
              are short enough that native bees with tongues under 4 mm reach pollen without
              probing. Small flies and beetles work the same flowers alongside bees.
              <span className="photo-credit"> Photo: airlynn&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/observations/362902388" target="_blank" rel="noopener noreferrer">iNaturalist obs. 362902388</a>
                &nbsp;&middot; CC0 / No Rights Reserved
              </span>
            </figcaption>
          </figure>
          <p>
            Arrowwood viburnum is not dioecious. Unlike winterberry holly — which requires a
            separate male plant to pollinate the female — a single arrowwood plant can set fruit on
            its own. The flowers are hermaphroditic: each floret carries both pollen-bearing anthers
            and a pistil. Cross-pollination from a second plant of different genetic stock reliably
            produces heavier, denser fruit clusters than self-pollination alone — but one plant in a
            yard will bear some fruit every year without a companion.
          </p>
          <p>
            Flowers open in late May to mid-June on flat-topped cymes 3 to 4 inches across. The
            outer florets open first; the bloom moves inward across the cyme over two to three weeks.
            The short floral tube — roughly 2 mm — makes the nectar and pollen accessible to the
            full range of native pollinators. Small sweat bees, mining bees, and halictid bees with
            tongue lengths under 4 mm work arrowwood florets the same as bumblebees do. Syrphid
            flies and small beetles visit the open face of the cyme through the same bloom window.
            A single shrub in full flower supports dozens of native pollinator species over
            three weeks without requiring any specialized access.
          </p>
          <p>
            For heaviest fruit production: buy two plants from different sources, or two cultivars
            with different parentage. They do not need to be planted next to each other — both in
            the same yard is sufficient, since bees carry pollen between plants during the late-May
            flowering window.
          </p>
        </section>

        <section aria-labelledby="drupes-heading">
          <h2 id="drupes-heading">Blue-black drupes at 28% fat — what each migrating thrush needs in September</h2>
          <p>
            Each arrowwood drupe is roughly 6 to 9 mm across, dark blue to blue-black at full ripeness,
            with a thin fleshy outer layer over a single hard seed. Fat content runs approximately
            28% by dry weight — one of the higher-fat native fruits available in the late summer
            landscape, alongside dogwood drupes and native cherries. A migrating thrush or warbler
            stopping in a yard with ripe arrowwood viburnum can replenish fat reserves in three to
            four days of concentrated foraging.
          </p>
          <p>
            The timing runs from late August into October, depending on the cultivar, latitude, and
            seasonal temperatures. In most of the eastern US, peak ripeness falls in early September —
            exactly when Hermit Thrushes, Gray Catbirds, Brown Thrashers, and Eastern Towhees are
            moving south through residential landscapes. Cedar Waxwing flocks work the drupes in
            late August as the first ripe clusters appear. The Hermit Thrush arrives in September and
            works arrowwood the way it works every shrub — alone, systematically, pulling fruit from
            stems the flock already worked.
          </p>
          <p>
            By mid-October, the drupes are gone. The plant stands bare of fruit for the rest of the
            season. This is when winterberry holly begins to color and the sequence continues. A
            homeowner who plants arrowwood and winterberry together, with both established, carries
            native fruit from August through February without additional management.
          </p>
        </section>

        <section aria-labelledby="conditions-heading">
          <h2 id="conditions-heading">Average to moist soil, full sun to part shade — not the wet corner, but next to it</h2>
          <p>
            Arrowwood viburnum grows across a wider range of conditions than winterberry. Its natural
            habitat includes woodland edges, upland slopes with moist soil, forest margins, and the
            edges of wet areas — the transition zone between well-drained ground and the low, wet spots
            where winterberry grows. In a yard, this means arrowwood goes in the garden bed or shrub
            border, not the low corner that floods in spring.
          </p>
          <p>
            The shrub reaches 6 to 8 feet tall and 6 to 8 feet wide over 8 to 10 years, spreading
            by root suckers to form a multi-stemmed colony. In a border planting, root sprouts that
            appear outside the intended footprint can be cut off at ground level; removing them does
            not harm the parent plant. In a naturalized area with space to spread, arrowwood will
            fill 10 to 15 feet over a decade — a dense thicket that also provides nesting cover for
            catbirds and wrens.
          </p>
          <p>
            The viburnum leaf beetle (<em>Pyrrhalta viburni</em>), introduced from Europe, feeds on
            arrowwood in the northeastern US. Yellow-tan larvae appear in May and skeletonize
            leaves from the undersurface. A plant defoliated completely for two or three consecutive
            years weakens and may die. In fall, egg masses — small ridged capsules set in a row
            along the top of current-year stems — are visible from October through early spring.
            Cutting and discarding those stem tips between October and April removes the eggs before
            they hatch.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Arrowwood and winterberry together — fruit from August through February</h2>
          <ol className="step-list">
            <li>
              <strong>Buy two plants from different sources or different cultivar names.</strong>{' '}
              One plant sets some fruit on its own. Two genetically distinct plants cross-pollinate
              during the May bloom and produce heavier, denser berry clusters — the kind that hold
              flocks for two days instead of one afternoon. Cultivars like &lsquo;Chicago Lustre&rsquo;,
              &lsquo;Autumn Jazz&rsquo;, and &lsquo;Blue Muffin&rsquo; are widely available; choose
              any two from different breeding lines.
            </li>
            <li>
              <strong>Plant in a garden bed, border, or shrub line — not the wet corner.</strong>{' '}
              Arrowwood tolerates average to moist, well-drained to slightly wet soil. Full sun
              produces the heaviest fruit; part shade (4+ hours direct sun) works in most cases.
              Space the two plants 5 to 6 feet apart. Leave 4 to 5 feet from a fence or walk —
              the colony will eventually reach that boundary.
            </li>
            <li>
              <strong>Add winterberry nearby for November through February coverage.</strong>{' '}
              Arrowwood fruit runs August through October. Winterberry fruit ripens in late
              October and holds through February. Plant winterberry in the low corner where water
              collects — its wet-soil preference is the opposite of arrowwood&apos;s best site.
              Together the two shrubs cover the full fall migration and wintering period without
              gap.
            </li>
            <li>
              <strong>In November, check new-growth stems for viburnum leaf beetle egg masses.</strong>{' '}
              Look for brown, ridged capsules arranged in short rows along the top of pencil-thick
              current-year stems. Cut those stem tips back below the egg mass and discard them.
              One inspection per fall removes the problem before the larvae hatch in April.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who finds arrowwood viburnum in August</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cedar-waxwing')}>
                Cedar Waxwing
              </button>{' '}
              — nomadic flocks arrive in late August when the first drupes ripen; a flock of
              30 can strip a mature arrowwood in two days, then move south with the fat reserves
              the berries provided
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hermit-thrush')}>
                Hermit Thrush
              </button>{' '}
              — arrives in September and works arrowwood clusters the flocks left behind; the
              same individual returns to the same yard in consecutive winters if the shrubs
              are there
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('gray-catbird')}>
                Gray Catbird
              </button>{' '}
              — breeds in dense shrub tangles and uses arrowwood drupes heavily in August and
              September before migrating; the same arrowwood thicket that feeds migrants in
              fall also shelters nesting catbirds the following spring
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('winterberry-holly')}>
                Winterberry Holly
              </button>{' '}
              — the November-through-February partner; plant both shrubs and the fall-to-winter
              fruit sequence runs from August to February with the two shrubs handing off as
              arrowwood empties and winterberry colors
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
