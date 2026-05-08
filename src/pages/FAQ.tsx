import { useState } from 'react'
import type { Page } from '../App'
import { trackEvent } from '../lib/analytics'

interface FAQProps {
  onNavigate: (page: Page) => void
}

interface FAQItem {
  id: string
  q: string
  a: React.ReactNode
}

interface FAQCategory {
  id: string
  label: string
  items: FAQItem[]
}

const categories: FAQCategory[] = [
  {
    id: 'caterpillar-care',
    label: 'Caterpillar Care',
    items: [
      {
        id: 'disappeared',
        q: 'I had caterpillars yesterday. Now they are gone. What happened?',
        a: (
          <>
            <p>
              Two things account for almost every "disappeared" report: <strong>wandering to pupate</strong> or <strong>predation</strong>.
            </p>
            <p>
              When a Monarch caterpillar is ready to form a chrysalis, it leaves the milkweed and walks. Far.
              A late-stage (5th instar) caterpillar will travel 10–30 feet from the host plant
              looking for the right surface. Check fence posts, siding, the underside of deck boards,
              lawn furniture, garden stakes, and the undersides of leaves on nearby shrubs.
              Look high — chrysalises are often 6–8 feet off the ground.
            </p>
            <p>
              If you find nothing, predation is the most likely explanation.
              Paper wasps, birds, squirrels, ground beetles, and tachinid flies all take caterpillars.
              On a good summer day in a healthy yard, roughly 1 in 10 Monarch eggs survives to become a butterfly.
              That is not failure — it is the natural rate. Predators are part of the system.
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>What to do:</strong> Search a 30-foot radius carefully before concluding anything went wrong.
              Chrysalises are jade green with a gold rim and about the size of your thumb.
            </p>
          </>
        ),
      },
      {
        id: 'instars',
        q: 'How do I know which instar (stage) my caterpillar is in?',
        a: (
          <>
            <p>Monarchs go through five instars — larval stages separated by molts. Size is the best guide:</p>
            <ul>
              <li><strong>1st instar:</strong> 2–6 mm. Pale yellow-green, barely visible. Eats the egg shell first, then leaf surface.</li>
              <li><strong>2nd instar:</strong> 6–12 mm. Yellow, white, and black bands begin to appear.</li>
              <li><strong>3rd instar:</strong> 12–25 mm. Distinct yellow, white, and black banding. Tentacles more visible.</li>
              <li><strong>4th instar:</strong> 25–45 mm. Bolder colors, eats much more. This is when milkweed disappears fast.</li>
              <li><strong>5th instar:</strong> 45–70 mm. Full size. Eats constantly for 7–10 days, then leaves the plant to pupate.</li>
            </ul>
            <p style={{ marginBottom: 0 }}>
              At 5th instar, a caterpillar can eat an entire milkweed leaf in under two hours.
              If you have more caterpillars than milkweed, the 5th instars will self-disperse.
              They do not need milkweed to pupate — only to reach full size.
            </p>
          </>
        ),
      },
      {
        id: 'not-moving',
        q: 'My caterpillar has stopped moving. Is it dying?',
        a: (
          <>
            <p>
              Usually not. Monarch caterpillars stop and become still for several hours when they are about to molt
              (shed their skin). This happens four times during development. You may see the old skin just behind or below them.
            </p>
            <p>
              A caterpillar that is truly dying will turn dark, become limp, or leak fluid.
              Healthy caterpillars are firm and turgid — they resist gentle pressure.
            </p>
            <p style={{ marginBottom: 0 }}>
              Also: 5th instars stop eating entirely when they are ready to pupate and
              may hang motionless in a "J" shape (head down) for 12–24 hours before forming a chrysalis.
              The J-hang is normal. Leave them completely alone at this stage — any disturbance can cause the chrysalis to form incorrectly.
            </p>
          </>
        ),
      },
      {
        id: 'too-many-cats',
        q: 'I have more caterpillars than milkweed. What do I do?',
        a: (
          <>
            <p>
              This is the right problem to have. Here is how to manage it:
            </p>
            <ul>
              <li>
                <strong>Source more milkweed fast.</strong> Native plant nurseries, Monarch Watch's milkweed market,
                and local native plant societies often have plants mid-season. Even a few stems help.
              </li>
              <li>
                <strong>Let the 5th instars go.</strong> Large caterpillars ready to pupate will leave the plant on their own.
                They only need to finish their last day or two of eating; after that, milkweed is no longer required.
              </li>
              <li>
                <strong>Do not move caterpillars between plants unless the plant is completely stripped.</strong>{' '}
                Caterpillars have territorial feeding behavior and do not need to be managed closely.
              </li>
            </ul>
            <p style={{ marginBottom: 0 }}>
              For next year: one large A. syriaca (Common Milkweed) patch supports 40+ caterpillars.
              Three species planted together — Common, Swamp, and Butterfly Weed — extend the available
              foliage window from June through September.
            </p>
          </>
        ),
      },
      {
        id: 'indoor-rearing',
        q: 'Does raising Monarchs indoors help them?',
        a: (
          <>
            <p>
              This is contested, and the answer has shifted in recent years.
            </p>
            <p>
              Older advice encouraged indoor rearing as a way to protect eggs and caterpillars from predation.
              More recent research raises a concern: Monarchs reared indoors under artificial light
              may not develop normal magnetic and light-based navigation cues used during migration.
              Some studies suggest indoor-reared butterflies have reduced migration success.
              The research is not fully settled, but the trend among scientists is cautionary.
            </p>
            <p>
              The most effective thing you can do for Monarchs does not involve collecting anything:
              <strong> plant more milkweed and late-season nectar plants.</strong>{' '}
              A yard with strong habitat supports far more reproductive success than indoor rearing of a handful of caterpillars.
            </p>
            <p style={{ marginBottom: 0 }}>
              If you enjoy observing the life cycle up close, watching chrysalises and caterpillars outdoors on established plants
              gives you that experience without removing individuals from the population.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 'milkweed',
    label: 'Milkweed',
    items: [
      {
        id: 'which-milkweed',
        q: 'Which milkweed species is right for my region?',
        a: (
          <>
            <p>Match the species to your climate and soil:</p>
            <ul>
              <li><strong>East &amp; Midwest (zones 3–9):</strong> <em>Asclepias syriaca</em> (Common Milkweed) — highest caterpillar-carrying capacity, spreads by rhizome. <em>Asclepias tuberosa</em> (Butterfly Weed) — drought-tolerant, orange flowers, tap-rooted so it stays put.</li>
              <li><strong>Wet spots / rain gardens:</strong> <em>Asclepias incarnata</em> (Swamp Milkweed) — tolerates standing water, strong nectar source.</li>
              <li><strong>Western US (zones 3–9):</strong> <em>Asclepias speciosa</em> (Showy Milkweed) — the primary species along western migration routes.</li>
              <li><strong>Texas &amp; Southwest:</strong> <em>Asclepias asperula</em> (Antelope Horn) — critical for the spring Texas crossing. Extremely drought-tolerant.</li>
              <li><strong>California coast:</strong> <em>Asclepias californica</em> (California Milkweed) — supports the Western population overwintering on the coast.</li>
              <li><strong>Shade &amp; late season (East/Midwest):</strong> <em>Asclepias verticillata</em> (Whorled Milkweed) — grass-like, tolerates part shade, blooms into September.</li>
            </ul>
            <p style={{ marginBottom: 0 }}>
              When buying from a nursery, ask whether plants were grown from locally sourced seed.
              Local ecotype plants establish better and are more adapted to regional timing.
            </p>
          </>
        ),
      },
      {
        id: 'tropical-milkweed',
        q: 'Is tropical milkweed bad? Should I avoid it?',
        a: (
          <>
            <p>
              The answer depends on where you live.
            </p>
            <div className="callout callout--orange" style={{ margin: '1rem 0' }}>
              <p style={{ marginBottom: 0 }}>
                <strong>In Florida, Texas, and Gulf Coast states</strong> where winters are mild:
                Tropical milkweed (<em>Asclepias curassavica</em>) stays green year-round.
                This disrupts migration timing — Monarchs may skip migration and stay, increasing OE parasite loads.
                In these regions, <strong>cut it back to the ground in November</strong> to simulate the natural winter die-back,
                or replace it with native milkweed species.
              </p>
            </div>
            <div className="callout callout--green" style={{ margin: '1rem 0' }}>
              <p style={{ marginBottom: 0 }}>
                <strong>In northern and Midwest states</strong> where frost kills it every fall:
                the concerns are minimal. Frost resets it the same way it would reset native milkweed.
                If tropical milkweed is all that is available, plant it — it still supports Monarch breeding.
                Replace with natives when you can find them.
              </p>
            </div>
            <p style={{ marginBottom: 0 }}>
              The internet debate over tropical milkweed often omits this regional context.
              The rule is: if your milkweed doesn't die in winter, cut it back in fall.
            </p>
          </>
        ),
      },
      {
        id: 'hardware-store',
        q: 'Is the milkweed at my hardware store or garden center safe to plant?',
        a: (
          <>
            <p>
              Not always. Many plants sold at large garden centers are pre-treated with <strong>neonicotinoid insecticides</strong> —
              systemic pesticides that persist in plant tissue and can poison caterpillars that feed on treated leaves.
              Common neonicotinoids include imidacloprid, clothianidin, and thiamethoxam.
            </p>
            <p>
              <strong>Before buying, ask the nursery directly:</strong>{' '}
              "Were these plants treated with systemic insecticides or neonicotinoids?"
              If the answer is yes, or if they don't know, don't buy that plant for Monarch gardening.
            </p>
            <p style={{ marginBottom: 0 }}>
              Best sources for untreated native milkweed: local native plant nurseries,
              native plant society sales, Monarch Watch's Milkweed Market (ships spring through summer),
              and local seed libraries.
              Ask specifically about neonicotinoid-free sourcing at every nursery — even "natural" or "organic" labeling
              doesn't automatically mean neonicotinoid-free.
            </p>
          </>
        ),
      },
      {
        id: 'milkweed-from-seed',
        q: 'How do I grow milkweed from seed?',
        a: (
          <>
            <p>
              Most native milkweed seeds require <strong>cold stratification</strong> — a period of cold and moisture
              that breaks dormancy. Without it, germination rates are very low.
            </p>
            <p>Two methods:</p>
            <ul>
              <li>
                <strong>Fall direct sow:</strong> Scatter seeds in prepared ground in October or November.
                Winter provides natural stratification. Seeds germinate the following spring.
                Simplest method, best germination rates.
              </li>
              <li>
                <strong>Indoor cold stratification:</strong> Mix seeds with barely moist potting mix in a sealed bag.
                Refrigerate for 30 days (not freezer). Sow indoors 6–8 weeks before last frost.
                Transplant after danger of frost passes.
              </li>
            </ul>
            <p style={{ marginBottom: 0 }}>
              <em>A. tuberosa</em> (Butterfly Weed) is tap-rooted — transplant carefully in spring and plant once;
              it does not like to be moved after establishment.
              <em>A. syriaca</em> (Common Milkweed) tolerates transplanting and spreads reliably once established.
              Expect first-year plants to be small. Year 2 is when milkweed really performs.
            </p>
          </>
        ),
      },
      {
        id: 'eaten-to-ground',
        q: 'Caterpillars ate my milkweed to the ground. Will it come back?',
        a: (
          <>
            <p>
              Yes, for all native milkweed species. Native milkweed is a perennial — it regrows from roots.
              A plant stripped to the soil by caterpillars will send up new shoots within 1–2 weeks in summer
              if conditions are right (water, heat, established root system).
            </p>
            <p>
              Complete defoliation actually signals a successful planting — your milkweed is doing exactly what it is supposed to do.
            </p>
            <p style={{ marginBottom: 0 }}>
              To avoid total defoliation in high-caterpillar years: plant multiple species with different growth habits.
              A. syriaca and A. incarnata together provide more foliage volume. A. verticillata comes into its own
              late in the season when the others may be depleted.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 'oe-parasite',
    label: 'OE Parasite',
    items: [
      {
        id: 'what-is-oe',
        q: 'What is OE, and should I be worried about it?',
        a: (
          <>
            <p>
              OE (<em>Ophryocystis elektroscirrha</em>) is a protozoan parasite that infects Monarchs.
              Infected butterflies spread microscopic spores onto milkweed leaves as they move around;
              caterpillars then ingest the spores when eating.
              Heavily infected butterflies eclose (emerge from the chrysalis) with crumpled wings
              or are too weak to fly.
            </p>
            <p>
              <strong>Whether to worry depends on where you live.</strong>{' '}
              OE prevalence is highly regional:
            </p>
            <ul>
              <li>
                <strong>Northern US / Northeast / Midwest:</strong> OE rates are low — typically under 5% in wild populations.
                Many gardeners in these regions raise Monarchs for years and never encounter it.
              </li>
              <li>
                <strong>Southern US / Florida / Gulf Coast:</strong> OE prevalence is significantly higher,
                especially in populations that have stopped migrating due to year-round tropical milkweed availability.
                Rates in non-migratory Florida populations can exceed 30%.
              </li>
            </ul>
            <p style={{ marginBottom: 0 }}>
              The Monarch Health citizen science project (monarchparasites.org) collects OE prevalence data by region —
              their database is the best available reference for what rates look like in your area.
            </p>
          </>
        ),
      },
      {
        id: 'bleach-eggs',
        q: 'Should I bleach Monarch eggs to prevent OE?',
        a: (
          <>
            <p>
              The answer depends on where you live and why you are asking.
            </p>
            <p>
              Egg bleaching — rinsing eggs in a dilute bleach solution to remove OE spores on the shell —
              is a lab technique that has spread to the general public through YouTube and TikTok.
              It works in controlled settings. But it is not universally necessary.
            </p>
            <div className="callout callout--orange" style={{ margin: '1rem 0' }}>
              <p style={{ marginBottom: 0 }}>
                <strong>In the Northeast and Midwest,</strong> where wild OE prevalence is very low,
                bleaching eggs is unnecessary for most gardeners.
                The risk of damaging the egg during handling likely exceeds the OE risk you are preventing.
              </p>
            </div>
            <div className="callout callout--green" style={{ margin: '1rem 0' }}>
              <p style={{ marginBottom: 0 }}>
                <strong>In Florida, Texas, and Gulf Coast regions</strong> with higher OE prevalence,
                bleaching eggs collected from the yard is a more defensible practice — especially if you
                see deformed eclosions or are breeding from butterflies in a non-migratory population.
              </p>
            </div>
            <p style={{ marginBottom: 0 }}>
              If you are in a low-OE region and want to do something useful: focus on habitat expansion.
              More milkweed, more nectar plants, no pesticides.
              That does more for long-term Monarch health than egg sterilization.
            </p>
          </>
        ),
      },
      {
        id: 'infected-butterfly',
        q: 'My butterfly looks deformed or infected. What do I do?',
        a: (
          <>
            <p>
              A butterfly that eclosed with crumpled, unextended wings has likely experienced a mechanical problem
              (was bumped during eclosure, formed in an inadequate space) or is severely OE-infected.
              Either way, it cannot fly and will not survive in the wild.
            </p>
            <p>
              <strong>Do not release a butterfly that cannot fly.</strong>{' '}
              An OE-infected butterfly that cannot fly will still drop spores if released.
            </p>
            <p>
              If you suspect OE in an adult, you can check by pressing a piece of clear tape to the butterfly's abdomen,
              then examining the tape under a microscope (40×+). OE spores are dark brown, football-shaped,
              visible at that magnification. Healthy butterflies have few or no spores.
            </p>
            <p style={{ marginBottom: 0 }}>
              For confirmed or suspected infected individuals: euthanize humanely by placing in the freezer for 30 minutes.
              Do not release. Check any milkweed the infected butterfly contacted for other caterpillars that may have
              been exposed.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 'garden-planning',
    label: 'Garden Planning',
    items: [
      {
        id: 'will-monarchs-come',
        q: 'Will Monarchs come to my yard if I plant milkweed?',
        a: (
          <>
            <p>
              Yes — if your yard is in or near a migration corridor and milkweed is present during the right window.
            </p>
            <p>
              Monarchs find milkweed using scent and vision. A sunny patch of milkweed in flower is detectable
              from a distance. Most gardeners in the eastern migration corridor (east of the Rockies) begin seeing
              Monarchs on newly planted milkweed within one to two seasons.
            </p>
            <p>
              Two things affect whether they come: <strong>milkweed timing</strong> and <strong>nectar availability</strong>.
              Monarchs need nectar plants as well as milkweed — a yard with only milkweed and no flowers
              is less attractive than one with milkweed plus late-blooming nectar plants.
              Goldenrod and native asters in September and October are especially critical for fueling southbound adults.
            </p>
            <p style={{ marginBottom: 0 }}>
              If you have milkweed and see no Monarchs in the first year, be patient. Population levels are still recovering
              from historic lows. Year 2 and 3 success rates are consistently higher as plants mature and your yard
              enters local migration memory.
            </p>
          </>
        ),
      },
      {
        id: 'when-arrive',
        q: 'When do Monarchs arrive in my area?',
        a: (
          <>
            <p>Arrival timing varies significantly by region. General ranges for the eastern population:</p>
            <ul>
              <li><strong>Texas &amp; Gulf Coast:</strong> Northbound adults arrive late February – April; southbound migration September – November.</li>
              <li><strong>Midwest (Iowa, Illinois, Indiana, Ohio):</strong> First adults late May – early June; caterpillars June – August; southbound migration mid-August – October.</li>
              <li><strong>Northeast (NY, New England):</strong> First adults late May – June; caterpillars through August; southbound migration late August – early October.</li>
              <li><strong>Great Plains:</strong> First adults May – June following the milkweed flush northward.</li>
            </ul>
            <p style={{ marginBottom: 0 }}>
              The most reliable real-time resource is <a href="https://journeynorth.org/monarchs" target="_blank" rel="noreferrer">Journey North</a>,
              which maps citizen-reported sightings as they move northward each spring and southward each fall.
              Check their maps in early spring to track the leading edge of migration toward your location.
            </p>
          </>
        ),
      },
      {
        id: 'fall-nectar',
        q: 'What should I plant to support fall migration?',
        a: (
          <>
            <p>
              Fall migration is a fueling problem. Monarchs heading to Mexico must double their fat reserves
              before the journey — nectar-rich flowers blooming in August through October are the fuel source.
              This is the most critical and most underserved window in most yards.
            </p>
            <p>The best performers, roughly in bloom sequence:</p>
            <ul>
              <li><strong>Liatris / Blazing Star</strong> (Jul–Sep): One of the highest-value monarch nectar plants. Spikes are magnets for migrating adults. Drought-tolerant, sandy soil.</li>
              <li><strong>Ironweed</strong> (<em>Vernonia</em>, Aug–Sep): Deep purple, very high nectar. Excellent for late summer.</li>
              <li><strong>Joe-Pye Weed</strong> (<em>Eutrochium</em>, Aug–Sep): Tall, mauve-pink, big nectar value. Tolerates moist soil.</li>
              <li><strong>Goldenrod</strong> (<em>Solidago</em>, Sep–Oct): The most important fall migration plant. Multiple native species extend bloom through October. Does not cause hay fever — that's ragweed.</li>
              <li><strong>Native asters</strong> (<em>Symphyotrichum</em>, Sep–Oct): Blooms through first frost. Confirmed Monarch nectar source. Easy to establish.</li>
            </ul>
            <p style={{ marginBottom: 0 }}>
              Plant at least goldenrod and one aster species. Together they provide dense nectar from September through October —
              the peak southbound migration window.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 'population',
    label: 'Population & Conservation',
    items: [
      {
        id: 'is-it-recovering',
        q: 'Is the Monarch population recovering?',
        a: (
          <>
            <p>
              The most recent overwintering count shows a meaningful increase — but not a recovery.
            </p>
            <p>
              The 2025–26 winter survey counted <strong>2.93 hectares</strong> of occupied forest in Mexico,
              up 64% from 1.79 hectares the prior year. That is genuinely encouraging.
              It is also still near the lowest levels ever recorded.
              The historic high was approximately 18 hectares in the 1990s.
              The threshold scientists consider the minimum for long-term population viability is around 6 hectares.
            </p>
            <p>
              Single-year increases are common and often driven by favorable weather, not structural habitat improvement.
              The trend over the past 30 years is still sharply downward, with high year-to-year volatility.
            </p>
            <p style={{ marginBottom: 0 }}>
              The honest answer: one good year. Not a recovery. The underlying drivers —
              milkweed loss, habitat fragmentation, climate disruption to migration timing —
              have not been reversed. What has changed is that habitat restoration is widespread enough
              that good weather years produce better outcomes than they did a decade ago.
              That is progress. It is not enough yet.
            </p>
          </>
        ),
      },
      {
        id: 'citizen-science',
        q: 'How do I get involved in Monarch citizen science?',
        a: (
          <>
            <p>
              Several programs actively need observations and participation. All are free:
            </p>
            <ul>
              <li>
                <strong><a href="https://www.inaturalist.org/taxa/48662-Danaus-plexippus" target="_blank" rel="noreferrer">iNaturalist</a></strong> —
                Log any Monarch sighting (adult, egg, caterpillar, chrysalis). Your observation becomes open research data.
                Takes 2 minutes per sighting.
              </li>
              <li>
                <strong><a href="https://journeynorth.org/monarchs" target="_blank" rel="noreferrer">Journey North</a></strong> —
                Report Monarch sightings in spring and fall. The collective data maps migration in real time each year.
              </li>
              <li>
                <strong><a href="https://monarchparasites.org" target="_blank" rel="noreferrer">Monarch Health</a></strong> —
                Sample wild Monarchs for OE using tape and submit your results. Builds the regional OE prevalence database.
              </li>
              <li>
                <strong><a href="https://www.monarchwatch.org/tagging/" target="_blank" rel="noreferrer">Monarch Watch Tagging</a></strong> —
                Apply tiny identification tags to migrating Monarchs in fall. Tags are recovered in Mexico and provide migration route data.
                Kit registration opens in July each year.
              </li>
              <li>
                <strong><a href="https://www.monarchjointventure.org/mjvprograms/science/monarch-larva-monitoring-project" target="_blank" rel="noreferrer">Monarch Larva Monitoring Project (MLMP)</a></strong> —
                Survey milkweed patches systematically for eggs and caterpillars on a weekly schedule.
                Longer commitment but high scientific value.
              </li>
            </ul>
            <p style={{ marginBottom: 0 }}>
              Start with iNaturalist. Every logged observation contributes — you do not need a yard
              or a formal program to participate.
            </p>
          </>
        ),
      },
    ],
  },
]

export default function FAQ(_props: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenItems(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
        trackEvent('faq_open', id)
      }
      return next
    })
  }

  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Frequently Asked Questions</div>
        <h1>Answers to the questions<br />Monarch gardeners ask most.</h1>
        <p className="hero__lead">
          Practical guidance on caterpillar care, milkweed selection, OE, garden planning,
          and the state of the population — with regional nuance where the answer differs by location.
        </p>
      </section>

      <div className="page">
        {categories.map(category => (
          <section key={category.id} className="faq-category" aria-labelledby={`faq-cat-${category.id}`}>
            <h2 id={`faq-cat-${category.id}`} className="faq-category__heading">
              {category.label}
            </h2>
            <div className="faq-list">
              {category.items.map(item => {
                const isOpen = openItems.has(item.id)
                return (
                  <div key={item.id} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
                    <button
                      className="faq-item__question"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      id={`faq-q-${item.id}`}
                    >
                      <span className="faq-item__question-text">{item.q}</span>
                      <span className="faq-item__chevron" aria-hidden="true">
                        {isOpen ? '▲' : '▼'}
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${item.id}`}
                      className="faq-item__answer"
                      role="region"
                      aria-labelledby={`faq-q-${item.id}`}
                      hidden={!isOpen}
                    >
                      <div className="faq-item__answer-inner">
                        {item.a}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        ))}

        <div className="callout callout--green" style={{ marginTop: '3rem' }}>
          <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>Still have a question?</h3>
          <p style={{ marginBottom: 0 }}>
            Use the feedback button to submit a question not covered here.
            The most common submissions will be added to this page.
          </p>
        </div>
      </div>
    </>
  )
}
