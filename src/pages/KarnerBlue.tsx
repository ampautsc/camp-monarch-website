import type { Page } from '../App'

interface KarnerBlueProps {
  onNavigate: (page: Page) => void
}

export default function KarnerBlue({ onNavigate }: KarnerBlueProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/205496077/large.jpg"
          alt="Male Karner Blue butterfly (Plebejus samuelis) — a small bright cerulean-blue butterfly with thin black wing borders resting on Wild Lupine foliage, Michigan, June 2022"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/7530260/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: sarahjomin&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/205496077" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>A Karner Blue egg laid on a lupine leaflet in July does not hatch until April — it overwinters at the root crown in the soil, and when it hatches in spring, the lupine leaves it needs are already opening above it</h1>
        <p className="hero__lead">
          The Karner Blue (<em>Plebejus samuelis</em>) is a small butterfly — wingspan under an
          inch — that flies in late May and again in late July along Wild Lupine stands in sandy
          pine barrens, oak savannas, and glacial outwash soils across the upper Midwest and
          Northeast. The male is bright cerulean blue with a thin black border on the upper wing
          surface. Females are brown with blue scaling at the wing base and an orange-spotted
          crescent along the hindwing margin. Neither sex moves far from the lupine stand where
          it emerged; adults spend their entire lives in the immediate vicinity of the host plant.
        </p>
        <p className="hero__lead">
          The Karner Blue was listed as federally endangered under the Endangered Species Act
          in 1992. At that point the species had already disappeared from most of its historical
          range — from Connecticut, Massachusetts, Pennsylvania, Ohio, Illinois, and Iowa.
          What remains is a set of isolated populations at managed sites, each of which exists
          only because people actively prevent the habitat from succeeding into shrubby woodland
          by running fire or machinery through the lupine stands every few years.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="egg-heading">
          <h2 id="egg-heading">The egg overwinters at the root crown — when lupine is cleared from a site, the eggs laid there the previous summer hatch onto bare ground in spring</h2>
          <p>
            After mating, a Karner Blue female walks across lupine leaflets, pressing her abdomen
            to the leaf surface and depositing one egg per contact. She does not mass her clutch
            on a single plant — she moves to a new stem for each subsequent egg, spreading the
            eggs across several individuals in the stand. Each egg is a white, ribbed disc, barely
            visible against the leaf surface.
          </p>
          <p>
            The egg hatches within a week or two in summer. But the eggs from the late-summer
            (second) brood — laid in July and August — do not hatch immediately. They develop
            into a first-instar larva inside the egg and then enter diapause. The dormant larva
            overwinters at the soil surface in the debris at the root crown of the host plant.
            When temperatures rise the following April and the first lupine shoots push through
            the ground, the larva hatches into a world that is already providing what it needs.
          </p>
          <p>
            This timing is the source of the species' fragility at a site. A Karner Blue egg
            laid in August is physically present at the base of a lupine plant from August through
            the following April. If that plant is removed — if the site is cleared, the lupine
            mowed or burned at the wrong time, or the ground disturbed — the eggs in the soil
            below have no alternative. They are committed to that exact location. When they
            hatch in April, they are eating the first available leaves, and those leaves must
            be from a lupine plant within crawling distance of where the egg was laid.
          </p>
        </section>

        <section aria-labelledby="ant-heading">
          <h2 id="ant-heading">A Karner Blue caterpillar secretes a fluid from its seventh abdominal segment — the ants that drink it drive off parasitoid wasps in exchange</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/85300935/large.jpeg"
              alt="Karner Blue butterfly (Plebejus samuelis) female on Wild Lupine — a brown and orange butterfly resting with wings closed showing the undersurface pattern, Wisconsin, July 2020"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/135544596/large.jpg'
              }}
            />
            <figcaption>
              The Karner Blue female is brown above with blue scaling at the wing base
              and an orange crescent along the hindwing margin. Both sexes are roughly
              the size of a thumbnail. They fly low, close to the lupine stems, and do
              not range more than a few hundred meters from the stand where they emerged.
              <span className="photo-credit"> resch416 / CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            Karner Blue caterpillars carry a structure called a dorsal nectary organ on the
            seventh abdominal segment. This organ secretes a sugary fluid. Ants — primarily
            <em>Formica</em> and <em>Lasius</em> species in Great Lakes pine barren sites —
            attend the caterpillar, drinking the secretion. In exchange, the attending ants
            patrol the caterpillar and drive off parasitoid wasps that would otherwise inject
            eggs into its body.
          </p>
          <p>
            This is not a casual association. Caterpillars without ant attendance face higher
            parasitism rates. In experiments where ants are excluded, caterpillar survival to
            pupation drops. The relationship requires that the right ant species be present in
            the lupine stand, which in turn requires the right soil and plant community — the
            same open, sandy, acidic conditions that the lupine itself requires. A restored
            lupine planting in amended garden soil that lacks the right ant fauna produces less
            effective caterpillar protection even when the host plant itself is thriving.
          </p>
          <p>
            The caterpillar feeds on lupine leaflets, eating from the edges inward and leaving
            characteristic notching on the leaf margin. It is small and green — easily overlooked
            on the leaflet surface. The first instar caterpillar hatching in April is roughly
            a millimeter long. It feeds and molts four times before pupating in the soil and
            leaf litter at the base of the host plant. The pupal stage lasts 10 to 14 days
            before the adult emerges.
          </p>
        </section>

        <section aria-labelledby="range-heading">
          <h2 id="range-heading">Albany Pine Bush, Concord's pine barrens, Michigan's Lower Peninsula — the remaining populations all exist inside active management programs</h2>
          <p>
            The Karner Blue's historical range ran from Connecticut and New Hampshire west through
            New York, Pennsylvania, Ohio, Indiana, Illinois, and Wisconsin to Minnesota. In that
            belt of glacial geology — sandy outwash plains, pine barrens, dry oak savannas —
            Wild Lupine once grew in patches large enough to support stable populations.
            Fire moved through these open habitats naturally, or was set by Indigenous peoples
            managing for blueberries and game. After European settlement, fire suppression
            allowed oaks and shrubs to close over the openings. The lupine died in the shade.
            The Karner Blue disappeared with it, county by county, across most of its range
            before the connection was studied.
          </p>
          <p>
            What remains: the Albany Pine Bush Preserve in New York, managed with prescribed
            fire on a rotation that keeps the pitch pine and scrub oak canopy from closing;
            the Concord pine barrens in New Hampshire, also managed with fire; the northern
            Lower Peninsula of Michigan, where populations persist at several sites under
            active woody-vegetation control; and a set of restoration sites in Wisconsin and
            Indiana where lupine has been reintroduced into managed openings. Each population
            is isolated from the others by developed land and closed-canopy forest. There is
            no natural movement between them. If a population collapses at one site, it does
            not recolonize from a neighboring one.
          </p>
          <p>
            The management practice at every remaining site is the same: prevent the habitat
            from succeeding into woodland. Without fire or mechanical treatment every five to
            fifteen years, oaks and shrubs shade out the lupine within a decade. The butterflies
            follow within one to two seasons after the lupine disappears. The management is
            expensive, requires ongoing access, and depends on institutional commitment that
            can outlast staff turnover and budget cycles. The butterflies at Albany Pine Bush
            today exist because the preserve has run that commitment without interruption
            since the 1980s.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Wild Lupine in sandy, unamended full sun — leave the root crown litter undisturbed from August through April</h2>
          <ol className="step-list">
            <li>
              <strong>Plant{' '}
              <button className="link-button" onClick={() => onNavigate('wild-lupine')}>
                Wild Lupine
              </button>{' '}
              (<em>Lupinus perennis</em>) in sandy, acidic, unamended soil in full sun.</strong>{' '}
              Wild Lupine is the only larval host for the Karner Blue. Without it, the butterfly
              cannot breed. The plant requires soil with a pH between 5.0 and 6.5, coarse sand
              or gravel texture, and very low organic matter. Adding compost, fertilizer, or
              nitrogen sources to the planting site kills it faster than drought. If your soil
              is loam or clay, look for a dry south-facing bank, a gravel margin, or a sandy
              strip where organic matter has not accumulated.
            </li>
            <li>
              <strong>Leave the leaf litter and debris at the root crown undisturbed from August through April.</strong>{' '}
              Karner Blue eggs from the late-summer brood overwinter in the soil and litter
              at the base of the lupine plant. Clearing the ground beneath the plant in fall
              removes the overwintering generation. Leave old lupine stems, dead leaflets,
              and surrounding litter in place through winter. Cut dead stalks to the ground
              in late March, before new shoots emerge — not in autumn.
            </li>
            <li>
              <strong>Apply no insecticide — systemic or contact — to the lupine or surrounding soil from April through August.</strong>{' '}
              Karner Blue caterpillars are present on the plant from late April through
              early June (first brood) and again from late July through mid-August (second
              brood). The caterpillars in early instars are roughly a millimeter long —
              invisible without deliberate searching. A contact spray applied to control
              other insects, or a systemic absorbed through the roots from soil treatment,
              eliminates the entire caterpillar generation on that plant.
            </li>
            <li>
              <strong>If a Karner Blue population is within flight range of your yard, contact your state wildlife agency.</strong>{' '}
              In states where the Karner Blue still exists — Michigan, Wisconsin, Indiana,
              New York, New Hampshire — state wildlife agencies and land conservancies
              track population locations. If you are in a county with a known population
              and you establish a lupine planting, reporting the site can help managers
              understand whether the butterfly is using private land adjacent to managed
              preserve areas.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">What shares the lupine stand — the plants and butterflies that occupy the same pine barren habitat</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-lupine')}>
                Wild Lupine
              </button>{' '}
              &mdash; the only larval host plant; the Karner Blue cannot complete its life cycle
              without it; the butterfly's entire historical range maps directly onto the range
              of this plant in open, fire-maintained habitats; planting lupine in suitable
              conditions is the single action a homeowner can take for this species
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('frosted-elfin')}>
                Frosted Elfin
              </button>{' '}
              &mdash; a second butterfly that uses Wild Lupine as a host plant in pine barrens
              and coastal sites across the Northeast; NatureServe rates it globally imperiled;
              the two butterflies are present on the same lupine stands simultaneously in May —
              the Frosted Elfin laying on flower buds, the Karner Blue on leaflets
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-indigo-duskywing')}>
                Wild Indigo Duskywing
              </button>{' '}
              &mdash; a dark brown skipper that uses Wild Lupine leaves in the Northeast using
              the same host-selection chemistry it applies to Baptisia in the Midwest; three
              specialist butterfly species can be present on the same lupine stand simultaneously
              in late May
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; the primary pollinator of Wild Lupine; the keel petal requires a bumblebee's
              body weight to open, making smaller bees ineffective; queen bumblebees emerging
              from winter dormancy in April need lupine's early bloom to fuel colony establishment;
              both species are declining in the same landscape for related reasons
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The Karner Blue exists wherever Wild Lupine is present in open, managed habitat — and nowhere else.</strong>{' '}
            See the full plant profile with{' '}
            <button className="link-button" onClick={() => onNavigate('wild-lupine')}>
              Wild Lupine
            </button>
            , find companion legumes with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , and browse other specialists that need specific host plants in the{' '}
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
