import type { Page } from '../App'

interface WestVirginiaWhiteProps {
  onNavigate: (page: Page) => void
}

export default function WestVirginiaWhite({ onNavigate }: WestVirginiaWhiteProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pieris_virginiensis_WV.jpg/1280px-Pieris_virginiensis_WV.jpg"
          alt="A West Virginia White butterfly perched on a flower with wings partially open, showing the creamy white wings with faint gray-green veining on the underside"
          className="species-hero-image"
          style={{ objectPosition: 'center top' }}
          width={1280}
          height={1220}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Beatriz Moisset&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Pieris_virginiensis_WV.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>West Virginia White</h1>
        <p className="hero__lead">
          The West Virginia White is a native forest butterfly that looks similar to
          the Cabbage White but is a very different species — a spring woodland
          specialist that flies for only three to four weeks in April and May in
          mature deciduous forests. Its wings are translucent white with faint gray-green
          veining on the underside and no black spots, giving it a softer, more delicate
          appearance than the Cabbage White. Wingspan is 1.25 to 1.75 inches.
          It is declining across its range and is a reliable indicator of high-quality
          native forest. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            West Virginia Whites are low-flying forest butterflies. They flutter quietly
            through the understory of mature deciduous forest, rarely venturing above
            the shrub layer. Adults nectar on spring wildflowers blooming in the
            forest interior — toothworts, spring beauties, trout lilies, and bloodroot —
            during the brief window when wildflowers and butterfly are in the same
            place at the same time. Females search for native toothwort leaves on which
            to lay eggs, tasting leaves with their feet. Males can sometimes be found
            puddling at muddy stream edges in early May. The entire adult flight period
            is over before most people realize it has begun. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Pieris_virginiensis_on_wild_mustard%2C_USA_-_20030504.jpg"
            alt="A West Virginia White butterfly visiting a wild mustard flower showing the translucent white wing with faint green-gray veining and no black spots"
            width={450}
            height={316}
            loading="lazy"
          />
          <figcaption>
            West Virginia Whites blend into the dappled light of the spring forest
            floor almost perfectly — the translucent wings with faint veining match
            the light falling through newly-leafing canopy. This is in sharp contrast
            to the bolder, opaque white of the non-native Cabbage White, which is
            visible from a distance in open areas.
            <span className="photo-credit"> Photo: Randy L. Emmitt&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Pieris_virginiensis_on_wild_mustard,_USA_-_20030504.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.5</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            West Virginia Whites overwinter as pupae and emerge with the first spring
            woodland wildflowers in April — the timing is synchronized with the bloom
            of their host plant, toothwort (Cardamine diphylla, C. concatenata).
            There is one generation per year. Females lay single pale yellow eggs
            on toothwort leaves; caterpillars are green and complete development in
            four to six weeks before pupating. Adults are present for only three to
            four weeks, vanishing by late May or early June as the forest canopy
            closes and wildflowers fade. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The West Virginia White has declined significantly and been extirpated
            from many historically occupied forests. [1] Two factors drive the decline:
            loss of mature deciduous forest, and the spread of garlic mustard (Alliaria
            petiolata) in forest understories. Garlic mustard is in the same plant
            family as toothwort, and female West Virginia Whites are deceived into
            laying eggs on it. But garlic mustard contains toxic glucosinolates that
            kill the caterpillars — a deadly evolutionary trap. Wherever garlic mustard
            invades, West Virginia White populations collapse. The Cabbage White, which
            evolved alongside these chemicals in Europe, is immune to them. [2]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Eliminate garlic mustard from your woodland. This is the single most
              important action for West Virginia White conservation. Garlic mustard is
              a biennial: pull it before it seeds in May. A multi-year commitment to
              removal allows toothwort to recover and eliminates the deadly egg-laying
              trap for West Virginia Whites. [2]
            </li>
            <li>
              Plant and protect native toothworts (Cardamine diphylla, C. concatenata).
              Toothworts are spring ephemerals that grow in the moist leaf litter of
              mature deciduous forest. They are the only caterpillar host plant for the
              West Virginia White in most of its range. Planting them in shaded woodland
              garden areas directly supports potential breeding habitat. [2]
            </li>
            <li>
              Preserve mature deciduous forest. West Virginia Whites require intact
              mature forest with rich native wildflower understories — not second-growth
              scrub or young plantation. Protecting existing mature forest from
              development, fragmentation, or deer overbrowsing preserves the habitat
              this species needs. [2]
            </li>
            <li>
              Protect spring wildflower communities. Adult West Virginia Whites nectar
              exclusively on early spring wildflowers — bloodroot, spring beauty,
              toothwort, trout lily — during their brief flight. Maintaining intact
              native spring wildflower communities gives adults the nutrition they
              need during the narrow window when they must find mates and lay eggs. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('cabbage-white')}>
            <span className="neighbor-name">Cabbage White</span>
            <span className="neighbor-note">The non-native look-alike that has displaced the West Virginia White from much of its range — the Cabbage White's ability to use garlic mustard as a host plant puts the native species at a severe disadvantage.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('spring-azure')}>
            <span className="neighbor-name">Spring Azure</span>
            <span className="neighbor-note">Flies at the same time as West Virginia Whites in April and May; both are small early-spring butterflies of woodland edges that use spring-blooming native shrubs and wildflowers for nectar.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">Both the West Virginia White and the Wood Thrush are indicators of high-quality mature deciduous forest with intact native understory; both have declined as forest quality has declined.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('serviceberry')}>
            <span className="neighbor-name">Serviceberry</span>
            <span className="neighbor-note">Blooms at the same time as West Virginia Whites in April, providing a nectar source when forest wildflowers are scarce; serviceberry is an important early-spring resource for many woodland species.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Pieris_virginiensis/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: West Virginia White</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Pieris-virginiensis" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — West Virginia White</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
