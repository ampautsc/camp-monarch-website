import type { Page } from '../App'

interface TheFirstYearProps {
  onNavigate: (page: Page) => void
}

// bta-008: art bridges knowing to feeling; feeling must precede acting
// bta-002: witnessing without acting creates a gap — name it and offer fuel
// bta-004: give bystanders a visible path, not more motivation
// lesson-234571eb: answer the real questions people face this week

const months: {
  period: string
  heading: string
  color: string
  paragraphs: string[]
  observation: string
}[] = [
  {
    period: 'March – April',
    heading: 'You plant the milkweed.',
    color: 'var(--monarch-green)',
    paragraphs: [
      'You ordered plugs in February — native Common Milkweed or Butterfly Weed, depending on your region — and they arrive in late March looking like sticks with roots. You plant them in a sunny spot, 18 inches apart, in the loosest soil you can manage. Then you wait.',
      'The first two weeks nothing happens. This is normal. Milkweed is slow to establish. The roots are doing the work you can\'t see. Resist the urge to dig them up to check. A planted milkweed has never looked more like a failed experiment than in April.',
      'By early May, gray-green lances of leaf begin to push up from the soil. They are distinctive once you know them — thick and upright, with a slight dusty texture, nothing like the ornamentals around them. You will begin noticing wild milkweed everywhere: at roadsides, at field edges, in vacant lots. You have always walked past it. Now it registers.',
    ],
    observation:
      'What you are watching for: the first shoots above soil, the first true leaves opening. Note the date. You will want this for year two.',
  },
  {
    period: 'May – June',
    heading: 'The first monarchs arrive.',
    color: 'var(--monarch-orange)',
    paragraphs: [
      'The spring migration moves north from Texas through the Central Flyway, following the milkweed emergence. The butterflies arrive in your latitude roughly when the milkweed reaches 6 to 8 inches. On the right morning — warm, calm, between 10 and 2 — you may see a monarch pass through your yard before the plants are tall enough to interest her.',
      'She is looking for milkweed. If yours is too small to register yet, she continues. This is not failure. The monarch crossing your yard in late May was born 3,000 miles away. She is the granddaughter of the butterfly that wintered in Mexico. She is navigating with the sun and something we still do not fully understand. She is looking for exactly what you planted.',
      'By early June the milkweed is knee-high and blooming in bud. Common Milkweed in flower smells like vanilla crossed with cut grass. It is one of the more surprising smells in a North American garden. On a warm morning, you can smell a patch three feet away. Native bees find it before you do.',
    ],
    observation:
      'What you are watching for: a female monarch landing, bending her abdomen to the underside of a leaf, depositing a single pale egg. It takes four seconds. If you see it, you will not forget it.',
  },
  {
    period: 'June – July',
    heading: 'The caterpillars appear.',
    color: 'var(--monarch-green)',
    paragraphs: [
      'The eggs hatch in three to five days. First-instar caterpillars are nearly invisible — translucent and the length of an eyelash. You will probably miss this stage entirely. What you will notice, two weeks later, are the fifth-instar caterpillars: boldly striped black, white, and yellow, as thick as your finger, eating with a focus that looks deliberate.',
      'A fifth-instar caterpillar can strip a milkweed leaf in under an hour. Three caterpillars on one plant will defoliate it within a few days. This looks alarming. It is not. Milkweed regrows from the root. The caterpillars are doing what they evolved to do. Leave them.',
      'There will also be losses. You will find a caterpillar that stopped moving and shriveled. You will find a chrysalis that turned black instead of jade. You will find a caterpillar that never made it to its fifth instar. In the wild, fewer than 5% of eggs survive to adulthood. Even with some losses in your yard, you are improving those odds. That is the point.',
    ],
    observation:
      'What you are watching for: the J-hang. When a fifth-instar caterpillar is ready to pupate, it climbs to a surface, attaches with a silk pad, and hangs upside down in a J. It will hold this position for 12 to 24 hours. Then, in roughly 60 seconds, it transforms.',
  },
  {
    period: 'Late July – August',
    heading: 'The chrysalis and the emergence.',
    color: 'var(--monarch-orange)',
    paragraphs: [
      'The chrysalis is jade green with a ring of small gold dots along the top edge. It looks like a piece of jewelry that something decided to make biological. It is suspended from a silk pad, and if you touch it gently you can feel it twitch — a reflex, not distress.',
      'For ten to fourteen days nothing appears to happen. Then the chrysalis darkens, turns translucent, and you can see the orange and black wings through the casing. This is the day before emergence.',
      'The butterfly emerges over a few minutes of active movement, clings to the empty casing while its wings inflate and harden, and hangs for two to four hours before it is ready to fly. The first flight is tentative — a short glide to a nearby surface. Then it is gone.',
    ],
    observation:
      'What you are watching for: the moment the wings go from crumpled to full. It happens in real time, over 45 minutes, if you stay. Most people who watch it once watch it every time after.',
  },
  {
    period: 'August – October',
    heading: 'The migration passes.',
    color: 'var(--monarch-green)',
    paragraphs: [
      'The diapause generation — the one that will fly to Mexico — hatches from late July through August. These butterflies are physiologically different from the summer generations: they do not reproduce. Instead they eat, store fat, and orient south and southwest.',
      'In late August and September, you will see monarchs moving through your yard in a way that looks different from the summer residents. They are not looking for milkweed to lay eggs on. They are looking for nectar to fuel the flight south. Native asters, goldenrod, ironweed — these are the refueling stations.',
      'If you live along a major corridor — the Great Plains, the Texas hill country, the Appalachian ridges — you may see dozens in a morning. In most yards, the fall migration appears as a steady trickle: one or two monarchs a day for several weeks, moving purposefully southwest. You know where they are going. That knowledge changes how you watch them.',
    ],
    observation:
      'What you are watching for: a monarch nectaring with particular intensity on late-season blooms — goldenrod especially. They fuel heavily before flying. Log every one you see on iNaturalist. Your sightings from your specific location help researchers understand where the corridors are shifting.',
  },
]

const afterYear: { heading: string; body: string }[] = [
  {
    heading: 'The milkweed comes back bigger.',
    body: 'Common Milkweed spreads by root and seed. The patch you planted will have doubled or tripled by year two. You will have more milkweed than you planned for, in places you did not plan for it. This is correct.',
  },
  {
    heading: 'You start noticing what was always there.',
    body: 'Milkweed supports 457 native insect species beyond monarchs. You will have watched caterpillars closely enough that you start recognizing other caterpillars. You will notice when the goldenrod blooms and when the asters come in. Paying attention to one thing is practice for paying attention to all of it.',
  },
  {
    heading: 'You want to tell someone.',
    body: 'Not to convince them of anything. Just to say: there was a caterpillar on the milkweed by the fence last week, and I watched it become a chrysalis, and this morning it was a butterfly. Most people have not seen this. The act of describing it is part of how it spreads.',
  },
  {
    heading: 'You compare years.',
    body: 'This is when the data starts to matter personally. Did more monarchs visit this fall than last? Were there caterpillars in late August or early? The year you started noticing becomes the baseline you measure against. That baseline is what "recovery" will eventually mean in your yard.',
  },
]

export default function TheFirstYear({ onNavigate }: TheFirstYearProps) {
  return (
    <>
      {/* Hero — bta-002: name the witnessing gap; bta-004: give a visible path */}
      <section className="hero">
        <div className="hero__eyebrow">The First Year</div>
        <h1>What actually happens<br />when you plant milkweed.</h1>
        <p className="hero__lead">
          Month by month: what to watch for, what will surprise you,
          what will be harder than you expected, and what will change you.
          This is not a how-to guide. It is an account of what the year looks like.
        </p>
        <button className="hero__cta" onClick={() => onNavigate('plant-milkweed')}>
          Find Your Milkweed Species →
        </button>
      </section>

      <div className="page">

        {/* Naming the gap — bta-002: witnessing without acting */}
        <section aria-labelledby="gap-heading">
          <h2 id="gap-heading">You have probably seen fewer monarchs than you used to.</h2>
          <p>
            That gap is real. You are not imagining it. Since 1996, the Eastern Monarch population
            has fallen by roughly 80%. The monarchs that passed through your county in September
            when you were a child were part of a population of over one billion.
            This year that population is somewhere between 50 and 200 million, depending on the survey.
          </p>
          <p>
            Most people who come to Camp Monarch already know something is wrong.
            They have been watching the count fall for years, or they remember a September
            that looked different, or they read something that stuck.
            What they have not had is a path that feels proportional to the problem.
          </p>
          <div className="callout callout--orange">
            <p style={{ marginBottom: 0 }}>
              Planting milkweed is proportional to the problem. Not because one yard changes
              the continental count — but because the migration is built from exactly these
              individual patches. The population that collapsed was built from millions of yards
              that had milkweed at field edges and roadsides without anyone trying.
              Restoration requires trying, because the casual abundance is gone.
              What you plant deliberately replaces what was removed without thought.
            </p>
          </div>
        </section>

        {/* Month by month */}
        <section aria-labelledby="year-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="year-heading">The year, month by month</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            This account is written for the northern breeding range — Illinois, Iowa, Ohio, Kansas.
            Adjust the timing 2–4 weeks earlier for the South, 2–4 weeks later for the northern edge.
          </p>

          {months.map((m) => (
            <div
              key={m.period}
              style={{
                marginBottom: '2.5rem',
                borderLeft: `4px solid ${m.color}`,
                paddingLeft: '1.5rem',
              }}
            >
              <div style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: m.color,
                marginBottom: '0.25rem',
              }}>
                {m.period}
              </div>
              <h3 style={{ margin: '0 0 1rem', color: 'var(--text-primary)', fontSize: '1.25rem' }}>
                {m.heading}
              </h3>
              {m.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div style={{
                background: 'rgba(45, 90, 39, 0.07)',
                borderRadius: '6px',
                padding: '0.75rem 1rem',
                fontSize: '0.9rem',
                color: 'var(--monarch-green)',
              }}>
                <strong>Watch for:</strong> {m.observation}
              </div>
            </div>
          ))}
        </section>

        {/* After year one */}
        <section aria-labelledby="after-heading">
          <h2 id="after-heading">What changes after the first year</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            The first season ends when the frost kills the milkweed back to the root.
            By that point something has shifted that is hard to name exactly.
          </p>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {afterYear.map(({ heading, body }) => (
              <div
                key={heading}
                style={{
                  padding: '1rem 1.25rem',
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderLeft: '3px solid var(--monarch-orange)',
                  borderRadius: '0 6px 6px 0',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                }}
              >
                <p style={{ margin: '0 0 0.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {heading}
                </p>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Voices from the field — bta-008: art bridges knowing to feeling */}
        <section aria-labelledby="voices-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="voices-heading">What people say about their first season</h2>
          <div className="witness-card">
            <p className="witness-card__quote">
              "The hardest part was the waiting in April when nothing was happening.
              By July I had eight chrysalises hanging from the stems and I was checking
              them twice a day. I watched three butterflies emerge. I did not expect
              to feel that way about an insect."
            </p>
            <p className="witness-card__attribution">—K.L., Columbus, Ohio</p>
          </div>
          <div className="witness-card">
            <p className="witness-card__quote">
              "I lost caterpillars to something — parasitic wasps, I think.
              The first time I thought I had done something wrong.
              The second time I understood it was just what happens.
              The ones that made it still made it. Three butterflies from my yard
              logged on iNaturalist in September."
            </p>
            <p className="witness-card__attribution">—R.M., Manhattan, Kansas</p>
          </div>
          <div className="witness-card">
            <p className="witness-card__quote">
              "My neighbor asked why I had weeds growing by the fence.
              I told her what milkweed was for. Two weeks later she asked me
              where she could get some. That conversation happened because
              I had planted something I could point at."
            </p>
            <p className="witness-card__attribution">—J.S., Ames, Iowa</p>
          </div>
        </section>

        {/* The hard truth — honest, not false hope */}
        <section aria-labelledby="honest-heading">
          <h2 id="honest-heading">What no one tells you</h2>
          <p>
            You will lose caterpillars. In a wild population, over 95% of eggs never reach adulthood.
            In your yard the survival rate will be better — but not 100%. A chrysalis that
            turns black, a caterpillar that stops eating and shrivels, a butterfly with crumpled wings
            that cannot fly: these happen. They are not failures of your care.
            They are part of what the lifecycle is, and knowing them clearly is better than
            being surprised by them.
          </p>
          <p>
            You will also see things that are not in the guides. A tachinid fly parasitoid larva
            emerging from a chrysalis instead of a butterfly. A monarch egg that never hatches.
            A late-instar caterpillar disappearing overnight — taken by a bird or spider, or
            simply wandered off to pupate somewhere out of sight.
          </p>
          <p>
            Paying honest attention is the practice. The losses are part of what teaches you
            to recognize the system — not as a set of facts to memorize but as something
            you have watched happen.
          </p>
        </section>

        {/* The reformed rearer note — fc8dbca5: habitat first */}
        <div className="callout callout--green" style={{ marginTop: '2rem' }}>
          <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>
            Habitat first, rearing second
          </h3>
          <p>
            The single most important thing you can do for monarchs is grow milkweed in place —
            in your yard, visible, available to the migration as it passes.
            Indoor rearing can produce individual butterflies with higher survival rates,
            but conservation researchers consistently find that scale matters more than
            per-individual survival: more milkweed in more yards creates more habitat
            for more generations.
          </p>
          <p style={{ marginBottom: 0 }}>
            The first year is about growing milkweed and watching what uses it.
            If you end up raising a caterpillar or two indoors, that is a valuable experience —
            it produces a direct, irreversible connection to the lifecycle.
            But the milkweed in your yard is the infrastructure that works whether you are watching or not.
          </p>
        </div>

        {/* Actions */}
        <div className="action-panel" style={{ marginTop: '2.5rem' }}>
          <h2 style={{ marginTop: 0 }}>Ready to start your first year?</h2>
          <p>
            The first step is the milkweed. Find the native species that grows in your region —
            the one matched to your soil and climate — and plant it in the sunniest spot you have.
            Everything else follows from that.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button
              className="hero__cta"
              onClick={() => onNavigate('plant-milkweed')}
            >
              Find Your Milkweed Species →
            </button>
            <button
              onClick={() => onNavigate('raise-a-monarch')}
              style={{
                background: 'none',
                border: '2px solid var(--monarch-orange)',
                color: 'var(--monarch-orange)',
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 'bold',
                fontSize: '0.95rem',
              }}
            >
              Raise a Monarch Indoors →
            </button>
          </div>
        </div>

        {/* Log your season */}
        <section aria-labelledby="log-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="log-heading">Log what you see</h2>
          <p>
            Your first season is the beginning of a dataset. Every caterpillar, every chrysalis,
            every adult monarch you observe has value as citizen science data.
            iNaturalist is the platform researchers use — your observations from your specific
            location become part of the record of where the population is, which corridors
            are active, and how breeding range shifts as habitat changes.
          </p>
          <p>
            Note the date of your first monarch sighting. Note the date of your first egg.
            Note the date of first emergence. These data points, multiplied across thousands of yards,
            are how we understand whether the population is recovering.
          </p>
          <a
            href="https://www.inaturalist.org/taxa/48662-Danaus-plexippus"
            target="_blank"
            rel="noreferrer"
            className="hero__cta"
            style={{ display: 'inline-block', marginTop: '0.5rem' }}
          >
            Log on iNaturalist →
          </a>
        </section>

      </div>
    </>
  )
}
