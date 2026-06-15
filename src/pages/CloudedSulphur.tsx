import type { Page } from '../App'

interface CloudedSulphurProps {
  onNavigate: (page: Page) => void
}

export default function CloudedSulphur({ onNavigate }: CloudedSulphurProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Clouded_Sulphur_%28Colias_philodice%29_%2829641262025%29.jpg/1280px-Clouded_Sulphur_%28Colias_philodice%29_%2829641262025%29.jpg"
          alt="A Clouded Sulphur butterfly with wings open showing the bright yellow upperwings with the black outer margins and the black forewing spot"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={943}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Mark Nenadov&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Clouded_Sulphur_(Colias_philodice)_(29641262025).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Clouded Sulphur</h1>
        <p className="hero__lead">
          The Clouded Sulphur is one of the most common and widespread butterflies in
          North America — a medium-sized yellow butterfly of open fields, clover lawns,
          meadows, and roadsides. Males are bright yellow with a solid black outer
          margin on the forewing and a single black spot; females are yellow or white
          with a yellow-spotted black margin. The hindwing underside shows a double
          silver spot ringed with pink. Wingspan is 1.5 to 2.75 inches. It is native,
          abundant, and present from early spring through late fall wherever clover
          and other native legumes grow. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Clouded Sulphurs are fast, low fliers of open, sunny areas. They move
            quickly between nectar flowers and clover patches, rarely stopping for
            long. Males patrol field edges and roadsides looking for females, sometimes
            congregating in large groups with Orange Sulphurs at patches of clover and
            native asters. Adults nectar on a wide variety of wildflowers: native clovers,
            native goldenrod, native asters, and native milkweeds are favorites. On
            cool mornings adults bask with wings held flat and angled toward the sun
            to warm their flight muscles — the easiest time to photograph them. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Clouded_sulphur_%2814019%29.jpg/1280px-Clouded_sulphur_%2814019%29.jpg"
            alt="A Clouded Sulphur butterfly nectaring on a native aster showing the yellow wings with black margin from above and the rounded hindwing shape"
            width={1280}
            height={1468}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            Female Clouded Sulphurs come in two color forms: the typical yellow form
            and a white form (called &quot;alba&quot;) that lacks yellow pigment entirely. White
            females are common — up to a quarter of all females — and are sometimes
            mistaken for different species. Both color forms occur in the same
            populations and both are fertile.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Clouded_sulphur_(14019).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Clouded Sulphurs overwinter as pupae or larvae in warm parts of the range
            and can be among the first butterflies on the wing in spring. Multiple
            generations per year — sometimes four or five — keep adults present from
            April through October. Caterpillars are green with a white side stripe
            and feed on clovers, vetches, wild peas, and native legumes. The Clouded
            Sulphur is closely related to the Orange Sulphur and hybridizes with it
            regularly; hybrid females with intermediate coloring are common in areas
            where both species fly together. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Clouded Sulphur is abundant and not of conservation concern. [1]
            Its populations fluctuate seasonally and year to year but remain stable
            across most of its range. Like the Orange Sulphur, it benefits from clover
            in lawns and road margins; unlike many butterflies, it tolerates moderately
            disturbed habitats well. Its main limitation is availability of nectar
            wildflowers and host legumes. In areas managed with herbicides, populations
            decline sharply. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Allow white clover in the lawn. White clover in a lawn is the single
              best thing for Clouded Sulphurs: it is a caterpillar host plant and an
              adult nectar source simultaneously. Switching to a clover-friendly lawn
              management approach — mowing less frequently and not using herbicides —
              transforms lawn into productive habitat. [2]
            </li>
            <li>
              Plant native wild blue indigo (Baptisia australis) and related wild
              indigo species. Native Baptisia is a preferred host plant for several
              sulphur species and is a stunning native prairie perennial. It takes
              a few years to establish but lives for decades and requires no
              maintenance once established. [2]
            </li>
            <li>
              Plant native goldenrod as a fall nectar bank. Late-season Clouded Sulphurs
              concentrate on native goldenrod in September and October. A large native
              goldenrod stand in a sunny garden can draw dozens of individuals — a
              remarkable sight and an easy way to observe butterfly diversity. [2]
            </li>
            <li>
              Delay roadside and field-edge mowing until after October. Late-summer and
              fall Clouded Sulphurs depend on unmowed areas for both nectar and host
              plants. Mowing field margins in August or September removes this resource
              at a critical time. A policy of no mowing between July 1 and November 1
              dramatically increases sulphur populations in road margins. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('orange-sulphur')}>
            <span className="neighbor-name">Orange Sulphur</span>
            <span className="neighbor-note">The closest relative and most common companion in fields — male Orange Sulphurs are orange rather than yellow but otherwise similar; the two species hybridize and are frequently seen together.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cloudless-sulphur')}>
            <span className="neighbor-name">Cloudless Sulphur</span>
            <span className="neighbor-note">A larger migratory sulphur that passes through in fall; the Cloudless is solid yellow with no black margin and much larger than the Clouded Sulphur.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Shares native clover patches for nectar and is often found alongside Clouded Sulphurs in the same field; both are important pollinators of the same native legumes.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-blue-indigo')}>
            <span className="neighbor-name">Wild Blue Indigo</span>
            <span className="neighbor-note">A native legume wildflower that is a caterpillar host plant for Clouded Sulphur and several related species; planting wild indigo supports sulphurs and the distinctive Wild Indigo Duskywing skipper.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Colias_philodice/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Clouded Sulphur</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Colias-philodice" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Clouded Sulphur</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
