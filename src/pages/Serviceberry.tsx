import type { Page } from '../App'

interface ServiceberryProps {
  onNavigate: (page: Page) => void
}

export default function Serviceberry({ onNavigate }: ServiceberryProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Amelanchier_arborea_kz02.jpg/960px-Amelanchier_arborea_kz02.jpg"
          alt="Downy serviceberry (Amelanchier arborea) in full April bloom — white five-petaled flowers covering branch tips before the leaves have fully emerged, photographed at the Botanischer Garten, Berlin-Dahlem"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Amelanchier_arborea_kz01.jpg/960px-Amelanchier_arborea_kz01.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Amelanchier arborea (Downy Serviceberry), Botanischer Garten Berlin-Dahlem &middot; Krzysztof Ziarnek, Kenraiz &middot; CC BY-SA 4.0
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>Serviceberry berries ripen in June, ahead of every other native fruit, during the three weeks that wood thrushes and robins are still carrying food to a nest</h1>
        <p className="hero__lead">
          Downy serviceberry (<em>Amelanchier arborea</em>) opens its flowers in April,
          before its leaves have finished unfolding, while the maples are still leafing
          out and oak buds have barely cracked open. Five narrow white petals per flower,
          loosely arranged in clusters along branch tips. On a tree in full bloom, every
          outer twig carries a cluster; from thirty feet away, the whole crown looks
          snow-dusted. The bloom lasts one to two weeks and is typically finished before
          the first warblers arrive from migration.
        </p>
        <p className="hero__lead">
          Six weeks later, the flowers become berries &mdash; round, dark red to dark
          purple, about the size of a blueberry, dozens of clusters per branch. They
          ripen in June and July. Cedar waxwings find them within days of peak ripeness
          and can strip a loaded tree in a single afternoon. Robins and catbirds follow.
          Wood thrushes, still on nests in June, fly to fruiting serviceberries and
          carry the berries back to nestlings too young to fly. The entire harvest
          window on a single tree can close in less than a week.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="identification-heading">
          <h2 id="identification-heading">Five narrow white petals in April, smooth gray bark through winter &mdash; identifying serviceberry before its leaves open</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Amelanchier_arborea_kz01.jpg/960px-Amelanchier_arborea_kz01.jpg"
              alt="Serviceberry (Amelanchier arborea) flowering branches at Dunedin Botanic Garden — white flower clusters emerging from branch tips, with bronze-flushed leaf buds beginning to unfurl alongside the blooms"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Amelanchier_arborea_kz02.jpg/960px-Amelanchier_arborea_kz02.jpg'
              }}
            />
            <figcaption>
              Downy serviceberry in bloom, Dunedin Botanic Garden.
              The five petals are strap-shaped and slightly twisted, with a small gap
              between each one. Leaf buds open bronze-tinged alongside the flowers,
              turning green within days of bloom.
              <span className="photo-credit"> Photo: Krzysztof Ziarnek, Kenraiz &middot; CC BY-SA 4.0</span>
            </figcaption>
          </figure>
          <p>
            Serviceberry blooms in April across most of its eastern range &mdash; typically
            after red maple finishes and before the oaks push out leaves. In the Appalachians,
            this timing coincided with the spring shad run, when anadromous fish push up
            rivers from the coast. People learning the land used the flowering tree to know
            when the shad had arrived, which is why <em>Amelanchier</em> goes by shadbush
            and shadblow across much of its range. The flowers appear on bare branches,
            making the tree visible from a distance in early spring before any competing
            deciduous canopy has leafed out.
          </p>
          <p>
            The five petals are narrow and strap-shaped, slightly reflexed, with a gap
            between each one &mdash; unlike apple or cherry blossoms, which have rounded
            overlapping petals. Each flower is about half an inch across and hangs loosely
            off a central stem in a cluster of 4 to 10 flowers. The clusters emerge from
            the ends of the previous year&apos;s growth. Where serviceberry lines a woodland
            edge or trail in April, the white clusters stand out against the brown and gray
            background of not-yet-leafed hardwoods.
          </p>
          <p>
            Outside of bloom, serviceberry is easiest to identify in winter by its smooth
            gray bark and growth form. Young stems are smooth and gray, sometimes marked
            with faint longitudinal stripes. On older trunks the bark develops shallow,
            narrow furrows in a parallel pattern. The tree grows 15 to 25 feet tall, either
            as a single stem or as a multi-stem clump, depending on whether root sprouts
            have been allowed to persist. Native plant nurseries typically carry both forms.
            The clump form is often easier to establish and provides denser nesting structure
            for small birds.
          </p>
          <p>
            Leaves open alongside or shortly after the flowers, emerging bronze or copper-tinted
            before turning green. They are oval to elliptical, 1 to 3 inches long, with fine
            serrations along both margins. Fall color runs from yellow to orange to red, often
            visible in late October before other trees have peaked.
          </p>
        </section>

        <section aria-labelledby="berries-heading">
          <h2 id="berries-heading">The June harvest window &mdash; what happens to 200 berries in three days</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Amelanchier_canadensis_berry.jpg/500px-Amelanchier_canadensis_berry.jpg"
              alt="Clusters of ripe serviceberry berries hanging from leafy branches — round dark-purple fruits the size of blueberries in clusters of four to eight, photographed at the National Botanic Garden in Washington DC"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Amelanchier_arborea_kz02.jpg/960px-Amelanchier_arborea_kz02.jpg'
              }}
            />
            <figcaption>
              Ripe serviceberry fruits (<em>Amelanchier canadensis</em>), National Botanic Garden,
              Washington DC. Berries ripen unevenly across a cluster, starting red and
              darkening to purple-black over 5 to 10 days. Cedar waxwings arrive before
              the full cluster has finished ripening.
              <span className="photo-credit"> Photo: Sesamehoneytart &middot; CC BY-SA 4.0</span>
            </figcaption>
          </figure>
          <p>
            Serviceberry berries ripen in June and early July &mdash; earlier than any other
            native fruiting tree or shrub in the eastern US. Blueberries ripen in July.
            Black cherry ripens in August. Wild grapes ripen in September. Serviceberry
            produces the first soft fruit of the season, arriving during the most
            energy-demanding weeks of the breeding year: when wood thrushes and robins
            are still on nests or feeding fledglings that cannot yet forage for themselves.
          </p>
          <p>
            Cedar waxwings find fruiting serviceberries within days of peak ripeness. They
            arrive in loose flocks of 10 to 30 birds and move through the clusters from the
            outer branches inward, sometimes passing berries from one bird to the next down
            a perched line before swallowing. Baltimore orioles and scarlet tanagers, still
            present in June before southward movement begins, consume berries from the same
            tree. American robins in their second brood period carry serviceberry fruit
            from the tree to nestlings in nearby nests. Wood thrushes nesting through early
            July do the same. Gray catbirds eat the berries from inside the shrub, where
            they frequently nest in dense adjacent vegetation.
          </p>
          <p>
            On a heavily loaded tree, the fruit can be gone within four to seven days of
            reaching full ripeness. A smaller or partially shaded tree may hold fruit for
            two weeks before birds and squirrels have cleaned it. Either way, serviceberry
            is the only native fruiting tree that pushes ripe fruit into June &mdash; no
            other planted species covers that window.
          </p>
        </section>

        <section aria-labelledby="caterpillars-heading">
          <h2 id="caterpillars-heading">Red-spotted Purple, Striped Hairstreak, and the rolled leaf at the twig tip that looks like winter dieback</h2>
          <p>
            Serviceberry hosts more than 100 caterpillar species in Douglas Tallamy&apos;s
            count, drawn largely from butterflies and moths that use the rose family
            (Rosaceae) as larval hosts. Three butterfly species are among them: the
            Red-spotted Purple, Striped Hairstreak, and Spring Azure.
          </p>
          <p>
            The Red-spotted Purple (<em>Limenitis arthemis astyanax</em>) is a Batesian
            mimic of the Pipevine Swallowtail. Pipevine Swallowtails absorb toxic
            aristolochic acids from their larval host plant and are avoided by most birds
            after one encounter. The Red-spotted Purple carries none of that toxicity, but
            it has evolved the same blue-black wings and white marginal spots as the
            Pipevine Swallowtail. Female Red-spotted Purples lay eggs on the tips of
            serviceberry, wild cherry, and wild plum leaves in summer. The hatching
            caterpillar eats from the leaf tip toward the midrib, keeping its frass
            pellets on a silk thread extending from the tip like a short antenna. By late
            summer, the partially grown caterpillar wraps itself tightly in a small section
            of rolled leaf and overwinters at a twig tip &mdash; a structure called a
            hibernaculum. The hibernaculum is the size of a grain of rice, brown, and rolled
            tight at the node. It is nearly indistinguishable from dead tissue or a wind-tattered
            leaf fragment caught on the bark.
          </p>
          <p>
            Serviceberry pruned in October, November, February, or March will have several
            of these hibernacula on the cut twigs. The caterpillars inside are alive and
            resume feeding in April when temperatures rise above 50&deg;F. If pruning is
            required, cutting back to a larger branch junction rather than trimming individual
            twig ends leaves most hibernacula on the unpruned wood still attached to the tree.
          </p>
          <p>
            Striped Hairstreak adults lay eggs on serviceberry bark in summer; the caterpillars
            hatch in spring and feed on the new flower clusters and unfolding leaves. Spring
            Azure caterpillars feed on serviceberry flower clusters in April, completing
            development before the bloom ends. Both species depend on serviceberry early in
            the season, when the tree is one of the few leafed-out hosts in the understory.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>A serviceberry planted this spring, or moved from shade to light</h2>
          <ol className="step-list">
            <li>
              <strong>Plant in partial shade or full sun &mdash; serviceberry flowers and
              fruits in both.</strong>{' '}
              It tolerates more shade than most fruiting trees, making it useful at a
              canopy edge, along a north-facing fence, or under a high open canopy where
              a crabapple or cherry would not set fruit reliably. In full sun it produces
              the largest berry crop. In part shade, the June fruit window extends a few
              days, since ripening slows slightly in lower light.
            </li>
            <li>
              <strong>Allow multi-stem root sprouts if they appear at the base.</strong>{' '}
              Serviceberry spreads by root suckering, and a clump of 3 to 5 stems provides
              denser nesting structure for catbirds, yellow warblers, and song sparrows
              than a single-stemmed tree of the same height. Clumps also recover from deer
              browse faster; the multiple stems distribute the growth load. Native plant
              nurseries sell pre-formed clumps; these establish more quickly than a
              single-stemmed transplant.
            </li>
            <li>
              <strong>Before pruning twig tips in fall or late winter, scan them for small
              brown leaf rolls the size of a grain of rice.</strong>{' '}
              Those are Red-spotted Purple hibernacula. Cut back to a larger branch junction
              rather than trimming individual twig ends if you find them. The caterpillar
              inside will emerge in April and develop into a butterfly by June.
            </li>
            <li>
              <strong>Plant near your existing bird-feeding station or birdbath.</strong>{' '}
              Cedar waxwings and robins track a yard&apos;s food geography and move between
              fruiting trees and known feeding and water sites. A serviceberry planted within
              30 to 50 feet of an active feeding station is found more quickly in June than
              one isolated at the back of the property. The birds already use the space;
              adding the fruit tree connects it into a circuit they already fly.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who arrives at a serviceberry from April through July</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cedar-waxwing')}>
                Cedar Waxwing
              </button>{' '}
              &mdash; the first flock to find ripe serviceberry each June; arrives in
              groups of 10 to 30 and strips loaded branches in a single visit, sometimes
              passing berries beak-to-beak down a line of perched birds before swallowing
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('baltimore-oriole')}>
                Baltimore Oriole
              </button>{' '}
              &mdash; arrives from Central America in early May and hunts insects in the
              serviceberry canopy; shifts to the June berries before moving on to black
              cherry in August; nests in tall deciduous trees within 100 to 200 feet
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('ruby-throated-hummingbird')}>
                Ruby-throated Hummingbird
              </button>{' '}
              &mdash; visits serviceberry flowers in April shortly after arriving from
              migration; probes the flower clusters for nectar and gleans small insects
              from the blooms; one of the earliest native flowering trees available after
              the hummingbird&apos;s return in late April
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-robin')}>
                American Robin
              </button>{' '}
              &mdash; in June, carries serviceberry berries from the fruiting tree to
              nestlings in nearby nests; the second brood of the season hatches in late
              June, during peak serviceberry ripening, and the parents make repeated
              berry-delivery trips throughout the day
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wood-thrush')}>
                Wood Thrush
              </button>{' '}
              &mdash; nests through early July and uses serviceberry berries as supplemental
              food for nestlings during peak ripening; a breeding pair within 200 feet of a
              fruiting serviceberry visits it daily through the June fruit window
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('black-cherry')}>
                Black Cherry
              </button>{' '}
              &mdash; serviceberry finishes fruiting in July as black cherry begins turning
              red; the birds that stripped the serviceberry in June &mdash; cedar waxwings,
              orioles, wood thrushes &mdash; return to the same yard in August for the cherry
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
