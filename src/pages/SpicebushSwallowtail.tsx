import type { Page } from '../App'

interface SpicebushSwallowtailProps {
  onNavigate: (page: Page) => void
}

export default function SpicebushSwallowtail({ onNavigate }: SpicebushSwallowtailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Papilio_troilus_25zz.jpg"
          alt="A Spicebush Swallowtail butterfly with wings spread showing its black wings with cream forewing spots and the iridescent blue-green patch on the hindwing"
          className="species-hero-image"
          style={{ objectPosition: 'center top' }}
          width={1000}
          height={1036}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: David J. Stang&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Papilio_troilus_25zz.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Spicebush Swallowtail</h1>
        <p className="hero__lead">
          The Spicebush Swallowtail is a large, dramatic butterfly with black wings,
          two rows of cream spots on the forewing margins, and a sweeping iridescent
          blue-green patch across the hindwings — females show brilliant blue, males
          a blue-green. Its wingspan is 3.5 to 4.5 inches. It flies in wooded areas,
          forest edges, and gardens near its host plants: spicebush and sassafras.
          The caterpillar is a remarkable snake mimic, complete with inflatable false
          eyespots on the thorax. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Spicebush Swallowtails are woodland butterflies that fly along forest
            edges, through gaps in the canopy, and into garden clearings. Their flight
            is rapid and somewhat erratic compared to Tiger Swallowtails. Adults
            nectar on native wildflowers — jewelweed, native thistles, milkweeds,
            phlox, and native azaleas — and are often seen moving between the forest
            understory and open garden areas. Females fly low through the forest understory,
            tasting the undersides of leaves with their feet to find spicebush and
            sassafras for egg-laying. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Spicebush_Swallowtail_-_Papilio_troilus%2C_Meadowwood_Farm_SRMA%2C_Mason_Neck%2C_Virginia.jpg/1280px-Spicebush_Swallowtail_-_Papilio_troilus%2C_Meadowwood_Farm_SRMA%2C_Mason_Neck%2C_Virginia.jpg"
            alt="A Spicebush Swallowtail butterfly nectaring showing the blue iridescent hindwing patch and the orange spots near the hindwing tail"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            The iridescent blue of the female Spicebush Swallowtail is one of the
            most vivid colors in the eastern butterfly fauna. In bright sunlight the
            hindwings flash between blue and blue-green as the viewing angle changes.
            Males are similar but slightly less intensely blue.
            <span className="photo-credit"> Photo: Judy Gallagher&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Spicebush_Swallowtail_-_Papilio_troilus,_Meadowwood_Farm_SRMA,_Mason_Neck,_Virginia.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Spicebush Swallowtails overwinter as pupae. Adults emerge in late April
            or early May, and there are two generations per year across most of the
            range. Females lay single eggs on the underside of spicebush or sassafras
            leaves. Young caterpillars live inside a leaf they fold over and secure
            with silk. Mature caterpillars develop brilliant inflatable orange eyespots
            on the thorax — when threatened, they rear up and inflate the eyespots to
            mimic a snake&apos;s face. The caterpillar&apos;s body is bright yellow-green, providing
            camouflage among leaves. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Spicebush Swallowtail is common across eastern North America and not
            of conservation concern. [1] It is closely tied to spicebush (Lindera benzoin)
            and sassafras (Sassafras albidum) — both native understory shrubs and trees
            that are widespread but declining in areas where the non-native shrub
            Japanese barberry and other invasive understory plants outcompete native
            shrubs. Loss of spicebush from the forest understory directly reduces
            Spicebush Swallowtail populations in affected areas. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant spicebush (Lindera benzoin) in the yard. Spicebush is a native
              shrub for partly shaded conditions that serves as the primary host plant
              for the Spicebush Swallowtail. It also produces early-season flowers
              (before leaves emerge) that provide pollen for early bees, and its berries
              are eaten by migratory birds including Wood Thrush. [2]
            </li>
            <li>
              Allow sassafras to grow from root sprouts in the woodland edge. Sassafras
              spreads by root sprouts and is commonly cut back as a weed — but it is a
              key host tree for Spicebush Swallowtail and supports many other wildlife
              species. A grove of native sassafras in the lawn margin provides caterpillar
              habitat at essentially no cost. [2]
            </li>
            <li>
              Plant native jewelweed (Impatiens capensis) in moist shaded areas. This
              native annual wildflower blooms mid-summer and is a premier nectar source
              for Spicebush Swallowtails, Ruby-throated Hummingbirds, and bumblebees.
              It self-seeds reliably in moist areas once established. [2]
            </li>
            <li>
              Remove invasive shrubs from the understory. Japanese barberry, multiflora
              rose, and bush honeysuckle displace spicebush and other native understory
              shrubs. Removing invasive shrubs allows spicebush to regenerate and
              recover. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
            <span className="neighbor-name">Eastern Tiger Swallowtail</span>
            <span className="neighbor-note">The other large swallowtail of eastern woodlands — Tiger Swallowtails use the forest canopy (cherry, tulip poplar) while Spicebush Swallowtails use the understory (spicebush, sassafras).</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('pipevine-swallowtail')}>
            <span className="neighbor-name">Pipevine Swallowtail</span>
            <span className="neighbor-note">The dark, iridescent blue swallowtail that female Spicebush Swallowtails closely mimic — both fly the same forest edges, and their similar appearance gives both protection from birds.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">Nests in the same mature woodland interiors where spicebush grows; both species are indicators of healthy native forest understory.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('ruby-throated-hummingbird')}>
            <span className="neighbor-name">Ruby-throated Hummingbird</span>
            <span className="neighbor-note">Visits the same native wildflowers — particularly jewelweed and native azaleas — that Spicebush Swallowtails nectar on through summer.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Papilio_troilus/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Spicebush Swallowtail</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Papilio-troilus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Spicebush Swallowtail</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
