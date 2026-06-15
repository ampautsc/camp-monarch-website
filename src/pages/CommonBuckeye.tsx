import type { Page } from '../App'

interface CommonBuckeyeProps {
  onNavigate: (page: Page) => void
}

export default function CommonBuckeye({ onNavigate }: CommonBuckeyeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Common_buckeye_in_Jamaica_Bay_Wildlife_Refuge_%2841100%29.jpg/1280px-Common_buckeye_in_Jamaica_Bay_Wildlife_Refuge_%2841100%29.jpg"
          alt="A Common Buckeye butterfly with wings fully open, showing the large, vivid eyespots on both the forewing and hindwing against the brown and orange wing pattern"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={1046}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Common_buckeye_in_Jamaica_Bay_Wildlife_Refuge_(41100).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Common Buckeye</h1>
        <p className="hero__lead">
          The Common Buckeye is immediately recognizable by its large, vivid eyespots —
          two prominent ones on the forewing, two more on the hindwing, each ringed with
          lilac and orange. Wingspan is 1.6 to 2.75 inches. The eyespots are thought to
          startle or confuse predators by resembling the eyes of a much larger animal.
          It is a butterfly of open, sunny, disturbed areas — roadsides, fields, beaches,
          and gardens. It cannot survive cold winters in most of North America and
          migrates south each fall. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Common Buckeyes are intensely sun-loving and territorial. Males perch on
            bare ground, low vegetation, or pavement in the sunniest spots available,
            watching for females and aggressively pursuing any passing butterfly. They
            move frequently between perch sites, always selecting the highest, most
            exposed sunny spot in the area. Adults nectar on a wide variety of
            low-growing wildflowers — native asters, native thistles, native chicory,
            and clovers are favorites. They often feed on damp soil for mineral
            salts alongside other &quot;puddling&quot; butterflies. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Junonia_coenia_Common_Buckeye_1_NBG_LR.jpg/1280px-Junonia_coenia_Common_Buckeye_1_NBG_LR.jpg"
            alt="A Common Buckeye butterfly nectaring on a flower, showing the eyespot pattern from a different angle with the hindwing eyespots clearly visible"
            width={1280}
            height={1189}
            loading="lazy"
          />
          <figcaption>
            The function of the large eyespots remains studied but debated — laboratory
            experiments show that birds presented with a Buckeye frequently startle and
            redirect their attack to the wing margin rather than the body, which allows
            the butterfly to escape even if a piece of wing is taken.
            <span className="photo-credit"> Photo: PumpkinSky&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Junonia_coenia_Common_Buckeye_1_NBG_LR.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Common Buckeyes breed year-round in the Deep South. Each spring, adults
            migrate north and breed across the eastern and central US through summer —
            a pattern similar to the Painted Lady. Three or more generations per year
            produce adults into October in the north. Fall adults move south, but unlike
            Monarchs they do not form aggregations or follow predictable routes — they
            simply drift southward as temperatures drop. Caterpillars eat plantain
            (Plantago), gerardia, toadflax, and snapdragon relatives — low-growing
            plants of disturbed, open ground. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Common Buckeye is abundant in the south and common in the north during
            summer. [1] It is not of conservation concern. Its caterpillar host plants —
            native plantain (Plantago species), gerardia, and toadflax — are common in
            disturbed areas, roadsides, and fields. The species benefits from open,
            sunny, somewhat disturbed habitat; areas that have been mowed or lightly
            grazed are often better Buckeye habitat than unmowed meadows with tall
            vegetation. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Allow native plantain (Plantago rugelii or P. major) in low-traffic lawn
              areas. Plantain is often treated as a lawn weed, but it is the primary
              caterpillar host plant for the Common Buckeye. A few plantain plants
              in a sunny part of the garden can support multiple caterpillars. [2]
            </li>
            <li>
              Plant native gerardia (Agalinis species). Wild gerardia is a low-growing
              native wildflower of meadows and open areas that is one of the top Buckeye
              host plants. It requires sun and somewhat dry, open soil and self-seeds
              readily in appropriate conditions. [2]
            </li>
            <li>
              Leave sunny open patches of bare or sparsely-vegetated ground. Common
              Buckeyes perch exclusively on the ground or very low vegetation in sunny,
              open spots. A small patch of gravel or exposed soil in a sunny corner
              of the garden provides critical perching and basking habitat. [2]
            </li>
            <li>
              Plant native asters for late-season nectar. As fall migrants move south,
              they refuel on native asters blooming in September and October. A mass
              planting of native asters at the garden edge provides reliable fuel for
              southbound Buckeyes and many other fall migrants. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('painted-lady')}>
            <span className="neighbor-name">Painted Lady</span>
            <span className="neighbor-note">Shares the same open, sunny, disturbed habitats; both are migratory butterflies that breed in the south and send immigrants north each spring, unable to survive northern winters.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('pearl-crescent')}>
            <span className="neighbor-name">Pearl Crescent</span>
            <span className="neighbor-note">Both are small to medium open-habitat butterflies that perch on bare ground and low vegetation in sunny spots, often in the same garden area at the same time.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-meadowlark')}>
            <span className="neighbor-name">Eastern Meadowlark</span>
            <span className="neighbor-note">Nests in the open field and meadow habitat that Common Buckeyes prefer; both species favor open, sunny, somewhat disturbed areas over dense woodland.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-tailed-hawk')}>
            <span className="neighbor-name">Red-tailed Hawk</span>
            <span className="neighbor-note">Hunts from the open perches above the same open fields where Common Buckeyes patrol; both use elevated vantage points to watch for prey or rivals in open habitat.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Junonia_coenia/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Common Buckeye</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Junonia-coenia" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Common Buckeye</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
