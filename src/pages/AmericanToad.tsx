import type { Page } from '../App'

interface AmericanToadProps {
  onNavigate: (page: Page) => void
}

export default function AmericanToad({ onNavigate }: AmericanToadProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Bufo_americanus_PJC1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="American Toad resting in garden leaf litter, warty brown skin providing natural camouflage among fallen leaves"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Cephas · <a href="https://commons.wikimedia.org/wiki/File:Bufo_americanus_PJC1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a> via Wikimedia Commons */}
          Photo: Cephas&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Bufo_americanus_PJC1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Toad</h1>
        <p className="hero__lead">
          The American Toad is one of the clearest signs that a yard and its
          nearby wetland are both still working. If you hear that long trill on
          a warm spring night, you are listening to two connected habitat
          systems functioning together.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="indicator-heading">
          <h2 id="indicator-heading">A two-system health check you can hear after dark</h2>
          <p>
            American Toads (<em>Anaxyrus americanus</em>) need two different
            habitats to complete their lives: shallow freshwater breeding water
            for eggs and tadpoles, and intact terrestrial habitat with leaf
            litter, loose soil, and shelter for adult foraging and winter
            survival. That makes them a dual-habitat indicator species.
          </p>
          <p>
            When toads call from a pond, rain garden, or vernal pool in spring,
            they are reporting that both systems are still connected. The water
            is usable for breeding, and the surrounding ground layer is safe
            enough for adults to live there the rest of the year. A yard that
            supports calling toads is doing more ecological work than it looks
            like from the porch.
          </p>
        </section>

        <section aria-labelledby="crisis-heading">
          <h2 id="crisis-heading">Stable today, but part of a global amphibian crisis</h2>
          <p>
            The American Toad is still widespread and considered secure across
            much of its range, but amphibians as a class are now the most
            threatened vertebrate group on Earth. Around 41% of amphibian
            species are threatened globally. The lesson is not that toads are
            safe forever. The lesson is that stable species need protection
            before the pressures that erased others reach them too.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Bufo_americanus_PJC2.jpg"
                  alt="American Toad showing the prominent parotoid glands behind its eyes — the toxic defense glands"
                  loading="lazy"
                />
                <figcaption>
                  The bulging glands behind a toad's eyes are parotoid glands — they secrete bufadienolides, compounds toxic to most predators. This is why toads can sit in garden beds during daylight. Lawn pesticides absorbed through their permeable skin bypass this chemical armor entirely.
                  <span className="photo-credit"> Photo: Cephas · <a href="https://commons.wikimedia.org/wiki/File:Bufo_americanus_PJC2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            Chytrid fungus has already driven catastrophic amphibian declines
            worldwide. American Toads are more resistant than many frog
            species, but that resistance depends on healthy immune function.
            Habitat degradation and chemical stress make even a common toad more
            vulnerable than it appears from a simple range map.
          </p>
        </section>

        <section aria-labelledby="threats-heading">
          <h2 id="threats-heading">What threatens them: glyphosate, road salt, and fish in breeding water</h2>
          <p>
            American Toads breed in shallow water, laying long double strings of
            eggs around aquatic vegetation. Tadpoles develop over roughly
            50–65 days, then tiny toadlets leave the water and disperse into the
            surrounding yard. That whole cycle is vulnerable to common suburban
            decisions.
          </p>
          <p>
            Glyphosate formulations such as Roundup can kill amphibian tadpoles
            at concentrations reached under normal use conditions. Road salt
            runoff causes developmental problems and lowers survival in breeding
            ponds. And adding fish to a rain garden or wildlife pond turns a
            breeding site into a trap, because fish consume the tadpoles before
            metamorphosis is complete.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>No glyphosate, a fish-free pond, leaf litter, and no road salt</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Garden_bird_bath_Nuthurst_West_Sussex_England_01.jpg" alt="Shallow garden water feature in a landscaped yard" loading="lazy" />
            <figcaption>
              A shallow water feature or garden pond — even a half-buried container — can become a breeding site. Toads need standing water in spring and dry shelter the rest of the year. Providing both is the whole job.
              <span className="photo-credit"> Photo: Acabashi&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Leave the leaves, brush piles, and loose soil in place.</strong>{' '}
              Toads shelter under cover by day and burrow below the frost line to
              overwinter. A tidy, exposed yard removes the places they need most.
            </li>
            <li>
              <strong>Eliminate glyphosate, insecticides, and other lawn chemicals.</strong>{' '}
              Toad skin is permeable. Chemicals in soil, water, and vegetation
              move directly into the animal. The pesticide-free yard is the
              toad-safe yard.
            </li>
            <li>
              <strong>Create or protect a shallow fish-free water feature.</strong>{' '}
              A rain garden, vernal pool, or tub pond with gradual edges and
              emergent plants can provide breeding habitat, as long as no fish
              are added and runoff from roads or sprayed lawn edges is kept out.
            </li>
            <li>
              <strong>Replace sodium chloride road salt with sand or calcium magnesium acetate on surfaces that drain toward your water feature.</strong>{' '}
              Chloride does not bind to soil — it moves freely through snowmelt into standing water. At low concentrations, it causes measurable increases in tadpole deformity rates near road-corridor ponds. Calcium magnesium acetate breaks down through soil bacteria within days. Sand provides traction with no dissolved compounds reaching the breeding water at all.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">A toad-safe yard is also a monarch-safe yard</h2>
          <p>
            American Toads can eat up to 1,000 insects in a single night,
            including slugs, beetles, mosquitoes, and other garden pests. They
            are free pest management — but only if the homeowner stops using the
            chemicals that harm them first.
          </p>
          <p>
            This is where the toad connects directly to Camp Monarch's mission.
            The same pesticide-free, structurally layered habitat that supports
            monarch caterpillars and native pollinators also supports toads. If
            toads are breeding in a yard, the chemical load is low enough for
            one of the most sensitive vertebrates in the system to survive. That
            is a concrete sign that restoration is becoming real.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to make your yard safer for toads and monarchs?</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a native plant
            </button>
            {' '}to rebuild shelter and insect life, or{' '}
            <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>
              plant milkweed
            </button>
            {' '}to expand a pesticide-free pollinator corridor. The ground layer — the loose
            soil and leaf litter where toads burrow and overwinter — is covered in the{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-layers')}>
              Habitat Layers guide
            </button>
            {' '}and the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            . Stop the chemical exposure that moves through permeable toad skin with the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticide Guide
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
