import type { Page } from '../App'

interface WildBlueIndigoProps {
  onNavigate: (page: Page) => void
}

export default function WildBlueIndigo({ onNavigate }: WildBlueIndigoProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/91520798/large.jpeg"
          alt="Wild Blue Indigo (Baptisia australis) in full bloom — upright racemes of blue-violet pea-shaped flowers above rounded blue-green foliage, Gogebic County, Michigan, June"
          className="species-hero-image"
          style={{ objectPosition: 'center 35%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/8193465/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: jokurtz&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/91520798" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Wild Blue Indigo leaves carry alkaloids that most insects cannot break down — the Wild Indigo Duskywing evolved the chemistry to tolerate them, and lays its eggs on Baptisia leaves and on nothing else.</h1>
        <p className="hero__lead">
          Wild Blue Indigo (<em>Baptisia australis</em>) is a native perennial legume that grows
          two to four feet tall in full sun across the eastern United States. It blooms in May
          with upright spikes of blue-violet, pea-shaped flowers before most native wildflowers
          are open. After blooming, the plant fills out into a rounded mound of blue-green foliage
          that persists through summer, then forms inflated black seed pods that remain on the
          standing stems through fall and winter. The same root crown, once established, returns
          each spring for decades.
        </p>
        <p className="hero__lead">
          Wild Blue Indigo is a legume. Its roots house <em>Rhizobium</em> bacteria in nodules
          that capture nitrogen from the air and convert it to a form the plant and surrounding
          soil can use. A planting in depleted or compacted ground improves soil nitrogen each
          season without fertilizer. Thirty years from now, the same crown is still in the same
          spot, still fixing nitrogen, still leafing out in May.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="duskywing-heading">
          <h2 id="duskywing-heading">The Wild Indigo Duskywing finds host plants by tasting the leaf surface with its feet — when Baptisia disappears from a county, the duskywing disappears with it</h2>
          <p>
            Wild Indigo Duskywing (<em>Erynnis baptisiae</em>) is a skipper butterfly whose
            caterpillar feeds primarily on plants in the genus <em>Baptisia</em>. The female
            locates host plants using chemoreceptors in her tarsi — she walks across the leaf
            surface and tastes its chemistry before committing to lay. She deposits a single
            egg on the upper surface of a young leaflet. The caterpillar that hatches rolls
            a leaflet with silk to form a shelter and feeds from within it.
          </p>
          <p>
            This dependence on <em>Baptisia</em> means the duskywing tracks Baptisia availability
            across the landscape. As native prairies and meadows were converted to turf and
            cropland, Wild Blue Indigo was removed from large portions of its historic range.
            Duskywing populations contracted in parallel. Where the plant persists — in prairie
            remnants, along roadsides with native vegetation, and in residential yards — the
            duskywing persists too. A yard with an established Wild Blue Indigo planting is a
            potential colony site for a butterfly species that has few other options in a
            developed landscape.
          </p>
          <p>
            The Frosted Elfin (<em>Callophrys irus</em>) is a second specialist. This small
            hairstreak lays on Wild Blue Indigo flower buds and developing seed pods in May.
            Its caterpillar feeds on floral tissue and immature seeds rather than leaves. The
            Frosted Elfin has lost substantial range as Baptisia populations were removed from
            developed land; its presence in a yard becomes possible only after Wild Blue Indigo
            has been planted and allowed to bloom annually for a season or two.
          </p>
        </section>

        <section aria-labelledby="taproot-heading">
          <h2 id="taproot-heading">The taproot reaches several feet deep in the first few growing seasons — the crown it anchors will produce flowers in the same location for decades</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/386686299/large.jpeg"
              alt="Wild Blue Indigo (Baptisia australis) inflated black seed pods on standing stems, Bedford County, Virginia, fall"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/74031431/large.jpeg'
              }}
            />
            <figcaption>
              Wild Blue Indigo seed pods in fall — the pods inflate after flowering, then dry
              to a woody black shell that rattles audibly when shaken. They remain on the
              standing stems through winter, releasing seeds and providing stem structure
              for insects that overwinter in hollow cavities.
              <span className="photo-credit"> CC BY via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            Wild Blue Indigo develops a deep, woody taproot that makes the plant drought
            tolerant once established and very difficult to transplant after a few growing
            seasons. The root system is why planting location matters from the start: choose
            the spot before you plant, place it correctly, and plan to leave it there. Moving
            a five-year-old crown disrupts enough root mass to set the plant back significantly.
          </p>
          <p>
            The crown expands slowly each year. In year one, a transplant produces a modest
            set of stems. By year three, the crown has spread and the plant delivers a full
            flowering display. By year ten, it has reached two to three feet wide and sends
            up several dozen flower spikes in May. Unlike annuals that must be replanted, or
            short-lived perennials that thin out after five or six years, Wild Blue Indigo
            compounds — each successive year's display is larger than the previous one.
          </p>
          <p>
            The above-ground stems die back after the first hard frost. The inflated black
            pods persist on the standing stalks through fall and into winter, releasing seeds
            that fall below the plant. Ground-feeding birds including Dark-Eyed Juncos and
            Song Sparrows work the fallen seeds through late autumn. The hollow old stems
            provide overwintering sites for small native bees that nest in stem cavities.
            Cut the old stems to the ground in late March, before new growth pushes from
            the crown base.
          </p>
        </section>

        <section aria-labelledby="bloom-heading">
          <h2 id="bloom-heading">The flower spikes open in May before most native wildflowers are up — queen bumblebees freshly out of winter dormancy arrive within the first week</h2>
          <p>
            Wild Blue Indigo is among the earliest-blooming native perennials in the eastern
            garden. The flower spikes push up in mid-April and open their blue-violet,
            pea-shaped flowers from late April through early June, depending on latitude.
            In a landscape where most native wildflowers have not yet leafed out, Wild Blue
            Indigo is already in full bloom.
          </p>
          <p>
            The flower structure is built for long-tongued pollinators. The lower petal forms
            a keel that encloses the stamens and pistil; a visiting bee must press its weight
            onto the keel to access the reproductive parts inside. Bumblebees — queen bees
            establishing new colonies in spring and workers in established colonies through
            summer — are the primary effective pollinators. Eastern Bumblebees, Brown-Belted
            Bumblebees, and Two-Spotted Bumblebees are all documented visitors. Smaller bees
            can reach the nectar without triggering pollination. The flowers produce nectar,
            unlike Wild Senna's poricidal flowers which offer only pollen.
          </p>
          <p>
            After the three-week bloom period ends, the plant remains in the garden as a
            rounded blue-green mound through summer. The foliage is available to Wild Indigo
            Duskywing caterpillars from the time the leaves emerge in April through late
            summer. Gray Hairstreak females visit the leaves, flowers, and developing pods
            from late spring through midsummer, using Wild Blue Indigo as one of their
            several host plant species across the landscape.
          </p>
          <p>
            The foliage is deer resistant. The same quinolizidine alkaloids that most insects
            cannot process also discourage deer from browsing the stems. In landscapes with
            high deer pressure that prevent other native plants from establishing, Wild Blue
            Indigo typically holds.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant Wild Blue Indigo in a spot it can keep — the taproot it builds in the first two seasons cannot be moved without setback</h2>
          <ol className="step-list">
            <li>
              <strong>Choose the site before you buy.</strong>{' '}
              Wild Blue Indigo develops a deep taproot within the first two growing seasons.
              After that, transplanting disrupts enough of the root system to set the plant
              back significantly. Select full sun and well-drained to average soil. Avoid
              low spots that stay wet through winter. The plant tolerates lean, dry soil once
              established — it does not need amended or fertilized ground.
            </li>
            <li>
              <strong>Start with a nursery transplant in spring.</strong>{' '}
              Wild Blue Indigo seed requires scarification and cold stratification and
              produces slow first-year plants that often fail to compete with established
              vegetation. Nursery transplants from native plant sales flower in one to
              two seasons. Look for it under Wild Blue Indigo, Blue Wild Indigo, or
              <em> Baptisia australis</em>. Plant at crown depth — not deeper — and
              water through the first season. Irrigation is not needed after establishment
              in the eastern United States except during prolonged drought.
            </li>
            <li>
              <strong>Leave the seed pods and stems standing through winter.</strong>{' '}
              The inflated black pods release seeds and rattle on the standing stalks through
              fall and winter, providing food for ground-foraging birds and stem cavities for
              native bees that overwinter in hollow plant stems. Cut the old stalks to the
              ground in late March, before new growth emerges from the crown base — not in
              fall after the first frost.
            </li>
            <li>
              <strong>Do not apply insecticide on or near the foliage from April through September.</strong>{' '}
              Wild Indigo Duskywing caterpillars develop inside rolled leaflets on Wild Blue
              Indigo from late May through late summer. Frosted Elfin caterpillars feed on
              flower buds and developing pods in May and June. Gray Hairstreak larvae may
              be present through summer. A contact spray or a systemic insecticide absorbed
              through the roots eliminates all three at any developmental stage.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who finds Wild Blue Indigo — the specialists whose range tracks this plant, and the generalists who add it to a longer list</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-indigo-duskywing')}>
                Wild Indigo Duskywing
              </button>{' '}
              (<em>Erynnis baptisiae</em>)
              &mdash; a skipper that finds host plants by tasting the leaf surface with its
              feet; caterpillars feed inside rolled leaflets from late May through summer;
              populations in any given county track <em>Baptisia</em> availability directly;
              absent from landscapes where Wild Blue Indigo is absent
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('frosted-elfin')}>
                Frosted Elfin
              </button>{' '}
              (<em>Callophrys irus</em>)
              &mdash; a small hairstreak butterfly that lays on Wild Blue Indigo flower
              buds and developing seed pods in May; caterpillar feeds on floral tissue and
              immature seeds rather than leaves; range has contracted alongside the loss of
              native <em>Baptisia</em> populations; can establish a yard colony once Wild
              Blue Indigo has been growing and blooming for a season or two
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('gray-hairstreak')}>
                Gray Hairstreak
              </button>{' '}
              &mdash; a generalist whose caterpillars feed on flowers and developing seeds
              of dozens of plant species; females select Wild Blue Indigo flower clusters
              in May and June alongside clover, goldenrod, and other legumes; the same
              female may lay on Baptisia in the morning and on a different species the
              same afternoon
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; queen bumblebees emerging from winter dormancy in April need
              early-blooming native flowers immediately to fuel colony establishment;
              Wild Blue Indigo's May bloom makes it one of the first large-flowered
              native plants available; the keel petal that guards the flower's interior
              requires a bumblebee's weight to open — smaller bees visit without
              triggering pollination
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-senna')}>
                Wild Senna
              </button>{' '}
              &mdash; the companion legume for July and August; Wild Blue Indigo provides
              larval host material from May into early summer, Wild Senna picks up that
              role through late summer for Cloudless Sulphur, Sleepy Orange, and Little
              Yellow; planting both legumes in the same bed maintains available host plant
              material from early May through September
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; the annual legume companion that extends host plant diversity into
              dry, lean, well-drained soil where Wild Blue Indigo grows but does not
              dominate; all three legumes — Baptisia, Wild Senna, and Partridge Pea —
              host different specialist butterfly species and together cover the full
              summer with larval material from late May through September
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Wild Blue Indigo is the plant that keeps the Wild Indigo Duskywing alive in your county.</strong>{' '}
            One crown, planted once and left in place, can support generations of a specialist
            butterfly with nowhere else to go. Browse companion plants in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or explore all the species that depend on native plants in the{' '}
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
