import type { Page } from '../App'

interface BlackSwallowtailProps {
  onNavigate: (page: Page) => void
}

export default function BlackSwallowtail({ onNavigate }: BlackSwallowtailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/227455959/large.jpeg"
          alt="Black Swallowtail butterfly on a stem, black wings with two rows of yellow spots along edges and blue iridescence on hindwings, Jericho Vermont September 2022"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: audrey612&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/133528675" target="_blank" rel="noopener noreferrer">iNaturalist obs. 133528675</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>The caterpillar on your parsley carries a hidden Y-shaped orange organ behind its head that deploys in under a second when touched — the adult that emerges from it is the Black Swallowtail.</h1>
        <p className="hero__lead">
          Black Swallowtail (<em>Papilio polyxenes</em>) is a native butterfly found throughout
          the eastern United States and into Canada. Its caterpillars — called parsley worms —
          feed on plants in the carrot family (Apiaceae). In gardens, they appear on parsley,
          fennel, and dill, all introduced European plants. In native habitat, they feed on
          Golden Alexanders, Wild Angelica, and other native Apiaceae that have grown in this
          region for thousands of years.
        </p>
        <p className="hero__lead">
          The caterpillar is not a pest. It will eat no more leaf material than one week of
          kitchen harvesting from a single parsley plant before it pupates. In the wild, it
          completes its whole life on perennial native plants that need no human cultivation
          and grow back from the root each spring.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="osmeterium-heading">
          <h2 id="osmeterium-heading">First three instars: bird dropping. Then: banded warning colors and a chemical alarm organ that deploys in under a second</h2>
          <p>
            A freshly hatched Black Swallowtail caterpillar is dark with a white saddle patch
            across its mid-section. It looks, from above, like a small bird dropping on a leaf
            stem. Birds bypass it. Predatory insects bypass it. It feeds in plain view.
          </p>
          <p>
            By the fourth instar — roughly two to three weeks in — the caterpillar has grown
            large enough that the bird-dropping pattern no longer holds at its new size. The
            body turns bright green with black bands, each band bearing a row of small yellow
            or orange spots. This pattern is conspicuous, not hidden. It functions as a signal
            to predators that have learned to associate banded caterpillars with an unpleasant
            experience.
          </p>
          <p>
            Tucked in a groove behind the head is the osmeterium. When the caterpillar is
            picked up, squeezed, or alarmed, it everts this organ in under a second: a
            Y-shaped fork of orange or red tissue protrudes from the groove and releases
            volatile terpenes and fatty acids. The scent resembles rotting vegetation or fox
            musk, depending on the individual and the age of the larva. The caterpillar
            simultaneously extends its body and angles the osmeterium toward the threat.
            Most predators release it. The organ retracts within a few seconds.
          </p>
          <p>
            The osmeterium causes no harm to human skin. A homeowner who picks a parsley worm
            off their fennel and sees the orange fork extend is seeing one of the more
            elaborate invertebrate defenses visible in a backyard garden.
          </p>
        </section>

        <figure className="species-content-photo">
          <img
            src="https://inaturalist-open-data.s3.amazonaws.com/photos/661000555/large.jpeg"
            alt="Black Swallowtail caterpillar in final instar — green body with black bands and yellow spots on a green plant stem, Niantic Connecticut May 2026"
            loading="lazy"
          />
          <figcaption>
            The final-instar Black Swallowtail caterpillar: green with black bands and yellow spots.
            First instars look like bird droppings. The osmeterium — a Y-shaped orange chemical
            alarm organ — sits in a hidden groove behind the head.
            <span className="photo-credit"> Photo: swpollinators&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/362169311" target="_blank" rel="noopener noreferrer">iNaturalist obs. 362169311</a>&nbsp;· CC0 / No Rights Reserved</span>
          </figcaption>
        </figure>

        <section aria-labelledby="host-plants-heading">
          <h2 id="host-plants-heading">Parsley and fennel feed the caterpillar but cannot carry the population through a full year without native Apiaceae nearby</h2>
          <p>
            Parsley and fennel are annuals in most northern gardens — they die at frost and are
            not in the ground in April and May, when the first brood of Black Swallowtail
            females is looking for a place to lay eggs. A garden with only introduced Apiaceae
            can host caterpillars in mid-summer but offers nothing in spring before the planting
            season begins.
          </p>
          <p>
            Golden Alexanders (<em>Zizia aurea</em>) blooms April through May — before parsley
            is planted out — and produces leaves through June, covering the larval window of
            the first brood. It is a perennial: it dies back to the root each winter and returns
            the following April without replanting. A single established plant in a yard provides
            a native Apiaceae larval host in the exact weeks that first-brood females are searching
            for one.
          </p>
          <p>
            Other native eastern Apiaceae the caterpillar uses include Heart-leaved Golden
            Alexanders (<em>Zizia aptera</em>), Meadow Parsnip (<em>Thaspium trifoliatum</em>),
            Wild Angelica (<em>Angelica atropurpurea</em>), and Cow Parsnip
            (<em>Heracleum maximum</em>). Each of these plants evolved in the eastern United
            States. The caterpillar's olfactory receptors, the timing of its broods, and the
            shape of its host-plant search behavior developed around them — not around parsley.
          </p>
        </section>

        <section aria-labelledby="chrysalis-heading">
          <h2 id="chrysalis-heading">The chrysalis color — brown or green — is determined by the surface the caterpillar touches when it spins its silk girdle</h2>
          <p>
            When a mature caterpillar finds a pupation site, it attaches a silk pad to the
            surface, spins a silk girdle around its midsection, and anchors its rear end. The
            chrysalis that forms over the following day is either brown or green, controlled
            by a response to the surface texture and ambient light level during the spinning
            process: woody, rough surfaces tend to trigger the brown form; smooth green stems
            tend to trigger the green. The caterpillar is not making a visual choice — its
            cuticle responds to tactile and light cues during a brief sensitive period.
          </p>
          <p>
            In a yard, pupation sites include fence posts, dried plant stems, the base of
            buildings, and rough bark. The chrysalis from the last summer brood overwinters
            in place — attached to its surface through frost, through snow, and through the
            months of freezing. The adult emerges in April or May of the following year as
            temperatures accumulate past a degree-day threshold. That threshold is timed to
            the same season that native Apiaceae begin putting out fresh leaves.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Golden Alexanders, leave parsley worms, leave stems standing, and let native Apiaceae self-seed</h2>
          <ol className="step-list">
            <li>
              <strong>Plant Golden Alexanders in a sunny to partly shady spot.</strong>{' '}
              A single <em>Zizia aurea</em> plant in moist to average soil provides a native
              Apiaceae larval host in April and May — the window before parsley or fennel is
              in the ground.
            </li>
            <li>
              <strong>Leave parsley worms on their plant.</strong>{' '}
              Each caterpillar consumes roughly the same leaf mass as one week of kitchen
              harvesting before it pupates. If it is on a plant you need, move it to a Golden
              Alexanders or Wild Parsnip stem rather than removing it.
            </li>
            <li>
              <strong>Leave fence posts and dried stems standing through winter.</strong>{' '}
              Overwintering Black Swallowtail chrysalides attach to vertical hard surfaces —
              fence posts, dried plant stems, building foundations. Autumn clearing removes
              them before adults can emerge the following May.
            </li>
            <li>
              <strong>Allow Golden Alexanders to self-seed at a sunny edge.</strong>{' '}
              <em>Zizia aurea</em> spreads slowly from seed dropped near the parent plant and
              from root division after several years. A single plant in the right spot can
              naturalize a small colony along a fence line or at the base of a native shrub
              without any management. That expanding colony feeds multiple consecutive broods
              across multiple seasons — unlike parsley in a raised bed, which must be replanted
              annually and is not in the ground during the first-brood laying window in late April.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('golden-alexanders')}>
              <span className="neighbor-name">Golden Alexanders</span>
              <span className="neighbor-note">Native Apiaceae larval host; blooms April–May before parsley is planted</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
              <span className="neighbor-name">Eastern Tiger Swallowtail</span>
              <span className="neighbor-note">Native tree-dependent swallowtail; shares nectar plants and leaf litter with Black Swallowtail</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
              <span className="neighbor-name">Native Bees</span>
              <span className="neighbor-note">Andrena ziziae also depends on Golden Alexanders flowers in April</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('leonards-skipper')}>
              <span className="neighbor-name">Leonard's Skipper</span>
              <span className="neighbor-note">Another August–September butterfly with one flight window per year; Leonard's Skipper lays eggs on native bunchgrasses, Black Swallowtail lays on Apiaceae — both caterpillars overwinter at the base of their host plant and both adults fly for less than two weeks each fall</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('pipevine-swallowtail')}>
              <span className="neighbor-name">Pipevine Swallowtail</span>
              <span className="neighbor-note">The model whose iridescent blue-black wing pattern the female Black Swallowtail mimics — the Pipevine carries aristolochic acids in its wing scales from caterpillar feeding; the female Black Swallowtail carries the pattern without the toxins</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
