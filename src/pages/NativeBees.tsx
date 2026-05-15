import type { Page } from '../App'

interface NativeBeesProps {
  onNavigate: (page: Page) => void
}

export default function NativeBees({ onNavigate }: NativeBeesProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Native bumblebee covered in pollen foraging on a purple coneflower — one of 4,000 native bee species that existed before the honeybee arrived in North America"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Ivar Leidus · <a href="https://commons.wikimedia.org/wiki/File:Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons */}
          Photo: Ivar Leidus&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Native bees</h1>
        <p className="hero__lead">
          North America has more than 4,000 native bee species. Most are not honeybees.
          Most do not sting. Most nest alone in the ground, in hollow stems, or in wood.
          Most people have never knowingly seen one. They are everywhere,
          and most yards have made themselves hostile to them without meaning to.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="nb-who-heading">
          <h2 id="nb-who-heading">Who is out there</h2>
          <p>
            Approximately 70% of North American native bee species nest in the ground.
            A ground-nesting bee tunnels into bare or sparsely vegetated soil, provisions each cell
            with a ball of pollen and nectar, lays an egg, and seals it. The larva overwinters there.
            A two-inch layer of mulch — standard in most maintained gardens — destroys these nesting sites
            as completely as paving them over.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Xylocopa_virginica.jpg"
                  alt="Eastern Carpenter Bee hovering near a wooden structure — this species bores nest tunnels in soft wood, not paper or hives"
                  loading="lazy"
                />
                <figcaption>
                  The Eastern Carpenter Bee is not a honeybee — it lives alone, bores nest galleries in soft wood, and raises a small brood without workers or a queen. Seventy percent of North America's 4,000 native bee species are solitary ground-nesters or wood-nesters. A yard covered entirely in turf or landscape fabric provides no habitat for the majority of native pollinators.
                  <span className="photo-credit"> Photo: Polinizador · <a href="https://commons.wikimedia.org/wiki/File:Xylocopa_virginica.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            Many native bees are specialists. A sweat bee that evolved to collect goldenrod pollen
            cannot raise its young on coneflower pollen. When a plant species disappears from a neighborhood,
            the specialist bees that depended on it disappear with it — often within a single generation.
            The generalist honeybee, which can use almost any flower, masks this collapse
            because it keeps pollinating long after the specialists are gone.
          </p>
          <p>
            Native bees are responsible for pollinating a significant portion of wild plants
            and many crops that honeybees do not effectively service — including blueberries, cranberries,
            squash, and tomatoes, which require buzz pollination that honeybees cannot perform.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three changes that open your yard to native bees</h2>
          <ol className="step-list">
            <li>
              <strong>Leave one unmulched, sunny patch of ground.</strong>{' '}
              South-facing exposure is ideal. Even a square foot of bare soil in the right location
              will be claimed by a ground-nesting bee within a season.
              Sand or loam is ideal; clay works. Shade does not — bees need solar warmth to regulate nest temperature.
            </li>
          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Asclepias_tuberosa_2.jpg" alt="Native butterfly weed flowers providing nectar resources" loading="lazy" />
            <figcaption>
              Native milkweeds provide pollen and nectar on a schedule that aligns with native bee emergence — weeks ahead of most garden imports. A single native milkweed patch can support dozens of solitary bee species that non-native ornamentals never attract.
              <span className="photo-credit"> Photo: Tortie tude&nbsp;·&nbsp;<a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en" target="_blank" rel="noopener noreferrer">CC0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
            <li>
              <strong>Plant natives that bloom spring through fall.</strong>{' '}
              Early-spring bees need early flowers. Fall bees need late flowers.
              Goldenrod, native asters, wild bergamot, coneflowers, and blazing star
              cover the season and have co-evolved with the bees that need them.
              Three plants in a sunny spot is enough to start.
            </li>
            <li>
              <strong>Stop applying pesticides to the yard.</strong>{' '}
              A single pesticide application can kill a ground-nesting colony
              that took multiple seasons to establish. Systemic pesticides
              persist in plant tissue — neonicotinoids treated into nursery plants
              remain in the pollen and nectar for years after planting.
              Ask before you buy.
            </li>
          </ol>
          <button
            className="hero__cta"
            onClick={() => onNavigate('choose-a-plant')}
            style={{ marginTop: '0.5rem' }}
          >
            Choose a Plant for Your Yard
          </button>
        </div>
      </div>
    </>
  )
}
