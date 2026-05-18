import type { Page } from '../App'

interface WildBergamotProps {
  onNavigate: (page: Page) => void
}

export default function WildBergamot({ onNavigate }: WildBergamotProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/55366263/large.jpg"
          alt="Wild bergamot in bloom — lavender flower heads with tubular florets clustered at the top of square stems, photographed in DeKalb County, Illinois"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: dekalbcountyfpd&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/35133668" target="_blank" rel="noopener noreferrer">iNaturalist obs. 35133668</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Anthophora montana collects wild bergamot pollen, packs it into a burrow cell, lays one egg, and seals it.<br />Her larva eats that pollen and nothing else.</h1>
        <p className="hero__lead">
          Most bees are generalists — they visit dozens of flower species and provision their
          nests with mixed pollen. Anthophora montana is not. She is a specialist on
          <em> Monarda</em> species. When she builds a nest cell, she fills it with wild
          bergamot pollen, and only wild bergamot pollen. If no <em>Monarda</em> plants are
          blooming within her foraging range during her brief nesting window in July and
          August, she cannot complete a brood.
        </p>
        <p className="hero__lead">
          Wild bergamot (<em>Monarda fistulosa</em>) is a native perennial wildflower that
          blooms across most of the eastern and central United States from late June through
          August. A single plant produces dozens of flower heads on square stems one to
          three feet tall, each head a cluster of tubular lavender florets. The flowers
          open over several weeks, not all at once, extending the bloom window through most
          of the summer.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="anthophora-heading">
          <h2 id="anthophora-heading">A nest cell packed with bergamot pollen, one egg, then sealed</h2>
          <p>
            Female <em>Anthophora montana</em> dig nesting burrows in loose, well-drained
            soil — sandy banks, bare patches, south-facing slopes. Each burrow branches
            into individual brood cells. The female stocks each cell with a pollen ball,
            deposits one egg on top, then walls off the cell with a plug of soil and
            secretions. The larva hatches, eats the pollen ball, pupates inside the cell,
            and emerges the following summer.
          </p>
          <p>
            The pollen ball is built entirely from <em>Monarda</em> pollen. Researchers
            studying pollen specialization in <em>Anthophora</em> have documented that
            females offered only non-<em>Monarda</em> pollen do not provision cells —
            they wait. If the bloom ends before they finish their brood cycle, those cells
            remain empty. The bee's nesting window overlaps almost exactly with wild
            bergamot's bloom window: late June through mid-August.
          </p>
        </section>

        <section aria-labelledby="clearwing-heading">
          <h2 id="clearwing-heading">A moth shaped like a hummingbird — same flowers, same weeks</h2>
          <p>
            Hummingbird clearwing moths (<em>Hemaris thysbe</em>) visit wild bergamot's
            tubular florets throughout July and August. The moth is about an inch and a half
            long, holds its wings clear like glass after the first flight of the season
            wears off the scales, and hovers in front of flowers the way a ruby-throated
            hummingbird does. From ten feet away the resemblance is close enough that most
            people stop and look twice.
          </p>
          <p>
            The clearwing moth's proboscis reaches down into tubular flowers that shorter-tongued
            bees cannot access. Wild bergamot's florets are about an inch long — at the
            longer end of what generalist bees can reach. The moth reaches the nectar
            without difficulty and moves methodically from head to head across a blooming
            plant, often pausing for two or three seconds at each floret cluster before
            shifting.
          </p>
        </section>

        <section aria-labelledby="monarch-heading">
          <h2 id="monarch-heading">Monarchs visit in June and July, when breeding adults need nectar</h2>
          <p>
            Monarchs reach the northern half of their breeding range — the Midwest, Great
            Lakes, and Northeast — in late May and June. Males and females spend the summer
            breeding, laying eggs on milkweed, and feeding continuously on nectar sources
            near their breeding territories. Wild bergamot blooms during this period and
            is one of several native wildflowers monarchs use for nectar during the breeding
            season.
          </p>
          <p>
            By the time wild bergamot finishes in August, the late-summer and fall nectar
            sources — goldenrod and New England aster — are opening. A yard with bergamot
            alongside those later bloomers provides nectar from June through October: the
            full window from breeding season through migration departure.
          </p>
        </section>

        <section aria-labelledby="growing-heading">
          <h2 id="growing-heading">Dry to medium soil, full sun, spreads slowly by rhizome</h2>
          <p>
            Wild bergamot grows in USDA zones 3 through 9. It tolerates dry soil and
            summer drought once established — better than many prairie wildflowers. It does
            not do well in consistently wet or poorly drained sites, where it can develop
            powdery mildew on the leaves. In average garden soil with reasonable drainage,
            established plants are long-lived and low-maintenance.
          </p>
          <p>
            The plant spreads by rhizome and forms expanding clumps over time. In typical
            garden conditions, a single plant grows to a clump about 18 inches across
            within three or four years. It does not spread aggressively in the way that
            bee balm (<em>Monarda didyma</em>) does in moist, rich soil. Dividing
            the clump every four or five years keeps the plant vigorous.
          </p>
          <p>
            Native plant nurseries and native plant sales carry wild bergamot as plugs or
            one-gallon containers in spring and early summer. Plants purchased in May and
            June will establish root systems during the summer and typically bloom their
            first full season the following year, sometimes lightly in the year of planting
            if the root system is mature enough.
          </p>
        </section>

        <section aria-labelledby="context-heading">
          <h2 id="context-heading">Wild bergamot alongside milkweed, goldenrod, and aster</h2>
          <p>
            Wild bergamot fills the July-to-August bloom window between the early summer
            wildflowers and the late-season goldenrod and aster. Planted alongside common
            milkweed — which blooms in June and July — it extends the productive season
            for both monarchs and native bees through the heart of summer. Adding Canada
            goldenrod and New England aster after that continues the sequence through
            October.
          </p>
          <p>
            For <em>Anthophora montana</em>, the question comes down to one plant: without wild
            bergamot in the neighborhood, she does not nest there. With it, she can
            complete her brood cycle within a patch of garden-size habitat. She is
            not asking for a large preserve — she is asking for one blooming plant within
            a few hundred meters of a place to dig.
          </p>
        </section>
      </div>
    </>
  )
}
