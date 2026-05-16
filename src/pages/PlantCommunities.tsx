import { useEffect } from 'react'
import { trackEvent } from '../lib/analytics'

interface PlantCommunitiesProps {
  onNavigate: (page: any) => void
}

export default function PlantCommunities({ onNavigate }: PlantCommunitiesProps) {
  useEffect(() => {
    trackEvent('page_view', 'plants-communities')
  }, [])

  const communities = [
    {
      name: 'The Milkweed + Nectar Combo',
      why: 'Monarchs need food at every stage. Milkweed for caterpillars, nectar for adults.',
      example:
        'Plant common milkweed (4 feet tall) with coneflowers and black-eyed Susans (2–3 feet). The milkweed shades the soil. The flowers provide nectar.',
      benefit: 'Monarchs have both food sources in one spot.',
    },
    {
      name: 'The Pollinator Guild',
      why: 'Native bees, butterflies, and hoverflies all need different bloom shapes and times.',
      example:
        'Combine early bloomers (phlox), mid-season bloomers (bee balm), and late bloomers (asters). Include flowers of different shapes: clusters (milkweed), discs (coneflowers), spikes (salvia).',
      benefit:
        'The yard supports dozens of pollinator species. Flowers stay pollinated. Caterpillars have more predators to eat the pests.',
    },
    {
      name: 'The Shelter Story',
      why: 'Insects need places to rest and overwinter. Dense plants provide shelter.',
      example:
        'Leave standing dead plants through winter. Add native shrubs (serviceberry, dogwood). Scatter some loose branches on the ground.',
      benefit: 'Insects survive winter in your yard. They emerge in spring ready to pollinate.',
    },
    {
      name: 'The Soil Builders',
      why: 'Native plants have deep roots that improve soil structure and water retention.',
      example:
        'Mix deep-rooted plants (milkweed, echinacea) with shallow-rooted plants (phlox). Add a native ground cover like sedges.',
      benefit: 'Soil improves over time. Plants need less water and fertilizer.',
    },
  ]

  return (
    <div className="page plants-page">
      <header className="page-header">
        <h1>Plant Communities</h1>
        <p className="page-subtitle">Plants that grow together create richer habitat than plants alone.</p>
      </header>

      <section className="content-section">
        <h2>What's a Plant Community?</h2>
        <p>
          A plant community is not a garden you design. It's an ecosystem where plants support each
          other and the insects that depend on them. Milkweed doesn't live alone in nature. It grows
          with coneflowers, native grasses, shrubs, and dozens of other plants. Together, they feed
          more insects than any single species could alone.
        </p>
        <p>
          When you plant a community, the ecosystem works. Pollinators thrive. Pests have predators.
          The soil improves. You see more life.
        </p>
      </section>

      <section className="content-section">
        <h2>Communities That Work</h2>
        {communities.map((community, idx) => (
          <div key={idx} className="community-item">
            <h3>{community.name}</h3>
            <p>
              <strong>Why:</strong> {community.why}
            </p>
            <p>
              <strong>Example:</strong> {community.example}
            </p>
            <p>
              <strong>Benefit:</strong> {community.benefit}
            </p>
          </div>
        ))}
      </section>

      <section className="content-section">
        <h2>How to Build a Community</h2>
        <ol>
          <li>
            <strong>Start with milkweed.</strong> It's the anchor. Everything else grows around it.
          </li>
          <li>
            <strong>Add nectar sources.</strong> Coneflowers, bee balm, asters, goldenrod. Choose
            plants that bloom at different times.
          </li>
          <li>
            <strong>Include host plants for other insects.</strong> Thistles for painted ladies.
            Parsnips for swallowtails. Grasses for skippers.
          </li>
          <li>
            <strong>Plant in groups.</strong> Don't scatter single plants. Plant 3–5 of the same
            species together. It's more visible to insects.
          </li>
          <li>
            <strong>Leave it alone.</strong> No pesticides. No excessive watering. No tidy edges.
            The mess is where insects live.
          </li>
        </ol>
      </section>

      <section className="content-section">
        <h2>What NOT to Plant in the Community</h2>
        <ul>
          <li>
            <strong>Non-native ornamentals.</strong> They don't produce the right seed or feed the
            right insects.
          </li>
          <li>
            <strong>Plants treated with neonicotinoid pesticides.</strong> These insecticides are
            toxic to monarch caterpillars. Buy untreated plants.
          </li>
          <li>
            <strong>Invasive species.</strong> They crowd out natives and destroy the ecosystem.
          </li>
        </ul>
      </section>

      <section className="next-section">
        <h2>Next</h2>
        <p>Ready to plant? Learn what trips people up and how to avoid it.</p>
        <div className="button-group">
          <button
            onClick={() => onNavigate('plants-common-mistakes')}
            className="btn btn-primary"
          >
            Common Mistakes
          </button>
          <button onClick={() => onNavigate('plants-library')} className="btn btn-secondary">
            Start Planting
          </button>
        </div>
      </section>
    </div>
  )
}
