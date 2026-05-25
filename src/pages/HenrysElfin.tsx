import type { Page } from '../App'

interface HenrysElfinProps {
  onNavigate: (page: Page) => void
}

export default function HenrysElfin({ onNavigate }: HenrysElfinProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/134683058/large.jpg"
          alt="Adult Henry's Elfin perched on a twig with wings held open, showing the dark chocolate-brown dorsal surface of the forewings and the scalloped hindwing edge with white-tipped scales forming a frosted fringe, photographed in early April"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/201008768/large.jpeg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Neal Kelso&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/photos/134683058" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies &amp; Skippers</div>
        <h1>Henry&apos;s Elfin adults are on the wing for three weeks in late March and April &mdash; and then gone for eleven months while the species waits as a pupa in the leaf litter at the base of a redbud tree</h1>
        <p className="hero__lead">
          Henry&apos;s Elfin (<em>Callophrys henrici</em>) is a small hairstreak butterfly with a
          wingspan of 2.5 to 3 centimeters. The dorsal wing surface is dark chocolate brown with
          a pale grayish patch near the hindwing margin. The hindwing underside has a mosaic of
          brown and rust tones, with a scalloped outer edge bordered by white-tipped scales that
          give the wing its frosted appearance &mdash; the feature that names this group
          &ldquo;elfins.&rdquo; Adults fly in a single annual brood from mid-March through
          mid-April in the mid-Atlantic states, earlier in the Southeast, later in New England.
        </p>
        <p className="hero__lead">
          The larval host plant is Eastern Redbud (<em>Cercis canadensis</em>) across most of its
          range, with additional records from American holly (<em>Ilex opaca</em>) in coastal
          areas and blueberry (<em>Vaccinium</em>) in parts of New England. The caterpillar
          eats only the flowers and developing seed pods &mdash; not the leaves. This restricts
          the adult&apos;s flight window to the narrow weeks when redbud flowers are available,
          which is why Henry&apos;s Elfin is on the wing before most people start looking
          for butterflies.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="pupa-heading">
          <h2 id="pupa-heading">Eleven months in the leaf layer at the base of a redbud tree &mdash; the pupa that formed in May does not eclose until the following March</h2>
          <p>
            After completing the larval stage on redbud flowers and pods in April and early May,
            the final-instar caterpillar drops from the tree. It pupates in accumulated leaf litter
            within a few feet of the host tree trunk. The pupa is small, dark brown, and
            camouflaged in the leaf debris. It enters diapause and remains dormant through
            summer, fall, and winter.
          </p>
          <p>
            That represents approximately eleven months of the twelve-month year spent as a
            pupa. The adult stage &mdash; from eclosion in late March to the end of the flight
            period in mid-April &mdash; lasts about three weeks. This compressed adult life
            requires that suitable flower nectar be available immediately upon eclosion.
            Redbud, blueberry, and willow flowers that open in the same narrow March window
            are the primary adult nectar sources.
          </p>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/134683081/large.jpg"
              alt="Henry's Elfin adult with wings partially closed, showing the brown and rust-toned ventral hindwing surface with the distinctive white-tipped scalloped outer edge"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/134683058/large.jpg'
              }}
            />
            <figcaption>
              The ventral hindwing shows the scalloped outer edge with white-tipped scales &mdash;
              the feature that names the &ldquo;elfin&rdquo; group. Henry&apos;s Elfin adults
              are present for about three weeks per year. By May, there are no adults alive
              anywhere in the range.
              <span className="photo-credit"> Photo: Neal Kelso&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/photos/134683081" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
              </span>
            </figcaption>
          </figure>
          <p>
            The leaf litter layer at the base of a redbud tree is not empty substrate from May
            through March. Raking and removing that layer in October removes the pupa. The
            redbud remains in the yard. The butterfly that depends on its flowers does not
            return the following spring.
          </p>
        </section>

        <section aria-labelledby="egg-laying-heading">
          <h2 id="egg-laying-heading">The female deposits eggs inside open flower clusters in late March &mdash; one egg pressed against the interior of a partially open flower, nearly invisible among the petals</h2>
          <p>
            Male Henry&apos;s Elfin adults perch in the upper canopy of redbud trees during the
            flight period and launch short chases at passing insects, returning to the same perch
            spot. Females fly more slowly through the canopy, pausing at each flower cluster and
            testing the flowers before depositing eggs.
          </p>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/201008768/large.jpeg"
              alt="Henry's Elfin adult perched with wings open on bare bark in early spring, showing the full warm-brown dorsal surface, surrounded by the leafless branches of an early April woodland"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/134683058/large.jpg'
              }}
            />
            <figcaption>
              Henry&apos;s Elfin adult in the field in early April. By the time the trees
              around it are fully leafed, this individual will be dead. The species continues
              as a pupa in the leaf litter beneath the redbud, eleven months from now.
              <span className="photo-credit"> Photo: Nathaniel Sharp&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/photos/201008768" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
              </span>
            </figcaption>
          </figure>
          <p>
            The egg is pale green and adheres to the base of the petals near the nectary.
            It hatches in 5 to 7 days. The first-instar caterpillar enters a partially open
            flower and feeds from within the cluster. Early instars consume flower petals and
            stamens. Later instars shift to the developing seed pods as flowers drop in
            early May. The caterpillar&apos;s pale green coloring matches the pod surface
            closely enough that it is difficult to see from the ground.
          </p>
          <p>
            The full caterpillar development &mdash; from hatching to final instar &mdash;
            takes approximately 3 to 4 weeks, completing before the redbud is fully leafed
            out. By the time redbud leaves have reached full size in mid-May, no
            Henry&apos;s Elfin caterpillars remain on the tree.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three things a homeowner can do if a redbud is present</h2>
          <ol className="step-list">
            <li>
              <strong>Leave the leaf layer at the base of the tree from May through March.</strong>{' '}
              The Henry&apos;s Elfin pupa formed in May is present in those leaves for eleven
              months. It is small, brown, and invisible in the accumulated debris. Raking in
              October removes it. Two to three inches of loose leaves accumulated against
              the base of the trunk is enough to maintain the overwintering site through
              freeze and thaw cycles.
            </li>
            <li>
              <strong>Do not apply any insecticide to the redbud in March, April, or May.</strong>{' '}
              Henry&apos;s Elfin caterpillars feed on the flower clusters and pods during this
              window. Contact insecticides applied to the flowers kill the caterpillar directly.
              Systemic insecticides absorbed through the bark and transported to flower tissue
              have the same effect. Native bees foraging on the redbud in the same window
              are also affected by both contact and systemic treatments.
            </li>
            <li>
              <strong>Watch the redbud on warm afternoons in late March and early April.</strong>{' '}
              The adults are small &mdash; a 2.5-centimeter butterfly against a tree in full
              bloom disappears quickly. Males perch at the top of the canopy in direct sun
              and chase passing insects in short bursts, returning to the same spot. That
              perch-and-chase pattern is the most reliable way to spot them. Females move
              more slowly through the lower canopy, pausing at flower clusters.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">The redbud, the leaf layer, and the neighbors that share them</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('redbud')}>
                Eastern Redbud
              </button>{' '}
              &mdash; the larval host across most of the range; the caterpillar eats only
              the flowers and developing seed pods; the pupa overwinters in the leaf litter
              beneath the same tree for eleven months before the adult emerges
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spring-azure')}>
                Spring Azure
              </button>{' '}
              &mdash; another early-spring butterfly that flies in the same late-March to
              mid-April window; males perch near redbud flowers in the same woodland-edge
              habitat; Spring Azure caterpillars use dogwood, cherry, and viburnum flowers
              rather than redbud
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('frosted-elfin')}>
                Frosted Elfin
              </button>{' '}
              &mdash; the closest relative in the northeastern United States; also a spring
              elfin, but uses wild lupine and wild blue indigo as larval hosts rather than
              redbud; the two species do not overlap in habitat requirements, though they
              may fly in the same county in the same weeks
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; queen bumblebees forage on redbud flowers at the same time Henry&apos;s
              Elfin females are depositing eggs on those same clusters; both depend on the
              early-season bloom window that redbud provides in late March
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>{' '}
              &mdash; Henry&apos;s Elfin is one of the most concrete cases for leaving
              autumn leaf accumulation in place under trees; the pupa is present for eleven
              of twelve months of every year and is destroyed by disturbance at any point
              from May through March
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
