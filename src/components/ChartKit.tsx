// ChartKit. Dependency-free, professional SVG charts for the Camp Monarch site.
// Copy into src/components/. No runtime dependencies. See the chart-builder skill
// for the standard and the pre-ship checklist. Every chart gets a title, labeled
// axes with units, rounded ticks, a source line, on-brand colors, and an
// accessible aria-label. Multi-series charts get a legend and dash patterns so
// the distinction is never color-only.
import type { ReactNode } from 'react'

export const CHART_COLORS = {
  green: '#2d5a27',
  orange: '#f1af55',
  deepOrange: '#bf6b1e',
  dark: '#1a2e1a',
  border: '#e2d5c3',
  grid: '#e9e1d3',
  muted: '#888780',
  text: '#1a1a1a',
}

const SERIES_COLORS = [CHART_COLORS.green, CHART_COLORS.deepOrange, '#185fa5', '#8a5a12']
const DASHES = ['', '6 4', '2 4', '8 4 2 4']

export type Source = { text: string; href?: string }

// Round an axis maximum to clean tick steps (1, 2, 5 x 10^n) so labels read at a glance.
function niceTicks(max: number, count = 5): number[] {
  if (!isFinite(max) || max <= 0) return [0]
  const raw = max / count
  const mag = Math.pow(10, Math.floor(Math.log10(raw)))
  const norm = raw / mag
  const mult = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10
  const step = mult * mag
  const top = Math.ceil(max / step) * step
  const ticks: number[] = []
  for (let v = 0; v <= top + step / 1000; v += step) ticks.push(Math.round(v * 1000) / 1000)
  return ticks
}

function ChartFrame({ title, subtitle, source, children }: { title: string; subtitle?: string; source?: Source; children: ReactNode }) {
  return (
    <figure style={{ margin: '1.25rem 0' }}>
      <figcaption style={{ fontWeight: 'bold', color: CHART_COLORS.text, fontSize: '0.98rem', marginBottom: subtitle ? '0.15rem' : '0.5rem' }}>{title}</figcaption>
      {subtitle && <div style={{ color: CHART_COLORS.muted, fontSize: '0.85rem', marginBottom: '0.5rem' }}>{subtitle}</div>}
      <div style={{ background: '#fff', border: `1px solid ${CHART_COLORS.border}`, borderRadius: 8, padding: 10 }}>{children}</div>
      {source && (
        <div style={{ fontSize: '0.78rem', color: CHART_COLORS.muted, marginTop: '0.4rem' }}>
          Source:{' '}
          {source.href ? <a href={source.href} target="_blank" rel="noreferrer">{source.text}</a> : source.text}
        </div>
      )}
    </figure>
  )
}

export type LineSeries = { name: string; color?: string; points: [number, number][] }

export function LineChart(props: {
  title: string
  subtitle?: string
  xLabel: string
  yLabel: string
  series: LineSeries[]
  ariaLabel: string
  xTicks?: number[]
  yMax?: number
  referenceLines?: { y: number; label: string; color?: string }[]
  area?: boolean
  source?: Source
  height?: number
}) {
  const { series, xLabel, yLabel, referenceLines = [], area, ariaLabel } = props
  const VW = 720, VH = props.height ?? 360
  const ML = 64, MR = 16, MT = 18, MB = 52
  const PW = VW - ML - MR, PH = VH - MT - MB
  const allX = series.flatMap(s => s.points.map(p => p[0]))
  const xMin = Math.min(...allX), xMax = Math.max(...allX)
  const dataMax = Math.max(...series.flatMap(s => s.points.map(p => p[1])), ...referenceLines.map(r => r.y))
  const yticks = niceTicks(props.yMax ?? dataMax)
  const yMax = props.yMax ?? yticks[yticks.length - 1]
  const px = (x: number) => ML + ((x - xMin) / (xMax - xMin || 1)) * PW
  const py = (y: number) => MT + (1 - y / yMax) * PH
  const xticks = props.xTicks ?? [xMin, xMax]
  const multi = series.length > 1
  return (
    <ChartFrame title={props.title} subtitle={props.subtitle} source={props.source}>
      <svg viewBox={`0 0 ${VW} ${VH}`} style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label={ariaLabel}>
        {yticks.map(t => (
          <g key={t}>
            <line x1={ML} y1={py(t)} x2={VW - MR} y2={py(t)} stroke={CHART_COLORS.grid} strokeWidth={1} />
            <text x={ML - 8} y={py(t) + 4} textAnchor="end" fontSize={11} fill={CHART_COLORS.muted}>{t}</text>
          </g>
        ))}
        <text transform={`translate(15 ${MT + PH / 2}) rotate(-90)`} textAnchor="middle" fontSize={12} fill={CHART_COLORS.text}>{yLabel}</text>
        {xticks.map(t => (
          <text key={t} x={px(t)} y={VH - MB + 20} textAnchor="middle" fontSize={11} fill={CHART_COLORS.muted}>{t}</text>
        ))}
        <text x={ML + PW / 2} y={VH - 6} textAnchor="middle" fontSize={12} fill={CHART_COLORS.text}>{xLabel}</text>
        {referenceLines.map((r, i) => (
          <g key={i}>
            <line x1={ML} y1={py(r.y)} x2={VW - MR} y2={py(r.y)} stroke={r.color ?? CHART_COLORS.deepOrange} strokeWidth={1.5} strokeDasharray="5 4" />
            <text x={VW - MR} y={py(r.y) - 5} textAnchor="end" fontSize={11} fill={r.color ?? CHART_COLORS.deepOrange}>{r.label}</text>
          </g>
        ))}
        {series.map((s, si) => {
          const color = s.color ?? SERIES_COLORS[si % SERIES_COLORS.length]
          const pts = s.points.map(p => `${px(p[0]).toFixed(1)},${py(p[1]).toFixed(1)}`).join(' ')
          return (
            <g key={s.name}>
              {area && si === 0 && <polygon points={`${px(xMin).toFixed(1)},${py(0).toFixed(1)} ${pts} ${px(xMax).toFixed(1)},${py(0).toFixed(1)}`} fill={color} opacity={0.12} />}
              <polyline points={pts} fill="none" stroke={color} strokeWidth={2.5} strokeDasharray={multi ? DASHES[si % DASHES.length] : ''} strokeLinejoin="round" />
            </g>
          )
        })}
        {multi && (
          <g>
            {series.map((s, si) => {
              const color = s.color ?? SERIES_COLORS[si % SERIES_COLORS.length]
              return (
                <g key={s.name} transform={`translate(${ML + si * 170} ${MT - 4})`}>
                  <line x1={0} y1={0} x2={22} y2={0} stroke={color} strokeWidth={2.5} strokeDasharray={DASHES[si % DASHES.length]} />
                  <text x={28} y={4} fontSize={11} fill={CHART_COLORS.text}>{s.name}</text>
                </g>
              )
            })}
          </g>
        )}
      </svg>
    </ChartFrame>
  )
}

export type Bar = { label: string; value: number; caption?: string; color?: string }

export function BarChart(props: {
  title: string
  subtitle?: string
  unit: string
  bars: Bar[]
  ariaLabel: string
  max?: number
  source?: Source
}) {
  const { bars, unit, ariaLabel } = props
  const max = props.max ?? Math.max(...bars.map(b => b.value))
  return (
    <ChartFrame title={props.title} subtitle={props.subtitle} source={props.source}>
      <div role="img" aria-label={ariaLabel}>
        {bars.map((b, i) => (
          <div key={b.label} style={{ marginBottom: i === bars.length - 1 ? 4 : 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
              <span style={{ fontWeight: 'bold', color: CHART_COLORS.text }}>{b.label}</span>
              <span style={{ fontWeight: 'bold', color: CHART_COLORS.deepOrange, whiteSpace: 'nowrap' }}>{b.value}{unit}</span>
            </div>
            <div style={{ background: '#f1efe8', borderRadius: 4, height: 14, overflow: 'hidden' }}>
              <div style={{ background: b.color ?? CHART_COLORS.green, height: '100%', width: `${(b.value / (max || 1)) * 100}%`, borderRadius: 4 }} />
            </div>
            {b.caption && <div style={{ fontSize: '0.82rem', color: CHART_COLORS.muted, marginTop: 4 }}>{b.caption}</div>}
          </div>
        ))}
      </div>
    </ChartFrame>
  )
}

export type ColumnDatum = { label: string | number; value: number }

// Vertical bars, one per period. Use this for a year-over-year value (the
// canonical "population by year" chart). It reads the annual change more
// plainly than an area line and stays compact, so it earns its space.
export function ColumnChart(props: {
  title: string
  subtitle?: string
  xLabel: string
  yLabel: string
  data: ColumnDatum[]
  ariaLabel: string
  xTickEvery?: number
  yMax?: number
  referenceLines?: { y: number; label: string; color?: string }[]
  source?: Source
  height?: number
  barColor?: string
}) {
  const { data, xLabel, yLabel, referenceLines = [], ariaLabel } = props
  const VW = 720, VH = props.height ?? 260
  const ML = 56, MR = 14, MT = 16, MB = 44
  const PW = VW - ML - MR, PH = VH - MT - MB
  const dataMax = Math.max(...data.map(d => d.value), ...referenceLines.map(r => r.y))
  const yticks = niceTicks(props.yMax ?? dataMax)
  const yMax = props.yMax ?? yticks[yticks.length - 1]
  const n = data.length
  const slot = PW / n
  const bw = slot * 0.68
  const py = (v: number) => MT + (1 - v / yMax) * PH
  const bx = (i: number) => ML + i * slot + (slot - bw) / 2
  const every = props.xTickEvery ?? Math.max(1, Math.ceil(n / 6))
  const barColor = props.barColor ?? CHART_COLORS.green
  return (
    <ChartFrame title={props.title} subtitle={props.subtitle} source={props.source}>
      <svg viewBox={`0 0 ${VW} ${VH}`} style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label={ariaLabel}>
        {yticks.map(t => (
          <g key={t}>
            <line x1={ML} y1={py(t)} x2={VW - MR} y2={py(t)} stroke={CHART_COLORS.grid} strokeWidth={1} />
            <text x={ML - 8} y={py(t) + 4} textAnchor="end" fontSize={11} fill={CHART_COLORS.muted}>{t}</text>
          </g>
        ))}
        <text transform={`translate(14 ${MT + PH / 2}) rotate(-90)`} textAnchor="middle" fontSize={12} fill={CHART_COLORS.text}>{yLabel}</text>
        {data.map((d, i) => (
          <rect key={i} x={bx(i)} y={py(d.value)} width={bw} height={Math.max(0, py(0) - py(d.value))} fill={barColor} rx={1} />
        ))}
        {data.map((d, i) => (i % every === 0 ? (
          <text key={'x' + i} x={bx(i) + bw / 2} y={VH - MB + 16} textAnchor="middle" fontSize={11} fill={CHART_COLORS.muted}>{d.label}</text>
        ) : null))}
        <text x={ML + PW / 2} y={VH - 4} textAnchor="middle" fontSize={12} fill={CHART_COLORS.text}>{xLabel}</text>
        {referenceLines.map((r, i) => (
          <g key={i}>
            <line x1={ML} y1={py(r.y)} x2={VW - MR} y2={py(r.y)} stroke={r.color ?? CHART_COLORS.deepOrange} strokeWidth={1.5} strokeDasharray="5 4" />
            <text x={VW - MR} y={py(r.y) - 5} textAnchor="end" fontSize={11} fill={r.color ?? CHART_COLORS.deepOrange}>{r.label}</text>
          </g>
        ))}
      </svg>
    </ChartFrame>
  )
}
