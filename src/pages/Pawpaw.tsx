import type { Page } from '../App'

interface PawpawProps {
  onNavigate: (page: Page) => void
}

export default function Pawpaw({ onNavigate }: PawpawProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Wild_pawpaw_patch_with_fruit_in_Michigan.jpg/1280px-Wild_pawpaw_patch_with_fruit_in_Michigan.jpg"
          alt="A wild Pawpaw patch with fruit hanging among the large drooping leaves"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={718}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Cbarlow&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Wild_pawpaw_patch_with_fruit_in_Michigan.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Pawpaw</h1>
        <p className="hero__lead">
          Pawpaw (<em>Asimina triloba</em>) is a small understory tree of eastern woodland edges
          and stream banks, the only member of the mostly tropical custard-apple family native to
          temperate North America. Its September fruit — yellow-green to brown, with creamy
          flesh tasting of banana and mango — is the largest edible fruit native to the
          continent. The Zebra Swallowtail butterfly lays eggs on no other plant; she presses her
          feet to a leaf to read its chemistry before deciding it's the right one. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Pawpaw leaves carry acetogenins, compounds toxic enough to keep deer and most insects
            away entirely. A female Zebra Swallowtail searching for a place to lay has evolved
            the opposite response: chemoreceptors in her feet detect that same chemical signature.
            She walks across a leaf, registers the match, and lays an egg on the underside — or
            finds no match and lifts off to keep searching. She does not lay on anything else. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Pawpaw_%28Asimina_triloba%29_Ripe_Fruit_Cross_Section.jpg/1280px-Pawpaw_%28Asimina_triloba%29_Ripe_Fruit_Cross_Section.jpg"
            alt="Cross section of a ripe Pawpaw fruit showing creamy yellow-orange flesh"
            width={1280}
            height={1707}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            The largest edible fruit native to North America — creamy flesh that tastes like a
            cross between banana and mango, gone soft within days of ripening.
            <span className="photo-credit"> Photo: Ñandu09&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Pawpaw_(Asimina_triloba)_Ripe_Fruit_Cross_Section.jpg" target="_blank" rel="noopener noreferrer">CC0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Dark maroon flowers open in April on bare branches, before the leaves emerge,
            producing no nectar and giving off a faint fermented odor that draws carrion flies
            and beetles instead of bees. A single tree never sets fruit on its own pollen — it
            needs a genetically distinct second tree nearby. By September, ripening fruit draws
            opossums, raccoons, and Wild Turkeys, whose scratch marks show up in the leaf litter
            under a tree with a full crop. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Pawpaw is common and easy to grow, but a single tree planted alone will flower every
            spring and never fruit — it cannot pollinate itself, and that single-tree disappointment
            is the most common reason a planting gets written off as a failure.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant two or more named varieties within 50 feet of each other — a single tree
              cannot pollinate itself. [2]
            </li>
            <li>
              Site young trees in partial shade for their first three to five years; full sun
              scorches the leaves before the roots are established. [2]
            </li>
            <li>
              Leave root suckers in place — they grow into the multi-stem grove a female Zebra
              Swallowtail needs before she'll settle in to lay. [2]
            </li>
            <li>
              Apply no insecticide to the foliage from May through September, when pale,
              easy-to-miss Zebra Swallowtail caterpillars are feeding on the leaves. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('zebra-swallowtail')}>
            <span className="neighbor-name">Zebra Swallowtail</span>
            <span className="neighbor-note">The only butterfly whose caterpillar develops exclusively on pawpaw; females detect the tree by reading leaf chemistry through their feet.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('virginia-opossum')}>
            <span className="neighbor-name">Virginia Opossum</span>
            <span className="neighbor-note">Visits pawpaw groves at dusk in September to eat fruit that has softened and fallen to the ground.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('spicebush-swallowtail')}>
            <span className="neighbor-name">Spicebush Swallowtail</span>
            <span className="neighbor-note">Shares the same understory habitat and spring nectar sources, though its caterpillars feed on spicebush rather than pawpaw.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('giant-swallowtail')}>
            <span className="neighbor-name">Giant Swallowtail</span>
            <span className="neighbor-note">North America's largest swallowtail; adults nectar at the same summer wildflowers as Zebra Swallowtails near a pawpaw grove.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Asimina_triloba" target="_blank" rel="noopener noreferrer">Wikipedia — Asimina triloba (Pawpaw)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Eurytides-marcellus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Zebra Swallowtail</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
