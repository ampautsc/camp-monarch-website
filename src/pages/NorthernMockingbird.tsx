import type { Page } from '../App'

interface NorthernMockingbirdProps {
  onNavigate: (page: Page) => void
}

export default function NorthernMockingbird({ onNavigate }: NorthernMockingbirdProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Mimus_polyglottos_adult.jpg/960px-Mimus_polyglottos_adult.jpg"
          alt="Adult Northern Mockingbird perched on a branch — pale gray above and whitish below, with a long tail, white wingbars visible, and a slightly curved bill open mid-song"
          className="species-hero-image"
          style={{ objectPosition: 'center 35%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mockingbird_jan_2011_cropped.jpg/960px-Mockingbird_jan_2011_cropped.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Ken Thomas&nbsp;&middot;&nbsp;Public domain via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Northern Mockingbird</h1>
        <p className="hero__lead">
          On a May night, a Northern Mockingbird male sings from 11pm until 2am without
          repeating a phrase. Each phrase runs two to six seconds, borrowed from a different
          species, repeated three or four times, then replaced by the next. He can cycle
          through 150 to 200 distinct patterns in a single hour and has been recorded
          singing for four hours without a break.
        </p>
        <p className="hero__lead">
          The Northern Mockingbird — <em>Mimus polyglottos</em>, &ldquo;many-tongued mimic&rdquo; —
          builds its song library by listening. Every phrase comes from a real source: a wood
          thrush at the forest edge, a blue jay alarm call, a car alarm three blocks away. The
          bird holds each sound in memory and cycles through them for the rest of its life.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="mimicry-heading">
          <h2 id="mimicry-heading">Two hundred songs, each learned from a different neighbor</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mockingbird_jan_2011_cropped.jpg/960px-Mockingbird_jan_2011_cropped.jpg"
              alt="Northern Mockingbird perched on a bare winter branch, head turned slightly, the gray-and-white plumage clear against a pale sky"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Mimus_polyglottos_adult.jpg/480px-Mimus_polyglottos_adult.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              The Northern Mockingbird is a year-round resident across most of the United States.
              It does not migrate and it does not share a winter territory. In January, one bird
              holds one acre anchored to a single reliable berry source — and defends it
              against robins, waxwings, and starlings many times per day.
              <span className="photo-credit"> Photo: Ken Thomas&nbsp;·&nbsp;Public domain / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            A male mockingbird acquires songs during two learning windows: as a juvenile in
            his first autumn, and again as a young adult encountering new sounds. Once a phrase
            is learned it stays — the library grows, not replaces. By middle age a male carries
            100 to 200 distinct song types. He does not cycle through them randomly. Ornithologists
            studying the display pattern call it &ldquo;continuous variety&rdquo;: the bird works through
            his full library in rotating sequence, each phrase repeated before the next begins,
            then circles back to the start.
          </p>
          <p>
            Captive birds raised without exposure to other species develop impoverished,
            repetitive songs. Field experiments placing mockingbirds in different acoustic
            environments found that the birds in species-rich habitats accumulated larger
            repertoires than birds in species-poor habitats — not because they were different
            birds, but because they had more to listen to. The song is a direct readout of
            the species list in the surrounding half-mile, accumulated over the bird&apos;s lifetime.
          </p>
          <p>
            A male that is still unmated in May sings at night. Unmated males begin after dark
            and continue until 2 or 3am, resume before dawn, and repeat this through most of
            the breeding season. Paired males stop the nocturnal singing within days of finding
            a mate. A mockingbird singing at midnight in late May is a specific signal — not
            territorial display in general, but a mating advertisement broadcast into the
            hours when competing sounds from traffic and human activity drop below detection.
          </p>
        </section>

        <section aria-labelledby="song-history-heading">
          <h2 id="song-history-heading">What disappears from the repertoire when the neighbors leave</h2>
          <p>
            Wood thrush populations have declined more than 60 percent since 1966. Whip-poor-will
            populations have dropped by more than 70 percent. Eastern meadowlark numbers have
            fallen by more than half. Each of these species produces a distinctive call that a
            young mockingbird in the right neighborhood adds to its library. In areas where they
            still breed, mockingbirds carry their voices. In areas from which they have been
            gone for twenty years, young birds cannot.
          </p>
          <p>
            This is not a claim about mockingbird decline — Northern Mockingbirds are holding
            their numbers across most of the continent. It is an observation about what a song
            carries. An older mockingbird in a neighborhood that still has wood thrushes sings
            that phrase for the rest of its life. Its younger neighbor, if the wood thrushes
            have gone, does not add it. The phrase does not pass from old bird to young bird
            directly. It enters the repertoire only through hearing the source. Once the source
            is gone, the phrase drops out.
          </p>
          <p>
            A mockingbird song in the same yard in 1970 and today is not the same song. The
            difference is audible to anyone who can identify the species being mimicked. It
            takes the same morning and the same patience as any birdwatching — sitting still,
            listening, recognizing the phrase, tracking what comes and goes across years.
          </p>
        </section>

        <section aria-labelledby="winter-territory-heading">
          <h2 id="winter-territory-heading">One bird, one shrub, one defended acre in January</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Mimus_polyglottos_adult.jpg/480px-Mimus_polyglottos_adult.jpg"
              alt="Northern Mockingbird in alert posture on a low perch, white wingbars visible against gray upperwing, long tail held level — a bird in active territory patrol"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mockingbird_jan_2011_cropped.jpg/480px-Mockingbird_jan_2011_cropped.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              In winter the Northern Mockingbird defends a food territory alone —
              not a breeding pair, not a flock, one bird on one patch. It will
              dive-bomb a robin twice its size, a deer, a cat, or a person who
              approaches the defended shrub. The territory collapses to roughly
              one acre and is organized entirely around the location of the food.
              <span className="photo-credit"> Photo: Ken Thomas&nbsp;·&nbsp;Public domain / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            In late October the Northern Mockingbird shifts its diet from insects to fruit
            and establishes a winter food territory. Unlike the breeding territory — which a
            mated pair defends together — the winter territory is defended alone, against
            every fruit-seeking species that approaches: American Robins, Cedar Waxwings,
            European Starlings, Hermit Thrushes, and Northern Flickers.
          </p>
          <p>
            The defended area contracts to roughly one acre, organized around whatever
            fruiting plant the bird has claimed. A bird with a productive winterberry holly
            holding dozens of red berry clusters in late November has a resource worth
            defending — and it defends it. The chases happen 10 to 20 times per day when
            fruit-seeking flocks move through the neighborhood. Mockingbirds will physically
            collide with birds approaching the defended shrub. They will attack cats, dogs,
            and humans who come too close.
          </p>
          <p>
            A bird without a defendable fruit source moves continuously. It travels farther,
            burns more calories, and feeds on depleted sites other birds have already worked.
            The food-territory-holding bird spends those same hours perched within ten feet
            of its berry source. The caloric difference across a February with two weeks below
            freezing is not negligible.
          </p>
        </section>

        <section aria-labelledby="actions-heading">
          <h2 id="actions-heading">What gives a mockingbird something to defend in winter</h2>
          <ol className="action-list">
            <li>
              <strong>Winterberry holly (<em>Ilex verticillata</em>)</strong> — native deciduous
              shrub, 6 to 10 feet, tolerates wet to moist soils. Requires both a female plant
              (which produces berries) and a male pollinator within roughly 50 feet; one male
              pollinates up to five females. The bright red berries hold through January on bare
              stems — the exact window when a mockingbird needs a defendable food source and
              everything else in the neighborhood has been stripped.
            </li>
            <li>
              <strong>Native hawthorn (<em>Crataegus</em> species)</strong> — small tree, 15 to
              25 feet, persistent red or orange fruit through December and January. The dense
              thorny branches function as both a food source and a singing perch. A mockingbird
              on a hawthorn sings from the highest branch and descends to feed — the same tree
              serves both functions simultaneously. The thorns also deter nest predators during
              breeding season.
            </li>
            <li>
              <strong>Arrowwood viburnum (<em>Viburnum dentatum</em>)</strong> — native shrub,
              6 to 8 feet, blue-black berries ripening in August and September. The early timing
              feeds the mockingbird in fall — two months before winterberry comes in. A property
              with both arrowwood and winterberry holds fruit from August through January, which
              is the full window from fall territory establishment through the deep winter.
            </li>
            <li>
              <strong>Leave the fruit on the plant through March.</strong> The mockingbird&apos;s
              winter territory holds value only as long as the food source lasts. Pruning or
              deadheading the winterberry in December for visual tidiness empties the pantry
              the bird spent weeks establishing. Leave the fruit until March, when insects begin
              reappearing and the bird shifts back to protein feeding.
            </li>
          </ol>
        </section>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who shares the winter berry patch — and who the mockingbird chases off it</h2>
          <ul>
            <li>
              <button className="link-button" onClick={() => onNavigate('cedar-waxwing')}>
                Cedar Waxwing
              </button>
              {' — '}Nomadic flocks of 20 to 100 waxwings descend on hawthorn and winterberry
              and strip the fruit in minutes. A mockingbird holding that same shrub will chase
              individual waxwings repeatedly, but when the full flock arrives it is outnumbered
              and retreats. The waxwings take the cache; the mockingbird waits, then resumes
              defense of whatever remains.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('hermit-thrush')}>
                Hermit Thrush
              </button>
              {' — '}Quieter, smaller, and less aggressive than the mockingbird, the Hermit
              Thrush holds a small individual winter territory on the same property. It forages
              along the edges of the mockingbird&apos;s defended patch — picking up berries near
              the ground while the mockingbird defends the upper branches. Both are year-round
              territory holders in the same yard on the same winter week.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('american-robin')}>
                American Robin
              </button>
              {' — '}Robin flocks of 50 to 200 individuals move through neighborhoods tracking
              fruit, and a mockingbird defending a winterberry or hawthorn spends considerable
              energy chasing incoming robins. When the robin flock is large enough, the
              mockingbird cannot hold the territory and the robins strip the patch.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('wood-thrush')}>
                Wood Thrush
              </button>
              {' — '}One of the species most commonly mimicked by mockingbirds in the eastern
              United States — its flutelike phrases appear in mockingbird songs wherever wood
              thrushes nest nearby. Wood thrush populations have dropped more than 60 percent
              since 1966, removing the phrase from mockingbird repertoires in neighborhoods
              where they no longer breed.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('winterberry-holly')}>
                Winterberry Holly
              </button>
              {' — '}Native deciduous holly; bright red berries hold through January on bare
              stems in wet-edge sites. A well-fruited female plant within view of open ground
              gives the mockingbird a resource worth defending for three to four months.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('arrowwood-viburnum')}>
                Arrowwood Viburnum
              </button>
              {' — '}Native shrub; blue-black fruit ripens in August and September — earlier
              than winterberry, covering the fall window before the mockingbird&apos;s primary
              winter food comes in. Planting both species ensures the territory is worth
              establishing from early fall onward.
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
