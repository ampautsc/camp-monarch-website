import type { Page } from '../App'

interface NorthernCardinalProps {
  onNavigate: (page: Page) => void
}

export default function NorthernCardinal({ onNavigate }: NorthernCardinalProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Northern Cardinal</h1>
        <p className="hero__lead">
          The male Northern Cardinal at your feeder is one of the most recognizable birds
          in North America — scarlet against winter snow, unmistakable in any season.
          He is the state bird of seven states, more than any other species. He has been
          at that feeder because you put seeds out. But what keeps him here through summer,
          what lets him breed and raise young in your yard, is not the feeder. It is whether
          your landscape has what his family actually needs.
        </p>
      </section>

      <figure className="species-hero-photo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Male_northern_cardinal_in_Central_Park_%2852612%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Male Northern Cardinal in brilliant red plumage at a snow-dusted native shrub, crested head turned to look directly at viewer"
          loading="lazy"
        />
        <figcaption>
          Photo: Rhododendrites ·{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Male_northern_cardinal_in_Central_Park_(52612).jpg" target="_blank" rel="noopener noreferrer">
            CC BY-SA 4.0
          </a>{' '}
          via Wikimedia Commons
        </figcaption>
      </figure>

      <div className="page">
        <section aria-labelledby="familiar-heading">
          <h2 id="familiar-heading">The most familiar bird — and what it asks of you</h2>
          <p>
            The Northern Cardinal (<em>Cardinalis cardinalis</em>) is one of North
            America&apos;s most abundant songbirds, with a global population estimated near
            100 million. Unlike most songbirds, it is a year-round, non-migratory resident
            — the same pair at your feeder in February is likely the same pair that nested
            in your shrubs in June. Cardinals expanded their range northward significantly
            over the twentieth century, in part because suburban bird feeders extended the
            reliable winter food source that allowed populations to persist through northern
            winters.
          </p>
          <p>
            That success can obscure a subtler reality. The cardinal&apos;s presence is
            not in question. But its ability to breed, to raise multiple broods, to sustain
            a family through the summer — that depends on conditions a feeder alone cannot
            provide. Protected since 1918 under the Migratory Bird Treaty Act (a protection
            that applies to year-round resident species as well as migrants), the Northern
            Cardinal is legally recognized as part of the ecological fabric of North America.
            What that recognition requires in practice is more than a seed feeder.
          </p>
        </section>

        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">What a cardinal family actually needs</h2>
          <p>
            The Northern Cardinal is primarily a seed eater — sunflower seeds, safflower,
            cracked corn, wild berries. But nestlings are fed almost entirely on insects.
            The protein insects provide during the first two weeks of life is not
            replaceable by seeds; it is what drives the development of muscle, bone, and
            feather. A pair breeding in a yard where all vegetation has been treated with
            systemic insecticides may attempt to nest repeatedly and raise few young, because
            the insects that nestlings require are gone.
          </p>
          <p>
            Neonicotinoid pesticides — the most widely used insecticides in North America —
            are taken up systemically by plants and persist in plant tissue, pollen, and
            nectar. Birds feeding in treated landscapes accumulate sublethal doses, and the
            disruption to breeding behavior documented in cardinals and other songbirds is
            measurable even at doses too low to cause acute toxicity.{' '}
            <a
              href="https://wildlife.org/new-research-shows-neonicotinoids-hurt-songbird-migration-and-weight/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Wildlife Society
            </a>{' '}
            has documented the effect on songbird breeding and migration.
          </p>
          <p>
            Nesting requires dense, tangled shrubs — not neat geometric hedges. Cardinals
            build cup nests hidden in dense cover, typically two to fifteen feet above ground.
            The female builds the nest over several days; the male defends the territory while
            she incubates. Cardinals raise two to four broods per year, from April through
            August. One of the pair&apos;s most distinctive behaviors is allofeeding: the
            male carries seeds to the female and delivers them beak-to-beak during courtship
            — a behavior that persists during incubation as part of the pair bond. A yard
            managed for tidiness — hedges cut to shape, understory removed, shrubs pruned
            back in spring — reduces the nesting sites available and disrupts the season at
            exactly the wrong time.
          </p>
        </section>

        <section aria-labelledby="threats-heading">
          <h2 id="threats-heading">The threats most people don&apos;t see</h2>
          <p>
            Window collisions are the second-leading human cause of bird death in North
            America after outdoor cats, killing an estimated 600 million birds annually in
            the United States.{' '}
            <a
              href="https://www.fws.gov/story/2021-11/migratory-birds-and-window-collisions"
              target="_blank"
              rel="noopener noreferrer"
            >
              U.S. Fish and Wildlife Service
            </a>{' '}
            attributes the scale of the problem largely to residential windows — not
            commercial towers. Cardinals are among the birds most frequently killed by window
            strikes because they are territorial and respond aggressively to their own
            reflection, flying repeatedly at glass during breeding season. A single
            unaddressed window may cost the same bird its life before the summer ends.
          </p>
          <p>
            The ecological loss is not only the individual bird. The Northern Cardinal plays
            a measurable role in disease ecology: unlike American Robins, which amplify the
            West Nile virus cycle by serving as reservoir hosts that infect mosquitoes,
            cardinals are poor amplifiers. When cardinals are common in a neighborhood and
            bird diversity is high, the proportion of mosquito bites involving amplifying
            hosts is diluted. This dilution effect — a function of bird diversity — has been
            documented in{' '}
            <a
              href="https://www.pnas.org/doi/10.1073/pnas.0606515104"
              target="_blank"
              rel="noopener noreferrer"
            >
              peer-reviewed research
            </a>{' '}
            on West Nile transmission in North American bird communities. A healthy,
            diverse backyard bird community is a public health asset.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that help cardinals breed, not just visit</h2>
          <ol className="step-list">
            <li>
              <strong>Add a sunflower or safflower feeder and keep it full through winter.</strong>{' '}
              Black-oil sunflower seeds and safflower seeds are the most effective cardinal
              attractants. Feeders placed near dense shrubs — rather than in open lawns — let
              cardinals feed and return to cover quickly, reducing predation risk. Cardinals
              are ground-feeders by instinct; a low platform feeder works as well as any
              hanging tube.
            </li>
            <li>
              <strong>Plant native fruiting shrubs for summer food and nesting cover.</strong>{' '}
              Native viburnums (<em>Viburnum</em> spp.), native dogwoods (<em>Cornus</em>{' '}
              spp.), and native serviceberries (<em>Amelanchier</em> spp.) produce fruit
              cardinals eat across the season and support the insect populations that
              nestlings require. Native shrubs attract and sustain the caterpillars, beetles,
              and other invertebrates that a breeding pair needs to feed two to four broods
              of young through a long summer.
            </li>
            <li>
              <strong>Stop cutting shrubs and hedges back in April and May.</strong>{' '}
              Cardinals nest from April through August. Pruning dense shrubs to neat
              geometric shapes during this window eliminates nesting cover at the moment it
              is most critical. Leave hedges uncut until late August at minimum. Tangled,
              layered shrub cover — not manicured edges — is what a nesting pair needs.
            </li>
            <li>
              <strong>Apply window markers or external screens on the panes cardinals hit.</strong>{' '}
              During breeding season, male cardinals fly at reflective windows while
              defending territory from their own reflection. External screens, window tape
              in a grid pattern spaced two inches apart, or static-cling window film breaks
              up the reflection. Feeders placed within three feet of a window reduce
              collision force; those placed more than thirty feet away reduce approach speed
              — both are safer than the middle zone.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The connection to monarchs</h2>
          <p>
            Northern Cardinals and Monarch Butterflies share habitat that is converging
            on a single answer: native shrubs, native wildflowers, and a landscape managed
            without systemic pesticides. The dense thicket where a cardinal pair nests in
            June is the same native shrub border where milkweed establishes beneath the
            canopy. The native flowering understory that cardinals use for fruit and insect
            foraging is the same understory that monarchs nectar through on their way north.
          </p>
          <p>
            This is not coincidence. Both species evolved in native plant communities; both
            require the insects that native plants uniquely support; both are harmed by the
            insecticide regimens common in managed suburban landscapes. A yard managed for
            monarchs — native plants present, pesticide use minimal, dense vegetation in the
            shrub layer — is a yard that supports cardinal breeding. What you grow for one,
            you grow for both.
          </p>
          <p>
            The cardinal is not an endangered indicator. It does not require heroic
            intervention. But its ability to breed, rather than simply visit, is the measure.
            A pair that successfully raises young in your yard in August is evidence that the
            yard has crossed the ecological threshold — enough insects, enough cover, enough
            freedom from chemical disruption — to function as genuine habitat and not just a
            feeding station.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to take the next step?</strong>{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('choose-a-plant')}
            >
              Choose a native plant
            </button>
            {' '}— native viburnums and serviceberries support cardinals, monarchs, and
            dozens of other species simultaneously. Or{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('plant-milkweed')}
            >
              plant milkweed
            </button>
            {' '}to add monarch habitat alongside the native shrub layer cardinals need.
          </p>
        </div>
      </div>
    </>
  )
}
