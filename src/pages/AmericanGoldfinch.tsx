import type { Page } from '../App'

interface AmericanGoldfinchProps {
  onNavigate: (page: Page) => void
}

export default function AmericanGoldfinch({ onNavigate }: AmericanGoldfinchProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Carduelis_tristis_-Michigan%2C_USA_-male-8.jpg"
          alt="Male American Goldfinch in brilliant breeding plumage — canary yellow body, black cap and wings — perched on a native coneflower seed head"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Rodney Campbell · <a href="https://commons.wikimedia.org/wiki/File:Carduelis_tristis_-Michigan%2C_USA_-male-8.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a> via Wikimedia Commons */}
          Photo: Rodney Campbell&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Carduelis_tristis_-Michigan%2C_USA_-male-8.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Goldfinch</h1>
        <p className="hero__lead">
          The American Goldfinch is one of the strictest vegetarians in North American birds.
          Its bright yellow summer color is built directly from pigments in the seeds it eats.
          If your yard grows seed-rich native plants, goldfinches have food through winter,
          nesting material in summer, and safer breeding habitat year-round.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">A seed specialist with visible nutrition</h2>
          <p>
            American goldfinches (<em>Spinus tristis</em>) are famous for yellow plumage, but
            that color is not cosmetic. Males build that brightness from carotenoids in seeds
            and plant material. The quality of local seed plants shows up directly in what you
            can see on the bird. In practical terms: plant diversity becomes visible biology.
          </p>
          <p>
            Goldfinches are unusual among songbirds because they rely almost entirely on seeds.
            They feed heavily on goldenrod, native asters, native sunflowers, coneflower,
            black-eyed Susan, and dandelion seed. They even resist most cowbird parasitism
            because their seed-focused diet does not support cowbird nestlings.
          </p>
          <p>
            Population estimates remain high, but trend direction matters: this species is
            expected to be decreasing where seed-bearing plants are removed from roadsides,
            field edges, and yards. "Weed control" can become food control for goldfinches.
          </p>
        </section>

        <section aria-labelledby="lifecycle-heading">
          <h2 id="lifecycle-heading">Late nesting timed to plant cycles</h2>
          <p>
            American goldfinches are among the latest nesters in North America, often beginning
            breeding in late July. That timing aligns with peak availability of seeds and soft
            plant down. Females line nests with fibers and down from plants such as milkweed
            and thistle.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7b/American_Goldfinch-27527-2.jpg"
                  alt="American Goldfinch perched on a coneflower seed head, extracting seeds with its specialized bill"
                  loading="lazy"
                />
                <figcaption>
                  Goldfinches are specialist seed-eaters — they delay nesting until late summer so caterpillar-fed nestlings can transition directly to ripe thistle and coneflower seeds. A garden with native composites still standing in August is exactly what triggers breeding.
                  <span className="photo-credit"> Photo: Ken Thomas · <a href="https://commons.wikimedia.org/wiki/File:American_Goldfinch-27527-2.jpg" target="_blank" rel="noopener noreferrer">Public domain</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            This creates a clear yard-management signal: if milkweed and other seed plants are
            cut before they mature, both food and nesting material disappear. Letting plants
            complete their full life cycle supports monarchs and goldfinches at the same time.
          </p>
          <p>
            Goldfinches also complete a full molt twice each year, including a dramatic shift
            from olive-brown winter plumage to bright breeding yellow. That seasonal change is
            energy-intensive and tightly tied to food availability.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Seed heads, native plantings, milkweed, and no neonicotinoids</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Asclepias_tuberosa_2.jpg" alt="Butterfly weed (Asclepias tuberosa) with bright orange flowers" loading="lazy" />
            <figcaption>
              Butterfly weed and other native asters carry goldfinch-quality seeds well into autumn. Skipping the fall tidy-out — leaving seed heads standing — is the single most direct action a yard can offer.
              <span className="photo-credit"> Photo: Tortie tude&nbsp;·&nbsp;<a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en" target="_blank" rel="noopener noreferrer">CC0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Leave seedheads standing through winter.</strong>{' '}
              Keep stems from native asters, goldenrod, coneflower, rudbeckia, and sunflowers
              in place until spring cleanup. Those seedheads are winter food.
            </li>
            <li>
              <strong>Plant native seed-bearing species and tolerate some "weeds."</strong>{' '}
              Add goldenrod, native asters, liatris, echinacea, and native sunflowers. Consider
              reducing herbicide use on dandelions, which provide early-season seed resources.
            </li>
            <li>
              <strong>Protect milkweed through seed set.</strong>{' '}
              Milkweed supports monarch caterpillars and also provides soft down used in
              goldfinch nests. One planting decision can serve both species.
            </li>
            <li>
              <strong>Skip systemic insecticides on seed-bearing native plants.</strong>{' '}
              Neonicotinoids are taken up through plant roots and distributed into leaves,
              stems, pollen, and seeds — including the goldenrod and sunflower seeds
              goldfinches return to repeatedly across a feeding territory. University of
              Saskatchewan researchers found that white-crowned sparrows consuming small
              quantities of imidacloprid-treated seeds lost 25% of their body mass and
              showed impaired migratory orientation within three days. A goldfinch cycling
              through treated seed heads over multiple weeks receives the dose in
              fractions. See the{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticide Guide
              </button>
              {' '}for alternatives when pest pressure is severe.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">Milkweed in July: caterpillar food and nest fiber on the same plant</h2>
          <p>
            A female goldfinch builds her nest in late July using milkweed pod fibers — the same
            soft white strands she pulls from plants where monarch caterpillars are still feeding
            on the leaves. Nest construction and caterpillar feeding happen on the same milkweed
            stem, a few feet apart, in the same July week.
          </p>
          <p>
            Goldenrod blooms through September. Monarch adults drink the nectar and convert it
            into abdominal fat during the pre-diapause period before the Mexico crossing. The
            nectar flow ends in October as the flowers fade — and goldfinches move onto the same
            stalks to pull seeds through November and December. The plant runs both schedules
            in sequence.
          </p>
          <p>
            A purple coneflower head carries ray petals through August and feeds monarch adults
            seeking nectar. By October those heads have hardened into brown ridged seed cones,
            and goldfinches cling to the dried stalks extracting seeds through January.
          </p>
          <div className="connections">
            <h3>Species and plants connected to the American Goldfinch</h3>
            <ul>
              <li>
                <button className="link-button" onClick={() => onNavigate('monarch-life')}>
                  Monarch Butterfly
                </button>{' '}
                — uses milkweed for caterpillar food and goldenrod for pre-migration nectar, the same plants goldfinches use for nest fiber and winter seeds
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('canada-goldenrod')}>
                  Canada Goldenrod
                </button>{' '}
                — monarchs drink goldenrod nectar in September; goldfinches eat goldenrod seeds on the same stalks from October through December
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('purple-coneflower')}>
                  Purple Coneflower
                </button>{' '}
                — monarch nectar source in July and August; goldfinch seed source from October through January on the same dried heads
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('native-bees')}>
                  Native Bees
                </button>{' '}
                — share goldenrod and coneflower foraging with goldfinches during peak summer and fall bloom
              </li>
            </ul>
          </div>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to support goldfinches?</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a plant
            </button>
            {' '}for seed-rich native species by region,{' '}
            <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>
              plant milkweed
            </button>
            {' '}for shared monarch and goldfinch habitat,{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticide Guide
            </button>
            {' '}to check which products are safe around seed plants, and{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>
            {' '}for why standing seedheads matter through winter.
          </p>
        </div>
      </div>
    </>
  )
}
