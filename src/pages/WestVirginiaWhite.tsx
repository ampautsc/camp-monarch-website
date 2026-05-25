import type { Page } from '../App'

interface WestVirginiaWhiteProps {
  onNavigate: (page: Page) => void
}

export default function WestVirginiaWhite({ onNavigate }: WestVirginiaWhiteProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/665281065/large.jpg"
          alt="West Virginia White butterfly (Pieris virginiensis) — a small, pure white butterfly with no spots, wings spread open on a woodland plant"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/664759086/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: jrcagle&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/665281065" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>West Virginia White</h1>
        <p className="hero__lead">
          In April and early May, a small, all-white butterfly moves through hardwood forest
          understory — low, unhurried, from one patch of filtered sunlight to the next.
          No black spots. No yellow tinge. Pure white above, with a faint greenish marbling
          on the hindwing underside visible only when it rests with wings closed.
          The West Virginia White (<em>Pieris virginiensis</em>) is one of the first butterflies
          flying in eastern woodlands each year. It depends on a single plant growing in the
          forest floor. In forests where that plant has been displaced by an invasive,
          the butterfly has disappeared.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="toothwort-heading">
          <h2 id="toothwort-heading">The female lays on toothwort — a plant that vanishes underground by June</h2>
          <p>
            The West Virginia White's larval host plant is toothwort — principally{' '}
            <em>Cardamine diphylla</em> and <em>C. concatenata</em> — a spring ephemeral
            that grows in rich, moist deciduous forest. Toothwort sends up a flowering stalk
            in April, blooms small white flowers, and then the entire above-ground plant
            disappears until the following spring. The West Virginia White's flight period
            and toothwort's above-ground presence are synchronized: the butterfly is on
            the wing during the exact weeks when toothwort is in leaf.
          </p>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/659679673/large.jpg"
              alt="West Virginia White butterfly nectaring on toothwort flowers — white butterfly on small white blooms in woodland setting"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/661852642/large.jpg'
              }}
            />
            <figcaption>
              A West Virginia White nectaring on toothwort — the same plant where females lay their eggs.
              The synchrony is exact: butterfly and host plant are both present only during the
              four-to-six-week window before the tree canopy closes in late May.
              <span className="photo-credit"> CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            The female uses chemical receptors in her feet — taste sensilla on her tarsi — to
            identify oviposition sites. When she presses her feet to a leaf surface and detects
            glucosinolates, the sulfur-containing compounds characteristic of mustard-family plants,
            she curves her abdomen and deposits a single ribbed, pale yellow egg on the underside
            of the leaf. She typically places one egg per plant and moves on, distributing her
            clutch across multiple plants during her adult life of one to two weeks.
          </p>
          <p>
            The caterpillar that hatches is yellow-green with thin white stripes and feeds on
            toothwort leaves. It completes development in roughly three weeks, then pupates at
            the base of a tree or in the leaf litter. The pupa overwinters, and the adult that
            emerges the following April is the product of an egg laid the previous spring.
            One brood per year, tied precisely to the spring window when toothwort grows.
          </p>
        </section>

        <section aria-labelledby="garlic-mustard-heading">
          <h2 id="garlic-mustard-heading">Garlic mustard produces glucosinolates at higher concentrations than toothwort does — and that is the trap</h2>
          <p>
            Garlic mustard (<em>Alliaria petiolata</em>) arrived in North America in the 1800s
            and has since spread through deciduous forest understory across much of the eastern
            United States and southern Canada. It occupies the same habitat as toothwort: moist,
            rich woodland floor, often along creek drainages and trail edges. It belongs to
            the same mustard family and produces glucosinolates.
          </p>
          <p>
            The female West Virginia White cannot chemically distinguish garlic mustard from
            toothwort. She presses her feet to a garlic mustard leaf and receives a glucosinolate
            signal — the same signal she has been shaped by millions of years of natural selection
            to read as "suitable host plant." Studies have found that garlic mustard carries
            substantially higher glucosinolate concentrations than toothwort. The female
            preferentially selects garlic mustard. She lays eggs on it.
          </p>
          <p>
            The caterpillar hatches. Garlic mustard also contains isothiocyanates — chemical
            breakdown products of its glucosinolates — that are absent from toothwort. These
            compounds are toxic to West Virginia White larvae. The caterpillar stops feeding
            within days of hatching and dies. The adult was not poisoned. The egg was not
            destroyed. The signal the butterfly followed worked correctly for millions of years
            on one plant, and now leads to a dead end on another plant that arrived from Europe
            one hundred and fifty years ago.
          </p>
          <p>
            Research in Ontario found West Virginia White populations consistently absent from
            forest patches where garlic mustard was established, and present in forests where
            garlic mustard had not yet arrived. The mechanism is not habitat loss in the
            conventional sense — it is a chemical trap that turns the butterfly's own evolved
            behavior against it.
          </p>
        </section>

        <section aria-labelledby="range-heading">
          <h2 id="range-heading">Where the West Virginia White still flies — and where it has gone</h2>
          <p>
            The West Virginia White ranges through eastern deciduous forest from the southern
            Appalachians north through the Great Lakes region and into southern Canada. It
            requires mature, moist woodland with intact spring ephemeral communities — the
            forest-floor plants that complete their life cycle before the tree canopy closes.
            Toothwort, trout lily, spring beauty, bloodroot, and trillium are its neighbors.
          </p>
          <p>
            In forests where garlic mustard has been established for more than a decade, West
            Virginia White populations are typically absent or reduced to isolated fragments.
            In forests where garlic mustard arrived recently, populations show declines that
            correlate with the spread of the invasive. The butterfly cannot adjust by switching
            to a different host plant — no other plant in its range combines the right chemistry
            and the right phenology. It has no fallback.
          </p>
          <p>
            The species is listed as a species of conservation concern in several states and
            Canadian provinces, including New York, New Jersey, and Ontario. In some parts of
            its southern range, it now survives only in isolated woodland preserves where
            garlic mustard removal is actively maintained.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Pull garlic mustard in April, before it sets seed — then leave toothwort alone</h2>
          <ol className="step-list">
            <li>
              <strong>Pull garlic mustard from wooded edges and understory starting in April, before seed set.</strong>{' '}
              Garlic mustard is a biennial — a basal rosette in year one, a flowering stalk in
              year two. The flowering stalk produces seeds in late May through June; a single
              plant can produce several hundred seeds that remain viable in the soil for up to
              five years. Pull the entire plant, roots included, as soon as the year-two stalks
              appear in April. Bag and remove the pulled plants — the seeds will continue to
              mature on a pulled stalk left on the ground. A wooded yard edge or shade garden
              cleared of garlic mustard each spring for three to five consecutive years will see
              the soil seedbank decline. See{' '}
              <button className="link-button" onClick={() => onNavigate('invasive-plants')}>
                Invasive Plants
              </button>{' '}
              for identification details and removal timing by region.
            </li>
            <li>
              <strong>Leave native toothwort (<em>Cardamine diphylla</em> or <em>C. concatenata</em>) standing in shaded areas through May.</strong>{' '}
              Toothwort grows in rich, moist woodland soil, blooms white in April, and then
              disappears completely underground by June. In a shade garden, woodland strip, or
              the understory edge of a canopy tree, it takes up no above-ground space for eight
              months of the year. The above-ground plant is present for roughly six weeks —
              exactly when West Virginia White females are looking for oviposition sites. Leave
              it undisturbed through the end of May. By June it is gone on its own.
            </li>
            <li>
              <strong>Plant native toothwort in any shaded, moist corner of the yard.</strong>{' '}
              <em>Cardamine diphylla</em> and <em>C. concatenata</em> are available from native
              plant nurseries that specialize in woodland species. Both grow from rhizomes and
              spread slowly to form small colonies over several years. A patch of toothwort under
              a large tree or along a shaded foundation, in soil that stays moist in spring, can
              provide breeding habitat for West Virginia Whites in woodland areas where the butterfly
              still persists. Use{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>{' '}
              to find additional woodland-understory natives that support spring insects.
            </li>
            <li>
              <strong>Record any West Virginia White sightings on iNaturalist (taxon 198801).</strong>{' '}
              The species is easily confused with the Cabbage White in the field — both are small
              and white. The West Virginia White has no black spots on the forewing (the Cabbage
              White male has one, female has two) and flies in woodland rather than open garden
              habitat. The hindwing underside shows faint greenish-gray veining rather than the
              Cabbage White's pale yellow-green. In April and early May in mature deciduous forest:
              if it is white and spotless and flying low through the understory, it is likely a
              West Virginia White. An iNaturalist record with a photograph contributes to the
              distribution data used to track where populations persist.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Spring woodland neighbors — who shares the toothwort habitat</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cabbage-white')}>
                Cabbage White
              </button>{' '}
              &mdash; the introduced European butterfly that arrived in Quebec around 1860 and
              spread to every state and province within forty years; superficially similar to
              the West Virginia White but flies in open gardens and agricultural land rather
              than woodland; the male carries one black spot on the forewing, the female two —
              the marks the West Virginia White lacks entirely
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spicebush-swallowtail')}>
                Spicebush Swallowtail
              </button>{' '}
              &mdash; another woodland butterfly whose range overlaps with the West Virginia White;
              uses spicebush and sassafras as host plants in the same moist, mature deciduous
              forest understory; the caterpillar rolls a leaf around itself and lives inside it,
              mimicking a snake eye pattern on the rolled leaf to deter predators
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('invasive-plants')}>
                Invasive Plants
              </button>{' '}
              &mdash; garlic mustard is the primary invasive species driving West Virginia White
              decline; the invasive plants guide covers identification — garlic mustard has
              heart-shaped, toothed basal leaves in year one and triangular leaves with a white
              flower cluster on a tall stalk in year two — and removal timing to prevent seed set
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('golden-alexanders')}>
                Golden Alexanders
              </button>{' '}
              &mdash; one of the earliest native wildflowers to bloom each spring; flowers in April
              and May in the same woodland-edge habitat where West Virginia Whites fly; provides
              early nectar for native bees and hosts Black Swallowtail caterpillars
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>{' '}
              &mdash; the West Virginia White pupa overwinters in the leaf litter at the base of
              trees; autumn leaf-blowing and raking in wooded areas removes the overwintering
              substrate for the pupa and for the firefly larvae, ovenbird nests, and dozens of
              other species that use the forest floor through winter
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Garlic mustard removal is the single most direct action for this butterfly.</strong>{' '}
            A shaded corner with native toothwort and no garlic mustard is West Virginia White
            breeding habitat. Start with the{' '}
            <button className="link-button" onClick={() => onNavigate('invasive-plants')}>
              Invasive Plants
            </button>{' '}
            guide to identify and pull garlic mustard this spring, or browse the full gallery
            to find the woodland species sharing this habitat in{' '}
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
