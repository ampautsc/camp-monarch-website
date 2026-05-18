import type { Page } from '../App'

interface BrownTrasherProps {
  onNavigate: (page: Page) => void
}

export default function BrownThrasher({ onNavigate }: BrownTrasherProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Toxostoma_rufum_CT2.jpg/960px-Toxostoma_rufum_CT2.jpg"
          alt="Brown Thrasher perched in shrub showing rusty red-brown upperparts, heavily streaked white breast, long tail, and distinctive bright yellow eye — Georgia's state bird and the North American songbird with the largest confirmed song repertoire"
          className="species-hero-image"
          style={{ objectPosition: 'center 30%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Brown_Thrasher.jpg/960px-Brown_Thrasher.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: DickDaniels&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Toxostoma_rufum_CT2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Brown Thrasher</h1>
        <p className="hero__lead">
          A streak of rusty brown erupts from the leaf litter at the edge of the garden, long tail
          pumping as it lands in the hawthorn and immediately begins to sing. The Brown Thrasher
          has the largest confirmed song repertoire of any North American bird — more than 2,000
          distinct phrase types, each sung exactly twice before moving to the next. It is
          Georgia&apos;s state bird, a familiar sight at yard edges across the eastern half of the
          continent, and a species that Partners in Flight now lists as a Common Bird in Steep
          Decline. Many people have heard it without knowing its name. That relationship is worth
          repairing before the bird disappears from the shrub line.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">A singer with 2,000 songs — and a technique all its own</h2>
          <p>
            <em>Toxostoma rufum</em> — the genus name means &ldquo;arched mouth,&rdquo; describing
            the long, slightly curved bill; <em>rufum</em> means &ldquo;rusty red.&rdquo; The
            plumage matches: rich reddish-brown on the back, wings, and long graduated tail; white
            below with bold brown streaking from throat to belly; and two white wing bars. The
            face is plain except for the most striking field mark — eyes of vivid lemon yellow that
            glow against the rust-and-white body and make the bird look alert and intense at any
            distance. At 9 to 12 inches with a tail that accounts for nearly half that length, the
            thrasher is larger than a robin and moves with the deliberate confidence of a bird that
            knows the undergrowth better than you do.
          </p>
          <p>
            A singing male produces phrases in couplets — each distinct phrase sung twice before
            moving to the next — in an unbroken stream that can last 20 minutes without repetition.
            Researchers who have catalogued the repertoires of individual birds have counted more
            than 2,000 distinct phrase types per individual; some studies have recorded repertoires
            exceeding 3,000. This is the largest documented song vocabulary of any North American
            songbird, surpassing the Northern Mockingbird by a wide margin. The mockingbird&apos;s
            strategy is mimicry and endless repetition; the thrasher&apos;s is original composition
            at enormous scale. A male singing from a shrub in late April is running through a
            library built over years of listening and learning, adding phrases heard from other
            thrashers, other species, and sounds from the surrounding soundscape.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Brown_Thrasher_%28Toxostoma_rufum%29_foraging.jpg/960px-Brown_Thrasher_%28Toxostoma_rufum%29_foraging.jpg"
              alt="Brown Thrasher foraging in leaf litter on the ground, using its long curved bill to sweep leaves aside — the thrashing behavior that gives the species its name and that requires intact leaf cover to be effective"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Toxostoma_rufum_CT2.jpg/960px-Toxostoma_rufum_CT2.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              A Brown Thrasher working through leaf litter in search of beetles, earthworms, and
              other invertebrates. The foraging technique that gives the species its name — sweeping
              the bill in wide arcs through leaves and loose soil — requires a layer of undisturbed
              leaf litter as substrate. Bare ground, raked beds, and mulched borders eliminate the
              invertebrate populations the thrasher depends on and remove the structural cover the
              foraging behavior requires. Leaving leaves where they fall in autumn directly extends
              the thrasher&apos;s foraging range.
              <span className="photo-credit"> Photo: Wikimedia Commons / Public Domain</span>
            </figcaption>
          </figure>

          <p>
            Foraging happens primarily on the ground and in the leaf litter beneath shrubs.
            The thrasher sweeps its bill in wide arcs — the &ldquo;thrashing&rdquo; motion —
            flipping leaves and debris aside to expose the beetles, earthworms, crickets, and
            centipedes underneath. It also takes wild fruits and berries (serviceberries,
            elderberries, wild cherries, dogwood drupes) in season, and will cache acorns and
            seeds in loose soil for later retrieval. During breeding season, caterpillars and
            soft-bodied insects make up the bulk of the diet, particularly for feeding nestlings.
            The diet&apos;s breadth — insects, fruit, seeds, even small frogs and lizards taken
            opportunistically — means a healthy yard with intact leaf litter and native shrubs
            can supply most of what a pair needs through the breeding season.
          </p>
          <p>
            Nesting begins in late April or early May. The pair selects a dense shrub or small
            tree — hawthorns, native roses, viburnum, briars — and builds a bulky cup nest of
            twigs, leaves, and dry grass lined with rootlets and fine plant material, typically
            2 to 7 feet off the ground. Three to five eggs are laid per clutch, incubated by
            both parents for about two weeks. Chicks leave the nest at 9 to 13 days and remain
            hidden in nearby vegetation while the parents continue feeding them. Two broods
            per season are common. The Brown Thrasher is largely a year-round resident across
            the southern and central portions of its range, though northern populations migrate
            short distances south in October and return in April.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">A bird of brushy edges — and the edges are disappearing</h2>
          <p>
            The USGS Breeding Bird Survey, conducted continuously since 1966, records steady
            Brown Thrasher losses across the species&apos; range. Partners in Flight includes
            the Brown Thrasher on its Watch List as a Common Bird in Steep Decline — a category
            reserved for species whose population losses are large enough to become severe within
            decades if the drivers are not addressed. The estimated total population has fallen
            substantially from historical levels, with losses steepest in the northern and
            midwestern portions of the range where hedgerow and brushy-edge habitat has been
            most comprehensively removed.
          </p>
          <p>
            The thrasher is a bird of the edge — the dense thicket between a mowed lawn and a
            woodlot, the hedgerow between two fields, the briar tangle at the back of an old
            orchard, the overgrown fence line that hasn&apos;t been disced in ten years. This
            is the habitat that the 20th century systematically erased. Agricultural consolidation
            removed hedgerows to accommodate larger machinery. Suburban development replaced
            brushy margins with close-cut grass, ornamental plantings, and lawn-to-fence uniformity
            that provides neither nesting structure nor foraging substrate. The thrasher needs
            dense, low shrubby thickets — habitat that most landscape aesthetics treat as untidiness.
          </p>
          <p>
            Brood parasitism by Brown-headed Cowbirds adds direct nest pressure. Cowbirds lay
            single eggs in thrasher nests; the cowbird chick hatches first, grows faster, and
            monopolizes parental feeding attention. Thrasher pairs that successfully detect and
            eject the cowbird egg — behavior observed in some individuals — produce larger clutches.
            Pairs that do not may raise one cowbird at the expense of their own young. In
            landscapes where cowbird populations are elevated by proximity to livestock and
            fragmented forest, parasitism rates increase substantially.
          </p>
          <p>
            Window strikes and outdoor cats kill Brown Thrashers at rates that matter because
            the species forages close to structures and moves at low altitude through shrub
            layers where cats hunt. A ground-foraging bird that regularly approaches buildings
            is exposed to the two leading human-caused mortality sources for birds in North
            America. In suburban yards with both cat access and untreated glass, the
            probability of collision mortality over a nesting season is not trivial.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Dense native shrubs for nesting, leaf litter intact for foraging, treated windows, and cats kept indoors</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Viburnum_prunifolium_blackhaw_berries.jpg/960px-Viburnum_prunifolium_blackhaw_berries.jpg"
              alt="Blackhaw viburnum shrub with clusters of dark blue-black berries in autumn — a native shrub that provides both dense nesting cover 2-7 feet off the ground and a major late-season food source for Brown Thrashers"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Viburnum_lentago_berries.jpg/960px-Viburnum_lentago_berries.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              Blackhaw viburnum (<em>Viburnum prunifolium</em>) in fruit. Native viburnums are
              among the most effective plants for Brown Thrasher habitat — they grow dense and
              twiggy at the 2-to-7-foot height where thrashers nest, produce berries that thrashers
              eat heavily in fall and winter, and require no care once established. Serviceberry,
              elderberry, native hawthorn, and native roses serve the same combined nesting-cover-
              plus-food function. A planting of three to five of these shrubs at a yard edge creates
              usable thrasher habitat in two to three growing seasons.
              <span className="photo-credit"> Photo: Wikimedia Commons / Public Domain</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Plant dense native shrubs at yard edges and corners.</strong>{' '}
              Brown Thrashers nest in shrubs 2 to 7 feet off the ground in the densest available
              cover — hawthorns, native viburnums, serviceberries, elderberries, native roses, and
              spicebush are the most productive choices in eastern North America. The critical
              quality is density: a thrasher nest is built into a tangle of branches that physically
              obstructs approach by predators. Single ornamental shrubs pruned to open form do not
              provide this. A hedge or thicket planting of two or more species — especially thorny
              ones — is far more useful than a larger area of ornamental specimens. Find what grows
              near you at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Leave brushy corners and shrub edges unmowed.</strong>{' '}
              The hedgerow and the briar patch are the thrasher&apos;s core habitat. If there is a
              corner of your yard where a few shrubs have seeded in, or a fence line where native
              plants have naturalized, resist the impulse to clear it. Even a 200-square-foot
              patch of dense native shrubs at the back of a yard can support a nesting pair. If
              you are starting from lawn, convert one corner by planting a cluster of native
              shrubs close together and allowing the planting to fill in without pruning for
              form — the messier it looks, the better it works.
            </li>
            <li>
              <strong>Leave the leaves under and around shrubs.</strong>{' '}
              The thrasher&apos;s primary foraging behavior — the sweeping bill arc through leaf
              litter — requires an undisturbed layer of fallen leaves over the soil surface. Raked,
              blown, or vacuumed beds eliminate the beetle larvae, earthworms, and other
              invertebrates that make the leaf litter productive for a foraging thrasher.
              Leaves left in place under shrubs and along the base of borders decompose into soil,
              feed the invertebrate layer, and provide exactly the foraging substrate the species
              needs. Read the full case for it at the{' '}
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>{' '}
              page.
            </li>
            <li>
              <strong>Treat your windows and keep cats indoors.</strong>{' '}
              An estimated 1 billion birds die from window strikes annually in North America, and
              Brown Thrashers — low-flying birds that regularly approach houses from shrubby cover —
              are disproportionately affected. The most effective mitigation is to position feeders
              either closer than 3 feet from glass (so collision speeds are too low to cause injury)
              or farther than 30 feet away (so birds can recognize the glass as a barrier). Windows
              between 3 and 30 feet away from activity are the most dangerous. WindowAlert UV
              decals, Feather Friendly dot patterns, and external screens all reduce strike
              rates significantly. Outdoor and free-roaming cats are the second leading human-caused
              bird mortality source in North America; keeping cats indoors eliminates this
              pressure entirely for the species foraging in your yard.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The thicket as shared habitat</h2>
          <p>
            The Brown Thrasher shares its nesting and foraging habitat with the{' '}
            <button className="link-button" onClick={() => onNavigate('wood-thrush')}>
              Wood Thrush
            </button>
            , another species of the shrubby understory that has declined steeply for related
            reasons — forest fragmentation, brood parasitism, and loss of structural leaf-litter
            habitat. The thrush prefers deeper forest interior; the thrasher prefers the edge and
            the shrub tangle. Both depend on the same invertebrate communities that live in
            undisturbed leaf litter. The same shrub planting and leaf-leaving that helps one
            helps the other.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('fireflies')}>
              firefly
            </button>{' '}
            larvae that live in the soil beneath the leaf litter are part of the same invertebrate
            community Brown Thrashers harvest. The{' '}
            <button className="link-button" onClick={() => onNavigate('gray-tree-frogs')}>
              Gray Tree Frog
            </button>{' '}
            hunts the same beetle populations in shrubby habitat at the forest edge. The{' '}
            <button className="link-button" onClick={() => onNavigate('garter-snake')}>
              Eastern Garter Snake
            </button>{' '}
            moves through the same thickets hunting frogs, earthworms, and the small salamanders
            that live under logs and bark on the forest floor. A maintained thicket edge is not
            one species&apos; habitat — it is a community of interdependent animals operating at
            different levels of the same 2-to-6-foot structural zone.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('american-robin')}>
              American Robin
            </button>{' '}
            forages in the leaf litter of open lawns in the same way the thrasher works the
            thicket floor — earthworm detection by sight and vibration, shallow digging with the
            bill. The robin has adapted to open turf; the thrasher requires the cover of the
            shrub layer above the litter zone. Both species are telling you something about the
            quality of the invertebrate layer beneath your soil. When the thrasher leaves a yard
            it used to visit, the leaf-litter invertebrate community has usually degraded. Bringing
            it back means leaving the litter intact and planting the shrubs that give the thrasher
            reason to stay.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build the dense native shrub layer and intact leaf litter that the thrasher — and twenty other species — depend on.</strong>{' '}
            Start with plants at{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , read the full case for leaving leaves at{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>
            , and meet every other species sharing your shrub edges in the{' '}
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
