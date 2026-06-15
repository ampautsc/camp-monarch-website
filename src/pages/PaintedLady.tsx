import type { Page } from '../App'

interface PaintedLadyProps {
  onNavigate: (page: Page) => void
}

export default function PaintedLady({ onNavigate }: PaintedLadyProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Vanessa_cardui_0001.jpg"
          alt="A Painted Lady butterfly with wings fully open, showing its orange and black pattern with white spots near the wingtips"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Lilly M&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Vanessa_cardui_0001.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.5</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Painted Lady</h1>
        <p className="hero__lead">
          The Painted Lady is the most widespread butterfly in the world — found on
          every continent except Antarctica. It is orange and black with white spots
          near the wingtips and a wingspan of 2 to 2.9 inches. Each spring, Painted
          Ladies migrate north from Mexico and the Mojave Desert, where the winter
          generation breeds, fanning out across North America. They cannot survive
          northern winters. Each individual you see in a northern garden hatched from
          eggs laid by migrants arriving from the south. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Painted Ladies are strong, fast fliers with a characteristic sailing flight
            alternating rapid wingbeats with glides. They are among the most catholic
            nectarers of any butterfly, visiting a vast range of wildflowers. Thistles
            are a particular favorite — both as caterpillar host plants and adult nectar
            sources. Other favorites include native asters, goldenrods, coneflowers, and
            clover. Females use a wide range of host plants: thistles, hollyhocks, pearly
            everlasting, cudweed, and borage are among the more than 100 documented host
            plant species — the most generalist diet of any butterfly known. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Vanessa_cardui_on_Lantana_camara.jpg/1280px-Vanessa_cardui_on_Lantana_camara.jpg"
            alt="A Painted Lady butterfly nectaring on a Lantana flower cluster, showing the intricate underwing pattern visible from the side"
            width={1280}
            height={1138}
            loading="lazy"
          />
          <figcaption>
            The underside of the Painted Lady&apos;s hindwing shows a complex marbled
            pattern of gray, tan, and white — a stark contrast to the vivid orange
            and black upperside. When wings are closed, resting adults are surprisingly
            well camouflaged.
            <span className="photo-credit"> Photo: פרצטמול&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Vanessa_cardui_on_Lantana_camara.jpg" target="_blank" rel="noopener noreferrer">CC0 (public domain)</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The Painted Lady&apos;s annual cycle covers thousands of miles across multiple
            generations. Winter breeding happens in the Mojave Desert and northern Mexico
            when winter rains bring thistles into bloom. Spring adults migrate north,
            laying eggs as they go. Multiple generations breed across North America
            through summer. A 2019 study using chemical analysis of wing scales traced
            individual butterflies from breeding grounds in western North America to
            overwintering areas in sub-Saharan Africa — some migrations exceed 9,000
            miles round trip across multiple generations. Fall migrants head back south
            but most perish in the north before reaching breeding grounds. [1][2]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Painted Lady is not of conservation concern globally and is one of the
            most abundant butterflies in the world. [1] In North America, annual
            abundance varies enormously — in good years following wet winters in the
            Mojave, hundreds of millions migrate north. In poor years the spring
            migration is thin. Because Painted Ladies cannot overwinter in most of
            North America, every individual in a northern state or province arrived
            as a migrant or was born of migrants in that same year. The host plant
            generalism and mobility that make Painted Ladies so widespread also make
            them highly resilient. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native thistles. Despite their reputation, native thistles (Cirsium
              species — field thistle, swamp thistle, tall thistle) are among the most
              valuable wildflowers for Painted Ladies, who use them as both caterpillar
              host plants and premier nectar sources. Native thistles are not the
              invasive Canada thistle (Cirsium arvense) — check with local native plant
              nurseries for regional species. [3]
            </li>
            <li>
              Plant pearly everlasting (Anaphalis margaritacea). This native wildflower
              is a preferred caterpillar host plant for Painted Ladies and also provides
              excellent late-season nectar for adults. It grows in dry, open areas and
              is low-maintenance once established. [3]
            </li>
            <li>
              Grow native goldenrods and native asters for fall nectar. Fall migrants
              (and multiple summer generations) depend on late-season nectar from
              goldenrod and asters. A mass planting of goldenrod in September can
              attract dozens of Painted Ladies at once in a good migration year. [3]
            </li>
            <li>
              Leave garden debris until spring. Painted Lady pupae are attached to
              plant stems and fence posts; the fall generation pupates in late September
              through October and produces adults that migrate south. Clearing stems
              before November can destroy pupae before adults have emerged. [3]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">Shares the same open meadows and native wildflowers; both are long-distance migrants whose annual abundance varies dramatically with breeding ground conditions.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-admiral')}>
            <span className="neighbor-name">Red Admiral</span>
            <span className="neighbor-note">A close relative in the same genus that shares the same gardens and wildflower patches; both can be abundant in the same habitat in the same season.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Forages the same native wildflowers including thistles; both the bumble bee and Painted Lady respond immediately to native thistle and aster plantings.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
            <span className="neighbor-name">Eastern Tiger Swallowtail</span>
            <span className="neighbor-note">Shares the same native wildflower gardens and goldenrod patches; both are large, distinctive butterflies visible on the same flower patches in late summer.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Vanessa_cardui/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Painted Lady</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Vanessa-cardui" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Painted Lady</a></li>
            <li><a href="https://xerces.org/endangered-species/butterflies" target="_blank" rel="noopener noreferrer">Xerces Society — Protecting Butterflies</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
