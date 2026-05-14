import type { Page } from '../App'

interface NativeBeesProps {
  onNavigate: (page: Page) => void
}

export default function NativeBees({ onNavigate }: NativeBeesProps) {
  return (
    <>
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

      <figure className="species-hero-photo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Native bumblebee covered in pollen foraging on a purple coneflower — one of 4,000 native bee species that existed before the honeybee arrived in North America"
          loading="lazy"
        />
        <figcaption>
          Photo: Ivar Leidus ·{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg" target="_blank" rel="noopener noreferrer">
            CC BY-SA 4.0
          </a>{' '}
          via Wikimedia Commons
        </figcaption>
      </figure>

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
