import type { Page } from '../App'

interface NativeBeesProps {
  onNavigate: (page: Page) => void
}

export default function NativeBees({ onNavigate }: NativeBeesProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg"
          alt="Native bumblebee covered in pollen foraging on a purple coneflower — one of 4,000 native bee species that existed before the honeybee arrived in North America"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Ivar Leidus · <a href="https://commons.wikimedia.org/wiki/File:Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons */}
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
          <h2 id="nb-who-heading">Mulch, turf, and the 70% that live underground</h2>
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
                  <span className="photo-credit"> Photo: Polinizador · <a href="https://commons.wikimedia.org/wiki/File:Xylocopa_virginica.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a> via Wikimedia Commons</span>
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
            Some flowering plants seal their pollen inside tube-shaped anthers that open only when
            vibrated at a specific resonant frequency. Bumblebees and many solitary native bee species
            achieve this by temporarily disconnecting their flight muscles from their wings and vibrating
            them at around 400 Hz — a behavior called sonication. The vibration shakes loose pollen that
            stays locked inside the anther under any gentler contact. Honeybees do not sonicate; they
            scrape pollen from flowers where it is already exposed. Blueberries, cranberries, tomatoes,
            and squash all require sonication to set a full crop, which is why commercial tomato
            greenhouses rent bumblebee colonies — not honeybee hives.
          </p>
        </section>

        <section aria-labelledby="nb-lifecycle-heading">
          <h2 id="nb-lifecycle-heading">One egg, a pollen ball, and a sealed cell she never sees hatch</h2>
          <p>
            A ground-nesting female spends her adult life — roughly four to six weeks for most species —
            excavating and provisioning cells. She digs a main shaft a few inches into bare soil,
            branches off individual brood chambers, and packs each one with a sphere of pollen
            mixed with nectar. Collecting enough pollen for a single cell takes two to three
            days of foraging. She lays one egg on top of the provision ball, seals the chamber
            with packed earth or chewed vegetation, and moves on to the next cell.
          </p>
          <p>
            She does not stay to raise her larvae. She dies before they hatch. Each larva develops
            alone inside its sealed cell — eating the provision ball, growing through several instars,
            pupating, and overwintering as a fully formed adult still inside the cell wall.
            In spring, when soil temperature rises, it chews through the seal and emerges.
          </p>
          <p>
            Stem-nesting bees follow the same pattern above ground. A mason bee cuts plant resin
            or leaf discs to partition a hollow stem into individual cells. A leaf-cutter bee
            uses circular sections of leaf. Each cell gets a provision ball and one egg, then a seal —
            and the female moves to the next cavity. The standing stem stubs you leave through winter
            are occupied galleries. More than 300 North American bee species use hollow or pithy stems
            as brood chambers. Cutting perennial stems to the ground in October removes every nest
            established during the growing season before the larvae inside have finished development.
          </p>
        </section>

        <section aria-labelledby="nb-cleptoparasite-heading">
          <h2 id="nb-cleptoparasite-heading">Roughly 900 North American bee species do not collect pollen</h2>
          <p>
            Cleptoparasitic bees — called cuckoo bees — reproduce by laying their eggs inside the
            provisioned nests of other bee species. They have no pollen baskets. They do not
            excavate burrows or forage for their offspring. A cuckoo bee female spends her adult life
            locating active host nests by smell, waiting for the host to leave, entering, and
            depositing a single egg in a freshly provisioned cell.
          </p>
          <p>
            The cuckoo bee larva hatches first. It kills the host egg or young larva —
            in some species the first instar is equipped with enlarged, hardened mandibles for this
            specific purpose — and then develops alone on the pollen ball the host female packed.
          </p>
          <p>
            Each cuckoo bee genus is matched to one or a few host genera. Nomada bees
            parasitize Andrena mining bees. Stelis bees parasitize Osmia mason bees.
            Triepeolus bees parasitize Melissodes long-horned bees. When a host population
            collapses, its cuckoo bee collapses within one or two generations, often before
            anyone notices the host is declining. A yard that supports a ground-nesting
            bee population is also supporting a second guild of species that can only exist
            because the first does.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>An unmulched patch, a season of blooms, no pesticides, and stems left standing</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Asclepias_tuberosa_2.jpg" alt="Native butterfly weed flowers providing nectar resources" loading="lazy" />
            <figcaption>
              Native milkweeds provide pollen and nectar on a schedule that aligns with native bee emergence — weeks ahead of most garden imports. A single native milkweed patch can support dozens of solitary bee species that non-native ornamentals never attract.
              <span className="photo-credit"> Photo: Tortie tude&nbsp;·&nbsp;<a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en" target="_blank" rel="noopener noreferrer">CC0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
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
            <li>
              <strong>Cut native perennial stems at 12 inches, not at ground level, in fall or early spring.</strong>{' '}
              More than 300 North American bee species are cavity nesters that lay their eggs
              inside hollow plant stems. Goldenrod, Joe Pye weed, wild bergamot, and ironweed
              have pithy stems that small native bees excavate or move directly into. Cutting
              perennials to the ground each October removes every nest established in those stems
              over the season. Cutting at 12 inches and leaving the stubs standing through winter
              keeps those nesting sites intact. Cut the old growth back in late March when new
              growth is already emerging — not before.
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

        <section aria-labelledby="nb-neighbors-heading">
          <h2 id="nb-neighbors-heading">Who else tunnels into the same ground</h2>
          <p>
            The soil a ground-nesting bee excavates and the leaf litter above it are shared
            by other species that need the same undisturbed, chemical-free ground to complete
            their life cycles. Managing for one means managing for all of them.
          </p>
          <ul>
            <li>
              <button className="link-button" onClick={() => onNavigate('fireflies')}>
                Fireflies
              </button>
              {' — '}Larvae spend one to two years hunting in the same soil layer; the grub treatments
              that kill lawn beetles kill firefly larvae in the same application.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('toad')}>
                American toad
              </button>
              {' — '}Overwinters six to twelve inches below the frost line in the same loose soil
              and leaf litter that ground-nesting bees require for thermal stability.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('wild-bergamot')}>
                Wild bergamot
              </button>
              {' — '}A single plant in full bloom can attract fifteen or more native bee species in a single day,
              including specialist bees that collect pollen from no other plant family.
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
