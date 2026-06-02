import type { Page } from '../App'

interface ShagbarkHickoryProps {
  onNavigate: (page: Page) => void
}

export default function ShagbarkHickory({ onNavigate }: ShagbarkHickoryProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Carya_ovata_kz1.jpg/960px-Carya_ovata_kz1.jpg"
          alt="Shagbark hickory trunk with vertical bark plates peeling away from the wood in long gray strips — each plate six to twelve inches long, curled at the ends, still attached at the center"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Carya_ovata.jpg/960px-Carya_ovata.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Karl Zeile&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Carya_ovata_kz1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>Shagbark Hickory</h1>
        <p className="hero__lead">
          The bark plates on a mature shagbark hickory peel away from the trunk
          in vertical strips six to twelve inches long — curled at the ends,
          still attached at the center, gray against gray. Indiana Bats, federally
          listed as endangered, seek those plates out for summer day roosts.
          Luna Moth females lay their eggs on the leaves overhead. The caterpillar
          that hatches spends the next six weeks feeding before it descends, spins
          a cocoon in the leaf litter below, and waits out winter.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="bark-heading">
          <h2 id="bark-heading">Peeling plates, bat roosts, and how the bark grows</h2>
          <p>
            Shagbark hickory (<em>Carya ovata</em>) is the only common native tree
            in North America whose bark characteristically peels in long, loose
            vertical plates. The behavior begins when the trunk reaches roughly
            eight to ten inches in diameter — the outer bark separates into slabs
            that curl free at the ends but stay attached at the middle, projecting
            four to eight inches outward from the trunk. A mature shagbark in full
            sun, sixty or seventy years old, can appear to be shedding itself.
          </p>
          <p>
            Those gaps between bark and wood are roost sites. Indiana Bats
            (<em>Myotis sodalis</em>) — listed as endangered under the federal
            Endangered Species Act since 1967 — use shagbark hickory as a summer
            day roost, tucking into the narrow space between plate and trunk where
            the temperature stays regulated and the site is concealed from
            predators. Little Brown Bats use the same structure. The USFWS recovery
            plan for Indiana Bat identifies shagbark hickory as a habitat element —
            the tree is an active roost component in maternity colonies across the
            species&apos; range.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Carya_ovata_nuts_Shagbark_Hickory.jpg/480px-Carya_ovata_nuts_Shagbark_Hickory.jpg"
              alt="Shagbark hickory nuts in their thick green hulls — each hull splits cleanly at four seams when ripe, releasing a rounded nut with a sweet, high-fat kernel"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Carya_ovata_kz1.jpg/480px-Carya_ovata_kz1.jpg'
              }}
            />
            <figcaption>
              Shagbark hickory nuts in their green hulls. Each hull splits at four
              seams when fully ripe, exposing a nut with a sweet kernel that Eastern
              Gray Squirrels begin caching in early September. A single mature tree
              in a mast year produces more nuts than the animals around it can consume
              before winter — the fraction left in the ground germinates in spring.
              <span className="photo-credit"> Photo: Fritz Geller-Grimm&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Carya_ovata_nuts_Shagbark_Hickory.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            The tree grows slowly — twelve to eighteen inches per year under good
            conditions in well-drained soil with full to partial sun. The taproot
            goes deep early, which makes transplanting difficult past the sapling
            stage. A tree planted today will not produce the bark plate character
            for twenty or thirty years. It will, however, begin producing host-leaf
            surface for caterpillars within the first few growing seasons.
          </p>
        </section>

        <section aria-labelledby="caterpillars-heading">
          <h2 id="caterpillars-heading">Luna Moth, Polyphemus Moth, and the 235 caterpillar species in the canopy</h2>
          <p>
            The hickory genus (<em>Carya</em>) supports 235 caterpillar species
            in the eastern United States, placing it among the highest-value tree
            genera for lepidopteran diversity in the region. Shagbark hickory is
            the most widespread native hickory in the mid-Atlantic and Midwest,
            which means it carries most of that host value in areas where other
            hickory species are absent.
          </p>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Actias_luna_4th_instar_sjh.JPG"
              alt="Luna Moth caterpillar in its fourth instar — bright green with yellow-tipped spines, feeding on hickory and black walnut leaves from late May through July"
              loading="lazy"
            />
            <figcaption>
              Luna Moth caterpillar in its fourth instar. Black walnut and shagbark
              hickory are its primary host trees across the eastern range — females
              deposit eggs on both species in late May, and the caterpillar feeds
              for six weeks before descending to spin a papery cocoon in the leaf
              litter below. The adult that emerges the following spring has no
              functional mouth. Every calorie for its seven-day life is built here.
              <span className="photo-credit"> Photo: Kugamazog&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Actias_luna_4th_instar_sjh.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Luna Moth females deposit eggs preferentially on black walnut and
            shagbark hickory — both trees appear on every range-wide host plant
            list for the species. The caterpillar feeds through five instars over
            six weeks, reaching nearly three inches long, before descending from the
            canopy to spin a thin papery cocoon among fallen leaves on the ground.
            It overwinters as a pupa in that leaf litter and emerges as a non-feeding
            adult the following May.
          </p>
          <p>
            Polyphemus Moth also uses hickory alongside oaks and maples. Both Luna
            and Polyphemus caterpillars feed in the same hickory canopy through the
            same summer weeks, building fat reserves for adult lives that will not
            include a single meal. Both overwinter as pupae in the leaf layer below
            the host tree. The insulating depth of undisturbed leaf litter through
            winter is what separates a viable pupa from a frozen one.
          </p>
        </section>

        <section aria-labelledby="mast-heading">
          <h2 id="mast-heading">The nut, the squirrel cache, and the two-to-five-year mast cycle</h2>
          <p>
            Shagbark hickory produces mast in cycles — heavy crops every two to
            five years, with lighter production in between. The thick-hulled nut
            splits cleanly at four seams when ripe in September and October,
            releasing a smooth, rounded nut with a sweet, high-fat kernel. Eastern
            Gray Squirrels begin caching before the hulls open fully, carrying
            individual nuts up to 300 feet from the parent tree and burying them
            one by one in the soil.
          </p>
          <p>
            Eastern Wild Turkey takes fallen nuts from the ground through November.
            Raccoon climbs for the nuts before they drop. Wood Duck feeds on hickory
            nuts in flooded bottomlands where shagbark grows along water. White-tailed
            deer browse hickory seedlings in the understory, which suppresses
            regeneration in areas with heavy deer pressure — mature trees produce
            most of the mast, with little recruitment below them.
          </p>
          <p>
            A mast year drops more nuts than the animals around the tree can consume
            and cache before winter. The excess germinates in spring — most seedlings
            do not survive deer browse and low light under the parent canopy, but in
            gaps and edges, hickory seedlings establish and begin their slow climb
            toward the canopy.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four ways to support shagbark hickory and the species that depend on it</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Fallen_leaves.jpg" alt="Autumn leaf litter beneath tree canopy — Luna Moth and Polyphemus Moth pupae overwinter in this layer" loading="lazy" />
            <figcaption>
              Luna Moth and Polyphemus Moth cocoons overwinter in fallen leaves
              beneath their host trees. An unraked circle beneath the hickory from
              October through May is the mechanism that converts caterpillar feeding
              in summer into adult moths the following spring.
              <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;<a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Plant a sapling in full to partial sun, in well-drained soil.</strong>{' '}
              Shagbark hickory is drought-tolerant once established and does not
              need irrigation after its first two to three growing seasons.
              Deep taproots make relocation from the ground nearly impossible after
              the first year — buy a container-grown sapling from a native nursery
              and plant it where the tree can stay. Find one with{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Leave leaf litter undisturbed beneath the canopy from October through May.</strong>{' '}
              Luna Moth and Polyphemus Moth pupae overwinter in fallen leaves directly
              below the host tree. Raking, blowing, or mulching over that layer in
              autumn removes the cocoon cohort for that year. An unraked ring of
              leaf litter beneath the hickory canopy from leaf fall through spring
              protects overwintering pupae of both species.
            </li>
            <li>
              <strong>Stop caterpillar-control sprays on the canopy from May through September.</strong>{' '}
              Bt formulations, pyrethrins, and broad-spectrum insecticides applied
              to hickory foliage kill Luna Moth and Polyphemus Moth caterpillars
              alongside any intended pest. The large green caterpillar on your hickory
              in July is a silk moth larva building the only fat it will ever have.
              It does not harm the tree.
            </li>
            <li>
              <strong>Protect the mature tree you already have.</strong>{' '}
              A shagbark hickory that is 40 or 50 years old produces caterpillar
              host surface, bat roost crevices, and mast at a scale a newly planted
              sapling cannot match for decades. Decisions to remove old trees
              routinely treat that ecological function as zero. It is not zero.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">Two hundred years from a single nut — what happens in the decades between</h2>
          <p>
            A shagbark hickory that reaches two hundred years will have produced
            mast across dozens of squirrel lifetimes, hosted hundreds of thousands
            of caterpillars across hundreds of species, and provided roost crevices
            for bats in years when hollow trees and building soffit gaps were the
            only other options in the neighborhood. None of that is visible in a
            sapling or in the first decade of growth.
          </p>
          <p>
            In the years between planting and meaningful caterpillar host value,
            the leaves already work. Luna Moth females are not looking for the
            largest hickory — they find suitable foliage and deposit eggs. A young
            tree with a modest canopy is not the same as a mature one, but it is not
            nothing. Every silk moth in the neighborhood started its caterpillar
            stage on a leaf.
          </p>
          <p>
            The bat connection is what most homeowners miss entirely. Little Brown
            Bat and Indiana Bat populations declined steeply after white-nose syndrome
            arrived in North America in 2006 — some northeastern colonies lost 90 to
            100 percent of individuals in a single winter. The bats that survive need
            summer roost sites in the years between now and any population recovery.
            The shagbark hickory that was there before white-nose syndrome is still
            providing that function. The one planted today will provide it in thirty
            years.
          </p>
        </section>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('luna-moth')}>
            <span className="neighbor-name">Luna Moth</span>
            <span className="neighbor-note">Shagbark hickory is a primary larval host for Luna Moth alongside black walnut — females deposit eggs on hickory leaves in late May, caterpillars feed through six weeks, descend to spin a papery cocoon in the leaf litter below, and emerge as non-feeding adults the following spring; the fat stored on hickory leaves is the only fuel for the adult&apos;s seven-day life</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('polyphemus-moth')}>
            <span className="neighbor-name">Polyphemus Moth</span>
            <span className="neighbor-note">Polyphemus Moth uses hickory as a larval host alongside oaks and maples — both Polyphemus and Luna caterpillars build fat reserves in the same hickory canopy through the same summer weeks, and both overwinter as pupae in the leaf layer below the host tree; undisturbed leaf litter from October through May protects both species simultaneously</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('little-brown-bat')}>
            <span className="neighbor-name">Little Brown Bat</span>
            <span className="neighbor-note">Little Brown Bat uses the spaces between shagbark hickory bark plates as summer day roost sites — the exfoliating bark creates narrow, thermally regulated crevices that maternity colonies use when hollow trees and building cavities are unavailable; white-nose syndrome reduced Little Brown Bat populations by 70 to 90 percent in the northeast after 2006, making remaining shagbark bark-roost habitat a resource the surviving population cannot afford to lose</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-beech')}>
            <span className="neighbor-name">American Beech</span>
            <span className="neighbor-note">Shagbark hickory and American Beech are both slow-growing, long-lived mast producers of the eastern mixed hardwood forest — both support Luna Moth and Polyphemus Moth caterpillars, both produce high-fat nuts for winter wildlife, and both are host trees for hundreds of lepidopteran species; planting either alongside the other supports a fuller mast-producing canopy than either provides alone</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('black-walnut')}>
            <span className="neighbor-name">Black Walnut</span>
            <span className="neighbor-note">Luna Moth uses both black walnut and shagbark hickory as primary host trees — the two species co-occur on the same woodland edges and successional stands; juglone from black walnut does not affect hickory, so both can grow in the same yard without soil incompatibility, providing two host-tree canopies for the same silk moth population</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-gray-squirrel')}>
            <span className="neighbor-name">Eastern Gray Squirrel</span>
            <span className="neighbor-note">Eastern Gray Squirrel is shagbark hickory&apos;s primary seed disperser — squirrels cache individual nuts up to 300 feet from the parent tree in early fall, recover most through winter by scent, and the fraction left uncached germinates the following spring; over decades, squirrel caching is the mechanism by which a single mature hickory places offspring across a neighborhood</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-turkey')}>
            <span className="neighbor-name">Wild Turkey</span>
            <span className="neighbor-note">Eastern Wild Turkey takes shagbark hickory nuts from the ground through October and November — a mast year drops enough nuts that turkeys, squirrels, raccoon, and deer feed from the same tree simultaneously without depleting the crop; in lean mast years, Wild Turkey shifts to acorns and berries, returning to hickory whenever the drop is present</span>
          </button>
        </div>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>One hickory hosts Luna Moth, Polyphemus Moth, bat roosts, and winter mast for squirrels and turkeys.</strong>{' '}
            Learn why overwintering pupae need leaf litter with{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>
            , see the pesticide threat to silk moth caterpillars in the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , and find where to buy a sapling with{' '}
            <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
              Find Plants Near Me
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
