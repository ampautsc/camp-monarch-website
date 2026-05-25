import type { Page } from '../App'

interface ZebraSwallowtailProps {
  onNavigate: (page: Page) => void
}

export default function ZebraSwallowtail({ onNavigate }: ZebraSwallowtailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/145846511/large.jpeg"
          alt="Zebra Swallowtail butterfly perched with wings open, showing black wings with horizontal white and pale blue-green bands and long hindwing tails, Albany, New York"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/397420937/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: pteranodon&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/observations/88398944" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies</div>
        <h1>Every Zebra Swallowtail in the eastern United States hatched from a pawpaw leaf — no caterpillar of this species has ever been recorded developing on any other plant.</h1>
        <p className="hero__lead">
          The Zebra Swallowtail (<em>Eurytides marcellus</em>) has black wings crossed by horizontal
          bands of white and pale blue-green, a red spot on each hindwing base, and hindwing tails
          that extend nearly as long as the hindwing itself. It is the only swallowtail in eastern
          North America with tails of that length relative to the wing. The adults that emerge in
          April are smaller, with shorter tails and a higher ratio of white to blue-green in the
          bands. The adults that emerge in June and July are larger, with longer tails and more
          blue-green. Both generations come from the same population.
        </p>
        <p className="hero__lead">
          The host plant is pawpaw (<em>Asimina triloba</em>), a small understory tree native to
          the eastern half of North America. A female Zebra Swallowtail lands on a leaf and
          presses her front feet against the surface to read its chemistry by contact. Pawpaw
          leaves contain annonaceous acetogenins — compounds not found in other common plants.
          If the contact reading comes back wrong, the female lifts off and resumes searching.
          She will not lay on anything else. A Zebra Swallowtail flying in your yard means
          a pawpaw is within her flight range.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="forms-heading">
          <h2 id="forms-heading">Spring adults emerge in April with shorter tails — summer adults from the same population emerge in June with tails that extend nearly a full inch beyond the hindwing edge</h2>
          <p>
            The Zebra Swallowtail produces two or three broods in a season. The first-brood adults
            that fly in April and early May have hindwing tails that measure roughly half an inch
            long and wing bands that show more white than blue-green. The second-brood adults that
            emerge in late June and July have tails close to an inch long and bands with a stronger
            blue-green cast. A spring-form and a summer-form adult side by side could be mistaken
            for different species by a new observer — the size difference alone is noticeable in
            the field.
          </p>
          <p>
            Both forms overwinter as chrysalids. A chrysalis formed by a summer-brood caterpillar
            in August attaches to pawpaw bark or to a woody stem nearby and remains there through
            frost, through snow, and through the slow warming of early spring — emerging the
            following April as a first-brood adult. The caterpillar that built that chrysalis never
            experiences winter. The chrysalis it left behind does.
          </p>
        </section>

        <section aria-labelledby="pawpaw-lock-heading">
          <h2 id="pawpaw-lock-heading">Pawpaw leaves contain acetogenins that repel most insects — the Zebra Swallowtail evolved to tolerate them, and in doing so locked itself into a relationship with no substitutes</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/397420937/large.jpg"
              alt="Zebra Swallowtail perched with wings partially open showing the long white-tipped tails, red hindwing base spots, and the blue-green banding along the inner hindwing, Pittsburgh, Pennsylvania"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/536363051/large.jpg'
              }}
            />
            <figcaption>
              The long tails, red hindwing base spot, and blue-green inner banding distinguish
              the Zebra Swallowtail from every other swallowtail in the eastern United States.
              Spring-form adults show shorter tails and more white in the bands; summer-form
              adults from the same population show longer tails and more blue-green.
              <span className="photo-credit"> laughingmantis &middot; CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            Pawpaw belongs to the Annonaceae — the custard apple family. Most members of this
            family grow in tropical regions; pawpaw is the only species native to temperate
            North America. Pawpaw leaves and bark contain acetogenins, a class of compounds that
            disrupt mitochondrial function in most insects that eat them. This makes pawpaw leaves
            largely insect-resistant, which is part of why a pawpaw grove in full leaf in July
            often looks unmarked and clean while nearby oaks carry caterpillar damage on every branch.
          </p>
          <p>
            The Zebra Swallowtail caterpillar feeds on pawpaw leaves without apparent harm. In
            doing so, it accumulates the acetogenins from the leaf tissue into its own body. A
            caterpillar, chrysalis, or adult that has fed on pawpaw carries those compounds
            and may be distasteful to some predators as a result — the same mechanism, on a
            different chemical substrate, that makes monarchs distasteful to birds after feeding
            on milkweed.
          </p>
          <p>
            The Zebra Swallowtail caterpillar is pale green with faint yellowish bands and a
            dark triangular marking just behind the head. It feeds from the upper surface of
            pawpaw leaves, leaving irregular eaten patches. A small caterpillar on a young
            pawpaw leaf is easy to overlook — the pale green of the caterpillar nearly matches
            the pale underside of the leaf in diffuse light.
          </p>
        </section>

        <section aria-labelledby="flight-range-heading">
          <h2 id="flight-range-heading">A female checking a garden for pawpaw by foot — and what happens when she does not find it</h2>
          <p>
            Adult Zebra Swallowtails nectar on a range of wildflowers including{' '}
            <button className="link-button" onClick={() => onNavigate('purple-coneflower')}>
              Purple Coneflower
            </button>
            ,{' '}
            <button className="link-button" onClick={() => onNavigate('wild-bergamot')}>
              Wild Bergamot
            </button>
            , and milkweed species. They will visit a yard with no pawpaw if flowers are present.
            The female will fly across the yard, land on leaves of various plants, press her
            feet against the surface, and lift off when the reading is wrong. If no pawpaw is
            present, she leaves without laying. She does not improvise.
          </p>
          <p>
            Pawpaw spreads by root sprouts as well as by seed. A single planted tree produces
            a small grove within five to eight years as the root system sends up new stems. A
            grove of three to five stems, growing in the partial shade of a yard edge or
            tree line, provides enough leaf surface for several caterpillars in a season. Pawpaw
            does not grow well in full sun when young — it needs partial shade for the first
            few years, then tolerates more light as the canopy fills. This makes it a natural
            fit for the edge where a tree line meets a lawn.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant a pawpaw in partial shade at the yard edge — one tree begins producing root sprouts within five years, and the female checks for it by foot before she will lay a single egg</h2>
          <ol className="step-list">
            <li>
              <strong>Plant a named pawpaw variety in partial shade.</strong>{' '}
              Pawpaw needs at least two genetically distinct plants for cross-pollination and
              fruit set — named varieties like Shenandoah, Susquehanna, and Allegheny are
              available from native plant nurseries and produce fruit more reliably than seedlings.
              Site the planting at a yard edge, under a high canopy, or along a fence line
              where it will get morning sun and afternoon shade. Avoid deep shade and
              standing water.
            </li>
            <li>
              <strong>Allow root sprouts to develop into a small grove.</strong>{' '}
              Pawpaw spreads by root sprouting from the base of established trees. Within
              five to eight years of planting, a single tree typically produces two to five
              additional stems from the root system. These sprouts are not weeds — they are
              the expanding grove that female Zebra Swallowtails search for. Leave them
              in place unless they conflict with a walkway or foundation.
            </li>
            <li>
              <strong>Leave caterpillar feeding undisturbed from May through September.</strong>{' '}
              Zebra Swallowtail caterpillars eat irregular patches from the upper surface of
              pawpaw leaves. The damage is visible but limited — a single caterpillar consumes
              a small fraction of a full tree's leaf mass. The tree recovers full leaf coverage
              within a growing season. A leaf with visible eaten patches may have a caterpillar
              resting on the underside or on a nearby stem.
            </li>
            <li>
              <strong>Plant nectar sources for adults.</strong>{' '}
              While the caterpillar depends on pawpaw, the adult butterfly nectars on a range
              of flowers. Purple Coneflower, Wild Bergamot, and{' '}
              <button className="link-button" onClick={() => onNavigate('joe-pye-weed')}>
                Joe-Pye Weed
              </button>
              {' '}provide fuel for adults searching for mates and host plants. Planting these
              near the pawpaw increases the time adults spend in the yard and the likelihood
              that a female will locate the pawpaw and lay.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who else uses the pawpaw grove — the swallowtails, bees, and beetles working the same tree for different purposes</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spicebush-swallowtail')}>
                Spicebush Swallowtail
              </button>{' '}
              &mdash; the other large swallowtail of the eastern understory; its caterpillar
              feeds on{' '}
              <button className="link-button" onClick={() => onNavigate('spicebush')}>
                Spicebush
              </button>
              {' '}and sassafras rather than pawpaw, but adults of both species nectar on the
              same wildflowers and can be flying in adjacent habitat in the same week
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('giant-swallowtail')}>
                Giant Swallowtail
              </button>{' '}
              &mdash; the largest swallowtail in North America; its caterpillar uses plants
              in the citrus family (Rutaceae) rather than pawpaw; adults of both Giant and
              Zebra Swallowtails visit Purple Coneflower and Joe-Pye Weed at the same time
              in summer
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('purple-coneflower')}>
                Purple Coneflower
              </button>{' '}
              &mdash; one of the primary nectar sources for adult Zebra Swallowtails; plant
              it within fifty feet of the pawpaw grove to give adults a reason to stay in
              the yard long enough to locate the host plant
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; pawpaw flowers are primarily pollinated by flies and beetles, but bumble
              bees also visit; the pawpaw flower produces no nectar and offers pollen as the
              only reward; the bees and beetles that visit carry pollen between trees,
              enabling fruit set
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-comma')}>
                Eastern Comma
              </button>{' '}
              &mdash; a woodland-edge butterfly that, like the Zebra Swallowtail, tends to
              stay near tree lines and sheltered spots rather than flying in open sun; both
              species may be found in the same shaded yard edge in May
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The Zebra Swallowtail cannot breed in any yard without pawpaw.</strong>{' '}
            One tree at the yard edge, left to spread by root sprouts, becomes a grove that a
            female can find and use each May. Browse native trees and understory plants in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , learn what makes the host tree work in{' '}
            <button className="link-button" onClick={() => onNavigate('pawpaw')}>
              Pawpaw
            </button>
            , or explore all the butterflies the gallery contains in{' '}
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
