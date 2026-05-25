import type { Page } from '../App'

interface RedFoxProps {
  onNavigate: (page: Page) => void
}

export default function RedFox({ onNavigate }: RedFoxProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Vulpes_vulpes_-_British_Wildlife_Centre-8.jpg"
          alt="Red fox sitting upright in a grassy clearing, rust-orange coat with white chest, amber eyes alert — photographed at British Wildlife Centre"
          className="species-hero-image"
          style={{ objectPosition: 'center 30%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/3/30/Vulpes_vulpes_ssp_fulvus.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Charles J. Sharp&nbsp;&middot;&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Vulpes_vulpes_-_British_Wildlife_Centre-8.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA via Wikimedia Commons</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>A red fox pair returns to the same den site each spring — in May the kits emerge outside for the first time, and by August each one will disperse up to 50 miles to establish its own territory</h1>
        <p className="hero__lead">
          The red fox (<em>Vulpes vulpes</em>) is the most widely distributed wild carnivore
          on Earth, present across North America, Europe, Asia, and Australia. In suburban
          and edge-habitat settings it forages an overlapping range with cottontails, chipmunks,
          squirrels, and voles — consuming species that would otherwise concentrate beyond the
          capacity of the food web to regulate. A single fox covers 1–3 square miles of
          suburban territory each night, moving silently through back yards along fence lines,
          drainage corridors, and shrub-edge zones most homeowners never observe.
        </p>
        <p className="hero__lead">
          May is when the kits play outside the den for the first time. The pair that produced
          the litter has been using the same burrow — usually a renovated groundhog tunnel or
          a cavity under a deck or outbuilding — since January, when the female began
          preparing the den. The 4–6 kits born in March or April emerge through the den
          entrance at roughly 4–5 weeks of age, tumbling and wrestling in a pile 10–15 feet
          from the opening. The adults watch from nearby cover. This is when most homeowners
          see a fox family for the first time — and when most calls to wildlife control are made.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="den-heading">
          <h2 id="den-heading">The den site, the annual litter, and the weeks between first emergence and dispersal</h2>
          <p>
            Red fox pairs are monogamous. The same two adults often return to the same den
            site across multiple years — a burrow with a known layout, established escape
            routes, and a scent history the female trusts. The male brings food to the
            denning female throughout late March and April, while she nurses the kits inside.
            He typically deposits food at the den entrance rather than entering — the kits
            do not see him until they begin emerging.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Baby_fox_2.jpg"
              alt="Two red fox kits outside their den entrance in dense vegetation — fuzzy dark-brown coats, large rounded ears, squinting in early morning light"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Vulpes_vulpes_Gucio-p.jpg'
              }}
            />
            <figcaption>
              Fox kits at 5–6 weeks old, outside the den for the first time. Their coats
              are still the dark gray-brown of juveniles; the characteristic rust orange
              replaces this by late summer. The kits begin consuming solid food at 4 weeks,
              when the adults bring prey to the den entrance.
              <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Kits are born with sealed eyes and weigh roughly 100 grams. They open their eyes
            at 2 weeks. By 4 weeks they eat solid food alongside nursing — the adults bring
            prey items to the den entrance and the kits compete for them, practicing the
            carrying, shaking, and extraction behaviors they will use in the field. By 6–8
            weeks they follow the adults on short foraging trips within 50 meters of the den.
          </p>
          <p>
            By August, the kits are hunting independently. Dispersal begins in late October
            through December. Young foxes travel an average of 15–30 miles from their
            natal territory; some move 50 miles or farther. A fox seen foraging in a
            suburban backyard in July is likely a kit from a local litter — just large
            enough to look adult, still learning to read traffic patterns and avoid roads.
          </p>
        </section>

        <section aria-labelledby="cache-heading">
          <h2 id="cache-heading">The mouse buried under the oak, the vole cached in the ivy, and the 200-site territory map</h2>
          <p>
            Red foxes cache surplus food — burying individual prey items in shallow holes,
            pressing soil and debris over the site, and memorizing the location. A fox
            hunting a mouse-rich lawn edge on a productive night may make 10–20 cache sites
            within a single territory. The cache is revisited days or weeks later, located
            by scent memory rather than visual recognition of the site.
          </p>
          <p>
            This behavior distributes the fox&apos;s food supply across the territory in a way
            that prevents any single cache from being found and emptied by a competitor.
            It also means a foraging fox leaves dozens of small soil disturbances across the
            yard each season — shallow scrapes 2–3 centimeters deep in leaf litter, lawn
            edge, or soft garden soil that close with the next rainfall. A homeowner seeing
            small scrape holes in the garden in early summer is usually observing cache
            retrieval, not digging for roots or insects.
          </p>
          <p>
            The primary prey in suburban settings is the meadow vole (<em>Microtus pennsylvanicus</em>),
            the white-footed mouse (<em>Peromyscus leucopus</em>), and the deer mouse
            (<em>P. maniculatus</em>). Cottontails are taken primarily in winter, when voles
            are harder to locate under snow. Chipmunks, gray squirrels, and frogs are
            supplementary prey that peak in spring and summer. Berries, insects, and
            earthworms round out the diet through July and August.
          </p>
        </section>

        <section aria-labelledby="mange-heading">
          <h2 id="mange-heading">Sarcoptic mange, secondary rodenticide poisoning, and the two-year suburban population crash</h2>
          <p>
            Sarcoptic mange — caused by the mite <em>Sarcoptes scabiei</em> — is the leading
            cause of red fox mortality in suburban settings. The mite burrows into the skin
            and triggers an immune response that causes intense itching, hair loss, and
            thickening of the skin. An infected fox loses its fur in patches beginning with
            the face and ears, progresses to the back and flanks, and typically dies within
            3–4 months of initial infection from exposure, secondary bacterial infection,
            and inability to hunt.
          </p>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Vulpes_vulpes_laying.jpg"
              alt="Red fox at rest in leaf litter, head down, orange coat vivid against fallen autumn leaves — the resting posture used during daytime"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Vulpes_vulpes_-_British_Wildlife_Centre-8.jpg'
              }}
            />
            <figcaption>
              A fox at daytime rest — the typical posture during mid-day inactivity. Red
              foxes are crepuscular and nocturnal but occasionally forage in daylight,
              especially in summer when kits create food demand that a single night cannot
              meet.
              <span className="photo-credit"> Photo: Malene Thyssen&nbsp;&middot;&nbsp;
                <a href="https://commons.wikimedia.org/wiki/File:Vulpes_vulpes_laying.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA via Wikimedia Commons</a></span>
            </figcaption>
          </figure>

          <p>
            A neighborhood with a suburban fox population can lose most of its resident foxes
            within 18–24 months of a mange outbreak. The mite transmits through direct contact
            and through contaminated den sites — a fox using a burrow where an infected animal
            died will acquire the mite within days. Den sharing between family members in late
            winter accelerates transmission through a family group.
          </p>
          <p>
            Secondary rodenticide poisoning is the second major cause of suburban fox
            mortality. Red foxes eat mice and voles. In suburban settings, 30–50% of the
            mouse population in any given neighborhood may be contaminated with anticoagulant
            rodenticide (brodifacoum, bromadiolone) at any time during active bait-station
            use. A fox consuming 3–4 contaminated mice over a single week accumulates a
            lethal dose of brodifacoum in its liver — the same dose that kills Eastern
            screech owls, red-tailed hawks, and great horned owls consuming the same mouse
            population. The fox dies from internal hemorrhage 7–14 days after exposure. The
            death is not observed by the homeowner, who attributes the absence of foxes to
            natural turnover.
          </p>
          <p>
            Foxes pose no threat to adult cats, medium and large dogs, or humans. They avoid
            direct confrontation with animals larger than squirrels. The documented cases of
            foxes approaching humans involve animals either habituated by direct feeding, or
            animals in late-stage mange that have lost the behavioral capacity to avoid
            contact. A healthy red fox seen at midday in a suburban yard is almost certainly
            a kit less than 6 months old that has not yet learned to avoid daytime exposure
            — not a rabid or dangerous animal.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Leave the den alone until September, remove bait stations, and don&apos;t feed them</h2>
          <ol className="step-list">
            <li>
              <strong>Do not disturb the den from March through August.</strong>{' '}
              The female is nursing from March through May. The kits are dependent on the
              den structure through August. Sealing a den entrance during this period traps
              kits inside. If the den is under a deck or outbuilding and its presence creates
              a problem, wait until late September — after the kits have dispersed and the
              adults are ranging independently — then install a one-way door over the entrance
              for two weeks before closing permanently.
            </li>
            <li>
              <strong>Remove every anticoagulant rodenticide bait station from your property.</strong>{' '}
              Foxes eat the same mice and voles the bait station targets. Brodifacoum and
              bromadiolone persist in prey tissue long enough to kill any predator that
              eats 3–4 contaminated animals in a week. Snap traps placed inside sealed
              structures (a covered bait box with an entry hole too small for a fox snout)
              produce the same rodent result without passing poison up the food chain.
            </li>
            <li>
              <strong>Do not feed foxes directly.</strong>{' '}
              A fox that receives food from a person loses its learned avoidance of humans
              within weeks. It begins approaching humans who are not offering food,
              including children. An animal that has been fed repeatedly will enter a house
              through an open door in search of food. The fox that appears fearless and
              approaches to within five feet of a person has usually been fed — and the
              homeowner who calls wildlife control about an &ldquo;aggressive fox&rdquo; is
              frequently the person who fed it a month earlier.
            </li>
            <li>
              <strong>Leave low shrub cover and brush piles at yard edges intact through summer.</strong>{' '}
              Fox kits use dense vegetation within 30–50 feet of the den entrance as
              daytime cover and as the endpoint of escape sprints from open lawn. Removing
              this structure forces them to cross open ground to reach safety and puts them
              in direct traffic-exposure situations. The same shrub-edge cover provides
              foraging habitat for the cottontails and chipmunks the adults hunt.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">The food web a fox holds together — cottontails, chipmunks, squirrels, and the prey layer that regulates them</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-cottontail')}>
                Eastern Cottontail
              </button>{' '}
              &mdash; cottontails are red fox prey primarily in winter, when voles are
              harder to locate under snow; fox predation does not suppress cottontail
              populations, which are regulated by reproduction rate rather than predation;
              both species use the same shrub-edge and brush-pile habitat structure —
              the fox hunts from cover, the cottontail escapes to it
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-chipmunk')}>
                Eastern Chipmunk
              </button>{' '}
              &mdash; chipmunks are fox prey from April through October when above-ground
              activity peaks; a fox hunting a chipmunk uses the &ldquo;mousing pounce&rdquo; —
              arching above the prey and pinning it from above — the same technique used
              for voles under snow; chipmunks alert to an approaching fox with a rapid
              chip-chip-chip call and sprint to the nearest rock pile or burrow entrance
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-gray-squirrel')}>
                Eastern Gray Squirrel
              </button>{' '}
              &mdash; gray squirrels are taken primarily as juveniles in July and August,
              when young-of-year squirrels are leaving the nest and range without the
              predator-awareness of adults; adult squirrels are rarely caught because they
              retreat into the canopy beyond a fox&apos;s reach within two strides; juvenile
              squirrels foraging on the ground at 6–8 weeks are the primary cohort lost
              to fox predation
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('garter-snake')}>
                Garter Snake
              </button>{' '}
              &mdash; garter snakes are supplementary fox prey through summer; a fox
              patrolling the leaf-litter zone along a shrub edge will take a garter snake
              encountered during routine rodent hunting; both species forage the same
              ground-layer zone between garden beds and lawn edges — a fox moving through
              this zone in the early morning is working the same chemical landscape the
              snake reads with its tongue
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('red-tailed-hawk')}>
                Red-tailed Hawk
              </button>{' '}
              &mdash; red-tailed hawks and red foxes hunt the same mouse and vole
              population from above and below; both accumulate secondary rodenticide
              through the same contaminated mouse prey; in a neighborhood where bait
              stations are in use, the toxin moves from the same mouse into the hawk
              catching it from a fence post and the fox catching it from the lawn edge —
              an invisible parallel contamination through the same food source
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('striped-skunk')}>
                Striped Skunk
              </button>{' '}
              &mdash; foxes and skunks occupy overlapping nocturnal ranges and occasionally
              contest the same cache sites; foxes avoid direct confrontation with skunks —
              the cost of a spray discharge outweighs the benefit of any single food item;
              both species accumulate anticoagulant rodenticide through the same suburban
              mouse and vole population
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Want to build habitat that lets the fox do its work?</strong>{' '}
            Start by removing rodenticide with the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , build escape cover with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , and understand the shared threat{' '}
            <button className="link-button" onClick={() => onNavigate('virginia-opossum')}>
              Virginia Opossums
            </button>
            {' '}and foxes both face from the same bait stations.
          </p>
        </div>
      </div>
    </>
  )
}