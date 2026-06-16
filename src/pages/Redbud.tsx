import type { Page } from '../App'

interface RedbudProps {
  onNavigate: (page: Page) => void
}

export default function Redbud({ onNavigate }: RedbudProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Cercis_canadensis_redbud_tree_bloom.jpg/1280px-Cercis_canadensis_redbud_tree_bloom.jpg"
          alt="Eastern Redbud (Cercis canadensis) in full bloom — bare branches covered in dense clusters of deep pink-magenta flowers before any leaves have emerged"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Jane S. Richardson&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Cercis_canadensis_redbud_tree_bloom.jpg" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>Redbud</h1>
        <p className="hero__lead">
          Eastern Redbud (<em>Cercis canadensis</em>) blooms on bare branches in March — before
          a single leaf opens — and a Henry&apos;s Elfin female deposits her eggs inside those
          flower clusters while the tree is still leafless. This native understory tree reaches
          20 to 30 feet at maturity, tolerates more shade than most flowering trees, and fixes
          its own nitrogen through root nodules like other legumes. Henry&apos;s Elfin is one of
          the few butterflies whose caterpillar never eats a leaf — it lives entirely on redbud
          flowers and developing seed pods. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Clusters of 4 to 8 pea-shaped magenta flowers open directly from the bark of
            branches and trunk in late March, two to three weeks before any leaf appears — the
            entire tree is bare wood covered in color. A Henry&apos;s Elfin female flying in
            late March follows the scent to redbud and presses single eggs against the interior
            of partially open flowers, near the nectary, where the pale green egg is nearly
            invisible among the petals. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Eastern_Redbud_%28Cercis_canadensis%29_Bark_and_Blooms_-_Knoxville%2C_Tennessee_-_April_10%2C_2020.jpg/1280px-Eastern_Redbud_%28Cercis_canadensis%29_Bark_and_Blooms_-_Knoxville%2C_Tennessee_-_April_10%2C_2020.jpg"
            alt="Eastern Redbud (Cercis canadensis) flower clusters emerging directly from the bark of a branch before any leaves have appeared"
            width={1280}
            height={1707}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            Flowers open directly from the bark surface of the trunk and major branches, not
            just from twig tips. The blossoms are also edible — Cherokee and other Indigenous
            peoples ate them raw and cooked them into fritters and corn bread, a slightly sweet,
            faintly acidic flavor unique among common eastern native trees.
            <span className="photo-credit"> Photo: David Ratledge&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Eastern_Redbud_(Cercis_canadensis)_Bark_and_Blooms_-_Knoxville,_Tennessee_-_April_10,_2020.jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The Henry&apos;s Elfin caterpillar feeds on flowers through April, then shifts to
            the small developing seed pods as petals drop, finishing its final instar by
            mid-May and dropping to the leaf litter below to pupate. That pupa stays dormant for
            roughly eleven months until the next bloom opens. Later in the year, redbud&apos;s
            flat brown pods persist on bare branches through December, and goldfinches,
            cardinals, and grosbeaks extract the 6 to 10 seeds inside each one through the
            winter months. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Redbud is widely planted and in no danger as a species, but a Henry&apos;s Elfin
            population depends on one narrow, specific window: undisturbed flower clusters in
            March and April, and undisturbed leaf litter at the base of the same tree for the
            eleven months after. A redbud pruned heavily each spring and raked clean each fall
            can look perfectly healthy while supporting no elfins at all.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Don&apos;t prune spent flower clusters in spring. Henry&apos;s Elfin eggs and
              young caterpillars are inside those clusters exactly when most spring pruning
              happens. [2]
            </li>
            <li>
              Leave the leaf litter at the base of the tree from May through March, where the
              pupa lies dormant for roughly eleven months. [2]
            </li>
            <li>
              Skip insecticide on the redbud during the March-through-May bloom and pod period,
              when both the caterpillar and foraging native bees are present on the tree. [2]
            </li>
            <li>
              If no redbud is present, plant one in partial shade 10 to 20 feet from a larger
              tree&apos;s trunk — it reaches flowering size in 3 to 5 years. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('henrys-elfin')}>
            <span className="neighbor-name">Henry&apos;s Elfin</span>
            <span className="neighbor-note">Deposits eggs inside redbud flower clusters in late March; the caterpillar eats only flowers and developing seed pods, then overwinters as a pupa in leaf litter for eleven months.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Queens emerging from winter hibernation in late March need early pollen and nectar immediately; redbud's flowers open in that exact window, before most other bloom is available.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-cardinal')}>
            <span className="neighbor-name">Northern Cardinal</span>
            <span className="neighbor-note">Forages on redbud seed pods in late autumn before they fully dry, when acorns have already been taken and winter feeders aren't yet the primary food source.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
            <span className="neighbor-name">Eastern Tiger Swallowtail</span>
            <span className="neighbor-note">Adults nectar at redbud flowers in April and puddle on nearby bare ground, though its own caterpillars depend on tulip poplar, wild cherry, and ash rather than redbud.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Cercis_canadensis" target="_blank" rel="noopener noreferrer">Wikipedia — Cercis canadensis (Eastern Redbud)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Callophrys-henrici" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Henry&apos;s Elfin</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
