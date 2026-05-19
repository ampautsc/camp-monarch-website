import type { Page } from '../App'

interface AmericanTreeSparrowProps {
  onNavigate: (page: Page) => void
}

export default function AmericanTreeSparrow({ onNavigate }: AmericanTreeSparrowProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Spizelloides_arborea_CT1.jpg/960px-Spizelloides_arborea_CT1.jpg"
          alt="American Tree Sparrow perched on a snow-dusted branch, showing the rufous crown, gray face, single dark central breast spot, and the two-tone bill — dark gray above, bright yellow below"
          className="species-hero-image"
          style={{ objectPosition: 'center 35%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/4/41/American_Tree_Sparrow_%28Spizelloides_arborea%29_%2811946049565%29.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Cephas&nbsp;&middot;&nbsp;
          <a href="https://commons.wikimedia.org/wiki/Spizelloides_arborea" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>The American Tree Sparrow arrives from subarctic nesting grounds in October, carries a bi-colored bill — dark above, yellow below — that no other small sparrow at a winter feeder has, and spends four months pulling seeds from the standing Little Bluestem stalks and dried goldenrod heads cut down in November.</h1>
        <p className="hero__lead">
          <em>Spizelloides arborea</em> travels in loose flocks of 10 to 40 birds that arrive in the
          northern United States in late October and depart again in March or April. The birds
          that spent last July nesting on the Alaskan tundra — on the ground, tucked under a
          dwarf birch — are the same birds scratching through a dried switchgrass clump in an
          Ohio yard in January.
        </p>
        <p className="hero__lead">
          The population runs around 20 million birds. Since 1966, that number has dropped by
          roughly 53 percent. The bird is still common enough to appear at winter feeders across
          the entire northern half of the country. It is declining on its breeding grounds faster
          than most people realize.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="bill-heading">
          <h2 id="bill-heading">Rufous cap, gray face, single breast spot — and the bill that splits in two colors at the tip</h2>
          <p>
            The American Tree Sparrow carries four marks worth memorizing. The rufous
            crown runs from the forehead to the back of the head in a clean stripe. The face
            is gray, with a rust-colored eyeline running back from the eye. The breast is
            plain grayish-white with a single dark spot in the center — not streaked, just the
            one mark, like a thumbprint pushed against the chest.
          </p>
          <p>
            The bill is the quickest field mark at any distance where you can see the head
            at all. The upper mandible is dark gray or black. The lower mandible is bright
            yellow. Every other small brown sparrow at the same winter feeder — Song Sparrow,
            Field Sparrow, White-throated Sparrow, Dark-eyed Junco — carries a bill that is
            one consistent color throughout. The American Tree Sparrow&apos;s lower jaw is
            yellow in every age, every plumage, every season. Once you know it, you will
            never mistake this bird for another.
          </p>
          <p>
            The body is streaked brown and rust on the back and wings, with a rusty shoulder
            patch visible when the bird is perched. In flight the outer tail feathers are
            pale, like the Dark-eyed Junco&apos;s white outer tail feathers but less
            contrasting. At rest, the bi-colored bill is the mark that settles the ID.
          </p>
        </section>

        <figure className="species-content-photo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/American_Tree_Sparrow_%28Spizelloides_arborea%29.jpg/960px-American_Tree_Sparrow_%28Spizelloides_arborea%29.jpg"
            alt="American Tree Sparrow in close view showing the bi-colored bill — dark gray upper mandible, bright yellow lower mandible — alongside the rufous crown and gray face with rust eyeline"
            loading="lazy"
            onError={e => {
              const img = e.currentTarget
              img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Spizelloides_arborea_CT1.jpg/800px-Spizelloides_arborea_CT1.jpg'
              img.onerror = null
            }}
          />
          <figcaption>
            The bi-colored bill — dark above, yellow below — is the fastest field mark for
            separating this species from every other small brown sparrow sharing a winter feeder.
            The rufous cap and single dark breast spot are visible at close range; the bill reads
            clearly at 20 feet or more.
            <span className="photo-credit"> Photo: Cephas&nbsp;&middot;&nbsp;<a href="https://commons.wikimedia.org/wiki/Spizelloides_arborea" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="naming-heading">
          <h2 id="naming-heading">The name came from settlers who had never seen where it nests — on the ground, 2,000 miles north</h2>
          <p>
            Early European naturalists exploring the eastern seaboard in the 1600s and 1700s
            named American birds by comparing them to familiar European species. When they saw
            a small brown sparrow moving through winter shrubs along the New England coast, they
            named it after the Eurasian Tree Sparrow (<em>Passer montanus</em>) — a bird that
            actually nests in tree cavities across Europe and Asia. The resemblance was
            superficial. The two species are not closely related.
          </p>
          <p>
            The American Tree Sparrow does not nest in trees. It nests on the ground, tucked
            under a clump of sedge or the spreading stems of a dwarf birch, in subarctic
            and boreal habitat across northern Alaska and Canada — habitat where few trees grow
            and the growing season lasts roughly 10 weeks. The female builds the nest herself
            from grasses and bark strips, lining it with ptarmigan feathers and caribou hair.
            The male arrives first to establish territory, then sings from the highest perch
            available — often a willow shrub 4 feet tall.
          </p>
          <p>
            The name &ldquo;Tree Sparrow&rdquo; has been attached to this species for roughly
            300 years. The American Ornithological Society moved it out of the genus{' '}
            <em>Spizella</em> in 2016, placing it in its own genus <em>Spizelloides</em> to
            reflect how genetically distinct it is from Chipping Sparrows and Clay-colored
            Sparrows. The genus was updated. The common name was not.
          </p>
        </section>

        <section aria-labelledby="foraging-heading">
          <h2 id="foraging-heading">Flocks of 10 to 40 birds working through dried grass stands, often alongside Dark-eyed Juncos</h2>
          <p>
            American Tree Sparrows travel and forage in loose flocks. The flocks are not
            rigidly organized — birds drift through a seed patch, work their way across it,
            and continue. A flock encountering a dense stand of Little Bluestem or switchgrass
            in November may spend 20 minutes working through the standing seed heads before
            moving to the next patch.
          </p>
          <p>
            Their foraging technique combines two methods. They cling to standing grass
            stalks — including Little Bluestem, switchgrass, wild sorghum, native goldenrod,
            and ragweed — and pull seeds directly from the heads while hanging. They also
            scratch through snow and surface litter with both feet to reach fallen seeds
            beneath. A yard with standing native grass and wildflower stems running through
            January provides both — the seeds still attached overhead, and the seeds
            already fallen below.
          </p>
          <p>
            Dark-eyed Juncos forage the same ground layer with the same seed preferences.
            Mixed flocks of both species are common from October through March. Finding a
            flock of American Tree Sparrows at a winter feeder or in a seed-head patch
            usually means Dark-eyed Juncos are nearby, working the adjacent litter layer
            or low ground cover.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Standing grass stems through January, white millet on bare ground, a winter count, and a brush pile at the edge</h2>

          <figure className="species-content-photo">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/331747293/large.jpg"
              alt="Little Bluestem grass in late October with copper-red blades and white fluffy seed heads persisting on standing stalks — the same seed heads American Tree Sparrows and Dark-eyed Juncos forage through in November and December"
              loading="lazy"
            />
            <figcaption>
              The standing Little Bluestem stalks in October carry seed heads that American
              Tree Sparrows and Dark-eyed Juncos forage through from November to January.
              Cutting the grass in fall removes this food source before the birds arrive.
              Prairie Dropseed, switchgrass, and native goldenrod serve the same function
              in the same season.
              <span className="photo-credit"> Photo: whiteoak&nbsp;&middot;&nbsp;<a href="https://www.inaturalist.org/observations/189384424" target="_blank" rel="noopener noreferrer">iNaturalist obs. 189384424</a>&nbsp;&middot; CC0 / No Rights Reserved</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Leave native grass and wildflower seed heads standing through January.</strong>{' '}
              American Tree Sparrows forage by clinging to standing grass stalks and pulling
              seeds directly from the heads. Little Bluestem, switchgrass, Prairie Dropseed,
              Canada Goldenrod, Purple Coneflower, and native asters all carry seeds the
              flocks work through from October to February. Cutting these plants in November
              removes the food source before the birds arrive to use it. Delay any cutback
              until late February or March.
            </li>
            <li>
              <strong>Scatter white millet on the ground by October.</strong>{' '}
              American Tree Sparrows forage primarily at ground level and rarely visit tube
              feeders. Scatter 1 to 2 cups of white millet (<em>Panicum miliaceum</em>)
              directly on bare ground or a low platform feeder 6 to 12 inches off the
              ground. Replenish every 2 to 3 days. The same setup that serves American
              Tree Sparrows serves Dark-eyed Juncos, White-throated Sparrows, and Fox
              Sparrows arriving in the same month.
            </li>
            <li>
              <strong>Log your winter flock counts to eBird.</strong>{' '}
              American Tree Sparrow flocks pass through predictably each October and return
              each March. A consistent count each winter — even a rough estimate — contributes
              to the dataset tracking whether the 53 percent decline since 1966 is continuing,
              stabilizing, or accelerating. The bird at your feeder is also a data point.
            </li>
            <li>
              <strong>Leave a brush pile or dense stem bundle at the edge of the seed-head planting.</strong>{' '}
              American Tree Sparrows retreat to ground-level cover — not upward — when a
              hawk or cat appears. A bird working a seed patch makes multiple evasive flights
              per hour into nearby brush, and each retreat costs foraging time and calories.
              A stack of cut native stems or small branches, 2 to 3 feet tall, placed within
              10 feet of the seed-head planting gives the flock an immediate landing point
              so foraging resumes within seconds. The material left from clearing other beds
              in late winter — bundled stems from last year&apos;s switchgrass or goldenrod,
              or a loose pile of branches — works directly for this purpose. Place it at the
              edge and leave it through April.
            </li>
          </ol>
        </div>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">53 percent gone since 1966 — shrub tundra retreating north as boreal forest advances</h2>
          <p>
            The North American Breeding Bird Survey has tracked American Tree Sparrow
            populations since 1966. The decline runs roughly 53 percent across that period.
            The population remains large enough — around 20 million individuals — that the
            species does not appear on most watch lists. It is still common. It is disappearing.
          </p>
          <p>
            The breeding habitat is subarctic shrub tundra: open ground covered with dwarf
            birch, willow, sedge, and low ericaceous shrubs, above or near the treeline in
            northern Alaska and Canada. As temperatures in the subarctic have risen, the boreal
            forest has expanded northward into this open zone. Spruce and larch are establishing
            in areas that were open shrub tundra a generation ago, closing the habitat the
            American Tree Sparrow nests in.
          </p>
          <p>
            The winter range — the lawns, gardens, and seed-head patches of the northern
            United States from October to March — is intact and available. The problem is on the
            breeding end of the migration. A bird whose summer habitat is physically replaced by
            trees cannot move the tree line back by arriving at your feeder in December.
          </p>
        </section>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('dark-eyed-junco')}>
              <span className="neighbor-name">Dark-eyed Junco</span>
              <span className="neighbor-note">Arrives the same week in October from boreal breeding grounds; travels in mixed flocks with American Tree Sparrows through the same winter seed patches; both prefer white millet scattered on the ground over tube feeders</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('little-bluestem')}>
              <span className="neighbor-name">Little Bluestem</span>
              <span className="neighbor-note">Its copper-red stalks hold fluffy seed heads from October through January — the standing clumps that American Tree Sparrows and juncos cling to and pull seeds from in November and December</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('prairie-dropseed')}>
              <span className="neighbor-name">Prairie Dropseed</span>
              <span className="neighbor-note">Native bunchgrass holding seeds on fine stalks through fall and winter; flocks forage through it the same week they work Little Bluestem, giving two grass species worth of seeds in the same bed</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('canada-goldenrod')}>
              <span className="neighbor-name">Canada Goldenrod</span>
              <span className="neighbor-note">Dried seed heads in winter are a foraging stop between grass stands; the same goldenrod patch that held American Goldfinches in September holds American Tree Sparrow flocks in December</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
