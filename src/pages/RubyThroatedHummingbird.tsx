import type { Page } from '../App'

interface RubyThroatedHummingbirdProps {
  onNavigate: (page: Page) => void
}

// hb-001: Only breeding hummingbird in eastern NA ΓÇö co-evolved native pollinator
// hb-002: 34ΓÇô36 million (2021); 17% decline ΓÇö warning signal not yet crisis
// hb-003: Gulf of Mexico 800km nonstop crossing ΓÇö fat reserves are the fuel
// hb-004: 80 wingbeats/sec; 1,260 bpm; 10x oxygen ΓÇö continuous food supply is non-negotiable
// hb-005: Nectar + insects both required ΓÇö pesticide-free yard provides both
// hb-006: Climate mismatch ΓÇö staggered bloom times buffer phenological risk
// hb-007: Spider silk nest; females up to 9 years; sex-biased survival
// hb-008: Trumpet honeysuckle, cardinal flower, bee balm ΓÇö starter palette
// hb-009: Feeder hygiene non-negotiable ΓÇö change every 2ΓÇô3 days or skip feeders
// hb-010: Hummingbirds + monarchs share the same native wildflower meadow

export default function RubyThroatedHummingbird({ onNavigate }: RubyThroatedHummingbirdProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Archilochus_colubris_-flying_-male-8.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Male Ruby-throated Hummingbird hovering at a red native tubular flower, iridescent ruby throat gorget blazing in sunlight"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: jeffreyw · <a href="https://commons.wikimedia.org/wiki/File:Archilochus_colubris_-flying_-male-8.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a> via Wikimedia Commons */}
          Photo: jeffreyw&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Archilochus_colubris_-flying_-male-8.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Ruby-Throated Hummingbird</h1>
        <p className="hero__lead">
          The ruby-throated hummingbird is the only hummingbird that breeds in eastern
          North America ΓÇö a single species covering the entire eastern half of the continent.
          It weighs three grams. Its heart beats 1,260 times per minute at rest. It crosses
          the Gulf of Mexico ΓÇö 800 kilometers of open water ΓÇö in a single nonstop flight.
          When one appears at your cardinal flower, that is not a casual visit. That is an
          animal running at the absolute edge of what biology can do, stopping because
          your yard has what it needs.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">The most extreme metabolism on the continent</h2>
          <p>
            Ruby-throated hummingbirds (<em>Archilochus colubris</em>) beat their wings
            eighty times per second during forward flight ΓÇö fast enough that the human eye
            registers only a blur. Their resting heart rate exceeds 1,260 beats per minute.
            During periods of intense flight, their oxygen consumption is roughly ten times
            that of a trained human athlete at peak effort. To fuel this, they must consume
            half their body weight in nectar and insects every single day.
          </p>
          <p>
            That metabolic demand is not a curiosity. It is the core fact that determines
            everything about what hummingbirds need from a landscape. A yard that provides
            a single feeder or a single patch of flowers is not providing habitat ΓÇö it is
            offering one gas station on a highway with no other stops. What a hummingbird
            requires is a continuous food supply from late April, when they arrive from
            migration, through late September, when the last individuals depart. Gaps in
            that supply ΓÇö a week with nothing blooming, a yard where insects have been
            eliminated by pesticides ΓÇö are not gaps in convenience. They are physiological
            emergencies.
          </p>
          <p>
            Hummingbirds also require insects. Nectar provides carbohydrates for flight;
            insects ΓÇö gnats, aphids, small spiders ΓÇö provide the protein that nestlings
            cannot survive without. A feeder with sugar water addresses only half of this
            equation. A pesticide-free yard with living insect communities addresses both.
            The practical implication is direct: a yard treated with systemic insecticides
            may attract hummingbirds to flowers and still fail to produce fledglings,
            because the protein side of the food web is gone.
          </p>
          <p>
            In fall, before the Gulf crossing, individual hummingbirds double their body
            fat over a period of roughly ten days. A bird weighing three grams becomes a
            bird weighing six grams, almost entirely in stored fat. That fat is the fuel
            for 800 kilometers of open water. The late-blooming native flowers in your
            yard ΓÇö goldenrod, native asters, cardinal flower ΓÇö are not autumn decoration.
            They are the fuel depot for that crossing.
          </p>
        </section>

        <section aria-labelledby="biology2-heading">
          <h2 id="biology2-heading">A life history built around improbability</h2>
          <p>
            Female ruby-throated hummingbirds build their nests alone ΓÇö a cup roughly
            the size of a large thimble, constructed from plant down and bound together
            with spider silk. The spider silk is structural: it allows the nest to stretch
            as the nestlings grow, accommodating two chicks that, at hatching, weigh less
            than a paperclip. The finished nest is camouflaged with lichen scales and
            placed on a downward-sloping branch, typically four to twenty feet above the
            ground, and almost always invisible from below.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/Ruby_Throated_Hummingbird.jpg"
                  alt="Ruby-throated Hummingbird hovering — wings beating 53 times per second, capable of flight in any direction including backwards"
                  loading="lazy"
                />
                <figcaption>
                  The ruby-throat's bill and the native trumpet vine's flower tube co-evolved over millions of years — the bill length matches the tube depth exactly, the flower produces nectar in exchange for pollen transport. Substitute a red plastic feeder for native flowers and the bird survives, but the ecological relationship does not.
                  <span className="photo-credit"> Photo: Len Benzi · <a href="https://commons.wikimedia.org/wiki/File:Ruby_Throated_Hummingbird.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            Females incubate two eggs for fourteen to sixteen days and raise the young
            alone for another two to three weeks. The male&apos;s involvement in nesting
            ends at mating. This asymmetry carries a consequence in lifespan: males in
            the wild rarely survive past five years; females live up to nine. The
            difference is likely explained by the male&apos;s higher predation risk during
            the territorial display flights that define his breeding season.
          </p>
          <p>
            Hummingbirds and the native tubular flowers they pollinate did not arrive at
            their current relationship independently. They co-evolved over millions of
            years ΓÇö the flower&apos;s tube depth, color (red and orange, wavelengths bees
            cannot see well), and nectar production calibrated to the hummingbird&apos;s
            bill and tongue. When you plant trumpet honeysuckle or cardinal flower, you
            are not introducing a hummingbird to a flower. You are restoring a
            relationship that was here before most of what surrounds it.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">The 17 percent signal</h2>
          <p>
            Ruby-throated hummingbirds are not endangered. Their current population
            is estimated at 34 to 36 million individuals ΓÇö a number large enough to feel
            stable. But the most recent Partners in Flight census recorded a 17 percent
            decline from earlier counts. That number is a warning signal, not a crisis ΓÇö
            but the direction is wrong, and the causes are understood.
          </p>
          <p>
            The primary drivers of decline are habitat loss along migration routes,
            reduction of native flower diversity in the breeding range, and climate
            mismatch. Hummingbirds time their spring migration partly by day length,
            which does not change with climate. Native flowers time their bloom by
            accumulated warmth, which does change. In years with early springs, flowers
            that hummingbirds depend on for arrival fuel may bloom and fade before
            the birds arrive. In cold springs, birds arrive to find nothing. The buffer
            against this mismatch is a diverse native planting with staggered bloom
            times ΓÇö early-spring species like columbine and wild ginger, summer-peak
            species like bee balm and cardinal flower, and fall species like native
            asters and goldenrod.
          </p>
          <p>
            The 17 percent decline is also a data point in a longer trend. Three billion
            birds have been lost from North American populations since 1970 ΓÇö a 29 percent
            reduction across all species. The ruby-throated hummingbird is not exempt
            from the forces driving that loss. It is simply large enough in population
            that the loss has not yet reached the threshold that triggers endangered
            listing. &quot;Not endangered&quot; does not mean &quot;fine.&quot;
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How to support hummingbirds in your yard</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Asclepias_tuberosa_2.jpg" alt="Native butterfly weed with tubular orange flowers" loading="lazy" />
            <figcaption>
              Butterfly weed and other native tubular flowers provide nectar that hummingbirds return to reliably — not just once in passing. A planted patch that re-blooms over a 6-week window keeps them territorialized, which means spider silk and plant down collected nearby for nest-building.
              <span className="photo-credit"> Photo: Tortie tude&nbsp;·&nbsp;<a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en" target="_blank" rel="noopener noreferrer">CC0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant native tubular flowers with staggered bloom times.</strong>{' '}
              The three most effective species for the eastern US are trumpet honeysuckle
              (<em>Lonicera sempervirens</em>), cardinal flower (<em>Lobelia cardinalis</em>),
              and bee balm (<em>Monarda didyma</em>). Trumpet honeysuckle is a vine trained
              on a trellis ΓÇö not invasive; the invasive one is Japanese honeysuckle.
              Cardinal flower grows in moist areas and blooms in late summer, exactly when
              migration fat-loading begins. Bee balm blooms in July when cardinal flower is
              still coming. Together they cover the mid-summer gap. Add columbine
              (<em>Aquilegia canadensis</em>) for early spring arrival fuel.
            </li>
            <li>
              <strong>Stop pesticide use in the area around nesting habitat.</strong>{' '}
              Hummingbird nestlings are fed insects ΓÇö gnats, aphids, spiders ΓÇö for the first
              three weeks of life. Systemic insecticides persist in plant tissue and soil
              and reduce the insect populations nestlings require. A yard with flowers but
              no insects may attract breeding hummingbirds and still fail to fledge young.
              The flowers matter. The insect community they support matters more.
            </li>
            <li>
              <strong>If you use a feeder, clean it every two to three days in summer.</strong>{' '}
              Sugar water in heat ferments and grows mold within days. Moldy nectar causes
              a fungal infection called &quot;black tongue&quot; that is fatal to hummingbirds.
              Use a 4:1 water-to-white-sugar ratio ΓÇö no honey, no red dye, no additives.
              Clean with hot water and a bottle brush; no soap residue. If you cannot
              commit to this schedule in summer, skip the feeder and plant cardinal flower
              instead. Native flowers do not require cleaning.
            </li>
            <li>
              <strong>Leave late-blooming native plants standing in fall.</strong>{' '}
              Goldenrod, native asters, and ironweed bloom when departing hummingbirds
              are doubling their body weight before the Gulf crossing. Cutting these
              plants back in August removes the fuel source at the moment of highest
              demand. Leave them standing through at least mid-October.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The connection to monarchs</h2>
          <p>
            Ruby-throated hummingbirds and Monarch Butterflies share the same habitat:
            native wildflower meadows, pesticide-free soil, and a landscape with enough
            structural diversity to support both insects and nesting birds. A yard
            managing for monarchs ΓÇö native milkweed, nectar plants, no systemic
            insecticides ΓÇö is a yard that supports hummingbirds.
          </p>
          <p>
            The overlap is not incidental. Both species co-evolved in open native plant
            communities. Both are harmed by the same changes: turf grass replacing open
            habitat, native plants replaced by ornamentals, and insecticides collapsing
            the insect food web. The actions that restore one restore the other. Cardinal
            flower, planted for hummingbirds, blooms red in August ΓÇö the same weeks that
            fall-migration monarchs are moving south on the same flyway. The plant does
            not know which species it is fueling. Neither needs to decide.
          </p>
          <p>
            Hummingbirds are also a useful entry point for people who are not yet reached
            by monarch conservation. The response to a hummingbird at a flower is
            immediate and visceral in a way that a butterfly egg on a milkweed leaf is
            not. If someone plants cardinal flower for hummingbirds and stops using
            pesticides to protect the insects hummingbirds need, the conditions for
            monarchs follow. These are not separate causes. They are the same native plant
            community, seen from two different angles.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to take the next step?</strong>{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('choose-a-plant')}
            >
              Choose a native plant
            </button>
            {' '}ΓÇö find trumpet honeysuckle, cardinal flower, and bee balm for your region.
            Remove the insecticides that eliminate the insect food chain with the{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('pesticide-guide')}
            >
              Pesticides &amp; Your Habitat guide
            </button>
            . Or{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('plant-milkweed')}
            >
              plant milkweed
            </button>
            {' '}to build the shared native wildflower habitat that monarchs and hummingbirds
            both require.
          </p>
        </div>
      </div>
    </>
  )
}
