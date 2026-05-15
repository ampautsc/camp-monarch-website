import type { Page } from '../App'

interface RedTailedHawkProps {
  onNavigate: (page: Page) => void
}

export default function RedTailedHawk({ onNavigate }: RedTailedHawkProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Red-tailed_Hawk_ad.jpg/960px-Red-tailed_Hawk_ad.jpg"
          alt="Red-tailed hawk perched on a post, showing the classic reddish tail that gives the species its name — the most commonly seen hawk in North America, found on utility poles and fence posts in nearly every suburb and rural road in the country"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: USFWS&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Red-tailed_Hawk_ad.jpg" target="_blank" rel="noopener noreferrer">Public Domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Red-tailed Hawk</h1>
        <p className="hero__lead">
          The red-tailed hawk is the most common hawk in North America — the bird perching
          on the highway overpass, the utility pole, the dead elm at the edge of the field.
          It is so familiar that most people do not pause to look. But the population that
          appears stable on a continent scale is being quietly poisoned. Studies of red-tails
          submitted to wildlife rehabilitation centers find anticoagulant rodenticide in more
          than 90 percent of tested individuals. What you put in a bait station under your
          deck eventually ends up in this bird.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">The scream you have heard ten thousand times</h2>
          <p>
            <em>Buteo jamaicensis</em> is a large buteo — a broad-winged, broad-tailed soaring
            hawk built for open country hunting. The adult weighs one and a half to three and a
            half pounds, with a wingspan of 43 to 58 inches. Females are significantly larger
            than males, a pattern called reversed sexual size dimorphism that is common in
            birds of prey. The diagnostic field marks are the white chest with a dark belly band
            of streaked brown, and — in adults — the brick-red tail that reflects in sunlight.
            That tail is not present at hatching. First-year birds carry a brown-barred tail
            indistinguishable from several other buteo species. The red tail develops after the
            first molt, around age two, when the bird reaches sexual maturity.
          </p>
          <p>
            The screaming call of the red-tailed hawk — a descending, raspy kee-eeeee-arr lasting
            two to three seconds — is the most famous raptor vocalization in the world, though most
            people do not know they have heard it. Every Hollywood film that needs a dramatic raptor
            cry, including scenes featuring bald eagles, uses the red-tail&apos;s call. Bald eagles
            produce a weak series of thin chirps that convey no cinematic power whatsoever; when
            the eagle opens its beak on screen and a piercing scream emerges, it is a red-tail&apos;s
            voice dubbed over the footage. The bird most people associate with the sound of wild
            America is the one sitting on the fence post at the edge of every rural highway.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Red-tailed_hawk_in_flight_edit.jpg/960px-Red-tailed_hawk_in_flight_edit.jpg"
              alt="Red-tailed hawk soaring overhead showing the brick-red upper tail surface and white underparts with dark belly band — the field marks that distinguish adults from the eight other buteo species that share the North American range"
              loading="lazy"
            />
            <figcaption>
              An adult red-tailed hawk soaring over open country. The brick-red upper surface of
              the tail is diagnostic for adults over age two. From below, the dark belly band across
              an otherwise white chest is the most reliable field mark at any distance. Females
              average about a third heavier than males, allowing mated pairs to exploit different
              prey size classes from the same territory.
              <span className="photo-credit"> Photo: Wikimedia Commons&nbsp;·&nbsp;Public Domain</span>
            </figcaption>
          </figure>

          <p>
            Red-tails hunt by scanning from elevated perches — fence posts, dead branch tips,
            utility poles, transmission towers, highway overpasses — then dropping on prey
            below. The eyes contain four times the cone density of human eyes, and like many
            raptors, red-tails can detect ultraviolet light. Vole urine fluoresces under UV,
            creating trails of glowing pathways across meadows that are invisible to human eyes
            but visible to a hawk at 100 feet altitude. A vole highway through unmowed grass
            is literally illuminated for a scanning red-tail. Meadow edges, rough-mown fields,
            and any area with a thick grass layer and a population of small mammals are prime
            hunting territory.
          </p>
          <p>
            The diet is 85 to 90 percent small mammals in most parts of the range: voles,
            mice, cotton rats, ground squirrels, rabbits, and eastern chipmunks. The remainder
            is birds, reptiles, and occasionally large invertebrates. A mated pair defends a
            territory of one to two square miles through the nesting season. They build large
            stick nests in the crown of tall trees — often the highest available point in the
            territory — and return to the same nest year after year, adding material each
            spring until the structure is three feet wide and two feet deep or more. Nest trees
            are usually the largest available: mature oaks, maples, elms, sycamores, cottonwoods,
            or conifers with a commanding view of the surrounding area.
          </p>
        </section>

        <section aria-labelledby="rodenticide-heading">
          <h2 id="rodenticide-heading">The poison running through the food chain</h2>
          <p>
            The breeding bird survey shows the red-tailed hawk population broadly stable at
            approximately 2.3 million individuals — one of the few North American raptors not
            in steep numerical decline. But population counts miss a quieter crisis. Studies
            conducted at wildlife rehabilitation centers in California, Massachusetts, New York,
            and Ontario have found anticoagulant rodenticides — primarily brodifacoum, bromadiolone,
            and diphacinone — in the liver tissue of more than 90 percent of red-tailed hawks
            tested at admission. The birds die of other immediate causes: vehicle strikes, window
            collisions, electrocution on power lines. But when pathologists check for rodenticide
            contamination, it is nearly universal.
          </p>
          <p>
            Anticoagulant rodenticides work by blocking Vitamin K recycling, preventing blood from
            clotting. A poisoned mouse does not die immediately; it becomes lethargic and easy to
            catch over one to two weeks, during which it bleeds internally and continues moving
            through the environment. A red-tailed hawk catches and eats several poisoned mice per
            week. Each meal adds another dose of rodenticide to the hawk&apos;s liver. Sublethal
            accumulation causes impaired flight, reduced hunting efficiency, and immune suppression.
            A hawk that does not die directly from rodenticide poisoning may still fail to reproduce,
            or may not survive a collision that a healthy bird would survive.
          </p>
          <p>
            The pathway from a bait station under a suburban deck to a dying hawk on a utility pole
            three miles away takes two to three weeks and is completely invisible to the homeowner
            who placed the bait. The mice and voles attracted to bait stations are exactly the prey
            base that red-tails, eastern screech owls, and great horned owls patrol the neighborhood
            to remove. Replacing snap traps — which kill immediately and create no secondary
            exposure — with second-generation anticoagulant baits is one of the most direct ways
            residential land use affects raptor health.
          </p>
          <p>
            The same food chain connects to{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-screech-owl')}>
              eastern screech owls
            </button>
            , which face the same secondary poisoning pattern.
            A 2015 study published in{' '}
            <em>Environmental Science &amp; Technology</em>{' '}
            found anticoagulant rodenticide in 96 percent of eastern screech owls submitted for
            rehabilitation in Massachusetts — the same 90-plus-percent contamination rate seen
            in red-tails. The two species eat from the same suburban mouse and vole supply.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that help red-tailed hawks</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Red-tailed_hawk_nest.jpg/960px-Red-tailed_hawk_nest.jpg"
              alt="Red-tailed hawk nest in the fork of a large deciduous tree — a large stick structure typically three feet wide that the same pair returns to and adds material to each spring, requiring a mature canopy tree to support both the weight and the commanding view the hawk requires"
              loading="lazy"
            />
            <figcaption>
              A red-tailed hawk nest in a large deciduous tree. Nesting pairs return to the same
              nest year after year, adding sticks each spring until the structure weighs dozens of
              pounds. The nest is almost always in the crown of the tallest available tree in the
              territory — an argument for planting and protecting large canopy trees wherever the
              footprint of a yard allows.
              <span className="photo-credit"> Photo: Wikimedia Commons&nbsp;·&nbsp;Public Domain</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Remove rodenticide bait stations and replace them with snap traps.</strong>{' '}
              Second-generation anticoagulants — brodifacoum, bromadiolone, difethialone — persist
              in the tissue of any animal that eats a poisoned rodent. A mouse killed by a snap trap
              leaves no secondary exposure. A mouse dying of brodifacoum poisoning becomes lethargic,
              easier to catch, and carries a liver load of anticoagulant that transfers to every
              predator that eats it. Hardware-store snap traps in weatherproof bait boxes kill
              immediately and protect the hawks, owls, foxes, and opossums that patrol your yard for
              the same rodents. See the{' '}
              <button className="link-button" onClick={() => onNavigate('eastern-screech-owl')}>
                Eastern Screech Owl
              </button>{' '}
              page for the full rodenticide picture.
            </li>
            <li>
              <strong>Let at least a section of your yard grow into rough grass or meadow.</strong>{' '}
              Voles, the primary prey of red-tailed hawks in the eastern U.S., live in grass-level
              runways concealed beneath a canopy of unmowed grass stems. A manicured turf lawn,
              cut short and maintained at uniform height, provides no runway cover and supports
              minimal vole populations. A rough edge of unmowed grass behind a garden bed, a
              meadow patch in a back corner, or a hedgerow of native shrubs creates the small-mammal
              habitat that draws hawks into proximity with your yard. Predators that visit regularly
              suppress rodent populations more effectively than any poison. See{' '}
              <button className="link-button" onClick={() => onNavigate('habitat-transformation')}>
                From Lawn to Habitat
              </button>{' '}
              for how to start that transition.
            </li>
            <li>
              <strong>Protect and plant large canopy trees.</strong>{' '}
              Red-tailed hawks need two things from trees: elevated perch points for scanning, and
              large-canopy nest sites capable of supporting a 30-pound stick nest. Mature oaks,
              maples, sycamores, elms, and cottonwoods with diameters over 12 inches provide both.
              Preserving existing mature trees when renovating a property is the highest-value habitat
              action for raptors. If planting from scratch, native oaks are ideal: fast-growing
              white oak can reach perch height in 15 years, and the insect biomass an oak supports
              feeds the small-mammal food chain below — which feeds the hawk. Use{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>{' '}
              to identify which oaks and large natives are appropriate for your soil and region.
            </li>
            <li>
              <strong>Reduce window-strike risk on large glass panels facing trees or open ground.</strong>{' '}
              Vehicle collisions are the leading cause of red-tail mortality in suburban areas, but
              window strikes are the second. A hawk stooping at prey reflected in a glass door or
              large picture window may hit at full hunting speed. Acopian BirdSavers — vertical
              strings hung on the exterior at 4-inch intervals — are the most cost-effective deterrent
              for large windows. Window decals and frosted tape strips applied in a 2-inch-by-4-inch
              grid pattern also break up the reflection. The same treatment that protects songbirds
              like{' '}
              <button className="link-button" onClick={() => onNavigate('american-goldfinch')}>
                American goldfinches
              </button>{' '}
              from smaller windows also protects hawks at larger ones.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The raptor web above your neighborhood</h2>
          <p>
            The red-tailed hawk is the apex of the small-mammal food chain that runs through most
            suburban backyards. Below it: voles, mice, and rats that eat seeds and green vegetation.
            Below that: the native plants and unmowed grass edges that produce seeds and shelter
            small-mammal runways. Below that: healthy soil, insect communities, and the fungal
            networks that sustain native plant roots. A red-tail perching on the utility pole at
            the end of the block is reading the health of that whole system from above.
          </p>
          <p>
            The nocturnal equivalent is the{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-screech-owl')}>
              eastern screech owl
            </button>
            , which hunts the same small-mammal prey from dusk to dawn on the same suburban
            block the hawk covers in daylight. Both species are subject to the same secondary
            rodenticide poisoning. Where one is present, the other usually is too — and where
            both are thriving without rodenticide supplementation, the neighborhood has a
            functioning predator-prey cycle operating without human chemical intervention.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('virginia-opossum')}>
              Virginia opossum
            </button>{' '}
            occupies a different niche in the same yard — ground-level scavenging and tick
            predation — but shares one vulnerability: people who encounter an opossum in the
            yard and place a rodenticide bait station to remove it are poisoning the same food
            chain the hawk depends on. The{' '}
            <button className="link-button" onClick={() => onNavigate('garter-snake')}>
              garter snake
            </button>{' '}
            provides a smaller-scale version of the same mouse-and-vole predation service.
            Together these species form a layered predator community that manages rodent
            populations continuously, at no cost, with no toxic residues — if the yard
            gives them a reason to be there.
          </p>
          <p>
            For a full picture of what you can do for birds of prey and the yard that supports them,
            see the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat
            </button>{' '}
            guide and the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            .
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build the prey-rich, poison-free, large-tree yard that raptors need.</strong>{' '}
            Start with plants at{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , understand why rodenticides poison the whole food chain at the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , and see how a lawn can become a hunting ground at{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-transformation')}>
              From Lawn to Habitat
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
