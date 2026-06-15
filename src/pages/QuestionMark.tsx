import type { Page } from '../App'

interface QuestionMarkProps {
  onNavigate: (page: Page) => void
}

export default function QuestionMark({ onNavigate }: QuestionMarkProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Polygonia_interrogationis_bastrop_co_tx.jpg/1280px-Polygonia_interrogationis_bastrop_co_tx.jpg"
          alt="A Question Mark butterfly with wings spread open showing its orange upperwing with black spots and the ragged wing margin that makes it look like a dead leaf"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Larry D. Moore&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Polygonia_interrogationis_bastrop_co_tx.jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Question Mark</h1>
        <p className="hero__lead">
          The Question Mark is an anglewing butterfly — its wings have a ragged, irregular
          margin that makes a resting butterfly look like a torn dead leaf. On the underside
          of the hindwing is a small silver punctuation mark: a curved line with a dot below
          it, forming a question mark. This is what gives the species its name. Wingspan is
          2.25 to 2.75 inches. It is one of the earliest butterflies seen in spring, because
          adults overwinter and emerge on warm days as early as February. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Question Marks are not primarily nectar feeders. Adults feed on tree sap,
            rotting fruit, dung, and carrion — energy sources that are available early
            in spring before most wildflowers bloom, and late in fall when flowers are
            gone. They locate sap from woodpecker drillings and damaged bark, and can
            often be found around compost piles and fermenting fruit. Males are
            territorial, perching on tree trunks and branches with wings partly open,
            watching for females and rivals. The wing undersides are mottled gray-brown,
            making resting individuals nearly impossible to spot on bark or dead leaves.
            [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Question_Mark_-_Polygonia_interrogationis%2C_Natchez_Trace%2C_Natchez%2C_Mississippi_-_17250539661.jpg/1280px-Question_Mark_-_Polygonia_interrogationis%2C_Natchez_Trace%2C_Natchez%2C_Mississippi_-_17250539661.jpg"
            alt="A Question Mark butterfly resting with wings partially open on bark, showing the orange and black upperwing pattern"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            Question Marks have two seasonal forms: the &quot;winter form&quot; (most adults
            seen in spring and fall) has vivid orange hindwings; the &quot;summer form&quot;
            (bred in early summer) has mostly black hindwings. Both forms have the
            silver question mark punctuation on the hindwing underside.
            <span className="photo-credit"> Photo: Judy Gallagher&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Question_Mark_-_Polygonia_interrogationis,_Natchez_Trace,_Natchez,_Mississippi_-_17250539661.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Question Marks overwinter as adults and are among the first butterflies
            of the year. Breeding adults lay eggs on elm, hackberry, nettle, and hops.
            The caterpillar feeds alone (unlike the gregarious Mourning Cloak caterpillar
            from the same host plants), sheltering in a folded leaf. There are two
            generations per year: a summer generation that produces the darker summer-form
            adults, and a late-summer generation that produces the brighter winter-form
            adults that overwinter and are the ones visible in spring. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Question Mark is common across eastern North America and is not of
            conservation concern. [1] It uses a variety of host trees — elms, hackberry,
            and nettles are all widespread and common — and its preference for tree sap
            and fermenting fruit over nectar means it is less dependent on wildflower
            habitat than most butterflies. Its main vulnerability is loss of old woodland
            trees with sap wounds and hollow cavities used for both feeding and
            overwintering. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Leave standing dead wood and old trees with bark wounds. Question Marks
              feed at sap flows from damaged bark and woodpecker holes; they overwinter
              in tree cavities and under loose bark. Removing old trees eliminates both
              food and shelter. [2]
            </li>
            <li>
              Allow hackberry trees to grow naturally. Hackberry (Celtis occidentalis
              and related species) is a native tree that supports Question Marks,
              Eastern Commas, Mourning Cloaks, and several other butterfly and moth
              species as a host plant. It is often treated as a weed tree and removed
              from landscapes, reducing local butterfly diversity. [2]
            </li>
            <li>
              Leave some fallen or overripe fruit on the ground. Question Marks feed
              heavily on fermenting fruit, especially in late summer and fall. Leaving a
              few fallen apples, pears, or plums to ferment provides late-season energy
              for adults preparing to overwinter. [2]
            </li>
            <li>
              Allow native nettles in a back corner. Stinging nettles (Urtica dioica)
              are host plants for Question Mark, Eastern Comma, and Red Admiral caterpillars.
              A contained patch in a moist, partly shaded area supports multiple
              anglewing species. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-comma')}>
            <span className="neighbor-name">Eastern Comma</span>
            <span className="neighbor-note">The close relative with a silver comma (instead of a question mark) on its hindwing underside — both species overwinter as adults, use the same host plants, and feed on sap and fermenting fruit.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('mourning-cloak')}>
            <span className="neighbor-name">Mourning Cloak</span>
            <span className="neighbor-note">Another anglewing butterfly that overwinters as an adult, emerges in early spring, and feeds primarily on tree sap and fermenting fruit rather than nectar.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('downy-woodpecker')}>
            <span className="neighbor-name">Downy Woodpecker</span>
            <span className="neighbor-note">Creates the sap wells in trees that Question Marks exploit for feeding; the relationship between sap-drilling woodpeckers and anglewing butterflies is well documented.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-screech-owl')}>
            <span className="neighbor-name">Eastern Screech-Owl</span>
            <span className="neighbor-note">Nests in the old trees with cavities that Question Marks use for overwintering; both species depend on old-growth trees left standing in the landscape.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Polygonia_interrogationis/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Question Mark</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Polygonia-interrogationis" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Question Mark</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
