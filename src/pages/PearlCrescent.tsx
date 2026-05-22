import type { Page } from '../App'

interface PearlCrescentProps {
  onNavigate: (page: Page) => void
}

export default function PearlCrescent({ onNavigate }: PearlCrescentProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/Pearl_crescent_%2830350%29.jpg"
          alt="Pearl Crescent butterfly (Phyciodes tharos) with wings open, showing vivid orange wing panels with black borders, black spot clusters, and the intricate black vein network — wingspan just over one inch, one of the most common butterflies east of the Rockies"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/5/52/Pearl_crescent_%2830227%29.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Pearl_crescent_(30350).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Pearl Crescent</h1>
        <p className="hero__lead">
          One inch of wingspan. The female lands on an aster leaf, presses her feet against the surface
          to taste the chemistry, and lays her eggs in a stack on the underside — on no other plant.
          The caterpillar that hatches from the last summer batch does not die when frost arrives.
          It tunnels into the leaf litter at the base of the aster stem and waits there through winter.
          That caterpillar becomes the first Pearl Crescent of April.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">Phyciodes tharos: one inch, orange and black, two to three generations per summer</h2>
          <p>
            The Pearl Crescent spans just over an inch from wingtip to wingtip — small enough that
            a handful can nectar simultaneously on a single aster head. The wings are vivid orange
            with black borders, black spot clusters, and a black vein network crossing the orange
            panels. On the underside of the hindwing, near the outer edge, sits a pale silver
            crescent marking: the mark the species is named for, visible when the butterfly rests
            with wings closed.
          </p>
          <p>
            Males perch on low vegetation or bare soil and dart at any passing insect — other
            butterflies, flies, bees — returning to the same spot within seconds to wait again.
            A male Pearl Crescent working a sunny garden corner in September returns to the same
            perch dozens of times per hour. Females move more slowly through open areas, pausing
            frequently to press their feet against leaf surfaces before committing to a plant.
          </p>
          <p>
            Two to three generations fly each summer in the upper Midwest, with the first adults
            on the wing in late April or May. Successive generations follow in June, July, and late
            August into September. The final generation of the year — the one that hatches in late
            August — does not complete its development before winter. It overwinters as a
            partially-grown caterpillar in the leaf litter.
          </p>
        </section>

        <section aria-labelledby="aster-heading">
          <h2 id="aster-heading">The caterpillar feeds only on native asters — not coneflower, not goldenrod, no other genus</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/322745074/large.jpg"
              alt="New England aster (Symphyotrichum novae-angliae) in full bloom — dense clusters of purple ray florets surrounding yellow disk flowers"
              loading="lazy"
            />
            <figcaption>
              New England aster (<em>Symphyotrichum novae-angliae</em>), one of the Pearl Crescent's primary
              host plants. The female tastes the leaf chemistry through receptors in her feet before laying;
              she lays only on <em>Symphyotrichum</em> and closely related native asters, nowhere else.
              The same plant that feeds the caterpillar feeds the adult on its flowers in September and October.
              <span className="photo-credit"> Photo: glennberry&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/184861115" target="_blank" rel="noopener noreferrer">iNaturalist obs. 184861115</a>&nbsp;· CC0</span>
            </figcaption>
          </figure>
          <p>
            Female Pearl Crescents lay eggs exclusively on native asters in the genus{' '}
            <em>Symphyotrichum</em> — New England aster (<em>S. novae-angliae</em>), smooth aster
            (<em>S. laeve</em>), heart-leaved aster (<em>S. cordifolium</em>), calico aster
            (<em>S. lateriflorum</em>), and several others. The caterpillars will not develop on
            coneflowers, goldenrod, black-eyed Susans, or any other composite. The host requirement
            is specific to the genus.
          </p>
          <p>
            A female identifies a suitable plant through chemoreceptors in her tarsi — the foot
            segments that contact the leaf surface when she lands. She may visit several plants,
            pressing her feet against leaves on each before finding one she accepts. Once she
            commits, she deposits a clutch of 20 to 60 eggs stacked in two to three layers on the
            underside of a lower leaf. A female may lay multiple clutches on adjacent asters within
            a few feet of the first.
          </p>
          <p>
            The eggs hatch in five to seven days. First- and second-instar caterpillars feed in
            groups — ten to twenty siblings eating from the same leaf, skeletonizing it from the
            underside before moving on together. By the third instar they disperse, each feeding
            individually on adjacent leaves and stems. The caterpillar is dark brownish-black with
            pale yellow spots and short bristles — on the dark soil under an aster, nearly
            invisible from above.
          </p>
        </section>

        <section aria-labelledby="overwintering-heading">
          <h2 id="overwintering-heading">The third-instar caterpillar survives winter in the leaf litter at the base of the aster stem</h2>
          <p>
            In the northern Midwest — Ohio, Michigan, Illinois, Wisconsin — the final Pearl Crescent
            generation hatches in late August or early September. After two to three weeks of feeding
            on aster leaves, before reaching its full pre-pupal size, the caterpillar descends the
            stem and enters the leaf litter at the plant's base. It spins a small silken mat,
            presses itself into it, and stops feeding.
          </p>
          <p>
            The caterpillar remains there through October, November, December, January, February, and
            March. Its metabolic processes slow to near zero. In laboratory freezing trials, Pearl
            Crescent larvae at this stage survive temperatures at or below 0°C through supercooling —
            the accumulation of compounds that lower the freezing point of body fluids below the
            ambient temperature. The leaf litter itself provides insulation, keeping the actual
            temperature around the caterpillar several degrees warmer than the air above.
          </p>
          <p>
            When soil temperatures rise above 10°C in April, the caterpillar resumes feeding on the
            aster's first new leaf growth. It completes its remaining instars through April and May,
            pupates, and emerges as the first Pearl Crescent adult of the season — the butterfly
            you see nectaring on dandelions and early spring flowers while the asters are still
            bare stems.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant asters, leave the leaves at their base, and let the stems stand until April</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/25/Fallen_leaves.jpg"
              alt="Autumn leaves on the ground forming a layer of leaf litter"
              loading="lazy"
            />
            <figcaption>
              The Pearl Crescent overwintering caterpillar is in the leaf layer at the base of the aster
              stem. Raking those leaves in October removes the caterpillar and its silken mat together.
              Leaving a two-foot ring of undisturbed leaves around each aster plant is the entire
              intervention — the rest of the yard can be managed as usual.
              <span className="photo-credit"> Photo: Public domain via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant at least two native asters.</strong>{' '}
              Pearl Crescents reproduce only on <em>Symphyotrichum</em> asters. New England aster
              (<em>S. novae-angliae</em>) is the most widely available at native plant nurseries and
              blooms from late August through hard frost — the window when fall Pearl Crescent
              adults are nectaring and last-generation caterpillars are feeding before overwintering.
              A second aster species — smooth aster, heart-leaved aster, or calico aster — extends
              the bloom window and the egg-laying period. Find native asters with{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Leave the leaf litter at the base of your asters through April.</strong>{' '}
              The overwintering caterpillar is in that leaf layer, in a silken mat at the crown of the
              plant. Rake it away in October and the caterpillar goes with it — exposed, composted,
              or removed from the yard. Leave a two-foot ring of undisturbed leaves around each aster
              plant; rake the rest of the yard as usual. That ring is the habitat the caterpillar
              is depending on from September through April.
            </li>
            <li>
              <strong>Let the aster stems stand until late April.</strong>{' '}
              Dead aster stems host overwintering bees inside the hollow centers — small carpenter
              bees and sweat bees seal sections of stem with plant material and spend winter inside.
              The Pearl Crescent caterpillar is at the base of the stem, not inside it, but leaving
              the whole plant standing through winter protects both. Cut stems to 8 inches in late
              April, before the aster sends up its first new growth.
            </li>
            <li>
              <strong>Skip insecticide applications on aster plants in August and September.</strong>{' '}
              Pyrethroid and neonicotinoid applications during the peak Pearl Crescent egg-laying and
              early-instar feeding period — late July through September — kill the caterpillars before
              they reach the overwintering stage. The clutch of caterpillars feeding on the underside
              of an aster leaf in late August is not visible from a standing position. Treating the
              plant eliminates that cohort entirely, including the individuals that would have
              overwintered and become the first spring adults.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">What shares the aster bloom in September and the leaf layer in January</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('new-england-aster')}>
                New England Aster
              </button>{' '}
              &mdash; the primary Pearl Crescent host plant in the northern Midwest; the female deposits
              her egg clutches on its leaves in August and September, the caterpillars feed on those
              same leaves for two to three weeks, and then the final-generation larva descends and
              overwinters at the stem base; the plant blooms through the first hard frost, giving
              adult Pearl Crescents the latest available nectar in the yard
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('canada-goldenrod')}>
                Canada Goldenrod
              </button>{' '}
              &mdash; blooms alongside asters in August and September and draws the same assembly of
              fall Pearl Crescent adults, migrating Monarchs, American Bumble Bees, and late-season
              migrant butterflies at once; a corner with both goldenrod and aster blooming in September
              carries more species simultaneously than either plant alone
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('fireflies')}>
                Fireflies
              </button>{' '}
              &mdash; larvae spend two years hunting prey in leaf litter and loose soil before their
              single summer of flight; leaving the leaf layer intact under asters and shrubs in October
              benefits Pearl Crescent caterpillars and firefly larvae simultaneously — both are killed
              by the same raking operation most homeowners consider routine autumn cleanup
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('great-spangled-fritillary')}>
                Great Spangled Fritillary
              </button>{' '}
              &mdash; lays eggs in late summer near violet plants; the newly hatched first-instar
              caterpillar overwinters immediately in the leaf litter before it has taken a single bite,
              surviving winter the same way the Pearl Crescent's third-instar does; both butterflies
              use the same aster-and-leaf-litter habitat structure in overlapping stages through the
              same autumn and spring
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('monarch-life')}>
                Monarch Butterfly
              </button>{' '}
              &mdash; nectars on asters during the fall migration in September and October, building
              the fat reserves the 2,500-mile flight to Michoacán requires; a yard with New England
              aster blooming in mid-October is providing fuel to the same migration that aster-eating
              Pearl Crescent caterpillars are feeding beside on the leaves below
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build a yard that supports Pearl Crescents and the community they share it with.</strong>{' '}
            Add native asters with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , understand what leaf litter contains with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , and see what else shares your yard in the{' '}
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
