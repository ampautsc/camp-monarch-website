import type { Page } from '../App'

interface RedbudProps {
  onNavigate: (page: Page) => void
}

export default function Redbud({ onNavigate }: RedbudProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/117997126/large.jpg"
          alt="Eastern Redbud in full bloom — bare branches covered in dense clusters of deep pink-magenta flowers before any leaves have emerged, photographed in early April"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/427629144/large.jpeg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Michael J. Papay&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/photos/117997126" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees &amp; Shrubs</div>
        <h1>Eastern Redbud blooms on bare branches in March &mdash; before a single leaf opens &mdash; and a Henry&apos;s Elfin female deposits her eggs inside those flower clusters while the tree is still leafless</h1>
        <p className="hero__lead">
          Eastern Redbud (<em>Cercis canadensis</em>) is a native understory tree of the eastern
          United States, reaching 20 to 30 feet at maturity. It grows naturally at the edge of
          deciduous forest and along stream banks, tolerating more shade than most flowering trees.
          The root system fixes atmospheric nitrogen through nodules containing <em>Rhizobium</em>{' '}
          bacteria &mdash; a trait shared with other members of the legume family (Fabaceae).
        </p>
        <p className="hero__lead">
          In the eastern United States, Henry&apos;s Elfin (<em>Callophrys henrici</em>) is one
          of the few butterfly species whose caterpillar eats no leaves at all. It feeds exclusively
          on redbud flowers and the developing seed pods. The entire larval stage is over before
          the redbud is fully leafed out. The pupa drops to the leaf litter at the base of the tree
          and remains there for eleven months before the adult emerges the following March.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="bare-branches-heading">
          <h2 id="bare-branches-heading">Flowers open directly from the bark of branches and trunk in March &mdash; two to three weeks before any leaf emerges</h2>
          <p>
            Redbud produces clusters of 4 to 8 pea-shaped flowers that open directly from the
            bark surface of older branches and the main trunk. The flowers are magenta to deep
            pink and appear from late March through mid-April in the mid-Atlantic states, earlier
            in the Deep South, later in southern New England. No leaves are present when the
            flowers open &mdash; the entire tree is bare wood covered in color.
          </p>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/305869688/large.jpg"
              alt="Close view of Eastern Redbud flower clusters emerging directly from the surface of a thick branch — the dark gray bark densely covered in small magenta pea-flowers before any leaves have appeared"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/117997126/large.jpg'
              }}
            />
            <figcaption>
              Redbud flower clusters on old wood. The flowers open directly from the bark surface
              of the trunk and major branches, not only from twig tips. A Henry&apos;s Elfin female
              in flight in late March follows the scent of these flowers and deposits eggs singly
              inside the open clusters.
              <span className="photo-credit"> Photo: Turner Brockman&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/photos/305869688" target="_blank" rel="noopener noreferrer">CC BY-SA via iNaturalist</a>
              </span>
            </figcaption>
          </figure>
          <p>
            The flowers are edible. Cherokee and other Indigenous peoples ate them raw and cooked
            them in corn bread and fritters. The petals have a slightly sweet, faintly acidic
            flavor from oxalic acid in the tissue. No other common eastern native tree produces
            flowers that are both a butterfly larval food source and an edible crop for humans
            at the same time.
          </p>
          <p>
            A Henry&apos;s Elfin female flying in late March detects the flower scent and lands
            on redbud during the open-flower period. She deposits eggs singly inside the flower
            clusters, pressing each egg against the interior of a partially open flower near the
            nectary. The egg is pale green and nearly invisible among the petals. It hatches in
            5 to 7 days. The first-instar caterpillar moves into the interior of the flower cluster
            and begins feeding immediately.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">The caterpillar eats the flowers and seed pods &mdash; never the leaves &mdash; and finishes feeding before the redbud is fully leafed out in May</h2>
          <p>
            Henry&apos;s Elfin caterpillars are pale green with faint cream side stripes and
            a slightly darker dorsal line. The coloring matches the developing redbud seed pod
            closely. A caterpillar resting on the surface of an immature pod in April is
            difficult to see from below.
          </p>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/427629190/large.jpeg"
              alt="Eastern Redbud branches with the first leaves emerging in early spring — small, heart-shaped young leaves unfolding alongside the last remaining flower clusters on older wood"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/427629144/large.jpeg'
              }}
            />
            <figcaption>
              Young redbud leaves emerging alongside the last flower clusters in mid-April.
              Henry&apos;s Elfin caterpillars have been feeding on flowers for two weeks by
              this point and are transitioning to the developing seed pods as the flowers drop.
              <span className="photo-credit"> Photo: Hanfei Zhang&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/photos/427629190" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
              </span>
            </figcaption>
          </figure>
          <p>
            As the flowers drop in late April and early May, the caterpillar shifts to the small
            developing seed pods. Redbud pods are flat, elongated legumes, 2 to 4 inches long
            when mature. The caterpillar feeds on them while they are still young and soft,
            before the seeds harden. By mid-May, when the redbud is fully leafed out, the
            caterpillar has reached its final instar and drops to the ground below the tree.
          </p>
          <p>
            The pupa forms in the leaf litter at the base of the trunk. It is small, dark brown,
            and camouflaged in accumulated leaves. It enters diapause and remains dormant
            through summer, fall, and winter &mdash; approximately eleven months. Adult
            butterflies eclose in late March of the following year, when the next redbud
            bloom opens.
          </p>
        </section>

        <section aria-labelledby="pods-heading">
          <h2 id="pods-heading">Flat brown seed pods hang from bare branches through December &mdash; each one a packet of 6 to 10 seeds that goldfinches, cardinals, and grosbeaks extract through the winter</h2>
          <p>
            Redbud produces seed pods in quantity. A mature tree carries hundreds of pods,
            each containing 6 to 10 small, hard seeds. The pods turn reddish-brown as they dry
            and hang from the branches after leaf drop in October. They persist through November
            and December on bare branches. In years with heavy pod crops, some remain into February.
          </p>
          <p>
            American Goldfinches, Purple Finches, and Rose-breasted Grosbeaks extract seeds from
            redbud pods in winter. Northern Cardinals eat the seeds in late autumn before the
            pods fully dry. The pod-bearing silhouette of a bare redbud in November is
            distinctive enough that birders use it as a foraging marker when other trees
            have dropped their fruit.
          </p>
          <p>
            The combination of early-season flowers for Henry&apos;s Elfin and native bees,
            and late-season pod production for seed-eating birds, makes redbud productive at
            two points in the annual cycle when most ornamental trees are providing nothing.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things a homeowner with a redbud can do before the bloom ends</h2>
          <ol className="step-list">
            <li>
              <strong>Do not prune spent flower clusters in spring.</strong>{' '}
              Henry&apos;s Elfin eggs are deposited inside the open flower clusters in late March.
              The egg and the newly hatched caterpillar are inside the flower at the time
              most spring pruning takes place. Cutting and removing spent flower stems from
              April through early May removes the caterpillars with them.
            </li>
            <li>
              <strong>Leave the leaf litter at the base of the tree from May through March.</strong>{' '}
              The Henry&apos;s Elfin pupa lies in the accumulated leaves beneath the tree for
              eleven months. It is small, brown, and invisible in the leaf layer. Raking in
              October removes it. Two to three inches of loose leaves accumulated against
              the base of the trunk is enough to shelter the pupa through freeze and thaw cycles.
            </li>
            <li>
              <strong>Skip any insecticide on the redbud during the bloom and pod period.</strong>{' '}
              Contact insecticides applied to flowering redbud in March, April, and May kill
              Henry&apos;s Elfin caterpillars while they feed on the flower clusters and
              developing pods. Systemic insecticides transported from bark to flower tissue do
              the same. Native bees foraging on the early-season flowers in the same window
              are also killed by both types of treatment.
            </li>
            <li>
              <strong>If no redbud is present, plant one at the edge of a tree canopy in partial shade.</strong>{' '}
              Redbud is an understory species. It performs poorly in deep shade and in hot,
              exposed full-sun locations in the northern part of its range. It does best planted
              10 to 20 feet from the trunk of a large deciduous tree, in dappled to half-day sun.
              It reaches flowering size in 3 to 5 years from a nursery-size tree.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">What visits the redbud flower, uses the leaf litter, and eats the seed pods</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('henrys-elfin')}>
                Henry&apos;s Elfin
              </button>{' '}
              &mdash; deposits eggs inside redbud flower clusters in late March; the caterpillar
              eats only the flowers and developing seed pods; the pupa overwinters in leaf litter
              at the base of the tree from May through the following March; the adult flies for
              three weeks in early spring and is then absent for eleven months
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; queen bumblebees emerge from winter hibernation in late March and require
              early pollen and nectar; redbud flowers open in the same narrow window and supply
              both before most other bloom is available; a queen that cannot fuel enough
              early-season foraging cannot establish a colony
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('northern-cardinal')}>
                Northern Cardinal
              </button>{' '}
              &mdash; forages on redbud seed pods in late autumn before they fully dry;
              the seeds are available in October and November after acorns have been taken and
              before winter feeders become the primary food source
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('tiger-swallowtail')}>
                Eastern Tiger Swallowtail
              </button>{' '}
              &mdash; adults nectar on redbud flowers in April; males follow woodland edges
              where redbud trees bloom and puddle on nearby bare ground; the Tiger Swallowtail
              caterpillar uses tulip poplar, wild cherry, and ash as larval hosts, not redbud
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>{' '}
              &mdash; Henry&apos;s Elfin is one of several dozen species that overwinter as a
              pupa in the leaf layer; the case for leaving autumn leaf accumulation under trees
              applies directly to redbud, where the pupa is present for eleven months of every year
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
