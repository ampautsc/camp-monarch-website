import type { Page } from '../App'

interface NorthernFlickerProps {
  onNavigate: (page: Page) => void
}

export default function NorthernFlicker({ onNavigate }: NorthernFlickerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Northern_flicker_%2833729%29.jpg/1280px-Northern_flicker_%2833729%29.jpg"
          alt="A Northern Flicker on the ground, showing brown barred plumage, spotted belly, and black crescent bib"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={1035}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Northern_flicker_(33729).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Northern Flicker</h1>
        <p className="hero__lead">
          The Northern Flicker is a large, brown woodpecker with black bars on the back,
          a spotted belly, and a black crescent bib across the chest. In the eastern United
          States, the underwings and tail feathers flash bright yellow in flight. It is one
          of the few North American woodpeckers that regularly feeds on the ground, probing
          for ants with a long, barbed tongue. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Northern Flickers spend much of their time on the ground, hopping through lawns
            and open areas to dig for ants and beetle larvae. Ants make up nearly half the
            diet. The tongue extends up to two inches past the bill tip and is coated in
            sticky saliva for lapping ants from tunnels. They also eat beetles, fruits, and
            seeds. In flight, the bright yellow underwing feathers flash conspicuously,
            and the white rump patch is visible from behind. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Colaptes_auratus_MP2.jpg/1280px-Colaptes_auratus_MP2.jpg"
            alt="A Northern Flicker perched, showing its spotted breast and barred back"
            width={1280}
            height={854}
            loading="lazy"
          />
          <figcaption>
            Flickers have a spotted breast, barred brown back, and a black crescent bib.
            Eastern birds show yellow under the wings and tail.
            <span className="photo-credit"> Photo: Cephas&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Colaptes_auratus_MP2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Northern Flickers excavate nest cavities in dead trees, usually 6 to 20 feet up.
            Both parents share incubation and feeding. Five to eight eggs per clutch.
            Unlike most woodpeckers, Northern Flickers migrate. Birds from the northern part
            of the range move south in fall. They drum on resonant surfaces in spring to
            establish territory, and their loud &quot;wicka-wicka-wicka&quot; call carries
            across open ground. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 12 million. [2] The
            U.S. Breeding Bird Survey shows a cumulative decline of about 49% since 1966,
            roughly 1.2% per year. [3] Competition with European Starlings for nest cavities
            and habitat loss are among the likely causes. [1] The IUCN lists it as Least
            Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Dead trees left standing provide the soft wood flickers excavate for nest
              cavities. A standing dead tree that poses no safety risk is habitat for flickers
              and the many other species that later use the same holes. [5]
            </li>
            <li>
              Open ground with short vegetation gives flickers access to the ant colonies they
              depend on. A lawn with fewer pesticides supports more ants. [5]
            </li>
            <li>
              Native fruit-bearing trees and shrubs such as dogwood, elderberry, and
              hackberry supplement the diet in fall and winter. [5]
            </li>
            <li>
              Skipping pesticides preserves the ant and beetle populations that make up the
              bulk of the diet. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('downy-woodpecker')}>
            <span className="neighbor-name">Downy Woodpecker</span>
            <span className="neighbor-note">A smaller woodpecker that works bark for insects while the flicker works the ground for ants.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">Another ground-feeder that hops across the same lawns, pulling worms where the flicker digs for ants.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-bluebird')}>
            <span className="neighbor-name">Eastern Bluebird</span>
            <span className="neighbor-note">A cavity nester that often uses old flicker holes, benefiting from the larger bird&apos;s excavation work.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('brown-thrasher')}>
            <span className="neighbor-name">Brown Thrasher</span>
            <span className="neighbor-note">A ground-foraging bird of the same open edges, flipping leaves where the flicker probes soil.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Northern_Flicker/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Northern Flicker (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/northern-flicker-colaptes-auratus" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Northern Flicker</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
