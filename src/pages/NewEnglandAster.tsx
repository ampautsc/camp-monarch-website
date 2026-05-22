import type { Page } from '../App'

interface NewEnglandAsterProps {
  onNavigate: (page: Page) => void
}

export default function NewEnglandAster({ onNavigate }: NewEnglandAsterProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/322745074/large.jpg"
          alt="New England aster in full bloom — dense clusters of purple ray florets surrounding yellow disk flowers, blooming through October when the monarch migration moves south"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: glennberry&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/184861115" target="_blank" rel="noopener noreferrer">iNaturalist obs. 184861115</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>A monarch in October burns fat reserves built since July.<br />New England aster opens its flowers during the same weeks the migration moves south.</h1>
        <p className="hero__lead">
          The eastern monarch population migrates from breeding grounds in the northern US
          and Canada to a specific mountain forest in Michoacán, Mexico — roughly 2,000 to
          2,500 miles southwest. Adults feed continuously during the passage, building
          abdominal fat deposits that determine winter survival odds. A monarch that arrives
          in Mexico at 25% body fat survives at roughly twice the rate of one that arrives
          at 15%.
        </p>
        <p className="hero__lead">
          New England aster (<em>Symphyotrichum novae-angliae</em>) blooms from late August
          through October across most of its range, and sometimes into November after light
          frosts. By mid-October, goldenrod is past peak, most summer wildflowers finished.
          The aster is still producing nectar.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="bloom-heading">
          <h2 id="bloom-heading">Late August through hard frost — later than almost anything else</h2>
          <p>
            <em>Symphyotrichum novae-angliae</em> blooms later than the other common native
            asters and later than goldenrod. In zones 5–7, the main flowering window runs
            from late August through mid-October. In years with mild autumns, scattered
            flowers remain open after the first frost, which across most of the Midwest and
            Northeast falls in October.
          </p>
          <p>
            Each stem produces dozens of flower heads simultaneously. Each head carries 40
            to 100 narrow ray florets — purple to deep violet — surrounding a disk of yellow
            florets. As the disk florets are pollinated, they turn from yellow to orange-red,
            so a single plant in October carries heads in three states at once: yellow-centered
            new flowers, orange-red centers on visited flowers, and dry seed heads where
            flowers finished days earlier.
          </p>
        </section>

        <section aria-labelledby="oct-migration-heading">
          <h2 id="oct-migration-heading">Goldenrod covers September; aster extends the fuel stop into October</h2>
          <p>
            The peak of the eastern monarch migration moves through the Midwest, mid-Atlantic,
            and Southern states in September and October. Monarchs traveling through Missouri
            in early October may have several hundred miles left to the Gulf Coast and then
            another 1,000 miles to the oyamel fir forests of central Mexico.
          </p>
          <p>
            Canada goldenrod covers the September fuel-loading window. New England aster
            extends it into October. A yard with both species provides a migration corridor
            contribution across the entire two-month flight rather than just the first half.
          </p>
        </section>

        <section aria-labelledby="pearl-crescent-heading">
          <h2 id="pearl-crescent-heading">Pearl Crescent caterpillars eat aster leaves from hatching through pupation</h2>
          <p>
            The pearl crescent butterfly (<em>Phyciodes tharos</em>) lays clusters of eggs
            on the undersides of aster leaves in late spring. Caterpillars hatch and feed
            communally through the early instars, then disperse to feed individually after
            the second molt. The pearl crescent cannot complete its life cycle on any plant
            outside the aster genus. The final summer generation overwinters as a
            partially-grown caterpillar in the leaf litter at the stem base and completes
            development in April.{' '}
            <button className="link-button" onClick={() => onNavigate('pearl-crescent')}>
              See the Pearl Crescent page.
            </button>
          </p>
          <p>
            Harris's checkerspot (<em>Chlosyne harrisii</em>) follows the same pattern —
            larvae feed exclusively on asters, with flat-topped white aster (<em>S. umbellatum</em>)
            as its primary host, but populations use <em>S. novae-angliae</em> where the
            two species grow together. Both butterfly species decline when aster populations
            are fragmented or mowed during the growing season.
          </p>
        </section>

        <section aria-labelledby="seeds-stems-heading">
          <h2 id="seeds-stems-heading">Dry seed heads feed birds; hollow stalks shelter overwintering bees</h2>
          <p>
            After the flowers finish, the seed heads dry and persist on the stems through
            November and December. American goldfinches pull seeds from the dry heads in
            October and November, often in small foraging flocks. Dark-eyed juncos work
            the stems at ground level in early winter.
          </p>
          <p>
            The hollow stems of last year's aster stalks serve a different function: small
            native bees, including metallic sweat bees in the genus <em>Agapostemon</em>
            and small carpenter bees (<em>Ceratina</em> spp.), use the dried stems as
            overwintering chambers, sealing the hollow ends with plant material and
            spending winter inside. A stand of aster stalks left standing is a native
            bee shelter that requires no construction.
          </p>
        </section>

        <section aria-labelledby="cut-back-heading">
          <h2 id="cut-back-heading">Cutting back in August removes the entire fall bloom</h2>
          <div className="callout callout--orange">
            <h3 style={{ marginTop: 0 }}>The timing mistake that eliminates the monarch benefit</h3>
            <p>
              New England aster sets its flower buds in late summer. Many homeowners cut
              back tall perennials in August as part of general garden tidying — a practice
              that makes no ecological difference with spring-blooming plants but eliminates
              the entire flowering period of fall-blooming asters.
            </p>
            <p style={{ marginBottom: 0 }}>
              A plant cut to 12 inches in August will not bloom that year. It will resprout
              from the base, but the new growth will not set buds and flower before frost.
              The migration window closes without the nectar source.
            </p>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            The same timing applies to roadsides and meadows where wild asters grow. A
            September mowing removes asters at the moment they are opening. A November
            mowing, after the flowers have finished and seeds have dispersed, does not
            interrupt the plant's contribution.
          </p>
        </section>

        <section aria-labelledby="cultivar-heading">
          <h2 id="cultivar-heading">Purple Dome and Alma Potschke versus seed-grown straight species</h2>
          <p>
            The most widely sold asters in garden centers are compact cultivars — 'Purple
            Dome' at 18 inches, 'Alma Potschke' at 3 feet in rose-pink, 'September Ruby' —
            bred for uniform flower color and tidy form. These are selections or hybrids of
            <em>S. novae-angliae</em>, and they attract pollinators.
          </p>
          <p>
            The straight species grows taller (3–5 feet) and spreads by both rhizome and
            seed, filling in around the original plant over several seasons. For habitat
            purposes, a seed-grown or division-grown straight species plant from a native
            plant nursery provides the same nectar resource in a larger footprint. The
            cultivars are easier to find at box stores; the species can be sourced from
            native plant societies or nurseries that grow plants from local seed.
          </p>
        </section>

        <section aria-labelledby="how-to-plant-heading">
          <h2 id="how-to-plant-heading">Full sun, zones 4–8, plant by mid-September for first-year bloom</h2>
          <div className="action-steps">
            <h3>Four steps to a functioning October nectar source</h3>
            <ol>
              <li>
                <strong>Source a local ecotype</strong> — Contact a native plant nursery or
                local chapter of the Native Plant Society for seed-grown plants from regional
                stock. Plants grown from local seed establish faster in local conditions than
                cultivars or specimens propagated from distant populations.
              </li>
              <li>
                <strong>Plant by mid-September</strong> — A fall-planted aster has time to
                establish roots before the ground freezes. Container plants transplanted in
                August or early September will often bloom a few weeks after planting if they
                were already setting buds in the pot.
              </li>
              <li>
                <strong>Choose full sun</strong> — New England aster tolerates partial shade,
                but plants in deep shade produce fewer flower heads and bloom later. Full sun
                with average soil produces the densest bloom and the longest nectar window.
              </li>
              <li>
                <strong>Leave the stalks through February</strong> — The standing dead stalks
                provide overwintering chambers for stem-nesting bees and perches for
                seed-eating birds through winter. Cut them to 6 inches in late February or
                early March, before new basal growth emerges.
              </li>
            </ol>
          </div>
        </section>

        <section aria-labelledby="range-heading">
          <h2 id="range-heading">Native from Nova Scotia to Georgia, west to Wyoming</h2>
          <p>
            <em>Symphyotrichum novae-angliae</em> is native across eastern North America —
            from Nova Scotia and southern Quebec south through the Appalachians to Georgia
            and Alabama, and west through the prairie states to Wyoming and Colorado.
            Hardy in USDA zones 4 through 8, it tolerates a wide range of soil moisture,
            including standing water during spring flooding and moderate summer drought
            once established.
          </p>
          <p>
            In its native range it grows along stream banks, in wet meadows, at woodland
            edges, and in disturbed areas — roadsides, field edges, old lots. The roadside
            stands lining rural highways in the upper Midwest and New England in October
            are <em>S. novae-angliae</em>, and they are what migrating monarchs are
            landing on.
          </p>
          <div className="connections">
            <h3>Species that use New England aster</h3>
            <ul>
              <li>
                <button className="link-button" onClick={() => onNavigate('monarch-life')}>
                  Monarch Butterfly
                </button>{' '}
                — adults nectar during fall migration, September through October
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('pearl-crescent')}>
                  Pearl Crescent
                </button>{' '}
                — lays eggs on aster leaves exclusively; the final-generation caterpillar overwinters in the leaf litter at the plant base and becomes the first butterfly of April
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('canada-goldenrod')}>
                  Canada Goldenrod
                </button>{' '}
                — blooms the months before aster; together they cover August through October
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('native-bees')}>
                  Native Bees
                </button>{' '}
                — dozens of species nectar on aster flowers; stem-nesting bees overwinter in dried stalks
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
