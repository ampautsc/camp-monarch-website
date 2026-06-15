import type { Page } from '../App'

interface CabbageWhiteProps {
  onNavigate: (page: Page) => void
}

export default function CabbageWhite({ onNavigate }: CabbageWhiteProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Pieris_rapae_edit2.jpg/1280px-Pieris_rapae_edit2.jpg"
          alt="A Cabbage White butterfly with wings spread showing its white upperwings with one or two small black spots on the forewing — a male has one spot, a female has two"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={1009}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: IdLoveOne (derivative of Bruce Marlin)&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Pieris_rapae_edit2.jpg" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Cabbage White</h1>
        <p className="hero__lead">
          The Cabbage White is the most abundant butterfly in North America and probably
          the one most people see most often — the small white butterfly bouncing
          through gardens, fields, roadsides, and parks from early spring through late
          fall. It is not native: it was accidentally introduced from Europe around
          1860 and has since spread across the continent. Its wingspan is 1.25 to
          1.75 inches. Males have one black spot on the forewing; females have two.
          Its caterpillars eat cabbage, broccoli, kale, and related garden plants,
          making it an agricultural pest. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Cabbage Whites are fast fliers that range widely across open areas. They
            nectar on a very broad range of wildflowers and garden flowers, and their
            tolerance of disturbed, weedy, and urban environments makes them the
            butterfly most people encounter daily. Adults are active from early spring —
            sometimes appearing on warm days in February — through late October. Females
            lay single pale yellow eggs on the underside of leaves of plants in the
            mustard family (Brassicaceae), including garden vegetables and many native
            wildflowers. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pieris_rapae_close_Richard_Bartz.jpg/1280px-Pieris_rapae_close_Richard_Bartz.jpg"
            alt="A close-up photograph of a Cabbage White butterfly at rest showing the delicate wing venation and the subtle green-yellow tint of the closed wings"
            width={1280}
            height={1866}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            Although the upperwings are white, a resting Cabbage White with wings
            closed shows a pale yellow-green underside with subtle gray-green markings —
            an effective camouflage against flower heads and pale green foliage. This
            is the view most predators see when the butterfly is at rest.
            <span className="photo-credit"> Photo: Richard Bartz&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Pieris_rapae_close_Richard_Bartz.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Cabbage Whites overwinter as pupae and emerge very early in spring. Multiple
            generations per year — up to five or six in warm climates — keep adults
            continuously present from March through November. Caterpillars are green
            with a faint yellow dorsal stripe and are very well camouflaged on cabbage
            and kale leaves. The caterpillars also eat many native mustard family plants
            including toothworts (Cardamine), watercress, and wild mustards. Despite
            being invasive, the Cabbage White has become an established part of the
            ecosystem and is preyed upon by many native birds, spiders, and parasitoid
            wasps. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Cabbage White is extremely abundant and expanding its range in some
            northern areas as winters warm. [1] It is the dominant white butterfly
            across most of North America and has largely excluded or outcompeted the
            native West Virginia White from areas where their ranges overlap by using
            the same native toothwort host plants but being able to also lay eggs on
            garlic mustard, an invasive plant. Garlic mustard is toxic to West Virginia
            White caterpillars, meaning Cabbage Whites using it as a host indirectly
            benefit themselves while harming the native species. [2]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Remove garlic mustard from woodland edges. Garlic mustard (Alliaria petiolata)
              is an invasive plant in the same family as toothworts. Cabbage Whites lay
              eggs on it freely, but the chemicals in garlic mustard kill West Virginia
              White caterpillars. Removing garlic mustard is one of the most effective
              actions for protecting native toothwort-specialist butterflies. [2]
            </li>
            <li>
              Plant native toothworts (Cardamine species) in woodland gardens. Toothworts
              are the host plant for the native West Virginia White; Cabbage Whites also
              use them. But where garlic mustard is absent, toothwort patches support
              both species. Encouraging native toothworts in the understory supports
              native woodland butterfly diversity. [2]
            </li>
            <li>
              Use row covers on vegetable gardens instead of pesticides. Cabbage Whites
              are serious garden pests on brassica vegetables. Row covers of lightweight
              fabric physically prevent egg-laying without chemicals, protecting crops
              while keeping pesticides out of the garden where they harm native
              pollinators. [2]
            </li>
            <li>
              Accept some Cabbage White feeding on ornamental kale and nasturtium.
              Where Cabbage Whites do nest in the garden, they are prey for native
              birds — particularly Yellow Warblers, Song Sparrows, and house sparrows —
              and parasitoid wasps that are important in controlling pest populations
              more broadly. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('west-virginia-white')}>
            <span className="neighbor-name">West Virginia White</span>
            <span className="neighbor-note">The native counterpart — a forest butterfly closely related to and displaced by the Cabbage White; unlike the Cabbage White, it is a woodland specialist that lays eggs only on native toothworts.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('clouded-sulphur')}>
            <span className="neighbor-name">Clouded Sulphur</span>
            <span className="neighbor-note">Another common open-area butterfly that is often seen alongside Cabbage Whites in gardens and fields; Clouded Sulphurs are native and use clovers and vetches rather than brassicas.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('song-sparrow')}>
            <span className="neighbor-name">Song Sparrow</span>
            <span className="neighbor-note">One of the most common predators of Cabbage White caterpillars; song sparrows forage through garden brassicas and pick off caterpillars that gardeners would otherwise spray.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('black-eyed-susan')}>
            <span className="neighbor-name">Black-eyed Susan</span>
            <span className="neighbor-note">A common nectar plant for Cabbage Whites in open gardens; Cabbage Whites will nectar on almost any available wildflower but are particularly common on native composites in summer.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Pieris_rapae/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Cabbage White</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Pieris-rapae" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Cabbage White</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
