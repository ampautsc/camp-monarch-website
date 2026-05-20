import type { Page } from '../App'

interface CecropiaMothProps {
  onNavigate: (page: Page) => void
}

export default function CecropiaMoth({ onNavigate }: CecropiaMothProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Hyalophora_cecropia_adult_female_sjh.JPG"
          alt="Cecropia Moth at rest with wings fully spread, revealing dinner-plate wingspan with red-banded body and eye spots — North America's largest native moth"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: No machine-readable author provided. Kugamazog~commonswiki assumed (based on cop · <a href="https://commons.wikimedia.org/wiki/File:Hyalophora_cecropia_adult_female_sjh.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a> via Wikimedia Commons */}
          Photo: No machine-readable author provided. Kugamazog~commonswiki assumed (based on cop&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Hyalophora_cecropia_adult_female_sjh.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Cecropia Moth</h1>
        <p className="hero__lead">
          Wings spanning seven inches. A body banded in red and white. Eyes that
          never open to eat — because the adult has no mouth. North America&apos;s
          largest native moth emerges in May, finds a mate by scent across a mile
          of darkness, and dies within two weeks. The wild cherry tree in your
          yard is the reason it exists at all.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">The largest moth in North America</h2>
          <p>
            <em>Hyalophora cecropia</em> is a giant silk moth in the family
            Saturniidae — the same family as the Luna and Polyphemus moths. Its
            wingspan reaches five to seven inches, making it the largest native
            moth on the continent. The wings are brown and brick-red, each
            marked with a white crescent and bands of red, white, and tan that
            form a pattern unlike anything else in the forest. The abdomen is
            banded in alternating red and white, with a white collar at the
            base of the thorax. When a Cecropia Moth lands on a window screen
            in May, people stop and stare — many have never seen an insect this
            large or this ornate.
          </p>
          <p>
            Like all giant silk moths, the adult Cecropia has vestigial
            mouthparts and cannot eat or drink. From the moment it chews through
            its cocoon, it runs entirely on fat reserves accumulated during its
            caterpillar stage. Males emerge first and spend their nights
            navigating by scent, following pheromone plumes emitted by females
            with comb-like antennae that can detect a single molecule per cubic
            meter of air. Studies have shown males can locate a female from a
            mile or more away on a still night. A female mates once, lays
            her eggs in small clusters on host tree leaves over several nights,
            and is dead within two weeks.
          </p>
          <p>
            The caterpillar is extraordinary: bright lime-green, growing to
            nearly four inches long over five instars, studded with rows of
            colorful spiky tubercles — yellow, orange, and blue — that catch
            the light and look almost artificial. It feeds steadily through late
            summer, building the fat reserves the adult will depend on entirely.
            In autumn the caterpillar spins a large papery-silk cocoon attached
            lengthwise to a branch or trunk. The cocoon overwinters, and the
            moth chews free in late April or May.
          </p>
        </section>

        <section aria-labelledby="trees-heading">
          <h2 id="trees-heading">What the caterpillar needs</h2>
          <p>
            Cecropia Moth caterpillars are among the less host-restricted of the
            giant silk moths. Their primary hosts are wild cherry
            (<em>Prunus serotina</em>), chokecherry, and other native
            <em>Prunus</em> species. They also develop on elderberry, box elder,
            maple, birch, sassafras, apple, plum, lilac, and several other
            native and introduced woody plants. This relative flexibility makes
            Cecropia Moths better positioned than Luna or Polyphemus Moths to
            persist in suburban landscapes — but only if those landscapes still
            contain some native canopy or shrub layer.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Hyalophora_cecropia_caterpillar.jpg"
                  alt="Cecropia Moth caterpillar — a large green caterpillar with blue, yellow, and red tubercles, one of North America's largest"
                  loading="lazy"
                />
                <figcaption>
                  The caterpillar that becomes a Cecropia Moth grows to four inches — one of the largest in North America. It feeds on cherry, maple, birch, and apple. The adult that emerges has no functional mouth and will not eat again. Its entire adult life — seven to ten days — is devoted to finding a mate.
                  <span className="photo-credit"> Photo: Michael Hodge · <a href="https://commons.wikimedia.org/wiki/File:Hyalophora_cecropia_caterpillar.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            Wild black cherry is the highest-value Cecropia host tree in the
            eastern United States. It is also one of the most ecologically
            productive native trees on the continent: the Tallamy lab at the
            University of Delaware found wild black cherry supports more
            caterpillar species (456) than any other native tree except oaks.
            Cherry also provides fruit for dozens of bird species and is a major
            nectar source early in the season. A yard with a wild cherry tree
            is a yard with a functioning food web — and a yard where Cecropia
            caterpillars can complete their development.
          </p>
          <p>
            Elderberry is a second high-value Cecropia host that is accessible
            to homeowners with less canopy space. Native elderberry
            (<em>Sambucus canadensis</em>) is a large shrub rather than a tree,
            produces flowers that support bees and butterflies in June and July,
            and provides berries eaten by more than 45 bird species in late
            summer. It can grow in part shade, tolerates wet soil, and
            establishes quickly. Planting a native elderberry along a fence line
            or at the edge of a yard creates Cecropia habitat without requiring
            a large tree.
          </p>
        </section>

        <section aria-labelledby="parasitoid-heading">
          <h2 id="parasitoid-heading">The 1906 introduction that changed everything</h2>
          <p>
            In 1906, scientists introduced a parasitoid fly — <em>Compsilura
            concinnata</em> — from Europe into New England. The goal was to
            suppress the spongy moth (then called gypsy moth) and the browntail
            moth, two introduced pest species defoliating trees across the
            region. <em>Compsilura</em> was a proven parasitoid of those
            targets in its native range. It seemed like a useful tool.
          </p>
          <p>
            What was not understood in 1906 was that <em>Compsilura</em> is a
            generalist. It does not restrict itself to spongy moths. It attacks
            more than 200 species of lepidopteran larvae. And unlike many
            parasitoids that track their host&apos;s population density,
            <em>Compsilura</em> is highly mobile and persistent. It does not
            disappear when target densities fall.
          </p>
          <p>
            In 2000, a study published in <em>Conservation Biology</em> by
            Boettner, Elkinton, and Boettner reported direct field measurements
            of the damage. Laboratory-reared Cecropia, Polyphemus, and Promethea
            moth caterpillars were released at field sites across Massachusetts
            and monitored for parasitism. Parasitism rates by <em>Compsilura</em>
            and related introduced flies were extremely high — exceeding 80% for
            Cecropia in some sites. The authors concluded that introduced
            parasitoids are likely responsible for the marked decline of native
            silk moths in New England, where all three species were once
            abundant and are now rarely encountered.
          </p>
          <p>
            This is not a historical footnote. <em>Compsilura</em> is still
            present and active across its introduced range in the northeastern
            United States. Populations of Cecropia, Polyphemus, and Promethea
            moths have not recovered. The fly introduced to solve one ecological
            problem created a second one that has persisted for 120 years and is
            not reversible. The lesson — that biological control agents
            introduced without understanding nontarget effects can cause
            long-term collateral damage to native communities — remains one of
            the clearest examples of unintended consequences in conservation
            history.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that support Cecropia Moths</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Fallen_leaves.jpg" alt="Autumn leaves on the ground" loading="lazy" />
            <figcaption>
              Cecropia cocoons spin onto branches just above the leaf litter and overwinter there until spring. Raking and removing autumn leaves removes the thermal layer those cocoons depend on. Leaving the leaves — just here — is the whole intervention.
              <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;<a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant wild cherry or native elderberry.</strong>{' '}
              Wild black cherry (<em>Prunus serotina</em>) is the single
              highest-value Cecropia host tree and one of the most ecologically
              productive native trees in the eastern United States. Elderberry
              (<em>Sambucus canadensis</em>) is a fast-establishing native shrub
              that provides Cecropia larval habitat alongside flowers for bees
              and fruit for birds. Either plant is a meaningful addition to a
              suburban yard. Find both species at native plant nurseries using{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Turn off outdoor lights during May and June.</strong>{' '}
              Cecropia adults fly from late April through June in the northern
              part of their range, with peak activity in May. Males navigating
              toward pheromone plumes are deflected by bright outdoor light,
              spending hours circling a porch light instead of finding a female.
              Motion-activated lighting, warm-amber LED bulbs, and downward-directed
              fixtures reduce the light trap during the only weeks that matter
              for the annual Cecropia generation. See the full picture of how
              light affects native insects on the{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticides &amp; Your Habitat page
              </button>
              .
            </li>
            <li>
              <strong>Protect the cocoon through winter.</strong>{' '}
              Cecropia cocoons are large — two to three inches long — and
              wrapped lengthwise along a small branch or twig. They are brown
              and papery, resembling a crumpled leaf cluster. If you find one
              during fall or winter pruning, leave it attached to its branch or
              relocate it carefully to a protected outdoor spot (it must
              experience cold temperatures to complete development). Do not
              bring it indoors. The moth inside requires a full winter at
              outdoor temperatures before it can emerge in spring.
            </li>
            <li>
              <strong>Stop broad-spectrum insecticide applications on host trees.</strong>{' '}
              Pyrethroid and organophosphate sprays on wild cherry, elderberry,
              maple, and birch during the caterpillar season (June through
              September) kill Cecropia larvae directly. The large, colorful
              caterpillar you find on your wild cherry in August is a Cecropia
              Moth larva. It will not harm the tree. Leave it. Avoid
              participation in aerial Bt spray programs on properties containing
              Cecropia host trees when local opt-out programs permit.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">A yard that supports Cecropia supports the whole web</h2>
          <p>
            The wild cherry tree that Cecropia caterpillars need is the same
            tree that supports 456 caterpillar species, 49 species of nesting
            birds, and the fruit-eating migrants passing through in July and
            August. The elderberry that hosts Cecropia larvae also feeds the
            cedar waxwings and thrushes that need fruit in late summer before
            migration. The pesticide-free, native-planted yard that gives a
            Cecropia caterpillar a chance to complete its life cycle is the same
            yard that supports monarchs, wood thrushes, fireflies, and bats.
          </p>
          <p>
            A Cecropia Moth finding a mate on a warm May night is not a separate
            conservation story from the monarch finding milkweed, or the firefly
            larvae overwintering in leaf litter, or the little brown bat
            emerging to hunt at dusk. These are threads in the same fabric.
            When the fabric holds, they all persist. When a yard stops applying
            pesticides and adds one native cherry or elderberry, it strengthens
            that fabric across the entire block.
          </p>
          <p>
            When a seven-inch moth rests on a windowpane in May — wings spread,
            abdomen banded red and white, the night it has left to find a mate
            already half gone — it is doing what Cecropia Moths have done on
            this continent for millions of years. The question is whether the
            yard it lands on still has what it needs to finish.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build a yard that supports Cecropia Moths and the food web they anchor.</strong>{' '}
            Add native host plants with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , reduce pesticides with the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , protect overwintering cocoons with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , and see what else shares your yard in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
