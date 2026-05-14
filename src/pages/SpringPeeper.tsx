import type { Page } from '../App'

interface SpringPeeperProps {
  onNavigate: (page: Page) => void
}

export default function SpringPeeper({ onNavigate }: SpringPeeperProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Spring Peeper</h1>
        <p className="hero__lead">
          The Spring Peeper's chorus is one of the most unmistakable sounds of
          eastern North America — a high, piercing peep that signals winter is
          truly over. This thumbnail-sized frog is both a phenological clock and
          a living indicator of wetland health.
        </p>
      </section>

      <figure className="species-hero-photo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ad/H_crucifer_USGS.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Spring Peeper frog showing distinctive X marking on back — this dime-sized frog's call is the first sure sign that winter has ended"
          loading="lazy"
        />
        <figcaption>
          Photo: USGS ·{' '}
          <a href="https://commons.wikimedia.org/wiki/File:H_crucifer_USGS.jpg" target="_blank" rel="noopener noreferrer">
            Public domain
          </a>{' '}
          via Wikimedia Commons
        </figcaption>
      </figure>

      <div className="page">
        <section aria-labelledby="phenology-heading">
          <h2 id="phenology-heading">The frog that tells you spring has arrived</h2>
          <p>
            Spring Peepers (<em>Pseudacris crucifer</em>) are often the first
            frogs to call each year — sometimes while ice still edges the pond.
            Males produce that iconic chorus by calling up to 13,500 times per
            night. Because calling onset is tightly correlated with air
            temperature and snowmelt timing, phenologists use it as a biological
            marker for winter's end.
          </p>
          <p>
            Their presence in a pond signals something equally important: the
            water is fish-free, shallow enough to warm quickly, and surrounded
            by intact terrestrial habitat. A Spring Peeper chorus is not just a
            pleasant sound — it is audible evidence that the habitat system is
            working.
          </p>
        </section>

        <section aria-labelledby="freeze-heading">
          <h2 id="freeze-heading">A vertebrate that survives freezing solid</h2>
          <p>
            Spring Peepers are among the rare vertebrates capable of surviving
            partial freezing. As winter temperatures drop, ice forms in their
            extracellular fluid while their liver rapidly converts glycogen into
            glucose — a natural cryoprotectant that prevents lethal intracellular
            ice crystals. A peeper may freeze solid, stop breathing, and have no
            heartbeat for weeks, then thaw and resume normal activity in spring.
          </p>
          <p>
            They overwinter under leaf litter, bark, and logs near breeding
            ponds. Raking away that leaf layer in fall or spring removes the
            insulation that makes this extraordinary winter survival possible.
          </p>
        </section>

        <section aria-labelledby="threats-heading">
          <h2 id="threats-heading">What threatens them: chemicals and wetland loss</h2>
          <p>
            Spring Peepers are IUCN Least Concern rangewide, but locally
            threatened wherever wetlands have been drained. Breeding populations
            disappear completely when their fish-free shallow ponds are filled,
            deepened to support fish stocking, or chemically contaminated.
          </p>
          <p>
            Research by Rick Relyea demonstrated that Roundup (glyphosate with
            surfactant POEA) causes up to 70% tadpole mortality at concentrations
            that occur under normal residential use. Road salt is a second threat:
            chloride runoff from winter applications contaminates breeding ponds
            and causes developmental abnormalities in peeper embryos and tadpoles.
            Any application of herbicide or salt near drainage areas that feed
            seasonal wetlands reaches the breeding water.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three actions that support Spring Peepers</h2>
          <ol className="step-list">
            <li>
              <strong>Create or maintain a fish-free water feature.</strong>{' '}
              A vernal pool, rain garden with a permanent pool, or tub pond with
              no fish — with shallow gently sloping edges (0–30 cm at margins) —
              gives peepers a viable breeding site. Let it dry by late summer if
              needed; that is acceptable to peepers and eliminates fish naturally.
              Surround it with native shrubs and leaf litter for adult cover.
            </li>
            <li>
              <strong>Preserve leaf litter year-round.</strong>{' '}
              Leave a 3–4 inch leaf layer under shrubs and at yard edges through
              fall and spring. Adult peepers overwinter in this layer and disperse
              through it after breeding. Bare soil increases desiccation and
              predation risk during movement.
            </li>
            <li>
              <strong>Eliminate glyphosate near any drainage area.</strong>{' '}
              Never apply Roundup or other glyphosate formulations near lawns,
              gardens, or driveways that drain toward seasonal wet areas. Use
              mechanical weeding or mulch instead. Road salt alternatives and
              reduced application rates also lower chloride runoff to breeding
              ponds.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The peeper chorus is the habitat working</h2>
          <p>
            A Camp Monarch homeowner who creates native wildflower gardens,
            eliminates pesticides, preserves leaf litter, and installs a
            fish-free water feature may be rewarded with a Spring Peeper chorus
            by the third or fourth spring. That sound is the biological
            confirmation that the restoration is real — not just aesthetically
            pleasing but structurally functional.
          </p>
          <p>
            The same chemical-free, structurally layered habitat that supports
            Spring Peepers supports monarchs, fireflies, and every other
            indicator species in the Camp Monarch network. Treat the peeper
            chorus as a report card. If you hear it, you are building something
            that works.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to build habitat that works for peepers and monarchs?</strong>{' '}
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
