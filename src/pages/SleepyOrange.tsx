import type { Page } from '../App'

interface SleepyOrangeProps {
  onNavigate: (page: Page) => void
}

export default function SleepyOrange({ onNavigate }: SleepyOrangeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/178930280/large.jpeg"
          alt="Sleepy Orange butterfly perched with wings open, showing bright orange upper surfaces with wide black borders and the small dark 'closed eye' marking on the forewing costal margin, Marietta, Georgia"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/45746298/large.jpeg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Nick Carlson&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/observations/106507727" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies</div>
        <h1>On the leading edge of the Sleepy Orange's forewing, there is a small black mark shaped like a closed eye — the butterfly is named for that mark, not for its behavior. Its actual flight is the fastest and most evasive of any butterfly in a legume garden.</h1>
        <p className="hero__lead">
          The Sleepy Orange (<em>Eurema nicippe</em>) is a medium-sized butterfly in the family
          Pieridae — the same family as the Clouded Sulphur, the Orange Sulphur, and the Cabbage
          White. Its wingspan runs from one and three-eighths to two and a quarter inches. The upper
          surfaces are bright orange with wide black borders. The underside color shifts with the
          season: summer adults show a bright yellow underside with brick-red markings; adults that
          emerge in fall turn browner with heavier dark patterning.
        </p>
        <p className="hero__lead">
          The Sleepy Orange uses the same legume host plants as the Cloudless Sulphur — Wild Senna,
          Maryland Senna, and Partridge Pea are the primary hosts across the eastern range. Females
          register the plant's chemistry through receptors in their feet, press their tarsi to the
          leaf surface to confirm the species, and lay single eggs on the undersides of leaflets.
          The caterpillar is pale green with a narrow white stripe running along its length on each side.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="name-heading">
          <h2 id="name-heading">The "closed eye" on the forewing costal margin — a small black arc that sits still while the butterfly does not</h2>
          <p>
            The small black mark on the Sleepy Orange's forewing costal margin — the leading edge
            of the forewing near where it attaches to the body — is a narrow arc, slightly curved
            inward, positioned where an eye would sit on a face oriented toward the wing base.
            When the butterfly rests with wings fully closed, the mark is hidden on the underside.
            When it basks with wings spread flat in morning sun, the mark sits in the orange field
            of the upper forewing as a small curved shape, narrowing at both ends, that reads as
            a closed eye.
          </p>
          <p>
            The butterfly contradicts its name in every other respect. When disturbed from a legume
            plant, it launches immediately into a rapid flight that changes direction multiple times
            per second. It rarely stays on any surface for more than a few seconds. Observers
            tracking individuals through a Wild Senna patch typically see the butterfly land, lift
            off, and disappear into the surrounding vegetation before they can raise a camera.
            The name documents a feature on the wing. It does not describe the insect.
          </p>
        </section>

        <section aria-labelledby="seasonal-form-heading">
          <h2 id="seasonal-form-heading">Bright yellow underneath in July, brown in November — two undersides, one species, two different seasons</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/74664485/large.jpg"
              alt="Sleepy Orange butterfly at rest with wings closed, showing the bright yellow underside with brick-red markings of the summer form, Agua Caliente County Park, California"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/148812600/large.jpeg'
              }}
            />
            <figcaption>
              A Sleepy Orange at rest with wings closed, showing the summer-form underside:
              bright yellow with brick-red markings on the hindwing. The winter form of the same
              species is brown with heavier dark patterning, matching dried leaf litter. Both
              forms fly simultaneously in the Gulf states each October as summer-form adults
              give way to winter-form adults.
              <span className="photo-credit"> jspaulding &middot; CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            Adult Sleepy Oranges produced in late summer and fall carry a different underside
            coloration than those produced in spring and early summer. The summer form shows
            a bright yellow underside with brick-red markings on the hindwing. Adults that
            emerge in September and October — the individuals that will survive through winter
            to the following spring — show a brown or tan underside with heavier, more extensive
            dark markings that match dried grass and dead leaf litter.
          </p>
          <p>
            In Florida, Texas, and the Gulf states, where the Sleepy Orange overwinters as an
            adult, both forms can be present in the same population in October: summer-form adults
            that emerged in August are still flying while winter-form adults that emerged in
            September are beginning their first resting bouts in vegetation. The color shift
            is not gradual — individual adults express the form determined at the time of their
            eclosion and do not change form across their adult lifespan.
          </p>
          <p>
            No Sleepy Orange survives winter in Missouri, Indiana, or Illinois. The species does
            not overwinter in any northern state as an egg, a pupa, or an adult. Every Sleepy
            Orange seen in a midwestern yard in July hatched from a caterpillar that fed on a
            plant in a southern state. The butterfly re-colonizes northward each summer from
            the permanent year-round population along the Gulf coastal plain.
          </p>
        </section>

        <section aria-labelledby="host-plants-heading">
          <h2 id="host-plants-heading">Wild Senna, Partridge Pea, Maryland Senna — the same leaflets the Cloudless Sulphur uses, checked the same way</h2>
          <p>
            Female Sleepy Oranges identify host plants by pressing their tarsi against leaf
            surfaces. The tarsal chemoreceptors register the chemical signature of the plant
            on contact. When the signal matches a suitable host, the female curves her abdomen
            under the leaf and deposits a single egg on the underside of a leaflet. The egg
            is spindle-shaped, white when first laid, and turns yellow within hours.
          </p>
          <p>
            The primary host plants in the eastern United States are all in the genera{' '}
            <em>Chamaecrista</em> and <em>Senna</em>:{' '}
            <button className="link-button" onClick={() => onNavigate('partridge-pea')}>
              Partridge Pea
            </button>
            {' '}(<em>Chamaecrista fasciculata</em>), Wild Sensitive Plant (<em>Chamaecrista nictitans</em>),{' '}
            <button className="link-button" onClick={() => onNavigate('wild-senna')}>
              Wild Senna
            </button>
            {' '}(<em>Senna hebecarpa</em>), and Maryland Senna (<em>Senna marilandica</em>).
            These are the same plants that host Cloudless Sulphur caterpillars. Females of both
            species evaluate the same plant in the same hour. Both may deposit eggs on the
            same Wild Senna stem during the same week in July.
          </p>
          <p>
            The pale green caterpillar with the narrow white lateral stripe feeds on leaflet
            surfaces from the outside. Unlike the Gray Hairstreak caterpillar, which bores
            inside seed pods and is invisible from outside the plant, the Sleepy Orange larva
            feeds at the leaf edge and leaves visible notches. Multiple caterpillars on a
            single Partridge Pea plant are possible where females distribute eggs across
            several leaflets on the same stem.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant Wild Senna and Partridge Pea in the same bed — the arriving butterfly needs legume leaflets ready from June through September</h2>
          <ol className="step-list">
            <li>
              <strong>Pair Wild Senna with Partridge Pea in the same bed.</strong>{' '}
              Wild Senna is perennial and has leafy mass ready by May. Partridge Pea is an annual
              that germinates in late spring and peaks in late summer. Together — Wild Senna in the
              moister corner, Partridge Pea in the drier, well-drained section — they provide
              continuous leaflet surface from June through October. Cloudless Sulphur, Sleepy Orange,
              and Little Yellow caterpillars use both plants and can develop on them simultaneously.
              See the{' '}
              <button className="link-button" onClick={() => onNavigate('wild-senna')}>
                Wild Senna profile
              </button>
              {' '}and the{' '}
              <button className="link-button" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea profile
              </button>
              .
            </li>
            <li>
              <strong>Add Maryland Senna where the soil stays moist.</strong>{' '}
              Maryland Senna (<em>Senna marilandica</em>) is a perennial with the same host-plant
              chemistry as Wild Senna — a Sleepy Orange female pressing her feet to its leaves
              receives the same signal. It tolerates consistently moist soil where Wild Senna
              performs less reliably. In sites with clay that stays wet through summer, Maryland
              Senna produces more leafy growth and supports caterpillar development from July
              through September without drought stress.
            </li>
            <li>
              <strong>Leave caterpillar feeding undisturbed from June through September.</strong>{' '}
              Sleepy Orange caterpillars feed on leaflet surfaces and are visible — small green
              dots at leaf edges with notching in the leaflet around them. Leaf-notching on Wild
              Senna and Partridge Pea during this window is development, not pest damage. The
              larvae complete their growth in two to three weeks. A plant with caterpillar feeding
              on it recovers full leaf mass within weeks of the larvae pupating.
            </li>
            <li>
              <strong>Skip broad-spectrum insecticide on legumes from June through September.</strong>{' '}
              Sleepy Orange caterpillars feed at the leaf surface and are exposed to contact spray
              and to systemic insecticides absorbed through legume roots. A treatment applied for
              another pest on the same plant eliminates larvae through the entire development window.
              If pest management is needed near a legume bed, confirm whether the treatment zone
              reaches the Wild Senna or Partridge Pea before applying.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who shares the Senna patch — the butterflies and bees that arrive at the same legumes</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-senna')}>
                Wild Senna
              </button>{' '}
              &mdash; the primary perennial host plant across the eastern range; a Sleepy Orange
              female evaluates the same Wild Senna leaves that Cloudless Sulphur females are
              checking in the same hour; both species deposit eggs on the same plant in the same
              week from June through August
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; the annual companion legume that peaks in late summer when Wild Senna is
              setting seed pods; Sleepy Orange females lay on Partridge Pea leaflets through
              August and September, extending the development window past Wild Senna's main
              leaflet production period
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cloudless-sulphur')}>
                Cloudless Sulphur
              </button>{' '}
              &mdash; uses the same Wild Senna and Partridge Pea host plants and evaluates them
              the same way, by pressing feet to leaves; the Cloudless Sulphur caterpillar feeds
              on leaves and turns green or yellow depending on which plant part it is eating;
              both the Cloudless Sulphur and the Sleepy Orange can be developing on the same
              Wild Senna plant in August, with both species' caterpillars on the same stems
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('orange-sulphur')}>
                Orange Sulphur
              </button>{' '}
              &mdash; similar bright orange upper surface; the Orange Sulphur is larger, found
              primarily in clover fields and alfalfa, and lacks the "closed eye" mark on the
              forewing; both species may nectar on goldenrod and clover in the same late-summer
              meadow from August through October
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; visits Wild Senna flowers while Sleepy Orange females evaluate the same
              plant's leaves for egg-laying; the bumblebee grips the anther cluster and vibrates
              its flight muscles to open the sealed pores, shaking out pollen in a short audible
              buzz; the butterfly and the bee use the same plant in the same July afternoon
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The Sleepy Orange arrives in June from the south and needs legume leaflets waiting.</strong>{' '}
            Wild Senna and Partridge Pea together cover the host plant window from May through
            October. Browse both plants in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or see all the butterflies that depend on native legumes in the{' '}
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
