import type { Page } from '../App'
import { LineChart, BarChart } from '../components/ChartKit'

interface WhyMonarchsProps {
  onNavigate: (page: Page) => void
}

// Eastern monarch overwintering area in Mexico, hectares, by the year each winter
// season began. WWF Mexico / CONANP annual census (MBBR 1993 to 2004).
const MONARCH: [number, number][] = [
  [1994, 7.81], [1995, 12.61], [1996, 18.19], [1997, 5.77], [1998, 5.56], [1999, 9.05],
  [2000, 2.83], [2001, 9.36], [2002, 7.54], [2003, 11.12], [2004, 2.19], [2005, 5.91],
  [2006, 6.87], [2007, 4.61], [2008, 5.06], [2009, 1.92], [2010, 4.02], [2011, 2.89],
  [2012, 1.19], [2013, 0.67], [2014, 1.13], [2015, 4.01], [2016, 2.91], [2017, 2.48],
  [2018, 6.05], [2019, 2.83], [2020, 2.10], [2021, 2.84], [2022, 2.21], [2023, 0.90],
  [2024, 1.79], [2025, 2.93],
]

export default function WhyMonarchs({ onNavigate }: WhyMonarchsProps) {
  return (
    <div className="why">
      <header
        className="hub-hero"
        role="img"
        aria-label="A monarch butterfly on native wildflowers"
        style={{ backgroundImage: 'url(/monarch-hero-poster.jpg)' }}
      >
        <div className="hub-hero__scrim" aria-hidden="true" />
        <h1 className="hub-hero__title">Why we need heroes</h1>
      </header>

      <div className="page">
        <section aria-labelledby="why-monarch">
          <h2 id="why-monarch">The monarch</h2>
          <LineChart
            title="Monarch population in Mexico, 1994 to 2026"
            xLabel="Year (start of winter season)"
            yLabel="Hectares of forest occupied"
            series={[{ name: 'Overwintering area', points: MONARCH }]}
            xTicks={[1994, 2004, 2014, 2024]}
            yMax={20}
            area
            referenceLines={[{ y: 6, label: 'about 6 ha needed for a stable population' }]}
            source={{ text: 'WWF Mexico and CONANP annual census, via Monarch Joint Venture', href: 'https://monarchjointventure.org/blog/eastern-monarch-overwintering-population-increases-from-last-year' }}
            ariaLabel="Eastern monarch overwintering area falls from about 18 hectares in the mid 1990s to under 1 hectare in recent years, far below the 6 hectares needed for a stable population."
          />

          <div className="why-facts">
            <div className="fact-card"><div className="fact-card__number">over 80%</div><div className="fact-card__label">Eastern monarch decline since the 1990s (USFWS, Xerces)</div></div>
            <div className="fact-card"><div className="fact-card__number">1,901</div><div className="fact-card__label">Western monarchs counted in 2020, down from millions in the 1980s (Xerces)</div></div>
            <div className="fact-card"><div className="fact-card__number">Dec 2024</div><div className="fact-card__label">Proposed as a threatened species under the Endangered Species Act (USFWS)</div></div>
          </div>

          <img className="why-photo" src="/hub-season.jpg" alt="A monarch butterfly feeding on milkweed" loading="lazy" width={1100} height={720} />
        </section>

        <section aria-labelledby="why-wildlife">
          <h2 id="why-wildlife">Other wildlife is declining too</h2>
          <BarChart
            title="How far some populations have fallen"
            unit="% lost"
            bars={[
              { label: 'Wildlife worldwide', value: 73, caption: 'Average drop in monitored populations, 1970 to 2020' },
              { label: 'North American birds', value: 29, caption: '3 billion birds gone since 1970' },
              { label: 'Flying insects', value: 75, caption: 'Biomass lost over 27 years in one long study' },
            ]}
            source={{ text: 'WWF Living Planet Report 2024; Rosenberg et al. 2019; Hallmann et al. 2017' }}
            ariaLabel="Wildlife worldwide down 73 percent, North American birds down 29 percent, flying insect biomass down more than 75 percent."
          />

          <div className="why-media">
            <figure className="why-media__item">
              <img src="/why-bird.jpg" alt="An eastern meadowlark standing in grass" loading="lazy" width={1100} height={730} />
              <figcaption>Grassland birds are among the steepest losses.</figcaption>
            </figure>
            <figure className="why-media__item">
              <img src="/hub-find.jpg" alt="A bumblebee on a purple coneflower" loading="lazy" width={1100} height={780} />
              <figcaption>Insects pollinate most wild plants and feed most birds.</figcaption>
            </figure>
          </div>
        </section>

        <div className="action-panel">
          <p style={{ marginTop: 0 }}>
            Almost all of this traces back to lost habitat. Habitat can be rebuilt, and most of the land it needs is where we live.
          </p>
          <button className="hero__cta" onClick={() => onNavigate('habitat-hero')}>Be a habitat hero →</button>
        </div>

        <section className="cite-list" aria-label="Sources">
          <p>Western monarch counts: <a href="https://www.xerces.org/press/western-monarch-numbers-remain-at-historic-low" target="_blank" rel="noreferrer">Xerces Society</a>. ESA proposal: <a href="https://www.fws.gov/press-release/2024-12/monarch-butterfly-proposed-endangered-species-act-protection" target="_blank" rel="noreferrer">U.S. Fish and Wildlife Service, December 2024</a>.</p>
          <p>Birds: <a href="https://www.science.org/doi/10.1126/science.aaw1313" target="_blank" rel="noreferrer">Rosenberg et al., Science, 2019</a>. Insects: <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0185809" target="_blank" rel="noreferrer">Hallmann et al., PLOS ONE, 2017</a>. Wildlife overall: <a href="https://www.worldwildlife.org/publications/2024-living-planet-report" target="_blank" rel="noreferrer">WWF Living Planet Report 2024</a>.</p>
          <p>Photos: meadowlark by Rhododendrites (CC BY-SA 4.0); bumblebee and monarch by USFWS (public domain); header via Pexels.</p>
        </section>
      </div>
    </div>
  )
}
