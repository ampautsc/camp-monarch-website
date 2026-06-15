import type { Page } from '../App'

interface EasternTowheeProps {
  onNavigate: (page: Page) => void
}

export default function EasternTowhee({ onNavigate }: EasternTowheeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/20241004_eastern_towhee_pleasant_valley_PD207789.jpg/1280px-20241004_eastern_towhee_pleasant_valley_PD207789.jpg"
          alt="A male Eastern Towhee with a black head and back, rufous flanks, white belly, and red eye, perched on a branch"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Paul Danese&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:20241004_eastern_towhee_pleasant_valley_PD207789.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Towhee</h1>
        <p className="hero__lead">
          The Eastern Towhee is a large sparrow of dense, shrubby undergrowth across the
          eastern United States. The male has a black head and back, rufous flanks, a white
          belly, and red eyes. The female is similar but brown where the male is black. Its
          song, often written as &quot;Drink your tea,&quot; carries from the top of a shrub
          at the edge of a thicket, and the sound of leaves being kicked aside from inside the
          thicket is often the first sign the bird is there. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Eastern Towhees forage on the ground using a &quot;double-scratch,&quot; hopping
            forward slightly and then kicking both feet backward at once, flinging leaf litter
            several inches in both directions to expose the beetles, ants, caterpillars, and
            earthworms underneath. The technique is distinctive to the towhee genus among North
            American birds and requires a deep, undisturbed layer of leaf litter over loose
            soil. They also eat seeds and wild berries, especially in fall and winter. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/20241004_eastern_towhee_pleasant_valley_PD207774.jpg/1280px-20241004_eastern_towhee_pleasant_valley_PD207774.jpg"
            alt="An Eastern Towhee on the ground among fallen leaves"
            width={1280}
            height={1280}
            loading="lazy"
          />
          <figcaption>
            Towhees spend most of their time on the ground in dense cover, kicking through
            leaf litter to find insects and seeds.
            <span className="photo-credit"> Photo: Paul Danese&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:20241004_eastern_towhee_pleasant_valley_PD207774.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Eastern Towhees nest on or just above the ground in the base of a dense shrub or
            grass clump. The female builds a cup of leaves, bark strips, and grass lined with
            fine plant material. Clutches of two to six eggs are incubated for about twelve
            days, and chicks fledge at ten to twelve days. Southeastern and mid-Atlantic
            populations stay year-round; northern breeding birds migrate short distances south
            in fall and return in April and May. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 29 million. [2] The
            U.S. Breeding Bird Survey shows a decline of roughly 1.6% per year since 1966, a
            cumulative loss of about 60%. [3] The 2025 State of the Birds report lists it as an
            Orange Alert Tipping Point species, meaning it has lost more than half its
            population and the decline is accelerating. [3] The IUCN lists it as Least
            Concern. [4] The main driver is loss of the dense shrubby thickets and brushy edges
            the species depends on.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Dense native shrubs planted close together at yard edges, such as spicebush,
              viburnum, elderberry, and native roses, provide the tangled low cover towhees
              nest in and forage under. [5]
            </li>
            <li>
              Leaving fallen leaves under and around shrubs preserves the layer of
              invertebrates the towhee&apos;s double-scratch foraging depends on. Raking or
              blowing removes both the physical substrate and the food. [5]
            </li>
            <li>
              A brush pile of layered branches at the back of a yard provides immediate dense
              cover for foraging and shelter. A pile 4 to 6 feet across and 2 to 3 feet high
              is enough. [5]
            </li>
            <li>
              Keeping cats indoors protects a bird that nests on the ground and spends most of
              its time foraging at ground level. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('brown-thrasher')}>
            <span className="neighbor-name">Brown Thrasher</span>
            <span className="neighbor-note">Shares the same shrubby thicket, foraging the same leaf litter with a bill sweep rather than a kick.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('dark-eyed-junco')}>
            <span className="neighbor-name">Dark-eyed Junco</span>
            <span className="neighbor-note">A smaller ground-scratcher in the same sparrow family, working leaf litter under shrubs in winter.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">Another declining species of the shrubby understory that depends on the same leaf-litter invertebrates.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('carolina-wren')}>
            <span className="neighbor-name">Carolina Wren</span>
            <span className="neighbor-note">A year-round resident of the same dense brush, foraging for insects in the same low tangles.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Eastern_Towhee/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Eastern Towhee (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/eastern-towhee-pipilo-erythrophthalmus" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Eastern Towhee</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
