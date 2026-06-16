import type { Page } from '../App'

interface HackberryEmperorProps {
  onNavigate: (page: Page) => void
}

export default function HackberryEmperor({ onNavigate }: HackberryEmperorProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Asterocampa_celtis_bastrop_co_tx.jpg/1280px-Asterocampa_celtis_bastrop_co_tx.jpg"
          alt="Hackberry Emperor butterfly (Asterocampa celtis) perched with wings open, showing orange-tan upper wings with dark spots and a cluster of white spots near the forewing tip"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          width={1280}
          height={854}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Larry D. Moore&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Asterocampa_celtis_bastrop_co_tx.jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Hackberry Emperor</h1>
        <p className="hero__lead">
          In July, an orange-tan butterfly lands on your forearm while you&apos;re working in
          the yard and doesn&apos;t leave. It is a Hackberry Emperor (<em>Asterocampa
          celtis</em>), and it&apos;s drinking sodium dissolved in your sweat — adults of this
          species skip flowers entirely and instead seek dissolved minerals from sap, fruit,
          mud, and skin. No caterpillar of this species has ever been documented developing on
          any plant besides hackberry, so the tree it hatched from is within about 100 meters
          of where you&apos;re standing. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Males perch on tree trunks, fences, and walls to watch for females, chasing any
            passing object — other butterflies, birds, even people — before returning to the
            same perch. Both sexes are drawn to warm, dark surfaces and turn up often on picnic
            tables, outdoor furniture, and parked cars near hackberry. Look for three to five
            white spots clustered near each forewing tip and scalloped outer wing margins — the
            surest field marks separating this species from the closely related Tawny
            Emperor. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Hackberry_Emperor_%28Asterocampa_celtis%29_%2814414181452%29.jpg/1280px-Hackberry_Emperor_%28Asterocampa_celtis%29_%2814414181452%29.jpg"
            alt="Hackberry Emperor butterfly (Asterocampa celtis) resting on bark, wings closed, showing the pale gray underside with darker wavy lines"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            With wings closed against bark, the pale gray underside and wavy darker lines make
            this butterfly nearly disappear. It will hold this pose for minutes at a stretch
            while feeding on a sap flow or a patch of damp soil.
            <span className="photo-credit"> Photo: Andrew C&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Hackberry_Emperor_(Asterocampa_celtis)_(14414181452).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Two overlapping broods fly from late May through September. The summer brood&apos;s
            caterpillars feed through September, then enter diapause as late instars in
            October — descending the trunk or falling with a curled leaf to shelter in the leaf
            litter or a bark crevice within about ten meters of where the egg was laid. They
            stay there all winter and resume feeding on the same tree&apos;s leaves come May,
            completing development in time to produce the season&apos;s first adults. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Hackberry Emperor is common and secure wherever its host tree grows, but its fate
            on any single property still rises and falls with that one tree. A rake moving
            through the leaf layer beneath a hackberry in November can remove an entire
            overwintering generation along with the leaves — the caterpillar&apos;s winter
            shelter and its spring feeding ground are separated by less distance than a single
            stroke of a garden rake covers.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Leave the leaf litter at the base of hackberry trees from October through April.
              Overwintering caterpillars shelter there and travel no more than about ten meters
              from where they hatched. [2]
            </li>
            <li>
              Don&apos;t remove self-seeded hackberry saplings from fence rows. A four-inch-
              diameter sapling with corky bark ridges already supports egg-laying. [2]
            </li>
            <li>
              Let fallen fruit decompose on the ground under fruit trees through October.
              Fermenting apples and crabapples fuel adults heading into winter. [2]
            </li>
            <li>
              Apply no systemic insecticide to hackberry or its root zone from May through
              September, when first-instar caterpillars are present but nearly invisible
              against the leaf. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('hackberry')}>
            <span className="neighbor-name">Hackberry</span>
            <span className="neighbor-note">The exclusive caterpillar host; no Hackberry Emperor egg has ever been documented on any other plant, so a property without hackberry will never produce a breeding population.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('tawny-emperor')}>
            <span className="neighbor-name">Tawny Emperor</span>
            <span className="neighbor-note">The near-twin obligate hackberry specialist flying the same tree at the same time; the one reliable difference is the white-spotted forewing tip, present on this species and absent on Tawny Emperor.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-snout')}>
            <span className="neighbor-name">American Snout</span>
            <span className="neighbor-note">The third obligate hackberry butterfly, identifiable at a glance by elongated palps that give it a long-nosed profile; in wet years its population can surge south through Texas by the millions.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-admiral')}>
            <span className="neighbor-name">Red Admiral</span>
            <span className="neighbor-note">Another fruit-and-sap feeder that skips nectar in favor of fermenting windfall apples — frequently found sharing the same piece of fallen fruit with a Hackberry Emperor on a late-summer afternoon.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://www.butterfliesandmoths.org/species/Asterocampa-celtis" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Hackberry Emperor</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Celtis_occidentalis" target="_blank" rel="noopener noreferrer">Wikipedia — Celtis occidentalis (Common Hackberry)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
