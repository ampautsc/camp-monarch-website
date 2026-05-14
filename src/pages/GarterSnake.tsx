import type { Page } from '../App'

interface GarterSnakeProps {
  onNavigate: (page: Page) => void
}

export default function GarterSnake({ onNavigate }: GarterSnakeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Thamnophis_sirtalis_sirtalis_Wooster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Common Garter Snake emerging from leaf litter showing yellow dorsal stripe — a beneficial predator of garden pests and slug populations"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Wilson44691 · <a href="https://commons.wikimedia.org/wiki/File:Thamnophis_sirtalis_sirtalis_Wooster.jpg" target="_blank" rel="noopener noreferrer">Public domain</a> via Wikimedia Commons */}
          Photo: Wilson44691&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Thamnophis_sirtalis_sirtalis_Wooster.jpg" target="_blank" rel="noopener noreferrer">Public domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Common Garter Snake</h1>
        <p className="hero__lead">
          The Common Garter Snake is the most widely distributed reptile in
          North America — present from Alaska to Florida, coast to coast. It is
          the snake most people encounter first in a backyard or garden, and
          converting that encounter from fear to tolerance is one of the most
          impactful things Camp Monarch can accomplish.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="pest-control-heading">
          <h2 id="pest-control-heading">Free, targeted pest control — no chemicals required</h2>
          <p>
            Common Garter Snakes (<em>Thamnophis sirtalis</em>) eat frogs,
            toads, earthworms, slugs, salamanders, and occasionally voles and
            mice — consuming the organisms that homeowners most commonly target
            with chemical pest control. Their presence is a service certificate:
            confirmation the yard is ecologically intact enough to support a
            complete food web.
          </p>
          <p>
            Garter snakes also sit at a critical junction in the food web,
            connecting aquatic prey (frogs, small fish) to terrestrial prey
            (earthworms, voles) while serving as prey for Red-tailed Hawks,
            Great Blue Herons, raccoons, and Red Foxes. Removing this link
            disrupts connections that no other species can fully replace.
          </p>
        </section>

        <section aria-labelledby="threats-heading">
          <h2 id="threats-heading">The preventable threats: rodenticide and persecution</h2>
          <p>
            The Common Garter Snake is entirely non-venomous and harmless to
            humans — yet it is the most frequently deliberately killed harmless
            wildlife in North America. Every individual lost removes a keystone
            predator from the local food web.
          </p>
          <p>
            Rodenticide compounds the problem silently: garter snakes eating
            earthworms that have absorbed rodenticide from treated soil, or
            eating rodents that consumed bait, accumulate anticoagulant
            concentrations that cause internal hemorrhage. These deaths are
            invisible to homeowners but represent a direct toxicity cascade from
            pest control products to beneficial predators.
          </p>
          <p>
            Road mortality during spring and fall movement, and the destruction
            of communal overwintering dens (hibernacula), round out the
            mortality picture. Hibernacula are site-faithful across generations
            — once destroyed, they cannot be recolonized.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three actions that help garter snakes now</h2>
          <ol className="step-list">
            <li>
              <strong>Build a rock pile and brush pile.</strong>{' '}
              Stack flat fieldstones in a south-facing pile 12–18 inches tall
              and add a brush pile adjacent to any hedgerow. These create the
              thermal shelter garter snakes need to bask, forage, and overwinter.
            </li>
            <li>
              <strong>Eliminate all rodenticide.</strong>{' '}
              Remove every bait station from the yard. Rodenticide kills garter
              snakes through their earthworm and rodent prey — preventing
              secondary poisoning is the most direct way to stop invisible
              mortality.
            </li>
            <li>
              <strong>Leave them undisturbed.</strong>{' '}
              A garter snake found in a warm, sheltered spot in mid-summer may
              be preparing to give birth to 10–40 live young. Leave it
              completely alone and you may witness one of the most remarkable
              events a backyard can offer.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">A garter snake in the yard means monarchs can thrive there too</h2>
          <p>
            A yard where garter snakes forage has the intact ground layer —
            leaf litter, native plants, chemical-free soil, and a functioning
            food web from earthworms to frogs — that monarchs also need for
            safe nectaring and oviposition. If garter snakes are present, the
            chemical and structural conditions monarchs require are present too.
          </p>
          <p>
            Use garter snake presence as a ground-level habitat quality signal:
            if one is foraging in your yard, the soil food web is intact and
            chemical-free. That is the yard monarchs come back to.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to build a yard good enough for garter snakes and monarchs?</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a native plant
            </button>
            {' '}to restore the ground layer they both need, or{' '}
            <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>
              plant milkweed
            </button>
            {' '}as the first step toward a fully chemical-free yard.
          </p>
        </div>
      </div>
    </>
  )
}
