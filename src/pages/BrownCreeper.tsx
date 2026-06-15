import type { Page } from '../App'

interface BrownCreeperProps {
  onNavigate: (page: Page) => void
}

export default function BrownCreeper({ onNavigate }: BrownCreeperProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Brown_creeper_at_a_banding_station_%2890462%29.jpg/1280px-Brown_creeper_at_a_banding_station_%2890462%29.jpg"
          alt="A Brown Creeper clinging to bark, showing its streaked brown plumage and long curved bill"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={988}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Brown_creeper_at_a_banding_station_(90462).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Brown Creeper</h1>
        <p className="hero__lead">
          The Brown Creeper is a small, slender bird with streaked brown-and-buff plumage
          that matches tree bark so precisely it can be invisible even when motionless.
          It hitches up tree trunks in a spiral, using its stiff tail as a brace, then
          drops to the base of the next tree and begins again. Its thin, high-pitched call
          — a single drawn-out &quot;seeee&quot; — is easy to miss. It lives across
          forested North America year-round. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Brown Creepers forage by moving upward in a spiral around tree trunks, probing
            bark crevices with a long, curved bill for insects, insect eggs, larvae, and
            spiders. They start at the base of a tree and work upward, then fly to the base
            of the next tree and start over. They almost never move downward on a trunk.
            In winter they join mixed-species flocks with chickadees, nuthatches, and
            kinglets, drifting through the woods together. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Brown_creeper_%2814411%29.jpg/1280px-Brown_creeper_%2814411%29.jpg"
            alt="A Brown Creeper pressed against tree bark, its streaked plumage blending into the texture"
            width={1280}
            height={1594}
            loading="lazy"
            style={{ objectPosition: 'center center' }}
          />
          <figcaption>
            Brown Creepers move only upward on trunks. When they reach the upper portion,
            they drop to the base of a nearby tree and begin again.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Brown_creeper_(14411).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Brown Creepers nest in a unique location: a hammock-shaped cup of bark strips,
            moss, and spider silk plastered behind a piece of loose or peeling bark on a
            dead or dying tree. The nest is nearly invisible. Five to six eggs per clutch.
            Northern populations move south in winter, when they become more noticeable as
            they join mixed-species flocks. In much of the eastern United States, Brown
            Creepers are winter visitors; in the northern tier, they breed as well. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The global population is estimated at about 5 to 8 million. [2] The U.S.
            Breeding Bird Survey shows a stable to slightly increasing population in
            the eastern United States, with declines in parts of the West linked to
            timber harvesting practices. [3] The IUCN lists it as Least Concern. [4]
            Loss of large-diameter trees with loose, peeling bark removes the specific
            nesting substrate this species requires. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Large dead trees and dying trees with loose or peeling bark provide the
              nesting substrate Brown Creepers require. A single large snag can support
              years of creeper nesting. [5]
            </li>
            <li>
              Mature forest with large-diameter trunks supports the bark-dwelling insect
              communities creepers feed on. Old-growth characteristics — large trees,
              structural complexity — are especially valuable. [5]
            </li>
            <li>
              Skipping pesticides preserves the bark insects, larvae, and spider eggs
              that make up the creeper&apos;s diet. [5]
            </li>
            <li>
              Suet feeders occasionally draw Brown Creepers in winter, especially when
              natural food is scarce during ice storms or deep cold. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('downy-woodpecker')}>
            <span className="neighbor-name">Downy Woodpecker</span>
            <span className="neighbor-note">A fellow bark forager that joins the same mixed winter flocks, working bark from the opposite direction.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('black-capped-chickadee')}>
            <span className="neighbor-name">Black-capped Chickadee</span>
            <span className="neighbor-note">The social center of the mixed winter flock that Brown Creepers often travel with through the woods.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('ruby-crowned-kinglet')}>
            <span className="neighbor-name">Ruby-crowned Kinglet</span>
            <span className="neighbor-note">Another tiny bark and foliage gleaner that winters in the same mixed flocks.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">A mature-forest bird that shares the same old-growth woodland interiors the creeper depends on.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Brown_Creeper/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Brown Creeper (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/brown-creeper-certhia-americana" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Brown Creeper</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
