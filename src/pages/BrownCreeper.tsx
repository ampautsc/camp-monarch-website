import type { Page } from '../App'

interface BrownCreeperProps {
  onNavigate: (page: Page) => void
}

export default function BrownCreeper({ onNavigate }: BrownCreeperProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Certhia_americana_CT2.jpg/960px-Certhia_americana_CT2.jpg"
          alt="Brown Creeper pressed flat against a tree trunk, decurved bill inserted into a bark crevice — camouflage so complete the bird is nearly invisible until it moves"
          className="species-hero-image"
          style={{ objectPosition: 'center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: i_got_the_fever&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Certhia_americana_CT2.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Brown Creeper</h1>
        <p className="hero__lead">
          The Brown Creeper presses itself flat against a tree trunk and spirals
          upward in a tight helix, probing bark crevices with a bill curved like
          a surgeon&apos;s needle. Most people standing ten feet away see only the bark.
          The bird is already there — has been for minutes — methodically reading
          every fissure on its one-way trip to the canopy.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="spiral-heading">
          <h2 id="spiral-heading">One direction, one tree at a time</h2>
          <p>
            The Brown Creeper (<em>Certhia americana</em>) is a 5.5-inch bird
            the color of tree bark — brown above, streaked pale, with a
            white underside and a rufous tail it uses as a prop against the
            trunk. The bill curves down and inward, shaped to fit bark crevices
            that a straight bill cannot reach.
          </p>
          <p>
            Its foraging method is fixed: start at the base of a trunk,
            spiral upward in a continuous helix, cover every inch of vertical
            surface, stop at the canopy, then drop to the base of the next
            tree and start again. It never descends the trunk it just climbed.
            The bark on the way down is no different from the bark on the way
            up, but the Brown Creeper does not read it twice. Each tree is a
            single upward transaction.
          </p>
          <p>
            A yard with three mature oaks is three separate spiraling
            investigations. A yard with twenty young Norway maples, whose smooth
            bark carries few invertebrates and whose shallow crevices offer the
            decurved bill nothing to probe, is a yard the Brown Creeper crosses
            without landing.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">40% gone: the bark specialist loses its substrate</h2>
          <p>
            The North American Breeding Bird Survey has tracked Brown Creeper
            populations since 1966. Across its range, the species has declined
            by roughly 40%. The declines are steepest in landscapes where
            large, old trees have been removed and where dead standing wood —
            snags — is treated as hazard rather than habitat.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/Brown-creeper-052.jpg"
              alt="Brown Creeper mid-spiral on a rough-barked trunk, showing the compressed posture and bark-patterned plumage that makes the bird nearly impossible to spot until it moves"
              loading="lazy"
            />
            <figcaption>
              The Brown Creeper nests under a loose flap of bark on a dead or
              dying tree — it requires bark that is separating from the wood
              beneath. A yard where every snag is felled and every dead branch
              removed eliminates this nesting requirement entirely. The same
              bark flaps shelter dozens of overwintering spiders and insect eggs
              the creeper forages in spring.
              <span className="photo-credit"> Photo: USFWS&nbsp;·&nbsp;Public domain via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            The Brown Creeper nests in one specific microhabitat: under a loose
            flap of bark on a dead or dying tree, where the bark has begun to
            separate from the wood beneath and created a pocket large enough to
            conceal a nest cup. No loose bark flap, no nest. A yard or woodlot
            where dead trees are removed as a matter of policy eliminates this
            nesting requirement as completely as if the bird had never been there.
          </p>
          <p>
            The bark texture of living trees determines foraging quality.
            Shagbark hickory, mature oaks, black cherry, and black locust
            develop deeply furrowed, rough-textured bark that accumulates a dense
            community of invertebrates in its crevices — bark beetles, their
            larvae, spiders, spider egg sacs, scale insects, harvestmen, and
            ants. Smooth-barked introduced trees — Norway maple, callery pear,
            London plane — offer negligible bark surface area and few crevices
            to probe. A yard that replaced a shagbark hickory with an ornamental
            pear lost the invertebrate community in both the canopy and the bark
            simultaneously.
          </p>
          <p>
            Invasive vines add another layer of damage. English ivy, Oriental
            bittersweet, and Japanese honeysuckle, when they climb trunks, cover
            the bark surface entirely — sealing the crevices the creeper reads,
            closing the pantry shut. A tree wrapped in ivy to its crown is, to a
            Brown Creeper, not a tree worth investigating.
          </p>
        </section>

        <section aria-labelledby="bill-heading">
          <h2 id="bill-heading">What the decurved bill reaches</h2>
          <p>
            The Brown Creeper probes for food that other species cannot reach the
            same way. The bark crevice — a gap between overlapping bark scales,
            a split in dry outer wood — is the only hiding place in most trees
            that a straight bill cannot efficiently access. The creeper&apos;s bill
            curves downward in its final few millimeters, bending around the lip
            of a crevice to extract a spider egg sac tucked behind a bark plate.
          </p>
          <p>
            The prey list reflects the niche: bark beetles and their larvae, which
            bore into bark tissue and spend larval life inside it; spiders and
            their eggs, overwintering behind bark scales in protected pockets;
            scale insects attached to bark surface; harvestmen pressed into bark
            fissures; ant colonies in shallow bark galleries. None of these are
            visible from any angle that doesn&apos;t press the eye against the bark.
            The Brown Creeper does this with its face, methodically, for every
            inch of bark between the ground and the canopy.
          </p>
          <p>
            The call is similarly precise: a very high, thin &ldquo;see-see-see&rdquo; —
            one of the thinnest sounds in winter bird vocalization, easily missed
            by ears not tuned to it. In a woodland with Carolina Wrens,
            White-throated Sparrows, and Black-capped Chickadees, the Brown
            Creeper&apos;s call passes through the sound field like a thread through
            cloth. Learning it is a way of discovering a presence that has always
            been there.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that support Brown Creeper</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Carya_ovata.jpg/800px-Carya_ovata.jpg"
              alt="Shagbark hickory trunk showing deeply furrowed, plated bark — each long shaggy plate separating at top and bottom creates dozens of bark crevices per square foot"
              loading="lazy"
            />
            <figcaption>
              Shagbark hickory (<em>Carya ovata</em>) develops the most deeply
              furrowed bark of any common native tree in eastern North America —
              each long shaggy plate separating at top and bottom creates dozens
              of crevices per square foot. A mature shagbark in a yard is years
              of concentrated foraging surface for a creeper working upward from
              its roots.
              <span className="photo-credit"> Photo: USDA&nbsp;·&nbsp;Public domain via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Leave dead snags standing.</strong>{' '}
              A standing dead or dying tree with bark beginning to separate is a
              Brown Creeper nesting site. The bark flaps that make the trunk look
              ragged are precisely the structures the creeper tucks its nest
              behind. The same loose bark shelters overwintering spiders, beetle
              larvae, and insect eggs the creeper forages in spring. If a snag
              poses no safety hazard, leave it.
            </li>
            <li>
              <strong>Plant rough-barked native trees.</strong>{' '}
              Shagbark hickory, native oaks, black cherry, and black locust
              develop the deeply furrowed, textured bark that supports a dense
              bark-crevice invertebrate community. A single mature shagbark
              hickory provides more Brown Creeper foraging substrate than a
              block of ornamental pears. Smaller native trees — serviceberry,
              native dogwood — contribute more as they age and develop bark texture.
            </li>
            <li>
              <strong>Remove invasive vines from tree trunks.</strong>{' '}
              English ivy, Oriental bittersweet, and Japanese honeysuckle
              climbing tree trunks cover the bark surface entirely, sealing the
              crevices the creeper forages. A vine-free trunk restores the
              readable bark surface. Cutting vines at the base and letting them
              die is faster than pulling them and causes less bark damage during
              removal.
            </li>
            <li>
              <strong>Eliminate bark-surface pesticide applications.</strong>{' '}
              Horticultural oil and systemic insecticide treatments applied to
              bark — sold for scale insect control — reduce the bark-crevice
              invertebrate community the creeper depends on. Scale insects on a
              native tree are self-limiting and rarely cause structural harm. The
              creeper and other bark-foraging birds control them without
              intervention when the bark community is intact.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who else works this bark</h2>
          <p>
            The bark surface the Brown Creeper reads going up is shared with
            several species that work it differently. Downy Woodpeckers excavate
            into the wood beneath, targeting larger beetle larvae at greater
            depth. White-breasted Nuthatches descend head-first, reading the same
            bark surface from the opposite angle and finding different prey in
            the same crevices. Carolina Wrens probe bark close to the ground in
            dense shrub edges. The same dead snag that hosts a Brown Creeper nest
            under its bark also provides a Downy Woodpecker cavity above it, and
            feeds a nuthatch on its surface year-round.
          </p>
          <ul>
            <li>
              <button className="link-button" onClick={() => onNavigate('downy-woodpecker')}>
                Downy Woodpecker
              </button>
              {' — '}Excavates into wood the Brown Creeper cannot reach; nest cavities in the same snags the creeper nests under.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('black-capped-chickadee')}>
                Black-capped Chickadee
              </button>
              {' — '}Gleans bark surface at branch tips and twigs; shares the canopy layer above the creeper&apos;s spiral.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('carolina-wren')}>
                Carolina Wren
              </button>
              {' — '}Probes bark and deadwood at ground level where the creeper starts each trunk spiral.
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to build bark habitat?</strong>{' '}
            Start with native trees using{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , remove what&apos;s sealing the bark with{' '}
            <button className="link-button" onClick={() => onNavigate('invasive-plants')}>
              Remove Invasive Plants
            </button>
            , and see how the bark layer connects to the full four-layer habitat system in the{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-layers')}>
              Habitat Layers guide
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
