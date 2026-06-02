import type { Page } from '../App'

interface AmericanBeechProps {
  onNavigate: (page: Page) => void
}

export default function AmericanBeech({ onNavigate }: AmericanBeechProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Fagus_grandifolia_kz2.jpg/960px-Fagus_grandifolia_kz2.jpg"
          alt="American Beech trunk with smooth silver-gray bark — the surface stays featureless for 200 years while the tree grows to full canopy height"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/American_Beech_%28Fagus_grandifolia%29_-_Algonquin_Provincial_Park.jpg/960px-American_Beech_%28Fagus_grandifolia%29_-_Algonquin_Provincial_Park.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Krzysztof Ziarnek, Kenraiz&nbsp;&middot;&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Fagus_grandifolia_kz2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>American Beech</h1>
        <p className="hero__lead">
          A female Luna Moth deposits her eggs in clusters of four or five on beech leaves in late May.
          She has no mouth — the adult carries no mechanism for eating, drinking, or digesting anything.
          The fat reserves that fuel her entire adult life were built by the caterpillar she used to be,
          feeding on beech and walnut leaves for six weeks. From the moment she chewed through her cocoon,
          she has had seven days. The beech in your yard is the last piece of the chain she needs.
        </p>
        <p className="hero__lead">
          American Beech grows for 200 years on the same site and never develops bark ridges.
          The trunk stays smooth and silver-gray across three human lifetimes. It is the only tree
          in eastern North America that stays this way. Initials someone carved into a beech in 1940
          are still visible today, stretched and spreading as the tree grew around them.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="bark-heading">
          <h2 id="bark-heading">Smooth bark, marcescent leaves, and 300 years of slow growth</h2>
          <p>
            American Beech (<em>Fagus grandifolia</em>) is the only native beech species in North America.
            Its defining feature is bark that remains smooth throughout the tree&apos;s life — while oaks,
            walnuts, and maples develop deep furrows and plates as they age, beech bark stays
            featureless, like polished gray stone. That smooth surface is thin and provides less
            protection from mechanical damage than the rough bark of most hardwoods. A mower blade
            or string trimmer that contacts the base opens a wound that beech cannot seal effectively —
            beech lacks the compartmentalization response that lets oak and maple close bark injuries —
            making the opening a long-term entry point for beech bark disease.
          </p>
          <p>
            Beech leaves show marcescence: the dead leaves do not fall in autumn. They turn copper-brown
            and persist on the branches through winter, rattling in wind until new growth pushes them
            off in spring. On lower branches, marcescent leaves can persist well into April.
            The retained leaves build a dense, slow-decomposing leaf layer on the ground beneath
            the canopy — a layer that overwintering insects, including Luna Moth pupae, depend on
            for insulation through below-zero nights.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Fagus_grandifolia_kz3.jpg/480px-Fagus_grandifolia_kz3.jpg"
              alt="American Beech leaves showing the toothed margin and distinctive parallel veins — each vein extends directly to a tooth at the leaf margin"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Fagus_grandifolia_kz2.jpg/480px-Fagus_grandifolia_kz2.jpg'
              }}
            />
            <figcaption>
              American Beech leaves are elliptical with sharp, regularly spaced teeth and prominent parallel
              veins — each vein extends directly to a tooth at the leaf margin. Beech is one of the few
              eastern hardwoods whose dead leaves persist on the branches through winter (marcescence),
              insulating the ground and providing overwintering habitat for insects that pupate in leaf
              litter beneath the canopy.
              <span className="photo-credit"> Photo: Krzysztof Ziarnek, Kenraiz&nbsp;&middot;&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Fagus_grandifolia_kz3.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Beech is among the most shade-tolerant native trees in eastern North America. Seedlings
            and saplings can persist for decades beneath a closed canopy, growing slowly, waiting for
            a gap. When a canopy tree falls or is removed, the beech beneath it accelerates rapidly.
            In many eastern forests, beech-maple communities form the climax state — the community
            that persists at a site after all other successional stages have run their course.
            A mature beech can reach 60 to 80 feet tall with a trunk two to three feet in diameter
            and live 300 to 400 years under good conditions.
          </p>
        </section>

        <section aria-labelledby="moths-heading">
          <h2 id="moths-heading">Luna Moth and Polyphemus Moth caterpillars in the beech canopy from June through August</h2>
          <p>
            Luna Moth females lay eggs on beech leaves in late May and early June.
            The caterpillar hatches, feeds through five instars over four to six weeks,
            and reaches three inches long — bright green with small orange-tipped tubercles
            along each segment. When ready to pupate, it descends to the leaf litter below
            the tree, spins a thin papery cocoon among the fallen leaves, and overwinters
            as a pupa there. The adult emerges the following April or May with no mouth
            and approximately seven days of fat-fueled life in which to find a mate.
          </p>
          <p>
            Polyphemus Moth caterpillars also develop on beech, alongside oaks, maples, and birches.
            The caterpillar is bright green with metallic silver spots on each segment and grows
            to nearly three inches before spinning its dense papery cocoon, often attached to a twig
            or wrapped in a leaf. Like the Luna Moth, the adult Polyphemus has no functional mouthparts
            and lives entirely on reserves built during the caterpillar stage. Both species overwinter
            in the leaf litter below their host trees and emerge as non-feeding adults in the same
            late-spring window.
          </p>
          <p>
            The beech leaf litter beneath the canopy plays two roles simultaneously. It is the
            overwintering substrate for the cocoons — the layer that insulates them through winter.
            And because beech leaves decompose slowly, the layer persists longer than faster-decomposing
            oak or maple litter, providing insulation through late-winter cold snaps that would
            otherwise kill exposed pupae. Raking that litter in fall removes the generation
            that would emerge in May.
          </p>
        </section>

        <section aria-labelledby="mast-heading">
          <h2 id="mast-heading">Beech nuts, mast years, and the animals that time their year around the crop</h2>
          <p>
            American Beech begins producing nuts at 40 to 60 years of age. The nuts — small,
            triangular, in a four-valved spiny husk — are high in fat and protein. Wild Turkeys
            scratch through beech mast from October through December, turning over leaf litter
            to find fallen nuts beneath the canopy. White-tailed Deer, Black Bear, Ruffed Grouse,
            and Wood Duck all consume beech mast in significant quantities during years of
            strong production.
          </p>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Fagus_grandifolia_capsules_kz.jpg/480px-Fagus_grandifolia_capsules_kz.jpg"
              alt="American Beech nuts in their four-valved spiny husks — the triangular nuts are high in fat and eaten by turkeys, deer, bears, and blue jays through autumn"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Fagus_grandifolia_kz2.jpg/480px-Fagus_grandifolia_kz2.jpg'
              }}
            />
            <figcaption>
              Beech nuts in their spiny four-valved husks. A mature beech produces mast in irregular
              mast years — heavy production separated by one or more lean years. Wild Turkey, Black Bear,
              White-tailed Deer, and Blue Jays time part of their autumn food-gathering around beech mast
              when it is available. Blue Jays cache individual nuts several hundred feet from the parent
              tree; the fraction they don&apos;t retrieve germinates in spring.
              <span className="photo-credit"> Photo: Krzysztof Ziarnek, Kenraiz&nbsp;&middot;&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Fagus_grandifolia_capsules_kz.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Beech mast production is irregular — mast years of heavy production alternate with lean
            years of near-zero crop. The triggers are not fully understood, but synchronized masting
            across large areas is common: when beech produces heavily, most beeches in the same
            region produce heavily in the same year. Animal populations that depend on mast — bear,
            turkey, grouse — show survival and reproductive patterns that track mast year timing
            across decades.
          </p>
          <p>
            Blue Jays are active beech nut dispersers. A jay can carry multiple beech nuts in its
            throat pouch and cache them several hundred feet from the source tree. The fraction it
            fails to retrieve germinates in spring. In regions where beech regeneration is not
            suppressed by deer browsing, Blue Jays move beech into forest gaps and edge habitats
            well beyond where the parent tree dropped its own nuts.
          </p>
        </section>

        <section aria-labelledby="disease-heading">
          <h2 id="disease-heading">Beech leaf disease — a nematode from Japan, spreading across 20+ states since 2012</h2>
          <p>
            In 2012, trees in Lake County, Ohio showed a new pattern of damage: dark banding between
            the leaf veins, thickened and distorted leaves, and progressive dieback from the outer
            crown inward. The cause was eventually identified as <em>Litylenchus crenatae
            nematodiphilus</em>, a foliar nematode from Japan not previously recorded in North America.
            It infests dormant leaf buds, damages the developing leaf tissue before it opens,
            and accumulates to high populations in heavily infected trees.
          </p>
          <p>
            By 2023, beech leaf disease had been confirmed across more than 20 states from Maine
            to Maryland, west into Ohio, Michigan, and Wisconsin. Young trees — saplings and trees
            under 20 years old — die faster than mature trees, which complicates the regeneration
            that would normally replace dying adults. No treatment has been shown to stop progression
            in affected trees. In areas with high infection pressure, beech regeneration in the
            understory has been nearly eliminated.
          </p>
          <p>
            Beech bark disease, a separate older problem caused by a combination of scale insects
            and the fungus <em>Neonectria</em>, has been affecting beech in the Northeast since the
            1890s. The scale insect (<em>Cryptococcus fagisuga</em>) creates entry points in the
            smooth bark; the fungus colonizes those wounds and kills patches of cambium.
            Heavily infected trees develop sunken cankers and eventually die from the resulting
            loss of vascular function. American Beech is now under two separate concurrent threats
            with different mechanisms, neither of which has a reliable cure.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that support American Beech</h2>

          <figure className="species-content-photo species-content-photo--right">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Fallen_leaves.jpg" alt="Autumn leaf litter on garden ground — Luna Moth and Polyphemus Moth pupae overwinter in this layer beneath beech; raking removes the generation that emerges next May" loading="lazy" />
            <figcaption>
              Luna Moth pupae overwinter in fallen leaves below their host tree. Beech leaves
              decompose slowly, building a dense insulating layer that persists later into winter
              than most hardwood litter. The moths that emerge from that ground in April are
              the return on leaving it undisturbed from October through May.
              <span className="photo-credit"> Photo: Public domain&nbsp;&middot;&nbsp;<a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Plant saplings from a local nursery using local seed sources.</strong>{' '}
              American Beech is available from native nurseries throughout the eastern US.
              Local-provenance seedlings are adapted to local soil and climate — trees grown
              from seed collected 1,000 miles away may leaf out on a different schedule and
              fail to match local insect phenology. A small sapling planted today begins
              producing caterpillar host value within a few years and will outlive the person
              who planted it by centuries. Find native nurseries using{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Protect the trunk from mechanical damage.</strong>{' '}
              Beech bark cannot close wounds the way oak and maple bark can. A string-trimmer
              cut at the base, a mower strike, or a landscaping tool dragged across the trunk
              creates an opening that beech bark disease can enter and persist in for years.
              Maintain a clear, mulched zone around the base of any beech tree to keep mowers
              and trimmers away from the trunk entirely.
            </li>
            <li>
              <strong>Stop broad-spectrum insecticide applications on the canopy from June through August.</strong>{' '}
              Luna Moth and Polyphemus Moth caterpillars feed on beech leaves from late June
              through August. Any pyrethroid, organophosphate, or Bt spray applied to the canopy
              during this window kills caterpillars directly. A large green caterpillar on your
              beech in July is building fat reserves it will run on for the rest of its life as
              an adult. Leave it.
            </li>
            <li>
              <strong>Leave leaf litter undisturbed beneath the canopy from October through May.</strong>{' '}
              Luna Moth and Polyphemus Moth pupae overwinter in fallen leaves below their host trees.
              Beech litter decomposes slowly and forms a dense insulating layer by late autumn —
              deeper and more persistent than most hardwood litter. An unraked section beneath
              the beech canopy from October through May protects the overwintering generation.
              See the full case in the{' '}
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves guide
              </button>
              .
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">Twelve months, one tree, and the insects it carries</h2>
          <p>
            From late May through August, beech leaves feed caterpillars of Luna Moth, Polyphemus Moth,
            and several other moth species. From October through April, the litter below the canopy
            holds overwintering pupae of those same moths — a generation that will emerge in spring
            to navigate by pheromone and mate in the dark. In November and December, beech nuts feed
            turkeys in a mast year. In March and April, the marcescent leaves that finally drop add
            a fresh layer of slow-decomposing organic matter to the duff below.
          </p>
          <p>
            American Beech does not provide all of this across a single human lifespan. A sapling
            planted today takes 40 years to produce its first reliable nut crop and 100 years to
            reach the canopy stature that carries full moth populations. But caterpillar host
            value begins immediately — a three-foot sapling already provides leaf surface that
            Luna Moth females will find and use. Every year of growth adds more of what the
            food web needs.
          </p>
          <p>
            When a beech-maple forest persists on a site for 300 years, it does so because each
            generation of trees establishes in the shade of the previous one, because the litter
            builds up, because the insects that depend on beech continue to complete their life
            cycles there. The smooth gray trunk with names carved into it is not decoration.
            It is evidence of continuous presence — something still here, still doing what it does.
          </p>
        </section>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('luna-moth')}>
            <span className="neighbor-name">Luna Moth</span>
            <span className="neighbor-note">American Beech is a primary larval host for Luna Moth alongside black walnut and hickory — females lay eggs on beech leaves in late May, caterpillars feed through July, descend to overwinter as pupae in the slow-decomposing beech leaf litter, and emerge as non-feeding adults the following spring; the fat built on beech leaves is the only fuel for the adult's entire seven-day life</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('polyphemus-moth')}>
            <span className="neighbor-name">Polyphemus Moth</span>
            <span className="neighbor-note">Polyphemus caterpillars develop on beech alongside oaks, maples, and birches — both Polyphemus and Luna Moth overwinter as pupae in the leaf litter beneath beech, emerge as non-feeding adults in the same late-spring window, and are drawn to artificial light during the only week they have to find a mate</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('white-oak')}>
            <span className="neighbor-name">White Oak</span>
            <span className="neighbor-note">American Beech and White Oak share the canopy in mature eastern forests — both are slow-growing mast producers that take decades to reach nut-bearing age, and both carry caterpillar populations of giant silk moths; a yard that includes both trees supports a food web that neither provides alone</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-turkey')}>
            <span className="neighbor-name">Wild Turkey</span>
            <span className="neighbor-note">Wild Turkey forages on beech mast from October through December, scratching through the leaf litter beneath the canopy to find fallen nuts; in mast years, beech nuts are one of the high-fat foods that help turkeys build condition before winter; the same leaf litter layer that turkeys scratch through holds the overwintering moth pupae below it</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('black-walnut')}>
            <span className="neighbor-name">Black Walnut</span>
            <span className="neighbor-note">Black Walnut and American Beech are both primary host trees for Luna Moth — a yard with both species provides two separate caterpillar cohorts on two different host chemistries; Luna Moth females detect and choose among available host trees, and having both species present increases the likelihood that any given female completes her egg-laying before her seven days are up</span>
          </button>
        </div>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build a yard that supports American Beech and the moths it hosts.</strong>{' '}
            Protect overwintering pupae with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , eliminate pesticides with the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , find a native nursery with{' '}
            <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
              Find Plants Near Me
            </button>
            , and see what else shares your yard in the{' '}
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
