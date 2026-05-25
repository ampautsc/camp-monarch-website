import type { Page } from '../App'

interface MourningCloakProps {
  onNavigate: (page: Page) => void
}

export default function MourningCloak({ onNavigate }: MourningCloakProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Mourning_Cloak_Nymphalis_antiopa.jpg"
          alt="Mourning Cloak butterfly (Nymphalis antiopa) with wings fully open — deep chocolate-brown upper wings bordered by pale yellow-cream along the outer margin of both wings, with a row of iridescent blue spots inside the border, and two small pale spots near each forewing tip"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/0/04/Nymphalis_antiopa_MHNT.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Benny Mazur&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Mourning_Cloak_Nymphalis_antiopa.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Mourning Cloak</h1>
        <p className="hero__lead">
          In late February in southern Wisconsin, when overnight temperatures still drop below
          freezing and snow sits in shaded corners, a dark chocolate butterfly lands on the
          south-facing bark of an oak trunk. It spreads its wings flat and holds them against
          the bark, absorbing heat through the dark surface. The butterfly has been behind a
          piece of loose bark on this tree since October. It is the same individual that fueled
          on fermenting crabapples the previous fall. Most butterflies you see in spring hatched
          that week. This one is ten months old.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">Chocolate-brown wings with yellow-cream border and blue spots — ten to eleven months in the same body</h2>
          <p>
            The Mourning Cloak's upper wings are deep chocolate-brown, bordered along the outer
            margin by pale yellow-cream. Inside this pale edge sits a row of iridescent blue spots —
            typically five to seven along each hindwing and four to five on each forewing. Near the
            tip of each forewing are two small pale spots. The name came from 18th-century English
            mourning dress: a dark woolen cloak with a pale lining visible at the edge. The butterfly
            is called the Camberwell Beauty in England, where it is a rare migrant.
          </p>
          <p>
            Adults that emerge from their chrysalis in June or July have a bright sulfur-yellow
            border. By the time they re-emerge from winter roost in February or March, the border
            has faded to white or pale cream. A Mourning Cloak flying in early spring with a white
            border has been alive since the previous summer — the bleaching records elapsed time.
          </p>
          <p>
            The Mourning Cloak is one of the longest-lived adult butterflies in North America.
            Most species pass the winter as eggs, caterpillars, or pupae and spend only two to
            four weeks as a winged adult. Mourning Cloaks spend winter as the adult — the same
            winged individual that was feeding in September survives winter and reappears in spring.
            Total adult lifespan runs ten to eleven months in most individuals.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">Eggs laid in rings circling a twig — caterpillars feed in a cluster through five instars on willow and birch</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Nymphalis_antiopa_larva.jpg"
              alt="Mourning Cloak caterpillars (Nymphalis antiopa) clustered on a twig — black bodies with small white dots, rows of branching reddish-brown spines, and a row of red-orange spots along the back"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/3/30/Mourning_cloak_caterpillar.jpg'
              }}
            />
            <figcaption>
              Mourning Cloak caterpillars (<em>Nymphalis antiopa</em>) feeding in a cluster on
              willow. A female lays 200 to 400 eggs in a tight ring around a small twig — the
              eggs circle the twig completely, each touching the next. When the caterpillars hatch,
              they feed as a group through the early instars. Young caterpillars at the outer edge
              of a cluster eat faster and grow larger than isolated individuals of the same age.
              <span className="photo-credit"> Photo: Stsmith · CC BY-SA 3.0 via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            A female Mourning Cloak lays 200 to 400 eggs in a single tight ring around a small
            twig — the eggs wrap completely around the twig, each one touching the next. She
            selects twigs on willows, cottonwoods, paper birch, hackberry, elm, or aspen. In
            Midwest yards, willow and hackberry are the most commonly used hosts.
          </p>
          <p>
            When the caterpillars hatch two weeks later, they feed as a group. Early-instar
            caterpillars are black with small white dots and rows of branching reddish-brown
            spines. The cluster moves together across the host plant — young caterpillars at
            the leading edge eat faster than individuals from the same cohort feeding alone.
            As they advance through the third, fourth, and fifth instars, they disperse and
            feed individually. Late-instar caterpillars develop a row of bright red-orange
            spots running down the back between the spine rows.
          </p>
          <p>
            The full-grown caterpillar reaches roughly 1.75 to 2 inches. It leaves the host
            plant before pupating, walking down the trunk and into nearby undergrowth or woody
            debris to hang and form a chrysalis. Adults emerge after ten to fourteen days. Egg
            laying begins in April in southern populations and May through early June in the
            upper Midwest.
          </p>
        </section>

        <section aria-labelledby="dormancy-heading">
          <h2 id="dormancy-heading">After emerging in June, the adult goes dormant through summer and does not breed until spring</h2>
          <p>
            Adults that emerge from their chrysalis in June or July enter a summer dormancy called
            estivation. During the hottest weeks they roost in cool, shaded spots — under loose
            bark, in hollow trees, inside dense brush. They stop breeding. This pause extends
            through July and into August. Then, in late August and September, the adults come
            back out to feed.
          </p>
          <p>
            During fall fueling, Mourning Cloaks seek sap flows at wounds in maple, birch, and
            elm. They visit fermenting fruit on the ground — rotten apples, crabapples, and wild
            plums. They occasionally lap aphid honeydew from bark under aphid colonies. Flower
            nectar plays a smaller role for this species than for most nymphalids; Mourning Cloaks
            rely more heavily on sap and fermenting sugar than on blossoms.
          </p>
          <p>
            In October, adults find winter roost sites: spaces between loose bark and the wood
            beneath in large-diameter trees, inside hollow trunks or stumps, behind stacked
            boards or logs. Body fluids contain cryoprotectant compounds that lower the freezing
            point, allowing survival in temperatures approaching -20°C in cold-hardy individuals.
          </p>
          <p>
            When temperatures climb above 50°F for two or three consecutive days in late winter,
            Mourning Cloaks emerge. The adults are seeking the same sap flows and fermenting fruit
            they fueled on in fall. There is no flower in a southern Wisconsin yard in February.
            The first Mourning Cloak of the year is drinking sap from a tree wound while the
            landscape is still leafless, several weeks before the first nectar-producing flowers
            open.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Keep willows, leave sap wounds open, and let fruit rot on the ground in fall and early spring</h2>
          <ol className="step-list">
            <li>
              <strong>If you have a willow, treat it as a caterpillar host rather than a cleanup problem.</strong>{' '}
              A weeping willow, black willow, or pussy willow in your yard is one of the most
              productive caterpillar hosts in the Midwest. Mourning Cloak females lay clutches
              of 200 to 400 eggs on willow twigs in May and June. Hard pruning during this window
              removes twig clusters with eggs or caterpillars on them. If pruning is needed,
              wait until late summer. A cut branch left on the ground nearby may let caterpillars
              already on it complete development on the fallen foliage.
            </li>
            <li>
              <strong>Leave fallen fruit on the ground in October and again in February and March.</strong>{' '}
              Fermenting apples, crabapples, and pears on the ground in fall provide carbohydrates
              for Mourning Cloaks fueling before winter. The same fruit, softened further over
              winter and re-fermenting in March, is available to adults emerging from roost before
              any flower has opened. Raking this fruit in November removes the resource during the
              two windows it matters most.
            </li>
            <li>
              <strong>Leave a loose-barked log or wood pile in place through April.</strong>{' '}
              Mourning Cloaks roost between loose bark and the wood beneath in large-diameter logs.
              A single old log at the back of the yard — especially one with plates of bark still
              attached but with gaps beneath — provides the insulation that determines whether a
              local adult survives a cold week in January. Leave it in place through at least
              late April to avoid disturbing adults that have not yet emerged.
            </li>
            <li>
              <strong>Don't apply wound sealer to tree wounds in late winter or early spring.</strong>{' '}
              Sap flows from wounds in maple, birch, and elm in late February and March are among
              the only carbohydrates available before any flower opens. Mourning Cloaks, Red
              Admirals, Eastern Commas, and Question Marks all use these sap flows in early spring.
              Tree wound sealers stop this flow. Modern arboriculture does not recommend wound
              sealing for most injuries — trees compartmentalize wounds more effectively without
              sealant — so letting the sap run in spring costs nothing and feeds the first
              butterflies of the year. Find native plant options for summer with{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>
              .
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">What shares the sap flow in February and the willow in June</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('red-admiral')}>
                Red Admiral
              </button>{' '}
              &mdash; overwinters as adult and uses sap flows in early spring before any flowers
              open; both species are active in February and March in the same yard, and both fuel
              on fermenting fruit in October; Red Admirals use nettles rather than willows for
              caterpillar host, so a yard with both willow and a patch of stinging nettle supports
              both species from egg to adult
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('tiger-swallowtail')}>
                Tiger Swallowtail
              </button>{' '}
              &mdash; also uses willows, cottonwoods, and birches as larval hosts; Mourning Cloak
              caterpillar clusters and Tiger Swallowtail eggs often appear on the same willow in
              May and June; Tiger Swallowtails emerge from overwintering pupae weeks after the
              Mourning Cloak adult is already active in spring
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('canada-goldenrod')}>
                Canada Goldenrod
              </button>{' '}
              &mdash; post-estivation adults in late August and September visit goldenrod alongside
              Monarchs, Pearl Crescents, and American Bumble Bees; Mourning Cloaks nectar on
              goldenrod less than most nymphalids but are present in the late-summer goldenrod
              community while they fuel before winter
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spicebush-swallowtail')}>
                Spicebush Swallowtail
              </button>{' '}
              &mdash; the Spicebush Swallowtail caterpillar folds a single spicebush leaf over
              itself and lives inside; the Mourning Cloak caterpillar cluster disperses as
              individuals in later instars and builds no shelter; both strategies result in
              caterpillars that are difficult to spot from a standing position — the cluster
              blends into the willow branch, and the leaf-folder disappears inside the spicebush
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-screech-owl')}>
                Eastern Screech-Owl
              </button>{' '}
              &mdash; both use loose bark and hollow sections in the same old deciduous trees; a
              yard with large oaks or willows retaining hollow sections supports Mourning Cloak
              winter roosts in the bark crevices and screech-owl nesting in the cavities
              at the same time
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hackberry')}>
                Hackberry
              </button>{' '}
              &mdash; a documented caterpillar host in Midwest yards alongside willow and
              birch; Mourning Cloak females lay egg rings on hackberry twigs in May and
              June; adult Mourning Cloaks and Hackberry Emperor caterpillars overwinter on
              the same large-diameter hackberry trunks — the Mourning Cloak in bark crevices,
              the Hackberry Emperor in the leaf litter below
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build the yard that supports an adult butterfly through an entire year.</strong>{' '}
            Add willow, birch, or hackberry to support caterpillars with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , understand why log and leaf structures matter with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , and see which butterflies share the fall goldenrod with the{' '}
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