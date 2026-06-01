import type { Page } from '../App'

interface EasternTowheeProps {
  onNavigate: (page: Page) => void
}

export default function EasternTowhee({ onNavigate }: EasternTowheeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pipilo_erythrophthalmus_CT2.jpg/960px-Pipilo_erythrophthalmus_CT2.jpg"
          alt="Male Eastern Towhee perched on a branch showing jet-black hood and back, vivid rufous flanks, white belly, and striking red eye — a leaf-litter forager of dense shrubby undergrowth throughout the eastern United States"
          className="species-hero-image"
          style={{ objectPosition: 'center 30%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Eastern_Towhee_Male.jpg/960px-Eastern_Towhee_Male.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: DickDaniels&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Pipilo_erythrophthalmus_CT2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Towhee</h1>
        <p className="hero__lead">
          From the thicket at the back of the yard comes a loud, emphatic &ldquo;Drink your
          tea-EEE!&rdquo; and then the sound of leaves being violently kicked aside. The Eastern
          Towhee is a bird of dense shrubby undergrowth — bold in color, loud in song, and
          completely dependent on the kind of habitat that most people rake, mow, and prune away.
          It is one of the most distinctive birds in the eastern United States, and one of the
          most directly responsive to what homeowners do with their ground-layer plantings. North
          American Breeding Bird Survey data documents a long-term population decline across most
          of its range. The cause is not mysterious: the brushy thickets and leaf-littered edges
          the towhee needs are disappearing from the landscape one tidy yard at a time.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">The double-scratch and the song that names itself</h2>
          <p>
            <em>Pipilo erythrophthalmus</em> — <em>pipilo</em> means &ldquo;I chirp&rdquo; in Latin;
            <em>erythrophthalmus</em> means &ldquo;red-eyed.&rdquo; Both names fit. The call is loud
            and persistent, a rising &ldquo;chewink&rdquo; or emphatic &ldquo;towHEEE&rdquo; that
            gave the species its common name; the full song is the unmistakable &ldquo;Drink your
            tea-EEE,&rdquo; the first two notes short and percussive, the third long and buzzy.
            Males sing from the top of a shrub or low tree at the edge of a thicket, announcing
            territory with a repertoire of several variations on the basic phrase. The red eye is
            the field mark that closes the identification at close range — vivid, almost luminous,
            set in a jet-black face in males, a rich warm brown in females who share the rufous
            flanks and white belly but replace the male&apos;s black head and back with that warm
            brown throughout.
          </p>
          <p>
            The foraging behavior is the species&apos; most teachable characteristic and one of the
            most recognizable in North American birds. The towhee uses a &ldquo;double-scratch&rdquo;
            — it hops forward slightly, then kicks both feet backward simultaneously, raking leaf
            litter in a single explosive motion that flings debris several inches in both directions
            to expose the beetles, ants, caterpillars, earthworms, and other invertebrates
            underneath. The sound of this — a sharp rustle from inside a dense thicket — is often
            the first clue to a towhee&apos;s presence before the bird itself is visible. The
            double-scratch technique is unique to the towhee genus (<em>Pipilo</em>) among North
            American birds and requires a deep, undisturbed layer of leaf litter over loose soil as
            its substrate. Bare ground, compacted soil, and raked or mulched garden beds eliminate
            the structural medium the behavior depends on.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pipilo_erythrophthalmus_-_Eastern_Towhee_%28female%29.jpg/960px-Pipilo_erythrophthalmus_-_Eastern_Towhee_%28female%29.jpg"
              alt="Female Eastern Towhee on the ground showing warm brown head and back, rufous flanks, and white belly — females share the same double-scratch foraging behavior as males and select nest sites in dense low vegetation at or near ground level"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pipilo_erythrophthalmus_CT2.jpg/960px-Pipilo_erythrophthalmus_CT2.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              A female Eastern Towhee. Females replace the male&apos;s jet-black hood and back
              with warm brown, but share the same rufous flanks, white belly, and red eye. Both
              sexes use the double-scratch foraging technique in leaf litter. Females build the
              nest — a bulky cup on or just above the ground in dense shrubby cover — and do most
              of the incubation, while males sing persistently from exposed perches nearby.
              <span className="photo-credit"> Photo: Wikimedia Commons / CC BY-SA</span>
            </figcaption>
          </figure>

          <p>
            Nesting happens on or very near the ground, concealed in the base of a dense shrub or
            grass clump, or in a slight depression in leaf litter itself. The female builds a bulky
            cup of leaves, bark strips, and dry grass lined with fine plant material and hair.
            Clutches of two to six eggs are incubated primarily by the female for about twelve days.
            Chicks fledge at ten to twelve days and are fed by both parents for several weeks
            afterward. Eastern Towhees are year-round residents across much of the Southeast and
            mid-Atlantic; northern breeding populations migrate short distances to the southern
            states in fall and return in April and May. The diet spans seeds, berries, and a wide
            range of invertebrates — beetles, ants, caterpillars, spiders, millipedes, and small
            salamanders taken opportunistically. In fall and winter, seeds and berries become the
            primary food source; native shrubs with persistent fruit are directly used.
          </p>
          <p>
            The species uses habitat at the shrubby edge between forest and open ground, in
            brambly old-field thickets, along hedgerows, and in the dense low-growing layer at the
            base of woodland margins. The structural requirement is consistent: dense vegetation
            low to the ground, leaf litter beneath it, and enough vertical complexity in the shrub
            layer that the bird can move unseen. This is habitat that looks, to many people, like
            an unmaintained or neglected yard edge. It is actually some of the most productive
            wildlife habitat a property can contain.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">Losing the shrubby middle — the habitat no one saves</h2>
          <p>
            The North American Breeding Bird Survey, running continuously since 1966, documents a
            significant long-term decline in Eastern Towhee populations across most of the species&apos;
            range. The declines have been steepest in the northern and midwestern portions of the
            breeding range, where shrubby successional habitat — the brushy old fields, briar
            tangles, and hedgerows that succeeded open farmland in the mid-20th century — has been
            lost to either development or forest maturation. Towhees are a bird of mid-succession:
            they need the stage between abandoned field and closed-canopy forest, a stage that
            most landscapes either skip entirely (lawn to mature tree) or actively manage away.
          </p>
          <p>
            The problem has two components that operate at different scales. At the landscape level,
            agricultural consolidation and suburban expansion eliminated the rough edges and
            bramble-filled margins where towhees thrived for decades. In New England and the
            mid-Atlantic, the old-growth shift of formerly farmed or logged land into closed-canopy
            forest — generally a conservation win — has also reduced the shrubby edge that towhees
            require. At the yard level, the same logic that drives people to rake leaves, prune
            shrubs into tidy globes, and maintain a clean line between mowed lawn and cultivated
            bed removes every structural feature the towhee needs: the leaf litter substrate, the
            dense low branches, the tangled cover for ground nesting.
          </p>
          <p>
            Nest predation is a significant mortality pressure. Ground-level nests and near-ground
            nests in dense shrubs are highly vulnerable to cats, raccoons, and snakes. In suburban
            areas where outdoor cat densities are elevated, nest success rates fall sharply.
            Brown-headed Cowbird brood parasitism adds further nest pressure wherever shrubby
            habitat is fragmented, since forest-edge fragmentation increases cowbird contact with
            host nests. A towhee pair in a yard surrounded by continuous lawn is more exposed to
            both pressures than one at the edge of a connected shrub corridor.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that help Eastern Towhees</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Spicebush_Lindera_benzoin_Flower_2000px.jpg/960px-Spicebush_Lindera_benzoin_Flower_2000px.jpg"
              alt="Spicebush (Lindera benzoin) in early spring bloom showing clusters of small yellow flowers on bare branches — a native shrub that provides dense low cover for Eastern Towhee nesting and produces red berries that towhees eat in late summer and fall"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Viburnum_prunifolium_blackhaw_berries.jpg/960px-Viburnum_prunifolium_blackhaw_berries.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              Spicebush (<em>Lindera benzoin</em>) is one of the most valuable native shrubs for
              Eastern Towhees: it grows dense and low (3 to 12 feet), tolerates shade, provides
              nesting cover in the 1-to-4-foot zone where towhees nest, and produces bright red
              berries that are heavily used by migratory and resident birds in late summer and fall.
              Native viburnums, elderberry, native roses, and hawthorns serve the same combined
              nesting-cover-plus-food function. Plant several together — the denser the planting,
              the more effective it is.
              <span className="photo-credit"> Photo: Wikimedia Commons / CC BY-SA</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Plant dense native shrubs at yard edges and corners.</strong>{' '}
              Eastern Towhees nest on or just above the ground in the densest available shrubby
              cover — spicebush, native roses, viburnum, elderberry, native hawthorns, and
              blackberry are among the most productive choices in eastern North America. The key
              quality is density at the 1-to-4-foot level: a towhee nest must be physically
              hidden within tangles of branches and leaf litter. Single ornamental shrubs spaced
              apart with bare mulch beneath them provide neither nesting structure nor foraging
              substrate. A hedge or thicket planting of two or more shrub species, allowed to
              fill in without shaping for form, begins providing usable habitat within two growing
              seasons. Find species that grow near you at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Leave the leaves under and around shrubs.</strong>{' '}
              The Eastern Towhee&apos;s double-scratch foraging technique — kicking both feet
              backward simultaneously to expose invertebrates — requires an undisturbed layer of
              fallen leaves over loose soil. A raked, blown, or mulched bed eliminates both the
              physical substrate the behavior requires and the beetle larvae, earthworms, and
              other invertebrates that make the leaf litter productive. Leaves left in place
              beneath shrubs and along shrub bases decompose into soil, feed the invertebrate
              community, and provide exactly the foraging medium the towhee double-scratch is
              built for. Read the full case at{' '}
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>
              .
            </li>
            <li>
              <strong>Create and keep brush piles from pruned branches and fallen wood.</strong>{' '}
              A brush pile — layers of larger branches on the bottom for structure, smaller
              branches and twigs piled loosely on top — provides dense low cover that towhees
              use for both foraging and refuge from predators. Brush piles do not need to be
              large: a pile 4 to 6 feet across and 2 to 3 feet high at the back of a yard,
              sited against a shrub or fence, creates immediate usable towhee habitat. Add
              material from pruning, storm debris, and fallen limbs rather than chipping or
              composting everything. The pile will compress and decompose from the bottom over
              two to three years; add fresh material to the top to maintain structure.
            </li>
            <li>
              <strong>Keep cats indoors.</strong>{' '}
              The Eastern Towhee nests on or near the ground and forages in the leaf litter at
              ground level — the precise zone where cats hunt most effectively. Outdoor and
              free-roaming cats are the leading human-caused source of direct bird mortality in
              North America, killing an estimated 1 to 4 billion birds annually. For a
              ground-nesting, ground-foraging species in a suburban yard with cat access, the
              probability of nest predation or direct mortality over a breeding season is not
              trivial. Keeping cats indoors or in an outdoor enclosure eliminates this pressure
              entirely for every species foraging and nesting in your yard.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The shrub-edge community</h2>
          <p>
            The Eastern Towhee shares its foraging and nesting habitat with the{' '}
            <button className="link-button" onClick={() => onNavigate('brown-thrasher')}>
              Brown Thrasher
            </button>
            , which uses the same dense-shrub and leaf-litter zone but forages by sweeping its
            long curved bill in arcs rather than the towhee&apos;s two-footed kick. Both species
            need the same structural elements — dense native shrubs at the 1-to-7-foot level and
            undisturbed leaf litter beneath them — and a yard that supports one supports the other.
            The thrasher sings from the top of the shrub; the towhee sings from a perch at the
            shrub edge. Their songs fill different registers of the same patch of habitat.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('gray-catbird')}>
              Gray Catbird
            </button>
            {' '}nests in the same 2-to-5-foot shrub layer the towhee selects and forages
            through the same leaf litter the towhee double-scratches. The catbird gleans
            berries and insects from mid-shrub stems; the towhee works the ground below.
            The catbird&apos;s flat mewing call and the towhee&apos;s &ldquo;Drink your
            tea&rdquo; are often audible from the same shrub patch at the same time —
            two birds working the same 3-foot vertical slice of habitat from different levels.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('fireflies')}>
              firefly
            </button>{' '}
            larvae living in the soil beneath the leaf litter are part of the invertebrate community
            the towhee harvests with its double-scratch. The{' '}
            <button className="link-button" onClick={() => onNavigate('gray-tree-frogs')}>
              Gray Tree Frog
            </button>{' '}
            hunts the same beetle and moth populations in the shrubby layer at the forest edge. The{' '}
            <button className="link-button" onClick={() => onNavigate('garter-snake')}>
              Eastern Garter Snake
            </button>{' '}
            moves through the same leaf litter hunting the earthworms, frogs, and salamanders
            that live beneath logs and bark in undisturbed ground cover. The leaf litter zone in a
            maintained native shrub planting is not one species&apos; habitat — it is a layered
            community of interdependent animals operating at or just above ground level.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('american-bumble-bee')}>
              American Bumble Bee
            </button>{' '}
            and other ground-nesting native bees use the same undisturbed bare-soil patches at the
            base of native shrub plantings where towhees forage. The{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-chipmunk')}>
              Eastern Chipmunk
            </button>{' '}
            harvests the same seed and berry resources from native shrubs and caches them in the
            leaf-litter zone where towhees forage. A dense native shrub planting with intact leaf
            litter does not serve one species. It anchors an entire community of animals — most of
            which a visitor will never identify by name — that depend on the structural complexity
            that disappears when that corner gets mowed, raked, and cleared.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('american-robin')}>
              American Robin
            </button>{' '}
            hunts the open lawn and bare garden-bed edge at the margin of the shrub — pulling
            earthworms from loose soil, running forward, stopping, cocking its head to listen for
            movement below. The towhee never goes there. It works the thicket floor — the deep
            litter under the shrub where the robin stops and the towhee takes over. Both are
            reading the same soil invertebrate community from different access points. When the
            leaf litter is intact and the earthworm population is healthy, the robin is on the
            lawn edge and the towhee is ten feet away in the thicket, each working the same
            underground food web from a different angle.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-meadowlark')}>
              Eastern Meadowlark
            </button>{' '}
            holds its territory in open grassland — a minimum of 25 to 30 acres of tall native
            grass where it nests on the surface and hunts grasshoppers and beetles by probing
            the soil with its bill. The towhee never uses open grassland. It works the shrubby
            edge where the grass gives way to native shrubs — the brushy margin, the hedgerow,
            the tangled transition zone where the meadowlark&apos;s territory ends and towhee
            territory begins. A native meadow bordered by a row of native shrubs serves both:
            the meadowlark finds its insect base in the open strip; the towhee finds nesting
            cover and leaf-litter foraging substrate in the shrubs at the margin. Both are losing
            the same unmanaged edge — the transitional zone that once existed wherever old fields
            were left alone and now exists almost nowhere.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build the dense native shrub layer and intact leaf litter the towhee — and its whole community — depend on.</strong>{' '}
            Start with plants at{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , read the case for leaving leaves at{' '}
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