import type { Page } from '../App'

interface CanadaGoldenrodProps {
  onNavigate: (page: Page) => void
}

export default function CanadaGoldenrod({ onNavigate }: CanadaGoldenrodProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Solidago_canadensis_20050815_04.jpg/960px-Solidago_canadensis_20050815_04.jpg"
          alt="Canada goldenrod in full bloom — late summer flowering native plant with dense golden flower clusters"
          className="species-hero-image"
          style={{ objectPosition: 'center 70%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Christian Fischer&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Solidago_canadensis_20050815_04.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Goldenrod blooms in September.<br />So do migrating monarchs.</h1>
        <p className="hero__lead">
          A monarch butterfly feeding on Canada goldenrod in late September is converting
          flower nectar into abdominal fat that will fuel a continuous flight to a specific
          mountain forest in Michoacán, Mexico — roughly 2,500 miles southwest.
          The goldenrod blooms from late August through October across the eastern half
          of the continent, covering exactly the weeks the monarch migration moves south.
        </p>
        <p className="hero__lead">
          Most homeowners who have goldenrod growing along a fence line pull it, assuming
          it causes hay fever. It doesn't. Ragweed causes hay fever. Goldenrod gets blamed
          because both bloom in August and September, but goldenrod is insect-pollinated —
          its pollen is sticky and heavy and never reaches your sinuses.
          Pulling goldenrod to treat hay fever removes a nectar source and does nothing
          to the ragweed still standing two feet away.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="timing-heading">
          <h2 id="timing-heading">Late August through October — the migration window</h2>
          <p>
            Monarchs departing the northern US and Canada begin their southward migration
            in late August. The peak of the eastern migration moves through the Midwest and
            mid-Atlantic states in September and October. During this passage, adults
            feed continuously to build fat reserves.
          </p>
          <p>
            Canada goldenrod (<em>Solidago canadensis</em>) blooms across this same window —
            late August through October in most of its range. It is one of the few native
            perennials producing abundant nectar this late in the season, when most spring
            and summer bloomers have already finished. A yard with goldenrod in September
            is a functioning fuel stop on the migration corridor.
          </p>
        </section>

        <section aria-labelledby="ragweed-heading">
          <h2 id="ragweed-heading">Ragweed blooms at the same time and looks nothing like it</h2>
          <div className="callout callout--orange">
            <h3 style={{ marginTop: 0 }}>The misidentification that costs pollinators</h3>
            <p>
              Ragweed (<em>Ambrosia artemisiifolia</em>) is the plant causing late-summer hay fever.
              It releases clouds of wind-borne pollen that can travel hundreds of miles.
              Ragweed is a low-growing, green-leaved plant with inconspicuous greenish flowers —
              easy to miss while standing next to tall, gold-flowering goldenrod.
            </p>
            <p style={{ marginBottom: 0 }}>
              Goldenrod is insect-pollinated. Its pollen grains are large, sticky, and designed
              to attach to bee bodies, not float through air. You cannot inhale goldenrod pollen
              from a distance. In allergy studies, goldenrod pollen causes reactions only in
              people who handle the flowers directly.
            </p>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            The confusion has ecological consequences. Homeowners pulling goldenrod in late summer
            are removing one of the highest-value nectar sources of the season based on a
            misidentification of the plant two feet to its left.
          </p>
        </section>

        <section aria-labelledby="visitors-heading">
          <h2 id="visitors-heading">What lands on goldenrod between August and October</h2>
          <p>
            Monarchs are visible on goldenrod in September, but they share the flowers with
            dozens of native bee species — including the federally threatened rusty patched
            bumblebee (<em>Bombus affinis</em>), which depends on late-season goldenrod nectar
            to provision its colonies before winter. Soldier beetles cluster on the flower heads.
            Tiger swallowtails and great spangled fritillaries appear in late August.
          </p>
          <p>
            After the flowers finish, American goldfinches pull seeds from the dry seed heads
            through October, November, and into winter. A goldenrod stand left uncut through
            the cold months provides food for birds long after the monarchs have passed through.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Planting and managing Canada goldenrod</h2>
          <ol className="step-list">
            <li>
              <strong>Plant in full sun, any soil.</strong>{' '}
              Canada goldenrod tolerates poor, dry, clay, and sandy soils. It does not need
              amended beds or regular watering once established. It thrives in conditions
              that most ornamental plants cannot handle.
            </li>
            <li>
              <strong>Give it a defined edge.</strong>{' '}
              Goldenrod spreads by rhizome. In rich garden soil it can move aggressively.
              Plant it at the back of a border, along a fence line, or in a contained area
              where spread is acceptable. A mow edge or hard border keeps it in place.
            </li>
            <li>
              <strong>Leave the seed heads through winter.</strong>{' '}
              Goldfinches and other seed-eating birds work the dry heads from October through
              February. Cut them back in late February or early March before new growth begins —
              not in October when the seeds are still feeding birds.
            </li>
            <li>
              <strong>Use the straight species, not cultivars.</strong>{' '}
              Horticultural varieties like 'Fireworks' and 'Golden Fleece' have been selected
              for visual appeal and often produce less pollen and nectar than the straight species.
              Source plugs or bare-root divisions from a native plant nursery, not a garden center.
            </li>
          </ol>
        </div>

        <section aria-labelledby="zones-heading">
          <h2 id="zones-heading">Range: zones 3–9, most of eastern North America</h2>
          <p>
            <em>Solidago canadensis</em> grows naturally from the Atlantic coast west to the Rocky Mountains
            and from southern Canada into the Gulf Coast states. USDA hardiness zones 3 through 9.
            It is one of the most geographically widespread native perennials in North America,
            which means local ecotypes are often available from regional native plant nurseries
            rather than sourcing from a distant producer.
          </p>
          <p>
            Bloom time varies by latitude and local conditions: late July in the north,
            mid-August through October in the Midwest and mid-Atlantic, October into November
            in the South. Plants sourced from local ecotypes will bloom on the schedule
            that matches the migration in your region.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            Canada goldenrod is one of the plants that can turn a property line or unused fence row
            into a functioning habitat corridor. See what other late-season bloomers pair with it in the{' '}
            <button className="link-button" onClick={() => onNavigate('plants-bloom-calendar')}>
              Bloom Calendar
            </button>
            , and find sources for goldenrod and other natives in the{' '}
            <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
              Native Plant Near Me
            </button>
            {' '}finder.
          </p>
        </div>
      </div>
    </>
  )
}
