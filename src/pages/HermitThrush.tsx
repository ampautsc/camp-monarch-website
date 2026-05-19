import type { Page } from '../App'

interface HermitThrushProps {
  onNavigate: (page: Page) => void
}

export default function HermitThrush({ onNavigate }: HermitThrushProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Hermit_Thrush_0777vv_%28cloudy%29.jpg/960px-Hermit_Thrush_0777vv_%28cloudy%29.jpg"
          alt="Hermit Thrush perched on a branch, spotted breast visible, rufous tail raised in the slow upward pump that distinguishes it from every other spotted thrush"
          className="species-hero-image"
          style={{ objectPosition: 'center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Dan Pancamo&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Hermit_Thrush_0777vv_(cloudy).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Hermit Thrush</h1>
        <p className="hero__lead">
          Every autumn, the Wood Thrush leaves the eastern US and reappears
          in Costa Rica. The Hermit Thrush does not go. It raises its spotted
          rufous tail in a slow upward pump — a gesture no other common thrush
          makes — and moves toward the nearest winterberry shrub. It stays
          because the shrub is there.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="switch-heading">
          <h2 id="switch-heading">The insect-to-berry switch, October through March</h2>
          <p>
            The Hermit Thrush (<em>Catharus guttatus</em>) is a 7-inch bird with a
            warm brown back, a spotted white breast, and a rufous tail it raises
            slowly and lets fall — a repetitive pump that distinguishes it from
            every other spotted thrush in North America. It spends summers in cool,
            moist forests from Alaska to the southern Appalachians, eating beetles,
            earthworms, ants, and caterpillars.
          </p>
          <p>
            In September, the insect supply collapses across the eastern US.
            The Wood Thrush, Swainson&apos;s Thrush, and Veery all respond the same
            way: they migrate. Their digestive systems cannot process berry pulp
            efficiently enough to sustain them through a northern winter. The
            Hermit Thrush responds differently. Its gut shifts to accommodate
            berry pulp, and it pivots to native viburnums, winterberry holly,
            dogwood drupes, and native persimmon — plants whose fruit persists
            through November and into January. It stays.
          </p>
          <p>
            In a yard with fruiting native shrubs, the Hermit Thrush works
            from the ground up through the shrub layer: sweeping leaf litter
            aside with its bill, picking up fallen viburnum berries, pausing in
            a winterberry to pull clusters from bare stems. In a yard planted
            only with ornamental shrubs whose berries either never set or drop
            by October — burning bush, barberry, non-fruiting cultivars — the
            Hermit Thrush passes through once and does not return.
          </p>
        </section>

        <section aria-labelledby="tail-heading">
          <h2 id="tail-heading">Slow tail pump, winter song</h2>
          <p>
            The slow upward raise and drop of the Hermit Thrush&apos;s rufous
            tail is involuntary — the bird does it when it lands, when it
            pauses, when it watches from a branch. The behavior has no agreed
            explanation. It does not appear to be territorial; the bird pumps
            its tail when alone. The most-cited hypothesis is that the motion
            disturbs prey in the leaf litter below, causing insects or spiders
            to move and become detectable. This remains unconfirmed.
          </p>
          <p>
            What the tail pump does from the outside is make the Hermit Thrush
            identifiable from 30 feet — even when the bird is half-hidden in
            a shrub. A spotted brown bird raising its rufous tail slowly and
            repeatedly is not a Veery, not a Wood Thrush, not a Fox Sparrow.
            Learning the gesture is a way of finding a bird that has been
            present all winter without being noticed.
          </p>
          <p>
            On winter days when temperatures climb above 40°F, Hermit Thrushes
            sometimes sing. Each phrase begins on one pitch and spirals through
            harmonically complex intervals — pause — then starts again on a
            different starting pitch. From inside a house with windows closed,
            the sound is thin and looping, belonging to a different season.
            The bird is in the viburnum, 15 feet from the window.
          </p>
        </section>

        <section aria-labelledby="hazards-heading">
          <h2 id="hazards-heading">Forest-edge parasitism, winter windows, outdoor cats</h2>
          <p>
            The Hermit Thrush nests on or near the ground in cool, moist
            deciduous and mixed forest — mature stands where the understory
            stays dense and the soil supports earthworm populations. Partners
            in Flight estimates the global breeding population at around
            120 million birds, placing it among the more numerous North American
            thrushes. Wintering populations in the eastern US concentrate
            wherever fruit persists, which brings them into close contact
            with suburban hazards.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Hermit_thrush_in_Washington_D.C._%2813938964175%29.jpg/800px-Hermit_thrush_in_Washington_D.C._%2813938964175%29.jpg"
              alt="Hermit Thrush on leaf litter with bill angled down, spotted breast and rufous tail both visible — the foraging posture it holds from October through March"
              loading="lazy"
            />
            <figcaption>
              The Hermit Thrush forages by sweeping leaf litter aside and picking
              prey from the exposed soil beneath — the same motion it uses hunting
              earthworms in summer and beetle larvae in a winter yard. A yard with
              intact leaf litter under its shrubs holds overwintering beetles, ants,
              and soil invertebrates the thrush works from October to March.
              <span className="photo-credit"> Photo: Doris Evans&nbsp;·&nbsp;
                <a href="https://commons.wikimedia.org/wiki/File:Hermit_thrush_in_Washington_D.C._(13938964175).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
                &nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Brown-headed Cowbirds parasitize Hermit Thrush nests — laying a
            single egg that hatches faster than the thrush&apos;s own eggs and
            outcompetes the thrush chicks for food. Cowbird parasitism rates
            in forest interior nests run below 5%; in forest-edge habitats
            adjacent to suburban development, rates exceed 30% in some studied
            populations (Brittingham &amp; Temple 1983). The Hermit Thrush&apos;s
            ground nest, concealed under a dense shrub or beneath a root mass,
            offers some protection — but only when the forest floor structure
            is intact.
          </p>
          <p>
            Window collisions kill Hermit Thrushes in numbers most homeowners
            do not see because the birds move through yards before dawn and
            after dusk. The species flocks loosely during peak winter fruit
            season — October through January — and winter morning light angles
            produce glass reflections of bare trees that birds read as open
            sky. American Bird Conservancy estimates 600 million to 1 billion
            birds die in US window strikes annually; the Hermit Thrush, as a
            ground-moving suburban winter resident that approaches buildings
            closely when following fruit sources, is among the species most
            exposed to this hazard.
          </p>
          <p>
            Outdoor cats kill Hermit Thrushes on the ground. The bird forages
            with its head down, sweeping litter, for long stretches without
            raising its eyes. American Bird Conservancy and the Smithsonian
            Conservation Biology Institute estimate outdoor cats kill 1.3 to
            4 billion birds annually in the US; ground-foraging birds that
            spend long periods motionless in leaf litter carry a
            disproportionate share of that number.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Native viburnums for October, winterberry through February, leaf litter intact through March, and window tape near fruit shrubs</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Ilex_verticillata_-%22Winter_Red%22.jpg/800px-Ilex_verticillata_-%22Winter_Red%22.jpg"
              alt="Winterberry holly (Ilex verticillata) loaded with clusters of bright red berries on bare stems in late fall — fruit visible from across the yard"
              loading="lazy"
            />
            <figcaption>
              Winterberry holly (<em>Ilex verticillata</em>) holds its fruit
              through February — after viburnum and dogwood berries have already
              been stripped. A single female plant draws Hermit Thrushes, Cedar
              Waxwings, and American Robins to the same shrub on the same January
              morning. One male pollinator within 50 feet is needed for fruit set.
              <span className="photo-credit"> Photo: F. D. Richards&nbsp;·&nbsp;
                <a href="https://commons.wikimedia.org/wiki/File:Ilex_verticillata_-%22Winter_Red%22.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>
                &nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Plant native viburnums for October–November fruit.</strong>{' '}
              Arrowwood viburnum (<em>Viburnum dentatum</em>), blackhaw
              (<em>V. prunifolium</em>), and nannyberry (<em>V. lentago</em>)
              produce blue-black drupes that persist into November. Hermit
              Thrushes feed on viburnum fruit heavily during October and November,
              before hard freezes reduce availability. A single mature arrowwood
              viburnum feeds multiple birds across several weeks.
            </li>
            <li>
              <strong>Add winterberry holly for coverage through February.</strong>{' '}
              Winterberry (<em>Ilex verticillata</em>) holds fruit through
              February in most of its range — long after viburnum and dogwood
              berries have been consumed. One female plant needs one male
              pollinator within 50 feet for fruit set. A yard with both viburnum
              and winterberry provides staggered fruit from October through February.
            </li>
            <li>
              <strong>Leave leaf litter in place under shrubs through March.</strong>{' '}
              The Hermit Thrush forages by sweeping litter aside to expose the
              soil beneath — picking up overwintering beetles, ants, and earthworm
              activity on warm days. Raking the yard bare removes this food layer.
              Leaf litter under shrubs, along borders, and in low-traffic corners
              holds the invertebrate community the thrush works from October into spring.
            </li>
            <li>
              <strong>Apply window tape on glass near fruit shrubs before October.</strong>{' '}
              Hermit Thrushes approach buildings closely when following fruit
              sources, and winter morning light angles produce glass reflections
              that register as open sky. Vertical tape strips spaced 2 inches
              apart on exterior glass break the reflection enough for birds to
              read the surface as solid. Any window within 15 feet of a
              winterberry or viburnum shrub is worth treating.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who else winters on these same shrubs</h2>
          <p>
            The native shrubs that keep a Hermit Thrush through January draw
            other winter species to the same yard. Cedar Waxwings strip
            winterberry in flocks of 20 or more, descend for 10 minutes, and
            vanish. American Robins, which many homeowners assume leave entirely,
            regularly overwinter wherever fruit persists. Yellow-rumped Warblers —
            the only warbler that commonly overwinters in the eastern US — have
            the same fruit-digesting ability as the Hermit Thrush and work the
            same viburnum clusters. A yard with native fruit-bearing shrubs in
            January is not empty. It is full of birds that arrived quietly and
            will leave the same way.
          </p>
          <ul>
            <li>
              <button className="link-button" onClick={() => onNavigate('wood-thrush')}>
                Wood Thrush
              </button>
              {' — '}The thrush that leaves: same eastern forest all summer, gone
              by October because it cannot shift to winter fruit.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('yellow-rumped-warbler')}>
                Yellow-rumped Warbler
              </button>
              {' — '}The only warbler that overwinters commonly in the eastern US;
              uses the same fruit-digesting strategy and forages the same native
              viburnum shrubs.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('dark-eyed-junco')}>
                Dark-eyed Junco
              </button>
              {' — '}Ground forager that works the same leaf-litter layer as the
              Hermit Thrush; both species foraging a yard in January signal
              intact winter habitat structure.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('cedar-waxwing')}>
                Cedar Waxwing
              </button>
              {' — '}Arrives in nomadic flocks of 10 to 100 with no fixed winter territory.
              When the flock hits the winterberry the Hermit Thrush has been defending,
              it clears the whole shrub in 12 minutes and moves on — and the thrush
              waits in the brush for the next fruiting plant to come in.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('winterberry-holly')}>
                Winterberry Holly
              </button>
              {' — '}Native deciduous holly; red berries hold through January on bare stems
              after every other fruit source has been stripped — the one shrub a Hermit
              Thrush can work alone once the waxwing flock moves on.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('arrowwood-viburnum')}>
                Arrowwood Viburnum
              </button>
              {' — '}Native viburnum; blue-black drupes in August–October that Hermit Thrushes
              strip heavily on fall arrival. Fruits out three months before winterberry begins,
              bridging the October arrival window to the late-season winterberry coverage.
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to plant for winter birds?</strong>{' '}
            Start with{' '}
            <button className="link-button" onClick={() => onNavigate('arrowwood-viburnum')}>
              Arrowwood Viburnum
            </button>
            {' '}for October–November coverage,{' '}
            <button className="link-button" onClick={() => onNavigate('winterberry-holly')}>
              Winterberry Holly
            </button>
            {' '}for coverage through February, find native viburnums and more in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , see how the shrub layer connects to the full winter habitat in{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-layers')}>
              Habitat Layers
            </button>
            , and understand how autumn raking removes the winter foraging layer in{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
