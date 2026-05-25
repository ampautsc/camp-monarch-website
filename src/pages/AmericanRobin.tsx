import type { Page } from '../App'

interface AmericanRobinProps {
  onNavigate: (page: Page) => void
}

export default function AmericanRobin({ onNavigate }: AmericanRobinProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/97/American_robin_%2871307%29.jpg"
          alt="American Robin on a lawn showing rust-orange breast and the classic head-tilted pause of earthworm detection"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:American_robin_(71307).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Robin</h1>
        <p className="hero__lead">
          A robin hunting earthworms moves in a stop-start pattern — three or four quick steps,
          a complete halt, head tilted 90 degrees toward the ground, then a sudden lunge and pull.
          That tilted-head pause is the moment the bird is reading the soil: detecting earthworm
          movement by sound, vibration, or the subtle visual cues of fresh soil disturbance. It
          stops working when the yard beneath it goes silent — when fungicide has killed the
          earthworms, the soil has been compacted, or the food web that starts in the soil has
          been interrupted at its base.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="detection-heading">
          <h2 id="detection-heading">Three steps, a pause, and a lunge</h2>
          <p>
            The American Robin (<em>Turdus migratorius</em>) is the most abundant landbird
            in North America — the breeding population runs to the hundreds of millions.
            Familiarity makes it easy to overlook. But a robin running across a lawn, stopping,
            tilting its head toward the ground, and then pulling an earthworm from the soil is
            demonstrating, in real time, whether the soil food web beneath that patch of turf
            is alive.
          </p>
          <p>
            The foraging sequence is precise. Robins don&apos;t walk steadily scanning the
            surface. They run in short bursts and stop completely. The head tilts — not for
            balance, but to gather information from below. Ornithologists have documented that
            robins use a combination of hearing earthworm movement through the soil, detecting
            faint vibrations in the substrate, and spotting the visual traces of a fresh
            casting or soil disturbance at the surface. The lunge is timed to the information
            the pause gathered. Robins rarely miss when they commit.
          </p>
          <p>
            When robins stop foraging on a lawn they used to hunt, the soil has usually changed
            in one of a few ways: the earthworm population crashed from pesticide application,
            the surface was treated with fungicide that killed the soil fauna, or the ground was
            so compacted that earthworms can no longer reach the top two inches where a robin
            can pull them out. The absence is a measurement.
          </p>
        </section>

        <section aria-labelledby="season-heading">
          <h2 id="season-heading">The bird that reads two completely different food systems across a year</h2>
          <p>
            Most people think of the first robin of spring as a migrant returning from the
            south. In much of the eastern United States, this is not what&apos;s happening.
            American Robins in the Northeast and Mid-Atlantic overwinter in wooded areas and
            brush edges nearby, eating American holly berries, native crabapple, dogwood drupes,
            and winterberry. The robin that appears on the lawn in March is often the same
            individual that has been 200 meters away all winter, now shifting its diet back to
            earthworms as the soil thaws.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6f/American_Robin.jpg"
              alt="American Robin in the stop-and-tilt posture on a lawn — head cocked, weight slightly forward, just before the lunge"
              loading="lazy"
            />
            <figcaption>
              The head-tilt is not a quirk. It is the robin orienting its senses toward
              information from below the surface. When earthworm density in a lawn drops —
              from fungicide, compaction, or chemical treatment — the robin stops pausing
              here and hunts elsewhere. A yard with robins actively pulling worms has, by
              demonstration, a functional soil food web in the top two inches of its lawn.
              <span className="photo-credit"> Photo: Alan Vernon&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:American_Robin.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            This seasonal shift makes the robin one of the most useful species for reading
            yard habitat completeness. A yard that holds robins year-round has to deliver two
            completely different things: a living, untreated soil layer with earthworms and
            invertebrates through spring, summer, and fall; and persistent native berry sources
            through winter. A yard with chemical-free soil but no fruiting native plants loses
            its robins in November. A yard with berry plants but treated soil loses them in
            April. Both halves are required.
          </p>
          <p>
            Nesting runs from April through July. The female builds the nest: a sturdy outer
            cup of dry grass and plant stems, plastered inside with wet mud, then lined with fine
            dry grass. The mud cup interior is shaped by the female pressing her body into the
            fresh mud and rotating — she uses her breast as the form that produces the smooth
            bowl shape. It hardens as it dries. Three to four eggs, the bright blue that has
            become the bird&apos;s color synecdoche. Incubation lasts 12 to 14 days. Chicks leave
            the nest at 13 days — still unable to fly — and scatter into nearby vegetation. The
            parents locate and feed each one individually for two more weeks.
          </p>
          <p>
            Those two post-fledging weeks carry the highest mortality of the robin&apos;s first
            year. Chicks are on the ground, unable to fly, needing invertebrate food nearby and
            cover to hide in. In a yard maintained as a uniformly open, raked surface, there is
            nowhere to hide and little to eat. In a yard with native shrubs, leaf litter, and
            untreated soil, the chick has both.
          </p>
        </section>

        <section aria-labelledby="ddt-heading">
          <h2 id="ddt-heading">The DDT bird — and what the recovery showed</h2>
          <p>
            The American Robin is the species Rachel Carson built <em>Silent Spring</em>
            around. The mechanism was this: DDT was sprayed on elm trees across the Midwest
            and Northeast in the 1950s to control Dutch elm disease. The elm leaves fell each
            autumn. Earthworms consumed the leaf litter and stored the DDT in their tissues.
            Robins ate those earthworms — a typical foraging robin eats dozens of earthworms
            per day during peak season. The DDT accumulated in the robin&apos;s body across
            the foraging period. The result was tremors, loss of coordination, and death from
            central nervous system failure.
          </p>
          <p>
            In communities that sprayed heavily, ornithologists documented die-offs that removed
            most of the local robin population within a single breeding season. A town with robins
            on every street in April was largely silent by June. This outcome was visible to anyone
            who looked, which is why Carson chose it. The bioaccumulation chain — leaves to
            earthworms to robins — was legible in a way that laboratory toxicology was not.
          </p>
          <p>
            DDT was banned in the United States in 1972. Robin populations recovered. That
            recovery is the piece of this history that matters for habitat work: when the
            cause was removed, the earthworm population rebounded and the robins came back.
            Population recovery after targeted cause removal is repeatable. The trajectory
            reversed.
          </p>
          <p>
            The current analogs operate through the same food chain. Certain fungicides in
            common lawn use — particularly strobilurin-class compounds sold under product names
            for brown patch, dollar spot, and rust control — carry documented toxicity to
            earthworms at the concentrations applied to turf. Research on earthworm responses
            to strobilurin fungicides has documented population losses in treated plots.
            Robins hunting a treated lawn are hunting a depleted food supply, and the earthworms
            they do catch carry whatever compound has moved through the soil and into the
            worm&apos;s tissues. The chain Carson documented in the 1950s is running today with
            different compounds at lower visible mortality rates — which makes it easier to
            overlook.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Stop the fungicides, plant one berry tree, leave the litter, and add water at ground level</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/31/Garden_bird_bath_Nuthurst_West_Sussex_England_01.jpg"
              alt="Stone bird bath set at ground level in a garden — robins prefer shallow water sources at or near the ground where they can wade in and beat their wings"
              loading="lazy"
            />
            <figcaption>
              Robins bathe rather than sip from tube feeders. A shallow dish — 4 to 6 inches
              deep — placed on or near the ground earns daily visits during breeding season and
              on warm winter days when natural water sources have frozen over. Refresh every
              two to three days to prevent mosquito larvae from reaching the biting stage.
              <span className="photo-credit"> Photo: Acabashi&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Stop using lawn fungicides.</strong>{' '}
              Fungicides are the least-discussed pesticide threat to earthworm populations.
              Products sold for brown patch and dollar spot — including formulations containing
              pyraclostrobin, azoxystrobin, or trifloxystrobin — carry documented toxicity to
              earthworms at the concentrations used on lawns. A treated lawn can lose most of
              its accessible earthworm population within weeks of application, and robins that
              arrive expecting a productive food supply find it absent. The full breakdown of
              which pesticides affect which parts of the food web is at the{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticides &amp; Your Habitat guide
              </button>
              .
            </li>
            <li>
              <strong>Plant one native berry-producing tree or large shrub this season.</strong>{' '}
              American Holly (<em>Ilex opaca</em>), native crabapple (<em>Malus</em> species),
              Eastern Dogwood (<em>Cornus florida</em>), and Winterberry Holly (<em>Ilex
              verticillata</em>) all produce fruit that persists into winter and is eaten by
              robins through cold months when earthworms are frozen or inaccessible beneath
              the surface. Flocks of robins congregate at single fruiting hollies and dogwoods
              on January mornings when other food sources have been exhausted. A yard with no
              fruiting native plants has nothing to offer robins from November through March.
              Find what grows in your hardiness zone at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Leave leaf litter along the base of shrubs and borders.</strong>{' '}
              Robins forage at the edge where leaf litter meets open soil — the zone of
              highest invertebrate density in a suburban yard. Earthworm counts are consistently
              higher beneath intact leaf litter than in raked or cleared ground of the same
              lawn, because the litter holds moisture, buffers temperature, and adds organic
              matter that earthworms consume. Raking removes the habitat along with the leaves.
              Leave it under shrubs, along fences, and at garden edges. The full case is at{' '}
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>
              .
            </li>
            <li>
              <strong>Set out a ground-level water source and refresh it every two to three days.</strong>{' '}
              Robins wade into shallow water to bathe — they beat their wings to wet their
              feathers, then preen. A dish 4 to 6 inches deep placed on or near the ground
              draws visits during breeding season and on warm winter days. Refresh every two
              to three days to prevent mosquito larvae from reaching the biting stage. The
              full guide to yard water sources is at{' '}
              <button className="link-button" onClick={() => onNavigate('water-for-wildlife')}>
                Water for Wildlife
              </button>
              .
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The earthworm chain and the animals that run on it</h2>
          <p>
            Rachel Carson chose robins because their die-offs were visible and countable. The
            bioaccumulation chain — leaves to earthworms to robins — could be traced by anyone
            willing to look. The same food chain structure runs today through the{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-screech-owl')}>
              Eastern Screech Owl
            </button>
            : rodenticide bait station in a garage, mouse eating the bait and carrying
            brodifacoum in its tissues, owl eating the mouse, owl liver failing weeks later.
            A 2023 study found rodenticide contamination in 96 percent of screech owl carcasses
            tested from suburban areas. The robin version of this chain runs faster and at
            higher volume; it is harder to count because individual earthworms are not visible,
            but the mechanism is the same.
          </p>
          <p>
            A yard where fungicide use has stopped and the earthworm population is recovering
            is rebuilding the same soil food web that{' '}
            <button className="link-button" onClick={() => onNavigate('fireflies')}>
              firefly
            </button>{' '}
            larvae live in through winter,{' '}
            <button className="link-button" onClick={() => onNavigate('american-toad')}>
              American Toads
            </button>{' '}
            hunt through summer, and the caterpillars that share a yard with{' '}
            <button className="link-button" onClick={() => onNavigate('monarch-butterfly')}>
              monarchs
            </button>{' '}
            during caterpillar development depend on for their own part of the food web.
            Stopping the fungicide application is one decision that recovers habitat for
            all of them at once.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('dark-eyed-junco')}>
              Dark-eyed Junco
            </button>
            {' '}scratches through the same leaf-litter layer the robin hunts at its edge — both
            feeding on the same overwintering invertebrate community from October through March.
            The{' '}
            <button className="link-button" onClick={() => onNavigate('brown-thrasher')}>
              Brown Thrasher
            </button>
            {' '}and the{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-towhee')}>
              Eastern Towhee
            </button>
            {' '}work the deeper leaf litter under shrubs where the robin doesn&apos;t go. Each
            species is reading a different depth and zone of the same undisturbed soil layer.
            When the layer goes away, they all leave.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('northern-mockingbird')}>
              Northern Mockingbird
            </button>
            {' '}holds a winter territory on whatever fruiting shrub it has claimed — crabapple,
            hawthorn, or winterberry — and defends it against every fruit-seeking species,
            including robin flocks of 50 to 200 birds. A single mockingbird drives off the
            first robins that land. When the full flock arrives, the mockingbird cannot hold
            the patch and retreats. The shrub it defended all January is stripped in 20 minutes.
          </p>
          <p>
            American Robins take{' '}
            <button className="link-button" onClick={() => onNavigate('hackberry')}>
              hackberry
            </button>
            {' '}fruit in October and into winter wherever the drupes persist into the cold
            season. In late fall, robin foraging flocks work between hackberry, crabapple, and
            winterberry in sequence as each stand gets depleted. A yard with hackberry alongside
            winter-persistent fruiting shrubs extends the window that holds migratory robin
            flocks by several weeks past the crabapple-only yard across the street.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build the soil and berry structure the robin reads as alive.</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a native plant
            </button>{' '}
            to add the berry sources that carry robins through winter,{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              read the pesticide guide
            </button>{' '}
            to see which lawn products kill the earthworms the robin is hunting, and follow
            the case for intact winter leaf litter at{' '}
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
