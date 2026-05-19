import type { Page } from '../App'

interface MourningDoveProps {
  onNavigate: (page: Page) => void
}

export default function MourningDove({ onNavigate }: MourningDoveProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Mourning_Dove_in_North_Florida.jpg/960px-Mourning_Dove_in_North_Florida.jpg"
          alt="Adult mourning dove standing on the ground, showing the soft pink-brown plumage, small rounded head, black spot below the eye, and long tapered tail"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mourning_Dove_%28Zenaida_macroura%29_-_Flickr_-_Andy_Reago_%26_Chrissy_McClarren.jpg/960px-Mourning_Dove_%28Zenaida_macroura%29_-_Flickr_-_Andy_Reago_%26_Chrissy_McClarren.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: USFWS&nbsp;&middot;&nbsp;Public domain via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Mourning Dove</h1>
        <p className="hero__lead">
          The bird on the driveway is walking, not hopping. Mourning doves have feet built for
          walking on flat surfaces &mdash; they set one foot in front of the other and move in
          a straight line toward the seed they spotted ten feet back. The bowed head and slow
          deliberate pace are the mechanics of a ground forager picking seeds individually off a
          hard surface. A finch takes seeds from a stem. A mourning dove takes seeds that have
          already fallen.
        </p>
        <p className="hero__lead">
          <em>Zenaida macroura</em> &mdash; the name means &ldquo;long tail&rdquo; &mdash; has
          a population near 350 million in North America. That number is possible because of one
          mechanism: a mated pair can raise five or six broods in a single season, sometimes
          cycling back through the same nest for back-to-back clutches, sometimes building
          directly on the stick platform of an abandoned robin nest. A single nest does not need
          to last. Enough of them do.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="nest-heading">
          <h2 id="nest-heading">The nest a crow can see through</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Mourning_Dove_Nest_-_Zenaida_macroura_%2826744948832%29.jpg/960px-Mourning_Dove_Nest_-_Zenaida_macroura_%2826744948832%29.jpg"
              alt="Mourning dove nest — a flat, loose platform of thin twigs resting in a shrub fork, holding two white eggs visible through gaps in the platform from below"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Mourning_Dove_in_North_Florida.jpg/480px-Mourning_Dove_in_North_Florida.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              A mourning dove nest in a shrub fork &mdash; two white eggs on a loose stick
              platform with gaps wide enough to see through from below. The male collects
              sticks and delivers them one at a time; the female sets them in place from the
              center of the platform. Construction takes two to three days. The finished
              platform has no cup, no walls, and no rain protection beyond whatever canopy
              is directly above it.
              <span className="photo-credit"> Photo: Wikimedia Commons / CC BY 2.0</span>
            </figcaption>
          </figure>
          <p>
            A mourning dove nest is a loose platform of twigs &mdash; thin, flat, and so sparsely
            constructed that the two eggs inside are visible through the gaps from below. The male
            collects sticks and delivers them one at a time; the female weaves or sets them in from
            a position at the center of the platform. The result is not a cup but a shelf: a 6-to-8-inch
            platform that rests in a branch fork or on a horizontal limb, with no walls, no raised
            edge, and no weather protection beyond whatever canopy is directly above.
          </p>
          <p>
            The eggs sit on this platform for 14 days while both parents take turns incubating,
            trading off at dawn and dusk. The male sits the day shift; the female takes the night.
            If the branch flexes in wind, the eggs shift. If the canopy overhead is thin, rain falls
            directly onto the eggs. Nest failures are common. The pair typically begins building the
            next nest while still carrying seeds back to the squabs from the previous clutch.
          </p>
          <p>
            Mourning doves nest at almost any height from ground level to 40 feet, in trees, shrubs,
            on building ledges, and on the ground where no branch is available. The pair returns to
            the same yard and often the same shrub across multiple years &mdash; not because of
            territorial attachment, but because the site produced successful broods and the birds
            have memory of that. A yard where the only trees are ornamentals pruned to bare primary
            limbs has few branch forks at nest height. A yard with a dense native shrub layer has
            dozens.
          </p>
        </section>

        <section aria-labelledby="crop-milk-heading">
          <h2 id="crop-milk-heading">Three days on crop milk, then seeds</h2>
          <p>
            When the eggs hatch, both parents feed the squabs from the crop &mdash; a specialized
            storage pouch in the esophagus that, during breeding season, produces a secretion called
            crop milk. Crop milk is not a liquid. It is a dense, cheese-like material sloughed
            from the crop lining and regurgitated directly into the squab&apos;s open bill. For
            the first three to four days, the squabs eat nothing else.
          </p>
          <p>
            Crop milk is higher in protein and fat than either cow&apos;s or human milk, and it is
            produced by both parents &mdash; unlike mammals, where only females produce milk. The
            male and female alternate feedings through the day, each regurgitating from a crop that
            has been partially digesting the secretion since the previous feeding. On day four or
            five, the parents begin mixing seeds into the deliveries. By day 13 or 14 the squabs are
            feathered and capable of short flight, and the pair has typically already begun
            incubating the next clutch.
          </p>
          <p>
            Six broods per season means a pair can raise up to 12 young in a single year under
            favorable conditions. Most years the actual number is lower &mdash; nests fail to storms,
            predators, and branch collapse &mdash; but the biological capacity for that output is
            built into the species. A yard that supports one successful brood in May can support
            another in June and another in August from the same pair.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Native seed-head plants standing through winter, bare ground near seeds, one unpruned native shrub, and no herbicides in the back section</h2>

          <figure className="species-content-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mourning_Dove_%28Zenaida_macroura%29_-_Flickr_-_Andy_Reago_%26_Chrissy_McClarren.jpg/960px-Mourning_Dove_%28Zenaida_macroura%29_-_Flickr_-_Andy_Reago_%26_Chrissy_McClarren.jpg"
              alt="Mourning dove perched on a branch showing the full body — soft pinkish-brown plumage, pale gray-blue head, delicate black spot on the cheek, and the long pointed tail folded tight"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Mourning_Dove_in_North_Florida.jpg/640px-Mourning_Dove_in_North_Florida.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              A mourning dove perched between foraging runs. Doves fill their crop &mdash; large
              enough to hold close to 17,000 small seeds at once &mdash; then retreat to a sheltered
              perch and sit motionless while their digestive system works. What looks like
              resting on a wire is a crop full of seeds being processed.
              <span className="photo-credit"> Photo: Andy Reago &amp; Chrissy McClarren / CC BY 2.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Let native seed-head plants stand through winter.</strong>{' '}
              Purple coneflower, black-eyed Susan, wild sunflower, and native grasses drop seeds
              throughout late summer and autumn. Those seeds accumulate on the ground under the
              plant and persist through early winter under light snow cover. This is the mourning
              dove&apos;s food source from October through March. A bed cut to the ground in October
              removes it. A bed left standing deposits it. Find what grows in your region at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Leave a patch of bare or leaf-littered ground near seed plants.</strong>{' '}
              Mourning doves pick seeds individually off hard surfaces, sweeping their bill in a
              small arc as they walk. Dense turf grass is difficult to forage in &mdash; the seeds
              are too small and the blades too close together. A bare patch under a bird feeder,
              or the leaf-littered ground under a native shrub, gives doves the flat, open surface
              they need to feed efficiently. Without it, they pass the yard over for a neighboring
              driveway or gravel path.
            </li>
            <li>
              <strong>Plant at least one dense native shrub and leave it unpruned.</strong>{' '}
              Mourning doves return to yards where previous nesting attempts succeeded. A native
              viburnum, elderberry, or hawthorn with branch forks at 4 to 8 feet gives the pair
              a site to build the loose stick platform the female assembles from the inside out.
              A shrub pruned to bare primary limbs in spring has no suitable forks. See{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>{' '}
              for native shrubs that serve both nesting structure and fall seed production.
            </li>
            <li>
              <strong>Avoid herbicide use in the back section of the yard.</strong>{' '}
              The mourning dove&apos;s diet is nearly 100% seeds gathered from the ground,
              including seeds from ragweed, foxtail, pigweed, and smartweed &mdash; plants that
              pre-emergent herbicide eliminates from the seed bank before they sprout in spring.
              A back corner treated with weed control in March produces far fewer seeds on the
              ground by October. That same corner left untreated accumulates seeds through the
              fall that doves work through from September to February. See{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticide Guide
              </button>{' '}
              for which products reduce ground-level seed production.
            </li>
          </ol>
        </div>

        <section aria-labelledby="seeds-heading">
          <h2 id="seeds-heading">17,000 seeds and a safe place to digest</h2>
          <p>
            A mourning dove&apos;s crop can hold close to 17,000 small weed seeds at one load. The
            bird spends 20 to 30 minutes walking across bare ground or thin leaf litter, picking
            seeds individually, filling the crop. Then it walks or flies to a sheltered perch
            &mdash; a wire, a fence post, the branch of an evergreen &mdash; and sits motionless
            for 20 to 40 minutes while the crop and gizzard process the load. What looks like
            a dove resting on a wire at midday is a dove digesting.
          </p>
          <p>
            The seed menu is broad: black-eyed Susan, purple coneflower, wild sunflower, native
            grasses, sedges, and dozens of weed species including ragweed, foxtail, pigweed, and
            smartweed. Mourning doves eat almost no animal matter &mdash; no insects, no caterpillars,
            no berries. The diet is nearly 100% seeds, gathered from the ground. A yard with a
            lawn treated with pre-emergent weed control and mowed to two inches has very few seeds
            on the ground in winter. A yard with a back section left unmowed past October and a
            few native seed-head plants standing has seeds available from September through February.
          </p>
          <p>
            The mournful four-note call the species is named for &mdash; <em>ooh-ah-oo-oo-oo</em>,
            heard from a perch or from inside a tree canopy &mdash; is a territorial and contact call
            produced by the male. The sound carries a long distance at low frequency. A yard with
            mourning doves calling in March is a yard where the pair has already identified a
            nesting site and is establishing their territory before migration brings competing
            individuals back through.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The mourning dove&apos;s ground foraging overlaps with other yard residents.</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('dark-eyed-junco')}>
              Dark-eyed Juncos
            </button>{' '}
            scratch through leaf litter for the same seeds from October through April.{' '}
            <button className="link-button" onClick={() => onNavigate('american-robin')}>
              American Robins
            </button>{' '}
            use the same bare ground patches for earthworm foraging. The back corner of the
            yard &mdash; unmowed, leaf-littered, seeded with native plants &mdash; is
            operating as habitat for multiple species at once. Start the seed-head layer at{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or meet more ground-foraging neighbors in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            .
          </p>
        </div>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}has native seed-head plants and shrubs that provide both the winter food supply
            and the branch forks the pair returns to for nesting.{' '}
            <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
              Find Plants Near Me
            </button>
            {' '}shows what seed-producing natives grow in your specific region.{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>
            {' '}explains why the leaf-littered ground under shrubs is the same surface doves
            pick seeds from through winter.{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticide Guide
            </button>
            {' '}covers herbicide use and what it does to the weed seed bank doves forage from
            September through February.
          </p>
        </div>
      </div>
    </>
  )
}
