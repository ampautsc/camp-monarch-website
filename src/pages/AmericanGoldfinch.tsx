import type { Page } from '../App'

interface AmericanGoldfinchProps {
  onNavigate: (page: Page) => void
}

export default function AmericanGoldfinch({ onNavigate }: AmericanGoldfinchProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/American_Goldfinch_%28Spinus_tristis%29%2C_Male_-_Guelph%2C_Ontario.jpg/1280px-American_Goldfinch_%28Spinus_tristis%29%2C_Male_-_Guelph%2C_Ontario.jpg"
          alt="A bright yellow male American Goldfinch with a black cap and black-and-white wings, perched on a stem"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={720}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Ryan Hodnett&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:American_Goldfinch_(Spinus_tristis),_Male_-_Guelph,_Ontario.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Goldfinch</h1>
        <p className="hero__lead">
          The American Goldfinch is a small finch of weedy fields, roadsides, and backyards. In
          summer the male is bright yellow with a black cap and black-and-white wings; in winter
          both sexes fade to a soft olive-brown. It is one of the strictest seed-eaters among
          songbirds, with a bouncing, up-and-down flight and a call often written as
          &quot;po-ta-to-chip.&quot; [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Goldfinches eat almost nothing but seeds, favoring those of thistles, sunflowers, and
            other composite flowers, and pulling them straight from the seed head. At feeders they
            go for nyjer (thistle seed) and sunflower hearts. They travel in loose, twittering
            flocks and feed acrobatically, often hanging upside down to reach a seed. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spinus_tristis_m_thistle_Humber_Bay_Park_E.jpg/1280px-Spinus_tristis_m_thistle_Humber_Bay_Park_E.jpg"
            alt="A male American Goldfinch feeding on a thistle seed head"
            width={1280}
            height={1106}
            loading="lazy"
          />
          <figcaption>
            Thistle is the goldfinch&apos;s favorite seed. It eats the seed and later uses the
            plant&apos;s down to line its nest.
            <span className="photo-credit"> Photo: Ryan Hodnett&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Spinus_tristis_m_thistle_Humber_Bay_Park_E.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Goldfinches nest later than almost any other songbird, in July and August, timed to the
            summer flush of thistle and other seeds. The female builds a tight cup of plant fibers
            bound with spider silk and lined with thistle down, and lays her eggs while the seed is
            plentiful. They molt their body feathers twice a year, which is why the brilliant summer
            male turns a plain brown by winter. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The American Goldfinch is common across the United States and southern Canada. Surveys
            put the population around 43 million, and the IUCN lists it as Least Concern. [1][2][4]
            The U.S. Breeding Bird Survey shows a slow decline since 1966, roughly 0.6% a year,
            though numbers are steady or rising in parts of the Northeast. [3]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Native seed-bearing plants such as coneflowers, black-eyed Susans, sunflowers, and
              asters feed goldfinches straight from the seed head. [5]
            </li>
            <li>
              Leaving seed heads standing into fall and winter keeps food available after the
              blooms are gone; a nyjer feeder draws them as well. [5]
            </li>
            <li>
              Holding off on fall cleanup leaves the plant down goldfinches use to line their late
              nests, along with the seeds. [5]
            </li>
            <li>
              Skipping herbicides keeps the thistles and other weedy plants that are among their
              most important foods. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('black-eyed-susan')}>
            <span className="neighbor-name">Black-eyed Susan</span>
            <span className="neighbor-note">A native flower whose seed heads goldfinches feed on; leave them standing and the birds will come.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-cardinal')}>
            <span className="neighbor-name">Northern Cardinal</span>
            <span className="neighbor-note">A year-round seed-eater that shares the same feeders and native seed plants.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('dark-eyed-junco')}>
            <span className="neighbor-name">Dark-eyed Junco</span>
            <span className="neighbor-note">A winter seed-eater that takes the same native seed heads, mostly from the ground.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('indigo-bunting')}>
            <span className="neighbor-name">Indigo Bunting</span>
            <span className="neighbor-note">Another small seed-and-field bird of brushy edges, here in summer where the goldfinch stays all year.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/American_Goldfinch/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: American Goldfinch (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/american-goldfinch-spinus-tristis" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — American Goldfinch</a></li>
            <li><a href="https://www.audubon.org/field-guide/bird/american-goldfinch" target="_blank" rel="noopener noreferrer">Audubon Field Guide — American Goldfinch</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
