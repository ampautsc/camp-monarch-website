import type { Page } from '../App'

interface WildIndigoDuskywingProps {
  onNavigate: (page: Page) => void
}

export default function WildIndigoDuskywing({ onNavigate }: WildIndigoDuskywingProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/605648812/large.jpg"
          alt="Wild Indigo Duskywing (Erynnis baptisiae) adult resting with wings spread flat — dark brown forewing with two rows of pale cream spots, Fredericton, New Brunswick"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/575209646/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: dwaynesabine&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/605648812" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies &amp; Skippers</div>
        <h1>A Wild Indigo Duskywing female walks across leaf surfaces tasting the chemistry with receptors in her feet — when she reads the alkaloid signature of Baptisia, she lays one egg on the upper surface, moves to the next plant, and lays one more</h1>
        <p className="hero__lead">
          Wild Indigo Duskywing (<em>Erynnis baptisiae</em>) is a skipper butterfly that flies
          from late April through early July in the eastern United States. Adults are dark brown
          with two rows of pale cream spots across the forewing — smaller than most swallowtails,
          slightly larger than a Spring Azure. They rest with wings spread flat on bare ground,
          stems, or leaf litter, where the mottled brown patterning renders them nearly invisible
          against dried vegetation. When disturbed, they fly fast and low before settling again
          a few feet away.
        </p>
        <p className="hero__lead">
          This species has a single brood per year. Adults are on the wing for roughly ten weeks
          in spring. During that window, females find, assess, and lay on <em>Baptisia</em>
          plants — the only host genus the caterpillar can use. When that window closes, the
          species retreats to the pupal stage, overwintering as a chrysalis in leaf litter at
          the base of the host plant. A yard with Wild Blue Indigo either supports the duskywing
          during those ten spring weeks or does not support it at all.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">The caterpillar rolls a Baptisia leaflet with silk and feeds from inside — it stays sealed in that shelter until it molts, then constructs a new one from a larger leaflet</h2>
          <p>
            After the female lays on a young leaflet, the hatching caterpillar spins silk
            threads along the margins and draws the edges together to form a tube. It feeds
            on the inner leaf surface from inside this shelter, eating outward from the folded
            edges while the outside of the rolled leaf remains intact. When the larva outgrows
            the leaflet, it moves to a larger one and constructs a new tube. An infested Wild
            Blue Indigo plant shows a scatter of rolled or cupped leaflets — these are the
            caterpillars' shelters, not signs of disease or physical damage.
          </p>
          <p>
            The caterpillar is pale green with a narrow darker green dorsal stripe and a
            dark orange-brown head capsule. The coloring matches the inner leaf surface
            closely enough that opening a rolled leaflet and seeing the larva requires
            a moment of looking. Early instars are less than five millimeters long. By
            the final instar, the larva reaches roughly two and a half centimeters before
            dropping to the ground to pupate.
          </p>
          <p>
            Pupation occurs in leaf litter or loose soil at the base of the host plant.
            The chrysalis overwinters on the ground, pulled into the leaf layer beneath
            the Baptisia stems. A fall cleanup that removes this litter takes the pupae
            with it. A garden that leaves the dead stems standing and the leaf debris
            beneath them intact through winter keeps the chrysalises in place until they
            eclose in late April.
          </p>
        </section>

        <section aria-labelledby="host-tracking-heading">
          <h2 id="host-tracking-heading">When Wild Blue Indigo was removed from a county, the Wild Indigo Duskywing was removed with it — the butterfly's range in any region traces where Baptisia still grows</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/343816068/large.jpeg"
              alt="Wild Indigo Duskywing (Erynnis baptisiae) adult nectaring on a purple wildflower, West Greenwich, Rhode Island"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/575209646/large.jpg'
              }}
            />
            <figcaption>
              Wild Indigo Duskywing adults nectar at wildflowers during their May and June
              flight peak, staying close to Baptisia stands where females will lay. Males
              perch on vegetation or bare ground near the host plant, watching for females.
              <span className="photo-credit"> CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            Wild Blue Indigo (<em>Baptisia australis</em>) once grew across eastern prairies,
            meadows, and open woodlands from Pennsylvania west to Nebraska and south to Georgia.
            As those habitats were converted to cropland and residential turf over the past
            century and a half, Baptisia populations were removed from most of their former
            range. The Wild Indigo Duskywing's range contracted in parallel. In states where
            grassland conversion was most complete, duskywing populations now exist as scattered
            remnants in prairie preserves, roadsides with surviving native plant communities,
            and residential yards where Baptisia has been deliberately planted.
          </p>
          <p>
            The duskywing does not switch to alternative host plants in landscapes where
            Baptisia is absent. Survey records from Ohio and Indiana show the species present
            at sites with established Baptisia populations and absent from comparable sites
            where the plant was not found, even when those sites were only a few miles apart.
            Where the plant persists, so does the butterfly. Where the plant was removed, the
            butterfly followed. A yard with an established Wild Blue Indigo planting within
            flying range of another Baptisia source is a site where a duskywing colony can
            exist.
          </p>
          <p>
            The Frosted Elfin (<em>Callophrys irus</em>), a second Baptisia specialist, uses
            the same host plant but lays on the flower buds and developing seed pods rather
            than the leaves. Its caterpillar feeds on floral tissue and immature seeds during
            May and June. Where Wild Blue Indigo grows and blooms annually, both specialists
            may be present — the duskywing using the leaves from late April, the elfin using
            the flowers in May. A yard with mature, blooming Baptisia may host both species
            simultaneously on the same plant.
          </p>
        </section>

        <section aria-labelledby="phenology-heading">
          <h2 id="phenology-heading">Adults eclose in late April as Baptisia leaves push from the crown — the plant and the butterfly arrive in the same week</h2>
          <p>
            Wild Indigo Duskywings overwinter as fully formed pupae in the leaf litter and
            emerge in late April to early May, as Baptisia breaks dormancy and pushes new
            growth from the crown base. Young, still-expanding leaflets are higher in water
            content and lower in fiber than fully mature leaves, which makes the rolled-leaf
            shelter easier to construct and the tissue easier for early instars to process.
            Adult emergence before Baptisia leafout leaves no suitable oviposition sites.
            Emergence weeks after leafout exposes early caterpillars to toughened tissue
            from the start, which increases larval mortality.
          </p>
          <p>
            Male duskywings establish territories near Baptisia plants during the May and
            June flight peak. They perch on vegetation or on bare ground, launching brief
            flights to intercept other insects passing through the area. A female approaching
            a Baptisia stand is pursued and mated. After mating, the female begins host
            assessment — landing on leaves, walking the surface, tasting with her feet, and
            laying one egg per qualifying leaflet. She distributes her clutch across multiple
            plants rather than concentrating eggs on a single stem, spreading the brood across
            more leaflets and reducing competition among hatching larvae.
          </p>
          <p>
            Adults nectar at a range of wildflowers during the flight period — Wild Bergamot,
            Purple Coneflower, and clovers are documented nectar sources. Any yard that provides
            Wild Blue Indigo as the larval host and a mix of blooming wildflowers from May
            through July covers both of the adult's requirements in one planting.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant Wild Blue Indigo in full sun and leave the leaf litter beneath it through winter — the duskywing's chrysalis overwinters in that litter and ecloses in late April</h2>
          <ol className="step-list">
            <li>
              <strong>Plant Wild Blue Indigo in full sun.</strong>{' '}
              Wild Indigo Duskywings lay on <em>Baptisia australis</em> and related
              <em> Baptisia</em> species. A single established crown provides enough foliage
              to support several egg clutches per season. Two or three crowns spaced a few
              feet apart in the same bed give females more leaflets to distribute eggs across,
              matching how the butterfly naturally behaves in meadow settings with scattered
              Baptisia plants.
            </li>
            <li>
              <strong>Leave the leaf litter beneath the plant through winter.</strong>{' '}
              Duskywing chrysalises overwinter in the leaf litter and loose soil at the base
              of the host plant. Removing this material in fall eliminates the pupae. Leave
              the fallen debris in place from September through late March. Cut the dead
              Baptisia stalks to the ground in late March — before new growth emerges from
              the crown base — and leave the cut material lying for a week before removing
              it, to allow any pupae in the thatch to settle.
            </li>
            <li>
              <strong>Do not spray insecticide on or near the Baptisia foliage from April through July.</strong>{' '}
              The caterpillar feeds inside rolled leaflets from late April through midsummer.
              A contact spray kills the larvae outright. A systemic insecticide absorbed through
              the roots makes the leaf tissue toxic to any caterpillar eating it. The first
              set of leaves that emerge in April — young, expanding tissue, still soft — is the
              tissue where the female will lay. Treating those leaves or that soil before or
              during the flight period eliminates the larval brood entirely.
            </li>
            <li>
              <strong>Add nectar flowers within a few meters of the host plant.</strong>{' '}
              Wild Indigo Duskywing adults nectar at wildflowers during the April through
              July flight period. Wild Bergamot, Purple Coneflower, and clover are documented
              nectar sources. Planting these adjacent to or near the Wild Blue Indigo keeps
              adults active in the same area where females will find and assess the host plant.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">What shares a yard with Wild Indigo Duskywing — the host plant it depends on and the companion legumes that extend the season</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-blue-indigo')}>
                Wild Blue Indigo
              </button>{' '}
              &mdash; the host plant the duskywing cannot replace; the female locates Baptisia
              leaves by tasting the surface with chemoreceptors in her feet; caterpillars feed
              inside rolled leaflets from late April through midsummer; where Wild Blue Indigo
              is absent from a landscape, the duskywing is absent too
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('frosted-elfin')}>
                Frosted Elfin
              </button>{' '}
              (<em>Callophrys irus</em>)
              &mdash; a second Baptisia specialist that lays on flower buds and developing seed
              pods rather than leaves; its caterpillar feeds on floral tissue in May and June;
              where Wild Blue Indigo blooms annually, both the duskywing and the elfin may be
              present at the same time on the same plant — one using the leaves, one using
              the flowers
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-senna')}>
                Wild Senna
              </button>{' '}
              &mdash; a companion legume that blooms in July and August, after Wild Blue Indigo
              has finished; hosts Cloudless Sulphur, Sleepy Orange, and Little Yellow
              caterpillars through late summer; planting both legumes in the same bed extends
              available larval host material from May through September without a gap
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('maryland-senna')}>
                Maryland Senna
              </button>{' '}
              &mdash; a second Senna species with the same July-August bloom and the same
              sulphur butterfly hosts; extends into the Southeast where Wild Senna does not
              reach; planted alongside Wild Blue Indigo, the two legumes together cover the
              full season from early May through September
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; an annual legume that colonizes open, dry, disturbed ground; hosts
              Cloudless Sulphur and Sleepy Orange caterpillars; fills the well-drained edge
              of a bed where Wild Blue Indigo grows but does not shade the ground; seeds
              itself annually once established
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('gray-hairstreak')}>
                Gray Hairstreak
              </button>{' '}
              &mdash; a generalist that includes Wild Blue Indigo flower clusters and developing
              seed pods among its many larval host plants; lays on the same May and June flowers
              that host the Frosted Elfin; adults nectar on the same wildflower mix that
              supports duskywing adults during the spring flight period
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The Wild Indigo Duskywing's range is a map of where Baptisia still grows — planting Wild Blue Indigo adds a point to that map.</strong>{' '}
            One established crown in full sun is enough to start. Find the host plant in{' '}
            <button className="link-button" onClick={() => onNavigate('wild-blue-indigo')}>
              Wild Blue Indigo
            </button>
            {' '}or browse the full species network in the{' '}
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
