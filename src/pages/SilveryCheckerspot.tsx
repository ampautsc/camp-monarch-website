import type { Page } from '../App'

interface SilveryCheckerspotProps {
  onNavigate: (page: Page) => void
}

export default function SilveryCheckerspot({ onNavigate }: SilveryCheckerspotProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/157842354/large.jpg"
          alt="Silvery Checkerspot butterfly (Chlosyne nycteis) — orange and black checkered butterfly with wings spread open, showing a dense pattern of orange patches divided by black vein borders"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/276092423/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Chrissy McClarren and Andy Reago&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/157842354" target="_blank" rel="noopener noreferrer">CC0 via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Silvery Checkerspot</h1>
        <p className="hero__lead">
          A medium-sized orange butterfly lands on a black-eyed Susan in July, wings open flat in
          the sun. The upper surface is a tight checkerboard of orange and black — dozens of
          irregular cells, each one separated from the next by a black vein or border. Flip the
          wing over and a row of white crescents runs along the hindwing edge, each crescent
          outlined in black. Those crescents are the field mark. The female that just left the
          plant laid 100 to 200 eggs on the underside of one leaf before moving on. The
          caterpillars from that cluster will feed together through summer, then stop growing
          in August while still half-sized, crawl down to the base of the plant, and spend five
          months dormant inside the dead leaves piled there — the same leaves raked away each fall.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fieldmarks-heading">
          <h2 id="fieldmarks-heading">Orange and black checkerboard above, a row of white crescents outlined in black along the hindwing underside</h2>
          <p>
            The Silvery Checkerspot (<em>Chlosyne nycteis</em>) has a wingspan of 1.5 to 2.25
            inches. The upper surface is orange with a dense network of black veins and borders
            that break the orange into irregular cells — the checkerboard effect. The forewing tip
            is dark with small white spots near the margin. On the hindwing underside, a row of
            white crescents runs along the outer margin, each crescent outlined in black inside a
            band of tawny and cream cells. Those crescents gave the species its name.
          </p>
          <p>
            Males patrol open meadow edges, roadsides, and stream margins in a low, bouncing
            flight, stopping on flower heads or leaf surfaces to bask with wings held partially
            open. Females move more slowly through the same habitat, probing composite flower
            heads for nectar between oviposition visits. Both sexes perch with wings partially
            spread on warm surfaces in morning sunlight and seek shelter in grass stems when the
            sky clouds over.
          </p>
          <p>
            A single brood flies from mid-June through early August across the Midwest and
            Northeast, peaking in late June and July. In the southern part of the range, a second
            brood may emerge in August and September. After the flight period ends, no new adults
            appear until the following June. The caterpillar is dormant for nine to ten months of
            the year inside plant debris at ground level.
          </p>
        </section>

        <section aria-labelledby="host-heading">
          <h2 id="host-heading">One egg cluster of 100 to 200 on a single leaf, one overwintering cluster in the dead leaves below the same plant — from October through May</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/44966127/large.jpg"
              alt="Silvery Checkerspot caterpillars (Chlosyne nycteis) — two spiny dark caterpillars with rows of white spots and orange lateral stripes, resting together on a leaf surface"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/136546045/large.jpg'
              }}
            />
            <figcaption>
              Silvery Checkerspot caterpillars are dark with rows of white spots and orange
              lateral stripes, carrying short branching spines along the back. Early instars feed
              side by side in the group that hatched together from one egg cluster — a visible,
              bristled mass on the back of a black-eyed Susan leaf in late July. Later instars
              disperse and feed alone before descending to the plant base for overwintering.
              <span className="photo-credit"> CC BY via iNaturalist (erothsch)</span>
            </figcaption>
          </figure>
          <p>
            The Silvery Checkerspot uses native composites (Asteraceae) throughout its range.
            Black-eyed Susan (<em>Rudbeckia hirta</em>) is the host plant most commonly available
            in eastern gardens and naturalized meadows. Tall coneflower (<em>Rudbeckia laciniata</em>),
            rosinweed (<em>Silphium perfoliatum</em>), wingstems (<em>Verbesina occidentalis</em>),
            and native sunflowers (<em>Helianthus</em> spp.) serve as hosts in moist open ground
            throughout the range. The caterpillar does not use plants outside the composite family.
          </p>
          <p>
            The female lays 100 to 200 eggs in a single mass on the underside of one host plant
            leaf. The eggs hatch together. The caterpillars feed side by side in a group through
            their first three or four growth stages, consuming the leaf surface while clustered.
            By mid-August in the northern range, the caterpillars have reached their third or
            fourth instar — still only a fraction of full size — and stop feeding. They crawl
            down the stem to ground level, settle into the folded dead leaves and debris at the
            plant's base, and remain dormant through fall and winter. In April or May, they emerge,
            climb back up the new spring growth, resume feeding, complete development in four to
            six weeks, pupate on the stem, and emerge as adults in June.
          </p>
          <p>
            The caterpillar is dark brownish-black with a row of white spots along each side and
            orange lateral stripes running the length of the body. Short branching spines cover
            the back. When a full group from one egg cluster feeds together on a leaf surface,
            it forms a mass visible from several feet — a bristled dark patch on the back of a
            black-eyed Susan stem in July or early August. The chrysalis is cream with orange and
            black spotting, attached to a plant stem and resembling a fragment of dried plant
            material.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Leave black-eyed Susan stalks standing and the leaf litter undisturbed at their base from October through May — the overwintering caterpillar cluster is already there</h2>
          <ol className="step-list">
            <li>
              <strong>Leave black-eyed Susan stalks and seed heads standing through fall and winter.</strong>{' '}
              By late August, the caterpillar cluster from each egg mass has descended to the
              plant base for dormancy. Cutting stalks, pulling plant material, or clearing the
              area between September and May can kill the overwintering group. The seed heads
              that project above the dormant caterpillars feed goldfinches and chickadees
              through winter — the same standing structure that shelters the caterpillar below
              provides food above it. A patch of six to twelve black-eyed Susan plants with
              undisturbed bases carries enough overwintering area for one to three egg clutches.
            </li>
            <li>
              <strong>Do not rake or remove leaf litter from around composite plant bases in fall.</strong>{' '}
              The caterpillar does not overwinter on the stem — it shelters in folded dead leaves
              and debris at ground level around the plant base. Raking that material in September
              or October removes the overwintering site. Composting or bagging it removes the
              caterpillars themselves. Leaving a ring of undisturbed leaf and stem debris 6 to 12
              inches around black-eyed Susan clumps through May costs one portion of autumn
              cleanup. The full case for why leaf litter functions as overwintering habitat for
              many species is in{' '}
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>
              .
            </li>
            <li>
              <strong>Plant rosinweed (<em>Silphium perfoliatum</em>) or tall coneflower (<em>Rudbeckia laciniata</em>) in a moist, sunny opening.</strong>{' '}
              Both are native perennials reaching 4 to 8 feet in moist, open conditions —
              roadsides, ditches, stream edges, wet meadow margins. Rosinweed blooms July and
              August with yellow flowers, overlapping with the peak adult flight and providing
              nectar as its leaves serve as host. Tall coneflower blooms August and September,
              extending nectar availability into the post-peak period. Both species establish
              from seed or transplant and spread slowly over several years. Neither is carried
              widely in conventional garden centers — source them through native plant nurseries
              listed in{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>
              .
            </li>
            <li>
              <strong>Allow a moist edge — lawn margin, ditch bank, or stream edge — to stay in native composites rather than mown grass.</strong>{' '}
              Silvery Checkerspot populations are highest along the transition between mown lawn
              and standing native vegetation. A 10 to 20 foot strip where black-eyed Susan,
              rosinweed, and sunflower grow unmowed carries all three life-stage requirements:
              adult nectar, oviposition host, and caterpillar overwintering debris at the same
              location. The loss of that moist meadow edge from suburban yards — mowed for
              neatness, sprayed for weeds — accounts for most of the species' contraction in the
              eastern United States over the past 40 years. In Connecticut it is now listed as
              believed extirpated.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who else uses native composites, moist meadow edges, and undisturbed winter litter in the same garden</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('baltimore-checkerspot')}>
                Baltimore Checkerspot
              </button>{' '}
              &mdash; the larger checkerspot with orange spots on black ground (vs. the Silvery's
              orange ground with a black network); uses turtlehead as colony host in wet meadows;
              a single brood peaks two to three weeks before the Silvery Checkerspot; both species
              are declining with the same loss of undisturbed moist meadow and are the two
              checkerspots most likely to share a region in the eastern US
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('pearl-crescent')}>
                Pearl Crescent
              </button>{' '}
              &mdash; a smaller orange butterfly using native asters as host plants; produces two
              to three broods per year and shares the open sunny meadow edge with the Silvery
              Checkerspot through July; both species nectar on black-eyed Susan through summer;
              the Pearl Crescent's caterpillars also overwinter in leaf litter near aster plant
              bases at ground level
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('black-eyed-susan')}>
                Black-Eyed Susan
              </button>{' '}
              &mdash; the most available Silvery Checkerspot host plant in eastern gardens; a
              native biennial that self-seeds into open disturbed or dry-to-moist ground; blooms
              June through August, providing nectar to adults during the peak flight while its
              leaves serve as oviposition host; leaving seed heads through winter feeds goldfinches
              and chickadees from the same plants whose base shelters the overwintering caterpillar
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('great-spangled-fritillary')}>
                Great Spangled Fritillary
              </button>{' '}
              &mdash; a large orange butterfly that also runs a single annual brood and overwinters
              as a newly hatched larva — the caterpillar hatches in fall, goes dormant before
              eating a single leaf, and feeds on violets in spring; shares the moist open meadow
              edge with Silvery Checkerspot through July and August; both require the same
              undisturbed winter ground layer for their overwintering larvae
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('canada-goldenrod')}>
                Canada Goldenrod
              </button>{' '}
              &mdash; a tall native perennial that blooms August through October alongside
              rosinweed and coneflower, extending nectar availability for late-season Silvery
              Checkerspot adults where a second brood occurs; its dead hollow stems over winter
              provide nesting sites for cavity-nesting native bees in the same moist meadow
              community where the checkerspot caterpillar overwinters in the leaf litter below
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Black-eyed Susan left standing with its leaf litter undisturbed through May holds the whole Silvery Checkerspot cycle in one plant.</strong>{' '}
            Browse native composites in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , read why leaving debris through winter matters in{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>
            , and find the full moist meadow community in the{' '}
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
