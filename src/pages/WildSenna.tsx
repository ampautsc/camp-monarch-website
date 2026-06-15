import type { Page } from '../App'

interface WildSennaProps {
  onNavigate: (page: Page) => void
}

export default function WildSenna({ onNavigate }: WildSennaProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Senna_hebecarpa%2C_American_Wild_Senna%2C_Howard_County%2C_MD_2017-09-13-18.17_%2827465145499%29.jpg/1280px-Senna_hebecarpa%2C_American_Wild_Senna%2C_Howard_County%2C_MD_2017-09-13-18.17_%2827465145499%29.jpg"
          alt="Wild Senna (Senna hebecarpa) in full bloom showing clusters of five-petaled yellow flowers on tall compound-leafed stems against a woodland edge background in Maryland"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: USGS Bee Inventory and Monitoring Lab&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Senna_hebecarpa,_American_Wild_Senna,_Howard_County,_MD_2017-09-13-18.17_(27465145499).jpg" target="_blank" rel="noopener noreferrer">Public domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Wild Senna</h1>
        <p className="hero__lead">
          Wild Senna is a native perennial legume that grows four to six feet tall in full
          sun, blooms July into August with clusters of bright yellow flowers, and hosts
          caterpillars of three different sulphur butterflies simultaneously. Cloudless
          Sulphur, Sleepy Orange, and Little Yellow caterpillars all develop on its leaves.
          The flowers are buzz-pollinated — bumblebees grip the anthers and vibrate their
          flight muscles to shake pollen loose, a motion you can hear from a foot away.
          Unlike Partridge Pea, which must be replanted annually, Wild Senna is a perennial
          that returns from the same root crown each spring and grows larger every year. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Wild Senna blooms from July through August, drawing bumblebees and a succession
            of butterfly visitors. The flowers hold no nectar — only pollen — and release
            it through a buzz-pollination mechanism. Bumblebees grip the sealed anther tubes
            and vibrate at a frequency near 400 Hz, causing pollen to eject through the
            anther pores. Honeybees cannot perform this technique; only bumblebees and
            certain solitary bees with the right musculature can extract the pollen. Cloudless
            Sulphur, Sleepy Orange, and Little Yellow females walk the compound leaves with
            their feet, tasting the leaf chemistry before choosing where to lay their single
            eggs. On a mature Wild Senna plant in late July, bumblebees, butterfly adults,
            and butterfly caterpillars may all be present at once. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Yellow_Flower_Wild_Senna_Negative_Space_DSC_0187.JPG/1280px-Yellow_Flower_Wild_Senna_Negative_Space_DSC_0187.JPG"
            alt="A close-up of Wild Senna (Senna hebecarpa) flowers showing the five yellow petals and the distinctive sealed anthers that release pollen only through buzz-pollination"
            width={1280}
            height={1022}
            loading="lazy"
          />
          <figcaption>
            Wild Senna&apos;s flowers have five bright yellow petals but no nectar — they offer
            only pollen, released when a bumblebee grips the anthers and vibrates its flight
            muscles. The Cloudless Sulphur caterpillar feeding on these flowers turns yellow
            to match the floral pigments; the same caterpillar feeding on leaves below is
            green to match the foliage.
            <span className="photo-credit"> Photo: Daniel Gross&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Yellow_Flower_Wild_Senna_Negative_Space_DSC_0187.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Wild Senna is a perennial. The above-ground stems die back after the first hard
            frost each autumn, but the root crown survives underground and pushes new growth
            each spring — more stems than the previous year as the crown slowly expands. A
            planting left undisturbed for a decade occupies a two-to-three foot spread and
            supports many stems of leafy material. The standing stems from the previous season
            persist through winter, holding seed pods that split open and drop seeds through
            fall and winter. Song Sparrows, American Goldfinches, and Dark-Eyed Juncos
            open pods and pick up seeds from the ground below. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Wild Senna is native and not of conservation concern. [1] It grows naturally
            along stream banks, in wet meadows, and at woodland edges with moist to average
            soil — conditions quite different from Partridge Pea, which requires dry,
            well-drained soil. This makes Wild Senna the right native legume for the wetter
            areas of a garden where Partridge Pea would fail. As a legume, its roots fix
            nitrogen in partnership with Rhizobium bacteria, improving soil quality over
            time without fertilizer. It is available from native plant nurseries across
            the eastern United States. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Start with nursery transplants in spring. Wild Senna seed requires cold
              stratification and produces unreliable first-year seedlings. Transplants
              from a native plant nursery establish more predictably and flower in year
              two. Look for it under Wild Senna, American Senna, or Senna hebecarpa
              at native plant sales from April through June. [2]
            </li>
            <li>
              Plant it in a moist, sunny spot — average to moist soil in full sun. Wild
              Senna tolerates the wetter end of the garden bed: clay borders that drain
              slowly, low spots near downspout outlets, moist edges of rain gardens.
              It thrives where Partridge Pea cannot. [2]
            </li>
            <li>
              Pair it with Partridge Pea in the same bed. Partridge Pea prefers dry soil
              while Wild Senna prefers moist soil. Positioned to match each plant to its
              preferred moisture zone, both extend host plant availability across the full
              summer — Wild Senna first, then both together, then Partridge Pea through fall. [2]
            </li>
            <li>
              Leave the stems standing through December. Seed pods mature on standing stems
              in September and split through November. Leave them for ground-foraging birds.
              Cut old stems to the ground in late winter before new growth emerges from
              the crown base — not in fall. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('cloudless-sulphur')}>
            <span className="neighbor-name">Cloudless Sulphur</span>
            <span className="neighbor-note">Lays eggs on Wild Senna leaves; the caterpillar is green on leaves and turns yellow on flowers — the same individual, two different colors, depending on what it is currently eating. Adults returning south in September nectar at the same plant that hosted their caterpillar development.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('sleepy-orange')}>
            <span className="neighbor-name">Sleepy Orange</span>
            <span className="neighbor-note">Uses Wild Senna as a primary caterpillar host plant in the central and southern parts of its range; both Cloudless Sulphur and Sleepy Orange females may lay eggs on the same Wild Senna stem in the same week in July.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('little-yellow')}>
            <span className="neighbor-name">Little Yellow</span>
            <span className="neighbor-note">The smallest of the three sulphur species that use Senna as a caterpillar host; females arrive from the south each summer and need Wild Senna leaflets already growing when they arrive from late June onward.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">The primary pollinator of Wild Senna flowers; the bumblebee grips the anther cluster and vibrates to release pollen — a technique honeybees cannot perform. An American Bumble Bee working a Wild Senna patch in July can be heard from a few feet away.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://plants.usda.gov/home/plantProfile?symbol=SEHE3" target="_blank" rel="noopener noreferrer">USDA PLANTS Database — Senna hebecarpa (Wild Senna)</a></li>
            <li><a href="https://www.wildflower.org/plants/result.php?id_plant=SEHE3" target="_blank" rel="noopener noreferrer">Lady Bird Johnson Wildflower Center — Wild Senna</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
