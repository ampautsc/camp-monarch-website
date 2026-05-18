import type { Page } from '../App'

interface LittleBluestemProps {
  onNavigate: (page: Page) => void
}

export default function LittleBluestem({ onNavigate }: LittleBluestemProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/103310661/large.jpeg"
          alt="Little Bluestem bunchgrass in fall color, copper-red blades and fluffy white seed heads persisting into November, Sauk County, Wisconsin, October 2020"
          className="species-hero-image"
          style={{ objectPosition: 'center 60%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: jasonswanson&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/64276736" target="_blank" rel="noopener noreferrer">iNaturalist obs. 64276736</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Little Bluestem turns copper-red in October and holds that color through January — the same clump, at that moment, holds Leonard's Skipper and Cobweb Skipper larvae wintering inside silk shelters they built from the blades they ate in summer.</h1>
        <p className="hero__lead">
          Little Bluestem (<em>Schizachyrium scoparium</em>) is a native bunchgrass that grows
          in full sun and dry to rocky soil across the central and eastern United States. It
          reaches 2 to 4 feet tall, forms a clump from a single crown, and does not spread by
          rhizomes or self-seed aggressively. In late summer the narrow leaf blades begin turning
          red at their tips; by October the entire plant is copper-red, with fluffy white seed
          heads held above the foliage.
        </p>
        <p className="hero__lead">
          Two grass-skipper butterflies — Leonard's Skipper (<em>Hesperia leonardus</em>) and
          Cobweb Skipper (<em>Hesperia metea</em>) — use Little Bluestem as their larval host
          plant. Females from both species lay eggs directly on the blades. The larvae that hatch
          spend ten months eating, sheltering, and overwintering in the crown of the same plant
          before emerging as adults the following spring or late summer.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="copper-heading">
          <h2 id="copper-heading">The red that starts at the blade tip in August and reaches the whole clump by October — and stays there until February</h2>
          <p>
            The color change in Little Bluestem begins in the leaf tips in late August as the
            plant finishes seed production and begins pulling resources back toward the crown for
            winter. The blades turn from blue-green to orange-red to deep copper over six to eight
            weeks. By November the plant is a solid column of copper-red against dormant lawn
            grass and bare soil — a color as saturated as any autumn shrub, on a plant half the
            size and with twice the winter persistence.
          </p>
          <p>
            Unlike the red in burning bush, which comes from a non-native shrub whose fall color
            is a landscaping selling point, the red in Little Bluestem is a drying-down process.
            The anthocyanin pigments are produced as the chlorophyll breaks down and the leaf
            tissue desiccates. The color holds through winter because the dried blade is no longer
            metabolically active — there is nothing left to break the pigment down. The same
            process that makes the color appear is what makes it last.
          </p>
          <p>
            The fluffy white seed heads — actually the silky hairs attached to each seed — remain
            on the plant through winter and into spring. Dark-eyed Juncos and American Tree
            Sparrows pull seeds from the dried seed heads in November and December. The same clump
            that held the skipper larvae in summer, stands copper-red in October, feeds
            seed-eating birds in November, and releases the remaining seeds into the wind in
            January — a sequence that runs from June to April without any management intervention.
          </p>
        </section>

        <figure className="species-content-photo">
          <img
            src="https://inaturalist-open-data.s3.amazonaws.com/photos/545086482/large.jpg"
            alt="Little Bluestem bunchgrass in summer with blue-green narrow blades and emerging seed heads, Ohio, July 2025"
            loading="lazy"
          />
          <figcaption>
            Little Bluestem in midsummer: the blue-green leaf blades that give the species its
            common name rise from a single crown, with seed heads beginning to extend above the
            foliage. The narrow leaf blade — about 3 millimeters wide — is what female Cobweb
            and Leonard's Skippers search for when choosing an egg-laying site in late spring and
            late summer.
            <span className="photo-credit"> Photo: waxwing_ohio&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/302456601" target="_blank" rel="noopener noreferrer">iNaturalist obs. 302456601</a>&nbsp;· CC0 / No Rights Reserved</span>
          </figcaption>
        </figure>

        <section aria-labelledby="skippers-heading">
          <h2 id="skippers-heading">Cobweb Skipper lays in late June, Leonard's Skipper lays in late August — the same clump hosts both, with larvae on offset schedules that never compete</h2>
          <p>
            Cobweb Skipper females fly in late April and May, laying eggs on native bunchgrass
            blades. The eggs hatch and the first-instar larvae build a silk shelter around a
            folded blade — a tent they live in through the growing season. By October these larvae
            have entered the crown to overwinter. They resume feeding in spring and pupate in
            April, with adults emerging in late April or early May. The entire larval stage runs
            from egg in late spring through adult emergence nearly twelve months later.
          </p>
          <p>
            Leonard's Skipper females fly in late August and September, laying eggs on the same
            grass blades. The eggs hatch in September or overwinter before hatching in spring,
            depending on the population; the young larvae then feed through spring and early
            summer before pupating. Adults emerge in August of the following year. The two
            species' larvae may occupy the same grass clump simultaneously — Cobweb Skipper
            larvae completing their overwintering stage through winter, and Leonard's Skipper
            eggs or early-instar larvae sheltering at the base of the same crown.
          </p>
          <p>
            Neither species can complete its life cycle in a yard planted only with broadleaf
            wildflowers. Milkweed, goldenrod, and aster do not provide the grass blade tissue
            these larvae eat. A single clump of Little Bluestem — or Prairie Dropseed — is the
            one addition that opens the yard to both skippers.
          </p>
        </section>

        <section aria-labelledby="site-heading">
          <h2 id="site-heading">Dry, rocky soil and full sun — the conditions where turf grass fails and Little Bluestem does not need supplemental care</h2>
          <p>
            Little Bluestem evolved on the dry, rocky, and often thin soils of the North American
            prairie and barrens. It tolerates drought, low fertility, and compacted soil better
            than most ornamental grasses, and establishes in roadside banks, gravel margins, and
            south-facing slopes where many native wildflowers fail. In an average yard, a spot
            that drains within 12 hours of rain and receives at least 6 hours of direct sun is
            sufficient.
          </p>
          <p>
            The plant grows from a single crown without producing runners or rhizomes. It does
            not colonize adjacent ground the way Canada Goldenrod or Wild Bergamot can. A clump
            stays where it was planted, widens slowly from the center over years, and does not
            need dividing unless the center dies out — which can happen after 10 to 15 years in
            very fertile soil. In dry, open conditions the crown persists indefinitely.
          </p>
          <p>
            Competition from established lawn grass is the main establishment challenge in the
            first season. Removing a 12-inch circle of sod before planting — or covering the
            area with cardboard for one season — gives the crown room to spread its first roots
            before facing competition. After the first full growing season, established Little
            Bluestem holds its ground against most lawn grasses in dry conditions without further
            intervention.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three things Little Bluestem needs to host skippers and stand through winter</h2>
          <figure className="species-content-photo">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/331747293/large.jpg"
              alt="Little Bluestem in fall color with copper-red blades and white fluffy seed heads against a clear sky, Uwharrie National Forest, North Carolina, October 2023"
              loading="lazy"
            />
            <figcaption>
              Little Bluestem in late October at Uwharrie National Forest, North Carolina:
              copper-red blades and white seed heads after the first frosts. The clump stands
              without staking or support — the crown holds the dried stems upright through winter
              winds. At the base of this plant, Leonard's Skipper or Cobweb Skipper larvae may
              be overwintering in silk shelters built from the same blades now turning red above
              them.
              <span className="photo-credit"> Photo: whiteoak&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/189384424" target="_blank" rel="noopener noreferrer">iNaturalist obs. 189384424</a>&nbsp;· CC0 / No Rights Reserved</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant in full sun, in dry to rocky soil with good drainage.</strong>{' '}
              Little Bluestem does not need fertile or amended soil — it establishes more reliably
              in lean, dry conditions than in heavy clay or shade. A spot that receives 6 or more
              hours of direct sun and drains within 12 hours of rain gives this plant what it
              needs to grow without supplemental watering after the first season.
            </li>
            <li>
              <strong>Leave the clump standing until late April or early May each year.</strong>{' '}
              Both Leonard's Skipper and Cobweb Skipper larvae overwinter at the plant's crown.
              Cutting in autumn or early spring removes them before they can pupate and emerge as
              adults. The dried copper-red blades and white seed heads are also the winter food
              source for Dark-eyed Juncos and American Tree Sparrows. Cutting in late April —
              after adults may have already emerged — removes only the previous year's dead
              growth.
            </li>
            <li>
              <strong>Plant 3 or more clumps within 10 feet of each other.</strong>{' '}
              Female skippers patrol grass patches searching for egg-laying sites. A single
              isolated clump may be passed over; a patch of three to five plants in a sunny
              border gives them a target large enough to locate and return to. Planting Little
              Bluestem alongside Prairie Dropseed gives both skipper species a combined host-grass
              area in the same bed.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('leonards-skipper')}>
              <span className="neighbor-name">Leonard's Skipper</span>
              <span className="neighbor-note">Lays eggs on Little Bluestem blades in late August; larvae overwinter at the crown; adults emerge the following late summer on the same grass clump</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('cobweb-skipper')}>
              <span className="neighbor-name">Cobweb Skipper</span>
              <span className="neighbor-note">First grass skipper of spring; lays eggs in late June and July; larvae overwinter at the same crown where Leonard's Skipper laid its eggs two months earlier</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('prairie-dropseed')}>
              <span className="neighbor-name">Prairie Dropseed</span>
              <span className="neighbor-note">Fellow native bunchgrass hosting the same two skippers; coriander-scented seeds; finer texture and slightly shorter than Little Bluestem but the same dry-soil, full-sun requirements</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('dark-eyed-junco')}>
              <span className="neighbor-name">Dark-eyed Junco</span>
              <span className="neighbor-note">Pulls seeds from Little Bluestem seed heads in November and December; the standing dried clump extends the seed-foraging window after other sources are exhausted</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('american-tree-sparrow')}>
              <span className="neighbor-name">American Tree Sparrow</span>
              <span className="neighbor-note">Arrives in October from subarctic nesting grounds; pulls seeds from standing Little Bluestem stalks and dried goldenrod heads in loose flocks of 10 to 40 birds through January — the same copper-red stalks the juncos and sparrows are both working</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('canada-goldenrod')}>
              <span className="neighbor-name">Canada Goldenrod</span>
              <span className="neighbor-note">Leonard's Skipper adults nectar on goldenrod in late August while the same grass blades are receiving the first Leonard's Skipper eggs — nectar source and host plant in the same border, the same week</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
