import type { Page } from '../App'

interface WoodFrogProps {
  onNavigate: (page: Page) => void
}

export default function WoodFrog({ onNavigate }: WoodFrogProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Rana_sylvatica.jpg/960px-Rana_sylvatica.jpg"
          alt="Wood Frog on leaf litter — brown with the distinctive dark mask running from eye to jaw, head slightly raised, pale stripe along the upper lip visible"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lithobates_sylvaticus1.jpg/960px-Lithobates_sylvaticus1.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Rasbak&nbsp;·&nbsp;CC BY-SA 3.0 via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Wood Frog</h1>
        <p className="hero__lead">
          In late October, a Wood Frog walks into the leaf litter at the base of a tree.
          Its skin touches the first frost. Ice crystals begin forming in the fluid between
          its skin cells. Within minutes, the frog&apos;s liver releases glucose into its
          bloodstream at 200 times the normal concentration. The glucose moves into
          each cell before ice can form inside.
        </p>
        <p className="hero__lead">
          Over the next 24 hours, roughly 65 percent of the water in the frog&apos;s body
          turns to ice. The heart stops. The lungs stop. No brain activity registers on any
          instrument. The frog lies frozen in the leaf litter through December, January, and
          February. In March, it thaws from the outside in. The heart restarts within hours
          of the surface temperature rising above freezing. Within three days, the frog is
          walking toward the vernal pool where it was born.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="glucose-heading">
          <h2 id="glucose-heading">Glucose in the cells before the ice arrives</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Rana_sylvatica.jpg/480px-Rana_sylvatica.jpg"
              alt="Wood Frog close-up showing the dark robber's-mask marking from eye to behind the jaw — the single field mark that distinguishes this species at a glance"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lithobates_sylvaticus1.jpg/480px-Lithobates_sylvaticus1.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              The Wood Frog is identifiable at a glance by the dark mask extending from the
              eye back behind the jaw — sometimes called a robber&apos;s mask. Color ranges from
              russet to brown to nearly gray depending on the individual and temperature.
              In March it is one of the first frogs moving in the eastern woods, walking
              toward vernal pools sometimes while snow still patches the ground.
              <span className="photo-credit"> Photo: Rasbak&nbsp;·&nbsp;CC BY-SA 3.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Freeze tolerance in vertebrates requires keeping ice outside cells, not inside them.
            Ice forming inside a cell ruptures it. The Wood Frog solves this by flooding cells
            with cryoprotectant before the ice arrives. When the first skin cells freeze — releasing
            a protein signal — the liver begins converting glycogen stores into glucose and releasing
            it into the bloodstream within minutes. Glucose concentration in blood plasma rises from
            roughly 5&nbsp;mmol/L under normal conditions to over 300&nbsp;mmol/L. At that
            concentration, the osmotic pressure inside each cell is high enough to pull water out
            before ice can form within the cell — and the glucose itself depresses the freezing
            point of the cellular fluid.
          </p>
          <p>
            Ice does form — extensively — between cells, in the body cavity, under the skin,
            and in lymphatic spaces. The frog becomes rigid. The eyes go white.
            A frozen Wood Frog dropped on a hard surface makes a sound like a small stone.
            Laboratory measurements confirm its core temperature equilibrates with the ambient
            air within hours.
          </p>
          <p>
            The thaw begins with whatever surface is closest to warming soil or air. Cardiac
            function returns first — the heart resumes beating while peripheral tissue is still
            frozen, pumping warm blood through the body to accelerate the thaw from inside.
            Full recovery to coordinated movement takes 24 to 72 hours depending on temperature.
            A Wood Frog freezes and thaws multiple times in a single winter when temperatures
            oscillate around freezing, and survives each cycle.
          </p>
          <p>
            This mechanism differs from the Spring Peeper&apos;s glucose strategy only in degree —
            the Wood Frog reaches a deeper freeze, with the heart completely stopped rather than
            slowed. It is the most freeze-tolerant vertebrate in North America.
          </p>
        </section>

        <section aria-labelledby="pool-heading">
          <h2 id="pool-heading">One warm rain in March, every adult in the pool within 48 hours</h2>
          <p>
            Wood Frogs breed in an explosive, synchronous event triggered by the first warm rain
            of late winter — typically when nighttime air holds above 40°F and rain falls. On that
            night, every adult Wood Frog in the surrounding quarter mile begins moving toward the
            same vernal pool. The breeding aggregation fills the pool. Egg masses are deposited
            communally — dozens of females laying in the same shallow area — creating a mass the
            size of a basketball or larger. Breeding is complete in three to five days.
          </p>
          <p>
            The call is a series of rapid, raspy clucks that sound specifically like a small flock
            of mallards at close range. A pool with a few dozen calling males produces that
            duck-quacking sound clearly enough to be heard inside a house with windows closed.
            The sound carries 50 to 100 yards in still air. If you hear what sounds like ducks
            from a low wet area in your yard or in nearby woods in late March, and there are no
            ducks, the source is almost certainly Wood Frogs.
          </p>
          <p>
            Vernal pools dry completely each year — typically by June or July across the eastern
            US. This annual drying is not a defect. It is the condition. No predatory fish can
            establish a population in water that disappears every summer. Wood Frog tadpoles
            complete metamorphosis in 45 to 90 days, timed to the pool&apos;s persistence. In
            pools that dry early, tadpole development accelerates. The explosive synchrony of
            the breeding event means the egg mass density itself creates a second advantage —
            predators cannot consume all of them before they hatch.
          </p>
        </section>

        <section aria-labelledby="habitat-heading">
          <h2 id="habitat-heading">Upland forest, vernal pool, and the quarter mile in between</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/31/Garden_bird_bath_Nuthurst_West_Sussex_England_01.jpg"
              alt="A shallow water feature at a woodland edge — still water reflecting surrounding vegetation, fish-free, suitable for amphibian breeding"
              loading="lazy"
            />
            <figcaption>
              Wood Frogs do not need a large pond. They need fish-free water that holds for roughly
              6 to 10 weeks in spring before drying. A low corner of a yard that collects
              snowmelt and rain each March — even one that disappears by June — can function as
              a vernal pool if it stays fishless. The annual dry-down is what keeps fish out
              and makes it usable.
              <span className="photo-credit"> Photo: Acabashi&nbsp;·&nbsp;CC BY-SA 4.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Wood Frogs require two habitats connected by a passable corridor. The upland forest —
            or wooded area with intact leaf litter — is where they spend 9 to 10 months: hunting
            invertebrates from April through September, then overwintering under the leaf layer or
            beside a root mass or fallen log from October through March. The vernal pool — any low
            area that holds fishless water for roughly 6 to 10 weeks in spring — is where they
            breed. These two sites can be 100 feet apart or a quarter mile apart. What matters is
            that the ground between them is crossable.
          </p>
          <p>
            The late-March breeding migration is where the population takes losses. The same warm
            rain that triggers breeding sends every adult frog in the area moving at once — and
            any road that lies between the upland woods and the pool intersects that movement.
            Road-kill surveys during breeding migrations in the eastern US have documented
            localized mortality high enough to suppress populations in areas where roads separate
            overwintering forest from breeding pools. The problem is not the road in the abstract —
            it is the road on that specific night, between those specific two habitats, when every
            frog in the area is crossing.
          </p>
          <p>
            Drainage eliminates the other end of the equation. A property owner who fills
            the low corner of the yard where snowmelt collects each spring removes the breeding
            habitat for every Wood Frog in the surrounding quarter mile. The upland forest remains,
            but frogs traveling to a pool that no longer exists will search, cross more ground,
            and find no site that works.
          </p>
        </section>

        <section aria-labelledby="actions-heading">
          <h2 id="actions-heading">What keeps a Wood Frog population in the neighborhood</h2>
          <ol className="action-list">
            <li>
              <strong>Leave the low wet corner alone.</strong> A low spot in the yard or along the
              property edge that holds water for 6 to 10 weeks each spring before drying up is a
              functioning vernal pool. Filling it, draining it, or grading it eliminates the
              breeding site for every Wood Frog in the surrounding area. If the wet area is
              inconvenient, routing foot traffic around it rather than through it is the most
              effective action.
            </li>
            <li>
              <strong>Leave leaf litter in wooded areas through March.</strong> The Wood Frog
              overwinters in the top 1 to 2 inches of leaf litter — shallowly enough to freeze
              with the surrounding leaves but insulated from lethal temperatures below. A yard
              raked bare in autumn removes the overwintering layer. Leaf litter under trees,
              along borders, and in wooded corners left intact through March is directly usable
              as winter habitat.
            </li>
            <li>
              <strong>No mosquito spray in April near woodland edges.</strong> Wood Frog tadpoles
              are in vernal pools from mid-March through May. Bti products marketed as safe for
              wildlife kill the aquatic invertebrates that tadpoles feed on, and can directly
              affect amphibian larvae at residential application rates. The pool&apos;s window for
              tadpole development is exactly when mosquito spraying begins. Skip applications
              within 100 feet of any standing water in spring.
            </li>
            <li>
              <strong>Leave fallen logs and root masses in wooded areas.</strong> Wood Frogs seek
              the base of a tree, a fallen log, or a root mass as a winter site — the slightly
              elevated position above frozen soil, combined with leaf litter cover, places the
              frog in the shallow freeze zone rather than at lethal ground temperatures. One or
              two undisturbed fallen logs per 1,000 square feet of wooded area provides enough
              overwintering structure to matter.
            </li>
          </ol>
        </section>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who shares the vernal pool — and who shares the leaf litter</h2>
          <ul>
            <li>
              <button className="link-button" onClick={() => onNavigate('spring-peeper')}>
                Northern Spring Peeper
              </button>
              {' — '}Breeds in the same vernal pools but arrives two to four weeks after the
              Wood Frog — the peeper&apos;s high single-note whistle fills the air after the
              duck-quacking of wood frogs has ended. Both need the same fish-free temporary water;
              a pool that produces Wood Frogs in late March is often producing Spring Peepers
              through April and into May.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('gray-tree-frogs')}>
                Eastern Gray Treefrog
              </button>
              {' — '}Also freeze-tolerant — uses glycerol rather than glucose as its cryoprotectant.
              Breeds later in spring, from late May through August, long after the Wood Frog&apos;s
              breeding has ended. The two species overlap in upland forest habitat but occupy
              different positions on the vertical axis: Wood Frogs stay on the ground; Gray
              Treefrogs climb into the canopy.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('toad')}>
                American Toad
              </button>
              {' — '}Uses vernal pools and other still water for breeding in April and May —
              after the Wood Frog is done. American Toads and Wood Frogs share the upland
              foraging habitat for most of the year, both working invertebrates in the leaf
              litter and soil from late spring through early fall.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('fireflies')}>
                Firefly
              </button>
              {' — '}Overwinters as a larva in the leaf litter — the same layer the Wood Frog
              uses for winter dormancy. Autumn raking removes habitat for both simultaneously.
              A yard with intact leaf litter under its trees through March holds the Wood Frog
              in its suspended freeze and the firefly larva in its second year of development,
              in the same patch of ground at the same time.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>
              {' — '}The leaf litter layer the Wood Frog depends on for overwintering is the
              same layer removed by the autumn cleanup routine most homeowners treat as
              responsible yard care.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('water-for-wildlife')}>
                Water for Wildlife
              </button>
              {' — '}How to create and maintain a fishless water feature — the same conditions
              a vernal pool provides by going dry every summer.
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to build habitat for wood frogs and their neighbors?</strong>{' '}
            See what lives in the same leaf litter in{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>
            , understand how a fishless water feature works in{' '}
            <button className="link-button" onClick={() => onNavigate('water-for-wildlife')}>
              Water for Wildlife
            </button>
            , and find the native shrubs and groundcovers that give the upland habitat structure in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
