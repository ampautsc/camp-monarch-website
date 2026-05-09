import type { Page } from '../App'

interface NativeBeesProps {
  onNavigate: (page: Page) => void
}

// Homeowner actions that directly support native bee populations
// Derived from Xerces Society native bee conservation guidelines,
// Wilson & Carril (2016) "The Bees in Your Backyard", and USGS Native Bee Lab research
const actions = [
  {
    id: 'bare-ground',
    emoji: '🌱',
    label: 'Leave bare patches of soil',
    summary: 'Most native bees nest underground — they need exposed earth, not mulch',
    detail: [
      'Approximately 70% of North America\'s native bee species nest in the ground. A ground-nesting bee needs a patch of bare or sparsely vegetated soil with good drainage and full or partial sun. She tunnels down several inches, provisions each cell with a ball of pollen and nectar, lays an egg, and seals the cell. The larva will overwinter there.',
      'Mulch — even a two-inch layer — smothers these nesting sites. Heavily mulched beds look tidy but are functionally dead for ground-nesting bees. The solution is not to stop gardening but to leave some patches unmulched: a sunny south-facing slope, a bare strip at the garden edge, a spot of hard-packed soil near the walkway.',
      'Sand or loam is ideal. Clay is acceptable. Shade is not — ground-nesters need solar warmth to regulate nest temperature. Even a square foot of bare, sunny soil in the right location will be claimed within a season.',
    ],
  },
  {
    id: 'native-flowers',
    emoji: '🌸',
    label: 'Plant native flowers that bloom spring through fall',
    summary: 'Native bees and native plants co-evolved — the fit is exact',
    detail: [
      'Native bees and native plants have been evolving together for millions of years. Many bee species can collect pollen from only a narrow range of plants — they are oligolectic, meaning they carry only the pollen of closely related species. A sweat bee that feeds on goldenrod pollen cannot raise its young on coneflower pollen, no matter how abundant. Plant absence means population absence.',
      'The sequence of bloom matters as much as the species list. Early spring (March–April): Virginia bluebells (Mertensia virginica), spring ephemerals, native willows. Late spring (May–June): wild geranium, columbine, native hawthorns. Summer (July–August): milkweed, coneflower (Echinacea purpurea), native clovers, bergamot. Fall (September–October): goldenrod (Solidago), asters. At least one plant blooming in each period is the goal.',
      'Milkweed (Asclepias) specifically supports specialist bees in the genus Perdita — tiny ground-nesting bees that collect only milkweed pollen. Planting milkweed for monarchs also feeds native bee species found nowhere else in the food web.',
    ],
  },
  {
    id: 'leave-stems',
    emoji: '🌾',
    label: 'Leave dead stems standing through winter',
    summary: 'Stem-nesting bees overwinter as larvae sealed inside hollow plant stems',
    detail: [
      'Mason bees, leafcutter bees, and small carpenter bees nest in hollow or pithy plant stems — the dried stems of cup plant (Silphium perfoliatum), Joe-Pye weed (Eutrochium), and many other native perennials and shrubs. The female packs each hollow with pollen and nectar, lays an egg, and seals the cell with mud, leaf pieces, or plant resin.',
      'A tidy gardener who cuts all stems to the ground in autumn eliminates these nesting sites and kills the overwintering larvae inside. Leaving stems standing through at least April — when the adults have had time to emerge — preserves an entire generation. This is the single most impactful change for stem-nesting bees.',
      'Cut stems to approximately 12–18 inches rather than removing them entirely. Bundle loose stems and stand them upright in a sheltered corner if the garden needs clearing. The "messy" garden bed is not neglect — it is functional overwintering habitat for hundreds of bee species.',
    ],
  },
  {
    id: 'no-neonics',
    emoji: '🚫',
    label: 'Eliminate neonicotinoids entirely — ask before you buy',
    summary: 'Systemic insecticides poison the pollen and nectar bees collect',
    detail: [
      'Neonicotinoids are systemic insecticides: they are absorbed by the plant and expressed in pollen, nectar, and guttation droplets. A bee visiting a neonicotinoid-treated flower is not just exposed to a surface residue — it is carrying contaminated food back to its nest, feeding it to its larvae.',
      'Sublethal doses impair navigation (bees fail to return to the nest), reduce reproductive success (queens lay fewer eggs), and compromise immune function. The effects compound across a season. Colony collapse in managed honeybees and population collapse in native bumblebee species have both been linked to neonicotinoid exposure.',
      'Many retail plants sold with "pollinator-friendly" labels have been treated with neonicotinoids at the nursery. Always ask: "Were these plants treated with neonicotinoids?" Preferred pesticide-free sources: Monarch Watch Milkweed Market, Xerces Society preferred nurseries, Prairie Moon Nursery, native plant society sales. If a plant was treated and is a milkweed or nectar plant for pollinators, the safest action is to replace it.',
    ],
  },
  {
    id: 'no-leaf-blowing',
    emoji: '🍂',
    label: 'Leave leaves — rake only if you must, and pile them',
    summary: 'Bumblebee queens overwinter in leaf litter; raking destroys them',
    detail: [
      'Bumblebee queens overwinter as individuals buried in leaf litter, just under the soil surface, beneath fallen logs, or in protected corners. They are the only survivor of last summer\'s colony — every other member died by November. The queen carries fertilized eggs that will become next year\'s colony. She is irreplaceable.',
      'Leaf blowers and autumn raking remove the one place she can survive the winter. A bumblebee queen found in October is not something to move inside or release — she needs cold to break her diapause and trigger spring emergence. She needs to stay in the leaf litter until warming temperatures wake her in April or May.',
      'If leaves must be managed, rake them into piles in a sheltered corner rather than removing them entirely. A pile of leaves against a fence, under a shrub, or along a garden edge will be used. A yard where all leaves are removed and all soil is mulched offers nothing for bumblebee queens trying to reach spring.',
    ],
  },
  {
    id: 'skip-the-cleanup',
    emoji: '🪵',
    label: 'Add a brush pile — and leave the fallen log where it is',
    summary: 'Small carpenter bees and wood-nesting species use dead wood',
    detail: [
      'Small carpenter bees (Ceratina) nest in the pithy centers of broken or cut stems — they chew their own chambers rather than using pre-existing hollows. Large carpenter bees (Xylocopa) excavate dead wood. Both need dead wood of the right condition: not so fresh it is too hard, not so decayed it crumbles.',
      'A fallen log left in place, a brush pile of varied-diameter branches, dead standing wood left as a snag — each of these is potential nesting habitat for multiple species. The log that is "getting in the way" may be actively used from May through October and again as overwintering cover.',
      'Brush piles are also used by box turtles, toads, and numerous other species that share habitat with native bees. Adding one addresses multiple species at once and requires nothing more than stacking what would otherwise be hauled away.',
    ],
  },
]

export default function NativeBees({ onNavigate }: NativeBeesProps) {
  return (
    <>
      {/* Hero — bta-008: art before action; evoke the felt experience first */}
      <section className="hero">
        <div className="hero__eyebrow">Native Bees in Your Yard</div>
        <h1>There are 4,000 species<br />of native bees in North America.</h1>
        <p className="hero__lead">
          You have seen the fat orange-and-black bumblebee working a patch of goldenrod
          on a September afternoon — methodical, unhurried, dusted in yellow pollen,
          vibrating at exactly the frequency that releases pollen from a flower's anther.
          That is buzz pollination, a technique honeybees cannot do.
          Only native bees can do it. They have been doing it here for millions of years.
        </p>
        <p className="hero__lead">
          The honeybee is a European import, brought to the Americas in the 1600s.
          Every native plant that flowers in a North American meadow, woodland, or prairie
          evolved its shape, color, and bloom time around the native bees that pollinated it —
          not the honeybee. That relationship is still here. The bees are still here.
          But the habitat that sustains them is shrinking one lawn at a time.
        </p>
      </section>

      <div className="page">

        {/* Biology — lesson-029: specificity makes things matter */}
        <section className="content-section">
          <h2>Who they are</h2>
          <p>
            Approximately 4,000 species of native bees live in North America — compared to one
            managed honeybee species. Most are solitary. They do not live in hives, produce honey,
            or defend a colony. A female bee finds or excavates a nest, provisions it with pollen and
            nectar, lays one egg per cell, and seals it. She may never see her offspring. She builds
            alone, provisions alone, and dies before the next generation emerges.
          </p>
          <p>
            The variety is astonishing. Bumblebees (<em>Bombus</em>) are social and generalist —
            a single colony visits hundreds of plant species across a season.
            Mining bees (<em>Andrena</em>) are solitary ground-nesters that often emerge for only
            a few weeks, precisely timed to when their preferred plant blooms.
            Mason bees (<em>Osmia</em>) use hollow stems and cavities, sealing cells with mud.
            Leafcutter bees (<em>Megachile</em>) line their cells with precisely cut circles of leaf.
            Sweat bees (<em>Halictus</em>, <em>Lasioglossum</em>) are often tiny and metallic green —
            the bee most people mistake for a fly. Small carpenter bees (<em>Ceratina</em>) chew through
            the pithy centers of broken stems, a millimeter at a time.
          </p>
          <p>
            Many native bee species are oligolectic — they specialize. A Perdita bee collects only
            milkweed pollen. A squash bee (<em>Peponapis pruinosa</em>) collects only squash and
            cucurbit pollen and emerges precisely when squash flowers open, before sunrise.
            When a native plant disappears from a region, the specialist bee that depended on it
            disappears too. Their fates are not separate.
          </p>
        </section>

        {/* Decline section — lesson-024: man disturbs but restoration is possible */}
        <section className="content-section content-section--alt">
          <h2>What is happening to them</h2>
          <p>
            North America has lost more than a quarter of its bumblebee species in recent decades.
            The rusty-patched bumblebee (<em>Bombus affinis</em>), once common across the eastern
            United States, is now listed as Federally Endangered. Its range has contracted by
            nearly 90% since the 1990s. Franklin's bumblebee (<em>Bombus franklini</em>), endemic
            to a small area of southern Oregon and northern California, has not been reliably
            documented since 2006 and may be extinct.
          </p>
          <p>
            The causes are understood. Habitat loss — conversion of native plant communities to
            lawn, agriculture, and development — removes both food and nesting sites simultaneously.
            Neonicotinoid insecticides, applied systemically to plants and soil, contaminate the pollen
            and nectar that bees carry back to their nests. Pathogens spread from commercial bumblebee
            colonies to wild populations. Climate change compresses or eliminates the timing windows
            when bees and their host plants can find each other.
          </p>
          <p>
            These losses are not distant or abstract. They are happening in the specific yards,
            parks, and roadsides where people live. And because native bees pollinate native plants,
            which shelter and feed every other species in the habitat — from monarchs to box turtles
            to birds — native bee decline is a cascade, not an isolated event.
          </p>
          <p>
            The causes are human decisions. So are the solutions. Several of them begin in a
            single yard.
          </p>
        </section>

        {/* Fellow mortals — lesson-027 */}
        <section className="content-section">
          <h2>These are your neighbors</h2>
          <p>
            The sweat bee that lands on your arm on a summer afternoon is not interested in you.
            She is looking for minerals. She is a ground-nesting bee, and her nest is somewhere
            nearby — a centimeter-wide tunnel in the bare soil at the edge of your garden,
            provisioned with a ball of pollen from the goldenrod she has been visiting all morning.
            She is not a threat. She has work to do.
          </p>
          <p>
            Native bees almost never sting. Solitary bees — the vast majority of native species —
            have no colony to defend. A female solitary bee has no reason to sting a passing human.
            The ones you see working your garden in summer are carrying out a version of parenthood:
            finding food, building shelter, protecting the next generation. They are fellow mortals,
            with their own purposes, doing their own version of making a living.
          </p>
          <p>
            A yard that supports native bees is not a sacrifice or a compromise. It is a yard
            that hums in July and August. It is a yard with more monarch butterflies, more birds,
            more fruit on every fruiting plant. The bees and the monarchs and the box turtles
            are not separate residents — they are the same habitat, read from different
            angles.
          </p>
        </section>

        {/* Actions — ffl-008 pattern */}
        <section className="content-section content-section--alt">
          <h2>Six things that make a difference</h2>
          <p>
            These actions are derived from Xerces Society guidelines and peer-reviewed research
            on native bee habitat. Each one addresses a specific, documented cause of decline.
            None requires expensive equipment. Most require doing less, not more.
          </p>
          <div className="actions-grid">
            {actions.map(action => (
              <div key={action.id} className="action-card">
                <div className="action-card__emoji">{action.emoji}</div>
                <div className="action-card__content">
                  <h3 className="action-card__label">{action.label}</h3>
                  <p className="action-card__summary">{action.summary}</p>
                  <div className="action-card__detail">
                    {action.detail.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Connection to broader habitat — man-003 */}
        <section className="content-section">
          <h2>The same yard does it all</h2>
          <p>
            The six actions above — bare soil patches, native flowers through the season,
            standing stems, no neonicotinoids, leaf litter, brush piles and dead wood —
            are not a separate list from what monarchs need, or what fireflies need,
            or what box turtles need.
          </p>
          <p>
            Monarch caterpillars need milkweed. Native bees that specialize on milkweed
            need milkweed. The same planting serves both. Box turtles overwinter in leaf litter.
            Bumblebee queens overwinter in leaf litter. Leaving the leaves through April
            helps both. Firefly larvae live in moist soil with leaf litter cover.
            Ground-nesting bees need bare, sunny patches of soil nearby. A yard that has some
            of each — leaf litter here, bare soil there, native plants through the season —
            supports all of them simultaneously.
          </p>
          <p>
            You are not managing for a single species. You are participating in the reconstruction
            of a habitat community — one that functioned here, in this specific place,
            for thousands of years before the lawn arrived. The bees, the monarchs,
            the fireflies, the turtles: they belong to the same story.
            Restoring any part of it restores all of it.
          </p>
        </section>

        {/* Sources */}
        <section className="content-section content-section--alt">
          <h2>Sources</h2>
          <ol className="sources-list">
            <li>
              Xerces Society for Invertebrate Conservation.{' '}
              <em>Protecting Native Bees.</em>{' '}
              <a href="https://xerces.org/bees" target="_blank" rel="noopener noreferrer">
                xerces.org/bees
              </a>{' '}
              (accessed 2026-05-09).
            </li>
            <li>
              Wilson, J. S. &amp; Carril, O. M. (2016).{' '}
              <em>The Bees in Your Backyard: A Guide to North America's Bees.</em>{' '}
              Princeton University Press.
            </li>
            <li>
              Goulson, D., Nicholls, E., Botías, C. &amp; Rotheray, E. L. (2015).
              Bee declines driven by combined stress from parasites, pesticides, and lack of flowers.{' '}
              <em>Science</em>, 347(6229).{' '}
              <a
                href="https://doi.org/10.1126/science.1255957"
                target="_blank"
                rel="noopener noreferrer"
              >
                doi.org/10.1126/science.1255957
              </a>
            </li>
            <li>
              Colla, S. R., Otterstatter, M. C., Gegear, R. J. &amp; Thomson, J. D. (2006).
              Plight of the bumble bee: Pathogen spillover from commercial queens.{' '}
              <em>Biological Conservation</em>, 129(4), 461–467.
            </li>
            <li>
              U.S. Fish &amp; Wildlife Service. (2017).{' '}
              <em>Rusty Patched Bumble Bee — Endangered Species Listing.</em>{' '}
              <a
                href="https://www.fws.gov/species/rusty-patched-bumble-bee-bombus-affinis"
                target="_blank"
                rel="noopener noreferrer"
              >
                fws.gov/species/rusty-patched-bumble-bee
              </a>{' '}
              (accessed 2026-05-09).
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="content-section cta-section">
          <h2>What you can do today</h2>
          <p>
            If you saw a native bee today — a bumblebee on a flower, a sweat bee on your arm,
            a mason bee investigating a stem — it was telling you the habitat is partially there.
            The question is what happens next season, when you decide what to plant
            and what to leave alone.
          </p>
          <div className="cta-buttons">
            <button
              className="cta-btn cta-btn--primary"
              onClick={() => onNavigate('take-action')}
            >
              Take Action
            </button>
            <button
              className="cta-btn cta-btn--secondary"
              onClick={() => onNavigate('log-a-sighting')}
            >
              Log a Sighting
            </button>
            <button
              className="cta-btn cta-btn--secondary"
              onClick={() => onNavigate('native-plant-near-me')}
            >
              Find Native Plants Near Me
            </button>
          </div>
        </section>

      </div>
    </>
  )
}
