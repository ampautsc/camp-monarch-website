import type { Page } from '../App'

interface GrayHairstreakProps {
  onNavigate: (page: Page) => void
}

export default function GrayHairstreak({ onNavigate }: GrayHairstreakProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/382627539/large.jpg"
          alt="Gray Hairstreak butterfly perched with wings closed, showing the pale gray underside, dark crossband, and the two white-tipped tails and orange eyespot at the hindwing corner that form a false head"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/148454606/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: dhasdf&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/observations/216356415" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies</div>
        <h1>When a Gray Hairstreak lands and closes its wings, it rubs them slowly together — the two white-tipped tails at the hindwing rear corner oscillate like antennae against an orange-capped dark spot — and a predator that strikes at that apparent head takes detachable wing tissue while the butterfly continues flying.</h1>
        <p className="hero__lead">
          The Gray Hairstreak (<em>Strymon melinus</em>) is the most widely distributed hairstreak
          butterfly in North America, ranging from southern Canada through Central America and west
          to the Pacific Coast. Its wingspan runs from just under an inch to just over an inch and
          a quarter. The upper wing surface is a uniform slate gray-blue; the underside is pale
          gray crossed by a narrow dark line edged in white, with the two-tailed false-head structure
          at the hindwing's rear corner.
        </p>
        <p className="hero__lead">
          In a yard or garden, the Gray Hairstreak appears on flowering legumes, on hollyhock,
          on ornamental beans, and on white clover. It is small enough that most people see it
          every summer without registering what they are looking at. The butterfly's host plant
          range spans over 200 recorded species — wider than any other native hairstreak — which
          is why it appears in yards where nothing has been planted deliberately for butterflies.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="false-head-heading">
          <h2 id="false-head-heading">Two tails, one orange spot, and a rocking motion that animates the decoy — the false head the Gray Hairstreak operates on every perch</h2>
          <p>
            When a Gray Hairstreak perches and closes its wings, it immediately begins a slow
            rocking of the hindwings. The two tails — one longer, one shorter, each tipped in
            white — oscillate together. The movement tracks the way an antenna would move on a
            living head. Beside the base of the tails, an orange spot sits above a smaller
            dark-capped spot. From the angle a small bird approaches first, the rear corner of
            the butterfly reads as a head: two antennae in motion, one eye positioned below them.
          </p>
          <p>
            A bird that strikes at that corner contacts the hindwing tip, not the thorax. The
            tails and surrounding wing tissue detach under minimal force. The butterfly loses
            a small piece of its hindwing and continues flying. Individuals collected in late
            summer regularly show tails that are broken, shortened, or absent — the hindwing
            corner sustains damage at higher rates than any comparable wing region on butterflies
            of similar size that lack false-head structure.
          </p>
          <p>
            The orange spot is not warning coloration. The Gray Hairstreak is neither toxic nor
            distasteful to birds. The spot's function is positional: it marks where an eye would
            sit, adjacent to where an antenna would attach, at precisely the spot a predator
            reading "head" would target. The Eastern Tailed-Blue has a nearly identical structure.
            The difference is the wing-rubbing — the Gray Hairstreak pumps its hindwings to animate
            the false head rather than relying on the static pattern alone.
          </p>
        </section>

        <section aria-labelledby="host-plants-heading">
          <h2 id="host-plants-heading">Beans, hollyhock, clover, Wild Blue Indigo — a caterpillar that bores into seed pods and never touches the leaves</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/78371599/large.jpg"
              alt="Gray Hairstreak butterfly nectaring on a small flower with wings angled open, showing the slate gray upper surface and the orange-tipped tails at the hindwing corner"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/36241171/large.jpg'
              }}
            />
            <figcaption>
              A Gray Hairstreak nectaring with wings angled open. The upper surface is a uniform
              slate gray-blue; the false-head tails and orange spot are visible at the hindwing
              corner even from this angle. In flight the butterfly appears as a rapid gray blur.
              The full false-head structure is only visible when the wings close on a perch.
              <span className="photo-credit"> Edward Perry IV &middot; CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            Gray Hairstreak females identify host plants by pressing their feet to flower bud
            surfaces — tarsal chemoreceptors register the plant's chemical signature on contact.
            The female then lays a single egg on the bud itself, not on a leaf. The caterpillar
            does not eat foliage. It bores directly into the flower bud or developing seed pod
            and consumes the seeds inside. On a bean plant, it tunnels into the pod and eats
            the developing beans. On hollyhock, it enters the seed capsule after the flower
            drops. On white clover, it feeds on seeds inside the dense flower head.
          </p>
          <p>
            Common host plants in suburban yards span two main families: legumes — garden beans
            (<em>Phaseolus</em> spp.), white clover (<em>Trifolium repens</em>), vetches
            (<em>Vicia</em> spp.), Wild Blue Indigo (<em>Baptisia australis</em>), and{' '}
            <button className="link-button" onClick={() => onNavigate('partridge-pea')}>
              Partridge Pea
            </button>
            {' '}(<em>Chamaecrista fasciculata</em>) — and mallows: hollyhock (<em>Alcea rosea</em>),
            common mallow (<em>Malva neglecta</em>), and rose mallow (<em>Hibiscus moscheutos</em>).
            St. John's wort, hops, and strawberry have also been documented. Over 200 plant
            species across these and other families appear in the host plant record.
          </p>
          <p>
            Gray Hairstreak caterpillars carry the same ant-recruiting structures as the Eastern
            Tailed-Blue: a dorsal nectary organ that secretes a fluid ants find attractive, and
            vibratory organs on the prolegs that produce substrate-borne signals ants respond to.
            Ants attracted to the nectary organ patrol the pod or capsule surface while the
            caterpillar feeds inside. Field studies on attended hairstreak larvae show lower rates
            of parasitoid wasp attack compared to unattended individuals of the same species.
          </p>
        </section>

        <section aria-labelledby="broods-heading">
          <h2 id="broods-heading">May through October, overwintering as a pupa — and males that hold a perch on a raised branch until another male challenges them</h2>
          <p>
            The Gray Hairstreak produces two to three broods per year across most of the eastern
            United States, with adults on the wing from mid-May through early October. In Georgia,
            Florida, and Texas a fourth brood is possible and adults appear as early as late March.
            The northern range produces two distinct flight periods — May through June, then August
            through September — with occasional adults in July between them.
          </p>
          <p>
            Unlike the Eastern Tailed-Blue, which overwinters as an egg in the north, the Gray
            Hairstreak overwinters as a pupa in leaf litter or shallow soil at the base of host
            plants. The pupa is dark-surfaced and smooth. It survives hard freezes across the
            upper Midwest and New England. Adults emerge in May when the first legumes and mallows
            begin budding.
          </p>
          <p>
            Males perch on raised branches or fence lines and defend small territories from other
            males, pursuing intruders in rapid spiraling flights before returning to the same perch
            point. This behavior makes males visible in a way that feeding females are not. Females
            stay close to host plant surfaces, pressing feet to stems and buds for long periods
            before committing to an egg. Adults nectar on wild bergamot, milkweed, goldenrod,
            aster, dogbane, white clover, and common garden flowers including coneflower and zinnia.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant beans or hollyhock, leave some pods on the vine — the Gray Hairstreak is already in yards that have legumes</h2>
          <ol className="step-list">
            <li>
              <strong>Plant a short row of garden beans and leave some pods on the vine past harvest.</strong>{' '}
              The Gray Hairstreak female lays eggs on bean flower buds and developing pods.
              Caterpillars bore into pods and eat seeds inside — invisible from outside. Bean
              plants allowed to complete their seed cycle, left on the vine past the eating window,
              provide host plant access from June through September without changing how you
              harvest the beans you want.
            </li>
            <li>
              <strong>Add hollyhock to a dry, south-facing bed.</strong>{' '}
              Hollyhock (<em>Alcea rosea</em>) germinates readily from seed in lean, well-drained
              soil and produces dozens of seed capsules per plant from July through September.
              The caterpillar bores into each capsule after the flower drops, feeding on seeds
              inside the husk, invisible from outside. A single plant in a dry sunny corner
              provides host plant access across two to three broods.
            </li>
            <li>
              <strong>Leave white clover in the lawn or reseed a section.</strong>{' '}
              White clover is one of the most reliable Gray Hairstreak host plants in suburban
              yards. Females detect its chemical signature by foot and lay on dense flower heads,
              where the caterpillar feeds on seeds packed inside. A section 6 to 10 feet wide
              with clover mixed in supports two to three broods from May through September.
            </li>
            <li>
              <strong>Hold pesticide spray on beans and hollyhock during July and August.</strong>{' '}
              Gray Hairstreak caterpillars feed inside seed pods and capsules, not on leaf surfaces,
              so they are invisible when a plant looks infested from outside. Broad-spectrum
              insecticide applied to bean plants in response to surface pest pressure will kill
              caterpillars feeding inside pods that appear undamaged. If bean pest management is
              needed, check whether pods are set before spraying July through August.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who shares the legumes and mallows — the other species connected through the same garden plant network</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; Gray Hairstreak females lay eggs on Partridge Pea flower buds and developing
              pods; the same plant hosts Eastern Tailed-Blue larvae on the flower heads and Cloudless
              Sulphur larvae on the leaflets; a single Partridge Pea patch supports all three butterfly
              species simultaneously through late summer
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-tailed-blue')}>
                Eastern Tailed-Blue
              </button>{' '}
              &mdash; shares white clover, vetches, and Partridge Pea as host plants; both have
              false-head hindwing structures with tails and an orange eyespot; the Gray Hairstreak
              actively pumps its hindwings to animate the decoy while the Eastern Tailed-Blue relies
              on the static pattern; both species appear in legume gardens from May through October
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('coral-hairstreak')}>
                Coral Hairstreak
              </button>{' '}
              &mdash; flies the same July woodland-edge habitat but has no tails at the hindwing
              rear corner — a row of coral-orange spots runs along the lower hindwing edge instead;
              lays eggs only on wild plum and black cherry bark, one genus versus the Gray
              Hairstreak&apos;s 200+ host plant families; both species nectar on milkweed and
              coneflower in the same July afternoons
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-senna')}>
                Wild Senna
              </button>{' '}
              &mdash; a legume in the same family as Partridge Pea, used by multiple sulphur
              butterflies and the Eastern Tailed-Blue; a yard with Wild Senna, white clover, and
              hollyhock covers three separate host plant families the Gray Hairstreak uses, extending
              host plant availability from May through October
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('clouded-sulphur')}>
                Clouded Sulphur
              </button>{' '}
              &mdash; uses white clover and vetches as host plants in the same lawn patches where
              Gray Hairstreak lays eggs on clover flower heads; both species nectar on clover
              simultaneously; the Clouded Sulphur's wingspan is roughly three times that of the
              Gray Hairstreak, making them easy to separate when both land in the same patch
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; visits hollyhock and bean flowers for pollen and nectar while the Gray
              Hairstreak lays eggs on the same buds; both depend on the legume and mallow flower
              cycle — the bumblebee needs the pollen, the hairstreak needs the developing seed —
              and both are present in the same garden bed from June through August
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The Gray Hairstreak is already in yards that have beans, hollyhock, or clover.</strong>{' '}
            It needs no dedicated planting — only the absence of broad-spectrum spray on the
            host plants already present and a few pods left on the vine past harvest. Browse its
            host plant families in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or see the full gallery of butterflies that use garden plants as larval hosts in the{' '}
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
