import type { Page } from '../App'

interface AmericanToadProps {
  onNavigate: (page: Page) => void
}

export default function AmericanToad({ onNavigate }: AmericanToadProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bufo_americanus_PJC1.jpg/1280px-Bufo_americanus_PJC1.jpg"
          alt="An American Toad resting in garden leaf litter, its warty brown skin blending with fallen leaves"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Cephas&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Bufo_americanus_PJC1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Toad</h1>
        <p className="hero__lead">
          The American Toad (<em>Anaxyrus americanus</em>) needs two habitats to live: shallow,
          fish-free water to breed in spring, and leaf-littered ground to forage and overwinter the
          rest of the year. That long trill on a warm spring night means both systems are still
          connected — and that the yard's chemical load is low enough for one of the most sensitive
          vertebrates around to survive in it. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A single American Toad can eat up to 1,000 insects in a night — slugs, beetles,
            mosquitoes, cutworms — making it some of the best free pest control a garden has. It can
            sit out in a bed by day because the parotoid glands behind its eyes secrete bufadienolides
            that sicken most predators. But that chemical armor guards against being eaten, not against
            what soaks in: a toad's permeable skin absorbs lawn pesticides directly from soil, water,
            and leaves. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Bufo_americanus_PJC2.jpg/1280px-Bufo_americanus_PJC2.jpg"
            alt="Close view of an American Toad showing the large bulging parotoid glands behind its eyes"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            The bulging glands behind the eyes secrete toxins that deter most predators — which is
            why a toad can rest in the open by day. Pesticides absorbed through the skin bypass that
            defense entirely.
            <span className="photo-credit"> Photo: Cephas&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Bufo_americanus_PJC2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            In spring, females lay long double strings of eggs in shallow water; the tadpoles develop
            over roughly 50 to 65 days, then thumbnail-sized toadlets leave the water and scatter into
            the surrounding yard. Adults spend the days under leaf litter, boards, and loose soil, and
            when cold comes they dig down below the frost line to overwinter. Add fish to a backyard
            pond and the whole cycle collapses — fish eat the tadpoles before they can transform. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            The American Toad is still widespread and considered secure — but amphibians are now the
            most threatened class of vertebrates on Earth, with roughly 41% of species at risk.
            Chytrid fungus has erased frog populations worldwide; toads resist it better, but only
            with healthy immune function that chemical and habitat stress wear down. The point isn't
            that toads are safe — it's that stable species are worth protecting before those pressures
            arrive.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Leave leaf litter, brush piles, and loose soil in place — toads shelter under cover by
              day and burrow into it below the frost line to survive winter. [2]
            </li>
            <li>
              Eliminate glyphosate, insecticides, and other lawn chemicals; a toad's permeable skin
              takes them straight in, so the pesticide-free yard is the toad-safe yard. [2]
            </li>
            <li>
              Provide or protect a shallow, fish-free water feature with gradual edges — a rain
              garden, vernal pool, or tub pond — and keep sprayed runoff out of it. [2]
            </li>
            <li>
              Swap sodium-chloride road salt for sand or calcium magnesium acetate on any surface that
              drains toward the breeding water; chloride moves freely into ponds and deforms tadpoles. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('spring-peeper')}>
            <span className="neighbor-name">Spring Peeper</span>
            <span className="neighbor-note">Shares the same shallow, fish-free spring breeding water and the leaf-litter life on land — the two often call from the same wetland on warm March nights.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-frog')}>
            <span className="neighbor-name">Wood Frog</span>
            <span className="neighbor-note">Breeds in the same fish-free vernal pools, then spends the year in the surrounding leaf litter — a pool that suits one usually suits both.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-tree-frogs')}>
            <span className="neighbor-name">Gray Tree Frogs</span>
            <span className="neighbor-note">Another pesticide-sensitive amphibian using the same fish-free water to breed; its presence signals the same low chemical load a toad needs.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('garter-snake')}>
            <span className="neighbor-name">Garter Snake</span>
            <span className="neighbor-note">Shares the toad's pond edges and leaf-litter ground; like the toad, it depends on a chemical-free yard with cover and prey close at hand.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/American_toad" target="_blank" rel="noopener noreferrer">Wikipedia — Anaxyrus americanus (American Toad)</a></li>
            <li><a href="https://www.iucnredlist.org/species/54570/56843565" target="_blank" rel="noopener noreferrer">IUCN Red List — American Toad</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
