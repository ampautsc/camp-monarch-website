import type { Page } from '../App'

interface BoxTurtlesProps {
  onNavigate: (page: Page) => void
}

export default function BoxTurtles({ onNavigate }: BoxTurtlesProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Terrapene_carolina_ssp._carolina_-_Eastern_Box_Turtle_%286-01-23%29_01.jpg/1280px-Terrapene_carolina_ssp._carolina_-_Eastern_Box_Turtle_%286-01-23%29_01.jpg"
          alt="An Eastern Box Turtle on the forest floor, showing its high-domed brown shell with yellow and orange markings"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Jasper Shide&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Terrapene_carolina_ssp._carolina_-_Eastern_Box_Turtle_(6-01-23)_01.jpg" target="_blank" rel="noopener noreferrer">CC0 (public domain)</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Box Turtles</h1>
        <p className="hero__lead">
          The Eastern Box Turtle is one of the longest-lived vertebrates in North America,
          commonly reaching 40 to 60 years and documented past 100. It has a high-domed
          brown shell with yellow and orange markings, and a hinged lower shell that closes
          completely — the only North American turtle that can fully enclose itself. It
          spends its entire life within a few hundred meters of where it was born. The IUCN
          lists it as Vulnerable. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Box turtles move slowly through their home range — typically just under a
            hectare in size — foraging for earthworms, slugs, caterpillars, mushrooms,
            and berries. They are most active after rain, when worms come to the surface.
            On hot dry days they rest in shallow depressions in moist soil or beneath leaf
            litter, often returning to the same spot year after year. They are one of the
            few vertebrates that can eat toxic mushrooms (including Amanita) and may
            accumulate the toxins in their flesh — eating a box turtle that recently ate
            mushrooms has caused human poisonings. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Eastern_Box_Turtle_8679.jpg/1280px-Eastern_Box_Turtle_8679.jpg"
            alt="A close view of an Eastern Box Turtle showing the orange and yellow patterning on its shell and the hinged plastron"
            width={1280}
            height={786}
            loading="lazy"
          />
          <figcaption>
            The hinged plastron (lower shell) is unique to box turtles among North American
            species. When fully closed, predators cannot reach the head, legs, or tail
            through the shell — a turtle can remain locked for hours.
            <span className="photo-credit"> Photo: Jarek Tuszyński&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Eastern_Box_Turtle_8679.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Box turtles hibernate underground from October through March or April,
            digging into the soil below the frost line. They emerge when daytime
            temperatures consistently reach about 50–60°F. Mating occurs in spring
            through early summer. Females lay three to eight eggs in a shallow nest
            in June or July; the nest is dug, eggs are laid, and the female never
            returns. Eggs hatch in September and October, though hatchlings sometimes
            overwinter in the nest. Young turtles take five to seven years to reach
            reproductive maturity — the very slow pace that makes vehicle mortality
            so devastating to local populations. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Eastern Box Turtle is listed as Vulnerable by the IUCN, with populations
            declining throughout its range. [2] Vehicle collisions are the primary cause
            of mortality — even a low rate of road deaths can eliminate a local population
            because box turtles reproduce so slowly and take so long to reach maturity.
            A single adult female killed by a vehicle represents potentially 30 more years
            of eggs that will never be laid. Collection for the pet trade has also
            significantly reduced populations in some areas. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Stop and help a box turtle crossing a road: pick it up and move it to the
              road shoulder in the direction it was already heading. Do not relocate it
              to a &quot;better&quot; location — box turtles that are moved outside their home
              range spend years trying to return and usually die in the attempt. [3]
            </li>
            <li>
              Check before mowing meadow edges, roadsides, and gardens from May through
              September. Box turtles rest in tall grass and are killed by mowers regularly.
              A pass through the area by foot first, or raising the mower deck, saves lives.
              [3]
            </li>
            <li>
              Plant berry-bearing native shrubs — elderberry, wild strawberry, native
              viburnums, and Virginia creeper are all eaten by box turtles, especially in
              fall when they are building fat reserves for hibernation. [3]
            </li>
            <li>
              Leave woodland edges and unmowed patches on your property. Box turtles
              need shaded, moist foraging habitat and cannot thrive in lawn-dominated
              landscapes with no leaf litter or dense vegetation. [3]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('virginia-opossum')}>
            <span className="neighbor-name">Virginia Opossum</span>
            <span className="neighbor-note">A fellow slow-moving forest-floor omnivore foraging the same leaf litter for invertebrates and fallen fruit; occasionally a predator of box turtle eggs.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">Shares the same moist mature forest habitat; both depend on intact forest with undisturbed leaf litter and healthy earthworm and invertebrate populations.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-chipmunk')}>
            <span className="neighbor-name">Eastern Chipmunk</span>
            <span className="neighbor-note">Forages the same forest floor for berries, seeds, and invertebrates; chipmunk burrows occasionally serve as shelter for hibernating box turtles.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-fox')}>
            <span className="neighbor-name">Red Fox</span>
            <span className="neighbor-note">Digs up box turtle eggs; the two share the same woodland edges and meadow borders where turtles nest and foxes hunt.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Terrapene_carolina/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Eastern Box Turtle</a></li>
            <li><a href="https://www.iucnredlist.org/species/21641/97429739" target="_blank" rel="noopener noreferrer">IUCN Red List — Eastern Box Turtle</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds (and Wildlife)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
