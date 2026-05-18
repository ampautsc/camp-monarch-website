import type { Page } from '../App'

interface WildTurkeyProps {
  onNavigate: (page: Page) => void
}

export default function WildTurkey({ onNavigate }: WildTurkeyProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Tom_turkey_strutting.jpg/960px-Tom_turkey_strutting.jpg"
          alt="Male Wild Turkey in full display — tail fanned into a wide semicircle, back feathers raised, red and blue bare-skinned head, standing on fallen leaves in a mixed hardwood forest"
          className="species-hero-image"
          style={{ objectPosition: 'center 25%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Meleagris_gallopavo_-male.jpg/960px-Meleagris_gallopavo_-male.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: USFWS&nbsp;&middot;&nbsp;Public Domain via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Wild Turkey</h1>
        <p className="hero__lead">
          On a November morning you might look to the back of the yard and see a group of birds
          the size of small dogs working through the fallen leaves under the oaks. They move
          slowly, each one scratching backward with both feet at once, flipping leaves two feet
          behind them, stepping forward to pick at what the scratch exposed. A flock of ten
          turkeys can turn over a half-acre of leaf litter in a morning — acorns, beetles,
          millipedes, salamanders, seeds of dozens of plant species pulled up and redistributed.
          Then they walk into the neighbor&apos;s woodlot and disappear.
        </p>
        <p className="hero__lead">
          <em>Meleagris gallopavo</em> &mdash; the Eastern Wild Turkey was nearly gone by 1900,
          reduced from an estimated 10 million birds to fewer than 30,000 by market hunting and
          forest clearing. Reintroduction programs over the following 80 years brought the
          population back to roughly 6.5 million. The turkey now reaches the suburbs wherever
          a connected woodlot has roosting trees and an intact leaf-littered floor to forage
          through from October to May.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="scratch-heading">
          <h2 id="scratch-heading">Acorns, beetle grubs, and the scratch that reaches both</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Wild_Turkey_Meleagris_gallopavo.jpg/960px-Wild_Turkey_Meleagris_gallopavo.jpg"
              alt="Wild Turkey hen in fall plumage — brown and bronze feathered, standing on a ground layer of fallen leaves among tree roots — showing the typical foraging posture of the species on the forest floor"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Tom_turkey_strutting.jpg/960px-Tom_turkey_strutting.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              A Wild Turkey hen foraging on the leaf litter floor. Turkeys extract acorns,
              beetle larvae, seeds, and invertebrates from beneath the leaf mat using a
              double-foot backward scratch — the same technique the{' '}
              <button className="link-button" onClick={() => onNavigate('eastern-towhee')}>
                Eastern Towhee
              </button>
              {' '}uses, scaled up to a 15-pound bird. The scratch is the only way the turkey
              reaches food that is buried under debris the bird cannot move by picking.
              <span className="photo-credit"> Photo: USFWS / Public Domain / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Wild Turkeys eat almost nothing from standing plants. Their entire diet comes from
            the ground layer: acorns and other mast buried under leaf litter, seeds dropped from
            native perennials and woody plants, and invertebrates — beetles and their larvae, ants,
            grasshoppers, spiders, centipedes, small salamanders — found in the organic debris
            where soil meets the leaf layer above it. The double-foot backward scratch that exposes
            this food is the defining behavior of the species, performed hundreds of times per bird
            per day.
          </p>
          <p>
            In fall and winter, mast accounts for roughly half the turkey&apos;s diet in
            mast-producing hardwood forests. A mature white oak drops between 10,000 and 20,000
            acorns in a good mast year. Turkeys, deer, blue jays, gray squirrels, and wood ducks
            all extract those calories, each by a different mechanism. The turkey&apos;s mechanism
            is the scratch: it cannot reach a buried acorn any other way. A yard with mature oaks
            and intact leaf litter beneath them holds food that turkeys will return to week after
            week from November through March. A yard where every leaf is blown and bagged does not.
          </p>
          <p>
            The scratch also acts as disturbance in the long-grass sense. Research in eastern
            hardwood forests documents that turkey foraging shreds the leaf mat, redistributes
            seeds from the understory plants growing above, and exposes bare mineral soil in small
            patches that favor germination. The turkeys are consuming the mast and, in the process,
            dispersing the seeds of the plants that will produce the next mast.
          </p>
        </section>

        <section aria-labelledby="nest-heading">
          <h2 id="nest-heading">One egg per day, 28 days, and a hen who covers the eggs before she leaves</h2>
          <p>
            Wild Turkey hens nest on the ground, alone. No other turkey is present during
            incubation. The hen scrapes a shallow depression in leaf litter under the lowest
            branches of a dense shrub or at the base of a fallen log, lays one egg per day for
            10 to 14 days, then begins incubating the clutch. She leaves the nest only once or
            twice per day to drink and feed. Incubation lasts 28 days, and all eggs hatch within
            hours of each other.
          </p>
          <p>
            Each time she leaves the nest, she covers the eggs with dead leaves before walking
            away. She does not return the same way she left — she approaches from a different
            angle each time to avoid creating a worn path that a predator could follow. The nest
            has no cup, no added lining material. The eggs sit in the leaf duff itself, insulated
            and hidden by the leaves she gathered before she went.
          </p>
          <p>
            Raccoons, fox, coyotes, and skunks find the majority of Wild Turkey nests before
            hatch. A hen who loses her first clutch will renest with a smaller clutch — typically
            6 to 9 eggs. A hen who loses the second clutch does not attempt a third. Annual
            productivity across the population depends almost entirely on how many first clutches
            survive to hatch.
          </p>
        </section>

        <section aria-labelledby="poults-heading">
          <h2 id="poults-heading">Running at two hours, foraging at two days, not warm-blooded for two weeks</h2>
          <p>
            Wild Turkey poults hatch covered in down and can stand within an hour. They follow
            the hen away from the nest site within 24 hours. They cannot fly for the first
            10 to 14 days. From the first day in the field, each poult finds and catches its
            own food — the hen does not bring food to them. They forage in the leaf litter and
            low vegetation near the brood, eating beetles, ants, caterpillars, and other
            invertebrates that live in the ground layer.
          </p>
          <p>
            For those first two weeks, poults cannot regulate their own body temperature. When
            a poult gets cold, it runs back to the hen and crawls under her wing to be brooded.
            She broods the group frequently throughout the day and through every night until
            the poults are old enough to roost in trees. The forage-return-brood cycle repeats
            all day: the poult walks out into the leaf litter, eats for a few minutes, gets
            cold, returns to the hen. How far it can walk before needing to return is the
            radius within which it must find food.
          </p>
          <p>
            The protein from insects drives feather growth, and growing feathers is what makes
            thermoregulation possible. A poult must eat insects to grow feathers, and it must
            grow feathers to survive long enough to keep eating insects. At 14 days the first
            wing-tip feathers reach flying length. At 6 to 8 weeks the poult can roost in a
            tree with the brood.
          </p>
          <p>
            Roughly 50 to 70 percent of Wild Turkey poults die in the first two weeks after
            hatch — a figure documented across decades of National Wild Turkey Federation
            population research. Cold and starvation account for most of this mortality when
            poults cannot find enough insects within their walking range to maintain protein
            intake and stay warm at the same time. A poult on a mowed lawn with raked edges
            has no leaf-litter invertebrate substrate to work. It walks farther from the
            brood to find food, gets colder faster, and returns with less protein than a
            poult foraging in intact leaf litter 20 feet from where it started.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Leaf litter intact through spring, dense native shrubs in the back corners, and every mature oak kept</h2>

          <figure className="species-content-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Wild_turkeys_in_a_field.jpg/960px-Wild_turkeys_in_a_field.jpg"
              alt="Flock of Wild Turkeys foraging at the edge of a woodland, moving across ground with a mix of grass and fallen leaves, with trees visible in the background"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Tom_turkey_strutting.jpg/960px-Tom_turkey_strutting.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              Wild Turkeys cover a home range of 1 to 5 square miles and return repeatedly to
              locations that have produced food before. A yard or neighborhood block within that
              range that holds intact leaf litter under mature oaks, and dense low shrubs in a
              back corner, becomes a stop on a circuit the flock will work all fall and winter.
              <span className="photo-credit"> Photo: Wikimedia Commons / Public Domain</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Leave the leaves under oaks and woodland-edge trees intact through spring.</strong>{' '}
              Wild Turkey scratch foraging happens in intact leaf litter, not in mulched beds, bare
              soil, or mown lawn. The beetle grubs, earthworms, acorns, and seeds turkeys extract
              from November through March live in the interface between undisturbed leaf duff and
              mineral soil beneath it. That same leaf mat is the layer turkey poults will forage
              for insects in June when they cannot yet fly. Removing it removes both resources. The
              full case for why the leaf layer matters across a dozen species is at{' '}
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>
              .
            </li>
            <li>
              <strong>Allow dense low native shrubs to develop in the back edges and corners.</strong>{' '}
              Wild Turkey nests sit in leaf duff at the base of dense shrubs, where the lowest
              branches touch or nearly touch the ground and the surrounding leaf cover makes the
              nest invisible from a few feet away. Sumac, native viburnums, elderberry, hawthorn,
              and spicebush all provide this structure. A back corner allowed to fill in with
              multi-shrub plantings gives hens a nest site option that a yard of ornamental
              specimens separated by mulch does not. Find native shrubs for your hardiness zone at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Retain any mature oaks, hickories, or beeches already on the property.</strong>{' '}
              A mature white oak that was a sapling in 1840 will drop acorns through the lifetimes
              of everyone reading this. There is no tree available at any nursery that replaces
              one on any timeline that means anything to the people who live here now. Wild Turkeys
              show strong seasonal fidelity to mast-producing trees &mdash; they will return to
              the same oaks year after year as long as the trees stand. Every mature oak removed
              from a neighborhood erases a foraging anchor that a flock used, and a new planting
              takes a human generation to produce the same food load. See which oaks are native
              to your region at{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>
              .
            </li>
          </ol>
        </div>

        <section aria-labelledby="roosting-heading">
          <h2 id="roosting-heading">Twenty feet up, same trees, every night</h2>
          <p>
            Wild Turkeys roost in trees at night. They fly up at dusk to perches 15 to 30 feet
            off the ground on large horizontal branches in mature oaks, beeches, pines, and
            tulip poplars. A flock spreads across several adjacent large trees and returns to
            the same roost night after night through the winter, shifting only when disturbed
            repeatedly or when a roost tree comes down. At dawn they fly to the ground and walk
            to the first foraging area of the day.
          </p>
          <p>
            In suburban and edge neighborhoods, turkeys roost in any mature tree with branches
            wide enough to hold a 15- to 20-pound bird. The roost and the foraging area are
            often on different properties. A flock may roost in a neighbor&apos;s white pines
            and arrive in your yard to scratch under the oaks when the light changes. What
            brings them to your property in the morning is not where they slept &mdash; it is
            where the leaf litter is.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The Wild Turkey shares the ground layer with species that all need the same intact leaf litter.</strong>{' '}
            The{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-towhee')}>
              Eastern Towhee
            </button>
            {' '}scratches through the same leaf mat the turkey worked, pulling beetle larvae and
            ant pupae from the upper layer with the same double-kick technique at a smaller scale.{' '}
            <button className="link-button" onClick={() => onNavigate('dark-eyed-junco')}>
              Dark-eyed Juncos
            </button>
            {' '}pick up small seeds along the edges of turkey scratch zones through the winter.{' '}
            <button className="link-button" onClick={() => onNavigate('fireflies')}>
              Firefly larvae
            </button>
            {' '}overwinter in the same leaf layer where turkey poults will be hunting beetles in
            June &mdash; the leaf mat that survives the autumn leaf blower is the layer that
            produces fireflies the following summer and supports turkey broods the following
            spring. See all the species working this same ground layer in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            , or read why the layer itself matters at{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
