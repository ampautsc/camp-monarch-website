import type { Page } from '../App'

interface ViceroyProps {
  onNavigate: (page: Page) => void
}

export default function Viceroy({ onNavigate }: ViceroyProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Viceroy_Butterfly_perched.jpg"
          alt="Viceroy butterfly (Limenitis archippus) with wings open — orange with black veins, a broad black border with white spots, and a single curved black postmedian line crossing the hindwing that no Monarch carries"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/8/87/Viceroy_butterfly.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Andy Reago &amp; Chrissy McClarren&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Viceroy_Butterfly_perched.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Viceroy</h1>
        <p className="hero__lead">
          You see an orange butterfly crossing your yard in August. Orange wings, black veins,
          a broad black border with white spots — it looks like a Monarch. Then you notice a
          single thin black line curving across the hindwing, from front edge to back edge, in
          a place no Monarch has one. That line is a Viceroy. The butterfly spent its winter
          sealed inside a rolled willow leaf tied to a branch with silk, emerged in April when
          the willows leafed out, and is now flying the same airspace as the Monarchs passing
          through your yard because birds cannot tell them apart.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">The postmedian line across the hindwing — one curved black stripe that separates every Viceroy from every Monarch</h2>
          <p>
            From above, the Viceroy and Monarch share the same ground plan: orange wing surface,
            black veins running across both forewings and hindwings, a broad black border along
            the outer margins, and two rows of white spots inside that border. The resemblance is
            close enough that many people who glance and move on will call both species Monarchs.
            The field mark that separates them is a single curved black line — the postmedian
            band — running from the front edge to the rear edge of the hindwing. No Monarch carries
            this line. Every Viceroy does.
          </p>
          <p>
            Viceroy wingspans run 2.5 to 3.5 inches; the Monarch runs 3.5 to 4.5. The Viceroy is
            smaller, and its flight pattern is different: faster wingbeats, with a flap-flap-glide
            cadence rather than the Monarch's steadier soaring. A Viceroy moving between willows
            along a creek stays low, dipping below the shrub line. A Monarch in the same area
            rides higher, often above the canopy. Once both flight patterns are familiar, they
            separate without a field mark.
          </p>
          <p>
            Two broods fly most Midwest years. Adults from the overwintered generation emerge in
            late May and June. A second generation flies from late July through September.
            Viceroy adults nectar on goldenrod, asters, Joe Pye weed, and other late-summer flowers.
            They also feed on fermenting fruit, wet soil, and occasionally carrion — the sponging
            behavior that Monarchs, which take only flower nectar, do not share.
          </p>
        </section>

        <section aria-labelledby="mimicry-heading">
          <h2 id="mimicry-heading">The Monarch eats milkweed, stores cardiac glycosides that make birds sick — the Viceroy eats willows, carries no toxin, and wears the same warning colors anyway</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg/960px-Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg"
              alt="Monarch butterfly (Danaus plexippus) with wings open — the same orange-and-black pattern worn by the Viceroy, but without the postmedian line across the hindwing; the Monarch's pattern is an honest signal of cardiac glycoside toxicity; the Viceroy borrows the signal without the toxin"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Monarch_In_May.jpg'
              }}
            />
            <figcaption>
              The Monarch butterfly (<em>Danaus plexippus</em>) — the species the Viceroy mimics.
              A Monarch caterpillar ingests cardiac glycosides from milkweed tissue and retains
              them through metamorphosis into the adult. A Blue Jay that eats a Monarch vomits
              within minutes and avoids the orange pattern for years afterward. The Viceroy
              carries none of this toxin but wears the same advertisement.
              <span className="photo-credit"> Photo: Kenneth Dwain Harrelson · CC BY-SA 3.0 via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Monarch caterpillars eat milkweed. Milkweed produces cardiac glycosides — compounds
            that disrupt heart muscle function in vertebrates. The caterpillar sequesters these
            compounds in its tissues rather than breaking them down, and carries them into the
            adult butterfly. A Blue Jay that eats a Monarch vomits within minutes. The bird
            remembers the orange-and-black pattern and avoids it for years. This is aposematism —
            an animal displaying its toxicity through color.
          </p>
          <p>
            The Viceroy caterpillar eats willows, cottonwoods, and poplars. None of these plants
            contain cardiac glycosides. The adult Viceroy carries no toxin at all. But it wears
            the same orange-and-black pattern, and birds that learned to avoid orange from a
            Monarch encounter extend that avoidance to the Viceroy. The Viceroy gains predator
            protection through the Monarch's reputation rather than through its own chemistry.
          </p>
          <p>
            This mechanism — a palatable species mimicking an unpalatable one — is called Batesian
            mimicry. It holds as long as the model (Monarch) outnumbers the mimic (Viceroy) enough
            that most predator encounters are with the toxic species. Where Monarch populations
            have collapsed and Viceroys are common, birds encounter more mimics than models and
            the deterrent weakens. A yard with milkweed hosting Monarch caterpillars each summer
            produces adults that teach the orange-means-sick lesson to local birds — and those
            same birds extend the learned avoidance to every Viceroy in the same landscape.
          </p>
        </section>

        <section aria-labelledby="hibernaculum-heading">
          <h2 id="hibernaculum-heading">In October, the caterpillar rolls a willow leaf around itself, ties the roll to the branch with silk, and stays sealed inside until April</h2>
          <p>
            Female Viceroys lay eggs singly on the tips of willow, cottonwood, poplar, or aspen
            leaves — one egg per leaf, placed on the upper surface near the tip. The newly hatched
            caterpillar feeds from the tip inward, leaving the midrib intact. Early instars are
            brown and cream, resembling bird droppings — a camouflage that functions against
            predators scanning for insect-shaped objects on leaf surfaces. As the caterpillar
            grows, it constructs a silk-lined resting shelter by partially rolling a leaf.
          </p>
          <p>
            In late September or October, before the leaves fall, the third-instar caterpillar
            constructs a hibernaculum. It selects a still-attached willow leaf, rolls it
            lengthwise around itself, stuffs the interior with chewed leaf material and frass,
            and wraps the leaf petiole with silk threads that fasten the rolled leaf to the branch.
            Then it crawls inside the roll, seals the open end with more silk, and enters diapause.
            The leaf dries, turns brown, and hangs on the bare branch through winter — a small
            cylinder, roughly an inch long, tied at the stem.
          </p>
          <p>
            In April, when willows break bud and temperatures hold above freezing, the caterpillar
            chews through the silk seal and emerges. It resumes feeding on fresh willow leaves,
            completes its development over three to four weeks, and pupates for about two weeks.
            Adults from the overwintered generation emerge in late May and June.
          </p>
          <p>
            A willow branch cut in October that has small brown rolled-leaf cylinders tied to
            its twigs contains Viceroy caterpillars sealed inside those cylinders. Once the
            branch is cut and dries out, the caterpillar inside cannot survive the winter. The
            hibernaculum is attached to the living branch by silk threads; it depends on the
            branch remaining attached and structurally intact through winter. Pruning willows
            in October or November removes the overwintering generation.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Keep willows from October through April, plant milkweed, and leave late goldenrod standing</h2>
          <ol className="step-list">
            <li>
              <strong>Leave willows, cottonwoods, and poplars unpruned from October through April.</strong>{' '}
              Any pruning of these trees in fall removes branches with potential hibernacula
              attached. The rolled-leaf cylinders are not distinguishable from dead leaf debris
              at a glance — they hang on bare winter branches, one inch long, fastened at the
              petiole. If structural pruning is necessary, do it in late May or June after
              overwintered caterpillars have emerged and before the next generation of eggs
              has hatched. A cut branch left on the ground in late winter may let
              caterpillars on it survive if temperatures stay above freezing.
            </li>
            <li>
              <strong>Plant a native willow near a downspout, rain garden, or low wet corner.</strong>{' '}
              Black willow (<em>Salix nigra</em>), pussy willow (<em>Salix discolor</em>), and
              sandbar willow (<em>Salix interior</em>) are native to most of the Midwest and grow
              fast from live stakes — a six-inch cutting pushed into wet soil in spring roots
              without added treatment. A willow eight feet tall at a yard's wet edge supports
              Viceroy caterpillars each summer. Find willow availability by region with{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>
              .
            </li>
            <li>
              <strong>Plant common milkweed, swamp milkweed, or butterfly weed to keep Monarchs present.</strong>{' '}
              The protection the Viceroy's appearance provides depends on Monarchs flying the
              same airspace and teaching birds that orange means toxic. A yard with milkweed
              hosting Monarch caterpillars each summer produces adults that reinforce the
              learned avoidance that every Viceroy in the neighborhood benefits from. See
              host plant options in the{' '}
              <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>
                Plant Milkweed guide
              </button>
              .
            </li>
            <li>
              <strong>Leave late-blooming goldenrod and asters standing through September.</strong>{' '}
              Second-brood adult Viceroys are loading fat reserves in August and September before
              the overwintering caterpillar generation hatches. A yard with goldenrod blooming
              into October provides nectar for Viceroys during the same window when Monarchs
              are fueling for migration and Red Admirals are loading reserves before winter
              dormancy — three orange butterflies working the same flower heads the same afternoon.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who shares the willows in spring and the goldenrod in September</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('monarch-life')}>
                Monarch Butterfly
              </button>{' '}
              &mdash; the species the Viceroy mimics; every Monarch caterpillar eating milkweed
              in your yard becomes an adult that teaches local birds the orange-means-sick lesson;
              that lesson is what keeps Blue Jays from eating the Viceroys flying the same
              airspace — the Monarch's toxicity is an asset the Viceroy inherits for free
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('mourning-cloak')}>
                Mourning Cloak
              </button>{' '}
              &mdash; also uses willows as a primary caterpillar host; a willow in a Midwest yard
              in May holds Mourning Cloak egg rings circling small twigs and Viceroy eggs on
              leaf tips at the same time; Mourning Cloak adults overwinter behind bark on nearby
              trees while Viceroy caterpillars overwinter in sealed leaf rolls on the willow branches
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('tiger-swallowtail')}>
                Eastern Tiger Swallowtail
              </button>{' '}
              &mdash; also uses cottonwood and poplar as larval hosts, overlapping with the
              Viceroy's tree preferences; both species nectar on milkweed, ironweed, and Joe Pye
              weed in midsummer, often on the same flower heads in the same afternoon
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('red-admiral')}>
                Red Admiral
              </button>{' '}
              &mdash; shares fermenting fruit in October; a rotten crabapple on the ground in
              late September draws Red Admirals and Viceroys to the same spot; both species are
              loading reserves before overwintering — the Viceroy as a sealed caterpillar inside
              a willow leaf, the Red Admiral as an adult behind bark in the same yard
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('canada-goldenrod')}>
                Canada Goldenrod
              </button>{' '}
              &mdash; a patch of goldenrod blooming in late August draws both Viceroys and
              Monarchs to the same flower heads; watching them side by side is the best way
              to see the postmedian line on the Viceroy hindwing — the one mark that separates
              the mimic from the model
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Willows and milkweed together support both the mimic and the model it depends on.</strong>{' '}
            Find native willow and milkweed options with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , see the Monarch's host plant requirements in the{' '}
            <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>
              Plant Milkweed guide
            </button>
            , and explore what else uses the same late-summer goldenrod in the{' '}
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
