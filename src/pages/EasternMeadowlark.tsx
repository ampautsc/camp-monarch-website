import type { Page } from '../App'

interface EasternMeadowlarkProps {
  onNavigate: (page: Page) => void
}

export default function EasternMeadowlark({ onNavigate }: EasternMeadowlarkProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Eastern_meadowlark_in_CP_%2860236%29.jpg/1280px-Eastern_meadowlark_in_CP_%2860236%29.jpg"
          alt="An Eastern Meadowlark perched on a branch, showing its brilliant yellow breast with a black V and brown streaked back"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={823}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Eastern_meadowlark_in_CP_(60236).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Meadowlark</h1>
        <p className="hero__lead">
          The Eastern Meadowlark is a stocky, open-country bird with a brilliant yellow
          breast crossed by a bold black V, a brown-streaked back, and a white-sided tail
          it fans when it flies. It lives in grasslands, meadows, hayfields, and open
          farmland, singing from fence posts and utility wires with a clear, flute-like
          whistle. Its song carries across open ground and is one of the defining sounds of
          pastoral landscapes in the eastern United States. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Eastern Meadowlarks walk through grass and low vegetation, probing the ground
            for beetles, grasshoppers, crickets, caterpillars, and earthworms. They locate
            food visually and by probing with their pointed bill. In winter they may join
            mixed flocks and eat seeds. Males sing from elevated perches throughout the
            day, especially in the morning. The song — a series of clear, descending
            whistles — carries up to a quarter mile in open country. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Eastern_meadowlark_%28Sturnella_magna_mexicana%29_Orange_Walk.jpg/1280px-Eastern_meadowlark_%28Sturnella_magna_mexicana%29_Orange_Walk.jpg"
            alt="An Eastern Meadowlark perched on a post showing its yellow underparts and black V on the breast"
            width={1280}
            height={854}
            loading="lazy"
          />
          <figcaption>
            The black V on the yellow breast is the most distinctive field mark.
            Males and females look alike; the V is slightly brighter in males.
            <span className="photo-credit"> Photo: Charles J. Sharp&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Eastern_meadowlark_(Sturnella_magna_mexicana)_Orange_Walk.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Eastern Meadowlarks nest on the ground in dense grass, building a domed cup of
            woven grass with a side entrance. The female lays three to five eggs and
            incubates alone. The nest is so well hidden that it is rarely found except by
            chance. Northern populations migrate south in fall, though some birds remain in
            milder areas year-round. Males establish territories in March and begin singing
            immediately on arrival. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 7.3 million. [2]
            The U.S. Breeding Bird Survey shows a cumulative decline of approximately 49%
            since 1966. [3] The IUCN assessed the Eastern Meadowlark as Vulnerable in 2024,
            reflecting the severity of grassland habitat loss across its range. [4] Loss of
            native grasslands to row crops, conversion of hayfields to other uses, and
            changing mowing schedules during the nesting season are the primary drivers. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Delaying mowing in meadows and field edges until late July or August allows
              meadowlarks — which commonly raise two broods — to complete nesting without
              nest destruction. [5]
            </li>
            <li>
              Maintaining or restoring native grasslands and meadows provides the open-
              ground habitat meadowlarks require for both foraging and nesting. [5]
            </li>
            <li>
              Skipping pesticides preserves the grasshoppers, beetles, and caterpillars
              that meadowlarks eat through spring and summer. [5]
            </li>
            <li>
              Supporting farm conservation programs that pay farmers to delay haying or
              maintain field borders protects meadowlark nesting habitat at landscape scale.
              [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('american-kestrel')}>
            <span className="neighbor-name">American Kestrel</span>
            <span className="neighbor-note">A small falcon that hunts over the same open fields and meadows the meadowlark sings in.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('song-sparrow')}>
            <span className="neighbor-name">Song Sparrow</span>
            <span className="neighbor-note">A grassland-edge bird that nests in the dense low vegetation around the same meadow perimeters.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-goldfinch')}>
            <span className="neighbor-name">American Goldfinch</span>
            <span className="neighbor-note">Forages for seeds in the same tall-grass meadows the meadowlark nests in.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('chimney-swift')}>
            <span className="neighbor-name">Chimney Swift</span>
            <span className="neighbor-note">A fellow aerial insect specialist that hunts over the open farmland where meadowlarks forage.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Eastern_Meadowlark/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Eastern Meadowlark (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/eastern-meadowlark-sturnella-magna" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Eastern Meadowlark</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
