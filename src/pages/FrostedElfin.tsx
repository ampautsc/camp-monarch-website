import type { Page } from '../App'

interface FrostedElfinProps {
  onNavigate: (page: Page) => void
}

export default function FrostedElfin({ onNavigate }: FrostedElfinProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Callophrys_irus.jpg/1280px-Callophrys_irus.jpg"
          alt="Frosted Elfin (Callophrys irus) adult resting with wings closed showing the brown hindwing underside with the jagged dark postmedian band and the white-gray frosted scales along the outer margin"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Geoff Gallice&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Callophrys_irus.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Frosted Elfin</h1>
        <p className="hero__lead">
          The Frosted Elfin is a small hairstreak butterfly with one of the shortest flight
          windows in eastern North America — three to four weeks in late April and May, then
          gone for another eleven months. Wingspan is about an inch. At rest with wings closed,
          the hindwing underside shows a jagged dark band, a tiny stubby tail, and a wash of
          white-gray scales near the outer margin that gives the species its name. The frosting
          rubs away with age; an older adult looks nearly uniform brown. NatureServe rates this
          species G2 — globally imperiled — and more than 25 states list it as endangered or
          threatened. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            In late April and May, male Frosted Elfins establish perch sites on stems or low
            branches within a meter or two of the host plant — watching for females and launching
            brief intercept flights at passing insects. Mating and oviposition happen in the
            same small area; a stand of blooming Wild Blue Indigo or Wild Lupine is the entire
            active range of the adult during the flight period. The female lays single eggs
            in the crook of unopened flower buds. The caterpillar hatches inside the bud,
            feeds on the reproductive tissue from within, and shifts to developing seed pods
            as the season progresses. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Frosted_elfin%2C_%28Callophrys_irus%29_%286063869572%29.jpg/1280px-Frosted_elfin%2C_%28Callophrys_irus%29_%286063869572%29.jpg"
            alt="Frosted Elfin (Callophrys irus) adult resting on a plant stem with wings closed, showing the distinctive white-frosted outer margin on the hindwing underside that gives the species its name"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            The Frosted Elfin caterpillar can shift body color to match what it is eating —
            green among leaves, yellow-green or cream among flower petals. A larva on a
            flower stalk in May is nearly invisible without deliberate searching. The caterpillar
            cannot survive on leaves — it needs the floral tissue and developing seeds that
            exist for only four to six weeks per year. If the host plant does not bloom,
            the caterpillar has nothing to eat.
            <span className="photo-credit"> Photo: aecole2010&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Frosted_elfin,_(Callophrys_irus)_(6063869572).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            After the three-week adult flight ends in May, the mature caterpillar drops to
            the soil and pupates in the leaf litter and loose debris at the base of the host
            plant. The pupa overwinters through fall, winter, and early spring — eleven months
            in the ground for every three weeks as an adult on the wing. Adults eclose in
            late April as the host plant flowers begin to open. The number of caterpillars a
            single plant can support depends on how densely it blooms: an established Baptisia
            crown with 30 or 40 flower stalks can carry several larvae simultaneously; a
            first-year plant that produces only a few stalks may carry none. A Frosted Elfin
            yard needs a plant that has been in the ground long enough to bloom reliably. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Frosted Elfin uses two host plants across its range: Wild Lupine in the sandy
            pine barrens of the northeast, and Wild Blue Indigo across the midwest and south.
            Both plants grow in dry, open, full-sun soils — the same conditions that were
            the first to be cleared as European settlement moved through the region. As the
            host plants disappeared from the land, the butterfly disappeared with them. [1]
            The decline is not reversing on its own. Most counties where the Frosted Elfin
            once flew no longer have populations. The butterfly does not recolonize on its
            own once a landscape has been cleared — flight distances are short and there is
            no source population nearby to disperse from.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant Wild Blue Indigo in full sun and give it three to four years to bloom.
              The Frosted Elfin caterpillar feeds on flowers and seed pods, not leaves. A
              young Baptisia crown that has not yet bloomed does not yet support the caterpillar.
              Plant in well-drained soil in full sun, avoid fertilizer (Baptisia fixes its own
              nitrogen), and expect the first reliable bloom in year three or four. [2]
            </li>
            <li>
              Do not cut or deadhead the flower stalks in May and June. Frosted Elfin
              caterpillars feed on the flowers and developing seed pods from late April
              through June. Removing the stalks during that window removes the food source.
              Leave the stalks standing through at least late June — by then any surviving
              caterpillars have dropped to the ground. [2]
            </li>
            <li>
              Leave the leaf litter at the base of the plant undisturbed from September
              through late March. The pupa overwinters in the debris at the root crown.
              A fall cleanup that strips the ground beneath the plant removes it. Leave
              old material in place through winter. Cut dead Baptisia stalks to the ground
              in late March and let cuttings lie for a week before removing them. [2]
            </li>
            <li>
              Avoid systemic insecticide in or near the Baptisia bed from April through July.
              Systemic products absorbed through the roots enter the floral tissue. A caterpillar
              feeding on chemically treated flowers or seed pods ingests the insecticide.
              Contact sprays applied during the flight window can kill eggs and young larvae
              before they are visible to the eye. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('wild-blue-indigo')}>
            <span className="neighbor-name">Wild Blue Indigo</span>
            <span className="neighbor-note">The primary host plant in the midwest and south; the elfin needs the plant to bloom, not merely to survive — a non-blooming first-year crown does not support the caterpillar; established crowns with 30 or more flower stalks can carry several caterpillars simultaneously.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-lupine')}>
            <span className="neighbor-name">Wild Lupine</span>
            <span className="neighbor-note">The primary host plant in northeast pine barrens, where Frosted Elfin populations use Lupinus perennis flowers and pods in the same role that Wild Blue Indigo plays in the midwest; also the only host for the federally endangered Karner Blue butterfly.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-indigo-duskywing')}>
            <span className="neighbor-name">Wild Indigo Duskywing</span>
            <span className="neighbor-note">A second Baptisia specialist that lays on leaves rather than flowers; when Wild Blue Indigo blooms in May, both species can be present on the same plant simultaneously — the elfin inside the flower buds, the duskywing inside rolled leaflets below.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-hairstreak')}>
            <span className="neighbor-name">Gray Hairstreak</span>
            <span className="neighbor-note">A generalist hairstreak that includes Baptisia flower clusters and developing seed pods among its larval hosts; lays on the same structures the Frosted Elfin uses, but the Gray Hairstreak also uses dozens of other plant families and does not depend on Baptisia&apos;s presence.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.butterfliesandmoths.org/species/Callophrys-irus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Frosted Elfin</a></li>
            <li><a href="https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.103590/Callophrys_irus" target="_blank" rel="noopener noreferrer">NatureServe Explorer — Frosted Elfin (G2: Globally Imperiled)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
