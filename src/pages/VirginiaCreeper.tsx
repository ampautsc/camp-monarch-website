import type { Page } from '../App'

interface VirginiaCreeperProps {
  onNavigate: (page: Page) => void
}

export default function VirginiaCreeper({ onNavigate }: VirginiaCreeperProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Virginia_Creeper_%28Parthenocissus_quinquefolia%29_8073.jpg/960px-Virginia_Creeper_%28Parthenocissus_quinquefolia%29_8073.jpg"
          alt="Virginia creeper (Parthenocissus quinquefolia) in summer — five palmate leaflets on red-tinged stems climbing a wooden surface, each leaflet 2–4 inches long with serrated margins"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Parthenocissus_quinquefolia%2C_2019-10-26%2C_South_Side_Slopes%2C_01.jpg/960px-Parthenocissus_quinquefolia%2C_2019-10-26%2C_South_Side_Slopes%2C_01.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Virginia creeper climbing, summer foliage &middot; Chris Light &middot; CC BY-SA 4.0
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Vines</div>
        <h1>Virginia creeper grows five leaflets from each stem point — not three like poison ivy — and in October its blue-black berries feed cedar waxwings, American robins, and northern flickers that return to the same vine each year</h1>
        <p className="hero__lead">
          Virginia creeper (<em>Parthenocissus quinquefolia</em>) climbs by tendrils that end in
          small adhesive discs — each disc flattening against a surface and secreting a binding
          compound on contact. The vine does not twine. It does not hook. It does not bore into
          brick, mortar, or wood. A mature Virginia creeper holds itself against a stone wall for
          decades without pulling mortar from the joints or stripping paint from wood siding.
          When the vine is removed, the discs stay on the wall surface; they dissolve over several
          seasons or come off mechanically without damaging the material beneath.
        </p>
        <p className="hero__lead">
          Each leaf carries five leaflets radiating from a single stem point — one center leaflet,
          two on each side, with serrated margins. Poison ivy carries three leaflets from a single
          stem point; Virginia creeper carries five. Both grow as vines or ground covers in woodland
          edges and fence lines, but the count is definitive at a glance. Five means Virginia creeper.
          Three means stop and look before touching. Homeowners who pull Virginia creeper from a fence
          before counting remove the host plant for several native moth species and the berry source
          used by over 35 bird species each fall.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="moths-heading">
          <h2 id="moths-heading">Virginia Creeper Sphinx Moth and Eight-spotted Forester both lay eggs on these leaves in June and July</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Virginia_Creeper_Sphinx_-_Darapsa_myron%2C_Lorton_Workhouse%2C_Lorton%2C_Virginia_%2842905749240%29.jpg/960px-Virginia_Creeper_Sphinx_-_Darapsa_myron%2C_Lorton_Workhouse%2C_Lorton%2C_Virginia_%2842905749240%29.jpg"
              alt="Virginia Creeper Sphinx Moth (Darapsa myron) resting on bark — brown and pink-banded adult moth with wingspan approximately 2.5 inches, at Lorton Workhouse, Lorton, Virginia"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Virginia_Creeper_%28Parthenocissus_quinquefolia%29_8073.jpg/960px-Virginia_Creeper_%28Parthenocissus_quinquefolia%29_8073.jpg'
              }}
            />
            <figcaption>
              Virginia Creeper Sphinx Moth (<em>Darapsa myron</em>), adult resting at Lorton
              Workhouse, Virginia. Adults fly in June and July after dark, hovering at flowers
              with audible wingbeats. The larva is green and hornless, feeding on Virginia
              creeper leaves through August before pupating in the soil.
              <span className="photo-credit"> Photo: Judy Gallagher&nbsp;&middot;&nbsp;CC BY 2.0 via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            The Virginia creeper sphinx moth (<em>Darapsa myron</em>) flies in June and July —
            the same weeks Virginia creeper is pushing its longest new growth of the season.
            The female deposits eggs singly on the undersides of leaves. The caterpillar that
            hatches is bright green with a pale dorsal stripe and no horn at the tail end —
            hornless, unlike the tobacco hornworm or most other sphinx moth caterpillars.
            It feeds on Virginia creeper leaves through August, then descends to loose soil
            below the vine to pupate through winter. The adult sphinx moth emerges the
            following June and flies after dark. It hovers at open flowers like a hummingbird,
            wings beating audibly, drawing nectar with a long proboscis.
          </p>
          <p>
            The eight-spotted forester (<em>Alypia octomaculata</em>) flies in daylight —
            unusual for a moth. Its wings are black with two pairs of white spots, which make
            it look at a distance like a small swallowtail butterfly. The forester lays eggs
            on Virginia creeper and wild grape. The caterpillar feeds from the leaf margin
            inward, leaving scalloped edges where the leaf tissue was removed. Both the sphinx
            moth and the forester are producing the caterpillar biomass that adult birds need
            to feed nestlings — flycatchers, vireos, and warblers carry caterpillars to the
            nest in large numbers across the breeding season, and a vine supporting multiple
            moth species is one of several caterpillar sources in that yard.
          </p>
          <p>
            The Virginia creeper sphinx moth also uses azalea and viburnum as host plants —
            but Virginia creeper is the plant most commonly available at suburban fence lines
            and woodland edges where this moth historically lived. Abbott&apos;s sphinx moth
            (<em>Sphecodina abbottii</em>), another native sphinx, lays eggs on both Virginia
            creeper and wild grape as well. A single vine growing up a fence post or garage
            wall can support larvae of two or three sphinx moth species simultaneously in a
            productive summer.
          </p>
        </section>

        <section aria-labelledby="berries-heading">
          <h2 id="berries-heading">The berries contain a compound that causes mouth irritation in most mammals and is harmless to the birds that eat them</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Virginia_creeper_with_fruit_on_a_grey_wall.jpg/960px-Virginia_creeper_with_fruit_on_a_grey_wall.jpg"
              alt="Virginia creeper (Parthenocissus quinquefolia) with ripe blue-black berries on a grey wall — small round drupes in clusters on red pedicels, leaves turning early autumn orange"
              loading="lazy"
            />
            <figcaption>
              Virginia creeper berries on a grey wall in early autumn. Each berry is 5 to 7&nbsp;mm —
              smaller than a blueberry — and ripens from green to blue-black in September and
              October. The berries contain calcium oxalate raphides that irritate mammalian
              tissue but are harmless to frugivorous birds, which lack the pain receptors those
              crystals activate.
              <span className="photo-credit"> Photo: Balise42&nbsp;&middot;&nbsp;CC BY-SA 4.0 via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Virginia creeper berries ripen in September and October — small, blue-black, and
            carried in loose clusters on red stems. Each berry contains calcium oxalate raphides:
            microscopic needle-like crystals that cause burning and swelling in the mouth and
            throat of most mammals, including humans, cats, and dogs. Birds lack the pain
            receptors that calcium oxalate crystals activate in mammalian tissue. A cedar
            waxwing consuming 40 Virginia creeper berries in an afternoon does not experience
            the irritation that would stop a dog after a few.
          </p>
          <p>
            Cedar waxwings — which eat fruit almost exclusively during summer and fall —
            return to productive Virginia creeper vines each October. A flock of 20 waxwings
            can strip a mature vine of all its ripe berries within a day. American robins,
            northern flickers, yellow-rumped warblers, white-throated sparrows, and hermit
            thrushes also consume the berries. After the berry crop is gone, the vine
            continues to provide cover — dense woody stems and old stem structure — where
            small birds shelter during cold weather and during migration stopover.
          </p>
          <p>
            The berry crop on an undisturbed vine persists into winter. Flickers and robins
            forage frozen Virginia creeper berries on cold January days when other food in
            the yard is scarce. Waxwing flocks in October are often heard before they are
            seen — a high-pitched trilling from the vine that stops when the flock moves on.
            The same flock often returns to the same vine the following October if the berry
            crop is still there.
          </p>
        </section>

        <section aria-labelledby="tendrils-heading">
          <h2 id="tendrils-heading">Adhesive discs grip the wall without drilling into it — the vine turns scarlet in October while it still holds fruit</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Parthenocissus_quinquefolia%2C_2019-10-26%2C_South_Side_Slopes%2C_01.jpg/960px-Parthenocissus_quinquefolia%2C_2019-10-26%2C_South_Side_Slopes%2C_01.jpg"
              alt="Virginia creeper (Parthenocissus quinquefolia) in full autumn scarlet — five-leaflet compound leaves turned deep red on a hillside in Pittsburgh, Pennsylvania, October 26, 2019"
              loading="lazy"
            />
            <figcaption>
              Virginia creeper in peak October color, South Side Slopes, Pittsburgh, Pennsylvania.
              The five-leaflet pattern remains visible even at peak scarlet. Color change begins
              in September in the northern part of the range and progresses south through October.
              The blue-black berries are still present at this stage on productive vines.
              <span className="photo-credit"> Cbaile19&nbsp;&middot;&nbsp;CC0 via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Virginia creeper&apos;s tendrils develop adhesive discs at their tips when they
            contact a surface — a response triggered by touch, not by the material itself.
            The disc flattens and bonds to brick, stone, wood, and concrete through a glue-like
            compound. The bond is strong enough to hold the vine&apos;s weight in wind and rain.
            It does not penetrate the material surface. On intact painted wood or sealed brick,
            the vine does not crack or etch what it climbs. On already-crumbling mortar or
            weathered paint, the discs press into existing crevices but do not create them.
            Twining vines like wisteria or Asian bittersweet build radial pressure as their
            woody stems thicken against a structure; Virginia creeper does not twine and does
            not create that mechanical stress.
          </p>
          <p>
            The autumn color change begins in September and moves through the vine over three
            to four weeks — first orange at the tips of new growth, then red at mid-vine,
            then deep scarlet as temperatures drop. On a fence or wall, a mature vine in
            October color is visible from across the yard. The five-leaflet pattern stays
            readable in the scarlet phase, which is when many visitors first notice the vine
            is not poison ivy. Leaves drop in November. The woody stems and adhesive tendrils
            remain attached to the wall through winter, holding the structure for birds
            and for the following season&apos;s growth.
          </p>
          <p>
            Virginia creeper grows in sun, part shade, and full shade — one of the few native
            plants that produces substantial wildlife value across the entire light gradient.
            In a shaded yard where most native plants struggle, Virginia creeper growing up a
            fence or tree trunk carries caterpillars in June and berries in October without
            requiring full sun or amended soil. It tolerates dry, rocky, and clay-heavy
            conditions once established, and spreads slowly by runners at the base when the
            vine is growing in good conditions.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Leave the existing vine, plant one at a fence post, count five leaflets before pulling anything</h2>
          <ol className="step-list">
            <li>
              <strong>If Virginia creeper is already growing on a fence, wall, or tree trunk — leave it.</strong>{' '}
              A vine that has been on the same structure for three or more years is already
              producing caterpillar habitat in June and a berry crop in October. Cutting it
              at the base removes both. The adhesive discs that remain on the wall after
              removal can be taken off with a stiff brush; they do not damage intact surfaces.
              If the vine is growing where you genuinely need it removed, cut the base stem
              and let the attached sections dry and detach over the following season rather
              than pulling — pulling an established vine can take sections of weathered mortar
              with it.
            </li>
            <li>
              <strong>Plant Virginia creeper at a fence post, large rock, or tree stump.</strong>{' '}
              Virginia creeper does not need rich soil. It grows in clay, sand, rocky
              woodland edges, and the dry shade at the base of large trees where most
              ornamental plants fail. Container plants are available at native plant
              nurseries in spring and fall. One plant at the base of a fence post will
              begin climbing in the first season. In 3 to 4 years without irrigation,
              it can cover 10 to 15&nbsp;feet of horizontal fence or reach 10&nbsp;feet
              up a tree trunk. It tolerates full shade and full sun.
            </li>
            <li>
              <strong>Provide a vertical structure — the vine only produces berries the birds can reach when it climbs.</strong>{' '}
              Virginia creeper&apos;s adhesive tendrils grip vertical surfaces. A vine growing
              flat along the ground never reaches the height where its berry clusters are
              visible to migrating birds. Even a single 6-foot fence section or a wooden
              post creates the vertical structure the tendrils need to begin climbing.
              A trellis, a split-rail fence, a stone wall, or the trunk of a large tree
              all work. The vine does not require training or tying — the discs find the
              surface on their own within the first growing season.
            </li>
            <li>
              <strong>Count leaflets before pulling any vine at a woodland edge or fence line.</strong>{' '}
              Virginia creeper and poison ivy grow in the same habitats — shaded fence lines,
              the base of trees, and woodland edges — and both can appear as climbing vines or
              low ground cover. At any point in the season, count the leaflets at the base
              of the leaf where they meet the stem: three leaflets means stop; five means
              Virginia creeper. In late summer and fall, Virginia creeper turns orange and
              scarlet; poison ivy turns yellow to orange-red. Color alone does not separate
              them. Leaflet count does.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who shares the vine across the growing season — moths in June, birds from October through January</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cedar-waxwing')}>
                Cedar Waxwing
              </button>{' '}
              &mdash; returns to productive Virginia creeper vines each October and strips
              the berry crop within a day or two; waxwing flocks track reliable fruit sources
              across years and return to the same locations
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-robin')}>
                American Robin
              </button>{' '}
              &mdash; eats the berries during fall migration and in winter; robins forage
              frozen Virginia creeper clusters on bare stems after leaf drop, when the vine
              is one of the few persistent fruit sources in a residential yard
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('yellow-rumped-warbler')}>
                Yellow-rumped Warbler
              </button>{' '}
              &mdash; one of the few warblers that eats berries; yellow-rumped warblers
              consume Virginia creeper fruit during their southward migration in September
              and October, often in mixed flocks with other fruit-eating species
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('northern-flicker')}>
                Northern Flicker
              </button>{' '}
              &mdash; forages Virginia creeper berries in late fall and winter; flickers eat
              a wide range of fruit and berries in addition to ants, and often work the vine
              in January when other food is limited
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cecropia-moth')}>
                Cecropia Moth
              </button>{' '}
              &mdash; also uses Virginia creeper as one of several host plants; the female
              lays eggs on the leaves in late May and June, the same weeks the Virginia
              creeper sphinx moth is ovipositing on the same vine
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
