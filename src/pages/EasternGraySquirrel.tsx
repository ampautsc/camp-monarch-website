import type { Page } from '../App'

interface EasternGraySquirrelProps {
  onNavigate: (page: Page) => void
}

export default function EasternGraySquirrel({ onNavigate }: EasternGraySquirrelProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/176023576/large.jpeg"
          alt="Eastern gray squirrel sitting upright on a branch, facing the camera — silver-gray fur with a pale belly and a thick bushy tail curled forward over its back"
          className="species-hero-image"
          style={{ objectPosition: 'center 35%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/336054139/large.jpeg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Mila C.&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/observations/104976531" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Before burying a red oak acorn, a gray squirrel clips the embryo at the base — an edit to the seed that prevents it from sprouting in the underground cache over winter</h1>
        <p className="hero__lead">
          The eastern gray squirrel (<em>Sciurus carolinensis</em>) buries each acorn in its
          own separate hole, up to a half mile from the source tree, and then relocates those
          caches by smell through snow and frozen soil the following winter and spring. A single
          squirrel makes roughly 10,000 of these individual burial sites each fall. The
          approximately 25 percent it never retrieves represent the primary mechanism by which
          oaks spread into new ground across eastern North America.
        </p>
        <p className="hero__lead">
          The squirrel does not treat every acorn the same way. Red oak acorns stay dormant
          through winter and germinate in spring &mdash; these the squirrel sometimes nips at the
          basal tip before caching, destroying the embryo and preventing germination in storage.
          White oak acorns germinate within weeks of falling in autumn &mdash; these the squirrel eats
          immediately or caches without nipping, because the embryo removal would damage them
          and they would not survive winter intact regardless. The squirrel is making a distinction
          no one taught it, based on the germination timing of two different tree species.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="caching-heading">
          <h2 id="caching-heading">10,000 individual holes per squirrel per fall — each one a separate burial site with one acorn</h2>
          <p>
            Gray squirrels scatter-hoard rather than larder-hoard. A larder-hoarding animal
            (a chipmunk, a beaver) stores food in one central location and defends it. A
            scatter-hoarding animal buries each item separately and relies on memory and smell
            to retrieve it later. Gray squirrels use both strategies, but the dominant one across
            open terrain is scatter-hoarding: one acorn, one hole, dug to roughly 2 centimeters
            depth, tamped down and then covered with leaf litter or soil.
          </p>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/176023564/large.jpeg"
              alt="Eastern gray squirrel at ground level in a yard, posture suggesting it is investigating or digging at the soil surface — the typical scatter-caching posture seen through autumn across eastern suburban yards"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/22034682/large.jpg'
              }}
            />
            <figcaption>
              A gray squirrel investigating or caching at ground level. The scatter-hoarding
              pattern means each site is visited briefly, packed down, and abandoned &mdash; leaving
              no visible trail between sites and no central location an observer or competitor
              could monitor.
              <span className="photo-credit"> Photo: Mila C.&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/observations/104976531" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a></span>
            </figcaption>
          </figure>
          <p>
            Recovery depends on spatial memory combined with olfaction. A squirrel can smell
            a buried acorn through 30 centimeters of compacted snow and through multiple layers
            of leaf litter. In field studies, recovery rates have been measured at roughly
            70 to 80 percent of all caches by the following spring. The remaining 20 to 30
            percent &mdash; roughly 2,000 to 3,000 acorns per squirrel per year &mdash; are either forgotten
            or passed over during an abundance of other food. These unretrieved caches are viable
            seeds in the ground, already planted at the correct depth.
          </p>
          <p>
            A gray squirrel in a quarter-acre suburban yard with two mature oaks is operating
            across multiple properties, multiple yards, and multiple blocks. The acorns it buries
            in the far corner of a neighbor&apos;s lawn in October may become the sapling in
            that lawn&apos;s fence row in three years.
          </p>
        </section>

        <section aria-labelledby="acorn-treatment-heading">
          <h2 id="acorn-treatment-heading">Red oak embryo clipped, white oak acorn eaten whole — the squirrel treats each species differently</h2>
          <p>
            The distinction between red oak acorns and white oak acorns is visible in squirrel
            behavior in autumn. White oak acorns (from oaks in the white oak group: white oak,
            bur oak, swamp white oak) contain less tannin than red oak acorns and germinate in
            fall &mdash; within weeks of dropping. Squirrels eat these immediately or cache them
            quickly knowing they will not survive the winter intact inside the cotyledons.
          </p>
          <p>
            Red oak acorns (from oaks in the red oak group: red oak, pin oak, black oak, scarlet
            oak) are high in tannin and stay dormant through winter, germinating the following
            spring. These are the acorns squirrels cache for the lean months of January through
            March. The problem with caching them whole is that some will germinate underground
            before the squirrel returns, and a sprouted acorn has lost much of its stored energy.
          </p>
          <p>
            Squirrels were documented in laboratory studies by Michael Steele and colleagues in
            the 1990s selectively nipping the embryonic axis &mdash; the growing tip at the base of
            the acorn &mdash; from red oak acorns before caching them. The nipping destroys the embryo
            and prevents germination without damaging the cotyledons, which remain high-calorie
            food. Squirrels in the studies nipped red oak acorns significantly more often than
            white oak acorns, and more often when cached than when eaten immediately. The
            behavior was consistent enough to distinguish it from random damage.
          </p>
        </section>

        <section aria-labelledby="mast-year-heading">
          <h2 id="mast-year-heading">Mast years: the oak floods the squirrel&apos;s capacity, and 2,000 forgotten acorns become trees</h2>
          <p>
            Oak trees do not produce the same acorn crop every year. Every two to seven years,
            oaks synchronize across a region into a mast year &mdash; a crop that may be 10 to 100 times
            larger than a normal year. The mechanisms that trigger mast years are not fully
            understood, but one proposed function is satiation: produce more seeds than all the
            seed-eaters in the region can cache and consume, so that some seeds escape into
            germination.
          </p>
          <p>
            In a non-mast year, squirrels eat or cache nearly every acorn that falls. Recovery
            rates are high, and the few forgotten caches are the primary source of oak
            regeneration. In a mast year, the volume overwhelms storage capacity. Squirrels
            cache everything they can and still leave large quantities on the ground and
            beneath the duff. The forgotten-cache percentage rises. Young oaks coming up in
            suburban yards five years after a regional mast year are often densely cohorted &mdash;
            many seedlings the same age in the same area &mdash; from the same autumn&apos;s
            uncollected surplus.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>What supports a gray squirrel also regenerates the oaks it plants</h2>
          <ol className="step-list">
            <li>
              <strong>Plant a native oak if you don&apos;t already have one.</strong>{' '}
              White oak (<em>Quercus alba</em>) is the highest-value host for caterpillars among
              eastern trees &mdash; it supports over 500 caterpillar species &mdash; and its acorns are the
              white oak group that squirrels eat immediately and store seasonally. A white oak
              planted as a five-gallon tree today reaches first acorn production in 20 years and
              produces for 500.
            </li>
            <li>
              <strong>Leave oak seedlings in low-value lawn space to grow at least one season.</strong>{' '}
              A gray squirrel planted that seedling. Most suburban oaks outside of deliberately
              planted trees came from a squirrel cache that was not retrieved. Pulling every oak
              seedling from every fence row is removing the squirrel&apos;s output. If space
              doesn&apos;t allow a full tree, pot it and give it away &mdash; native plant societies
              and restoration groups take oak seedlings.
            </li>
            <li>
              <strong>Keep cats indoors, especially from dawn through mid-morning.</strong>{' '}
              Gray squirrels are most active on the ground during early morning caching and
              recovery runs. Outdoor cats kill an estimated 1.3 to 4 billion birds and 6 to
              22 billion mammals in the United States per year, with squirrels and chipmunks
              among the most commonly taken mammals. A cat outdoors during the morning caching
              window is positioned at the moment of highest squirrel ground exposure.
            </li>
            <li>
              <strong>Do not use rodenticide near oaks or other mast-producing trees.</strong>{' '}
              Anticoagulant rodenticides (brodifacoum, bromadiolone) do not stay inside the
              target animal. Squirrels, chipmunks, and other small mammals that encounter
              bait stations are eaten by red-tailed hawks, Eastern screech owls, and great
              horned owls. Rodenticide contamination has been measured in 50 to 80 percent
              of raptors sampled in some studies. A poisoned squirrel under an oak is a
              risk to every bird that hunts that yard.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who shares the oak, the leaf litter, and the aerial watch</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('white-oak')}>
                White Oak
              </button>{' '}
              &mdash; the primary mast source for squirrel caching in eastern yards; squirrels
              eat white oak acorns immediately or cache them for short-term storage; the oaks
              growing along suburban fence rows and at property edges arrived there in gray
              squirrel caches
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('black-walnut')}>
                Black Walnut
              </button>{' '}
              &mdash; gray squirrels cache black walnuts using the same scatter-hoard method as
              acorns, burying each nut in a separate hole up to several hundred meters from the
              source tree; the thick outer hull stains the squirrel&apos;s paws and surrounding
              soil black as it oxidizes; squirrels that cannot crack the shell immediately bury
              the nut intact, and black walnut shells persist in the soil for years as locatable
              cache sites long after the nut has been consumed or germinated
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hackberry')}>
                Hackberry
              </button>{' '}
              &mdash; squirrels eat hackberry fruit in late summer and fall; hackberry seeds
              pass through squirrels and are deposited in droppings, but the tree&apos;s
              primary dispersers are birds; squirrels and the hackberry butterflies share the
              same canopy layer from July through October
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('red-tailed-hawk')}>
                Red-tailed Hawk
              </button>{' '}
              &mdash; gray squirrels are one of the Red-tailed Hawk&apos;s primary prey items;
              squirrels respond to a kettle of hawks forming overhead by freezing flat against
              a branch or pressing to the opposite side of a trunk; the squirrel alarm call &mdash; a
              series of sharp &ldquo;kuk&rdquo; notes &mdash; alerts other yard animals to an aerial
              predator before it descends
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-screech-owl')}>
                Eastern Screech Owl
              </button>{' '}
              &mdash; screech owls nest in the same cavity trees that squirrels use for winter
              dens; squirrels will occupy an owl box and cache acorns in it; screech owls hunt
              squirrels at dusk during the brief ground-active window when squirrels are
              finishing the day&apos;s last caching runs
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-chipmunk')}>
                Eastern Chipmunk
              </button>{' '}
              &mdash; chipmunks and gray squirrels overlap in acorn caching but use different
              strategies; the chipmunk carries acorns in cheek pouches to a central burrow
              (larder-hoarding); the squirrel buries each acorn separately; both contribute
              to oak regeneration through unretrieved caches, but the squirrel moves seeds
              farther from the source tree
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('red-fox')}>
                Red Fox
              </button>{' '}
              &mdash; red foxes take gray squirrels during the ground caching window — early
              morning and late afternoon when squirrels are working farthest from trunk cover;
              a fox kit den active in May or June depends heavily on squirrels and chipmunks
              because the kits require protein at 4 to 6 hour intervals during the nursing
              and weaning period
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
