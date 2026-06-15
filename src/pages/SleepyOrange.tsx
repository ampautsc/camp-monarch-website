import type { Page } from '../App'

interface SleepyOrangeProps {
  onNavigate: (page: Page) => void
}

export default function SleepyOrange({ onNavigate }: SleepyOrangeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sleepy_Orange_%28Abaeis_nicippe%29.jpg/1280px-Sleepy_Orange_%28Abaeis_nicippe%29.jpg"
          alt="A Sleepy Orange butterfly with wings open showing the vivid orange upperwings with irregular black borders and a black forewing spot"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Anne Toal&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Sleepy_Orange_(Abaeis_nicippe).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Sleepy Orange</h1>
        <p className="hero__lead">
          The Sleepy Orange is a small, fast, bright orange butterfly of open fields,
          roadsides, and garden edges — the smallest and quickest of the sulphur butterflies
          in the east. Wingspan is 1.25 to 2 inches. The upperwings are vivid orange with
          irregular black borders; the underside is yellow to tan with a mottled brown
          pattern that camouflages the resting butterfly perfectly against dried vegetation.
          The name has nothing to do with behavior — it refers to a small dark spot on the
          forewing underside that early naturalists thought looked like a closed eye. In the
          South it is resident year-round; in the North it is a summer visitor that appears
          from May onward. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Sleepy Oranges are fast, erratic fliers that move low over open ground.
            They nectar on a variety of native wildflowers — native clovers, native asters,
            native goldenrod, and partridge pea are favorites. When alarmed, they drop
            quickly into vegetation and close their wings, disappearing against dried
            stems and leaf litter — the mottled brown underside makes this camouflage
            remarkably effective. Males patrol open, sunny areas and perch on low
            vegetation to wait for females. In fall, Sleepy Oranges in the north move
            south along with migrating Cloudless Sulphurs, Orange Sulphurs, and Clouded
            Sulphurs — adding a small orange participant to the larger sulphur migration. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sleepy_Orange_-_Abaeis_nicippe%2C_Meadowwood_Farm_SRMA%2C_Mason_Neck%2C_Virginia.jpg/1280px-Sleepy_Orange_-_Abaeis_nicippe%2C_Meadowwood_Farm_SRMA%2C_Mason_Neck%2C_Virginia.jpg"
            alt="A Sleepy Orange butterfly perched on a plant stem with wings closed showing the mottled yellow-brown underside camouflage pattern"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            With wings closed, the Sleepy Orange becomes remarkably hard to spot. The
            underside varies seasonally: summer-form adults are yellow with light mottling;
            fall and winter adults develop a much deeper rusty-brown hindwing underside —
            a seasonal adaptation that helps them blend into fall and winter vegetation
            in areas where they overwinter.
            <span className="photo-credit"> Photo: Judy Gallagher&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Sleepy_Orange_-_Abaeis_nicippe,_Meadowwood_Farm_SRMA,_Mason_Neck,_Virginia.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            In the deep South, Sleepy Oranges fly year-round with multiple overlapping
            generations. In the Mid-Atlantic and north, they are summer visitors that
            arrive from May onward as populations expand north from resident southern
            populations; northern individuals do not survive winter. Caterpillars are
            green with a yellow and white side stripe and feed exclusively on native
            sennas (Senna hebecarpa, S. marilandica, and related species) and partridge
            pea (Chamaecrista fasciculata). Where native senna grows in sunny roadside
            and meadow habitats, Sleepy Orange is a reliable presence throughout summer. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Sleepy Orange is common and not of conservation concern in its resident
            southern range. [1] In the northern part of its summer range, populations
            fluctuate significantly year to year — some years abundant, other years
            nearly absent in a given area. It depends entirely on native senna and
            partridge pea for caterpillar development. The clearing of roadsides, meadows,
            and sunny forest edges where these native legumes grow is the primary limitation
            on northern populations. Wherever native senna and partridge pea are present in
            sunny habitat, Sleepy Orange is quick to find them. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native wild senna (Senna hebecarpa or S. marilandica). Wild senna is
              the primary caterpillar host plant for the Sleepy Orange. It is a stunning
              native perennial with bright yellow flowers that grows in full sun to light
              shade, reaches four to six feet, and is excellent for pollinators and a bold
              statement plant in a native garden. [2]
            </li>
            <li>
              Plant native partridge pea (Chamaecrista fasciculata). Partridge pea is a
              fast-growing native annual that is a caterpillar host for Sleepy Orange,
              Cloudless Sulphur, and Orange Sulphur. Scatter seeds in a sunny, disturbed
              area each fall — it reseeds readily and requires no irrigation once
              established. [2]
            </li>
            <li>
              Plant native goldenrod for late-summer nectar. Sleepy Oranges visit native
              goldenrod heavily before moving south. A stand of native goldenrod in bloom
              in August and September provides critical late-season nectar for southward-
              moving Sleepy Oranges and dozens of other species. [2]
            </li>
            <li>
              Leave sunny open areas unmowed through October. Sleepy Oranges use open,
              sunny, weedy ground — exactly the habitat eliminated by mowing. Delaying
              mowing in roadside margins, field edges, and open garden areas keeps host
              plants and nectar sources available through the late-summer migration period. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('orange-sulphur')}>
            <span className="neighbor-name">Orange Sulphur</span>
            <span className="neighbor-note">A larger orange sulphur butterfly found in the same open fields; Orange Sulphurs are more vivid orange above and use native clovers rather than senna — but the two species often nectar at the same native wildflowers in late summer.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cloudless-sulphur')}>
            <span className="neighbor-name">Cloudless Sulphur</span>
            <span className="neighbor-note">A large migratory sulphur that flies alongside Sleepy Oranges in fall; both move south along fields and roadsides, and both can be seen nectaring at native goldenrod in the same patches in September.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('checkered-white')}>
            <span className="neighbor-name">Checkered White</span>
            <span className="neighbor-note">Another native open-field butterfly that shares sunny, weedy disturbed habitat; the Checkered White prefers native mustard family plants while Sleepy Orange uses native sennas, but both benefit from the same undisturbed field margins.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Visits wild senna flowers while Sleepy Oranges evaluate the same plants for egg-laying; the bumblebee buzzes the anthers for pollen while the butterfly uses the same plant for caterpillar habitat — both in the same July afternoon.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Abaeis_nicippe/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Sleepy Orange</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Abaeis-nicippe" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Sleepy Orange</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
