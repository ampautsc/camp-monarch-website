import type { Page } from '../App'

interface StripedSkunkProps {
  onNavigate: (page: Page) => void
}

export default function StripedSkunk({ onNavigate }: StripedSkunkProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/186427674/large.jpeg"
          alt="Striped skunk facing forward with its distinctive white stripe running from head to tail, photographed in a suburban yard at dusk"
          className="species-hero-image"
          style={{ objectPosition: 'center 35%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/66330139/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Ali Campbell&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/observations/110343901" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>A striped skunk foraging for grubs cuts a conical hole 3–4 centimeters wide, presses its nose into the soil to smell the larva below, and extracts it — the same Japanese beetle larva that lawn-chemical companies sell imidacloprid to kill</h1>
        <p className="hero__lead">
          The striped skunk (<em>Mephitis mephitis</em>) forages at night by smell, quartering
          lawn edges and garden beds with its nose pressed low to the ground. In July and August,
          when Japanese beetle grubs hatch and begin feeding on grass roots 2–5 inches underground,
          skunks detect them through the soil surface and drill a series of conical extraction holes
          along the grub concentration. Each hole is roughly 3–4 centimeters wide — narrow at the
          top, widening slightly where the larva was pulled out. The holes follow the grub population
          through a yard with the logic of a systematic search.
        </p>
        <p className="hero__lead">
          A yard showing skunk digging in July is a yard with an active grub population being
          reduced by a forager that requires no scheduling, payment, or pesticide application.
          The standard residential response — calling pest control to trap the skunk, then
          applying grub-killer — removes the biological control and substitutes a synthetic one.
          The grubs return the following season. The skunk does not.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="spray-heading">
          <h2 id="spray-heading">Seven sulfur compounds, a 15-foot range, and the 10-day reload</h2>
          <p>
            The striped skunk&apos;s spray contains a mixture of seven sulfur-containing
            compounds — primarily (E)-2-butene-1-thiol, 3-methyl-1-butanethiol, and their
            thioacetate forms. The thiols produce the immediate, acute odor detectable at
            concentrations as low as 10 parts per billion. The thioacetate compounds are the
            reason the smell intensifies with water — they hydrolyze into additional thiols
            when wet. Washing with water alone makes the odor temporarily worse; hydrogen
            peroxide oxidizes the thiols into odorless sulfonic acids and reduces the smell.
          </p>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/66330139/large.jpg"
              alt="Striped skunk in defensive posture, back arched, tail raised — the warning display that precedes a spray by several seconds"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/346908843/large.jpg'
              }}
            />
            <figcaption>
              The arched back and raised tail are the third step in a warning sequence that
              begins with front-foot stamping. A person who backs away slowly during any
              stage of this sequence will not be sprayed. Skunks discharge rarely because
              the glands take 7–10 days to rebuild after full use.
              <span className="photo-credit"> Photo: juniper_likethetree&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/observations/41803658" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a></span>
            </figcaption>
          </figure>
          <p>
            The scent glands hold enough for roughly 5–6 consecutive sprays. After full
            discharge, a skunk needs 7–10 days to rebuild its reserve. Because the spray
            is the skunk&apos;s only significant predator deterrent, skunks do not discharge
            without provocation and explicit warning. The warning sequence is consistent and
            observable: rapid front-foot stamping on the ground, followed by an arched-back
            posture with tail raised, followed by a turn that orients the anal glands toward
            the threat. The spray range is 10–15 feet with high accuracy. A person who moves
            away slowly during any of these steps ends the encounter without spray in nearly
            all cases.
          </p>
          <p>
            Striped skunks have effective vision only to about 10 feet and rely primarily on
            smell and hearing to navigate. This is why a skunk sometimes walks directly toward
            a standing person — it may not register the human as a threat until it is within
            a few feet, at which point it executes the warning display and waits. The
            encounter resolves without spray if the person stands still or backs away slowly.
            The skunk has far more to lose from discharging its reserve than from sharing a yard.
          </p>
        </section>

        <section aria-labelledby="grubs-heading">
          <h2 id="grubs-heading">Japanese beetle larvae, yellowjacket nests, and the insecticide the skunk replaces</h2>
          <p>
            Japanese beetle (<em>Popillia japonica</em>) adults lay eggs in July in the top
            inch of moist soil. The eggs hatch into C-shaped white grubs that move down to
            2–5 inches, feed on grass and plant roots through August and September, then
            overwinter deeper before returning to the root zone the following spring. The
            August grub concentration is what skunks follow through the lawn. Their nose
            detects the larva through the soil surface, and they drill directly to it.
          </p>
          <p>
            Imidacloprid (sold in GrubEx and similar products) and chlorantraniliprole
            are systemic insecticides applied preventively in June and July. Both accumulate
            in soil and affect a broad range of soil invertebrates — earthworms, ground
            beetles, and other arthropods that skunks, American toads, and robins eat through
            the same lawn. A skunk foraging a treated lawn is foraging a food base that has
            been reduced across the board. A skunk foraging an untreated lawn with grubs is
            doing the same job the product was purchased to do.
          </p>
          <p>
            Skunks also excavate yellowjacket nests at night — digging into the entrance,
            breaking apart the nest structure, and eating the larvae and adults. Their thick
            fur protects them from most stings. A yellowjacket nest in the lawn that became
            a concern in July is frequently a scattered pile of comb fragments by mid-August
            when skunks are foraging the area.
          </p>
        </section>

        <section aria-labelledby="den-heading">
          <h2 id="den-heading">Communal dens, a 10-foot visual range, and the brush pile they return to each morning</h2>
          <p>
            Striped skunks do not excavate their own dens. They occupy existing cavities —
            abandoned groundhog burrows, spaces under decks and sheds, hollow logs, brush
            piles, and culverts. A single den site in winter may hold multiple animals: a
            male may share a den with up to 12 females, with individuals entering and exiting
            on warm nights throughout the cold season. Skunks do not hibernate. They enter
            a torpor-like state during the coldest periods, reducing metabolic activity and
            body temperature, but they emerge regularly when temperatures rise above freezing.
          </p>
          <p>
            Kits are born in May and June, in litters of 4–7. They emerge from the den in
            late June and July and begin foraging with the mother — the family groups often
            seen moving single-file across a lawn at dusk. By late summer the kits disperse.
            Males expand their range in fall, sometimes moving 1–2 miles in a single night
            in search of mates.
          </p>
          <p>
            Like opossums, skunks accumulate rodenticide through contaminated prey. They eat
            field mice and voles — frequently the same individuals targeted by residential
            bait stations. Anticoagulant rodenticides (brodifacoum, bromadiolone) persist in
            the tissues of any animal that consumes a poisoned individual. A skunk eating two
            or three rodenticide-contaminated mice over the course of a week accumulates a
            lethal dose. The poisoning pathway runs through the same bait station that was
            set for mice in the garage.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>The four yard changes that let a skunk do its work without incident</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/346908843/large.jpg"
              alt="Striped skunk foraging along the edge of a lawn at dusk — nose to the ground, moving slowly along a mulched garden bed"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/186427674/large.jpeg'
              }}
            />
            <figcaption>
              A skunk foraging along a lawn edge at dusk is following smell — earthworms,
              grubs, beetles, and other invertebrates concentrated in the top few inches of
              soil. The holes it leaves behind mark grub-extraction sites, not random damage.
              <span className="photo-credit"> Photo: Richard Poort&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/observations/197025524" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a></span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Skip the preventive grub treatment in June.</strong>{' '}
              Imidacloprid and chlorantraniliprole kill the grub population before it peaks,
              but they also reduce the earthworm and soil-invertebrate density the skunk
              forages through the rest of the season. A lawn without preventive grub treatment
              will have skunks digging in July and August. That digging is the grub treatment.
              The extraction holes fill and disappear within two weeks of rainfall; the grub
              damage they prevent compounds through September.
            </li>
            <li>
              <strong>Remove rodenticide bait stations.</strong>{' '}
              Skunks eat mice and voles. A single week of bait-station use in a garage or
              under a deck can pass enough anticoagulant into the food chain to kill a skunk,
              an opossum, a red-tailed hawk, or an Eastern screech owl foraging the same
              mouse population. Snap traps placed inside an enclosed structure produce
              the same rodent result without secondary poisoning risk to the food web above.
            </li>
            <li>
              <strong>Leave den structure in place during summer.</strong>{' '}
              A skunk under a deck or in a brush pile from May through August is almost
              certainly a nursing female. Sealing the den entrance during this period traps
              kits inside. Wait until late August — after kits have dispersed and the female
              is ranging independently — then seal exits with a one-way door for two weeks
              before closing permanently. The skunk exits and does not re-enter.
            </li>
            <li>
              <strong>Give a night encounter room to resolve itself.</strong>{' '}
              A skunk encountered on the lawn at night will execute its warning display and
              leave if given 10–15 feet of space and a clear route away. The warning sequence
              — front-foot stamping, raised tail, angled posture — takes 5–10 seconds and
              ends with the skunk departing. Moving toward the animal, running, or yelling
              compresses the warning window and increases spray probability. Slow, quiet
              withdrawal ends the encounter without contact in nearly all cases.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">The yard&apos;s nocturnal food web — skunks, opossums, owls, and the grub layer they all connect through</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('virginia-opossum')}>
                Virginia Opossum
              </button>{' '}
              &mdash; skunks and opossums are both nocturnal omnivores foraging the same
              ground layer; both are susceptible to secondary rodenticide poisoning from the
              same contaminated mouse population; both use brush piles, hollow logs, and
              spaces under decks as den and shelter sites; a yard that supports one almost
              always supports the other
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('red-tailed-hawk')}>
                Red-tailed Hawk
              </button>{' '}
              &mdash; red-tails take juvenile skunks and occasionally adults in open areas;
              both species accumulate anticoagulant rodenticide through the same suburban
              mouse population, and a single week of bait-station use can kill animals in
              both species foraging the same neighborhood; the contamination pathway runs
              independently through the mouse population to each predator that eats mice
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-screech-owl')}>
                Eastern Screech Owl
              </button>{' '}
              &mdash; screech owls hunt small mammals in the same lawn-edge and shrub-edge
              zones skunks forage each night; both are nocturnal, both rely on a
              chemical-free prey base, and both die from secondary rodenticide poisoning
              through the same contaminated mice; a yard free of bait stations and systemic
              insecticides supports both simultaneously
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('garter-snake')}>
                Garter Snake
              </button>{' '}
              &mdash; garter snakes and skunks both forage the leaf-litter and ground-level
              invertebrate layer; the snake tracks earthworms and slugs by chemical trace,
              the skunk follows earthworm and grub concentrations by scent through the same
              soil surface; both are found in the same patches of unmowed edge, brush piles,
              and dense ground cover through summer
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Want to build habitat that keeps this food web intact?</strong>{' '}
            Start by removing pesticides with the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , build den structure with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , and add ground-level water with{' '}
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
