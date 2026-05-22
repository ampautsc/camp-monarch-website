import type { Page } from '../App'

interface BlackCherryProps {
  onNavigate: (page: Page) => void
}

export default function BlackCherry({ onNavigate }: BlackCherryProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Prunus_serotina_kz19.jpg/960px-Prunus_serotina_kz19.jpg"
          alt="A mature black cherry tree in full leaf — a broadly spreading crown with dark bark and dense summer foliage, characteristic of an open-grown specimen at a woodland margin"
          className="species-hero-image"
          style={{ objectPosition: 'center 35%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Prunus-serotina-flowers.jpg/960px-Prunus-serotina-flowers.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Prunus serotina, Szczecin, Poland &middot; Krzysztof Ziarnek, Kenraiz &middot; CC BY-SA 4.0
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>A Baltimore Oriole arrives from South America in early May looking for exactly the tent caterpillar colonies that homeowners pull out in March</h1>
        <p className="hero__lead">
          Eastern tent caterpillars hatch in late March from egg masses glued to black cherry
          branches the previous fall. They spin communal silk nests in the branch forks
          &mdash; white, tent-shaped structures visible from across the yard &mdash; and feed
          on the unfurling leaves each morning before retreating into the nest at night.
          Baltimore Orioles, Yellow-billed Cuckoos, and Scarlet Tanagers, arriving from migration
          in early May, regard those caterpillar colonies as the meal they flew 1,500 miles to find.
        </p>
        <p className="hero__lead">
          Black cherry (<em>Prunus serotina</em>) supports 456 caterpillar species in
          Douglas Tallamy&apos;s count &mdash; second only to oaks among North American trees.
          It is also the tree that most commonly appears uninvited at the yard edge, seeds
          itself into fence lines and disturbed soil, and gets removed before anyone
          asks what it supports. The tree most often called a weed supports more caterpillar
          species than any other North American tree except the oak genus.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="identification-heading">
          <h2 id="identification-heading">Bitter almond bark, orange-red glands, and white May racemes — three ways to identify black cherry before it fruits</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Prunus-serotina-flowers.jpg/960px-Prunus-serotina-flowers.jpg"
              alt="A dense cluster of small white five-petaled flowers arranged along a 4-inch hanging raceme — individual flowers on short stalks, stamens visible at each center, photographed on a black cherry branch in May"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Prunus_serotina_kz19.jpg/960px-Prunus_serotina_kz19.jpg'
              }}
            />
            <figcaption>
              Black cherry flower raceme in May. Each raceme hangs 3 to 6 inches from the
              branch tip; the individual flowers are stalked and arranged densely along the
              central stem. At peak bloom, branch tips across the whole canopy carry racemes
              simultaneously.
              <span className="photo-credit"> Photo: Awinch1001 &middot; CC BY-SA 4.0</span>
            </figcaption>
          </figure>
          <p>
            Black cherry bark on young stems is smooth, reddish-brown, and marked with
            horizontal gray lenticels &mdash; the same dash-shaped breathing pores that appear
            on birch bark. Scratch the inner bark and hold it to your nose: the smell is bitter
            almond, from prunasin, a cyanogenic glycoside concentrated in the bark and leaves.
            On mature trees, the outer bark breaks into irregular dark flaky scales that curl
            outward at the edges, often compared to burnt potato chips pressed flat against the
            trunk. No other common yard tree produces that combination of flaky dark scales and
            lenticel-marked young bark.
          </p>
          <p>
            The leaves are lance-shaped, 2 to 5 inches long, with fine rounded teeth along
            both margins. At the base of each leaf blade, where it meets the petiole, there
            is a pair of small orange-red glands visible without magnification. The upper
            surface is dark and shiny; the lower surface is paler, with a tuft of fine reddish
            hair along the central vein. In fall, the leaves turn yellow to orange-red.
          </p>
          <p>
            In May, the branch tips produce racemes &mdash; hanging clusters of small white
            flowers 3 to 6 inches long, each flower individually stalked off a central stem.
            At full bloom, a large black cherry hangs racemes from every outer branch simultaneously.
            The flowers give way to clusters of green drupes in June, which ripen through
            red to near-black by late August.
          </p>
          <p>
            Black cherry grows to 50 to 80 feet at maturity, most often in single-stemmed
            form, at woodland edges, field margins, roadsides, and fence lines. It self-seeds
            wherever birds perch and digest its fruit. A yard with a bird feeder or a fence
            row in the eastern US frequently acquires black cherry seedlings within a few years
            without any deliberate planting.
          </p>
        </section>

        <section aria-labelledby="fruit-heading">
          <h2 id="fruit-heading">Near-black drupes in August — how 70 bird species use a single fruiting tree across three weeks</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/2020-07-25_10_49_26_Black_Cherry_leaves_and_immature_fruit_in_mid-summer_along_a_walking_path_in_mid-summer_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg/960px-2020-07-25_10_49_26_Black_Cherry_leaves_and_immature_fruit_in_mid-summer_along_a_walking_path_in_mid-summer_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg"
              alt="Black cherry leaves and immature green fruit hanging in clusters along a pendant stem in mid-July — small round drupes on individual stalks, still hard and pale before ripening dark red and then near-black in August"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Prunus_serotina_kz19.jpg/960px-Prunus_serotina_kz19.jpg'
              }}
            />
            <figcaption>
              Black cherry leaves and immature fruit in July, Fairfax County, Virginia.
              The drupes ripen from green to dark red to near-black across August and September,
              hanging in clusters of 8 to 12 on pendant stems 3 to 6 inches long.
              <span className="photo-credit"> Photo: Famartin &middot; CC BY-SA 4.0</span>
            </figcaption>
          </figure>
          <p>
            The May flowers become small round drupes by late July &mdash; green first, then red,
            then near-black by late August, each about the size of a pea and hanging in clusters
            of 8 to 12. On a mature tree in a productive year, tens of thousands of drupes ripen
            over three to four weeks. The fruit is mildly sweet and astringent; the seed and
            inner bark contain prunasin at levels toxic to livestock, but birds digest the
            flesh and pass the seed intact.
          </p>
          <p>
            More than 70 bird species eat black cherry fruit. Cedar waxwings arrive in
            flocks and can strip a loaded branch in an hour before moving to the next tree.
            American robins pass through in August numbers exceeding their year-round populations,
            consuming fruit on the southward migration. Wood thrush, veery, and Swainson&apos;s
            thrush pause in mid-migration to fuel on the drupes. Eastern bluebirds feed their
            last brood of the season on them. Gray catbirds, brown thrashers, and red-eyed
            vireos consume them through August and September.
          </p>
          <p>
            Black bears pull branches down with their forelegs to reach the fruit directly
            from the tree. White-tailed deer and foxes eat fallen drupes from the ground below.
            The seeds pass through bird digestive systems undamaged and germinate wherever
            the bird perches next &mdash; which is how black cherry reaches fence lines,
            disturbed soil edges, and yard margins across a landscape in under a decade.
          </p>
        </section>

        <section aria-labelledby="caterpillars-heading">
          <h2 id="caterpillars-heading">456 caterpillar species, one tree — and why the tent caterpillar nest is the cuckoo&apos;s dinner, not a problem to remove</h2>
          <p>
            Eastern tent caterpillar (<em>Malacosoma americanum</em>) lays egg masses on
            black cherry branches in late summer and fall. The masses overwinter on the bark
            in a hard foam-like casing and hatch in late March, precisely as black cherry
            buds begin to swell. The caterpillars immediately begin building communal silk
            nests in the nearest branch fork. By mid-April the nest is 4 to 6 inches across;
            by early May it can expand to the size of a small football.
          </p>
          <p>
            Yellow-billed Cuckoos and Black-billed Cuckoos eat tent caterpillars specifically
            &mdash; one of the few bird species willing to consume the hairy, setae-covered
            larvae that most other birds reject. A single cuckoo can eat 100 tent caterpillars
            in a sitting. Baltimore Orioles and Scarlet Tanagers take them from the nest edges.
            In most years, bird predation keeps tent caterpillar populations from defoliating
            the tree; in an outbreak year the tree loses branches of leaves visibly but produces
            a second flush of foliage by June. The tree handles defoliation. The cuckoos need
            the caterpillars.
          </p>
          <p>
            Tent caterpillars are one species among 456 that Tallamy&apos;s lab documented
            using black cherry as a larval host. Three hairstreak butterflies &mdash;
            Coral, Banded, and Striped &mdash; lay eggs on the bark; their caterpillars
            emerge in spring and feed on the new leaf buds. Spring azure caterpillars feed
            on the flower clusters. The promethea moth uses black cherry as its primary host:
            the caterpillar rolls a single leaf around itself, binds the stem to the branch
            with silk, and hangs through winter as a leaf-shaped tube attached to the branch.
            At least 11 giant silk moth species use black cherry as a larval host plant.
          </p>
          <p>
            The cyanogenic glycosides in the bark and leaves &mdash; the same compounds that
            make the inner bark smell of bitter almond and toxic to livestock &mdash; slow
            feeding by caterpillar species that cannot detoxify them. The 456 species that
            have evolved the detoxification pathway have the black cherry canopy largely
            to themselves. The toxicity is the filter, and the filter is what makes this
            tree so productive as a food web base.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>One black cherry planted this spring, or one already volunteering that can stay</h2>
          <ol className="step-list">
            <li>
              <strong>If a black cherry seedling has already appeared in your yard, consider
              leaving it where it is.</strong>{' '}
              Black cherry seeds itself freely wherever birds perch and roost. A seedling at
              a fence line or yard edge that appeared uninvited has already chosen its location
              and begun its root system. Move it only if it stands in a spot that cannot
              accommodate a 60-foot tree at maturity. Otherwise let it grow.
            </li>
            <li>
              <strong>Plant a bareroot seedling or 1-gallon container plant in full sun
              with good drainage.</strong>{' '}
              Black cherry grows 13 to 24 inches per year under good conditions and begins
              producing fruit at 10 years old. State forestry programs sell seedlings in
              bundles; native plant nurseries carry 1-gallon containers in spring. Full sun
              produces the densest fruit crop; partial shade is tolerated but reduces the yield.
            </li>
            <li>
              <strong>When tent caterpillar nests appear in March, leave them.</strong>{' '}
              Yellow-billed Cuckoos time their spring arrival to black cherry tent caterpillar
              outbreaks. Baltimore Orioles and Scarlet Tanagers search the canopy for them
              in May. Removing the nests before those birds arrive in early May reduces the
              food supply that stops them at your yard. The tree regrows from defoliation;
              the cuckoos need the caterpillars.
            </li>
            <li>
              <strong>Leave fallen fruit below the tree through September.</strong>{' '}
              Cedar waxwings, robins, and thrushes moving through in August may pause for
              a day or two to feed if the fruit is present &mdash; on the tree and on the
              ground below it. Cleaning up fallen drupes removes the food that brings
              birds down within reach. The droppings from fruit-eating birds introduce
              native plant seeds into adjacent plantings.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who appears in a black cherry tree from March through October</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('baltimore-oriole')}>
                Baltimore Oriole
              </button>{' '}
              &mdash; arrives from Central America in early May and immediately hunts
              tent caterpillar colonies in the black cherry canopy; nests in tall deciduous
              trees nearby while the female weaves a hanging basket nest from plant fibers
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cedar-waxwing')}>
                Cedar Waxwing
              </button>{' '}
              &mdash; arrives in August flocks of 20 to 200 and strips loaded black cherry
              branches of every drupe within an hour; carries seeds in its digestive tract
              to the next perch on the migration route, planting cherry wherever it stops
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('scarlet-tanager')}>
                Scarlet Tanager
              </button>{' '}
              &mdash; the male&apos;s red-and-black coloring appears in the canopy in May;
              feeds on tent caterpillars and leaf-feeding insects in the crown before
              shifting to fruit in late summer before southward migration
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wood-thrush')}>
                Wood Thrush
              </button>{' '}
              &mdash; one of the primary consumers of black cherry drupes during August
              migration; pauses in yards with fruiting black cherry for two to four days
              while fueling for the next leg of the journey to Central America
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cecropia-moth')}>
                Cecropia Moth
              </button>{' '}
              &mdash; caterpillars feed on black cherry leaves in late summer; the promethea
              moth, a related giant silk moth, uses black cherry as its primary host and
              hangs its leaf-wrapped cocoons from the branches through winter
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('white-oak')}>
                White Oak
              </button>{' '}
              &mdash; the only North American tree genus that supports more caterpillar
              species than black cherry; the two trees together &mdash; an oak for spring
              caterpillar protein and a cherry for August migration fruit &mdash; cover
              most of a songbird&apos;s annual caloric needs on a single suburban lot
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
