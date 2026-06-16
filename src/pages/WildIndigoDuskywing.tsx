import type { Page } from '../App'

interface WildIndigoDuskywingProps {
  onNavigate: (page: Page) => void
}

export default function WildIndigoDuskywing({ onNavigate }: WildIndigoDuskywingProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Wild_Indigo_Duskywing_%28Erynnis_baptisiae%29_-_Guelph%2C_Ontario_2014-06-10_%2802%29.jpg/1280px-Wild_Indigo_Duskywing_%28Erynnis_baptisiae%29_-_Guelph%2C_Ontario_2014-06-10_%2802%29.jpg"
          alt="Wild Indigo Duskywing (Erynnis baptisiae) adult resting with wings spread flat on a leaf, showing the dark brown forewing marked with two rows of pale cream spots"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Ryan Hodnett&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Wild_Indigo_Duskywing_(Erynnis_baptisiae)_-_Guelph,_Ontario_2014-06-10_(02).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Wild Indigo Duskywing</h1>
        <p className="hero__lead">
          The Wild Indigo Duskywing is a dark brown spring skipper that flies for ten weeks
          in April through June — and then disappears until the following spring. Adults are
          about 1.5 inches across, dark brown with two rows of pale cream spots across the
          forewing. At rest they hold wings flat and blend nearly perfectly into dried leaf
          litter. The caterpillar feeds only on Wild Blue Indigo (Baptisia australis) leaves,
          rolling individual leaflets into silk-lined tubes and feeding from inside. Where
          Wild Blue Indigo is absent from a county, the Wild Indigo Duskywing is absent too.
          The butterfly's range is a map of where Baptisia still grows. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            During the May and June flight peak, male Wild Indigo Duskywings establish perch
            sites on vegetation or bare ground near Baptisia plants — launching brief flights
            at passing insects and returning to the same stem repeatedly. Females spend their
            adult lives walking Wild Blue Indigo leaflets with their feet, tasting for the
            Baptisia alkaloid signature before laying one egg per qualifying leaflet. She
            distributes her clutch across multiple plants rather than concentrating eggs on
            one stem, spreading the brood across more leaflets and reducing competition
            among hatching larvae. Adults nectar at Wild Bergamot, Purple Coneflower, and
            clover during the flight period. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Wild_indigo_duskywing_%28Erynnis_baptisiae%29.jpg"
            alt="Wild Indigo Duskywing (Erynnis baptisiae) resting on a leaf showing the mottled dark brown forewing pattern and the rounded wing outline typical of the Erynnis skippers"
            width={733}
            height={710}
            loading="lazy"
          />
          <figcaption>
            After hatching from an egg laid on a young leaflet, the Wild Indigo Duskywing
            caterpillar spins silk threads along the leaflet margins and draws the edges
            into a tube — feeding on the inner surface while the outer wall stays intact.
            A white oak leaf in a tube shape in July is weather damage; a Baptisia leaflet
            curled in a tube in May is a duskywing shelter. The caterpillar overwinters
            in that rolled leaf on the ground as a pupa.
            <span className="photo-credit"> Photo: WanderingMogwai&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Wild_indigo_duskywing_(Erynnis_baptisiae).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The Wild Indigo Duskywing has one brood per year. Adults emerge in late April as
            Wild Blue Indigo breaks dormancy and pushes new growth from the crown base —
            the plant and butterfly arrive in the same week, a synchrony that has evolved
            over millennia. The adult flight ends by early July. The species then exists
            only as chrysalises in leaf litter at the base of the host plant, overwintering
            through summer, fall, and winter until the following April. A fall leaf cleanup
            that removes the debris beneath a Wild Blue Indigo removes those chrysalises
            along with it. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Wild Blue Indigo once grew across eastern prairies, meadows, and open woodlands
            from Pennsylvania west to Nebraska. As those habitats were converted to cropland
            and residential turf, Baptisia populations were removed from most of their range.
            The Wild Indigo Duskywing&apos;s range contracted in parallel. Survey records from
            Ohio and Indiana show the species present at sites with established Baptisia
            populations and absent from comparable sites only a few miles away where the
            plant was not found. [1] A yard with an established Wild Blue Indigo planting
            is a potential duskywing colony site in an otherwise empty landscape.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant Wild Blue Indigo (Baptisia australis) in full sun with well-drained
              to average soil. One established crown provides enough foliage to support
              several egg clutches per season. Two or three crowns spaced a few feet apart
              give females more leaflets to distribute eggs across, matching how the butterfly
              naturally behaves in meadow settings with scattered Baptisia plants. [2]
            </li>
            <li>
              Leave the leaf litter beneath the plant through winter. The chrysalis overwinters
              in the leaf litter and loose soil at the base of the host plant. Removing that
              material in fall eliminates the pupae. Leave fallen debris in place from September
              through late March. Cut dead Baptisia stalks to the ground in late March — before
              new growth emerges — and let cut material lie for a week before removing it. [2]
            </li>
            <li>
              Do not apply insecticide on or near the Baptisia foliage from April through July.
              The caterpillar feeds inside rolled leaflets from late April through midsummer.
              A contact spray or systemic insecticide absorbed through the roots makes the leaf
              tissue toxic to any caterpillar eating it. The young, expanding leaves of April —
              where the female will lay — are the critical protection window. [2]
            </li>
            <li>
              Add nectar flowers within a few meters of the host plant. Wild Bergamot, Purple
              Coneflower, and native clovers are documented nectar sources for Wild Indigo
              Duskywing adults during the April through July flight period. Planting these
              adjacent to Wild Blue Indigo keeps adults active in the same area where females
              will find and assess the host plant. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('wild-blue-indigo')}>
            <span className="neighbor-name">Wild Blue Indigo</span>
            <span className="neighbor-note">The only host plant the caterpillar can use; the female detects Baptisia alkaloids through chemoreceptors in her feet and lays one egg per qualifying leaflet; where Wild Blue Indigo is absent, the duskywing is absent — the butterfly&apos;s range in any county is a direct map of where this plant still grows.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('frosted-elfin')}>
            <span className="neighbor-name">Frosted Elfin</span>
            <span className="neighbor-note">A second Baptisia specialist that lays on flower buds and developing seed pods rather than leaves; when Wild Blue Indigo blooms in May, both the duskywing (using leaves) and the elfin (using flowers) can be present on the same plant at the same time — two specialists, one plant, two different tissues.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-senna')}>
            <span className="neighbor-name">Wild Senna</span>
            <span className="neighbor-note">A companion native legume that blooms in July and August after Wild Blue Indigo has finished; hosts Cloudless Sulphur, Sleepy Orange, and Little Yellow caterpillars; planting both legumes in the same bed extends available larval host material from May through September without a gap.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Queen bumblebees need Wild Blue Indigo&apos;s May bloom immediately after winter dormancy; the same Baptisia stand that hosts duskywing caterpillars on its leaves in May is simultaneously hosting bumblebee pollinators on its flowers — different species, same plant, same week.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.butterfliesandmoths.org/species/Erynnis-baptisiae" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Wild Indigo Duskywing</a></li>
            <li><a href="https://www.wildflower.org/plants/result.php?id_plant=BAAU2" target="_blank" rel="noopener noreferrer">Lady Bird Johnson Wildflower Center — Wild Blue Indigo (host plant)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
