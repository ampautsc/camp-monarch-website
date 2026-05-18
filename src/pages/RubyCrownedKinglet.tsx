import type { Page } from '../App'

interface RubyCrownedKingletProps {
  onNavigate: (page: Page) => void
}

export default function RubyCrownedKinglet({ onNavigate }: RubyCrownedKingletProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ruby-crowned_Kinglet_%28Corthylio_calendula%29_%2814349226095%29.jpg/960px-Ruby-crowned_Kinglet_%28Corthylio_calendula%29_%2814349226095%29.jpg"
          alt="Ruby-crowned Kinglet perched on a thin branch — tiny olive-green bird with bold white eye ring and two white wingbars, bill pointed toward a branch tip"
          className="species-hero-image"
          style={{ objectPosition: 'center 30%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Regulus_calendula_1.jpg/960px-Regulus_calendula_1.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Channel City Camera Club&nbsp;&middot;&nbsp;CC BY 2.0 via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Ruby-crowned Kinglet</h1>
        <p className="hero__lead">
          In mid-April, a bird the size of a large bumblebee arrives in yards across much of the
          eastern and central United States. It weighs 6 grams — lighter than two pennies — and
          it has been flying since dark. It lands in the shrubs at first light and immediately
          begins to forage: hovering at branch tips, pivoting to the underside of leaves, moving
          branch to branch in a pattern that looks frantic because the stakes are frantic. It is
          looking for insects. How long it stays on your property, and whether it makes it to the
          boreal spruce-fir forests of Canada where it breeds, depends partly on whether it finds any.
        </p>
        <p className="hero__lead">
          Six months later, the same species returns southbound through October — but the food
          source that determines how long it stays is different. In fall, when cold nights shut
          down insect activity, a yard with bayberry holds a kinglet for 3 to 7 days. A yard
          without one holds it for 3 to 7 hours. Two migrations, two plant arguments, one
          consistently underplanted yard.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fat-reserve-heading">
          <h2 id="fat-reserve-heading">Six grams and a fat reserve burning down from last night&apos;s flight</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Regulus_calendula_1.jpg/960px-Regulus_calendula_1.jpg"
              alt="Ruby-crowned Kinglet perched on a branch showing olive-green back, white wing bars, and the characteristic white eye ring that frames its small dark eye"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ruby-crowned_Kinglet_%28Corthylio_calendula%29_%2814349226095%29.jpg/960px-Ruby-crowned_Kinglet_%28Corthylio_calendula%29_%2814349226095%29.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              The white eye ring is the most reliable field mark — a complete, unbroken ring
              around the small dark eye, standing out against the olive-green face. The bill is
              fine and pointed, built for picking insects from bark crevices and leaf surfaces.
              <span className="photo-credit"> Photo: Mdf / CC BY-SA 3.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            A bird weighing 6 grams cannot carry more than a fraction of a gram of fat at
            departure. Nocturnal migrants burn fat at roughly 0.1 gram per hour of sustained
            flight. A Ruby-crowned Kinglet completing a 200-mile overwater crossing — which
            migrants traveling up the Atlantic flyway do regularly — arrives with its fat
            reserves near zero. It needs to begin eating within minutes of landing.
          </p>
          <p>
            The prey it is looking for during spring migration is not fruit, seeds, or nectar.
            It is insects: caterpillar eggs cemented to bark and twigs from the previous fall,
            overwintering spider egg sacs tucked under loose bark, early aphid colonies emerging
            on new leaf growth, tiny beetles in bark crevices. Most of these prey items are
            present on native shrubs in April — before full leaf-out, they are concentrated on
            branch surfaces where a hovering kinglet can reach them by clinging to bark or
            pivoting at branch tips.
          </p>
          <p>
            Non-native ornamental shrubs — common barberry, burning bush, English boxwood,
            nandina — host almost none of this prey. North American insects evolved alongside
            native plant chemistry, and most cannot complete their life cycles on plants that
            lack the chemical signals they require. Researchers documenting caterpillar density
            by plant type have found that native oaks, cherries, willows, and dogwoods host
            hundreds of caterpillar species; introduced ornamentals typically host fewer than
            five. A Ruby-crowned Kinglet arriving in a yard planted with non-native ornamentals
            finds a landscape that looks like cover but contains almost no food.
          </p>
        </section>

        <section aria-labelledby="bayberry-heading">
          <h2 id="bayberry-heading">Bayberry wax, 50% fat, and a berry that holds into December</h2>
          <p>
            In October, when overnight temperatures drop below 45°F and insect flight nearly
            stops, kinglets shift from hunting insects to eating berries. Most fall berries are
            10 to 20% fat by dry weight. Bayberry berries — the small gray-white fruits on{' '}
            <em>Morella pensylvanica</em> and <em>Morella caroliniensis</em> — are covered in a
            thick, hard wax that is approximately 50% fat. The wax also resists microbial
            breakdown, so bayberry berries persist on the shrub through November and into
            December, long after softer berries have been consumed or rotted.
          </p>
          <p>
            Most songbirds cannot digest this wax coating efficiently. Kinglets can. So can{' '}
            <button className="link-button" onClick={() => onNavigate('yellow-rumped-warbler')}>
              Yellow-rumped Warblers
            </button>
            , which are named in part for this dietary specialization. On cold October days,
            a bayberry shrub loaded with ripe berries provides a dense, accessible fat source
            at a moment when almost no other food is available. On warm afternoons when insect
            activity resumes, kinglets leave the bayberry and return to hunting. A yard with
            both native shrubs hosting overwintering insects and bayberry in fruit supports
            both feeding modes as temperature changes through the day.
          </p>
          <p>
            <em>Morella pensylvanica</em> (northern bayberry) grows into a dense multi-stemmed
            shrub 5 to 10 feet tall. Male and female flowers occur on separate plants; berry
            production requires a female plant with at least one male nearby for pollination.
            Northern bayberry tolerates poor, sandy, or dry soils and spreads slowly by root
            sprout, forming dense colonies in time. A single established female in fruit in
            mid-October extends a kinglet&apos;s stopover from hours to days.
          </p>
        </section>

        <section aria-labelledby="ruby-crown-heading">
          <h2 id="ruby-crown-heading">The ruby crown stays flat — until another male lands in the same shrub</h2>
          <p>
            The red patch at the center of the male&apos;s crown is a set of specialized feathers
            he normally holds pressed flat against his head, completely concealed under the
            surrounding olive-green feathers. The patch is invisible in typical perched postures.
            Males raise it during territorial encounters with other males, during courtship
            display, and occasionally when startled.
          </p>
          <p>
            The display is brief and context-specific. In field conditions — including a
            migration stopover in a backyard shrub — a male encountering a second male will
            raise the patch fully, hold it for two to ten seconds, and lower it again. The red
            is saturated enough that it reads as a distinct color even in low light. Females
            lack the patch entirely.
          </p>
          <p>
            Most observers who watch kinglets during migration never see the crown display
            because it requires a specific trigger: a second male in close range. The name of
            the species comes from what taxonomists saw on collected specimens, not from what
            a casual observer sees in a yard. The marks to look for in the field are the white
            eye ring, the two white wingbars, and the combination of small size and constant
            hovering movement.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Bayberry for October fat, native shrubs with insects in April, unpruned branch tips, intact leaf litter, and no migration-window insecticide</h2>

          <figure className="species-content-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ruby-crowned_Kinglet_%28Corthylio_calendula%29_%2814349226095%29.jpg/960px-Ruby-crowned_Kinglet_%28Corthylio_calendula%29_%2814349226095%29.jpg"
              alt="Ruby-crowned Kinglet in active foraging posture among shrub branches in spring, small olive-green body visible between branch forks"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Regulus_calendula_1.jpg/960px-Regulus_calendula_1.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              During migration stopovers, kinglets move through the shrub layer methodically,
              checking branch tips and leaf undersides for insects. A bird this size needs to
              eat nearly continuously from dawn to dusk to rebuild the fat it burned overnight.
              <span className="photo-credit"> Photo: Channel City Camera Club / CC BY 2.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant bayberry — at least one female plant with a male nearby.</strong>{' '}
              <em>Morella pensylvanica</em> (northern bayberry) and <em>Morella caroliniensis</em>{' '}
              (southern bayberry) produce persistent, fat-rich berries that ripen in October and
              hold through November. On cold October days when insect activity shuts down, bayberry
              berries provide the only reliable fat source in most suburban yards. The same shrubs
              serve the{' '}
              <button className="link-button" onClick={() => onNavigate('yellow-rumped-warbler')}>
                Yellow-rumped Warbler
              </button>
              {' '}through the same mechanism. Find species suited to your zone at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Plant native shrubs that carry insects from late winter through early spring.</strong>{' '}
              Serviceberries, native viburnums, native wild roses, and dogwoods break dormancy
              early and support insect activity in March and April — the window when northbound
              kinglets pass through. The caterpillar density on a native serviceberry or wild rose
              is documented to be 40 to 100 times higher per unit of canopy area than on a
              comparable non-native ornamental.
            </li>
            <li>
              <strong>Do not prune shrubs in March or April.</strong>{' '}
              Branch tips pruned in late winter remove the overwintering insect eggs and spider
              egg sacs that migrating kinglets are searching for. Pruning that leaves clean bare
              branches also eliminates the rough bark texture and dead-stem structure where insects
              overwinter. If shrub pruning is necessary, do it in early March before migration
              peaks, or wait until after May 15.
            </li>
            <li>
              <strong>Leave fallen leaves under and around shrubs through October and November.</strong>{' '}
              Leaf litter under shrubs holds overwintering insect eggs, pupae, and adults at
              temperatures that remain above freezing even when air drops below. On warm October
              afternoons, kinglets drop into the leaf layer under shrubs to forage for
              invertebrates. The same leaf layer hosts the overwintering firefly larvae covered
              on the{' '}
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>
              {' '}page — the same action that benefits fireflies also keeps the kinglet&apos;s
              October foraging habitat.
            </li>
            <li>
              <strong>Reduce broad-spectrum insecticide use in April–May and September–October.</strong>{' '}
              The two migration windows overlap with peak yard-treatment seasons. Insecticide
              applications that eliminate aphid colonies and caterpillar populations from shrubs
              during these periods remove the prey that migrating insectivores depend on during
              stopovers. The full picture is at{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticide Guide
              </button>
              .
            </li>
          </ol>
        </div>

        <section aria-labelledby="migration-heading">
          <h2 id="migration-heading">April northbound, October southbound — cold fronts move them both</h2>
          <p>
            Ruby-crowned Kinglets breed in the spruce-fir belt of the boreal forest, from
            southeastern Alaska east across Canada to Newfoundland, and south into the higher
            elevations of the Rocky Mountains. They winter along the Gulf Coast, in the
            southwestern United States, and in Mexico. The migration routes pass through
            virtually every yard east of the Rockies, twice each year.
          </p>
          <p>
            The northbound window runs from late March through mid-May across most of the
            eastern and central United States. Birds arrive in the mid-Atlantic and Midwest
            in early to mid-April. The southbound window runs from late September through
            mid-November, with peak passage from October 10 through November 10 in most of
            the eastern flyways. Both movements are amplified by cold fronts — the morning
            after a front passes through, migrants appear in numbers not seen the day before.
          </p>
          <p>
            Stopovers in a location with adequate food typically last 2 to 7 days — long enough
            to rebuild the fat reserves needed for the next flight leg. In a yard where both the
            spring insect layer (native shrubs in April) and the fall berry layer (bayberry in
            October) are present, the same bird may stop twice in the same yard within six
            months, once in each direction.
          </p>
        </section>

        <section aria-labelledby="id-heading">
          <h2 id="id-heading">Olive-green, white eye ring, two wingbars — size and movement give it away first</h2>
          <p>
            The Ruby-crowned Kinglet is 3.5 to 4.5 inches long and weighs 5 to 10 grams
            depending on fat reserves. The body is olive-green above and whitish-gray below,
            with two white wingbars on the folded wing and a complete white eye ring. The bill
            is fine and pointed. The tail is often cocked slightly upward while foraging.
          </p>
          <p>
            The species most likely to be confused with the Ruby-crowned Kinglet in the eastern
            U.S. are the Golden-crowned Kinglet (striped face pattern with a gold or orange crown
            stripe, not a plain eye ring) and Tennessee Warblers in fall plumage (similar color
            but lacking the complete eye ring). The combination of complete white eye ring, two
            wingbars, and hover-foraging behavior is not matched by any other bird commonly seen
            in eastern yards.
          </p>
          <p>
            The call is a loud, scratchy <em>tsit</em> given nearly continuously during foraging —
            loud enough that it locates the bird inside dense shrub before it is visible.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Kinglets share the shrub layer during migration with several other insect-hunting species.</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('yellow-rumped-warbler')}>
              Yellow-rumped Warblers
            </button>
            {' '}move through the same shrubs in April, eating berries and insects from the same
            branch surfaces. The{' '}
            <button className="link-button" onClick={() => onNavigate('black-capped-chickadee')}>
              Black-capped Chickadee
            </button>
            {' '}forages year-round in the same branches for the same overwintering insect eggs
            and pupae. What all three require from the shrub layer is food — insects that native
            plants carry and non-native ornamentals do not. See why the shrub layer is the
            most commonly absent of the four vertical zones in the{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-layers')}>
              Habitat Layers guide
            </button>
            . See the full community at{' '}
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
