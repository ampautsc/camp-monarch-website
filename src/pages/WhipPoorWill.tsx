import type { Page } from '../App'

interface WhipPoorWillProps {
  onNavigate: (page: Page) => void
}

export default function WhipPoorWill({ onNavigate }: WhipPoorWillProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/Caprimulgus_vociferusAAP065B.jpg"
          alt="Eastern Whip-poor-will adult male perched on a mossy branch, mottled brown-gray-black plumage making the bird nearly invisible, large dark eye visible in the center of the face"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Francesco Veronesi&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Caprimulgus_vociferusAAP065B.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Whip-poor-will</h1>
        <p className="hero__lead">
          A sound most adults remember from summer nights — three syllables, repeated until it
          seemed to come from everywhere at once. Down 57% since 1970. The spray trucks
          and the floodlights running through the night have been erasing it, yard by yard.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">A bill that looks decorative until a moth gets close</h2>
          <p>
            The Eastern Whip-poor-will (<em>Antrostomus vociferus</em>) belongs to the
            nightjar family — cousins of the Common Nighthawk, but hunting differently.
            Where the nighthawk sweeps open sky at altitude, the whip-poor-will sits on
            a low branch or mossy log just above the forest floor and makes short lunging
            sallies after moths passing within a few feet.
          </p>
          <p>
            The bill looks nearly vestigial — a tiny stub at the center of the face. It is
            not. The jaw hinges open to a gape several times wider than the bill suggests,
            and the base of the gape is lined with stiff bristle-like feathers called rictal
            bristles that fan outward like a net. Those bristles funnel moths toward the
            strike. The bird does not see the moth clearly at close range so much as
            sense its approach through the bristle field and close the gape around it.
          </p>
          <p>
            Whip-poor-wills hunt in near-total darkness. The eyes are set wide and slightly
            forward, with pupils that dilate further than almost any other North American
            songbird. On a moonless night in second-growth forest, the bird is catching moths
            that a human standing six feet away could not see at all.
          </p>
          <p>
            The call is named onomatopoetically — <em>whip-poor-will, whip-poor-will</em>,
            three syllables with the accent on the first and last. A male defending territory
            repeats the call in unbroken runs. One documented bird called 1,088 times
            consecutively. The sound carries a quarter mile through still forest air. Before
            the population declined, pairs on adjacent territories overlapped their calls
            across summer evenings. That overlap is now audible in fewer places each decade.
          </p>
        </section>

        <section aria-labelledby="lunar-heading">
          <h2 id="lunar-heading">Eggs timed to the full moon</h2>
          <p>
            The lunar cycle runs through whip-poor-will breeding biology in a way that took
            ornithologists decades to document. Adults time their egg-laying so that chicks
            hatch approximately ten days before the full moon. That puts the hungriest phase
            of nestling development — the last ten days before fledging, when both parents
            must hunt every night — on the five nights centered on the full moon, when
            ambient light is strongest and moth activity peaks.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Antrostomus_vociferus_-_Eastern_Whip-poor-will_%28cropped%29.jpg"
              alt="Eastern Whip-poor-will in close profile, showing the wide flat head, enormous dark eye, and the subtle mottled patterning of brown, black, and gray that eliminates any clear outline"
              loading="lazy"
            />
            <figcaption>
              The flat, wide head positions the eyes for binocular overlap — the forward-facing
              field that lets the bird judge distance in darkness. The rictal bristles at the base
              of the bill extend outward and inward simultaneously, creating a capture funnel
              that guides moths toward the gape in the last fraction of a second before the strike.
              <span className="photo-credit"> Photo: Andy Reago &amp; Chrissy McClarren · <a href="https://commons.wikimedia.org/wiki/File:Antrostomus_vociferus_-_Eastern_Whip-poor-will_(cropped).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a> via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            This synchronization has a physical basis. Moths are ectothermic — their flight
            activity scales with temperature and available light. On warmer, brighter nights
            more moth species are airborne, in greater numbers, for longer windows. The
            whip-poor-will evolved to breed on a schedule where the period of greatest caloric
            demand aligns with the period of greatest food abundance.
          </p>
          <p>
            Artificial lighting disrupts this in two directions. Moths drawn to streetlights,
            flood lights, and security lights circle and die there rather than moving through
            the forest edge where the whip-poor-will hunts. Some moth species suppress their
            emergence entirely on artificially lit nights. The bird&apos;s lunar timing —
            a calendar refined across tens of thousands of generations — now lands in a
            landscape where the moths it was timed to hunt are being pulled off their flight
            paths before they reach the hunting ground.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">57% gone — two things your yard is doing right now</h2>
          <p>
            The North American Breeding Bird Survey has tracked whip-poor-will numbers since
            1966. The population has declined approximately 57% over that period. In Canada,
            the species is listed as Threatened. In the United States it is a Bird of
            Conservation Concern. The steepest declines run through areas with the densest
            suburban development.
          </p>
          <p>
            <strong>Pyrethroid mosquito sprays.</strong> The broad-spectrum insecticides used
            by residential mosquito-control services — delivered as a fine mist across yards
            and garden edges — kill adult moths, beetles, and flying insects alongside
            mosquitoes. Mosquito populations rebound in three to five days. Moths do not:
            adults live only a few weeks, and killing the adults removes that night&apos;s
            cohort from the food supply permanently. Across a residential neighborhood where
            dozens of adjacent properties are treated through the breeding season, the
            cumulative effect is a sustained collapse of aerial insect biomass across the
            habitat the whip-poor-will forages.
          </p>
          <p>
            <strong>Outdoor lights left on overnight.</strong> A floodlight on the back of a
            house, a security light running from dusk to dawn, ornamental string lights left
            on through the night — each one pulls moths off their flight paths through the
            forest edge. The moths that circle and die at the light are not available to the
            bird hunting 50 yards into the trees. Multiply this across an entire neighborhood
            and the light-trap effect compounds.
          </p>
          <p>
            A third factor operates more slowly: the replacement of native trees with
            ornamental plantings and turf grass. The moths the whip-poor-will eats are adult
            insects — they were caterpillars first. Caterpillars require native plant leaves
            to develop. A mature oak tree in the eastern United States supports the larval
            stage of over 500 moth and butterfly species. A Norway maple — the non-native
            ornamental planted across most American suburbs since the 1950s — supports fewer
            than 5. A Kentucky bluegrass lawn supports essentially none. The long-term
            result is a landscape that produces fewer moths each decade.
          </p>
        </section>

        <section aria-labelledby="actions-heading">
          <h2 id="actions-heading">Four things you can change before the next breeding season</h2>
          <ul className="actions-list">
            <li>
              <strong>Cancel the mosquito spray service.</strong> If you use one, call and
              stop it before May. The spray does not distinguish between mosquitoes and
              the moths a whip-poor-will needs. For standing water, use Bti dunks — a
              bacteria-based larvicide that kills mosquito larvae without harming adult
              flying insects.
            </li>
            <li>
              <strong>Turn outdoor lights off by 10 PM.</strong> Motion-activated fixtures
              with amber LEDs disrupt moth navigation far less than always-on white-spectrum
              lights. If you have flood lights or security lights running through the night,
              switching to motion-only cuts most of the light-trap effect.
            </li>
            <li>
              <strong>Plant a native oak, cherry, or birch.</strong> Not for the whip-poor-will
              directly — it does not come into your yard. But a single native oak at maturity
              supports 500+ moth and butterfly species through their larval stage. Those moths
              emerge as adults and move through the forest edge. The bird hunts that edge.
            </li>
            <li>
              <strong>Leave leaf litter in fall.</strong> Many moth species pupate in the duff
              layer beneath the trees where their caterpillars fed. Autumn raking and bagging
              removes those pupae. Leave what you can under shrubs and at the base of trees, and
              more moths survive to emerge the following summer.
            </li>
          </ul>

          <figure className="species-content-photo species-content-photo--center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/EasternWhip-poor-will.jpg"
              alt="Eastern Whip-poor-will on the ground at Magee Marsh, Ohio — the bird is fully visible but its mottled pattern reads as a pile of dead leaves with eyes"
              loading="lazy"
            />
            <figcaption>
              Nesting whip-poor-wills lay two eggs directly on the ground among dead leaves —
              no nest is built. The female sits on the eggs and relies entirely on camouflage
              to avoid detection. She will not flush until a predator is within one or two steps.
              This strategy held for millions of years. It does not protect against a lawn mower,
              a free-roaming outdoor cat, or a yard treated with broad-spectrum insecticide.
              <span className="photo-credit"> Photo: <a href="https://commons.wikimedia.org/wiki/File:EasternWhip-poor-will.jpg" target="_blank" rel="noopener noreferrer">via Wikimedia Commons</a></span>
            </figcaption>
          </figure>
        </section>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Other hunters in the same food web</h2>
          <p>
            The whip-poor-will shares its dependence on native caterpillars and moths with
            several other neighbors in the gallery. Reduce the pesticide load and restore
            the native plant base, and more than one species comes back.
          </p>
          <ul className="species-connections">
            <li>
              <button className="link-button" onClick={() => onNavigate('common-nighthawk')}>
                Common Nighthawk
              </button>
              {' '} — another aerial insectivore declining for the same reasons, hunting the
              same moths over open rooftops and fields on the same summer nights.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('little-brown-bat')}>
                Little Brown Bat
              </button>
              {' '} — hunts moths and beetles at night using echolocation; mosquito spray
              hits bat prey as directly as it hits whip-poor-will prey.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('luna-moth')}>
                Luna Moth
              </button>
              {' '} — one of the large moths this bird eats; its caterpillars feed on birch,
              walnut, and persimmon — native trees a yard can actually support.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('wood-thrush')}>
                Wood Thrush
              </button>
              {' '} — shares the forest-interior habitat and declines for the same fragmentation
              and insect-loss reasons.
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
