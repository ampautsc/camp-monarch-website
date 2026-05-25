import type { Page } from '../App'

interface WhiteOakProps {
  onNavigate: (page: Page) => void
}

export default function WhiteOak({ onNavigate }: WhiteOakProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg/960px-Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg"
          alt="The Keeler Oak, a massive white oak in Mansfield Township, New Jersey, photographed in May 2013 — crown spread estimated at 80 feet, trunk diameter over 5 feet, age approximately 600 years"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Quercus-alba-white-oak-hdr-0a.jpg/960px-Quercus-alba-white-oak-hdr-0a.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          The Keeler Oak, Burlington County, NJ &middot; Marty Aligata &middot; CC BY-SA 3.0
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>A female chickadee brings 350 to 570 caterpillars a day to her nest — the oak outside is where most of them come from</h1>
        <p className="hero__lead">
          In late April and early May, a white oak&apos;s expanding buds carry thousands of
          caterpillars on their undersides. Inchworms of more than 200 moth species hang from
          silk threads. Hairstreak butterfly larvae chew the new leaf tissue from inside rolled
          tubes. The branches are not still — chickadees, nuthatches, and vireos move through
          them constantly, searching from twig to twig, returning to the nest with what they find.
        </p>
        <p className="hero__lead">
          Douglas Tallamy&apos;s research at the University of Delaware identified the oak genus
          (<em>Quercus</em>) as supporting 557 caterpillar species &mdash; more than any other
          North American tree genus. A yard without a mature oak is a yard where the caterpillar
          base for nesting birds drops sharply. The nearest oak half a mile away does not
          substitute: a chickadee raising five nestlings covers a territory of 25 to 50 acres,
          and what grows within that territory determines what the nestlings eat.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="identification-heading">
          <h2 id="identification-heading">Rounded lobes without bristle tips — the leaf key that separates white oak from red</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Quercus_alba_leaf_spring.jpg/960px-Quercus_alba_leaf_spring.jpg"
              alt="White oak leaves in spring — pale green lobes with rounded tips, no bristle points, held on a short petiole, photographed against a white background"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg/960px-Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg'
              }}
            />
            <figcaption>
              White oak leaves in spring. Each lobe curves to a smooth arc with no point
              at the tip. Running a finger along the edge of a white oak leaf from tip to
              base produces no snag. The same motion on a red oak leaf catches on a bristle
              at every lobe point.
              <span className="photo-credit"> Photo: Harborsparrow &middot; Public Domain</span>
            </figcaption>
          </figure>
          <p>
            White oak leaves have rounded lobes with no bristle-tipped points at the ends.
            Every lobe curves to a smooth arc. Red oaks &mdash; the other major oak group
            in the eastern US &mdash; carry a small bristle tip at each lobe point. Run a
            fingertip along the leaf edge from tip to base: white oak is smooth the whole
            way, red oak snags at every lobe point. The difference is consistent and testable
            in any season the leaves are present.
          </p>
          <p>
            The bark of a mature white oak is pale grayish-white, forming flat-faced plates
            with shallow furrows between them. From a distance on a gray overcast day, a
            white oak trunk can appear nearly silvery. Red oak bark is darker, with sharper
            ridges and deeper, shinier furrows. Both grow throughout the eastern and central
            United States; both produce acorns. The leaf and bark differences are visible
            year-round and do not require a field guide.
          </p>
          <p>
            White oak reaches 60 to 100 feet tall at maturity, with a crown spread of
            60 to 80 feet &mdash; the spread often equal to or wider than the height.
            A white oak planted as a 1-gallon seedling at 10 years old will reach the
            roofline in 15 to 20 years and its full crown spread in 50 to 75.
            Some specimens in the eastern US exceed 400 years. The Keeler Oak in
            Burlington County, New Jersey, shown above, is estimated at 600 years old and
            carries a crown spread of roughly 80 feet.
          </p>
        </section>

        <section aria-labelledby="acorns-heading">
          <h2 id="acorns-heading">One growing season, low tannins — why white oak acorns fall in October and get eaten the same week</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Quercus_alba_acorn.jpg/960px-Quercus_alba_acorn.jpg"
              alt="Two white oak acorns — short cap covering about one quarter of the nut, oblong shape, pale tan color — on a neutral background"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg/960px-Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg'
              }}
            />
            <figcaption>
              White oak acorns — short cap, oblong nut, pale tan at full ripeness.
              These drop in October and germinate within weeks if not eaten.
              Red oak acorns, by contrast, carry a deeper cap, a shinier surface,
              and complete their development over two growing seasons rather than one.
              <span className="photo-credit"> Photo: Steve Hurst, USDA-NRCS Plants Database &middot; Public Domain</span>
            </figcaption>
          </figure>
          <p>
            Red oak acorns begin growing in spring of one year and finish the following
            fall &mdash; a two-year cycle from pollination to ripe acorn. White oak acorns
            begin and complete their development within a single growing season, dropping
            by October of the same year. The result is a different chemical profile.
            White oak acorns contain roughly 3 to 5 percent tannin by dry weight; red oak
            acorns run 5 to 10 percent. The difference in bitterness is enough that deer,
            squirrels, turkeys, and blue jays eat white oak acorns on the spot when they
            fall and cache red oak acorns for winter storage. White oak acorns cached in
            fall do not keep &mdash; they germinate within weeks of dropping.
          </p>
          <p>
            More than 100 bird species and 36 mammal species use acorns as food in
            North America. Wild turkeys move through woodland edges in October and
            November scratching up acorns from the leaf litter. Wood ducks consume
            them in flooded bottomlands. Blue jays carry acorns one at a time in their
            crop &mdash; each bird can cache 2,000 to 5,000 acorns per fall, planting
            oaks across a half-mile radius. White-tailed deer shift their movement
            patterns in October to follow the white oak mast crop, sometimes covering
            twice their normal daily range when the acorns are down.
          </p>
          <p>
            A mature white oak in a productive year drops several thousand acorns within
            a 30- to 50-foot radius of the trunk. The ground beneath the tree in October
            becomes the most concentrated food source in the yard. Squirrels that have
            been eating birdseed all summer stop coming to the feeder and eat acorns
            instead, sometimes for weeks at a time.
          </p>
        </section>

        <section aria-labelledby="caterpillars-heading">
          <h2 id="caterpillars-heading">Juvenal&apos;s Duskywing and 556 other caterpillar species that need this tree to complete their life cycle</h2>
          <p>
            <button className="link-button" onClick={() => onNavigate('juvenals-duskywing')}>
              Juvenal&apos;s Duskywing
            </button>{' '}
            (<em>Erynnis juvenalis</em>) is a small brown skipper
            butterfly whose caterpillars feed almost exclusively on oak leaves. In the
            eastern US, a Duskywing caterpillar rolls a white oak leaf into a tube, anchors
            it at the base with silk, and eats from inside while retreating into the tube
            when disturbed. The species overwinters as a larva inside this rolled leaf. A
            yard that rakes every leaf from beneath an oak in November removes that
            overwintering site and eliminates the Duskywing cohort that hatched there.
          </p>
          <p>
            Juvenal&apos;s Duskywing is one example from the 557 Lepidoptera species &mdash;
            moths and butterflies &mdash; that Tallamy&apos;s lab documented using the oak genus
            as a larval host plant. The giant silk moths are among them: cecropia moth
            caterpillars reach 4 inches by September on white oak leaves, polyphemus moth
            caterpillars turn lime green before pupating in the leaf litter below, luna moth
            larvae feed on white oak through August. Hundreds of small moths &mdash; geometrids,
            noctuids, tortricids &mdash; complete their larval stage on white oak without
            producing any visible damage to the tree. The tree feeds them. They feed the birds.
          </p>
          <p>
            The path from oak leaf to bird nest runs through caterpillar. A female
            black-capped chickadee and her mate make 350 to 570 foraging trips per day
            during the 16-day nestling period, bringing caterpillars each time. The chickadee
            cannot substitute seeds or berries for nestling protein &mdash; the nestlings require
            insect protein specifically, and caterpillars are the most calorie-dense and
            abundant insect available in spring. If the oak is there, the caterpillars are
            there. If the oak is not there, neither are the caterpillars.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>One white oak, planted this spring, still feeding birds in 2075</h2>
          <ol className="step-list">
            <li>
              <strong>Order a white oak seedling from a native plant nursery or state forestry
              program.</strong>{' '}
              Plant a 1-gallon or bareroot seedling rather than a large balled-and-burlapped
              specimen. A small white oak spends its first few years building root mass; by
              year 5 it outpaces a larger transplanted tree in height and doesn&apos;t carry
              transplant shock. State forestry programs sell white oak seedlings in bundles of
              10 to 25 at cost &mdash; typically $1 to $3 each. Plant in spring, after last
              frost and before June, to give the root system a full growing season before winter.
            </li>
            <li>
              <strong>Plant in full sun, well-drained soil.</strong>{' '}
              White oak does not tolerate waterlogged ground. A lawn area that dries between
              rains is the right site. Give the tree at least 20 feet of clearance from
              structures in each direction &mdash; the crown will eventually need it. A tree
              planted 15 feet from a wall will have one side of its crown removed by crowding
              within 30 years.
            </li>
            <li>
              <strong>Protect against deer browse for the first three to four years.</strong>{' '}
              A wire cage 4 to 5 feet tall around the seedling, or a plastic tree tube
              anchored to a stake, keeps the terminal leader intact while the trunk thickens.
              Deer browse white oak leading shoots repeatedly if given access &mdash; the tree
              survives but may spend years producing side growth instead of height while the
              main stem regrows.
            </li>
            <li>
              <strong>Leave the leaves under the tree each fall.</strong>{' '}
              Juvenal&apos;s Duskywing overwinters as a larva in a rolled oak leaf on the
              ground. The caterpillars of hundreds of other moth species pupate in the leaf
              layer beneath oak trees. Raking this layer away and removing it removes the
              following year&apos;s caterpillar population along with it.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who depends on a white oak across all four seasons</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('black-capped-chickadee')}>
                Black-capped Chickadee
              </button>{' '}
              &mdash; arrives at the oak the week new leaves expand in April; the pair&apos;s
              350 to 570 daily caterpillar trips to the nest draw almost entirely from
              oak-feeding moth larvae during the May nestling window
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('juvenals-duskywing')}>
                Juvenal&apos;s Duskywing
              </button>{' '}
              &mdash; a spring skipper whose caterpillars roll white oak leaves into silk
              tubes from May through summer and overwinter as larvae inside fallen rolled
              leaves; raking the leaf layer beneath the oak removes the overwintering cohort
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cecropia-moth')}>
                Cecropia Moth
              </button>{' '}
              &mdash; one of North America&apos;s largest moths; caterpillars feed on white
              oak through late summer, reaching 4 inches before spinning a silk cocoon on
              a branch; the oak is the host plant that makes the adult moth&apos;s single
              reproductive flight possible
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('polyphemus-moth')}>
                Polyphemus Moth
              </button>{' '}
              &mdash; lime-green caterpillars feed on oak leaves through August and
              pupate in the leaf litter at the base of the tree; removing that leaf layer
              in fall removes the cocoons before they emerge the following May
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('luna-moth')}>
                Luna Moth
              </button>{' '}
              &mdash; pale green caterpillars consume white oak foliage through summer;
              two generations per year in the south, one in the north; both pupate in
              leaf litter directly below the host tree
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-turkey')}>
                Wild Turkey
              </button>{' '}
              &mdash; moves through yards with white oaks in October and November,
              scratching leaf litter aside to reach acorns; a flock of six turkeys
              can consume most of the acorn drop from a mature tree within two weeks
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-gray-squirrel')}>
                Eastern Gray Squirrel
              </button>{' '}
              &mdash; buries white oak acorns individually in the soil at depths of roughly
              2 centimeters, up to a half mile from the source tree, at a rate of roughly
              10,000 separate caches per squirrel per fall; the approximately 25 percent
              never retrieved become oak seedlings in fence rows, lawn edges, and neighbor
              yards &mdash; the oaks growing at property edges across eastern suburbs arrived
              there in a squirrel cache
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-screech-owl')}>
                Eastern Screech-Owl
              </button>{' '}
              &mdash; nests in natural cavities in large oaks and hunts the insects
              that emerge from the bark and leaf litter at night; a yard with a
              mature white oak and a nest box provides both the food source and the
              nesting site
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hackberry')}>
                Hackberry
              </button>{' '}
              &mdash; the other large native canopy tree that combines caterpillar
              biomass with persistent fall fruit; hackberry and white oak together
              cover more than 500 caterpillar species between them and both produce
              food that carries wildlife from late fall into winter
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
