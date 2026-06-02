import type { Page } from '../App'

interface BlackWalnutProps {
  onNavigate: (page: Page) => void
}

export default function BlackWalnut({ onNavigate }: BlackWalnutProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Juglans_nigra_14zz.jpg/960px-Juglans_nigra_14zz.jpg"
          alt="Black walnut tree (Juglans nigra) with compound pinnate leaves — up to 23 leaflets on a single arching leaf, the bark deeply furrowed in dark gray-brown ridges"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Juglans_nigra_kz.jpg/960px-Juglans_nigra_kz.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Walter Siegmund&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Juglans_nigra_14zz.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>Black Walnut</h1>
        <p className="hero__lead">
          In July, a bright green caterpillar three inches long — each segment ringed in pale yellow —
          feeds on black walnut leaves in the canopy overhead. It is a Luna Moth larva.
          The adult it becomes will emerge next May with no mouth. It cannot eat.
          The fat reserves stored during six weeks of feeding on these leaves are the only fuel
          for seven days of pheromone navigation, bat evasion, and mating.
        </p>
        <p className="hero__lead">
          Black walnut produces juglone — a compound that inhibits tomatoes, blueberries, and rhododendrons
          within 50 to 80 feet of the trunk. The native plants that grew alongside this tree in the same
          woodlands for thousands of years grow through the juglone zone without decline.
          The tree that kills the vegetable garden, planted in the far corner of the yard away from
          sensitive plants, becomes one of the highest-value caterpillar host trees in eastern North America.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="juglone-heading">
          <h2 id="juglone-heading">Juglone in the root zone — which plants die, which don't, and how far it reaches</h2>
          <p>
            Black walnut (<em>Juglans nigra</em>) synthesizes juglone — 5-hydroxy-1,4-naphthoquinone —
            in its roots, leaves, hull, and bark. The compound leaches into the soil within the root zone,
            which extends well beyond the canopy drip line, and blocks cellular respiration in
            sensitive plants by interfering with the electron transport chain.
            The first symptom in susceptible species is sudden wilting; yellowing and death follow
            within days to weeks.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Juglans_nigra_nuts_crop.jpg/480px-Juglans_nigra_nuts_crop.jpg"
              alt="Black walnut nuts in their green hulls on the branch — the hull turns black as it falls and stains any surface it contacts permanently brown-black from juglone"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Juglans_nigra_14zz.jpg/480px-Juglans_nigra_14zz.jpg'
              }}
            />
            <figcaption>
              Black walnut nuts in late summer. The outer green hull turns black as the nut falls,
              staining driveways, walkways, and skin a deep brown-black that does not wash out.
              The hull is the visible source of most complaints about this tree. The nut inside
              is edible, with a richly flavored kernel that Eastern Gray Squirrels cache
              across the yard from September through December.
              <span className="photo-credit"> Photo: Wikimedia Commons&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Juglans_nigra_nuts_crop.jpg" target="_blank" rel="noopener noreferrer">Public domain</a></span>
            </figcaption>
          </figure>

          <p>
            Tomatoes are the most commonly affected garden crop. Peppers, potatoes, and blueberries
            are also sensitive. Among ornamentals: rhododendrons, azaleas, mountain laurel, and lilacs
            decline near black walnut. The practical buffer is 50 to 80 feet between the trunk
            and any known sensitive species — a distance that accounts for root zone spread and
            juglone's persistence in the soil after roots are removed.
          </p>
          <p>
            Native woodland plants tolerate juglone without decline. Wild columbine, wild ginger,
            ferns, native asters, goldenrod, and most spring ephemerals grow naturally within
            the range of black walnut. A planting of native understory species beneath and around
            a black walnut functions as it would in a woodland edge, with no adjustments needed.
            The incompatibility is between black walnut and plants that did not co-evolve in
            the same forest system.
          </p>
        </section>

        <section aria-labelledby="caterpillars-heading">
          <h2 id="caterpillars-heading">Luna Moth, Cecropia Moth, and Polyphemus Moth caterpillars in the same canopy through the same summer</h2>
          <p>
            Luna Moth females lay eggs on black walnut leaves in late May and early June.
            The caterpillar hatches, feeds through five instars over four to six weeks,
            and reaches three inches long — bright green, each segment ringed in pale yellow,
            with small red-orange spines. When ready to pupate, it descends to the leaf litter
            below the tree, spins a thin papery cocoon among the fallen leaves, and overwinters there
            as a pupa. The adult emerges the following May.
          </p>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Actias_luna_4th_instar_sjh.JPG"
              alt="Luna Moth caterpillar in its fourth instar — bright green with yellow-tipped spines, found feeding on black walnut and hickory leaves from late May through July"
              loading="lazy"
            />
            <figcaption>
              Luna Moth caterpillar in its fourth instar. It feeds on black walnut, hickory, sweetgum,
              and persimmon leaves over six weeks before descending to spin a papery cocoon in the
              leaf litter below the tree. The adult that emerges the following May has no functional
              mouth. Every calorie for its seven days of flight and mating was built in this form.
              <span className="photo-credit"> Photo: Kugamazog&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Actias_luna_4th_instar_sjh.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Cecropia Moth — North America's largest moth, with wingspans reaching five and a half
            inches — also uses black walnut as a larval host, alongside elderberry, wild black cherry,
            and maple. The Cecropia caterpillar reaches four and a half inches at maturity, with rows
            of blue, yellow, and red nodules along its segments, and spins a large silk cocoon
            attached to a branch. It overwinters in the cocoon, fully exposed.
          </p>
          <p>
            Polyphemus Moth uses walnut alongside oak, maple, and hickory. All three of these
            giant silk moths emerge as adults that cannot eat. The fat reserves that power their
            entire adult life — flight, pheromone navigation, mating — come from leaves consumed
            on this tree. A single mature black walnut in a suburban yard carries resident
            populations of all three species through most summers.
          </p>
        </section>

        <section aria-labelledby="wildlife-heading">
          <h2 id="wildlife-heading">Eastern Gray Squirrels cache walnuts 300 feet from the trunk — the fraction they don't retrieve germinates in spring</h2>
          <p>
            Eastern Gray Squirrels are black walnut's primary seed dispersers.
            They cache individual nuts in fall — burying them several inches deep in soil,
            often 100 to 300 feet from the parent tree — and locate most of them through winter
            by scent. The fraction they fail to retrieve germinates the following spring.
            Over decades, a single mature black walnut produces offspring scattered through
            a neighborhood entirely through squirrel memory failure.
          </p>
          <p>
            Eastern Wild Turkey takes fallen walnuts when hulls crack open after hitting the ground.
            Wood Duck also consumes walnuts in areas where trees overhang water.
            White-tailed deer browse black walnut seedlings in areas with high deer pressure,
            which suppresses regeneration in the understory — mature trees produce all the mast,
            with little recruitment below.
          </p>
          <p>
            The hull staining is a common objection to planting black walnut near driveways or
            walkways. The juglone in the green hull oxidizes to a dark brown-black on contact
            with concrete, stone, or skin. It does not wash out. Planted at the far edge of
            a yard, away from hardscaping, the staining issue disappears.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant one in the far corner — 50 feet from the garden, leave the debris, don't spray the canopy in July</h2>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/25/Fallen_leaves.jpg"
              alt="Autumn leaf litter on garden ground — Luna Moth and Cecropia Moth pupae overwinter in this layer beneath black walnut; raking removes the generation that emerges next May"
              loading="lazy"
            />
            <figcaption>
              Luna Moth pupae overwinter in fallen leaves on the ground below the host tree.
              An undisturbed circle of leaf litter beneath the black walnut from October through May
              is sufficient to protect the overwintering generation. The moths that emerge from
              the ground in April and May are the return on that one act.
              <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;<a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Plant a sapling at least 50 feet from vegetable beds and sensitive ornamentals.</strong>{' '}
              A black walnut placed in the far corner of the yard — beyond the tomatoes, blueberries,
              rhododendrons — does not create the incompatibility problems that give it a bad reputation.
              Native understory plants grow freely in the root zone. Find nurseries carrying native
              trees with{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Leave the fallen hulls and nut debris under the tree from September through March.</strong>{' '}
              Eastern Gray Squirrels work the mast layer through winter, finding cached nuts by scent.
              Raking and removing this material removes the food cache. It also removes the insulating
              debris layer above overwintering Luna Moth and Cecropia Moth cocoons, which overwinter
              just below the surface in the leaf litter.
            </li>
            <li>
              <strong>Stop caterpillar-control sprays on the canopy from May through September.</strong>{' '}
              Bt formulations, pyrethrin, and broad-spectrum insecticides applied to black walnut
              foliage in summer kill Luna Moth, Cecropia Moth, and Polyphemus Moth caterpillars.
              A large green caterpillar feeding on walnut leaves in July is building the fat reserves
              that will power a moth's entire adult life next spring. It will not harm the tree.
            </li>
            <li>
              <strong>Leave leaf litter undisturbed under the canopy from October through May.</strong>{' '}
              Luna Moth and Cecropia Moth pupae overwinter in fallen leaves below their host trees.
              An unraked, unmulched circle under the walnut canopy from leaf fall through spring
              protects the overwintering generation. The moths that emerge from the ground in April
              are the return on leaving that ground alone.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">Thirty percent of Luna Moths navigating toward a porch light never reach a mate — what the leaf litter below this tree changes</h2>
          <p>
            A female Luna Moth deposits her eggs in clusters of four or five on black walnut leaves
            on a warm May night. The caterpillar that hatches spends the next six weeks feeding on
            those leaves, building reserves for an adult life it cannot extend.
            When the adult emerges the following spring, it has seven to ten days.
          </p>
          <p>
            Luna Moths are drawn to artificial light — porch lights, streetlamps, lit windows.
            A male that circles a light source loses fat reserves he cannot replace.
            In densely lit suburbs, a measurable fraction of emerging males exhaust themselves
            before they reach a female. Turning off or redirecting outdoor lights during May and June
            removes a barrier during the only window that matters for that generation.
          </p>
          <p>
            The leaf litter below this tree in October holds cocoons. The black walnut nuts
            cached 200 feet away feed squirrels through February. The caterpillar that descends
            from the canopy in August and pupates in the litter is the same moth that navigates
            toward pheromones on a May night next year, provided the leaves were left.
          </p>
        </section>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('luna-moth')}>
            <span className="neighbor-name">Luna Moth</span>
            <span className="neighbor-note">Black walnut is the primary larval host for Luna Moth across the eastern half of North America — caterpillars feed on walnut leaves from late May through July, overwinter as pupae in the leaf litter below the tree, and emerge as non-feeding adults the following May; the fat built on these leaves is the only fuel for the adult's entire seven-day life</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cecropia-moth')}>
            <span className="neighbor-name">Cecropia Moth</span>
            <span className="neighbor-note">North America's largest moth uses black walnut as a larval host alongside elderberry and wild black cherry — the caterpillar reaches four and a half inches before spinning a large silk cocoon attached to a branch; Cecropia and Luna can develop on the same black walnut in the same yard through the same summer season</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('polyphemus-moth')}>
            <span className="neighbor-name">Polyphemus Moth</span>
            <span className="neighbor-note">Uses black walnut alongside oak, maple, and hickory — all three giant silk moths (Luna, Cecropia, Polyphemus) are non-feeding as adults, overwinter as pupae in leaf litter below their host trees, and are drawn to artificial light as adults; undisturbed leaf litter protects all three species through winter</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-gray-squirrel')}>
            <span className="neighbor-name">Eastern Gray Squirrel</span>
            <span className="neighbor-note">The primary seed disperser for black walnut — squirrels cache individual nuts up to 300 feet from the parent tree in fall, recover most through winter by scent, and the fraction left uncached germinates in spring; the squirrel's imperfect memory is the mechanism by which black walnut regenerates across a neighborhood</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('white-oak')}>
            <span className="neighbor-name">White Oak</span>
            <span className="neighbor-note">Shares the canopy mast-producer role in the same woodland system — white oak supports hundreds of caterpillar species alongside the silk moths that develop on black walnut; a yard with both species carries a wider food web than either provides alone</span>
          </button>
        </div>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>One black walnut in the far corner hosts three species of giant silk moths and feeds squirrels through winter.</strong>{' '}
            See the full Luna Moth life cycle on the{' '}
            <button className="link-button" onClick={() => onNavigate('luna-moth')}>
              Luna Moth page
            </button>
            , learn why leaf litter protects overwintering pupae in{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>
            , and find a native nursery with{' '}
            <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
              Find Plants Near Me
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
