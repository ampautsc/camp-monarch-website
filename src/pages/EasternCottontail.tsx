import type { Page } from '../App'

interface EasternCottontailProps {
  onNavigate: (page: Page) => void
}

export default function EasternCottontail({ onNavigate }: EasternCottontailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/20250708_eastern_cottontail_front_yard_PD208193.jpg/1280px-20250708_eastern_cottontail_front_yard_PD208193.jpg"
          alt="An Eastern Cottontail rabbit in a yard, showing its brown-gray fur, large eyes, and distinctive white cotton-ball tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Paul Danese&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:20250708_eastern_cottontail_front_yard_PD208193.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Cottontail</h1>
        <p className="hero__lead">
          The Eastern Cottontail is the most common rabbit in eastern North America and
          one of the most familiar backyard wildlife species. It is brown-gray above with
          a rust-colored nape, white below, large dark eyes, long ears, and a small round
          tail that flashes white when it runs. It lives in brushy edges, meadows, gardens,
          shrubby suburban lots, and forest edges from southern Canada to South America.
          [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Eastern Cottontails are most active at dawn and dusk, resting in dense cover
            during the middle of the day and at night. They graze on grasses, clovers,
            wildflowers, garden vegetables, and garden perennials in warmer months, and
            switch to bark, twigs, and dried stems in winter. When alarmed, they freeze
            first, then bolt in a zigzag pattern, flashing the white tail as they run.
            A cottontail&apos;s territory is typically only about an acre. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Blacklick_Woods_-_Eastern_cottontail_feeding_1.jpg/1280px-Blacklick_Woods_-_Eastern_cottontail_feeding_1.jpg"
            alt="An Eastern Cottontail rabbit feeding in a meadow, showing its alert posture and brown-gray coloration"
            width={1280}
            height={896}
            loading="lazy"
          />
          <figcaption>
            Cottontails graze at the edges of cover, always within a few hops of dense
            vegetation where they can disappear if a hawk appears overhead.
            <span className="photo-credit"> Photo: Sixflashphoto&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Blacklick_Woods_-_Eastern_cottontail_feeding_1.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Eastern Cottontails breed from late January through September and can raise
            up to seven litters per year, with three to five young per litter. The female
            digs a shallow depression in the ground, lines it with grass and fur pulled
            from her own belly, and covers the nest when she leaves. Young are born naked
            and blind but develop quickly — they are furred at 10 days, open-eyed at 12
            days, and on their own at three to four weeks. Cottontails do not burrow;
            they rest in dense vegetation or use shallow depressions called forms. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Eastern Cottontail is abundant and not of conservation concern. [2] The
            IUCN lists it as Least Concern. [3] It is one of the most important prey
            species in eastern North America, consumed by red foxes, coyotes, hawks,
            owls, bobcats, weasels, and domestic cats. Its very high reproductive rate
            is an evolutionary response to very high predation pressure. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Dense low-growing shrubs, brush piles, and native meadow grasses provide
              the resting and escape cover cottontails depend on. A brush pile at the edge
              of the yard is used immediately after it is built. [4]
            </li>
            <li>
              Native clovers, grasses, and wildflowers in unmowed areas or meadow patches
              provide grazing habitat. Leaving a section of lawn unmowed through spring
              and summer creates foraging habitat cottontails use at dawn and dusk. [4]
            </li>
            <li>
              Keeping cats indoors protects cottontail young, which stay in shallow ground
              nests during the day and are very vulnerable to cat predation. [4]
            </li>
            <li>
              Skipping rodenticides prevents secondary poisoning of the hawks, foxes, and
              owls that depend on cottontails as a primary food source. [4]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('red-tailed-hawk')}>
            <span className="neighbor-name">Red-tailed Hawk</span>
            <span className="neighbor-note">A major predator of cottontails that hunts over the same meadows and open edges where rabbits graze.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-fox')}>
            <span className="neighbor-name">Red Fox</span>
            <span className="neighbor-note">The most significant mammalian predator of cottontails; the two species share the same brushy edge habitat.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-meadowlark')}>
            <span className="neighbor-name">Eastern Meadowlark</span>
            <span className="neighbor-note">Shares the same open meadows and field edges at dawn and dusk, singing from the same fence posts cottontails rest near.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-catbird')}>
            <span className="neighbor-name">Gray Catbird</span>
            <span className="neighbor-note">Nests in the same dense shrubby cover cottontails shelter in; a catbird alarm often signals a rabbit moving below.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Sylvilagus_floridanus/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Eastern Cottontail</a></li>
            <li><a href="https://animaldiversity.org/accounts/Sylvilagus_floridanus/" target="_blank" rel="noopener noreferrer">Animal Diversity Web: Eastern Cottontail (status information)</a></li>
            <li><a href="https://www.iucnredlist.org/species/41291/45189354" target="_blank" rel="noopener noreferrer">IUCN Red List — Eastern Cottontail</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds (and Wildlife)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
