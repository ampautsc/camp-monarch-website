import type { Page } from '../App'

interface HenrysElfinProps {
  onNavigate: (page: Page) => void
}

export default function HenrysElfin({ onNavigate }: HenrysElfinProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Henry%27s_Elfin_-_Callophrys_henrici%2C_Meadowood_SRMA%2C_Mason_Neck%2C_Virginia%2C_April_15%2C_2022_%2852486779036%29.jpg/1280px-Henry%27s_Elfin_-_Callophrys_henrici%2C_Meadowood_SRMA%2C_Mason_Neck%2C_Virginia%2C_April_15%2C_2022_%2852486779036%29.jpg"
          alt="Henry's Elfin perched on a dry twig, showing the mosaic brown and rust hindwing with a frosted, scalloped outer edge"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={1855}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Judy Gallagher&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Henry%27s_Elfin_-_Callophrys_henrici,_Meadowood_SRMA,_Mason_Neck,_Virginia,_April_15,_2022_(52486779036).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies &amp; Skippers</div>
        <h1>Henry&apos;s Elfin</h1>
        <p className="hero__lead">
          Henry&apos;s Elfin (<em>Callophrys henrici</em>) is a small hairstreak, wingspan 2.5 to
          3 centimeters, on the wing for only about three weeks each year — mid-March through
          mid-April in most of its range. Its caterpillar feeds almost nowhere else but Eastern
          Redbud flowers and developing seed pods, never the leaves, which is why this butterfly
          flies and is gone again before most people start looking for butterflies at all. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Males stake out a perch high in a blooming redbud's canopy, launching short chases at
            anything that passes and returning to the same spot. Females move more slowly through
            the lower branches, pausing at each flower cluster to test it before laying a single
            pale green egg against the base of the petals, close to the nectary, nearly invisible
            among the blooms. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Henry%27s_Elfin_-_Callophrys_henrici%2C_Calvert_Cliffs_State_Park%2C_Lusby%2C_Maryland.jpg/1280px-Henry%27s_Elfin_-_Callophrys_henrici%2C_Calvert_Cliffs_State_Park%2C_Lusby%2C_Maryland.jpg"
            alt="Henry's Elfin resting on bare sandy ground, showing the scalloped white-edged wing margin"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            The white-tipped, scalloped hindwing edge gives the whole "elfin" group of
            hairstreaks its frosted look — visible here even at rest on bare ground.
            <span className="photo-credit"> Photo: Judy Gallagher&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Henry%27s_Elfin_-_Callophrys_henrici,_Calvert_Cliffs_State_Park,_Lusby,_Maryland.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Eggs hatch in 5 to 7 days, and the caterpillar feeds from inside the flower cluster —
            petals and stamens first, then the developing seed pods as the flowers drop in early
            May. Full development takes 3 to 4 weeks, finishing before the redbud is even fully
            leafed out. The final-instar caterpillar then drops to the ground and pupates in the
            leaf litter within a few feet of the trunk — and stays there, in diapause, for roughly
            eleven months before next March's adults emerge. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Henry's Elfin isn't at risk where redbud grows, but it's an unusually literal test of
            "leave the leaves": the pupa sits in the leaf litter at the base of the host tree for
            eleven of every twelve months. A redbud left standing but raked clean underneath every
            October keeps the tree without ever keeping the butterfly.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Leave leaf litter in place at the base of any redbud year-round — the pupa
              overwintering inside is small, brown, and easy to mistake for debris. [2]
            </li>
            <li>
              Apply no insecticide to a blooming redbud in March, April, or May, when caterpillars
              are feeding inside the flower clusters and pods. [2]
            </li>
            <li>
              Watch a blooming redbud on warm late-March and early-April afternoons — males perch
              and chase near the top of the canopy, the easiest way to spot one. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('redbud')}>
            <span className="neighbor-name">Eastern Redbud</span>
            <span className="neighbor-note">The larval host across most of the range — caterpillars eat only its flowers and developing seed pods, never the leaves.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('leave-the-leaves')}>
            <span className="neighbor-name">Leave the Leaves</span>
            <span className="neighbor-note">The pupa spends about eleven months a year in the leaf litter beneath the host tree — disturbed at any point, it doesn't come back.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('frosted-elfin')}>
            <span className="neighbor-name">Frosted Elfin</span>
            <span className="neighbor-note">Henry's Elfin's closest northeastern relative; flies the same early-spring weeks but depends on wild lupine and wild blue indigo instead of redbud.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Queens forage on the same redbud flowers in late March, the same week Henry's Elfin females are laying eggs in those clusters.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Callophrys_henrici" target="_blank" rel="noopener noreferrer">Wikipedia — Callophrys henrici (Henry's Elfin)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Callophrys-henrici" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Henry's Elfin</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
