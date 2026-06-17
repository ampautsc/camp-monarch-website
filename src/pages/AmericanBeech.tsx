import type { Page } from '../App'

interface AmericanBeechProps {
  onNavigate: (page: Page) => void
}

export default function AmericanBeech({ onNavigate }: AmericanBeechProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/American_Beech_Fagus_grandifolia_Trunk_Bark.JPG/1280px-American_Beech_Fagus_grandifolia_Trunk_Bark.JPG"
          alt="The smooth, silver-gray bark of an American Beech trunk, featureless like polished stone"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={937}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Derek Ramsey&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:American_Beech_Fagus_grandifolia_Trunk_Bark.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>American Beech</h1>
        <p className="hero__lead">
          American Beech (<em>Fagus grandifolia</em>) is the only eastern tree whose bark stays smooth
          and silver-gray across three human lifetimes — initials carved in 1940 are still legible
          today, stretched as the tree grew around them. A female Luna Moth lays her eggs on its
          leaves in late May, and the fat her caterpillar stores there is the only fuel the mouthless
          adult moth will ever have for its seven-day life. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            From late June into August, Luna Moth and Polyphemus Moth caterpillars feed in the beech
            canopy, each growing to nearly three inches — bright green, studded with colored tubercles.
            When it's done feeding, a caterpillar lowers itself to the leaf litter below the tree,
            spins a thin papery cocoon among the fallen leaves, and waits out the winter as a pupa.
            The adult that climbs out the next spring has no mouth at all: it cannot eat or drink, and
            spends its single week alive doing nothing but finding a mate. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Fagus_grandifolia_young_tree_trunk_with_winter_leaves_and_buds.jpg/1280px-Fagus_grandifolia_young_tree_trunk_with_winter_leaves_and_buds.jpg"
            alt="Copper-brown beech leaves still clinging to a young smooth-barked trunk in winter, above a bed of fallen beech leaves"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            Beech leaves are marcescent — they turn copper and hang on through winter — and they
            decompose slowly, building a dense insulating litter layer. That layer is exactly where
            Luna and Polyphemus pupae overwinter; rake it away and next May's moths go with it.
            <span className="photo-credit"> Photo: Adellefrank&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Fagus_grandifolia_young_tree_trunk_with_winter_leaves_and_buds.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Beech is among the most shade-tolerant trees in the East — a sapling can idle for decades
            under a closed canopy, then surge when a gap opens overhead. A mature tree reaches 60 to
            80 feet and can live 300 to 400 years, beginning to bear nuts only at 40 to 60 years old.
            Those nuts come in irregular mast years, heavy crops separated by lean ones, and Wild
            Turkeys, deer, black bears, and seed-caching Blue Jays all time part of their autumn
            around them — the jays planting the next generation of beeches as they bury and forget. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            American Beech now faces two diseases at once: beech bark disease (a scale insect plus a
            <em> Neonectria</em> fungus, in the Northeast since the 1890s) and beech leaf disease (a
            nematode from Japan that has spread across 20-plus states since 2012 and kills young trees
            fastest). Neither has a cure. The smooth bark that makes the tree so recognizable is also
            thin and seals wounds poorly, so a single mower or trimmer strike at the base is a
            long-term entry point for infection.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant a sapling from local seed sources — a tree grown from far-off seed may leaf out
              off-schedule and miss the local insect timing. [2]
            </li>
            <li>
              Keep mowers and string trimmers well away from the trunk; beech bark can't close the
              wounds that oak and maple shrug off. [2]
            </li>
            <li>
              Skip broad-spectrum insecticide on the canopy from June through August, when the giant
              silkmoth caterpillars are feeding in the leaves. [2]
            </li>
            <li>
              Leave the leaf litter beneath the canopy undisturbed from October through May — it's the
              insulating blanket the overwintering pupae depend on. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('luna-moth')}>
            <span className="neighbor-name">Luna Moth</span>
            <span className="neighbor-note">Lays eggs on beech leaves in late May; the caterpillar's fat reserves are the only fuel the mouthless adult ever gets for its seven-day life.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('polyphemus-moth')}>
            <span className="neighbor-name">Polyphemus Moth</span>
            <span className="neighbor-note">Another giant silkmoth feeding on beech leaves and overwintering as a pupa in the same leaf litter — both emerge as non-feeding adults in spring.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-turkey')}>
            <span className="neighbor-name">Wild Turkey</span>
            <span className="neighbor-note">Scratches through the leaf litter for fallen beech nuts from October into December, building condition before winter in mast years.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('black-walnut')}>
            <span className="neighbor-name">Black Walnut</span>
            <span className="neighbor-note">The other primary Luna Moth host tree — a yard with both beech and walnut offers the moth two host chemistries and a better chance of completing its brief life.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Fagus_grandifolia" target="_blank" rel="noopener noreferrer">Wikipedia — Fagus grandifolia (American Beech)</a></li>
            <li><a href="https://xerces.org/leave-the-leaves" target="_blank" rel="noopener noreferrer">Xerces Society — Leave the Leaves</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
