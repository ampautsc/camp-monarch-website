import type { Page } from '../App'

interface EasternScreechOwlProps {
  onNavigate: (page: Page) => void
}

export default function EasternScreechOwl({ onNavigate }: EasternScreechOwlProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Megascops_asio_117268159.jpg/1280px-Megascops_asio_117268159.jpg"
          alt="An Eastern Screech-Owl in gray morph perched against tree bark, its camouflage making it nearly invisible"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Zygy&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Megascops_asio_117268159.jpg" target="_blank" rel="noopener noreferrer">CC0 / Public Domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Screech-Owl</h1>
        <p className="hero__lead">
          The Eastern Screech-Owl is a small owl — about 8 to 10 inches tall — with large
          yellow eyes and prominent ear tufts. It comes in two color morphs: gray (more
          common in the North) and rufous, or reddish-brown (more common in the South).
          Its bark-like patterning makes it nearly invisible when roosting against a tree
          trunk. It lives year-round across the eastern United States wherever trees and
          cavities are available. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Eastern Screech-Owls are strictly nocturnal. They hunt from a low perch, dropping
            silently onto prey below. The diet is remarkably varied: small mammals, birds,
            insects, earthworms, crayfish, frogs, and lizards. They swallow small prey whole
            and regurgitate the indigestible parts as pellets. During the day they roost
            inside tree cavities or pressed against a bark-colored trunk, motionless and
            largely undetectable. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Eastern_Screech_Owl.jpg/1280px-Eastern_Screech_Owl.jpg"
            alt="An Eastern Screech-Owl in rufous morph, showing its reddish-brown plumage and yellow eyes"
            width={1280}
            height={1920}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            The rufous color morph is more common in the South; gray birds predominate in
            the North. Both morphs roost pressed against bark, relying on camouflage
            rather than flight to avoid detection.
            <span className="photo-credit"> Photo: Wolfgang Wander&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Eastern_Screech_Owl.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Eastern Screech-Owls nest in tree cavities — natural holes, old woodpecker
            holes, and nest boxes — and do not build a nest, laying eggs on the cavity
            floor or on existing debris. Three to five eggs per clutch, incubated almost
            entirely by the female while the male brings food. They do not migrate.
            Their call is not a screech but rather a descending whinny and a long, mournful
            trill — two sounds frequently heard on spring and fall nights in wooded
            suburbs. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Partners in Flight estimates the breeding population at about 900,000. [2] The
            U.S. Breeding Bird Survey shows a long-term decline of about 37% since 1966,
            roughly 1% per year. [3] The IUCN lists it as Least Concern. [4] Habitat
            fragmentation, loss of large trees with natural cavities, and secondary
            poisoning from rodenticides are among the likely causes of decline. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              A nest box with a 3-inch entry hole, mounted 10 to 30 feet up on a large
              tree in or near a wooded area, provides the cavity screech-owls need. They
              will often roost in the box year-round, not just during nesting. [5]
            </li>
            <li>
              Dead trees left standing provide natural cavities. A large-diameter snag is
              premium screech-owl habitat. [5]
            </li>
            <li>
              Avoiding second-generation anticoagulant rodenticides (found in many common
              bait products) prevents secondary poisoning of owls that eat poisoned
              rodents. Snap traps are the safer alternative. [5]
            </li>
            <li>
              Keeping outdoor lights off or switching to motion-activated lights reduces
              disruption to nocturnal hunting activity. [5]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('red-tailed-hawk')}>
            <span className="neighbor-name">Red-tailed Hawk</span>
            <span className="neighbor-note">The daytime raptor that hunts the same territory the screech-owl covers at night.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('downy-woodpecker')}>
            <span className="neighbor-name">Downy Woodpecker</span>
            <span className="neighbor-note">The woodpecker whose old cavity holes screech-owls often adopt for nesting and roosting.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('northern-flicker')}>
            <span className="neighbor-name">Northern Flicker</span>
            <span className="neighbor-note">Excavates large cavities that Eastern Screech-Owls regularly move into after the woodpeckers finish with them.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-robin')}>
            <span className="neighbor-name">American Robin</span>
            <span className="neighbor-note">A common mobbing species — robins will pursue and alarm-call at roosting screech-owls they discover in the daytime.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.allaboutbirds.org/guide/Eastern_Screech-Owl/lifehistory" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — All About Birds: Eastern Screech-Owl (Life History)</a></li>
            <li><a href="https://pif.birdconservancy.org/population-estimates-database/" target="_blank" rel="noopener noreferrer">Partners in Flight — Population Estimates Database</a></li>
            <li><a href="https://www.usgs.gov/tools/north-american-breeding-bird-survey-results-and-analysis" target="_blank" rel="noopener noreferrer">USGS — North American Breeding Bird Survey, Results and Analysis</a></li>
            <li><a href="https://datazone.birdlife.org/species/factsheet/eastern-screech-owl-megascops-asio" target="_blank" rel="noopener noreferrer">BirdLife International / IUCN Red List — Eastern Screech-Owl</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
