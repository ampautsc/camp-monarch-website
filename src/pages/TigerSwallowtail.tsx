import type { Page } from '../App'

interface TigerSwallowtailProps {
  onNavigate: (page: Page) => void
}

export default function TigerSwallowtail({ onNavigate }: TigerSwallowtailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Eastern_tiger_swallowtail_on_flower.jpg/1280px-Eastern_tiger_swallowtail_on_flower.jpg"
          alt="An Eastern Tiger Swallowtail butterfly nectaring on a flower, wings spread showing yellow with black stripes and blue and orange hindwing spots"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={854}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Paul Danese&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Eastern_tiger_swallowtail_on_flower.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Tiger Swallowtail</h1>
        <p className="hero__lead">
          The Eastern Tiger Swallowtail is one of the largest and most recognizable
          butterflies in eastern North America, with a wingspan of 3 to 6 inches.
          Its wings are yellow with black tiger stripes; the hindwings have blue and
          orange spots along the margin and tail-like extensions. It visits gardens,
          roadsides, parks, and woodland edges throughout the region from spring
          through fall. Its caterpillars eat the leaves of wild cherry, tulip poplar,
          ash, birch, and many other common trees. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Eastern Tiger Swallowtails are strong, fast fliers, moving between
            flower patches with a distinctive sailing flight that alternates flapping
            with gliding. Males patrol woodland edges and hilltops for females, and
            both sexes nectar heavily on native wildflowers — joe-pye weed, native
            milkweeds, ironweed, coneflower, and native thistles are favorites.
            Both sexes also drink at mud puddles (&quot;puddling&quot;), absorbing mineral
            salts essential for reproduction. Females will land repeatedly on candidate
            host plants, tasting them with sensors in their feet before deciding where
            to lay a single egg. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Eastern_tiger_swallowtail_Butterfly.jpg/1280px-Eastern_tiger_swallowtail_Butterfly.jpg"
            alt="An Eastern Tiger Swallowtail butterfly perched with wings closed, showing the pale yellow and dark underside and the distinctive tail extensions"
            width={1280}
            height={912}
            loading="lazy"
          />
          <figcaption>
            The bright yellow upperside and the iridescent blue on the hindwings
            are visible in flight; the underwing is paler and more cryptic. Females
            in the southern part of the range produce a dark-form that mimics the
            toxic Pipevine Swallowtail.
            <span className="photo-credit"> Photo: Manjithkaini&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Eastern_tiger_swallowtail_Butterfly.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Eastern Tiger Swallowtails overwinter as pupae inside a brown chrysalis
            camouflaged to look like bark. Adults emerge in March or April in the
            south, April or May in the north. There are two or three generations per
            year across most of its range. Caterpillars are extraordinary mimics:
            young caterpillars look like bird droppings; older caterpillars are bright
            green with large false eyespots behind the head, resembling a small snake.
            They feed for several weeks before forming the overwintering chrysalis,
            fastened to a tree branch by a silk belt. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Eastern Tiger Swallowtail is one of the most common and widespread
            large butterflies in North America and is not of conservation concern. [1]
            It uses a broad range of host trees — its caterpillars can eat dozens
            of tree species — which insulates it against loss of any single host. Two
            to three generations per year also allows populations to recover quickly.
            The primary threats are loss of native wildflower meadows that adults
            depend on for nectar through the summer. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native nectar sources: joe-pye weed, native milkweeds, native
              coneflower, native ironweed, and native asters are the top summer
              nectar plants for Tiger Swallowtails. A garden with these plants
              blooming in succession through July through September reliably
              attracts adults. [2]
            </li>
            <li>
              Plant wild black cherry or tulip poplar in the yard. Black cherry is
              one of the most important caterpillar host trees in eastern North America,
              supporting Tiger Swallowtails and more than 450 other species of moths
              and butterflies. [2]
            </li>
            <li>
              Leave a moist, sunny mud patch — a small puddle or dish of damp sand
              near the garden attracts male Tiger Swallowtails to &quot;puddle&quot; for
              mineral salts. Males that puddle produce more viable offspring. [2]
            </li>
            <li>
              Avoid cutting chrysalises off branches in fall and winter. The overwintering
              pupa of a Tiger Swallowtail looks like a small piece of bark fastened
              to a twig — leaving branches intact through spring preserves them. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">Nectars on the same native milkweeds and asters; both are large, showy butterflies whose abundance tracks the health of native wildflower habitat.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('great-spangled-fritillary')}>
            <span className="neighbor-name">Great Spangled Fritillary</span>
            <span className="neighbor-note">Shares the same native wildflower meadows as a nectar source — both are large, distinctive butterflies most visible on joe-pye weed and milkweed in midsummer.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('ruby-throated-hummingbird')}>
            <span className="neighbor-name">Ruby-throated Hummingbird</span>
            <span className="neighbor-note">Visits the same native wildflowers; Tiger Swallowtails and hummingbirds are often seen together on the same joe-pye weed or native milkweed patch.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Works the same native wildflower patches through summer; planting for one species directly benefits the other.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Papilio_glaucus/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Eastern Tiger Swallowtail</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Papilio-glaucus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Eastern Tiger Swallowtail</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
