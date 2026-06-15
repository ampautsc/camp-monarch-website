import type { Page } from '../App'

interface StripedSkunkProps {
  onNavigate: (page: Page) => void
}

export default function StripedSkunk({ onNavigate }: StripedSkunkProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Striped_Skunk_%28Mephitis_mephitis%29_01.jpg/1280px-Striped_Skunk_%28Mephitis_mephitis%29_01.jpg"
          alt="A Striped Skunk foraging on the ground, showing its distinctive black fur with two white stripes running from head to tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Ryan Hodnett&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Striped_Skunk_(Mephitis_mephitis)_01.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Striped Skunk</h1>
        <p className="hero__lead">
          The Striped Skunk is a cat-sized omnivore found from southern Canada through
          most of North America. It is black with two broad white stripes from the neck
          to the base of the tail. It is nocturnal, nearsighted, and spends most nights
          routing through soil and leaf litter for grubs, beetles, and earthworms. It
          eats more lawn insects than almost any other suburban wildlife species. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Striped Skunks spend the day resting in a den — a woodchuck burrow, culvert,
            rock pile, or space beneath a deck — and emerge at dusk to forage. They use
            their long front claws to dig cone-shaped holes in lawns after grubs, and
            their sensitive nose to track beetles and earthworms through leaf litter.
            They are nearly blind beyond 10 feet but have an excellent sense of smell.
            Their spray — a mixture of sulfuric compounds detectable by humans at over
            a mile — is a last resort after a clear warning display: foot stamping,
            tail raising, and a handstand. They can spray accurately to 10 feet and
            carry enough for six shots before needing ten days to replenish. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Striped_Skunk_%28Mephitis_mephitis%29_%2824894459899%29.jpg/1280px-Striped_Skunk_%28Mephitis_mephitis%29_%2824894459899%29.jpg"
            alt="A Striped Skunk in a field at night, its white stripes visible against the dark fur"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            Skunks warn before they spray: a foot stomp, tail raise, and handstand are
            all signals that the spray mechanism is coming next. A skunk that can see
            you walking away will almost never spray.
            <span className="photo-credit"> Photo: National Park Service&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Striped_Skunk_(Mephitis_mephitis)_(24894459899).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Striped Skunks mate in February and March. Four to seven kits are born in
            May after a 63-day gestation, in a den lined with grass and leaves. Kits
            can spray at three weeks old, before their eyes open. They follow their
            mother in a line through late summer, learning to forage. Skunks do not
            hibernate but enter a torpor during the coldest months, occasionally
            emerging on warm winter nights. In some areas a male shares a communal den
            with several females through winter. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Striped Skunk is common across its range and listed as Least Concern
            by the IUCN. [2] Vehicle collisions are a significant source of mortality.
            Skunks are the primary wildlife reservoir for rabies in many parts of North
            America; any skunk active in daylight or behaving abnormally should be
            reported to animal control rather than approached. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Secure garbage cans and compost bins with bungee cords or locking lids.
              Food scraps are the primary reason skunks move into close proximity with
              people, and that proximity is the source of most conflicts. [3]
            </li>
            <li>
              Apply beneficial nematodes (available at garden centers) to your lawn
              instead of grub pesticides. Nematodes kill the grubs without harming
              other soil life — and fewer grubs means skunks have less reason to dig
              up your lawn. [3]
            </li>
            <li>
              Bring pet food indoors at night. An outdoor food dish is one of the most
              reliable ways to attract skunks, raccoons, and opossums to a yard and
              keep them returning. [3]
            </li>
            <li>
              If a skunk enters your garage or shed, open the door wide and step well
              back. Given space and a clear exit, a skunk will leave without spraying.
              Cornering one, or rushing it, is what triggers the spray. [3]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('virginia-opossum')}>
            <span className="neighbor-name">Virginia Opossum</span>
            <span className="neighbor-note">A fellow nocturnal omnivore working the same suburban edges and woodland floors each night, often active in the same areas.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-cottontail')}>
            <span className="neighbor-name">Eastern Cottontail</span>
            <span className="neighbor-note">Shares the same brushy edges and meadow borders; the cottontail&apos;s dusk activity and the skunk&apos;s overnight foraging often overlap.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-fox')}>
            <span className="neighbor-name">Red Fox</span>
            <span className="neighbor-note">Moves through the same suburban habitat and is occasionally a predator of skunk kits, though most foxes avoid sprayed adults.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-chipmunk')}>
            <span className="neighbor-name">Eastern Chipmunk</span>
            <span className="neighbor-note">Digs the same forest floor the skunk searches for grubs; skunks occasionally raid chipmunk burrows for cached food.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Mephitis_mephitis/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Striped Skunk</a></li>
            <li><a href="https://www.iucnredlist.org/species/41637/45221146" target="_blank" rel="noopener noreferrer">IUCN Red List — Striped Skunk</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds (and Wildlife)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
