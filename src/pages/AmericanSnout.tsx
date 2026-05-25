import type { Page } from '../App'

interface AmericanSnoutProps {
  onNavigate: (page: Page) => void
}

export default function AmericanSnout({ onNavigate }: AmericanSnoutProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/340891791/large.jpeg"
          alt="American Snout butterfly (Libytheana carinenta) resting on a leaf — the elongated labial palps projecting forward from the face like a snout are visible, along with orange-and-brown patterned wings"
          className="species-hero-image"
          style={{ objectPosition: 'center 45%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/58379019/large.jpeg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: John Flannery&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/observations/192459380" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>In October, a mass of American Snouts moving through Texas can be counted at six million individuals per hour at roadside stations — every one of them a caterpillar that hatched on hackberry earlier that season</h1>
        <p className="hero__lead">
          The American Snout (<em>Libytheana carinenta</em>) carries a pair of elongated labial
          palps — the sensory appendages near the mouth — that project straight forward past
          the head for roughly half the wingspan. No other eastern butterfly has this structure.
          When the Snout lands on a stem and folds its wings, the palps mimic a dead leaf
          petiole; the butterfly disappears against the woody plant it&apos;s resting on.
        </p>
        <p className="hero__lead">
          Hackberry is the only caterpillar host. The population in any yard is entirely
          determined by how many hackberry leaves were available in June and July. In years
          when hackberry blooms abundantly and June rainfall is high, caterpillar populations
          spike — and in September and October, those adults move south and west in masses
          that block highway visibility in south Texas.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="palps-heading">
          <h2 id="palps-heading">Palps that look like a twig — the disguise is structural, not behavioral</h2>
          <p>
            Most butterfly disguises involve wing pattern: eyespots, false heads, or color
            that matches bark or leaves. The American Snout&apos;s disguise is architectural.
            When resting, the forewing folds against the hindwing and the labial palps project
            forward exactly where a dead leaf petiole would be. The wing undersides are mottled
            gray-brown. The butterfly does not orient itself to maximize the effect — the shape
            accomplishes it regardless of angle.
          </p>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/58379019/large.jpeg"
              alt="American Snout (Libytheana carinenta) dorsal view — orange and dark brown wing pattern visible, with the projecting labial palps extending from the face that give the species its common name"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/340891791/large.jpeg'
              }}
            />
            <figcaption>
              American Snout dorsal view. The orange, dark brown, and white wing pattern
              is visible when the butterfly basks or nectars. When it folds its wings and
              grips a stem, the pattern disappears and the projecting palps complete the
              twig-end silhouette.
              <span className="photo-credit"> Photo: NatureShutterbug&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/photos/58379019" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a></span>
            </figcaption>
          </figure>
          <p>
            The labial palps serve a sensory function beyond camouflage &mdash; they carry
            chemoreceptors that detect food and host plant compounds at close range. All
            butterflies have palps, but in <em>Libytheana</em> the structure is elongated
            to a degree found in no other North American species. The common name refers
            to the visual effect when the butterfly is viewed from the side.
          </p>
          <p>
            Adults visit flowers for nectar &mdash; goldenrod, asters, and composites through
            late summer and fall. This distinguishes them from Hackberry Emperor and Tawny
            Emperor, the other hackberry-specialist butterflies, which never visit flowers.
            Snouts also drink from puddles and wet soil. Flight is fast and erratic, covering
            ground quickly between nectaring stops.
          </p>
        </section>

        <section aria-labelledby="hackberry-heading">
          <h2 id="hackberry-heading">One host plant, one larval food source — no hackberry, no American Snout</h2>
          <p>
            American Snout caterpillars feed exclusively on hackberry (<em>Celtis</em> species).
            No caterpillar has been reared to maturity on any other plant genus. A yard without
            hackberry will not produce a breeding Snout regardless of what else is planted there.
            The caterpillar is pale green with yellow lateral stripes and blends into the hackberry
            foliage through its entire development.
          </p>
          <p>
            Female Snouts lay eggs on young hackberry leaves in spring and again in summer.
            The caterpillar hatches, feeds on the leaf from the tip toward the base, and pupates
            in a green chrysalis attached to a stem. Development from egg to adult takes roughly
            three to four weeks in warm summer conditions. In the southern part of the range,
            three to four generations occur per year; in the northern part, two.
          </p>
          <p>
            Adults in wet years survive to migrate. In dry years, hackberry produces fewer new
            leaves, caterpillar survival drops, and adult populations stay low. The relationship
            is tight enough that local American Snout abundance is essentially a measure of
            hackberry leaf availability and summer rainfall in that watershed earlier in the season.
          </p>
        </section>

        <section aria-labelledby="migration-heading">
          <h2 id="migration-heading">Six million per hour through south Texas — the migration that follows wet years</h2>
          <p>
            American Snouts do not migrate every year. In years with abundant spring rainfall
            across Texas, Oklahoma, and adjacent states, hackberry blooms extensively and
            caterpillar populations spike. By September, adult Snouts begin moving south and
            southwest in waves. The largest migrations on record involved observers counting
            individuals at fixed roadside stations; six million per hour has been documented
            at single locations in south Texas.
          </p>
          <p>
            The trigger appears to be a combination of high population density and the onset
            of dry conditions that reduce hackberry quality. Adults that dispersed before the
            dry period arrive in south Texas and Mexico with enough fat reserves to overwinter
            as adults. Unlike monarchs, Snouts do not aggregate at a specific overwintering
            site &mdash; they disperse through warm lowland areas and resume activity whenever
            temperatures allow flight.
          </p>
          <p>
            In most years outside of migration events, American Snouts are present in low to
            moderate numbers across their range. A yard with hackberry will have Snouts
            breeding in it through summer even in non-migration years &mdash; they simply
            don&apos;t accumulate to numbers visible from a distance.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Hackberry in the yard, leaf litter intact through April — the complete Snout setup</h2>
          <ol className="step-list">
            <li>
              <strong>Keep any existing hackberry on the property.</strong>{' '}
              Hackberry self-seeds into fence rows and at property edges — placed there by
              cedar waxwings, robins, and other birds that eat the fruit. A hackberry that
              appears uninvited is not a weed; it is a functioning habitat node. The corky
              bark ridges that develop as the tree matures are an identification feature
              visible from ten feet.
            </li>
            <li>
              <strong>Leave the leaf litter under hackberry from October through late April.</strong>{' '}
              Hackberry Emperor and Tawny Emperor caterpillars overwinter in that leaf layer.
              The Snout overwinters as an adult in mild winters, but the caterpillar generation
              that feeds in fall may shelter in the leaf layer before completing development.
              Raking removes the resource for all three hackberry specialists simultaneously.
            </li>
            <li>
              <strong>Plant goldenrod and asters at the yard&apos;s edge for fall nectaring.</strong>{' '}
              American Snout adults need nectar through September and October before migration.
              Canada goldenrod, New England aster, and aromatic aster all flower in the same
              window the Snout needs fuel. Adults nectaring at goldenrod can be observed at
              close range — they are less flighty when feeding than when flying between plants.
            </li>
            <li>
              <strong>Apply no systemic insecticide to hackberry or adjacent soil during the growing season.</strong>{' '}
              Systemic treatments absorbed through roots or bark during spring and summer
              reach the caterpillar generation feeding on that tree&apos;s leaves. The caterpillar
              is pale green against green leaf tissue &mdash; invisible at normal distance, dead
              within hours of systemic treatment reaching the foliage. If pest management
              is needed near the hackberry, verify the treatment zone doesn&apos;t reach the
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
              <button className="neighbor-link" onClick={() => onNavigate('tawny-emperor')}>
                Tawny Emperor
              </button>{' '}
              &mdash; the third obligate hackberry butterfly; shares the same host tree,
              the same overwintering leaf litter, and the same adult habit of drinking
              dissolved minerals from sap flows and skin; distinguished from the Hackberry
              Emperor by the forewing tip &mdash; Tawny Emperor carries no white spots
              where the Hackberry Emperor carries three to five
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
