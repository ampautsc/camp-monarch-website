import type { Page } from '../App'

interface WildLupineProps {
  onNavigate: (page: Page) => void
}

export default function WildLupine({ onNavigate }: WildLupineProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/18285247/large.jpg"
          alt="Wild Lupine (Lupinus perennis) in full bloom — upright blue-violet flower spikes above palmate foliage with seven to eleven leaflets, Porter County, Indiana, May 2018"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/286145778/large.jpeg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: bouteloua&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/18285247" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>In May, a Karner Blue female flies low along a lupine stand, lands on a leaflet, and presses her abdomen to the leaf surface — each egg she lays will spend eleven months in the soil at the plant's base, waiting for the leaves to return</h1>
        <p className="hero__lead">
          Wild Lupine (<em>Lupinus perennis</em>) is a native perennial legume that grows knee-high
          in full sun on sandy, acidic soils. It blooms in May with upright spikes of blue-violet,
          pea-shaped flowers — typically the first large-flowered native perennial in the landscape
          to open each year. After blooming, the leaflets fan out into seven-to-eleven palmately
          arranged lobes on a rounded clump that persists through summer. In late June, the seed
          pods dry and split open with enough force to fling seeds several feet from the parent plant.
        </p>
        <p className="hero__lead">
          Wild Lupine is the only larval host plant for the Karner Blue butterfly
          (<em>Plebejus samuelis</em>), listed as federally endangered under the Endangered
          Species Act since 1992. The Frosted Elfin (<em>Callophrys irus</em>) uses Wild Lupine
          as its primary host in the pine barrens of New Jersey, Long Island, and coastal New
          England — the same populations that use Wild Blue Indigo in the Midwest are replaced
          here by populations dependent on Lupine. Both butterflies are absent from any site
          where Wild Lupine has been removed.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="karner-blue-heading">
          <h2 id="karner-blue-heading">The Karner Blue egg overwinters at the base of the host plant in a silk-lined chamber — when the plant is cleared from a site, the eggs laid there the previous summer hatch onto bare ground in spring</h2>
          <p>
            The Karner Blue completes two broods each season: adults fly in late May through early
            June, then again in late July through August. After mating, the female lays a single
            egg directly onto a lupine leaflet or on the soil and leaf litter near the stem base.
            The egg develops into a tiny first-instar larva that overwinters in the debris at the
            ground surface. In April, as the first lupine shoots push through the soil, the
            caterpillar hatches and begins feeding on the youngest, most tender leaflets.
          </p>
          <p>
            The caterpillar is attended by ants. Lycaenid caterpillars secrete a sugary fluid from
            a dorsal nectary organ on the seventh abdominal segment. Ants drink the secretion and
            in exchange patrol the caterpillar, driving off parasitoid wasps and predatory insects.
            A Karner Blue caterpillar without ant attendance faces higher parasitism rates. The ant
            species involved vary by site — Formica and Lasius species are documented attending
            Karner Blues in Great Lakes pine barrens.
          </p>
          <p>
            The Karner Blue was once found across a band of pine barrens, oak savannas, and sand
            flats from New England through the upper Midwest. It no longer occurs across most of
            that range. Remaining populations exist at managed sites in Michigan's Lower Peninsula,
            in the Albany Pine Bush in New York, in the Concord pine barrens in New Hampshire, and
            at restoration sites in Indiana and Wisconsin. The management practice keeping those
            populations alive is the same everywhere: prescribed fire or mechanical removal of
            woody vegetation to prevent canopy closure over the lupine stands. Without active
            management, oaks and shrubs shade out the lupine within ten to fifteen years.
          </p>
        </section>

        <section aria-labelledby="soil-heading">
          <h2 id="soil-heading">Wild Lupine grows only where the soil is sandy, acidic, and low in nutrients — the soils that were plowed, paved, or stabilized into turfgrass first as eastern land was developed</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/205496077/large.jpg"
              alt="Karner Blue butterfly (Plebejus samuelis) male on Wild Lupine — a small bright blue butterfly with thin black wing borders, Michigan, June 2022"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/286145778/large.jpeg'
              }}
            />
            <figcaption>
              The Karner Blue is a federally endangered butterfly whose caterpillar feeds only on
              Wild Lupine leaves. Its entire range in the northeast and Great Lakes region tracks
              lupine availability county by county — when the plant disappears from a site, the
              butterfly disappears with it.
              <span className="photo-credit"> CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            Wild Lupine requires soil with a pH between 5.0 and 6.5, coarse sand or gravel texture,
            and very low organic matter — conditions found naturally in pine barrens, glacial outwash
            plains, dry oak savannas, and exposed sandy roadsides. Attempts to grow it in loam or
            clay, or in amended soil with added compost, typically fail within two to three seasons
            as the roots rot in poorly drained, nitrogen-rich conditions.
          </p>
          <p>
            Like other legumes, Wild Lupine hosts <em>Bradyrhizobium</em> bacteria in root nodules
            that fix atmospheric nitrogen. In the lean, acidic soils where it grows naturally, this
            nitrogen-fixing capacity gives it an advantage over competing vegetation. In heavily
            amended garden beds, the surplus available nitrogen accelerates vegetative growth at the
            expense of flowering and destabilizes the root chemistry. Lupine planted in sandy,
            unamended soil in full sun blooms reliably each May. The same plant put in a
            compost-rich raised bed typically dies before its second season.
          </p>
          <p>
            In landscapes where the right conditions exist — sandy edges, dry south-facing slopes,
            gravel margins — Wild Lupine can spread naturally from seed. The explosive pod dehiscence
            flings seeds up to four or five feet from the parent plant in June and July. A planting
            that establishes in suitable conditions can expand into a colony of dozens of stems over
            five to ten years, providing enough leaf material to support both Karner Blue and Frosted
            Elfin caterpillars simultaneously in peak years.
          </p>
        </section>

        <section aria-labelledby="bloom-heading">
          <h2 id="bloom-heading">Blue-violet flower racemes open in May and the seed pods shatter in July — the explosive pod split flings seeds several feet from the parent plant</h2>
          <p>
            Wild Lupine blooms in May, two to four weeks before most native wildflowers. The flower
            spikes push up from the crown base in late April and open from the bottom of each spike
            upward over ten to fourteen days. The flowers are blue-violet, occasionally white or
            pink in certain populations, and carry the characteristic sweet fragrance of the pea
            family. Each flower is pollinated primarily by bumblebees — the keel petal that guards
            the reproductive structures requires a bee's body weight pressing down to spring open.
            Smaller bees visit without triggering pollination.
          </p>
          <p>
            After the flowers are pollinated, the plant produces flat, hairy seed pods that swell
            through June. In late June and July, the pods dry and the two valves twist suddenly,
            ejecting the brown seeds with a snapping sound audible close to the plant. Seeds land
            two to five feet from the parent. Where the soil conditions match — sandy, open, full
            sun — seeds germinate in spring and produce seedlings that grow slowly for the first
            two to three years while establishing the root system.
          </p>
          <p>
            The above-ground stems die back after the first hard frost. The root system persists
            through winter and sends up new stems each April. An established crown expands outward
            slowly and may persist in the same location for decades, producing the same blue-violet
            spikes every May.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant Wild Lupine in sandy, acidic, unamended soil — adding compost or fertilizer kills it faster than drought does</h2>
          <ol className="step-list">
            <li>
              <strong>Choose a site with sandy or gravelly, well-drained, acidic soil in full sun.</strong>{' '}
              Do not amend the soil with compost or any nitrogen source. Wild Lupine planted in
              organically rich soil typically fails before its second season. If your ground is
              loam or clay, look for a dry, open edge with natural lean conditions — a sandy bank,
              a gravel margin, or a south-facing slope where organic matter has not accumulated.
              The plant tolerates drought far better than it tolerates moisture and fertility.
            </li>
            <li>
              <strong>Plant nursery-grown transplants in spring rather than starting from seed.</strong>{' '}
              Wild Lupine seed requires scarification and cold stratification and produces slow
              first-year plants that often fail to compete with established vegetation. Native
              plant sales specializing in pine barren or savanna species typically carry
              established plants. Plant at crown depth, water through the first summer only, and
              do not mulch — bark mulch holds moisture and adds organic matter, both of which
              work against establishment.
            </li>
            <li>
              <strong>Leave the leaf litter at the base of the plant undisturbed from August through April.</strong>{' '}
              Karner Blue eggs overwinter in the soil and debris at the root crown. Clearing the
              ground beneath the plant in fall removes the overwintering generation. Leave old
              stems and litter in place through winter. Cut the dead stalks to the ground in late
              March, before new shoots emerge — not in autumn.
            </li>
            <li>
              <strong>Apply no insecticide — systemic or contact — to the plant or surrounding soil from April through August.</strong>{' '}
              Karner Blue and Frosted Elfin caterpillars are present on the plant during this
              entire window, often at sizes too small to see without deliberate searching. A
              contact spray applied to control aphids or Japanese beetle on nearby plants, or a
              systemic absorbed through the roots from soil treatment, kills caterpillars that are
              not visible to the person applying it.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who depends on Wild Lupine — the specialist butterflies whose presence anywhere in the landscape requires this plant to be present</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('frosted-elfin')}>
                Frosted Elfin
              </button>{' '}
              &mdash; lays on Wild Lupine flower buds and developing seed pods in May and early
              June; caterpillar feeds on floral tissue and immature seeds, not leaves; the
              northeast pine barren populations use Lupine as their host in the same role that
              Wild Blue Indigo plays in the Midwest; absent from any site where Lupine is absent
              or not blooming
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-blue-indigo')}>
                Wild Blue Indigo
              </button>{' '}
              &mdash; the companion legume for the Midwest; Frosted Elfin populations in Ohio,
              Indiana, and south use <em>Baptisia australis</em> rather than Lupine; both plants
              fix nitrogen, both attract queen bumblebees in May, and both host Wild Indigo
              Duskywing caterpillars on their leaves; planting both creates legume host plant
              coverage across the full eastern range of these specialists
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-indigo-duskywing')}>
                Wild Indigo Duskywing
              </button>{' '}
              &mdash; lays on Wild Lupine leaves in the northeast using the same host-selection
              chemistry it uses on Baptisia in the Midwest; caterpillar rolls a leaflet with silk
              and feeds from within it; a Lupine stand in a pine barren in May hosts both Duskywing
              caterpillars and Frosted Elfin caterpillars on the same plants simultaneously
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; queen bumblebees emerging from winter dormancy in April need early-blooming
              flowers immediately to fuel colony establishment; Wild Lupine's May bloom puts it
              among the first large-flowered native plants available; the keel petal requires a
              bumblebee's body weight to open, making bumblebees the primary effective pollinators
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Wild Lupine is the plant that keeps the Karner Blue alive at every site where the species still exists.</strong>{' '}
            Plant it in sandy, unamended full sun and leave the leaf litter undisturbed. See who
            else depends on native legumes in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            {' '}or browse the full plant network with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
