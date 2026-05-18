import type { Page } from '../App'

interface CommonMilkweedProps {
  onNavigate: (page: Page) => void
}

export default function CommonMilkweed({ onNavigate }: CommonMilkweedProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg/960px-Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg"
          alt="Male monarch butterfly with wings fully open — the species whose larvae eat milkweed leaves exclusively, making Asclepias syriaca the plant that determines whether monarchs can reproduce in the eastern United States"
          className="species-hero-image"
          style={{ objectPosition: 'center 35%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Derek Ramsey&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Monarch caterpillars eat milkweed and nothing else.<br />Between 1999 and 2010, an estimated 850 million milkweed stems disappeared from Midwestern farm fields.</h1>
        <p className="hero__lead">
          Common milkweed (<em>Asclepias syriaca</em>) grew at every farm field edge across the
          Midwest for most of the twentieth century. It spread by rhizome and seeded into fence
          rows, roadsides, and lot edges without being planted. When herbicide-tolerant crop
          varieties made clean-field spraying possible in the late 1990s, the milkweed at those
          field edges went with everything else. The eastern monarch population fell from roughly
          900 million individuals in the mid-1990s to about 60 million today.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="plant-heading">
          <h2 id="plant-heading">Pink flower clusters, vanilla scent, white sap</h2>
          <p>
            <em>Asclepias syriaca</em> grows two to five feet tall with broad, opposite leaves
            and rounded clusters of small pink-to-lavender flowers at the stem tips and upper
            leaf axils. The flowers bloom from late June through August across most of the eastern
            United States. Each flower is structurally unusual: five petals reflex downward while
            five upward-curving hoods hold nectar. Insects must navigate this architecture, and
            many end up with pollen masses stuck to their legs — the plant&apos;s mechanism for
            ensuring cross-pollination.
          </p>
          <p>
            The flowers produce a heavy vanilla-and-honey scent strongest in the middle of the day.
            A single plant in bloom in mid-July can carry eight native bee species simultaneously —
            bumblebees, sweat bees, leaf-cutter bees, and the federally threatened rusty patched
            bumblebee (<em>Bombus affinis</em>) all visit. The stems contain a milky white latex
            that deters most insects but not monarch caterpillars, which sequester the latex&apos;s
            cardiac glycosides into their own bodies and become toxic to birds.
          </p>
          <p>
            Flowers give way to seed pods — warty green capsules two to four inches long — that
            ripen in September and split open to release hundreds of seeds on silk-like parachutes.
            American goldfinches pull the silky fibers from unripe pods for nest lining starting
            in August, and continue working the dry pods through October.
          </p>
        </section>

        <section aria-labelledby="larvae-heading">
          <h2 id="larvae-heading">One egg, one leaf, three hundred times</h2>
          <p>
            A female monarch in midsummer flies low across vegetation, touching her abdomen to
            leaf surfaces. She is testing for milkweed&apos;s chemical signature. When she finds
            Asclepias, she lays a single pale-green egg — the size of a pinhead — on the underside
            of a leaf, then moves on. Each female lays 300 to 500 eggs over her adult lifespan.
          </p>
          <p>
            The egg hatches in three to five days. The caterpillar eats the leaf it hatched on,
            then moves to the next leaf. It molts five times over fourteen days, growing from 2mm
            to 2 inches, each instar marked by progressively bolder yellow, white, and black
            banding. A single common milkweed plant can support 40 caterpillars to metamorphosis.
            A plant stripped bare will re-leaf within two to three weeks if well-established —
            the same plant can feed two or three caterpillar cohorts per season.
          </p>
          <p>
            No milkweed means no eggs. No eggs means no caterpillars. No caterpillars means no
            new generation of monarchs in that place for that season. When milkweed disappeared
            from the Midwest at the scale documented by Pleasants and Oberhauser (2013), the
            monarch population tracked the loss with near-identical timing.
          </p>
        </section>

        <section aria-labelledby="loss-heading">
          <h2 id="loss-heading">850 million stems, one decade, herbicide-tolerant corn and soy</h2>
          <p>
            Before herbicide-tolerant crop varieties entered wide use, milkweed grew at the edges
            of soybean and corn fields across Iowa, Illinois, Indiana, and Missouri. Farmers tilled
            it back from planted rows for generations, but the field edges and interrow areas always
            had it. Agricultural surveys counted milkweed stems by the millions in crop surveys from
            the 1990s.
          </p>
          <p>
            Roundup Ready soybeans (introduced 1996) and Roundup Ready corn (introduced 1998)
            changed this. Glyphosate, previously restricted to field edges because it killed crops,
            could now be sprayed broadly across planted fields. Within a decade, milkweed had been
            essentially eliminated from the interrow areas of major crop states. Pleasants and
            Oberhauser&apos;s 2013 paper in <em>Insect Conservation and Diversity</em>{' '}
            estimated 850 million milkweed stems lost from the Midwest between 1999 and 2010.
            <sup><a href="https://doi.org/10.1111/j.1752-4598.2012.00196.x" target="_blank" rel="noreferrer" className="cite">[1]</a></sup>
          </p>
          <p>
            The eastern monarch overwintering population at the Mexican sanctuaries fell from
            approximately 1 billion individuals in the 1996–1997 season to 33 million in the
            2013–2014 season. The two trend lines — milkweed stems and monarch numbers — dropped
            in the same decade.
          </p>
          <div className="callout callout--orange">
            <p style={{ marginBottom: 0 }}>
              The milkweed that grew in farm fields was not planted. It grew there because it had
              always grown there, seeding in from adjacent natural areas that existed before the
              farm. Once eliminated from actively managed fields, it does not return on its own.
              Getting it back requires deliberate planting — in yards, roadsides, and restoration
              areas where the seed can reach stable ground.
            </p>
          </div>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Full sun, room to spread, and leave the pods through September</h2>
          <ol className="step-list">
            <li>
              <strong>Plant plugs in spring, in full sun.</strong>{' '}
              Common milkweed needs at least six hours of direct sun per day. It tolerates poor,
              dry, and clay soils — it grew in farm field edges without amendment. Place it where
              spread is acceptable: along a back fence, in a corner, or in a dedicated pollinator
              patch. One plant takes two seasons to establish fully; by year three it spreads by
              rhizome and needs no further care.
            </li>
            <li>
              <strong>Plant at least three plugs together.</strong>{' '}
              A single plant can support 40 caterpillars, but three plants in proximity form a
              patch that females actively seek out. Research on monarch habitat found clustered
              milkweed is visited more frequently than isolated single plants. Source from a local
              native plant nursery to match regional ecotypes.
            </li>
            <li>
              <strong>Leave flowers and pods intact through September.</strong>{' '}
              Late-season flower clusters are nectar sources for migrating adults passing through
              in September. The seed pods feed American goldfinches from August onward. Cut to six
              inches in late October or early November — after caterpillar season ends and after
              seeds have dispersed.
            </li>
            <li>
              <strong>Mark the location before winter.</strong>{' '}
              Common milkweed emerges late — mid-May to June in most of the eastern US, well after
              other perennials have leafed out. The emerging stems are easy to mow or step on. Mark
              the patch with a visible stake in fall so you know where it will return in spring.
            </li>
          </ol>
        </div>

        <section aria-labelledby="range-heading">
          <h2 id="range-heading">Range: zones 3–9, eastern and central North America</h2>
          <p>
            <em>Asclepias syriaca</em> grows naturally across the eastern United States from Maine
            to the Carolinas and west through the Great Plains, up into southern Canada. USDA
            hardiness zones 3 through 9. It is one of the most geographically widespread native
            perennials in North America east of the Rocky Mountains.
          </p>
          <p>
            West of the Mississippi, swamp milkweed (<em>Asclepias incarnata</em>) and showy
            milkweed (<em>Asclepias speciosa</em>) extend the Asclepias range into wetter and
            drier habitats. The{' '}
            <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>
              Plant Milkweed
            </button>{' '}
            page has the full regional species guide with zone coverage and sourcing recommendations.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            Common milkweed is the one plant in the eastern US whose presence in a yard has a
            documented, measurable connection to whether the monarch migration can continue in
            that corridor. See when monarchs are moving through your area in the{' '}
            <button className="link-button" onClick={() => onNavigate('the-migration')}>
              Migration Guide
            </button>
            , find the right milkweed species for your region on the{' '}
            <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>
              Plant Milkweed
            </button>
            {' '}page, and track your sightings at{' '}
            <button className="link-button" onClick={() => onNavigate('log-a-sighting')}>
              Log a Sighting
            </button>
            .
          </p>
        </div>

        <section className="cite-list" aria-label="Sources">
          <p>[1] Pleasants JM, Oberhauser KS. Milkweed loss in agricultural fields because of herbicide use: effect on the monarch butterfly population. <a href="https://doi.org/10.1111/j.1752-4598.2012.00196.x" target="_blank" rel="noreferrer">Insect Conservation and Diversity 6(2):135–144.</a> 2013.</p>
        </section>
      </div>
    </>
  )
}
