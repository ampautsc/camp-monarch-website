import type { Page } from '../App'

interface TigerSwallowtailProps {
  onNavigate: (page: Page) => void
}

export default function TigerSwallowtail({ onNavigate }: TigerSwallowtailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Pristine_Eastern_Tiger_Swallowtail.jpg/960px-Pristine_Eastern_Tiger_Swallowtail.jpg"
          alt="Eastern Tiger Swallowtail butterfly on native joe-pye weed, yellow and black striped wings spread, sipping nectar alongside a monarch butterfly"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: HaarFager at English Wikipedia · <a href="https://commons.wikimedia.org/wiki/File:Pristine_Eastern_Tiger_Swallowtail.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a> via Wikimedia Commons */}
          Photo: HaarFager at English Wikipedia&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Pristine_Eastern_Tiger_Swallowtail.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Tiger Swallowtail</h1>
        <p className="hero__lead">
          The Eastern Tiger Swallowtail is the largest butterfly in eastern
          North America. It is familiar, spectacular, and a perfect gateway
          species for butterfly conservation. The same native meadow that fuels
          monarch migration can also support tiger swallowtails when host trees
          are nearby.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="recognition-heading">
          <h2 id="recognition-heading">A familiar butterfly with uncommon ecological value</h2>
          <p>
            Eastern Tiger Swallowtail (<em>Papilio glaucus</em>) can reach
            a wingspan near 5.5 inches, making it the largest butterfly in the
            eastern United States. It is also the state insect of Virginia,
            Georgia, Alabama, Delaware, and South Carolina, which means many
            people already recognize it before they know its name.
          </p>
          <p>
            That familiarity is useful. When people say they have seen the
            big yellow butterfly in their yard, they are ready to learn the
            next step: butterflies need both nectar flowers and host plants.
            Seeing adults is not enough. Reproduction depends on caterpillar
            host trees.
          </p>
        </section>

        <section aria-labelledby="life-cycle-heading">
          <h2 id="life-cycle-heading">Host trees and remarkable adaptations</h2>
          <p>
            Tiger Swallowtail caterpillars feed on native trees including tulip
            poplar, wild black cherry, river birch, and sweet bay magnolia.
            Without these host trees, adults may visit flowers but cannot
            complete the life cycle in your neighborhood.
          </p>
              <figure className="species-content-photo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Papilio_glaucus_larva_1.jpg"
                  alt="Eastern Tiger Swallowtail caterpillar on a leaf — large green body with false eyespots near the head end"
                  loading="lazy"
                />
                <figcaption>
                  The young tiger swallowtail caterpillar looks exactly like a bird dropping — a defense so convincing that predators ignore it. Later instars develop false eyespots near the head and an osmeterium, a forked orange scent organ that deploys when touched. Host trees include tulip poplar, wild cherry, and native magnolia.
                  <span className="photo-credit"> Photo: Jacy Lucier · <a href="https://commons.wikimedia.org/wiki/File:Papilio_glaucus_larva_1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            Females are dimorphic: some are yellow like males, while dark-form
            females are nearly black and mimic toxic Pipevine Swallowtails.
            Males often gather on moist soil in puddling groups to absorb sodium
            and amino acids that are later passed during mating. These behaviors
            are visible examples of evolution and nutrient ecology in action.
          </p>
        </section>

        <section aria-labelledby="threats-heading">
          <h2 id="threats-heading">The preventable threat: non-selective caterpillar sprays</h2>
          <p>
            Broad-spectrum yard insecticides and Bt sprays used for caterpillar
            control do not distinguish between pest species and native swallowtail
            larvae. Applications near host trees can remove an entire season of
            Tiger Swallowtail reproduction.
          </p>
          <p>
            Population trend data for many butterflies remains sparse compared
            with bird monitoring, so local observation matters. Submitting
            sightings to iNaturalist and butterfly counts helps close the data
            gap and reveals where habitat loss and pesticide pressure are causing
            declines.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three actions that help Tiger Swallowtails now</h2>

          <figure className="species-content-photo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Asclepias_tuberosa_2.jpg" alt="Native butterfly weed in bloom, attracting pollinators" loading="lazy" />
            <figcaption>
              Tiger swallowtails puddle for minerals at moist soil, nectar from native flowers, and pupate in leaf litter beneath their host trees. A yard with native plantings, undisturbed soil edges, and an unraked layer provides three of the four things they need — the fourth is the tree you may already have.
              <span className="photo-credit"> Photo: Tortie tude&nbsp;·&nbsp;<a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en" target="_blank" rel="noopener noreferrer">CC0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant a native host tree.</strong>{' '}
              Add tulip poplar, wild cherry, river birch, or sweet bay magnolia
              to provide caterpillar habitat.
            </li>
            <li>
              <strong>Build a shared nectar corridor.</strong>{' '}
              Grow milkweed, joe-pye weed, ironweed, and native phlox so monarchs
              and tiger swallowtails can fuel in the same meadow.
            </li>
            <li>
              <strong>Skip insecticides and Bt near host plants.</strong>{' '}
              Accept some leaf damage as the sign of a functioning butterfly
              nursery and keep reproduction intact.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">One planting plan, multiple butterfly species</h2>
          <p>
            Camp Monarch habitat is not just for monarchs. The native wildflower
            mix that supports monarch migration also feeds Eastern Tiger
            Swallowtails. When one host tree is added nearby, that same site can
            support breeding and nectaring for both iconic butterflies.
          </p>
          <p>
            This is what makes native habitat restoration powerful: one yard can
            support multiple life cycles at once when structure, nectar, and
            pesticide-free management are aligned.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to support swallowtails and monarchs together?</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a native plant
            </button>
            {' '}to build a nectar corridor, or{' '}
            <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>
              plant milkweed
            </button>
            {' '}as part of a shared butterfly habitat plan.
          </p>
        </div>
      </div>
    </>
  )
}