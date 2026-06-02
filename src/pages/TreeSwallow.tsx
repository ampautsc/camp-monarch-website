import type { Page } from '../App'

interface TreeSwallowProps {
  onNavigate: (page: Page) => void
}

export default function TreeSwallow({ onNavigate }: TreeSwallowProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/196885341/large.jpeg"
          alt="Male Tree Swallow perched on a branch in Ontario in May, showing the iridescent blue-green back and clean white underside that distinguish it from every other swallow in eastern North America"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: carterdorscht&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/116627747" target="_blank" rel="noopener noreferrer">iNaturalist obs. 116627747</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Birds</div>
        <h1>The Tree Swallow arrives in late March — two to four weeks ahead of every other swallow — because it carries a gut enzyme that lets it digest bayberry wax when there are no flying insects yet.</h1>
        <p className="hero__lead">
          The Tree Swallow (<em>Tachycineta bicolor</em>) is the first migratory swallow back
          in the northern states each spring. It returns before the weather guarantees insects
          are flying, because it does not need insects to survive a cold snap. The waxy berry
          coating on bayberry and wax myrtle — indigestible to virtually every other aerial
          insectivore in North America — breaks down in the tree swallow gut. When cold rain
          grounds the flies for three days in April, tree swallows move to bayberry thickets
          and feed on berries until the weather breaks. Other swallows wait in the south.
        </p>
        <p className="hero__lead">
          Partners in Flight estimates the North American population has declined approximately
          49% since 1966. The species follows the same trajectory as Chimney Swift, Common
          Nighthawk, and Purple Martin — an aerial insectivore guild losing birds in parallel
          as flying insect populations fall.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="bayberry-heading">
          <h2 id="bayberry-heading">Bayberry wax, a specialized gut, and the three-week head start over every other swallow</h2>
          <p>
            The berries of bayberry (<em>Myrica pensylvanica</em>) and wax myrtle (<em>Morella cerifera</em>)
            are coated in a high-fat lipid layer that most birds cannot metabolize. The lipid
            passes through the digestive tract of most passerines and waterfowl without yielding
            energy — they can swallow the berries but not extract their fuel. Tree swallows
            carry a gut microbiome that produces an enzyme capable of cleaving the ester bonds in
            the wax. A tree swallow eating bayberry in April is pulling caloric energy from a
            food source that yellow warblers, barn swallows, and purple martins simply cannot use.
          </p>
          <p>
            This single adaptation cascades through the entire life history of the species. An
            earlier arrival means earlier access to the best nest cavities before other cavity-nesters
            return. Earlier breeding means the possibility of two clutches in a single season.
            And during the years when late April or early May brings a multi-day cold rain that
            collapses aerial insect activity, tree swallows survive on bayberry while other
            swallows — if they have already arrived — starve or abandon their nests.
          </p>
          <p>
            In suburban yards and parks where bayberry no longer grows — replaced by ornamental
            barberry, privet, or lawn edge — tree swallows can still arrive early. They just
            cannot fall back on berries when the insects fail. A yard with bayberry growing in
            a moist, sunny corner holds a different ecological position in the tree swallow's
            spring than a yard without it.
          </p>
        </section>

        <figure className="species-content-photo">
          <img
            src="https://inaturalist-open-data.s3.amazonaws.com/photos/71042043/large.jpeg"
            alt="Tree Swallow perched in Erie County, Ohio in May — the sharp border between the white underside and the iridescent blue-green of the back visible at the shoulder where the two colors meet"
            loading="lazy"
          />
          <figcaption>
            During cold snaps when aerial insects are scarce, tree swallows gather in flocks at
            bayberry thickets — ten or fifteen birds stripping the same shrub in the same hour.
            Most homeowners never see this because bayberry is absent from most suburban landscapes.
            The birds do not disappear during April cold snaps. They move to wherever the berries are.
            <span className="photo-credit"> Photo: martyndrabik&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/44814112" target="_blank" rel="noopener noreferrer">iNaturalist obs. 44814112</a>&nbsp;· CC0 / No Rights Reserved</span>
          </figcaption>
        </figure>

        <section aria-labelledby="nesting-heading">
          <h2 id="nesting-heading">White feathers collected from distant fields, curved inward to form a dome over the eggs</h2>
          <p>
            Tree swallows nest only in cavities: old woodpecker holes, natural tree hollows,
            and nest boxes. They do not excavate. The female builds the nest base from dry
            grasses, then lines the cup with feathers she collects over a period of days or
            weeks — sometimes flying a quarter mile from the nest site to pick up feathers from
            the ground beneath a roost or from where a molting bird has passed.
          </p>
          <p>
            She selects white feathers preferentially over brown or gray ones and arranges each
            feather in the cup with its curved surface facing inward. The feathers' natural arch
            forms a partial dome over the eggs when the female is away from the nest. Studies
            comparing nests with more feathers and better feather arrangement against less
            heavily lined nests show higher embryo survival on cold nights in the more feathered
            nests. The selection and placement are not random.
          </p>
          <p>
            The entrance hole must measure 1.5 inches in diameter — large enough for the swallow,
            too small for European Starlings (<em>Sturnus vulgaris</em>). The main competition
            at nest boxes is the House Sparrow (<em>Passer domesticus</em>), a non-native bird
            that breaks tree swallow eggs and kills adults at nest sites it decides to claim.
            A nest box on a pole (not a tree, which house sparrows use as a staging platform)
            monitored by a homeowner who removes house sparrow nests promptly can produce two
            full clutches of tree swallows in a single breeding season. An unmonitored box in
            a suburban yard is typically occupied by house sparrows within the second year.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">49% fewer tree swallows than in 1966 — the aerial insectivore count that tracks every swallow, swift, and nighthawk at once</h2>
          <p>
            Partners in Flight places the Tree Swallow population decline at approximately 49%
            since 1966. Common Nighthawk is down 61%. Chimney Swift is down 68%. Purple Martin
            is down 36%. Eastern Wood-Pewee is down 73%. These are not independent declines with
            separate causes — they are parallel collapses in a guild of birds that all share the
            same feeding strategy: catching flying insects in open airspace.
          </p>
          <p>
            Insect biomass studies conducted over multiple decades in Europe and North America
            have measured reductions of 50 to 80% in flying insect biomass at the same sites
            where initial measurements were taken 30 years earlier. The tree swallow population
            decline runs parallel to those insect decline measurements. A tree swallow in active
            breeding catches several hundred insects per day. Its nestlings require even more,
            delivered continuously from shortly after dawn until the evening. When insect density
            drops below the threshold needed to sustain chick growth and adult energy balance,
            nesting fails.
          </p>
          <p>
            Wetland drainage removes a second layer of habitat. A tree swallow pair nesting
            within 100 meters of an undisturbed wetland edge — cattails, buttonbush, open water —
            has access to a measurably higher density of aerial insects than a pair nesting in a
            purely agricultural or mowed suburban landscape. The insect-rich foraging zone above
            open water is not incidental to tree swallow productivity. Pairs nesting near wetlands
            consistently show higher chick weight, lower abandonment rates, and more successful
            fledglings than pairs nesting away from water.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>A 1.5-inch nest box on a pole, bayberry in a wet corner, a dead tree left standing, and no aerial pesticides</h2>
          <ol className="step-list">
            <li>
              <strong>Put up a nest box with a 1.5-inch entrance hole on a smooth pole.</strong>{' '}
              Mount it 5 to 6 feet above the ground facing an open area — a lawn, a field, or
              the surface of a pond. If you have standing water nearby, orient the box to face
              it. A smooth metal pole baffle prevents climbing predators. Monitor the box
              weekly from April through June: if House Sparrows begin building (a loose, messy
              pile of grass, feathers, and plastic), remove the nest material immediately before
              the sparrows establish. An established house sparrow pair at a box will kill adult
              tree swallows attempting to claim it.
            </li>
            <li>
              <strong>Plant bayberry (<em>Myrica pensylvanica</em>) in a moist, sunny corner.</strong>{' '}
              Bayberry tolerates wet, sandy, or nutrient-poor soil. It spreads by root sprout
              and needs almost no maintenance once established. One male plant and one female
              plant (the species is dioecious) will eventually produce the white waxy berries
              that feed tree swallows through cold snaps in late April. In a year when flying
              insects fail for four days during a late cold rain, bayberry is what keeps the
              birds alive until conditions improve. No other landscape shrub provides this.
            </li>
            <li>
              <strong>Leave dead trees and snags standing.</strong>{' '}
              A dead tree within 150 meters of your yard is a nest cavity bank. Downy Woodpeckers
              excavate new holes each year and abandon the old ones — those abandoned holes become
              tree swallow nest sites the following season. Each standing dead tree produces
              multiple future cavities over the years it remains upright. Cutting a standing snag
              removes all of them at once. If the tree is not structurally dangerous to buildings
              or people, leave it.
            </li>
            <li>
              <strong>Stop aerial pesticide application — mosquito misting, yard foggers, broad-spectrum sprays.</strong>{' '}
              A tree swallow hunting within 100 meters of a yard receiving weekly mosquito misting
              is hunting in airspace where flying insect density has been knocked down. The bird
              catches fewer insects per foraging pass. Its nestlings receive fewer feedings. Studies
              of nest boxes in landscapes with intensive pesticide use show lower chick weight at
              fledging and higher rates of nest abandonment compared to boxes in landscapes without
              aerial insecticide application.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('chimney-swift')}>
              <span className="neighbor-name">Chimney Swift</span>
              <span className="neighbor-note">Hunts the same open airspace above rooftops and water at the same morning and evening hours — another aerial insectivore down 68% since 1966</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('purple-martin')}>
              <span className="neighbor-name">Purple Martin</span>
              <span className="neighbor-note">Another cavity-nesting aerial insectivore that accepts nest boxes and faces the same house sparrow competition at nest sites</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('eastern-bluebird')}>
              <span className="neighbor-name">Eastern Bluebird</span>
              <span className="neighbor-note">Nests in the same 1.5-inch entrance boxes; shares the house sparrow problem; monitoring the same box trail benefits both species</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('buttonbush')}>
              <span className="neighbor-name">Buttonbush</span>
              <span className="neighbor-note">Grows at the moist wetland edge that produces the insect-dense foraging zone tree swallows depend on during nesting</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('little-brown-bat')}>
              <span className="neighbor-name">Little Brown Bat</span>
              <span className="neighbor-note">Shares the post-sunset aerial hunting window over open water — both species depend on the same flying insect populations that have declined sharply since 1966</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('common-nighthawk')}>
              <span className="neighbor-name">Common Nighthawk</span>
              <span className="neighbor-note">Another aerial insectivore at dusk, down 61% since 1966 — the same guild, the same insect-collapse story, the same habitat pressures</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
