import type { Page } from '../App'

interface EasternPhoebeProps {
  onNavigate: (page: Page) => void
}

export default function EasternPhoebe({ onNavigate }: EasternPhoebeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Eastern_Phoebe-27527-2.jpg/960px-Eastern_Phoebe-27527-2.jpg"
          alt="Eastern Phoebe perched on a thin branch — gray-brown back, off-white underparts, rounded dark head, no eye ring or wing bars, pumping its tail slowly downward in the characteristic resting posture of the species"
          className="species-hero-image"
          style={{ objectPosition: 'center 30%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sayornis_phoebe_-USA-8.jpg/960px-Sayornis_phoebe_-USA-8.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: PEHart&nbsp;&middot;&nbsp;CC BY-SA 2.0 via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Phoebe</h1>
        <p className="hero__lead">
          In late March, a gray-brown bird the size of a sparrow lands on the top rung of the
          back fence and sits there pumping its tail slowly downward. It does this eight or ten
          times in a row, then launches out, snaps at something invisible six feet above the
          grass, and returns to exactly the same rung. Thirty seconds later it does it again.
          This is an Eastern Phoebe hunting.
        </p>
        <p className="hero__lead">
          <em>Sayornis phoebe</em> arrives in the Northeast in late February and early March,
          weeks before most migrants, and stays through October. It eats nothing but insects.
          Every meal requires a short flight from a perch to intercept a flying insect mid-air,
          then a return to a perch to swallow and scan again. The fence post is not where the
          phoebe rests between activities. It is the instrument around which the bird&apos;s
          entire foraging geometry is built.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="perch-heading">
          <h2 id="perch-heading">Perch height, sight line, and the half-second launch window</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sayornis_phoebe_-USA-8.jpg/960px-Sayornis_phoebe_-USA-8.jpg"
              alt="Eastern Phoebe sitting on a small branch against a blurred background — showing the upright alert posture of the bird scanning for flying insects between sallying flights"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Eastern_Phoebe-27527-2.jpg/960px-Eastern_Phoebe-27527-2.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              Between flights the phoebe sits upright on its perch, scanning the airspace within
              15 to 20 feet. The tail pump — a slow downward bob repeated while the bird is
              still — is the behavior that identifies the species at a glance, even from across
              a yard.
              <span className="photo-credit"> Photo: Wikimedia Commons / CC BY-SA 2.0</span>
            </figcaption>
          </figure>
          <p>
            An Eastern Phoebe hunts from perches between 3 and 15 feet off the ground, with most
            foraging happening from perches 4 to 8 feet high. From that height it can see the
            airspace from ground level up to 20 feet above and detect the movement of beetles,
            flies, wasps, and small moths crossing the open space in front of the perch. When
            one appears, the bird launches forward and down in a short arc, snaps it at the
            point of intercept, and returns — often to the same branch it left. The whole flight
            takes less than two seconds.
          </p>
          <p>
            The perch position matters because the phoebe times its launch against the predicted
            trajectory of the insect. A perch too high gives the bird only a downward angle and
            requires it to cross more open air before the intercept point. A perch too low gives
            it a poor sight line into the airspace above. A fence post or low snag at 4 to 6 feet,
            with open air in front of it and shrubby vegetation 10 to 15 feet behind, gives the
            phoebe the geometry it needs: good forward visibility, a clear launch path, and a
            background structure where insects concentrate near foliage edges.
          </p>
          <p>
            Phoebes will use the same perch dozens of times per hour during active foraging. They
            are not searching for a new spot after each catch. They are returning to a location
            that has already proven productive — a specific post, a branch over a gap in the
            shrubs, the corner of a deck rail at the right height — and using it as a base of
            operations until the prey density drops or the light changes.
          </p>
        </section>

        <section aria-labelledby="nest-heading">
          <h2 id="nest-heading">Mud, moss, and the ledge under your porch</h2>
          <p>
            Eastern Phoebes nest on horizontal ledges with overhead cover. The nest is a cup of
            mud pellets, moss, plant fibers, and hair pressed onto a narrow shelf — a window
            ledge, a beam under a bridge, a bracket on a barn wall, the back corner where a
            porch rafter meets the fascia board. The overhead structure keeps the nest dry. The
            horizontal surface holds the mud base in place while it sets.
          </p>
          <p>
            The female constructs the nest alone over 6 to 10 days. She carries wet mud from the
            ground in her beak, presses it against the surface, and adds moss and plant fibers
            into each layer before it dries. The finished nest is a dense half-cup roughly 4
            inches across, plastered firmly enough to survive the season. She lays 4 to 5 white
            eggs and incubates them for 15 to 17 days.
          </p>
          <p>
            Phoebes raise two broods per year. After the first brood fledges, the female often
            builds a new nest on the same structure within a few yards of the first, or refurbishes
            the first nest with a fresh mud lining. Pairs that bred successfully at a site return
            to it the following spring. A nest bracket on a garage wall or the underside of a
            porch step that hosts phoebes one year will attract them again the next — not because
            the birds remember the bracket, but because adults preferentially return to sites
            where they fledged young the previous season.
          </p>
          <p>
            A simple nest shelf — a board roughly 6 inches wide and 6 inches deep, mounted flush
            under an eave at 8 to 12 feet — provides the same conditions a bridge rafter or barn
            beam offers. The requirement is: horizontal surface, overhead protection from rain,
            and proximity to the open foraging area where the birds hunt. Phoebes do not use
            enclosed nest boxes. The structure must be open.
          </p>
        </section>

        <section aria-labelledby="diet-heading">
          <h2 id="diet-heading">No seeds, no berries, 100 aerial intercepts per day</h2>
          <p>
            An Eastern Phoebe&apos;s diet is 90 to 95 percent insects, with the balance made up
            of spiders and, rarely in late fall, small berries from native shrubs. The insects it
            catches are airborne: flies, beetles, wasps, moths, dragonflies, and leafhoppers
            intercepted mid-flight. It does not glean insects from leaves or scratch in leaf
            litter. Everything it eats was caught moving through the air.
          </p>
          <p>
            Studies of phoebe foraging in mixed-habitat yards document between 60 and 120 aerial
            sallies per hour during active foraging periods in mid-morning and late afternoon.
            Each sortie produces a catch or a miss. A phoebe feeding nestlings or poults launches
            from its perch, returns, feeds a nestling, and launches again on a cycle of roughly
            30 to 60 seconds. Over a feeding day of 12 to 14 hours, a single pair with a brood
            of four removes several hundred insects from the local airspace.
          </p>
          <p>
            The insects available to a phoebe are not randomly distributed across the yard. They
            concentrate along vegetation edges — the line where open air meets a shrub face, the
            gap between two shrub masses, the edge of a hedge — where the thermal gradient and
            the plant surface attract aphids, leafhoppers, and flies that in turn attract larger
            aerial predators. A phoebe perch positioned to face one of these edges, at the right
            height to intercept traffic crossing the gap, gets more encounters per hour than a
            post in the middle of a mown lawn. The insects have to be there before the perch
            matters.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three conditions Eastern Phoebes use from a yard</h2>

          <figure className="species-content-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Eastern_Phoebe-27527-2.jpg/960px-Eastern_Phoebe-27527-2.jpg"
              alt="Eastern Phoebe on a perch with a caught insect in its beak, showing the bird returning to its hunting branch after a successful sally flight"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sayornis_phoebe_-USA-8.jpg/960px-Sayornis_phoebe_-USA-8.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              The phoebe returns to the same perch after each catch. A single fence post or
              low snag used all morning by a breeding pair represents dozens of insects removed
              from the yard before 10 a.m.
              <span className="photo-credit"> Photo: PEHart / CC BY-SA 2.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Keep low open perches at the shrubby edges of the yard.</strong>{' '}
              An Eastern Phoebe needs a perch between 4 and 8 feet high, in an open position,
              facing the gap where insects cross between shrub masses or from lawn to shrub edge.
              A fence post, a low dead branch left on a shrub, the top of a garden stake, or a
              simple horizontal dowel mounted on a post all work. The perch needs to face open
              air, not dense foliage. Removing every dead branch and low stub in the name of
              tidiness removes the hunting infrastructure the phoebe depends on. See how the same
              edge structure supports other species at{' '}
              <button className="link-button" onClick={() => onNavigate('species-gallery')}>
                Species Gallery
              </button>
              .
            </li>
            <li>
              <strong>Mount a nest shelf under an eave, overhang, or porch fascia.</strong>{' '}
              A piece of untreated lumber 6&times;6 inches, screwed flush against the wall under
              a horizontal overhang at 8 to 12 feet, is all a phoebe needs to nest on a
              structure. Place it at least 5 feet from the ground (predator access), under an
              overhang deep enough to keep rain off the shelf face, and within 100 feet of an
              open foraging area. Do not paint or treat the shelf surface — the mud nest adheres
              to raw wood better than a sealed surface. Once a pair nests there, they will
              return to that site for years.
            </li>
            <li>
              <strong>Plant native shrubs and flowering plants that support flying insect populations.</strong>{' '}
              Phoebes eat flying insects, and those insects are not produced by a mown lawn.
              Native shrubs that host moth and butterfly caterpillars — which themselves pupate
              and emerge as adults — and native flowering plants that sustain native bee and fly
              populations give the phoebe a richer prey pool to intercept. Native oaks, willows,
              and cherries support the highest caterpillar densities of any plants in the eastern
              yard. Find what grows in your hardiness zone at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
          </ol>
        </div>

        <section aria-labelledby="id-heading">
          <h2 id="id-heading">The tail pump, the call, and why it arrives before the leaves</h2>
          <p>
            An Eastern Phoebe is gray-brown above and off-white below with a dark rounded head.
            It has no eye ring, no wing bars, and no yellow on the underparts. The tail pump —
            a slow downward bob repeated continuously while the bird is perched — is the
            quickest identification cue. No other common backyard bird in the eastern U.S. pumps
            its tail with this frequency and this pattern while sitting still.
          </p>
          <p>
            The male&apos;s song is a sharp two-note phrase — &ldquo;fee-bee&rdquo; — with the
            second note lower and slightly buzzy. He sings this from perches throughout the
            breeding season, beginning the day he arrives. In a neighborhood with oaks and
            shrubby edges, the phoebe&apos;s song is often audible from early March, which is
            why it is associated with the first reliable warmth of spring rather than with the
            general arrival of migrants in May.
          </p>
          <p>
            Phoebes arrive before the leaves come out because they do not wait for foliage.
            They need flying insects, and flying insects are active on warm days in March in
            much of the East, long before caterpillars and the peak of the insect season. A
            phoebe arriving in the first week of March is doing so because the prey it needs —
            small flies, early beetles — is already present on days above 50 degrees. The same
            yard that holds a phoebe in March and April will hold a breeding pair from May
            through September if it has a nest site and enough insect density in the air
            above its shrubby edges.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The phoebe hunts the same airspace that other species depend on from below.</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('chimney-swift')}>
              Chimney Swifts
            </button>
            {' '}and{' '}
            <button className="link-button" onClick={() => onNavigate('purple-martin')}>
              Purple Martins
            </button>
            {' '}work the airspace 30 to 200 feet up. The phoebe works the layer from ground
            level to 20 feet, catching prey the swifts and martins fly above. The{' '}
            <button className="link-button" onClick={() => onNavigate('ruby-throated-hummingbird')}>
              Ruby-throated Hummingbird
            </button>
            {' '}also eats small flying insects caught near flower faces — a different technique
            from the same insect pool. What all three need is the same thing: a yard with enough
            native plant cover to produce the flying insect population that fills three separate
            altitude bands at once. See the full picture of how a yard&apos;s insect life
            supports the species that need it at{' '}
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
