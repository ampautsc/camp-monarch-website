import type { Page } from '../App'

interface BlackSwallowtailProps {
  onNavigate: (page: Page) => void
}

export default function BlackSwallowtail({ onNavigate }: BlackSwallowtailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Papilio_polyxenes_MD1.jpg/1280px-Papilio_polyxenes_MD1.jpg"
          alt="A Black Swallowtail butterfly with wings spread showing its black wings with two rows of yellow spots, blue iridescence on the hindwings, and orange eyespots"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={970}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Acroterion&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Papilio_polyxenes_MD1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Black Swallowtail</h1>
        <p className="hero__lead">
          The Black Swallowtail is one of the most familiar garden butterflies in
          eastern North America. Its wings are black with two rows of yellow spots,
          a band of blue on the hindwing, and an orange eyespot bordered in black
          on the inner hindwing margin. Its caterpillars eat plants in the carrot
          family — including parsley, dill, fennel, and the native wildflower golden
          alexanders. If you grow herbs, you almost certainly have Black Swallowtails.
          [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Black Swallowtails fly in open habitats — gardens, roadsides, meadows,
            open woodland edges, and farm fields. Males patrol for females from
            elevated perches or by flying low over host plants. Adults nectar on a
            wide range of wildflowers: native milkweeds, phlox, native coneflowers,
            and thistles are favorites. Females test host plants by landing and tasting
            with chemoreceptors in their feet before laying a single small egg on a
            stem or leaf. The striped green-and-black caterpillar has an orange
            osmetrium — a forked gland behind the head that pops out and releases a
            citrusy, skunk-like odor when the caterpillar is disturbed. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Papilio_polyxenes_MD2.jpg/1280px-Papilio_polyxenes_MD2.jpg"
            alt="A Black Swallowtail butterfly showing the rich blue coloring on the hindwings and the distinctive orange eyespot near the tail"
            width={1280}
            height={1144}
            style={{ objectPosition: 'center top' }}
            loading="lazy"
          />
          <figcaption>
            The orange eyespot bordered in black on the hindwing is thought to deflect
            predator strikes toward the tail rather than the body — a sacrificial
            decoy that lets the butterfly escape.
            <span className="photo-credit"> Photo: Acroterion&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Papilio_polyxenes_MD2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Black Swallowtails overwinter as pupae attached to plant stems. Adults
            emerge in April or May, and there are two or three generations per year
            across most of the range. Caterpillars feeding on garden parsley can
            defoliate the plant rapidly, but the plant regrows and the caterpillar
            pupates. The pupa can be pale green or brown depending on the surface
            it is attached to — each pupa matches the color of the background on the
            day it was formed. The third-generation pupa in fall overwinters until the
            following spring. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Black Swallowtail is common and not of conservation concern. [1] Its
            use of common garden herbs — parsley, dill, and fennel — and widespread
            roadside plants like Queen Anne&apos;s lace makes it one of the most
            adaptable eastern swallowtails. Two or three generations per year also
            means that a single breeding pair can produce many offspring in one season.
            The primary limiting factor in suburban areas is the availability of
            native carrot-family plants alongside nectar sources. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native golden alexanders (Zizia aurea) in the garden — this
              native wildflower is an excellent caterpillar host plant AND provides
              nectar for adults in spring, two functions in one species. It blooms
              early, when few other native wildflowers are available. [2]
            </li>
            <li>
              Grow parsley, dill, or fennel in the herb garden and leave caterpillars
              on them. A Black Swallowtail caterpillar will eat vigorously for two
              weeks before pupating; the plant regrows after the caterpillar is gone.
              [2]
            </li>
            <li>
              Plant native milkweeds, native asters, and native coneflower as nectar
              sources for adults. Black Swallowtails need both host plants and rich
              nectar sources in the same landscape. [2]
            </li>
            <li>
              Leave plant stems standing over winter. Black Swallowtail chrysalises
              are attached to stems; cutting all stems in fall or winter before April
              destroys overwintering pupae before they can emerge as adults. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
            <span className="neighbor-name">Eastern Tiger Swallowtail</span>
            <span className="neighbor-note">Nectars on the same native wildflowers and patrols the same woodland edges; the two are often seen together on the same milkweed or coneflower patch.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Works the same native wildflower patches through summer; both swallowtails and bumble bees respond to the same habitat improvements.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-meadowlark')}>
            <span className="neighbor-name">Eastern Meadowlark</span>
            <span className="neighbor-note">Nests in the open meadow and field edge habitat where Black Swallowtails patrol and lay eggs on wild carrot-family plants.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('ruby-throated-hummingbird')}>
            <span className="neighbor-name">Ruby-throated Hummingbird</span>
            <span className="neighbor-note">Shares the same native wildflower garden; hummingbirds and swallowtails often visit the same patches of native asters and native phlox.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Papilio_polyxenes/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Eastern Black Swallowtail</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Papilio-polyxenes" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Eastern Black Swallowtail</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
