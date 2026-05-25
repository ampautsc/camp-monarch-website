import type { Page } from '../App'

interface SpicebushSwallowtailProps {
  onNavigate: (page: Page) => void
}

export default function SpicebushSwallowtail({ onNavigate }: SpicebushSwallowtailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Papilio_troilus_male.jpg/960px-Papilio_troilus_male.jpg"
          alt="Male Spicebush Swallowtail butterfly with wings spread, showing black forewings with pale spots along the margin and hindwings with iridescent blue-green scaling and a row of orange spots"
          className="species-hero-image"
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Papilio_troilus_-_spicebush_swallowtail.jpg/960px-Papilio_troilus_-_spicebush_swallowtail.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Derek Ramsey&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Papilio_troilus_male.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Spicebush Swallowtail</h1>
        <p className="hero__lead">
          A Spicebush Swallowtail caterpillar, shortly after hatching from an egg deposited on a
          spicebush leaf, pulls the leaf&apos;s edge upward with silk threads and seals itself inside.
          The leaf curves over the caterpillar and forms a closed tube. During the day it rests
          inside the tube; at night it emerges to feed on the leaf surface directly beside the shelter.
          A curled and silk-bound leaf on a spicebush branch in July means a caterpillar completed
          its first instar within range of that yard.
        </p>
        <p className="hero__lead">
          Both male and female Spicebush Swallowtails carry black bodies with cream spots along
          the forewing margin and blue-green hindwing scaling that matches the Pipevine Swallowtail —
          a butterfly that sequesters aristolochic acid from its host plant and causes illness in any
          bird that consumes it. The Spicebush Swallowtail carries none of those compounds.
          Its caterpillars feed on spicebush and sassafras. It survives on the aversion
          that Pipevine Swallowtails have trained into the local bird population,
          using a pattern it shares but did not earn.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="shelter-heading">
          <h2 id="shelter-heading">Three weeks inside a silk-sealed leaf — then eyespots, then a twig chrysalis through winter</h2>
          <p>
            The early-instar Spicebush Swallowtail caterpillar is dark brown with pale irregular
            markings. The pattern and position — resting on the upper surface of a leaf where a
            bird dropping would land — matches fresh droppings closely enough that visual predators
            pass without stopping. This camouflage strategy persists through the first three molts,
            while the caterpillar is still small enough to fit the dropping-shape at its resting spot.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Papilio_troilus_caterpillar_%28Kaldari%29.jpg/480px-Papilio_troilus_caterpillar_%28Kaldari%29.jpg"
              alt="Late-instar Spicebush Swallowtail caterpillar — bright green with two large yellow-green false eyespots near the head end, dark pupils in each eyespot giving the front end the appearance of a small snake or owl face"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Papilio_troilus_caterpillar.jpg/480px-Papilio_troilus_caterpillar.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              The late-instar Spicebush Swallowtail caterpillar inflates the swollen thoracic
              segments directly behind the false eyespots when a predator approaches, making
              the pattern wider and more three-dimensional. The yellow-green eye marks with
              dark pupils are positioned to face outward when the caterpillar curls its front end
              up from the leaf surface. Early instars look nothing like this — brown and mottled,
              resting flat, shaped like a dropping.
              <span className="photo-credit"> Photo: Kaldari&nbsp;·&nbsp;Public domain via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            After the third molt the caterpillar shifts to bright green and constructs a new leaf
            shelter on the same or a neighboring leaf. The shelter is larger now, proportioned for
            a 30–40 mm body. The caterpillar also carries two large false eyespots positioned on
            swollen thoracic segments behind the head — yellow-green with dark pupils, oriented
            to face outward when the caterpillar peeks from the open end of the shelter.
            A predator approaching the shelter sees a face — not the caterpillar&apos;s actual head,
            but a pattern suggesting the eye of a green tree snake or small owl.
          </p>
          <p>
            When touched, the caterpillar inflates the segments behind the eyespots, swelling
            slightly and completing the illusion of a wider, deeper face. It also everts the
            osmeterium — a forked orange-red gland behind the head — releasing terpene compounds
            that deter ants and parasitic wasps. The gland retracts within seconds after
            the disturbance passes.
          </p>
          <p>
            Finding caterpillars on a yard spicebush does not require luck. Walk the branch tips
            in July and August and look for leaves folded lengthwise, edges bound with silk threads,
            frass scattered on lower foliage below. A sealed leaf with chewed edges is occupied.
            The caterpillar spends 20 to 28 days in the shelter before moving to the pupal stage.
            Summer-generation chrysalids attach to a twig or branch and eclose in 10 to 14 days.
            The late-summer generation stays as a chrysalis from October through April,
            attached to a twig within the host plant or on a nearby stem.
          </p>
        </section>

        <section aria-labelledby="mimicry-heading">
          <h2 id="mimicry-heading">Aristolochic acid, a bird&apos;s learned aversion, and the species that borrows it</h2>
          <p>
            The Pipevine Swallowtail (<em>Battus philenor</em>) feeds as a caterpillar on pipevines
            and wild ginger in the genus <em>Aristolochia</em>. These plants contain aristolochic
            acids — compounds toxic to bird kidney tissue. Adults retain enough of these compounds
            that a bird eating a Pipevine Swallowtail becomes ill and begins associating
            the black-and-blue wing pattern with the response.
            Subsequent encounters with that pattern prompt avoidance without capture.
          </p>
          <p>
            The Spicebush Swallowtail carries none of these compounds. Its caterpillars feed on
            spicebush and sassafras — plants with no aristolochic acid content. But the adult&apos;s
            black body, cream-spot forewing margin, and blue-green hindwing scaling duplicate
            the Pipevine Swallowtail&apos;s pattern closely enough that a bird conditioned on real
            pipevines avoids the Spicebush Swallowtail on sight. This is Batesian mimicry:
            a palatable species surviving on the aversion a toxic model has built in the predator.
          </p>
          <p>
            Unlike the Eastern Tiger Swallowtail — where only dark-form females carry the Pipevine
            pattern, and yellow-form females and all males do not — both sexes of the Spicebush
            Swallowtail carry the mimicry. The male&apos;s hindwings show blue-green iridescent
            scaling with orange-spotted margins. The female&apos;s hindwings carry deeper, wider blue
            scaling, closer to the Pipevine&apos;s solid blue wash. In the field the two species are
            frequently confused; many observers report &ldquo;Pipevine Swallowtail&rdquo; and mean
            Spicebush Swallowtail.
          </p>
          <p>
            How protective the mimicry is scales with how common Pipevine Swallowtails are locally.
            In the mid-Atlantic and southern Appalachians, where Pipevine Swallowtails breed
            across a wide area, the local bird community encounters the model regularly enough
            to maintain a conditioned aversion. In the upper Midwest, where Pipevine Swallowtails
            are rare or absent, birds have less consistent experience with the toxic model
            and the Spicebush Swallowtail&apos;s disguise provides less consistent protection.
          </p>
        </section>

        <section aria-labelledby="spicebush-heading">
          <h2 id="spicebush-heading">Deer browse, mowed sassafras sprouts, and what disappears with the understory</h2>
          <p>
            Spicebush (<em>Lindera benzoin</em>) is a native deciduous shrub of the eastern forest
            understory — typically 4 to 12 feet tall, tolerating deep shade under closed canopy.
            It blooms yellow in March before the canopy leafs out, producing clusters of small
            flowers along bare stems that are among the earliest native blooms of the year.
            In September it sets small red berries that migrating Hermit Thrushes and Wood Thrushes
            consume before leaf drop. For the Spicebush Swallowtail, it is the preferred host plant.
          </p>
          <p>
            Deer eat spicebush leaves and stems preferentially. In forest patches with deer
            densities above roughly 15 to 20 deer per square mile, spicebush is browsed heavily
            enough that reproduction is suppressed and plant height stays below browse reach.
            At densities above 30 per square mile — common in suburban and exurban areas
            of the eastern US — spicebush is often eliminated from the understory entirely.
            Eastern forests that once had continuous spicebush in the shade layer now hold bare
            ground between tree trunks. Spicebush Swallowtail caterpillars require leaves
            large enough to construct and seal a shelter; browsed stems at knee height do not
            provide that.
          </p>
          <p>
            Sassafras (<em>Sassafras albidum</em>) is the alternate host plant. It reproduces
            by root sprouts — sending up new stems freely along fence lines, woodland edges,
            and unmowed strips. In most residential settings these sprouts are cut as they
            appear, treated as encroaching brush. A cluster of sassafras stems 3 to 5 feet tall
            left intact from spring through fall provides a host-plant patch a female Spicebush
            Swallowtail will locate and use within the same growing season.
            Cutting the sprouts each spring removes the alternate host from the property
            without any gain to the lawn or garden.
          </p>
          <p>
            A female searching for a host plant follows the volatile compounds that spicebush and
            sassafras release — both contain distinctive aromatic oils detectable at flight range.
            A single spicebush planted in a yard is detectable to searching females passing within
            the local flight area. Egg-laying on a new planting happens in the first season
            if the shrub is within the flight range of an established local population.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Spicebush in the shade, sassafras sprouts along the fence, and no caterpillar spray on the host</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lindera_benzoin_2.jpg/480px-Lindera_benzoin_2.jpg"
              alt="Spicebush branches in early spring — clusters of small yellow flowers along bare stems before leaves have emerged, blooming in March"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Lindera_benzoin_NRCS-2.jpg/480px-Lindera_benzoin_NRCS-2.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              Spicebush blooms in March or early April along bare stems before leaves emerge —
              one of the earliest native shrubs to flower after winter. The same plant that
              hosts Spicebush Swallowtail caterpillars in July feeds migrating thrushes on
              red berries in September, and its yellow fall foliage closes the season
              before the host chrysalis overwinters on the twig.
              <span className="photo-credit"> Photo: Ryan Hodnett&nbsp;·&nbsp;
                <a href="https://commons.wikimedia.org/wiki/File:Lindera_benzoin_2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
                &nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Plant spicebush in partial to deep shade.</strong>{' '}
              Spicebush (<em>Lindera benzoin</em>) is native throughout the eastern US and tolerates
              the dense shade under mature canopy trees where most ornamentals fail.
              It is available at native plant nurseries in 1-gallon containers.
              The species has separate male and female plants; planting two or more shrubs
              produces both the host leaves that Spicebush Swallowtail caterpillars need and
              the red berries in September that migrating birds consume. A female butterfly
              searching for a host locates spicebush by scent and will lay eggs on a single
              dooryard planting; she does not require a forest behind the yard.
            </li>
            <li>
              <strong>Stop cutting or mowing sassafras root sprouts.</strong>{' '}
              Sassafras sends up root sprouts along fence lines, woodland edges, and unmowed
              strips. A cluster of stems 3 to 5 feet tall, left intact from spring through fall,
              provides a host-plant patch a female Spicebush Swallowtail will locate and use
              within the same growing season. Cutting sprouts each year removes the alternate
              host plant from the property while producing no measurable benefit to the lawn or garden.
            </li>
            <li>
              <strong>Look for silk-bound leaf tubes on spicebush and sassafras in July and August.</strong>{' '}
              A leaf folded lengthwise with edges sealed by silk threads and frass on lower foliage
              below has a caterpillar inside. A plant with three or four active shelters is
              supporting multiple caterpillars in development at the same time.
              The shelter is constructed twice per caterpillar — the early-instar bird-dropping
              camouflage version is small and tight; the later eyespot-carrying version is larger
              and positioned more visibly on the branch.
            </li>
            <li>
              <strong>No caterpillar-control spray on or near spicebush and sassafras.</strong>{' '}
              Btk, spinosad, and pyrethrin products kill all lepidopteran larvae on treated foliage,
              including the Spicebush Swallowtail caterpillar inside its leaf shelter.
              Chewed leaves and frass on a spicebush or sassafras in July and August indicate
              caterpillar activity. Spicebush tolerates repeated heavy leaf loss without any
              reduction in growth the following season.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('spicebush')}>
              <span className="neighbor-name">Spicebush</span>
              <span className="neighbor-note">The preferred host plant — a native understory shrub that blooms yellow in March before the canopy leafs out, hosts Spicebush Swallowtail caterpillars in their silk-sealed leaf tubes in July, and feeds migrating thrushes on high-fat red berries in September</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('sassafras')}>
              <span className="neighbor-name">Sassafras</span>
              <span className="neighbor-note">The alternate host plant — Spicebush Swallowtail females detect sassafras by the same aromatic oils that give it its root-beer scent; root sprouts along fence lines that reach 3 to 5 feet by June provide the leaf size caterpillars need to construct a silk-sealed shelter</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
              <span className="neighbor-name">Eastern Tiger Swallowtail</span>
              <span className="neighbor-note">Also a Batesian mimic of the Pipevine Swallowtail — but only dark-form females carry the pattern, not males or yellow-form females. Both species puddle at wet soil for minerals and overlap on native nectar plants from June through September</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('black-swallowtail')}>
              <span className="neighbor-name">Black Swallowtail</span>
              <span className="neighbor-note">Third species mimicking the Pipevine Swallowtail in the same yards — the female Black Swallowtail carries the pattern; males do not. Uses carrot-family host plants, not spicebush or sassafras, so the two species can breed in the same yard without competing for host plants</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('hermit-thrush')}>
              <span className="neighbor-name">Hermit Thrush</span>
              <span className="neighbor-note">Migrating Hermit Thrushes arrive in September and consume spicebush berries — the same shrub that hosted Spicebush Swallowtail caterpillars in July and August shifts roles and feeds a different species in a different season</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('great-spangled-fritillary')}>
              <span className="neighbor-name">Great Spangled Fritillary</span>
              <span className="neighbor-note">Nectars on joe-pye weed and purple coneflower at the same time as Spicebush Swallowtails — the late-summer native planting that draws one draws both to the same flower heads in August</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('joe-pye-weed')}>
              <span className="neighbor-name">Joe-Pye Weed</span>
              <span className="neighbor-note">Blooms August through September and draws Spicebush Swallowtails during the late-summer generation — the adults working joe-pye weed in August are loading fat reserves the overwintering chrysalis will carry through winter</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('invasive-plants')}>
              <span className="neighbor-name">Invasive Plants</span>
              <span className="neighbor-note">Invasive shrubs in the understory — burning bush, Japanese barberry, shrub honeysuckle — occupy the same shade layer as spicebush and outcompete it where deer have thinned the natives; removing them from shaded yard edges creates the space a spicebush needs to establish</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}