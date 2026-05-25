import type { Page } from '../App'

interface CloudlessSulphurProps {
  onNavigate: (page: Page) => void
}

export default function CloudlessSulphur({ onNavigate }: CloudlessSulphurProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/3711606/large.jpg"
          alt="Cloudless Sulphur butterfly (Phoebis sennae) — a large lemon-yellow butterfly with wings held together above the body, resting on a flower"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/174049480/large.jpeg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Laura Gaudette&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/3711606" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Cloudless Sulphur</h1>
        <p className="hero__lead">
          In late August, a large yellow butterfly moves low through the garden and does not stop for long.
          It nectars briefly at a zinnia or a black-eyed susan, then continues south. The male is lemon-yellow
          on the upper surface with no markings — not a pale yellow, not an orange-yellow, but a saturated
          color that reads almost luminous in direct sun. This butterfly was born somewhere north of where
          it is flying now. The Partridge Pea growing in your yard is part of the chain that got it here.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fieldmarks-heading">
          <h2 id="fieldmarks-heading">The male has no border markings on the upper wing surface — a clear lemon-yellow broken only by a single faint spot at the forewing center</h2>
          <p>
            The Cloudless Sulphur is among the largest sulphur butterflies in North America, with a wingspan
            of 2.25 to 2.75 inches. Males are clear yellow above with no dark border and only a small spot
            at the center of the forewing. Females range from yellow to white, with an irregular dark
            scalloped border along both wings and two dark spots on the forewing — one ringed with white.
            The lower surface of both sexes carries a small two-toned spot on each wing.
          </p>
          <p>
            In flight, the male stands out from other sulphur butterflies by the absence of any border marking.
            Orange Sulphurs and Clouded Sulphurs show dark borders on the upper surface; the Cloudless Sulphur
            male shows none. When a large yellow butterfly moves through a garden in late August on a direct
            southward heading rather than patrolling a flower patch, it is almost certainly a Cloudless Sulphur
            on its way south.
          </p>
          <p>
            The species ranges across the eastern United States from the Great Plains to the Atlantic coast,
            moving north each spring as far as the Great Lakes and southern New England. It does not overwinter
            in the North — the adults appearing in northern yards each summer hatched in the South and flew
            north as temperatures warmed. They breed through summer, and their descendants fuel the autumn
            migration back south.
          </p>
        </section>

        <section aria-labelledby="chrysalis-heading">
          <h2 id="chrysalis-heading">The chrysalis hangs at a 45-degree angle on the host plant stem with a hooked tip — among Partridge Pea leaves in August, it is nearly undetectable</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/422631884/large.jpg"
              alt="Cloudless Sulphur caterpillar (Phoebis sennae) — a yellow-green caterpillar with black-spotted yellow banding and a yellow lateral stripe, on a plant stem"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/422631878/large.jpg'
              }}
            />
            <figcaption>
              The Cloudless Sulphur caterpillar is yellow-green with a lateral stripe and a row of
              black-spotted yellow bands. It feeds on Partridge Pea (<em>Chamaecrista fasciculata</em>) and
              other native Senna species — the same plants that produce seed pods eaten by Wild Turkey
              and Bobwhite through fall and winter.
              <span className="photo-credit"> CC0 via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            The female lays a single egg at a time, hovering briefly over a fresh leaflet before touching
            down to deposit. She moves on after each egg, distributing her clutch across multiple plants
            over her adult life — 200 to 300 eggs spread among individual Partridge Pea plants rather than
            massed on a single stem. Each egg lands on a different leaflet or a different plant entirely.
          </p>
          <p>
            The caterpillar is yellow-green with a yellow lateral stripe and a row of black-dotted yellow
            bands across each segment. It feeds on Partridge Pea,{' '}
            <button className="link-button" onClick={() => onNavigate('wild-senna')}>
              Wild Senna
            </button>{' '}
            (<em>Senna hebecarpa</em>), Maryland Senna (<em>Senna marilandica</em>), and related legume
            species. Multiple broods cycle through summer in the South; northern populations are typically
            single-brooded, producing one generation before the autumn migration.
          </p>
          <p>
            The chrysalis is compressed front-to-back with a prominent keel running down its back and a
            sharp hook projecting from the upper end. It attaches to the host plant stem and hangs at
            roughly a 45-degree angle, angled away from the attachment point like a leaf beginning to
            drop. The chrysalis is green or yellow with fine yellow-and-green banding. Hanging among
            the compound leaves and stems of a Partridge Pea plant in late summer, it takes deliberate
            searching to find. The pupal stage lasts 10 to 14 days before the adult emerges.
          </p>
        </section>

        <section aria-labelledby="migration-heading">
          <h2 id="migration-heading">At Cape May in September, observers count thousands of Cloudless Sulphurs moving south on peak days — the same adults that hatched in northern yards</h2>
          <p>
            In late August, Cloudless Sulphurs that have been breeding across northern states begin moving
            south. The movement is not a tight corridor — it is a broad directional drift across the
            landscape, concentrated where geography funnels migrants toward the coast. At Cape May,
            New Jersey, observers count thousands of Cloudless Sulphurs on peak September days moving
            southwest toward the Delaware Bay crossing. They fly low, close to the ground, stopping
            briefly at flowers before resuming direction.
          </p>
          <p>
            The destination is Florida and the Gulf Coast, where adults survive winter in a period of
            reduced activity without entering true dormancy. They do not aggregate in roosts the way
            monarchs do — they disperse into coastal vegetation individually and wait out the coldest
            months. In spring, the northward expansion begins again as new Partridge Pea and Senna plants
            emerge across the Southeast and mid-Atlantic.
          </p>
          <p>
            The butterfly crossing your garden in late August was born in your state or a nearby one.
            The host plant it developed on — the Partridge Pea you planted, or one growing in a disturbed
            field edge nearby — produced the caterpillar that is now flying toward the coast. A yard
            that supports breeding through summer is part of the same system that produces the autumn
            migration.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant Partridge Pea in full sun, let it reseed, and leave the stems standing through October</h2>
          <ol className="step-list">
            <li>
              <strong>Plant Partridge Pea (<em>Chamaecrista fasciculata</em>) in a sunny spot with well-drained soil.</strong>{' '}
              Partridge Pea is a native annual legume that grows from seed each spring, blooms yellow
              in midsummer, and sets seed pods that split open in early fall. It is the primary host
              plant for Cloudless Sulphur across the northern part of the butterfly's range. A patch
              of three to five plants in full sun gives females enough material to distribute eggs
              across multiple stems. Plant from seed in spring — it germinates readily in bare, warm
              soil and will reseed freely once established. Find it with{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>{' '}
              or see the{' '}
              <button className="link-button" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea plant profile
              </button>
              .
            </li>
            <li>
              <strong>Add{' '}
              <button className="link-button" onClick={() => onNavigate('wild-senna')}>
                Wild Senna
              </button>{' '}
              (<em>Senna hebecarpa</em>) or Maryland Senna (<em>Senna marilandica</em>) as a perennial companion.</strong>{' '}
              Both species grow 4 to 6 feet tall, bloom with yellow flowers in midsummer, and are
              native across the eastern United States. They emerge earlier in spring than Partridge Pea
              and extend the period when host plant material is available, giving early-season females
              arriving from the South a food source before the annual Partridge Pea germinates. Once
              established, they spread slowly into a colony from the root crown.
            </li>
            <li>
              <strong>Leave Partridge Pea stems and seed heads standing through October.</strong>{' '}
              The seed pods mature and split open in September and October — the same weeks when adult
              Cloudless Sulphurs are moving south through northern yards and stopping to nectar. Removing
              the plants before October also strips the seed source that Wild Turkey, Bobwhite, and
              field sparrows rely on through winter. Leave the stems until after the first hard frost,
              then cut them down if needed.
            </li>
            <li>
              <strong>Do not apply insecticides to the Partridge Pea or immediately surrounding plants from June through September.</strong>{' '}
              Cloudless Sulphur caterpillars are present on the host plant from early summer through
              late September, cycling through multiple broods. A contact spray or systemic insecticide
              taken up by the plant during this window eliminates all caterpillar development on that
              plant for the remainder of the season. If mosquito control is being applied nearby, note
              whether the spray zone reaches the Partridge Pea patch before scheduling a treatment.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who shares the sunny garden and the southward movement in late summer</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; the annual legume host plant without which a Cloudless Sulphur cannot complete
              a northern breeding cycle; the same plant produces seed pods that Wild Turkey and Bobwhite
              eat through fall and winter; one planting supports two species groups simultaneously
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-senna')}>
                Wild Senna
              </button>{' '}
              &mdash; the perennial companion legume that returns from the same root crown each spring
              and provides host plant material before Partridge Pea has germinated; Cloudless Sulphur
              caterpillars are green when feeding on the leaves and shift toward yellow when feeding
              on the flowers — the color determined by which plant part is in the diet
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('tiger-swallowtail')}>
                Tiger Swallowtail
              </button>{' '}
              &mdash; a large butterfly that nectars at the same flowers as Cloudless Sulphur through
              summer — joe-pye weed, ironweed, wild bergamot, milkweed; the two species often appear
              on the same blooming patch in July and August, one lemon-yellow and one yellow-striped
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('painted-lady')}>
                Painted Lady
              </button>{' '}
              &mdash; another long-distance migrant that moves south in late summer and autumn, passing
              through northern yards at roughly the same time as Cloudless Sulphur; the two share
              migratory timing but use entirely different host plants — Painted Lady uses thistles
              and pearly everlastings while Cloudless Sulphur uses legumes
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('common-milkweed')}>
                Common Milkweed
              </button>{' '}
              &mdash; Cloudless Sulphur adults nectar at milkweed flowers throughout summer; a yard
              with milkweed blooming in July holds adults through the breeding season; milkweed flowers
              at exactly the time when newly emerged Cloudless Sulphurs from early broods need nectar
              before laying their eggs
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('black-eyed-susan')}>
                Black-Eyed Susan
              </button>{' '}
              &mdash; one of the late-summer nectar sources that Cloudless Sulphurs stop at during
              the autumn movement south; blooms from July through September, overlapping the entire
              migration window; a yard with black-eyed susan, partridge pea, and milkweed together
              provides host plant for breeding and the nectar sources the adult needs to fuel the
              southward flight
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Partridge Pea and a patch of full sun are the whole habitat.</strong>{' '}
            See the full native plant profile with{' '}
            <button className="link-button" onClick={() => onNavigate('partridge-pea')}>
              Partridge Pea
            </button>
            , pair it with the perennial{' '}
            <button className="link-button" onClick={() => onNavigate('wild-senna')}>
              Wild Senna
            </button>
            , find a local nursery source with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , and see which other late-summer species share the garden with the{' '}
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
