import type { Page } from '../App'

interface IronweedProps {
  onNavigate: (page: Page) => void
}

export default function Ironweed({ onNavigate }: IronweedProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/148204368/large.jpg"
          alt="Ironweed flat-topped purple flower clusters in full bloom at Itasca, Illinois, August 2021"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: crwrcwamt&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/89728227" target="_blank" rel="noopener noreferrer">iNaturalist obs. 89728227</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Ironweed opens in August with flat-topped clusters of disc florets — no ray petals, no fringe. The color is darker purple than anything else blooming in the same weeks.</h1>
        <p className="hero__lead">
          Ironweed (<em>Vernonia fasciculata</em>) is a native prairie wildflower that grows 3 to
          6 feet tall and blooms from late July through September in meadows, stream banks, and
          roadsides across the central and eastern United States. Each flower head is a compact
          cluster of 15 to 35 disc florets — the same type found at the center of a coneflower,
          but without any ray petals around the outside. Without the fringe, the purple pigment is
          concentrated into a single plane visible from across a yard.
        </p>
        <p className="hero__lead">
          It blooms into September, the same weeks that monarch adults are moving south and
          accumulating fat reserves for the flight to Mexico. A monarch stopping at an Ironweed
          cluster in late August or September can nectar at dozens of individual florets in a
          single visit.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="florets-heading">
          <h2 id="florets-heading">Disc florets only — the structure that makes the purple uninterrupted</h2>
          <p>
            Most composite flowers have two kinds of florets: ray florets around the outside (what
            most people call the petals) and disc florets in the center (the small tubes that do the
            work of producing pollen and seed). A coneflower has both — the ring of drooping purple
            rays framing the spiny orange disc. Ironweed has only disc florets. The ray layer is
            absent entirely.
          </p>
          <p>
            Each disc floret is a narrow purple tube roughly 8 mm long with a two-part stigma
            extending a few millimeters above the tip. A single Ironweed flower head holds 15 to
            35 of these florets arranged in a compact flat-topped cluster about half an inch across.
            When a dozen of those clusters open on the same stem at once, the color presents as an
            uninterrupted mass — no yellow, no white, nothing diluting it.
          </p>
          <p>
            This is why Ironweed registers differently in a late-summer meadow than goldenrod or
            Joe Pye Weed. Both of those plants carry warm tones — yellow, mauve-pink. An Ironweed
            cluster in full bloom in September has no warm undertone at all. The color comes from
            the anthocyanin pigment in the floret walls, the same class of pigment that makes
            black-eyed peas purple and red cabbage red, but concentrated in a structure with no
            diluting ray layer.
          </p>
        </section>

        <section aria-labelledby="migration-heading">
          <h2 id="migration-heading">September bloom, 125 milligrams of fat, and a 2,500-mile flight</h2>
          <p>
            A monarch butterfly emerging from chrysalis in late August carries almost no fat. In
            the weeks before it leaves for Mexico, it feeds. Studies tracking monarch fat content
            through fall migration have documented adults increasing abdominal fat mass from near
            zero to roughly 125 milligrams — fat that fuels the 2,500-mile flight south and the
            several months of overwintering in the oyamel fir forests of Michoacán.
          </p>
          <p>
            Ironweed peaks in late August and September, covering the departure window for monarchs
            in the central and eastern United States. An adult monarch nectaring on an Ironweed
            cluster lands on the flat top of the flower head and works across it, probing one floret
            tube at a time with its proboscis. A single cluster stays in active bloom for two to
            three weeks as florets open in sequence from the outer edge toward the center. A plant
            with 20 or 30 clusters open at once provides dozens of individual feeding opportunities
            per visit.
          </p>
          <p>
            Goldenrod and New England Aster provide similar late-season nectar. Ironweed opens
            earlier than aster and in some years earlier than peak goldenrod, extending the
            available refueling window by two to three weeks. In a yard with all three blooming
            in sequence from late July through October, monarchs have nectar available through the
            entire migration period.
          </p>
        </section>

        <section aria-labelledby="name-heading">
          <h2 id="name-heading">The name came from farmers breaking scythe blades in hay meadows</h2>
          <p>
            "Ironweed" is a 19th-century common name. When a scythe blade swept through a hay
            meadow and hit a stand of Vernonia, the stems didn't cut easily. The vascular tissue
            of an Ironweed stem is densely fibrous, reinforced with lignin along the length of the
            stalk. Repeated encounters with this plant in fields being converted to hay gave it its
            name.
          </p>
          <p>
            That same fibrous structure is why Ironweed stands upright through October and into
            November after first frost, holding its seed heads above the dead vegetation around it.
            American Goldfinches work the dried seed clusters in October, picking out the small
            achene seeds. Song Sparrows and White-throated Sparrows forage in the stem litter below
            after the seeds drop. The plant that farmers named for the property that made it hard
            to eliminate keeps producing structure and food through the winter.
          </p>
          <p>
            The name also carries an irony that botanists have noted: a plant classified as a weed
            by the agricultural workers most likely to plow it under turns out to be one of the
            best fall nectar sources for monarch migration. The classification has not changed the
            biology.
          </p>
        </section>

        <section aria-labelledby="site-heading">
          <h2 id="site-heading">Average to moist soil, full sun — not the wet corner, but not the dry edge</h2>
          <p>
            In its native range, Ironweed grows in moist meadows, floodplain edges, and roadsides
            with seasonal wet periods. In a yard setting, it grows well in average garden soil with
            moderate moisture and full sun. It tolerates a low corner that drains within a week
            after rain, as well as a standard border bed with reasonable soil. It does not require
            the persistently wet conditions that Swamp Milkweed or Buttonbush need, and it does
            not thrive in dry, well-drained sandy soil.
          </p>
          <p>
            Ironweed spreads by rhizome and by seed. A single plant expands to a clump 2 to 3 feet
            across over three to four years. Deadheading the flower heads before seed set limits
            spread; leaving them intact lets goldfinches and sparrows work the seed heads through
            fall and winter. Cut the stems back to 6 inches in late February before new growth
            begins. The plant reappears in May and reaches full height by late July.
          </p>
          <p>
            At 3 to 6 feet, Ironweed is tall enough to plant behind shorter species — Purple
            Coneflower, Wild Bergamot, Black-eyed Susan — so that the fall bloom rises above the
            finished spring and summer layers. The combination of Ironweed, Canada Goldenrod, and
            New England Aster in the same bed provides open flowers from late July through October
            frost.
          </p>
        </section>

        <section aria-labelledby="context-heading">
          <h2 id="context-heading">Ironweed in the thirteen-native sequence — late-summer bridge before goldenrod peaks</h2>
          <p>
            In a Camp Monarch garden, Ironweed opens the late-summer to fall sequence. Joe Pye
            Weed starts in August and carries through September. Ironweed blooms in the same
            window and extends slightly later. Canada Goldenrod and New England Aster peak from
            late August through October. Together these four species provide open flowers for
            migrating monarchs from early August through hard frost, covering the entire migration
            departure period for the central and eastern flyway.
          </p>
          <p>
            A yard with Ironweed and goldenrod blooming simultaneously in September presents a
            monarch with two refueling options in the same space — one in deep purple, one in
            bright yellow. Both provide nectar. Both are native. The contrast is visible from the
            air, and monarchs moving south have been observed nectaring on both in alternating
            visits within the same stop.
          </p>
          <div className="connections">
            <h3>Plants and species connected to Ironweed</h3>
            <ul>
              <li>
                <button className="link-button" onClick={() => onNavigate('monarch-life')}>
                  Monarch Butterfly
                </button>{' '}
                — monarch adults nectaring in August and September on Ironweed clusters are
                building fat reserves for the 2,500-mile migration to Mexico; Ironweed is one of
                the bloom sources that overlaps with peak departure timing
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('canada-goldenrod')}>
                  Canada Goldenrod
                </button>{' '}
                — blooms in the same late August to October window; planting Ironweed and goldenrod
                together doubles the fall nectar availability for migrating monarchs, bees, and
                native wasps through the same weeks
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('new-england-aster')}>
                  New England Aster
                </button>{' '}
                — opens in late August and blooms through hard frost, extending the fall bloom
                sequence past the point where Ironweed finishes; the three together — Ironweed,
                goldenrod, aster — provide continuous open flowers from July through November
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('american-goldfinch')}>
                  American Goldfinch
                </button>{' '}
                — works Ironweed seed heads in October and November after flowering is done,
                picking the small achene seeds from the dried clusters while the upright stems
                hold them above the leaf litter
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
