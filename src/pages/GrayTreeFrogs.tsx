import type { Page } from '../App'

interface GrayTreeFrogsProps {
  onNavigate: (page: Page) => void
}

export default function GrayTreeFrogs({ onNavigate }: GrayTreeFrogsProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Gray_tree_frog_in_arboreal_forest_habitat%2C_MA.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Gray Tree Frog clinging to a rain-wet window with adhesive toe pads, camouflage skin matching bark texture"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Randidawn · <a href="https://commons.wikimedia.org/wiki/File:Gray_tree_frog_in_arboreal_forest_habitat%2C_MA.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons */}
          Photo: Randidawn&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Gray_tree_frog_in_arboreal_forest_habitat%2C_MA.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Gray Tree Frogs</h1>
        <p className="hero__lead">
          On warm summer evenings after rain, a trill carrying over 300 feet rings out from
          somewhere in the trees. You may never see who is calling. But if you hear it, you know
          something important: your yard is free of the systemic pesticides that would have
          silenced them — the same pesticide-free conditions monarchs need to survive.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="indicator-heading">
          <h2 id="indicator-heading">What the sound means</h2>
          <p>
            The Gray Tree Frog (<em>Hyla versicolor</em>) is an indicator species.
            It cannot live in a yard treated with glyphosate or atrazine — herbicides common
            enough to be sold at any hardware store. Glyphosate at near-label concentrations
            kills tadpoles outright. Atrazine disrupts sex determination during tadpole development,
            acting as an endocrine disruptor even at low concentrations. When these chemicals
            reach a breeding pond through runoff or drift, the tadpoles die before they emerge.
          </p>
          <p>
            A yard where Gray Tree Frogs are calling in July has been free of these chemicals
            long enough for tadpoles to survive a full season — from May through metamorphosis.
            That is a meaningful signal. It is the same chemical and habitat profile
            that monarch butterflies need to safely feed, lay eggs, and complete their
            breeding cycle.
          </p>
        </section>

        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">The frog you hear but rarely see</h2>
          <p>
            Gray Tree Frogs spend most of their adult lives in trees and shrubs, not on the ground.
            Adhesive toe pads allow them to cling to bark, window screens, and smooth-sided branches —
            they are true climbers. Their skin shifts between gray, green, and brown
            depending on temperature and background, making them nearly invisible against bark even
            at close range. The bright yellow-orange flash of color on their inner thighs,
            visible only when they leap, is thought to startle predators mid-flight.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Gray_tree_frog.jpg"
                  alt="Gray Tree Frog clinging to a branch, showing the bright yellow-orange coloring on the inner thighs — a flash display used to startle predators"
                  loading="lazy"
                />
                <figcaption>
                  The gray tree frog hides its brightest colors on the inside of its thighs, invisible at rest. When threatened, it flashes those vivid patches as it leaps — a brief burst of yellow-orange that startles the predator and allows escape. A yard that can't hold standing water through June has no frogs calling in July.
                  <span className="photo-credit"> Photo: Robert A. Coggeshall · <a href="https://commons.wikimedia.org/wiki/File:Gray_tree_frog.jpg" target="_blank" rel="noopener noreferrer">Public domain</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            They are also freeze-tolerant in a way almost no other vertebrate is.
            In autumn, they produce glycerol as a cryoprotectant, allowing ice to form in
            the spaces between cells while the cells themselves remain protected.
            Frozen stiff under leaf litter in November, they thaw in April and resume life
            exactly where they left off. This mechanism requires undisturbed leaf litter
            in your garden beds through the winter — remove the leaves, remove the frogs.
          </p>
        </section>

        <section aria-labelledby="breeding-heading">
          <h2 id="breeding-heading">Breeding — later than you might expect</h2>
          <p>
            While spring peepers call in March and April, Gray Tree Frogs do not begin calling
            until late May, and they continue through August. Males call from trees and shrubs
            near water — not from the water itself — after warm rains. Females approach
            and choose among calling males. Eggs and tadpoles develop in the shallows of
            small ponds and water features.
          </p>
          <p>
            One critical requirement: no fish. Fish eat both eggs and tadpoles with near-complete
            efficiency and will eliminate a breeding population in a single season.
            Even a small ornamental pond stocked with goldfish cannot support Gray Tree Frog
            breeding. A fishless pond — even a half-barrel or shallow tub — can.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three things that bring Gray Tree Frogs back</h2>
          <ol className="step-list">
            <li>
              <strong>Add a small fishless water feature.</strong>{' '}
              It does not need to be large — a half-barrel or shallow tub works.
              The water must have no fish, must be at least partly shaded, and must have
              shallow edges where tadpoles can develop. Native emergent plants —
              cattail, pickerelweed, blue flag iris — add tadpole cover and are
              well-suited to wet edges throughout eastern North America.
            </li>
          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Garden_bird_bath_Nuthurst_West_Sussex_England_01.jpg" alt="Shallow stone water feature in a garden" loading="lazy" />
            <figcaption>
              Gray tree frogs breed in any standing fresh water — a garden pond, a rain barrel, even a large container. A single season of breeding success in a yard-scale water feature can produce hundreds of juveniles that disperse into the surrounding neighborhood.
              <span className="photo-credit"> Photo: Acabashi&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
            <li>
              <strong>Keep a 50-foot pesticide-free buffer around any water.</strong>{' '}
              Atrazine and glyphosate travel in runoff. Applications on a lawn uphill
              from a pond will reach the water within a few rain cycles.
              A no-spray buffer around any water feature is the single most important
              action you can take for tadpole survival.
            </li>
            <li>
              <strong>Keep native shrubs and trees near the water.</strong>{' '}
              Adult frogs spend their non-breeding time in the canopy, not at the pond.
              They need shrubs and small trees within reach of the water for foraging,
              calling perches, and summer shelter. Buttonbush, elderberry, and native
              viburnums thrive at wet edges and support both the frogs and the insects
              they hunt.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The connection to monarchs</h2>
          <p>
            A yard that supports Gray Tree Frog tadpoles through a full season — May through August —
            is a yard without significant pesticide use during that same window.
            That is also the exact period when monarch caterpillars are feeding on milkweed.
            These two species do not interact directly, but their requirements overlap almost
            completely. Create conditions for one and you create conditions for the other.
          </p>
          <p>
            This is what indicator species do: they tell you something true about the whole system.
            A summer trill from the tree line at dusk is not just a pleasant sound.
            It is evidence that the habitat has reached a threshold — the chemistry is right,
            the food web is intact, and conditions that once sustained this place have been
            partially restored. That is what the work of habitat gardening sounds like.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to take the next step?</strong>{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('plant-milkweed')}
            >
              Plant milkweed
            </button>
            {' '}to add monarch habitat alongside your water feature, or{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('choose-a-plant')}
            >
              choose a native plant
            </button>
            {' '}for the wet edge of your pond.
          </p>
        </div>
      </div>
    </>
  )
}
