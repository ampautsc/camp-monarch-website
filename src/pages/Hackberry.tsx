import type { Page } from '../App'

interface HackberryProps {
  onNavigate: (page: Page) => void
}

export default function Hackberry({ onNavigate }: HackberryProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/10/Hackberry_bark_%28Celtis_occidentalis%29.jpg"
          alt="Hackberry (Celtis occidentalis) trunk showing the distinctive corky, warty bark ridges that make hackberry identifiable at a distance in any season"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Adam Shaw&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Hackberry_bark_(Celtis_occidentalis).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>Hackberry</h1>
        <p className="hero__lead">
          A butterfly that lands on your arm in July and won&apos;t leave is probably a
          Hackberry Emperor — and the tree it hatched from, with its corky, warty bark, is
          likely thirty feet away. Hackberry (<em>Celtis occidentalis</em>) is a tough,
          fast-growing native tree of fence rows, roadsides, and woodland edges, reaching 40
          to 60 feet at maturity. More than 80 species of caterpillars feed on its leaves,
          including three butterflies — Hackberry Emperor, Tawny Emperor, and American
          Snout — that use no other host plant. Most yards have one and don&apos;t know it. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            The bark is the easiest field mark in any season — irregular corky ridges project
            outward from the trunk in no consistent pattern, thick and warty in a way no other
            common eastern tree matches. The leaves are oval, 2 to 4 inches long, with a base
            that attaches to the stem at an angle, one side higher than the other, and three
            main veins fanning out from that base rather than a single midrib. By June, the
            upper surface of nearly every leaf carries small conical bumps — galls produced by
            a native psyllid that completes its entire life cycle on hackberry and nowhere
            else. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Pachypsylla_celtidisumbilicus_galls.jpg"
            alt="Hackberry leaves showing hackberry nipple galls — small pointed projections on the upper leaf surface produced by a psyllid nymph"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            Hackberry nipple galls cover nearly every leaf by midsummer. Each pointed bump
            shelters a single psyllid nymph and does no harm to the tree — a leaf covered in
            them is a confirmed hackberry identification, since no other common eastern tree
            produces this exact gall.
            <span className="photo-credit"> Photo: Polinizador&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Pachypsylla_celtidisumbilicus_galls.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Two butterflies — Hackberry Emperor and American Snout — lay eggs on hackberry and
            nowhere else; a third, Tawny Emperor, is just as dependent. Remove the tree and all
            three disappear from the property regardless of what else grows there. Caterpillars
            from the late-summer brood overwinter in the leaf litter at the base of the trunk,
            rarely more than a few feet from where the egg was laid. In September and October,
            the tree produces clusters of small purple drupes that ripen as flocks of cedar
            waxwings, robins, flickers, and warblers pass through on migration, fueling up on
            fruit with a higher lipid content than most native shrub fruit. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Hackberry itself is common and in no danger — it self-seeds readily into fence rows
            and disturbed edges wherever a bird perches after eating the fruit. The real threat
            is recognition: most property owners who find a young hackberry growing in a fence
            row don&apos;t know what it is, and a tree that supports three obligate butterfly
            specialists and more than 80 caterpillar species gets cut as a weed tree before it
            ever gets the chance to mature.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Leave the leaf litter at the base of any hackberry from October through May.
              Overwintering caterpillars travel only a few feet from where they hatched before
              settling in for winter — raking that ground in autumn removes them with the
              leaves. [2]
            </li>
            <li>
              Don&apos;t cut the hackberry you didn&apos;t plant. A self-seeded sapling four
              inches in diameter, identifiable by its corky bark ridges, already supports
              breeding Hackberry Emperors and American Snouts. [2]
            </li>
            <li>
              Let the October fruit hang until birds have taken it. Waxwings, robins, flickers,
              and warblers depend on that dense, high-lipid fuel during fall migration. [2]
            </li>
            <li>
              Don&apos;t treat the nipple galls as a plant problem. They&apos;re produced by a
              harmless native psyllid and don&apos;t reduce the tree&apos;s health or fruit
              production — a systemic insecticide aimed at them kills far more than the gall
              insect. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('hackberry-emperor')}>
            <span className="neighbor-name">Hackberry Emperor</span>
            <span className="neighbor-note">An obligate hackberry specialist whose caterpillar has never been documented on any other plant; adults skip flowers entirely and seek dissolved minerals from sap, fruit, and human skin instead.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('tawny-emperor')}>
            <span className="neighbor-name">Tawny Emperor</span>
            <span className="neighbor-note">The near-twin obligate hackberry specialist; females stack 100 to 500 eggs in a compact cylinder on a single leaf, and the resulting caterpillars feed side by side through their first instars.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-snout')}>
            <span className="neighbor-name">American Snout</span>
            <span className="neighbor-note">The third obligate hackberry butterfly; in wet years, the population it produces can move south through Texas at six million individuals per hour.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cedar-waxwing')}>
            <span className="neighbor-name">Cedar Waxwing</span>
            <span className="neighbor-note">Strips hackberry drupes in flocks during fall migration, then deposits the seeds wherever it perches next — the mechanism that plants new hackberry trees in fence rows and yard edges.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Celtis_occidentalis" target="_blank" rel="noopener noreferrer">Wikipedia — Celtis occidentalis (Common Hackberry)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Asterocampa-celtis" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Hackberry Emperor</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
