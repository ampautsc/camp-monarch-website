import type { Page } from '../App'

interface OlympiaMarbleProps {
  onNavigate: (page: Page) => void
}

export default function OlympiaMarble({ onNavigate }: OlympiaMarbleProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/Olympia_Marble_%28Euchloe_olympia%29_%288936138184%29.jpg"
          alt="An Olympia Marble butterfly with wings open on limestone rock showing the white upperwings with a gray forewing tip and the orange-tipped antennae"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1028}
          height={720}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Aaron Carlson&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Olympia_Marble_(Euchloe_olympia)_(8936138184).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Olympia Marble</h1>
        <p className="hero__lead">
          The Olympia Marble is one of the most fleeting butterflies in eastern North
          America — a small white butterfly with a brilliant green-marbled hindwing
          underside that flies for only six weeks in April and May, then disappears until
          the following spring. Wingspan is 1.25 to 1.75 inches. The white upperwings with
          a gray forewing tip look plain at first; the moment it lands and closes its wings,
          the intricate yellow-green marbling of the underside — unlike any other eastern
          butterfly — makes identification unmistakable. It is tied entirely to native rock
          cresses on limestone outcrops, cedar glades, and dry rocky banks. No rock cress,
          no Olympia Marble. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Olympia Marbles fly low over rocky outcrops, limestone pavements, dry gravelly
            banks, and cedar glade margins in April and May — never far from the native rock
            cress plants they require. Males patrol rocky hilltops and prominent ledge
            exposures looking for females. Both sexes nectar on early-blooming native
            wildflowers: wild columbine, spring cress, and toothwort are favored where
            they grow near the host plant habitat. Females spend most of their short lives
            walking rocky outcrops, pressing their feet to every small mustard-family
            plant they encounter, tasting the leaf chemistry. When the signal matches, they
            lay a single pale egg on the leaf or stem. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Olympia_Marble_%28Euchloe_olympia%29_%288940159612%29.jpg"
            alt="An Olympia Marble butterfly with wings closed showing the brilliant yellow-green marbled pattern on the hindwing underside that gives the species its name"
            width={1004}
            height={858}
            loading="lazy"
          />
          <figcaption>
            The Olympia Marble's distinctive field mark is visible only when it lands and
            closes its wings: a dense yellow-green marbling along the hindwing veins that
            covers much of the wing surface. No other common white butterfly in the eastern
            United States shares this pattern. The antennae are orange-tipped — another
            helpful field mark visible at close range.
            <span className="photo-credit"> Photo: Aaron Carlson&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Olympia_Marble_(Euchloe_olympia)_(8940159612).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The Olympia Marble produces one brood per year and overwinters as a pupa attached
            to a plant stem — often the same rock cress stem on which the caterpillar fed.
            Adults emerge in mid-April as the first rock cresses begin to bloom. By early
            June, every adult in the population has died. The species then exists only as
            pupae through summer, fall, and winter. Caterpillars are gray-green with white
            stripes and feed on rock cresses (Boechera, Arabis) and spring cresses
            (Cardamine), completing development in three to four weeks before pupating
            in late May. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Olympia Marble is uncommon to rare across much of the east and is listed as
            threatened or of special concern in New York, New Hampshire, and other northeastern
            states. [1] The core of its range is the limestone-underlain midwest — Ohio,
            Indiana, Illinois, Missouri — where cedar glades, rocky outcrops, and dry prairies
            still support rock cresses. The species is highly sensitive to habitat loss: any
            clearing of dry rocky outcrops, mowing of rock cress colonies during the spring
            flight, or removal of standing vegetation in fall (which removes overwintering
            pupae) can eliminate a local population. Where habitat is intact, small populations
            persist reliably year after year. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Leave native rock cresses and spring cresses standing on any rocky, gravelly,
              or dry limestone exposure. Native lyre-leaved rock cress (Arabis lyrata) and
              spring cresses (Cardamine spp.) volunteer in thin soil on rocky edges, gravel
              paths, and dry banks. Most homeowners pull them as weeds. Left standing, they
              self-seed in the same rocky corner each year — the only host plants the Olympia
              Marble can use. [2]
            </li>
            <li>
              Do not clear or cut dry rocky edges in October through March. The Olympia Marble
              overwinters as a pupa attached to plant stems in the same rocky habitat where
              adults flew. Autumn clearing of dried plant debris removes overwintering pupae
              along with the stems they are attached to. Leave standing dried vegetation in
              rocky outcrops and dry gravelly banks undisturbed through winter. [2]
            </li>
            <li>
              Delay mowing rocky or gravelly strips until after May 15. Adults are on the
              wing from mid-April through late May. Mowing through a rocky edge with rock
              cress plants in early May removes host plants while females are actively
              searching and laying. Delaying that cut by a few weeks preserves the
              oviposition window. [2]
            </li>
            <li>
              Plant native wild columbine (Aquilegia canadensis) near rocky exposures. Wild
              columbine blooms in April and May at the same time the Olympia Marble is flying
              and grows naturally in thin soil on rocky ledges and slopes — exactly the habitat
              where rock cress and Olympia Marbles occur. It provides adult nectar immediately
              adjacent to host plant habitat. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('checkered-white')}>
            <span className="neighbor-name">Checkered White</span>
            <span className="neighbor-note">Another native white butterfly that uses native mustard-family host plants in open dry habitat; while the Olympia Marble is restricted to rocky outcrops in spring, Checkered Whites occupy dry fields from April to October.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('west-virginia-white')}>
            <span className="neighbor-name">West Virginia White</span>
            <span className="neighbor-note">Shares the single-brood, spring-only life cycle and dependence on native mustard-family host plants; but occupies shaded woodland stream banks rather than open limestone outcrops — companion specialist in different microhabitat.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('spring-azure')}>
            <span className="neighbor-name">Spring Azure</span>
            <span className="neighbor-note">Appears on the same warm April days as the Olympia Marble and is found across a wider range of habitats; both are first-of-spring species that disappear before summer, often seen nectaring at the same early wildflowers.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cabbage-white')}>
            <span className="neighbor-name">Cabbage White</span>
            <span className="neighbor-note">The introduced white butterfly that arrived from Europe in the 1860s and now occupies every disturbed habitat in eastern North America; it uses the same glucosinolate-detection chemistry as the Olympia Marble but prefers introduced weedy mustards.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Euchloe_olympia/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Olympia Marble</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Euchloe-olympia" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Olympia Marble</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
