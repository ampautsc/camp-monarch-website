import type { Page } from '../App'

interface ViceroyProps {
  onNavigate: (page: Page) => void
}

export default function Viceroy({ onNavigate }: ViceroyProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Limenitis_archippus_%28viceroy_butterfly%29_%28Kentucky%2C_USA%29_%2817257469602%29.jpg/1280px-Limenitis_archippus_%28viceroy_butterfly%29_%28Kentucky%2C_USA%29_%2817257469602%29.jpg"
          alt="A Viceroy butterfly with wings open on vegetation, showing its orange wings with black veins and borders resembling a Monarch, plus the distinctive black line crossing the hindwing"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={833}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: James St. John&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Limenitis_archippus_(viceroy_butterfly)_(Kentucky,_USA)_(17257469602).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Viceroy</h1>
        <p className="hero__lead">
          The Viceroy is orange with black veins and borders, a wingspan of 2.5 to
          3.5 inches, and looks strikingly like a Monarch — but it is a completely
          different butterfly species. Look for the black line crossing the hindwing:
          Monarchs do not have it, Viceroys do. For over a century textbooks called
          the Viceroy a harmless mimic riding the Monarch&apos;s toxic reputation. A 1991
          study proved the Viceroy is also unpalatable to birds — both species warn
          predators, benefiting each other. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Viceroys are butterflies of open, moist habitats — willow thickets, stream
            banks, meadow edges, and open shrubland where willows and poplars grow.
            Males perch on shrub tops and low vegetation, watching for females and
            chasing other butterflies. Flight is distinctive: several rapid wingbeats
            followed by a flat-winged glide — nearly identical to a Monarch in flight.
            Adults nectar on native wildflowers including goldenrod, asters, thistles,
            and native milkweeds; they also feed on aphid honeydew, dung, and carrion.
            [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Limenitis_archippus_-_Viceroy_butterfly_-_Oklahoma.jpg/1280px-Limenitis_archippus_-_Viceroy_butterfly_-_Oklahoma.jpg"
            alt="A Viceroy butterfly resting on vegetation at rest, clearly showing the postmedian black line on the hindwing that distinguishes it from the Monarch"
            width={1280}
            height={854}
            loading="lazy"
          />
          <figcaption>
            The key field mark that separates a Viceroy from a Monarch is this black
            line running across the middle of the hindwing. In the field, the Viceroy
            is also noticeably smaller than a Monarch and has a slightly different
            flight pattern.
            <span className="photo-credit"> Photo: Thomas Shahan 3&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Limenitis_archippus_-_Viceroy_butterfly_-_Oklahoma.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Viceroys produce two or three generations per year. They overwinter as
            young caterpillars inside a rolled willow or poplar leaf, sealed shut
            with silk and tied to the twig so it won&apos;t fall in autumn wind. In spring
            the tiny caterpillar resumes feeding as soon as leaves emerge. Mature
            caterpillars look like bird droppings — mottled olive-brown with white
            blotches — a camouflage strategy shared with several other butterfly species.
            Adults are on the wing from May through September, with two or three
            generations overlapping. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Viceroy is common across eastern North America and is not of conservation
            concern. [1] It is dependent on willows, poplars, and aspens — host plants
            that are widespread and not under pressure. The primary threat to local
            populations is loss of the moist open habitats — willow thickets, wet
            meadow edges, riparian shrubland — where these host plants naturally grow.
            Drainage of wet areas and conversion of stream banks to manicured lawns
            eliminates both host plants and the open structure Viceroys need for
            patrolling and breeding. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native willows along wet areas, drainage swales, or pond edges.
              Willows (Salix species) are the primary Viceroy host plant; pussy willow
              and shrub willows available from native plant nurseries establish quickly
              in moist soil. A single large willow can support many caterpillars.
              Willows also host hundreds of moth and butterfly species. [2]
            </li>
            <li>
              Allow willow or poplar saplings to grow naturally along stream banks or
              wet areas. The young growth of these trees is most attractive to egg-laying
              Viceroys; mature plantings with dense understory are less used than
              patchy, open willow thickets. [2]
            </li>
            <li>
              Plant native goldenrod and native milkweed for adult nectar. Viceroys
              and Monarchs visit the same native wildflowers; a planting designed
              for Monarchs also directly supports Viceroys. [2]
            </li>
            <li>
              Do not clear vegetation from stream banks and pond edges in late summer.
              Viceroy caterpillars are constructing their overwintering leaf-tubes on
              willow twigs in September. Cutting willows to the ground in fall destroys
              the overwintering generation. Leave willow thickets uncut until May. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">The species the Viceroy is often mistaken for — and whose warning coloration it shares. Both benefit from being hard for birds to tell apart, a relationship called Müllerian mimicry.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('mourning-cloak')}>
            <span className="neighbor-name">Mourning Cloak</span>
            <span className="neighbor-note">Shares willows as a host plant and the same moist woodland-edge habitats; both are medium-sized, distinctive butterflies of the same shrubland and stream-bank areas.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-admiral')}>
            <span className="neighbor-name">Red Admiral</span>
            <span className="neighbor-note">Uses the same open, moist habitats along stream banks and forest edges; both are territorial perching butterflies that can be seen in the same patches of vegetation.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-phoebe')}>
            <span className="neighbor-name">Eastern Phoebe</span>
            <span className="neighbor-note">Nests along the same stream banks and open woodland edges where Viceroys patrol; phoebes have learned to recognize and avoid both Monarchs and Viceroys.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Limenitis_archippus/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Viceroy</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Limenitis-archippus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Viceroy</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
