import type { Page } from '../App'

interface TigerSwallowtailProps {
  onNavigate: (page: Page) => void
}

export default function TigerSwallowtail({ onNavigate }: TigerSwallowtailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Pristine_Eastern_Tiger_Swallowtail.jpg/960px-Pristine_Eastern_Tiger_Swallowtail.jpg"
          alt="Eastern Tiger Swallowtail butterfly wings spread wide on a flower, showing yellow and black tiger stripes and blue-orange eyespots along the hindwing tails"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: HaarFager at English Wikipedia&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Pristine_Eastern_Tiger_Swallowtail.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Tiger Swallowtail</h1>
        <p className="hero__lead">
          A male Eastern Tiger Swallowtail walks across wet mud at a puddle's edge and absorbs
          sodium through receptors on his feet. He cannot get enough sodium from nectar alone.
          He collects it here, from saturated soil, along with potassium and amino acids —
          then packages a portion into a nuptial gift he transfers to a female during mating.
          Her eggs benefit from minerals he gathered in that wet corner of a yard.
        </p>
        <p className="hero__lead">
          Female tiger swallowtails from the same egg clutch can emerge in two distinct
          color forms: yellow like males, or near-black with iridescent blue hindwings.
          The dark form resembles the Pipevine Swallowtail, a species that sequesters toxins
          from its pipevine host and is avoided by birds that have eaten one.
          North of Pennsylvania, where Pipevine Swallowtails rarely appear,
          the dark form is uncommon — predators there have never learned to reject the model,
          so the resemblance provides no protection.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">Three instars that look like bird droppings — then eyespots, then a forked gland that smells like turpentine</h2>
          <p>
            The first three caterpillar instars of the Eastern Tiger Swallowtail are dark brown
            with white irregular patches. The pattern matches a fresh bird dropping on a leaf
            closely enough that visual predators — birds, wasps — pass over them without
            stopping to investigate. The caterpillar rests in the center of the leaf's upper
            surface, exactly where a dropping would land.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Papilio_glaucus_larva_1.jpg"
              alt="Eastern Tiger Swallowtail caterpillar — late instar green form with large false eyespots near the head end, after leaving the bird-dropping camouflage of early development"
              loading="lazy"
            />
            <figcaption>
              The late-instar tiger swallowtail caterpillar has shed the bird-dropping camouflage
              and now carries false eyespots positioned to suggest an owl or snake face when seen head-on.
              Early instars — for the first two to three weeks — look nothing like this:
              they are dark brown with white irregular markings, resting on the leaf's upper surface
              where a bird dropping would fall. The transition between these two forms happens between
              the third and fourth molts.
              <span className="photo-credit"> Photo: Jacy Lucier · <a href="https://commons.wikimedia.org/wiki/File:Papilio_glaucus_larva_1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            In the fourth and fifth instars, the caterpillar shifts to bright green with two
            large circular false eyespots positioned close behind the head.
            When a predator approaches, the caterpillar inflates the thoracic segments behind
            the eyespots — swelling slightly to suggest depth, completing the snake or owl face illusion.
          </p>
          <p>
            Touch a mature caterpillar and it deploys the osmeterium: a forked, orange-red gland
            behind the head that everts under pressure. The gland releases terpene compounds
            with a smell resembling turpentine. The caterpillar retracts it within seconds
            once the threat passes. This is a physical deterrent against wasps and ants
            that probe foliage for caterpillars to parasitize or carry off as prey.
          </p>
          <p>
            Finding these caterpillars requires no special equipment — walk the branch tips of
            a wild cherry or tulip poplar from late June through August, look for chewed leaves
            and dark droppings on lower foliage, then examine the upper leaf surface directly.
            Both the bird-dropping form and the eyespot form are discoverable on any morning
            spent looking at one host tree.
          </p>
        </section>

        <section aria-labelledby="mimicry-heading">
          <h2 id="mimicry-heading">The dark-form female and the toxic butterfly whose wing pattern she copies</h2>
          <p>
            The Pipevine Swallowtail (<em>Battus philenor</em>) feeds as a caterpillar on pipevines
            and wild ginger — plants containing aristolochic acids. Adults retain enough of these
            compounds that birds eating a Pipevine Swallowtail become ill and learn to associate
            the iridescent blue-black wing pattern with the reaction.
            They avoid similar-looking butterflies from that point forward.
          </p>
          <p>
            Dark-form female tiger swallowtails carry none of these compounds. Their caterpillars
            feed on tulip poplar and wild cherry, not pipevine. But the dark female's black body
            and blue hindwing scaling duplicates the Pipevine Swallowtail pattern closely enough
            that birds already conditioned on real pipevines leave her alone.
            This is Batesian mimicry: a palatable species surviving on borrowed reputation.
          </p>
          <p>
            The proportion of dark-form females in a population scales with how common Pipevine
            Swallowtails are in the same area. In South Carolina and Georgia, where Pipevine
            Swallowtails are common summer residents, 75–80% of female tiger swallowtails are dark form.
            In Wisconsin and Minnesota, where Pipevine Swallowtails rarely occur, dark-form females
            account for under 10% of the population. The geographic gradient tracks how well-taught
            the local predators are — and how much protection the disguise actually provides.
          </p>
        </section>

        <section aria-labelledby="overwintering-heading">
          <h2 id="overwintering-heading">Chrysalids on bark in January — the adults that emerge in April are already in your yard</h2>
          <p>
            Eastern Tiger Swallowtails do not migrate. The adults flying in April spent the winter
            as chrysalids attached to tree bark or tucked behind loose bark plates, within the canopy
            of the host tree where they fed as caterpillars. A chrysalis attached to a wild cherry
            in November will produce an adult in April when temperatures hold above 60°F
            for several consecutive days.
          </p>
          <p>
            The chrysalis looks like a curled dead leaf — brown, irregular, inconspicuous.
            At eye height on a smooth-barked cherry or birch trunk, it is findable by anyone
            looking for it in winter. Each chrysalis represents one locally-bred individual:
            a caterpillar that spent July or August on that specific tree, in that specific yard.
          </p>
          <p>
            There are two to three generations per year in the south, two in the north.
            The late-summer generation overwinters as chrysalids; the spring generation does not.
            Removing a host tree removes not only one season's caterpillars
            but the overwintering chrysalids on its bark — and the locally-bred population
            those chrysalids would have carried forward into the following spring.
          </p>
        </section>

        <section aria-labelledby="threats-heading">
          <h2 id="threats-heading">Bt sprays, broad-spectrum pesticides, and host tree removal</h2>
          <p>
            <em>Bacillus thuringiensis</em> var. <em>kurstaki</em> (Btk) is a bacterium sold
            as an organic caterpillar control and widely applied to ornamental trees.
            It produces a protein that destroys the gut lining of all lepidopteran larvae
            that consume treated foliage. A single Btk application to a wild cherry
            hosting tiger swallowtail eggs removes that season's caterpillar cohort
            before they reach the fourth instar.
            The product does not distinguish between the pest species it was intended for
            and the tiger swallowtail caterpillar on the branch below it.
          </p>
          <p>
            The second threat is host tree removal.
            Tiger swallowtails use wild black cherry, tulip poplar, river birch,
            sweet bay magnolia, and white ash as caterpillar hosts. These are native trees
            regularly removed from residential yards for structural or aesthetic reasons.
            A yard with no native host tree within flight range will produce no locally-bred
            tiger swallowtails — only transient nectaring adults that completed their
            development elsewhere.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>A host tree, a puddling spot, no Bt near the canopy, and nectar from June through September</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/63/Asclepias_tuberosa_2.jpg"
              alt="Native butterfly weed in full bloom — tiger swallowtails nectar on milkweeds in June and July as part of a longer seasonal nectar corridor"
              loading="lazy"
            />
            <figcaption>
              Tiger swallowtails need nectar from June through September — the span covering
              both the spring-summer generation and the late-summer generation that overwinters
              as chrysalids. Native milkweeds cover June–July. Purple coneflower and wild bergamot
              carry July–August. Joe-pye weed opens in August. Native asters extend into September
              for the generation that will attach chrysalids to bark before winter.
              <span className="photo-credit"> Photo: Tortie tude&nbsp;·&nbsp;<a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en" target="_blank" rel="noopener noreferrer">CC0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Plant or retain a native host tree.</strong>{' '}
              Wild black cherry (<em>Prunus serotina</em>) hosts 456 species of native Lepidoptera
              by one count — tiger swallowtails among them. Tulip poplar (<em>Liriodendron tulipifera</em>)
              and river birch (<em>Betula nigra</em>) are two other options suited to most suburban lots.
              A single host tree in an otherwise conventional yard produces locally-bred adults
              for years; its chrysalids overwinter on the bark each fall.
            </li>
            <li>
              <strong>Create a moist bare-soil puddling spot near the nectar planting.</strong>{' '}
              Males gather at wet ground to absorb sodium and amino acids, often in groups of 5–20 individuals.
              A dripping outdoor faucet, the wet margin of a rain garden, or a shallow sand tray kept
              moist provides the mineral site they return to from May through August.
              Keep it in full sun — males do not puddle in shade.
              Several males working the same wet patch is the most visible tiger swallowtail behavior
              in a well-planted yard.
            </li>
            <li>
              <strong>Stop all caterpillar-control sprays within the canopy of host trees.</strong>{' '}
              This includes Btk products, spinosad, pyrethrin, and broad-spectrum insecticides.
              Leaf damage on a wild cherry or tulip poplar from late June through August
              is evidence of tiger swallowtail caterpillars in residence — not a condition requiring treatment.
              Chewed leaves and dark droppings on lower foliage are the signs to look for
              before deciding whether to intervene.
            </li>
            <li>
              <strong>Plant natives that carry nectar from June through September.</strong>{' '}
              Common milkweed and butterfly weed bloom June–July.
              Purple coneflower and wild bergamot peak in July–August.
              Joe-pye weed opens in August. Native asters carry into September and October.
              Four plant species in one sunny border cover the full span that tiger swallowtails feed —
              including the weeks the late-summer generation loads fat reserves before forming
              chrysalids for winter.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('pipevine-swallowtail')}>
              <span className="neighbor-name">Pipevine Swallowtail</span>
              <span className="neighbor-note">The model species — dark-form female tiger swallowtails copy its iridescent blue-black wing pattern; the proportion of dark-form females in a population tracks how common real Pipevine Swallowtails are in the same area and how well local birds have been conditioned to avoid the pattern</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('black-swallowtail')}>
              <span className="neighbor-name">Black Swallowtail</span>
              <span className="neighbor-note">Caterpillar eats carrot-family plants including wild parsnip and Queen Anne's lace; the black-and-yellow adult resembles a dark-form tiger swallowtail female but is a separate species with distinct host plant requirements</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('golden-alexanders')}>
              <span className="neighbor-name">Golden Alexanders</span>
              <span className="neighbor-note">Tiger swallowtails nectar on the flat-topped yellow umbels in April and May — adults visiting Golden Alexanders in spring may be the same individuals that overwintered as chrysalids on nearby tree bark and emerged weeks earlier</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('great-spangled-fritillary')}>
              <span className="neighbor-name">Great Spangled Fritillary</span>
              <span className="neighbor-note">Shares joe-pye weed and coneflower as nectar sources in July and August; its caterpillar feeds on native violets in the leaf litter below the same host trees tiger swallowtails use</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('joe-pye-weed')}>
              <span className="neighbor-name">Joe-Pye Weed</span>
              <span className="neighbor-note">Native perennial blooming August–September that draws tiger swallowtails, monarchs, and fritillaries to the same flower heads at the same time — one of the most consistent late-summer butterfly nectar plants in eastern North America</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('purple-coneflower')}>
              <span className="neighbor-name">Purple Coneflower</span>
              <span className="neighbor-note">Blooms July–August during peak tiger swallowtail activity; the same dense patch of 8–12 plants that supports specialist longhorn bees also draws swallowtails and fritillaries working adjacent flower heads</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
              <span className="neighbor-name">American Goldfinch</span>
              <span className="neighbor-note">Works the dried coneflower and goldenrod seed heads in October through January — the same plants tiger swallowtails visited for nectar in July and August; both species depend on the same native blooms running through different seasons</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('canada-goldenrod')}>
              <span className="neighbor-name">Canada Goldenrod</span>
              <span className="neighbor-note">Blooms August through October, feeding the late-summer generation of tiger swallowtails — the adults foraging goldenrod in September are loading fat reserves they will carry as overwintering chrysalids on bark through winter</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('sassafras')}>
              <span className="neighbor-name">Sassafras</span>
              <span className="neighbor-note">Host tree for tiger swallowtail caterpillars — females seek out sassafras during oviposition flights alongside tulip poplar and wild cherry; a single small tree in a woodland edge planting produces locally-bred adults and overwinters chrysalids on its bark each fall</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('redbud')}>
              <span className="neighbor-name">Eastern Redbud</span>
              <span className="neighbor-note">Flowers open directly on bare branches in early April, before the leaves, giving the first spring generation of tiger swallowtails an early nectar source at the same moment the first adults are emerging from their overwintering chrysalids</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
