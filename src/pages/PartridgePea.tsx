import type { Page } from '../App'

interface PartridgePeaProps {
  onNavigate: (page: Page) => void
}

export default function PartridgePea({ onNavigate }: PartridgePeaProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Partridge_Pea_flower.jpg/1280px-Partridge_Pea_flower.jpg"
          alt="Close view of a yellow five-petaled Partridge Pea flower with a red center"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Meachum.olga&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Partridge_Pea_flower.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Partridge Pea</h1>
        <p className="hero__lead">
          Partridge Pea (<em>Chamaecrista fasciculata</em>) is a native annual that germinates in
          bare, sunny ground each spring and opens five-petaled yellow flowers from July through
          September. It carries nectar in an unusual second place: small glands on the leaf
          stems, separate from the flowers, that feed ants. The ants drink and then patrol the
          leaf surface, attacking the caterpillars and beetles they find there. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A Cloudless Sulphur caterpillar feeding on a Partridge Pea leaf shifts its own body
            color to match what it's eating — green while consuming leaves, yellow while
            consuming flowers — camouflage against the same plant that's paying ants in sugar to
            hunt it down. The caterpillar is usually large enough to shrug off an ant's attack;
            smaller, newly hatched larvae are not. Both the guard duty and the camouflage are
            playing out on the same stem at once. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Partridge_Pea_and_Cloudless_Sulfur_Caterpillar.jpg/1280px-Partridge_Pea_and_Cloudless_Sulfur_Caterpillar.jpg"
            alt="A Cloudless Sulphur caterpillar resting on a Partridge Pea leaf"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            A Cloudless Sulphur caterpillar shifts between green and yellow depending on whether
            it's eating leaves or flowers — a moving match to its own food.
            <span className="photo-credit"> Photo: Meachum.olga&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Partridge_Pea_and_Cloudless_Sulfur_Caterpillar.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Seeds germinate in spring without any help, and the plant reaches 1 to 3 feet by
            midsummer. Cloudless Sulphur, Sleepy Orange, and Little Yellow butterflies all lay
            eggs on its leaves from July through September — three species sharing one host
            plant in the same weeks. Root nodules fix nitrogen into the soil all season, and by
            late September the seed pods split and drop seed near the parent plant, ready to
            germinate again the following spring without replanting. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Partridge Pea is common and not at risk, but as an annual it depends entirely on
            self-seeding to return. A tidy autumn cleanup that rakes up and discards the dried
            pods before they split removes next year's plants along with this year's stems.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Sow seed in lean, dry to average soil in full sun — rich garden soil pushes leaf
              growth at the expense of flowers and seed. [2]
            </li>
            <li>
              Scarify seed by rubbing it between two sheets of sandpaper, or soak overnight,
              before sowing — the seed coat is too hard to germinate well otherwise. [2]
            </li>
            <li>
              Leave dried pods on the ground through winter instead of raking them up; this
              year's seed is next year's plants. [2]
            </li>
            <li>
              Apply no insecticide from July through September, when Cloudless Sulphur, Sleepy
              Orange, and Little Yellow caterpillars are all feeding on the leaves. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('cloudless-sulphur')}>
            <span className="neighbor-name">Cloudless Sulphur</span>
            <span className="neighbor-note">Caterpillars develop only on Chamaecrista legumes and shift body color to match leaf or flower tissue as they feed.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('sleepy-orange')}>
            <span className="neighbor-name">Sleepy Orange</span>
            <span className="neighbor-note">Lays eggs singly on young leaflets from July through September; adults overwinter active rather than migrating south.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('little-yellow')}>
            <span className="neighbor-name">Little Yellow</span>
            <span className="neighbor-note">The smallest of the three Partridge Pea-dependent butterflies; its pale green caterpillars are nearly invisible on the foliage.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-cottontail')}>
            <span className="neighbor-name">Eastern Cottontail</span>
            <span className="neighbor-note">Browses the low spreading foliage through July and August, the same weeks dispersing kits are learning to forage on their own.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Chamaecrista_fasciculata" target="_blank" rel="noopener noreferrer">Wikipedia — Chamaecrista fasciculata (Partridge Pea)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Phoebis-sennae" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Cloudless Sulphur</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
