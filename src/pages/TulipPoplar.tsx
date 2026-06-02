import type { Page } from '../App'

interface TulipPoplarProps {
  onNavigate: (page: Page) => void
}

export default function TulipPoplar({ onNavigate }: TulipPoplarProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Liriodendron_tulipifera_blossoms.jpg/960px-Liriodendron_tulipifera_blossoms.jpg"
          alt="Tulip Poplar flowers (Liriodendron tulipifera) — six yellow-green petals with a wide orange band at the base, surrounding a central column of pistils and stamens, open at branch tips in mid-May"
          className="species-hero-image"
          style={{ objectPosition: 'center 55%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Liriodendron_tulipifera_%28flower%29.jpg/960px-Liriodendron_tulipifera_%28flower%29.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Jay C. Farris&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Liriodendron_tulipifera_blossoms.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Tulip Poplar</h1>
        <p className="hero__lead">
          In late May, tulip poplar flowers drop onto driveways and lawns — yellow-green petals
          with a wide orange band at the base, scattered by the dozens under a tree that is
          already 80 or 90 feet tall. The flowers were opening in the canopy, one at every
          branch tip across the entire crown, and each one holds a pool of nectar in the cup
          where the petal bases meet. Ruby-throated Hummingbirds time the end of their northward
          migration to arrive when this tree is in bloom. Most insects cannot reach the nectar pool
          at the base of the flower — the cup is deep enough that short tongues come up empty,
          and the hummingbird's bill fits the opening exactly. The fallen flowers are what
          remained after the hummingbirds and carpenter bees were finished.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">Liriodendron tulipifera: magnolia family, straight trunk, four-lobed leaf with a notch where the tip should be</h2>
          <p>
            Tulip poplar is not a poplar. It belongs to the magnolia family — Magnoliaceae —
            and is more closely related to cucumber tree and sweetbay magnolia than to any
            cottonwood or aspen. The name comes from the tulip-shaped flowers, not from any
            botanical relationship to true poplars (genus <em>Populus</em>). The scientific name
            reflects both: <em>Liriodendron</em> (lily tree) for the flowers,
            <em>tulipifera</em> (tulip-bearing) for the same feature.
          </p>
          <p>
            The leaf is immediately distinctive: four lobes, with a wide notch at the apex where
            the leaf tip would be on any other tree. No other eastern North American tree has
            this shape. Mature leaves are two to five inches across, held on long petioles that
            make them flutter and turn in slight winds. In fall they turn butter yellow — the
            entire canopy in one week, often before most other trees have changed at all.
          </p>
          <p>
            In eastern forests, tulip poplar can reach 120 feet with a trunk that carries no
            branches in the lower 50 to 70 feet when growing in competition with surrounding
            trees. In open yards where competition is low, the branching starts lower and the
            crown spreads 40 to 60 feet wide. It is one of the first trees to colonize a canopy
            gap — after a windthrow, a logging cut, or a storm. In those openings, with full sun,
            it grows two to four feet per year in the first decade.
          </p>
        </section>

        <section aria-labelledby="flowers-heading">
          <h2 id="flowers-heading">Nectar pooling at the base of six petals — and the six-week window when hummingbirds work the canopy</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/544703028/large.jpg"
              alt="Tulip Poplar (Liriodendron tulipifera) leaves — the four-lobed shape with a notched apex, held on long petioles; no other native eastern tree has this leaf form"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Liriodendron_tulipifera_leaf.jpg/480px-Liriodendron_tulipifera_leaf.jpg'
              }}
            />
            <figcaption>
              The tulip poplar leaf — four lobes with a squared-off notch at the apex where most
              other trees end in a point. This leaf shape appears at any scale from a spring
              seedling to a canopy branch 80 feet up. Finding a leaf on the ground in early June,
              after the flowers have fallen, is the easiest way to confirm a tulip poplar
              is in the yard. Tiger Swallowtail females press their tarsi against this leaf surface
              to confirm the chemistry before laying an egg on it.
              <span className="photo-credit"> Photo: danielatha&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/302247794" target="_blank" rel="noopener noreferrer">iNaturalist obs. 302247794</a>&nbsp;· CC0</span>
            </figcaption>
          </figure>
          <p>
            The flowers open in mid-May across most of the Midwest and Middle Atlantic — sometimes
            earlier in the South, later in the North. Each flower has six petals: yellow-green on
            the outer surface, with a broad band of deep orange at the base. At the center, a
            column of pistils and stamens rises from the cup formed by the petal bases. That cup
            holds nectar continuously for two to three days while the flower remains open.
          </p>
          <p>
            The cup is deep. Most insects — including honey bees — cannot reach the nectar pool
            by probing from the flower's opening. Carpenter bees sometimes cut through the base
            of the petals to reach the nectar directly, bypassing the pollination architecture
            entirely. The Ruby-throated Hummingbird's bill fits the cup opening and reaches the
            pool without cutting — and picks up pollen on its bill and forehead with each visit,
            transferring it to the next flower.
          </p>
          <p>
            After two to three days, the petals fall. Below a tree in full bloom, a few dozen fallen
            flowers on the driveway in one morning is not unusual. The tree may carry hundreds of
            open flowers at once across the full crown. What follows is a cone-shaped seed
            aggregate that develops through summer — a cluster of papery-winged nutlets that
            begins releasing seeds from late October through winter, each one spiraling down
            to seek an opening where it can germinate in full sun.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">Tiger Swallowtail, Cecropia Moth, and Polyphemus Moth — three large Lepidoptera that start on tulip poplar leaves</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Papilio_glaucus_larva_1.jpg"
              alt="Eastern Tiger Swallowtail caterpillar in its late instar — green with two large false eyespots near the head, after shedding the earlier bird-dropping camouflage of the first three instars"
              loading="lazy"
            />
            <figcaption>
              An Eastern Tiger Swallowtail caterpillar in its late instar on a leaf. Early instars
              on the same leaf look nothing like this — they are dark brown with irregular white
              patches, designed to match a fresh bird dropping resting on a leaf surface.
              The shift from bird-dropping camouflage to eyespot form happens at the third-to-fourth
              molt. Both forms are findable on tulip poplar branch tips from late June through August.
              <span className="photo-credit"> Photo: Jacy Lucier&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Papilio_glaucus_larva_1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Female Eastern Tiger Swallowtails seek out tulip poplar during egg-laying flights in
            May and June, alongside wild black cherry and sassafras. They detect the tree's volatile
            compounds from a distance and confirm the host by pressing their feet against a leaf —
            tarsal chemoreceptors sensitive to the specific chemistry trigger egg-laying behavior.
            Each egg is placed singly on the upper surface of a young leaf at a branch tip.
          </p>
          <p>
            Cecropia Moth females also oviposit on tulip poplar. The Cecropia caterpillar reaches
            four and a half inches at maturity — green with rows of blue and yellow nodules —
            and feeds from July through September before spinning a large silk cocoon wrapped
            around a branch. The adult Cecropia Moth is the largest moth in North America, with
            wingspans reaching five and a half inches. It emerges in late May the following year,
            mates without eating, and lives only a week or two. The caterpillar on tulip poplar
            leaves from midsummer is the only feeding stage in the entire two-year cycle.
          </p>
          <p>
            Polyphemus Moth females also lay eggs on tulip poplar. A single mature tulip poplar
            in a suburban yard — one that has been producing leaves for 20 years — can carry
            resident populations of all three species in most years. No deliberate introduction
            is needed. These caterpillars are there because the tree is there.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant one sapling in full sun, leave the fallen flowers, and don't spray the canopy</h2>
          <ol className="step-list">
            <li>
              <strong>Plant a tulip poplar in the sunniest available spot, well away from power lines.</strong>{' '}
              Tulip poplar grows two to four feet per year in full sun with adequate soil moisture —
              in 10 years, a container-grown sapling will reach 25 to 40 feet. Give it room to grow
              without hitting overhead wires. Planted well clear of structure, it does not require
              removal. Find nurseries stocking native trees with{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Leave the fallen flowers on the driveway for a day or two.</strong>{' '}
              Fallen tulip poplar petals in late May brown and dry within 48 hours. They are not
              damaging to any surface. A sweep or rinse removes them in a minute. The tree that
              dropped them is producing Tiger Swallowtail caterpillars in the branches above —
              the fallen flowers are the most visible evidence that the tree's bloom is over
              and the caterpillar season has started.
            </li>
            <li>
              <strong>Leave leaf damage on tulip poplar from June through September without treating it.</strong>{' '}
              Chewed leaf edges and dried frass on lower branches indicate Tiger Swallowtail or
              Cecropia caterpillars in residence. Tiger Swallowtail caterpillars rarely take more
              than 10% of the leaf area on a mature tree across a full season. An application of
              Btk or any broad-spectrum insecticide to control that level of feeding eliminates
              the caterpillar generation along with whatever was targeted.
            </li>
            <li>
              <strong>Keep cats indoors during dawn and dusk in May when hummingbirds are working the canopy.</strong>{' '}
              The tulip poplar bloom runs roughly two weeks. During that window, Ruby-throated
              Hummingbirds feeding in the upper branches are vulnerable during landing and
              perching. A yard with tulip poplar in bloom and a hummingbird feeder nearby
              may hold two or three individuals competing for both resources at once —
              the same birds that arrive at the feeder in April return to the tree when it flowers.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">What nests in the tulip poplar canopy and feeds in it at the same time</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
              <span className="neighbor-name">Eastern Tiger Swallowtail</span>
              <span className="neighbor-note">Females oviposit on young tulip poplar leaves in May and June; caterpillars pass through a bird-dropping camouflage phase and then an eyespot phase on the same branch from late June through August; overwintering chrysalids attach to the bark each fall</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('ruby-throated-hummingbird')}>
              <span className="neighbor-name">Ruby-Throated Hummingbird</span>
              <span className="neighbor-note">Times the northward spring migration to arrive when tulip poplar blooms; the flower cup is deep enough that the hummingbird bill fits the opening and reaches the nectar pool directly — giving it access that short-tongued insects cannot match</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('cecropia-moth')}>
              <span className="neighbor-name">Cecropia Moth</span>
              <span className="neighbor-note">North America's largest moth, with wingspans to five and a half inches — its caterpillar feeds on tulip poplar from July through September, spins a cocoon around a branch before winter, and emerges as an adult that lives only long enough to mate</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('polyphemus-moth')}>
              <span className="neighbor-name">Polyphemus Moth</span>
              <span className="neighbor-note">Also uses tulip poplar as a larval host alongside oak and maple; the silk cocoon is spun among leaves and falls to the leaf litter in autumn — a mature tulip poplar in a suburban yard holds Polyphemus and Cecropia caterpillars in most years without any introduction</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('black-cherry')}>
              <span className="neighbor-name">Wild Black Cherry</span>
              <span className="neighbor-note">The other primary canopy host tree for Tiger Swallowtail caterpillars — a yard with both tulip poplar and wild black cherry holds different caterpillar cohorts on each tree through different weeks of June and July, extending the season past what either tree provides alone</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('wild-columbine')}>
              <span className="neighbor-name">Wild Columbine</span>
              <span className="neighbor-note">Blooms April through May — the same weeks when hummingbirds are arriving and visiting tulip poplar flowers in the canopy; columbine at ground level and tulip poplar flowers overhead give the same hummingbird two feeding stations in a single yard through the first six weeks of spring</span>
            </button>
          </div>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>One tulip poplar in full sun starts three species of large Lepidoptera and draws hummingbirds into the yard each May.</strong>{' '}
            See what Tiger Swallowtails need through the whole season on the{' '}
            <button className="link-button" onClick={() => onNavigate('tiger-swallowtail')}>
              Tiger Swallowtail page
            </button>
            , find tulip poplar at a native nursery with{' '}
            <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
              Find Plants Near Me
            </button>
            , and see how canopy trees fit into a layered yard in{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-layers')}>
              Habitat Layers
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
