import type { Page } from '../App'

interface AmericanWoodcockProps {
  onNavigate: (page: Page) => void
}

export default function AmericanWoodcock({ onNavigate }: AmericanWoodcockProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/American_woodcock_%2895252%29.jpg/1280px-American_woodcock_%2895252%29.jpg"
          alt="An American Woodcock standing on leaf litter, showing its long bill, large eye set high on the head, and cryptic brown and rufous plumage"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={916}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:American_woodcock_(95252).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Woodcock</h1>
        <p className="hero__lead">
          The American Woodcock is a plump, secretive shorebird that lives far from shore —
          in young forests, alder thickets, and wet woodland edges across the eastern United
          States. Its long, flexible bill probes deep into soft soil for earthworms. Its
          eyes are set so high on its head that it has nearly 360-degree vision. Each spring
          at dusk, males perform an aerial courtship display that is one of the most
          remarkable spectacles in North American birdwatching. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            American Woodcocks spend most of the day resting in dense cover, relying on
            camouflage so effective they are rarely flushed even at arm&apos;s length.
            At dusk they move to moist, open ground to probe for earthworms, which make up
            most of the diet. The flexible bill tip can open underground without opening the
            base — an adaptation for gripping worms at depth. In spring, males gather at
            dawn and dusk on open singing grounds, calling with a nasal &quot;peent&quot;
            before spiraling skyward on twittering wings and descending in a cascading
            twitter. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/American_woodcock_in_Bryant_Park_%2854062%29.jpg/1280px-American_woodcock_in_Bryant_Park_%2854062%29.jpg"
            alt="An American Woodcock walking on the ground, showing the large eye positioned high on the head and the mottled brown plumage"
            width={1280}
            height={938}
            loading="lazy"
          />
          <figcaption>
            The large eye positioned near the top of the head gives the Woodcock nearly
            360-degree vision — useful for spotting predators while its bill is buried in the ground.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:American_woodcock_in_Bryant_Park_(54062).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            American Woodcocks are among the earliest migrants, arriving on the breeding
            grounds in late February and March as soon as the ground thaws enough to probe.
            Males begin the evening display flight immediately on arrival. Females nest on
            the forest floor, laying four eggs in a shallow scrape. Young birds can walk
            within hours of hatching and begin probing for food within days. By fall they
            migrate south, following the earthworm line south as ground freezes. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 5.4 million. [2]
            The U.S. Breeding Bird Survey shows a cumulative decline of approximately 68%
            since 1968. [3] The IUCN lists it as Least Concern. [4] The primary driver is
            loss of young forest habitat — the alder thickets, aspen, and early-successional
            forest the Woodcock requires are disappearing as forests mature and shrubby
            areas are developed or mowed. Earthworm availability in soft, moist soil is a
            secondary limiting factor. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Alder and young aspen thickets adjacent to moist openings are the most
              valuable Woodcock habitat. Maintaining or creating shrubby, wet woodland edges
              provides exactly what Woodcocks need for both nesting cover and food. [5]
            </li>
            <li>
              Skipping pesticides and lawn chemicals preserves the earthworm populations
              Woodcocks depend on. Earthworms are their primary food year-round. [5]
            </li>
            <li>
              Leaving moist low spots, seasonal pools, and wet edges in their natural state
              — rather than draining or filling them — keeps the soft soil Woodcocks probe
              in during migration and on the breeding grounds. [5]
            </li>
            <li>
              Visiting a local singing ground at dusk in March or early April to watch the
              display flight raises awareness of this species and its habitat needs. Many
              wildlife refuges host guided Woodcock walks in spring. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('whip-poor-will')}>
            <span className="neighbor-name">Whip-poor-will</span>
            <span className="neighbor-note">A fellow nocturnal bird that uses the same forest edges and begins its evening activity at the same dusk hour.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-screech-owl')}>
            <span className="neighbor-name">Eastern Screech-Owl</span>
            <span className="neighbor-note">A nocturnal hunter that shares the same young woodland edge habitats through spring and summer.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('hermit-thrush')}>
            <span className="neighbor-name">Hermit Thrush</span>
            <span className="neighbor-note">A fellow early-arriving migrant that also requires moist forest floor and leaf litter habitat.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('ovenbird')}>
            <span className="neighbor-name">Ovenbird</span>
            <span className="neighbor-note">A ground-nesting forest bird that shares the woodcock&apos;s need for large forest patches and a deep leaf litter layer.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/American_Woodcock/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: American Woodcock (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/american-woodcock-scolopax-minor" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — American Woodcock</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
