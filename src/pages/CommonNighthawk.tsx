import type { Page } from '../App'

interface CommonNighthawkProps {
  onNavigate: (page: Page) => void
}

export default function CommonNighthawk({ onNavigate }: CommonNighthawkProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Chordeiles_minor_GNP_01.jpg/1280px-Chordeiles_minor_GNP_01.jpg"
          alt="A Common Nighthawk perched on a branch showing its mottled brown-gray camouflage plumage and long angular wings"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Cephas&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Chordeiles_minor_GNP_01.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Common Nighthawk</h1>
        <p className="hero__lead">
          The Common Nighthawk is not a hawk — it is a member of the nightjar family,
          related to the Whip-poor-will. It is a long-winged, erratic flier with mottled
          brown-gray plumage, a white throat patch, and bold white bars on the wing
          visible in flight. It hunts flying insects at dusk and dawn, and sometimes into
          full darkness. It breeds across North America from Alaska to Florida and migrates
          to South America in fall. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Common Nighthawks roost motionless during the day on a tree branch, log, or
            gravel rooftop, their cryptic plumage rendering them nearly invisible. At dusk
            they take to the air, flying with buoyant, erratic wingbeats and a wide gape
            to engulf moths, beetles, and flying ants. The nasal &quot;peent&quot; call is
            often the first clue they are overhead. During the breeding season, males dive
            steeply toward the ground and pull up sharply, producing a hollow booming sound
            from the vibration of their outer primary feathers. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Common_Nighthawk_%28Chordeiles_minor%29_%2814209891405%29.jpg/1280px-Common_Nighthawk_%28Chordeiles_minor%29_%2814209891405%29.jpg"
            alt="A Common Nighthawk in flight showing its long angular wings with white wing patches"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            In flight, the white wing patches are the most visible field mark. The erratic,
            batlike wingbeats distinguish it from swallows and swifts in the same airspace.
            <span className="photo-credit"> Photo: Andrew C&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Common_Nighthawk_(Chordeiles_minor)_(14209891405).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Common Nighthawks nest on bare ground, open rock, or flat gravel surfaces —
            historically rocky outcrops and gravelly hillsides, and more recently the flat
            gravel rooftops of commercial buildings. They lay two eggs directly on the
            substrate with no nest material. Nighthawks are among the longest-distance
            migrants in North America, traveling as far as Argentina for the winter.
            Fall migration can bring thousands of birds together over cities in August and
            September. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 16 million. [2]
            The U.S. Breeding Bird Survey shows a cumulative decline of approximately 46%
            since 1966. [3] The IUCN lists it as Least Concern. [4] The main drivers of
            decline include replacement of gravel rooftops with rubber membranes that
            overheat eggs, aerial insect declines due to pesticide use, and light pollution
            that disrupts foraging and navigation. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Skipping pesticides preserves the moths, beetles, and flying ants nighthawks
              catch in flight. A single nighthawk eats hundreds of insects per night during
              migration. [5]
            </li>
            <li>
              Reducing outdoor lighting — using lower-lumen fixtures, motion sensors, or
              turning off unnecessary lights at night — reduces the light pollution that
              disorients nighthawks and depletes the insect populations they depend on. [5]
            </li>
            <li>
              If you own or manage a flat commercial roof, installing a gravel section can
              provide nesting habitat. Nighthawks frequently return to the same rooftop
              year after year. [5]
            </li>
            <li>
              Supporting tropical wintering-grounds conservation protects the full migration
              route nighthawks travel each year between North and South America. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('chimney-swift')}>
            <span className="neighbor-name">Chimney Swift</span>
            <span className="neighbor-note">Hunts the same aerial insect space at the same dusk hours; often visible together over towns and cities.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('purple-martin')}>
            <span className="neighbor-name">Purple Martin</span>
            <span className="neighbor-note">Another aerial insectivore that declines alongside the nighthawk as flying insect populations fall.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('whip-poor-will')}>
            <span className="neighbor-name">Whip-poor-will</span>
            <span className="neighbor-note">A close relative in the nightjar family that hunts the same summer nights in forest openings nearby.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-wood-pewee')}>
            <span className="neighbor-name">Eastern Wood-Pewee</span>
            <span className="neighbor-note">A neotropical migrant that shares the same late-summer departure window and faces similar insect-decline pressures.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Common_Nighthawk/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Common Nighthawk (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/common-nighthawk-chordeiles-minor" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Common Nighthawk</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
