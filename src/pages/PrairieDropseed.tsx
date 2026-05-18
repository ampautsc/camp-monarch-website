import type { Page } from '../App'

interface PrairieDropseedProps {
  onNavigate: (page: Page) => void
}

export default function PrairieDropseed({ onNavigate }: PrairieDropseedProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/570092674/large.jpg"
          alt="Prairie Dropseed mound with fine arching green leaves and airy seed panicles held above the foliage on wiry stems, Split Rock Creek Trail, South Dakota, September 2025"
          className="species-hero-image"
          style={{ objectPosition: 'center 60%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: omcelroy&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/315577613" target="_blank" rel="noopener noreferrer">iNaturalist obs. 315577613</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Prairie Dropseed seeds ripen in September inside a thin, oily husk — on a warm afternoon, as you walk past the plant, the volatiles release a fragrance that smells like coriander or buttered popcorn.</h1>
        <p className="hero__lead">
          Prairie Dropseed (<em>Sporobolus heterolepis</em>) is a native bunchgrass that forms a
          mound of hair-thin arching leaves, 18 to 24 inches tall, in full sun and dry to average
          soil. It grows from a single crown that does not spread by runners or self-seed
          aggressively. In late August and September it sends up airy seed-bearing panicles on
          wiry stems that tremble in the lightest wind.
        </p>
        <p className="hero__lead">
          The plant is native to the tallgrass and mixed-grass prairies of the central and eastern
          United States. It grows slowly — the first year is a small tuft — but the crown that
          establishes in year two persists for decades without division or replanting.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fragrance-heading">
          <h2 id="fragrance-heading">The volatile oils in the seed coat — coriander, popcorn, or cilantro, depending on who is walking by</h2>
          <p>
            Each Prairie Dropseed seed sits inside the pericarp, a thin translucent seed coat
            infused with volatile compounds. As seeds ripen in September and temperatures rise
            in afternoon sun, these volatiles off-gas into the surrounding air. The scent has
            been described as coriander, buttered popcorn, cilantro, or a sweet-savory combination
            of all three — the variation is real and reflects differences in individual olfactory
            receptors rather than inconsistency in the plant.
          </p>
          <p>
            Prairie Dropseed is wind-pollinated; the open panicle structure disperses pollen
            through air movement, not through flowers that reward visiting insects. The volatile
            compounds in the seed coat have no confirmed ecological function for the grass itself.
            For a homeowner who has never encountered the plant in seed, the fragrance is
            unexpected enough to stop someone on a garden path in the third week of September.
          </p>
        </section>

        <figure className="species-content-photo">
          <img
            src="https://inaturalist-open-data.s3.amazonaws.com/photos/50034840/large.jpg"
            alt="Prairie Dropseed clump with seed panicles held above fine arching leaf mound, late summer, Stephenson County Illinois August 2019"
            loading="lazy"
          />
          <figcaption>
            Prairie Dropseed in late August: seed panicles rise above the arching leaf mound on
            stems fine enough that they are nearly invisible against the sky. The leaf texture —
            hair-thin, mid-green, arching outward from the center — is unlike any broadleaf plant
            in a yard. When wind moves through it, the mass shifts the way shallow water moves.
            <span className="photo-credit"> Photo: k2018lena&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/31936140" target="_blank" rel="noopener noreferrer">iNaturalist obs. 31936140</a>&nbsp;· CC0 / No Rights Reserved</span>
          </figcaption>
        </figure>

        <section aria-labelledby="skippers-heading">
          <h2 id="skippers-heading">Leonard's Skipper, Cobweb Skipper, and the grass blades that broadleaf plants cannot supply</h2>
          <p>
            Grass skippers are a subfamily of butterflies whose larvae feed on grass blades rather
            than broadleaf plants. Leonard's Skipper (<em>Hesperia leonardus</em>) — a small
            orange-and-brown butterfly that flies in late August and September — is closely
            associated with native prairie grasses across the central and eastern United States.
            Females lay eggs on grass blades in late summer. The young larvae hatch and overwinter
            before resuming feeding in spring on the same grass clump.
          </p>
          <p>
            Cobweb Skipper (<em>Hesperia metea</em>) follows a similar pattern: it flies earlier
            in spring and is also linked to native bunchgrasses. In a yard planted only with
            broadleaf wildflowers, both species have nothing to complete their life cycle. Prairie
            Dropseed is the one planting that adds the resource they cannot obtain from milkweed,
            bergamot, or aster.
          </p>
          <p>
            Beyond skippers, the dried seed heads hold seeds through November and December.
            Dark-eyed Juncos, American Tree Sparrows, and Song Sparrows land on the stems and
            pull seeds from the dried panicles through fall and early winter. A yard with Prairie
            Dropseed seed heads left standing after frost extends the foraging window for
            ground-feeding birds that have already worked through other seed sources.
          </p>
        </section>

        <section aria-labelledby="establishment-heading">
          <h2 id="establishment-heading">Year one is a tuft. Year three is a full mound. After that, the same crown grows for decades without replanting.</h2>
          <p>
            Prairie Dropseed establishes slowly. A plug set out in May puts down deep roots
            through its first growing season and appears above ground as little more than a small
            grass tuft. By the end of the second year the crown has widened. By year three the
            characteristic 18-to-24-inch arching mound is formed. After that the plant adds size
            slowly from the same crown — it does not need dividing, does not self-seed into the
            surrounding bed, and does not require replanting. The same clump made this spring will
            still be in that spot in 30 years.
          </p>
          <p>
            Because establishment is slow, site conditions matter more for Prairie Dropseed than
            for annual wildflowers. Full sun is the one requirement with no workaround — the plant
            performs poorly in more than about two hours of shade per day. Soil drainage is more
            predictive of long-term success than fertility: Prairie Dropseed evolved on
            well-drained prairie soils and will decline in persistently wet ground. Competition
            from aggressive grasses — particularly tall fescue or quackgrass — can crowd a young
            plant before its crown has space to spread. Clearing a 12-to-18-inch circle of
            competing grass around the planting hole gives the plant room in the first two seasons.
          </p>
          <p>
            In fall the foliage turns orange-gold and the dried clump persists through winter as
            a small architectural form. Cutting it back in early spring before new growth appears
            — not in autumn — keeps the dried seed heads and stems available through the months
            when they are most used.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three things that give Prairie Dropseed the conditions it needs to establish</h2>
          <figure className="species-content-photo">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/11345813/large.jpg"
              alt="Prairie Dropseed clump with golden-orange fall foliage and dried seed stems persisting into winter, Wisconsin October 2017"
              loading="lazy"
            />
            <figcaption>
              Prairie Dropseed in late October after the first frosts: foliage has turned
              orange-gold and the dried seed panicles remain into winter. The clump does not
              spread and needs no cutting until early spring. Dark-eyed Juncos and American Tree
              Sparrows visit the seed heads through November and December.
              <span className="photo-credit"> Photo: cwarneke&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/8503172" target="_blank" rel="noopener noreferrer">iNaturalist obs. 8503172</a>&nbsp;· CC0 / No Rights Reserved</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Clear competing grass from a 12-inch radius before planting.</strong>{' '}
              Tall fescue and quackgrass out-compete young Prairie Dropseed in the first two
              growing seasons. Removing the sod or smothering it with cardboard and wood chips
              for a season before planting gives the new crown room to spread without fighting
              for ground.
            </li>
            <li>
              <strong>Plant in full sun, in soil that drains within 24 hours of rain.</strong>{' '}
              Prairie Dropseed declines in persistently wet soil and blooms poorly in more than
              two hours of shade per day. A south- or west-facing border, a dry rain garden margin,
              or an open lawn edge give it the drainage and light it needs.
            </li>
            <li>
              <strong>Leave the dried clump standing until early spring, not autumn.</strong>{' '}
              The seed heads hold seeds for ground-feeding birds through winter. The dried stems
              may shelter overwintering insects. Cutting in October removes both. Cutting in
              March, before new growth emerges from the crown, removes only what is spent.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('leonards-skipper')}>
              <span className="neighbor-name">Leonard's Skipper</span>
              <span className="neighbor-note">Grass skipper that lays eggs on Prairie Dropseed blades in September; the male perches on seed panicle tips to defend his territory</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('cobweb-skipper')}>
              <span className="neighbor-name">Cobweb Skipper</span>
              <span className="neighbor-note">Spring grass skipper whose larvae overwinter in a silk shelter at the Prairie Dropseed crown — uses the same grass clump as Leonard's Skipper, seven months earlier in the year</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('little-bluestem')}>
              <span className="neighbor-name">Little Bluestem</span>
              <span className="neighbor-note">Sibling native bunchgrass that hosts the same two skippers; taller and more drought-tolerant, with copper-red fall color that persists through January — plant with Prairie Dropseed to double the skipper host-grass area in a sunny bed</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('dark-eyed-junco')}>
              <span className="neighbor-name">Dark-eyed Junco</span>
              <span className="neighbor-note">Forages on dried Prairie Dropseed seed heads through fall and early winter</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('song-sparrow')}>
              <span className="neighbor-name">Song Sparrow</span>
              <span className="neighbor-note">Ground-feeding sparrow that works dried native grass seed heads through November</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('canada-goldenrod')}>
              <span className="neighbor-name">Canada Goldenrod</span>
              <span className="neighbor-note">Fellow September bloomer; goldenrod provides nectar for Leonard's Skipper adults at the same time Prairie Dropseed is in seed</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
