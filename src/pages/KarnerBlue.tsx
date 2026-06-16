import type { Page } from '../App'

interface KarnerBlueProps {
  onNavigate: (page: Page) => void
}

export default function KarnerBlue({ onNavigate }: KarnerBlueProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Karner_blue_butterfly_on_hawkweed.jpg/1280px-Karner_blue_butterfly_on_hawkweed.jpg"
          alt="A male Karner Blue butterfly (Plebejus samuelis) nectaring on an orange hawkweed flower showing the brilliant cerulean-blue upperwing surface with thin black borders and white fringes"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Joel Trick, U.S. Fish &amp; Wildlife Service&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Karner_blue_butterfly_on_hawkweed.jpg" target="_blank" rel="noopener noreferrer">Public domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Karner Blue</h1>
        <p className="hero__lead">
          The Karner Blue is a federally endangered butterfly — wingspan under an inch — that
          flies in late May and again in late July along Wild Lupine stands in sandy pine
          barrens, oak savannas, and glacial outwash soils. The male is brilliant cerulean
          blue with a thin black border on the upperwing surface. The female is brown with
          blue scaling at the wing base and an orange crescent along the hindwing margin.
          Neither sex moves far from the lupine stand where it emerged. Listed as federally
          endangered in 1992, the Karner Blue has already disappeared from Connecticut,
          Massachusetts, Pennsylvania, Ohio, Illinois, and Iowa. Remaining populations exist
          only at actively managed sites where people prevent the habitat from succeeding into
          closed-canopy woodland. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A Karner Blue female walks across lupine leaflets pressing her abdomen to the
            leaf surface, depositing one egg per contact and moving to a new stem for each
            subsequent egg — spreading the clutch across several individuals rather than
            concentrating it on one plant. A male perches on lupine foliage or bare ground,
            launching brief flights at passing insects and returning to the same stem. The egg
            from the late-summer brood does not hatch immediately — it develops into a first-
            instar larva inside the egg, then enters diapause at the soil surface. When lupine
            shoots push through the ground the following April, the larva hatches into a
            world that already provides what it needs. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Karner_blue_butterfly_%28Lycaeides_melissa_samuelis%29_%285425719548%29.jpg"
            alt="A Karner Blue butterfly (Plebejus samuelis) resting on Wild Lupine foliage with wings partially open, showing both the blue upperwing and the spotted gray underside in a natural habitat setting"
            width={1024}
            height={768}
            loading="lazy"
          />
          <figcaption>
            Karner Blue caterpillars carry a dorsal nectary organ on the seventh abdominal
            segment that secretes a sugary fluid. Ants — primarily Formica and Lasius species
            in Great Lakes pine barren sites — attend the caterpillar, drinking the secretion.
            In exchange, the attending ants patrol the caterpillar and drive off parasitoid
            wasps. Caterpillars without ant attendance face significantly higher parasitism
            rates. The ant-caterpillar mutualism requires the same open, sandy, acidic soil
            conditions that the lupine itself requires.
            <span className="photo-credit"> Photo: U.S. Fish &amp; Wildlife Service&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Karner_blue_butterfly_(Lycaeides_melissa_samuelis)_(5425719548).jpg" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The Karner Blue completes two broods each season. Adults fly in late May through
            early June (first brood), then again in late July through August (second brood).
            Late-summer eggs overwinter at the soil surface in the debris at the root crown of
            the host plant. When they hatch in April, the caterpillar feeds and molts four
            times before pupating in the soil and leaf litter at the base of the host plant.
            The pupal stage lasts ten to fourteen days before the first-brood adult emerges.
            The entire historical range of the Karner Blue maps directly onto the range of
            Wild Lupine in open, fire-maintained habitats. Where the plant goes, the butterfly
            can follow. Where the plant was removed, the butterfly followed it out. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Karner Blue&apos;s historical range ran from New Hampshire west through New York,
            Pennsylvania, Ohio, Indiana, Illinois, and Wisconsin to Minnesota. Fire suppression
            after European settlement allowed oaks and shrubs to close over the openings where
            lupine grew. The lupine died in the shade. The Karner Blue disappeared with it,
            county by county, across most of its range before the connection was understood. [1]
            What remains: the Albany Pine Bush in New York, the Concord pine barrens in New
            Hampshire, northern Lower Peninsula Michigan, and restoration sites in Wisconsin
            and Indiana — each maintained by preventing the habitat from succeeding into
            woodland. Without that management, oaks and shrubs shade out the lupine within a
            decade. The butterflies follow within a season or two after the lupine disappears.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant Wild Lupine (Lupinus perennis) in sandy, acidic, unamended soil in full
              sun. Wild Lupine is the only larval host. The plant requires soil with pH 5.0–6.5,
              coarse sand or gravel texture, and very low organic matter. Do not add compost,
              fertilizer, or any nitrogen source — Wild Lupine in organically rich soil typically
              fails before its second season. Look for a dry south-facing bank, gravel margin,
              or sandy strip where organic matter has not accumulated. [2]
            </li>
            <li>
              Leave the leaf litter and debris at the root crown undisturbed from August
              through April. Karner Blue eggs from the late-summer brood overwinter in the
              soil and litter at the base of the lupine plant. Clearing the ground beneath
              the plant in fall removes the overwintering generation. Leave old lupine stems,
              dead leaflets, and surrounding litter in place through winter. Cut dead stalks
              to the ground in late March — not in autumn. [2]
            </li>
            <li>
              Apply no insecticide to the lupine or surrounding soil from April through August.
              Karner Blue caterpillars are present on the plant from late April through mid-August
              across both broods. Early instars are roughly a millimeter long — invisible without
              deliberate searching. A contact spray or a systemic absorbed through the roots
              eliminates the entire caterpillar generation on that plant. [2]
            </li>
            <li>
              If a Karner Blue population is within flight range, contact your state wildlife
              agency. In Michigan, Wisconsin, Indiana, New York, and New Hampshire, state
              agencies and land conservancies track population locations. If you are in a
              county with a known population and you establish a lupine planting, reporting
              the site helps managers understand whether the butterfly is using private land
              adjacent to managed preserve areas. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('wild-lupine')}>
            <span className="neighbor-name">Wild Lupine</span>
            <span className="neighbor-note">The only larval host plant; the butterfly cannot breed without it; the late-summer egg overwinters at the root crown and hatches directly onto lupine leaves the following April — if the plant is cleared in autumn, the eggs hatch onto bare ground; planting lupine in suitable conditions is the single highest-impact action for this species.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('frosted-elfin')}>
            <span className="neighbor-name">Frosted Elfin</span>
            <span className="neighbor-note">A second butterfly that uses Wild Lupine as a host plant in pine barrens; NatureServe rates it globally imperiled; in late May, both Frosted Elfin (laying on flower buds) and Karner Blue (laying on leaflets) are present on the same lupine stands simultaneously.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-indigo-duskywing')}>
            <span className="neighbor-name">Wild Indigo Duskywing</span>
            <span className="neighbor-note">A dark brown skipper that also uses Wild Lupine leaves in the northeast; three specialist butterfly species — Karner Blue, Frosted Elfin, and Wild Indigo Duskywing — can be present on the same lupine stand simultaneously on a warm day in late May.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">The primary pollinator of Wild Lupine — the keel-petal flower structure requires a bumblebee&apos;s body weight to open; queen bumblebees emerging from winter dormancy need lupine&apos;s early May bloom to fuel colony establishment; both the Karner Blue and the bumblebee are declining in the same landscape for related reasons.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.fws.gov/species/karner-blue-butterfly-lycaeides-melissa-samuelis" target="_blank" rel="noopener noreferrer">U.S. Fish &amp; Wildlife Service — Karner Blue Butterfly (federally endangered)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Lycaeides-melissa-samuelis" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Karner Blue</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
