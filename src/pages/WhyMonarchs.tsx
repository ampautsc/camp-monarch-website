import type { Page } from '../App'

interface WhyMonarchsProps {
  onNavigate: (page: Page) => void
}

// Eastern monarch overwintering area in Mexico, in hectares, by the year each
// winter season began. Source: WWF Mexico / CONANP annual census (MBBR 1993 to 2004).
const MONARCH: [string, number][] = [
  ['1994', 7.81], ['1995', 12.61], ['1996', 18.19], ['1997', 5.77], ['1998', 5.56], ['1999', 9.05],
  ['2000', 2.83], ['2001', 9.36], ['2002', 7.54], ['2003', 11.12], ['2004', 2.19], ['2005', 5.91],
  ['2006', 6.87], ['2007', 4.61], ['2008', 5.06], ['2009', 1.92], ['2010', 4.02], ['2011', 2.89],
  ['2012', 1.19], ['2013', 0.67], ['2014', 1.13], ['2015', 4.01], ['2016', 2.91], ['2017', 2.48],
  ['2018', 6.05], ['2019', 2.83], ['2020', 2.10], ['2021', 2.84], ['2022', 2.21], ['2023', 0.90],
  ['2024', 1.79], ['2025', 2.93],
]

const VW = 720, VH = 340, ML = 44, MR = 14, MT = 16, MB = 30
const PW = VW - ML - MR, PH = VH - MT - MB, VMAX = 19
const cx = (i: number) => ML + (i / (MONARCH.length - 1)) * PW
const cy = (v: number) => MT + (1 - v / VMAX) * PH
const linePts = MONARCH.map((d, i) => `${cx(i).toFixed(1)},${cy(d[1]).toFixed(1)}`).join(' ')
const areaPts = `${cx(0).toFixed(1)},${cy(0).toFixed(1)} ${linePts} ${cx(MONARCH.length - 1).toFixed(1)},${cy(0).toFixed(1)}`

type Decline = { label: string; pct: number; caption: string }
const DECLINES: Decline[] = [
  { label: 'Wildlife worldwide', pct: 73, caption: 'Average drop in monitored populations, 1970 to 2020' },
  { label: 'North American birds', pct: 29, caption: '3 billion birds gone since 1970' },
  { label: 'Flying insects', pct: 75, caption: 'Biomass lost over 27 years in one long study' },
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
          <figure className="why-chart">
            <figcaption className="why-chart__title">Monarch population in Mexico, 1994 to 2026</figcaption>
            <svg
              viewBox={`0 0 ${VW} ${VH}`}
              className="why-chart__svg"
              role="img"
              aria-label="Line chart of the eastern monarch overwintering area in hectares, falling from about 18 hectares in the mid 1990s to under 1 hectare in recent years, far below the 6 hectares needed for a stable population."
            >
              {[0, 5, 10, 15].map(v => (
                <g key={v}>
                  <line x1={ML} y1={cy(v)} x2={VW - MR} y2={cy(v)} stroke="#e2d5c3" strokeWidth="1" />
                  <text x={ML - 6} y={cy(v) + 4} textAnchor="end" fontSize="11" fill="#888780">{v}</text>
                </g>
              ))}
              <polygon points={areaPts} fill="rgba(45,90,39,0.12)" />
              <polyline points={linePts} fill="none" stroke="#2d5a27" strokeWidth="2.5" />
              <line x1={ML} y1={cy(6)} x2={VW - MR} y2={cy(6)} stroke="#bf6b1e" strokeWidth="1.5" strokeDasharray="5 4" />
              <text x={VW - MR} y={cy(6) - 6} textAnchor="end" fontSize="11" fill="#8a5a12">about 6 ha needed for a stable population</text>
              {[0, 10, 20, 30].map(i => (
                <text key={i} x={cx(i)} y={VH - 9} textAnchor="middle" fontSize="11" fill="#888780">{MONARCH[i][0]}</text>
              ))}
              <text x={ML - 6} y={MT - 3} textAnchor="end" fontSize="11" fill="#888780">ha</text>
            </svg>
          </figure>
          <p className="why-source">Source: WWF Mexico and CONANP annual overwintering census.</p>

          <div className="why-facts">
            <div className="fact-card"><div className="fact-card__number">over 80%</div><div className="fact-card__label">Eastern monarch decline since the 1990s (USFWS, Xerces)</div></div>
            <div className="fact-card"><div className="fact-card__number">1,901</div><div className="fact-card__label">Western monarchs counted in 2020, down from millions in the 1980s (Xerces)</div></div>
            <div className="fact-card"><div className="fact-card__number">Dec 2024</div><div className="fact-card__label">Proposed as a threatened species under the Endangered Species Act (USFWS)</div></div>
          </div>

          <img className="why-photo" src="/hub-season.jpg" alt="A monarch butterfly feeding on milkweed" loading="lazy" width={1100} height={720} />
        </section>

        <section aria-labelledby="why-wildlife">
          <h2 id="why-wildlife">Other wildlife is declining too</h2>
          <figure className="why-chart">
            <figcaption className="why-chart__title">How far some populations have fallen</figcaption>
            <div className="why-bars">
              {DECLINES.map(d => (
                <div className="why-bar" key={d.label}>
                  <div className="why-bar__head">
                    <span className="why-bar__label">{d.label}</span>
                    <span className="why-bar__pct">{d.pct}% lost</span>
                  </div>
                  <div className="why-bar__track"><div className="why-bar__fill" style={{ width: `${d.pct}%` }} /></div>
                  <div className="why-bar__caption">{d.caption}</div>
                </div>
              ))}
            </div>
          </figure>
          <p className="why-source">Sources: WWF Living Planet Report 2024; Rosenberg et al., Science, 2019; Hallmann et al., PLOS ONE, 2017.</p>

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
          <p>Monarch overwintering area: <a href="https://monarchjointventure.org/blog/eastern-monarch-overwintering-population-increases-from-last-year" target="_blank" rel="noreferrer">WWF Mexico / CONANP, via Monarch Joint Venture</a>.</p>
          <p>Western monarch counts: <a href="https://www.xerces.org/press/western-monarch-numbers-remain-at-historic-low" target="_blank" rel="noreferrer">Xerces Society</a>. ESA proposal: <a href="https://www.fws.gov/press-release/2024-12/monarch-butterfly-proposed-endangered-species-act-protection" target="_blank" rel="noreferrer">U.S. Fish and Wildlife Service, December 2024</a>.</p>
          <p>Wildlife populations: <a href="https://www.worldwildlife.org/publications/2024-living-planet-report" target="_blank" rel="noreferrer">WWF Living Planet Report 2024</a>. Birds: <a href="https://www.science.org/doi/10.1126/science.aaw1313" target="_blank" rel="noreferrer">Rosenberg et al., Science, 2019</a>. Insects: <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0185809" target="_blank" rel="noreferrer">Hallmann et al., PLOS ONE, 2017</a>.</p>
          <p>Photos: meadowlark by Rhododendrites (CC BY-SA 4.0); bumblebee and monarch by USFWS (public domain); header via Pexels.</p>
        </section>
      </div>
    </div>
  )
}
