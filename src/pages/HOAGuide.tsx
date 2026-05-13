import type { Page } from '../App'

interface HOAGuideProps {
  onNavigate: (page: Page) => void
}

export default function HOAGuide({ onNavigate }: HOAGuideProps) {
  return (
    <div className="species-page">

      {/* ── Hero ── */}
      <section className="hero hero--teal">
        <div className="hero__eyebrow">Take Action</div>
        <h1>Navigating HOA Rules</h1>
        <p className="hero__lead">
          You researched the plants. You cleared the spot. Then the letter arrived.
          Before you fill the bed back in with mulch, read this: many homeowners
          have more legal room than they realize, and every HOA board has heard
          from someone who made the case — and won.
        </p>
      </section>

      <div className="page">

        {/* ── Section 1: Check before you assume ── */}
        <section aria-labelledby="check-heading">
          <h2 id="check-heading">Most people never actually check</h2>
          <p>
            When surveys ask why homeowners don&apos;t plant native gardens, &quot;HOA
            restrictions&quot; is one of the most common answers. But when researchers
            follow up, most of those homeowners have never read their CC&amp;Rs
            carefully, never requested a variance, and never asked their board.
          </p>
          <p>
            The assumption of prohibition does more work than the actual rule. HOA
            governing documents typically regulate appearance — &quot;neat and tidy,&quot;
            &quot;well-maintained,&quot; &quot;no weeds&quot; — not the specific species you plant.
            A native garden with edging, mulch, and a small marker can meet every
            one of those standards.
          </p>
          <p>
            Before anything else: pull your CC&amp;Rs and read the landscaping section
            word for word. Note what it actually says, not what you remember it
            saying. You may be surprised.
          </p>
        </section>

        {/* ── Section 2: State laws ── */}
        <section aria-labelledby="laws-heading">
          <h2 id="laws-heading">Your state may already protect you</h2>
          <p>
            More than a dozen states have passed laws limiting HOA authority over
            native and water-wise landscaping. If you live in one of these states,
            your HOA may not be able to prohibit native plantings regardless of
            what the CC&amp;Rs say.
          </p>

          <div className="action-cards" style={{ marginTop: '1.5rem' }}>
            {[
              {
                state: 'Florida',
                law: 'Florida Statute §373.185 (2009)',
                summary: 'HOAs and local governments cannot prohibit Florida-Friendly Landscaping, including native plants, drought-tolerant groundcovers, and pollinator gardens.',
              },
              {
                state: 'Maryland',
                law: 'Maryland Code §14-1704.1',
                summary: 'HOAs cannot prohibit a homeowner from using native plants, provided the planting is reasonably maintained.',
              },
              {
                state: 'Texas',
                law: 'Texas Water Conservation Code §202.007',
                summary: 'HOAs cannot require irrigation of any turf or landscaping area or prohibit xeriscaping or water-conserving natural landscaping.',
              },
              {
                state: 'California',
                law: 'California AB 2416 (2014)',
                summary: 'HOAs cannot fine homeowners for drought-tolerant landscaping installed in response to a water shortage emergency. Several California municipalities extend broader native plant protections.',
              },
              {
                state: 'Virginia',
                law: 'Virginia Code §55.1-1820',
                summary: 'Any HOA restriction on native plant gardens must be "reasonable" and cannot amount to a blanket prohibition.',
              },
              {
                state: 'Colorado',
                law: 'Senate Bill 23-178 (2023)',
                summary: 'HOAs cannot prohibit or unreasonably restrict grass alternatives, including native groundcovers and pollinator gardens.',
              },
              {
                state: 'Washington',
                law: 'RCW 64.38.057',
                summary: 'HOAs cannot prohibit drought-resistant plants or require grass in areas where alternatives meet maintenance standards.',
              },
              {
                state: 'Nevada',
                law: 'SB 140 (2023)',
                summary: 'HOAs cannot require installation or maintenance of grass in front yards. Native and drought-tolerant plantings are explicitly protected.',
              },
            ].map(({ state, law, summary }) => (
              <div key={state} className="action-card" style={{ marginBottom: '1rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{state}</strong>
                <em style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{law}</em>
                <p style={{ margin: '0.5rem 0 0' }}>{summary}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '1.5rem' }}>
            Not on this list? Check with your state&apos;s department of natural
            resources or a local native plant society —{' '}
            <a href="https://wildones.org" target="_blank" rel="noopener noreferrer">
              Wild Ones
            </a>{' '}
            maintains a current map of state-level protections and model ordinances.
          </p>
        </section>

        {/* ── Section 3: Five strategies ── */}
        <section aria-labelledby="strategies-heading">
          <h2 id="strategies-heading">Five strategies that work</h2>

          <div className="steps-list" style={{ marginTop: '1.5rem' }}>
            {[
              {
                n: 1,
                title: 'Request a variance before you plant',
                body: 'Most HOA boards have a variance process. Submit a written proposal with a sketch, a species list, and a maintenance plan. Framing it as a formal request — not an assumption — signals that you take the board seriously, and it creates a paper trail. Boards are more likely to say yes when asked in advance than to reverse a violation notice after the fact.',
              },
              {
                n: 2,
                title: 'Frame it as a "Managed Naturalized Area"',
                body: 'This language appears in landscaping guidelines from universities and municipalities. It communicates intent: this is not neglect, it is a deliberate, maintained planting. Include it in your proposal and your signage. A garden with a border, a mulched center, and a label that reads "Managed Naturalized Area — Monarch & Pollinator Habitat" looks nothing like an abandoned lot.',
              },
              {
                n: 3,
                title: 'Install a certified wildlife habitat marker',
                body: 'The National Wildlife Federation\'s Certified Wildlife Habitat program costs $20 and provides a metal garden sign. HOA boards respond differently to a sign that cites a national nonprofit than to an unexplained pile of native plants. You can register at nwf.org/garden-for-wildlife. Camp Monarch\'s Waystation certification is another option specifically for monarch habitat.',
              },
              {
                n: 4,
                title: 'Bring a neighbor',
                body: 'If you know a neighbor who is sympathetic — or who also wants to plant natives — attend the board meeting together. Boards weigh social dynamics. Two households presenting the same request is different from one household making a complaint. A petition with five signatures from your block is different from two.',
              },
              {
                n: 5,
                title: 'Propose a pilot in a back corner',
                body: 'If a front-yard native planting meets resistance, start where there\\'s less scrutiny: a side strip, a back fence line, the area under a tree where grass won\\'t grow. One established, beautiful native patch is your best argument for the next request. Let the results speak before you argue.',
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="step-item" style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.75rem' }}>
                <div
                  className="step-number"
                  style={{
                    flexShrink: 0,
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '50%',
                    background: 'var(--color-teal)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1rem',
                  }}
                >
                  {n}
                </div>
                <div>
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{title}</strong>
                  <p style={{ margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 4: Language to use ── */}
        <section aria-labelledby="language-heading">
          <h2 id="language-heading">Language that tends to land</h2>
          <p>
            HOA board members are your neighbors. They are not your adversaries.
            Most of them are volunteers managing a difficult job. The framing that
            works is not &quot;you can&apos;t stop me&quot; — it is &quot;here is something good, and
            here is why it fits our community standards.&quot;
          </p>

          <div style={{ background: 'var(--color-bg-alt)', borderRadius: '0.5rem', padding: '1.25rem 1.5rem', margin: '1.5rem 0' }}>
            <p style={{ fontStyle: 'italic', margin: 0 }}>
              &ldquo;I&apos;d like to propose a small native plant garden in [location]. The
              plants I&apos;ve selected are all native to [state], which means they
              require no irrigation after the first season and no pesticides at all.
              I&apos;ll maintain a clear border and keep it mulched. I&apos;m also planning
              to register it as a certified wildlife habitat with the National
              Wildlife Federation, which would put our neighborhood on their public
              map. I have a full species list and a sketch — would the board be
              willing to review it?&rdquo;
            </p>
          </div>

          <p>
            Note what that framing does: it names the maintenance commitment before
            they ask. It notes the certification. It invites review rather than
            announcing intention. It names a concrete benefit (NWF map listing) that
            is external to your personal preference.
          </p>
        </section>

        {/* ── Section 5: Design for approval ── */}
        <section aria-labelledby="design-heading">
          <h2 id="design-heading">Design so the garden says &ldquo;intentional&rdquo;</h2>
          <p>
            The aesthetic objection behind most HOA native-garden disputes is not
            &quot;these are native plants&quot; — it is &quot;this looks untended.&quot; A native planting
            that looks like a decision, rather than an abandonment, disarms most
            objections before they form.
          </p>

          <ul style={{ lineHeight: 1.8 }}>
            <li>
              <strong>Edge it clearly.</strong> A steel, stone, or brick border between
              your native patch and the lawn signals that someone made a choice here.
            </li>
            <li>
              <strong>Mulch the ground layer.</strong> Bare soil reads as incomplete.
              Two to three inches of wood chip mulch reads as maintained.
            </li>
            <li>
              <strong>Include at least one upright or flowering species.</strong>{' '}
              Purple coneflower, wild bergamot, or black-eyed Susan in the front row
              reads as &quot;garden.&quot; A mass of low groundcover alone can read as
              &quot;weeds.&quot;
            </li>
            <li>
              <strong>Post a small marker.</strong> A sign that names the planting —
              &quot;Native Pollinator Garden&quot; or &quot;NWF Certified Wildlife Habitat&quot; —
              contextualizes what a passerby sees.
            </li>
            <li>
              <strong>Maintain the edges.</strong> Trim where the patch meets the
              lawn, the sidewalk, and the fence line. A ragged edge signals
              inattention. A clean edge signals ownership.
            </li>
          </ul>
        </section>

        {/* ── Section 6: The larger picture ── */}
        <section aria-labelledby="bigger-heading">
          <h2 id="bigger-heading">One yard changes the conversation</h2>
          <p>
            In 2020, a study in the journal{' '}
            <em>Environmental Research Letters</em> found that residential yards
            collectively cover more than 40 million acres in the continental
            United States — more land than all national parks combined. The
            question of what happens in those yards is not a private aesthetic
            question. It is an ecological one.
          </p>
          <p>
            HOA neighborhoods contain a large share of that land. When one yard
            in an HOA gets approved for native plantings, it tends to create
            permission for the next. Boards that have seen one well-maintained
            native garden — and heard no complaints from neighbors — find it
            harder to reject the second application.
          </p>
          <p>
            You are not just making a garden. You are making the case. The
            documentation you create, the proposal you submit, the maintenance
            you keep up — all of it creates the evidence that the next person
            in your neighborhood will use.
          </p>
        </section>

        {/* ── CTA: next steps ── */}
        <section aria-labelledby="next-heading" style={{ marginTop: '2.5rem' }}>
          <h2 id="next-heading">Ready to move forward?</h2>
          <div className="cta-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.25rem' }}>
            <button
              className="cta-btn cta-btn--primary"
              onClick={() => onNavigate('habitat-transformation')}
            >
              Start: From Lawn to Habitat
            </button>
            <button
              className="cta-btn cta-btn--secondary"
              onClick={() => onNavigate('choose-a-plant')}
            >
              Choose Your Native Plants
            </button>
            <button
              className="cta-btn cta-btn--secondary"
              onClick={() => onNavigate('waystation-guide')}
            >
              Get Waystation Certified
            </button>
          </div>
        </section>

        {/* ── Sources ── */}
        <section aria-labelledby="sources-heading" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <h2 id="sources-heading" style={{ fontSize: '1rem' }}>Sources &amp; resources</h2>
          <ul style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>
            <li>
              Wild Ones — State laws protecting native plant gardens:{' '}
              <a href="https://wildones.org/wild-lawyers/" target="_blank" rel="noopener noreferrer">
                wildones.org/wild-lawyers
              </a>
            </li>
            <li>
              National Wildlife Federation — Certified Wildlife Habitat program:{' '}
              <a href="https://www.nwf.org/garden-for-wildlife" target="_blank" rel="noopener noreferrer">
                nwf.org/garden-for-wildlife
              </a>
            </li>
            <li>
              Tallamy, Douglas W. <em>Nature&apos;s Best Hope</em> (2019). Timber Press. —
              foundational research on residential habitat and native plant ecology.
            </li>
            <li>
              Narango, Desiree L., et al. &ldquo;Nonnative plants reduce population growth of
              an insectivorous bird.&rdquo; <em>PNAS</em> 115.45 (2018): 11549–11554. —
              96% of land birds raise young on insects; nonnative plants support almost none.
            </li>
            <li>
              Lerman, Susannah B., et al. &ldquo;Growing the urban grassland.&rdquo;{' '}
              <em>Environmental Research Letters</em> 15.6 (2020) — 40 million acres of
              residential turf in the continental US.
            </li>
          </ul>
        </section>

      </div>
    </div>
  )
}
