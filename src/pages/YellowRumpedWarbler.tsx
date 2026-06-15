import type { Page } from '../App'

interface YellowRumpedWarblerProps {
  onNavigate: (page: Page) => void
}

export default function YellowRumpedWarbler({ onNavigate }: YellowRumpedWarblerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Yellow-rumped_warbler_singing_%2841612%29.jpg/1280px-Yellow-rumped_warbler_singing_%2841612%29.jpg"
          alt="A male Yellow-rumped Warbler with gray and black plumage, bright yellow patches on the crown, sides, and rump"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={1014}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Yellow-rumped_warbler_singing_(41612).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Yellow-rumped Warbler</h1>
        <p className="hero__lead">
          The Yellow-rumped Warbler is the most abundant warbler in North America, with a
          breeding population Partners in Flight estimates at 170 million. [2] Breeding
          males are gray and black with bright yellow patches on the crown, sides, and
          rump. The yellow rump patch — visible as a bright flash when the bird flushes —
          makes it identifiable in any plumage. It breeds across boreal forests from Alaska
          to Newfoundland and in western mountain ranges, and winters along both coasts
          and throughout the South. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Yellow-rumped Warblers forage actively through trees, shrubs, and ground cover,
            gleaning insects from foliage, bark, and leaf surfaces. In fall and winter they
            eat large quantities of berries — especially bayberry, wax myrtle, and juniper.
            Their ability to digest the waxy coating on bayberries is unusual among warblers
            and allows them to winter further north than any other warbler. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/20241023_yellow_rumped_warbler_hockanum_reservoir_PD209913.jpg/1280px-20241023_yellow_rumped_warbler_hockanum_reservoir_PD209913.jpg"
            alt="A Yellow-rumped Warbler in fall plumage, showing the yellow rump patch and streaked brown upperparts"
            width={1280}
            height={854}
            loading="lazy"
          />
          <figcaption>
            In fall, Yellow-rumped Warblers wear a brown-streaked plumage, but the yellow
            rump remains visible in any season. They often gather in large flocks in
            coastal areas loaded with bayberries.
            <span className="photo-credit"> Photo: Paul Danese&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:20241023_yellow_rumped_warbler_hockanum_reservoir_PD209913.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Yellow-rumped Warblers are one of the last warblers to leave in fall and among
            the first to return in spring — sometimes arriving in March when snow is still
            on the ground. They nest in conifers across the boreal forest and western
            mountains, building a cup nest on a horizontal branch. Three to five eggs per
            clutch. In migration, large flocks pass through in October, and loose wintering
            flocks can be found wherever bayberry or wax myrtle fruits are available. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the global breeding population at about 170
            million. [2] The U.S. Breeding Bird Survey shows a stable to slightly increasing
            population since 1966, with significant increases in some regions between 1966
            and 1994. [3] The IUCN lists it as Least Concern. [4] About 63% of the global
            population breeds in Canada&apos;s boreal forest. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Native bayberry and wax myrtle plantings provide the berries Yellow-rumped
              Warblers eat through fall and winter. These shrubs can support dozens of
              warblers per plant on a good fruit year. [5]
            </li>
            <li>
              Native conifers — spruce, fir, cedar — provide both foraging habitat during
              migration and wintering cover in northern areas. [5]
            </li>
            <li>
              Skipping pesticides preserves the insects warblers eat during spring and
              summer and that are critical for feeding nestlings. [5]
            </li>
            <li>
              Supporting boreal forest conservation in Canada, where the majority of the
              population breeds, is the most direct long-term contribution. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('dark-eyed-junco')}>
            <span className="neighbor-name">Dark-eyed Junco</span>
            <span className="neighbor-note">A fellow winter ground-feeder that arrives and departs at similar times in the fall migration window.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cedar-waxwing')}>
            <span className="neighbor-name">Cedar Waxwing</span>
            <span className="neighbor-note">Shares the same berry-laden shrubs in fall and winter — both are among the few birds that can digest waxy fruit coatings.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('yellow-warbler')}>
            <span className="neighbor-name">Yellow Warbler</span>
            <span className="neighbor-note">A summer warbler that vacates the same shrubs and thickets just as Yellow-rumped Warblers begin arriving in fall.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('hermit-thrush')}>
            <span className="neighbor-name">Hermit Thrush</span>
            <span className="neighbor-note">Another berry-eating winter bird that shares the same fruiting shrubs and woodland edges.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Yellow-rumped_Warbler/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Yellow-rumped Warbler (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/yellow-rumped-warbler-setophaga-coronata" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Yellow-rumped Warbler</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
