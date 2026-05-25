import type { Page } from '../App'

interface CloudedSulphurProps {
  onNavigate: (page: Page) => void
}

export default function CloudedSulphur({ onNavigate }: CloudedSulphurProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/40270934/large.jpg"
          alt="Clouded Sulphur butterfly (Colias philodice) — bright yellow wings with soft black border, resting on clover with wings open"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/91177802/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Heather Pickard&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/40270934" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Clouded Sulphur</h1>
        <p className="hero__lead">
          In a clover patch in July, most yellow butterflies are Clouded Sulphurs
          (<em>Colias philodice</em>). The species ranges across every contiguous state
          and all but the far northern provinces of Canada — no other butterfly in
          North America covers more of the continent. It is the yellow one: not orange,
          not pale, but a clean bright yellow visible from across a yard. Some individuals
          are white — the alba form, more common in females. And some are in between,
          because Clouded Sulphurs interbreed freely with Orange Sulphurs where the
          two species overlap, which is nearly everywhere in the eastern United States.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="wings-heading">
          <h2 id="wings-heading">The upper wing surface is chrome yellow — the black border softens inward in a way that suggests cloud rather than hard line</h2>
          <p>
            A male Clouded Sulphur has a wingspan of 1.5 to 2.5 inches. His upper wing
            surface is solid yellow — not the orange-yellow of a male Orange Sulphur
            but a clear, unambiguous yellow. The black border around both wings is
            present, but unlike the sharp-edged border on an Orange Sulphur, it diffuses
            slightly inward, giving the wing an indistinct edge that early naturalists
            described as "clouded." This is where the common name comes from: not
            from the weather, but from the softened margin.
          </p>
          <p>
            On the hindwing underside — the view you get when a sulphur lands and folds
            its wings — a Clouded Sulphur shows a silver spot in the center of the
            hindwing, outlined in a thin pink or lilac ring. An Orange Sulphur's hindwing
            underside shows the same silver spot but surrounded by a heavier brick-red
            ring. The difference in ring color — pink versus brick-red — is one of the
            more reliable field marks between the two species when they perch with wings
            closed, which they usually do.
          </p>
          <p>
            Female Clouded Sulphurs come in two forms. The yellow female looks like
            a slightly paler, more diffusely-bordered male. The alba female is white
            with the same black border — the white replaces the yellow throughout the
            upper wing. About five to ten percent of females in most populations are
            the alba form. An alba Clouded Sulphur is smaller than a Cabbage White,
            with a distinctly softer border. Where it gets complicated is the hybrid zone:
            the offspring of a Clouded Sulphur and an Orange Sulphur are
            yellow-orange intermediates — a color that places them outside the UV
            recognition pattern that either parent species uses to identify conspecific
            mates. Hybrid females, in experimental studies, receive fewer courtship
            attempts from males of either parent species than a pure-form female does.
          </p>
        </section>

        <section aria-labelledby="clover-heading">
          <h2 id="clover-heading">She tastes the leaf with her feet — white clover reads as a host plant within a second of landing</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/301024909/large.jpg"
              alt="Clouded Sulphur butterfly (Colias philodice) with wings folded, showing the yellow-green hindwing underside with the silver spot circled in pink"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/607820910/large.jpg'
              }}
            />
            <figcaption>
              Clouded Sulphur at rest with wings closed, showing the yellow-green
              underside and the pink-rimmed silver spot on the hindwing. The silver
              spot is present on all sulphur species in the genus <em>Colias</em>;
              the ring color — pink here, brick-red on an Orange Sulphur — is the
              distinguishing detail.
              <span className="photo-credit"> CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            The Clouded Sulphur's host plants are legumes. White clover (<em>Trifolium
            repens</em>) is the most-used host across the suburban and agricultural
            range. Red clover (<em>Trifolium pratense</em>), alsike clover (<em>Trifolium
            hybridum</em>), alfalfa (<em>Medicago sativa</em>), vetches (<em>Vicia</em>
            spp.), and crown vetch (<em>Coronilla varia</em>) are all used where they
            grow. In native habitats, wild clovers and tick trefoils (<em>Desmodium</em>
            spp.) serve as hosts. The larval host plant list for Clouded Sulphur
            overlaps almost completely with that of Orange Sulphur — which partly
            explains why the two species hybridize so readily, occupying the same
            patches of the same plants at the same time.
          </p>
          <p>
            A female evaluating a host plant presses her front tarsi against the leaf
            surface and reads the chemistry through contact chemoreceptors. When she
            detects the isoflavones and alkaloids characteristic of legume tissue, she
            accepts the plant and curves her abdomen to lay a single, spindle-shaped
            white egg on the upper leaf surface. The egg yellows over the next two to
            three days before hatching. The caterpillar is green with a pale lateral
            stripe — effectively invisible on clover leaves when sitting still. It feeds
            for two to three weeks and pupates attached to a stem.
          </p>
          <p>
            Three to four broods appear each year across most of the range: first adults
            in April, last adults in October or November. In the northernmost parts of
            the range — Ontario, New England, the northern Great Plains — the last brood
            cannot survive winter. The spring population there is not descended from
            overwintering individuals. It is reinvasion — adults dispersing north each
            year from populations in the south and midwest that maintained themselves
            through the cold months as late-stage caterpillars or fresh chrysalises
            in sheltered sites.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>The yellow butterfly in your clover patch is a Clouded Sulphur — here is what keeps it coming back</h2>
          <ol className="step-list">
            <li>
              <strong>Mix white clover into a section of lawn or a sunny meadow patch.</strong>{' '}
              White clover (<em>Trifolium repens</em>) is the single most reliable addition
              a suburban yard can make for this species. A quarter-pound of seed broadcast
              into an existing lawn section and watered in establishes within one season.
              It fixes nitrogen in the soil, stays green through moderate drought, and
              flowers continuously from May to September — serving as both nectar source
              and host plant simultaneously.
            </li>
            <li>
              <strong>Add native legumes to a sunny border.</strong>{' '}
              Partridge pea (<em>Chamaecrista fasciculata</em>) is a native annual legume
              that establishes from seed in one season in full sun. Wild senna
              (<em>Senna hebecarpa</em>) grows three to five feet and provides large-leafed
              host plant material. Wild blue indigo (<em>Baptisia australis</em>) is a
              long-lived perennial used by several sulphur species and also by the
              Wild Indigo Duskywing skipper. All three require no supplemental watering
              once established in the eastern United States.
            </li>
            <li>
              <strong>Do not spray clover patches with broadleaf herbicide.</strong>{' '}
              Herbicide applications targeting broadleaf plants (including
              common formulations containing 2,4-D) eliminate white clover — the host
              plant female Clouded Sulphurs are actively searching for from May through
              August. A clover patch marked as excluded from chemical treatment costs
              nothing beyond the decision to exclude it. See{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticide Guide
              </button>{' '}
              for specific guidance on managing clover in mixed lawns.
            </li>
            <li>
              <strong>Leave meadow edges and field borders standing through August.</strong>{' '}
              Alfalfa cutting events push adult Clouded Sulphurs out of farm fields and
              into adjacent garden borders en masse. A flowering border left standing
              through mid-August serves as refuge for displaced adults and provides the
              nectar sources — goldenrod, coneflower, clover, and asters — that support
              the late-season brood.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">In clover patches and legume meadows from April to October — who shares the same patch with the Clouded Sulphur</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('orange-sulphur')}>
                Orange Sulphur
              </button>{' '}
              &mdash; the most common co-inhabitant of every clover patch across the
              eastern United States; the Orange Sulphur is orange where the Clouded
              Sulphur is yellow, and the two species hybridize freely — intermediates
              that are yellow-orange rather than either pure form are present in most
              large meadow populations; both use the same host plants and nectar
              sources and can be seen nectaring on the same clover heads at the
              same time
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cabbage-white')}>
                Cabbage White
              </button>{' '}
              &mdash; the introduced European butterfly that shares open fields with
              the Clouded Sulphur from March to November; the Cabbage White is smaller
              and white (not yellow), uses mustard-family plants rather than legumes,
              and shows no silver spot on the hindwing underside; it is often the
              first butterfly on the wing each spring, appearing up to two weeks before
              the first Clouded Sulphur of the year
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; a native annual legume in the pea family that blooms yellow
              from July through September in full sun; female Clouded and Orange
              Sulphurs both use it as a host plant, and the small yellow flowers
              attract native bees, sulphurs, and other butterflies simultaneously;
              it germinates readily from seed in disturbed open ground and self-seeds
              once established
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; the most common native bumble bee visitor to white clover and
              red clover; American Bumble Bees and Clouded Sulphurs share the same
              clover flower heads — the bumble bee foraging for nectar and pollen,
              the sulphur foraging for nectar and evaluating leaf chemistry for
              oviposition; the two species do not compete and the presence of one
              often signals the presence of the other
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('checkered-white')}>
                Checkered White
              </button>{' '}
              &mdash; a white-and-gray butterfly that shares open disturbed ground
              and field edges with the Clouded Sulphur; the Checkered White uses
              mustard-family plants as hosts (different family from the sulphurs'
              legumes), but both species are found together in weedy fields, roadsides,
              and early-succession meadow habitat from April through October
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The yellow butterfly in your yard has been looking for clover.</strong>{' '}
            Plant it this season, leave it unsprayed, and it becomes a host plant site
            for one of the continent's most widespread butterflies. Browse native legumes
            and meadow plants in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or see every butterfly species in the{' '}
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
