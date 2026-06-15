import type { Page } from '../App'

interface CheckeredWhiteProps {
  onNavigate: (page: Page) => void
}

export default function CheckeredWhite({ onNavigate }: CheckeredWhiteProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Checkered_White_butterfly_%28Pontia_protodice%29_-_10526708265.jpg/1280px-Checkered_White_butterfly_%28Pontia_protodice%29_-_10526708265.jpg"
          alt="A Checkered White butterfly with wings open showing the white upperwings with bold black and gray checkered markings on the forewing and lighter checkering on the hindwing"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={720}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Wildreturn&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Checkered_White_butterfly_(Pontia_protodice)_-_10526708265.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Checkered White</h1>
        <p className="hero__lead">
          The Checkered White is a native white butterfly with intricate dark checkering —
          not a Cabbage White, which is introduced from Europe, but a true native of open
          fields, roadsides, and disturbed ground across North America. Males are white with
          bold black forewing markings; females are much more heavily checkered, with
          gray-brown markings across most of the wing surface. Wingspan is 1.5 to 2 inches.
          It has declined significantly in the eastern United States over the past century,
          largely displaced in disturbed habitats by the introduced Cabbage White, but
          remains present in open, sunny areas wherever native mustard family plants grow. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Checkered Whites are fast, low fliers of wide-open, sunny, disturbed habitat —
            old fields, roadsides, sandy barrens, and any open weedy ground. Adults nectar
            on a variety of native wildflowers: native asters, native clovers, and native
            fleabanes are common choices. Males patrol actively over open ground looking for
            females, flying low and fast with frequent direction changes. Females search for
            native mustard family plants on which to lay eggs, tasting leaves with their feet.
            In warm regions, Checkered Whites can be abundant locally but populations fluctuate
            widely — sometimes hundreds in a good year, nearly absent the next. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Checkered_White_butterfly_%28Pontia_protodice%29_-_10526755094.jpg/1280px-Checkered_White_butterfly_%28Pontia_protodice%29_-_10526755094.jpg"
            alt="A Checkered White butterfly perched showing the underside of the wings with greenish-gray veining on the hindwing and the checkered forewing pattern from a different angle"
            width={1280}
            height={720}
            loading="lazy"
          />
          <figcaption>
            Female Checkered Whites are far more heavily marked than males — their wings
            are checkered with extensive gray-brown patterning that can cover most of the
            wing surface. The underside hindwing has a subtle greenish-gray veined pattern
            that helps camouflage the resting butterfly. Females are sometimes mistaken for
            a different species from males because the marking difference is so dramatic.
            <span className="photo-credit"> Photo: Wildreturn&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Checkered_White_butterfly_(Pontia_protodice)_-_10526755094.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Checkered Whites have multiple generations per year — two in the north, three
            to four in the south — and are present from April through October in most of
            the east. They overwinter as pupae. Caterpillars are green or gray with yellow
            and purple stripes and feed on native and non-native plants in the mustard
            family: native rockcresses, native bittercresses, peppergrass, and related
            plants. Unlike the West Virginia White, the Checkered White can survive on
            garlic mustard, providing some flexibility — but the native mustard-family
            plants of open, dry disturbed ground remain its preferred hosts. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Checkered White has declined dramatically in the northeastern United States
            over the past 100 years and is now uncommon to rare in much of its former
            eastern range. [1] The primary driver is competition from the introduced Cabbage
            White, which arrived in North America in the 1860s and rapidly colonized the
            same open, disturbed habitats. Cabbage Whites breed faster and use a wider
            variety of mustard family plants — they outcompete the native species in most
            areas. In the west and south, Checkered Whites remain more common. In the east,
            it is a species worth watching for and celebrating when found. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native rockcresses (Arabis spp., Boechera spp.). Native rockcresses are
              among the most important caterpillar host plants for the Checkered White. They
              are spring-blooming native wildflowers of dry, sunny rocky or sandy habitats
              that also support early native bees — a two-for-one native plant investment. [2]
            </li>
            <li>
              Allow native peppergrasses and bittercresses in disturbed areas. Native
              peppergrasses (Lepidium spp.) and bittercresses (Cardamine spp.) are common
              in disturbed soil and are caterpillar host plants for the Checkered White.
              Rather than eliminating them from garden edges, allow them to naturalize in
              a sunny corner — they are native wildflowers, not weeds. [2]
            </li>
            <li>
              Maintain open, sunny, sandy areas without heavy ground cover. Checkered Whites
              need bare or sparsely vegetated sunny ground — old fields, sandy margins, gravel
              areas with wildflower patches. A sun-baked gravel path edge with native wildflowers
              growing in the cracks is better habitat than a neat garden bed. [2]
            </li>
            <li>
              Plant native asters, clovers, and fleabanes for adult nectar. Checkered Whites
              are frequent visitors to native asters (Symphyotrichum spp.) and native fleabanes
              (Erigeron spp.) for nectar. A diverse native wildflower planting in full sun that
              includes these composites provides the adult nectar resource that keeps individuals
              present long enough to breed. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('cabbage-white')}>
            <span className="neighbor-name">Cabbage White</span>
            <span className="neighbor-note">The introduced European white butterfly that has largely displaced the Checkered White from eastern fields over the past century; Cabbage Whites are plain white while Checkered Whites have intricate checkered markings.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('west-virginia-white')}>
            <span className="neighbor-name">West Virginia White</span>
            <span className="neighbor-note">A native forest white butterfly that uses different habitat (shaded forest) and different host plants (toothwort) than the Checkered White; both are native white butterflies facing pressure from introduced species and habitat loss.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('sleepy-orange')}>
            <span className="neighbor-name">Sleepy Orange</span>
            <span className="neighbor-note">Shares open, sunny, weedy field and roadside habitat; both the Sleepy Orange and Checkered White are native butterflies of disturbed open ground most easily found where native wildflowers have been allowed to establish.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('common-buckeye')}>
            <span className="neighbor-name">Common Buckeye</span>
            <span className="neighbor-note">Another native open-field butterfly that favors open, sunny, weedy disturbed ground; Common Buckeyes and Checkered Whites often use the same sun-baked open areas with sparse, diverse native vegetation.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Pontia_protodice/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Checkered White</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Pontia-protodice" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Checkered White</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
