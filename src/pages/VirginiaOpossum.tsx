import type { Page } from '../App'

interface VirginiaOpossumProps {
  onNavigate: (page: Page) => void
}

export default function VirginiaOpossum({ onNavigate }: VirginiaOpossumProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Opossum_2.jpg/960px-Opossum_2.jpg"
          alt="Virginia opossum facing the camera, showing its white face, pink nose, and alert dark eyes — North America's only marsupial"
          className="species-hero-image"
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Cody Pope&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Opossum_2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Virginia Opossum</h1>
        <p className="hero__lead">
          North America&apos;s only marsupial is also one of the most effective
          tick-control animals you can have in your yard. A single opossum
          consumes up to 5,000 ticks in a season — grooming off and eating
          nearly every one that drops onto its fur. It cannot contract rabies.
          It poses no threat to pets or people. And almost no one knows it is there.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="marsupial-heading">
          <h2 id="marsupial-heading">North America&apos;s only marsupial</h2>
          <p>
            The Virginia Opossum (<em>Didelphis virginiana</em>) is the sole
            representative of the marsupial order on the North American continent.
            Its lineage predates the extinction of the non-avian dinosaurs — the
            opossum body plan has been distinct for over 70 million years, and the
            skeletal structure it carried then is the structure it carries now.
            Its 50 teeth — more than any other North American land mammal — are
            a relic of that ancient ancestry.
          </p>
          <p>
            After a gestation of just 13 days, newborns the size of a honeybee
            crawl unaided from the birth canal to the mother&apos;s pouch, where
            they latch onto one of 13 nipples and spend the next 60 to 70 days
            completing development. Litters of 6 to 9 are typical. By three
            months, young opossums ride on their mother&apos;s back, clinging to
            her fur, before dispersing at four to five months. The mother has
            usually already mated again.
          </p>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Didelphis_virginiana_with_young.jpg/960px-Didelphis_virginiana_with_young.jpg"
              alt="Virginia opossum mother with several young opossums clinging to her back — a common sight in late summer as juveniles prepare to disperse"
              loading="lazy"
            />
            <figcaption>
              Young opossums ride on their mother&apos;s back for several weeks after
              leaving the pouch. A single female can raise two or three litters per
              year. The short lifespan — typically under two years in the wild — is
              compensated by rapid reproduction.
              <span className="photo-credit"> Photo: Cody Pope&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Didelphis_virginiana_with_young.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            The opossum&apos;s life is fast and brief. Wild individuals rarely
            survive beyond 18 months; the metabolic and reproductive pace
            leaves little time for longevity. That brevity makes population
            resilience dependent on habitat productivity, not individual
            survival. When food, shelter, and water are plentiful, populations
            are stable. When suburban yards are chemically managed and
            structurally simplified, the population of opossums — and all the
            services they provide — quietly disappears.
          </p>
          <p>
            &ldquo;Playing possum&rdquo; is not a performance. It is an involuntary
            physiological response — a catatonic state triggered by extreme
            stress — that the animal cannot consciously control. The body goes
            limp, the mouth falls open, and a foul-smelling secretion is
            released from the anal glands. The episode lasts from a few minutes
            to several hours. It is the opossum&apos;s last-resort defense against
            predators, not a strategy, and the animal has no awareness of it
            while it is happening.
          </p>
        </section>

        <section aria-labelledby="ticks-heading">
          <h2 id="ticks-heading">The tick predator no one knew they needed</h2>
          <p>
            In 2009, researchers at the Cary Institute of Ecosystem Studies
            placed known numbers of ticks in enclosures with opossums and
            counted how many survived. The result was striking: opossums
            groomed off and consumed approximately 96 percent of the ticks
            that dropped onto them. Individual opossums were estimated to kill
            between 3,500 and 5,500 blacklegged ticks (<em>Ixodes scapularis</em>)
            per season — the same tick that transmits Lyme disease, anaplasmosis,
            and babesiosis.
          </p>
          <p>
            The mechanism is straightforward. Blacklegged ticks drop from
            vegetation onto passing hosts, then crawl upward in search of a
            blood meal. Opossums, with their dense fur and compulsive grooming
            behavior, intercept nearly all of them before they can feed. The
            ticks end up in the opossum&apos;s digestive system rather than in the
            skin of a deer, dog, or person.
          </p>
          <p>
            Lyme disease is now the most common vector-borne illness in the
            United States, with the CDC tracking over 476,000 estimated cases
            per year. The geographic range of the blacklegged tick is expanding
            northward and westward as winters warm. In this context, an animal
            that passively removes thousands of ticks per season from a
            suburban landscape is providing a disease-mitigation service that
            no pesticide spray replicates at the same scale.
          </p>
          <p>
            The opossum also cannot contract rabies in nearly all practical
            circumstances. Its core body temperature — 94 to 97°F — falls
            below the threshold at which the rabies virus can replicate
            efficiently. Confirmed rabies cases in opossums are extraordinarily
            rare in the scientific literature. An opossum hissing and showing
            its teeth is performing a threat display, not exhibiting neurological
            disease. It will almost always flee or play dead before making any
            contact.
          </p>
        </section>

        <section aria-labelledby="habitat-heading">
          <h2 id="habitat-heading">What they need: cover, omnivore forage, and water</h2>
          <p>
            Opossums are generalist omnivores with modest habitat requirements.
            They do not excavate their own burrows — they occupy brush piles,
            hollow logs, spaces under decks, and abandoned burrows made by
            groundhogs or other animals. They do not hold territories; the same
            area may be used by multiple individuals across different nights.
          </p>
          <p>
            Their diet reflects what a healthy suburban ecosystem contains:
            insects, snails, earthworms, slugs, overripe fruit, berries,
            small vertebrates, carrion, and ticks. In yards where native
            plantings produce fruit and insects and where leaf litter supports
            invertebrate communities, opossums find consistent, varied forage
            across three seasons. In yards managed primarily as lawn, there
            is very little to sustain them.
          </p>
          <p>
            In September, yards and woodland edges where{' '}
            <button className="link-button" onClick={() => onNavigate('pawpaw')}>
              Pawpaw
            </button>
            {' '}trees are growing become a reliable nightly foraging stop. Ripe pawpaw
            fruit softens and drops over two to three weeks, and opossums work the
            ground beneath the trees each night while the fallen fruit remains.
            Raccoons and foxes forage the same grove — in groves with heavy crops,
            black bears arrive from adjacent woodland.
          </p>
          <p>
            Opossums can survive bites from copperheads, cottonmouths, and several
            rattlesnake species, and will eat venomous snakes when
            encountered. Researchers have identified a peptide in opossum
            blood serum that neutralizes pit viper venom — work that may
            eventually contribute to antivenin development.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>A brush pile, no rodenticides, fresh water at ground level, and leaf litter standing through winter</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Leaf_litter_Scot%27s_Pine_Forest.jpg/960px-Leaf_litter_Scot%27s_Pine_Forest.jpg"
              alt="Deep layer of fallen leaves on a forest floor — the insulation, shelter, and invertebrate food source that opossums depend on through the cold months"
              loading="lazy"
            />
            <figcaption>
              Leaf litter depth drives invertebrate density — the earthworms,
              slugs, beetles, and overwintering insects that make up the core
              of an opossum&apos;s diet. A naturalized corner with undisturbed
              ground cover is more valuable to opossums than any supplemental
              feeding.
              <span className="photo-credit"> Photo: MPF&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/3.0" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Leave brush piles and undisturbed corners.</strong>{' '}
              Opossums do not dig their own dens. They depend on existing cover:
              brush piles, hollow logs, spaces under decks and sheds, dense
              native shrub thickets, and leaf accumulations at fence lines.
              A naturalized corner that a conventional yard service would clean
              up is exactly the den site an opossum needs. Leave at least one
              area of structural complexity — something that creates protected,
              low-ground cover — and the habitat requirement is met.
            </li>
            <li>
              <strong>Stop using rodenticides.</strong>{' '}
              Opossums eat rodents — mice and voles when they can catch them —
              and are themselves eaten by hawks, owls, and foxes. Rodenticide
              use anywhere in the food chain creates secondary poisoning risk.
              Opossums that consume poisoned prey accumulate the toxin in their
              tissue. Eliminating rodenticides from your yard protects opossums,
              raptors, and every carnivore in the local food web simultaneously.
            </li>
            <li>
              <strong>Provide fresh water at ground level.</strong>{' '}
              Opossums drink regularly and will visit birdbaths, rain garden
              basins, and any open water source accessible from the ground.
              A shallow dish near a shrub border or brush pile serves opossums
              and dozens of other animals. Change the water every two days to
              prevent mosquito breeding and keep the source clean.
            </li>
            <li>
              <strong>Leave native plantings and leaf litter through winter.</strong>{' '}
              Opossums do not hibernate, but they reduce activity sharply in
              cold weather and rely on stored forage and overwintering
              invertebrates in the soil. Clearing leaf litter in fall removes
              both the insulation and the food source they depend on through
              January and February. Leaving native plant stems, seed heads,
              and fallen leaves intact — even in one small area — measurably
              improves winter survival.
            </li>
          </ol>
        </div>

        <section aria-labelledby="misunderstood-heading">
          <h2 id="misunderstood-heading">The animal that asks nothing and gives a great deal</h2>
          <p>
            The Virginia Opossum is one of the most misread animals in suburban
            North America. It is nocturnal, so encounters happen at night, in
            circumstances — headlights, garbage cans — that make it seem like
            a pest. Its hissing, its open-mouthed threat display, its
            involuntary collapse — all of these are mistaken for aggression or
            disease by people who have no frame for what they are seeing.
          </p>
          <p>
            What they are actually seeing is a mammal that has occupied this
            continent for tens of millions of years, that has no interest in
            confrontation, that is methodically removing ticks from the
            landscape every night, and that will be gone before dawn. The
            opossum does not need to be fed, relocated, or managed. It needs
            cover, some water, and a food base — all of which a yard oriented
            toward wildlife already provides.
          </p>
          <p>
            The absence of opossums from a suburban neighborhood is a
            measurable loss: more ticks, more rodents, less biological
            diversity in the food web. Their presence is not a nuisance.
            It is an indicator that the yard is functioning.
          </p>
        </section>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">The raptor above, the snake at ground level, and the brush pile they all share</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('red-tailed-hawk')}>
                Red-tailed Hawk
              </button>{' '}
              &mdash; red-tails and opossums move through the same suburban food chain &mdash;
              the hawk hunts mice and voles in daylight from elevated perches, the opossum hunts
              the ground layer at night; both accumulate anticoagulant rodenticide from the same
              suburban mouse population, and both can be killed by a single week of bait-station
              use in a neighboring yard
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-screech-owl')}>
                Eastern Screech Owl
              </button>{' '}
              &mdash; the screech owl hunts the same yard the opossum forages each night,
              working canopy edges and fence lines from dusk while the opossum works the ground;
              both are nocturnal, both rely on a chemical-free prey base, and both face secondary
              rodenticide poisoning from the same contaminated mice and voles in the same yard
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('garter-snake')}>
                Garter Snake
              </button>{' '}
              &mdash; garter snakes and opossums both forage the leaf litter and brush pile zone
              at the yard&apos;s ground level; the snake tracks earthworms and slugs by chemical
              trace, the opossum cleans ticks and invertebrates from the same surface layer; a
              yard with active garter snakes and opossums is carrying an intact invertebrate food
              web in the top few inches of soil
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-cottontail')}>
                Eastern Cottontail
              </button>{' '}
              &mdash; cottontails and opossums share the same brush piles and dense shrub edges
              as cover; the cottontail uses them as daytime escape structure and nesting ground,
              the opossum uses them as nighttime den sites; a yard with a brush pile and unmowed
              edges supports both simultaneously, with no competing resource needs
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Want to build habitat that brings opossums back?</strong>{' '}
            Start with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , eliminate pesticides with the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , and add water with{' '}
            <button className="link-button" onClick={() => onNavigate('water-for-wildlife')}>
              Water for Wildlife
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
