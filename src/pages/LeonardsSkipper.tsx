import type { Page } from '../App'

interface LeonardsSkipperProps {
  onNavigate: (page: Page) => void
}

export default function LeonardsSkipper({ onNavigate }: LeonardsSkipperProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hesperia_leonardus_Bruce.jpg/1280px-Hesperia_leonardus_Bruce.jpg"
          alt="Leonard's Skipper specimen with wings spread, showing orange upperwings edged in dark brown"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={910}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Skye McDavid&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Hesperia_leonardus_Bruce.jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Leonard's Skipper</h1>
        <p className="hero__lead">
          Leonard's Skipper (<em>Hesperia leonardus</em>) is the last skipper flying in the
          eastern United States each year, emerging in late August after most summer butterflies
          have already finished their season and gone by early October. Orange upperwings edged
          in dark brown identify it at a glance; the pale tan hindwing underside carries a
          curved row of white spots rather than the irregular network of its spring cousin,
          Cobweb Skipper. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A male finds the highest point in a stand of native grass — often the arching,
            trembling tip of a Prairie Dropseed seed panicle — and holds it through the
            afternoon, intercepting passing females and driving off rival males. This
            perch-and-wait behavior, called hilltopping, depends on a stem rising well above the
            surrounding ground; a mowed lawn offers nothing tall enough to serve the purpose. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Leonard%27s_Skipper_%28Hesperia_leonardus%29_-_Flickr_-_wackybadger.jpg/1280px-Leonard%27s_Skipper_%28Hesperia_leonardus%29_-_Flickr_-_wackybadger.jpg"
            alt="Leonard's Skipper perched on vegetation, showing the pale tan hindwing underside with a curved row of white spots"
            width={1280}
            height={1227}
            loading="lazy"
          />
          <figcaption>
            The curved arc of white spots on the hindwing underside is the field mark — a clean
            row rather than Cobweb Skipper's washed network.
            <span className="photo-credit"> Photo: Joshua Mayer&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Leonard's_Skipper_(Hesperia_leonardus)_-_Flickr_-_wackybadger.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            A female lays single eggs on grass blades in September — Prairie Dropseed, Little
            Bluestem, and Sideoats Grama are all documented hosts. The young larva moves to the
            base of the clump, builds a silk shelter at or just below the soil surface, and
            overwinters there. It resumes feeding the following spring, pupates in June or July,
            and the adult emerges in late August to complete the cycle. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Leonard's Skipper is holding on across its range, but its adult life lasts only 7 to
            14 days and depends on goldenrod blooming in that exact window for nectar. A border
            cut back in August before goldenrod flowers, or a grass clump raked clean in October,
            removes the resource on one end of the relationship or the larva's shelter on the
            other — either one breaks the cycle for that season.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant Prairie Dropseed or Little Bluestem in full sun, in dry to average soil —
              either provides the blade for egg-laying and the stem for a male's perch. [2]
            </li>
            <li>
              Plant goldenrod, such as Canada Goldenrod or Stiff Goldenrod, in the same sunny
              border. It is the primary adult nectar source, opening in the same week the
              butterfly emerges. [2]
            </li>
            <li>
              Leave the grass standing through winter and cut only in early spring, before new
              growth — the larva overwinters at the crown from September through April. [2]
            </li>
            <li>
              Plant three or more grass clumps within a 15-foot radius, mixing Prairie Dropseed
              and Little Bluestem where possible, to give females more than one blade to
              inspect. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('prairie-dropseed')}>
            <span className="neighbor-name">Prairie Dropseed</span>
            <span className="neighbor-note">A primary host grass; its seed panicle tip becomes the hilltop perch a male defends through the September flight window.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('little-bluestem')}>
            <span className="neighbor-name">Little Bluestem</span>
            <span className="neighbor-note">A fellow host grass; females lay eggs on its blades in late August, just as the foliage begins turning copper-red.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cobweb-skipper')}>
            <span className="neighbor-name">Cobweb Skipper</span>
            <span className="neighbor-note">Its spring counterpart in the same genus — emerging in April on the same grass stems Leonard's Skipper perched on the previous September.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('golden-alexanders')}>
            <span className="neighbor-name">Golden Alexanders</span>
            <span className="neighbor-note">Blooms months before Leonard's Skipper flies, but shares the same native-grass beds where this skipper's host plants take root.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.butterfliesandmoths.org/species/Hesperia-leonardus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Leonard's Skipper</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Hesperia_leonardus" target="_blank" rel="noopener noreferrer">Wikipedia — Hesperia leonardus (Leonard's Skipper)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
