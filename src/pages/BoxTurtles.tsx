import type { Page } from '../App'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface BoxTurtlesProps {}

export default function BoxTurtles({}: BoxTurtlesProps) {
  return (
    <>
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
          <h2 id="bt-life-heading">What makes them vulnerable</h2>
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
          <h2 style={{ marginTop: 0 }}>Three things that protect box turtles</h2>
          <ol className="step-list">
            <li>
              <strong>Drive slowly on country roads in May and June.</strong>{' '}
              This is when turtles cross most frequently. At 35 mph, a turtle is survivable.
              At 55 mph, swerving is dangerous and braking is not enough. Slow down.
            </li>
            <li>
              <strong>If a turtle is crossing a road, help it to the side it was heading toward.</strong>{' '}
              Do not take it home. Do not move it to a pond or park. Move it 10 feet in the direction
              it was already traveling and set it down facing that way. That is enough.
            </li>
            <li>
              <strong>Leave the brushy edges of your yard untended.</strong>{' '}
              Box turtles use brushy cover for shelter, overwintering, and foraging.
              A strip of undisturbed ground along a fence or property edge is habitat.
              Fallen logs, leaf piles, and overgrown corners are the features that make a yard usable.
            </li>
          </ol>
        </div>

        <section aria-labelledby="bt-indicator-heading">
          <h2 id="bt-indicator-heading">What box turtles tell us</h2>
          <p>
            Box turtles are an indicator of landscape continuity. A yard or woodlot with a resident box turtle
            has been ecologically intact long enough for that animal to establish a territory and survive.
            When box turtles disappear from a neighborhood, it usually means the landscape fragmented
            before anyone was paying attention.
          </p>
          <p>
            Their slow reproduction means that even a recovering habitat takes 20 to 30 years
            to show up as a stable population. The best thing most people can do
            is protect the ones that remain.
          </p>
        </section>
      </div>
    </>
  )
}
