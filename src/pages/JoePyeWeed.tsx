import type { Page } from '../App'

interface JoePyeWeedProps {
  onNavigate: (page: Page) => void
}

export default function JoePyeWeed({ onNavigate }: JoePyeWeedProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Eutrochium_purpureum_kz01.jpg/960px-Eutrochium_purpureum_kz01.jpg"
          alt="Joe Pye weed in bloom — a tall native perennial with large dome-shaped clusters of mauve-pink flowers at the top of thick hollow stems, surrounded by whorled leaves"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Krzysztof Ziarnek (Kenraiz)&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Eutrochium_purpureum_kz01.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>The eupatorium borer moth lays her eggs on Joe Pye Weed stalks in late summer.<br />Her larvae are inside those stalks all winter.</h1>
        <p className="hero__lead">
          <em>Carmenta bassiformis</em> is a clearwing moth that mimics a yellowjacket in
          coloration and flight. In July and August, females lay eggs near the base of Joe Pye
          Weed (<em>Eutrochium purpureum</em>) stems. The larvae bore through the stem wall
          into the hollow core, feed on pith tissue, and overwinter as partially grown
          caterpillars inside those stalks. The stalk that looks dead in November has a
          living larva inside it.
        </p>
        <p className="hero__lead">
          This is also the plant where a migrating monarch refuels in August. The dome-shaped
          flower clusters open from late July through September — exactly the window when adult
          monarchs from the summer generation shift from reproduction toward fat accumulation
          for the fall flight to Michoacán. The same plant feeds the butterfly and shelters
          the moth larva, across a bloom window that bridges coneflower and goldenrod.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fueling-heading">
          <h2 id="fueling-heading">Late July through September — the migration fuel depot</h2>
          <p>
            Monarchs in the northern US and Canada begin the behavioral shift toward migration
            in late July or August. Adults from the summer generation stop seeking mates and
            spend longer periods feeding. Their abdomens fill with lipid reserves — fat
            stored as triglycerides — that will sustain a continuous flight of roughly
            2,500 miles to overwintering sites in the mountains of central Mexico.
          </p>
          <p>
            <em>Eutrochium purpureum</em> blooms from late July through September across most
            of its range, covering this pre-migration fueling window directly. Each dome-shaped
            flower cluster holds several hundred individual disc florets, each producing nectar.
            Eastern tiger swallowtails, great spangled fritillaries, silver-spotted skippers,
            and multiple bumblebee species work the flower clusters alongside the monarchs
            during this same period. Ruby-throated hummingbirds visit in late August as
            their own migration south begins.
          </p>
        </section>

        <section aria-labelledby="hollow-heading">
          <h2 id="hollow-heading">The hollow stalk, October through April</h2>
          <p>
            After the flowers drop, Joe Pye Weed's stalks stay standing. The inner chamber
            of each stalk is hollow — and that hollow space is overwintering habitat.
            Small carpenter bees (<em>Ceratina</em> spp.) and masked bees (<em>Hylaeus</em> spp.)
            overwinter as adults inside hollow plant stems. The inner diameter of a Joe Pye
            Weed stalk matches the body width of these small native bees, and the plant's
            preference for wet or shaded sites means it grows in areas where bee stem banks
            compete less with the drier-site plants.
          </p>
          <p>
            The eupatorium borer larva is also inside those stalks from October through April.
            If stalks are cut at ground level in fall — the standard autumn garden cleanup —
            the larva has nowhere to complete its development and does not survive. A standing
            stalk left until April is the only place this moth can finish its life cycle.
          </p>
        </section>

        <div className="callout callout--orange">
          <h3 style={{ marginTop: 0 }}>Milkweed in June, Joe Pye Weed in August, goldenrod in September</h3>
          <p>
            Most habitat gardens plant milkweed and goldenrod and leave August to chance.
            Common milkweed blooms June through July and is largely finished before monarchs
            begin their pre-migration feeding. Canada goldenrod peaks in September. Between
            those two anchors, from late July through August, Joe Pye Weed fills the
            nectar gap — the window when monarchs need the most food and most native perennials
            have stopped producing.
          </p>
          <p style={{ marginBottom: 0 }}>
            Three plants, three bloom windows, continuous coverage from June through October.
            A yard with all three is a functioning monarch station from egg-laying season
            through the tail end of fall migration.
          </p>
        </div>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant in groups, in the wet corner, and leave the stalks</h2>
          <ol className="step-list">
            <li>
              <strong>Plant 3–5 together, not a single specimen.</strong>{' '}
              A single Joe Pye Weed plant at the back of a border produces blooms, but pollinators
              moving across a yard stop at clusters. A group of three to five plants creates
              a destination that monarchs, tiger swallowtails, and bumblebees return to for
              multiple feeding bouts per day.
            </li>
            <li>
              <strong>Leave the stalks standing until April.</strong>{' '}
              Eupatorium borer larvae overwinter inside the hollow stem from October through April.
              Small cavity-nesting bees use the same hollow chambers through winter.
              Cutting stalks in October or November ends both life cycles. Cut in early April
              as new growth emerges from the base, and leave the cut stalks on the ground
              for a few weeks to let any emerged insects disperse.
            </li>
            <li>
              <strong>Use the wet corner, the shady edge, the low spot that stays damp.</strong>{' '}
              Joe Pye Weed grows naturally along stream banks and in moist woodland edges.
              It tolerates wet feet in spring and partial shade in summer — conditions where
              most sun-loving natives fail. The spots most homeowners consider unusable are
              exactly where this plant thrives.
            </li>
            <li>
              <strong>Buy straight species, not 'Baby Joe' or 'Little Joe'.</strong>{' '}
              Compact cultivars reach 2–3 feet and fit small gardens, but the eupatorium borer
              and the small bees that use hollow stems co-evolved with the full-height plant.
              The straight species grows 4–7 feet — tall enough to anchor the back of a
              bed and visible enough that monarchs spot it from the air during the migration.
            </li>
          </ol>
        </div>

        <section aria-labelledby="range-heading">
          <h2 id="range-heading">Range: zones 3–9, moist sites across eastern North America</h2>
          <p>
            <em>Eutrochium purpureum</em> grows naturally from Ontario and Quebec south to
            Florida and west to Oklahoma and Nebraska. It is native to moist woods, stream
            banks, and woodland edges throughout the eastern half of the continent.
            The related <em>E. maculatum</em> (spotted Joe Pye weed, with flat-topped rather
            than dome-shaped flower clusters) ranges further north and is native to wetter
            habitats; both species are available from regional native plant nurseries.
          </p>
          <p>
            Bloom time: late July through September in most locations. The window fills
            the gap between purple coneflower (June–August) and the goldenrod peak (September),
            providing eight weeks of continuous bloom when migrating monarchs and late-season
            bumblebees are actively feeding.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            Joe Pye Weed blooms in the window between coneflower and goldenrod — see how all
            three overlap in the{' '}
            <button className="link-button" onClick={() => onNavigate('plants-bloom-calendar')}>
              Bloom Calendar
            </button>
            , or find local sources for Joe Pye Weed, coneflower, and goldenrod in the{' '}
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
