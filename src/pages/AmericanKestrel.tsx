import type { Page } from '../App'

interface AmericanKestrelProps {
  onNavigate: (page: Page) => void
}

export default function AmericanKestrel({ onNavigate }: AmericanKestrelProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/American_kestrel_%2844273%29.jpg/1280px-American_kestrel_%2844273%29.jpg"
          alt="A male American Kestrel perched on a post, showing its blue-gray wings, rufous back, and distinctive black face markings"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={941}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:American_kestrel_(44273).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Kestrel</h1>
        <p className="hero__lead">
          The American Kestrel is the smallest falcon in North America, roughly the size
          of a robin. Males have blue-gray wings, a rufous back and tail, and bold black
          face markings. Females are streaked brown. It hunts over open ground — fields,
          roadsides, meadows — hovering in place on rapidly beating wings before dropping
          onto prey below. It is found year-round across most of North America, from
          Alaska to South America. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            American Kestrels hunt from utility wires, fence posts, or by hovering 20 to
            60 feet above open ground. They eat large insects — grasshoppers, dragonflies,
            beetles — as well as mice, voles, small birds, and lizards. They locate prey
            partly by sight and also by detecting the ultraviolet reflectance of vole urine
            trails, which is invisible to humans. Kestrels bob their heads repeatedly when
            focusing on a target before diving. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/American_kestrel_%28Falco_sparverius%29.jpg/1280px-American_kestrel_%28Falco_sparverius%29.jpg"
            alt="An American Kestrel perched, showing the rufous back and blue-gray wing panel of the male"
            width={1280}
            height={854}
            loading="lazy"
          />
          <figcaption>
            Males have the combination of blue-gray wings and rufous back; the two black
            mustache marks on white cheeks are shared by both sexes.
            <span className="photo-credit"> Photo: Charles J. Sharp&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:American_kestrel_(Falco_sparverius).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            American Kestrels nest in tree cavities, old woodpecker holes, cliff crevices,
            and nest boxes. They do not build a nest — they lay four to five eggs on the
            bare cavity floor or on whatever debris is present. Pairs are monogamous and
            often return to the same site in successive years. Northern populations
            migrate south in fall, sometimes in substantial numbers along ridges. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 9.2 million. [2]
            The U.S. Breeding Bird Survey shows a cumulative decline of about 53% since
            1966. [3] The IUCN lists it as Least Concern. [4] The causes are not fully
            understood but likely include pesticide effects on prey populations, habitat
            loss in grasslands and open country, and competition from Cooper&apos;s Hawks
            and European Starlings for nest cavities. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              A kestrel nest box — a wooden box with a 3-inch entry hole, mounted 10 to 30
              feet high on a post or tree at the edge of open ground — provides nesting
              habitat. The American Kestrel Partnership has free plans and a nest box
              monitoring network. [5]
            </li>
            <li>
              Open grasslands, meadows, and unmowed areas support the insects and small
              mammals kestrels hunt. A field edge with perching posts and short grass is
              ideal foraging habitat. [5]
            </li>
            <li>
              Skipping pesticides preserves the grasshopper and insect populations that
              make up a large part of the diet. [5]
            </li>
            <li>
              Avoiding second-generation anticoagulant rodenticides prevents secondary
              poisoning of kestrels that eat poisoned voles and mice. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('red-tailed-hawk')}>
            <span className="neighbor-name">Red-tailed Hawk</span>
            <span className="neighbor-note">A larger raptor that hunts the same open fields and perches on the same utility poles.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-bluebird')}>
            <span className="neighbor-name">Eastern Bluebird</span>
            <span className="neighbor-note">A nest box competitor that uses the same open-field nest boxes; pairing boxes 100 feet apart reduces conflict.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-meadowlark')}>
            <span className="neighbor-name">Eastern Meadowlark</span>
            <span className="neighbor-note">A grassland bird that shares the same open fields and declining habitat the kestrel needs.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('mourning-dove')}>
            <span className="neighbor-name">Mourning Dove</span>
            <span className="neighbor-note">A common prey species for kestrels; shares the same open lawns and field edges.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/American_Kestrel/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: American Kestrel (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/american-kestrel-falco-sparverius" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — American Kestrel</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
