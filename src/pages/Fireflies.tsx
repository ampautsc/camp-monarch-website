import type { Page } from '../App'

interface FirefliesProps {
  onNavigate: (page: Page) => void
}

export default function Fireflies({ onNavigate }: FirefliesProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/52/Photuris_lucicrescens.jpg"
          alt="Firefly resting on a leaf at dusk, bioluminescent lantern organ visible on abdomen — threatened by lawn chemicals and light pollution"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Bruce Marlin · <a href="https://commons.wikimedia.org/wiki/File:Photuris_lucicrescens.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a> via Wikimedia Commons */}
          Photo: Bruce Marlin&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Photuris_lucicrescens.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Fireflies</h1>
        <p className="hero__lead">
          <em>Photinus pyralis</em>, the most common firefly in eastern yards, flies a slow J-curve arc
          and flashes once every 5.5 seconds. A female resting in the grass below waits for that
          exact interval before answering with a single flash of her own, 2 seconds later.
          A porch light 50 feet away raises the ambient brightness enough that she cannot
          distinguish his pattern from the general glow. He flashes. She never sees him.
        </p>
        <p className="hero__lead">
          The adults you see in June are the larvae that survived your yard last November.
          Raked leaves, lawn pesticides, and outdoor lights are three decisions made inside
          the property line that determine how many come back next summer.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="flash-heading">
          <h2 id="flash-heading">170 species, each speaking a different dialect</h2>
          <p>
            The flash is a conversation. Males fly and flash a species-specific pattern.
            Females perched in vegetation respond with a timed flash of their own.
            They find each other by this light-language, evolved over millions of years.
            Ambient light from porches, streetlights, and screens interrupts the signal.
            In a brightly lit yard, females cannot distinguish male flashes from background glow.
            Mating fails. The population quietly declines.
          </p>
          <p>
            Firefly larvae are soil predators: they hunt earthworms, slugs, and snails in the leaf litter
            and soft ground beneath trees. When you remove fallen leaves in autumn,
            you are removing the overwintering habitat of the following summer's generation.
            The adults you see in June are the larvae that survived your yard last November.
          </p>
          <p>
            There are 170 species of fireflies in North America, each signaling in a dialect the others
            don&apos;t answer. <em>Photinus pyralis</em> flies a J-curve arc at roughly 2 feet above the
            ground and flashes once every 5.5 seconds. <em>Photinus marginellus</em> double-flashes,
            two pulses 0.3 seconds apart. <em>Photinus consimilis</em> flashes every 2 seconds at a
            steeper angle. In a field with several species active simultaneously, each pair is conducting
            a private exchange in a room full of competing signals — the timing differences are what keeps
            the conversations from crossing.
          </p>
          <p>
            The light itself is a cold chemical event. In the light organ at the base of the abdomen,
            a compound called luciferin reacts with oxygen, driven by an enzyme called luciferase and
            powered by ATP — the same energy currency every living cell uses. The reaction releases a
            photon with almost no heat. More than 90% of the energy becomes light. An incandescent bulb
            converts less than 10% of its energy to light and loses the rest as heat you can feel from
            across the room. Fireflies were producing cold light 100 million years before humans
            understood how photons work.
          </p>
          <p>
            <em>Photuris</em> fireflies exploit this language. The females of several <em>Photuris</em>{' '}
            species mimic the flash-response patterns of <em>Photinus</em> females. A <em>Photinus</em>{' '}
            male, following his species&apos; signal pattern, approaches what his optics read as a receptive
            female. Instead, he finds a <em>Photuris</em> female that kills and eats him. She doesn&apos;t
            just gain a meal — she gains the defensive steroids stored in his body, compounds called
            lucibufagins that protect <em>Photinus</em> beetles from spider and bird predation. By eating
            the male, the <em>Photuris</em> female imports a chemical defense she cannot synthesize herself.
            Biologists call this chemical sequestration. The flash language evolved as mate-finding,
            and was redeployed as a weapon in a predation arms race conducted entirely in light.
          </p>
        </section>

        <section aria-labelledby="larval-heading">
          <h2 id="larval-heading">Two years underground, three weeks in the air</h2>
          <p>
            The adult stage of <em>Photinus pyralis</em> lasts about three weeks. The larval stage
            that preceded it lasted one to two years.
          </p>
          <p>
            After mating, a female descends into moist soil or leaf litter and lays her eggs one at a
            time — typically 100 or more — in the top inch of ground. The eggs hatch in three to four
            weeks. The larvae are predatory from the first instar: they locate earthworms, snails, and
            slugs by chemical trace, bite them, and inject a paralytic enzyme that immobilizes the prey
            before consumption. A single larva may work through several prey animals in a week, then
            retreat deeper into the soil.
          </p>
          <p>
            Firefly larvae glow faintly in the dark. The same luciferin-luciferase chemistry that powers
            the adult flash operates at low intensity in the larva&apos;s abdomen. The glow is visible in a
            dark basement or under an overturned log. The function is not fully resolved, but it appears to
            act as an aposematic signal — a warning to burrowing predators that the larva carries
            defensive compounds. The term &ldquo;glow-worm&rdquo; was coined for this larval stage, not the
            adult. The thing people called a glow-worm for centuries was a firefly that hadn&apos;t grown wings yet.
          </p>
          <p>
            A larva passes through six instars over one to two years, overwintering as far as six inches
            below the frost line. It pupates in a small earthen cell in late spring, spending one to two
            weeks transforming. The adult emerges soft-winged, hardens over a day, and begins flying
            within a week. The entire larval world was the soil and leaf litter. The adult&apos;s entire world
            is the air above it, for three weeks, at night.
          </p>
          <p>
            The arithmetic of this is what matters for a homeowner. A <em>Photinus pyralis</em> adult
            flashing in your yard in June was a larva in your yard last November. A lawn treated with
            imidacloprid granules — the standard product sold for Japanese beetle grub control under
            names like Bayer Season-Long Grub Control — places neonicotinoid compounds in the soil zone
            where firefly larvae spend most of their lives. The larva cannot distinguish a treated lawn
            from an untreated one. It just stops moving.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Lights out, leaf litter, unmowed ground, and no grub treatment</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Fallen_leaves.jpg" alt="Autumn leaves covering garden ground" loading="lazy" />
            <figcaption>
              Firefly larvae overwinter as predators in moist leaf litter and loose soil. The gesture of leaving an unraked layer — even in just one corner of the yard — provides the thermal and moisture conditions that make the following summer&apos;s display possible.
              <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;<a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Turn outdoor lights off after 10pm in June and July.</strong>{' '}
              Peak flash season is roughly 8–11pm. Even one porch light can suppress mating activity
              in a radius of 50 feet. Motion-sensor lights that stay off when nothing is moving
              are a reasonable compromise.
            </li>
            <li>
              <strong>Leave the leaves through winter.</strong>{' '}
              Rake paths and lawn if needed, but let a layer remain in garden beds and under trees.
              Fireflies that pupate in your leaves will emerge in your yard the following summer.
              This is the highest-leverage action most yards can take.
            </li>
            <li>
              <strong>Let one corner go unmowed.</strong>{' '}
              Tall grass and native plants provide the moist, shaded ground cover that larvae need
              and the vegetation that females perch in during mating. A 4×6 foot patch is meaningful.
              It does not need to be large.
            </li>
            <li>
              <strong>Skip granular grub treatments on your lawn.</strong>{' '}
              Products containing imidacloprid or clothianidin — sold for Japanese beetle control
              under names like Bayer Season-Long Grub Control — move through thatch and into the
              soil zone where firefly larvae spend one to two years hunting. The compounds do not
              distinguish between Japanese beetle grubs and firefly larvae. A lawn treated for grubs
              in June has dosed the soil that this summer&apos;s firefly larvae are moving through.
            </li>
          </ol>
        </div>

        <section aria-labelledby="firefly-signal-heading">
          <h2 id="firefly-signal-heading">A lagging indicator with a two-year recovery delay</h2>
          <p>
            Fireflies are a lagging indicator. If your yard had fireflies ten years ago and doesn&apos;t now,
            the habitat change happened before the population disappeared.
            They cannot recover quickly: a two-year larval cycle means a single bad year
            removes two years of breeding output. Recovery from population collapse takes a decade
            even when conditions improve.
          </p>
          <figure className="species-content-photo" style={{ margin: '1rem 0 2rem' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/Photinus_pyralis_Firefly_2.jpg"
              alt="Photinus pyralis firefly resting on a leaf — the most common backyard species in eastern North America"
              loading="lazy"
            />
            <figcaption>
              The flashing adult firefly is the brief, visible moment in a two-year life. The larva lives in leaf litter and moist soil for one to two years, hunting snails, slugs, and earthworms. Raking leaves in autumn and treating lawns with pesticides destroys the stage that accounts for 95% of a firefly&apos;s life.
              <span className="photo-credit"> Photo: art farmer · <a href="https://commons.wikimedia.org/wiki/File:Photinus_pyralis_Firefly_2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a> via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            They are most sensitive to three things: light pollution, lawn pesticides,
            and the removal of leaf litter. All three are decisions made inside the property line.
          </p>
        </section>

        <section aria-labelledby="firefly-neighbors-heading">
          <h2 id="firefly-neighbors-heading">Who shares the leaf-litter floor</h2>
          <p>
            Firefly larvae share the top six inches of the ground layer with a community most
            homeowners never see. Wood Thrush forages the same leaf litter for the same
            invertebrates — earthworms, beetles, and soft-bodied prey. American Toads overwinter
            as deep-soil burrowers in the same layer and hunt the same snail and slug prey aboveground
            all summer. Luna moth caterpillars descend from their host trees in fall to pupate in the
            duff directly above where firefly larvae are living. Managing the ground layer for one
            means managing it for all of them.
          </p>
          <ul>
            <li>
              <button className="link-button" onClick={() => onNavigate('wood-thrush')}>
                Wood Thrush
              </button>
              {' — '}Forages the same leaf litter for the same earthworms and soft-bodied invertebrates.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('toad')}>
                American Toad
              </button>
              {' — '}Overwinters in the same soil layer; hunts the same snails and slugs aboveground.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('luna-moth')}>
                Luna Moth
              </button>
              {' — '}Caterpillars descend from host trees in fall to pupate in the same leaf-litter layer.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('american-woodcock')}>
                American Woodcock
              </button>
              {' — '}Probes the same moist soil for earthworms each night; both species require pesticide-free, undisturbed ground through fall and winter to survive into the following spring.
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            Firefly larvae share the leaf-litter floor with Wood Thrush foraging routes,
            overwintering moth caterpillars, and American Toad winter burrows. See how the
            floor layer connects to the three zones above it in the{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-layers')}>
              Habitat Layers guide
            </button>
            , and build the litter layer they need with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
