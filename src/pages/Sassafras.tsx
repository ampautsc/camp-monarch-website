import type { Page } from '../App'

interface SassafrasProps {
  onNavigate: (page: Page) => void
}

export default function Sassafras({ onNavigate }: SassafrasProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Sassafras_albidum.jpg/960px-Sassafras_albidum.jpg"
          alt="Sassafras branch showing three leaf shapes — a simple oval leaf, an asymmetrical mitten-shaped leaf with one side lobe, and a three-lobed leaf — all on the same branch"
          className="species-hero-image"
          style={{ objectPosition: 'center 45%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/4/45/Sassafras_albidum_kz3.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Dcrjsr&nbsp;&middot;&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Sassafras_albidum.jpg" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>Sassafras grows three different leaf shapes on the same branch &mdash; and the root sprouts that appear each spring along the fence line are exactly what a Spicebush Swallowtail female is searching for when she flies the woodland edge in June</h1>
        <p className="hero__lead">
          Sassafras (<em>Sassafras albidum</em>) is native to the eastern United States, from Maine
          south to Florida and west to Texas. It reaches 20 to 60 feet at maturity but spends
          decades as a thicket of root sprouts along woodland edges &mdash; sending new stems up
          from lateral roots each spring. The leaves come in three distinct shapes on the same
          branch: oval with no lobes, asymmetrical with one thumb lobe like a mitten, and
          symmetrical with three lobes. No other common eastern tree produces all three shapes
          from the same root system.
        </p>
        <p className="hero__lead">
          Crush a sassafras leaf between two fingers. The scent is unmistakable &mdash; orange
          peel and root beer, from aromatic oils including safrole and methyl cinnamate. A female
          Spicebush Swallowtail flying the woodland edge detects those compounds at flight range
          and uses them to locate the plant before she can see individual leaves. The root sprout
          that appears along the fence line in April and gets cut in May is the host plant she
          was searching for.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="three-leaves-heading">
          <h2 id="three-leaves-heading">Oval, mitten, and three-lobed &mdash; all from the same branch, in the same week</h2>
          <p>
            Leaf shape variation within a single tree is uncommon. Most trees produce one shape
            consistently, with minor differences in lobing depth or size between young and mature
            growth. Sassafras produces three distinct shapes: a simple oval with no lobes, an
            asymmetrical two-lobed leaf shaped like a mitten with one thumb projecting from one
            side, and a symmetrical three-lobed leaf shaped like a small outstretched hand. Young
            trees and root sprouts produce more of the lobed shapes; mature branches on older trees
            produce more oval leaves, though all three appear throughout the canopy.
          </p>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sassafras_albidum_kz3.jpg/480px-Sassafras_albidum_kz3.jpg"
              alt="Close view of multiple sassafras leaves showing the three distinct forms side by side — unlobed oval, two-lobed mitten, and three-lobed — on branches in direct sunlight"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/6/66/Sassafras_albidum.jpg'
              }}
            />
            <figcaption>
              All three leaf shapes on a single sassafras branch. The aromatic oils in the leaves
              &mdash; safrole, methyl cinnamate, camphor &mdash; are detectable by scent from
              several feet away and are the primary cue a Spicebush Swallowtail female uses to
              locate sassafras during her egg-laying flight along the woodland edge.
              <span className="photo-credit"> Photo: Krzysztof Ziarnek, Kenraiz&nbsp;&middot;&nbsp;
                <a href="https://commons.wikimedia.org/wiki/File:Sassafras_albidum_kz3.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
                &nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            The leaves are 3 to 7 inches long and smooth-edged. In October they turn yellow,
            orange, scarlet, and deep red &mdash; all four colors visible on the same tree in
            the same week. Crushed leaves, bark, and roots produce the same strong aromatic scent.
            Deer avoid the foliage in most situations, which makes sassafras more persistent than
            many native shrubs in areas with heavy deer browsing. Where deer have suppressed
            spicebush from the understory, sassafras at the woodland edge often holds on.
          </p>
          <p>
            Sassafras root beer was made from the boiled roots of this tree, flavored by safrole.
            In 1960, the U.S. Food and Drug Administration banned safrole as a food additive
            following studies linking it to liver tumors in laboratory animals at high doses.
            Commercial root beer switched to artificial flavorings. The tree remained widespread
            throughout the eastern states.
          </p>
        </section>

        <section aria-labelledby="root-sprouts-heading">
          <h2 id="root-sprouts-heading">Root sprouts along the fence line &mdash; cut each spring, but each one that reaches four feet tall is a host-plant patch for a Spicebush Swallowtail caterpillar</h2>
          <p>
            Sassafras reproduces by root sprouts as readily as by seed. A mature tree sends new
            stems up from lateral roots, producing clusters of young shoots within 10 to 30 feet
            of the parent trunk. Along woodland edges, fence lines, and unmowed strips, these
            sprouts emerge each April and reach 2 to 5 feet by June if left intact.
            Most homeowners cut them each spring on sight.
          </p>
          <p>
            A female Spicebush Swallowtail in flight detects sassafras by scent and locates
            individual stems within her local flight area. When she finds a patch of sassafras
            leaves 3 to 5 feet tall &mdash; leaves large enough to construct a silk-sealed tube
            shelter &mdash; she deposits eggs singly on the upper surface of young leaves. The
            caterpillar that hatches pulls the leaf margin upward with silk threads, seals itself
            inside, and spends several weeks feeding from inside the tube. A curled and silk-bound
            leaf on a sassafras stem in July means a caterpillar is inside it.
          </p>
          <p>
            The root sprout that emerges in April, reaches 4 feet by June, and gets cut in July
            removes the host-plant patch mid-season. The caterpillar inside any sealed leaf goes
            with it. Cutting sassafras sprouts after early October does not affect that season&apos;s
            caterpillars; cutting in spring or early summer prevents egg-laying on that patch.
          </p>
          <p>
            Spicebush (<em>Lindera benzoin</em>) is the preferred larval host for the Spicebush
            Swallowtail. Sassafras is the alternate. In yards where spicebush is absent &mdash;
            too little shade, too much deer pressure, or simply no shade layer &mdash; sassafras
            root sprouts left to grow from April through September provide the only host plant in
            the area that a searching female will find.
          </p>
        </section>

        <section aria-labelledby="berries-heading">
          <h2 id="berries-heading">Blue-black berries on red stalks in August &mdash; red-eyed vireos, wood thrushes, and pileated woodpeckers eat them before the migration window closes</h2>
          <p>
            Sassafras is dioecious: male and female flowers on separate trees. Female trees produce
            small ovoid berries, each about 1 centimeter long, mounted on bright red clubbed stalks
            that extend from the branch. The berries ripen from green to deep blue-black in August,
            when migratory birds are building fat reserves before moving south. Red-eyed vireos,
            great crested flycatchers, wood thrushes, eastern kingbirds, pileated woodpeckers, and
            northern flickers are among the species documented feeding on sassafras berries during
            this window.
          </p>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sassafras_albidum_fruits.jpg/480px-Sassafras_albidum_fruits.jpg"
              alt="Ripe sassafras berries in late summer — small oval fruits deepening to blue-black, each mounted on a bright red club-shaped stalk, photographed against green foliage"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/6/66/Sassafras_albidum.jpg'
              }}
            />
            <figcaption>
              Sassafras berries in late summer. Each berry sits on a red stalk that persists
              briefly after the berry drops. Great crested flycatchers and red-eyed vireos consume
              them in August; wood thrushes take them in September before moving south.
              <span className="photo-credit"> Photo: Famartin&nbsp;&middot;&nbsp;
                <a href="https://commons.wikimedia.org/wiki/File:Sassafras_albidum_fruits.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
                &nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            The Eastern Tiger Swallowtail (<em>Papilio glaucus</em>) also uses sassafras as a
            larval host plant, alongside tulip poplar, wild black cherry, and ash. Tiger
            Swallowtail females deposit eggs on young sassafras leaves in May and June. The
            early-instar caterpillar builds a leaf shelter and rests inside it during the day
            &mdash; the same feeding-shelter strategy as the Spicebush Swallowtail on the same
            host. During peak egg-laying season in June, both butterfly species can be present
            on the same sassafras stem.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>What to do with the sassafras sprouts that appear every spring</h2>
          <ol className="step-list">
            <li>
              <strong>Stop cutting sassafras root sprouts from April through September.</strong>{' '}
              A sprout that reaches 4 feet tall by June provides the leaf surface a Spicebush
              Swallowtail female searches for during egg-laying. One or two sprouts left intact
              along a fence line or woodland edge from spring through fall is enough to support
              caterpillars through the season. Cutting each spring removes the alternate host
              plant from the property with no measurable gain to the lawn or garden.
            </li>
            <li>
              <strong>Look for silk-sealed leaf tubes on sassafras in July and August.</strong>{' '}
              A leaf folded lengthwise and sealed with silk threads &mdash; different from the flat
              leaves around it &mdash; has a caterpillar inside. Frass on lower foliage directly
              below the shelter means the caterpillar fed recently. A stem with two or three sealed
              leaves is hosting multiple caterpillars in active development. The caterpillars consume
              one leaf each, then move on; the sprout regrows foliage within the same season.
            </li>
            <li>
              <strong>Do not apply caterpillar-control products on sassafras in summer.</strong>{' '}
              Btk, spinosad, and pyrethrin products applied to sassafras foliage in June through
              August kill Spicebush Swallowtail and Tiger Swallowtail caterpillars inside their
              leaf shelters. Chewed leaves on a sassafras stem in July are evidence of caterpillar
              activity, not plant disease. The plant tolerates repeated leaf loss without
              lasting damage.
            </li>
            <li>
              <strong>If the tree fruits, leave the berries until birds have taken them.</strong>{' '}
              The August and September berry crop feeds migrating wood thrushes, vireos, and
              flycatchers as they build fat reserves before long-distance flights. The red stalks
              that remain after the berries drop are a useful field marker for identifying a
              female sassafras.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">What uses the sassafras leaf, the flower, and the berry</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spicebush-swallowtail')}>
                Spicebush Swallowtail
              </button>{' '}
              &mdash; uses sassafras as an alternate larval host when spicebush is absent; the
              female deposits eggs singly on young sassafras leaves in May and June; the caterpillar
              rolls the leaf into a silk-sealed tube, feeds inside it through summer, then overwinters
              as a chrysalis on a nearby twig through April
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spicebush')}>
                Spicebush
              </button>{' '}
              &mdash; the preferred larval host for the Spicebush Swallowtail; where spicebush grows
              in shade and sassafras grows at the woodland edge, a female flying in June will
              search both plants; their volatile compounds are chemically similar enough that
              females detect both from the air
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('tiger-swallowtail')}>
                Eastern Tiger Swallowtail
              </button>{' '}
              &mdash; also lays eggs on sassafras in May and June; the caterpillar constructs a
              leaf shelter in early instars on the same plant in the same June window as the
              Spicebush Swallowtail
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wood-thrush')}>
                Wood Thrush
              </button>{' '}
              &mdash; a declining forest-interior breeder that consumes sassafras berries in late
              summer before migrating south; in sites where both spicebush and sassafras grow,
              wood thrushes move between the two fruit sources in August and September
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hermit-thrush')}>
                Hermit Thrush
              </button>{' '}
              &mdash; passes through in late September and October and feeds on high-fat native
              fruits before moving on; sassafras berries ripen in the same August window as
              spicebush, and the two together extend the fruiting period through mid-October
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('invasive-plants')}>
                Invasive Plants
              </button>{' '}
              &mdash; autumn olive and shrub honeysuckle occupy the same edge habitat as sassafras
              root sprouts; where invasives dominate a fence line or woodland margin, the
              open-ground host-plant patches that Spicebush Swallowtail females search for are
              replaced by dense thickets that female butterflies do not enter during egg-laying
              flights
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
