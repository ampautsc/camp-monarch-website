import type { Page } from '../App'

interface RedMapleProps {
  onNavigate: (page: Page) => void
}

export default function RedMaple({ onNavigate }: RedMapleProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Acer_rubrum_flowers.jpg/960px-Acer_rubrum_flowers.jpg"
          alt="Red maple (Acer rubrum) in early spring — dense clusters of small red flowers at every branch node, before any leaves have opened, against a pale sky"
          className="species-hero-image"
          style={{ objectPosition: 'center 55%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Acer_rubrum_2.jpg/960px-Acer_rubrum_2.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Red maple flowers&nbsp;&middot;&nbsp;Wikimedia Commons&nbsp;&middot;&nbsp;Public Domain
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>Red maple opens clusters of small flowers in late February, before a single leaf unfolds — and the bumblebee queen emerging from hibernation that same week can survive less than two hours without food</h1>
        <p className="hero__lead">
          In late February or early March, before any leaf bud has swollen,
          a red maple produces dense clusters of small red flowers at every
          node along its branches. The flowers appear when nighttime temperatures
          still drop below freezing. An American Bumble Bee queen emerges from
          underground hibernation when soil temperature first crosses roughly
          50&deg;F. She burned through her winter fat reserves over the past four
          months and needs carbohydrates within a few hours of waking. In most
          suburban yards across the Midwest and Mid-Atlantic, the red maple is
          the only tree with open flowers that week.
        </p>
        <p className="hero__lead">
          The same tree that runs this February food line carries 285 caterpillar
          species through the summer months. Cecropia Moth, Polyphemus Moth,
          and Luna Moth all use red maple leaves as a larval host. The chickadee
          pair nesting in the yard makes 350 to 570 foraging trips per day during
          the nestling period, and red maple caterpillars are among the protein
          sources those trips draw from. One tree, four seasons of function.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="identification-heading">
          <h2 id="identification-heading">Three-lobed leaves, red petioles all summer, buds you can see from the street in January</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Acer_rubrum_var_trilobum_leaves.jpg/480px-Acer_rubrum_var_trilobum_leaves.jpg"
              alt="Red maple leaves in fall — three-lobed shape with toothed margins and notched sinuses between lobes, attached on a red petiole that is visible all season"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Acer_rubrum_flowers.jpg/480px-Acer_rubrum_flowers.jpg'
              }}
            />
            <figcaption>
              Red maple leaves in fall color. The leaf has three main lobes with
              toothed margins and V-shaped sinuses between them. The red petiole
              &mdash; the stalk connecting leaf to branch &mdash; is visible from
              June through leaf drop and identifies the tree before fall color begins.
              <span className="photo-credit"> Photo: Wikimedia Commons &middot; Public Domain</span>
            </figcaption>
          </figure>
          <p>
            Red maple leaves have three to five lobes with toothed edges and
            notched sinuses between them. The leaf underside is pale, almost
            silvery, and in a breeze the canopy flickers between green and
            silver-white. The petiole &mdash; the stalk attaching the leaf to
            the branch &mdash; is red all season. On a midsummer walk, the
            red petioles visible against green leaves are enough to identify
            the tree before any fall color appears.
          </p>
          <p>
            By late August, individual leaves at branch tips may already show
            orange-red color. By late September, most of the canopy has turned.
            Red maple is among the first deciduous trees to change color in fall,
            and the color varies from tree to tree &mdash; some individuals
            go deep scarlet, some orange, some yellow. The variation is genetic
            and consistent from year to year on the same individual tree.
          </p>
          <p>
            Red maple reaches 50 to 90 feet at maturity in open conditions,
            with a rounded crown 30 to 50 feet wide. Bark on young branches
            is smooth and grayish; mature trunk bark develops shallow furrows
            between flat-faced, scaly plates. In winter, the red buds at branch
            tips are visible from the street as a reddish haze before any other
            sign of growth appears &mdash; sometimes in January in a mild year.
            The buds are the earliest visible evidence that the season is
            turning.
          </p>
        </section>

        <section aria-labelledby="flowers-heading">
          <h2 id="flowers-heading">Flowers three to eight weeks before the leaves — pollen and nectar open when almost nothing else is</h2>
          <p>
            Red maple produces flowers in late February through mid-March across
            most of the Midwest and Mid-Atlantic, with some variation by latitude
            and year-to-year weather. The flowers emerge from buds directly at
            each node, in dense clusters of small red or orange-red blossoms,
            before a single leaf has unfolded. Most trees produce both male and
            female flowers, sometimes on separate branches of the same tree.
            Both provide nectar.
          </p>
          <p>
            An American Bumble Bee queen (<em>Bombus pensylvanicus</em>) winters
            underground as a single mated individual &mdash; the only survivor
            of last year&apos;s colony. She emerges when soil temperature crosses
            roughly 50&deg;F at her hibernation depth, which falls in late
            February through mid-March across the Midwest. She has not eaten
            since October. Her first task is to find carbohydrates to refuel
            before searching for a nest site and beginning to raise her first
            worker brood. If no flowers are open within foraging range when she
            emerges, she may not survive to found a colony.
          </p>
          <p>
            Red maple flowers are the primary early-season carbohydrate source
            available to emerging queens in many suburban yards. Willows and
            silver maple also flower early, but red maple is more widely planted
            and more abundant across the suburban eastern Midwest than either.
            A mature red maple in a yard can produce millions of flowers over a
            three-week window &mdash; pollen and nectar accessible at canopy
            level and at lower branches that overhang fences and lawn edges,
            where queens forage on foot in the cold mornings before their
            flight muscles warm enough for sustained flight.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">Cecropia Moth, Polyphemus Moth, and Luna Moth — three giant silk moths that start on the same canopy in June</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Antheraea_polyphemus.jpg"
              alt="Polyphemus Moth with wings spread — tan and rust-brown wings with a large false-eye spot on each hindwing, a North American native that uses red maple as a larval host"
              loading="lazy"
            />
            <figcaption>
              The Polyphemus Moth develops on red maple leaves through late summer,
              building the fat reserves the non-feeding adult burns over its entire
              week-long life. Cecropia Moth and Luna Moth caterpillars use the same
              tree through the same weeks. All three overwinter as pupae in the leaf
              layer beneath their host tree.
              <span className="photo-credit"> Photo: Mike Boone &middot; <a href="https://commons.wikimedia.org/wiki/File:Antheraea_polyphemus.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a> via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Douglas Tallamy&apos;s research at the University of Delaware documented
            red maple (<em>Acer rubrum</em>) as a larval host plant for 285
            lepidoptera species &mdash; moths and butterflies whose caterpillars
            complete at least part of their development on red maple leaves. Among
            them are three of the largest moths in North America.
          </p>
          <p>
            Cecropia Moth caterpillars (<em>Hyalophora cecropia</em>) feed on red
            maple through July and August, reaching four inches before spinning a
            large silk cocoon on a branch. Polyphemus Moth caterpillars
            (<em>Antheraea polyphemus</em>) develop on red maple alongside
            oaks and birches, turning lime-green before descending to spin their
            cocoon in the leaf litter. Luna Moth caterpillars (<em>Actias luna</em>)
            use red maple alongside walnut and hickory, feeding through summer
            on the same canopy where Cecropia and Polyphemus are simultaneously
            active. All three species pupate in fallen leaves beneath their host
            tree and overwinter there until emerging the following spring.
          </p>
          <p>
            The chickadee pair nesting within half a mile makes 350 to 570
            foraging trips to the nest per day during the 16-day nestling period.
            Each trip brings one or more caterpillars. The caterpillars available
            in May and June come from the native trees within the pair&apos;s
            territory &mdash; and a red maple with an active caterpillar community
            is one of the densest per-acre sources of nestling protein in a
            suburban landscape.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant in the lowest spot in the yard — red maple tolerates standing water that kills most canopy trees</h2>
          <ol className="step-list">
            <li>
              <strong>Source a native red maple from a regional native plant nursery or state
              forestry program.</strong>{' '}
              Verify it is <em>Acer rubrum</em> and not Norway maple
              (<em>Acer platanoides</em>), which is sold under similar names and looks
              similar at a distance but has shallower leaf sinuses and a milky sap
              where the petiole breaks &mdash; cut a petiole and squeeze; clear sap
              is red maple, white milky sap is Norway maple. Norway maple is invasive
              in eastern North America and supports a fraction of the caterpillar
              species that native red maple does.
            </li>
            <li>
              <strong>Plant in full sun to part shade in the lowest available spot.</strong>{' '}
              Red maple is one of the few large canopy trees that tolerates seasonally
              waterlogged soil. A low corner of the yard that stays soggy for two to
              three weeks after heavy rains &mdash; too wet for most other trees &mdash;
              is a viable planting site for red maple. It also grows well in average
              upland soils. Give it at least 20 feet of clearance from structures:
              the crown will need the room within 25 years, and red maple branches
              are more brittle than oak and less likely to survive crowding cleanly.
            </li>
            <li>
              <strong>Leave the leaves under the tree each fall.</strong>{' '}
              Cecropia, Polyphemus, and Luna moth caterpillars all descend from the
              red maple canopy in late summer and spin their overwintering cocoons in
              the leaf litter at the base of the tree. Raking and removing those
              leaves removes the next year&apos;s cohort of giant silk moths along
              with them. An undisturbed ring of leaf litter beneath the drip line
              from October through May preserves all three species simultaneously.
            </li>
            <li>
              <strong>Don&apos;t spray the canopy for caterpillar damage in June and July.</strong>{' '}
              Chewed leaves and frass dropping onto the driveway below a red maple
              in June indicate that caterpillars are present and feeding. A mature
              red maple does not need rescuing from this level of leaf consumption &mdash;
              the tree regrows the foliage, and the caterpillars eating it become
              the moths that return to lay eggs next year and the food that nesting
              birds are harvesting now.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who depends on a red maple across all four seasons</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
              <span className="neighbor-name">American Bumble Bee</span>
              <span className="neighbor-note">the queen emerges from underground hibernation when soil temperature crosses roughly 50&deg;F in late February or March &mdash; she has not eaten since October and can survive only a few hours without carbohydrates; red maple flowers are often the first source available in the yard that week, opening before any other canopy tree has flowered</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('cecropia-moth')}>
              <span className="neighbor-name">Cecropia Moth</span>
              <span className="neighbor-note">North America&apos;s largest moth; caterpillars feed on red maple leaves through July and August, reaching four inches before spinning a large silk cocoon on a branch; the adult emerges the following May, has no functional mouth, and lives only long enough to find a mate &mdash; the fat built on maple leaves is the only fuel for its entire adult life</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('polyphemus-moth')}>
              <span className="neighbor-name">Polyphemus Moth</span>
              <span className="neighbor-note">caterpillars develop on red maple alongside oaks and birches through late summer, building fat reserves the non-feeding adult burns over its entire week-long life; the lime-green caterpillar descends from the maple canopy in August and spins its cocoon in the leaf litter beneath the tree, where it overwinters until emerging the following June</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('luna-moth')}>
              <span className="neighbor-name">Luna Moth</span>
              <span className="neighbor-note">red maple appears on the host-plant list alongside walnut and hickory; Luna caterpillars can share the same maple canopy with Cecropia and Polyphemus caterpillars through the same summer weeks; all three giant silk moths overwinter as pupae in the leaf layer beneath the host tree, and a single undisturbed ring of fall leaves preserves all three simultaneously</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('black-capped-chickadee')}>
              <span className="neighbor-name">Black-capped Chickadee</span>
              <span className="neighbor-note">a nesting pair makes 350 to 570 foraging trips to the nest per day during the 16-day nestling period, bringing caterpillars on almost every trip; 285 caterpillar species in the red maple canopy means the tree is one of the densest per-acre sources of nestling protein in a suburban yard during May and June</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('white-oak')}>
              <span className="neighbor-name">White Oak</span>
              <span className="neighbor-note">the other great native canopy tree in eastern yards &mdash; white oak supports 557 caterpillar species, red maple 285; the two trees overlap on several species including the three giant silk moths, but each also hosts species the other does not; a yard with both trees runs a broader caterpillar community through the same summer weeks than either tree supports alone</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('eastern-gray-squirrel')}>
              <span className="neighbor-name">Eastern Gray Squirrel</span>
              <span className="neighbor-note">collects red maple samaras &mdash; the paired winged seeds that spin to the ground in April and May &mdash; before they germinate; the seeds are small and abundant, an early spring food source after the winter acorn supply is running low; squirrels also use cavities in large red maples for winter denning</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('eastern-screech-owl')}>
              <span className="neighbor-name">Eastern Screech-Owl</span>
              <span className="neighbor-note">nests in natural cavities in large red maples and hunts the insects that emerge from the bark and leaf litter after dark; a yard with a mature red maple, undisturbed leaf litter in fall, and a nest box on a nearby tree provides both the hunting ground and the nesting site the screech-owl needs within a single property</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
