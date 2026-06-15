import type { Page } from '../App'

interface PearlCrescentProps {
  onNavigate: (page: Page) => void
}

export default function PearlCrescent({ onNavigate }: PearlCrescentProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pearl_crescent_%2830350%29.jpg/1280px-Pearl_crescent_%2830350%29.jpg"
          alt="A Pearl Crescent butterfly resting with wings open, showing its bright orange wings with black borders and intricate black patterning"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={947}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Pearl_crescent_(30350).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Pearl Crescent</h1>
        <p className="hero__lead">
          The Pearl Crescent is one of the most abundant small butterflies in eastern
          North America — a 1- to 1.5-inch orange-and-black butterfly that appears
          in virtually every habitat from roadsides to gardens to forest clearings
          from spring through fall. Its caterpillars eat aster leaves, making it
          directly dependent on the native asters that are among the most valuable
          wildflowers you can grow. The name comes from a pale crescent-shaped spot
          on the underside of the hindwing. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Pearl Crescents fly low and fast, darting between patches of open ground
            and wildflowers. Males are highly territorial — they select a prominent low
            perch and aggressively chase away other butterflies and insects that pass
            through their territory, returning to the same spot after each chase. Both
            sexes nectar on a wide range of low-growing wildflowers: native asters,
            fleabane, and clovers are favorites. Females fly low over asters, tasting
            the leaves with sensors in their feet before laying small clusters of eggs
            on the underside of the leaves. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Phyciodes_tharos_4.jpg/1280px-Phyciodes_tharos_4.jpg"
            alt="A Pearl Crescent butterfly resting with wings slightly open on a plant, showing the intricate orange and black pattern of the upperwing"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            The upperwing pattern of the Pearl Crescent is highly variable — males
            (shown) typically have less black than females, and individuals within
            the same population can look strikingly different from one another.
            <span className="photo-credit"> Photo: Kenneth Dwain Harrelson&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Phyciodes_tharos_4.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Pearl Crescents produce two to three generations per year across most of
            their range, with adults on the wing from April through October. The last
            generation of the year overwinters as young caterpillars at the base of
            aster plants, resuming feeding in early spring. This means asters that are
            present through fall are not just nectar sources — they also serve as
            overwintering habitat for next year&apos;s caterpillars. Males emerge slightly
            before females each generation. The three generations together keep Pearl
            Crescents visible for a longer continuous season than most larger
            butterflies. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Pearl Crescent is one of the most common butterflies in eastern North
            America and is not of conservation concern. [1] Its use of many native
            aster species as host plants — wherever asters grow, Pearl Crescents can
            breed — makes it broadly resilient. The most significant pressure on local
            populations is the widespread removal of native asters from suburban
            lawns and gardens, often because asters are perceived as weedy. In gardens
            and roadsides where native asters are allowed to grow, Pearl Crescents
            are reliably present from spring through fall. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native asters. More than any other single action, planting native
              asters (Symphyotrichum species — New England aster, smooth aster, calico
              aster, etc.) directly creates Pearl Crescent breeding habitat. The
              caterpillars will only eat native asters, not introduced ornamental asters
              from garden centers. A patch of native asters also provides nectar for
              adults late into fall. [2]
            </li>
            <li>
              Leave asters standing through winter. Pearl Crescent caterpillars
              overwinter at the base of aster plants. Cutting asters to the ground in
              fall removes both the overwintering caterpillars and the structure they
              shelter in. Leave stems standing until April. [2]
            </li>
            <li>
              Allow low-growing wildflowers in the lawn margin. Pearl Crescents nectar
              on small flowers close to the ground — native fleabane, clover, and
              low asters at the edge of the mowed area provide critical nectar without
              requiring a full meadow garden. [2]
            </li>
            <li>
              Reduce or eliminate broad-spectrum insecticide use. Pearl Crescent
              caterpillars feed openly on aster leaves and are highly exposed to any
              insecticide applied to or near the plant. A caterpillar-friendly garden
              requires some tolerance for leaves with small holes in them. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('great-spangled-fritillary')}>
            <span className="neighbor-name">Great Spangled Fritillary</span>
            <span className="neighbor-note">Nectars on the same native wildflowers; both are abundant orange butterflies in native wildflower gardens through summer — fritillaries larger, Pearl Crescents smaller.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Forages the same native aster patches that Pearl Crescents depend on; asters planted for one species directly feed the other.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-meadowlark')}>
            <span className="neighbor-name">Eastern Meadowlark</span>
            <span className="neighbor-note">Shares open meadow and field-edge habitat where Pearl Crescents are most abundant; native wildflower meadows support both.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('black-swallowtail')}>
            <span className="neighbor-name">Black Swallowtail</span>
            <span className="neighbor-note">Uses the same open garden and meadow habitat; both butterflies visit the same native wildflower patches and respond to the same habitat improvements.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Phyciodes_tharos/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Pearl Crescent</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Phyciodes-tharos" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Pearl Crescent</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
