import type { Page } from '../App'

interface WildSennaProps {
  onNavigate: (page: Page) => void
}

export default function WildSenna({ onNavigate }: WildSennaProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/47750663/large.jpeg"
          alt="Wild Senna (Senna hebecarpa) in full bloom — clusters of five-petaled yellow flowers on a tall leafy stem, Illinois, August"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/88424300/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: sanguinaria33&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/47750663" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Wild Senna blooms in July with yellow flowers that hold no nectar — bumblebees grip the anthers and vibrate their flight muscles to shake pollen loose, a motion audible from a foot away.</h1>
        <p className="hero__lead">
          Wild Senna (<em>Senna hebecarpa</em>) is a native perennial wildflower that grows
          four to six feet tall in full sun across the eastern United States. It blooms from
          July into August with clusters of five-petaled yellow flowers, then holds its seed
          pods on standing stems through fall and winter. Cloudless Sulphur, Sleepy Orange,
          and Little Yellow caterpillars feed on the leaves. The Cloudless Sulphur caterpillar
          is green when it feeds on the leaves and yellow when it moves to the flowers —
          the same individual, two different colors, depending on what it is currently eating.
        </p>
        <p className="hero__lead">
          Unlike Partridge Pea, which is an annual that must reseed each year, Wild Senna
          is a perennial that returns from the same root crown each spring and grows
          larger over time. A planting in year one is a single stem. A planting in year
          five is a colony.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="anthers-heading">
          <h2 id="anthers-heading">The anthers are sealed tubes with pores at the tip — a bumblebee vibrating at 400 hertz opens them</h2>
          <p>
            Wild Senna flowers belong to a botanical category called pollen flowers: they produce
            pollen but no nectar. The five yellow petals form the recognizable flower shape, but
            there is nothing sweet inside. A bee visiting Wild Senna is there for pollen only.
          </p>
          <p>
            The mechanism that releases that pollen is unusual. The anthers are poricidal — they
            open through small pores at the tip rather than through the split-seam opening of most
            flowering plants. To open those pores, a bee must grip the anther cluster and vibrate
            its flight muscles while keeping its wings still. This technique is called sonication,
            or buzz pollination. The bumblebee produces a vibration near 400 hertz — a note close
            to G above middle C — and the pollen ejects through the anther pores in a fine cloud
            that collects on the bee's body. The sound is a short audible buzz, different from
            flight, repeated with each flower the bee visits.
          </p>
          <p>
            Honeybees cannot perform this technique. Only bumblebees and a subset of solitary bees
            with the right musculature can generate the necessary frequency while stationary. In a
            yard with Wild Senna in bloom, the bees working the flowers are almost always bumblebees.
            Their repeated visits leave the anthers dusted and the flowers intact — the petals persist
            for two to three days after a visit while the flower waits for additional pollinators.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">Green on the leaves, yellow on the flowers — the same caterpillar, different colors in the same week</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/544350224/large.jpg"
              alt="Wild Senna (Senna hebecarpa) compound leaves and immature seed pods, Ohio, July 2025"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/155016284/large.jpg'
              }}
            />
            <figcaption>
              Wild Senna compound leaves and developing seed pods in July. Cloudless Sulphur
              females distribute their eggs across multiple plants rather than concentrating
              them on a single stem — a patch of three to five Wild Senna plants gives females
              enough surface area to spread a clutch.
              <span className="photo-credit"> CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            Cloudless Sulphur caterpillars feed on Wild Senna, Maryland Senna (<em>Senna
            marilandica</em>), Partridge Pea, and other legumes in the genus <em>Chamaecrista</em>.
            Wild Senna is perennial and reaches full leafy mass earlier in the season than Partridge
            Pea, making it available to females arriving from the south before the annual has
            germinated. Where both plants grow together, females distribute eggs across both species.
          </p>
          <p>
            The color shift in the Cloudless Sulphur caterpillar is a documented response to diet.
            When the caterpillar feeds on leaves, the carotenoids and chlorophylls in the leaf
            tissue are incorporated into the cuticle, and the caterpillar's ground color is green
            with a yellow lateral stripe. When it moves to the flower clusters and feeds on the
            petals and sepals, the higher concentration of yellow carotenoids in the floral tissue
            pushes the body color toward yellow. Both phases appear simultaneously in a population —
            one caterpillar green on the leaves of the same plant where another caterpillar is
            yellow on the flowers above it.
          </p>
          <p>
            Sleepy Orange caterpillars use Wild Senna in the central and southern parts of the
            range, laying on younger leaflets through late summer. Little Yellow caterpillars also
            use it alongside other native legumes. A single Wild Senna plant in full summer growth
            may be hosting larvae from all three butterfly species at the same time.
          </p>
        </section>

        <section aria-labelledby="rootcrown-heading">
          <h2 id="rootcrown-heading">The root crown survives frost for decades — each spring the same crown sends up more stems than the year before</h2>
          <p>
            Wild Senna is a perennial. The above-ground stems die back after the first hard frost
            each autumn, but the root crown survives underground through winter. Each spring, new
            growth emerges from the same crown — more stems than the previous year, spreading
            outward from the center as the crown expands. A planting left undisturbed for a decade
            occupies a two-to-three-foot spread and supports eight to fifteen stems in full summer
            growth.
          </p>
          <p>
            This expansion is slow enough that it does not crowd other plants aggressively, but
            steady enough that the colony eventually becomes a substantial mass of leafy material.
            A Cloudless Sulphur female evaluating host plant material in August is looking for
            enough leafy surface area to distribute 200 to 300 eggs without overloading any single
            plant. A mature Wild Senna colony provides that surface area in a single garden corner.
          </p>
          <p>
            The standing stems from the previous season persist through winter, holding seed pods
            that split open and drop seeds through November and December. Song Sparrows, American
            Goldfinches, and Dark-Eyed Juncos open pods on the ground below the stems. In late
            winter, the old stems can be cut to the ground to clear the way for new growth in April.
            Until then, they function as a seed station for ground-foraging birds.
          </p>
        </section>

        <section aria-labelledby="site-heading">
          <h2 id="site-heading">Average to moist soil, full sun — the wetter spots where Partridge Pea does not survive</h2>
          <p>
            Wild Senna tolerates a range of soil conditions that Partridge Pea cannot. Partridge Pea
            requires dry, well-drained, lean soil — it rots in clay or in sites that hold water.
            Wild Senna grows naturally along stream banks, in wet meadows, and at woodland edges
            where the soil stays moist through midsummer. In a yard, this means it fits the wetter
            end of a garden bed: the clay border that drains slowly after rain, the low spot near
            a downspout outlet, or the moist edge of a rain garden.
          </p>
          <p>
            As a legume, Wild Senna fixes nitrogen in root nodules through a partnership with
            <em> Rhizobium</em> bacteria. A planting in compacted or depleted soil improves the
            nitrogen content each season as root nodule material breaks down. No supplemental
            fertilization is needed, and in rich garden soil it may push extra leaf growth at
            the expense of flower production.
          </p>
          <p>
            Start from nursery transplants rather than seed. Wild Senna seed requires cold
            stratification and produces slow-growing first-year plants that often fail to compete
            with established vegetation. A transplant placed in spring at crown depth establishes
            within one season and produces its first flowers in year two. Water through the first
            season. After establishment, irrigation is not necessary in the eastern United States
            except during prolonged drought.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant Wild Senna in a moist, sunny spot — three sulphur species lay eggs there, and bumblebees work the flowers all summer</h2>
          <ol className="step-list">
            <li>
              <strong>Start with nursery transplants in spring.</strong>{' '}
              Wild Senna seed requires cold stratification and produces unreliable first-year
              seedlings. Transplants from a native plant nursery establish more predictably and
              flower in year two. Look for it under the name Wild Senna, American Senna, or
              Senna hebecarpa at native plant sales and nurseries from April through June.
            </li>
            <li>
              <strong>Pair it with Partridge Pea in the same bed.</strong>{' '}
              Partridge Pea prefers dry, lean, well-drained soil — the opposite of Wild Senna's
              preference. Planting both legumes in the same garden bed, positioned to match each
              plant to its preferred moisture zone, extends the available host plant material from
              spring germination of Partridge Pea through fall seed drop of Wild Senna. Cloudless
              Sulphur females arriving from the south in June find Wild Senna leaves ready before
              Partridge Pea is established. By August, both plants are available simultaneously.
              See the{' '}
              <button className="link-button" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea plant profile
              </button>
              .
            </li>
            <li>
              <strong>Leave the stems standing through December.</strong>{' '}
              The seed pods mature on the standing stems in September and split through November.
              Song Sparrows, Dark-Eyed Juncos, and American Goldfinches open them on the ground
              below. Cloudless Sulphur adults moving south in September stop to nectar at the
              remaining flowers before the stems close out for the season. Cut stems to the ground
              in late winter before new growth emerges — not in fall.
            </li>
            <li>
              <strong>Do not apply insecticide to the foliage from June through September.</strong>{' '}
              Cloudless Sulphur caterpillars develop on Wild Senna leaves and flowers from early
              June through late September. A contact spray or a systemic insecticide absorbed
              through the roots eliminates caterpillar development on that plant for the rest of
              the season. If pest control is scheduled near the planting, check whether the
              spray zone reaches the Wild Senna before treatment.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who arrives at Wild Senna — the butterflies that depend on it and the ones that pass through it</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cloudless-sulphur')}>
                Cloudless Sulphur
              </button>{' '}
              &mdash; lays a single egg per leaflet and distributes the clutch across multiple
              Wild Senna plants; the caterpillar that hatches is green when eating leaves and
              yellow when eating flowers, the color determined by which plant part is currently
              in the diet; adults returning south in September nectar at the same plant that
              hosted their larval development weeks earlier
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('sleepy-orange')}>
                Sleepy Orange
              </button>{' '}
              &mdash; uses Wild Senna as a primary host plant in the central and southern parts
              of the range; a female presses her tarsi to the same leaflets a Cloudless Sulphur
              female is evaluating in the same hour; both species may deposit eggs on the same
              Wild Senna stem in the same week in July
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('little-yellow')}>
                Little Yellow
              </button>{' '}
              &mdash; the smallest of the three sulphur species that use Senna as a host plant;
              caterpillars may be developing alongside Cloudless Sulphur and Sleepy Orange on
              the same Wild Senna stems from June through September; females arrive from the
              south each summer and need legume leaflets already growing when they arrive
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; the annual legume companion plant that extends host plant availability
              through the full summer season; Partridge Pea germinates early and carries host
              plant material from May; Wild Senna adds perennial persistence and size; the two
              plants serve the same sulphur species at the same time from the same garden bed
              if their soil preferences — dry for Partridge Pea, moist for Wild Senna — are
              matched to the site
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; the primary pollinator of Wild Senna flowers; the bumblebee grips the anther
              cluster and vibrates its flight muscles to open the poricidal anthers, shaking out
              pollen in a short audible buzz; honeybees visit the flowers but cannot perform this
              technique and leave without collecting pollen; an American Bumble Bee working a
              Wild Senna patch in July can be heard from a few feet away
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('orange-sulphur')}>
                Orange Sulphur
              </button>{' '}
              &mdash; uses Wild Senna as a host plant in the wild alongside Cloudless Sulphur;
              female Orange Sulphurs evaluate the leaves with tarsal chemoreceptors and lay on
              the same plants Cloudless Sulphur females are visiting; both sulphur species may
              deposit eggs on the same Wild Senna plant in the same week
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('canada-goldenrod')}>
                Canada Goldenrod
              </button>{' '}
              &mdash; blooms in September as Wild Senna seed pods are maturing; Cloudless Sulphur
              adults that emerged from Wild Senna caterpillars in July and August stop to nectar
              on goldenrod before moving south; a yard with both plants supports the same individual
              butterfly from caterpillar stage through southward migration
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Wild Senna fills the wet, sunny spot that most legumes won't tolerate.</strong>{' '}
            It returns from the same root crown every spring, gets larger each year, and hosts
            three butterfly species through summer. Browse its companion legumes in{' '}
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
