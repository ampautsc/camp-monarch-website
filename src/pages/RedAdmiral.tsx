import type { Page } from '../App'

interface RedAdmiralProps {
  onNavigate: (page: Page) => void
}

export default function RedAdmiral({ onNavigate }: RedAdmiralProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Red_admiral_butterfly_arp.jpg"
          alt="Red Admiral butterfly (Vanessa atalanta) with wings fully open — velvety black wings with a broad orange-red band crossing each forewing and an orange-red border along the hindwing margin, three to five white spots near each forewing tip, wingspan around two and a half inches"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Vanessa_atalanta_MHNT.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Charles J. Sharp&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Red_admiral_butterfly_arp.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Red Admiral</h1>
        <p className="hero__lead">
          In February in Wisconsin, before a single flower has opened, a Red Admiral finds a wound
          in a maple tree where sap is running and presses its proboscis into the flow. The butterfly
          has been behind a piece of loose bark since October. It emerged during a warm spell and is
          burning the fat reserves it loaded on goldenrod and fermenting apples the previous fall.
          The same insect you see nectaring on asters in September went to sleep in October, woke up
          in February, and is now drinking tree sap in a yard that still has snow on the ground.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">Vanessa atalanta: velvety black with orange-red bands, white spots, and hindwing tails — two and a half inches across</h2>
          <p>
            The Red Admiral's wings are velvety black on the upper surface. Across each forewing,
            from the leading edge diagonally to the trailing margin, runs a broad orange-red band.
            The hindwing carries the same orange-red as a solid border along its outer edge. Near
            the tip of each forewing sit three to five white spots — the largest shaped like a
            crescent. On the underside, when the wings close, the hindwing is marbled in brown, gray,
            and pale blue-green, with a small pale crescent near the outer margin. The underside
            pattern provides camouflage when the butterfly rests on bark or leaf litter with wings shut.
          </p>
          <p>
            Wingspan in North American populations runs 1.75 to 3 inches. Females are typically
            larger than males. The species ranges across North America, Europe, North Africa, and
            Asia — one of the widest distributions of any butterfly. The Midwest population draws
            from two sources each spring: individuals that migrated north from overwintering grounds
            in the Gulf states, and adults that spent winter in place beneath bark or inside hollow
            trunks within the region.
          </p>
          <p>
            Two broods fly most Midwest years. The first adults appear in late April through June —
            both arriving migrants and locally overwintered adults. A second generation flies
            from July into early October. Males select high perches — fence posts, shrub tops,
            hilltops — and dart out at any butterfly or insect entering the territory, returning
            to the same spot within seconds. A male working a sunny corner of a yard returns
            to the same perch hundreds of times across an afternoon. Females move more slowly,
            pausing repeatedly at low vegetation.
          </p>
        </section>

        <section aria-labelledby="nettles-heading">
          <h2 id="nettles-heading">The caterpillar cuts a stinging nettle leaf partway across, folds the tip over using silk threads, and feeds from inside the fold</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/Urtica_dioica.jpg"
              alt="Stinging nettle (Urtica dioica) stem with opposite serrated leaves — the primary host plant for Red Admiral caterpillars in North America"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Brennnessel_%28Urtica_dioica%29_%282%29.jpg'
              }}
            />
            <figcaption>
              Stinging nettle (<em>Urtica dioica</em>), the Red Admiral's primary host plant in
              North America. A female deposits a single egg on the upper surface of a nettle leaf.
              The hatched caterpillar feeds on the leaf surface for a day, then cuts partway across
              the leaf near the tip and folds the section over using silk threads — a shelter it
              exits only to eat, retreating back inside to rest. A nettle patch with Red Admiral
              caterpillars in late July shows a series of folded leaves and skeletonized patches
              along the stems.
              <span className="photo-credit"> Photo: CC BY-SA 3.0 via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Female Red Admirals lay eggs singly on the upper surface of stinging nettle leaves —
            one egg per leaf. The primary host plant in North America is stinging nettle
            (<em>Urtica dioica</em>). False nettle (<em>Boehmeria cylindrica</em>) and wood nettle
            (<em>Laportea canadensis</em>) are also used; all three belong to the family Urticaceae.
            Outside this plant family, Red Admiral caterpillars in North America do not develop.
          </p>
          <p>
            Within a day or two of hatching, the caterpillar cuts partway across the leaf near
            the tip and folds the cut section downward, securing the fold with silk threads to form
            a tent. The caterpillar stays inside except when eating — it extends its body out
            through the opening to graze the leaf surface immediately adjacent, then retreats back
            inside. As it grows through its five instars over three to four weeks, it constructs
            progressively larger tents, eventually tying adjacent leaves together with silk.
          </p>
          <p>
            A nettle patch supporting caterpillars in late July shows the pattern clearly: leaves
            folded at their tips, individual leaves tied together, leaf surfaces notched and
            skeletonized around each tent. The caterpillar is not visible from above. Pupa forms
            inside a folded leaf or in nearby vegetation. Adults emerge ten to fourteen days after
            pupation.
          </p>
        </section>

        <section aria-labelledby="overwintering-heading">
          <h2 id="overwintering-heading">Some adults survive winter behind loose tree bark and emerge in February to drink maple sap before any flower opens</h2>
          <p>
            Most Midwest Red Admirals migrate south in September and October — populations
            concentrate in the Gulf Coast states and Florida. Some do not migrate. Adults that find
            adequate insulation — the space between loose bark and the trunk of an old oak, inside
            a log pile, behind the boards of an outbuilding wall — survive temperatures down to about
            -5°C. The limit is not cold tolerance in the body but insulation at the roost site.
          </p>
          <p>
            Adults that survive winter emerge during warm spells starting in February or early March,
            weeks before any nectar-producing flowers are open. At that point, sap flows at wounds
            in maple, elm, and birch trees are the primary carbohydrate source. Red Admirals also
            visit fermenting fruit still on the ground from the previous fall — rotten apples or
            pears softened over winter. The sap flows and fermenting fruit are the only available
            sugars while the land is still leafless.
          </p>
          <p>
            By October, the adults active in a Midwest yard are loading reserves. Red Admirals
            nectaring heavily on goldenrod and aster in September are building fat for migration
            or winter dormancy. Adults visiting fermenting crabapples, wild grapes, and pears
            in the same period are doing the same. A yard with fruit-bearing native shrubs and
            late-blooming flowers in September and October provides both resources at the
            point they matter most.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Leave the nettles in the wet corner, skip insecticides in July, and let fruit rot on the ground in October</h2>
          <ol className="step-list">
            <li>
              <strong>Stop clearing stinging nettles from wet edges of your yard.</strong>{' '}
              A single patch of 6 to 12 nettles — along a fence line at a downspout, in a shaded
              corner near a water feature, at the edge of a rain garden — is enough to support
              multiple Red Admiral broods each summer. The plants spread from rhizomes and
              re-establish each year without replanting. Gloves handle the sting during any
              necessary management. The folded leaves in that nettle patch in late July contain
              caterpillars that will become fall-generation adults by August.
            </li>
            <li>
              <strong>Skip insecticide applications near nettle patches in July and August.</strong>{' '}
              Red Admiral caterpillars are inside folded leaf tents during the day — they are not
              visible from a standing position. Pyrethroid or neonicotinoid applications to nettle
              patches during the peak egg-laying and caterpillar period kill the cohort inside
              those tents. If insect pressure is heavy on nearby garden plants, treat those plants
              only and exclude the nettle patch.
            </li>
            <li>
              <strong>Leave fallen fruit on the ground in October and in late February.</strong>{' '}
              Fermenting apples, crabapples, pears, or wild grapes still on the ground in October
              draw Red Admirals fueling for migration or winter dormancy. The same fruit softened
              further over winter and fermented again in March provides carbohydrates for adults
              that overwintered locally and emerged before any flowers are open. Raking or
              composting this fruit in October removes the resource during the two windows it
              is most needed.
            </li>
            <li>
              <strong>Leave log piles, brush piles, and loose bark through winter.</strong>{' '}
              The adults that survive winter in the Midwest roost in spaces between loose bark
              and trunk wood, inside hollow logs, and behind stacked boards. A brush pile or
              loose-barked log left in a back corner costs nothing and provides the insulation
              that determines whether a local adult survives a cold snap in January. Find native
              nectar plants for fall fueling with{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>
              .
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">What shares the goldenrod in September and the sap flow in February</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('canada-goldenrod')}>
                Canada Goldenrod
              </button>{' '}
              &mdash; in late August and September, Red Admirals nectar on goldenrod alongside
              migrating Monarchs, American Bumble Bees, and Pearl Crescents; a yard with goldenrod
              blooming into October gives a departing Red Admiral the same refueling station as
              a migrating Monarch — both are loading fat reserves on the same flower heads before
              leaving for winter
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('new-england-aster')}>
                New England Aster
              </button>{' '}
              &mdash; blooms from late August through hard frost, extending the nectar window past
              the goldenrod peak; Red Admirals working asters in October are some of the last
              butterflies active before migration or overwintering begins; the same asters that
              carry overwintering Pearl Crescent caterpillars at their base provide nectar to
              Red Admirals that may spend the winter fifty feet away behind the bark of a nearby oak
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('pearl-crescent')}>
                Pearl Crescent
              </button>{' '}
              &mdash; nectars on goldenrod and asters in September; one inch wingspan compared
              to the Red Admiral's two and a half; the Pearl Crescent caterpillar overwinters
              in the leaf litter at the base of asters, while the Red Admiral adult overwinters
              behind bark in nearby trees — different strategies that both depend on a yard
              leaving structural cover intact through winter
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('tiger-swallowtail')}>
                Tiger Swallowtail
              </button>{' '}
              &mdash; the two species nectar on goldenrod and asters in September and visit
              fermenting fruit in October; Tiger Swallowtails are larger and slower; a Red Admiral
              is territorial enough to fly at a Tiger Swallowtail entering its perch zone and
              usually chase it off before returning to the same post within seconds
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('monarch-life')}>
                Monarch Butterfly
              </button>{' '}
              &mdash; passes through Midwest yards in September on the migration south;
              a Monarch nectaring on goldenrod in mid-September and a Red Admiral working the
              same flowers the same afternoon are engaged in the same activity — loading fat
              for a long flight — but the Monarch is flying 2,500 miles to Michoacán while
              the Red Admiral may spend the winter a hundred yards away behind bark on a nearby elm
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hackberry-emperor')}>
                Hackberry Emperor
              </button>{' '}
              &mdash; fuels on sap flows and fermenting fruit rather than nectar — the same resources Red Admirals use in late summer; a Hackberry Emperor and a Red Admiral on the same fallen apple in September are using the same food by different routes; the Hackberry Emperor overwinters as a caterpillar in leaf litter while the Red Admiral overwinters as an adult behind bark in the same yard
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build a yard that supports Red Admirals and the community they share it with.</strong>{' '}
            Add native goldenrod and asters with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , understand what leaf cover protects with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , and see what else visits your yard in the{' '}
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