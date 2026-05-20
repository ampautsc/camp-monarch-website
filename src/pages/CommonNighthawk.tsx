import type { Page } from '../App'

interface CommonNighthawkProps {
  onNavigate: (page: Page) => void
}

export default function CommonNighthawk({ onNavigate }: CommonNighthawkProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Common_Nighthawk_%2814428313550%29.jpg"
          alt="Common Nighthawk in flight at dusk showing distinctive white wing bar patches and erratic moth-like flight pattern"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Andy Reago &amp; Chrissy McClarren&nbsp;&middot;&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Common_Nighthawk_(14428313550).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Common Nighthawk</h1>
        <p className="hero__lead">
          Not a hawk. A nightjar — built to catch flying insects in the dark with
          a mouth the size of a net. Down 61% since 1966, mostly because we took
          away its food and filled its sky with light.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">Named wrong, built right</h2>
          <p>
            The Common Nighthawk (<em>Chordeiles minor</em>) is not a hawk. It
            belongs to the Caprimulgidae — the nightjar family, cousins of
            whip-poor-wills and chuck-will&apos;s-widows. The name comes from
            its flight pattern: hunting at dusk with erratic, falcon-like
            wingbeats, it reads like a small raptor against a fading sky. The
            similarity ends at the silhouette. A nighthawk has a bill so small
            it looks like a beak, but the jaw hinges open to a gape wide enough
            to engulf large moths in a single pass. Its feet, by contrast, are
            nearly useless — so small the bird can barely walk. It rests pressed
            flat along a branch or bare surface, and in that posture it
            disappears completely.
          </p>
          <p>
            The cryptic camouflage is total. Brown-and-black mottling matches
            bark, gravel, and dry leaf textures so precisely that a roosting
            nighthawk on a tree limb reads as a broken stub. The white wing
            patches and throat patch only become visible in flight. At rest, the
            bird relies on stillness — it will not flush until a predator is
            within a few feet.
          </p>
          <p>
            The male&apos;s courtship dive is one of the most dramatic
            performances in North American bird life. He climbs several hundred
            feet in silence, then plunges earthward with locked wings at speed.
            At the bottom of the dive he pulls up sharply, and the rush of air
            through his stiffened outer primary feathers produces a resonant,
            low-frequency <em>boom</em> that carries a quarter mile across a
            summer evening. The female watches from the ground or a rooftop.
            She selects her mate partly on the quality and timing of his boom.
            No other bird in North America produces that sound.
          </p>
        </section>

        <section aria-labelledby="prey-heading">
          <h2 id="prey-heading">Mass emergence, or nothing: the diet has no substitute</h2>
          <p>
            A nighthawk moving over a lake at dusk is not searching — it is
            converging. A mayfly hatch releases thousands of adults from the
            water surface within minutes. A carpenter-ant nuptial flight lifts
            a cloud of winged insects into still evening air. The nighthawk
            tracks these concentration events, not scattered individual prey.
            When a hatch is on, it can consume hundreds of insects in a single
            hour.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Common_nighthawk_at_Seedskadee_National_Wildlife_Refuge_Wyoming_%2852155592586%29.jpg"
                  alt="Common Nighthawk resting on gravel, cryptic pattern blending with the substrate — the typical daytime roost position"
                  loading="lazy"
                />
                <figcaption>
                  Nighthawks do not build nests. The female lays two eggs directly on gravel — flat rooftops, open fields, railroad ballast — relying on cryptic coloration for camouflage. The shift from gravel to rubberized roofing membranes eliminated most urban nesting habitat in a single decade.
                  <span className="photo-credit"> Photo: USFWS Mountain Prairie · <a href="https://commons.wikimedia.org/wiki/File:Common_nighthawk_at_Seedskadee_National_Wildlife_Refuge_Wyoming_(52155592586).jpg" target="_blank" rel="noopener noreferrer">Public domain</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            The consequence is an energy budget with no flexibility. A nighthawk
            cannot substitute seeds, berries, or plant material when insects are
            scarce. It cannot switch to ground insects if aerial prey density
            drops. Every calorie it processes comes from a flying insect
            captured in the crepuscular window — the thirty to sixty minutes
            around sunrise and sunset when flying insect activity peaks and
            light is low enough for nighthawk hunting. Reduce aerial insect
            biomass, disrupt the timing of insect emergence, or flood that
            window with artificial light, and the nighthawk&apos;s food supply
            collapses without any substitute.
          </p>
          <p>
            Nesting adds a second habitat requirement: open, bare, flat surface.
            In the original landscape, nighthawks nested on rocky outcrops,
            sandy barrens, and burned clearings — flat ground with minimal
            vegetation cover. In cities, they colonized flat gravel rooftops,
            which mimicked those surfaces. Mid-20th-century breeding bird surveys
            documented nighthawks nesting routinely on commercial buildings
            across the eastern half of the continent. In many cities they were
            common summer residents, their nasal <em>peent</em> call audible
            from downtown streets on warm evenings.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">61% gone — and why</h2>
          <p>
            Partners in Flight estimates the Common Nighthawk population has
            declined approximately 61% since 1966, one of the steepest losses
            among North American aerial insectivores. The nighthawk belongs to a
            bird guild — aerial insectivores, including swallows, swifts, and
            nightjars — that has declined faster than any other guild in North
            America over the same period. The trajectory is not a gradual trend.
            Population indices fell sharply beginning in the 1980s and have not
            recovered.
          </p>
          <p>
            Three factors drive the decline. The first is prey collapse.
            Aerial insect biomass in much of North America has fallen
            dramatically — regional studies in Europe and North America have
            documented 50 to 80 percent reductions in flying insect biomass
            over the past three decades. The causes include broad-spectrum
            insecticide use, light pollution disrupting emergence timing,
            and the replacement of native plant communities with lawns and
            non-native ornamentals that support far fewer caterpillars, beetles,
            and other prey. A nighthawk hunting in a landscape where flying
            insect biomass has dropped 70 percent cannot compensate. The birds
            have less fuel, produce fewer young, and overwinter in worse
            condition.
          </p>
          <p>
            The second factor is rooftop habitat loss. Modern commercial flat
            roofing uses EPDM rubber membrane or TPO synthetic sheeting rather
            than loose gravel. These surfaces are smooth and featureless and
            provide no usable nesting substrate. As buildings renovate, the flat
            gravel rooftop habitat that nighthawks colonized in cities disappears.
            A generation of nighthawks that successfully nested on a downtown
            building for decades can be displaced in a single roofing season.
          </p>
          <p>
            The third factor is artificial light at night. Nighthawks hunt the
            crepuscular window — dawn and dusk — when light is low and flying
            insect activity is highest. Artificial light extends the apparent
            length of the bright period, disrupts insect emergence phenology,
            and draws nocturnal insects away from areas of natural vegetation
            toward light sources where nighthawks cannot effectively hunt.
            In heavily lit urban and suburban environments, the prey
            concentration that nighthawks evolved to exploit simply does not
            form in the same place or at the same time it once did.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that support nighthawks</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Snag_at_the_Wildlife_Garden_%2842263673541%29.jpg" alt="Standing dead tree (snag) in a wildlife garden" loading="lazy" />
            <figcaption>
              Common nighthawks perch lengthwise on bare branches and logs, relying on open sightlines to spot insects at dusk. Leaving a dead limb or snag standing rather than cutting it removes nothing from your yard and adds a perch that functions as hunting infrastructure.
              <span className="photo-credit"> Photo: Ross Dunn&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/2.0" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Remove pesticides from your property.</strong>{' '}
              Every broad-spectrum insecticide application — pyrethroid sprays,
              systemic neonicotinoids in nursery plants, mosquito misting
              systems — reduces the aerial insect density nighthawks depend on.
              Native plants support the moths, beetles, and flying insects that
              form the nighthawk&apos;s entire food base. A yard managed without
              pesticides and planted with native species produces a measurably
              different insect community above it at dusk. See the{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticides &amp; Your Habitat guide
              </button>
              {' '}for specific substitutions.
            </li>
            <li>
              <strong>Reduce outdoor lighting at dusk.</strong>{' '}
              The 30 to 60 minutes after sunset is when nighthawks do their
              most intense foraging. Motion-sensor porch lights, downward-directed
              fixtures, and warm-amber bulbs (2700K or lower) reduce the
              artificial light footprint that disrupts both nighthawk hunting
              and the insect emergence patterns it depends on. If you can see
              your yard clearly from inside at 9 p.m. because of outdoor lights,
              those lights are affecting the wildlife around them.
            </li>
            <li>
              <strong>Plant native trees and shrubs that host insects.</strong>{' '}
              Native oaks, willows, cherries, and birches support hundreds of
              moth and beetle species whose larvae — and eventual adults — form
              the prey base of aerial insectivores. A single mature native oak
              hosts over 500 caterpillar species. As those caterpillars mature
              and take flight, they become part of the nighthawk&apos;s food
              supply. Use the{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>
              {' '}tool to find high-value native species for your region.
            </li>
            <li>
              <strong>If you influence a commercial building — advocate for gravel.</strong>{' '}
              Loose gravel sections on flat commercial rooftops are among the
              only direct nesting habitat interventions available for nighthawks
              in urban areas. Building managers, business owners, and board
              members can request that roof replacement specifications preserve
              or add gravel ballast sections. A 20-by-20-foot gravel area on
              an otherwise membrane roof is sufficient nighthawk nesting
              territory. It costs nothing extra to specify and restores an
              irreplaceable nesting substrate.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The boom at dusk</h2>
          <p>
            On warm summer evenings from May through August, Common Nighthawks
            can be seen over almost any North American city east of the Rockies —
            a distinctive erratic flier with white wing patches, calling{' '}
            <em>peent</em> in a nasal buzz as it hunts. The courtship boom, if
            you hear it, is unmistakable: a sudden low resonant whomp from above,
            the sound of a large bird pulling out of a dive at speed. Most people
            who have heard it did not know what made it. They heard a nighthawk.
          </p>
          <p>
            The fact that nighthawks are still visible over cities — still hunting,
            still calling, still performing their courtship dives — is sometimes
            read as evidence that the species is fine. It is not evidence of that.
            It is evidence that the individuals that remain are still there.
            Population indices that have dropped 61% since 1966 do not look
            empty. They look reduced. The sky still has nighthawks. It has 61%
            fewer of them than it did when the monitoring started.
          </p>
          <p>
            The nighthawk&apos;s decline is the aerial insectivore guild&apos;s
            decline. The guild&apos;s decline is the flying insect
            community&apos;s decline. The flying insect community&apos;s decline
            is the native plant community&apos;s decline — the predictable
            downstream effect of replacing native plant communities with lawns,
            ornamentals, and paved surfaces that support vanishingly few of the
            insects that live in or on them. The nighthawk is an indicator.
            What it measures is the insect density of the summer sky. Right
            now, that density is falling. The boom at dusk is what a functioning
            summer sky sounds like. It is worth preserving.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>
              Build a yard that supports nighthawks and the whole aerial food
              web.
            </strong>{' '}
            Start with native plants in the{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>{' '}
            tool, reduce pesticides with the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , and see who else shares your sky in the{' '}
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
