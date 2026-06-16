import type { Page } from '../App'

interface GoldenAlexandersProps {
  onNavigate: (page: Page) => void
}

export default function GoldenAlexanders({ onNavigate }: GoldenAlexandersProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Zizia_aurea%2C_Bird_Park%2C_2026-04-21-1.jpg/1280px-Zizia_aurea%2C_Bird_Park%2C_2026-04-21-1.jpg"
          alt="Golden Alexanders flat-topped yellow umbel clusters blooming above compound leaves"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Cbaile19&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Zizia_aurea,_Bird_Park,_2026-04-21-1.jpg" target="_blank" rel="noopener noreferrer">CC0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Golden Alexanders</h1>
        <p className="hero__lead">
          Golden Alexanders (<em>Zizia aurea</em>) is a native wildflower in the carrot family
          that opens flat-topped yellow umbels from April into May, standing 1 to 3 feet tall in
          moist to average soil, full sun to part shade. Each small sub-cluster has a central
          floret with no stalk of its own — sitting directly on the stem — a structural detail
          that separates it from every introduced yellow Apiaceae a homeowner is likely to meet.
          A small mining bee, <em>Andrena ziziae</em>, collects pollen exclusively from these
          flowers and no other plant. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            In April, a female <em>Andrena ziziae</em> digs a nesting tunnel into bare or
            sparsely vegetated ground, then flies out to provision it — landing only on Golden
            Alexanders flowers along the way. She cannot switch to dandelion or clover if Zizia
            isn't there; her body and behavior are calibrated to this one genus, and her larvae's
            underground pollen stores are built entirely from it. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Zizia_aurea1.jpg/1280px-Zizia_aurea1.jpg"
            alt="Close view of a Golden Alexanders umbel showing the central stalkless floret in each sub-cluster"
            width={1280}
            height={1911}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            Look closely at each small sub-cluster: the floret in the middle sits flush on the
            stem with no stalk of its own — the detail that confirms a native Zizia rather than
            an introduced look-alike.
            <span className="photo-credit"> Photo: DouglasGoldman&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Zizia_aurea1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Golden Alexanders blooms April through May, then holds attractive compound foliage
            through summer without reseeding aggressively. Black Swallowtail females lay eggs on
            its leaves through the bloom period — the same green-and-black banded "parsley worm"
            caterpillar gardeners find on dill, here feeding on a native host instead of a
            vegetable bed. Where their ranges overlap, Ozark Swallowtail and Anise Swallowtail use
            it the same way. The plant spreads slowly by rhizome and carries no taproot, so a
            crowded clump can be divided in fall or early spring. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Golden Alexanders itself is in no danger — it's a tough, adaptable plant across a
            wide range of yard conditions. The fragile part is the relationship riding on top of
            it: <em>Andrena ziziae</em> forages only about 300 to 600 meters from her nest, and
            if no Zizia blooms inside that radius in April, she cannot substitute another flower.
            Her nest cells simply go under-provisioned for the year.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant in moist to average soil, full sun to part shade — it tolerates a wider range
              of conditions than most other early-spring natives. [2]
            </li>
            <li>
              Plant a clump of three to five rather than a single plant, giving a provisioning
              <em> Andrena ziziae</em> female enough bloom surface to complete her April nesting
              season. [2]
            </li>
            <li>
              Skip insecticide on and near the plant — Black Swallowtail caterpillars feed openly
              on the leaves and are easy to mistake for a pest. [2]
            </li>
            <li>
              Pair it with Virginia Bluebell or Wild Columbine, two other April–May bloomers, to
              extend the early-spring nectar and pollen window across several weeks. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('black-swallowtail')}>
            <span className="neighbor-name">Black Swallowtail</span>
            <span className="neighbor-note">Lays eggs directly on Golden Alexanders leaves in April; the larva is the same "parsley worm" gardeners find on dill, here on a native host.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cobweb-skipper')}>
            <span className="neighbor-name">Cobweb Skipper</span>
            <span className="neighbor-note">Emerges in late April needing nectar within its patrol range; Golden Alexanders opens in the same two-week window.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-columbine')}>
            <span className="neighbor-name">Wild Columbine</span>
            <span className="neighbor-note">Blooms the same April–May weeks; Columbine serves the Columbine Duskywing while Golden Alexanders serves Black Swallowtail and Andrena ziziae.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('virginia-bluebell')}>
            <span className="neighbor-name">Virginia Bluebell</span>
            <span className="neighbor-note">Co-blooms through April and May; Bluebell draws Ruby-throated Hummingbirds while Golden Alexanders draws a specialist mining bee.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Zizia_aurea" target="_blank" rel="noopener noreferrer">Wikipedia — Zizia aurea (Golden Alexanders)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Papilio-polyxenes" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Black Swallowtail</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
