import type { Page } from '../App'

interface EasternTailedBlueProps {
  onNavigate: (page: Page) => void
}

export default function EasternTailedBlue({ onNavigate }: EasternTailedBlueProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Eastern-tailed_blue_%2873266%29.jpg/1280px-Eastern-tailed_blue_%2873266%29.jpg"
          alt="A male Eastern Tailed-Blue butterfly with wings open showing the brilliant sky-blue upperwings with white-edged borders and the tiny hindwing tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={1041}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Eastern-tailed_blue_(73266).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Tailed-Blue</h1>
        <p className="hero__lead">
          The Eastern Tailed-Blue is one of the smallest butterflies in eastern North
          America — and one of the most jewel-like. Males are brilliant sky-blue above
          with a thin white border; females are mostly brown with blue at the wing base.
          Both sexes have a distinctive tiny tail on the hindwing — the only small blue
          butterfly in the East with a tail — and orange spots near the tail tip. Wingspan
          is just 0.75 to 1.25 inches. It flies low and fast over open ground and is easily
          overlooked, but common wherever native clovers and legumes grow. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Eastern Tailed-Blues fly low and fast over open, sunny areas — fields, roadsides,
            disturbed ground, and garden edges. Adults nectar on a variety of small native
            wildflowers: native clovers, wild strawberry, cinquefoil, and other low flowers
            are favored. The hindwing tails are thought to mimic antennae, and the orange
            eyespots near them create a false head — predators like birds strike at this
            decoy end and miss the body entirely. In warm weather, males perch on low
            vegetation and dart out to investigate passing insects, returning to the same
            perch repeatedly. On cool mornings, adults bask with wings flat to absorb heat. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Eastern-tailed_blue_%2873248%29.jpg/1280px-Eastern-tailed_blue_%2873248%29.jpg"
            alt="An Eastern Tailed-Blue butterfly perched showing the underside of the wings with their intricate gray-white pattern, orange spots, and the delicate hindwing tail"
            width={1280}
            height={1445}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            Female Eastern Tailed-Blues are mostly brown above with variable blue at
            the wing base. The underside — the view you most often see on a resting
            butterfly — is gray-white with black spots, orange crescents near the hindwing
            tail, and a metallic blue-green spot at the tail base. This camouflage allows
            the resting butterfly to blend into dried vegetation.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Eastern-tailed_blue_(73248).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Eastern Tailed-Blues produce two to three generations per year and overwinter
            as pupae or mature larvae. Adults are present from April through October in
            most of the range. Caterpillars are green and slug-like — typical for the blue
            butterfly family — and feed inside the flowers, seeds, and pods of native
            legumes: native clovers, vetches, wild peas, partridge pea, and bush clovers.
            The caterpillars are tended by ants, which protect them from predators in
            exchange for a sugary secretion. This ant relationship is common in the blue
            butterfly family and is one reason the larvae are rarely seen despite being
            present throughout summer. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Eastern Tailed-Blue is common and not of conservation concern in most of
            its range. [1] Like many open-area butterflies, it depends on native legumes —
            the loss of native wildflower meadows and the replacement of diverse field
            margins with monoculture grass has reduced populations in some areas. It
            tolerates moderately disturbed habitat well, however, and thrives wherever
            native clovers, vetches, and partridge pea are allowed to grow without
            herbicide treatment. In gardens and yards with native legumes, it is a regular
            visitor throughout the summer. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Allow native white clover in the lawn. Native white clover is the single
              most accessible host plant for Eastern Tailed-Blue caterpillars and a major
              nectar source for adults. A clover patch grown without herbicides converts
              lawn into functional Eastern Tailed-Blue habitat with no effort. [2]
            </li>
            <li>
              Plant native partridge pea (Chamaecrista fasciculata). Partridge pea is a
              native annual legume and a top caterpillar host plant. It grows easily from
              seed in full sun in disturbed or sandy soil, blooms with cheerful yellow
              flowers all summer, and reseeds readily — nearly zero-maintenance once
              established. [2]
            </li>
            <li>
              Plant native bush clovers (Lespedeza spp.). Native bush clovers are important
              caterpillar hosts in late summer and fall. They are late-blooming native
              perennials that also support native bees with abundant late-season flowers. [2]
            </li>
            <li>
              Create a low, sunny wildflower strip. Eastern Tailed-Blues prefer to fly,
              nectar, and lay eggs very close to the ground. Even a short, sunny strip
              two to three feet wide with low native wildflowers and clover along a path
              edge gives adults the open, low habitat they need. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('spring-azure')}>
            <span className="neighbor-name">Spring Azure</span>
            <span className="neighbor-note">The other common small blue butterfly of the region; Spring Azures fly earlier in spring and use shrub host plants rather than legumes, but the two are sometimes seen nectaring together in May.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('gray-hairstreak')}>
            <span className="neighbor-name">Gray Hairstreak</span>
            <span className="neighbor-note">Another small, low-flying gossamer-wing butterfly with hindwing tails; Gray Hairstreaks are gray rather than blue but use many of the same host legumes and nectar plants in open fields.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('coral-hairstreak')}>
            <span className="neighbor-name">Coral Hairstreak</span>
            <span className="neighbor-note">A close relative in the gossamer-wing family; both are small, low-flying butterflies of open areas and forest edges that depend on specific native host plants and benefit from undisturbed wildflower habitat.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('orange-sulphur')}>
            <span className="neighbor-name">Orange Sulphur</span>
            <span className="neighbor-note">Shares native clover and legume patches as both caterpillar host and adult nectar source; Orange Sulphurs and Eastern Tailed-Blues are frequently seen together nectaring at native clovers in sunny fields.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Cupido_comyntas/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Eastern Tailed-Blue</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Cupido-comyntas" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Eastern Tailed-Blue</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
