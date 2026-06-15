import type { Page } from '../App'

interface GreatSpangledFritillaryProps {
  onNavigate: (page: Page) => void
}

export default function GreatSpangledFritillary({ onNavigate }: GreatSpangledFritillaryProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Great_spangled_fritillary_%28Speyeria_cybele%29_in_Cades_Cove%2C_GSMNP%2C_TN.jpg/1280px-Great_spangled_fritillary_%28Speyeria_cybele%29_in_Cades_Cove%2C_GSMNP%2C_TN.jpg"
          alt="A Great Spangled Fritillary butterfly nectaring on a flower, wings open showing its bright orange and black pattern"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={851}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: David Ratledge&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Great_spangled_fritillary_(Speyeria_cybele)_in_Cades_Cove,_GSMNP,_TN.jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Great Spangled Fritillary</h1>
        <p className="hero__lead">
          The Great Spangled Fritillary is one of the most spectacular common butterflies
          in eastern North America. It is large — wingspan up to 4 inches — and bright
          orange with black spots and irregular black lines on the upperwing. The
          undersides of the hindwings carry large silver-metallic spots, the &quot;spangling&quot;
          that gives it its name. It flies in open meadows and forest edges from late
          June through September. Its caterpillars eat only violets. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Great Spangled Fritillaries are strong, fast fliers that patrol meadows,
            roadsides, and open woodland edges. Adults nectar heavily on native
            milkweeds, coneflower, joe-pye weed, ironweed, and native thistles.
            Females spend late summer sipping nectar to build energy reserves for
            egg-laying; they lay eggs near (but not on) violet plants in July and
            August. Males emerge before females each year and patrol open areas
            for females; they can sometimes be seen gliding directly toward any
            orange object that might be a newly-emerged female. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Speyeria_cybele_Great_Spangled_Fritillary_8.9.2008.jpg/1280px-Speyeria_cybele_Great_Spangled_Fritillary_8.9.2008.jpg"
            alt="A Great Spangled Fritillary butterfly with wings half-open showing the silver-spangled underside of the hindwing"
            width={1280}
            height={1024}
            loading="lazy"
          />
          <figcaption>
            The silver spots on the underside of the hindwing — the &quot;spangling&quot;
            — are distinctive in flight. No other common large orange butterfly in
            the East has this reflective silver pattern on the underwing.
            <span className="photo-credit"> Photo: MONGO&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Speyeria_cybele_Great_Spangled_Fritillary_8.9.2008.jpg" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Great Spangled Fritillaries have one of the most unusual lifecycles of
            any eastern butterfly. Females lay eggs in July and August not on violet
            plants but scattered nearby in leaf litter. Eggs hatch in fall; the tiny
            first-instar caterpillars immediately go dormant without eating, overwintering
            in the litter where they hatched. In March and April they emerge, find
            violet plants, and begin feeding — exclusively on violet leaves, usually
            at night. Adults emerge mid-June and fly through September. There is one
            generation per year. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Great Spangled Fritillary is not listed by the IUCN and is common
            across much of eastern North America. [1] It is entirely dependent on
            native violets as a caterpillar host plant — there is no substitute.
            The widespread use of weed killers on lawns and the systematic removal
            of &quot;lawn weeds&quot; including violets has reduced caterpillar habitat in
            many suburban areas. It also needs rich native wildflower patches for
            the adult to nectar through summer and fall. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Allow native violets to grow in your lawn. Violets are the sole host
              plant for Great Spangled Fritillary caterpillars — without violets in
              the landscape there is no breeding. Common blue violet (Viola sororia)
              and other native violets are the ones that matter; violets in a lawn
              can be the last remaining host plant in a suburban neighborhood. [2]
            </li>
            <li>
              Plant large patches of native milkweed for late-summer nectar. In August
              and September, Great Spangled Fritillaries build fat reserves on milkweed
              before egg-laying; a large milkweed patch can host dozens at once. [2]
            </li>
            <li>
              Add joe-pye weed, native ironweed, and native coneflower. These tall
              native wildflowers bloom in mid- to late summer — exactly when adult
              fritillaries are most active and need nectar most. [2]
            </li>
            <li>
              Do not rake all leaf litter in fall. Great Spangled Fritillary eggs
              hatch in October and the tiny caterpillars overwinter in the leaf layer.
              Removing all leaves removes the overwintering caterpillars. Leave at
              least some areas of undisturbed leaf litter under trees and shrubs. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">Nectars on the same native milkweeds in summer and fall; the two large butterflies are often seen on the same milkweed patch in August.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
            <span className="neighbor-name">Eastern Tiger Swallowtail</span>
            <span className="neighbor-note">Shares the same native wildflower meadows as a nectar source through summer; both are large, showy butterflies that peak on joe-pye weed and ironweed.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Shares the same native wildflower patches; goldenrods, asters, and coneflowers planted for fritillaries directly benefit bumble bees as well.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-meadowlark')}>
            <span className="neighbor-name">Eastern Meadowlark</span>
            <span className="neighbor-note">Nests in the open meadow habitat where fritillaries patrol — both are declining indicators of healthy native meadow ecosystems in eastern North America.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Speyeria_cybele/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Great Spangled Fritillary</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Speyeria-cybele" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Great Spangled Fritillary</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
