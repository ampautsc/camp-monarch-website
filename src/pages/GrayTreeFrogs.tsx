import type { Page } from '../App'

interface GrayTreeFrogsProps {
  onNavigate: (page: Page) => void
}

export default function GrayTreeFrogs({ onNavigate }: GrayTreeFrogsProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Gray_Treefrog_%28Hyla_versicolor%29_-_Flickr_-_2ndPeter.jpg/1280px-Gray_Treefrog_%28Hyla_versicolor%29_-_Flickr_-_2ndPeter.jpg"
          alt="A Gray Tree Frog clinging to a branch, showing its rough gray skin with green patches and bright orange inner thighs"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={863}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Peter Paplanus&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Gray_Treefrog_(Hyla_versicolor)_-_Flickr_-_2ndPeter.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Gray Tree Frogs</h1>
        <p className="hero__lead">
          The Gray Tree Frog is a small (1.5–2 inch) treefrog found throughout eastern
          North America. It is a master of camouflage, shifting its color from pale gray
          to mottled green to brown over the course of minutes. Its sticky toe pads let
          it cling to glass. In May and June, males produce a loud, bird-like trill from
          vegetation near any pond, ditch, or puddle. It is one of only a few vertebrates
          that can survive being partially frozen. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Gray Tree Frogs spend most of the day hidden — pressed flat against bark,
            tucked into a tree cavity, or resting on a leaf where their mottled skin
            disappears against the background. They hunt at night: moths, beetles,
            ants, spiders, and smaller frogs. Their large, forward-facing eyes give
            them accurate depth perception for striking prey. During the breeding season
            (May through August) males call from elevated perches near water, especially
            on warm rainy nights when choruses can be heard from hundreds of feet away.
            [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Gray_Tree_Frog_-_Hyla_versicolor_or_chrysoscelis_and_Gary%2C_Occoquan_Bay_National_Wildlife_Refuge%2C_Woodbridge%2C_Virginia_%2837503327391%29.jpg/1280px-Gray_Tree_Frog_-_Hyla_versicolor_or_chrysoscelis_and_Gary%2C_Occoquan_Bay_National_Wildlife_Refuge%2C_Woodbridge%2C_Virginia_%2837503327391%29.jpg"
            alt="A Gray Tree Frog perched on vegetation showing its adhesive toe pads and mottled gray-green coloration"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            Gray Tree Frogs spend the non-breeding months high in trees, rarely seen
            near the ground. The hidden orange patches on the inner thighs flash when
            the frog jumps — possibly startling predators.
            <span className="photo-credit"> Photo: Judy Gallagher&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Gray_Tree_Frog_-_Hyla_versicolor_or_chrysoscelis_and_Gary,_Occoquan_Bay_National_Wildlife_Refuge,_Woodbridge,_Virginia_(37503327391).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Gray Tree Frogs overwinter in leaf litter, beneath bark, or in shallow
            soil. They survive temperatures below freezing by producing glycerol as
            a natural antifreeze — up to 40% of their body water can freeze without
            cell damage. They emerge in April when nights consistently stay above
            50°F. Females lay 1,000 to 2,000 eggs in small clusters on the water
            surface; eggs hatch in three to seven days. Tadpoles metamorphose in
            45 to 65 days. Young frogs disperse into trees and shrubs for the summer
            and fall. [1][2]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Gray Tree Frog is listed as Least Concern by the IUCN and remains
            common across eastern North America. [2] Locally it is affected by the
            draining of small wetlands — even a small roadside ditch can serve as
            critical breeding habitat. Atrazine and other herbicides affect amphibian
            hormone development at very low concentrations. Globally, chytrid fungus
            (Batrachochytrium dendrobatidis) threatens amphibian populations; gray
            tree frogs appear to be less susceptible than many species. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Install a small backyard pond — even a 6-foot diameter water feature
              with no fish and some emergent plants at the edge can support gray tree
              frog breeding. Fish eat tadpoles; a fish-free pond is essential. [3]
            </li>
            <li>
              Leave leaf litter on garden beds through winter. Gray Tree Frogs
              hibernate in leaf litter and shallow soil. Blowing leaves away in fall
              or early spring removes the insulating layer they depend on to survive
              hard freezes. [3]
            </li>
            <li>
              Avoid herbicides and pesticides near ponds and wet areas. Atrazine in
              particular disrupts amphibian development at concentrations far below
              what is considered safe for humans. [1]
            </li>
            <li>
              Plant dense shrubby native plants around yard edges and pond margins.
              Gray Tree Frogs spend most of their adult life far from water in woody
              cover — the shrubby transition zone between pond and lawn is where most
              of their foraging and sheltering happens. [3]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-screech-owl')}>
            <span className="neighbor-name">Eastern Screech-Owl</span>
            <span className="neighbor-note">A predator of tree frogs that hunts the same shrubby wetland edges and listens for frog calls to locate prey in the dark.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
            <span className="neighbor-name">Wood Thrush</span>
            <span className="neighbor-note">Shares the same moist wooded habitat; both species are indicators of structurally complex forests with healthy understories.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('garter-snake')}>
            <span className="neighbor-name">Garter Snake</span>
            <span className="neighbor-note">The most common predator of gray tree frogs near ponds and stream edges; frogs call and snakes hunt in the same damp margin habitat.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('carolina-wren')}>
            <span className="neighbor-name">Carolina Wren</span>
            <span className="neighbor-note">Nests in the same dense shrubby cover near water where tree frogs spend their summer months; both are heard more often than seen.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Hyla_versicolor/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Gray Tree Frog</a></li>
            <li><a href="https://www.iucnredlist.org/species/55614/11335003" target="_blank" rel="noopener noreferrer">IUCN Red List — Gray Tree Frog</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds (and Wildlife)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
