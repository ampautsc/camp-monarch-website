import type { Page } from '../App'

interface RedAdmiralProps {
  onNavigate: (page: Page) => void
}

export default function RedAdmiral({ onNavigate }: RedAdmiralProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Vanessa_atalanta_%284532684780%29.jpg/1280px-Vanessa_atalanta_%284532684780%29.jpg"
          alt="A Red Admiral butterfly resting with wings open on a leaf, showing its distinctive black wings with bright orange-red bands and white spots near the wingtips"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: nottsexminer&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Vanessa_atalanta_(4532684780).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Red Admiral</h1>
        <p className="hero__lead">
          The Red Admiral is one of the most distinctive butterflies in North America —
          velvety black wings with vivid orange-red diagonal bands crossing the forewings
          and bordering the hindwings, and white spots near the wingtips. Its wingspan
          is 1.75 to 2.25 inches. It appears in gardens, woodland edges, and parks from
          early spring through late fall, often landing on people and sunny spots on the
          ground. Its caterpillars eat stinging nettles. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Red Admirals are territorial and predictable. Males stake out a sunny spot
            — often a clearing, a gap in the treeline, or a warm patch of ground — and
            patrol it with fast, erratic flight, spiraling up to chase intruders before
            returning to the same perch. They are often seen basking on warm pavement,
            tree trunks, or wooden fences in the afternoon. Adults feed on fermenting
            fruit, tree sap, and nectar; they are strongly attracted to rotting apples
            and other soft fruit. They also nectar on native asters, coneflower, and
            goldenrod in late summer. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/06/Admiral_%28Vanessa_atalanta%29_an_der_Bl%C3%BCte_des_Efeus_%28Ende_September%29.jpg"
            alt="A Red Admiral butterfly nectaring on ivy flowers in late September, showing the orange forewing band and black wings from above"
            width={1000}
            height={1296}
            style={{ objectPosition: 'center top' }}
            loading="lazy"
          />
          <figcaption>
            Red Admirals feeding on ivy flowers in fall — one of the last nectar sources
            of the season. They also feed heavily on fermenting fallen fruit and tree sap,
            which sustains them later in the season than most other butterflies.
            <span className="photo-credit"> Photo: Johann Seidl&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Admiral_(Vanessa_atalanta)_an_der_Bl%C3%BCte_des_Efeus_(Ende_September).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The Red Admiral produces two generations per year in the north. Overwintering
            adults (a fraction survive mild winters in the southern US) emerge in early
            spring and fly north. Females lay eggs singly on young nettle leaves; the
            caterpillar lives inside a leaf it rolls and sews shut with silk. The first
            generation of new adults emerges in June, the second in late summer through
            October. Fall adults often loiter into November on warm days, feeding on
            fermenting fruit and late flowers before the season ends. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Red Admiral is common and listed as Least Concern globally. [2] It
            is unusual among eastern butterflies in that its primary host plant —
            stinging nettle (Urtica dioica) — is abundant along roadsides, stream
            banks, and disturbed areas and is not under threat. Red Admiral populations
            fluctuate from year to year based on overwinter survival and spring
            migration success. In some years it is extremely abundant; in others it is
            scarce until the late-summer generation increases numbers. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Allow a patch of stinging nettles to grow in a back corner of the garden.
              Stinging nettles are the primary host plant for Red Admiral caterpillars.
              A patch as small as a square yard can support multiple caterpillars; nettles
              in a moist, partly shaded area grow vigorously and can be contained with
              a border. Wear gloves when working near them. [2]
            </li>
            <li>
              Leave some fallen fruit under apple, pear, or crabapple trees. Red Admirals
              (and other anglewings and commas) feed heavily on fermenting fruit, especially
              in late summer and fall. A few soft apples left to ferment on the ground
              can draw multiple adults at once. [2]
            </li>
            <li>
              Plant native goldenrod and native asters for fall nectar. The late-summer
              generation of Red Admirals needs nectar in August through October before the
              season ends. Native goldenrod blooming from August through frost is the
              most important late-season nectar source. [2]
            </li>
            <li>
              Leave some areas of bark mulch or leaf litter under trees in sunny spots.
              Red Admirals bask on warm horizontal surfaces — a small patch of mulch or
              a sunny stone in the garden provides basking habitat that keeps territorial
              males in the area. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('painted-lady')}>
            <span className="neighbor-name">Painted Lady</span>
            <span className="neighbor-note">A close relative in the same genus (Vanessa) that shares the same open habitat and nectar sources; both can be abundant in the same garden in the same season.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
            <span className="neighbor-name">Eastern Tiger Swallowtail</span>
            <span className="neighbor-note">Shares the same native wildflower gardens as a nectar source; both are large, conspicuous butterflies that visit the same goldenrod and aster patches in late summer.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-phoebe')}>
            <span className="neighbor-name">Eastern Phoebe</span>
            <span className="neighbor-note">Nests on the same woodland edges and clearings where Red Admirals patrol; phoebes catch adult butterflies on the wing.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('viceroy')}>
            <span className="neighbor-name">Viceroy</span>
            <span className="neighbor-note">Another medium-sized butterfly of open habitats that uses willows as its host plant — often seen in the same moist woodland-edge areas where Red Admirals forage.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Vanessa_atalanta/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Red Admiral</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Vanessa-atalanta" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Red Admiral</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
