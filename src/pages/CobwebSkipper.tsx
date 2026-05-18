import type { Page } from '../App'

interface CobwebSkipperProps {
  onNavigate: (page: Page) => void
}

export default function CobwebSkipper({ onNavigate }: CobwebSkipperProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/639962673/large.jpg"
          alt="Cobweb Skipper adult perched on a grass stem with wings open showing orange-brown upperwings with dark brown borders and scattered pale spots, Missouri April 2026"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: wildreturn&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/350723896" target="_blank" rel="noopener noreferrer">iNaturalist obs. 350723896</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies &amp; Moths</div>
        <h1>A male Cobweb Skipper emerges in late April and spends his two weeks as an adult perching at the tip of a native bunchgrass stem — the first grass skipper of spring, flying while milkweed is still underground and goldenrod is still a rosette.</h1>
        <p className="hero__lead">
          The Cobweb Skipper (<em>Hesperia metea</em>) is a small, fast-flying butterfly with
          orange-brown upperwings and a pale hindwing underside marked with a loose web of white
          lines — the pattern that names the species. Adults emerge in late April and are gone by
          early June, a flight window as narrow as Leonard's Skipper's but positioned at the
          opposite end of the season.
        </p>
        <p className="hero__lead">
          Females lay eggs on native bunchgrass blades in spring. The larvae that hatch feed
          briefly, then pull together a silk shelter at the base of the grass clump and stay there
          through summer, fall, and winter before pupating the following April. The grass clump is
          the egg site, the food, the overwintering shelter, and the pupation chamber — in sequence,
          across nearly an entire year, all in the same crown.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="cobweb-marking-heading">
          <h2 id="cobweb-marking-heading">A loose web of white lines across the hindwing underside — the mark that separates Cobweb Skipper from every other orange-brown skipper flying in its spring window</h2>
          <p>
            Most orange skippers in the eastern United States show a curved row of pale spots on
            the hindwing underside — a clean arc, evenly spaced. Cobweb Skipper does not. The
            white marks spread across the hindwing in an irregular network, covering more of the
            wing surface and blending into the pale tan-to-olive ground color. On a perched adult
            with wings folded, the pattern is visible immediately: it looks washed or webbed
            rather than spotted.
          </p>
          <p>
            The upperwing pattern also narrows the identification: the forewing has a scattering
            of pale spots against orange-brown, the wing borders are darker, and the overall look
            is more checkered and contrasting than similarly-sized skippers in April. But the
            hindwing underside is the one mark that settles it — if the hindwing shows a fine
            white network rather than a neat arc of spots, no other spring Hesperia in the eastern
            range matches it.
          </p>
        </section>

        <figure className="species-content-photo">
          <img
            src="https://inaturalist-open-data.s3.amazonaws.com/photos/639962539/large.jpg"
            alt="Cobweb Skipper adult perched with wings partially spread showing the orange-brown forewing and pale hindwing with the irregular white cobweb pattern visible underneath, Missouri April 2026"
            loading="lazy"
          />
          <figcaption>
            Cobweb Skipper in April with wings partially open: the pale hindwing underside shows
            the irregular white network that gives the species its name. The pattern covers more
            of the hindwing surface than the curved spot-arcs found on other Hesperia skippers
            in the same range.
            <span className="photo-credit"> Photo: wildreturn&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/350723895" target="_blank" rel="noopener noreferrer">iNaturalist obs. 350723895</a>&nbsp;· CC0 / No Rights Reserved</span>
          </figcaption>
        </figure>

        <section aria-labelledby="perch-heading">
          <h2 id="perch-heading">The same grass stem tip a Leonard's Skipper perched on in September becomes a Cobweb Skipper's territory in April — seven months, two species, one bunchgrass clump</h2>
          <p>
            Male Cobweb Skippers use the same perch-and-wait behavior as Leonard's Skipper: find
            the highest available point in a native grass area, hold it, and intercept females
            while driving off rival males. In a yard with Prairie Dropseed or Little Bluestem,
            that point is the arching seed panicle tip of the same grass clump that a Leonard's
            Skipper defended in late August and September.
          </p>
          <p>
            The Cobweb Skipper flight window opens in late April — when Prairie Dropseed is just
            pushing new growth from its crown, when goldenrod is still a basal rosette, and when
            most spring butterflies have not yet emerged. A male Cobweb Skipper is patrolling a
            native grass patch and defending stems before a homeowner has put in a single
            vegetable transplant for the season.
          </p>
          <p>
            Early-spring wildflowers supply adult nectar during the flight window. Golden
            Alexanders (<em>Zizia aurea</em>), spring cress (<em>Cardamine</em> spp.), and
            flowering shrubs like wild plum open in April and early May, overlapping with the
            Cobweb Skipper's two-week adult life. A yard with native grass and a few early-blooming
            forbs gives a male everything he needs within a single patrol range.
          </p>
        </section>

        <section aria-labelledby="lifecycle-heading">
          <h2 id="lifecycle-heading">The egg lands on a grass blade in April; the larva drops to the crown, forms a silk shelter, and stays there for ten months before the adult emerges from the same spot the following spring</h2>
          <p>
            After mating, a female Cobweb Skipper moves through native grass and lays single eggs
            on the blades of Little Bluestem (<em>Schizachyrium scoparium</em>), Prairie Dropseed
            (<em>Sporobolus heterolepis</em>), and other native bunchgrasses. The egg is placed on
            the blade surface, not in soil. The larva that hatches feeds briefly on the grass, then
            descends to the crown of the clump, forms a silk shelter, and enters diapause — a
            physiological pause triggered by decreasing day length and temperature. It stays in
            that shelter through the growing season and the following winter, resuming feeding in
            early spring before pupating in April.
          </p>
          <p>
            The larva spends more than ten months in the same grass clump: from April hatch to the
            following April's pupation. A grass clump cut to the soil in fall removes the shelter
            the larva needs through winter. A clump cut in early spring — before mid-April —
            removes the pupating larva directly. Leaving Prairie Dropseed and Little Bluestem
            standing until after mid-April protects both the overwintering larvae through winter
            and the pupae through early spring.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three conditions that make a yard usable for Cobweb Skipper</h2>
          <figure className="species-content-photo">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/639963029/large.jpg"
              alt="Cobweb Skipper adult perched at the tip of a native grass stem in April, wings spread showing orange-brown upperwings, Missouri April 2026"
              loading="lazy"
            />
            <figcaption>
              A male Cobweb Skipper perched at the tip of a native grass stem in late April: the
              highest available point in the patch becomes his territory. In a yard with Prairie
              Dropseed or Little Bluestem, that perch is available — and the crown of the same
              clump held his larval shelter for the previous ten months.
              <span className="photo-credit"> Photo: wildreturn&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/350723899" target="_blank" rel="noopener noreferrer">iNaturalist obs. 350723899</a>&nbsp;· CC0 / No Rights Reserved</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant Little Bluestem or Prairie Dropseed in full sun, in dry to average soil.</strong>{' '}
              Both are documented host grasses. A single mature clump provides the blade for
              egg-laying, the crown for larval overwintering, and the stem tip for male perching.
              Both grasses establish from plugs within two to three growing seasons and do not
              spread by runners.
            </li>
            <li>
              <strong>Include an early-blooming native wildflower within the same planting area.</strong>{' '}
              Golden Alexanders (<em>Zizia aurea</em>) or spring cress (<em>Cardamine</em> spp.)
              bloom in April and early May, overlapping with the Cobweb Skipper adult flight
              window. The butterfly needs a nectar source within its patrol range while searching
              for mates and egg-laying sites.
            </li>
            <li>
              <strong>Leave native grass clumps standing until after mid-April each year.</strong>{' '}
              The larva overwinters in a silk shelter at the crown and pupates in early to
              mid-April. Cutting Prairie Dropseed or Little Bluestem before mid-April removes
              the pupating larva. Cutting in late April or early May — once adults may already
              have emerged — removes only the previous year's dead growth from the clump.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('prairie-dropseed')}>
              <span className="neighbor-name">Prairie Dropseed</span>
              <span className="neighbor-note">Host grass; females lay eggs on blades and larvae overwinter in a silk shelter at the crown of the same clump for ten months</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('little-bluestem')}>
              <span className="neighbor-name">Little Bluestem</span>
              <span className="neighbor-note">Fellow host grass; the same bunchgrass whose copper-red fall color holds through January while Cobweb Skipper larvae overwinter in the crown below the blades that turned red above them</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('leonards-skipper')}>
              <span className="neighbor-name">Leonard's Skipper</span>
              <span className="neighbor-note">Uses the same native grass stems in late August that Cobweb Skipper used in April — one bunchgrass clump hosts both skippers across the same calendar year</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('golden-alexanders')}>
              <span className="neighbor-name">Golden Alexanders</span>
              <span className="neighbor-note">Blooms in April and May, overlapping with the Cobweb Skipper adult flight window and supplying nectar during the male's two-week patrol period</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('great-spangled-fritillary')}>
              <span className="neighbor-name">Great Spangled Fritillary</span>
              <span className="neighbor-note">Another single-brood butterfly tied to a specific plant — violets — with a lifecycle timed to a narrow seasonal window most gardeners wouldn't expect</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
