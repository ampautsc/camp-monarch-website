import type { Page } from '../App'

interface CoralHairstreakProps {
  onNavigate: (page: Page) => void
}

export default function CoralHairstreak({ onNavigate }: CoralHairstreakProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Coral_Hairstreak_-_Satyrium_titus%2C_Occoquan_Bay_National_Wildlife_Refuge%2C_Woodbridge%2C_Virginia_%2835748760825%29.jpg/1280px-Coral_Hairstreak_-_Satyrium_titus%2C_Occoquan_Bay_National_Wildlife_Refuge%2C_Woodbridge%2C_Virginia_%2835748760825%29.jpg"
          alt="A Coral Hairstreak butterfly with wings closed perched on a flower, showing the gray-brown underwing with the distinctive row of vivid coral-red spots along the hindwing edge"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Judy Gallagher&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Coral_Hairstreak_-_Satyrium_titus,_Occoquan_Bay_National_Wildlife_Refuge,_Woodbridge,_Virginia_(35748760825).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Coral Hairstreak</h1>
        <p className="hero__lead">
          The Coral Hairstreak is the only common eastern hairstreak butterfly without
          hindwing tails — and the most strikingly patterned of the group. When it lands
          and closes its wings, a row of vivid coral-red spots runs along the outer edge of
          the hindwing underside, brilliant against the dull gray-brown background. Wingspan
          is 1 to 1.5 inches. Adults fly for just a few weeks in June and July, with a
          particular passion for native milkweeds and butterfly weed. The caterpillars feed
          on native wild cherries and wild plums, tying this butterfly tightly to native
          forest-edge shrubs and old-field thickets. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Coral Hairstreaks are creatures of sunny edges: old fields, forest margins,
            brushy roadsides, and shrubby clearings where wild cherries grow near native
            wildflowers. Adults are strong nectar feeders and are almost always found at
            flowers during their brief June–July flight. Native butterfly weed (Asclepias
            tuberosa) is a magnet for this species — a blooming stand in late June reliably
            draws Coral Hairstreaks, often several at once. Common milkweed, native clovers,
            and native dogbane are other favored nectar sources. Unlike tailed hairstreaks,
            the Coral Hairstreak does not perform the hindwing-rubbing false-head display —
            the absence of tails removes that particular predator-confusion strategy. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Satyrium_titus_on_Asclepias_tuberosa_%2848006971406%29.jpg"
            alt="A Coral Hairstreak nectaring on orange butterfly weed flowers, showing the vivid coral-red spots on the gray-brown hindwing underside in close detail"
            width={1207}
            height={1207}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            Butterfly weed (Asclepias tuberosa) is arguably the single best native plant
            for attracting Coral Hairstreaks. The Coral Hairstreak has one of the shortest
            adult flight periods of any eastern butterfly — typically three to four weeks
            in late June and July. Catch the bloom of butterfly weed at the right time
            and you can reliably find Coral Hairstreaks nectaring on it alongside monarchs
            and native bees.
            <span className="photo-credit"> Photo: Great Smoky Mountains National Park&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Satyrium_titus_on_Asclepias_tuberosa_(48006971406).jpg" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            The Coral Hairstreak has a single generation per year and overwinters as an
            egg — the only stage able to survive the cold. The eggs hatch in spring,
            precisely timed to the opening of wild cherry leaves. Caterpillars are green
            with diagonal yellow-green markings and feed on the leaves and fruit of native
            wild cherries (Prunus serotina, P. virginiana) and wild plum (P. americana).
            Like many hairstreak caterpillars, they are tended by ants that harvest their
            sugary secretions. Pupation occurs in leaf litter in June. Adults emerge shortly
            after and fly for three to four weeks, leaving only the overwintering eggs to
            carry the species through to the following spring. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Coral Hairstreak is locally common in areas with native wild cherries and
            milkweed but has declined in many regions as old-field and forest-edge habitat
            has been lost. [1] The combination of requirements — native Prunus shrubs for
            caterpillars and open sunny wildflower areas for adult nectar, particularly
            milkweed — means it disappears quickly when either component is lost. It is
            sensitive to habitat fragmentation: a patch too small to contain both shrubby
            caterpillar habitat and open milkweed nectar areas cannot support a population.
            In landscapes with intact old-field edges and native milkweeds, it remains a
            reliable June–July species. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native butterfly weed (Asclepias tuberosa). Butterfly weed is the
              single most reliable attractor of Coral Hairstreaks during their June–July
              flight. It is a drought-tolerant native milkweed of dry, sunny habitats —
              plant it in full sun in well-drained soil and it will bloom reliably for
              decades, also supporting monarchs, native bees, and many other pollinators. [2]
            </li>
            <li>
              Protect or plant native wild black cherry (Prunus serotina) and chokecherry
              (Prunus virginiana). These native Prunus shrubs and small trees are the
              caterpillar host plants. They grow in forest edges, old fields, and roadsides
              and support not only Coral Hairstreaks but dozens of other moth and butterfly
              species. Allowing them to grow at field margins is among the highest-value
              habitat actions for insects. [2]
            </li>
            <li>
              Maintain brushy old-field edges. Coral Hairstreaks live in the transitional
              habitat between open field and shrubby edge. Leaving a brushy, unmowed margin
              of native shrubs and wildflowers between maintained lawn and woodland creates
              the habitat mosaic this species needs. [2]
            </li>
            <li>
              Plant native common milkweed (Asclepias syriaca). Common milkweed is a key
              nectar source for Coral Hairstreaks and blooms in late June — perfectly timed
              to the peak adult flight. A patch of common milkweed near a wild cherry thicket
              creates the essential habitat combination in a small space. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('gray-hairstreak')}>
            <span className="neighbor-name">Gray Hairstreak</span>
            <span className="neighbor-note">The most common hairstreak butterfly in the east; Gray Hairstreaks overlap with Coral Hairstreaks in open forest-edge habitat and are often found at the same native milkweed patches in late June.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-tailed-blue')}>
            <span className="neighbor-name">Eastern Tailed-Blue</span>
            <span className="neighbor-note">A small gossamer-wing butterfly of similar open habitats; both are tiny butterflies of field edges and sunny patches that benefit from native milkweed and wildflower restoration.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">A co-visitor to butterfly weed and common milkweed; where Coral Hairstreaks gather to nectar in late June, American Bumble Bees and other native bees are often working the same flowers simultaneously.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('monarch-life')}>
            <span className="neighbor-name">Monarch Butterfly</span>
            <span className="neighbor-note">Both monarchs and Coral Hairstreaks depend on native milkweeds; a milkweed patch in a sunny garden in late June is likely to have both species nectaring at the same time — making milkweed one of the most productive plants you can grow.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Satyrium_titus/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Coral Hairstreak</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Satyrium-titus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Coral Hairstreak</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
