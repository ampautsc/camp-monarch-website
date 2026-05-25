import type { Page } from '../App'

interface TawnyEmperorProps {
  onNavigate: (page: Page) => void
}

export default function TawnyEmperor({ onNavigate }: TawnyEmperorProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/187806544/large.jpeg"
          alt="Tawny Emperor butterfly (Asterocampa clyton) wings spread on bark — orange-brown upper wings with dark spots and no white spots near the forewing tip, scalloped outer wing margins"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Tawny_emperor_%28Asterocampa_clyton%29.jpg/960px-Tawny_emperor_%28Asterocampa_clyton%29.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Ainsley&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/photos/187806544" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>A female Tawny Emperor stacks her eggs in a cylinder of 100 to 500 on one hackberry leaf — every adult flying from that tree this summer started in the same cluster</h1>
        <p className="hero__lead">
          The Tawny Emperor (<em>Asterocampa clyton</em>) uses hackberry as its only caterpillar
          host plant. The same tree that breeds Hackberry Emperors breeds Tawny Emperors. Both
          species land on your arm in July to drink sodium from your skin. Both ignore flowers.
          The single visible difference is the forewing tip: Hackberry Emperors carry three to
          five white spots near the tip of each forewing; Tawny Emperors carry none.
        </p>
        <p className="hero__lead">
          Hackberry Emperor females deposit eggs in small flat groups. Tawny Emperor females
          stack their eggs &mdash; the resulting mass is a compact cylinder of 100 to 500 eggs
          on one leaf, each layer perpendicular to the one below. When those eggs hatch, the
          caterpillars feed in a group through their first instars. By late summer they scatter
          to individual leaves. The leaf litter under that same tree is where they spend the winter.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="identification-heading">
          <h2 id="identification-heading">Orange-brown wings, no white forewing spots — the absence is the field mark</h2>
          <p>
            Both <em>Asterocampa</em> species perch with wings open on tree trunks and land on
            human skin. Looking at the forewing tip is the fastest separation: Hackberry Emperor
            carries three to five white spots in a cluster near the tip; Tawny Emperor does not.
            In place of white spots, the Tawny Emperor&apos;s forewing shows only dark brown
            markings against the orange-tan ground color.
          </p>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/187806570/large.jpeg"
              alt="Tawny Emperor butterfly (Asterocampa clyton) dorsal view — orange-tan wings with dark spots, forewing tip shows no white spots, contrasting with Hackberry Emperor which carries white spots at the same location"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/187806544/large.jpeg'
              }}
            />
            <figcaption>
              Tawny Emperor dorsal view. The forewing tip has no white spots. A Hackberry
              Emperor flying the same hackberry at the same time carries three to five white
              spots at the same location &mdash; visible from arm&apos;s length when the
              butterfly lands.
              <span className="photo-credit"> Photo: Ainsley&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/photos/187806570" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a></span>
            </figcaption>
          </figure>
          <p>
            Tawny Emperors run slightly darker and more uniformly orange-brown than Hackberry
            Emperors, which show more contrast between their spots and the ground color. The
            hindwing underside is pale gray with darker wavy lines and eyespots. Wingspan
            runs from 1.75 to 2.75 inches; females are typically larger and darker than males.
          </p>
          <p>
            Two flight periods per year: a spring brood from late April through June, a summer
            brood from late June through September. Adults of both broods live two to four weeks.
            Male Tawny Emperors hold perches on hackberry trunks from mid-morning through
            afternoon and chase any moving object &mdash; other butterflies, birds, people &mdash;
            before returning to the same perch within seconds.
          </p>
        </section>

        <section aria-labelledby="eggs-heading">
          <h2 id="eggs-heading">100 to 500 eggs stacked on one leaf — first instars feed side by side before scattering</h2>
          <p>
            Hackberry Emperor females lay 8 to 20 eggs in a flat circular group on a single
            hackberry leaf. Tawny Emperor females stack their eggs in a mass &mdash; each layer
            of eggs oriented perpendicular to the layer below, building a compact pale-green
            cylinder visible to the naked eye on the upper surface of the leaf. A single female
            may deposit 100 to 500 eggs in one mass before leaving.
          </p>
          <p>
            When the eggs hatch, the caterpillars remain together for their first two or three
            instars. They feed in parallel rows along the leaf margin, moving synchronously from
            one leaf to the next. By the fourth or fifth instar they separate and move to
            individual leaves. A hackberry with active Tawny Emperor egg masses in June will
            carry both the compact hatching group and solitary larger caterpillars from an
            earlier laying, sometimes on the same branch.
          </p>
          <p>
            The caterpillars are pale yellow-green with two branching spines at the head end
            and two at the tail &mdash; matching the spine arrangement of Hackberry Emperor
            caterpillars. Both species can be on the same branch at the same time. The young
            caterpillars, still in their group-feeding phase, are the easier form to find:
            look for a cluster of small caterpillars aligned along a single leaf edge in June
            or July.
          </p>
        </section>

        <section aria-labelledby="overwintering-heading">
          <h2 id="overwintering-heading">Leaf litter at the base of the host tree — the caterpillar walks ten meters and stops</h2>
          <p>
            Summer brood caterpillars do not finish development before cold arrives. In October,
            when night temperatures drop below 50&deg;F consistently, the caterpillar descends
            from the hackberry and shelters in the leaf litter at the base of the trunk. It does
            not migrate. It does not travel to a separate site. The leaf litter under that specific
            tree is where it spends the winter.
          </p>
          <p>
            In April, when hackberry buds begin to swell and temperatures hold above 50&deg;F
            through the day, the caterpillar resumes feeding on the new leaves above it. It
            completes its final instars on the same tree, pupates, and emerges as the season&apos;s
            first adult. The distance from the overwintering site to the adult&apos;s first flight
            is less than the width of the tree&apos;s canopy.
          </p>
          <p>
            A rake drawn through the leaf layer under a hackberry in November lifts and removes
            overwintering Tawny Emperor caterpillars along with the leaves. The same stroke
            eliminates Hackberry Emperor caterpillars from the same square foot. Both species
            share the same winter shelter and the same vulnerability to autumn leaf removal.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>A hackberry, its leaf litter intact, and nothing else — the complete Tawny Emperor habitat</h2>
          <ol className="step-list">
            <li>
              <strong>Keep hackberry on the property.</strong>{' '}
              Tawny Emperor caterpillars feed only on hackberry. No other tree, shrub, or plant
              substitutes. If hackberry seedlings appear in fence rows or at property edges
              &mdash; placed there by cedar waxwings, robins, or other birds that eat the fruit
              &mdash; leave them. The corky-ridged bark that develops within five years of
              germination is the identification mark; a hackberry four inches in diameter already
              supports egg-laying.
            </li>
            <li>
              <strong>Leave the leaf litter under hackberry trees from October through late April.</strong>{' '}
              Tawny Emperor caterpillars from the summer brood overwinter in the leaf layer within
              ten meters of the trunk. Hackberry Emperor caterpillars overwinter in the same layer
              at the same time. Raking this area in fall removes both species&apos; winter cohort
              from the property. Delaying the cleanup until late April, after the caterpillars have
              resumed feeding above, avoids the loss.
            </li>
            <li>
              <strong>Look for the egg mass in late May and again in early July.</strong>{' '}
              A Tawny Emperor egg mass on a hackberry leaf is a compact pale-green cylinder,
              visible from two feet away on the upper surface of the leaf. Finding one means a
              breeding adult has been present and that the hatching cohort will appear on that
              branch within a week. Spring brood masses appear in late May; summer brood masses
              in late June or early July.
            </li>
            <li>
              <strong>Apply no systemic insecticide to hackberry or adjacent soil from May through September.</strong>{' '}
              Tawny Emperor females begin oviposition in late May. A systemic treatment absorbed
              by the tree during the growing season remains in the foliage through the egg-laying
              and early feeding windows of both broods. If pest management is needed near the
              hackberry, confirm the treatment perimeter before applying.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who shares the hackberry bark, the leaf litter, and the sap flows</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hackberry')}>
                Hackberry
              </button>{' '}
              &mdash; the only caterpillar host; the same tree breeds three hackberry-only
              butterflies &mdash; Tawny Emperor, Hackberry Emperor, and American Snout &mdash;
              and provides the sap flows, bark perches, and leaf litter that all three depend
              on beyond the caterpillar stage
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hackberry-emperor')}>
                Hackberry Emperor
              </button>{' '}
              &mdash; the near-twin that flies the same hackberry at the same time; both species
              share host plant, overwintering habit, and adult behavior; the forewing tip is the
              one visible difference &mdash; white spots on Hackberry Emperor, none on Tawny Emperor
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-snout')}>
                American Snout
              </button>{' '}
              &mdash; the third obligate hackberry butterfly; carries elongated labial palps
              projecting forward from the face; unlike Tawny and Hackberry Emperors, American
              Snout adults visit flowers for nectar and undergo mass migrations in wet years
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('question-mark')}>
                Question Mark
              </button>{' '}
              &mdash; also uses hackberry as one of several caterpillar hosts; adult Question
              Marks and Tawny Emperors share sap flows and fermenting fruit in late summer;
              both species fuel on fallen apples and crabapples in September and October
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-comma')}>
                Eastern Comma
              </button>{' '}
              &mdash; another hackberry-using butterfly; adults share bark perching and fruit
              feeding with Tawny Emperors through summer afternoons; both species are found on
              the same fallen fruit and sap flows from July through September
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cedar-waxwing')}>
                Cedar Waxwing
              </button>{' '}
              &mdash; spreads hackberry seeds in fall droppings wherever it perches after eating
              the fruit, creating new hackberry seedlings in fence rows and yard edges that will
              produce Tawny Emperor host trees within five years
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
