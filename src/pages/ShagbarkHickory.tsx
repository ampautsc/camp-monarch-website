import type { Page } from '../App'

interface ShagbarkHickoryProps {
  onNavigate: (page: Page) => void
}

export default function ShagbarkHickory({ onNavigate }: ShagbarkHickoryProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Shagbark_Hickory_bark_in_Perry_County%2C_PA.jpg/1280px-Shagbark_Hickory_bark_in_Perry_County%2C_PA.jpg"
          alt="The trunk of a shagbark hickory, its gray bark peeling away in long vertical plates that curl free at the ends"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: SusquehannaMan&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Shagbark_Hickory_bark_in_Perry_County,_PA.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>Shagbark Hickory</h1>
        <p className="hero__lead">
          Shagbark hickory (<em>Carya ovata</em>) is the only common native tree whose bark peels into
          long vertical plates — six to twelve inches long, curled free at the ends, still anchored at
          the center. The narrow gaps behind those plates are exactly what bats look for: endangered
          Indiana Bats and Little Brown Bats use them as concealed summer day roosts. Overhead, the
          hickory genus feeds 235 caterpillar species, Luna Moth among them. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            By day, a bat wedges itself into the thin space between a loose bark plate and the trunk —
            a pocket the tree keeps thermally steady and hidden from predators, the kind of spot a
            maternity colony relies on when hollow trees and building cavities have run out. Up in the
            canopy through the same summer, Luna and Polyphemus caterpillars feed on the leaves,
            banking the fat their mouthless adults will run on entirely. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Carya_ovata%E2%80%94nut_with_four-valved_husk.jpg/1280px-Carya_ovata%E2%80%94nut_with_four-valved_husk.jpg"
            alt="A shagbark hickory nut in its thick green husk, split open along four seams to reveal the nut inside"
            width={1280}
            height={1707}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            The thick hull splits cleanly at four seams when the nut ripens in fall, releasing a sweet,
            high-fat kernel — squirrels start caching them, one at a time up to 300 feet out, before
            the husks have fully opened.
            <span className="photo-credit"> Photo: Katherine Wagner-Reiss&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Carya_ovata%E2%80%94nut_with_four-valved_husk.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Shagbark bears nuts in cycles — heavy mast every two to five years — and in a good year
            drops more than the squirrels, turkeys, raccoons, and wood ducks around it can clear before
            winter, so the surplus germinates in spring. The tree grows slowly, about a foot or so a
            year, with a deep taproot that makes it nearly impossible to move past the sapling stage.
            The signature shaggy bark doesn't develop for 20 to 30 years — but the leaves host
            caterpillars within the first few seasons. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            The tree itself is secure — but the bats that depend on its bark are not. White-nose
            syndrome has cut Little Brown Bat numbers by 70 to 90% across the Northeast since 2006, so
            the roost crevices in every existing shagbark matter more than they used to. Removing a
            mature one zeroes out decades of bat roost, mast, and caterpillar habitat that a sapling
            can't replace for a generation.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant a container-grown sapling in full to partial sun and well-drained soil — and put
              it where it can stay, since the deep taproot rules out moving it later. [2]
            </li>
            <li>
              Leave the leaf litter beneath the canopy from October through May, where Luna and
              Polyphemus pupae are overwintering. [2]
            </li>
            <li>
              Skip canopy insecticide from May through September, when the giant silkmoth caterpillars
              are feeding in the leaves. [2]
            </li>
            <li>
              Protect any mature shagbark you already have — its bark roosts, mast, and caterpillar
              capacity took decades to build and can't be replaced quickly. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('little-brown-bat')}>
            <span className="neighbor-name">Little Brown Bat</span>
            <span className="neighbor-note">Roosts by day in the thermally steady gaps behind shagbark's loose bark plates — habitat that matters more than ever since white-nose syndrome gutted the population.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('luna-moth')}>
            <span className="neighbor-name">Luna Moth</span>
            <span className="neighbor-note">Uses shagbark hickory as a primary host alongside black walnut; the caterpillar feeds six weeks before dropping to the litter to overwinter as a pupa.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-gray-squirrel')}>
            <span className="neighbor-name">Eastern Gray Squirrel</span>
            <span className="neighbor-note">The hickory's main seed disperser — caching nuts up to 300 feet out, recovering most by scent, and planting the next generation with the ones it forgets.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-turkey')}>
            <span className="neighbor-name">Wild Turkey</span>
            <span className="neighbor-note">Takes fallen hickory nuts from the ground through October and November, feeding from the same mast crop as squirrels, raccoons, and deer in a good year.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Carya_ovata" target="_blank" rel="noopener noreferrer">Wikipedia — Carya ovata (Shagbark Hickory)</a></li>
            <li><a href="https://xerces.org/leave-the-leaves" target="_blank" rel="noopener noreferrer">Xerces Society — Leave the Leaves</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
