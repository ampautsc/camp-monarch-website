import type { Page } from '../App'

interface DarkEyedJuncoProps {
  onNavigate: (page: Page) => void
}

export default function DarkEyedJunco({ onNavigate }: DarkEyedJuncoProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/55/Junco_hyemalis_hyemalis_CT1_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Dark-eyed Junco foraging in snow, showing slate-gray hood and white outer tail feathers — winter's most common feeder bird"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Cephas · <a href="https://commons.wikimedia.org/wiki/File:Junco_hyemalis_hyemalis_CT1_(cropped).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a> via Wikimedia Commons */}
          Photo: Cephas&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Junco_hyemalis_hyemalis_CT1_(cropped).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Dark-eyed Junco</h1>
        <p className="hero__lead">
          The Dark-eyed Junco is the most commonly reported bird at North
          American winter feeders — a reliable "snowbird" that arrives each
          October and departs by March, framing the winter season as a time
          of active wildlife stewardship rather than absence.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="abundance-heading">
          <h2 id="abundance-heading">One of North America's most abundant birds — and a climate canary</h2>
          <p>
            Partners in Flight estimates the Dark-eyed Junco (<em>Junco
            hyemalis</em>) population at approximately 630 million individuals,
            making it one of the highest-population birds on the continent.
            Yet despite that abundance, juncos have declined roughly 17% since
            1966 — a trajectory driven by loss of boreal forest breeding
            habitat and climate-driven compression of their mountain-top
            nesting zones.
          </p>
          <p>
            Juncos breed in boreal forests and at high mountain elevations
            across North America — habitats that are contracting as
            temperatures rise. Audubon Society models project
            loss of more than half the winter range by 2080, with breeding habitat at mountaintops
            becoming climatically unsuitable. A bird that 630 million strong
            can still lose ground to climate change is one of conservation's
            clearest early-warning signals.
          </p>
        </section>

        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">Winter guest, mountain specialist: the dual life of a feeder bird</h2>
          <p>
            The junco familiar to most people — the small, dark-hooded bird
            scratching below a feeder from October through March — spends its
            summers as an arctic-alpine specialist, nesting on the ground
            under vegetation in boreal forests and at high elevations. The
            same bird is both the most reliable winter feeder visitor in
            suburbia and a climate-sensitive breeder in some of North America's
            most threatened habitats.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/03/Dark-eyed_junco_%28Junco_hyemalis%29_nest_and_eggs_%2853006127360%29.jpg"
                  alt="Dark-eyed Junco nest built on the ground, tucked at the base of dense vegetation, with four pale spotted eggs"
                  loading="lazy"
                />
                <figcaption>
                  Juncos nest on the ground, usually concealed against a rock, log, or the base of a dense shrub — a tight cup of grass lined with animal hair. Ground nesting means every outdoor cat, every cleared brush pile, every manicured edge costs breeding pairs directly.
                  <span className="photo-credit"> Photo: YellowstoneNPS · <a href="https://commons.wikimedia.org/wiki/File:Dark-eyed_junco_(Junco_hyemalis)_nest_and_eggs_(53006127360).jpg" target="_blank" rel="noopener noreferrer">Public domain</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            As ground foragers, juncos scratch through leaf litter and soil
            for weed seeds, grass seeds, and small invertebrates. Intact,
            undisturbed leaf litter is the foraging
            substrate juncos depend on — and one that manicured, raked yards simply cannot provide.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>White millet on bare ground, leaf litter under shrubs, a winter feeder count, and no fall soil treatments</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Fallen_leaves.jpg" alt="Autumn leaves covering the ground in a natural setting" loading="lazy" />
            <figcaption>
              Juncos forage by scratching through surface leaf litter for seeds and invertebrates. A mulched border or an unraked patch under shrubs supports a ground layer that functions as a year-round food source rather than decoration.
              <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;<a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Scatter white millet on the ground by October.</strong>{' '}
              Juncos prefer foraging on the ground and rarely use tube feeders.
              Scatter 1–2 cups of white millet (<em>Panicum miliaceum</em>)
              directly on bare ground below existing feeders. Replenish every
              2–3 days. During cold snaps, scatter on top of snow or use a low
              platform feeder 6–12 inches off the ground.
            </li>
            <li>
              <strong>Leave leaf litter under shrubs all winter.</strong>{' '}
              Do not rake or remove leaf litter from under shrubs or at yard
              edges in fall. These are the highest-value winter foraging zones
              for juncos, White-throated Sparrows, Fox Sparrows, and Carolina
              Wrens. If depth concerns you, mow litter into an adjacent lawn
              area — do not remove it from the yard entirely.
            </li>
            <li>
              <strong>Count your juncos each winter.</strong>{' '}
              Consistent annual counts at your feeding station create a personal
              dataset that connects directly to the Breeding Bird Survey trend —
              local observation contributing to continental understanding of
              whether this abundant species is holding steady or declining
              further.
            </li>
            <li>
              <strong>Skip fall grub treatments and soil insecticide applications.</strong>{' '}
              Dark-eyed Juncos scratch through the top inch of soil and leaf litter
              from October through March, pulling up dormant beetle larvae, moth
              pupae, and other invertebrates. A fall grub-control application —
              whether imidacloprid, chlorantraniliprole, or trichlorfon — kills
              invertebrates throughout that same soil zone. Juncos arriving from
              northern breeding grounds in October land in a lawn where the surface
              food layer has been chemically eliminated and does not recover its
              overwintering invertebrate density within a single season. The{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                pesticide guide
              </button>
              {' '}covers timing, alternatives, and the species that benefit when you stop.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">Juncos, leaf litter, and the insects monarchs depend on</h2>
          <p>
            Dark-eyed Juncos foraging through winter leaf litter are working
            through the same habitat layer that shelters overwintering native
            insects — including the moth pupae, beetle larvae, and native bee
            cocoons that form the foundation of the spring insect food web
            monarchs and other pollinators depend on.
          </p>
          <p>
            Leaving leaf litter intact is not one decision for juncos and
            another for monarchs. It is one decision that serves both — and
            dozens of other species simultaneously. The yard that keeps its
            leaf litter through winter is the yard that wakes up richest in
            spring.
          </p>
        </section>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('american-tree-sparrow')}>
              <span className="neighbor-name">American Tree Sparrow</span>
              <span className="neighbor-note">Arrives the same week in October from subarctic nesting grounds; travels in mixed flocks with Dark-eyed Juncos through the same winter seed patches and leaf litter; the two species often forage within 20 feet of each other from November through March</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('little-bluestem')}>
              <span className="neighbor-name">Little Bluestem</span>
              <span className="neighbor-note">Its copper-red stalks hold fluffy seed heads from October through January — juncos cling to the standing stems and pull seeds directly, then drop to scratch through the fallen seeds below</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('prairie-dropseed')}>
              <span className="neighbor-name">Prairie Dropseed</span>
              <span className="neighbor-note">Native bunchgrass holding small seeds on fine stalks through fall and winter; juncos and American Tree Sparrows forage through the same stand in the same week</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('leave-the-leaves')}>
              <span className="neighbor-name">Leave the Leaves</span>
              <span className="neighbor-note">The intact leaf litter that juncos scratch through in January is the same layer sheltering overwintering moth pupae, beetle larvae, and native bee cocoons the spring food web depends on</span>
            </button>
          </div>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to build a winter yard that works for juncos and monarchs?</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a native plant
            </button>
            {' '}to build the leaf-litter and seed-bearing ground layer both need,{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              reduce pesticide use
            </button>
            {' '}to protect the soil invertebrates juncos scratch for all winter, or see how the
            floor layer fits into the full structure of a yard in the{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-layers')}>
              Habitat Layers guide
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
