import type { Page } from '../App'

interface WinterberryHollyProps {
  onNavigate: (page: Page) => void
}

export default function WinterberryHolly({ onNavigate }: WinterberryHollyProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/333013046/large.jpeg"
          alt="Winterberry holly (Ilex verticillata) with clusters of bright red berries on bare stems in November, Keavy, Kentucky"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/170366595/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: terrikoontz&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/observations/190018470" target="_blank" rel="noopener noreferrer">iNaturalist obs. 190018470</a>
          &nbsp;&middot; CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Winterberry drops its leaves in October and exposes clusters of red berries that were hidden all summer.</h1>
        <p className="hero__lead">
          The berries appear in late August, green and hard, buried under dense foliage. When the leaves
          drop in October, a well-fruited female plant stands with hundreds of red drupes on bare gray stems —
          some clusters so dense that individual berries press against each other. By December, everything
          else in the landscape has dropped, browned, or been stripped. Winterberry (<em>Ilex verticillata</em>)
          is still standing.
        </p>
        <p className="hero__lead">
          The shrub grows in the wet corners most homeowners treat as problems — depressions that hold
          standing water through spring, clay-heavy spots where ornamental shrubs die in their second
          season. Winterberry was shaped by those sites. In the right spot, it reaches 6 to 10 feet
          without supplemental water, and in November and December it becomes the most visited place in the yard.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="dioecious-heading">
          <h2 id="dioecious-heading">One male pollinates five females — the pairing most nursery tags don't mention</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/170366595/large.jpg"
              alt="Winterberry holly branches loaded with bright red berries against bare branches in late November, Killarney Provincial Park, Ontario"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/333013046/large.jpeg'
              }}
            />
            <figcaption>
              Winterberry in late November. Each cluster holds 3–8 drupes set close along the stem.
              A female plant that fruited like this required a male plant within 50 feet during
              late June flowering — one detail most plant tags omit entirely.
              <span className="photo-credit"> Photo: kat_the_nat&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/observations/101969794" target="_blank" rel="noopener noreferrer">iNaturalist obs. 101969794</a>
                &nbsp;&middot; CC0 / No Rights Reserved
              </span>
            </figcaption>
          </figure>
          <p>
            Winterberry is dioecious: a female plant produces berries, a male produces pollen. Without
            a male plant within approximately 50 feet, a female sets no fruit. It grows. It looks healthy.
            The stems stay bare in winter. Many homeowners plant a single winterberry, wait three years
            for it to establish, and then conclude it doesn't fruit reliably — when the problem is the
            absence of the male plant the tag never mentioned.
          </p>
          <p>
            The flowering happens in late June, when small white flowers open along the stems. Bees
            carry pollen from male to female plants during this window. If the male is missing — or
            more than 50 feet away — pollination fails. One male plant pollinates up to five females
            within range.
          </p>
          <p>
            Two cultivar pairings that are widely available and work together:
          </p>
          <ul>
            <li>
              <strong>'Red Sprite'</strong> (female, 3–4 feet, compact) requires <strong>'Jim Dandy'</strong> (male).
              This pairing works for smaller yards where an 8-foot shrub would be too large.
            </li>
            <li>
              <strong>'Winter Red'</strong> (female, 8–10 feet) requires <strong>'Southern Gentleman'</strong> (male).
              This pairing fruits heavily and holds berries through February in most of its range.
            </li>
          </ul>
          <p>
            A planting of five 'Red Sprite' females plus one 'Jim Dandy' male will produce dense fruit
            across all five plants. A single 'Winter Red' purchased without a male companion will not
            produce berries, regardless of how well it grows.
          </p>
        </section>

        <section aria-labelledby="phenology-heading">
          <h2 id="phenology-heading">Viburnum and dogwood strip in October — winterberry is still full in January</h2>
          <p>
            Arrowwood viburnum berries ripen in August and September and are gone by mid-October.
            Pagoda dogwood drupes ripen in August and are consumed within days of peak ripeness —
            birds work these plants heavily during fall migration. By the time hard frost arrives,
            both are stripped.
          </p>
          <p>
            Winterberry fruit contains lower sugar concentrations than viburnum and dogwood. Migrating
            Cedar Waxwings and Hermit Thrushes moving through in October reach for the higher-calorie
            options first. The winterberry waits. In late November and December, after the other shrubs
            are gone, the birds return to winterberry — now often the only fruit left in the landscape.
            In mild winters, heavy crops hold through February. In hard winters with large feeding flocks,
            a well-fruited plant may be stripped in a single afternoon in January.
          </p>
          <p>
            A yard with arrowwood viburnum and winterberry together covers August through February —
            the full fall migration and wintering window — with fruit from a native shrub available
            in every month.
          </p>
        </section>

        <section aria-labelledby="birds-heading">
          <h2 id="birds-heading">Cedar Waxwings strip the canes in 20 minutes; the Hermit Thrush waits in the brush for the next one</h2>
          <p>
            Three species reliably return to fruiting winterberry in December and January, and each
            uses the shrub differently.
          </p>
          <p>
            A Cedar Waxwing flock — 20 to 60 birds — arrives fast and works a single plant systematically.
            One bird lands, pulls a berry, swallows, moves to the next cluster. The rest follow in waves.
            Within 15 to 20 minutes, the plant is stripped. The flock moves on. In a yard with only one
            winterberry plant, that visit is the last visit of the season.
          </p>
          <p>
            The Hermit Thrush arrives alone. It watches from adjacent brush while the waxwing flock feeds —
            too small and too solitary to compete with 50 birds — and moves in after the flock has gone.
            It works the stems the waxwings bypassed, pulling individual berries from clusters the flock
            didn't reach. The thrush stays as long as the fruit holds.
          </p>
          <p>
            American Robins arrive in loose winter flocks of 30 to 200 birds in mid-winter. They descend
            on a fruiting winterberry in one coordinated wave and can clear a plant within a single afternoon.
            A yard with three or four fruiting winterberry plants — rather than one — holds birds across the
            full winter season rather than for a single high-intensity visit.
          </p>
          <p>
            Yellow-rumped Warblers, which can digest the waxy surface coating of certain berries, also
            work winterberry in late fall — one of the few warblers that overwinters in the northern US
            by switching from insects to fruit when temperatures drop below foraging range for flying insects.
          </p>
        </section>

        <section aria-labelledby="conditions-heading">
          <h2 id="conditions-heading">Standing water through spring, clay soil, partial shade — the low corner nothing else survives</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/295138840/large.jpeg"
              alt="Winterberry holly shrub in summer along a wetland margin in North Hero, Vermont — showing the dense branching habit and full-leaf summer form before berry ripening"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/170366595/large.jpg'
              }}
            />
            <figcaption>
              Winterberry at a wetland margin in Vermont, late June. The root system tolerates
              flooded soil through spring and draws down to moist by midsummer — the same cycle
              that makes the low corner of most yards a good planting site.
              <span className="photo-credit"> Photo: raffib128&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/observations/170186574" target="_blank" rel="noopener noreferrer">iNaturalist obs. 170186574</a>
                &nbsp;&middot; CC0 / No Rights Reserved
              </span>
            </figcaption>
          </figure>
          <p>
            Winterberry grows natively along stream banks, pond margins, and swamp edges across the
            eastern US — sites where the root system sits in saturated or flooded soil from snowmelt
            through May and dries to moist by midsummer. The vascular tissue is adapted for low-oxygen
            conditions. Most ornamental shrubs planted in that cycle die within one or two seasons.
            Winterberry grows faster in it.
          </p>
          <p>
            In a yard: a depression that holds standing water for 2 to 6 weeks after rain events and
            dries gradually through summer supports winterberry well. A clay-heavy base of a slope
            where runoff collects. A downspout discharge area. A rain garden with a central wet zone.
            Any of these work. In average well-drained garden soil, winterberry survives but grows
            slowly and fruits lightly. In a seasonal wet site, it reaches full height in 4 to 5 years
            and fruits heavily.
          </p>
          <p>
            Winterberry tolerates partial shade — it grows under the edges of tree canopies in its
            native range, not in full sun openings. In deep shade it fruits poorly. The best sites
            receive 4 to 6 hours of direct sun daily. In those conditions, fruit set is reliable
            once the male-female pairing is in place.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Planting winterberry</h2>
          <ol className="step-list">
            <li>
              <strong>Buy the male plant before you buy the females.</strong>{' '}
              Most nurseries carry 'Jim Dandy' (male) and 'Red Sprite' (female) as a standard
              pairing. Confirm the sex of each plant before purchase — the label should say male
              or female. One male pollinates up to five females within 50 feet.
            </li>
            <li>
              <strong>Plant in the low corner where water collects.</strong>{' '}
              The site where ornamental shrubs consistently die from wet roots is the right
              site for winterberry. A depression that holds standing water 2–6 weeks after
              heavy rain is not a problem to solve — it is a planting site.
            </li>
            <li>
              <strong>Plant a group rather than a single shrub.</strong>{' '}
              Three to five fruiting females in a cluster hold birds across the whole winter
              rather than for one fast-stripping visit. Space plants 4 to 5 feet apart. They
              will grow to fill the space within 4 to 6 years.
            </li>
            <li>
              <strong>Add arrowwood viburnum nearby for August–September fruit.</strong>{' '}
              Arrowwood viburnum (<em>Viburnum dentatum</em>) fruits in August and September —
              before winterberry is ready. Together they cover the fall migration window and
              the full winter period with native fruit from two shrubs that grow in similar
              wet-tolerant conditions.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Species that use winterberry</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cedar-waxwing')}>
                Cedar Waxwing
              </button>{' '}
              — nomadic flocks strip a fruiting winterberry in 15–20 minutes in December
              and January, then move on to the next patch
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hermit-thrush')}>
                Hermit Thrush
              </button>{' '}
              — moves in after waxwing flocks leave and works the stems they bypassed;
              relies on winterberry into February when other fruit is gone
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-robin')}>
                American Robin
              </button>{' '}
              — winter flocks of 30–200 birds descend on winterberry in January; a single
              flock can clear a heavily fruited plant in one afternoon
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('yellow-rumped-warbler')}>
                Yellow-rumped Warbler
              </button>{' '}
              — overwinters in the northern US by switching from insects to waxy-coated
              berries; uses winterberry in late fall and mild winter periods
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('arrowwood-viburnum')}>
                Arrowwood Viburnum
              </button>{' '}
              — fruits in August and September before winterberry is ready; plant both shrubs
              and native fruit is available from late summer through February without gap
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('buttonbush')}>
                Buttonbush
              </button>{' '}
              — the wet-edge companion shrub; plant in the same low corner for July–August
              bloom while winterberry is still in green-berry phase
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
