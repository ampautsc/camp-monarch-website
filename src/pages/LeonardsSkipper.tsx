import type { Page } from '../App'

interface LeonardsSkipperProps {
  onNavigate: (page: Page) => void
}

export default function LeonardsSkipper({ onNavigate }: LeonardsSkipperProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/173602758/large.jpeg"
          alt="Leonard's Skipper adult perched on a plant stem showing orange upperwing with dark brown border and white-spotted tan hindwing underside, Jefferson County Missouri September 2020"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: loricvs&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/103708717" target="_blank" rel="noopener noreferrer">iNaturalist obs. 103708717</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies &amp; Moths</div>
        <h1>A male Leonard's Skipper picks the highest native grass stem in a patch and perches there, chasing off rivals and intercepting females for the ten days he has as an adult.</h1>
        <p className="hero__lead">
          Leonard's Skipper (<em>Hesperia leonardus</em>) is a small, fast-flying butterfly with
          orange upperwings edged in dark brown. The underside of the hindwing is pale tan with a
          curved row of white spots. Adults appear in late August and are gone by early October —
          it is the last skipper to fly in the eastern United States each year.
        </p>
        <p className="hero__lead">
          The life cycle runs entirely on native bunchgrasses. Females lay eggs on grass blades in
          September. The larvae that hatch overwinter at the base of the same grass clump and
          resume feeding in spring. A yard without native grass has no substrate for the egg, no
          shelter for the larva, and no perch for the male.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="timing-heading">
          <h2 id="timing-heading">August to September — after most butterflies have closed their season, Leonard's Skipper is still flying</h2>
          <p>
            Most mid-summer butterflies — tiger swallowtails, fritillaries, monarchs on their
            southbound pass — fly when wildflowers peak in June and July. Leonard's Skipper waits
            until goldenrod is open and native bunchgrasses are in seed. Its flight window falls
            almost exactly when Prairie Dropseed and Little Bluestem hold their ripe panicles and
            when goldenrod is producing nectar.
          </p>
          <p>
            Adults live roughly 7 to 14 days. A late frost, a summer without native grasses nearby,
            or a yard where goldenrod was cut before it bloomed can each break the adult's ability
            to find mates and lay eggs. The species' narrow window means the conditions need to be
            in place before the flight begins — there is no recovery time.
          </p>
        </section>

        <figure className="species-content-photo">
          <img
            src="https://inaturalist-open-data.s3.amazonaws.com/photos/228802727/large.jpg"
            alt="Leonard's Skipper adult perched on goldenrod showing the pale tan hindwing underside with a curved arc of white spots, Sauk County Wisconsin September 2022"
            loading="lazy"
          />
          <figcaption>
            Leonard's Skipper on goldenrod in early September: the pale tan underside of the
            hindwing carries a curved row of white spots that distinguish it from other orange
            skippers in the same range. Adults seek goldenrod nectar during their short flight
            window, which overlaps almost exactly with goldenrod bloom.
            <span className="photo-credit"> Photo: toddeiben&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/134251109" target="_blank" rel="noopener noreferrer">iNaturalist obs. 134251109</a>&nbsp;· CC0 / No Rights Reserved</span>
          </figcaption>
        </figure>

        <section aria-labelledby="hilltop-heading">
          <h2 id="hilltop-heading">The male finds the tallest grass stem in the patch, perches at the tip, and waits — in a lawn, no such stem exists; in a yard with Prairie Dropseed, one does</h2>
          <p>
            Male Leonard's Skippers use a behavior called perch-and-wait hilltopping. A male
            locates the highest point in a native grass area — the arching tip of a tall bunchgrass
            stem, the crest of a slight slope — and holds that position. When a female passes
            through, he intercepts her. When a rival male enters, he drives it off. The perch is
            defended continuously until the male loses it or the day ends.
          </p>
          <p>
            In a yard with only mowed lawn and broadleaf wildflowers, no stem rises high enough
            above the surrounding area to function as a hilltop. A single clump of Prairie Dropseed
            rising 18 to 24 inches above a mowed edge provides exactly the structure a male needs.
            The seed panicle tips — wiry, arching, trembling in the lightest wind — become the
            perch from which he watches the September sky.
          </p>
          <p>
            A homeowner who plants Prairie Dropseed at a sunny yard edge and then, in late August,
            sees a small orange butterfly landing and re-landing on the same grass stem and darting
            to chase something away: that is Leonard's Skipper defending a territory from your grass.
          </p>
        </section>

        <section aria-labelledby="lifecycle-heading">
          <h2 id="lifecycle-heading">Females lay eggs on the grass blade in September; the young larvae drop to the crown and overwinter there until spring</h2>
          <p>
            After mating, a female Leonard's Skipper searches for suitable grass blades and lays
            single eggs on them. Prairie Dropseed, Little Bluestem (<em>Schizachyrium scoparium</em>),
            and Sideoats Grama (<em>Bouteloua curtipendula</em>) are all documented host grasses.
            The egg is laid directly on the blade, not in soil or litter. The larva that hatches
            feeds briefly on the grass, then moves to the base of the clump, constructs a silk
            shelter at or just below the soil surface, and stays there through winter.
          </p>
          <p>
            In spring the larva resumes feeding on the new grass growth from inside that shelter,
            then pupates in late June or July. The adult emerges in late August to complete the
            cycle. The entire larval stage — from September egg hatch to June pupation — takes
            place inside or at the base of the grass clump the female chose in fall.
          </p>
          <p>
            A grass clump cut to the ground in October, or raked clean of its dead material,
            removes the shelter the larva needs to survive winter. Leaving Prairie Dropseed and
            Little Bluestem standing until early spring keeps both the seed heads available for
            birds and the base undisturbed for the larva overwintering below.
          </p>
        </section>

        <section aria-labelledby="goldenrod-heading">
          <h2 id="goldenrod-heading">Goldenrod opens at the same week Leonard's Skipper emerges — both plants and butterfly are timed to the same September window</h2>
          <p>
            Adult Leonard's Skippers take nectar from several late-season flowers, but goldenrod —
            Canada Goldenrod (<em>Solidago canadensis</em>), Stiff Goldenrod (<em>Solidago rigida</em>),
            and other native <em>Solidago</em> species — is the most consistently documented nectar
            source across their range. The timing lines up: goldenrod opens between mid-August
            and September, the same window the butterfly flies.
          </p>
          <p>
            Prairie Dropseed and goldenrod grow in similar conditions — full sun, dry to average
            soil — and can be planted adjacent without competition. A yard with both in a sunny
            border provides the host grass for egg-laying and the nectar source for adults within
            the same planting bed. The butterfly does not need to cross a road or a lawn to find both.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three conditions that make a yard usable for Leonard's Skipper</h2>
          <ol className="step-list">
            <li>
              <strong>Plant Prairie Dropseed or Little Bluestem in full sun, in dry to average soil.</strong>{' '}
              Either grass provides the blade for egg-laying and the stem for male perching. A
              mature clump 18 to 24 inches tall is sufficient. Both grasses establish in two to
              three seasons and do not spread aggressively once the crown is set.
            </li>
            <li>
              <strong>Plant goldenrod within the same sunny border.</strong>{' '}
              Goldenrod is the primary adult nectar source during the flight window. Canada Goldenrod
              and Stiff Goldenrod are both common and reliable in Midwest gardens. Either species
              opens in mid-August to September and holds nectar through the full Leonard's Skipper
              adult lifespan.
            </li>
            <li>
              <strong>Leave the grass standing through winter; cut it in early spring only.</strong>{' '}
              The overwintering larva lives at the crown of the grass clump from September through
              April. Cutting in October removes its shelter. Cutting in March, before new growth
              emerges, removes only the spent material after the larva has completed its
              overwintering stage.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('prairie-dropseed')}>
              <span className="neighbor-name">Prairie Dropseed</span>
              <span className="neighbor-note">Primary host grass; the seed panicle tip becomes the hilltop perch for a male Leonard's Skipper in late August</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('cobweb-skipper')}>
              <span className="neighbor-name">Cobweb Skipper</span>
              <span className="neighbor-note">Spring sibling in the same genus; emerges in April on the same native bunchgrass stems where Leonard's Skipper perched the previous September</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('canada-goldenrod')}>
              <span className="neighbor-name">Canada Goldenrod</span>
              <span className="neighbor-note">Opens mid-August to September — the same week Leonard's Skipper emerges — and is the primary adult nectar source</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('black-swallowtail')}>
              <span className="neighbor-name">Black Swallowtail</span>
              <span className="neighbor-note">Another late-summer butterfly whose caterpillars depend on a specific plant family — parsley relatives rather than grasses</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('great-spangled-fritillary')}>
              <span className="neighbor-name">Great Spangled Fritillary</span>
              <span className="neighbor-note">Flies June through August — the season that closes just as Leonard's Skipper opens its ten-day window</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
