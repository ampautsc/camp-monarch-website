import type { Page } from '../App'

interface MarylandSennaProps {
  onNavigate: (page: Page) => void
}

export default function MarylandSenna({ onNavigate }: MarylandSennaProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Maryland_Senna_%28Senna_marilandica%29_along_the_Cacapon_River.jpg/1280px-Maryland_Senna_%28Senna_marilandica%29_along_the_Cacapon_River.jpg"
          alt="Maryland Senna (Senna marilandica) growing in a naturalized stand along the Cacapon River showing the tall compound-leafed stems with yellow flower clusters in bloom"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: MrGPS&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Maryland_Senna_(Senna_marilandica)_along_the_Cacapon_River.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Maryland Senna</h1>
        <p className="hero__lead">
          Maryland Senna is a native perennial legume that grows four to six feet tall in
          full sun, blooms in July and August with clusters of yellow flowers, and hosts the
          same three sulphur butterfly caterpillars as Wild Senna — Cloudless Sulphur,
          Sleepy Orange, and Little Yellow. It is the southern counterpart to Wild Senna,
          extending further south into Georgia, Alabama, and Arkansas where Wild Senna does
          not reach, and tolerating a broader range of soil moisture conditions. Like Wild
          Senna, it is buzz-pollinated by bumblebees, fixes nitrogen, and returns from the
          same root crown year after year. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Maryland Senna blooms July through August, drawing bumblebees for buzz-pollination
            and sulphur butterfly females for egg-laying. A Cloudless Sulphur female
            distributes her clutch across multiple plants — one egg per leaflet, then a
            different plant for the next — reducing risk if one plant is browsed or treated.
            On the same Maryland Senna patch in late July, bumblebees are working the flower
            anthers, Cloudless Sulphur females are pressing their feet to the leaves to taste
            leaf chemistry, and the caterpillars from earlier eggs are feeding — green on the
            leaflets, yellow on the flower clusters, their body color tracking what they are
            currently eating. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Senna_marilandica.jpg/1280px-Senna_marilandica.jpg"
            alt="Maryland Senna (Senna marilandica) close-up showing the pinnately compound leaves with multiple pairs of leaflets and yellow flower clusters in bloom"
            width={1280}
            height={1920}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            Maryland Senna&apos;s pinnately compound leaves have slightly fewer leaflet pairs
            than Wild Senna — six to eight pairs versus eight to ten. Cloudless Sulphur
            caterpillars blend with the foliage when green and with the flower clusters
            when yellow. A female Cloudless Sulphur cannot distinguish Maryland Senna
            from Wild Senna by smell — she lays on whichever Senna is present.
            <span className="photo-credit"> Photo: Eric Hunt&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Senna_marilandica.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Maryland Senna is a perennial. Its above-ground stems die after the first hard
            frost, but the root crown pushes new growth each spring — more stems each year
            as the crown slowly expands. As a legume, it fixes nitrogen through root-nodule
            bacteria, improving soil quality over time without fertilizer. Seed pods mature
            on standing stems in September and split through October, dropping seeds below
            the plant for ground-feeding birds. The standing stems from the previous season
            can be cut to the ground in late February or early March before new growth
            emerges from the crown base. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Maryland Senna is native and not of conservation concern. [1] It grows naturally
            in both moist stream corridors and dry upland woods, making it more versatile
            in yard placement than some native plants. In the Southeast, where Cloudless
            Sulphur populations are largest and the northward migration begins earliest, it is
            often the first Senna species available at native plant sales. Paired with Partridge
            Pea in the same bed, the two plants provide host plant material for Cloudless
            Sulphur, Sleepy Orange, and Little Yellow caterpillars from May through September —
            all three species, all summer, from one bed. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Start with three to five plants, not one. A Cloudless Sulphur female
              distributes her clutch across multiple stems. A patch of three to five
              Maryland Senna plants provides enough leaf surface for the number of eggs
              a visiting female lays. Space plants two to three feet apart in full sun;
              the colony fills in over three to four years as the root crowns expand. [2]
            </li>
            <li>
              Use nursery transplants, not seed. Maryland Senna seed requires cold
              stratification and produces slow first-year plants. Transplants from a
              native plant nursery establish in one season and flower in year two.
              Look for Maryland Senna or Senna marilandica — not Wild Senna or American
              Senna, which are different species with slightly different ranges. [2]
            </li>
            <li>
              Pair it with Partridge Pea. Partridge Pea prefers dry soil; Maryland Senna
              tolerates a wider moisture range. Together in the same bed, both extend host
              plant availability from May through September — covering all three sulphur
              species across the full summer season in one planting. [2]
            </li>
            <li>
              Leave the stems through winter and cut back in late February. Seed pods mature
              on standing stems and drop seeds for ground-foraging birds through late fall.
              Cut old stems to the ground in late February before new growth emerges.
              Cutting in autumn removes the seed resource before birds have finished
              using it. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('cloudless-sulphur')}>
            <span className="neighbor-name">Cloudless Sulphur</span>
            <span className="neighbor-note">Lays one egg per leaflet and distributes a clutch across multiple Maryland Senna plants; the caterpillar&apos;s color shifts from green to yellow depending on whether it is eating leaves or flower clusters — the same caterpillar, different colors, same week.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('sleepy-orange')}>
            <span className="neighbor-name">Sleepy Orange</span>
            <span className="neighbor-note">Uses Maryland Senna in the central and southern parts of its range, laying on younger leaflets from late June through August; a single Maryland Senna patch may have both Cloudless Sulphur and Sleepy Orange eggs on different leaflets in the same week.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('little-yellow')}>
            <span className="neighbor-name">Little Yellow</span>
            <span className="neighbor-note">The smallest of the three sulphur species using Senna as a caterpillar host; overlaps with Cloudless Sulphur and Sleepy Orange on the same Maryland Senna patch from June through September in the Southeast.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-senna')}>
            <span className="neighbor-name">Wild Senna</span>
            <span className="neighbor-note">The northern counterpart; extends into the mid-Atlantic and Great Lakes states where Maryland Senna is less common; both species bloom in July–August, host the same butterflies, and use the same buzz-pollination mechanism. In the overlap zone both can grow together.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://plants.usda.gov/home/plantProfile?symbol=SEMA5" target="_blank" rel="noopener noreferrer">USDA PLANTS Database — Senna marilandica (Maryland Senna)</a></li>
            <li><a href="https://www.wildflower.org/plants/result.php?id_plant=SEMA5" target="_blank" rel="noopener noreferrer">Lady Bird Johnson Wildflower Center — Maryland Senna</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
