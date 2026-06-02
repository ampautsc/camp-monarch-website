import type { Page } from '../App'

interface ElderberryProps {
  onNavigate: (page: Page) => void
}

export default function Elderberry({ onNavigate }: ElderberryProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/2020-05-25_08_21_17_American_black_elderberry_blooming_along_Stone_Heather_Drive_in_the_Chantilly_Highlands_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg/960px-2020-05-25_08_21_17_American_black_elderberry_blooming_along_Stone_Heather_Drive_in_the_Chantilly_Highlands_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg"
          alt="American elderberry (Sambucus canadensis) in full June bloom along a path in Oak Hill, Fairfax County, Virginia — broad flat-topped white flower clusters on arching green stems against a blue sky"
          className="species-hero-image"
          style={{ objectPosition: 'center 60%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sambucus_canadensis_004.JPG/960px-Sambucus_canadensis_004.JPG'
          }}
        />
        <div className="species-hero-image-credit">
          American elderberry blooming, Oak Hill, Fairfax County, Virginia &middot; Famartin &middot; CC BY-SA 4.0
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Shrubs</div>
        <h1>Elderberry opens in June with flat-topped clusters of thousands of florets — each one open at the surface, nectar sitting where any insect can reach it</h1>
        <p className="hero__lead">
          American elderberry (<em>Sambucus canadensis</em>) blooms in June across most of
          the eastern United States. Each bloom is a flat-topped corymb roughly the size of a
          dinner plate — a cluster holding hundreds to thousands of individual florets, each
          one a short open tube with the nectar sitting near the surface. There is no depth
          to navigate. A native bee with a 2&nbsp;mm tongue harvests from an elderberry corymb
          the same as a bumblebee does. On a warm June morning, 20 or more insect species
          work the same cluster simultaneously.
        </p>
        <p className="hero__lead">
          A mature shrub carries 30 to 50 corymbs at once. By August those clusters have
          become hanging bunches of small dark purple berries — more than 70 bird species
          consume them. The Cecropia moth, the largest moth in North America with a wingspan
          up to 6&nbsp;inches, lays her eggs on elderberry leaves in late May and June while
          the shrub is still flowering. The caterpillar that hatches feeds on the leaves
          through July and August before spinning its cocoon on a nearby twig for the winter.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="floret-heading">
          <h2 id="floret-heading">Open florets, nectar at the surface — what a sweat bee and a bumblebee find on the same cluster</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sambucus_canadensis_004.JPG/960px-Sambucus_canadensis_004.JPG"
              alt="Close view of American elderberry (Sambucus canadensis) flower clusters — dense flat-topped white corymbs with hundreds of open florets on green stems"
              loading="lazy"
            />
            <figcaption>
              Elderberry corymbs in June. Each flat-topped cluster holds hundreds to thousands of
              individual florets, each open at the top with anthers extending above the petal
              rim. This structure allows insects of any tongue length to reach pollen and nectar
              without entering a tube.
              <span className="photo-credit"> Photo: H. Zell&nbsp;&middot;&nbsp;CC BY-SA 3.0 via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Most native flowers with high wildlife value have some form of restriction — a tube,
            a pouch, a landing platform sized for certain body types. Elderberry corymbs have
            none of these. Each floret is a few millimeters deep with the pollen-bearing anthers
            extending above the petal rim. Any visiting insect, regardless of tongue length,
            body size, or foraging style, can reach both nectar and pollen by landing on the
            corymb&apos;s surface.
          </p>
          <p>
            Short-tongued sweat bees, solitary mining bees, hoverflies, soldier beetles, various
            wasps, and long-tongued bumblebees all forage elderberry corymbs at the same time.
            Studies of insect visitation to elderberry have documented 50 or more species across
            the full bloom period — more than most ornamental flowering shrubs attract across a
            full season. A single shrub in full bloom, with 30 to 50 corymbs open simultaneously,
            can function as a meeting point for the local pollinator community for three weeks
            in June.
          </p>
          <p>
            The bloom period runs roughly three weeks in late May and June. On a single shrub,
            not all corymbs open at the same time — they progress from the outermost buds inward
            over the course of the bloom. An individual corymb stays in active pollen production
            for about ten days before the florets fade and small green fruits begin forming.
          </p>
        </section>

        <section aria-labelledby="berries-heading">
          <h2 id="berries-heading">Dark purple berries in August — the window when fledgling birds are learning to forage</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/American_elderberry_%28Sambucus_canadensis%29_%2823663427868%29.jpg/960px-American_elderberry_%28Sambucus_canadensis%29_%2823663427868%29.jpg"
              alt="Clusters of ripe American elderberry (Sambucus canadensis) berries — small dark purple-black drupes hanging in flat-topped clusters on reddish stems"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Sambucus_canadensis_W_IMG_3149.jpg'
              }}
            />
            <figcaption>
              Ripe elderberry clusters. Each small berry is a drupe — a thin fleshy coat over a
              hard seed. The clusters ripen over two to three weeks in July and August, turning
              from green to deep purple-black. Cedar waxwings, gray catbirds, red-eyed vireos,
              wood thrushes, and American robins are among the 70+ bird species documented
              consuming elderberries.
              <span className="photo-credit"> Photo: Rison Thumboor&nbsp;&middot;&nbsp;CC BY 2.0 via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            The berries ripen in July and August, turning from green to dark purple-black over
            two to three weeks. More than 70 bird species consume elderberries — including species
            that eat very little fruit otherwise, such as flickers and flycatchers, which shift
            toward fruit during the August berry window. Cedar waxwings, which eat almost nothing
            but fruit during summer, often strip a productive elderberry shrub within a few days
            of peak ripeness.
          </p>
          <p>
            Unlike spicebush berries (which ripen in September for migrating thrushes) or
            serviceberry fruits (which ripen in June for nestling-feeding birds), elderberry
            ripens in August — the window when fledgling birds from summer broods are learning
            to forage independently. A shrub with a full berry crop in early August is a resource
            for both experienced adults and newly independent juveniles that have just left
            the nest.
          </p>
          <p>
            Elderberry does not require a second plant for fruit production. Unlike spicebush —
            which is dioecious and requires a male and a female — elderberry flowers contain both
            stamens and pistil and can self-pollinate. A single plant produces fruit. A second
            elderberry planted within 50 feet often increases the size and density of the berry
            crop through cross-pollination.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">Cecropia eggs in late May, a 4-inch caterpillar in August, and a papery cocoon on the twig through winter</h2>
          <p>
            The Cecropia moth (<em>Hyalophora cecropia</em>) lays her eggs in small clusters
            on elderberry leaves in late May and early June — the same weeks the shrub is in
            bloom. Elderberry is one of several host plants for Cecropia; others include wild
            cherry, plum, apple, and maple. A Cecropia female visiting an elderberry corymb
            to nectar may deposit eggs on the same shrub.
          </p>
          <p>
            The Cecropia caterpillar hatches in about ten days. Early instars are dark and
            small. By July the caterpillar has turned bright green with rows of colored
            tubercles running the length of its body, reaching 4&nbsp;inches before pupation.
            It feeds on elderberry leaves through July and into August. By late August it spins
            a large papery cocoon attached to a twig or branch — visible through winter as a
            3-inch sealed tube on the wood. The adult moth that emerges the following spring
            does not eat. It lives only to find a mate, which it does by following the
            female&apos;s pheromone plume over distances up to a mile in a single night.
          </p>
          <p>
            Polyphemus moth (<em>Antheraea polyphemus</em>) also uses elderberry as a host
            plant alongside oak, maple, birch, and willow. Both giant silkmoths — Cecropia
            and Polyphemus — have been declining in areas where yard lighting is heavy. The
            moths navigate by pheromone during their mating flights; a bright outdoor light
            within the flight path pulls males off course and away from waiting females. A
            yard that produces caterpillars but runs exterior lights through the night can
            disrupt the adult mating cycle even when the host plant is present.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Elderberry at the yard edge, a thicket over time, and lights off from May through June</h2>
          <ol className="step-list">
            <li>
              <strong>Plant elderberry at a fence line, yard edge, or low wet spot.</strong>{' '}
              American elderberry (<em>Sambucus canadensis</em>) grows 5 to 12&nbsp;feet tall
              and spreads by root sprouts into a multi-stem clump over several years. It
              tolerates wet soil, seasonal flooding, part shade, and dry edges — conditions
              where ornamental shrubs typically fail. Container plants are available at native
              plant nurseries in spring and fall. Plant 6 to 10&nbsp;feet from other shrubs to
              give it room to spread. It grows fast: a first-year transplant can reach 3 to
              4&nbsp;feet in a single growing season without irrigation after the first month.
            </li>
            <li>
              <strong>Let the root sprouts expand into a thicket over time.</strong>{' '}
              A single elderberry eventually sends up suckers in a 3- to 6-foot radius.
              Gray catbirds, common yellowthroats, and song sparrows use dense shrub thickets
              for nesting and cover — the structure that develops from a multi-stem elderberry
              clump is exactly the low, branchy tangle these species require. Cutting the
              sprouts each year keeps the plant as a single stem but removes that structure.
              In a yard edge or naturalized strip, the expanding clump is the more productive
              form.
            </li>
            <li>
              <strong>Check the leaves in July for caterpillars before pruning.</strong>{' '}
              Cecropia and Polyphemus caterpillars feed on elderberry leaves through July and
              August. Both are large enough to see by mid-summer — 2 to 4&nbsp;inches — and
              leave visible feeding damage: large sections of leaf consumed, or the leaf stripped
              to the midrib. Before cutting back stems or clearing dead wood in summer, walk the
              branches and look for green caterpillars with colored tubercles. Leave those stems
              untouched until September. The larval feeding causes no lasting damage to the shrub.
            </li>
            <li>
              <strong>Turn off or shield porch and garage lights from 9&nbsp;pm onward in May and June.</strong>{' '}
              Cecropia and Polyphemus moths emerge from their cocoons between late April and
              June. Females emit pheromones and wait; males fly toward the scent. A bright
              outdoor light within 30&nbsp;feet of the flight path pulls males off course and
              disrupts the mating sequence. Turning off non-essential exterior lighting between
              9&nbsp;pm and dawn for the six weeks from mid-April through late May removes the
              primary obstacle to successful mating in suburban habitat. The elderberry provides
              the host plant; reduced lighting allows the adult cycle to complete.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">What shares the bloom, the berries, and the leaves across the growing season</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cecropia-moth')}>
                Cecropia Moth
              </button>{' '}
              &mdash; lays eggs on elderberry leaves in late May and June; the caterpillar
              feeds through July and August before spinning a large papery cocoon on a branch;
              the adult that emerges the following spring does not eat and lives only to mate
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('polyphemus-moth')}>
                Polyphemus Moth
              </button>{' '}
              &mdash; uses elderberry as a host plant alongside oak, maple, and birch;
              caterpillars feed from June through August; both Cecropia and Polyphemus are
              disrupted by outdoor lighting during their May&ndash;June mating flight window
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; forages elderberry corymbs in June alongside dozens of other native
              bee species; the open floret structure allows bees of any tongue length to
              access pollen and nectar from the corymb surface
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cedar-waxwing')}>
                Cedar Waxwing
              </button>{' '}
              &mdash; consumes elderberries heavily during the August ripening window; waxwing
              flocks strip a productive shrub within days of peak ripeness; they return to
              the same shrub year after year when the berry crop is reliable
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('gray-catbird')}>
                Gray Catbird
              </button>{' '}
              &mdash; nests in dense shrub tangles and regularly uses elderberry thickets for
              nesting cover; consumes the berries in August during and after the breeding season
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spicebush')}>
                Spicebush
              </button>{' '}
              &mdash; blooms in March for early bumblebees, fruits in September for migrating
              thrushes; planted with elderberry, the two shrubs cover the bloom and fruit
              sequence from early spring through fall migration in the same shaded yard edge
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-woodcock')}>
                American Woodcock
              </button>{' '}
              &mdash; nests in thicket edges of the kind elderberry forms; the shrub's dense
              multi-stem clumps provide the low branchy cover the woodcock uses during the day
              and the moist soil nearby keeps earthworms accessible after dark
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
