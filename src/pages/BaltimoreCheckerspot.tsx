import type { Page } from '../App'

interface BaltimoreCheckerspotProps {
  onNavigate: (page: Page) => void
}

export default function BaltimoreCheckerspot({ onNavigate }: BaltimoreCheckerspotProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/210425087/large.jpg"
          alt="Baltimore Checkerspot butterfly (Euphydryas phaeton) with wings fully open — black wings tiled with rows of white spots, the outer edge of each wing banded in orange, resting on a white flower"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/521011933/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Alan Kneidel&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/210425087" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Baltimore Checkerspot</h1>
        <p className="hero__lead">
          In late June, where a seep keeps the soil wet year-round and white turtlehead grows
          knee-high along the stream edge, a butterfly with the color pattern of stained glass
          lands on a turtlehead stem and crawls to the underside of a leaf. She is looking for
          a clean surface. When she finds it, she lays 300 to 700 eggs in a single flat mass —
          every egg that will produce the next generation of Baltimore Checkerspots in this patch
          of meadow, placed on one leaf in one afternoon. The entire lifecycle of this butterfly
          runs through that one plant in that one wet corner.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fieldmarks-heading">
          <h2 id="fieldmarks-heading">Black wings tiled with white spots, orange bands at the outer edge — Maryland named it the state insect in 1973</h2>
          <p>
            The Baltimore Checkerspot's upper wings are black with rows of white and pale cream
            spots running across both forewings and hindwings. Along the outer margin of each wing
            runs a band of orange-red, widest on the hindwing. The underside mirrors the same
            pattern with more white, giving the butterfly the appearance of a cathedral window
            when it holds its wings flat in the sun. Wingspan runs 1.75 to 2.75 inches.
          </p>
          <p>
            The name comes from Cecilius Calvert, the 2nd Baron Baltimore, whose heraldic coat
            of arms used orange and black — the same color pairing that named the Baltimore
            Oriole. Both species were named in the 1700s by naturalists working in Maryland,
            where the Calvert family had chartered the colony. Maryland designated the butterfly
            its official state insect in 1973, three centuries after the heraldic colors arrived
            on the same land.
          </p>
          <p>
            A single brood flies from mid-June through mid-July in the upper Midwest and Northeast.
            There is no second flight. The adults you see on the wing in late June are the only
            adults this species produces all year — the same individuals that hatched from
            the overwintering caterpillars will not produce another adult generation until the
            following June.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">300 to 700 eggs on a single turtlehead leaf — caterpillars overwinter as a group in a silk nest at the base of the plant</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/529996955/large.jpg"
              alt="Baltimore Checkerspot butterfly (Euphydryas phaeton) — adult showing the orange-banded hindwing and white-spotted black forewing pattern"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/529996950/large.jpg'
              }}
            />
            <figcaption>
              Baltimore Checkerspot adults nectar at milkweed, ironweed, and wild bergamot in
              the wet meadow edges where turtlehead grows. The single flight window runs three
              to four weeks in late June and July — the only period each year when adults are
              on the wing and females are laying eggs.
              <span className="photo-credit"> Photo: Bernie Paquette · CC BY via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            After mating, a female selects a white turtlehead plant (<em>Chelone glabra</em>) and
            lays a clutch of 300 to 700 eggs on the underside of one leaf. The eggs hatch in two
            to three weeks. First and second instar caterpillars feed together on the same turtlehead
            plant, chewing the upper surface of leaves while the lower surface holds. The caterpillars
            are black with rows of orange-tipped black spines — specific enough to identify at a
            glance on the host plant.
          </p>
          <p>
            In late July and early August, the caterpillars stop feeding and build a communal
            hibernaculum — a silk nest constructed at the base of the turtlehead stems or in
            the leaf litter directly beneath the plant. The entire cohort from the original egg
            mass enters this nest together and seals themselves inside. They spend seven months
            there, from August through April, without feeding.
          </p>
          <p>
            When spring temperatures warm the soil, the caterpillars break out of the hibernaculum
            and disperse. They feed individually on turtlehead, white ash, and false foxglove
            (<em>Aureolaria</em> spp.) through May and into early June. Pupation follows in late May
            or early June, and adults emerge in late June to restart the cycle. The entire lifecycle
            — from egg to egg — runs exactly one year.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">Turtlehead lives where the ground stays wet — when drainage tiles dry those areas, the butterfly disappears with the plant</h2>
          <p>
            White turtlehead grows where soil stays saturated or nearly saturated through summer:
            stream edges, seeps, fens, wet meadow margins, and the borders of seasonal ponds.
            It cannot establish in dry ground. When a property owner installs a drainage tile
            to dry a wet corner, or when an upstream development alters surface hydrology,
            the turtlehead loses its rooting moisture within one to three seasons and dies back.
          </p>
          <p>
            Baltimore Checkerspot populations have been eliminated from large portions of their
            historical range across the eastern United States. Where a wet meadow edge
            once held a colony, a dry lawn, a culverted stream, or an invasive shrub thicket
            now stands. The butterfly is listed as endangered or threatened in several states.
          </p>
          <p>
            In patches of degraded habitat, females lay eggs on English plantain
            (<em>Plantago lanceolata</em>) rather than turtlehead. Caterpillars survive on
            plantain through the early instars, but overwintering survival rates for
            plantain-reared larvae run substantially lower than for turtlehead-reared larvae.
            A colony persisting on plantain in a yard where turtlehead once grew is declining
            year by year, even if adults are still visible each June.
          </p>
          <p>
            Invasive shrubs — Japanese barberry, multiflora rose, and common buckthorn — crowd
            out turtlehead in wet-woodland edges and along stream corridors. As the shrub layer
            closes over the wet margin, turtlehead disappears from below. The Baltimore Checkerspot
            follows.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant turtlehead in the wet corner and leave the leaf litter beneath it through April</h2>
          <ol className="step-list">
            <li>
              <strong>Plant white turtlehead (<em>Chelone glabra</em>) in any moist or wet spot.</strong>{' '}
              A consistently wet corner, a low-lying area that holds water after rain, the edge
              of a stream or drainage channel, or a spot where a downspout empties are all
              candidates. Turtlehead grows 2 to 4 feet tall, blooms white in August and September,
              and spreads slowly into a clump over time. It is the host plant without which a
              local Baltimore Checkerspot population cannot establish. A single mature plant can
              support a full female clutch of 300 to 700 eggs. Find it with{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>
              .
            </li>
            <li>
              <strong>Leave the leaf litter and plant debris at the base of the turtlehead through April.</strong>{' '}
              The communal hibernaculum the caterpillars build in August sits in the leaf litter
              directly beneath the host plant. Raking this material in autumn or early spring
              removes the overwintering nest along with the leaves. The caterpillars inside
              die. A turtlehead plant surrounded by raked bare ground will not support a
              Baltimore Checkerspot colony regardless of how many adults visit it in June.
              Leave the litter in place — the{' '}
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves guide
              </button>{' '}
              explains why this same decision protects a dozen other species at the same time.
            </li>
            <li>
              <strong>Keep the wet area wet.</strong>{' '}
              If you have a low corner that collects water, resist regrading or tile-draining it.
              Turtlehead requires that sustained moisture through summer. A yard section with one
              persistently wet corner of ten square feet — enough for three or four turtlehead
              plants — can support a local population of Baltimore Checkerspots in an area where
              the butterfly no longer occurs elsewhere. What reads as a drainage problem is a
              habitat opportunity.
            </li>
            <li>
              <strong>Do not spray insecticides near the turtlehead in June and July.</strong>{' '}
              The egg-laying window runs late June into July, when adults are on the wing for
              three to four weeks. Systemic insecticides taken up by turtlehead and contact
              sprays applied to surrounding plants can kill eggs, newly hatched caterpillars,
              and adults during the only breeding window the species has each year. If
              mosquito control is needed nearby, check the spray zone boundary against the
              location of the turtlehead patch before scheduling a treatment.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who shares the wet meadow edge and the milkweed in late June</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('common-milkweed')}>
                Common Milkweed
              </button>{' '}
              &mdash; Baltimore Checkerspot adults nectar heavily at milkweed flowers during
              their three-to-four-week flight window in late June and July; milkweed growing
              near a turtlehead patch keeps adults on site and well-fueled through the
              egg-laying period; the two plants often grow in the same wet meadow margins
              and stream corridors
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('great-spangled-fritillary')}>
                Great Spangled Fritillary
              </button>{' '}
              &mdash; shares the wet meadow edge; both species nectar at milkweed and ironweed
              in late June and early July; the Great Spangled Fritillary lays eggs on violets
              in late summer while the Baltimore Checkerspot females are laying on turtlehead,
              two host-plant dependencies running simultaneously in the same wet meadow
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('ironweed')}>
                Ironweed
              </button>{' '}
              &mdash; one of the primary nectar plants for Baltimore Checkerspot adults;
              ironweed also grows in wet meadow margins and along stream corridors where
              turtlehead occurs, so a yard section with both plants supports the adult
              butterfly through its entire flight period while the turtlehead provides
              the caterpillar host
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('pearl-crescent')}>
                Pearl Crescent
              </button>{' '}
              &mdash; both are orange-and-black butterflies in the same meadow in June and
              July; the Pearl Crescent passes winter as a caterpillar in leaf litter on
              asters, the Baltimore Checkerspot as a communal group in a silk nest beneath
              turtlehead — two different overwintering strategies that both require
              undisturbed leaf litter through April
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('buttonbush')}>
                Buttonbush
              </button>{' '}
              &mdash; a native shrub that grows in standing water and at stream margins;
              buttonbush blooms in July when Baltimore Checkerspot adults are on the wing,
              and the two species share the same wet-edge habitat; a yard with a wet corner
              large enough for buttonbush and turtlehead together supports the butterfly
              from nectar through caterpillar host through overwintering litter in a
              ten-foot radius
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>A wet corner with turtlehead, leaf litter, and nearby milkweed is the whole habitat.</strong>{' '}
            Find turtlehead and milkweed sourced locally with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , understand why leaving the leaf litter intact is the single most consequential
            maintenance decision with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , and see which other species share the wet meadow with the{' '}
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
