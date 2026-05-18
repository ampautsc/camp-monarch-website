import type { Page } from '../App'

interface SwampMilkweedProps {
  onNavigate: (page: Page) => void
}

export default function SwampMilkweed({ onNavigate }: SwampMilkweedProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/21590017/large.jpg"
          alt="Swamp milkweed in bloom — dense clusters of deep rose-pink flowers above lance-shaped leaves, photographed in Green Lake County, Wisconsin in mid-July"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: aarongunnar&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/14503760" target="_blank" rel="noopener noreferrer">iNaturalist obs. 14503760</a>
          &nbsp;· CC BY
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>A monarch caterpillar spends 25 days eating milkweed leaves before it can form a chrysalis.<br />Swamp milkweed puts that food source in the part of the yard where Common Milkweed dies.</h1>
        <p className="hero__lead">
          Swamp milkweed (<em>Asclepias incarnata</em>) grows in wet soils where other milkweeds
          fail — stream banks, rain garden edges, low corners of a yard that hold water after
          rain. The monarch butterfly's caterpillar can only complete its larval stage on
          milkweed; no other plant substitutes. A yard with a wet corner and a patch of
          swamp milkweed is a yard that can support monarch reproduction where nothing else could.
        </p>
        <p className="hero__lead">
          The flowers open in July through August — a window between Common Milkweed's
          June–July peak and the asters and goldenrod of September. Visiting monarchs, native
          bees, and milkweed-specialist bees that work almost no other plant arrive through
          the full summer.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="flowers-heading">
          <h2 id="flowers-heading">Deep rose-pink flowers in flat-topped clusters, July through August</h2>
          <p>
            Common Milkweed carries pale lavender-pink flowers in rounded, globe-shaped
            umbels. Swamp Milkweed carries deeper rose-to-magenta flowers in smaller,
            flat-topped clusters. The color difference is visible from twenty feet.
          </p>
          <p>
            Each flower has the characteristic milkweed structure: five reflexed petals
            folded back behind a central crown of five hoods, each hood containing a curved
            horn. That horn-and-hood structure is what catches the legs of visiting insects.
            A bee landing on the flower may step into the groove between two hoods, pull its
            leg free with a pollinium attached, and carry that pollen mass to the next flower
            on the next plant. Not all insects are strong enough to pull free — many are
            trapped temporarily or lose a leg to the mechanism. The milkweed flower is not
            designed for casual visitors.
          </p>
          <p>
            Plants grow 3 to 4 feet tall in wet, fertile soil, and shorter in drier
            conditions. The stem is slightly ribbed, the leaves lance-shaped and opposite —
            narrower and more elongated than Common Milkweed's broad oval leaves. When the
            stem is cut, white latex sap bleeds from the wound.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">Monarch eggs hatch in four days; the caterpillar begins eating immediately</h2>
          <p>
            A monarch female selects milkweed plants by smell and taste, landing on leaves
            and drumming with her forelegs to sample the cardenolide content before deciding
            to lay. She deposits a single egg on the underside of a leaf — rarely two on
            the same plant. The egg hatches in roughly four days.
          </p>
          <p>
            The caterpillar's first act is to eat its own eggshell, then begin consuming
            the leaf it hatched on. It passes through five instars over approximately 14
            days, growing from a two-millimeter hatchling to a 45-millimeter fifth-instar
            caterpillar striped in yellow, white, and black. The cardenolide toxins it
            ingests from the milkweed accumulate in its tissue and remain through the adult
            butterfly — making the monarch chemically protected against most bird predation
            throughout its life.
          </p>
          <p>
            A single fifth-instar caterpillar consumes roughly two full leaves per day.
            A yard with one swamp milkweed plant can support two to four caterpillars
            through pupation; a patch of eight to ten plants can carry a dozen or more
            caterpillars simultaneously without stripping the plants bare.
          </p>
        </section>

        <section aria-labelledby="wet-soil-heading">
          <h2 id="wet-soil-heading">Standing water in spring, moist in summer — the conditions that rule out most milkweeds</h2>
          <p>
            Common Milkweed (<em>Asclepias syriaca</em>) and Butterfly Weed (<em>A. tuberosa</em>)
            both require well-drained soil. A rain garden basin that holds water for 12 to
            48 hours after a storm will kill both. Swamp Milkweed thrives in those same
            conditions: it tolerates flooded roots in spring and early summer, then accepts
            gradual drying by August without losing the plant.
          </p>
          <p>
            It also establishes in consistently moist soil that never floods — stream
            edges, low meadow corners, drainage swales planted with native grasses. In wet
            years the plants grow taller; in drier summers they grow shorter but still flower.
            The consistent requirement is that the soil not be bone-dry for extended periods
            in the first two years before the root system matures.
          </p>
          <p>
            This wet-soil tolerance makes swamp milkweed the right plant for homeowners
            who've tried Common Milkweed in a low corner and watched it die, or who have
            a rain garden they want to populate with something that benefits monarchs
            directly rather than just filtering runoff.
          </p>
        </section>

        <section aria-labelledby="specialist-bees-heading">
          <h2 id="specialist-bees-heading">Two bee genera that visit almost nothing but milkweed</h2>
          <p>
            Most native bees are generalist foragers — they collect pollen from a wide range
            of plant families. Two groups of native bees are milkweed oligoleges: they
            specialize on <em>Asclepias</em> species, collecting pollen almost exclusively
            from milkweed flowers. <em>Cemolobus ipomoeae</em> (the morning-glory bee, despite
            the common name) and several species in the genus <em>Melissodes</em> subgenus
            <em>Eumelissodes</em> are the most consistent milkweed specialists across the
            eastern US.
          </p>
          <p>
            A yard with Swamp Milkweed running through July and August provides these bees
            the resource window they need to complete their nesting cycle. They are solitary
            ground-nesting bees — the female provisions each underground cell with a mix
            of pollen and nectar, lays an egg, seals the cell, and builds the next one.
            No milkweed flowers, no provisioned cells.
          </p>
          <p>
            Bumblebees, sweat bees, and leaf-cutter bees all visit Swamp Milkweed for nectar
            as well. On a warm July morning a blooming swamp milkweed plant in full sun will
            carry five to fifteen visiting bees at any given moment.
          </p>
        </section>

        <section aria-labelledby="pods-heading">
          <h2 id="pods-heading">Narrow pods, two to three inches long, opening in October on silky threads</h2>
          <p>
            After the flowers are pollinated, seed pods form where the flowers were. Swamp
            Milkweed pods are narrower and smoother than Common Milkweed pods — roughly 2
            to 3.5 inches long, spindle-shaped, with a papery green surface. By September
            the pods begin to turn brown and fibrous. In October they split along one seam.
          </p>
          <p>
            Each pod holds 60 to 80 seeds, each attached to a tuft of white silky fibers
            called the coma. When the pod opens, wind carries the seeds out individually,
            each one drifting on its silk. A single plant produces 6 to 8 pods; a patch
            of ten plants releases 3,000 to 6,000 seeds in a single October week.
          </p>
          <p>
            Unlike Common Milkweed, Swamp Milkweed spreads primarily by seed rather than
            rhizome. It forms a clump that expands slowly outward and drops seed into
            surrounding moist soil, but it does not send runners 6 feet in every direction
            the way Common Milkweed does. In a planting bed or rain garden it stays where
            it is put.
          </p>
        </section>

        <section aria-labelledby="how-to-plant-heading">
          <h2 id="how-to-plant-heading">Full sun, moist to wet soil, zones 3–6 — and no aggressive spreading</h2>
          <div className="action-steps">
            <h3>Four steps to a functioning monarch larval habitat in wet ground</h3>
            <ol>
              <li>
                <strong>Choose the lowest point in the yard</strong> — a rain garden basin,
                a drainage swale, a low corner that stays wet after rain. Swamp Milkweed will
                grow in average moist soil too, but it genuinely thrives in the spots where
                other milkweeds fail.
              </li>
              <li>
                <strong>Plant three to five plants minimum</strong> — A single plant may support
                a caterpillar or two but can be stripped by a larger brood. A small grouping
                ensures there is enough leaf tissue even when a monarch lays multiple egg
                clutches in the same spot. Space plants 18 to 24 inches apart.
              </li>
              <li>
                <strong>Source from a native plant nursery</strong> — Look for seed-grown
                plants labeled <em>Asclepias incarnata</em> from local or regional seed stock.
                Avoid the cultivar 'Ice Ballet' (white-flowered) for pollinator benefit —
                white-flowered milkweed selections attract fewer specialist bees than the
                native pink-flowered form.
              </li>
              <li>
                <strong>Leave seed pods through October</strong> — Do not cut the plant back
                in early fall. The pods should open and seeds disperse before any cleanup.
                Wait until November or early spring to cut dead stems to 6 inches, leaving
                the stubble as potential stem-nesting habitat for small native bees.
              </li>
            </ol>
          </div>
        </section>

        <section aria-labelledby="range-heading">
          <h2 id="range-heading">Native from Nova Scotia to Florida, west through the Great Plains</h2>
          <p>
            <em>Asclepias incarnata</em> is native across eastern North America — from Nova
            Scotia and New Brunswick south through Florida and west through the Great Plains
            to Nebraska and Kansas. It grows in wetland margins, floodplain meadows, stream
            banks, pond edges, and roadside ditches throughout its range. USDA hardiness
            zones 3 through 6; some populations extend into zone 7 in moist lowland sites.
          </p>
          <p>
            In the wild it grows wherever the soil stays wet long enough to give it an
            advantage over plants that need drainage. A roadside ditch in Minnesota in
            August carries Swamp Milkweed, Canada Goldenrod, and Joe Pye Weed — a
            succession of bloom that covers the full monarch migration fueling window from
            July through October.
          </p>
          <div className="connections">
            <h3>Species connected to Swamp Milkweed</h3>
            <ul>
              <li>
                <button className="link-button" onClick={() => onNavigate('monarch-life')}>
                  Monarch Butterfly
                </button>{' '}
                — larvae feed exclusively on milkweed leaf tissue; adults nectar on flowers
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('native-bees')}>
                  Native Bees
                </button>{' '}
                — milkweed-specialist bees (<em>Cemolobus</em>, <em>Melissodes</em>) forage
                almost exclusively on <em>Asclepias</em> flowers
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('plants-milkweeds')}>
                  Milkweeds
                </button>{' '}
                — overview of all Asclepias species, choosing the right milkweed for your conditions
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('common-milkweed')}>
                  Common Milkweed
                </button>{' '}
                — the rhizome-spreading milkweed for well-drained soil, blooming June–July
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
