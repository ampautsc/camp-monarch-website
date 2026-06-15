import type { Page } from '../App'

interface MourningCloakProps {
  onNavigate: (page: Page) => void
}

export default function MourningCloak({ onNavigate }: MourningCloakProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Nymphalis_antiopa_%28Suruvaippa%29.jpg/1280px-Nymphalis_antiopa_%28Suruvaippa%29.jpg"
          alt="A Mourning Cloak butterfly with wings open on bark, showing its deep purple-brown wings with a yellow border and a row of iridescent blue spots"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={835}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Kymi&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Nymphalis_antiopa_(Suruvaippa).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Mourning Cloak</h1>
        <p className="hero__lead">
          The Mourning Cloak is one of the longest-lived butterflies in North America —
          adults can survive 10 to 11 months, overwintering tucked under loose bark or
          in a wood pile and emerging on warm days as early as February, sometimes while
          snow is still on the ground. Its wingspan is 2.5 to 4 inches. The deep
          purple-brown wings with a yellow border and iridescent blue spots are
          unmistakable. It is named for the dark hooded mourning garment worn at
          funerals. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Mourning Cloaks are rarely seen nectaring at flowers. Adults feed primarily
            on tree sap — especially from oaks — and fermenting fruit, supplemented by
            dung and decaying organic matter. They locate sap flows from woodpecker
            drillings and damaged bark and return to the same sap sources repeatedly.
            Males establish and defend territories on woodland paths and clearings,
            perching with wings open on the ground or low branches and spiraling up
            to confront intruders. When the wings are closed, the underside is dark
            and streaked — resting adults on bark are nearly invisible. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nymphalis_antiopa_Tovel_03.jpg/1280px-Nymphalis_antiopa_Tovel_03.jpg"
            alt="A Mourning Cloak butterfly nectaring or resting, showing the vivid yellow border, row of blue spots inside the border, and the velvety purple-brown wing surface"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            The yellow wing border fades to cream or white with age — an old, worn
            Mourning Cloak has a pale cream border, while a freshly-emerged adult&apos;s
            border is bright yellow. The row of blue spots inside the border remains
            vivid throughout.
            <span className="photo-credit"> Photo: Syrio&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Nymphalis_antiopa_Tovel_03.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Mourning Cloaks spend the winter as adults, sheltering under loose bark,
            in wood piles, and in hollow trees. On warm winter days they may fly briefly,
            then re-enter dormancy. Spring emergence can happen as early as February,
            making the Mourning Cloak one of the first butterflies of the year — sometimes
            seen nectaring at maple flowers before the leaves are out. Adults breed in
            spring, laying eggs in clusters on willow, elm, hackberry, or cottonwood.
            The caterpillars are gregarious — they feed in groups, stripping branches
            bare before dispersing. The next generation of adults emerges in summer,
            feeds through August, then enters an extended dormancy (estivation) through
            the hottest part of summer before resuming activity in fall and overwintering.
            [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Mourning Cloak is common across its very wide range — one of the most
            broadly distributed butterflies in the Northern Hemisphere, found across
            North America, Europe, and Asia. [1] Its use of willows, elms, and cottonwood
            as host plants — all common and widely distributed trees — and its adult diet
            of tree sap rather than nectar make it broadly resilient to the loss of
            wildflower habitat. Populations are generally stable. Local fluctuations
            reflect natural variation in overwinter survival and spring breeding success.
            [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Keep a wood pile or leave dead wood in the yard. Mourning Cloaks overwinter
              under loose bark and in cavities in standing dead wood or wood piles.
              A wood pile that is not moved through winter can shelter multiple overwintering
              adults. Leave it undisturbed until late April. [2]
            </li>
            <li>
              Plant native willows. Willows (Salix species) are the top host plant for
              Mourning Cloak caterpillars and support hundreds of other moth and butterfly
              species. Native pussy willow or shrub willows are available from native plant
              nurseries; they grow fast and provide exceptional wildlife value in moist
              areas. [2]
            </li>
            <li>
              Leave native elms and hackberry trees where they naturally occur. These are
              key Mourning Cloak host trees; removing them from woodland edges eliminates
              local breeding habitat. [2]
            </li>
            <li>
              Reduce or stop spraying insecticides on trees in spring. Mourning Cloak
              caterpillars feed in large, conspicuous groups on willows and elms and are
              often mistaken for pest outbreaks. The damage they do is temporary — the
              tree regrows — and the caterpillars pupate within weeks. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-comma')}>
            <span className="neighbor-name">Eastern Comma</span>
            <span className="neighbor-note">Another long-lived anglewing butterfly that overwinters as an adult, feeds on tree sap and fermenting fruit, and emerges in early spring the same week as Mourning Cloaks.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('viceroy')}>
            <span className="neighbor-name">Viceroy</span>
            <span className="neighbor-note">Shares willows as a host plant; both lay eggs on willow leaves in spring, though Viceroy caterpillars are solitary while Mourning Cloak caterpillars feed in groups.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-screech-owl')}>
            <span className="neighbor-name">Eastern Screech-Owl</span>
            <span className="neighbor-note">Nests in the same old woodland trees that Mourning Cloaks use for sap feeding and overwintering; both depend on standing dead wood and cavities.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('downy-woodpecker')}>
            <span className="neighbor-name">Downy Woodpecker</span>
            <span className="neighbor-note">Drills the sap wells in trees that Mourning Cloaks exploit for food — Mourning Cloaks have been observed following woodpeckers to freshly-drilled sap sites.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Nymphalis_antiopa/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Mourning Cloak</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Nymphalis-antiopa" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Mourning Cloak</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
