import type { Page } from '../App'

interface BlackCappedChickadeeProps {
  onNavigate: (page: Page) => void
}

export default function BlackCappedChickadee({ onNavigate }: BlackCappedChickadeeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Poecile-atricapilla-001.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Black-capped Chickadee with its distinctive black cap and bib, clinging to a branch in a suburban woodland edge"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: No machine-readable author provided. Mdf assumed (based on copyright claims). · <a href="https://commons.wikimedia.org/wiki/File:Poecile-atricapilla-001.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a> via Wikimedia Commons */}
          Photo: No machine-readable author provided. Mdf assumed (based on copyright claims).&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Poecile-atricapilla-001.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Black-capped Chickadee</h1>
        <p className="hero__lead">
          You know the call. <em>Chick-a-dee-dee-dee.</em> It comes from the hedge in February
          when nothing else is moving, and from the feeder post in June when the yard is full
          of sound. The Black-capped Chickadee is one of the most familiar birds in North
          America — and one of the most quietly demanding. To raise a single brood, a breeding
          pair needs between 6,000 and 9,000 caterpillars. That number is either easy to
          provide or nearly impossible, depending entirely on what you have planted.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">The bird that doesn&apos;t leave</h2>
          <p>
            Black-capped Chickadees (<em>Poecile atricapillus</em>) are year-round, non-migratory
            residents across most of the northern United States and Canada. The bird at your
            feeder in January is the same individual that nested in your neighborhood last April.
            It knows your yard. It has mapped every cavity, every food source, every predator
            perch within its territory.
          </p>
          <p>
            They are cavity nesters. They cannot excavate their own holes and require either
            natural cavities in dead wood or nest boxes with a precisely sized 1.125-inch entrance
            hole — large enough for chickadees, small enough to exclude House Sparrows. Each spring,
            a breeding pair raises one brood of six to eight eggs. Incubation takes twelve to thirteen
            days; the young fledge at about sixteen days. Both parents feed the nestlings, and what
            they feed them is almost exclusively caterpillars.
          </p>
          <p>
            Approximately 68 million Black-capped Chickadees occupy North America — a number that
            appears stable and suggests no conservation urgency.{' '}
            <sup>
              <a
                href="https://pif.birdconservancy.org/bird-vulnerability/scorecard/"
                target="_blank"
                rel="noopener noreferrer"
                className="cite"
              >
                [1]
              </a>
            </sup>{' '}
            That appearance is misleading. The chickadee&apos;s abundance as an adult feeder visitor
            is not the same as its health as a breeding species. Adults can subsist on seeds
            through winter. Nestlings cannot. A yard full of feeders can sustain adult chickadees
            indefinitely while failing to produce a single fledgling, because the caterpillars that
            nestlings require are simply not available.
          </p>
          <p>
            They also cache. A Black-capped Chickadee will hide thousands of individual food items
            — seeds, insect larvae, small pieces of frozen fat — in separate locations across its
            territory, and retrieve them months later using spatial memory precise enough to locate
            each cache. When you find a cache, you are looking at a small act of cognition that
            most people never think to attribute to a bird they consider ordinary.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">The caterpillar problem</h2>
          <p>
            To raise one brood, a chickadee pair delivers between 6,000 and 9,000 caterpillars to
            the nest.{' '}
            <sup>
              <a
                href="https://www.pnas.org/doi/10.1073/pnas.1809259115"
                target="_blank"
                rel="noopener noreferrer"
                className="cite"
              >
                [2]
              </a>
            </sup>{' '}
            That is not a rough estimate. It is the measured feeding rate observed across breeding
            pairs, documented in long-term studies of nesting success relative to native tree cover.
            The number is large enough to make feeder supplementation irrelevant to breeding outcomes.
            Seeds do not substitute for caterpillars when nestlings are in the nest.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Black-capped_chickadee_4-13.jpg"
                  alt="Black-capped Chickadee clinging to a branch, hunting insects in the bark crevices"
                  loading="lazy"
                />
                <figcaption>
                  A single chickadee brood requires an estimated 6,000 to 9,000 caterpillars between hatching and fledging. That number is not met by visiting one or two plants — it requires a landscape with enough native tree canopy to sustain a functioning caterpillar population through May and June.
                  <span className="photo-credit"> Photo: Owebb44 · <a href="https://commons.wikimedia.org/wiki/File:Black-capped_chickadee_4-13.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            The source of those caterpillars is native trees. A native oak (<em>Quercus</em> spp.)
            supports 557 species of caterpillars. The most common non-native ornamental trees —
            Norway maple, Bradford pear, Callery pear — support fewer than five.{' '}
            <sup>
              <a
                href="https://www.pnas.org/doi/10.1073/pnas.1809259115"
                target="_blank"
                rel="noopener noreferrer"
                className="cite"
              >
                [2]
              </a>
            </sup>{' '}
            A yard with ornamental trees and active feeders is a yard that attracts adult chickadees
            and fails to produce young. The feeders are not helping breeding birds. They are masking
            the underlying habitat failure.
          </p>
          <p>
            Neonicotinoid insecticides applied to trees for cosmetic pest control — common products
            used for emerald ash borer, aphids, and scale insects — move systemically through plant
            tissue. The caterpillars feeding on treated leaves carry those compounds. A chickadee
            delivering contaminated caterpillars to nestlings across a full breeding season accumulates
            sublethal doses that reduce nesting success. The box is occupied. Young are hatched.
            Fewer fledge. The mechanism is not dramatic. It does not kill adults at feeders. It
            quietly empties nests.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three things that support chickadee breeding</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Nest_box.jpg" alt="Wooden bird nest box mounted on a post" loading="lazy" />
            <figcaption>
              A nest box with a 1⅛-inch entrance hole, placed 5–15 feet up on a tree or post, provides a cavity that chickadees can claim before the season opens. Pair it with a nearby native oak and the breeding territory completes itself.
              <span className="photo-credit"> Photo: Svdmolen&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by/2.5" target="_blank" rel="noopener noreferrer">CC BY 2.5</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant a native tree that hosts caterpillars.</strong>{' '}
              A native oak is the highest-impact choice in most of the eastern and central US —
              it supports more caterpillar species than any other native tree. Native black cherry
              (<em>Prunus serotina</em>), willows (<em>Salix</em> spp.), birch (<em>Betula</em> spp.),
              and serviceberry (<em>Amelanchier</em> spp.) also host hundreds of caterpillar species.
              Replacing one Norway maple or Bradford pear with any of these is not a small decision
              for chickadees. It is a change in whether they can reproduce in your neighborhood.
            </li>
            <li>
              <strong>Install a nest box with a 1.125-inch entrance hole.</strong>{' '}
              That precise diameter matters: it admits chickadees and excludes House Sparrows.
              Mount it 5 to 15 feet high on a tree trunk or wooden post, facing east or northeast,
              away from prevailing weather. Put it up by February — chickadees begin territory
              establishment early. Monitor it weekly once eggs appear: remove House Sparrow
              nests immediately (they are not protected and will displace chickadees). A monitored
              box in a yard with native trees is actual breeding habitat, not decoration.
            </li>
            <li>
              <strong>Stop systemic pesticide treatment of your trees.</strong>{' '}
              Products containing imidacloprid, dinotefuran, or clothianidin — sold under brand
              names for ash borer, aphid, and scale insect control — move into leaf tissue where
              caterpillars feed. Accept cosmetic caterpillar damage on your trees. That damage is
              the food web functioning correctly. A tree with chewed leaves in June is a tree that
              is feeding the neighborhood. If tree health genuinely requires intervention, ask your
              arborist about systemic-free alternatives.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The connection to monarchs</h2>
          <p>
            Monarchs need milkweed and nectar wildflowers. Chickadees need caterpillars from
            native trees. These are different plants and different food chains, but they share
            the same constraint: both collapse in the presence of systemic insecticides, and both
            recover in yards that have committed to pesticide-free native planting.
          </p>
          <p>
            A yard with a native oak canopy, native wildflowers in open beds, and no systemic
            pesticide applications is simultaneously monarch breeding habitat and chickadee
            breeding habitat. The wildflower bed supports monarchs and the caterpillar food web
            that oaks supply supports chickadees. These are not separate investments. They are
            the same investment in a native plant community.
          </p>
          <p>
            Chickadees are also, for many people, the easier entry point. A chickadee landing in
            your open palm to take a seed is a direct tactile wildlife encounter that changes the
            relationship between a person and their yard faster than almost any educational
            program. If someone you know isn&apos;t yet moved by monarch conservation, a chickadee
            nest box with young in it may be the thing that opens the door. The species are not
            separate causes. They share a yard, a food web, and an enemy.
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
            {' '}to add monarch breeding habitat in the open ground around your native trees, or{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('choose-a-plant')}
            >
              choose a native plant
            </button>
            {' '}to find the caterpillar-hosting trees and wildflowers that serve chickadees and monarchs together.
          </p>
        </div>

        <section className="cite-list" aria-label="Sources">
          <p>[1] Partners in Flight. <a href="https://pif.birdconservancy.org/bird-vulnerability/scorecard/" target="_blank" rel="noreferrer">Species Assessment Database 2020.</a> Bird Conservancy of the Rockies. Accessed May 2026.</p>
          <p>[2] Narango, D.L.; Tallamy, D.W.; Marra, P.P. <a href="https://www.pnas.org/doi/10.1073/pnas.1809259115" target="_blank" rel="noreferrer">Nonnative plants reduce population growth of an insectivorous bird.</a> <em>Proceedings of the National Academy of Sciences</em>, 2018.</p>
        </section>
      </div>
    </>
  )
}
