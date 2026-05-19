import type { Page } from '../App'

interface EasternChipmunkProps {
  onNavigate: (page: Page) => void
}

export default function EasternChipmunk({ onNavigate }: EasternChipmunkProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Chipmunk_with_stuffed_cheeks_in_Prospect_Park_%2805980%29.jpg/960px-Chipmunk_with_stuffed_cheeks_in_Prospect_Park_%2805980%29.jpg"
          alt="Eastern Chipmunk with cheek pouches stretched to three times its skull width — each trip can carry nine full acorns to a cache site 50 to 100 meters away"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Chipmunk_with_stuffed_cheeks_in_Prospect_Park_(05980).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Chipmunk</h1>
        <p className="hero__lead">
          A chipmunk&apos;s cheek pouches stretch to three times the width of its skull.
          In one trip it can carry nine full acorns to a cache site 50 to 100 meters
          from the source tree, bury each one in a separate hole, and return to collect
          another load. Over a single autumn it makes this run thousands of times.
          It will forget roughly one in four of those caches. Each forgotten cache is
          a potential tree that neither wind nor the chipmunk intended to plant there.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="caching-heading">
          <h2 id="caching-heading">Nine acorns per trip, 3,000 holes per autumn</h2>
          <p>
            Eastern Chipmunks (<em>Tamias striatus</em>) practice scatter-hoarding:
            they bury each seed in its own separate hole rather than piling everything
            into one larder. A single individual caches 3,000 to 5,000 seeds
            between August and October. The seeds come from oaks, beeches, hickories,
            maples, and cherry — species whose nuts and pits are too heavy for wind
            to carry more than a few feet. The chipmunk carries them 50 to 100 meters
            away from the parent tree and buries them 1 to 2 inches below the surface.
          </p>
          <p>
            The scatter pattern is intentional predator defense — a single thief can
            steal a larder, but cannot find 3,000 individual holes. The forgetting is
            a side effect of the same logic. When a chipmunk loses track of a cache
            site, the seed stays in the ground. Oaks, beeches, and hickories germinate
            from exactly these conditions: a nut just deep enough to avoid drying out,
            in soil already opened by the burial, in a location the parent tree never
            reached on its own. The chipmunk is an involuntary tree-planter at a scale
            no human landscaping effort replicates.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Eastern_chipmunk_%28Tamias_striatus%29_-_Kennebunk%2C_Maine%2C_USA.png/960px-Eastern_chipmunk_%28Tamias_striatus%29_-_Kennebunk%2C_Maine%2C_USA.png"
              alt="Eastern Chipmunk at a cache site in leaf litter — the scatter-hoarding strategy spreads hundreds of separate seed caches across a 50-100 meter radius, enough that even a predator who watches the burial cannot find them all"
              loading="lazy"
            />
            <figcaption>
              A chipmunk burying a seed. Each cache is a separate hole, remembered by spatial landmarks — the chipmunk does not memorize the location of each one so much as navigate to likely zones and search. When the landmark changes or the chipmunk dies, the seed stays. Across a neighborhood with several chipmunk territories, hundreds of oaks and beeches are underground right now, waiting for the spring that their planter never intended.
              <span className="photo-credit"> Photo: Chuck Homler, Focus On Wildlife&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Eastern_chipmunk_(Tamias_striatus)_-_Kennebunk,_Maine,_USA.png" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            A yard with a mature oak or beech is generating the raw material this system
            runs on. A yard with no native nut trees — only turf, ornamental shrubs, and
            non-native plantings — offers the chipmunk no caching substrate worth
            running. It can survive on bird seed and garden beds, but the seed dispersal
            function stops: there is nothing worth planting.
          </p>
        </section>

        <section aria-labelledby="winter-heading">
          <h2 id="winter-heading">Torpor, 37&deg;F, and the pantry that has to last until April</h2>
          <p>
            Chipmunks do not fully hibernate. They enter torpor — a reduced metabolic
            state in which body temperature drops to near ambient and heart rate falls
            from 60 to around 5 beats per minute. But they wake every few days
            throughout winter to eat from their underground food stores. A chipmunk
            that cached poorly in fall wakes in January with nothing in reach and no
            way to forage through frozen ground. Poor mast years — years when oaks and
            beeches produce few acorns — reduce winter survival measurably in the
            following spring population counts.
          </p>
          <p>
            The burrow system they overwinter in runs 12 to 30 feet long with two or
            more hidden entrances and a central sleeping chamber 6 inches below the
            frost line. The main tunnel descends steeply just below the entrance — a
            design that prevents rain and snowmelt from flooding the sleeping area.
            Separate chambers within the burrow hold food stores, nesting material,
            and waste. A chipmunk that establishes a burrow under a mature yard tree
            may use the same system for its entire lifespan of 2 to 3 years, with
            successors occupying the same tunnels across multiple generations.
          </p>
        </section>

        <section aria-labelledby="predator-heading">
          <h2 id="predator-heading">Hawks, owls, and what happens when a poisoned chipmunk gets eaten</h2>
          <p>
            Eastern Chipmunks are prey for Cooper&apos;s Hawks, Sharp-shinned Hawks,
            Red-tailed Hawks, Eastern Screech Owls, Great Horned Owls, Red Foxes,
            mink, and domestic cats. In suburban areas, they are one of the primary
            small-mammal prey items that support year-round raptor residence in
            residential neighborhoods.
          </p>
          <p>
            Rodenticide enters this chain the same way it does with mice and voles.
            First-generation anticoagulants (warfarin, chlorophacinone) can poison
            chipmunks that eat bait directly. Second-generation anticoagulants
            (brodifacoum, bromadiolone — the kind sold in most hardware-store block
            bait stations) accumulate in liver tissue over days before lethal effects
            occur. A chipmunk that has eaten bait continues moving and foraging for
            48 to 72 hours while carrying a full tissue load of the toxin. When a
            hawk or owl takes that chipmunk, it ingests the accumulated dose.
            A 2023 study in <em>Science of the Total Environment</em> found
            anticoagulant rodenticides in 96 percent of sampled raptors from suburban
            landscapes. Chipmunks are in that chain — not incidentally, but as one
            of the primary prey items connecting poison applied at ground level to
            birds hunting 30 feet up.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Native shrubs, no rodenticide, leaf litter, and at least one oak</h2>

          <figure className="species-content-photo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Fallen_leaves.jpg/960px-Fallen_leaves.jpg" alt="Deep autumn leaf litter under deciduous trees — the insulating layer that chipmunk burrow entrances are concealed within, protecting both the animal and its winter food stores from freeze events" loading="lazy" />
            <figcaption>
              A chipmunk&apos;s burrow entrance is typically concealed in leaf litter or under a root — the loose, insulating layer that moderates soil temperature and hides the tunnel opening from predators. Yards that rake bare in autumn expose burrow entrances, eliminate the foraging substrate, and remove the thermal layer the burrow relies on to stay above freezing during cold snaps.
              <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;<a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant native nut- and berry-producing shrubs and trees.</strong>{' '}
              American hazelnut, serviceberry, native viburnums, and native cherries provide
              the caching substrate chipmunks run on. A single white oak (<em>Quercus alba</em>)
              in a good mast year drops hundreds of acorns — more than any shrub can match
              per trip. The caloric density of one acorn exceeds any berry the chipmunk can carry.
              Hazelnut fills in the gap: its nuts ripen in August, weeks before the oak acorn
              drop, giving the chipmunk a head start on fall caching before competition peaks.
            </li>
            <li>
              <strong>Eliminate rodenticide use entirely.</strong>{' '}
              Second-generation anticoagulant bait stations — brodifacoum, bromadiolone,
              difethialone — allow a poisoned chipmunk to keep moving for 48 to 72 hours
              after ingestion. That chipmunk is then caught by a hawk or owl that absorbs
              the full tissue load. Snap traps placed inside structures, exclusion, and
              sealing entry points eliminate rodent pressure without entering the food chain.
            </li>
            <li>
              <strong>Keep leaf litter 3&ndash;4 inches deep under shrubs and at yard edges.</strong>{' '}
              The litter layer is where burrow entrances are concealed, where foraging
              happens through late fall, and where the thermal mass that protects underground
              food stores from hard freezes originates. Bare mulched beds and raked lawn
              margins eliminate all three functions simultaneously.
            </li>
            <li>
              <strong>Plant at least one native oak.</strong>{' '}
              White oak (<em>Quercus alba</em>) and bur oak (<em>Quercus macrocarpa</em>)
              produce acorns that wind cannot carry more than a few feet. A chipmunk
              carries them hundreds of feet in each direction and buries each one
              separately. Each forgotten cache — roughly 25 percent — is a potential
              tree. A mature oak in or adjacent to your yard is the mast source that
              shrub fruits alone cannot replace, and the single planting decision that
              most expands the chipmunk&apos;s seed dispersal range into the surrounding
              neighborhood.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">A burrow system under your yard means the same things a monarch does</h2>
          <p>
            A chipmunk living in your yard requires native food plants, intact leaf
            litter, no persistent chemical contamination in the food web, and at least
            one tree old enough to produce mast. These are not chipmunk-specific
            requirements. They are the baseline conditions that native pollinators,
            ground-nesting birds, and overwintering insects also need. A yard that
            cannot sustain a chipmunk through a full year has eliminated the structural
            layers those other species depend on.
          </p>
          <p>
            The chipmunk is not a canary for monarch habitat. It is a different animal
            with different requirements. But the overlap is nearly complete: where one
            can live, so can most of the others. A chipmunk scratching in your leaf litter
            in October is a reading of your yard&apos;s ecological state — the same
            reading a monarch makes when she lands on your milkweed in June and decides
            whether to lay.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The same yard that holds a chipmunk holds a monarch.</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a native plant
            </button>
            {' '}to build the understory layer, or{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              read the pesticide guide
            </button>
            {' '}to remove the rodenticide risk from your food web.
          </p>
        </div>
      </div>
    </>
  )
}
