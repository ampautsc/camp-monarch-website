import type { Page } from '../App'

interface WildColumbineProps {
  onNavigate: (page: Page) => void
}

export default function WildColumbine({ onNavigate }: WildColumbineProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/488878925/large.jpg"
          alt="Wild Columbine in bloom — red and yellow downward-facing spurred flowers at Palisades Interstate Park, New Jersey, April 2025"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: ryman56&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/271769137" target="_blank" rel="noopener noreferrer">iNaturalist obs. 271769137</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>A Ruby-throated Hummingbird arrives in April, fuel-depleted from crossing the Gulf.<br />Wild Columbine blooms in April. Almost nothing else does.</h1>
        <p className="hero__lead">
          Wild Columbine (<em>Aquilegia canadensis</em>) is a native wildflower that opens in
          April and May across most of eastern North America. Its red, downward-facing spurs
          hold nectar at the base of tubes roughly 15 to 20 mm deep — a length that fits a
          Ruby-throated Hummingbird's bill but excludes most bees. When hummingbirds
          arrive in midwestern yards in mid-April, before milkweed, coneflower, or
          bergamot has opened, Wild Columbine may be the only native nectar source in a
          garden that flowers that week.
        </p>
        <p className="hero__lead">
          The plant grows in partial to full shade, spreads by seed across rocky slopes and
          woodland edges, and reaches one to three feet tall. It goes dormant by midsummer —
          two months of bloom that open in April, when hummingbirds arrive and almost no
          other native plant has flowered.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="hummingbird-heading">
          <h2 id="hummingbird-heading">Red, downward-facing tubes — the flower's shape tells you who it was shaped for</h2>
          <p>
            Ruby-throated Hummingbirds hover while feeding, inserting their bills upward
            into downward-hanging flowers. Wild Columbine's spurs hang down. The interior
            of each spur narrows to a nectar pool at the base — bees cannot reach it from
            the entrance, and most butterflies cannot hover long enough to collect it. The
            hummingbird can, and does.
          </p>
          <p>
            Columbine's red pigment also tells you which visitors the flower was shaped
            to attract. Bees see poorly in the red wavelengths; hummingbirds see them well.
            A Wild Columbine flowering in April is, from a bee's perspective, nearly
            invisible. From a hummingbird's perspective, it registers as clearly as a
            traffic light.
          </p>
          <p>
            Ruby-throated Hummingbirds cross the Gulf of Mexico without stopping —
            roughly 500 miles of open water, typically overnight. They arrive in the
            southern United States in late March and move north through April. The
            leading edge of that migration reaches the Midwest in mid-April. Wild Columbine
            peaks in bloom at the same time.
          </p>
        </section>

        <section aria-labelledby="duskywing-heading">
          <h2 id="duskywing-heading">Columbine Duskywing eggs on Aquilegia leaves — no substitute plant in the eastern US</h2>
          <p>
            The Columbine Duskywing (<em>Erynnis lucilius</em>) is a small, brown skipper
            butterfly whose caterpillars eat only <em>Aquilegia</em> foliage. In the
            eastern United States, Wild Columbine is the only native <em>Aquilegia</em>
            species. Female Columbine Duskywings lay eggs on the leaves in April and May,
            and the larvae feed through several instars before pupating in leaf litter at
            the base of the plant.
          </p>
          <p>
            The adult butterflies fly in a single annual generation — April and May —
            the same window as Wild Columbine's bloom. They nectar from columbine and
            from spring ephemerals like violets and spring beauties. Adults live only a
            few weeks. For a butterfly with one flight period per year and one larval host
            plant, the question of whether a yard has columbine is the question of whether
            the butterfly can reproduce there.
          </p>
          <p>
            Columbine Duskywings fly in April and May and are easily overlooked — small,
            fast, and the color of dead bark. Their range in the eastern US has contracted
            in areas where second-growth shrubland and open woodland understory — Wild
            Columbine's natural habitat — have given way to mowed lawn or closed-canopy
            forest that shades out the plant.
          </p>
        </section>

        <section aria-labelledby="bloom-heading">
          <h2 id="bloom-heading">April and May — six weeks before the first milkweed flowers open</h2>
          <p>
            Wild Columbine blooms from mid-April through late May across most of its range.
            Common milkweed's flower clusters do not open until mid-June. The six weeks
            between columbine's peak and milkweed's first bloom are a gap in most native
            gardens.
          </p>
          <p>
            Spring Azure butterflies (<em>Celastrina ladon</em>), whose first generation
            flies in April and May, visit Wild Columbine for nectar. Bumblebee queens
            emerging in late April also visit — though many cut a hole in the base of the
            spur rather than entering through the opening. The hole left behind is visible
            on spent flowers.
          </p>
        </section>

        <section aria-labelledby="growing-heading">
          <h2 id="growing-heading">Partial shade, thin or rocky soil, zones 3 through 9 — and it reseeds</h2>
          <p>
            Wild Columbine grows naturally on rocky slopes, cliff faces, and shaded woodland
            edges where soil is thin and well-drained. It tolerates partial to full shade
            better than most native wildflowers — a quality that makes it useful under
            tree canopy where few other spring bloomers establish.
          </p>
          <p>
            The plant is short-lived as an individual — three to five years — but reseeds
            freely where some bare soil and dappled light reach the ground. In a garden
            with open patches under deciduous trees, a single plant becomes a loose colony
            over several years without intervention. Seeds germinate more reliably after a
            cold-moist period; plants from nursery stock set out in fall typically establish
            faster than spring transplants.
          </p>
          <p>
            Wild Columbine grows above ground from April through July, then goes fully
            dormant. The crown survives underground and re-emerges in early spring. Because
            the plant flowers before most deciduous trees leaf out, spots that will be deeply
            shaded by midsummer still receive enough light during bloom.
          </p>
        </section>

        <section aria-labelledby="context-heading">
          <h2 id="context-heading">Wild Columbine opens in April — four weeks before New Jersey Tea</h2>
          <p>
            The nine-native bloom sequence for a Camp Monarch garden runs from April through
            hard frost. Wild Columbine opens the sequence. New Jersey Tea follows in May
            and June. Common milkweed opens in mid-June. From there the sequence continues
            through wild bergamot, purple coneflower, Joe Pye Weed, goldenrod, and New
            England aster into October.
          </p>
          <p>
            For a yard trying to support Ruby-throated Hummingbirds through their full
            stay — they arrive in April and leave in September — the April gap is the one
            that most gardens cannot fill. Wild Columbine fills it. A single plant provides
            nectar for arriving hummingbirds and leaves for Columbine Duskywing eggs in the
            same weeks. Whether either finds a specific yard depends on whether the plant
            is there.
          </p>
          <div className="connections">
            <h3>Plants and species connected to Wild Columbine</h3>
            <ul>
              <li>
                <button className="link-button" onClick={() => onNavigate('ruby-throated-hummingbird')}>
                  Ruby-throated Hummingbird
                </button>{' '}
                — arrives in April; Wild Columbine blooms as the first native nectar source available in most gardens
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('new-jersey-tea')}>
                  New Jersey Tea
                </button>{' '}
                — blooms May–June, just as Wild Columbine finishes; carries the hummingbird nectar sequence forward
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('native-bees')}>
                  Native Bees
                </button>{' '}
                — bumblebee queens emerge in late April and visit columbine; some cut the spur base to reach nectar without entering the flower
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('olympia-marble')}>
                  Olympia Marble
                </button>{' '}
                — adult Olympia Marbles nectar on Wild Columbine where it grows near limestone
                outcrops and rocky slopes in April and May; the butterfly's single annual brood
                flies exactly during Columbine's bloom window and is gone before the plant sets seed
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
