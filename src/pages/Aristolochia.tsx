import type { Page } from '../App'

interface AristolochiaProps {
  onNavigate: (page: Page) => void
}

export default function Aristolochia({ onNavigate }: AristolochiaProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Aristolochia_macrophylla_kz03.jpg/1280px-Aristolochia_macrophylla_kz03.jpg"
          alt="Dense carpet of large kidney-shaped Aristolochia macrophylla leaves covering a vine at woodland edge"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Krzysztof Ziarnek, Kenraiz&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Aristolochia_macrophylla_kz03.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Vines</div>
        <h1>Aristolochia (Dutchman&apos;s Pipe)</h1>
        <p className="hero__lead">
          Dutchman&apos;s pipe (<em>Aristolochia macrophylla</em>) is a native twining vine grown
          for one butterfly: the Pipevine Swallowtail, which lays its rust-red egg clusters only
          on <em>Aristolochia</em> foliage. But the non-native ornamental <em>Aristolochia
          elegans</em> — sold at most general garden centers under the same common name — produces
          the same volatile cues that attract females in flight, and every caterpillar she lays on
          it dies within the first two instars. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A first-instar caterpillar hatches as a tiny dark larva and feeds in a group with its
            siblings on a leaf surface. As it grows, it accumulates aristolochic acids from the
            vine's foliage — compounds so bitter that a Blue Jay catching and swallowing a Pipevine
            Swallowtail adult will regurgitate it and avoid the wing pattern for years. The maroon
            body with orange-tipped tubercles that appears in later instars is advertising, not
            camouflage: the caterpillar is signaling exactly what it is. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Aristolochia-macrophylla-flower.jpg/1280px-Aristolochia-macrophylla-flower.jpg"
            alt="Aristolochia macrophylla flowers showing the curved brownish-yellow pipe-shaped tubes hanging at the leaf axils"
            width={1280}
            height={855}
            loading="lazy"
          />
          <figcaption>
            The native flower: a brownish-yellow curved tube bending at the mouth like a bent
            pipe. <em>Aristolochia elegans</em> flowers are visually distinct — mottled
            purple-and-white with a flat disk opening. If a plant is in bloom at the nursery,
            the flower shape settles the ID instantly.
            <span className="photo-credit"> Photo: Sten Porse&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Aristolochia-macrophylla-flower.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The vine twines rather than clings — it wraps around whatever it contacts, growing two
            to three feet the first season while the root establishes, then ten to fifteen feet a
            season by year three. A plant completely defoliated by caterpillars in July pushes new
            leaves within two to three weeks and overwinters normally; late-season caterpillars
            pupate on nearby woody stems and fence posts and emerge as adults the following spring.
            <em> Aristolochia tomentosa</em> — woolly Dutchman&apos;s pipe — handles drier soil
            and more shade than <em>macrophylla</em> and supports the same caterpillars. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Native <em>Aristolochia</em> isn&apos;t rare, but it&apos;s rarely stocked at general
            garden centers, which instead carry <em>A. elegans</em> — a tropical ornamental that
            attracts females and kills every egg batch they lay. A yard planted only with
            <em> A. elegans</em> functions as a sink, not a source.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Check the Latin name before purchase — <em>A. elegans</em>, &ldquo;Calico
              flower,&rdquo; or &ldquo;Elegant Dutchman&apos;s pipe&rdquo; is the trap plant;
              <em> A. macrophylla</em> or <em>A. tomentosa</em> from a native plant nursery is
              the correct one. [2]
            </li>
            <li>
              Install a support — trellis, chain-link fence, or post — within six inches of the
              root ball before planting; the vine will find it without any training. [2]
            </li>
            <li>
              Expect two to three feet of growth in year one while the root establishes; water
              weekly through dry spells that first summer only. [2]
            </li>
            <li>
              Leave caterpillar-stripped leaves completely alone — an established vine regrows
              within two to three weeks of complete defoliation. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('pipevine-swallowtail')}>
            <span className="neighbor-name">Pipevine Swallowtail</span>
            <span className="neighbor-note">Lays rust-red egg clusters only on Aristolochia; caterpillars accumulate aristolochic acids that protect both larva and adult from predators.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('spicebush-swallowtail')}>
            <span className="neighbor-name">Spicebush Swallowtail</span>
            <span className="neighbor-note">Mimics the Pipevine Swallowtail's iridescent blue-green hindwing without carrying any aristolochic acids — protection by resemblance alone.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('spicebush')}>
            <span className="neighbor-name">Spicebush</span>
            <span className="neighbor-note">A shade-tolerant native shrub for the same woodland-edge planting; hosts Spicebush Swallowtail and Promethea Moth in the shrub layer below the vine.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('leave-the-leaves')}>
            <span className="neighbor-name">Leave the Leaves</span>
            <span className="neighbor-note">Late-season Pipevine Swallowtail pupae overwinter on woody stems and leaf litter within a few feet of the vine — removing either one removes the next generation.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Aristolochia_macrophylla" target="_blank" rel="noopener noreferrer">Wikipedia — Aristolochia macrophylla (Dutchman&apos;s Pipe)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Battus-philenor" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Pipevine Swallowtail</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
