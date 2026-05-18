import type { Page } from '../App'

interface SongSparrowProps {
  onNavigate: (page: Page) => void
}

export default function SongSparrow({ onNavigate }: SongSparrowProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Song_Sparrow_Melospiza_melodia.jpg/960px-Song_Sparrow_Melospiza_melodia.jpg"
          alt="Adult Song Sparrow perched on a branch, showing brown-streaked plumage, broad dark eyebrow stripe, rust-brown cheek line, and the dark central breast spot amid dense streaking"
          className="species-hero-image"
          style={{ objectPosition: 'center 35%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Melospiza_melodia_-_Ontario_%288200966636%29.jpg/960px-Melospiza_melodia_-_Ontario_%288200966636%29.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Alan D. Wilson&nbsp;&middot;&nbsp;CC BY-SA 2.5 via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Song Sparrow</h1>
        <p className="hero__lead">
          The brown bird with the thumbprint on its chest has been singing from the same branch
          in your viburnum every morning for three weeks. It perches at four or five feet, opens
          its bill, runs through a burst of clear notes followed by a trill and a buzzy phrase,
          then stops. Within a minute it starts over. This has been happening since early March.
        </p>
        <p className="hero__lead">
          <em>Melospiza melodia</em> &mdash; the name means &ldquo;melodious song sparrow&rdquo;
          &mdash; breeds across nearly all of North America. The eastern birds are medium-sized,
          heavily streaked in brown and rust, with a broad dark eyebrow stripe and a rust-colored
          line from the bill down the cheek. The mark that separates them from other brown
          sparrows: a dark central spot in the middle of the streaked breast, like a stickpin
          pushed through the center of the chest.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="singing-posts-heading">
          <h2 id="singing-posts-heading">Three to five branches, worked in a circuit</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Melospiza_melodia_-_Ontario_%288200966636%29.jpg/960px-Melospiza_melodia_-_Ontario_%288200966636%29.jpg"
              alt="Song Sparrow perched on a small branch, bill open in song, showing the full streaked plumage and the characteristic dark central breast spot"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Song_Sparrow_Melospiza_melodia.jpg/480px-Song_Sparrow_Melospiza_melodia.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              A Song Sparrow singing from a perch &mdash; bill open, throat working. Males
              select 3 to 5 specific branches within their territory and return to them
              repeatedly through the day. Each perch gives the bird a clear line of sight to
              the territory boundary and broadcasts the song in a different direction.
              <span className="photo-credit"> Photo: Peter Massas / CC BY-SA 2.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            A male Song Sparrow establishes territory in late February or early March and selects
            3 to 5 specific perches within it called singing posts. He works through them in a
            circuit throughout the day &mdash; 10 to 20 minutes at one branch, then a short flight
            to the next, then another burst of singing. Each post sits at a height from which he
            can see the perimeter of his territory in at least one direction and project sound
            across the adjacent space. A rival male hearing the song from multiple angles knows
            the singer is moving &mdash; not leaving, but working the circuit.
          </p>
          <p>
            The same male returns to the same territory year after year if it produced successful
            nests. He returns to the same singing posts. The branch in your viburnum where the
            Song Sparrow sings every morning may be the same branch a Song Sparrow used last
            March, occupied by a bird who hatched in a yard within a quarter mile and came back
            when the days crossed 12 hours of light.
          </p>
          <p>
            Song Sparrows do not migrate in most of the central and eastern part of their range.
            The bird singing in your yard in March is the bird that spent the winter within 200
            yards of your yard, foraging along shrub edges and in unmowed grass, waiting for the
            daylight threshold that triggers the hormonal shift toward breeding. It did not arrive
            from somewhere else. It was already there.
          </p>
        </section>

        <section aria-labelledby="dialect-heading">
          <h2 id="dialect-heading">Songs learned from the neighborhood, not inherited</h2>
          <p>
            Each male Song Sparrow has a repertoire of 6 to 20 song types. He did not inherit
            them. He learned them by listening to adult males during his first summer, memorizing
            the local versions of the species&apos; call patterns and practicing them into fall.
            The songs are culturally transmitted, not genetically encoded.
          </p>
          <p>
            The practical consequence: Song Sparrow songs differ measurably from one neighborhood
            to the next. Ornithologists recording Song Sparrows across a metro area can map dialect
            boundaries from recordings alone &mdash; the birds in one zip code run a different
            sequence of note clusters than the birds two miles away. A young male who hatched in
            your neighborhood and dispersed a quarter mile to establish his own territory carries
            the local dialect with him. Local birds recognize it. A male from 50 miles away sings
            differently, and the established males respond to that difference.
          </p>
        </section>

        <section aria-labelledby="nest-heading">
          <h2 id="nest-heading">A deep cup hidden under 18 inches of canopy</h2>
          <p>
            The female builds the nest alone, without assistance from the male. She gathers coarse
            grass, dead weed stems, and bark strips, forms them into a deep cup 3 to 4 inches
            across, and lines the interior with fine grass and animal hair. Construction takes 4
            to 5 days.
          </p>
          <p>
            The nest sits on or very near the ground &mdash; sometimes directly on the soil,
            sometimes in a grass clump 4 to 8 inches off the surface, sometimes tucked inside
            the base of a shrub behind a screen of stems. The maximum height is typically under
            3 feet in eastern populations. The nest opening faces upward with no overhang. A
            gardener who removes the clump of last year&apos;s little bluestem or the leaf litter
            inside the shrub base in April removes the nest site the female was evaluating.
          </p>
          <p>
            Both parents feed the nestlings from hatching. The male pauses his singing circuit
            for 20 to 30 minutes at each feeding run, returns to a singing post for a burst of
            song, then leaves again. A yard where the male has stopped singing for an extended
            period in late May or early June typically has nestlings that are consuming his
            attention. Three to four broods per season is common in the eastern subspecies.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three things Song Sparrows need from your yard</h2>

          <figure className="species-content-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Song_Sparrow_at_Coyote_Hills_%28200046807%29.jpg/960px-Song_Sparrow_at_Coyote_Hills_%28200046807%29.jpg"
              alt="Song Sparrow foraging on the ground near low vegetation, showing the streaked brown plumage and the dark central breast spot"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Song_Sparrow_Melospiza_melodia.jpg/640px-Song_Sparrow_Melospiza_melodia.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              A Song Sparrow foraging near low cover. The birds work through leaf litter and ground
              surface material with a paired foot-kick that throws debris backward and exposes seeds
              and invertebrates underneath. A bed left with its natural litter layer gives them
              material to work through from September to April.
              <span className="photo-credit"> Photo: Marshal Hedin / CC BY-SA 2.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Leave grass clumps and shrub bases uncut through May.</strong>{' '}
              The female chooses a nest site in late April based on what is available at ground
              level. A clump of little bluestem or switchgrass left standing from last year, the
              leaf-littered base of a viburnum, the back edge of a perennial bed with standing
              stems &mdash; these are what she evaluates when she is looking. A bed cut to bare
              soil in April gives her nothing to build on or hide inside.
            </li>
            <li>
              <strong>Maintain leaf litter under your shrubs through fall and winter.</strong>{' '}
              Song Sparrows scratch through leaf litter with both feet simultaneously &mdash; one
              thrust that throws surface material clear in one motion, exposing seeds and
              invertebrates underneath. A raked bed has nothing for them to work. Two to three
              inches of intact leaf litter under native shrubs provides foraging from September
              through March. See{' '}
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>{' '}
              for why the same litter layer supports firefly larvae and other yard residents.
            </li>
            <li>
              <strong>Plant a native shrub 3 to 5 feet tall and leave it unpruned.</strong>{' '}
              The male sings from branches at 4 to 6 feet. The female builds at 0 to 3 feet.
              They need both heights within the same territory &mdash; a patch of dense grass or
              low shrub base where the nest hides, and a branch above it where the male sings
              over the top. A native viburnum, elderberry, or serviceberry provides the singing
              height and the nest-height cover within the same plant. See{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>{' '}
              for native shrubs by region.
            </li>
          </ol>
        </div>

        <section aria-labelledby="foraging-heading">
          <h2 id="foraging-heading">Seeds in fall, caterpillars in May</h2>
          <p>
            Song Sparrows shift their diet by season. From fall through early spring, they eat
            seeds &mdash; grass seeds, weed seeds, small native plant seeds that have fallen to
            the ground or remain on dried standing stalks. From late April through August, they
            eat invertebrates: caterpillars, beetles, grasshoppers, spiders, fly larvae. The
            nestlings receive almost entirely invertebrates through the first two weeks, because
            the young birds cannot digest hard seeds. A yard with a spray program that eliminates
            caterpillars in May removes the primary food source for any nestlings present.
          </p>
          <p>
            The foraging method in leaf litter is a paired foot-thrust: both feet kick backward
            simultaneously, throwing surface material away in one motion and exposing the ground
            underneath. Song Sparrows move through a litter bed systematically, advancing a few
            inches, kicking, scanning, advancing. An eastern towhee does the same thing at larger
            scale &mdash; the two species often work the same leaf litter bed in overlapping
            territories, Song Sparrows at the dense interior, towhees at the edges.
          </p>
          <p>
            A yard with native seed-head plants standing through winter &mdash; purple coneflower,
            black-eyed Susan, native aster, wild sunflower &mdash; provides seeds through February.
            The same plants, decomposing in a litter layer, support the invertebrate population
            that feeds the nestlings in May. The two functions come from the same physical
            material, handled differently across the two seasons.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The Song Sparrow shares the shrub-edge zone with several yard neighbors.</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-towhee')}>
              Eastern Towhees
            </button>{' '}
            scratch the same leaf litter with the same paired-kick method &mdash; the larger,
            louder version of the same foraging behavior.{' '}
            <button className="link-button" onClick={() => onNavigate('carolina-wren')}>
              Carolina Wrens
            </button>{' '}
            investigate the same dense shrub bases and brush piles for insects year-round.{' '}
            <button className="link-button" onClick={() => onNavigate('gray-catbird')}>
              Gray Catbirds
            </button>{' '}
            nest at similar height and call from similar perches in May and June. A yard
            with the shrub layer and litter that supports one of them is often already holding
            the others. Start the shrub layer at{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or meet more shrub-edge birds in the{' '}
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
