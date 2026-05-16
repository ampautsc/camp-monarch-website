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
          alt="Eastern Chipmunk with cheek pouches stuffed full of seeds, collecting food beneath a native oak tree"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Rhododendrites · <a href="https://commons.wikimedia.org/wiki/File:Chipmunk_with_stuffed_cheeks_in_Prospect_Park_(05980).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons */}
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Chipmunk_with_stuffed_cheeks_in_Prospect_Park_(05980).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Chipmunk</h1>
        <p className="hero__lead">
          Eastern Chipmunks are among the most visible small mammals in the
          eastern United States, but they are more than familiar backyard
          wildlife. They are forest regeneration partners that move and cache
          native tree seeds across the landscape all season.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="seed-dispersal-heading">
          <h2 id="seed-dispersal-heading">A tiny mammal that helps plant tomorrow's forest</h2>
          <p>
            Eastern Chipmunks (<em>Tamias striatus</em>) scatter-hoard acorns,
            beechnuts, hickory nuts, and other seeds in many separate caches.
            Not every cache is recovered. Forgotten seeds germinate, helping
            regenerate native trees beyond where gravity alone would place
            them.
          </p>
          <p>
            This behavior makes chipmunks practical forest engineers. A yard
            that supports chipmunks is not just supporting one mammal species;
            it is supporting long-term native tree recruitment and the habitat
            those trees provide for birds, insects, and pollinators.
          </p>
        </section>

        <section aria-labelledby="winter-heading">
          <h2 id="winter-heading">Winter survival depends on mast, shelter, and safe soil</h2>
          <p>
            Chipmunks do not fully hibernate. They cycle through torpor and
            periodic wake periods during winter, relying on food cached in fall.
            Poor mast years and simplified yards with little native nut and seed
            production can reduce winter survival.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Eastern_chipmunk_%28Tamias_striatus%29_-_Kennebunk%2C_Maine%2C_USA.png/960px-Eastern_chipmunk_%28Tamias_striatus%29_-_Kennebunk%2C_Maine%2C_USA.png"
                  alt="Eastern Chipmunk with cheek pouches bulging with acorns and seeds — a single trip can carry nine large nuts"
                  loading="lazy"
                />
                <figcaption>
                  Chipmunks cache hundreds of separate seed stores through late summer and autumn. They forget some of them. Those forgotten caches germinate in spring. The chipmunk is an involuntary tree-planter — a dispersal mechanism for oaks, hickories, and beeches that cannot disperse their own heavy seeds by wind.
                  <span className="photo-credit"> Photo: Chuck Homler, Focus On Wildlife · <a href="https://commons.wikimedia.org/wiki/File:Eastern_chipmunk_(Tamias_striatus)_-_Kennebunk,_Maine,_USA.png" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            Their burrow systems and leaf-litter foraging zones also make them
            sensitive to chemical contamination. Rodenticides used for other
            rodents can poison chipmunks directly and then move up the food web
            into hawks, owls, foxes, and snakes.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three actions that support Eastern Chipmunks</h2>

          <figure className="species-content-photo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Fallen_leaves.jpg/960px-Fallen_leaves.jpg" alt="Autumn leaves on the ground near vegetation" loading="lazy" />
            <figcaption>
              Chipmunks tunnel beneath leaf litter and root systems, using the thermal mass to cache food and shelter young. Brush piles and unmanaged corners create the cover structure that makes a yard chipmunk-viable — not just a transit corridor.
              <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;<a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant native nut- and berry-producing shrubs.</strong>{' '}
              Prioritize American hazelnut, native viburnums, and serviceberry.
              These plants provide food that can be cached through winter and
              dispersed across the neighborhood.
            </li>
            <li>
              <strong>Eliminate rodenticide use entirely.</strong>{' '}
              Use exclusion and sealing for indoor rodent issues instead of
              poison. Rodenticide creates avoidable secondary poisoning risk for
              predators that rely on chipmunks as prey.
            </li>
            <li>
              <strong>Keep leaf litter and understory cover in place.</strong>{' '}
              Leave a 3–4 inch leaf layer under shrubs and at yard edges. This
              supports foraging, protects burrow entrances, and improves winter
              insulation for small mammals and invertebrates.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">Chipmunks and monarchs share the same habitat standard</h2>
          <p>
            A chipmunk-friendly yard is also a monarch-friendly yard: native
            plants, intact leaf litter, and no persistent poisons in the food
            web. Supporting chipmunks helps rebuild the same ecological
            structure that pollinators and other indicator species depend on.
          </p>
          <p>
            Treat Eastern Chipmunks as a year-round habitat check. If your yard
            can sustain them, you are building the layered, connected ecosystem
            Camp Monarch needs for broader recovery.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to build habitat that works for chipmunks and monarchs?</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a native plant
            </button>
            {' '}to strengthen your understory, or{' '}
            <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>
              plant milkweed
            </button>
            {' '}to expand your pollinator corridor.
          </p>
        </div>
      </div>
    </>
  )
}
