import type { Page } from '../App'

interface GiantSwallowtailProps {
  onNavigate: (page: Page) => void
}

export default function GiantSwallowtail({ onNavigate }: GiantSwallowtailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Giant_Swallowtail%2C_Shirleys_Bay.jpg"
          alt="Giant Swallowtail perched with wings spread, showing black wings crossed by diagonal rows of yellow spots"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1167}
          height={1000}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: D. Gordon E. Robertson&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Giant_Swallowtail,_Shirleys_Bay.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies &amp; Skippers</div>
        <h1>Giant Swallowtail</h1>
        <p className="hero__lead">
          The Giant Swallowtail (<em>Papilio cresphontes</em>) is the largest butterfly in eastern
          North America, with a wingspan of 4 to 6.5 inches — black wings crossed by two diagonal
          rows of yellow spots, with short tails and an orange crescent on each hindwing. Its
          caterpillar feeds on just two native shrubs, hoptree and prickly ash, and disguises
          itself the entire time as something no bird wants to eat: a fresh bird dropping. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            A late-instar caterpillar rests motionless on the upper surface of a leaf in full
            daylight — not hidden, just disguised, its white-and-brown blotched pattern matching
            a songbird's dropping closely enough that birds scanning for prey learn to skip past
            it. If something touches it anyway, a bright orange forked organ called the osmeterium
            snaps out from behind its head, releasing a rancid-butter smell strong enough to send
            most predators elsewhere. It retracts in under a second, leaving no trace. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/Giant_Swallowtail_Larva.jpg"
            alt="Giant Swallowtail caterpillar resting on a leaf, its white and brown markings closely resembling a bird dropping"
            width={463}
            height={598}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            At roughly two inches long, the white saddle and blotched brown ends match a fresh
            bird dropping closely enough that most people walk past one without a second look.
            <span className="photo-credit"> Photo: leppyone&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Giant_Swallowtail_Larva.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Two generations fly in the northern Midwest each year — late April through June, and
            again from late July through September. Females find hoptree or prickly ash by
            detecting the citrus-family chemistry in the air, then confirm it by pressing their
            feet to a leaf before laying a single egg. Adults nectar on milkweed, butterfly weed,
            and phlox between generations. The species' range has been expanding north over the
            past two decades, and it's now a regular sight in Michigan, Wisconsin, and southern
            Ontario, where it was uncommon before 2000. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it's doing</h2>
          <p>
            Giant Swallowtail isn't declining — if anything, its range is moving north. The
            obstacle is supply: hoptree and prickly ash aren't showy, so most native plant
            nurseries don't stock them, and a yard without either one simply never sees a
            caterpillar, no matter how much milkweed or butterfly weed is planted for the adults.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Seek out a hoptree (<em>Ptelea trifoliata</em>) from a native plant nursery — it
              tolerates shade and reaches 10 to 20 feet without spreading aggressively. [2]
            </li>
            <li>
              Consider prickly ash (<em>Zanthoxylum americanum</em>) for a dry or rocky spot; it
              spreads slowly by root sprouts and doubles as thorny cover for nesting birds. [2]
            </li>
            <li>
              Leave any caterpillar that looks like a bird dropping exactly where it is — the
              disguise only works if it's left in plain sight on the leaf. [2]
            </li>
            <li>
              Skip pesticide on hoptree or prickly ash from May through September, when a single
              egg per leaf means caterpillars are small and easy to miss. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
            <span className="neighbor-name">Eastern Tiger Swallowtail</span>
            <span className="neighbor-note">Patrols the same forest edges as an adult, though its caterpillar feeds on tulip poplar and cherry rather than hoptree or prickly ash.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('spicebush-swallowtail')}>
            <span className="neighbor-name">Spicebush Swallowtail</span>
            <span className="neighbor-note">Another large swallowtail whose caterpillar relies on camouflage and a chemical deterrent rather than hiding from predators.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('butterfly-weed')}>
            <span className="neighbor-name">Butterfly Weed</span>
            <span className="neighbor-note">One of the adult Giant Swallowtail's preferred nectar sources in June and July, alongside hoptree or prickly ash for the caterpillars.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('common-milkweed')}>
            <span className="neighbor-name">Common Milkweed</span>
            <span className="neighbor-note">Adults nectar at milkweed flower heads through July and August, often drawing them in from some distance away.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://en.wikipedia.org/wiki/Papilio_cresphontes" target="_blank" rel="noopener noreferrer">Wikipedia — Papilio cresphontes (Giant Swallowtail)</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Papilio-cresphontes" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Giant Swallowtail</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
