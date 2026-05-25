import type { Page } from '../App'

interface PawpawProps {
  onNavigate: (page: Page) => void
}

export default function Pawpaw({ onNavigate }: PawpawProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/592543131/large.jpg"
          alt="Common pawpaw tree (Asimina triloba) with large tropical-looking drooping leaves in summer, Michigan"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/39086864/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: roadside_rambler&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/observations/327103746" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>The Zebra Swallowtail presses her feet to a pawpaw leaf to read the acetogenins in the surface — the same compounds that make this leaf toxic to most insects are the chemical signature she has evolved to detect as confirmation that she has found the right host plant</h1>
        <p className="hero__lead">
          Pawpaw (<em>Asimina triloba</em>) is a small understory tree native to the eastern
          United States and southern Canada. It grows 15 to 20 feet tall in partial shade at
          woodland edges, along stream banks, and in bottomland forests from Nebraska east to
          the Atlantic. The large leaves — up to 12 inches long — droop at the tips on hot
          days and give the tree a tropical appearance that stands out in a yard once you know
          what to look for. The fruit, which ripens in September, is the largest edible fruit
          native to North America: a yellow-green to brown oblong the size of a small mango,
          with creamy white flesh that tastes like a blend of banana and mango custard.
        </p>
        <p className="hero__lead">
          The{' '}
          <button className="link-button" onClick={() => onNavigate('zebra-swallowtail')}>
            Zebra Swallowtail
          </button>
          {' '}(<em>Eurytides marcellus</em>) lays exclusively on pawpaw. No caterpillar of this
          species has ever been documented developing on any other plant. A female checking a
          yard for host plants will fly across every surface, press her feet to each leaf she
          encounters, and leave without laying if she does not find pawpaw. She does not improvise.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="flowers-heading">
          <h2 id="flowers-heading">Dark maroon flowers in April, before the leaves emerge — they produce no nectar and attract carrion flies with a faint fermented odor rather than sweetness</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/373303260/large.jpeg"
              alt="Pawpaw (Asimina triloba) dark maroon flowers on bare branches before leaf emergence, Lower Providence Township, Pennsylvania, April 2024"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/35317495/large.jpeg'
              }}
            />
            <figcaption>
              Pawpaw flowers open on bare branches in April before the leaves emerge.
              Each flower is about an inch across, dark maroon to reddish-brown, and
              produces no nectar. A faint odor — described by observers as slightly
              fermented or like overripe fruit — attracts the small flies and beetles
              that carry pollen between separate trees.
              <span className="photo-credit"> jason310 &middot; CC BY via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            Pawpaw belongs to the Annonaceae — the custard apple family, a mostly tropical group
            that includes soursop, cherimoya, and sugar apple. Pawpaw is the only member of this
            family native to temperate North America. Its flowers reflect the family's tropical
            origin: they are pollinated by flies and small beetles, not by bees. The maroon petals
            and the faint fermented scent mimic the cues that draw carrion flies to a food source
            or egg-laying site. Those flies visit the flowers and carry pollen on their bodies
            between trees.
          </p>
          <p>
            Pawpaw requires cross-pollination between two genetically distinct plants to set fruit.
            A single tree flowers every spring and produces no fruit — the pollen from its own
            flowers cannot fertilize its own ovules. Orchard growers hand-pollinate with a brush
            to ensure fruit set. In a yard planting, the solution is simpler: plant at least two
            different named varieties, within 50 feet of each other, so the flies and beetles that
            visit the flowers of one tree can carry pollen to the other.
          </p>
          <p>
            The flowers open for two to three weeks in April. If a late frost hits during that
            window — which happens in Pennsylvania and Ohio several years per decade — the crop
            fails for that season. A tree that loses its flowers to frost is not damaged. It will
            flower again the following April from the same branches.
          </p>
        </section>

        <section aria-labelledby="acetogenins-heading">
          <h2 id="acetogenins-heading">Acetogenins in the leaf block electron transport in mitochondria — this is why deer pass it, why most insects leave it undamaged, and why the Zebra Swallowtail evolved a receptor in her feet that specifically detects it</h2>
          <p>
            Pawpaw leaves and bark contain annonaceous acetogenins — a class of compounds that
            disrupt the mitochondrial electron transport chain. An insect that ingests enough of
            them cannot generate cellular energy and dies. This makes pawpaw leaves highly
            resistant to insect feeding: a grove in midsummer is typically undamaged while the
            oaks on either side carry caterpillar workings on every branch.
          </p>
          <p>
            Deer are also deterred. Pawpaw foliage is one of the few native trees that deer
            consistently avoid in areas of high deer pressure. A young pawpaw planted in a yard
            with deer will be ignored while the surrounding vegetation is browsed. The deer are
            responding to the same chemistry the Zebra Swallowtail uses to find the plant —
            but the butterfly evolved a different response to the same signal.
          </p>
          <p>
            The Zebra Swallowtail is the exception to pawpaw's insect resistance. Her tarsal
            chemoreceptors — the chemical sensors in her feet — are tuned to the acetogenin
            signature. When she lands on a leaf and walks across the surface, the receptors
            register the acetogenin concentration. If it matches the profile for{' '}
            <em>Asimina</em>, she curves her abdomen and deposits an egg on the underside of
            the leaf. Any other plant, any other leaf chemistry — she lifts off and
            continues searching.
          </p>
          <p>
            The caterpillar that hatches incorporates the acetogenins from the leaf tissue into
            its own body as it feeds. A Zebra Swallowtail caterpillar, chrysalis, or adult that
            has fed on pawpaw carries those compounds — the same mechanism, on a different
            chemical substrate, that makes monarch butterflies distasteful to birds after
            consuming{' '}
            <button className="link-button" onClick={() => onNavigate('common-milkweed')}>
              milkweed
            </button>
            .
          </p>
        </section>

        <section aria-labelledby="fruit-heading">
          <h2 id="fruit-heading">The largest native fruit in North America, recorded by George Washington at Mount Vernon and by Lewis and Clark on the Missouri — it softens within days of peak ripeness and never reached commercial distribution</h2>
          <p>
            The pawpaw fruit is a cluster of two to nine individual berries fused around a central
            stalk, ripening from green to yellow-green to brown-mottled in September. The flesh
            is white to yellow-orange, creamy in texture, and sweet — flavor descriptions
            consistently land near banana and mango with a custard finish. George Washington
            recorded eating pawpaw at Mount Vernon and favored it. Members of the Lewis and Clark
            Expedition ate it on the upper Missouri River and credited it with sustaining the
            party when other food ran low. It is the largest edible fruit native to North America.
          </p>
          <p>
            The fruit does not ship. It softens within two to four days of peak ripeness and
            breaks down quickly at room temperature. This is why it disappeared from markets
            after the introduction of bananas in the late 19th century: a fruit that must be
            eaten within days of harvest cannot compete with a fruit that ships green and ripens
            on the shelf. Pawpaw is sold directly at farmers markets by growers who harvest and
            sell within the same weekend. There is no commercial distribution.
          </p>
          <p>
            In September, the fallen and softening fruit draws{' '}
            <button className="link-button" onClick={() => onNavigate('virginia-opossum')}>
              Virginia Opossums
            </button>
            , raccoons, foxes, and black bears. Wild Turkeys move through pawpaw groves in
            September specifically for the fallen fruit — their scratch marks and tracks are
            visible in the leaf litter under trees with a full crop. The fruit that no grocery
            store carries has been part of the eastern woodland food web since the Pleistocene.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Two named varieties in partial shade — the Zebra Swallowtail needs a grove, and the grove starts with a single tree and five years of root suckers</h2>
          <ol className="step-list">
            <li>
              <strong>Plant two or more named varieties for cross-pollination.</strong>{' '}
              Named pawpaw varieties — Shenandoah, Susquehanna, Allegheny, Mango, and others
              from native plant nurseries — fruit more reliably than seedlings and have
              documented fruit quality. A single tree produces no fruit without pollen from a
              genetically distinct second tree. Plant two or three different named varieties
              within 50 feet of each other. Bareroot stock planted in early spring before
              leafout establishes more reliably than container stock planted in summer.
            </li>
            <li>
              <strong>Site them in partial shade for the first three to five years.</strong>{' '}
              Young pawpaw trees are shade-tolerant and perform poorly in full sun while small
              — leaves scorch, growth stalls, and the tree may die in its first summer. Plant
              under a high canopy or in the dappled shade of a yard edge. Once established,
              with a trunk diameter of one to two inches, the tree tolerates more sun. In a
              yard with no existing shade, a temporary shade frame of burlap for the first
              two summers prevents leaf scorch while the root system establishes.
            </li>
            <li>
              <strong>Leave root suckers in place — they become the grove.</strong>{' '}
              Pawpaw spreads by producing root suckers from the base of established trees.
              Within five to eight years of planting, a single tree typically sends up two to
              five additional stems from the root system. These suckers are the expanding grove
              that a female{' '}
              <button className="link-button" onClick={() => onNavigate('zebra-swallowtail')}>
                Zebra Swallowtail
              </button>
              {' '}searches for when she needs enough leaf surface to distribute her eggs.
              Remove them only if they are growing into a walkway or a foundation.
            </li>
            <li>
              <strong>Apply no insecticide to the foliage from May through September.</strong>{' '}
              Zebra Swallowtail caterpillars develop on pawpaw leaves from May through August.
              First-instar caterpillars are a few millimeters long and pale green against the
              leaf surface — invisible without deliberate search. A contact spray applied for
              any other pest, or a systemic treatment absorbed through the roots, eliminates
              the larval generation on that tree for the season. If pest management is needed
              near the planting, confirm whether the spray zone reaches the pawpaw before
              applying.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who depends on the pawpaw grove — the butterfly that can breed nowhere else and the animals that wait for fruit in September</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('zebra-swallowtail')}>
                Zebra Swallowtail
              </button>{' '}
              &mdash; the only butterfly in eastern North America whose caterpillar develops
              exclusively on pawpaw; the female detects the tree by pressing her feet to the
              leaves and reading the acetogenin signature; a yard without pawpaw will not host
              a breeding population, and a yard with a pawpaw grove will draw females from
              surrounding habitat to lay
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('virginia-opossum')}>
                Virginia Opossum
              </button>{' '}
              &mdash; consumes ripe and fallen pawpaw fruit in September; visits pawpaw groves
              at dusk and into the night when fruit is softening on the ground below the trees
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spicebush-swallowtail')}>
                Spicebush Swallowtail
              </button>{' '}
              &mdash; the other large understory swallowtail of the eastern woodland edge; its
              caterpillar uses{' '}
              <button className="link-button" onClick={() => onNavigate('spicebush')}>
                Spicebush
              </button>
              {' '}rather than pawpaw, but adults of both species share the same understory
              habitat and nectar at the same wildflowers in May and June
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; visits pawpaw flowers for pollen despite the flowers being adapted
              primarily for fly pollination; bumblebees that visit carry pollen on their
              bodies and can contribute to fruit set when fly activity is low; the
              pollen-only reward — no nectar — is a trait the pawpaw shares with{' '}
              <button className="link-button" onClick={() => onNavigate('wild-senna')}>
                Wild Senna
              </button>
              {' '}and other plants pollinated by buzz
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('giant-swallowtail')}>
                Giant Swallowtail
              </button>{' '}
              &mdash; the largest swallowtail in North America; its caterpillar feeds on plants
              in the citrus family rather than on pawpaw, but adults of both Giant and Zebra
              Swallowtails nectar at the same{' '}
              <button className="link-button" onClick={() => onNavigate('purple-coneflower')}>
                Purple Coneflower
              </button>
              {' '}and{' '}
              <button className="link-button" onClick={() => onNavigate('wild-bergamot')}>
                Wild Bergamot
              </button>
              {' '}in the same summer weeks
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Pawpaw at the yard edge, in partial shade, with a second named variety nearby — the grove takes five years to form and the Zebra Swallowtail finds it by foot.</strong>{' '}
            Browse companion understory trees and shrubs in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or see all the butterflies in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            {' '}that depend on a single host plant.
          </p>
        </div>
      </div>
    </>
  )
}
