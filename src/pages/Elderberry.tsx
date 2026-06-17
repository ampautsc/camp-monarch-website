import type { Page } from '../App'

interface ElderberryProps {
  onNavigate: (page: Page) => void
}

export default function Elderberry({ onNavigate }: ElderberryProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/2020-05-25_08_21_17_American_black_elderberry_blooming_along_Stone_Heather_Drive_in_the_Chantilly_Highlands_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg/1280px-2020-05-25_08_21_17_American_black_elderberry_blooming_along_Stone_Heather_Drive_in_the_Chantilly_Highlands_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg"
          alt="American elderberry in full June bloom — broad flat-topped white flower clusters on arching green stems against a blue sky"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Famartin&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:2020-05-25_08_21_17_American_black_elderberry_blooming_along_Stone_Heather_Drive_in_the_Chantilly_Highlands_section_of_Oak_Hill,_Fairfax_County,_Virginia.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Shrubs</div>
        <h1>Elderberry</h1>
        <p className="hero__lead">
          American elderberry (<em>Sambucus canadensis</em>) blooms in June with flat-topped clusters
          the size of a dinner plate — thousands of tiny open florets, each holding nectar right at
          the surface with no tube to navigate. A sweat bee with a 2mm tongue feeds as easily as a
          bumblebee, and on a warm morning twenty insect species work a single cluster at once. By
          August those flowers become dark purple berries eaten by more than 70 kinds of birds. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Most high-value native flowers restrict who can use them — a tube, a pouch, a landing
            platform sized for certain bodies. Elderberry has none of that: each floret is a few
            millimeters deep with the anthers held above the petals, so short-tongued sweat bees,
            mining bees, hoverflies, soldier beetles, wasps, and bumblebees all forage the same
            corymb together. Across the three-week bloom, fifty or more species have been documented
            on a single shrub. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/American_elderberry_%28Sambucus_canadensis%29_%2823663427868%29.jpg/1280px-American_elderberry_%28Sambucus_canadensis%29_%2823663427868%29.jpg"
            alt="Hanging clusters of ripe dark purple-black elderberries on reddish stems"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            The August berries ripen during the weeks fledglings are learning to forage — and unlike
            spicebush, elderberry self-pollinates, so a single shrub fruits on its own (a second
            nearby just makes the crop heavier).
            <span className="photo-credit"> Photo: Rison Thumboor&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:American_elderberry_(Sambucus_canadensis)_(23663427868).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            While the shrub is still flowering in late May, a Cecropia moth — the largest in North
            America, with a six-inch wingspan — lays eggs on its leaves. The caterpillar grows to four
            inches by August, then spins a papery cocoon on a twig that stays visible all winter; the
            adult that emerges in spring has no mouth and lives only to find a mate by scent.
            Polyphemus moths use elderberry too. Below, the shrub spreads by root suckers into a
            multi-stem thicket over a few years. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Elderberry is fast-growing and not at risk, but two yard habits cut its value: cutting the
            root suckers back to a single stem removes the dense thicket that catbirds, sparrows, and
            woodcock nest in, and bright exterior lights through May and June pull the giant silkmoths
            off their pheromone-guided mating flights even when the host plant is right there.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant it at a fence line, yard edge, or low wet spot — it tolerates flooding, part
              shade, and dry edges where ornamental shrubs fail. [2]
            </li>
            <li>
              Let the root sprouts expand into a thicket; the dense, branchy clump is exactly the
              nesting cover catbirds, yellowthroats, and song sparrows need. [2]
            </li>
            <li>
              Check the leaves for big green caterpillars before any summer pruning, and leave those
              stems alone until September — the feeding does the shrub no lasting harm. [2]
            </li>
            <li>
              Turn off or shield exterior lights from 9pm to dawn in May and June, so emerging
              Cecropia and Polyphemus males can follow females' scent instead of your porch bulb. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('cedar-waxwing')}>
            <span className="neighbor-name">Cedar Waxwing</span>
            <span className="neighbor-note">Eats almost nothing but fruit in summer and strips a productive elderberry within days of peak ripeness, returning year after year to a reliable shrub.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cecropia-moth')}>
            <span className="neighbor-name">Cecropia Moth</span>
            <span className="neighbor-note">Lays eggs on elderberry leaves in June; the four-inch caterpillar feeds through summer before spinning a papery overwintering cocoon on a twig.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">One of dozens of bee species working the June corymbs — the open floret structure lets bees of any tongue length reach pollen from the surface.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-catbird')}>
            <span className="neighbor-name">Gray Catbird</span>
            <span className="neighbor-note">Nests in the dense shrub tangle an elderberry clump forms, then eats the berries through August during and after the breeding season.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Sambucus_canadensis" target="_blank" rel="noopener noreferrer">Wikipedia — Sambucus canadensis (American Elderberry)</a></li>
            <li><a href="https://xerces.org/bees" target="_blank" rel="noopener noreferrer">Xerces Society — Protecting Native Bees</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
