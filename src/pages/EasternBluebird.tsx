import type { Page } from '../App'

interface EasternBluebirdProps {
  onNavigate: (page: Page) => void
}

export default function EasternBluebird({ onNavigate }: EasternBluebirdProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/20250511_eastern_bluebird_pleasant_valley_PD209766.jpg/1280px-20250511_eastern_bluebird_pleasant_valley_PD209766.jpg"
          alt="An Eastern Bluebird with vivid blue upperparts, rusty-orange breast, and white belly, perched on a branch"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Paul Danese&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:20250511_eastern_bluebird_pleasant_valley_PD209766.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Bluebird</h1>
        <p className="hero__lead">
          The Eastern Bluebird is a small thrush with vivid blue upperparts, a rusty-orange
          breast, and a white belly. Males are brighter; females are grayer with muted blue
          on the wings and tail. It lives year-round across much of the eastern United States
          and migrates short distances in the northern part of its range. It is a cavity
          nester found in open habitats with scattered trees, fence posts, or nest
          boxes. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Eastern Bluebirds hunt by perching on a low branch or fence post, scanning the
            ground, and dropping down to catch insects. Grasshoppers, crickets, beetles, and
            caterpillars make up most of the diet in spring and summer. In fall and winter
            they switch to berries, especially those of dogwood, sumac, holly, and
            pokeweed. They often forage in small family groups after the breeding
            season. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/20241201_eastern_bluebird_bolton_notch_sp_PD205470.jpg/1280px-20241201_eastern_bluebird_bolton_notch_sp_PD205470.jpg"
            alt="An Eastern Bluebird perched in late autumn, showing blue and rusty-orange plumage"
            width={1280}
            height={854}
            loading="lazy"
          />
          <figcaption>
            Bluebirds hunt by perching low and dropping to the ground for insects. In winter
            they shift to berries from native shrubs.
            <span className="photo-credit"> Photo: Paul Danese&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:20241201_eastern_bluebird_bolton_notch_sp_PD205470.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Eastern Bluebirds nest in cavities — natural tree holes, old woodpecker holes,
            or nest boxes. They do not excavate their own cavities. Four to five pale blue
            eggs per clutch, and pairs raise two or three broods per season. Nest box
            programs beginning in the 1960s and 1970s helped the species recover from
            mid-century declines caused by competition with House Sparrows and European
            Starlings for nest sites. Northern populations migrate short distances south in
            fall. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 23 million. [2] The
            U.S. Breeding Bird Survey shows an overall increase since 1966, largely attributed
            to widespread nest box programs and conservation efforts. [3] The IUCN lists it as
            Least Concern. [4] The species rates a 7 out of 20 on the Continental Concern
            Score, indicating low conservation concern. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              A nest box with a 1 1/2-inch entry hole, mounted 4 to 6 feet high on a pole
              in an open area, provides the cavity Eastern Bluebirds need. Pair boxes 5 to 25
              feet apart to allow Tree Swallows to nest nearby without conflict. [5]
            </li>
            <li>
              Open, mowed or grazed areas with scattered perches (fence posts, low branches)
              provide the hunting habitat bluebirds use. Short grass lets them spot insect
              prey from a perch. [5]
            </li>
            <li>
              Native fruit-bearing shrubs — dogwood, sumac, holly, winterberry — provide food
              through fall and winter when insects are scarce. [5]
            </li>
            <li>
              Skipping pesticides on lawns preserves the grasshoppers, crickets, and beetles
              bluebirds feed to their young. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">A fellow thrush that forages on the same lawns, pulling worms from the ground while the bluebird drops from a perch.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-flicker')}>
            <span className="neighbor-name">Northern Flicker</span>
            <span className="neighbor-note">The woodpecker whose old nest cavities bluebirds often adopt for their own nesting.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('carolina-wren')}>
            <span className="neighbor-name">Carolina Wren</span>
            <span className="neighbor-note">Another cavity-using insect eater found in the same yards and woodland edges.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-cardinal')}>
            <span className="neighbor-name">Northern Cardinal</span>
            <span className="neighbor-note">A year-round backyard neighbor that shares the same fruiting shrubs in winter.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Eastern_Bluebird/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Eastern Bluebird (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/eastern-bluebird-sialia-sialis" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Eastern Bluebird</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
