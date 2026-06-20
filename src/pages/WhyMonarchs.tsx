import type { Page } from '../App'
import { ColumnChart, LineChart } from '../components/ChartKit'

interface WhyMonarchsProps {
  onNavigate: (page: Page) => void
}

// Eastern monarch overwintering area in Mexico, hectares, by the year each winter
// season began. The census began in winter 1993-1994; there is no reliable
// earlier record. WWF Mexico / CONANP, via Monarch Joint Venture.
const MONARCH: [number, number][] = [
  [1994, 7.81], [1995, 12.61], [1996, 18.19], [1997, 5.77], [1998, 5.56], [1999, 9.05],
  [2000, 2.83], [2001, 9.36], [2002, 7.54], [2003, 11.12], [2004, 2.19], [2005, 5.91],
  [2006, 6.87], [2007, 4.61], [2008, 5.06], [2009, 1.92], [2010, 4.02], [2011, 2.89],
  [2012, 1.19], [2013, 0.67], [2014, 1.13], [2015, 4.01], [2016, 2.91], [2017, 2.48],
  [2018, 6.05], [2019, 2.83], [2020, 2.10], [2021, 2.84], [2022, 2.21], [2023, 0.90],
  [2024, 1.79], [2025, 2.93],
]

// Global Living Planet Index, average size of monitored wildlife populations,
// 1970 = 100. WWF / ZSL, via Our World in Data.
const LPI: [number, number][] = [
  [1970, 100], [1971, 99.41], [1972, 98.14], [1973, 96.62], [1974, 94.81], [1975, 92.66],
  [1976, 89.99], [1977, 86.37], [1978, 82.87], [1979, 80.26], [1980, 78.43], [1981, 77.01],
  [1982, 74.73], [1983, 72.18], [1984, 69.71], [1985, 67.67], [1986, 66.17], [1987, 64.42],
  [1988, 62.68], [1989, 61.36], [1990, 60.09], [1991, 58.82], [1992, 57.28], [1993, 55.24],
  [1994, 53.25], [1995, 51.15], [1996, 50.25], [1997, 48.92], [1998, 47.50], [1999, 45.68],
  [2000, 44.37], [2001, 43.13], [2002, 42.01], [2003, 40.93], [2004, 39.98], [2005, 38.87],
  [2006, 37.45], [2007, 35.95], [2008, 34.36], [2009, 32.71], [2010, 31.10], [2011, 29.60],
  [2012, 28.67], [2013, 28.41], [2014, 28.50], [2015, 28.57], [2016, 27.79], [2017, 27.37],
  [2018, 27.10], [2019, 27.33], [2020, 27.13],
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
          <ColumnChart
            title="Monarch population in Mexico, 1994 to 2026"
            subtitle="Down about 80% from the mid-1990s peak"
            xLabel="Winter season (start year)"
            yLabel="Hectares occupied"
            data={MONARCH.map(([year, v]) => ({ label: year, value: v }))}
            xTickEvery={5}
            yMax={20}
            referenceLines={[{ y: 6, label: 'stable population needs about 6 ha' }]}
            source={{ text: 'WWF Mexico and CONANP annual census, via Monarch Joint Venture', href: 'https://monarchjointventure.org/blog/eastern-monarch-overwintering-population-increases-from-last-year' }}
            ariaLabel="Yearly monarch overwintering area, falling from about 18 hectares in the mid 1990s to roughly 1 to 3 hectares in recent years, below the 6 hectare stable line."
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
          <LineChart
            title="Wildlife worldwide, 1970 to 2020"
            subtitle="Living Planet Index: average size of monitored populations, 1970 = 100"
            xLabel="Year"
            yLabel="Index (1970 = 100)"
            series={[{ name: 'Living Planet Index', points: LPI }]}
            xTicks={[1970, 1980, 1990, 2000, 2010, 2020]}
            yMax={100}
            area
            source={{ text: 'WWF and ZSL Living Planet Index, via Our World in Data', href: 'https://ourworldindata.org/grapher/global-living-planet-index' }}
            ariaLabel="The global Living Planet Index falls steadily from 100 in 1970 to about 27 in 2020, an average decline of 73% in monitored wildlife populations."
          />

          <div className="why-facts">
            <div className="fact-card"><div className="fact-card__number">3 billion</div><div className="fact-card__label">North American birds lost since 1970 (Rosenberg et al., 2019)</div></div>
            <div className="fact-card"><div className="fact-card__number">over 75%</div><div className="fact-card__label">Flying-insect biomass lost over 27 years in one long study (Hallmann et al., 2017)</div></div>
          </div>

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
          <p>Monarch overwintering area: <a href="https://monarchjointventure.org/blog/eastern-monarch-overwintering-population-increases-from-last-year" target="_blank" rel="noreferrer">WWF Mexico / CONANP, via Monarch Joint Venture</a>. Western counts and ESA proposal: <a href="https://www.xerces.org/press/western-monarch-numbers-remain-at-historic-low" target="_blank" rel="noreferrer">Xerces Society</a>, <a href="https://www.fws.gov/press-release/2024-12/monarch-butterfly-proposed-endangered-species-act-protection" target="_blank" rel="noreferrer">USFWS, Dec 2024</a>.</p>
          <p>Wildlife index: <a href="https://ourworldindata.org/grapher/global-living-planet-index" target="_blank" rel="noreferrer">WWF and ZSL Living Planet Index, via Our World in Data</a>. Birds: <a href="https://www.science.org/doi/10.1126/science.aaw1313" target="_blank" rel="noreferrer">Rosenberg et al., Science, 2019</a>. Insects: <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0185809" target="_blank" rel="noreferrer">Hallmann et al., PLOS ONE, 2017</a>.</p>
          <p>Photos: meadowlark by Rhododendrites (CC BY-SA 4.0); bumblebee and monarch by USFWS (public domain); header via Pexels.</p>
        </section>
      </div>
    </div>
  )
}
