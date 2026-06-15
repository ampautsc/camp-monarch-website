import type { Page } from '../App'

interface GrayHairstreakProps {
  onNavigate: (page: Page) => void
}

export default function GrayHairstreak({ onNavigate }: GrayHairstreakProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Gray_Hairstreak_%28Strymon_melinus%29.jpg/1280px-Gray_Hairstreak_%28Strymon_melinus%29.jpg"
          alt="A Gray Hairstreak butterfly perched on a flower with wings closed showing the gray underwing with the black and white striped line and the orange spot near the hindwing tail"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Anne Toal&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Gray_Hairstreak_(Strymon_melinus).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Gray Hairstreak</h1>
        <p className="hero__lead">
          The Gray Hairstreak is the most common and widespread hairstreak butterfly in
          North America — a small, fast, gray butterfly with fine hindwing tails and a
          vivid orange spot near each tail tip. Wingspan is 0.75 to 1.25 inches.
          It is a generalist of open and disturbed habitats — fields, gardens, roadsides,
          and forest edges — and uses an enormous range of native host plants, making it
          one of the few small butterflies that thrives in varied and even weedy conditions.
          The upper wing is gray-blue in males; the underside is pale gray with a black and
          white striped line crossing both wings. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Gray Hairstreaks are quick and agile in flight, moving rapidly between flowers
            in sunny, open areas. Adults nectar on a very wide variety of native and
            non-native wildflowers, with particular preference for native milkweeds, native
            goldenrod, native clovers, and small composites. While nectaring, they often
            rub their hindwings together slowly — this makes the hindwing tails move in a
            way that mimics antennae, directing predators&apos; attention to a false head at
            the back of the butterfly rather than the real head at the front. The orange
            eyespot near each tail reinforces the illusion. Males perch on prominent twigs
            and dart at passing butterflies to defend territory. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/57/Gray_Hairstreak_%28Strymon_melinus%29_%287883583564%29.jpg"
            alt="A Gray Hairstreak butterfly with wings spread open showing the dull gray-blue upper wing surface and the distinctive orange spot near the hindwing tail"
            width={1148}
            height={972}
            loading="lazy"
          />
          <figcaption>
            The Gray Hairstreak&apos;s generalist diet is remarkable: over 200 plant species
            across dozens of plant families have been recorded as caterpillar hosts. Native
            legumes, native mints, native mallows, and native composites are among the most
            common. This flexibility is why the Gray Hairstreak is one of the few small
            butterflies still regularly seen in heavily modified landscapes.
            <span className="photo-credit"> Photo: Aaron Carlson&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Gray_Hairstreak_(Strymon_melinus)_(7883583564).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Gray Hairstreaks produce two to three generations per year in the east and
            overwinter as pupae. Adults are present from April through October. Caterpillars
            are variable in color — green, pink, or brown — matching the flower or seed
            head they feed on. Unlike many butterflies that feed only on leaves, Gray
            Hairstreak caterpillars bore into flowers, seed pods, and fruits of the host
            plant, eating from the inside. The wide host plant range reflects a diet of
            reproductive plant parts rather than foliage — wherever a caterpillar can
            bore into a flower or pod, it finds nutrition. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Gray Hairstreak is abundant and not of conservation concern. [1] Its broad
            host plant tolerance and ability to use disturbed, weedy habitat make it one
            of the most resilient small butterflies in the face of landscape change. It
            is common in suburban gardens wherever native wildflowers bloom in sunny spots.
            Its main limitation is the availability of open, sunny habitat with diverse
            native wildflowers — it is less common in deep shade or in areas where
            herbicides eliminate the native wildflower understory. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native milkweeds. Gray Hairstreaks are frequent visitors to common
              milkweed (Asclepias syriaca) and butterfly weed (Asclepias tuberosa) for
              nectar, and milkweeds are recorded caterpillar host plants as well. A
              milkweed patch in a sunny area draws hairstreaks alongside monarchs and
              many native bees. [2]
            </li>
            <li>
              Plant native mountain mints (Pycnanthemum spp.). Native mountain mints are
              superb wildflowers for hairstreaks — as nectar plants and as recorded
              caterpillar hosts. They bloom over a long season, spread slowly from
              rhizomes, and attract an extraordinary range of native pollinators. [2]
            </li>
            <li>
              Maintain sunny, open areas with diverse native wildflowers. Gray Hairstreaks
              need sunny open habitat with flowers at all heights — from low clover to tall
              goldenrod. A mixed native wildflower planting in full sun that blooms from
              April through October provides adult nectar and larval host plants throughout
              the season. [2]
            </li>
            <li>
              Reduce or eliminate herbicide use in garden edges. Gray Hairstreaks use
              native composites, native mints, and native legumes — plants frequently
              killed by herbicide applications. Letting native vegetation grow in sunny
              areas of the yard provides the diverse host plant base this generalist
              butterfly needs. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-tailed-blue')}>
            <span className="neighbor-name">Eastern Tailed-Blue</span>
            <span className="neighbor-note">The other common small gossamer-wing butterfly of open areas; Eastern Tailed-Blues are sky-blue above rather than gray, share native legume host plants, and are often found nectaring alongside Gray Hairstreaks in sunny fields.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('coral-hairstreak')}>
            <span className="neighbor-name">Coral Hairstreak</span>
            <span className="neighbor-note">A related hairstreak that flies at the same time in June and July; the Coral Hairstreak lacks tails but has vivid coral-red spots on the hindwing underside and is found in similar open-field and forest-edge habitats.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('native-bees')}>
            <span className="neighbor-name">Native Bees</span>
            <span className="neighbor-note">Share native wildflower patches for nectar; Gray Hairstreaks and native bees are frequently found together on the same native milkweed and mountain mint blooms, visiting for nectar and pollen respectively.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">The American Bumble Bee and Gray Hairstreak are reliable co-visitors on native milkweed and native mountain mint; both indicate a healthy native wildflower community in a sunny garden.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Strymon_melinus/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Gray Hairstreak</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Strymon-melinus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Gray Hairstreak</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
