import type { Page } from '../App'

interface PurpleConeflowerProps {
  onNavigate: (page: Page) => void
}

export default function PurpleConeflower({ onNavigate }: PurpleConeflowerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Echinacea_purpurea.jpg/960px-Echinacea_purpurea.jpg"
          alt="Purple coneflower in full bloom — drooping magenta ray petals around a spiky orange-brown central disk, with a bumblebee foraging on the flower head"
          className="species-hero-image"
          style={{ objectPosition: 'center 60%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Petar Milošević&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Echinacea_purpurea.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>A female longhorn bee carries coneflower pollen in July.<br />No other plant will do.</h1>
        <p className="hero__lead">
          The two-spotted longhorn bee (<em>Melissodes bimaculata</em>) is an oligoletic
          specialist — it collects pollen exclusively from <em>Echinacea</em> and closely related
          flowers in the aster family. The branched hairs on its hind legs evolved to trap
          echinacea pollen grains. It does not forage on any other plant family. A female working
          in July visits 30–40 coneflower heads to fill a single pollen load, then carries it back
          to a nest she excavated in bare soil beneath the plants and provisions one larval cell.
        </p>
        <p className="hero__lead">
          With two coneflowers in a bed, she spends most of her time flying between heads.
          With a dense patch of ten or twelve plants, she works a territory where the next flower
          is two feet away. The density of the planting determines whether she can raise offspring
          that year.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="disk-heading">
          <h2 id="disk-heading">The spiky cone that feeds birds from September through January</h2>
          <p>
            After the purple ray petals drop in August and September, the central disk of each
            coneflower head hardens into a brown, ridged cone that holds the seeds through winter.
            The word "echinacea" comes from the Greek <em>echinos</em>, meaning sea urchin — the
            dried seed head looks exactly like one.
          </p>
          <p>
            American goldfinches cling to those stiff stalks and pull seeds out from October through
            January. Dark-eyed juncos work the ground beneath the plants after seeds fall. A
            coneflower patch left standing through winter provides five months of food for seed-eating
            birds that would find nothing in a bed of deadheaded stems.
          </p>
        </section>

        <section aria-labelledby="monarchs-heading">
          <h2 id="monarchs-heading">Monarchs in July, fritillaries in August</h2>
          <p>
            Monarch butterflies emerging from chrysalises in late June and July are the first
            generation shifting from reproduction toward fat accumulation. These adults begin
            the behavioral changes that prefigure the fall migration — longer feeding bouts,
            less time seeking mates. Purple coneflower blooms from late June through August
            in most of its range, covering exactly the period when those monarchs are feeding
            most intensively.
          </p>
          <p>
            Great spangled fritillaries arrive at coneflower heads in late July and August
            and spend 10–15 minutes on a single flower head before moving to the next. Tiger
            swallowtails, painted ladies, and silver-spotted skippers work the flowers alongside
            the fritillaries and the longhorn bees. A patch of twelve coneflowers in July has
            several bee and butterfly species on it at the same time.
          </p>
        </section>

        <div className="callout callout--orange">
          <h3 style={{ marginTop: 0 }}>Two coneflowers versus twelve</h3>
          <p>
            Most homeowners who plant coneflowers buy one or two from a garden center and scatter
            them through a mixed border. Each plant produces ten to thirty flower heads over the
            season — which sounds like enough. But <em>Melissodes bimaculata</em> needs 30–40 flower
            visits to fill a single pollen load, and she provisions multiple cells per nest.
            She competes with bumblebees, sweat bees, and other visitors for the same flowers and
            forages within roughly 300 meters of her ground nest.
          </p>
          <p style={{ marginBottom: 0 }}>
            A scattered planting gives her just enough to work with on a good day. A dense cluster
            of 8 to 12 plants gives her a territory where she can forage efficiently without
            burning most of her energy on travel. The practical rule: plant coneflowers in
            groups, not as singles.
          </p>
        </div>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Dense cluster, bare soil, skip the deadheading</h2>
          <ol className="step-list">
            <li>
              <strong>Plant 8–12 in one location, not singles scattered through a bed.</strong>{' '}
              A dense cluster supports specialist bees that need multiple heads per foraging trip.
              Scattered single plants produce nectar but do not provide the density a
              <em> Melissodes</em> female needs to provision her nest without wasting energy on
              long-distance flight between flowers.
            </li>
            <li>
              <strong>Leave bare soil near the base of the patch.</strong>{' '}
              The two-spotted longhorn bee and other ground-nesting bees excavate nest chambers
              in exposed soil. Mulch layered right up to the stems eliminates this nesting habitat.
              A ring of bare soil 12 inches wide around the base of the planting is enough
              for nest sites.
            </li>
            <li>
              <strong>Do not deadhead until late February.</strong>{' '}
              Goldfinches, juncos, and other seed-eating birds pull seeds from the dried heads
              from October through January. Cutting back in October when seeds are still being
              eaten removes five months of winter food. Cut in late February as new basal rosettes
              appear.
            </li>
            <li>
              <strong>Use straight-species plants, not horticultural cultivars.</strong>{' '}
              Varieties like 'Magnus', 'White Swan', and 'Cheyenne Spirit' were selected for
              larger ray petals and often produce fewer pollen-rich anthers than{' '}
              <em>Echinacea purpurea</em> straight species. Source plugs from a regional native
              plant nursery.
            </li>
          </ol>
        </div>

        <section aria-labelledby="range-heading">
          <h2 id="range-heading">Range: zones 3–9, native across eastern North America</h2>
          <p>
            <em>Echinacea purpurea</em> grows naturally from Ontario south to Louisiana and west
            to the Great Plains. It tolerates full sun in average to dry soil and handles summer
            drought once established. First-year plants from seed rarely bloom — buy plugs for
            flowers the first summer. Each plant self-seeds moderately; a patch of 8 plants will
            expand to 15–20 over three to four years without management.
          </p>
          <p>
            Bloom time: late June through August in most locations, with some variation by latitude
            and local conditions. The window overlaps with the July monarch feeding period and
            continues through the early-August peak of great spangled fritillary activity.
          </p>
          <div className="connections">
            <h3>Plants and species connected to Purple Coneflower</h3>
            <ul>
              <li>
                <button className="link-button" onClick={() => onNavigate('monarch-life')}>
                  Monarch Butterfly
                </button>{' '}
                — feeds on coneflower blooms from late June through August during the pre-diapause fat-accumulation period before the September migration
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('tiger-swallowtail')}>
                  Tiger Swallowtail
                </button>{' '}
                — works coneflower heads in late July and August alongside monarchs, fritillaries, and longhorn bees
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('american-goldfinch')}>
                  American Goldfinch
                </button>{' '}
                — clings to hardened seed stalks and extracts seeds from October through January after the ray petals have dropped
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('canada-goldenrod')}>
                  Canada Goldenrod
                </button>{' '}
                — picks up the bloom season in September when coneflower finishes, bridging the summer-to-fall nectar window
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('native-bees')}>
                  Native Bees
                </button>{' '}
                — the two-spotted longhorn bee (<em>Melissodes bimaculata</em>) collects pollen exclusively from <em>Echinacea</em> and its close relatives in the aster family
              </li>
            </ul>
          </div>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            Purple coneflower covers the summer bloom window between spring wildflowers and fall
            goldenrod — from late June through August when goldenrod is still weeks from opening.
            See how the two plants share the season in the{' '}
            <button className="link-button" onClick={() => onNavigate('plants-bloom-calendar')}>
              Bloom Calendar
            </button>
            , or find coneflower and goldenrod sources in the{' '}
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
