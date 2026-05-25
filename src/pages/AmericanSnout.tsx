import type { Page } from '../App'

interface AmericanSnoutProps {
  onNavigate: (page: Page) => void
}

export default function AmericanSnout({ onNavigate }: AmericanSnoutProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/244576271/large.jpeg"
          alt="American Snout butterfly (Libytheana carinenta) perched with wings partially open — brown and orange upper wings with white spots near the forewing tip, elongated labial palps projecting forward from the face like a beak"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/92800293/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: mnerrie&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/photos/244576271" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>In October, a mass of American Snouts moving through Texas can be counted at six million individuals per hour at roadside stations — every one of them a caterpillar that hatched on hackberry earlier that season</h1>
        <p className="hero__lead">
          The American Snout (<em>Libytheana carinenta</em>) carries a pair of elongated labial
          palps extending from its face like a bird's beak. In every other North American
          butterfly these sensory organs are short and tucked close to the face; in this species
          they project forward in a fixed position. Perched with wings closed on a hackberry twig,
          the butterfly tilts its body at an angle: the palps become the dead stub of a broken
          leaf stem, the folded wings become the dried blade. A branch holding three dead
          hackberry leaves may be holding two dead leaves and one living butterfly, with no
          way to tell from three feet away.
        </p>
        <p className="hero__lead">
          No American Snout caterpillar has been reared to maturity on any plant outside the
          hackberry genus. The butterfly's range — east of the Rockies, south through Texas
          and into Mexico — is the hackberry map drawn again. A yard with a mature hackberry
          that leafs out each spring is a yard where this species can complete the full cycle
          from egg to adult within the property boundary.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="snout-heading">
          <h2 id="snout-heading">The labial palps that make a butterfly look like a dead leaf stem</h2>
          <p>
            The structure projecting from the American Snout's face is a pair of labial palps —
            elongated to roughly three times the length found in typical North American
            butterflies and held forward in a fixed position. All butterflies carry these
            sensory organs; in <em>Libytheana carinenta</em> they reach 8 to 10 millimeters
            long, covered in brown and orange scales, and do not retract. The effect from the
            front is a narrow face with a long projection pointing outward, visible from
            three feet away and unlike any other butterfly in North America.
          </p>
          <p>
            When the American Snout perches with wings folded against a twig, it tilts its
            body to roughly 45 degrees along the twig's axis. The palps extend forward and
            register as the broken petiole where a leaf detached. The folded wings — brown on
            the underside with an irregular blotchy pattern matching a dried hackberry leaf —
            become the blade. The butterfly's body is hidden behind the wings. What remains
            visible is a dead leaf stub on a branch, complete with a stem.
          </p>
          <p>
            Upper wing surfaces are orange-brown with a pattern of dark spots and three to five
            white spots near the forewing tip — visible when the wings open briefly during
            landing. Wingspan runs from 1.5 to 2.0 inches. The snout is the field mark that
            separates this species from every other butterfly before wing pattern is checked.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">The caterpillar feeds from the leaf edge inward, hidden against the midrib, on hackberry only</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/111513693/large.jpeg"
              alt="American Snout butterfly (Libytheana carinenta) perched on vegetation with wings spread — orange-brown upper wings with white spots near the forewing tip, elongated snout visible from the front"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/244576282/large.jpeg'
              }}
            />
            <figcaption>
              American Snout with wings open. The white forewing spots and orange-brown
              coloring are visible here; with wings closed, the underside mimics a dead
              hackberry leaf. Adults nectar on goldenrod, asters, and fleabane in late
              summer — behavior that distinguishes them from the Hackberry Emperor, which
              never visits flowers.
              <span className="photo-credit"> Photo: dave1682&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/photos/111513693" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
              </span>
            </figcaption>
          </figure>
          <p>
            The female American Snout locates hackberry by the chemical signature of the
            leaves — secondary compounds specific to the <em>Celtis</em> genus. She lays eggs
            singly on the undersides of young hackberry leaves, targeting new growth and
            still-expanding leaf tissue. The caterpillar is pale green with two thin yellow
            stripes running the length of each side, flattened against the leaf surface in a
            way that aligns with the leaf's natural texture. It feeds from the leaf edge
            inward, leaving clean notches that register as mechanical damage rather than
            caterpillar feeding.
          </p>
          <p>
            A single hackberry with caterpillars present may hold 20 to 40 individuals
            distributed across its canopy without showing obvious defoliation. The caterpillar
            is a few centimeters long at maturity and green against green leaf surface —
            invisible at normal viewing distance, detectable only by turning individual leaves
            over and examining the underside.
          </p>
          <p>
            In the upper Midwest and Northeast, one to two broods develop each season, with
            adults flying from May through October. In the southern range — Texas, the Gulf
            Coast — three or four broods are possible from April through October. Adults
            fly close to hackberry and move to open areas to nectar on goldenrod, fleabane,
            and native asters in late summer and fall, with peak nectaring in August and
            September before the fall migration begins.
          </p>
        </section>

        <section aria-labelledby="migration-heading">
          <h2 id="migration-heading">What produces a migration counted at six million per hour in the Texas Hill Country</h2>
          <p>
            In years when spring rainfall is above average, hackberry trees across the southern
            range flush with new leaf growth earlier and more densely than usual. The chemical
            signature that triggers American Snout egg-laying intensifies with new leaf tissue.
            Caterpillar populations build through the spring and summer broods. In October,
            the surviving adults — tens of millions of them across the Texas corridor — begin
            moving southwest toward overwintering habitat in the mountains of central Mexico.
          </p>
          <p>
            At counting stations in the Texas Hill Country during peak migration years,
            observers have recorded six million individuals per hour passing a fixed point.
            The air during a peak movement contains enough butterflies that they are
            visible as a mass drift of orange and brown in the same way that a snowfall
            is visible — a continuous movement through the sky from horizon to horizon,
            not individual insects but a collective front. Butterflies land on every
            surface and pool in depressions in roads.
          </p>
          <p>
            The next dry year drops the population back. The cycle repeats whenever
            sufficient rainfall produces the hackberry leaf flush that feeds the next
            caterpillar boom. The same dynamic plays out at smaller scale throughout the
            eastern range — in Illinois, Ohio, and Indiana, a wet spring produces
            measurably more American Snouts in fall. A yard with a mature hackberry
            participates in this cycle: the number of adults that emerge from a single
            tree in a boom year is higher than in a dry year, and in a boom year some
            of those adults join the October drift southwest.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that keep American Snout through the full cycle</h2>
          <ol className="step-list">
            <li>
              <strong>Leave undisturbed leaf litter under hackberry from October through April.</strong>{' '}
              American Snout caterpillars and pupae can overwinter in the leaf layer at the
              base of the host tree. The caterpillar's winter shelter and the spot where it
              resumes feeding the following spring are within a few meters of each other.
              Raking the leaf layer in November removes overwintering individuals from the
              property. Leave the litter intact through at least mid-April.
            </li>
            <li>
              <strong>Don't remove self-seeded hackberry saplings from fence rows or property edges.</strong>{' '}
              Cedar waxwings, American Robins, and other fruit-eating birds deposit hackberry
              seeds in their droppings after eating the fruit. A hackberry growing at a
              property edge was placed there by a bird. The corky ridged bark that develops
              within four to five years is the identification mark. A hackberry with a trunk
              four inches in diameter already supports American Snout egg-laying.
            </li>
            <li>
              <strong>Plant goldenrod, native asters, or fleabane in a site with afternoon sun.</strong>{' '}
              American Snout adults nectar on late-summer and fall composites in the weeks
              before the October migration. These same plants supply monarchs, sulfur
              butterflies, and bumble bees during the same fueling window. A patch of
              goldenrod and asters provides the adult Snout the resources it needs to
              complete the season before migration.
            </li>
            <li>
              <strong>Apply no systemic insecticide to hackberry or adjacent soil during the growing season.</strong>{' '}
              Systemic treatments absorbed through roots or bark during spring and summer
              reach the caterpillar generation feeding on that tree's leaves. The caterpillar
              is pale green against green leaf tissue — invisible at normal distance, dead
              within hours of systemic treatment reaching the foliage. If pest management
              is needed near the hackberry, verify the treatment zone doesn't reach the
              tree before applying.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">What else depends on hackberry in the same yard</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hackberry')}>
                Hackberry
              </button>{' '}
              &mdash; the only caterpillar host; no American Snout has been reared to
              maturity on any plant outside the <em>Celtis</em> genus; a property without
              hackberry will not produce a breeding American Snout regardless of what else
              grows there
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hackberry-emperor')}>
                Hackberry Emperor
              </button>{' '}
              &mdash; the other butterfly whose caterpillar develops only on hackberry;
              unlike the Snout, the Emperor never visits flowers — adults seek dissolved
              minerals in sap flows, fermenting fruit, and human sweat; both species share
              the same host tree but fuel on opposite resources as adults
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('question-mark')}>
                Question Mark
              </button>{' '}
              &mdash; also uses hackberry as a caterpillar host alongside stinging nettle;
              adult Question Marks and American Snouts overlap at goldenrod and aster
              patches in late summer and at hackberry trees where multiple species gather
              around sap flows and fermenting fruit
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-comma')}>
                Eastern Comma
              </button>{' '}
              &mdash; uses hackberry alongside stinging nettle as a caterpillar host;
              adults fuel on fermenting fruit and sap flows through late summer in the
              same areas where American Snouts are nectaring at adjacent asters
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cedar-waxwing')}>
                Cedar Waxwing
              </button>{' '}
              &mdash; consumes hackberry fruit in large nomadic flocks during fall migration
              and deposits hackberry seeds in droppings wherever the flock perches —
              the waxwing is the mechanism that places new hackberry seedlings in fence
              rows and at property edges, expanding the habitat for both Snout and Emperor
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The American Snout and Hackberry Emperor share the same host tree.</strong>{' '}
            Both butterflies exist on your property only if a hackberry does. See what else
            a hackberry supports at{' '}
            <button className="link-button" onClick={() => onNavigate('hackberry')}>
              Hackberry
            </button>
            {' '}and see why the leaf litter under that tree matters at{' '}
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
