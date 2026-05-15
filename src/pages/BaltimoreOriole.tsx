import type { Page } from '../App'

interface BaltimoreOrioleProps {
  onNavigate: (page: Page) => void
}

export default function BaltimoreOriole({ onNavigate }: BaltimoreOrioleProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Baltimore_Oriole-_dorsum.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Male Baltimore Oriole, vivid flame-orange and black plumage, hanging from a native tree branch"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: TonyCastro · <a href="https://commons.wikimedia.org/wiki/File:Baltimore_Oriole-_dorsum.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons */}
          Photo: TonyCastro&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Baltimore_Oriole-_dorsum.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Baltimore Oriole</h1>
        <p className="hero__lead">
          On a May morning, a flash of neon orange appears in the elm canopy — or where
          the elms used to be. The Baltimore Oriole has just crossed the Gulf of Mexico.
          It is looking for the same things it has always looked for: tall trees with
          pendant branches, dark native fruits, and a landscape free of the pesticides
          that would poison the caterpillars it needs to feed its young. If it finds
          those things in your yard, it may stay through August. If it doesn&apos;t,
          it will keep moving.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="indicator-heading">
          <h2 id="indicator-heading">What the orange means</h2>
          <p>
            The Baltimore Oriole (<em>Icterus galbula</em>) is the state bird of Maryland and
            one of the most visually recognizable songbirds in North America. It is also
            a neotropical migrant — one of those species whose survival requires an
            ecologically intact chain of habitat spanning boreal Canada to Central America.
            Approximately 12 million Baltimore Orioles remain, but the population has declined
            roughly 24% since 1966.{' '}
            <a
              href="https://pif.birdconservancy.org/bird-vulnerability/scorecard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Partners in Flight
            </a>{' '}
            attribute that loss to habitat pressure at both ends of migration simultaneously:
            breeding habitat shrinking in North America and wintering forest disappearing
            in Central America.
          </p>
          <p>
            Seeing a Baltimore Oriole in your yard is not simply pleasant. It is evidence
            that your landscape has retained enough of what was here — tall native trees
            with flexible drooping branches, native fruiting shrubs, a food web intact
            enough to support insect-feeding birds — to serve as a stop on one of the
            most demanding journeys in the animal kingdom.
          </p>
        </section>

        <section aria-labelledby="nest-heading">
          <h2 id="nest-heading">The nest — and why elms mattered</h2>
          <p>
            The Baltimore Oriole builds one of North America&apos;s most architecturally
            sophisticated nests: a woven hanging pouch, three to four inches deep,
            suspended from the tips of drooping branches where ground predators cannot
            reach. The female weaves the structure from plant fibers, bark strips, and grass
            over several days. The drooping pendant tips of American elms{' '}
            (<em>Ulmus americana</em>) were ideal for this — long, flexible, providing
            exactly the branch architecture the nest requires.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Baltimore_oriole_nest_%2864055%29.jpg"
                  alt="Baltimore Oriole pendant nest — a woven fiber pouch suspended from a drooping branch tip, four to five inches deep"
                  loading="lazy"
                />
                <figcaption>
                  The pendant nest is engineered over several days by the female alone — plant fibers, bark strips, and grapevine strands woven into a hanging pouch that stretches as nestlings grow. The drooping tips of American elms provided ideal anchors for this architecture. Dutch elm disease removed those anchors from most suburbs in a single generation.
                  <span className="photo-credit"> Photo: Rhododendrites · <a href="https://commons.wikimedia.org/wiki/File:Baltimore_oriole_nest_(64055).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            Dutch elm disease eliminated an estimated 100 million American elms from eastern
            North America between 1950 and 2000. The oriole&apos;s preferred nest tree
            disappeared from most of its former range within a human lifetime. Orioles
            have adapted to other tall trees — cottonwoods, weeping willows, and large
            native shade trees with pendant growth — but the loss of elms was a measurable
            blow to breeding habitat availability across the range.{' '}
            <a
              href="https://www.allaboutbirds.org/guide/Baltimore_Oriole/lifehistory"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cornell Lab of Ornithology
            </a>{' '}
            documents the elm dependency in detail.
          </p>
        </section>

        <section aria-labelledby="diet-heading">
          <h2 id="diet-heading">Diet — dark fruits, nectar, and caterpillars</h2>
          <p>
            Baltimore Orioles eat dark-colored fruits — cherries, elderberries, mulberries,
            serviceberries — nectar from tubular flowers, and caterpillars and other insects
            during the breeding season. The caterpillar protein is critical for nestlings and
            cannot be replaced by feeders. A yard without native trees and shrubs providing
            insect habitat cannot sustain an oriole family through the summer no matter how
            many jelly feeders are out.
          </p>
          <p>
            Grape jelly and orange halves are among the most effective feeder attractants for
            any bird in North America — a newly arrived oriole will typically find these within
            24 to 48 hours of setup. But feeders are a supplement, not a habitat. The birds
            that stay through August, the ones that breed and raise young, are the ones that
            found enough insects and native fruit to get through the season.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that bring Baltimore Orioles back</h2>
          <ol className="step-list">
            <li>
              <strong>Set out grape jelly and orange halves by the first week of May.</strong>{' '}
              Place them in an open area visible from a window. Orioles arriving from across
              the Gulf of Mexico will find feeders within days. Limit jelly to one to two
              tablespoons per day — too much causes health problems. Halved oranges on a
              spike or platform feeder work as well as any commercial oriole feeder.
            </li>
          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Garden_bird_bath_Nuthurst_West_Sussex_England_01.jpg" alt="Garden bird bath with stone basin" loading="lazy" />
            <figcaption>
              Orioles seek water as reliably as food during migration. A clean, shallow basin at or below eye level — refilled every few days — is the most immediate thing a yard can offer a bird passing through on a 2,000-mile journey.
              <span className="photo-credit"> Photo: Acabashi&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
            <li>
              <strong>Plant native elderberry as your first priority.</strong>{' '}
              Native elderberry (<em>Sambucus canadensis</em>) is among the highest
              wildlife-value shrubs available to homeowners: it fruits in late summer when
              orioles are still present, tolerates most soil types, and supports hundreds
              of insect species that provide the protein orioles need for breeding. Add
              serviceberry (<em>Amelanchier</em> spp.) for early-season fruit and native
              black cherry (<em>Prunus serotina</em>) for midsummer foraging.
            </li>
            <li>
              <strong>Keep tall native trees with pendant growth.</strong>{' '}
              Orioles nest in trees with long, flexible drooping branch tips — the
              architecture their suspended nest requires. Native cottonwoods, large shade
              trees, and disease-resistant elm cultivars provide this. A yard with only
              low shrubs cannot support nesting orioles regardless of food availability.
            </li>
            <li>
              <strong>Stop systemic pesticide use on trees during the breeding season.</strong>{' '}
              Neonicotinoids applied to trees move into the vascular system and persist in
              the wood. Insects feeding in treated trees carry sublethal doses. Orioles
              eating those insects accumulate those doses across a breeding season — and
              nestlings are most vulnerable. May through August is the window that matters.
            </li>
          </ol>
        </div>

        <section aria-labelledby="migration-heading">
          <h2 id="migration-heading">The journey — and what it asks of your yard</h2>
          <p>
            Baltimore Orioles arrive in North America in May and depart by August — spending
            only four months on the breeding grounds before returning to Central America,
            Mexico, and the Caribbean for the winter. Both directions require crossing the
            Gulf of Mexico, a nonstop water crossing of 500 to 600 miles completed in a
            single overnight flight.
          </p>
          <p>
            The bird that lands in your yard in the first week of May has just done this.
            It is looking for food and safety. What it finds in the next few days will
            determine whether it stays or keeps moving north. Wintering forest loss in
            Central America — rapid and ongoing — compounds the pressure on every bird
            that makes this crossing. The conservation chain has to hold at every link:
            the wintering grounds, the migration corridor, and your yard in May.
          </p>
        </section>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The connection to monarchs</h2>
          <p>
            The same May morning that a monarch arrives to nectar on milkweed in a
            Camp Monarch yard, a Baltimore Oriole may visit the elderberry planted
            two feet away. Both just crossed the Gulf of Mexico. Both depend on an intact
            native landscape from Canada to the tropics — the same insects, the same
            food web, the same freedom from systemic pesticides during the breeding season.
          </p>
          <p>
            Neither species interacts with the other directly. But their habitat requirements
            overlap almost completely. A yard that supports monarchs through August — milkweed
            present, pesticide use minimal, native plants providing insect food — is exactly
            the yard that an oriole family can use. What you build for one, you build for both.
          </p>
          <p>
            This is why Camp Monarch uses indicator species: not to track each species
            individually, but to recognize when a yard has reached the ecological threshold
            that makes it genuinely hospitable. An oriole family staying through the summer
            is that evidence.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to take the next step?</strong>{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('plant-milkweed')}
            >
              Plant milkweed
            </button>
            {' '}to add monarch breeding habitat alongside oriole-friendly native plants, or{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('choose-a-plant')}
            >
              choose a native plant
            </button>
            {' '}— elderberry and serviceberry support orioles, monarchs, and dozens of other species simultaneously.
          </p>
        </div>
      </div>
    </>
  )
}
