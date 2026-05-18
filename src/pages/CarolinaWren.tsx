import type { Page } from '../App'

interface CarolinaWrenProps {
  onNavigate: (page: Page) => void
}

// Image sources — Wikimedia Commons
// Hero: Andy Reago & Chrissy McClarren, CC BY 2.0 via Wikimedia Commons
// Biology: Dick Daniels, CC BY-SA 3.0 via Wikimedia Commons
// Action: public domain via Wikimedia Commons

export default function CarolinaWren({ onNavigate }: CarolinaWrenProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carolina_Wren_%28Thryothorus_ludovicianus%29_-_Flickr_-_Andy_Reago_%26_Chrissy_McClarren.jpg/960px-Carolina_Wren_%28Thryothorus_ludovicianus%29_-_Flickr_-_Andy_Reago_%26_Chrissy_McClarren.jpg"
          alt="Carolina Wren perched on a branch showing rich cinnamon-brown upperparts, warm buff underside, bold white eyebrow stripe, and the characteristically upright cocked tail — a year-round resident whose loud teakettle song fills backyards in every month including January"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Carolina_Wren_RWD.jpg/960px-Carolina_Wren_RWD.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Andy Reago &amp; Chrissy McClarren&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Carolina_Wren_(Thryothorus_ludovicianus)_-_Flickr_-_Andy_Reago_%26_Chrissy_McClarren.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Carolina Wren</h1>
        <p className="hero__lead">
          The song you hear from the dense shrubs at the edge of your yard in January —
          loud, clear, running through a dozen variations before repeating — belongs to
          a bird that weighs about 20 grams and never leaves. Carolina Wrens are
          non-migratory residents throughout the eastern half of North America. They
          are in your yard right now, foraging in the leaf litter beneath the shrubs,
          defending a year-round territory alongside a mate they likely held this same
          ground with last winter. When ice seals the leaf litter for two weeks, local
          Carolina Wren populations can drop by more than half in a single winter.
          The birds that make it through are the ones in yards where brush piles and
          dense shrub cover hold the ground above freezing and keep the insect food
          layer accessible.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">Two voices, one territory, every month of the year</h2>
          <p>
            <em>Thryothorus ludovicianus</em> — the genus means &ldquo;rush-thrush,&rdquo;
            describing the dense vegetation the bird prefers; the species name means
            &ldquo;of Louisiana,&rdquo; from the original specimen. The bird is more vivid
            than either name: rich cinnamon-brown on the back and tail, warm buff below,
            a bold white supercilium stripe from bill to nape, and a short tail held nearly
            vertical when the bird is foraging. At about 5 inches — roughly the size of a
            ping-pong ball plus a tail — it is small, loud enough to hear clearly across an
            open yard, and in no hurry to go anywhere. It holds the same one-to-two-acre
            territory year-round and defends it through every month.
          </p>
          <p>
            Most North American songbirds keep the song to the male. Carolina Wrens are
            different: both the male and the female sing, and the pair coordinates in a
            year-round vocal duet. The male produces the loud, ringing phrases — often
            rendered as &ldquo;teakettle-teakettle-teakettle&rdquo; or
            &ldquo;cheery-cheery-cheery,&rdquo; with individual males carrying a repertoire
            of several dozen distinct song types. When the male sings, the female typically
            answers within a second with a rapid, buzzy chatter. From inside a house through
            a window, this sounds like one very loud bird. Standing at the yard edge, you can
            hear the two-voice structure: two birds in the same shrub, staying in contact,
            telling neighboring wrens this territory is taken. They do this in January. They
            do this during snowfall. The pair you hear in August singing through your open
            windows is the same pair singing in February through the closed ones.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Carolina_Wren_RWD.jpg/960px-Carolina_Wren_RWD.jpg"
              alt="Carolina Wren perched on a branch in dense vegetation, showing the characteristic upright tail posture — a non-migratory resident that spends every month foraging through leaf litter for insect larvae, beetles, and spider egg cases, including in winter"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carolina_Wren_%28Thryothorus_ludovicianus%29_-_Flickr_-_Andy_Reago_%26_Chrissy_McClarren.jpg/960px-Carolina_Wren_%28Thryothorus_ludovicianus%29_-_Flickr_-_Andy_Reago_%26_Chrissy_McClarren.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              Carolina Wrens forage close to the ground, flipping leaf litter and probing
              bark crevices for beetles, spiders, moth pupae, and insect egg cases. Unlike
              migratory birds that leave when surface insects disappear, the Carolina Wren
              must find food in its territory through every month of the year. In winter,
              that food is almost entirely dormant invertebrates just beneath the leaf litter
              surface — accessible in undisturbed leaf cover, sealed off when ice freezes
              the litter layer solid.
              <span className="photo-credit"> Photo: Dick Daniels / CC BY-SA 3.0 via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Foraging happens primarily in the shrub layer and in the leaf litter beneath it.
            The wren works close to the ground, flipping leaves, probing bark crevices, and
            examining the undersides of logs for beetles, spiders, caterpillars, moth pupae,
            and insect eggs. It moves in quick bursts — a few seconds in one spot, then on to
            the next, covering a small area thoroughly before circling back. In winter, when
            surface insects are absent, the diet shifts almost entirely to dormant insect eggs
            and pupae in the litter layer. This food source is abundant in undisturbed leaf
            cover, but disappears when the litter is removed or when the ground freezes solid
            beneath a sheet of ice.
          </p>
          <p>
            Pairs form in late winter or early spring and, once bonded, often return to the
            same territory in subsequent years. The male selects several potential nest sites —
            dense shrubs, crevices in dead trees, gaps in structures — and the female chooses.
            Carolina Wrens are well-known for nesting in unlikely locations: hanging flower
            pots, old boots left on a porch, open garages, gaps in woodpiles. These are not
            random choices. The bird is looking for a cavity or a dense, enclosed structure
            that approximates a natural brush pile or shrub tangle. Where those natural
            structures are absent, it uses whatever is available. Three to six eggs per clutch;
            two or three broods per season. Chicks leave the nest at 12 to 14 days.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">Ice, leaf litter, and a population that can reset in a hard winter</h2>
          <p>
            Carolina Wren populations tracked by the USGS Breeding Bird Survey since 1966
            show a pattern unlike most songbirds: populations grow steadily through years of
            mild winters, then fall sharply after a single severe cold event. The winters of
            1976&ndash;77 and 1995&ndash;96 each produced measurable declines in BBS counts
            the following spring across the mid-Atlantic and New England regions. The 2021 ice
            storms that struck the southern United States — including states as far south as
            Texas and Louisiana where the species had been expanding — caused another
            documented population drop. Local populations in affected areas have taken five
            to seven breeding seasons to recover to pre-event numbers.
          </p>
          <p>
            The mechanism is specific. A non-migratory bird that must feed through winter
            depends entirely on its local food supply remaining reachable. Carolina Wrens eat
            primarily dormant insect eggs and pupae in the leaf litter during cold months. When
            ice seals that layer for more than a week or two, the food is there but the wrens
            cannot reach it. Birds that cannot find shelter where the leaf litter stays
            accessible — brush piles, dense evergreen shrubs, south-facing slopes with
            undisturbed leaf cover — begin to use up fat reserves without replenishing them.
            After two weeks, the birds with adequate shelter are still foraging. The ones without
            it are not.
          </p>
          <p>
            The longer-term trend shows a northward range expansion as average winter temperatures
            have risen — Carolina Wrens have established breeding populations in New England and
            southern Canada where they were rare or absent 50 years ago — but population density
            in the core of the range is lower than historical levels in many areas. The loss of
            shrubby edge habitat drives this. Agricultural consolidation removed the hedgerows and
            field margins where wrens nested and foraged across the Midwest and Mid-Atlantic.
            Suburban development replaced briar tangles and naturalized shrub edges with maintained
            turf, foundation plantings pruned for visual form, and raked, mulched beds that
            eliminate the leaf-litter invertebrate layer. A yard landscaped to look tidy has
            usually been landscaped to remove two of the three things a Carolina Wren pair needs
            to survive winter.
          </p>
          <p>
            Outdoor cats kill Carolina Wrens at higher rates than many songbirds because wrens
            forage on or close to the ground, at exactly the height where cats hunt. An estimated
            1.3 to 4 billion birds die from cat predation annually in North America (Loss et al.,
            2013, <em>Nature Communications</em>). For a non-migratory species that holds the
            same territory year-round, the pair lost to a cat in March is the pair that would
            have raised two or three broods in that territory through August.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that help Carolina Wrens</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Spicebush_%28Lindera_benzoin%29_-_Flickr_-_NethertonPhotos.jpg/960px-Spicebush_%28Lindera_benzoin%29_-_Flickr_-_NethertonPhotos.jpg"
              alt="Spicebush (Lindera benzoin) with dense branching structure and clusters of bright red berries in fall — a native shrub that provides the dense low cover at 3-8 feet that Carolina Wrens use for nesting, foraging routes, and winter shelter"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Viburnum_prunifolium_blackhaw_berries.jpg/960px-Viburnum_prunifolium_blackhaw_berries.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              Spicebush (<em>Lindera benzoin</em>) provides dense, twiggy cover at 3 to 8 feet —
              the structural zone Carolina Wrens use for nesting, foraging routes, and winter
              shelter. Native viburnums, elderberry, native hawthorn, and buttonbush serve the
              same function. A clump of three or four native shrubs planted close together, allowed
              to fill in without being pruned for visual form, creates usable wren habitat within
              two growing seasons. Single ornamental shrubs with open branching do not.
              <span className="photo-credit"> Photo: NethertonPhotos / CC BY 2.0 via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Build or leave a brush pile.</strong>{' '}
              A brush pile — branches, logs, and sticks piled loosely to 3 to 5 feet — provides
              both shelter and access to unfrozen ground beneath when ice covers the rest of the
              yard. In a hard winter, this is the difference between accessible food and sealed
              ground for the wrens in your immediate territory. The pile does not need to be large:
              4 feet across in a back corner, built from pruning brush and fallen branches, is
              enough. Dead logs laid on top of each other with small gaps create cavities Carolina
              Wrens roost in overnight during cold weather. If you have been meaning to haul a
              brush pile away, the wrens in your yard are making a specific case for leaving it
              where it is.
            </li>
            <li>
              <strong>Leave the leaves under and around shrubs.</strong>{' '}
              The insect eggs, pupae, and larvae in undisturbed leaf litter are the Carolina Wren&apos;s
              winter food supply. Raked, blown, or bagged leaves eliminate this food source and
              expose bare soil that freezes faster than soil protected by a leaf layer. Leaves
              left under shrubs decompose slowly, feeding the beetle larvae and earthworms the
              wren harvests year-round. The full case for this — and the other species that benefit
              from it — is at the{' '}
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>{' '}
              page.
            </li>
            <li>
              <strong>Plant dense native shrubs at yard edges.</strong>{' '}
              Carolina Wrens nest in shrubs at 2 to 7 feet with dense, twiggy branching — the
              kind provided by native viburnums, spicebush, elderberry, native hawthorn, native
              roses, and buttonbush. Single ornamental shrubs pruned for visual form do not provide
              this structural density. A clump of three or four native shrubs planted close together
              fills in quickly and creates a continuous shrub layer the wren uses for foraging
              routes, nesting, and escape cover. Find what grows in your region at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Put up a wren nest box and keep cats indoors.</strong>{' '}
              Carolina Wrens use nest boxes with a 1.5-inch entry hole, mounted 5 to 10 feet
              high on a post or tree at the shrubby part of the yard, with the hole facing away
              from prevailing winds. They use these readily in yards where natural cavities and
              brush piles are limited. Keeping cats indoors eliminates the leading cause of
              ground-forager mortality in suburban yards. A wren pair that loses a member in
              early spring to a cat does not replace it — the survivor holds the territory alone
              until the following breeding season or abandons it.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The shrub-edge community</h2>
          <p>
            The Carolina Wren shares the dense shrub layer and the leaf litter beneath it
            with the{' '}
            <button className="link-button" onClick={() => onNavigate('brown-thrasher')}>
              Brown Thrasher
            </button>
            , another year-round ground forager that depends on intact leaf litter and
            structural dense shrubs for nesting. The thrasher works the same litter layer
            but is larger and more audible — its bill sweeps through leaves in wide arcs
            where the wren probes crevices and gaps. Both depend on the same invertebrate
            community and both disappear from yards where the shrub layer is removed and the
            leaf litter is raked clean.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-towhee')}>
              Eastern Towhee
            </button>{' '}
            occupies the same shrubby edge habitat and is often found foraging in the same
            leaf litter in the same season. The towhee uses a double-scratch — both feet
            simultaneously throwing leaves in opposite directions — where the wren probes
            with its bill. Where one is found, the other is often present. Both species
            tell you the same thing about your yard: the dense, brushy, leaf-littered edge
            is working.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('fireflies')}>
              firefly
            </button>{' '}
            larvae overwintering in the leaf litter are part of the same invertebrate community
            the wren harvests through winter. The{' '}
            <button className="link-button" onClick={() => onNavigate('gray-tree-frogs')}>
              Gray Tree Frog
            </button>{' '}
            shelters in the same dense shrub layer through cold nights. The{' '}
            <button className="link-button" onClick={() => onNavigate('garter-snake')}>
              Eastern Garter Snake
            </button>{' '}
            moves through the same brush piles hunting amphibians and invertebrates. Leaving
            one corner of the yard structurally dense, shrubby, and leaf-covered is not a
            single-species decision — it runs the whole shrub-edge community.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Leave the brush pile, leave the leaves, plant the dense native shrubs —
            the wren pair in your yard is already making a case for all three.</strong>{' '}
            Start with plants at{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , read the full leaf-litter community case at{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>
            , and meet every species sharing your shrub edges in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
