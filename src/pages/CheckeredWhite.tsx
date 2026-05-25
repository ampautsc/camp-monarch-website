import type { Page } from '../App'

interface CheckeredWhiteProps {
  onNavigate: (page: Page) => void
}

export default function CheckeredWhite({ onNavigate }: CheckeredWhiteProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/655817929/large.jpg"
          alt="Checkered White butterfly (Pontia protodice) — a white butterfly with bold black checkered bars and spots across the forewing and hindwing"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/472873914/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Kristin Sweeney&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/655817929" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Checkered White</h1>
        <p className="hero__lead">
          In 1850, the white butterfly patrolling dry fields and open roadsides across eastern
          North America was not the Cabbage White — the Cabbage White did not exist on this
          continent yet. The native white butterfly was the Checkered White (<em>Pontia protodice</em>).
          The male's forewing carries a bold black-and-white pattern: heavy dark bars along the wing
          veins, dark spots scattered across the white ground, black scaling concentrated at the
          forewing tip. By 1900, Cabbage White had spread from Quebec to California and occupied
          every field, garden, and roadside the Checkered White had used. In the eastern United
          States, the Checkered White has not recovered.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fieldmarks-heading">
          <h2 id="fieldmarks-heading">The male has black-and-white bars across the forewing — the female carries more dark than white on a freshly emerged individual</h2>
          <p>
            The male Checkered White has a wingspan of 1.5 to 2 inches. The upper surface of
            the forewing shows a black-and-white checkered pattern: a dark gray forewing tip
            with white spots, heavy dark scaling along the wing veins, and irregular dark spots
            across the white ground. The hindwing upper surface is white with faint gray mottling.
            The underside of the hindwing shows olive-green or yellowish mottling along the veins —
            visible when the butterfly rests with wings folded. That greenish underside is the
            field mark that separates the Checkered White from the Cabbage White at rest,
            where the Cabbage White shows pale yellow-green but without the heavier dark
            vein pattern.
          </p>
          <p>
            The female has a heavier dark pattern than the male. On a freshly emerged female,
            the dark scaling on the upper forewing can match or exceed the white area. At
            distance she is the harder identification — the dark-veined hindwing underside
            and the heavier forewing checkering distinguish her from a Cabbage White female,
            but only at close range or in a photograph. Spring and summer broods within the
            same species differ in marking intensity: individuals from cool early-spring
            broods show lighter dark scaling than those from warm midsummer broods.
          </p>
          <p>
            The Checkered White flies with a faster, more direct path than the Cabbage White's
            irregular bouncing flight — low over open dry ground, with periodic pauses on bare
            soil or a low plant stem. Males patrol open areas and elevated spots, intercepting
            females. The species is on the wing from April through October at mid-latitudes,
            with multiple overlapping broods completing through the season.
          </p>
        </section>

        <section aria-labelledby="hostplants-heading">
          <h2 id="hostplants-heading">She walks the stem before laying — chemical receptors in her feet detect glucosinolates in native mustard-family plants</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/109518523/large.jpg"
              alt="Checkered White butterfly (Pontia protodice) resting on a plant stem, showing wing markings and body detail"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/386540417/large.jpg'
              }}
            />
            <figcaption>
              The Checkered White resting on a stem. Adults spend time perching on bare ground
              or low vegetation between foraging and patrolling flights. Females spend much of
              their adult lifespan searching for host plants in open dry patches with sparse
              vegetation and warm soil.
              <span className="photo-credit"> CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            The Checkered White female evaluates host plants the same way the Cabbage White does:
            by pressing her feet against a leaf or stem and reading the plant's chemistry through
            tarsal receptors that detect glucosinolates, the sulfur-bearing compounds found in
            mustard-family plants. When the chemical signal matches, she deposits a single pale
            yellow egg on the leaf surface or stem.
          </p>
          <p>
            Her primary host plants are native mustard-family species that grow in open, dry,
            disturbed ground: field pepperweed (<em>Lepidium virginicum</em>), prairie
            peppergrass (<em>Lepidium densiflorum</em>), and related native species that
            volunteer along gravel edges, dry banks, and unmowed roadsides. These plants grow
            as biennials or annuals in disturbed soil — the exact conditions that produce open
            ground with low, sparse vegetation. They are also the plants most homeowners pull
            as weeds before they seed.
          </p>
          <p>
            The caterpillar feeds on leaves, flowers, and developing seed pods. It varies in
            color from green to yellowish-gray, with narrow stripes along the body, and is
            found most easily by checking stems and the underside of leaves on pepperweed
            plants in late spring and midsummer. The species overwinters as a pupa attached
            to plant debris in open ground, completing the cycle that begins when the first
            spring adults emerge in April.
          </p>
        </section>

        <section aria-labelledby="displacement-heading">
          <h2 id="displacement-heading">By 1920, the Checkered White had disappeared from most eastern gardens — the open fields where it once bred were now Cabbage White territory</h2>
          <p>
            Before European agricultural crops arrived at scale, open-ground mustard-family
            plants in eastern fields, dry prairies, and disturbed edges were the Checkered
            White's sole domain. It flew wherever there was open ground with sparse vegetation
            and native mustard-family volunteers: dry old fields, woodland clearings, riverbanks,
            the disturbed edges that formed wherever trees were cleared and left to regrow.
            In 1850, a walk through an eastern garden or farm field in late spring would have
            turned up Checkered Whites on the mustard patches — not Cabbage Whites.
          </p>
          <p>
            When Cabbage White arrived in Quebec around 1860, it came with two advantages the
            Checkered White lacked. First, it could use the introduced weedy brassicas that
            European settlement had distributed across the continent — garlic mustard, wild mustard,
            field pennycress, and Brassica crops grown on a scale that the native mustard-family
            flora never matched. The Checkered White prefers native pepperweeds and open dry
            ground; the Cabbage White thrives in dense brassica plantings and intensively managed
            agricultural land. Second, the Cabbage White was adapted to the crowded, high-density
            conditions of European garden agriculture — the same conditions that describe a
            vegetable garden in a suburban yard in 1890.
          </p>
          <p>
            The Checkered White did not disappear overnight. Entomological journals from the
            late 1800s document it as still present in eastern states. But by the early twentieth
            century, surveys show its contraction from gardens and agricultural fields toward the
            edges: coastal sand barrens, serpentine rock outcrops, and remnant dry prairies where
            introduced brassica weeds do not form dense stands and where the sparse, open conditions
            the Checkered White requires still exist. In the western United States and the Great
            Plains — where native dry-ground mustard species remain abundant in open semi-arid
            habitat and dense Brassica cultivation is less widespread — the Checkered White
            remains a common butterfly. In the east, it now survives in remnant patches of
            the habitat it once occupied everywhere.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Leave native pepperweed standing in the dry corner — and keep a patch of open, unmowed ground where the soil warms by mid-morning</h2>
          <ol className="step-list">
            <li>
              <strong>Leave field pepperweed (<em>Lepidium virginicum</em>) standing in dry open corners of the yard through August.</strong>{' '}
              Field pepperweed grows as a biennial or annual in disturbed dry soil — gravel edges,
              rocky banks, dry roadsides, and the dry strip between a driveway and a fence.
              Most homeowners pull it before it seeds. Let it complete its cycle: the plant flowers
              in May and June, sets flat disc-shaped seed pods by July, and seeds the same
              corner each year from that point on. Where pepperweed is left standing, it becomes
              a self-seeding perennial colony in the same patch of dry ground — and a Checkered
              White host plant in the one place in your yard that most resembles the open dry habitat
              this butterfly needs.
            </li>
            <li>
              <strong>Preserve a dry, open, south-facing strip of at least a few square feet with exposed soil or sparse ground cover.</strong>{' '}
              The Checkered White does not breed in shaded garden beds or moisture-retaining
              border plantings. A south-facing bank with bare soil between sparse plants,
              a gravel edge that stays dry through summer, or an unmowed strip along a fence
              in full sun provides the open flight space and warm ground that male Checkered
              Whites use to establish territory and that females need to warm up after cold
              nights in spring. An open dry patch that warms early in April can support the
              first emergence of the season.
            </li>
            <li>
              <strong>Hand-pick caterpillars on vegetable-garden brassicas rather than spraying the plants.</strong>{' '}
              A caterpillar on a kale leaf is easy to see and remove by hand. A spray application —
              even Bt, often marketed as selective — kills every caterpillar within reach, including
              Checkered White larvae feeding on native pepperweed at the garden edge ten feet away.
              Sprays carry beyond the crop row. Hand-picking on the brassica vegetables leaves the
              mustard-family volunteers at the yard edge undisturbed. See{' '}
              <button className="link-button" onClick={() => onNavigate('cabbage-white')}>
                Cabbage White
              </button>{' '}
              for the full case on hand-picking over spraying in vegetable gardens.
            </li>
            <li>
              <strong>Add native open-ground wildflowers adjacent to the dry patch to give adults nectaring plants close to breeding habitat.</strong>{' '}
              <button className="link-button" onClick={() => onNavigate('wild-bergamot')}>
                Wild Bergamot
              </button>{' '}
              and{' '}
              <button className="link-button" onClick={() => onNavigate('purple-coneflower')}>
                Purple Coneflower
              </button>{' '}
              both grow in dry to medium soil and bloom in July and August when multiple Checkered
              White broods are flying. Both attract a range of other native butterflies as well.
              Use{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>{' '}
              to find dry-soil native wildflowers matched to your region.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">In dry open fields and disturbed edges — who flies, breeds, and nectars alongside the Checkered White</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cabbage-white')}>
                Cabbage White
              </button>{' '}
              &mdash; the introduced butterfly that spread from Quebec to California between 1860
              and 1900, occupying every field and garden the Checkered White had used; both
              species use glucosinolate detection to find host plants, but the Cabbage White
              thrives in dense brassica plantings and introduced weedy mustards that favor
              intensive agriculture; reading both pages together tells the story of how one
              butterfly replaced another across a continent within living memory of the
              people who witnessed it
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('west-virginia-white')}>
                West Virginia White
              </button>{' '}
              &mdash; the other native eastern pierid that has contracted since 1860; while the
              Checkered White declined in open fields, the West Virginia White declined in
              woodland understory as garlic mustard spread through its host-plant habitat;
              both were common in the eastern United States before introduced plants and land
              use changes reduced their range to remnant patches
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('pearl-crescent')}>
                Pearl Crescent
              </button>{' '}
              &mdash; a small orange-and-black native butterfly that breeds in open sunny habitat
              with native asters; shares the unmowed open-ground preference of the Checkered
              White; an unmowed patch with asters and dry exposed soil supports both species,
              and Pearl Crescent is often one of the first visible signs that a yard's unmowed
              area is producing breeding results beyond nectar visitors
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('invasive-plants')}>
                Invasive Plants
              </button>{' '}
              &mdash; garlic mustard and introduced weedy brassicas support Cabbage White but
              are not the native open-ground hosts the Checkered White evolved with; removing
              garlic mustard from yard edges and wooded borders shifts the disturbed-ground
              plant community toward native mustard-family volunteers where they occur
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-bergamot')}>
                Wild Bergamot
              </button>{' '}
              &mdash; a native mint-family perennial that thrives in dry, open soil and blooms
              in midsummer when multiple Checkered White broods are flying; a patch of Wild
              Bergamot adjacent to open dry ground with pepperweed makes both breeding
              and adult feeding habitat available within a small yard
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Leave the native pepperweed. Leave the dry open corner unmowed.</strong>{' '}
            Those two decisions together reconstruct the habitat the Checkered White lost when
            every open field in the eastern United States was planted, paved, or kept cut.
            Find native open-ground wildflowers to plant adjacent in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or browse the full butterfly and open-ground species collection in the{' '}
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
