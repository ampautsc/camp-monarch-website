import type { Page } from '../App'

interface SassafrasProps {
  onNavigate: (page: Page) => void
}

export default function Sassafras({ onNavigate }: SassafrasProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sassafras_albidum%E2%80%94unlobed%2C_bilobed%2C_trilobed_leaves.jpg/1280px-Sassafras_albidum%E2%80%94unlobed%2C_bilobed%2C_trilobed_leaves.jpg"
          alt="A sassafras branch showing all three leaf shapes at once — an unlobed oval, a two-lobed mitten, and a three-lobed leaf"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={1707}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Katherine Wagner-Reiss&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Sassafras_albidum%E2%80%94unlobed,_bilobed,_trilobed_leaves.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>Sassafras</h1>
        <p className="hero__lead">
          Sassafras (<em>Sassafras albidum</em>) grows three different leaf shapes on the same branch
          — an unlobed oval, a one-thumbed mitten, and a three-lobed hand. Crush any of them and the
          scent is unmistakable: orange peel and root beer. A Spicebush Swallowtail female reads that
          scent on the air from flight range — which means the root sprout that appears along the
          fence line in April, and gets cut in May, is the exact host plant she's hunting for. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A female swallowtail working the woodland edge in June finds sassafras by its aromatic
            oils before she can pick out a single leaf. Where she lands on a young sprout three to
            five feet tall, she lays eggs one at a time on the upper surface of the leaves. The
            caterpillar that hatches draws a leaf margin up with silk, seals itself inside the tube,
            and feeds from there for weeks. Eastern Tiger Swallowtails use sassafras too — in June,
            both species can be developing on the same stem. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Sassafras_albidum_seed.JPG/1280px-Sassafras_albidum_seed.JPG"
            alt="Blue-black sassafras berries on bright red club-shaped stalks among green leaves in late summer"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            Female trees (sassafras is dioecious) carry blue-black drupes on bright red club-shaped
            stalks in August — fuel for red-eyed vireos, wood thrushes, and flycatchers building
            reserves before migration.
            <span className="photo-credit"> Photo: Cody Hough&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Sassafras_albidum_seed.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Sassafras spreads as readily by root as by seed, sending new stems up from lateral roots
            10 to 30 feet out from the parent each spring — the thickets you see along fence lines and
            unmowed strips. In October the foliage turns yellow, orange, scarlet, and deep red, often
            all four on the same tree in the same week. Deer mostly avoid the aromatic leaves, so
            sassafras at a woodland edge frequently persists where browsing has stripped spicebush
            out of the understory. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Sassafras spreads readily and isn't at risk — but its host value falls to a single reflex.
            Cutting the spring root sprouts on sight, April through September, removes exactly the
            young-leaf patches that swallowtail females search for, and any caterpillar already sealed
            inside a leaf goes out with the clippings.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Stop cutting sassafras root sprouts from April through September — one or two left to
              reach four feet along an edge is a full host patch for the season. [2]
            </li>
            <li>
              In July and August, look for leaves rolled and sealed with silk — each one has a
              swallowtail caterpillar inside, and the chewed foliage doesn't lastingly harm the plant. [2]
            </li>
            <li>
              Don't apply Btk or insecticides to sassafras in summer; the sprays kill the Spicebush
              and Tiger Swallowtail caterpillars hidden in their leaf shelters. [2]
            </li>
            <li>
              If a female tree fruits, leave the August berries on the red stalks for migrating
              vireos, thrushes, and flycatchers. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('spicebush-swallowtail')}>
            <span className="neighbor-name">Spicebush Swallowtail</span>
            <span className="neighbor-note">Uses sassafras as an alternate host where spicebush is absent; the caterpillar rolls a young leaf into a silk-sealed tube and feeds from inside it.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('spicebush')}>
            <span className="neighbor-name">Spicebush</span>
            <span className="neighbor-note">The preferred host for the same butterfly; their leaf chemistry is similar enough that a searching female detects and uses both from the air.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
            <span className="neighbor-name">Eastern Tiger Swallowtail</span>
            <span className="neighbor-note">Also lays eggs on sassafras in May and June, its early caterpillars building leaf shelters on the same stems in the same weeks.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">Eats the high-fat August berries before migrating; where both sassafras and spicebush grow, it moves between the two fruit sources into fall.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Sassafras_albidum" target="_blank" rel="noopener noreferrer">Wikipedia — Sassafras albidum (Sassafras)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Papilio-troilus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Spicebush Swallowtail</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
