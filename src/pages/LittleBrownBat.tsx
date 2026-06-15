import type { Page } from '../App'

interface LittleBrownBatProps {
  onNavigate: (page: Page) => void
}

export default function LittleBrownBat({ onNavigate }: LittleBrownBatProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Banded_Little_brown_bat.jpg/1280px-Banded_Little_brown_bat.jpg"
          alt="A Little Brown Bat held by a researcher showing a leg band, revealing its brown fur, large ears, and thin wing membranes"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: NABat (North American Bat Monitoring Program)&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Banded_Little_brown_bat.jpg" target="_blank" rel="noopener noreferrer">Public domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Little Brown Bat</h1>
        <p className="hero__lead">
          The Little Brown Bat is one of the most common bats in North America — a small,
          agile flier with glossy brown fur, large ears, and a 9-inch wingspan. It eats
          nothing but flying insects: moths, beetles, midges, and mosquitoes, up to 1,000
          per hour. It is now listed as Endangered by the IUCN because of White-nose
          syndrome, a fungal disease that has killed millions since 2006. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Little Brown Bats roost through the day in attics, barns, tree cavities, and
            building gaps, then emerge at dusk to hunt over ponds, streams, and open
            woodland edges. They navigate entirely by echolocation — broadcasting calls
            above 40 kHz, far beyond human hearing, and tracking insects by their echoes.
            A single bat can eat a third of its body weight in insects on a warm night.
            Despite their tiny size (7 to 14 grams — lighter than a AA battery), they can
            live more than 30 years. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Little_Brown_Bat_FWS.jpg/1280px-Little_Brown_Bat_FWS.jpg"
            alt="A Little Brown Bat resting on a rough surface, showing its folded wings and small facial features"
            width={1280}
            height={858}
            loading="lazy"
          />
          <figcaption>
            Little Brown Bats roost in tight clusters to conserve heat. A maternity colony
            of 20 to 300 females produces one pup each June; the young bat can fly at
            three weeks old.
            <span className="photo-credit"> Photo: Don Pfritzer / USFWS&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Little_Brown_Bat_FWS.jpg" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Little Brown Bats mate in fall before entering hibernation and can hibernate
            in caves and old mines from October to April, often with thousands of other
            bats. White-nose syndrome strikes during hibernation: the fungus
            Pseudogymnoascus destructans grows on the skin, repeatedly waking bats and
            burning the fat reserves they need to survive winter. Many starve before spring.
            In surviving populations, females gather in warm maternity colonies in May,
            raise one pup each, and disperse in late summer. [2][3]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            White-nose syndrome has killed an estimated 5.7 million or more Little Brown
            Bats since 2006, causing population declines exceeding 90% in parts of the
            Northeast. [3] The IUCN lists the species as Endangered as of 2018. [2]
            Researchers are testing probiotic treatments and vaccines. The North American
            Bat Monitoring Program (NABat) coordinates acoustic surveys to track how
            surviving populations are responding. [4]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Install a bat box on a south- or southwest-facing wall or pole at 12 to
              15 feet — dark-colored boxes in full sun reach the 80–100°F temperatures
              maternity colonies need. A bat box placed before May may be occupied
              that summer. [4]
            </li>
            <li>
              Turn off unnecessary outdoor lights during the summer months. Artificial
              light concentrates insects at light sources and disrupts the foraging
              patterns bats depend on over open water and meadow edges. [4]
            </li>
            <li>
              Never enter a cave or mine marked &quot;CLOSED&quot; during winter (January
              through March). Human disturbance wakes hibernating bats, burning fat
              reserves they cannot replace until insects emerge in spring. [3]
            </li>
            <li>
              Report bat die-offs or unusual bat behavior to your state wildlife agency.
              Early detection of White-nose syndrome spread is critical for monitoring
              which populations are building resistance. [3]
            </li>
            <li>
              Plant native night-blooming species — evening primrose, native dogwoods,
              and native viburnums attract the moths and midges Little Brown Bats hunt
              most heavily. [4]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('common-nighthawk')}>
            <span className="neighbor-name">Common Nighthawk</span>
            <span className="neighbor-note">Another aerial insect hunter that works the same dusk sky over meadows and ponds, catching moths and beetles on the wing.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-screech-owl')}>
            <span className="neighbor-name">Eastern Screech-Owl</span>
            <span className="neighbor-note">A fellow night predator using the same woodland edges and building cavities; both species become active in the same window after sunset.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('luna-moth')}>
            <span className="neighbor-name">Luna Moth</span>
            <span className="neighbor-note">A large nocturnal moth flying the same summer nights — exactly the kind of prey Little Brown Bats hunt by echolocation.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('whip-poor-will')}>
            <span className="neighbor-name">Whip-poor-will</span>
            <span className="neighbor-note">Hunts flying insects from woodland edges at the same dusk hours, filling the air with its call as bats emerge from their roosts.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Myotis_lucifugus/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Little Brown Bat</a></li>
            <li><a href="https://www.iucnredlist.org/species/14176/22056344" target="_blank" rel="noopener noreferrer">IUCN Red List — Little Brown Bat</a></li>
            <li><a href="https://www.whitenosesyndrome.org/" target="_blank" rel="noopener noreferrer">White-Nose Syndrome Response Team</a></li>
            <li><a href="https://www.nabatmonitoring.org/" target="_blank" rel="noopener noreferrer">North American Bat Monitoring Program (NABat)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
