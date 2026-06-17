import type { Page } from '../App'

interface PurpleConeflowerProps {
  onNavigate: (page: Page) => void
}

export default function PurpleConeflower({ onNavigate }: PurpleConeflowerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/American_lady_on_purple_coneflower_%2874770%29.jpg/1280px-American_lady_on_purple_coneflower_%2874770%29.jpg"
          alt="An American Lady butterfly nectaring on a purple coneflower, its drooping magenta petals around a spiky orange disk"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={948}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:American_lady_on_purple_coneflower_(74770).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Purple Coneflower</h1>
        <p className="hero__lead">
          Purple coneflower (<em>Echinacea purpurea</em>) blooms from late June through August, and
          one of its visitors will go nowhere else: the two-spotted longhorn bee (<em>Melissodes
          bimaculata</em>) collects pollen almost exclusively from <em>Echinacea</em> and its close
          aster-family relatives. Whether she can raise young in a given yard comes down to how many
          coneflowers are planted — and how close together. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A female longhorn bee working in July visits 30 to 40 coneflower heads to fill a single
            pollen load, then carries it back to a nest she dug in bare soil beneath the plants and
            provisions one larval cell. With two coneflowers scattered in a border, she burns most of
            her energy flying between them. With a dense patch of ten or twelve, the next flower is
            two feet away — and she can provision cell after cell. The planting's density decides
            whether she reproduces that year. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Echinacea_purpurea_Spinus_tristis_JRVdH_03.jpg/1280px-Echinacea_purpurea_Spinus_tristis_JRVdH_03.jpg"
            alt="An American Goldfinch perched on a dried, spiky coneflower seed head, a seed held in its beak"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            Once the petals drop, the disk hardens into a spiky cone — <em>echinos</em> is Greek for
            sea urchin — that holds seed through winter. Goldfinches work those stiff stalks from
            October into January.
            <span className="photo-credit"> Photo: Cephas&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Echinacea_purpurea_Spinus_tristis_JRVdH_03.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The bloom window — late June through August — covers exactly the weeks July monarchs are
            feeding hardest before migration and great spangled fritillaries are working the heads in
            August, a single fritillary lingering ten to fifteen minutes on one flower. After bloom,
            the seed cones feed goldfinches and juncos from October through January. Left alone, a
            cluster of eight plants self-seeds into fifteen or twenty over three or four years. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Coneflower is one of the best-selling native perennials — but usually as one or two plants
            dropped into a mixed bed, or as showy cultivars bred for petal size at the expense of
            pollen. The specialist bee needs the opposite: a dense cluster of the straight species
            with bare ground underneath to nest in.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant 8 to 12 in one cluster rather than singles scattered through a bed — specialist
              bees need many heads within a short flight to provision a nest. [2]
            </li>
            <li>
              Leave a ring of bare soil about a foot wide at the base of the patch; ground-nesting
              bees can't dig through mulch laid up to the stems. [2]
            </li>
            <li>
              Don't deadhead — leave the seed cones standing for goldfinches and juncos, and cut
              back in late February as new basal rosettes appear. [2]
            </li>
            <li>
              Choose the straight species over cultivars like 'Magnus' or 'Cheyenne Spirit', which
              often trade pollen-rich anthers for bigger petals. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
            <span className="neighbor-name">Native Bees</span>
            <span className="neighbor-note">The two-spotted longhorn bee collects pollen almost only from Echinacea and its relatives, and nests in bare soil right beneath a dense coneflower patch.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">Feeds on coneflower through July and August, the pre-migration weeks when adults shift from breeding toward building fat reserves.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Clings to the hardened seed cones and pulls seed from October through January — the reason to leave the heads standing all winter.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-lady')}>
            <span className="neighbor-name">American Lady</span>
            <span className="neighbor-note">One of the summer butterflies that nectars at the open coneflower disk, alongside fritillaries, swallowtails, and the longhorn bees.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Echinacea_purpurea" target="_blank" rel="noopener noreferrer">Wikipedia — Echinacea purpurea (Purple Coneflower)</a></li>
            <li><a href="https://xerces.org/bees" target="_blank" rel="noopener noreferrer">Xerces Society — Protecting Native Bees</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
