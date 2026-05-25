import type { Page } from '../App'

interface MarylandSennaProps {
  onNavigate: (page: Page) => void
}

export default function MarylandSenna({ onNavigate }: MarylandSennaProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/23161488/large.jpeg"
          alt="Maryland Senna (Senna marilandica) in full bloom — clusters of five-petaled yellow flowers on tall compound-leafed stems, Michigan, August"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/24375937/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: jkurtz&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/23161488" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>The Cloudless Sulphur caterpillar feeding on Maryland Senna leaves is green. Move it to the flower clusters and it turns yellow — the same caterpillar, the same plant, within a week of changing what it eats.</h1>
        <p className="hero__lead">
          Maryland Senna (<em>Senna marilandica</em>) is a native perennial legume that grows
          four to six feet tall in full sun across the southeastern and mid-Atlantic United States.
          It blooms from July into August with clusters of five-petaled yellow flowers on tall,
          compound-leafed stems. Cloudless Sulphur, Sleepy Orange, and Little Yellow caterpillars
          develop on the leaves. In the Southeast, where Cloudless Sulphur populations are largest
          and the northward migration begins earliest each spring, Maryland Senna is often the
          first Senna species available at local native plant sales.
        </p>
        <p className="hero__lead">
          Maryland Senna and Wild Senna (<em>Senna hebecarpa</em>) share the same butterflies
          and the same July bloom period. Maryland Senna extends further south — into Georgia,
          Alabama, and Arkansas — where Wild Senna does not reach. It grows naturally in both
          moist stream corridors and dry upland woods. A Cloudless Sulphur female evaluating
          host plant material with her tarsal chemoreceptors cannot distinguish between the
          two species — she lays on whichever Senna is present.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="eggs-heading">
          <h2 id="eggs-heading">A Cloudless Sulphur female walks each leaflet with her front feet before she lays — one egg per leaflet, then a different plant for the next</h2>
          <p>
            Cloudless Sulphur females locate host plants using chemoreceptors in their tarsi —
            they walk across a leaflet surface and taste the chemistry before committing to lay.
            A female carrying a full clutch does not deposit it on a single plant. She lays one
            egg on one leaflet, then flies to a different Maryland Senna stem — often a different
            individual plant — and lays the next. A clutch distributed across eight to twelve
            plants represents a different survival outcome than concentrating all eggs on one
            stem: if one plant is browsed or treated with insecticide, the rest of the clutch
            is unaffected.
          </p>
          <p>
            The egg is a single white, ribbed oval attached to the upper leaflet surface.
            It hatches within four to five days. The caterpillar that emerges feeds on the
            leaflet it was laid on, then moves up the stem as it grows. By its third instar,
            it has enough mobility to track what is currently available — leaves on the lower
            stem, flower clusters at the tips, and developing seed pods after the petals drop.
          </p>
          <p>
            Sleepy Orange females use Maryland Senna in the central and southern portions of
            the range, laying on younger leaflets in late summer. Little Yellow caterpillars
            use it alongside <em>Chamaecrista</em> species. A patch of five Maryland Senna
            plants in full summer growth can support caterpillars from all three butterfly
            species simultaneously — on separate leaflets on separate stems, rarely in
            contact with each other.
          </p>
        </section>

        <section aria-labelledby="color-heading">
          <h2 id="color-heading">Green on the leaves, yellow on the flowers — the caterpillar's color shifts with each change in diet over the same week</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/311393261/large.jpg"
              alt="Maryland Senna (Senna marilandica) compound leaves and yellow flower clusters on a tall stem, Hoosier National Forest, Indiana, August"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/113841175/large.jpg'
              }}
            />
            <figcaption>
              Maryland Senna flower clusters in August. The pinnately compound leaves have
              six to eight pairs of leaflets — slightly fewer than Wild Senna's eight to ten.
              Cloudless Sulphur caterpillars blend with both the leaves and the flowers
              depending on their current feeding position on the stem.
              <span className="photo-credit"> CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            The Cloudless Sulphur caterpillar incorporates pigments from whatever plant tissue
            it currently digests. When feeding on Maryland Senna leaves, chlorophyll and
            carotenoid compounds in the leaf tissue produce a green body with a yellow lateral
            stripe. When the caterpillar moves to the flower clusters and eats petals and sepals,
            the higher concentration of yellow carotenoids in floral tissue shifts the body
            color toward yellow. The change happens gradually across two to five molts and is
            reversible — a yellow caterpillar returned to leaf feeding will shade back toward
            green over subsequent instars.
          </p>
          <p>
            Green caterpillars rest along the midrib of a compound leaflet during the day.
            Their outline is broken by the leaflet shape and their color matches the background.
            Yellow caterpillars rest against the flower clusters at the stem tips. Both
            positions reduce contrast against the immediate background. In a stand of Maryland
            Senna in late July, both color phases may be present simultaneously — different
            caterpillars at different developmental stages, each positioned against the plant
            tissue that matches its current body color.
          </p>
          <p>
            After pupation, the chrysalis also varies: green when formed in leafy vegetation,
            yellow-brown when formed against bare stems or woody material. A caterpillar that
            developed a yellow body while eating flowers may form a green chrysalis if it
            descends the stem to pupate in lower vegetation. Color at each stage reflects
            the immediate surroundings rather than a fixed developmental sequence.
          </p>
        </section>

        <section aria-labelledby="rootcrown-heading">
          <h2 id="rootcrown-heading">The root crown survives frost and returns each spring, sending up more stems each year — the same planting that hosts caterpillars this July will host them in July a decade from now</h2>
          <p>
            Maryland Senna is a perennial. The above-ground stems die after the first hard frost,
            but the root crown overwinters and pushes new growth each spring. A transplant in
            year one produces a single stem or a few. By year five, the crown has spread to
            send up eight to fifteen stems in summer growth — enough leaf surface for a Cloudless
            Sulphur female to distribute a full clutch across one planting.
          </p>
          <p>
            As a legume, Maryland Senna fixes nitrogen through a partnership with <em>Rhizobium</em>
            bacteria in root nodules. A planting in compacted or nitrogen-poor soil improves
            nitrogen content in the surrounding ground each season as root nodule material
            decomposes. No supplemental fertilization is needed. In very rich soil, the plant
            may push extra leaf growth at the expense of flower production.
          </p>
          <p>
            The seed pods mature on standing stems in September and split open through October.
            Song Sparrows and Dark-Eyed Juncos pick up fallen seeds from the ground below
            through late fall. Cut the old stems to the ground in late February or early March,
            before new growth pushes from the crown base. Cutting in autumn removes the seed
            resource before most birds have finished using it.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant Maryland Senna in a patch of three or more — a Cloudless Sulphur female needs enough stems to distribute her eggs without loading a single plant</h2>
          <ol className="step-list">
            <li>
              <strong>Start with three to five plants, not one.</strong>{' '}
              A Cloudless Sulphur female distributes her clutch across multiple stems.
              A single plant supports a few caterpillars, but a patch of three to five
              provides enough leaf surface for the number of eggs a visiting female lays.
              Space plants two to three feet apart in full sun — the colony fills in over
              three to four years as the root crowns expand.
            </li>
            <li>
              <strong>Use nursery transplants, not seed.</strong>{' '}
              Maryland Senna seed requires cold stratification and produces slow first-year
              plants that fail to compete with established vegetation. Transplants from a
              native plant nursery or native plant sale establish in one season and flower
              in year two. Look for it as Maryland Senna or <em>Senna marilandica</em> —
              not Wild Senna or American Senna, which are different species.
            </li>
            <li>
              <strong>Leave the stems through winter.</strong>{' '}
              Seed pods mature on standing stems through October and drop seeds below the
              plant through December. Song Sparrows and Dark-Eyed Juncos use the ground
              below through late fall and early winter. Cut old stems to the ground in
              late February, before new growth emerges from the crown base. Cutting in
              fall removes the seed resource before birds have finished using it.
            </li>
            <li>
              <strong>Do not apply insecticide on or near the foliage from June through September.</strong>{' '}
              Cloudless Sulphur caterpillars develop on Maryland Senna from June through
              late September. Sleepy Orange and Little Yellow caterpillars may be present
              from July through September. A contact spray or a systemic insecticide
              absorbed through the roots eliminates caterpillar development on that plant
              for the rest of the season. If pest treatment is scheduled, confirm whether
              the spray zone reaches the Maryland Senna before treatment.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Cloudless Sulphur, Sleepy Orange, Little Yellow — three sulphurs whose caterpillars develop on Senna leaves, and the companion legumes that hold them from May through September</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cloudless-sulphur')}>
                Cloudless Sulphur
              </button>{' '}
              &mdash; lays one egg per leaflet and distributes a clutch across multiple plants;
              the caterpillar's color shifts from green to yellow depending on whether it is
              currently eating leaves or flowers; the adults that emerge from Maryland Senna
              caterpillars in August are the same individuals moving south in September
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('sleepy-orange')}>
                Sleepy Orange
              </button>{' '}
              &mdash; uses Maryland Senna in the central and southern parts of its range,
              laying on younger leaflets from late June through August; a single Maryland
              Senna planting may have both Cloudless Sulphur and Sleepy Orange eggs on
              different leaflets in the same week
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('little-yellow')}>
                Little Yellow
              </button>{' '}
              &mdash; uses Maryland Senna and Partridge Pea alongside related legumes;
              the smallest of the three sulphur species that use Senna; caterpillars
              may be present from June through September in the Southeast, overlapping
              with Cloudless Sulphur and Sleepy Orange on the same patch
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-senna')}>
                Wild Senna
              </button>{' '}
              &mdash; the northern counterpart; extends into the mid-Atlantic and Great Lakes
              states where Maryland Senna is less common; both species bloom in July–August,
              host the same butterfly species, and use the same buzz-pollination mechanism;
              in the overlap zone the two can grow in the same planting
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; the annual legume companion that extends host plant material into dry,
              lean soil where Maryland Senna grows but does not dominate; Partridge Pea
              germinates from seed and fills gaps in the bed; both plants together provide
              larval material for all three sulphur species from May through September
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The caterpillar feeding on Maryland Senna right now in your yard will emerge as a Cloudless Sulphur in three to four weeks, then move south in September.</strong>{' '}
            Plant a patch and leave it in place. Browse companion legumes in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or see all the butterflies that depend on native plants in the{' '}
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
