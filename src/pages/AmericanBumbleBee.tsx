import type { Page } from '../App'

interface AmericanBumbleBeeProps {
  onNavigate: (page: Page) => void
}

export default function AmericanBumbleBee({ onNavigate }: AmericanBumbleBeeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Bombus_pensylvanicus_male_on_rough_blazingstar_Ellison_Creek-7907.jpg"
          alt="American bumble bee foraging on rough blazingstar, a native prairie wildflower — a species whose population has declined 89% in two decades and was listed federally threatened in January 2025"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Angella Moorehouse&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Bombus_pensylvanicus_male_on_rough_blazingstar_Ellison_Creek-7907.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Bumble Bee</h1>
        <p className="hero__lead">
          A queen overwinters alone in a shallow burrow, then emerges in April to
          start a colony from scratch — foraging, building wax cells, laying
          eggs, and brooding them herself until her first daughters emerge six
          weeks later. For most of the twentieth century she was the most common
          bumble bee in the central and eastern United States. In January 2025,
          the U.S. Fish and Wildlife Service listed her species as federally
          threatened. The population has declined 89 percent in twenty years.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">How a colony starts from scratch</h2>
          <p>
            <em>Bombus pensylvanicus</em> is a eusocial bee — its colony has a single
            reproductive queen, a caste of sterile female workers, and males
            produced only to mate. Unlike honeybees, the colony does not
            overwinter as a group. Only new mated queens survive the winter,
            each alone in a shallow burrow two to three inches deep in loose soil
            or a grass clump. When soil temperatures warm in April and the first
            native flowers open, the queen emerges to found the year&apos;s colony
            entirely by herself.
          </p>
          <p>
            She finds a cavity — often an abandoned rodent burrow — and begins
            work immediately. She builds small wax cups, collects pollen, and
            lays six to twelve eggs in the first brood. She then broods those
            eggs the way a bird broods eggs, pressing her warm body against the
            cells and shivering her flight muscles to generate heat. She forages
            alone for the pollen and nectar that will feed the larvae, returns
            to brood the nest, and repeats this cycle for four to six weeks
            until the first workers emerge and take over foraging duties.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Bombus_pensylvanicus_queen.jpg"
              alt="American bumble bee queen showing characteristic yellow and black banding — the founding individual of each year's colony, emerging in April to build the nest alone"
              loading="lazy"
            />
            <figcaption>
              Each colony begins with a single overwintered queen. She starts the nest alone — building wax cells, collecting pollen, and brooding her first eggs without any workers to help. The queen you see in early April foraging on willow catkins or wild columbine is the year&apos;s founding queen. Every worker in the colony this summer descends from her first clutch.
              <span className="photo-credit"> Photo: Jacy Lucier&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Bombus_pensylvanicus_queen.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Once workers are active, the colony grows steadily through summer,
            reaching 200 to 400 workers at peak size in July and August. Workers
            forage for pollen and nectar within a radius of roughly two miles
            from the nest. In late summer the colony shifts to producing new
            queens — called gynes — and males. New queens and males mate, the
            new queens feed heavily to build fat stores, then disperse to find
            overwintering sites. The colony dissolves. Every worker, the old
            queen, and the males die with the first frosts. Only the new queens
            survive underground to start the cycle in spring.
          </p>
          <p>
            American bumble bees are among the native bees capable of buzz
            pollination, or sonication. A foraging worker grips a flower and
            vibrates her thoracic flight muscles at roughly 400 cycles per
            second without actually flapping her wings. The vibration resonates
            through the flower and shakes pollen loose from anthers that release
            pollen only through a small pore at the tip — a structure that
            honeybees cannot exploit. Tomatoes, peppers, eggplant, blueberries,
            and cranberries all depend on buzz pollination to produce fruit.
            This is why commercial greenhouse tomato growers rent bumble bee
            hives rather than honeybee hives — and why that commercial practice
            became one of the causes of the decline.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">From common to federally threatened in twenty years</h2>
          <p>
            Surveys conducted by the Xerces Society and academic teams beginning
            in the early 2000s found that several bumble bee species once common
            across the central United States — including <em>B. pensylvanicus</em>,
            the rusty-patched bumble bee, the yellow-banded bumble bee, and the
            western bumble bee — had nearly vanished from large portions of their
            historic ranges. The American bumble bee, once abundant from southern
            Canada through Mexico across the central states and into the East,
            was gone from roughly half of its former range. In areas where it
            persisted, populations had shrunk by an estimated 89 percent.
          </p>
          <p>
            Researchers identified three principal causes of the collapse:
          </p>
          <p>
            The first was pathogen spillover from commercial bumble bee
            operations. In the 1990s, commercial rearing of bumble bees for
            greenhouse tomato pollination expanded rapidly in North America.
            Colony production required sending queens to European facilities
            for rearing and returning large commercial colonies. Those
            European facilities harbored <em>Nosema bombi</em>, a microsporidian
            gut pathogen common in European bumble bees but absent from most
            North American wild populations. Commercial hives carrying <em>Nosema</em>
            were deployed into North American greenhouses and some bees
            escaped. Surveys by Colla, Otterstatter, Gegear, and Thomson (2006)
            found that the North American species experiencing the steepest
            population declines had dramatically higher <em>Nosema</em> infection
            rates than stable species, and that the collapse correlated
            temporally with the peak of commercial hive deployment. Populations
            that had never encountered the pathogen had little resistance. The
            commercial hive industry had inadvertently introduced a disease
            agent into communities with no exposure history.
          </p>
          <p>
            The second cause was neonicotinoid pesticide exposure. Studies
            published through the 2010s documented that sublethal doses of
            imidacloprid, clothianidin, and thiamethoxam — absorbed through the
            nectar and pollen of treated plants — reduce bumble bee queen
            egg-laying rates, shrink worker colony size, and most critically,
            reduce the number of new queens produced at the end of the season.
            Fewer overwintering queens means fewer colonies the following spring.
            Systemic neonicotinoids applied to nursery stock before sale remain
            in plant tissue and pollen for two years or more after the plant
            is purchased and placed in a garden.
          </p>
          <p>
            The third cause was habitat loss. The expansion of monoculture
            corn and soybean agriculture and the spread of maintained turf grass
            replaced the diverse wildflower-rich meadows and pastures that
            bumble bee colonies depend on for continuous bloom from April through
            October. A colony needs pollen for the full season — losing the
            wildflower diversity that provides blooms in April, June, and
            September leaves gaps in protein supply that collapse colony
            development.
          </p>
          <p>
            On January 11, 2025, the U.S. Fish and Wildlife Service published
            the final rule listing the American bumble bee as federally
            threatened under the Endangered Species Act — only the second
            bumble bee in the United States to receive ESA protection, after
            the rusty-patched bumble bee was listed as endangered in 2017.
            Designation of critical habitat and a species recovery plan are
            expected to follow, but implementation takes years and depends on
            continued public and political support.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that help American Bumble Bees</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Pollinator_Garden_%286771690323%29.jpg"
              alt="Pollinator garden with diverse native wildflowers providing season-long bloom for bumble bees — early, mid, and late-season species planted together to sustain colonies from April through October"
              loading="lazy"
            />
            <figcaption>
              A bumble bee colony needs continuous pollen from April through October — early flowers for the founding queen, mid-summer bloom for workers, late bloom for the new queens gaining weight before winter. A monoculture planting with one bloom period cannot sustain a colony through the season. Diverse natives planted together close that gap.
              <span className="photo-credit"> Photo: U.S. Fish and Wildlife Service&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Pollinator_Garden_(6771690323).jpg" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant native flowers that bloom from April through October.</strong>{' '}
              Early-season queens need early bloom: native willows, wild columbine, and{' '}
              <button className="link-button" onClick={() => onNavigate('redbud')}>
                Eastern Redbud
              </button>{' '}
              flower when queens first emerge. Mid-season workers need
              July&ndash;August peak: milkweed, wild bergamot, coneflowers, black-eyed
              Susan. Late-season new queens need fall fuel: goldenrod and native asters.
              Mix species across bloom times so the colony has protein every week of the season.
              Find plants at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Leave a patch of bare, south-facing soil unmulched.</strong>{' '}
              Queens need soft, loose soil two to three inches deep for overwintering
              and spring nest cavities. A two-inch mulch layer or landscape fabric
              blocks access as completely as concrete. One square foot of warm,
              exposed soil in a sunny spot is enough to attract a nesting queen.
              Sand or loam works best; clay is acceptable. Shade does not — the
              nest needs solar warmth to regulate brood temperature.
            </li>
            <li>
              <strong>Stop applying neonicotinoid pesticides and avoid treated nursery stock.</strong>{' '}
              Systemic neonicotinoids sold in nursery-treated plants remain in pollen
              and nectar for two or more years after purchase. Ask nurseries whether
              plants have been treated with systemic insecticides, or look for
              &ldquo;Bee Better Certified&rdquo; plants. A colony that forages on
              treated coneflowers all summer collects sublethal doses across hundreds
              of foraging trips, reducing queen egg-laying and the number of
              overwintering queens the colony produces this fall. See the full
              picture at the{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticides &amp; Your Habitat guide
              </button>
              .
            </li>
            <li>
              <strong>Connect your yard to your neighbors&apos; yards.</strong>{' '}
              Queen bumble bees forage up to two miles from the nest. A single
              backyard of native plants provides pollen stops in a landscape that
              may otherwise be nearly empty for the colony. Talking with one
              neighbor about what to plant — or sharing a native plant from your
              yard — extends the foraging corridor. A connected series of
              native-planted lots across a block dramatically increases the
              effective territory available to every colony in the area.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The same yard that helps monarchs helps bumble bees</h2>
          <p>
            The native milkweed planted for monarchs is also a major mid-summer
            pollen and nectar source for bumble bee workers. The goldenrod planted
            for American goldfinches seeds in fall while fueling the new queens
            gaining weight before winter. The unmulched soil patch left for
            ground-nesting bees is the same patch where a queen overwinters. The
            yard that stops applying neonicotinoids for the sake of native bees
            is the same yard where firefly larvae complete their two-year ground
            stage undisturbed.
          </p>
          <p>
            The American bumble bee did not collapse because of one cause. It
            collapsed because a commercial industry introduced a pathogen,
            because pesticide chemistry made every flower in agricultural
            landscapes mildly toxic, and because the diverse meadows and prairies
            that once sustained colonies were replaced with acres of a single
            annual crop. Each of those causes operates at a scale beyond what a
            homeowner controls. But the sum of thousands of yards with diverse
            native bloom and no systemic pesticides is the kind of landscape-level
            shift that species recovery requires.
          </p>
          <p>
            When a queen emerges from the soil in April and finds a patch of
            native columbine in bloom, she is doing what American bumble bees
            have done on this continent for millions of years. Whether she finds
            what she needs to start the colony depends on what your yard looks
            like in the first weeks of spring.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-meadowlark')}>
              Eastern Meadowlark
            </button>
            {' '}follows the same decline curve. The meadowlark population has fallen 75 percent
            since 1966, driven by the conversion of native grasslands and diverse meadows to
            monoculture agriculture — the same loss that removed the continuous wildflower bloom
            the bumble bee colony needs from April through October. A yard with native wildflower
            meadow plantings, unmowed and pesticide-free, builds habitat for both in the same
            square footage.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build the habitat bumble bees need alongside monarchs and every other species in the web.</strong>{' '}
            Start with plants at{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , learn about pesticide risks at the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , and see every other species sharing your yard in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}