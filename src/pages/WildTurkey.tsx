import type { Page } from '../App'

interface WildTurkeyProps {
  onNavigate: (page: Page) => void
}

export default function WildTurkey({ onNavigate }: WildTurkeyProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Wild_turkey_crossing_the_road_by_Trustom_Pond_%2812584%29.jpg/1280px-Wild_turkey_crossing_the_road_by_Trustom_Pond_%2812584%29.jpg"
          alt="A Wild Turkey walking across a road, showing its iridescent bronze-green plumage and red wattles"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={927}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Wild_turkey_crossing_the_road_by_Trustom_Pond_(12584).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Wild Turkey</h1>
        <p className="hero__lead">
          The Wild Turkey is the largest game bird in North America, with males reaching
          up to 25 pounds. Its plumage is iridescent bronze-green, with a naked blue-and-red
          head in males. It lives in mixed forests with open understory across the eastern
          United States and parts of the West and Southwest. Hunted to extinction in much of
          its historic range by the early 20th century, it was restored through decades of
          reintroduction programs and now lives in all 49 continental states. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Wild Turkeys forage on the ground through forest and open areas, scratching
            through leaf litter for acorns, seeds, berries, and invertebrates. Acorns are
            the primary food in fall and winter. They roost in trees at night — usually large
            oaks or conifers — flying up at dusk and descending at dawn. In spring, males
            display by fanning their tails, inflating their body feathers, dragging their
            wing tips, and gobbling to attract females. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Male_wild_turkey_%28Meleagris_gallopavo%29_strutting.jpg/1280px-Male_wild_turkey_%28Meleagris_gallopavo%29_strutting.jpg"
            alt="A male Wild Turkey in full display, tail fanned and body feathers puffed"
            width={1280}
            height={1280}
            loading="lazy"
          />
          <figcaption>
            Males display by fanning their tails and inflating their body feathers, making
            themselves appear larger. The naked blue-and-red head becomes brighter during
            courtship.
            <span className="photo-credit"> Photo: Frank Schulenburg&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Male_wild_turkey_(Meleagris_gallopavo)_strutting.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Wild Turkeys nest on the ground in a shallow scrape among dense vegetation.
            Hens lay 10 to 14 eggs and incubate alone for about 28 days. The chicks
            (called poults) are precocial — they leave the nest within 24 hours and can
            fly short distances within two weeks. Males take no part in nesting or raising
            young. Flocks of females and young birds move together through the fall and
            winter, sometimes joining into large mixed groups. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 6.9 million. [2]
            The U.S. Breeding Bird Survey shows a strong overall increase from 1966 through
            2019, reflecting the success of reintroduction and restoration programs. [3]
            Recent harvest data and field observations suggest a decline in the eastern
            subspecies since the mid-2010s. [1] The IUCN lists it as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Oak trees are the most important food source for Wild Turkeys in fall and
              winter. Planting oaks and preserving existing ones supports the mast
              production turkeys depend on. [5]
            </li>
            <li>
              Mixed habitat — forest connected to open foraging areas such as meadows,
              fields, and shrubby edges — provides the combination of cover, roost trees,
              and feeding grounds turkeys need. [5]
            </li>
            <li>
              Leaving leaf litter intact and avoiding ground disturbance in fall and winter
              preserves the acorn and invertebrate resources turkeys scratch for. [5]
            </li>
            <li>
              Keeping pets from approaching brooding hens and young poults reduces
              disturbance during the most vulnerable period. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('northern-flicker')}>
            <span className="neighbor-name">Northern Flicker</span>
            <span className="neighbor-note">A fellow ground forager in the same mixed forests, probing for ants while turkeys scratch for acorns.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">A forest-interior bird that shares the same mature deciduous woodlands.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-towhee')}>
            <span className="neighbor-name">Eastern Towhee</span>
            <span className="neighbor-note">Another leaf-scratching ground forager of the same forest edges and shrubby understory.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-tailed-hawk')}>
            <span className="neighbor-name">Red-tailed Hawk</span>
            <span className="neighbor-note">A predator of young turkeys that hunts the same open-edge habitats.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Wild_Turkey/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Wild Turkey (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/wild-turkey-meleagris-gallopavo" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Wild Turkey</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
