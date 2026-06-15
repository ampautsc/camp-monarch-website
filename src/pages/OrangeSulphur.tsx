import type { Page } from '../App'

interface OrangeSulphurProps {
  onNavigate: (page: Page) => void
}

export default function OrangeSulphur({ onNavigate }: OrangeSulphurProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Orange_sulphur_in_Jamaica_Bay_Wildlife_Refuge_%2841141%29.jpg/1280px-Orange_sulphur_in_Jamaica_Bay_Wildlife_Refuge_%2841141%29.jpg"
          alt="An Orange Sulphur butterfly with wings fully open showing the vivid orange upperwings with black forewing spot and black outer wing margins"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={901}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Orange_sulphur_in_Jamaica_Bay_Wildlife_Refuge_(41141).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Orange Sulphur</h1>
        <p className="hero__lead">
          The Orange Sulphur — also called the Alfalfa Butterfly — is one of the most
          common butterflies in open areas across North America. Males are vivid orange
          with a black forewing spot and a broad black outer margin; females are
          orange to cream-yellow with similar markings. Both sexes show a double silver
          spot ringed with red on the hindwing underside. Wingspan is 1.5 to 2.75 inches.
          It is native, common, and present in open habitats from fields and meadows
          to roadsides and gardens from early spring through late fall. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Orange Sulphurs are fast, low fliers of open country. They spend most of
            their time moving between clover, alfalfa, and native wildflowers for nectar
            and host plant searching. Males patrol field edges and roadsides looking
            for females. Adults nectar on native clovers, native asters, native thistles,
            goldenrod, and alfalfa. The flight is fairly direct and fast, with occasional
            erratic darting. In fall, Orange Sulphurs join streams of Cloudless Sulphurs
            and Clouded Sulphurs moving south in open areas, though the migration is
            less dramatic than the Cloudless Sulphur&apos;s. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Orange_sulphur_in_BBG_%2842933%29.jpg/1280px-Orange_sulphur_in_BBG_%2842933%29.jpg"
            alt="An Orange Sulphur butterfly nectaring on a flower showing the orange wings from above and the characteristic double silver spot on the hindwing underside"
            width={1280}
            height={1070}
            loading="lazy"
          />
          <figcaption>
            Orange Sulphurs hybridize freely with the closely related Clouded Sulphur
            where the two species overlap — which is almost everywhere. Hybrid females
            can be intermediate in color between orange and yellow, and are common
            enough that identifying hybrid individuals is a recognized challenge in
            sulphur butterfly identification.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Orange_sulphur_in_BBG_(42933).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Orange Sulphurs overwinter as pupae or partially grown caterpillars in
            warm parts of the range, and there are multiple generations per year —
            adults are present from March through November in most of the east.
            Caterpillars eat legumes: alfalfa, clovers (native and introduced),
            vetches, and native partridge pea. The caterpillar is green with a white
            side stripe. The species is associated with agricultural fields largely
            because of its preference for alfalfa, introduced by European farmers —
            but it was present in native meadows on native clovers long before
            agriculture arrived. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Orange Sulphur is abundant and not of conservation concern. [1]
            It is one of the most successful butterflies in North America. Its use of
            both native clovers and legumes and introduced agricultural legumes gives
            it an enormous food base. In areas where roadsides and field margins are
            maintained with native clover and wildflowers rather than sprayed or mowed
            short, Orange Sulphur populations are highest. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Allow native clovers in the lawn. Native white clover (Trifolium repens)
              and yellow wood sorrel (Oxalis) in the lawn are nectar sources for Orange
              Sulphurs and many native bees. Herbicide-free lawn sections with clover
              are far more productive for pollinators than uniform grass monocultures.
              [2]
            </li>
            <li>
              Plant native partridge pea (Chamaecrista fasciculata). Partridge pea is
              a native annual legume and caterpillar host plant for Orange Sulphur,
              Cloudless Sulphur, and Sleepy Orange. It grows easily from seed in sunny,
              disturbed soil and fixes nitrogen. [2]
            </li>
            <li>
              Plant native goldenrod for late-season nectar. Orange Sulphurs are major
              visitors to native goldenrod in September and October. A stand of native
              goldenrod in bloom in fall draws dozens of sulphurs alongside dozens of
              other species — one of the most productive fall butterfly-watching plants.
              [2]
            </li>
            <li>
              Reduce or eliminate herbicide use in field margins and roadsides. The
              plants Orange Sulphurs depend on — clovers, vetches, native wildflowers —
              are typically killed by broad-spectrum herbicides applied along roads and
              field edges. Allowing native vegetation to establish in these margins
              greatly increases sulphur populations. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('clouded-sulphur')}>
            <span className="neighbor-name">Clouded Sulphur</span>
            <span className="neighbor-note">The closest relative and most common look-alike; males are yellow rather than orange, but the two species hybridize and are often found together in the same fields. Female hybrids can be intermediate in color.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cloudless-sulphur')}>
            <span className="neighbor-name">Cloudless Sulphur</span>
            <span className="neighbor-note">A larger, brighter migratory sulphur that passes through in fall; all three sulphurs — Orange, Clouded, and Cloudless — can be seen nectaring at goldenrod in September in eastern fields.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('canada-goldenrod')}>
            <span className="neighbor-name">Canada Goldenrod</span>
            <span className="neighbor-note">The most important fall nectar plant for Orange Sulphurs; stands of native goldenrod in bloom in September reliably attract large numbers of Orange Sulphurs alongside dozens of other butterfly and bee species.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('partridge-pea')}>
            <span className="neighbor-name">Partridge Pea</span>
            <span className="neighbor-note">A native annual legume host plant for Orange Sulphur, Cloudless Sulphur, and Sleepy Orange caterpillars; planting partridge pea in a sunny spot supports multiple sulphur species in one patch.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Colias_eurytheme/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Orange Sulphur</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Colias-eurytheme" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Orange Sulphur</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
