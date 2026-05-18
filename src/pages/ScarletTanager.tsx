import type { Page } from '../App'

interface ScarletTanagerProps {
  onNavigate: (page: Page) => void
}

export default function ScarletTanager({ onNavigate }: ScarletTanagerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Scarlet_tanager_in_GWC_%2850867%29.jpg/1280px-Scarlet_tanager_in_GWC_%2850867%29.jpg"
          alt="Male Scarlet Tanager perched among spring leaves — the body is all-over crimson, the wings and tail jet black, the contrast visible from forty feet away through binoculars"
          className="species-hero-image"
          style={{ objectPosition: 'center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Scarlet_tanager_in_GWC_(50867).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Scarlet Tanager</h1>
        <p className="hero__lead">
          The male Scarlet Tanager arrives in Ohio in May burning a red so
          saturated that most people who see one for the first time assume they
          have seen something escaped from a zoo. By September, every red
          feather on his body will have been replaced by olive-green. He will
          look like his mate. He will cross the Caribbean in that disguise.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="molt-heading">
          <h2 id="molt-heading">Red in May, olive by September: the molt calendar</h2>
          <p>
            The Scarlet Tanager (<em>Piranga olivacea</em>) is a mid-sized
            songbird — 6.5 to 7.5 inches, weighing on average 25 grams during
            the breeding season, roughly the weight of five nickels. The
            breeding male is all-over crimson with jet-black wings and tail.
            The female is olive-yellow above and yellowish below, her wings
            slightly dusky. Both sexes sing from high in the canopy, often
            invisible even to the binocular.
          </p>
          <p>
            By late August, before migration, the male replaces every red body
            feather with olive-green. The wings and tail remain dark, but the
            body matches his mate exactly. The same day-length cues that
            triggered breeding in May — detected through photoreceptors in the
            brain — now trigger the hormonal cascade that begins molt. The bird
            grows the disguise automatically, without reference to choice.
          </p>
          <p>
            A male Scarlet Tanager in your shrubs in late September looks
            nothing like the bird that sang from your oak canopy in May. The
            olive bird is the same individual. He has already begun the trip
            south.
          </p>
        </section>

        <section aria-labelledby="migration-heading">
          <h2 id="migration-heading">26 grams of fat, 600 miles over open water</h2>
          <p>
            The Scarlet Tanager winters in the foothills of the Andes — in
            Colombia, Ecuador, Bolivia, and Peru — 3,000 or more miles from
            its breeding grounds in the eastern United States. The spring trip
            from South America to Ohio requires crossing the Gulf of Mexico: 600
            miles of open water with no land within reach.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Piranga_olivacea1.jpg"
              alt="Male Scarlet Tanager in late-summer molt transition — patches of olive-green replacing the crimson body feathers while the wings remain jet black"
              loading="lazy"
            />
            <figcaption>
              By late August, the male has begun replacing red body feathers
              with olive-green — the same coloration as the female. The wings
              and tail stay dark, but the body becomes indistinguishable from
              his mate&apos;s. The molt is triggered by the same day-length
              mechanism that ended breeding. Before migration, a healthy bird
              can nearly double its body weight in subcutaneous fat, stored
              in the days before departure, used entirely as fuel for the
              Gulf crossing.
              <span className="photo-credit"> Photo: Steve Maslowski&nbsp;·&nbsp;USFWS, public domain via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Before the spring crossing, a Scarlet Tanager can nearly double
            its body weight in subcutaneous fat, stored in the days before
            departure — from around 26 grams to close to 50. The fat is
            visible under the skin above the legs of a healthy pre-migratory
            bird. That fat is the only fuel for the Gulf crossing, completed
            overnight in a single unbroken flight.
          </p>
          <p>
            A bird that arrives on its breeding grounds lean — because it
            could not refuel at quality stopover sites in the Southeast —
            begins nesting later and with lower energy reserves. Research
            tracking individuals via light-level geolocators shows that
            tanagers from higher-quality wintering territories arrive
            consistently earlier and produce more young per season. Studies
            measuring this gap found differences of less than two weeks
            between early and late arrivers — but two weeks at the start of
            a breeding season that spans six weeks is roughly a third of it.
          </p>
        </section>

        <section aria-labelledby="area-heading">
          <h2 id="area-heading">10 hectares, minimum — and why edges don&apos;t count</h2>
          <p>
            For a viable Scarlet Tanager breeding population, ornithologists
            have established a minimum forest patch size of 10 to 12
            hectares — about 25 to 30 acres — of contiguous forest. Multiple
            studies measuring breeding density against forest patch size across
            the eastern United States found that below 10 hectares, breeding
            success dropped sharply toward zero.
          </p>
          <p>
            The mechanism is brown-headed cowbird parasitism. Cowbirds are
            brood parasites: they lay their eggs in other birds&apos; nests and
            let the hosts raise their offspring. Cowbirds follow agricultural
            and suburban edges. They can penetrate forest from an edge for up
            to 300 meters. In a 10-hectare forest patch that is roughly
            circular, almost no point is more than 175 meters from an edge.
            Every Scarlet Tanager nest in that patch sits within cowbird range.
          </p>
          <p>
            In a large, unbroken tract — 200 hectares or more — interior
            nests are beyond the 300-meter penetration distance. Cowbird
            parasitism rates in forest interior run under 5% for Scarlet
            Tanager. In fragmented suburban patches, the same studies find
            rates of 60 to 80%.
          </p>
          <p>
            A pair in forest interior can produce three or four fledglings
            from a successful nest. A pair in a fragmented suburban patch
            facing 70% cowbird parasitism produces fewer than one per season.
            The North American Breeding Bird Survey has tracked Scarlet
            Tanager populations since 1966. The species has declined by
            roughly 38% — approximately 1% per year — with the steepest
            losses concentrated in the eastern portion of its range, where
            forest fragmentation is most advanced.
          </p>
        </section>

        <section aria-labelledby="oak-heading">
          <h2 id="oak-heading">534 caterpillar species per oak, fewer than 10 per Norway maple</h2>
          <p>
            Scarlet Tanagers feed primarily on insects during the breeding
            season — caterpillars, beetles, wasps, and other invertebrates
            gleaned from leaves and bark in the canopy and midstory, plus
            occasional aerial sallies to catch flying insects. A pair raising
            four nestlings makes a food delivery every few minutes for 13 to
            14 days straight. The caterpillar supply has to exist continuously
            at scale across the entire foraging territory.
          </p>
          <p>
            Native oaks (<em>Quercus</em> spp.) are the primary substrate.
            Analysis of host-plant records from Lepidoptera literature
            documents that a single native oak species supports 534 or more
            caterpillar species through recorded host-plant relationships with
            native moths and butterflies. Norway maple — one of the most
            commonly planted suburban street and yard trees — supports fewer
            than 10. Callery pear supports fewer than 5. A canopy layer of
            Norway maples produces a fraction of the caterpillar biomass that
            the same area of native oaks would generate in the same six-week
            period.
          </p>
          <p>
            In late summer, before the southbound crossing, Scarlet Tanagers
            shift to native fruit — wild cherries, serviceberries, elderberries,
            and flowering dogwood berries — to build the fat reserves that fuel
            migration to South America. Yards and neighborhoods with native
            shrubs that ripen fruit in July and August are refueling sites. A
            yard with none of them is a yard the bird crosses without stopping.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Mature native trees kept, native oaks planted, late-summer fruiting shrubs, and no canopy insecticides</h2>
          <ol className="step-list">
            <li>
              <strong>Keep every mature native tree.</strong>{' '}
              The Scarlet Tanager nests and forages in the canopy — it requires
              trees tall enough to produce the closed-canopy microclimate of
              forest interior. A mature native oak, tulip poplar, or black
              cherry is the single most productive habitat unit for this species
              in a suburban landscape. It cannot be replaced in a generation.
              Do not remove it. Do not heavily prune it into a shape that
              eliminates canopy closure.
            </li>
            <li>
              <strong>Plant native oaks if you don&apos;t have one.</strong>{' '}
              A white oak (<em>Quercus alba</em>) planted today reaches
              functioning caterpillar-producing capacity in 10 to 15 years.
              Bur oak (<em>Q. macrocarpa</em>) tolerates compacted soil and
              urban conditions better than most other oaks. Chinkapin oak
              (<em>Q. muehlenbergii</em>) handles drier, limestone-influenced
              sites. Any native oak planted now increases the caterpillar supply
              this species depends on — not this year, but reliably across every
              year the tree grows.
            </li>
            <li>
              <strong>Plant native shrubs with fruit ripening July through September.</strong>{' '}
              Serviceberry (<em>Amelanchier</em> spp.), elderberry{' '}
              (<em>Sambucus canadensis</em>), and native dogwoods{' '}
              (<em>Cornus</em> spp.) all ripen fruit before or during early
              southbound migration. Spicebush (<em>Lindera benzoin</em>) ripens
              in September. These are the shrubs that fuel the trip to South
              America. A yard with none of them offers the bird nothing at
              departure. A yard with several of them is a refueling station on
              a 3,000-mile route.
            </li>
            <li>
              <strong>Eliminate insecticide applications in the canopy zone.</strong>{' '}
              Broad-spectrum sprays — mosquito services, tree injections for
              scale insect control, lawn-care systemics — reduce caterpillar
              populations for weeks following application. A single spray-service
              pass can eliminate the caterpillar supply a breeding pair depends
              on for the final days of nestling growth. The Scarlet Tanager
              cannot supplement what the canopy has lost mid-season.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighborhood-heading">
          <h2 id="neighborhood-heading">Why a neighborhood matters when a single yard doesn&apos;t</h2>
          <p>
            A typical suburban yard is 0.1 to 0.25 acres — far smaller than
            the 25 acres of contiguous forest a Scarlet Tanager pair needs to
            breed successfully. A single yard, however well planted, is not
            breeding habitat for this species. But a neighborhood is not a
            collection of single yards.
          </p>
          <p>
            A block of 50 adjacent suburban properties, each maintaining
            mature trees and native understory, covers 5 to 12 connected acres.
            A dozen such blocks, loosely connected by corridors of yard trees
            and green spaces, approaches the minimum threshold. The cumulative
            decisions of homeowners along a forest edge — which trees to
            remove, which to keep, whether to plant oaks or ornamentals —
            determine whether the landscape functions as connected forest or
            as isolated fragments too small to support breeding.
          </p>
          <p>
            The Scarlet Tanager does not know what a backyard is. It reads
            canopy density, caterpillar supply, and the distance between its
            nest and the nearest clearing where cowbirds wait. The aggregate
            of what homeowners plant and remove determines what it finds.
          </p>
        </section>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who shares this canopy</h2>
          <p>
            The Scarlet Tanager breeds in the same large-forest-interior tracts
            that several other declining species require — species that
            disappear from fragmented suburban landscapes for the same
            cowbird and caterpillar reasons.
          </p>
          <ul>
            <li>
              <button className="link-button" onClick={() => onNavigate('wood-thrush')}>
                Wood Thrush
              </button>
              {' — '}Forages the forest floor below the canopy where Scarlet Tanager feeds above;
              shares the same cowbird pressure and caterpillar supply.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('eastern-wood-pewee')}>
                Eastern Wood Pewee
              </button>
              {' — '}Flycatches in the midstory of the same continuous forest interior; population has fallen over 30% since 1970.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('brown-creeper')}>
                Brown Creeper
              </button>
              {' — '}Spirals up the same large tree trunks reading bark crevices while the tanager reads the canopy leaves above.
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to build canopy habitat?</strong>{' '}
            Start with native trees and shrubs using{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , understand what makes forest interior different from forest edge in the{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-layers')}>
              Habitat Layers guide
            </button>
            , and remove the invasive understory shrubs that fragment the forest floor with the{' '}
            <button className="link-button" onClick={() => onNavigate('invasive-plants')}>
              Invasive Plants guide
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
