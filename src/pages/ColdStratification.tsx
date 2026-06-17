import type { Page } from '../App'

interface ColdStratificationProps {
  onNavigate: (page: Page) => void
}

export default function ColdStratification({ onNavigate }: ColdStratificationProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Growing Guide</div>
        <h1>Cold stratification</h1>
        <p className="hero__lead">
          Many native seeds will not sprout until they have been through a cold, damp spell. It is a
          built-in timer: in the wild it stops a seed from germinating in fall, right before winter
          kills the seedling. To grow those plants from seed, you recreate that winter, either in
          the refrigerator or outdoors. Milkweed, coneflower, and most native wildflowers need it.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fridge-heading">
          <h2 id="fridge-heading">The refrigerator method</h2>
          <p>
            This is the reliable way to stratify seed on a schedule, indoors, any time of year.
            Check the seed packet or supplier for the species' required period, usually 30 to 90
            days.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Stratify in the fridge</h2>
          <ol className="step-list">
            <li>Dampen a medium such as sand, sphagnum moss, or a paper towel until it is moist but not dripping.</li>
            <li>Mix the seeds into the medium, or fold them into the towel, and seal it in a labeled plastic bag or container with the air squeezed out.</li>
            <li>Refrigerate between 34 and 41°F. Avoid the freezer.</li>
            <li>Leave it for the species' required period, checking now and then for moisture and any mold.</li>
            <li>When the time is up, sow the seeds. They germinate as conditions warm.</li>
          </ol>
        </div>

        <section aria-labelledby="outdoor-heading">
          <h2 id="outdoor-heading">The outdoor method</h2>
          <p>
            Nature does this for free. Sowing seed outdoors in late fall lets winter provide the
            cold-moist period, and the seed sprouts on its own in spring. Winter-sowing in covered
            containers left outside works the same way on a small scale. If mold appears in the
            fridge, a quick rinse in a weak hydrogen-peroxide solution before resealing usually
            stops it.
          </p>
        </section>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.prairiemoon.com/blog/" target="_blank" rel="noopener noreferrer">Prairie Moon Nursery — Seed germination and stratification</a></li>
            <li><a href="https://www.wildflower.org/learn" target="_blank" rel="noopener noreferrer">Lady Bird Johnson Wildflower Center — How-To and Learn</a></li>
          </ol>
        </section>

        <div style={{ marginTop: '2rem' }}>
          <button className="link-button" onClick={() => onNavigate('growing-guide')}>← All growing guides</button>
        </div>
      </div>
    </>
  )
}
