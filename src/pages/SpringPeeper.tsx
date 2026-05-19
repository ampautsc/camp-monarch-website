import type { Page } from '../App'

interface SpringPeeperProps {
  onNavigate: (page: Page) => void
}

export default function SpringPeeper({ onNavigate }: SpringPeeperProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ad/H_crucifer_USGS.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Spring Peeper frog showing distinctive X marking on back — this dime-sized frog's call is the first sound of the year that reaches you from a pond two lots away"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: USGS · <a href="https://commons.wikimedia.org/wiki/File:H_crucifer_USGS.jpg" target="_blank" rel="noopener noreferrer">Public domain</a> via Wikimedia Commons */}
          Photo: USGS&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:H_crucifer_USGS.jpg" target="_blank" rel="noopener noreferrer">Public domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Spring Peeper</h1>
        <p className="hero__lead">
          The Spring Peeper's chorus begins before winter is over — on the first
          night the air holds above 50°F, sometimes while ice still edges the pond,
          sometimes in late February. The frog making that sound weighs less than a
          grape. One male, calling alone at the edge of a pond, can be heard from
          inside a house with the windows shut. In a pond of a hundred males calling
          together, the sound carries half a mile. Most people who grew up near water
          in the eastern United States know that sound. Many have stopped hearing it.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="phenology-heading">
          <h2 id="phenology-heading">Calling before the pond is fully thawed</h2>
          <p>
            Spring Peepers (<em>Pseudacris crucifer</em>) are often the first
            frogs to call each year — sometimes while ice still edges the pond.
            Males produce that chorus by calling up to 13,500 times per
            night. The first-chorus date in any given location has shifted an
            average of ten days earlier over the past fifty years, tracking the
            same rise in spring air temperatures that has pushed maple syrup
            harvest and cherry blossom dates earlier across the same region.
          </p>
          <p>
            A pond that hosts peepers in March was fish-free through winter,
            shallow enough to warm quickly in spring, and surrounded by enough
            terrestrial cover — leaf litter, bark, logs — for adults to have
            overwintered and returned. Peepers cannot breed in water where fish
            are present: a single introduction of goldfish or koi ends the
            chorus permanently. When you hear them, it means those conditions held.
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
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Spring_Peeper.jpg"
                  alt="Spring Peeper on a twig, showing the distinctive X-pattern on its back and the small toe pads for gripping smooth surfaces"
                  loading="lazy"
                />
                <figcaption>
                  Each male Spring Peeper inflates its vocal sac to produce a call audible 1,000 feet away — extraordinary for an animal smaller than a quarter. The chorus of dozens of males creates the rising wall of sound that marks the genuine arrival of spring. The first night above 50°F in late February or March triggers the chorus.
                  <span className="photo-credit"> Photo: Wildreturn · <a href="https://commons.wikimedia.org/wiki/File:Spring_Peeper.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            They overwinter under leaf litter, bark, and logs near breeding
            ponds. Raking away that leaf layer in fall or spring removes the
            insulation that makes this extraordinary winter survival possible.
          </p>
        </section>

        <section aria-labelledby="threats-heading">
          <h2 id="threats-heading">Glyphosate, road salt, and the pond someone drained</h2>
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
          <h2 style={{ marginTop: 0 }}>A fishless pond, the leaf layer, no herbicide, no road salt</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Garden_bird_bath_Nuthurst_West_Sussex_England_01.jpg" alt="Shallow water feature suitable for amphibian breeding" loading="lazy" />
            <figcaption>
              Spring peepers breed in shallow, fish-free water — any still fresh water will do. A garden pond, a half-barrel, or an excavated depression that holds spring rain long enough for tadpole development can function as a breeding site. Even one successful breeding season matters.
              <span className="photo-credit"> Photo: Acabashi&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
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
            <li>
              <strong>Switch from sodium chloride road salt to sand or calcium magnesium acetate on any surface that drains toward seasonal water.</strong>{' '}
              Chloride from road salt does not bind to soil particles — it moves freely through
              groundwater and arrives in breeding ponds through snowmelt each spring, at the same
              time peeper eggs are developing. Studies of peeper populations along road corridors
              in the northeast found embryo deformity rates measurably higher in ponds receiving
              road salt runoff than in ponds insulated from drainage. Calcium magnesium acetate
              breaks down in soil microbiologically rather than accumulating as chloride ion.
              Sand, used alone, provides traction without contributing any dissolved compound to
              drainage.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The peeper chorus is the habitat working</h2>
          <p>
            A homeowner who creates native wildflower gardens, eliminates
            pesticides, preserves leaf litter, and installs a fish-free water
            feature may hear a Spring Peeper chorus for the first time by the
            third or fourth spring. That sound means the water stayed fish-free,
            the leaf litter held through winter, and nothing toxic reached the
            drainage. The restoration worked.
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
            Build or maintain a fishless water feature with the{' '}
            <button className="link-button" onClick={() => onNavigate('water-for-wildlife')}>
              Water for Wildlife guide
            </button>
            . Protect the overwintering leaf layer with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            . Stop glyphosate near drainage with the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticide Guide
            </button>
            . Or{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              choose a native plant
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
