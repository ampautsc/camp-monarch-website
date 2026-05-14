import type { Page } from '../App'

interface AmericanGoldfinchProps {
  onNavigate: (page: Page) => void
}

export default function AmericanGoldfinch({ onNavigate }: AmericanGoldfinchProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Carduelis_tristis_-Michigan%2C_USA_-male-8.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Male American Goldfinch in brilliant breeding plumage — canary yellow body, black cap and wings — perched on a native coneflower seed head"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Rodney Campbell · <a href="https://commons.wikimedia.org/wiki/File:Carduelis_tristis_-Michigan%2C_USA_-male-8.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a> via Wikimedia Commons */}
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
                  <span className="photo-credit"> Photo: Ken Thomas · <a href="https://commons.wikimedia.org/wiki/File:American_Goldfinch-27527-2.jpg" target="_blank" rel="noopener noreferrer">Public domain</a> via Wikimedia Commons</span>
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
          <h2 style={{ marginTop: 0 }}>Three actions that help goldfinches immediately</h2>
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
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The connection to monarchs</h2>
          <p>
            Goldfinches and monarchs overlap strongly in plant needs. Goldenrod and native asters
            fuel monarch migration with nectar, then feed goldfinches with seeds through fall and
            winter. Milkweed supports monarch breeding and contributes nesting material for
            goldfinches.
          </p>
          <p>
            This is the Camp Monarch pattern in practice: one native plant community supporting
            multiple species with different life cycles. When a yard shifts from turf to layered
            native habitat, it does not just look better. It functions better.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to support both species?</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a native plant
            </button>
            {' '}to build seed-rich habitat for goldfinches, or{' '}
            <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>
              plant milkweed
            </button>
            {' '}to create shared habitat for monarchs and goldfinches.
          </p>
        </div>
      </div>
    </>
  )
}
