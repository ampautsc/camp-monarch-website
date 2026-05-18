import type { Page } from '../App'

interface HermitThrushProps {
  onNavigate: (page: Page) => void
}

export default function HermitThrush({ onNavigate }: HermitThrushProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Catharus_guttatus_-_2.jpg/960px-Catharus_guttatus_-_2.jpg"
          alt="Hermit Thrush perched on a branch, showing spotted breast, rufous tail, and the alert posture of a bird scanning the ground below for fallen fruit"
          className="species-hero-image"
          style={{ objectPosition: 'center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Manjith Kainickara&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Catharus_guttatus_-_2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Hermit Thrush</h1>
        <p className="hero__lead">
          The Wood Thrush leaves in September. The Hermit Thrush arrives in
          October. Both are spotted thrushes from the same family. One departs
          because it cannot find food through a northern winter. The other stays
          because it can shift its diet — from insects to native berries — in a
          way no other spotted thrush in eastern North America manages.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="arrival-heading">
          <h2 id="arrival-heading">Brown back, spotted breast, rufous tail that lifts and lowers</h2>
          <p>
            The Hermit Thrush (<em>Catharus guttatus</em>) is a 6.75-inch bird
            with a brown back, white breast spotted heavily in dark brown, and a
            tail that is distinctly rufous — warmer and redder than its wings and
            back. It breeds across boreal forests from Alaska to Nova Scotia and
            arrives in the eastern United States in October, just as the Wood
            Thrush finishes its southward migration to Central America.
          </p>
          <p>
            The rufous tail provides the field mark. A Hermit Thrush perched in a
            shrub will slowly raise its tail and then lower it again — a deliberate,
            unhurried pump, repeated two or three times before the bird drops to
            the ground to forage. No other spotted thrush in North America performs
            this gesture. Watch a thrush in late October raise and lower its tail
            once, then twice: that bird is still here.
          </p>
          <p>
            The &ldquo;hermit&rdquo; name comes from its preference for dense undergrowth.
            It forages on the ground beneath shrubs, flipping dead leaves to expose
            invertebrates on warmer winter days, then retreating into thicket when
            temperatures drop. Vermont chose it as the state bird. The bird itself
            is indifferent to state borders — it winters across the southern half
            of the US and along both coasts as far north as southern New England.
          </p>
        </section>

        <section aria-labelledby="diet-heading">
          <h2 id="diet-heading">The berry switch that keeps one thrush through February</h2>
          <p>
            The Hermit Thrush eats insects and earthworms from spring through
            early fall, like most thrushes. In September, as soil temperatures
            drop and invertebrate activity decreases, it shifts to fruit. This
            dietary flexibility is what separates it from every other spotted
            thrush on the eastern seaboard.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Hermit_thrush_jan_2015.jpg/800px-Hermit_thrush_jan_2015.jpg"
              alt="Hermit Thrush perched in dense winter cover, rufous tail and spotted breast visible through bare branches — a bird that stays when all other spotted thrushes have left"
              loading="lazy"
            />
            <figcaption>
              Hermit Thrush in January. The species overwinters across much of the eastern US — the only spotted thrush that does — by switching from insects to native berries when the ground freezes.
              <span className="photo-credit"> Photo: Ltshears&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Hermit_thrush_jan_2015.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            The Wood Thrush (<em>Hylocichla mustelina</em>), the Swainson&apos;s
            Thrush, and the Veery — three spotted thrushes that breed in the same
            eastern forests — all leave for Central or South America by October.
            They do not leave because winter temperatures kill them. They leave
            because their food disappears: invertebrates buried in frozen soil,
            unavailable until spring. None of them can sustain themselves through
            a northern winter on fruit the way the Hermit Thrush can.
          </p>
          <p>
            In January, a Hermit Thrush on a winterberry holly works through
            berries that have been hanging on the branch since October. Each
            berry delivers fat and carbohydrates. A single large winterberry
            loaded with several dozen red fruits represents several hours of
            foraging. A yard with three winterberry hollies at the shrub layer
            becomes a station the Hermit Thrush returns to every day for four
            months.
          </p>
        </section>

        <section aria-labelledby="plants-heading">
          <h2 id="plants-heading">Winterberry, nannyberry, and the shrubs that hold fruit through cold</h2>
          <p>
            Native hollies in the genus <em>Ilex</em> form the backbone of the
            Hermit Thrush&apos;s winter diet in the Northeast and Midwest. Winterberry
            holly (<em>Ilex verticillata</em>) holds bright red berries through
            January and into February. American holly (<em>Ilex opaca</em>) holds
            blue-black berries even longer. Both species produce fruit with fat
            content high enough to sustain a thrush through sustained cold —
            the same fat profile that native berries have been delivering to
            overwintering birds on this continent for millions of years.
          </p>
          <p>
            Native viburnums provide a second tier. Nannyberry (<em>Viburnum
            lentago</em>) and arrowwood (<em>Viburnum dentatum</em>) produce dark
            fruit that persists into late fall. Both grow six to twelve feet tall
            at maturity and feed the Hermit Thrush along with dozens of other
            overwintering and migrating songbirds. A winterberry holly at the
            yard edge and a nannyberry against a fence creates a thrush station
            that runs October through March.
          </p>
          <p>
            Burning bush (<em>Euonymus alatus</em>), multiflora rose (<em>Rosa
            multiflora</em>), and autumn olive (<em>Elaeagnus umbellata</em>)
            all produce berries that birds eat. The problem is what happens
            afterward. Birds that eat invasive berries carry the seeds to forest
            edges, roadsides, and other yards. Multiflora rose has colonized
            roughly 45 million acres of eastern US farmland and forest edge.
            Autumn olive alters soil nitrogen in ways that suppress native plant
            regeneration. Feeding birds on invasive berries exports those plants
            to every site the birds visit.
          </p>
        </section>

        <section aria-labelledby="population-heading">
          <h2 id="population-heading">Stable where others drop — and what that stability costs</h2>
          <p>
            The North American Breeding Bird Survey shows the Hermit Thrush
            holding roughly stable while its spotted-thrush relatives decline.
            Wood Thrush populations have fallen more than 60% since 1966.
            Swainson&apos;s Thrush is down. Veery is down. The Hermit Thrush holds
            because its breeding range — boreal and montane forest — has
            experienced less fragmentation than the eastern deciduous forest
            where Wood Thrush nests.
          </p>
          <p>
            The stability is conditional. It rests on wintering habitat that
            still provides native fruit through cold months. A yard that removes
            its shrub layer eliminates the Hermit Thrush from the winter equation.
            A neighborhood that plants invasive ornamentals feeds the birds but
            spreads the plants. The wintering range of the Hermit Thrush overlaps
            almost exactly with the range where winterberry holly grows natively.
            The bird and the plant co-evolved on the same continent. The shrub
            produces fruit when the thrush needs it; the thrush disperses the
            seeds after they pass through its gut.
          </p>
        </section>

        <section aria-labelledby="actions-heading">
          <h2 id="actions-heading">What to plant, what to remove, and what to leave alone</h2>
          <ul className="action-list">
            <li>
              <strong>Plant winterberry holly (<em>Ilex verticillata</em>)</strong> —
              native shrub, 6–10 feet tall, full sun to part shade, wet to average
              soil. Requires one male per three to five female plants to set fruit.
              Choose locally native genotypes rather than heavily hybridized
              cultivars bred primarily for ornamental berry size.
            </li>
            <li>
              <strong>Plant native viburnum</strong> — nannyberry (<em>Viburnum
              lentago</em>) or arrowwood (<em>Viburnum dentatum</em>) depending on
              site conditions. Both grow 6–12 feet, produce fruit into late fall,
              and support caterpillars in summer — food for nestlings when the
              Hermit Thrush is breeding in boreal forest north of your yard.
            </li>
            <li>
              <strong>Remove burning bush and multiflora rose before they fruit</strong> —
              both produce berries that birds scatter across the landscape. Burning
              bush is regulated or prohibited in 31 states. Cutting them before
              berry set stops the dispersal cycle from your property.
            </li>
            <li>
              <strong>Leave fallen leaves under shrubs</strong> — the Hermit
              Thrush forages by flipping dead leaves on the ground under dense
              cover. A cleared mulch bed under a shrub offers nothing. A layer
              of oak leaves beneath a winterberry holly holds arthropods and
              shelter through cold snaps.
            </li>
          </ul>
          <div className="action-cta">
            <p>
              The shrub layer that holds winterberry holly in winter supports
              Yellow Warblers nesting in summer and Gray Catbirds feeding in
              fall. One native shrub carries multiple species through multiple
              seasons.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => onNavigate('habitat-layers')}
            >
              Explore the habitat layers
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
