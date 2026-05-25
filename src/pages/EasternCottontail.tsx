import type { Page } from '../App'

interface EasternCottontailProps {
  onNavigate: (page: Page) => void
}

export default function EasternCottontail({ onNavigate }: EasternCottontailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/91229197/large.jpg"
          alt="Eastern cottontail sitting upright in a grassy yard — brown fur mottled with gray, white fluffy tail visible, large round eyes alert"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/248492879/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Bill Keim&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/observations/57205887" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>The eastern cottontail does not dig a burrow — it scrapes a hollow 10 centimeters wide into the soil, lines it with dried grass and fur pulled from its own belly, and covers the opening with a leaf plug each time it leaves</h1>
        <p className="hero__lead">
          The eastern cottontail (<em>Sylvilagus floridanus</em>) raises its young entirely
          above the frost line, in a nest that a lawn mower can reach. The nest is a scrape —
          a depression dug into soft, sheltered soil to 10–12 centimeters deep, lined with dried
          grass, plant fibers, and fur the mother pulls from her own abdomen before giving birth.
          She covers the opening with a plug of dried leaves or grass every time she leaves
          after nursing, pressing the plug level with the surrounding ground. The kits inside
          have no additional protection. Their survival depends on the plug staying invisible
          in undisturbed, dense vegetation.
        </p>
        <p className="hero__lead">
          A female eastern cottontail produces 3–7 litters per breeding season, from February
          through September in the northern United States. Each litter holds 3–5 kits. Most do
          not reach ten weeks. Domestic cats, red foxes, and coyotes account for the majority
          of kit losses in suburban yards; lawn mowing of active nest sites during May and June
          accounts for most of the remainder. The animal that appears most commonly at the
          edges of suburban lawns survives primarily by producing offspring faster than they die.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="nest-heading">
          <h2 id="nest-heading">Nest site, leaf plug, and the mowing window — May through mid-August</h2>
          <p>
            The eastern cottontail does not excavate a tunnel or den. Its daily resting place
            is the form — a shallow body-impression pressed into dense vegetation, invisible
            from two feet away. The nest is a more constructed version: a deliberate excavation,
            10–12 centimeters across and 10–12 centimeters deep, cut into soft soil in an area
            with dense low cover. The mother lines the hollow with dried grass and plant fibers,
            then adds a layer of her own abdominal fur before the kits are born.
          </p>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/248492879/large.jpg"
              alt="Eastern cottontail at rest in dry grass and leaf litter near a shrub edge — the typical daytime resting position in suburban edge habitat"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/258976334/large.jpeg'
              }}
            />
            <figcaption>
              A cottontail at rest in low cover near a shrub edge. During daylight hours,
              cottontails press into dense vegetation within a few meters of their feeding
              areas and sit still — the form and the animal inside it are nearly invisible
              in unmowed grass or leaf litter.
              <span className="photo-credit"> Photo: Marilynn Miller&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/observations/144743989" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a></span>
            </figcaption>
          </figure>
          <p>
            The nesting season runs from roughly February through September, with the heaviest
            kit production from March through August in most of the eastern United States. A
            nest found while mowing in May or June is almost certainly active — the mother
            has been nursing at night and the kits are below the leaf plug. Kits that have
            the nest disturbed die from exposure and hypothermia within hours if the hollow
            is left open. Kits found outside a disturbed nest can be returned to the nest,
            the plug replaced over them, and the site left undisturbed for 24 hours; the
            mother returns that night regardless of whether a person has touched the nest.
          </p>
          <p>
            Cottontail nest losses in suburban yards during May and June trace almost entirely
            to mowing of active nest sites. Leaving one corner of the yard unmowed from May
            through mid-August removes this loss at its source. A strip 10 feet wide with
            undisturbed grass and ground cover tall enough to hide a clenched fist is sufficient
            for a nest. The leaf plug sits level with the surrounding vegetation — invisible
            from five feet away in grass that has not been cut since spring.
          </p>
        </section>

        <section aria-labelledby="nursing-heading">
          <h2 id="nursing-heading">Two visits per night, three minutes each — the mother&apos;s only contact with the kits between birth and weaning</h2>
          <p>
            After the kits are born, the mother does not stay at or near the nest between
            feedings. She spends the day away from the site entirely, returning only at
            dusk and again before dawn — two visits per 24-hour period, each lasting
            roughly 3–5 minutes. During each visit she straddles the nest, nurses the
            kits, then leaves. She does not groom, carry, or rearrange them. She does
            not sleep at the nest or guard it overnight.
          </p>
          <p>
            This is how the nest avoids drawing predator attention. A female rabbit
            spending most of the day at a nest full of kits would create a scent trail,
            a movement pattern, and a visible presence that leads predators directly to
            the nest. By leaving immediately after nursing and returning only twice —
            in low-light conditions when movement is harder for predators to track — the
            mother avoids leaving any daytime sign near the kits. A predator observing
            the yard in daylight has almost no information about where the nest is.
          </p>
          <p>
            Kits open their eyes at 7–10 days. By two weeks they eat some solid food
            alongside nursing. By three weeks they are fully weaned. By four weeks they
            leave the nest site entirely and begin dispersing. From birth to independent
            foraging in roughly 28 days — the timeline is short enough that the nesting
            window from any single litter fits twice inside a single suburban mowing season.
          </p>
        </section>

        <section aria-labelledby="escape-heading">
          <h2 id="escape-heading">Eighteen miles per hour in a zigzag, then freeze — the physical structure the sprint depends on</h2>
          <p>
            When flushed from cover, the eastern cottontail bolts in a zigzag pattern at
            speeds up to 18 miles per hour, covering open ground in 3–5 seconds, and then
            freezes inside or against dense vegetation. The direction changes are abrupt —
            most of the cottontail&apos;s predators (foxes, coyotes, domestic cats) pursue
            in straight lines and cannot match a sudden lateral shift at full speed. The
            escape route ends at dense cover: a brush pile, a shrub mass, a thicket of stems.
          </p>
          <p>
            A yard mowed to its edges and fenced at the property line provides no escape
            structure. A cottontail flushed in that yard runs until it reaches a fence or
            a corner, with no thicket to disappear into. Brush piles, dense native shrub
            plantings, or unmowed grass strips along property edges give the zigzag sprint
            somewhere to end. The same structures serve as the daytime resting cover the
            animal uses every morning.
          </p>
          <p>
            Cottontails are crepuscular — most active at dawn and dusk — but they also
            feed and move through the yard at night. During the day they press into the
            same dense cover within a few meters of their feeding areas, sitting still
            enough to go unnoticed. The rabbit visible on the lawn at dusk is usually
            within 30 feet of where it spent the afternoon motionless in grass or shrubs.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>The yard changes that give a cottontail a place to nest, feed, and escape</h2>
          <ol className="step-list">
            <li>
              <strong>Stop mowing one corner of the yard from May through mid-August.</strong>{' '}
              A strip 10 feet wide with tall grass and undisturbed ground cover provides
              enough dense, uncut vegetation for a nest. The mother scrapes the nest into
              soft soil inside growth that has not been disturbed since spring. Once the
              kits leave at four weeks, the nest is abandoned and the area can be mowed.
              Most suburban cottontail kit losses happen when active nests are mowed in May
              or June — not from the blade, but from the nest being opened and the kits
              exposed to rain and temperature.
            </li>
            <li>
              <strong>Build or keep a brush pile.</strong>{' '}
              A pile of stacked branches and wood debris 3–4 feet high and 4–5 feet wide
              gives the cottontail escape cover within a few strides of open lawn. Dead
              stems and branches left at the yard edge serve the same function. The
              cottontail presses against the pile during the day and sprints to it when
              flushed from the open lawn — the zigzag ends at the first dense structure
              it can reach.
            </li>
            <li>
              <strong>Keep cats indoors from March through September.</strong>{' '}
              Domestic cats are the leading kit predator in suburban yards and one of the
              leading causes of adult cottontail mortality in eastern North America. The
              weeks when kits are leaving the nest at 3–4 weeks of age and ranging for
              the first time overlap exactly with peak cat hunting activity. At that age,
              the kits are mobile but not yet fast enough to complete the escape sprint
              a pursuing cat requires.
            </li>
            <li>
              <strong>Do not use anticoagulant rodenticide near your yard.</strong>{' '}
              Brodifacoum and bromadiolone persist in the tissues of any animal that
              consumes a poisoned individual, including the red-tailed hawks and Eastern
              screech owls that take cottontails and their young. Rodenticide contamination
              has been measured in 50–80% of raptors sampled in urban and suburban areas
              in multiple U.S. studies. A poisoned cottontail that dies above ground or
              is caught by a hawk passes the compound directly to the predator.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who shares the brush pile, the shrub edge, and the dawn patrol</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('red-tailed-hawk')}>
                Red-tailed Hawk
              </button>{' '}
              &mdash; adult cottontails are one of the Red-tailed Hawk&apos;s primary prey
              items in suburban and agricultural settings; hawks hunt the open lawn-to-edge
              transition zone where cottontails feed at dusk; the cottontail&apos;s response
              to an approaching hawk — freeze, press flat, then sprint to cover — is
              visible in yards where hawks hunt regularly
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-screech-owl')}>
                Eastern Screech Owl
              </button>{' '}
              &mdash; screech owls take young-of-year cottontails and kits that have left
              the nest at 3–4 weeks of age; they hunt at dusk in the same shrub-edge and
              lawn-edge zones where juvenile cottontails are most exposed; the screech owl
              nests in tree cavities over the same patches of dense low cover where
              cottontails rest during the day
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-chipmunk')}>
                Eastern Chipmunk
              </button>{' '}
              &mdash; chipmunks and cottontails both depend on brush piles and dense ground
              cover as daily resting and escape structure; neither competes with the other
              for food; a yard with a brush pile and unmowed edges supports both
              simultaneously, along with most of the insect-eating birds that use the
              same shrub-edge vegetation
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-turkey')}>
                Wild Turkey
              </button>{' '}
              &mdash; turkeys and cottontails share the same shrub-edge and lawn-edge
              foraging zone from March through October; turkeys flush cottontails resting
              in low cover when the flock moves through; both species scratch for food
              in the same brushy edges
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; cottontails browse partridge pea and other native legumes through
              July and August; the plant&apos;s low spreading growth keeps tender foliage
              at ground level through the weeks when cottontail kits are dispersing from
              the nest and ranging for the first time; the same plant hosts Cloudless
              Sulphur, Sleepy Orange, and Little Yellow butterfly larvae simultaneously
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('garter-snake')}>
                Garter Snake
              </button>{' '}
              &mdash; garter snakes and cottontail kits occupy the same unmowed grass and
              brush pile habitat; garter snakes are not a threat to cottontails older than
              a few days; both animals use dense low cover for thermoregulation and
              concealment and are found in the same patches of long grass through summer
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
