import type { Page } from '../App'

interface TulipPoplarProps {
  onNavigate: (page: Page) => void
}

export default function TulipPoplar({ onNavigate }: TulipPoplarProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Liriodendron_tulipifera_flower_001.jpg/1280px-Liriodendron_tulipifera_flower_001.jpg"
          alt="Tulip Poplar flower with six yellow-green petals and a wide orange band at the base"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={850}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Amada44&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Liriodendron_tulipifera_flower_001.jpg" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Tulip Poplar</h1>
        <p className="hero__lead">
          Tulip Poplar (<em>Liriodendron tulipifera</em>) is not a poplar at all — it belongs to
          the magnolia family, named for its tulip-shaped flowers, which open in mid-May with six
          yellow-green petals banded in deep orange. Each flower holds a deep cup of nectar that
          most short-tongued insects can't reach. Ruby-throated Hummingbirds time their spring
          migration to arrive while this tree, often 80 to 90 feet tall, is in bloom. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A hummingbird's bill fits the flower's nectar cup exactly and reaches the pool
            directly, picking up pollen on its bill and forehead with each visit. Carpenter bees
            take a different approach, cutting through the base of the petals to reach the same
            nectar without entering through the flower's opening at all. After two to three days
            open, the spent petals fall — a few dozen on the driveway some mornings is not
            unusual under a tree in full bloom. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f2/%28ms%29_Liriodendron_tulipifera_5.jpg"
            alt="Close detail of a Tulip Poplar leaf showing its distinctive four-lobed shape with a notched apex"
            width={1280}
            height={1280}
            loading="lazy"
          />
          <figcaption>
            Four lobes with a squared notch where the tip should be — no other native eastern
            tree has this leaf shape, at any size from seedling to canopy branch.
            <span className="photo-credit"> Photo: Hladac&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:(ms)_Liriodendron_tulipifera_5.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Female Eastern Tiger Swallowtails seek out tulip poplar in May and June, confirming
            the leaf chemistry with their feet before laying single eggs at branch tips. Cecropia
            Moth and Polyphemus Moth caterpillars feed on the same leaves from July through
            September — a single mature tree in a yard can carry resident populations of all
            three without any introduction. In fall, the whole canopy turns butter yellow within
            a single week, often before most other trees have changed at all. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Tulip Poplar is common, fast-growing, and one of the first trees to fill a canopy
            gap after a storm or clearing — it isn't at risk. What's easy to lose, in a tidy
            yard, is the caterpillar generation feeding unnoticed in the upper branches each
            summer, mistaken for damage rather than recognized as resident wildlife.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant a sapling in full sun, well clear of power lines — it grows 2 to 4 feet a
              year and needs the room. [2]
            </li>
            <li>
              Leave fallen flowers where they land in late May; they dry and disappear within a
              couple of days without harming any surface. [2]
            </li>
            <li>
              Leave chewed leaves from June through September untreated — Tiger Swallowtail and
              Cecropia caterpillars rarely take more than 10% of a mature tree's leaf area. [2]
            </li>
            <li>
              Keep cats indoors at dawn and dusk in May, when hummingbirds are feeding low in a
              young tree's canopy and vulnerable while landing. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
            <span className="neighbor-name">Eastern Tiger Swallowtail</span>
            <span className="neighbor-note">Lays eggs singly on young leaves in May and June; caterpillars pass through a bird-dropping phase and then an eyespot phase on the same branch.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('ruby-throated-hummingbird')}>
            <span className="neighbor-name">Ruby-throated Hummingbird</span>
            <span className="neighbor-note">Times its spring migration to tulip poplar's bloom; its bill fits the deep flower cup that most insects cannot reach.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cecropia-moth')}>
            <span className="neighbor-name">Cecropia Moth</span>
            <span className="neighbor-note">North America's largest moth; its caterpillar feeds on tulip poplar leaves from July through September before spinning a cocoon on the branch.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('polyphemus-moth')}>
            <span className="neighbor-name">Polyphemus Moth</span>
            <span className="neighbor-note">Also uses tulip poplar as a larval host alongside oak and maple; a mature tree often holds both Polyphemus and Cecropia in the same year.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Liriodendron_tulipifera" target="_blank" rel="noopener noreferrer">Wikipedia — Liriodendron tulipifera (Tulip Poplar)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Papilio-glaucus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Eastern Tiger Swallowtail</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
