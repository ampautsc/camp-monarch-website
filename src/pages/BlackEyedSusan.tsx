import type { Page } from '../App'

interface BlackEyedSusanProps {
  onNavigate: (page: Page) => void
}

export default function BlackEyedSusan({ onNavigate }: BlackEyedSusanProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/309136118/large.jpeg"
          alt="Black-eyed Susan in bloom — yellow ray flowers surrounding dark brown central disks in a meadow at Warren, Rhode Island, August 2023"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: tim_kirsten&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/177720136" target="_blank" rel="noopener noreferrer">iNaturalist obs. 177720136</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>An American Goldfinch collects plant fluff for her nest lining in late July.<br />Black-eyed Susan seed heads open in August.</h1>
        <p className="hero__lead">
          Black-eyed Susan (<em>Rudbeckia hirta</em>) blooms from late June through
          September across eastern and central North America. The flowers have yellow ray
          petals surrounding a domed, dark brown central disk. They open in late June, peak
          in July and August, and produce seed heads that persist into late fall. The plant
          grows one to three feet tall in full sun and lean, dry soil — roadsides, old
          fields, meadows, garden beds with low fertility.
        </p>
        <p className="hero__lead">
          Black-eyed Susan's bloom window runs from late June through August, filling the
          gap that opens when New Jersey Tea finishes and before goldenrod and aster begin
          to open. In a Camp Monarch garden, it carries the bloom sequence from the end of
          June through September — the same months when American Goldfinches are nesting and
          the Silvery Checkerspot butterfly is laying eggs.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="goldfinch-heading">
          <h2 id="goldfinch-heading">Goldfinch nests in late July — seed heads open in August</h2>
          <p>
            American Goldfinches nest later than almost every other songbird in the eastern
            United States. The nesting season typically runs from July through early August —
            three to four weeks after most songbirds have fledged their first brood. This
            delay is tied to seed availability. Goldfinches feed their nestlings almost
            entirely on regurgitated seeds, not insects; they time their nesting to overlap
            with peak seed production from thistles and native composites.
          </p>
          <p>
            Black-eyed Susan seed heads begin to mature in August. The seeds are small and
            dry, arranged in a tight cylinder at the center of each spent flower. American
            Goldfinches cling to the stalks and extract the seeds directly from the standing
            heads. A single plant can carry 20 to 50 seed heads by late August. Female
            goldfinches also collect the soft pappus fibers from composite seed heads to
            line their nests — a behavior that requires the heads to be left standing, not
            cut.
          </p>
          <p>
            The common practice of cutting down Black-eyed Susan as the flowers fade removes
            these seed heads during the period when goldfinches are feeding nestlings and
            fledglings. A patch left standing through September and October carries seed into
            the interval after goldenrod goes to fluff and before winter feeders are
            typically restocked.
          </p>
        </section>

        <section aria-labelledby="checkerspot-heading">
          <h2 id="checkerspot-heading">Silvery Checkerspot lays 20 to 200 eggs in a cluster on Rudbeckia leaves</h2>
          <p>
            The Silvery Checkerspot (<em>Chlosyne nycteis</em>) lays eggs in clusters on
            the leaves of native composites — <em>Rudbeckia</em>, sunflowers, and
            wingstems. A single female deposits 20 to 200 eggs on the upper surface of a
            leaf in one clutch. The caterpillars hatch together and feed communally in their
            early instars, skeletonizing leaves as a group before dispersing to individual
            feeding sites in later stages.
          </p>
          <p>
            Silvery Checkerspots fly in July and August — the same weeks Black-eyed Susan
            peaks. Adults nectar from composites, coneflowers, and bergamot; females
            simultaneously search for egg-laying sites on <em>Rudbeckia</em> leaves. A
            yard with flowering Black-eyed Susan during this window provides both nectar
            and the substrate the butterfly needs to reproduce.
          </p>
          <p>
            The Silvery Checkerspot's range has contracted in the eastern United States as
            open meadow and early-successional habitats — the places where <em>Rudbeckia</em>
            and related composites grow — have been replaced by mowed lawn and closed-canopy
            forest. In several eastern states, the butterfly now appears on watch lists.
          </p>
        </section>

        <section aria-labelledby="reseed-heading">
          <h2 id="reseed-heading">Self-seeding in open patches — the seed heads do two jobs if you leave them</h2>
          <p>
            Black-eyed Susan is a short-lived perennial, biennial, or annual depending on
            growing conditions and seed source. Individual plants typically live two to four
            years. The plant reseeds freely in open patches with bare soil and full sun.
            A single seed head contains 250 to 300 seeds. Seeds germinate in spring in
            disturbed, thin soil; they do not establish well in dense turf or deep shade.
          </p>
          <p>
            In a garden where seed heads are left standing through fall, Black-eyed Susan
            self-perpetuates — seeds drop in place through winter and germinate the
            following spring. Goldfinches extract seeds from the heads through fall and
            early winter, carrying some seeds to perch sites and dropping others. The
            colony spreads by both mechanisms without any active management.
          </p>
          <p>
            Cutting the seed heads in August stops both processes. If seed heads must be
            removed to keep a bed tidy, waiting until November — after goldfinches have
            worked through the heads and after seeds have had time to fall — reduces the
            disruption to both seed dispersal and bird foraging.
          </p>
        </section>

        <section aria-labelledby="growing-heading">
          <h2 id="growing-heading">Full sun, lean or disturbed soil, zones 3 through 9 — blooms in the first season</h2>
          <p>
            Black-eyed Susan grows in full sun in lean, dry-to-medium soil. It does not
            need rich, amended garden beds. In high-fertility soil, it tends to grow tall
            and floppy rather than compact and upright. Roadside populations — growing in
            gravel, compacted soil, and thin fill — often carry more flower heads than
            transplants in heavily fertilized beds.
          </p>
          <p>
            Plant it in a spot with good drainage and at least six hours of direct sun. It
            tolerates summer drought once established. Nursery transplants from seed-grown
            stock typically bloom in their first season. Plants grown from direct seed sown
            in fall take longer to establish and may not flower until the second year.
          </p>
          <p>
            Black-eyed Susan establishes faster than most native plants in the July–August
            bloom window. A single transplant set out in late spring can carry a dozen
            flower heads by August. That speed makes it one of the quickest ways to close
            the midsummer gap in a new native planting while slower-establishing species
            like wild bergamot and purple coneflower are getting started.
          </p>
        </section>

        <section aria-labelledby="context-heading">
          <h2 id="context-heading">Late June through September — between milkweed and goldenrod</h2>
          <p>
            The ten-native bloom sequence for a Camp Monarch garden runs from Wild Columbine
            in April through New England Aster in October. Black-eyed Susan opens in late
            June, just as Common Milkweed is peaking, and continues through August and into
            September — overlapping with wild bergamot, purple coneflower, and Joe Pye Weed
            before goldenrod opens in late August.
          </p>
          <p>
            For an American Goldfinch pair nesting in late July, a yard with Black-eyed
            Susan carries seed heads through the fledging period and into fall. For a
            Silvery Checkerspot female flying in August, the same plants provide nectar and
            egg-laying sites simultaneously. For the homeowner, one decision — leave the
            seed heads standing — addresses both the goldfinch nesting window and the
            butterfly's reproductive needs in the same act.
          </p>
          <div className="connections">
            <h3>Plants and species connected to Black-eyed Susan</h3>
            <ul>
              <li>
                <button className="link-button" onClick={() => onNavigate('american-goldfinch')}>
                  American Goldfinch
                </button>{' '}
                — nests in late July and August; Black-eyed Susan seed heads mature as nestlings are fledging
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('wild-bergamot')}>
                  Wild Bergamot
                </button>{' '}
                — blooms July–August, overlapping Black-eyed Susan's peak; both support the same midsummer pollinators
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('canada-goldenrod')}>
                  Canada Goldenrod
                </button>{' '}
                — opens in late August as Black-eyed Susan is going to seed; carries the bloom sequence forward to October
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
