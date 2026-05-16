import { useEffect } from 'react'
import { trackEvent } from '../lib/analytics'

interface CommonMistakesProps {
  onNavigate: (page: any) => void
}

export default function CommonMistakes({ onNavigate }: CommonMistakesProps) {
  useEffect(() => {
    trackEvent('page_view', 'plants-common-mistakes')
  }, [])

  const mistakes = [
    {
      mistake: 'Planting non-native plants and calling them "milkweed"',
      whatHappens: 'Monarch caterpillars won\'t eat them. They starve.',
      fix: 'Buy from native plant nurseries. Check the scientific name: it must say Asclepias. If it doesn\'t, it\'s not milkweed.',
      specific:
        'Butterfly weed (Asclepias tuberosa) works. Asclepias milkweed does not. Showy milkweed (Asclepias speciosa) works. Seeds from big-box retailers are often wrong.',
    },
    {
      mistake: 'Buying plants treated with neonicotinoids',
      whatHappens:
        'The insecticide kills monarch caterpillars. You plant what you think will help, and it kills them.',
      fix: 'Ask the nursery: "Are these plants treated with neonicotinoids?" If they say yes or don\'t know, go elsewhere. Buy untreated plants.',
      specific:
        'Many garden centers treat plants with systemic insecticides for shelf life. Local native plant nurseries usually don\'t. Ask first.',
    },
    {
      mistake: 'Planting in shade',
      whatHappens:
        'Native plants need sunlight. In shade, they grow weak, produce less nectar, and aren\'t as visible to insects.',
      fix: 'Plant in at least 6 hours of direct sun. Most native plants prefer full sun (8+ hours).',
      specific:
        'If you only have shade, choose shade-tolerant plants: phlox, coral bells, hellebores. Or prune back trees to let more light in.',
    },
    {
      mistake: 'Mowing milkweed down in spring',
      whatHappens:
        'The plant takes weeks to grow back. Monarchs arrive before the leaves return. Caterpillars starve.',
      fix: 'Don\'t mow milkweed. Mark it so you remember it\'s there. Leave it standing all season.',
      specific:
        'Spring mowing is a huge killer. Monarchs lay eggs early. If the milkweed is bare when they arrive, there\'s nowhere to lay.',
    },
    {
      mistake: 'Using herbicides on "weeds"',
      whatHappens:
        'You kill the milkweed (which looks weedy to some people) and other native plants.',
      fix: 'Native plants don\'t look like sterile lawns. They look wild. That\'s correct. Let them grow.',
      specific:
        'Common milkweed spreads underground. To some people, this looks invasive. It\'s not. It\'s doing what milkweed does. Let it.',
    },
    {
      mistake: 'Planting a monoculture (all one species)',
      whatHappens:
        'Fewer insects visit. The ecosystem is fragile. One pest wipes out all your plants.',
      fix: 'Plant 3–5 species minimum. Vary bloom times, heights, and plant shapes.',
      specific:
        'A milkweed patch is good. A milkweed patch surrounded by coneflowers, phlox, and asters is much better.',
    },
    {
      mistake: 'Cutting back dead plants in late fall',
      whatHappens:
        'Insects that overwinter in hollow stems die. You lose the insects that would emerge in spring.',
      fix: 'Leave dead plants standing through winter. Cut them back in early spring (March).',
      specific:
        'Bees, lacewings, and other insects use those hollow stems as winter shelter. Don\'t clean up.',
    },
    {
      mistake: 'Planting too close together and expecting them to spread',
      whatHappens:
        'Plants compete for water and nutrients. Most die before they mature. The ones that survive are crowded.',
      fix: 'Space plants according to their mature size. Usually 2–3 feet apart for herbaceous plants.',
      specific:
        'Read the tag. If it says "mature width 2 feet," plant 2.5 feet apart. They\'ll fill in within 2 seasons.',
    },
  ]

  return (
    <div className="page plants-page">
      <header className="page-header">
        <h1>Common Mistakes</h1>
        <p className="page-subtitle">
          What trips people up when planting for monarchs, and how to avoid it.
        </p>
      </header>

      <section className="content-section">
        <p>
          Even well-intentioned plant choices often backfire. Here are the biggest mistakes we see.
          Learn them now, and you'll save yourself months of wasted effort.
        </p>
      </section>

      {mistakes.map((item, idx) => (
        <section key={idx} className="mistake-section">
          <h2>{item.mistake}</h2>
          <p>
            <strong>What happens:</strong> {item.whatHappens}
          </p>
          <p>
            <strong>Fix:</strong> {item.fix}
          </p>
          <p>
            <strong>Specific example:</strong> {item.specific}
          </p>
        </section>
      ))}

      <section className="content-section">
        <h2>The Good News</h2>
        <p>
          Native plants are resilient. They've survived for thousands of years. If you make a
          mistake, you can usually fix it. Plant too close? Thin them out. Used a treated plant?
          Replace it. Mowed something you shouldn't have? It'll regrow.
        </p>
        <p>
          The ecosystem is forgiving. You're on the right side of this. Monarchs need you. Small
          mistakes don't erase the help you're providing.
        </p>
      </section>

      <section className="next-section">
        <h2>Ready?</h2>
        <p>Now it's time to choose plants. Use the library to find what grows in your area.</p>
        <button onClick={() => onNavigate('plants-library')} className="btn btn-primary">
          Browse Plant Library
        </button>
      </section>
    </div>
  )
}
