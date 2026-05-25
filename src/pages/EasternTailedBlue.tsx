import type { Page } from '../App'

interface EasternTailedBlueProps {
  onNavigate: (page: Page) => void
}

export default function EasternTailedBlue({ onNavigate }: EasternTailedBlueProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/25798530/large.jpeg"
          alt="Eastern Tailed-Blue butterfly resting on vegetation with wings closed, showing the hindwing tails and orange eyespots that form a false head"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/155967021/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: raymackie&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/17051011" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies</div>
        <h1>The Eastern Tailed-Blue ends each hindwing with a thin tail that rises like an antenna when the butterfly perches — an orange spot beside it completes a false head — and late-season specimens across the range are missing those tails far more often than any other wing section.</h1>
        <p className="hero__lead">
          The Eastern Tailed-Blue (<em>Cupido comyntas</em>) is one of the smallest butterflies
          in the eastern United States, with a wingspan between ¾ and 1¼ inches. The male is
          vivid blue on top with a narrow dark border; the female is gray-brown above with a
          small patch of blue at the wing base. Both show the same underside pattern when
          perching with wings closed: pale gray with a row of dark spots and, at the inner
          rear corner of the hindwing, the orange spots and thin tails that constitute the
          false head.
        </p>
        <p className="hero__lead">
          Eastern Tailed-Blues fly from April through October across most of the eastern United
          States. They are common in suburban lawns wherever white clover grows, along roadsides
          and trail edges, in old fields, and in any garden bed that contains legumes in bloom.
          Most people walk past them without registering what they are — the butterfly's wingspan
          is smaller than a quarter.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="false-head-heading">
          <h2 id="false-head-heading">The tail that detaches, the eyespot that redirects — how two milligrams of wing tissue misdirect a predator</h2>
          <p>
            When an Eastern Tailed-Blue lands and closes its wings, the hindwing's rear corner
            faces upward. The thin tail extends above the folded wing surface and moves slowly
            as the butterfly rocks, tracking like an antenna. At the corner where the tail meets
            the wing body, one or two orange-tipped spots create the appearance of eyes. From
            above, the rear end of the butterfly looks more like a head than the head does.
          </p>
          <p>
            A predator — a small bird, a spider, a praying mantis — that strikes at the apparent
            head contacts the hindwing corner instead of the thorax. The tails break away with
            minimal force. Field studies of related lycaenid butterflies have found that the
            hindwing tail region sustains damage and breakage at measurably higher rates than
            any comparable wing area on species that lack the false-head structure. The butterfly
            loses a few milligrams of wing tissue and continues flying. Individuals collected
            in late summer regularly show tails that are broken, shortened, or missing entirely.
          </p>
          <p>
            The adaptation does not require the butterfly to do anything. It functions passively:
            the shape and color are there, the predator interprets them, the strike lands in
            the wrong place. The orange spots are not warning coloration — the butterfly is
            neither toxic nor distasteful. They are positional markers that make a tail look
            like an eye, positioned precisely at the corner where the tail extends.
          </p>
        </section>

        <section aria-labelledby="host-plants-heading">
          <h2 id="host-plants-heading">White clover, vetches, Partridge Pea — a caterpillar that recruits ant bodyguards from a gland on its back</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/190304232/large.jpg"
              alt="Eastern Tailed-Blue male with wings open, showing the vivid blue upperside and thin dark border, perched on a clover flower"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/91562330/large.jpeg'
              }}
            />
            <figcaption>
              An Eastern Tailed-Blue male with wings spread, showing the vivid blue upperside
              that gives the species its name. Males are blue above; females are gray-brown
              with limited blue at the wing base. Both sexes share the false-head underside pattern.
              <span className="photo-credit"> hr_dragonfly · CC BY via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            Eastern Tailed-Blue females identify legume host plants by pressing their feet against
            leaf surfaces — tarsal chemoreceptors detect the chemical signature of legume foliage
            on contact. The female then lays a single egg on a flower bud or young leaflet. Host
            plants in a yard setting include white clover (<em>Trifolium repens</em>), red clover,
            alsike clover, vetches (<em>Vicia</em> spp.), Partridge Pea (<em>Chamaecrista
            fasciculata</em>), Wild Senna (<em>Senna hebecarpa</em>), tick trefoils
            (<em>Desmodium</em> spp.), and wild bean (<em>Strophostyles helvola</em>). The female
            evaluates each plant by foot before committing to a clutch.
          </p>
          <p>
            The caterpillar is small, slug-shaped, and green to yellow-green — nearly invisible
            against legume foliage. On the top surface of its thorax, just behind the head, it
            carries a gland called the dorsal nectary organ. This gland secretes a fluid that
            ants find attractive. Ants that find the caterpillar drink from the gland and then
            patrol the surrounding leaf surface, reacting aggressively to other insects. Studies
            on lycaenid caterpillars attended by ants have found lower rates of parasitoid wasp
            attack compared to unattended caterpillars of the same species. The caterpillar does
            not move toward or seek out ants — it secretes the attractant continuously, and the
            ants arrive on their own.
          </p>
          <p>
            After feeding, the caterpillar pupates on the host plant or in the leaf litter at
            its base. The pupa is pale green or tan, and the adult emerges within one to two
            weeks under warm conditions. In the northern part of the range, the final brood of
            the season produces eggs that overwinter in the soil or in plant debris, hatching
            the following spring when the first legumes begin budding.
          </p>
        </section>

        <section aria-labelledby="broods-heading">
          <h2 id="broods-heading">April through October in the north — three or four broods of adults with one generation overwintering as an egg</h2>
          <p>
            Eastern Tailed-Blues produce two to three broods per year in Ohio and similar
            latitudes, with adults on the wing from late April through early October. In Virginia
            and states to the south, three to four broods are typical, and adults appear earlier
            in spring — sometimes late March. The final brood of the season produces overwintering
            eggs that hatch the following spring when white clover begins producing buds.
          </p>
          <p>
            Males congregate at moist soil, gravel road edges, and wet sand to extract dissolved
            minerals in a behavior called puddling. A gravel driveway or unpaved path that stays
            damp after rain will sometimes draw several males at once. They are the individuals
            most likely to be noticed — vivid blue, active, visible from a standing height. The
            females stay lower in the vegetation, pressed close to clover and legume foliage,
            checking leaf chemistry and laying eggs with minimal conspicuous flight.
          </p>
          <p>
            Adults feed on nectar from small flowers — white clover, wild bergamot, aster,
            goldenrod, and dogbane. They do not visit large, tubular flowers. In a yard with
            multiple nectar sources, Eastern Tailed-Blues consistently use the lowest-growing
            flowers that other butterflies pass over. They share clover patches with Clouded
            Sulphurs, bumblebees, and honeybees without apparent conflict — each species working
            the plant for different things.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Let the clover grow, skip the broadleaf herbicide from June through September — the Eastern Tailed-Blue is already in your yard</h2>
          <ol className="step-list">
            <li>
              <strong>Leave clover in the lawn, or reseed a section with white clover.</strong>{' '}
              White clover (<em>Trifolium repens</em>) is the most common Eastern Tailed-Blue
              host plant in suburban yards. A section of lawn 6 to 10 feet wide with clover
              mixed in provides enough flower bud material to support multiple broods. If clover
              is already growing in your lawn — as volunteer, without any planting — leave it.
              The butterfly has already located it.
            </li>
            <li>
              <strong>Add Partridge Pea in a dry, sunny bed.</strong>{' '}
              Partridge Pea germinates directly from seed in lean, well-drained soil each spring.
              Female Eastern Tailed-Blues evaluate it by pressing their feet to the leaves and
              lay on the flower buds through July and August. A 4-foot patch produces enough
              surface area for a full clutch. See the{' '}
              <button className="link-button" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea plant profile
              </button>
              .
            </li>
            <li>
              <strong>Hold broadleaf herbicide from June through early October.</strong>{' '}
              Broadleaf herbicide applied to clover, vetches, or other legumes eliminates the
              host plant surface for the rest of the season. Eastern Tailed-Blue caterpillars
              develop on white clover flower heads and leaflets through June, July, August, and
              September. If weed control is scheduled, check whether the spray zone intersects
              any legume patch before applying.
            </li>
            <li>
              <strong>Leave ant activity in the legume bed undisturbed.</strong>{' '}
              Ants moving through clover or Partridge Pea in summer are often attending Tailed-Blue
              caterpillars — drinking from the dorsal gland and patrolling the leaf surface.
              Ant control in a legume patch removes a layer of protection the caterpillars need.
              The ants are not there by accident.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who shares the clover — and which species trace the same host plant network across the yard</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; Eastern Tailed-Blue females lay eggs on Partridge Pea flower buds alongside
              Cloudless Sulphur females visiting the same plants; Partridge Pea hosts all three
              species in the Chamaecrista-dependent Sulphur group while also providing host plant
              surface for Tailed-Blue larvae through July and August
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-senna')}>
                Wild Senna
              </button>{' '}
              &mdash; both the Eastern Tailed-Blue and the Cloudless Sulphur use Wild Senna as
              a host plant; Wild Senna's larger leaf mass provides more surface area than clover
              and persists from the same root crown each spring; a yard with both Wild Senna
              and white clover supports Tailed-Blues from April through October across the
              full range of their legume preferences
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('clouded-sulphur')}>
                Clouded Sulphur
              </button>{' '}
              &mdash; uses white clover, red clover, and vetches as host plants — the same
              plants Eastern Tailed-Blues use; both species are common in suburban yards from
              spring through fall and can be seen nectaring on the same clover patch simultaneously;
              the Clouded Sulphur's wingspan is roughly three times that of the Tailed-Blue,
              making them easy to distinguish when they land together
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; shares white clover as a resource; the bumblebee visits clover flowers for
              nectar and pollen while the Tailed-Blue is looking for flower buds to lay eggs on
              or feeding on small amounts of nectar; both insects use the same plant in the same
              week for different purposes
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spring-azure')}>
                Spring Azure
              </button>{' '}
              &mdash; the Spring Azure flies from late March through May, overlapping with the
              first Eastern Tailed-Blue brood; both are small blue butterflies in spring gardens,
              distinguishable by the tails on the Tailed-Blue (absent on the Azure) and the
              darker gray underside markings of the Spring Azure; both species occur in the same
              suburban yards and are most active on warm mornings
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The Eastern Tailed-Blue is already in yards that have clover.</strong>{' '}
            It requires no special planting — only the absence of herbicide on the legumes
            already present. Browse its host plants in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or see the full gallery of butterflies that depend on native legumes in the{' '}
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
