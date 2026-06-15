import type { Page } from '../App'

interface CarolinaWrenProps {
  onNavigate: (page: Page) => void
}

export default function CarolinaWren({ onNavigate }: CarolinaWrenProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Carolina_wren_%2814391%29.jpg/1280px-Carolina_wren_%2814391%29.jpg"
          alt="A Carolina Wren with warm reddish-brown back, buff underparts, bold white eye stripe, and upturned tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={998}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Carolina_wren_(14391).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Carolina Wren</h1>
        <p className="hero__lead">
          The Carolina Wren is a small, reddish-brown bird with a bold white eye stripe, buff
          underparts, and a tail it often holds cocked upward. It lives year-round across the
          eastern United States, from southern New England to the Gulf Coast. Its loud,
          ringing song, often written as &quot;teakettle teakettle teakettle,&quot; carries
          well beyond the dense tangles where the bird itself stays hidden. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Carolina Wrens eat insects and spiders almost exclusively, probing bark crevices,
            vine tangles, brush piles, and leaf litter with their slightly curved bill. They
            investigate every crack and cavity within their territory, including woodpiles,
            garden sheds, and the undersides of porch furniture. Pairs stay together year-round
            and forage close to each other, calling back and forth. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/20240619_carolina_wren_south_meadows_PD201410.jpg/1280px-20240619_carolina_wren_south_meadows_PD201410.jpg"
            alt="A Carolina Wren perched on a branch, showing its white eye stripe and upturned tail"
            width={1280}
            height={1280}
            loading="lazy"
          />
          <figcaption>
            Carolina Wrens probe bark, brush piles, and tangles for insects and spiders,
            investigating every crevice within their territory.
            <span className="photo-credit"> Photo: Paul Danese&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:20240619_carolina_wren_south_meadows_PD201410.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Carolina Wrens do not migrate. Pairs hold a territory year-round, and severe
            winters can kill large portions of the population at the northern edge of the
            range, pushing the boundary back south. Over the last century the species has
            expanded northward during runs of mild winters. They nest in cavities, building a
            domed nest of leaves, moss, and bark in tree hollows, woodpecker holes, ledges,
            and sometimes in odd spots like boots, flowerpots, and mailboxes. Two to three
            broods per season. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 19 million. [2] The
            U.S. Breeding Bird Survey shows an increase of roughly 1% per year since 1966,
            driven partly by the northward range expansion during a period of milder
            winters. [3] The IUCN lists it as Least Concern. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Dense native shrubs, brush piles, and vine tangles provide the cover and foraging
              structure Carolina Wrens use year-round. [5]
            </li>
            <li>
              Leaving leaf litter and fallen branches in place supports the insects and spiders
              the wren feeds on through winter, when other food is scarce. [5]
            </li>
            <li>
              A nest box with a 1.5-inch entry hole, placed 5 to 10 feet up in a sheltered
              spot, provides a cavity for nesting. Carolina Wrens will also use open-fronted
              shelves. [5]
            </li>
            <li>
              Skipping pesticides preserves the insect and spider populations that make up
              nearly the entire diet. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-towhee')}>
            <span className="neighbor-name">Eastern Towhee</span>
            <span className="neighbor-note">Shares the same dense brush, foraging in the leaf litter below where the wren probes the tangles above.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('brown-thrasher')}>
            <span className="neighbor-name">Brown Thrasher</span>
            <span className="neighbor-note">Another year-round resident of dense shrubby habitat, working the same thicket at a different height.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-cardinal')}>
            <span className="neighbor-name">Northern Cardinal</span>
            <span className="neighbor-note">A year-round neighbor in the same shrubby yards, eating seeds where the wren eats insects.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('downy-woodpecker')}>
            <span className="neighbor-name">Downy Woodpecker</span>
            <span className="neighbor-note">Another year-round insect eater that probes bark for the same beetles and larvae, on the trunk where the wren works the tangles.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Carolina_Wren/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Carolina Wren (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/carolina-wren-thryothorus-ludovicianus" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Carolina Wren</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
