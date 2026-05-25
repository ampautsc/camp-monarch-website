import type { Page } from '../App'

interface AmericanLadyProps {
  onNavigate: (page: Page) => void
}

export default function AmericanLady({ onNavigate }: AmericanLadyProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/2124214/large.jpg"
          alt="American Lady butterfly (Vanessa virginiensis) — orange and brown butterfly with wings open on a flower, showing white spots near the forewing tip"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/45554477/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Susan Elliott&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/2124214" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Lady</h1>
        <p className="hero__lead">
          An orange butterfly lands on a coneflower and holds its wings open in the sun. It looks like
          a Painted Lady — the same warm orange, the same dark pattern across the upper wing surface.
          Turn it over in your mind and look for one thing: when the wings close, two large circular
          eyespots appear on the hindwing underside. Not four small ones, not a row of dots — two large
          circles, each with a pale blue pupil, looking back at you. That is the American Lady.
          The caterpillar that became this butterfly built a silk tent around a single leaf of pearly
          everlasting and ate its way out from inside.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fieldmarks-heading">
          <h2 id="fieldmarks-heading">Two large eyespots on the hindwing underside, not four small ones — the one field mark that separates American Lady from Painted Lady every time</h2>
          <p>
            The American Lady (<em>Vanessa virginiensis</em>) and the Painted Lady (<em>Vanessa cardui</em>)
            are among the most commonly confused butterflies in eastern North America. Both are orange with
            dark patterning on the upper surface, both nectar at the same flowers, and both can be present
            in the same garden on the same afternoon. The underside of the hindwing settles the question
            immediately: the American Lady has two large eyespots with blue centers; the Painted Lady has
            four small eyespots arranged in a row.
          </p>
          <p>
            On the upper surface, the American Lady carries two white spots near the tip of the forewing
            against an orange background — the top spot sits in a field of orange, not against the dark
            border the way Painted Lady's spots do. The hindwing above is orange with dark patterning and
            a row of blue spots along the outer margin. Wingspan runs from 1.75 to 2.25 inches. Both sexes
            look similar from above.
          </p>
          <p>
            The American Lady is a permanent resident throughout the southeastern United States and moves
            north each spring as far as southern Canada. Populations in the northern part of the range do
            not overwinter — the adults that appear in northern gardens in June arrived from the south
            within the previous few weeks. A second generation flies in late summer before the adults
            move south again in September and October.
          </p>
        </section>

        <section aria-labelledby="host-heading">
          <h2 id="host-heading">Pearly everlasting, a white-flowered meadow plant that most homeowners have never grown — the caterpillar builds a silk tent around a single leaf and feeds inside</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/303642323/large.jpg"
              alt="American Lady caterpillar (Vanessa virginiensis) — a dark caterpillar with white spots and yellow banding on the side, resting on a plant"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/96166954/large.jpg'
              }}
            />
            <figcaption>
              The American Lady caterpillar is dark with a row of white spots along the back and bright
              yellow banding on the sides. It feeds on pearly everlasting (<em>Anaphalis margaritacea</em>)
              and pussytoes (<em>Antennaria</em> spp.) — two native composites that tolerate dry, disturbed
              soil where most garden plants fail.
              <span className="photo-credit"> CC0 via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            The American Lady's primary host plants are pearly everlasting (<em>Anaphalis margaritacea</em>)
            and pussytoes (<em>Antennaria</em> spp.) — two low-growing composites in the aster family
            with white or silvery flower heads. Both grow in dry, open conditions: roadsides, old fields,
            disturbed edges, thin rocky soil. They are not plants typically sold in garden centers. A
            homeowner who adds them to a dry sunny slope is providing something most cultivated gardens
            cannot offer.
          </p>
          <p>
            The caterpillar does not feed openly on the host plant. It draws silk threads across a single
            leaf, pulling the leaf edges inward until the leaf curls into a loose tent around its body.
            Inside the tent, the caterpillar feeds on the leaf surface and the surrounding tissue,
            expanding the structure as it grows. Each instar builds a new tent on a fresh leaf. A plant
            with American Lady caterpillars shows a scatter of curled, silk-bound leaves — the architecture
            is visible, but the caterpillar inside is not.
          </p>
          <p>
            The pupal stage lasts approximately 10 to 14 days. The chrysalis is formed outside the tent,
            suspended by a silk pad from a stem or other support near the host plant. It is pale green
            to brownish with gold-tipped bumps along the dorsal surface — the same metallic points found
            on monarch and fritillary chrysalises.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant pearly everlasting in a sunny dry spot — it will spread slowly and host American Lady caterpillars in season</h2>
          <ol className="step-list">
            <li>
              <strong>Plant pearly everlasting (<em>Anaphalis margaritacea</em>) in full sun with dry to medium, well-drained soil.</strong>{' '}
              Pearly everlasting grows 1 to 2 feet tall with woolly white stems and clusters of small
              papery white flower heads that hold their shape after the plant dries. It spreads by
              rhizome into a loose colony over several years and tolerates sandy or gravelly soil where
              more demanding plants fail. The white flower clusters attract multiple bee species, and the
              dried stems hold seeds through winter. Find it with{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>
              .
            </li>
            <li>
              <strong>Add pussytoes (<em>Antennaria plantaginifolia</em> or <em>Antennaria neglecta</em>) as a low-growing companion in lean soil.</strong>{' '}
              Pussytoes form a dense mat of grey-green rosettes that rarely exceeds 6 inches when not
              in flower. They grow in dry, sunny, nutrient-poor soil — the kind of spot where grass
              struggles and mulch is unnecessary. American Lady females will oviposit on both pearly
              everlasting and pussytoes, and the two plants together extend the period when suitable
              host material is available, since pussytoes emerges slightly earlier in spring.
            </li>
            <li>
              <strong>Leave the white flower heads standing through September.</strong>{' '}
              American Lady adults nectar at pearly everlasting flowers in late summer, during the same
              weeks when second-generation females are laying eggs on the plant. Cutting the plant back
              before September removes both the nectar source and the active oviposition substrate. The
              dried flower heads hold structure well through winter and can be left standing as overwintering
              cover for small insects before removing them in early spring.
            </li>
            <li>
              <strong>Do not disturb the curled, silk-bound leaves on the host plant from June through September.</strong>{' '}
              Each curled leaf contains a caterpillar in one of its five instars. Pulling the leaves
              open — even out of curiosity — exposes the caterpillar before it is ready to pupate. If
              the plant looks untidy because of the tents, that is the correct appearance for a plant
              doing its job. The tents will be abandoned by October.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who else uses dry meadow and the white-flowered composite family in late summer</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('painted-lady')}>
                Painted Lady
              </button>{' '}
              &mdash; the butterfly most often confused with American Lady; four small eyespots on
              the hindwing underside instead of two large ones; uses thistles and mallows as host
              plants rather than everlastings; a global migrant that appears across the continent
              in some years in high numbers when conditions drive northward movement from the southwest
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('pearl-crescent')}>
                Pearl Crescent
              </button>{' '}
              &mdash; another orange butterfly that uses dry meadow and sunny openings; uses native
              asters as host plants; smaller than American Lady but occupies the same habitat edges
              and blooming roadsides from late spring through fall; both species nectar at composites
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('purple-coneflower')}>
                Purple Coneflower
              </button>{' '}
              &mdash; American Lady adults nectar heavily at coneflower from July through September;
              a yard with coneflower near a patch of pearly everlasting places the adult food source
              and the larval host plant within a few feet of each other; coneflower also hosts native
              bees and goldfinches on the seed heads through fall
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('black-eyed-susan')}>
                Black-Eyed Susan
              </button>{' '}
              &mdash; another late-summer composite that American Lady adults visit for nectar; blooms
              at roughly the same time as pearly everlasting and grows in similar dry, sunny conditions;
              planting both together gives adults multiple nectar sources while keeping them close to
              the host plant colony
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('great-spangled-fritillary')}>
                Great Spangled Fritillary
              </button>{' '}
              &mdash; a larger orange butterfly that shares the same nectar plants in midsummer;
              uses violets as host plants rather than composites; adults of both species appear on
              coneflower and bergamot from July onward, giving a yard with multiple native composites
              two species of orange butterfly through the same weeks
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>A dry sunny slope with pearly everlasting, pussytoes, and coneflower hosts the whole cycle.</strong>{' '}
            Browse the full plant collection with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , find what is blooming now in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            , and see which other visitors share the summer composite patch with the orange butterflies.
          </p>
        </div>
      </div>
    </>
  )
}
