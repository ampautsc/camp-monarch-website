import type { Page } from '../App'

interface OrangeSulphurProps {
  onNavigate: (page: Page) => void
}

export default function OrangeSulphur({ onNavigate }: OrangeSulphurProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/2457189/large.jpg"
          alt="Orange Sulphur butterfly (Colias eurytheme) male — brilliant orange wings with solid black border, resting on clover with wings open"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/328301729/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Bill Keim&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/2457189" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Orange Sulphur</h1>
        <p className="hero__lead">
          Before 1850, the Orange Sulphur (<em>Colias eurytheme</em>) rarely appeared east
          of the Mississippi River. Then alfalfa farming spread east across North America,
          and the butterfly followed the crop. By 1900 it was recorded from New England
          to Florida. Today it is one of the most common butterflies in the eastern
          United States — a flash of orange in every clover patch, alfalfa field, and
          suburban yard from March to November.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="wings-heading">
          <h2 id="wings-heading">The male's upper wings are solid orange with a sharp black border — a female of the same species may be entirely white</h2>
          <p>
            A male Orange Sulphur has a wingspan of 1.5 to 2.75 inches. His upper wing
            surface is brilliant orange — not yellow, not pale orange, but the orange of
            a ripe persimmon — with a solid black border that runs the full circumference
            of both wings and a small black cell spot near the center of the forewing.
            When he perches with wings open on a warm day, the orange is visible at a
            considerable distance across an open field.
          </p>
          <p>
            Females come in two forms. The orange female looks like the male but with a
            more ragged black border containing yellow-white spots along the inner edge.
            The white female — called the "alba" form — has white upper wings with the
            same black border pattern. Fifteen to thirty percent of females in most
            populations are white. A large white butterfly with a black border landing
            in a clover patch in summer is very likely an alba-form Orange Sulphur,
            not a Cabbage White. The distinction is size — Orange Sulphurs are noticeably
            larger — and the hindwing underside, which in both Orange Sulphur forms shows
            a silver spot in the center surrounded by a brick-red ring. Cabbage Whites
            show no such spot.
          </p>
          <p>
            The male's orange coloration reflects ultraviolet light in a frequency range
            that female compound eyes detect but human eyes do not. Female Orange Sulphurs
            evaluate potential mates in part on the strength of their UV reflectance.
            The Clouded Sulphur (<em>Colias philodice</em>), which is bright yellow on the
            upper surface, reflects UV differently. In the field, the two species fly
            together across most of the eastern United States, and they interbreed freely.
            Some individuals are intermediate — more yellow-orange than either pure form.
            A meadow in August may hold pure orange, pure yellow, and hybrid individuals
            in the same clover patch.
          </p>
        </section>

        <section aria-labelledby="clover-heading">
          <h2 id="clover-heading">She presses her front legs against the leaf to read the chemistry — legume isoflavones confirm the host plant before she lays</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/570675698/large.jpg"
              alt="Orange Sulphur butterfly (Colias eurytheme) nectaring on a flower, wings closed showing the yellow-green underside with the silver dollar spot on the hindwing"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/91355922/large.jpeg'
              }}
            />
            <figcaption>
              Orange Sulphur at rest with wings closed, showing the yellow underside
              and the silver spot ringed in brick-red on the hindwing. When a sulphur
              butterfly lands and folds its wings, this underside view — not the orange
              or yellow upper surface — is usually what you see.
              <span className="photo-credit"> CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            The Orange Sulphur's host plants are legumes — plants in the family Fabaceae.
            Alfalfa (<em>Medicago sativa</em>) is the most heavily-used agricultural host.
            White clover (<em>Trifolium repens</em>), red clover (<em>Trifolium pratense</em>),
            vetches (<em>Vicia</em> spp.), tick trefoils (<em>Desmodium</em> spp.), and
            partridge pea (<em>Chamaecrista fasciculata</em>) are all used where they occur.
            In a yard, white clover mixed into a lawn or grown in a meadow patch is the
            single most reliable way to bring this butterfly in — both as a nectar source
            and as a host plant where females lay eggs.
          </p>
          <p>
            A female Orange Sulphur evaluates host plants using chemoreceptors in her
            front tarsi — the same mechanism used by every butterfly in the family Pieridae.
            When she lands on a plant, she drums her feet against the leaf surface, reading
            the isoflavones and other chemical markers that identify legume family plants.
            When the chemistry matches, she curves her abdomen and places a single pale
            yellow egg on the leaf underside. The egg turns orange before hatching, three
            to five days later.
          </p>
          <p>
            The caterpillar is green with a white lateral stripe — nearly invisible on
            the green clover or alfalfa leaves it feeds on. It completes development in
            two to three weeks and forms a green chrysalis attached to a plant stem.
            The Orange Sulphur produces multiple generations each year: three broods
            across most of the eastern range, four or five in the south. Adults are on
            the wing from April through October in Ohio and Illinois, March through
            November in Tennessee and the Carolinas.
          </p>
          <p>
            The alfalfa connection explains the butterfly's rapid eastward expansion in
            the nineteenth century. Alfalfa, native to Central Asia, arrived in North
            America with Spanish missionaries and spread north and east as agricultural
            technology made large-scale cultivation possible. The Orange Sulphur — which
            had used native prairie legumes across the western plains — recognized alfalfa
            as a host plant and followed. Within fifty years of alfalfa reaching a new
            county, Orange Sulphur populations appeared. The butterfly's current abundance
            across the midwest and east is not ancient — it is an adaptation, completed
            in living historical memory, to a plant humans introduced.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant white clover in the lawn — it costs almost nothing, and this butterfly will find it</h2>
          <ol className="step-list">
            <li>
              <strong>Mix white clover into part of the lawn or a sunny meadow patch.</strong>{' '}
              White clover (<em>Trifolium repens</em>) grows six to eight inches tall,
              fixes nitrogen in the soil, stays green through drought, and serves as both
              a nectar source and a host plant for Orange Sulphur females. A quarter-pound
              of clover seed broadcast into an existing lawn section and lightly raked in
              establishes within one season. The Orange Sulphur will find it.
            </li>
            <li>
              <strong>Add native legumes to a sunny border or meadow patch.</strong>{' '}
              Partridge pea (<em>Chamaecrista fasciculata</em>) is a native annual legume
              that grows knee-high in a sunny border and blooms yellow in July through
              September.{' '}
              <button className="link-button" onClick={() => onNavigate('wild-senna')}>
                Wild Senna
              </button>{' '}
              (<em>Senna hebecarpa</em>) is a perennial that grows four to six feet and
              returns each spring from a long-lived root crown, providing large-leafed
              host plant material for Orange Sulphur females season after season. Wild
              blue indigo (<em>Baptisia australis</em>) is a long-lived perennial used
              by Orange Sulphur and other sulphur species. All three are native to the
              eastern United States and require no fertilizer or watering once established.
            </li>
            <li>
              <strong>Do not spray clover patches with broad-spectrum herbicide.</strong>{' '}
              White clover in a lawn is routinely killed by lawn care services applying
              broadleaf herbicides (2,4-D and related compounds) that specifically target
              legumes and other non-grass plants. A clover section treated with herbicide
              in May removes the host plant material Orange Sulphur females are actively
              searching for through June and July. If you are managing a clover patch
              for pollinators and butterflies, mark it as excluded from herbicide
              treatment, or see{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticide Guide
              </button>{' '}
              for the case on selective vs. broadcast chemical management.
            </li>
            <li>
              <strong>Leave an alfalfa or clover field edge unmowed through August.</strong>{' '}
              When alfalfa is cut, adult Orange Sulphurs move to adjacent habitats en masse.
              A garden or meadow border adjacent to a farm field becomes a temporary refuge
              for displaced adults. A flowering border left standing through mid-August
              serves both the resident population and the field-edge emigration flush.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">In clover patches and open meadows from spring to fall — who else flies and feeds alongside the Orange Sulphur</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cloudless-sulphur')}>
                Cloudless Sulphur
              </button>{' '}
              &mdash; a larger all-yellow sulphur (wingspan up to 3 inches) that migrates
              south in enormous numbers each fall; the Cloudless Sulphur breeds on native
              sennas in the south and midwest and is a common visitor to suburban gardens
              in August and September; unlike the Orange Sulphur, it does not hybridize
              with Clouded or Orange Sulphurs and its host plants are senna rather than
              alfalfa or clover
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cabbage-white')}>
                Cabbage White
              </button>{' '}
              &mdash; the introduced European butterfly that shares open fields and
              garden edges with the Orange Sulphur year-round; the Cabbage White is
              smaller and white (not orange or yellow), and it uses mustard-family
              plants rather than legumes; the two species are the most commonly
              seen butterflies in most eastern American suburbs and can be found
              nectaring at the same flowers simultaneously
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; a native annual legume that blooms yellow in late summer in
              disturbed open ground, prairie borders, and sandy meadows; Orange Sulphurs
              and Cloudless Sulphurs both use Partridge Pea as a host plant, and its
              small yellow flowers serve as nectaring plants for both species as well
              as for native bees; it self-seeds readily once established
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; the most common native bumble bee visitor to clover and legume
              blooms; American Bumble Bees and Orange Sulphurs share the same clover
              patches and often nectar at the same flower heads simultaneously; planting
              clover for Orange Sulphurs directly benefits bumble bees and vice versa
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('pearl-crescent')}>
                Pearl Crescent
              </button>{' '}
              &mdash; a small orange-and-brown butterfly that flies the same open meadows
              and field edges as the Orange Sulphur from April through October; while
              the Orange Sulphur is a sulphur (family Pieridae) and the Pearl Crescent
              is a crescent (family Nymphalidae), both are common suburban visitors that
              benefit from unmowed or late-mowed meadow patches
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Plant white clover. Leave it unsprayed.</strong>{' '}
            One decision turns a yard into a working host plant site for one of the most
            common butterflies in North America. Browse native legumes and meadow plants
            in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or see the full butterfly collection in the{' '}
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
