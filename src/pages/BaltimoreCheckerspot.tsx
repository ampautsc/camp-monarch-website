import type { Page } from '../App'

interface BaltimoreCheckerspotProps {
  onNavigate: (page: Page) => void
}

export default function BaltimoreCheckerspot({ onNavigate }: BaltimoreCheckerspotProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Baltimore_Checkerspot_butterfly_%2814155370720%29.jpg/1280px-Baltimore_Checkerspot_butterfly_%2814155370720%29.jpg"
          alt="A Baltimore Checkerspot butterfly with wings open showing its striking pattern of black, white, and orange-red spots arranged in bands across the wings"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={848}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Andy Reago &amp; Chrissy McClarren&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Baltimore_Checkerspot_butterfly_(14155370720).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Baltimore Checkerspot</h1>
        <p className="hero__lead">
          The Baltimore Checkerspot is one of the most dramatically patterned butterflies
          in eastern North America — its black wings are banded with white dots and
          bordered with vivid orange-red crescents, the same colors as the coat of arms
          of Lord Baltimore, for whom the species is named. Maryland's state insect,
          its wingspan is 1.75 to 2.75 inches. It lives in wet meadows, bogs, and
          stream margins where its primary host plant, white turtlehead, grows. It is
          considered a wet-meadow specialist and a sensitive indicator of healthy
          wetland habitat. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Baltimore Checkerspots fly slowly and conspicuously — their bold pattern
            is a warning to predators that they are distasteful, a form of aposematic
            coloration. Adults nectar on native wildflowers blooming near wetland edges:
            native milkweeds, wild bergamot, black-eyed Susan, and native thistles are
            favored. They are colonial in behavior — where habitat is right, dozens of
            adults can be present in a small area. Outside their breeding colonies they
            are rarely seen. The flight period is brief, typically just three to four
            weeks in June and early July. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Baltimore_Checkerspot_%28Euphydryas_phaeton%29_on_Swamp_Milkweed_%28Asclepias_incarnata%29.jpg/1280px-Baltimore_Checkerspot_%28Euphydryas_phaeton%29_on_Swamp_Milkweed_%28Asclepias_incarnata%29.jpg"
            alt="A Baltimore Checkerspot nectaring on swamp milkweed, showing its orange-red wing border crescents and the white spot bands against black"
            width={1280}
            height={1076}
            loading="lazy"
          />
          <figcaption>
            The Baltimore Checkerspot&apos;s bold pattern is an honest warning: caterpillars
            sequester iridoid glycosides from their host plant, white turtlehead, and
            retain these compounds as adults. Birds that have tasted one generally avoid
            others, making the conspicuous pattern genuinely protective rather than
            just decorative.
            <span className="photo-credit"> Photo: wackybadger&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Baltimore_Checkerspot_(Euphydryas_phaeton)_on_Swamp_Milkweed_(Asclepias_incarnata).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Baltimore Checkerspots overwinter as caterpillars, partially grown, in leaf
            litter at the base of host plants. They emerge in spring and complete their
            development on white turtlehead, false foxglove, or plantain. Mature
            caterpillars are black with orange bands and white dots — the same warning
            pattern as the adult. Pupae form in early June; adults emerge in late June
            and July. There is one generation per year. After mating, females lay eggs
            in clusters of 100 to 700 on white turtlehead; young caterpillars feed
            gregariously before dispersing for winter. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Baltimore Checkerspot has declined significantly across much of its
            range and has been extirpated from many historically occupied areas. [1]
            Loss of wet meadow and bog habitat is the primary driver, along with
            draining of wetlands, invasive shrubs overtaking wet meadow, and the spread
            of non-native plants that replace white turtlehead. It is considered a
            species of conservation concern in many states. Climate change and altered
            hydrology in remaining wetlands are additional pressures. [2]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant white turtlehead (Chelone glabra). This is the primary host plant
              for Baltimore Checkerspot caterpillars — without it, the species cannot
              breed in an area. White turtlehead is a native wetland perennial that
              grows in moist to wet soil in partial shade; it is beautiful and well-suited
              to rain gardens and wet margins. [2]
            </li>
            <li>
              Protect and restore wet meadow habitat. Baltimore Checkerspots live in
              wet meadows, fens, and seepage slopes — wet areas with open sky and native
              wildflowers. Maintaining the hydrology of wet areas on your property,
              rather than draining them, directly supports this and many other
              specialist species. [2]
            </li>
            <li>
              Remove invasive shrubs from wet margins. Autumn olive, buckthorn, and
              multiflora rose are aggressively invading wet meadows and replacing native
              sedges, turtlehead, and other wetland wildflowers. Removing these shrubs
              allows wet meadow plant communities to recover. [2]
            </li>
            <li>
              Plant native milkweeds and bergamot near wetland edges. Adult Baltimore
              Checkerspots need nectar within and adjacent to their breeding colonies.
              Swamp milkweed (Asclepias incarnata) and wild bergamot (Monarda fistulosa)
              along the margins of wet areas provide essential adult nutrition during
              the brief June–July flight period. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('silvery-checkerspot')}>
            <span className="neighbor-name">Silvery Checkerspot</span>
            <span className="neighbor-note">The other checkerspot butterfly of the region — Silvery Checkerspots prefer open upland meadows with sunflowers and rudbeckia rather than the wet meadows the Baltimore Checkerspot requires.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('pearl-crescent')}>
            <span className="neighbor-name">Pearl Crescent</span>
            <span className="neighbor-note">A small orange-and-black butterfly that shares open meadow edges with the Baltimore Checkerspot during the summer flight period; Pearl Crescents are far more common and widespread.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('swamp-milkweed')}>
            <span className="neighbor-name">Swamp Milkweed</span>
            <span className="neighbor-note">A premier nectar plant for adult Baltimore Checkerspots — swamp milkweed thrives in the same moist to wet soil conditions where white turtlehead and Baltimore Checkerspot colonies are found.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-woodcock')}>
            <span className="neighbor-name">American Woodcock</span>
            <span className="neighbor-note">Another specialist of wet meadow and shrubby wetland edges; both the Baltimore Checkerspot and the American Woodcock are declining indicators of healthy wet meadow ecosystems.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Euphydryas_phaeton/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Baltimore Checkerspot</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Euphydryas-phaeton" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Baltimore Checkerspot</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
