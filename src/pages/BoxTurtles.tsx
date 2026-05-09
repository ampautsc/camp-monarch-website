import type { Page } from '../App'

interface BoxTurtlesProps {
  onNavigate: (page: Page) => void
}

// Homeowner actions that directly support box turtle populations
// Derived from Dodd (2001), Terrapin Institute guidelines, and IUCN threat assessment
const actions = [
  {
    id: 'watch-the-roads',
    emoji: '🚗',
    label: 'Slow down — they are crossing',
    summary: 'Road mortality is the leading cause of adult box turtle death',
    detail: [
      'Box turtles are unhurried. They cross roads at the same speed they cross a meadow, and they do not respond to approaching vehicles. A slow-moving car can stop in time; a fast one cannot.',
      'Spring (April–May, mating season) and early summer (June–July, females searching for nesting sites) are peak crossing times. If you see a turtle in the road, slow down and move it to the side — in the direction it was heading. Do not turn it around.',
      'Never move a box turtle to a new location. They know their territory over a lifetime. A turtle moved more than a quarter mile from its home range will often spend its remaining years trying to return, crossing roads repeatedly, and dying in the attempt.',
    ],
  },
  {
    id: 'never-collect',
    emoji: '🏠',
    label: 'Leave them where they live',
    summary: 'Box turtles are deeply place-specific — collection is a slow death sentence',
    detail: [
      'A box turtle may spend its entire 50-year life within a four-acre area. It knows every berry patch, every shelter site, every seasonal water source. This knowledge is not instinct — it is learned, accumulated over decades.',
      'Collecting a box turtle for a pet, or relocating it because it wandered into your garden, removes it from the only place it knows how to survive. Wild box turtles do not adapt to new territories. They search for home instead.',
      'If a turtle is living in or near your yard, that is a good sign. Note its size and markings. It may be there every spring for the rest of your life — and its — if the habitat stays intact.',
    ],
  },
  {
    id: 'brush-piles-leaf-litter',
    emoji: '🍂',
    label: 'Build brush piles and leave leaf litter',
    summary: 'Cover for shelter, overwintering, and nesting',
    detail: [
      'Box turtles spend winter buried in leaf litter and soil — a state called brumation. They dig down below the frost line and remain dormant from October or November through March or April. Removing leaf litter in autumn removes their overwintering habitat.',
      'In summer, they use brush piles, fallen logs, and dense shrubs for shade and shelter during the hottest parts of the day. These same structures protect them from predators.',
      'A brush pile made from fallen branches, a section of yard with leaves left through winter, a log left to rot in the corner — each of these is shelter that may be used by the same turtle for years.',
    ],
  },
  {
    id: 'plant-food',
    emoji: '🫐',
    label: 'Plant native berry-producing shrubs',
    summary: 'Their primary summer food grows in native plant communities',
    detail: [
      'Box turtles are omnivores: berries, mushrooms, earthworms, slugs, carrion, and occasionally small invertebrates. In summer, berries are a primary food source. They eat wild strawberry, wild blueberry, elderberry, pokeweed, Virginia creeper berries, and the fruits of many native shrubs.',
      'Native plants support the berry-producing shrubs and the soil invertebrates that box turtles depend on. Lawn monoculture offers none of this. Every native shrub or groundcover that replaces lawn is potential food and cover.',
      'Wild strawberry (Fragaria virginiana), lowbush blueberry (Vaccinium angustifolium), and native elderberry (Sambucus canadensis) are highly productive, low-maintenance, and grow across much of the eastern United States. They also support pollinators and birds.',
    ],
  },
  {
    id: 'check-before-mowing',
    emoji: '✂️',
    label: 'Check for turtles before mowing',
    summary: 'They rest in tall grass and are invisible until it is too late',
    detail: [
      'Box turtles will rest in the shade of tall grass in summer heat. A turtle sitting still in grass is nearly impossible to see before a mower reaches it. Mower blades cause severe shell damage and often death.',
      'Walk the area before mowing from May through October. Pay special attention to tall grass near brush piles, garden edges, and shaded areas. Move any turtle you find to cover before mowing.',
      'Reducing lawn overall is the deeper solution. A yard with less lawn to mow is a yard with fewer turtle-mowing encounters and more habitat for everything else.',
    ],
  },
  {
    id: 'no-pesticides',
    emoji: '🚫',
    label: 'Eliminate pesticides and herbicides',
    summary: 'Box turtles bioaccumulate toxins through earthworms and berries',
    detail: [
      'Box turtles eat earthworms that have absorbed herbicides and pesticides from soil. They eat berries that have been sprayed. These compounds accumulate in the turtle\'s fat and organs over its long life — a process called bioaccumulation.',
      'Studies have found organochlorine pesticides, polychlorinated biphenyls, and heavy metals in wild box turtle tissues, even in populations living far from active agricultural operations. They carry decades of exposure.',
      'Eliminating pesticides and herbicides from your yard removes one accumulation pathway. It also protects the earthworms, slugs, and insects that are the foundation of the box turtle\'s diet.',
    ],
  },
]

export default function BoxTurtles({ onNavigate }: BoxTurtlesProps) {
  return (
    <>
      {/* Hero — bta-008: art before action; evoke the felt experience first */}
      <section className="hero">
        <div className="hero__eyebrow">Box Turtles in Your Yard</div>
        <h1>It has been living here<br />longer than you have.</h1>
        <p className="hero__lead">
          A box turtle pulls its head inside its hinged shell and waits.
          It has been doing this for 200 million years — the same body plan,
          the same unhurried strategy. The turtle in your yard may have been born there
          fifty years ago. It knows where the wild strawberries fruit in June,
          which log stays cool in July heat, where the soil is soft enough to dig down in October.
          It will be there next spring too, if the yard stays intact.
        </p>
        <p className="hero__lead">
          Eastern box turtle populations have declined sharply across their range.
          The causes are well understood. Several of the solutions begin in a single yard.
        </p>
      </section>

      <div className="page">

        {/* Biology — lesson-029: specificity is a moral act */}
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">A life measured in decades</h2>
          <p>
            The Eastern box turtle (<em>Terrapene carolina carolina</em>) is one of the few
            truly terrestrial turtles native to North America — not a pond turtle or marsh turtle,
            but a creature of woodland floors, meadow edges, and brushy fields.
            Its hinged plastron — the lower shell — can close completely when the turtle retracts,
            making a sealed box. This is what gives it its name and its singular defense.
          </p>
          <p>
            Box turtles are omnivores. They eat berries (wild strawberry, blueberry, elderberry),
            mushrooms (including some toxic to humans), earthworms, slugs, carrion, and occasionally
            small invertebrates. They are one of the few animals that can safely eat Amanita mushrooms.
          </p>
          <div className="callout callout--orange" style={{ margin: '1.5rem 0' }}>
            <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>Site fidelity — a life in one place</h3>
            <p style={{ marginBottom: 0 }}>
              A box turtle's home range is typically one to four acres.
              Unlike most wildlife, box turtles do not expand their range over time.
              They learn their territory — the location of food, water, shelter, and safe corridors —
              and they return to the same sites year after year for decades.
              Researchers have documented individual turtles using the same nesting sites
              for twenty or more consecutive years.
              <sup><a href="https://www.iucnredlist.org/species/21641/97429432" target="_blank" rel="noreferrer" className="cite">[1]</a></sup>{' '}
              This fidelity is not merely habit. It is survival: a turtle in unfamiliar territory
              cannot efficiently find food, shelter, or mates.
            </p>
          </div>
          <p>
            Females nest in late spring and early summer, digging a shallow cavity in sunny, open
            soil — often a garden bed, lawn edge, or unpaved path — and laying three to eight eggs.
            Incubation takes 60 to 90 days. Temperature during incubation determines sex: warmer
            nests produce more females, cooler nests more males.
            Hatchlings emerge in late summer or early autumn and immediately begin the work of
            learning their territory. Some will still be learning it half a century later.
          </p>
          <p>
            Box turtles overwinter through brumation — a form of dormancy distinct from mammalian
            hibernation. They dig down into leaf litter and soil below the frost line in October
            or November and remain motionless until April. Their metabolism slows nearly to zero.
            They surface in spring when temperatures consistently exceed 50°F.
          </p>
        </section>

        {/* Indicator species */}
        <section aria-labelledby="indicator-heading">
          <h2 id="indicator-heading">What their presence tells you</h2>
          <p>
            Box turtles are an indicator species. Their presence in a landscape signals
            a functioning habitat: diverse plant communities (berry-producing shrubs, leaf litter,
            native groundcovers), intact soil ecology (earthworms, slugs, fungi), low pesticide
            load, and sufficient connected area for a long-lived animal to survive and reproduce.
          </p>
          <p>
            Their absence signals the opposite. A landscape where box turtles once lived but no
            longer do is a landscape that has been simplified: lawn monoculture over native plants,
            pesticide use that has depleted soil life, roads and development that fragment movement.
            The turtle's disappearance is a legible change — the result of choices made about how
            land is managed.
          </p>
          <div className="callout callout--green" style={{ marginBottom: '1.5rem' }}>
            <p style={{ marginBottom: 0 }}>
              <strong>The same actions that bring monarchs and fireflies back</strong> bring box
              turtles back: native plants over lawn, no pesticides, leaf litter left through winter,
              reduced mowing. These are not separate projects. They are the same project.
            </p>
          </div>
        </section>

        {/* Decline — lesson-022/023: ethical framing of ecological loss */}
        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">What is happening to them</h2>
          <p>
            The Eastern box turtle is listed as Vulnerable on the IUCN Red List,
            and as a Species of Concern, Threatened, or Protected in dozens of US states.
            <sup><a href="https://www.iucnredlist.org/species/21641/97429432" target="_blank" rel="noreferrer" className="cite">[1]</a></sup>{' '}
            Because box turtles are long-lived and reproduce slowly — a female may not reach
            sexual maturity until age 10, and an individual that survives to adulthood may still
            reproduce at 40 — the loss of even a few adults per year per population
            puts that population on a trajectory toward local extinction.
          </p>

          <div className="callout callout--green" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>Road mortality</h3>
            <p style={{ marginBottom: 0 }}>
              Roads are the primary cause of adult box turtle death across their range.
              Turtles cross roads for the same reasons they have always moved across their territory —
              to find mates, to find nesting sites, to move between seasonal resources.
              Roads did not exist for most of the 200 million years box turtles have been on Earth.
              The turtles have not developed the instinct to stop. They are slow. Cars are fast.
              A population cannot absorb the loss of several adults per mile of road per year.
            </p>
          </div>

          <div className="callout callout--green" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>Habitat loss and fragmentation</h3>
            <p style={{ marginBottom: 0 }}>
              Box turtles require connected habitat across their entire home range. Development
              and lawn monoculture fragment the landscape into pieces too small to support a
              full life. A turtle that cannot find food in one part of its range has no adjacent
              natural area to move into. Fragmentation also forces more road crossings —
              turning normal movement into a repeated gamble.
            </p>
          </div>

          <div className="callout callout--green" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>Pesticide bioaccumulation</h3>
            <p style={{ marginBottom: 0 }}>
              Box turtles accumulate pesticides, herbicides, and heavy metals over their long
              lives. Earthworms absorb compounds from treated soil; box turtles eat earthworms.
              Berries absorb herbicide runoff; box turtles eat berries. Studies of wild populations
              have found organochlorine residues and other toxins in turtle tissues decades
              after those compounds were banned. Their longevity works against them:
              there is more time for accumulation, and fewer years to recover.
            </p>
          </div>

          <div className="callout callout--green" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--monarch-green)' }}>Collection for the pet trade</h3>
            <p style={{ marginBottom: 0 }}>
              Historical collection for domestic and international pet trade was significant enough
              to reduce populations across much of the eastern United States. It is now illegal
              in most states to collect wild box turtles for any purpose. But the pressure
              continues, and individual turtles removed from a population cannot be replaced
              quickly — their slow reproductive rate means recovery takes generations.
            </p>
          </div>

          <p>
            These are not inevitable conditions. They are the result of choices — about how we
            build roads, how we manage land, which compounds we apply to our soil.
            Different choices produce different outcomes. That is the point.
          </p>
        </section>

        {/* Fellow mortals — lesson-027 */}
        <section aria-labelledby="mortals-heading">
          <h2 id="mortals-heading">Fifty years in one acre</h2>
          <p>
            A box turtle may spend fifty years in a four-acre area. In that time, it comes to know
            that territory in a way that no survey, no satellite image, no field guide can capture.
            It knows when the wild strawberries ripen on the north slope in June.
            It knows which fallen log holds moisture through August drought.
            It knows where the soil is deep enough to dig in October, where to wait out the cold.
          </p>
          <p>
            This is not instinct operating on a landscape. This is an individual life,
            lived in a place, accumulated over decades. The turtle in your yard, if there is one,
            is not a background element. It is a long-term resident with specific knowledge
            of specific ground — knowledge that took years to build and cannot be restored
            if that turtle is taken or killed.
          </p>
          <p>
            They are, as Muir would have said, fellow mortals — going about their own lives
            on their own terms, entirely indifferent to whether we notice them.
            But they benefit from our attention. The yard that maintains native plants,
            leaf litter, no pesticides, and slower mowing is a yard where a box turtle
            can complete its life's work.
          </p>
        </section>

        {/* Six actions */}
        <section aria-labelledby="actions-heading">
          <h2 id="actions-heading">Six actions that directly support box turtle survival</h2>
          <p>
            Box turtles are not hard to help. They do not need large wilderness areas —
            though they benefit from them. They need specific conditions that a yard,
            or a neighborhood, can provide or protect.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Several of these actions cost nothing except attention and restraint —
            the willingness to slow down, to leave something undisturbed, to stop
            applying a compound. That is real conservation.
          </p>

          {actions.map((action) => (
            <div key={action.id} className="callout callout--orange" style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{action.emoji}</span>
                <h3 style={{ margin: 0, color: 'var(--monarch-green)' }}>{action.label}</h3>
              </div>
              <p style={{ margin: '0 0 0.75rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                {action.summary}
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                {action.detail.map((line, j) => (
                  <li key={j} style={{ marginBottom: '0.4rem' }}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Connection to broader habitat — man-003: co-workers with nature */}
        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The same yard, the same choices</h2>
          <p>
            The actions that support box turtles — native plants, leaf litter, no pesticides,
            careful mowing — are the same actions that support Monarch butterflies, fireflies,
            native bees, and the hundreds of other species that have been disappearing from
            residential landscapes.
          </p>
          <p>
            This is not coincidence. These species shared the same pre-development landscape:
            woodland edges, meadows, and brushy ground with rich soil biology, native plant
            diversity, and no synthetic chemicals. Restoring those conditions at the scale of
            a yard or neighborhood restores habitat for all of them at once.
          </p>
          <div className="callout callout--green">
            <p style={{ marginBottom: 0 }}>
              <strong>You are not making separate choices for separate species.</strong>{' '}
              You are deciding what kind of ecosystem your land supports.
              The choice to leave the leaves, plant the native shrubs, and stop the pesticides
              is a choice to be — as Marsh put it — a co-worker with nature in reconstruction.
              Box turtles, monarchs, and fireflies are three visible signals of whether
              that reconstruction is working.
            </p>
          </div>
        </section>

        {/* CTA — bta-004: give a visible, specific path */}
        <div className="action-panel" style={{ marginTop: '2.5rem' }}>
          <h2 style={{ marginTop: 0 }}>If you see one this year</h2>
          <p>
            If a box turtle appears in your yard, note it: its approximate size, the pattern
            on its shell, where you saw it and when. Females found in June in a garden bed may
            be nesting. Turtles found in October near wooded edges may be looking for brumation sites.
            Your sighting is data — and a sign that the habitat is working.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button
              className="hero__cta"
              onClick={() => onNavigate('take-action')}
            >
              Take Action This Week →
            </button>
            <button
              onClick={() => onNavigate('log-a-sighting')}
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
              Log a Turtle Sighting →
            </button>
          </div>
        </div>

        {/* Sources */}
        <section className="cite-list" aria-label="Sources">
          <p>
            [1] IUCN SSC Tortoise and Freshwater Turtle Specialist Group (2011).{' '}
            <em>Terrapene carolina</em>. The IUCN Red List of Threatened Species.{' '}
            <a href="https://www.iucnredlist.org/species/21641/97429432" target="_blank" rel="noreferrer">
              https://www.iucnredlist.org/species/21641/97429432
            </a>{' '}
            Accessed 2026-05-09.
          </p>
          <p>
            Dodd, C. Kenneth Jr. (2001).{' '}
            <em>North American Box Turtles: A Natural History.</em>{' '}
            University of Oklahoma Press.
          </p>
          <p>
            Terrapin Institute.{' '}
            <a href="https://www.terrapininstitute.org/box-turtles" target="_blank" rel="noreferrer">
              Box Turtle Conservation and Research.
            </a>{' '}
            Accessed 2026-05-09.
          </p>
        </section>

      </div>
    </>
  )
}
