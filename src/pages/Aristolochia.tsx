import type { Page } from '../App'

interface AristolochiaProps {
  onNavigate: (page: Page) => void
}

export default function Aristolochia({ onNavigate }: AristolochiaProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/135886606/large.jpg"
          alt="Aristolochia macrophylla foliage — overlapping large kidney-shaped leaves on a woody vine climbing along a forest edge, Randolph County West Virginia June 2021"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: huntingbon&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/82776840" target="_blank" rel="noopener noreferrer">iNaturalist obs. 82776840</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Vines</div>
        <h1>The female Pipevine Swallowtail detects this vine by the aromatic compounds it releases — the same compounds are present in <em>Aristolochia elegans</em>, the ornamental sold at most garden centers, and every caterpillar she lays on it dies within the first two instars</h1>
        <p className="hero__lead">
          Native pipevine (<em>Aristolochia macrophylla</em>, commonly called Dutchman's pipe) is the
          primary larval host for Pipevine Swallowtail butterflies throughout the eastern United States.
          Its large kidney-shaped leaves — some reaching ten inches across — give early instars
          enough leaf surface to feed in groups before they disperse across the vine.
          An established plant can be stripped of its leaves twice in a single growing season
          and push new growth from remaining buds both times.
        </p>
        <p className="hero__lead">
          The vine's common name comes from the flower shape: a brownish-yellow curved tube
          that bends at the mouth like a Meerschaum pipe, one to two inches long,
          appearing in May and June. Most people notice the large leaves first.
          The flowers hang at the leaf axils and are easy to walk past without seeing.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="elegans-heading">
          <h2 id="elegans-heading">The compounds she detects from the air — and why they lead her to the wrong plant</h2>
          <p>
            Female Pipevine Swallowtails locate host plants in flight by detecting volatile
            aristolochic-acid precursors and related aromatic compounds released by
            <em> Aristolochia</em> foliage. The female's antennae carry sensory neurons
            tuned to these compounds, and she responds by descending toward the source
            to evaluate the plant surface for egg-laying.
          </p>
          <p>
            <em>Aristolochia elegans</em> — sold as Calico flower or Elegant Dutchman's pipe
            at general garden centers — is a tropical ornamental from South America grown for
            its mottled purple-and-white flowers. It produces the same volatile cues as native
            <em> Aristolochia</em>. A female in flight cannot separate native species from the
            ornamental by chemistry alone. She lands, finds the leaf surface acceptable, and
            lays rust-red egg clusters of three to six on the underside of young leaves.
          </p>
          <p>
            The caterpillars hatch and begin feeding. The alkaloid profile in <em>A. elegans</em>
            differs enough from native species to be acutely toxic to larvae adapted to native
            chemistry. They die within the first or second instar — before the maroon body with
            orange-tipped tubercles appears, before they reach the size where individual
            caterpillars are visible from a normal walking distance. A garden planted only with
            <em> A. elegans</em> collects egg batches from every female that passes through
            the yard and kills all of them.
          </p>
        </section>

        <figure className="species-content-photo">
          <img
            src="https://inaturalist-open-data.s3.amazonaws.com/photos/135886629/large.jpg"
            alt="Aristolochia macrophylla flower close-up — a curved brownish-yellow tube about 1.5 inches long, bending at the open end like a bent pipe, emerging from the leaf axil on a woody vine in West Virginia June 2021"
            loading="lazy"
          />
          <figcaption>
            The native pipevine flower: a brownish-yellow curved tube, 1.5 to 2 inches long.
            The opening bends back at the end — the shape that gave the plant its common name.
            <em> Aristolochia elegans</em> flowers are visually distinct: mottled purple-and-white
            with a flat disk at the opening. At a nursery, if the plant is in flower,
            the flower shape is the fastest identification check.
            <span className="photo-credit"> Photo: huntingbon&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/82776840" target="_blank" rel="noopener noreferrer">iNaturalist obs. 82776840</a>&nbsp;· CC0 / No Rights Reserved</span>
          </figcaption>
        </figure>

        <section aria-labelledby="identification-heading">
          <h2 id="identification-heading">Leaf shape, flower color, and what to check before buying</h2>
          <p>
            <em>Aristolochia macrophylla</em> leaves are kidney-shaped to broadly heart-shaped,
            up to ten inches across, with a smooth upper surface and a deep basal notch where the
            petiole attaches. The vine is deciduous — leaves drop in autumn and regrow from woody
            stems the following spring. In northern gardens where winters reach -20°F,
            established plants sometimes die back to the ground and return from the root the
            following May.
          </p>
          <p>
            <em>Aristolochia tomentosa</em> — woolly Dutchman's pipe — is the other native eastern
            species. Its leaves are slightly smaller (five to eight inches) with dense soft hairs
            visible on the undersides when you turn a leaf over. <em>A. tomentosa</em> handles
            drier soil and more afternoon shade than <em>A. macrophylla</em>, making it the
            better choice for a planting at the edge of a canopy where moisture is inconsistent.
            Both species support Pipevine Swallowtail caterpillars through a full season.
          </p>
          <p>
            At a nursery, the Latin name tag is the only reliable check. Young plants of
            <em> A. macrophylla</em> and <em>A. elegans</em> look similar in a four-inch pot —
            leaf shape and size overlap in juvenile plants.
            A tag reading "Aristolochia elegans," "Calico flower," or "Elegant Dutchman's pipe"
            is the ornamental tropical species. A tag reading <em>A. macrophylla</em>,
            <em> A. tomentosa</em>, or "Dutchman's pipe" at a native plant nursery is
            the correct plant.
          </p>
        </section>

        <figure className="species-content-photo">
          <img
            src="https://inaturalist-open-data.s3.amazonaws.com/photos/662916043/large.jpg"
            alt="Aristolochia macrophylla vine in leaf at woodland edge, large overlapping kidney-shaped leaves covering support structure, George Washington National Forest Virginia May 2026"
            loading="lazy"
          />
          <figcaption>
            An established <em>Aristolochia macrophylla</em> vine at woodland edge,
            George Washington National Forest, May 2026.
            The large overlapping leaves create the dense canopy that makes the vine
            detectable from the air — a female Pipevine Swallowtail descends when her
            antennae pick up volatile compounds drifting from the foliage.
            <span className="photo-credit"> Photo: sholsenbeck&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/363175171" target="_blank" rel="noopener noreferrer">iNaturalist obs. 363175171</a>&nbsp;· CC0 / No Rights Reserved</span>
          </figcaption>
        </figure>

        <section aria-labelledby="establishment-heading">
          <h2 id="establishment-heading">Year one: root system. Year three: fifteen feet of new stem per season</h2>
          <p>
            <em>Aristolochia macrophylla</em> twines — it wraps around whatever it contacts
            rather than clinging with adhesive pads. A chain-link fence, wooden post, trellis,
            or the lower trunk of a large deciduous tree provides adequate support.
            The vine does not penetrate bark or masonry the way English ivy does;
            it adds stem weight and wraps, which is manageable on a fence post
            but should be monitored on young tree trunks.
          </p>
          <p>
            In the first growing season, visible top growth is modest — a few feet of new stem
            from a container-grown plant while the root system extends.
            In the second year, top growth accelerates as the root becomes established.
            By the third and fourth year, with adequate moisture and at least a half-day of direct sun,
            the vine can extend ten to fifteen feet in a single season.
            A plant set at the base of a six-foot fence section will cover it fully
            by the end of its third season.
          </p>
          <p>
            A vine that gets stripped of leaves by caterpillars in July will push new leaves
            from remaining buds within two to three weeks. A vine defoliated twice in one season
            will look thin by September but come through winter and leaf out the following spring.
            The caterpillars cycling through the vine in summer are completing two or three
            generations; adults from the late generation overwinter as chrysalides on woody stems
            and fence posts within a few feet of the plant.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Verify the Latin name, plant it against a support, then let the caterpillars work</h2>
          <ol className="step-list">
            <li>
              <strong>Confirm the species before purchase.</strong>{' '}
              General garden centers sell <em>Aristolochia elegans</em> as "Dutchman's pipe"
              or "Calico flower" without noting that it kills Pipevine Swallowtail caterpillars.
              Buy from a native plant nursery, or verify the Latin name reads
              <em> A. macrophylla</em> or <em>A. tomentosa</em> before leaving the parking lot.
            </li>
            <li>
              <strong>Install a support before planting.</strong>{' '}
              The vine needs something to wrap around within reach of its first new stems.
              A chain-link fence, wooden trellis, or post-and-wire works well.
              Set the root ball within six inches of the support's base;
              the vine will find it without training.
              Morning sun with afternoon shade is acceptable — full sun is better.
            </li>
            <li>
              <strong>Expect the first season to look unimpressive.</strong>{' '}
              Two to three feet of new growth in year one is normal.
              The root is growing below ground during that season.
              Water once a week through dry stretches in the first summer;
              after the second year, the plant manages on its own in most eastern soils.
            </li>
            <li>
              <strong>Leave caterpillar-stripped leaves.</strong>{' '}
              An established <em>Aristolochia</em> can lose all its leaves to feeding caterpillars
              and regrow them within three weeks. Removing or spraying caterpillars is
              the one action that defeats the purpose of planting the vine.
              The adults that emerge from chrysalides on your fence posts in September
              are completing the generation that hatched on leaves you left in July.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('pipevine-swallowtail')}>
                Pipevine Swallowtail
              </button>{' '}
              — the butterfly that depends on this vine; caterpillars feed in groups on young leaves and carry aristolochic acids through metamorphosis into the adult wing scales, where they remain aversive to birds for the butterfly's entire life
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spicebush-swallowtail')}>
                Spicebush Swallowtail
              </button>{' '}
              — Batesian mimic of the Pipevine; the female copies the iridescent blue-green hindwing pattern without carrying any aristolochic acids; its caterpillars use spicebush and sassafras, not pipevine
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spicebush')}>
                Spicebush
              </button>{' '}
              — a shade-tolerant native shrub for the same woodland-edge planting where pipevine climbs; hosts Spicebush Swallowtail and Promethea Moth caterpillars in the shrub layer below the vine
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
