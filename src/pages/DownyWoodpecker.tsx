import type { Page } from '../App'

interface DownyWoodpeckerProps {
  onNavigate: (page: Page) => void
}

export default function DownyWoodpecker({ onNavigate }: DownyWoodpeckerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Dryobates_pubescens_UL_03.jpg/960px-Dryobates_pubescens_UL_03.jpg"
          alt="Downy Woodpecker clinging to a dead tree snag, probing bark with chisel bill to extract beetle larvae"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Cephas · <a href="https://commons.wikimedia.org/wiki/File:Dryobates_pubescens_UL_03.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons */}
          Photo: Cephas&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Dryobates_pubescens_UL_03.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Downy Woodpecker</h1>
        <p className="hero__lead">
          A Downy Woodpecker doesn&apos;t ask much. It needs dead wood — a snag left
          standing, a branch allowed to stay, the beetle larvae tunneling through
          decaying bark. When you see one hitching up your tree trunk in February,
          you know something true about your yard: the decomposer food web is still
          intact. That is the same signal that tells monarchs a yard is safe for
          breeding.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="indicator-heading">
          <h2 id="indicator-heading">What the drumming means</h2>
          <p>
            The Downy Woodpecker (<em>Dryobates pubescens</em>) is the smallest
            woodpecker in North America and also the most tolerant of suburban yards —
            but only yards that have kept their dead wood. Its food is beetle larvae
            inside decaying branches and stumps, ants tunneling under bark, and other
            insects living in the zone between live and dead wood. A yard that has
            eliminated every dead branch, removed every stump, and hauled away every
            fallen log has eliminated its pantry. When a yard enforces complete
            tidiness, Downies move on within a season.
          </p>
          <p>
            Neonicotinoid pesticides are the second pressure. They are systemic — when
            trees are treated with imidacloprid or dinotefuran (common in products sold
            for emerald ash borer and other wood borers), the pesticide moves into the
            wood, where it persists for years. Wood-boring insects that feed in treated
            wood carry sublethal doses in their bodies. Downies that eat those insects
            accumulate those doses across a breeding season. Reduced nesting success
            follows. A yard with healthy Downy activity has been free of systemic tree
            treatments long enough for the food supply to recover.
          </p>
        </section>

        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">The bird — and its neighbors</h2>
          <p>
            At 6 to 7 inches long, Downy Woodpeckers are easy to overlook. Black and white
            plumage with a bold white stripe down the back. Males carry a small red patch at
            the back of the head; females do not. They are year-round residents across nearly
            all of North America — one of the most widely distributed birds on the continent —
            and do not migrate. The one you see in January is the same individual that nested
            in your neighborhood last spring.
          </p>
              <figure className="species-content-photo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Downy_Woodpecker.jpg"
                  alt="Downy Woodpecker clinging to a dead branch, foraging for insects hidden beneath the bark"
                  loading="lazy"
                />
                <figcaption>
                  A Downy Woodpecker working a dead branch is listening for beetle larvae moving inside the wood. It drills precisely where the vibration originates and extracts the larva with a barbed tongue longer than its bill. Dead trees removed from the yard remove both the food source and the cavity-nesting site the next generation will need.
                  <span className="photo-credit"> Photo: Ltshears · <a href="https://commons.wikimedia.org/wiki/File:Downy_Woodpecker.jpg" target="_blank" rel="noopener noreferrer">Public domain</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            They drum — rapid mechanical strikes on resonant dead wood or hollow branches —
            to defend territory and attract mates. Drumming is not foraging: it is
            communication. Each spring the drumming begins in February or March, weeks before
            nesting. A Downy can live 6 years or more, returning to the same territory
            year after year.
          </p>
          <p>
            Each spring, a pair excavates a new nest cavity in a dead snag — a 1-to-2-inch
            entrance hole, 8 to 12 inches deep. They incubate 4 to 5 eggs for about 12 days
            and fledge the young in late spring. After nesting, the hole is abandoned. The
            following year, black-capped chickadees, house wrens, eastern bluebirds, and tree
            swallows move in. One Downy Woodpecker pair creates housing for an entire succession
            of cavity-nesting neighbors, none of which can excavate their own holes.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Dead wood, suet, a pesticide pause, and one native tree</h2>

          <figure className="species-content-photo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Snag_at_the_Wildlife_Garden_%2842263673541%29.jpg" alt="Standing dead tree in a garden with exposed dead wood" loading="lazy" />
            <figcaption>
              Downy woodpeckers excavate cavities in standing dead wood, and then often abandon those cavities to smaller birds. One snag left upright can function as a nursery column — providing first a woodpecker nest, then a chickadee nest, then a screech-owl roost, across years.
              <span className="photo-credit"> Photo: Ross Dunn&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/2.0" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Leave dead branches standing on otherwise healthy trees.</strong>{' '}
              The branch that looks like it should come down is usually the one with the
              most beetle larvae and the best chance of becoming a nest site. If the branch
              poses no safety risk, leave it. A dead branch on a live tree is one of the
              most productive wildlife features a suburban yard can have.
            </li>
            <li>
              <strong>Offer suet in a wire-mesh feeder through the winter.</strong>{' '}
              Suet — rendered fat, sometimes mixed with seeds or dried insects — is the most
              reliable Downy attractant available. Mount it directly on a trunk or large branch
              rather than on a hanging pole. Downies feed by bracing against vertical surfaces;
              they are awkward at feeders designed for perching birds. A suet cage screwed into
              a fence post or tree trunk will attract Downies within days in most neighborhoods.
            </li>
            <li>
              <strong>Stop using systemic pesticides on trees.</strong>{' '}
              Products containing imidacloprid or dinotefuran — sold for bark beetle, ash borer,
              and scale insect control — move through the vascular system of a treated tree and
              persist in the wood for years. The bark insects that are the Downy&apos;s primary
              food carry those compounds. Repeated sublethal exposure during a breeding season
              is enough to reduce nesting success. If tree health requires treatment, ask your
              arborist about alternatives that do not persist in the wood.
            </li>
            <li>
              <strong>Plant one native tree — an oak, cherry, or native maple — anywhere on the property.</strong>{' '}
              A native oak (<em>Quercus</em>) hosts more than 530 caterpillar species whose larvae
              bore into wood. A Bradford pear hosts 8. Dead branches from a native oak hold an
              order of magnitude more beetle larvae per cubic foot than dead branches from an
              ornamental of the same size. The dead limbs that fall as a native tree matures
              carry a beetle food web already built in. No ornamental tree produces that return
              on a standing snag. Find what grows in your hardiness zone at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">The neighbors who move into the holes</h2>
          <p>
            After a Downy Woodpecker pair fledges its young, the nest cavity stays open.
            Most secondary tenants arrive the following spring.{' '}
            <button className="link-button" onClick={() => onNavigate('black-capped-chickadee')}>
              Black-capped Chickadees
            </button>{' '}
            are among the first to claim an abandoned Downy hole — they need a cavity with
            a 1-to-1.25-inch entrance and cannot make their own. A Downy pair producing young
            in your yard is simultaneously creating the nest site a chickadee pair will need
            in twelve months.
          </p>
          <p>
            <button className="link-button" onClick={() => onNavigate('eastern-bluebird')}>
              Eastern Bluebirds
            </button>{' '}
            use cavities in the same size range. Before nest box programs reversed the bluebird
            decline in the 1970s, the natural cavity supply came almost entirely from woodpeckers
            working dead wood. The 1.5-inch entrance specification that bluebird trail volunteers
            use was derived from the size of holes woodpeckers naturally leave in standing snags.
            Where dead wood remains in the landscape, bluebirds sometimes bypass the nest box
            entirely and use the original.
          </p>
          <p>
            <button className="link-button" onClick={() => onNavigate('scarlet-tanager')}>
              Scarlet Tanagers
            </button>{' '}
            nest in the same 60-year-old oaks and maples where Downy Woodpeckers find their
            standing dead snags. The tanager gleans caterpillars from the live upper canopy;
            the Downy drills into the dead branches below. Both require the same mature forest
            structure — large-diameter trees with dead limbs still attached — that has steadily
            decreased in suburban neighborhoods since the 1960s.
          </p>
        </section>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">A Downy nest is a monarch readiness signal</h2>
          <p>
            A yard where Downy Woodpeckers are nesting has made a particular set of decisions:
            dead wood left standing, systemic pesticide use reduced or stopped, tidiness
            not enforced at the expense of habitat. These are the same decisions that make a
            yard usable for monarchs — milkweed left standing through the season,
            leaf litter intact for chrysalis anchoring, the chemical quiet that allows
            caterpillars to complete development without accumulating insecticide residues.
          </p>
          <p>
            The Downy and the monarch do not interact directly. But their requirements
            overlap so precisely that the presence of one is reasonable evidence of conditions
            that support the other. An over-managed yard is hostile to both. A yard that
            has practiced restraint — left some things alone, kept some disorder — is
            hospitable to both.
          </p>
          <p>
            A yard where Downies are nesting has been left alone in the right places — dead
            branches not cut, stumps not ground out, leaf litter not hauled away. The habitat
            grew back when the removal stopped.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to take the next step?</strong>{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('plant-milkweed')}
            >
              Plant milkweed
            </button>
            {' '}to add monarch breeding habitat alongside your dead-wood features, or{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('choose-a-plant')}
            >
              choose a native plant
            </button>
            {' '}that provides the insect food web Downies depend on.
          </p>
        </div>
      </div>
    </>
  )
}
