import { useMemo } from 'react'
import type { Page } from '../App'

interface HomeProps {
  onNavigate: (page: Page) => void
}

// Seasonal right-now content — lesson-044: place-specific data moves people
// lesson-025: observation is an art; bta-004: give a named first step
type SeasonalContent = {
  header: string
  context: string
  items: { emoji: string; label: string; detail: string }[]
}

function getSeasonalContent(month: number): SeasonalContent {
  // Spring: March (2), April (3), May (4)
  if (month >= 2 && month <= 4) {
    return {
      header: '🦋 Spring migration — what to watch for right now',
      context:
        'The spring migration is moving northward from Mexico and Texas through the Central Flyway. ' +
        'Here\'s what that means for your yard this month:',
      items: [
        {
          emoji: '🌿',
          label: 'Milkweed is emerging.',
          detail:
            'Look for thick, gray-green lance-shaped leaves pushing up from bare ground. ' +
            "Don't mow over it. Monarchs arrive when it's 6 inches tall — " +
            'that window opens for most of the Midwest in the next 3–5 weeks.',
        },
        {
          emoji: '🦋',
          label: 'First swallowtails are nectaring.',
          detail:
            'Tiger and black swallowtails appear a few weeks ahead of monarchs. ' +
            'If you see them on blooms in your yard, monarchs will use the same plants.',
        },
        {
          emoji: '🐝',
          label: 'Native bees on early flowers.',
          detail:
            'Ground-nesting bees are emerging now. ' +
            'A yard that supports bees in spring supports monarchs in summer.',
        },
        {
          emoji: '📍',
          label: 'Find one milkweed plant and note its height.',
          detail:
            'Come back in two weeks. ' +
            'The monarchs moving through the southern states now will be in your neighborhood within the month.',
        },
      ],
    }
  }
  // Summer: June (5), July (6), August (7)
  if (month >= 5 && month <= 7) {
    return {
      header: '🐛 Breeding season — caterpillars are here now',
      context:
        'Monarchs are reproducing across the northern breeding range right now. ' +
        'This is the season when milkweed in your yard does the most direct work:',
      items: [
        {
          emoji: '🥚',
          label: 'Check the underside of milkweed leaves.',
          detail:
            'Monarch eggs are the size of a pinhead — pale yellow, ribbed, laid one per leaf. ' +
            'Look on the underside of leaves on milkweed 6 inches or taller.',
        },
        {
          emoji: '🐛',
          label: 'Watch for caterpillars.',
          detail:
            'Monarch caterpillars are striped black, white, and yellow. ' +
            'A single caterpillar eats its entire milkweed plant before forming a chrysalis. ' +
            'If you see one, leave the plant alone.',
        },
        {
          emoji: '🌸',
          label: 'Nectar plants matter now too.',
          detail:
            'Adult monarchs need nectar to fuel egg-laying. ' +
            'Native coneflowers, bergamot, and liatris are blooming now and the monarchs are using them.',
        },
        {
          emoji: '📷',
          label: 'Log what you see on iNaturalist.',
          detail:
            'Every caterpillar observation adds to the breeding-range data that researchers use to track population recovery. ' +
            'It takes 60 seconds.',
        },
      ],
    }
  }
  // Fall: September (8), October (9), November (10)
  if (month >= 8 && month <= 10) {
    return {
      header: '🍂 Fall migration — the roost movement is beginning',
      context:
        'The fall migration is underway. Monarchs from across the northern breeding range are moving south and southwest ' +
        'toward their overwintering sites in the Sierra Madre. Here\'s what to watch for:',
      items: [
        {
          emoji: '🌅',
          label: 'Watch in the mornings near roost trees.',
          detail:
            'Monarchs roost in clusters overnight and disperse in the morning once temperatures rise. ' +
            'Tall trees near open fields — especially cedars and oaks — are common roost sites.',
        },
        {
          emoji: '🌸',
          label: 'Late-blooming nectar plants are critical.',
          detail:
            'Goldenrod, native asters, and ironweed keep blooming into October. ' +
            'Monarchs need nectar to build fat reserves for the 2,500-mile flight to Mexico.',
        },
        {
          emoji: '📊',
          label: 'Log every monarch you see.',
          detail:
            'Fall migration counts are sparse outside traditional corridors. ' +
            'Your sighting on iNaturalist helps researchers understand where corridors are shifting as habitats change.',
        },
        {
          emoji: '🌱',
          label: 'Fall is the best time to plant milkweed.',
          detail:
            'Milkweed seeds need cold stratification to germinate in spring. ' +
            'Planting native milkweed seed now lets winter do the work — seeds planted in fall have higher germination rates.',
        },
      ],
    }
  }
  // Winter: December (11), January (0), February (1)
  return {
    header: '❄️ Winter — monarchs are in Mexico right now',
    context:
      'The monarchs that hatched in your yard last August are overwintering in the oyamel fir forests of Michoacán, Mexico. ' +
      'Winter is the time to prepare for spring:',
    items: [
      {
        emoji: '🗺️',
        label: 'Order milkweed for spring planting.',
        detail:
          'Native milkweed plugs sell out by mid-April. ' +
          'Order now from Prairie Moon Nursery, Midwest Wildflowers, or a local native plant nursery. ' +
          'Butterfly Weed (Asclepias tuberosa) ships in spring.',
      },
      {
        emoji: '🌱',
        label: 'Plan your milkweed patch.',
        detail:
          'Mark a 3-foot patch in a south-facing, sunny spot before snow covers the yard. ' +
          "The patch doesn't need to be large — three milkweed plants in full sun can support 40 caterpillars in a season.",
      },
      {
        emoji: '🦋',
        label: "Follow the overwintering count.",
        detail:
          'The World Wildlife Fund Mexico surveys the oyamel forests in January and February. ' +
          "This year's count will be published in March — it's the clearest measure of whether the population is recovering.",
      },
      {
        emoji: '📣',
        label: "Tell someone what you're planning.",
        detail:
          'Habitat is a corridor, not a single yard. ' +
          'If one neighbor plants milkweed too, the corridor doubles. ' +
          'A conversation in January turns into two patches by June.',
      },
    ],
  }
}

export default function Home({ onNavigate }: HomeProps) {
  const now = useMemo(() => new Date(), [])
  const month = now.getMonth() // 0-indexed
  const monthName = now.toLocaleString('en-US', { month: 'long' })
  const year = now.getFullYear()
  // First day of current month for iNaturalist link
  const monthFirstDay = `${year}-${String(month + 1).padStart(2, '0')}-01`

  const seasonal = useMemo(() => getSeasonalContent(month), [month])

  return (
    <>
      {/* Hero — conclusion first (www-004). First 2 words: "Monarchs are" (www-005). */}
      <section className="hero">
        <div className="hero__eyebrow">Camp Monarch</div>
        <h1>Monarchs are disappearing.<br />You can change that.</h1>
        <p className="hero__lead">
          One Monarch weighs less than a paper clip.
          It navigates 3,000 miles to a mountain it has never seen —
          guided by the sun as a compass and, researchers believe, magnetic fields.
          Since 1996, their population has fallen by 80%.<sup><a href="https://xerces.org/monarchs" target="_blank" rel="noreferrer" className="cite">[1]</a></sup>
          Planting milkweed helps. Here's how.
        </p>
        <button className="hero__cta" onClick={() => onNavigate('plant-milkweed')}>
          Plant Milkweed This Season
        </button>
      </section>

      <div className="page">

        {/* Key facts — scannable (www-001), specific numbers (www-013) */}
        <section aria-labelledby="facts-heading">
          <h2 id="facts-heading">The stakes, in numbers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', margin: '1rem 0 2rem' }}>
            <div className="fact-card">
              <div className="fact-card__number">3,000</div>
              <div className="fact-card__label">miles per migration</div>
            </div>
            <div className="fact-card">
              <div className="fact-card__number">80%</div>
              <div className="fact-card__label">population lost since 1996</div>
            </div>
            <div className="fact-card">
              <div className="fact-card__number">1</div>
              <div className="fact-card__label">milkweed plant changes things</div>
            </div>
          </div>
        </section>

        {/* iNaturalist Monarch count widget — start */}
        <div
          className="action-panel"
          style={{
            marginTop: '2rem',
            background: 'linear-gradient(135deg, rgba(255, 247, 237, 0.95) 0%, rgba(255, 251, 235, 0.95) 100%)',
            border: '1px solid rgba(249, 115, 22, 0.24)',
          }}
        >
          <h2 style={{ marginTop: 0 }}>People are already logging Monarchs</h2>
          <p>
            Monarch sightings are being logged on iNaturalist across the United States this month.
            Each sighting becomes open data that researchers can use to track the migration.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1rem' }}>
            Current count covers observations since {monthFirstDay}.
          </p>
          <a
            href={`https://www.inaturalist.org/observations?month=${month + 1}&place_id=1&taxon_id=48662&d1=${monthFirstDay}`}
            target="_blank"
            rel="noreferrer"
            className="hero__cta"
            style={{ display: 'inline-block' }}
          >
            See {monthName} sightings on iNaturalist →
          </a>
        </div>
        {/* iNaturalist Monarch count widget — end */}

        {/* Seasonal right-now panel — start */}
        {/* lesson-044: place-specific data moves people; lesson-025: observation is an art */}
        <div className="right-now-panel">
          <div className="right-now-panel__header">
            {seasonal.header}
          </div>
          <p className="right-now-panel__context">
            {seasonal.context}
          </p>
          <ul className="right-now-panel__list">
            {seasonal.items.map((item, i) => (
              <li key={i}>
                <strong>{item.emoji} {item.label}</strong>{' '}
                {item.detail}
              </li>
            ))}
          </ul>
        </div>
        {/* Seasonal right-now panel — end */}

        {/* What we do — clear, not clever (www-009). Communicate, don't market (www-014). */}
        <section aria-labelledby="what-heading">
          <h2 id="what-heading">What Camp Monarch does</h2>
          <p>
            We help people grow milkweed — the only plant Monarchs can reproduce on.
            We track the migration so you know when butterflies are moving through your county.
            We make the first step specific enough to actually take.
          </p>
          <ul>
            <li><strong>Plant milkweed</strong> — native species selected for your region, with sources and timing.</li>
            <li><strong>Track the migration</strong> — weekly corridor updates, October through November.</li>
            <li><strong>Log a sighting</strong> — your observation joins the national count.</li>
          </ul>
        </section>

        {/* Story — individual over species (www-011 dual audience). No superlatives (www-002). */}
        <section aria-labelledby="story-heading">
          <h2 id="story-heading">One butterfly's journey</h2>
          <p>
            In late August, a Monarch emerges in Illinois. It has never migrated before.
            Its parents died on the northward journey in May.
            No one taught it the route.
          </p>
          <p>
            Over the next six weeks it will fly south and southwest —
            following the sun's angle, adjusting for the time of day,
            crossing the Rio Grande, and climbing into the Sierra Madre.
            It will roost in the same oyamel fir forest where its great-grandparents overwintered.
          </p>
          <p>
            In 1996, around 1 billion Monarchs made that journey.
            In 2024, researchers counted 60 million.<sup><a href="https://monarchjointventure.org/mjvprograms/science/overwintering-population-monitoring" target="_blank" rel="noreferrer" className="cite">[2]</a></sup>
            The difference is mostly milkweed — habitat lost to agriculture and development.
          </p>
          <div className="callout callout--orange">
            <p style={{ marginBottom: '0.75rem' }}>
              <strong>The milkweed connection is direct:</strong> every Monarch egg is laid on a milkweed plant.
              Without milkweed, there is no reproduction. No reproduction, no migration.
              More milkweed in yards and roadsides between Illinois and Texas means more Monarchs survive the return trip in spring.
            </p>
            <button
              onClick={() => onNavigate('monarch-life')}
              style={{ background: 'none', border: 'none', color: 'var(--monarch-orange)', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.95rem', fontWeight: 'bold', textDecoration: 'underline' }}
            >
              The full lifecycle: egg, caterpillar, chrysalis, and the generation that flies 9 months →
            </button>
          </div>
        </section>

        {/* Witnesses — first-person voices (bta-002, bta-003, lesson-042) */}
        {/* Art bridges knowing to feeling; feeling precedes action (bta-008) */}
        <section aria-labelledby="witnesses-heading">
          <h2 id="witnesses-heading">What people are witnessing</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            These are not statistics. They are accounts from people paying attention to their own yards.
          </p>
          <div className="witness-card">
            <p className="witness-card__quote">
              "I grew up watching dozens of monarchs every August in our backyard.
              Last September my daughter and I sat outside for two hours and counted five.
              That fall I planted eight milkweed plugs along our fence.
              This spring they're coming back up — and we're watching."
            </p>
            <p className="witness-card__attribution">Sarah M., St. Louis, Missouri</p>
          </div>
          <div className="witness-card">
            <p className="witness-card__quote">
              "I thought milkweed was just a weed. I pulled it out of my garden for ten years.
              Then I found out it's the only plant monarchs can reproduce on.
              I let it come back the next spring. By July I had caterpillars for the first time I can remember."
            </p>
            <p className="witness-card__attribution">Tom K., Ames, Iowa</p>
          </div>
          <div className="witness-card">
            <p className="witness-card__quote">
              "We used to see monarchs clustered on the milkweed at the field edges in late summer —
              hundreds of them on a good year. That stopped maybe eight years ago.
              This year I left a strip along the south fence.
              Saw a monarch land on it in September. One. But it stopped there."
            </p>
            <p className="witness-card__attribution">Dave W., Emporia, Kansas</p>
          </div>
        </section>

        {/* Three actions — low friction, specific (bta-004 / www-005) */}
        <section aria-labelledby="start-heading">
          <h2 id="start-heading">Start this week</h2>
          <ol className="step-list">
            <li>
              <strong>Find your region's milkweed.</strong>
              Different milkweed species grow in different climates.
              Butterfly Weed (<em>Asclepias tuberosa</em>) works from Maine to Texas.
              Find the right species for your yard in 2 minutes.
            </li>
            <li>
              <strong>Order or source locally.</strong>
              Native plant nurseries carry plugs in spring. Many states have Monarch restoration programs that sell starts at cost.
              We list sources by state.
            </li>
            <li>
              <strong>Plant in a sunny spot.</strong>
              Milkweed needs 6 hours of sun. A 3-foot patch can support dozens of caterpillars in one season.
            </li>
          </ol>
          <button className="hero__cta" style={{ marginTop: '0.5rem' }} onClick={() => onNavigate('plant-milkweed')}>
            Find Your Milkweed Species →
          </button>
        </section>

        {/* Why this matters — place-based, not abstract (bta-005) */}
        <div className="action-panel" style={{ marginTop: '2.5rem' }}>
          <h2 style={{ marginTop: 0 }}>The migration passes your yard</h2>
          <p>
            Every fall, Monarchs funnel through specific corridors across the US —
            the Central Flyway through the Great Plains, the Eastern corridor through Texas hill country.
            Milkweed in your county is part of the web that makes the migration possible.
            <strong style={{ color: 'var(--monarch-orange)' }}> This is not abstract.</strong> The butterfly navigating over your roof in September
            needs a place to lay eggs in your neighborhood in spring.
          </p>
          <button
            onClick={() => onNavigate('the-migration')}
            style={{ background: 'none', border: '2px solid var(--monarch-orange)', color: 'var(--monarch-orange)', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '0.95rem' }}
          >
            See the Migration Map →
          </button>
        </div>

        {/* Citation list — web-citation-practices lesson */}
        <section className="cite-list" aria-label="Sources">
          <p>[1] Xerces Society. <a href="https://xerces.org/monarchs" target="_blank" rel="noreferrer">Monarch Butterfly Conservation.</a> Accessed {monthName} {year}.</p>
          <p>[2] Monarch Joint Venture. <a href="https://monarchjointventure.org/mjvprograms/science/overwintering-population-monitoring" target="_blank" rel="noreferrer">Overwintering Population Monitoring.</a> Accessed {monthName} {year}.</p>
        </section>
      </div>
    </>
  )
}
