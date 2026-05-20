import type { Page } from '../App'

interface BoxTurtlesProps {
  onNavigate: (page: Page) => void
}

export default function BoxTurtles({ onNavigate }: BoxTurtlesProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Eastern_Box_Turtle%2C_North_Carolina%2C_US_imported_from_iNaturalist_photo_71168521_%28cropped%29.jpg"
          alt="Eastern Box Turtle on forest floor showing high-domed shell with orange and yellow patterning on dark background"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: (c) Joshua Liverman, some rights reserved (CC BY) · <a href="https://commons.wikimedia.org/wiki/File:Eastern_Box_Turtle%2C_North_Carolina%2C_US_imported_from_iNaturalist_photo_71168521_(cropped).jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a> via Wikimedia Commons */}
          Photo: (c) Joshua Liverman, some rights reserved (CC BY)&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Eastern_Box_Turtle%2C_North_Carolina%2C_US_imported_from_iNaturalist_photo_71168521_(cropped).jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Box turtles</h1>
        <p className="hero__lead">
          A box turtle can live 100 years and spend its entire life in a territory
          no bigger than a few football fields. It knows every log, every damp hollow,
          every berry patch in that space. Roads cut that territory in half.
          Move a box turtle to a new location and it will spend the rest of its life
          trying to get home.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="bt-life-heading">
          <h2 id="bt-life-heading">Slow breeding, road crossings in May, and a home range they cannot leave</h2>
          <p>
            Box turtles reach sexual maturity between 7 and 10 years. A female lays 4 to 6 eggs
            per clutch, and most years a predator finds the nest. A population can absorb this
            because adults survive for decades and eventually produce enough young.
            What the math cannot absorb is consistent adult mortality.
          </p>
          <p>
            Roads are the primary cause. In May and June, females cross roads searching for nesting sites.
            Males wander for mates. A box turtle's instinct when a threat approaches is to close its shell
            and wait. On a road, that instinct is fatal. One turtle killed per mile of road per year
            is enough to push a local population toward collapse over a generation.
          </p>
          <p>
            The second cause is relocation. People find box turtles and move them to "safer" spots.
            A turtle displaced from its home range will travel in a straight line toward where it came from,
            crossing every road and fence in the way, until it dies or arrives.
            If you find a box turtle that is not in immediate danger, leave it where it is.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Slow in May and June, ten feet for road turtles, brushy corners, and a mowing delay until late May</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Fallen_leaves.jpg" alt="Autumn leaves covering the ground" loading="lazy" />
            <figcaption>
              Box turtles overwinter beneath leaf litter, emerging in spring only when soil temperatures hold. A leaf pile left in a corner all winter is not yard neglect — it is the thermal insulation an animal with no other option depends on.
              <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;<a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Drive slowly on country roads in May and June.</strong>{' '}
              This is when turtles cross most frequently. At 35 mph, a turtle is survivable.
              At 55 mph, swerving is dangerous and braking is not enough. Slow down.
            </li>
            <li>
              <strong>If a turtle is crossing a road, move it ten feet in the direction it was already heading.</strong>{' '}
              Do not take it home. Do not move it to a pond or park. Set it down facing the direction
              it was traveling. That is enough.
            </li>
            <li>
              <strong>Leave the brushy edges of your yard untended.</strong>{' '}
              Box turtles use brushy cover for shelter, overwintering, and foraging.
              A strip of undisturbed ground along a fence or property edge is habitat.
              Fallen logs, leaf piles, and overgrown corners are the features that make a yard usable.
            </li>
            <li>
              <strong>Hold mowing on brushy corners until late May.</strong>{' '}
              Box turtles emerge from winter dormancy when soil temperature reaches 50°F —
              typically late March through early May depending on location.
              A freshly emerged turtle moves slowly and stays in leaf-litter cover.
              A mower running over an April corner can reach a turtle still in the debris it overwintered under.
              Waiting until late May gives emerging turtles six to eight weeks to disperse
              before the blade reaches that ground.
            </li>
          </ol>
        </div>

        <section aria-labelledby="bt-indicator-heading">
          <h2 id="bt-indicator-heading">A resident box turtle means the yard has been ecologically intact longer than most people have owned it</h2>
          <p>
            Box turtles are an indicator of landscape continuity. A yard or woodlot with a resident box turtle
            has been ecologically intact long enough for that animal to establish a territory and survive.
            When box turtles disappear from a neighborhood, it usually means the landscape fragmented
            before anyone was paying attention.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Eastern_Box_Turtle_8679.jpg"
                  alt="Eastern Box Turtle on the forest floor, high-domed shell and hinged plastron visible"
                  loading="lazy"
                />
                <figcaption>
                  The box turtle's hinged lower shell can seal so completely that a blade of grass cannot be inserted between the two halves. This defense evolved against biting predators over 200 million years. It offers zero protection against a lawn mower traveling at three miles per hour.
                  <span className="photo-credit"> Photo: Jarek Tuszyński · <a href="https://commons.wikimedia.org/wiki/File:Eastern_Box_Turtle_8679.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            Their slow reproduction means that even a recovering habitat takes 20 to 30 years
            to show up as a stable population. The best thing most people can do
            is protect the ones that remain.
          </p>
        </section>

        <section aria-labelledby="bt-plastron-heading">
          <h2 id="bt-plastron-heading">A hinge that took 200 million years to evolve closes in under a second</h2>
          <p>
            The box turtle is the only turtle in North America with a fully movable hinge in its plastron —
            the flat lower shell. The hinge is a band of flexible cartilage connecting two bone lobes.
            A hatchling cannot close completely; the cartilage is still hardening and the lobes have
            not yet reached full size. By the time the turtle reaches sexual maturity at age seven to ten,
            the two halves of the plastron seal together tightly enough that no predator native to North America
            can force them apart.
          </p>
          <p>
            The shell is not worn over a body the way armor is worn over a soldier. The carapace —
            the upper dome — is fused directly to the turtle's spine and expanded ribcage.
            The plastron below connects to it at the sides. Both are living bone covered with keratin scutes,
            the same protein that forms human fingernails. A box turtle cannot step out of its shell
            any more than you could step out of your ribcage.
          </p>
          <p>
            A raccoon working on a closed box turtle can maintain the attempt for twenty minutes
            without gaining access. Skunks, foxes, and coyotes all give up. The defense works
            against every predator that evolved alongside the box turtle across those 200 million years.
            A lawn mower blade traveling at three miles per hour generates enough rotational force
            to split the plastron along the hinge line.
          </p>
        </section>

        <section aria-labelledby="bt-territory-heading">
          <h2 id="bt-territory-heading">A fifty-foot circle measured across three decades of ownership</h2>
          <p>
            Radio-tracking studies established that box turtles typically use a home range of one to five acres —
            sometimes considerably less in fragmented suburban landscapes. Within that range, individuals
            return to the same overwintering sites, the same shallow mud depressions for heat regulation,
            the same berry patches year after year. Long-term mark-recapture data from several field sites
            found individuals within fifty feet of their original capture point thirty years after
            first tagging. Three different families had owned the property. The turtle had not moved.
          </p>
          <p>
            A box turtle navigates using at least three mechanisms: sensitivity to the Earth's magnetic field,
            sun-angle mapping that requires an open sky, and spatial memory of physical landmarks —
            fallen logs, stream edges, slope gradients. Remove the turtle from that landscape
            and all three systems orient toward home.
          </p>
          <p>
            A displaced turtle enters searching behavior. Its daily movement distances increase.
            Feeding stops. Body weight drops. The animal crosses roads it would not otherwise cross,
            moving in the direction of its original territory. Some individuals travel two or three miles
            before starvation, predation, or a vehicle ends the attempt.
            The turtle is not confused. It knows exactly where it is trying to go.
            The distance between where it is and where its map says home should be is the problem.
          </p>
        </section>

        <section aria-labelledby="bt-neighbors-heading">
          <h2 id="bt-neighbors-heading">Who else uses the same leaf litter and undisturbed ground</h2>
          <p>
            The leaf litter a box turtle overwinters in and the undisturbed soil beneath it are the same
            resources three other animals cannot complete their life cycles without.
            Protecting one means protecting all of them.
          </p>
          <ul>
            <li>
              <button className="link-button" onClick={() => onNavigate('fireflies')}>
                Fireflies
              </button>
              {' — '}Larvae spend one to two years as predators in the soil and leaf-litter layer;
              the grub treatments that kill Japanese beetle larvae kill firefly larvae in the same
              application, at the same depth, in the same ground.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('toad')}>
                American toad
              </button>
              {' — '}Overwinters below the frost line in loose soil and organic matter, emerging in March
              or April when soil temperatures rise above 50°F — the same thermal threshold that brings
              box turtles out of dormancy.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('cecropia-moth')}>
                Cecropia moth
              </button>
              {' — '}Pupates in a cocoon attached to a woody shrub or small tree through winter —
              the same brushy edge cover that box turtles shelter beneath and forage through
              from spring into fall.
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
