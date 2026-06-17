import type { Page } from '../App'

interface SwampMilkweedProps {
  onNavigate: (page: Page) => void
}

export default function SwampMilkweed({ onNavigate }: SwampMilkweedProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Asclepias_incarnata%2C_Homewood_Cemetery%2C_2024-07-26.jpg/1280px-Asclepias_incarnata%2C_Homewood_Cemetery%2C_2024-07-26.jpg"
          alt="Swamp Milkweed in bloom with deep rose-pink flower clusters beside a pond"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Cbaile19&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Asclepias_incarnata,_Homewood_Cemetery,_2024-07-26.jpg" target="_blank" rel="noopener noreferrer">CC0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Swamp Milkweed</h1>
        <p className="hero__lead">
          Swamp Milkweed (<em>Asclepias incarnata</em>) grows in wet soil that kills most other
          milkweeds — stream banks, rain garden basins, the low corner of a yard that holds water
          after rain. A monarch caterpillar can only complete its larval stage on milkweed
          leaves, and this is the one species that thrives exactly where Common Milkweed fails,
          putting that food source in ground other plants can't use. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Each milkweed flower hides five slippery grooves between hood-like petals. A bee
            landing to feed slips a leg into one, and as it works to pull free, a waxy pollen
            sac called a pollinium clips onto the leg like a tiny saddlebag. Strong fliers carry
            it to the next plant and complete the pollination; weaker insects can lose the leg
            entirely trying to break free. It's not a casual flower to visit. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Asclepias_incarnata_01.jpg/1280px-Asclepias_incarnata_01.jpg"
            alt="Close view of deep rose-pink Swamp Milkweed flower clusters"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            Deeper rose-to-magenta and flatter-topped than Common Milkweed's pale, globe-shaped
            clusters — the color difference reads from twenty feet away.
            <span className="photo-credit"> Photo: Andrey Zharkikh&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Asclepias_incarnata_01.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Flowers open in July and run through August, a window between Common Milkweed's
            June peak and the goldenrod and asters of September — keeping nectar available
            through the middle of summer. By October the narrow seed pods split open, and each
            of the 60 to 80 seeds inside drifts off on its own tuft of silk. Unlike Common
            Milkweed's spreading rhizomes, Swamp Milkweed grows as a clump and stays where it's
            planted. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Swamp Milkweed is widespread and not at risk, but it's frequently overlooked in
            exactly the spot where it would do the most good. Homeowners who try Common
            Milkweed in a wet, low corner and watch it die rarely circle back to try the one
            milkweed bred for standing water.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant it in the lowest, wettest corner of the yard — a rain garden basin or
              drainage swale is exactly the ground this milkweed wants. [2]
            </li>
            <li>
              Plant three to five together; a single plant can be stripped bare by one large
              monarch brood. [2]
            </li>
            <li>
              Choose the native pink-flowered form over white cultivars like 'Ice Ballet' —
              white selections draw noticeably fewer specialist bees. [2]
            </li>
            <li>
              Leave seed pods on the plant through October so they open naturally, then cut
              dead stems to 6 inches in late fall or spring, not before. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">Larvae feed exclusively on milkweed leaf tissue; Swamp Milkweed extends that habitat into ground too wet for other species.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
            <span className="neighbor-name">Native Bees</span>
            <span className="neighbor-note">Milkweed-specialist bees forage almost exclusively on Asclepias flowers, relying on the pollinium-and-hood mechanism to move pollen.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('common-milkweed')}>
            <span className="neighbor-name">Common Milkweed</span>
            <span className="neighbor-note">The rhizome-spreading milkweed for well-drained soil, blooming June through July just before Swamp Milkweed opens.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('joe-pye-weed')}>
            <span className="neighbor-name">Joe-Pye Weed</span>
            <span className="neighbor-note">Shares the same wet ground and blooms August into September, carrying nectar forward as Swamp Milkweed finishes.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Asclepias_incarnata" target="_blank" rel="noopener noreferrer">Wikipedia — Asclepias incarnata (Swamp Milkweed)</a></li>
            <li><a href="https://www.xerces.org/monarchs" target="_blank" rel="noopener noreferrer">Xerces Society — Monarchs (conservation overview)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
