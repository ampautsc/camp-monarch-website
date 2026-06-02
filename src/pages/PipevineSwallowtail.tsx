import type { Page } from '../App'

interface PipevineSwallowtailProps {
  onNavigate: (page: Page) => void
}

export default function PipevineSwallowtail({ onNavigate }: PipevineSwallowtailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Battus_philenor%2C_dorsal_view.jpg/960px-Battus_philenor%2C_dorsal_view.jpg"
          alt="Pipevine Swallowtail butterfly with wings spread flat, showing iridescent blue-green hindwings and the black-with-orange-spots pattern on the underside of the wings"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Battus_philenor_02.jpg/960px-Battus_philenor_02.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: OceanGunfish&nbsp;&middot;&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Battus_philenor,_dorsal_view.jpg" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Pipevine Swallowtail</h1>
        <p className="hero__lead">
          The iridescent blue on a Pipevine Swallowtail hindwing is not a pigment.
          It comes from microscopic structures in the wing scales that refract light
          the way a soap bubble does — the color shifts from blue-green to deep blue
          as the viewing angle changes. Those same scales carry aristolochic acids
          absorbed from pipevine leaves when the caterpillar was feeding, carried intact
          through metamorphosis into the adult. A bird that eats one ingests those acids
          and gets sick. The bird connects the wing pattern to the experience
          and avoids it for the rest of its life.
        </p>
        <p className="hero__lead">
          Because Pipevine Swallowtail adults are genuinely aversive to birds that have tried them,
          three other butterfly species have independently evolved wing patterns that copy the
          iridescent blue-black coloration. None of those three species contains aristolochic acids.
          They survive on the aversion the Pipevine Swallowtail trained into local birds.
          Where Pipevine Swallowtails are rare or absent, those mimics receive no protection —
          the local birds have never learned to connect the pattern to a bad meal.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="chemistry-heading">
          <h2 id="chemistry-heading">Aristolochic acids in the wing scales — absorbed as a caterpillar, carried through metamorphosis into the adult</h2>
          <p>
            Pipevine swallowtail caterpillars feed on plants in the genus <em>Aristolochia</em> —
            native pipevines, Virginia snakeroot, woolly Dutchman's pipe.
            These plants produce aristolochic acids as a defense against insect feeding.
            The caterpillar does not detoxify them; it sequesters them.
            The acids accumulate in the caterpillar's body tissues throughout development,
            survive the dissolution and reconstruction of metamorphosis inside the chrysalis,
            and end up concentrated in the wing scales and body fluids of the adult butterfly.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pipevine_Swallowtail_caterpillar_-_Battus_philenor%2C_Herndon%2C_Virginia.jpg/480px-Pipevine_Swallowtail_caterpillar_-_Battus_philenor%2C_Herndon%2C_Virginia.jpg"
              alt="Pipevine Swallowtail caterpillar — maroon body with two rows of orange-tipped fleshy tubercles running along the length, photographed on a leaf"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Battus_philenor_Caterpillar.jpg/480px-Battus_philenor_Caterpillar.jpg'
              }}
            />
            <figcaption>
              The caterpillar's maroon body and rows of orange-tipped tubercles are an advertisement,
              not camouflage. Most caterpillars hide. This one broadcasts its chemical contents.
              A bird that has eaten a Pipevine Swallowtail adult will not touch a caterpillar
              that looks like this.
              <span className="photo-credit"> Photo: Judy Gallagher&nbsp;&middot;&nbsp;
                <a href="https://commons.wikimedia.org/wiki/File:Pipevine_Swallowtail_caterpillar_-_Battus_philenor,_Herndon,_Virginia.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
                &nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            A blue jay eating a Pipevine Swallowtail adult experiences nausea within minutes.
            In laboratory experiments, jays conditioned on a single Pipevine Swallowtail
            refused to attack similar-looking butterfly models in subsequent trials —
            even weeks later. The aversion does not fade quickly.
            One bad meal installs a pattern-recognition response that protects multiple other
            butterfly species through the rest of that bird's life.
          </p>
          <p>
            The female Pipevine Swallowtail lays rust-red eggs in small clusters of 3 to 6
            on the underside of young <em>Aristolochia</em> leaves.
            Early instars feed in groups on the same leaf — you can find 8 to 12
            small caterpillars on a single leaf where a female deposited a cluster.
            Later instars spread out but continue to prefer young, newly-emerged leaves.
            The same vine can be defoliated and regrow twice in a single season.
          </p>
        </section>

        <section aria-labelledby="mimics-heading">
          <h2 id="mimics-heading">Three butterfly species that carry this wing pattern without the toxins</h2>
          <p>
            The female Spicebush Swallowtail (<em>Papilio troilus</em>) has iridescent blue-green
            scaling across the hindwing that matches the Pipevine's pattern closely enough
            that a bird conditioned on real Pipevines rejects her on sight.
            The male Spicebush Swallowtail carries blue-green scaling too,
            though less saturated than the female.
            Neither sex contains aristolochic acids — their caterpillars eat spicebush and sassafras,
            not pipevine.
          </p>
          <p>
            The dark-form female Eastern Tiger Swallowtail (<em>Papilio glaucus</em>) appears
            in some populations with a near-black body and iridescent blue hindwing scaling
            that copies the Pipevine pattern. Males and yellow-form females of the same species
            carry the yellow-and-black tiger stripe pattern and receive no protection.
            The dark form appears more often in populations where Pipevine Swallowtails
            are common enough to have trained local predators — in South Carolina and Georgia,
            75–80% of female tiger swallowtails are dark form; in Wisconsin, under 10% are.
          </p>
          <p>
            The female Black Swallowtail (<em>Papilio polyxenes</em>) also carries a hindwing
            pattern that overlaps with Pipevine coloration, though less precisely than
            either Spicebush or dark-form Tiger Swallowtail females.
            All three are Batesian mimics: palatable species borrowing protection
            from a model's reputation without paying the cost of sequestering toxins themselves.
          </p>
        </section>

        <section aria-labelledby="host-plant-heading">
          <h2 id="host-plant-heading">The ornamental pipevine sold at most garden centers and why it kills the caterpillar</h2>
          <p>
            <em>Aristolochia elegans</em> — Calico flower or elegant Dutchman's pipe —
            is a tropical ornamental vine sold at many nurseries and widely planted for
            its unusual mottled purple-and-white flowers. It is not native to North America.
            A female Pipevine Swallowtail in flight detects the aromatic compounds in
            <em>Aristolochia</em> foliage and uses them to locate the plant for egg-laying.
            She cannot distinguish <em>A. elegans</em> from native species by chemistry alone.
            Caterpillars that hatch on <em>A. elegans</em> and begin feeding die
            before completing their first or second instar — the alkaloid profile in this
            tropical species is different enough to be acutely toxic to larvae
            adapted to native <em>Aristolochia</em>.
          </p>
          <p>
            The native host plants for the eastern United States are
            <em>Aristolochia macrophylla</em> (pipevine, Dutchman's pipe),
            <em>Aristolochia tomentosa</em> (woolly Dutchman's pipe), and
            <em>Aristolochia serpentaria</em> (Virginia snakeroot).
            <em>A. macrophylla</em> is a vigorous woody vine that reaches 15 to 30 feet and
            produces large, kidney-shaped leaves. It climbs by twining and does best on a fence,
            trellis, or the trunk of a large tree. Given adequate support and some shade,
            it can cover a fence section in two growing seasons.
            <em>A. tomentosa</em> handles drier conditions and slightly more shade than
            <em>A. macrophylla</em> and is a better choice for woodland-edge plantings.
          </p>
          <p>
            The Pipevine Swallowtail is locally common — sometimes abundant — wherever native
            <em>Aristolochia</em> grows in reasonable quantities. It is absent or uncommon
            in areas where no native host plant is present within flight range.
            The butterfly has two generations per year in the northern part of its range
            and three generations in the south; adults from any generation can lay eggs
            on an established native vine from late May through August.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Native pipevine on a fence or trellis — and how to tell it from the ornamental variety that kills caterpillars</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Battus_philenor_02.jpg/480px-Battus_philenor_02.jpg"
              alt="Pipevine Swallowtail adult showing ventral wing surface with rows of orange spots on the hindwings and the black body — the pattern that birds learn to associate with a bad meal"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Battus_philenor%2C_dorsal_view.jpg/480px-Battus_philenor%2C_dorsal_view.jpg'
              }}
            />
            <figcaption>
              The ventral hindwing surface carries a row of orange spots inside the iridescent
              blue field — the pattern visible when the butterfly lands with wings closed.
              Both the dorsal and ventral patterns are aversive to birds that have tried
              a Pipevine Swallowtail and gotten sick.
              <span className="photo-credit"> Photo: Judy Gallagher&nbsp;&middot;&nbsp;
                <a href="https://commons.wikimedia.org/wiki/File:Battus_philenor_02.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
                &nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Plant native pipevine — <em>Aristolochia macrophylla</em> or <em>A. tomentosa</em> — not <em>A. elegans</em> (Calico flower).</strong>{' '}
              Native pipevine is sold at native plant nurseries, sometimes labeled as
              Dutchman's pipe. <em>A. elegans</em> is sold at general garden centers,
              labeled Calico flower or Elegant Dutchman's pipe, and has distinctive
              mottled purple-and-white flowers shaped like a bent pipe.
              The native species have plain brownish-yellow pipe-shaped flowers and
              large kidney-shaped leaves. When buying, verify the Latin name before planting.
            </li>
            <li>
              <strong>Give the vine something to climb.</strong>{' '}
              <em>A. macrophylla</em> twines and climbs — it does not cling like Virginia creeper.
              A chain-link fence, wooden trellis, or the lower trunk of a large tree provides
              the support it needs. It grows 10 to 15 feet in the first two seasons
              with adequate water and partial to full sun.
              The large leaves make effective cover and are what the female is detecting
              from the air during egg-laying flights.
            </li>
            <li>
              <strong>If caterpillars defoliate the vine in summer, leave them.</strong>{' '}
              A native <em>Aristolochia</em> can be stripped of leaves twice in a single growing season
              and regrow without lasting damage. The caterpillars working the vine in July
              are completing the second generation — the adults that emerge in August and September
              will mate and lay eggs for a late-season generation that overwinters as a chrysalis
              on a nearby twig or woody stem.
            </li>
            <li>
              <strong>Check for eggs in late May and early July.</strong>{' '}
              Look on the underside of young leaves at the growing tips.
              Eggs are round, rust-red, and laid in clusters of 3 to 6.
              Early instars are dark brown and feed in groups on the same leaf;
              the maroon-with-orange-tubercles coloration develops in the third instar.
              A leaf with 8 to 12 small caterpillars feeding from the edge inward
              is a normal first-instar cluster from a single egg batch.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('spicebush-swallowtail')}>
              <span className="neighbor-name">Spicebush Swallowtail</span>
              <span className="neighbor-note">Batesian mimic — the female's iridescent blue-green hindwing scaling copies the Pipevine pattern closely enough that birds conditioned on real Pipevines reject her on sight; neither sex contains aristolochic acids</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
              <span className="neighbor-name">Eastern Tiger Swallowtail</span>
              <span className="neighbor-note">Dark-form females mimic the Pipevine pattern — the near-black body and iridescent blue hindwing scaling are carried by females only, not males; the proportion of dark-form females in a population tracks how common Pipevine Swallowtails are in the same area</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('black-swallowtail')}>
              <span className="neighbor-name">Black Swallowtail</span>
              <span className="neighbor-note">Female carries a hindwing pattern that overlaps with Pipevine coloration — a third Batesian mimic in the same yards; its caterpillars feed on carrot-family plants, not pipevine, so the two species do not compete for host plants</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('giant-swallowtail')}>
              <span className="neighbor-name">Giant Swallowtail</span>
              <span className="neighbor-note">The largest butterfly in North America, using hop tree and prickly ash as hosts; can share nectar sources with Pipevine Swallowtails from June through September where both species overlap on native wildflowers</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('spicebush')}>
              <span className="neighbor-name">Spicebush</span>
              <span className="neighbor-note">Preferred host plant for the Spicebush Swallowtail — where native pipevine grows at the woodland edge and spicebush grows in the shade layer below, both butterfly species can breed in the same yard without competing for host plants</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('joe-pye-weed')}>
              <span className="neighbor-name">Joe-Pye Weed</span>
              <span className="neighbor-note">One of the most consistent late-summer nectar sources for Pipevine Swallowtails — a patch of Joe-Pye weed in August draws Pipevines, tiger swallowtails, fritillaries, and monarchs to the same flower heads at the same time</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('wild-bergamot')}>
              <span className="neighbor-name">Wild Bergamot</span>
              <span className="neighbor-note">Blooms July through August — Pipevine Swallowtails nectar on the lavender flower heads alongside bumblebees, hummingbird moths, and tiger swallowtails during peak midsummer activity</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('purple-coneflower')}>
              <span className="neighbor-name">Purple Coneflower</span>
              <span className="neighbor-note">July–August bloom that overlaps with the second Pipevine Swallowtail generation — adults nectaring coneflower in August are loading reserves before forming chrysalids for winter</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('dutchmans-pipe')}>
              <span className="neighbor-name">Dutchman's Pipe</span>
              <span className="neighbor-note">The native vine Pipevine Swallowtail caterpillars feed on exclusively — females detect its aromatic compounds from the air and confirm the host chemistry with tarsal chemoreceptors on landing; the ornamental Aristolochia elegans carries a different alkaloid profile that kills caterpillars before they complete their second instar</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
