import type { Page } from '../App'

interface MourningDoveProps {
  onNavigate: (page: Page) => void
}

export default function MourningDove({ onNavigate }: MourningDoveProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mourning_dove_perched_%2861179%29.jpg/1280px-Mourning_dove_perched_%2861179%29.jpg"
          alt="A Mourning Dove with soft gray-brown plumage, a small head, and a long pointed tail, perched on a branch"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={970}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Mourning_dove_perched_(61179).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Mourning Dove</h1>
        <p className="hero__lead">
          The Mourning Dove is a slender, soft gray-brown bird with a small head, a long
          pointed tail edged in white, and a low, mournful cooing call. It is one of the most
          abundant and widespread birds in North America, found in open habitats from southern
          Canada to Central America. The U.S. Fish and Wildlife Service estimated about 346
          million in the United States as of 2023. [1][6]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Mourning Doves eat almost nothing but seeds, foraging on the ground in open areas
            such as fields, lawns, roadsides, and below feeders. They fill their crop quickly,
            then fly to a perch to digest. Their wings produce a distinctive whistling sound on
            takeoff. They drink by inserting their bill into water and sucking continuously,
            unlike most birds that tip their head back to swallow. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/20240405_mourning_dove_casa_PD207113.jpg/1280px-20240405_mourning_dove_casa_PD207113.jpg"
            alt="A Mourning Dove on the ground, showing its soft plumage and small head"
            width={1280}
            height={1280}
            loading="lazy"
          />
          <figcaption>
            Mourning Doves forage on the ground, eating seeds almost exclusively. They fill
            their crop in a short feeding bout and then rest on a perch to digest.
            <span className="photo-credit"> Photo: Paul Danese&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:20240405_mourning_dove_casa_PD207113.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Mourning Doves nest on a flimsy platform of twigs, often in a tree or on a ledge,
            sometimes on the ground. Two white eggs per clutch, and pairs can raise up to six
            broods in a single season in warm climates, more than almost any other North
            American bird. Both parents produce crop milk to feed the young. Northern
            populations migrate south in fall; southern birds stay year-round. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Mourning Dove is one of the most abundant birds in North America, with the
            U.S. Fish and Wildlife Service estimating roughly 346 million in the United States
            as of 2023. [6] Partners in Flight estimates a global breeding population of about
            150 million mature individuals. [2] The U.S. Breeding Bird Survey shows a slight
            decline over recent decades. [3] The IUCN lists it as Least Concern. [4] The
            Mourning Dove is a legal game bird in most states, with an annual harvest of about
            20 million, and the population sustains this largely because of its high
            reproductive rate. [6]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              A platform feeder or an area of bare ground below a hanging feeder suits a bird
              that feeds exclusively on the ground. Black-oil sunflower seed and millet are
              favorites. [5]
            </li>
            <li>
              Native seed-bearing grasses and flowers left standing through fall and winter
              provide food directly from the plant. [5]
            </li>
            <li>
              A shallow water source at ground level serves a bird that drinks by sustained
              suction and visits water regularly. [5]
            </li>
            <li>
              Keeping cats indoors protects a bird that spends most of its feeding time on
              the ground and nests on low, exposed platforms. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('northern-cardinal')}>
            <span className="neighbor-name">Northern Cardinal</span>
            <span className="neighbor-note">Shares the same feeders and yard edges, cracking seeds while the dove picks them whole from the ground.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('dark-eyed-junco')}>
            <span className="neighbor-name">Dark-eyed Junco</span>
            <span className="neighbor-note">Another ground-feeding seed-eater that forages below feeders alongside doves in winter.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">Shares the same lawns and open ground, eating worms and fruit where the dove eats seeds.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('song-sparrow')}>
            <span className="neighbor-name">Song Sparrow</span>
            <span className="neighbor-note">A fellow ground-feeding seed-eater that forages in the same brushy edges and beneath feeders.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Mourning_Dove/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Mourning Dove (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/mourning-dove-zenaida-macroura" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Mourning Dove</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
            <li><a href="https://www.fws.gov/media/mourning-dove-population-status-2025" target="_blank" rel="noopener noreferrer">U.S. Fish and Wildlife Service — Mourning Dove Population Status</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
