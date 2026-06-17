import type { Page } from '../App'

interface CanadaGoldenrodProps {
  onNavigate: (page: Page) => void
}

export default function CanadaGoldenrod({ onNavigate }: CanadaGoldenrodProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Monarch_on_Goldenrod_%285230034900%29.jpg/1280px-Monarch_on_Goldenrod_%285230034900%29.jpg"
          alt="A monarch butterfly with open wings feeding on a golden goldenrod plume in a grassy late-summer meadow"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: USFWS — Northeast Region&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Monarch_on_Goldenrod_(5230034900).jpg" target="_blank" rel="noopener noreferrer">Public domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Canada Goldenrod</h1>
        <p className="hero__lead">
          Canada goldenrod (<em>Solidago canadensis</em>) blooms from late August through October —
          one of the few native perennials still producing abundant nectar exactly when migrating
          monarchs are converting flower sugar into the abdominal fat that fuels a 2,500-mile flight
          to Mexico. It's also the plant most often pulled by mistake: goldenrod doesn't cause hay
          fever. Ragweed does, blooming at the same time two feet away. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A monarch nectaring on goldenrod in late September isn't just passing through — it's
            fuel-loading, turning sugar into the fat reserves it will burn over continuous flight
            days to a single mountain forest in Michoacán. It shares the flowers with dozens of
            native bee species, including the federally endangered rusty patched bumble bee, whose
            colonies depend on late goldenrod nectar to provision the queens that survive winter and
            start next year's colony. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Solidago_canadensis_20050815_248.jpg/1280px-Solidago_canadensis_20050815_248.jpg"
            alt="A tall pyramidal plume of Canada goldenrod flower buds beginning to open at a woodland edge"
            width={1280}
            height={1707}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            Goldenrod's pollen is large, sticky, and built to ride on bee bodies — it's
            insect-pollinated and never becomes airborne, which is why it can't reach your sinuses
            the way wind-borne ragweed pollen does.
            <span className="photo-credit"> Photo: Georg Slickers&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Solidago_canadensis_20050815_248.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Bloom time tracks latitude — late July in the north, mid-August through October across
            the Midwest and mid-Atlantic, into November in the South — so a plant grown from a local
            ecotype flowers on the schedule that matches the migration where you live. After the
            flowers finish, the seed heads dry on stiff stems and American goldfinches work them from
            October through winter. The plant spreads by underground rhizome, forming the dense stands
            that turn a fence row gold in fall. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Canada goldenrod is common and not at risk — but it's routinely pulled on the hay-fever
            myth, which removes one of the highest-value nectar sources of the entire season and does
            nothing about the wind-pollinated ragweed actually causing the sneezing.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant it in full sun in almost any soil — poor, dry, clay, or sand; it needs no
              amendment or watering once established. [2]
            </li>
            <li>
              Give it a defined edge — a mow line, fence, or contained bed — since it spreads
              vigorously by rhizome in rich ground. [2]
            </li>
            <li>
              Leave the seed heads standing through winter for goldfinches, and cut back in late
              February before new growth starts. [2]
            </li>
            <li>
              Choose the straight species over cultivars like 'Fireworks' — selected varieties often
              produce less of the nectar and pollen that make goldenrod valuable. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">The fall generation fuels its 2,500-mile flight to Mexico primarily on goldenrod and aster nectar through September and October.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('new-england-aster')}>
            <span className="neighbor-name">New England Aster</span>
            <span className="neighbor-note">Opens as goldenrod peaks and carries the nectar window into October — together the two cover the entire monarch fuel-loading period.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Works the dry seed heads from October into winter, long after the monarchs have passed — the reason to leave the stems standing.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
            <span className="neighbor-name">Native Bees</span>
            <span className="neighbor-note">Late goldenrod nectar provisions the winter queens of many species, including the endangered rusty patched bumble bee, when little else is blooming.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Solidago_canadensis" target="_blank" rel="noopener noreferrer">Wikipedia — Solidago canadensis (Canada Goldenrod)</a></li>
            <li><a href="https://www.xerces.org/monarchs" target="_blank" rel="noopener noreferrer">Xerces Society — Monarchs (nectar and migration)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
