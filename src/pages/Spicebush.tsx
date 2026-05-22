import type { Page } from '../App'

interface SpicebushProps {
  onNavigate: (page: Page) => void
}

export default function Spicebush({ onNavigate }: SpicebushProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/2023-03-30_13_24_41_Common_spicebush_blooming_in_the_forest_within_Ann_M._Banchoff_Park_in_the_Mountainview_section_of_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg/960px-thumbnail.jpg"
          alt="Common spicebush (Lindera benzoin) in late March bloom — dense clusters of small yellow flowers coating bare gray-brown branches before any leaves have emerged, growing in the understory of a New Jersey forest"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lindera_benzoin.jpg/960px-Lindera_benzoin.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Common spicebush blooming, Ann M. Banchoff Park, Ewing Township, NJ &middot; Famartin &middot; CC BY-SA 4.0
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Shrubs</div>
        <h1>Spicebush blooms in late March on bare stems — before the forest has leafed out, during the days when the first overwintered queen bumblebees are flying and finding almost nothing open</h1>
        <p className="hero__lead">
          Spicebush (<em>Lindera benzoin</em>) grows in the deep shade of eastern deciduous
          forests, under the canopy of oaks and maples where most garden plants will not grow.
          In March, before the tree canopy has leafed out, spicebush covers its bare gray branches
          in tight clusters of small yellow flowers — hundreds of clusters per shrub, coating
          the previous year&apos;s stems directly at the bark. Each cluster is less than half an inch
          across and holds five to eight individual flowers. On a mature shrub in full bloom,
          every branch tip carries clusters along its length, and the effect from ten feet away
          is a low haze of yellow in the still-brown understory.
        </p>
        <p className="hero__lead">
          The same shrub that blooms in March carries Spicebush Swallowtail caterpillars in
          their silk-sealed leaf tubes in July. By September, it holds clusters of small bright
          red berries that migrating wood thrushes and hermit thrushes eat before flying south.
          One shrub does three distinct things across three seasons, in the shade where most
          of the alternatives do one or none.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="bloom-heading">
          <h2 id="bloom-heading">Tight yellow clusters on bare bark in late March — one of the first native blooms the overwintered queens find</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lindera_benzoin.jpg/960px-Lindera_benzoin.jpg"
              alt="Close view of spicebush (Lindera benzoin) foliage and branches showing the shrub's form in summer — oval leaves and slender stems"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/2023-03-30_13_24_41_Common_spicebush_blooming_in_the_forest_within_Ann_M._Banchoff_Park_in_the_Mountainview_section_of_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg/960px-thumbnail.jpg'
              }}
            />
            <figcaption>
              Spicebush in summer leaf. The oval leaves are 2 to 5 inches long, smooth-edged,
              and release a strong allspice scent when crushed — from the same aromatic oils
              that gave the plant its name. The leaves turn clear yellow in October, briefly
              lighting up shaded corners of the yard before dropping.
              <span className="photo-credit"> Photo: Cody Hough &middot; CC BY-SA 3.0 via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Spicebush blooms between late February and mid-April across its range, depending on
            latitude and the pace of the local spring. The flowers appear on wood that is at least
            one year old — they emerge directly from the bark of previous-season stems, not from new
            growth. This means older, larger shrubs carry more bloom than younger ones: a ten-year-old
            clump in the right conditions is covered in yellow for two to three weeks,
            while a first-year transplant may produce only a few clusters.
          </p>
          <p>
            The bloom coincides with the first warm stretches when queen bumblebees come out of
            winter hibernation. A queen that has spent the winter underground in a shallow soil
            burrow emerges in late February or March, often before the ground has fully thawed.
            She needs nectar and pollen immediately to build the energy for starting a new colony.
            Spicebush, red maple, and silver maple are among the few native plants that provide
            anything at that point. In a yard with no spicebush, those queens forage on whatever
            cultivated spring-blooming plants exist nearby, or die without establishing a colony.
          </p>
          <p>
            Crush a spicebush leaf between two fingers and it smells like allspice or a cross
            between allspice and bay laurel. The aroma comes from aromatic oils in the leaves,
            bark, and berries — the same chemistry that most generalist herbivores, including deer,
            find unappealing. Where deer pressure is heavy enough to strip most native shrubs below
            browse height, spicebush typically holds up better than species without those compounds.
            It is not immune to heavy browsing pressure in severely overbrowsed sites, but it
            is one of the more persistent native understory shrubs in suburban forest fragments.
          </p>
        </section>

        <section aria-labelledby="berries-heading">
          <h2 id="berries-heading">Small red berries in September, high fat content, and a fruiting window that closes before the migrating thrushes leave</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2023-09-17_13_17_24_Common_spicebush_fruit_ripening_within_the_forest_in_Ann_M._Banchoff_Park_in_the_Mountainview_section_of_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg/960px-thumbnail.jpg"
              alt="Clusters of ripe spicebush berries in September — small oval fruits turning bright red against green leaves on branches in a New Jersey forest understory"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lindera_benzoin.jpg/960px-Lindera_benzoin.jpg'
              }}
            />
            <figcaption>
              Spicebush berries in September, Ann M. Banchoff Park, Ewing Township, NJ.
              The berries ripen over two to three weeks, turning from green to red.
              Fat content in spicebush berries runs above 35 percent of dry weight — higher
              than most native fruits — which is why thrushes and vireos consume them
              heavily during fall migration fueling.
              <span className="photo-credit"> Photo: Famartin &middot; CC BY-SA 4.0 via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Spicebush is dioecious: the species has separate male and female plants. Only female
            plants produce berries. A male plant is required nearby for pollination. Native plant
            nurseries often sell plants as &ldquo;spicebush&rdquo; without indicating sex; if you
            plant a single shrub, it may produce no fruit at all depending on whether any
            male plants exist in the surrounding area. For reliable fruiting in a yard,
            plant at least one female and one male within 50 to 100 feet of each other.
            Some nurseries now offer plants sexed at point of sale; others offer multi-stem
            groupings that include both sexes.
          </p>
          <p>
            The berries ripen in September and early October, turning from green to bright red
            over two to three weeks. The fat content is unusually high for a native fruit &mdash;
            studies of spicebush berries have recorded lipid content above 35 percent of dry
            weight. Most native berries used by migrating birds run between 5 and 15 percent fat.
            The difference matters because migratory birds fuel long-distance overnight flights
            by metabolizing fat; a berry source that is 35 percent fat provides more than twice
            the fuel per gram of most alternatives.
          </p>
          <p>
            Wood thrushes, hermit thrushes, veeries, Swainson&apos;s thrushes, gray catbirds, and
            red-eyed vireos consume spicebush berries during fall migration. Wood thrushes that
            breed in eastern forest fragments and move south in October make spicebush one of
            their primary pre-migration fuel sources where it is available. A female shrub with
            a full crop can hold 200 to 400 berries; a passing flock of thrushes can strip half
            of them in a single visit. In sites where deer have suppressed spicebush and the
            fall berry crop is absent, wood thrushes that would otherwise stop to refuel
            must move on without it.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">The leaf tube in July, the bird-dropping disguise in early instars, and the chrysalis on the twig through winter</h2>
          <p>
            The Spicebush Swallowtail (<em>Papilio troilus</em>) lays eggs on spicebush leaves in
            late May and June. The egg hatches after four to seven days, and the early-instar
            caterpillar positions itself on the upper surface of a leaf. The first and second
            instar larvae are dark brown with pale irregular markings, shaped to lie flat —
            a near-exact mimic of a fresh bird dropping on a leaf surface. During these early
            instars, the caterpillar&apos;s camouflage is positional: it only works when the caterpillar
            is sitting still on the upper leaf surface in the right light.
          </p>
          <p>
            After the third molt, the caterpillar turns bright green. At this stage it pulls
            the edges of a leaf toward each other with silk thread, creating a tube sealed along
            the length. The caterpillar rests inside the tube during the day and feeds from the
            outside of adjacent leaves at night. The sealed tube is visible on a spicebush branch
            as a leaf that is folded lengthwise and slightly crimped, unlike the flat unaffected
            leaves around it. Frass accumulates on lower foliage below the tube. An occupied
            shelter has frass below it. An empty one &mdash; from a caterpillar that has completed
            development and moved to pupate elsewhere &mdash; does not.
          </p>
          <p>
            The late-instar caterpillar also carries large false eyespots on swollen thoracic
            segments behind the head. The spots are yellow-green with dark pupils, positioned
            to face outward when the caterpillar peeks from the open end of the shelter.
            When touched, the caterpillar inflates those segments, widening the apparent face,
            and everts a forked orange gland called the osmeterium from behind the head, releasing
            terpene compounds that deter small predators and parasitic wasps. The display lasts
            a few seconds; the gland retracts when the stimulus passes.
          </p>
          <p>
            Summer-generation caterpillars pupate in July and August and eclose in 10 to 14 days.
            The late-summer generation pupates in August and stays as a chrysalis from September
            through April, attached to a twig on the host plant or on a nearby woody stem in the
            leaf litter and low vegetation. The chrysalis overwinters outdoors; it is not frost-sensitive
            in the hardened state. Spring emergence coincides with spicebush bloom, which is when
            both nectar and host-plant foliage become available in the same week.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Spicebush in the shade, male and female for fruit, and a scan of the rolled leaves in July</h2>
          <ol className="step-list">
            <li>
              <strong>Plant spicebush in part shade or full shade, where most native plants fail.</strong>{' '}
              Spicebush (<em>Lindera benzoin</em>) is native across the eastern US and grows under
              the canopy of mature oaks and maples. It thrives in the spots where sun-loving
              coneflowers and black-eyed Susans will not establish. Container-grown plants are
              available at native plant nurseries in spring and fall; fall planting is preferable
              because the roots have time to establish before the first summer. Height at maturity
              is 6 to 12 feet, spread is similar. It does not require irrigation after the first year
              in average moisture conditions.
            </li>
            <li>
              <strong>Buy at least one male and one female to get berries.</strong>{' '}
              Spicebush has separate male and female plants. The female produces the September berries;
              the male provides the pollen. A single shrub planted without a partner of the other sex
              produces no fruit. Ask your native plant nursery which sex their plants are — some
              nurseries label them, others can tell you from the flower bud structure in early spring.
              Alternatively, plant three or more shrubs from the same nursery batch, which typically
              includes both sexes.
            </li>
            <li>
              <strong>In July, walk the branches and look for leaves rolled into a tube and sealed with silk.</strong>{' '}
              That is a Spicebush Swallowtail caterpillar shelter. The rolled leaf is crimped at the
              edges and different from the flat leaves on either side. Frass on lower foliage directly
              below the shelter means the caterpillar fed recently. A shrub with three or four sealed
              leaves is hosting multiple caterpillars in development at the same time. The caterpillars
              inside cause no lasting damage to the shrub — spicebush regrows leaves readily from late
              spring through summer.
            </li>
            <li>
              <strong>Do not spray caterpillar-control products on or near spicebush or nearby sassafras.</strong>{' '}
              Btk, spinosad, and most synthetic insecticides applied to spicebush foliage in late spring
              or summer kill the Spicebush Swallowtail caterpillars inside their leaf shelters.
              Chewed and frass-dusted foliage on a spicebush in July is the normal, expected result
              of the shrub doing what it is there to do. The caterpillars complete development and move
              on; the foliage recovers.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">What shares the spicebush canopy, the fruit, and the shelter across the seasons</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spicebush-swallowtail')}>
                Spicebush Swallowtail
              </button>{' '}
              &mdash; lays eggs on spicebush leaves in late May and June; the caterpillar
              builds a silk-sealed leaf tube and stays inside it during the day from late June
              through August, then overwinters as a chrysalis on a nearby twig through April
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wood-thrush')}>
                Wood Thrush
              </button>{' '}
              &mdash; a declining forest-interior breeder that uses spicebush berries in September
              as pre-migration fuel before moving south; at sites where deer have eliminated
              spicebush from the understory, wood thrushes that once stopped to refuel there
              move on without the stop
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hermit-thrush')}>
                Hermit Thrush
              </button>{' '}
              &mdash; passes through the eastern US in late September and October and feeds
              heavily on spicebush berries where available; the high fat content of the berries
              supports the energy demands of a small thrush flying hundreds of miles overnight
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('gray-catbird')}>
                Gray Catbird
              </button>{' '}
              &mdash; nests in dense shrub tangles close to the ground and often nests within
              or adjacent to spicebush; consumes the berries in September during and after the
              breeding season before moving south in October
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('invasive-plants')}>
                Invasive Plants
              </button>{' '}
              &mdash; shrub honeysuckle, Japanese barberry, and burning bush occupy the same
              shade layer as spicebush in suburban forest edges and outcompete it for space;
              removing them from shaded yard edges creates the conditions a spicebush transplant
              needs to establish
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('serviceberry')}>
                Serviceberry
              </button>{' '}
              &mdash; the other native understory tree that fruits early and feeds migrating birds;
              serviceberry ripens in June, spicebush ripens in September &mdash; the two planted
              together cover fruiting across the entire breeding and migration season
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
