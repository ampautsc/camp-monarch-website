import type { Page } from '../App'

interface PaintedLadyProps {
  onNavigate: (page: Page) => void
}

export default function PaintedLady({ onNavigate }: PaintedLadyProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c8/0_Belle-dame_%28Vanessa_cardui%29_-_Echinacea_purpurea_-_Havr%C3%A9_%283%29.jpg"
          alt="Painted Lady butterfly (Vanessa cardui) nectaring on purple coneflower (Echinacea purpurea) — orange-salmon wings with black patches near the forewing tips, three to five white spots near each forewing apex, wingspan around two inches"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Painted_lady_%28Vanessa_cardui%29_2.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Jean-Pol GRANDMONT · 
          <a href="https://commons.wikimedia.org/wiki/File:0_Belle-dame_(Vanessa_cardui)_-_Echinacea_purpurea_-_Havr%C3%A9_(3).jpg" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>
           via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Painted Lady</h1>
        <p className="hero__lead">
          A spiny black caterpillar with yellow stripes and stiff white bristles sits inside a
          folded leaf along the rough edge of a fence line in early July. The leaf is native tall
          thistle — the one that appears at field margins and unmowed corners and often gets pulled.
          The caterpillar cut partway across the leaf near the tip, bent the cut section downward,
          and stitched it shut with silk threads. The fold looks like wind damage from above.
          Inside, the caterpillar grazes the leaf surface and retreats when the stalk is touched.
          In three to four weeks it will be a Painted Lady. In October it will fly south. Where
          it goes after that — across what distance, over what water — went unknown until 2024.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">Vanessa cardui: orange-salmon with black patches and white spots, four or five eyespots on the hindwing underside, wingspan two to two and a half inches</h2>
          <p>
            The Painted Lady’s upper wing surface is salmon-orange with black patches toward each
            forewing tip and along the outer edges of both wings. Near each forewing apex, three to
            five white spots form a loose arc. The hindwing carries a row of five small black dots
            along the outer margin. On the underside of the hindwing — visible when the butterfly
            perches with wings closed — a marbled pattern of brown, tan, and pale pink surrounds
            four or five small eyespots with blue centers. The underside pattern makes the butterfly
            almost invisible against a dry leaf or bark surface when it closes its wings and holds still.
          </p>
          <p>
            Wingspan runs 1.75 to 2.5 inches. Two or three generations fly each summer in the Midwest.
            The first adults arrive in May, originating from the desert Southwest and northern Mexico.
            A second generation flies from July through August; a third generation reaches adults in
            September in years with a long frost-free season. Painted Ladies cannot survive below
            freezing. No individual from the northern Midwest lives through winter. The population
            rebuilds from migrants each year.
          </p>
          <p>
            Males perch on fence posts, hilltops, and tall shrub stems in the afternoon sun, flying
            out at any passing butterfly and returning to the same post within seconds. Females move
            more slowly, pausing at purple coneflower, goldenrod, and milkweed for nectar, and
            periodically dropping to thistle leaves to press their feet against the surface — detecting
            the plant’s chemistry before depositing a single egg.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">The caterpillar sews a thistle leaf shut with silk threads and feeds from inside the fold — native thistles are the primary host in eastern North America</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Vanessa_cardui_-_caterpillar_07_%28HS%29.jpg"
              alt="Painted Lady caterpillar (Vanessa cardui) — spiny and dark charcoal-black with broken yellow-orange bands along the sides and white bristles; late instar caterpillar approximately one and a half inches long"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/1/16/Vanessa_cardui_MHNT_CUT_2013_3_14_Pontfaverger-Moronvilliers_Dos.jpg'
              }}
            />
            <figcaption>
              A late-instar Painted Lady caterpillar. The spiny black body with yellow-orange bands
              and white bristles is visible only if you open the folded-leaf tent — from above, the
              silk-stitched leaves look like wind damage or diseased tissue. This caterpillar is
              three to four weeks from becoming an adult.
              <span className="photo-credit"> Photo: H. Smit · <a href="https://commons.wikimedia.org/wiki/File:Vanessa_cardui_-_caterpillar_07_(HS).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a> via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Female Painted Ladies lay single eggs on native thistles in the genus <em>Cirsium</em> —
            tall thistle (<em>Cirsium altissimum</em>), pasture thistle (<em>Cirsium discolor</em>),
            swamp thistle (<em>Cirsium muticum</em>), and others. The egg hatches in three to seven
            days depending on temperature. The young caterpillar feeds on the leaf surface for the
            first day or two, then cuts partway across the leaf near the tip, bends the cut section
            downward, and stitches it shut with silk threads.
          </p>
          <p>
            The caterpillar stays inside the tent except when feeding — reaching out through the
            opening to graze the surface adjacent to the fold, then retreating inside when disturbed.
            As it grows through five instars over three to four weeks, it constructs progressively
            larger tents, eventually binding adjacent leaves and stems together with silk. The
            final-instar caterpillar is spiny and dark: charcoal-black with broken yellow-orange
            bands along the sides and white bristles along the back. It reaches about one and a
            half inches before pupating inside the tent or nearby vegetation.
          </p>
          <p>
            Painted Lady caterpillars use over 300 recorded host plant species globally — the widest
            host range of any butterfly. In eastern North America, native thistles are primary.
            Also used: nettles (<em>Urtica</em>), common mallow (<em>Malva neglecta</em>), native
            sunflowers (<em>Helianthus</em>), and pearly everlasting (<em>Anaphalis margaritacea</em>).
            Pupation produces a pale brown or tan chrysalis with metallic gold spots; adults emerge
            ten to fourteen days after pupation.
          </p>
        </section>

        <section aria-labelledby="migration-heading">
          <h2 id="migration-heading">In 2024, researchers found Painted Ladies in South America with pollen from West African plants still on their bodies — confirmed as an ocean crossing of more than 4,200 kilometers</h2>
          <p>
            Painted Ladies cannot survive northern winters. The fall generation flies south in
            September and October, following thermals and ridge lines. Where the North American
            population goes each fall went unmapped for decades because the migration takes place
            partly at altitude — high enough that it is not visible from the ground.
          </p>
          <p>
            In Europe and Africa, researchers using hydrogen isotopes in wing tissue traced Painted
            Ladies to their breeding origins and found the annual round trip between tropical Africa
            and the Arctic Circle spans up to 14,500 km across up to six successive generations.
            No single butterfly completes the full journey. Each generation breeds and dies within
            its portion of the route, and the offspring continue in the same direction.
          </p>
          <p>
            In 2024, researchers captured Painted Ladies on a beach in French Guiana — outside the
            butterfly’s established range. Pollen grains on the butterflies’ bodies matched shrub
            species from West Africa that were flowering at that time of year. Genetic analysis and
            isotope tracing confirmed the butterflies had hatched in Europe or West Africa. Trade
            wind models showed conditions at that point would have propelled the butterflies from
            Africa to South America in roughly five to eight days, crossing more than 4,200 kilometers
            of open Atlantic Ocean. The 2024 <em>Nature Communications</em> study marked the first
            confirmed ocean crossing by any insect.<sup><a href="https://www.nature.com/articles/s41467-024-55305-y" target="_blank" rel="noreferrer" className="cite">[1]</a></sup>
          </p>
          <p>
            In North America, migration is erratic. In 2019, heavy winter rain in the desert Southwest
            produced a large bloom of host plants, and millions of Painted Ladies pushed north through
            Southern California in a single spring event. That same spring, an estimated one billion
            Painted Ladies were observed migrating through Israel. Not every year sees this — some
            springs bring almost none to the northern Midwest. The desert food supply in winter,
            controlled by rainfall, determines how many migrants reach the northern Midwest the
            following summer.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Stop clearing native thistles from fence lines and rough corners, skip pesticides near thistles from June through September, and plant purple coneflower and goldenrod for adult nectar</h2>
          <ol className="step-list">
            <li>
              <strong>Stop clearing native thistles from unmowed corners and fence lines.</strong>{' '}
              Tall thistle (<em>Cirsium altissimum</em>) and pasture thistle (<em>Cirsium discolor</em>)
              are native to eastern North America and grow in any rough or semi-shaded margin.
              A single plant in full bloom in August draws Painted Ladies, American Bumble Bees,
              Pearl Crescents, and multiple other native insects simultaneously. Both species self-seed
              into the same location each year. If the seeded area grows too large, pull seedlings
              in spring rather than applying herbicide.
            </li>
            <li>
              <strong>Skip pesticide applications near thistle patches from June through September.</strong>{' '}
              The caterpillar spends each day inside a folded-leaf tent that looks like damaged tissue
              from above. Broad-spectrum pesticide applications near thistles during caterpillar season
              affect the generation inside those folds before they pupate. If insect pressure on
              nearby garden plants requires treatment, treat those plants only and exclude the thistle.
            </li>
            <li>
              <strong>Plant purple coneflower, Canada goldenrod, and New England aster.</strong>{' '}
              Purple coneflower provides peak nectar from July through August. Goldenrod peaks from
              mid-August through late September. Asters bloom from September through hard frost.
              These three plants together provide nectar through the entire Painted Lady adult flight
              period, including the fall generation that needs to load fat reserves before the
              southward journey. The same plantings that fuel the fall Painted Lady generation also
              fuel migrating monarchs, Red Admirals, and late-season native bees.
            </li>
            <li>
              <strong>Add native sunflowers along a fence or border.</strong>{' '}
              Native sunflowers (<em>Helianthus annuus</em>, <em>Helianthus maximiliani</em>) serve
              as both host plants and late-season nectar sources. Painted Lady females lay eggs on
              sunflower leaves; the same plants provide nectar for adults through September. A
              fence-line planting of native sunflowers gives females an alternative host when
              thistle is not available and keeps adults nectaring on-site through October.
              Find native plants near you with{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">What shares the purple coneflower in July and the goldenrod in September</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('purple-coneflower')}>
                Purple Coneflower
              </button>{' '}
              &mdash; a Painted Lady nectaring on purple coneflower in July is pressing its proboscis
              into the same disc florets as an American Bumble Bee working the same flower head in
              the same hour; the Painted Lady fuels for flight and egg production on the same plant
              structure that the bee uses to fuel colony feeding
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('canada-goldenrod')}>
                Canada Goldenrod
              </button>{' '}
              &mdash; in late August and September, Painted Ladies nectaring on goldenrod share the
              flower heads with migrating Monarchs, Red Admirals, and Pearl Crescents; a yard with
              goldenrod blooming into October gives every fall butterfly a fuel stop at the same
              location during the same critical week
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('red-admiral')}>
                Red Admiral
              </button>{' '}
              &mdash; same genus (<em>Vanessa</em>), same wingspan, same folded-leaf caterpillar
              tent — the Red Admiral builds its tent on nettles while the Painted Lady builds on
              thistles; both species nectar on goldenrod and asters in September and may work the
              same flower heads on the same afternoon, both preparing for the southward departure
              in October
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('why-monarchs')}>
                Monarch Butterfly
              </button>{' '}
              &mdash; the fall migration passes through the Midwest in September; a Monarch on
              goldenrod in mid-September and a Painted Lady on the same flowers that afternoon
              are both loading fat reserves for departures to different destinations — the Monarch
              flying 2,500 miles to a mountain range in Michoacán, the Painted Lady flying south
              to wherever the 2024 researchers confirmed it goes
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('new-england-aster')}>
                New England Aster
              </button>{' '}
              &mdash; blooms from late August through hard frost; provides nectar for the final
              Painted Lady generation, late-season Pearl Crescents, departing Red Admirals, and
              migrating Monarchs; a yard with asters still flowering in mid-October keeps the
              nectar corridor open for every late butterfly still in the region
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Connect the Painted Lady’s summer in your yard to the plants that support it.</strong>{' '}
            Find native thistles, sunflowers, and coneflower with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , understand how native plants layer across the season in the{' '}
            <button className="link-button" onClick={() => onNavigate('plants-bloom-calendar')}>
              Bloom Calendar
            </button>
            , and see what else shares the garden in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            .
          </p>
        </div>

        <section className="cite-list" aria-label="Sources">
          <p>
            [1] Menchetti M, et al. (2024). Painted lady butterflies crossed the Atlantic Ocean.{' '}
            <a href="https://www.nature.com/articles/s41467-024-55305-y" target="_blank" rel="noreferrer">
              Nature Communications 16, 218.
            </a>
          </p>
          <p>
            Stefanescu C, et al. (2012). Multi-generational long-distance migration of insects:
            studying the painted lady butterfly in the Western Palaearctic.{' '}
            <a href="https://doi.org/10.1098/rspb.2012.1461" target="_blank" rel="noreferrer">
              Proceedings of the Royal Society B 279(1748):4609–4615.
            </a>
          </p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Hero photo:{' '}
            <a href="https://commons.wikimedia.org/wiki/File:0_Belle-dame_(Vanessa_cardui)_-_Echinacea_purpurea_-_Havr%C3%A9_(3).jpg" target="_blank" rel="noreferrer">
              Jean-Pol GRANDMONT
            </a>{' '}
            (CC BY 3.0) via Wikimedia Commons.
            Caterpillar photo: H. Smit (CC BY-SA 3.0) via Wikimedia Commons.
          </p>
        </section>
      </div>
    </>
  )
}
