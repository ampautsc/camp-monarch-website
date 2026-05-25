import type { Page } from '../App'

interface PartridgePeaProps {
  onNavigate: (page: Page) => void
}

export default function PartridgePea({ onNavigate }: PartridgePeaProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/41097500/large.jpg"
          alt="Partridge Pea five-petaled yellow flowers and pinnate leaves, Damon, Texas, June 2019"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: rrcreech52&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/26465580" target="_blank" rel="noopener noreferrer">iNaturalist obs. 26465580</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Partridge Pea opens five-petaled yellow flowers in July and carries nectar-producing glands on its leaf stems — not inside the flowers — where ants drink and then patrol the foliage.</h1>
        <p className="hero__lead">
          Partridge Pea (<em>Chamaecrista fasciculata</em>) is a native annual wildflower that
          blooms from July through September in open, sunny, disturbed ground across the central
          and eastern United States. It germinates in bare soil in spring, reaches 1 to 3 feet
          by midsummer, and drops seed pods by late September that overwinter and germinate
          the following spring without any replanting.
        </p>
        <p className="hero__lead">
          Cloudless Sulphur, Sleepy Orange, and Little Yellow butterflies lay eggs on its
          leaves. Cloudless Sulphur caterpillars will only complete their larval development
          on legumes in the genus <em>Chamaecrista</em> — no other plant substitutes.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="nectaries-heading">
          <h2 id="nectaries-heading">Nectar outside the flower — the gland on the leaf stem that recruits ant guards</h2>
          <p>
            Most flowering plants produce nectar inside the flower, where it draws pollinators
            that carry pollen from plant to plant. Partridge Pea produces nectar in both places —
            inside the flower for bees, and outside the flower on the petioles. The petiolar
            nectaries are small cup-shaped glands at the base of each leaf stem. They secrete
            sugar solution continuously during the growing season, unconnected to whether the
            plant is in flower.
          </p>
          <p>
            Ants drink from these glands and then walk the leaf surfaces. An ant feeding from
            a petiolar nectary reacts aggressively to other insects it encounters on the same
            leaf — caterpillars, leaf-chewing beetles, aphids. Field experiments removing ants
            from Partridge Pea plants have shown measurably higher herbivore loads on unguarded
            plants within days. The glands are not a byproduct of some other function. Their
            position on the leaf stem, rather than inside the flower, is what places the ants
            where the plant needs them.
          </p>
          <p>
            This creates a tension visible if you watch the plant long enough. A Cloudless Sulphur
            caterpillar is eating Partridge Pea leaves. Ants are patrolling those same leaves,
            paid in sugar to protect them. The caterpillar is large enough to escape most ant
            harassment, but smaller larvae are not. The plant's ant patrol partly works and partly
            doesn't. Both happen simultaneously on the same stem.
          </p>
        </section>

        <section aria-labelledby="butterflies-heading">
          <h2 id="butterflies-heading">Cloudless Sulphur, Sleepy Orange, Little Yellow — the same leaf feeds three species of larvae</h2>
          <p>
            Cloudless Sulphur caterpillars eat the leaves and flowers of legumes in the genus
            <em> Chamaecrista</em>. Partridge Pea is the most widely available native host across
            the eastern United States. The caterpillar shifts body color to match the plant part
            it is eating: green when consuming leaves, yellow when consuming flowers. A caterpillar
            on a Partridge Pea plant with open blooms can match the petal color closely enough
            to be nearly invisible from above.
          </p>
          <p>
            Sleepy Orange caterpillars also feed on <em>Chamaecrista</em>, along with a few
            other native legumes. In the central United States, Partridge Pea is the most likely
            host plant a Sleepy Orange female encounters during her August–September oviposition
            window. She lays eggs singly on young leaflets.
          </p>
          <p>
            Little Yellow butterflies use Partridge Pea alongside other legumes. Their caterpillars
            are small and pale green, difficult to see against the leaflets.
          </p>
          <p>
            All three species are on the wing from July through September — the same weeks that
            Partridge Pea carries its heaviest leaf growth. The butterflies' flight periods evolved
            alongside the plant's growing season.
          </p>
        </section>

        <section aria-labelledby="annual-heading">
          <h2 id="annual-heading">Nitrogen in the root nodules, seeds on the ground in September, the same plant back in May</h2>
          <p>
            Partridge Pea is a legume. Like other legumes, it forms a partnership with
            <em> Rhizobium</em> bacteria in nodules on its roots. The bacteria fix atmospheric
            nitrogen into a form the plant can use; in exchange, the plant feeds carbon to the
            bacteria. When the plant dies after frost, the nitrogen in those nodules becomes
            available in the soil. A patch of Partridge Pea in a lean, sandy area improves the
            soil chemistry each season it grows there.
          </p>
          <p>
            Being an annual, the above-ground plant completes its cycle by hard frost. Before it
            dies, each seed pod — a 1 to 2-inch flattened legume holding 6 to 12 seeds — matures
            and splits open. The seeds fall near the parent plant and overwinter in the soil. Most
            germinate the following spring without any handling. A planting left unraked in autumn
            reappears in the same patch the following May.
          </p>
          <p>
            This is how Partridge Pea colonizes road cuts, old fields, and prairie margins in its
            native range — not by perennial roots, but by seeding forward into open, disturbed
            ground. In a yard with a bare sunny slope or a spot where lawn was removed, it fills
            the space each year without replanting.
          </p>
        </section>

        <section aria-labelledby="site-heading">
          <h2 id="site-heading">Dry to average soil, full sun — the plant that does better in poor ground than rich</h2>
          <p>
            Partridge Pea grows in dry to average soil and full sun. In rich, amended garden
            soil it can push excessive leaf growth at the expense of flowers and seed set. It
            performs better in leaner conditions — a sandy edge, a quick-draining slope, a
            patch where lawn was removed and nothing was added. This is a plant that does not
            require bed preparation.
          </p>
          <p>
            Sow seed directly in spring after last frost. Scarify lightly by rubbing seeds between
            two sheets of sandpaper, or soak overnight in warm water before sowing. The seed coat
            is hard and limits germination without scarification. Press into the soil surface and
            water once; rain is sufficient through the rest of the season in most areas.
          </p>
          <p>
            The plant reaches 1 to 3 feet depending on soil moisture. The pinnate leaves — 8 to
            15 pairs of small leaflets per leaf — fold along the midrib when touched or when
            light levels drop rapidly. Anyone who brushes the plant while passing can watch the
            leaflets close in sequence along the stem within a few seconds.
          </p>
        </section>

        <section aria-labelledby="context-heading">
          <h2 id="context-heading">Partridge Pea as the fourteenth native — the July–September larval host the sequence was missing</h2>
          <p>
            In the Camp Monarch planting sequence, Partridge Pea fills a gap: it is the only
            July–September larval host in the collection. Common Milkweed and Swamp Milkweed serve
            monarch caterpillars. New Jersey Tea serves Mottled Duskywing larvae. Wild Columbine
            serves Columbine Duskywing. Partridge Pea serves Cloudless Sulphur, Sleepy Orange,
            and Little Yellow — three butterfly species — in the same midsummer-to-early-fall
            window when Ironweed, Wild Bergamot, and Purple Coneflower are providing nectar
            for adults.
          </p>
          <p>
            A Cloudless Sulphur nectaring on goldenrod in September grew up as a caterpillar on
            a legume leaf in July. In a yard with Partridge Pea, that larval stage could happen
            10 feet from where the adult is currently feeding. The plant that completes the
            butterfly's cycle is the same one the ant guards are patrolling and the same one
            whose leaves fold when you walk past it.
          </p>
          <div className="connections">
            <h3>Plants and species connected to Partridge Pea</h3>
            <ul>
              <li>
                <button className="link-button" onClick={() => onNavigate('tiger-swallowtail')}>
                  Tiger Swallowtail
                </button>{' '}
                — Tiger Swallowtails nectar on Partridge Pea flowers in July and August while
                Cloudless Sulphur caterpillars eat the leaves; both butterflies use the same
                plant in the same weeks for different purposes
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('ironweed')}>
                  Ironweed
                </button>{' '}
                — blooms in the same July–September window; Ironweed provides deep-purple nectar
                clusters for migrating monarchs and other adults while Partridge Pea hosts Cloudless
                Sulphur larvae in the same season
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('canada-goldenrod')}>
                  Canada Goldenrod
                </button>{' '}
                — Partridge Pea seed sets in September as goldenrod peaks; Cloudless Sulphur adults
                that grew up on Partridge Pea leaves in July nectar on goldenrod in September before
                the season closes
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('wild-bergamot')}>
                  Wild Bergamot
                </button>{' '}
                — fellow midsummer bloomer; Wild Bergamot draws specialist native bees in July
                while Partridge Pea hosts butterfly larvae in the same weeks, the two plants
                serving different groups of insects simultaneously
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('cloudless-sulphur')}>
                  Cloudless Sulphur
                </button>{' '}
                — the caterpillar shifts body color to match the plant part it is eating: green
                when consuming leaves, yellow when consuming flowers; a Partridge Pea patch in
                bloom in July can hold both color forms on the same stem at the same time
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('sleepy-orange')}>
                  Sleepy Orange
                </button>{' '}
                — lays eggs on Partridge Pea leaflets from July through September; the caterpillar
                feeds on the same foliage that the ant guards patrol; adults do not migrate south
                in autumn — they stay active through warm spells and overwinter as adults in the
                southern states
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('little-yellow')}>
                  Little Yellow
                </button>{' '}
                — the smallest of the three Partridge Pea-dependent butterflies; females lay eggs
                singly on young leaflets and the caterpillars are pale green, nearly invisible
                against the foliage; found nectaring on the flowers in July while their own
                larvae feed on the stems below
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('eastern-cottontail')}>
                  Eastern Cottontail
                </button>{' '}
                &mdash; browses partridge pea foliage through July and August; the plant&apos;s
                low spreading growth keeps tender leaves at ground level through the weeks
                when cottontail kits are dispersing from the nest at 3&ndash;4 weeks of age and
                ranging for food on their own; both the ant patrol drawn by the petiolar nectaries
                and the young rabbits returning to browse at dusk use the same leaves
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
