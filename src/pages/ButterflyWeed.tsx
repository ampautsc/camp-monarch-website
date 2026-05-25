import type { Page } from '../App'

interface ButterflyWeedProps {
  onNavigate: (page: Page) => void
}

export default function ButterflyWeed({ onNavigate }: ButterflyWeedProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Butterfly-weed_%28Asclepias_tuberosa%29.jpg/960px-Butterfly-weed_%28Asclepias_tuberosa%29.jpg"
          alt="Butterfly weed (Asclepias tuberosa) in full bloom — clusters of vivid orange-red flowers on upright stems in a sunny meadow, with a clear blue sky behind"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Asclepias_tuberosa_pod_opening.jpg/960px-Asclepias_tuberosa_pod_opening.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Butterfly weed in bloom &middot; wackybadger &middot; CC BY-SA 2.0 via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Butterfly Weed runs clear sap where other milkweeds bleed white — and still loads every caterpillar feeding on its leaves with enough cardiac glycosides to make the adult monarch unpalatable to birds</h1>
        <p className="hero__lead">
          Butterfly weed (<em>Asclepias tuberosa</em>) is the only common eastern milkweed whose
          stem does not exude white latex when broken. Cut the stem — it runs clear. The plant
          still produces cardenolides, a class of cardiac glycosides concentrated in its leaves
          and stems. A monarch caterpillar eating those leaves absorbs the cardenolides into its
          own body, storing them in the cuticle, wings, and abdomen. That protection travels
          through metamorphosis and persists in the adult butterfly. A bird that catches and eats
          a monarch from a butterfly weed population typically vomits within minutes, and avoids
          orange-and-black wing patterns for the remainder of that season.
        </p>
        <p className="hero__lead">
          Butterfly weed blooms in June and July in clusters of bright orange flowers — the same
          weeks monarchs are laying eggs. It grows from a deep, carrot-like taproot that reaches
          18&nbsp;inches or more below the soil surface by the end of its second year. That root
          is what makes this plant drought-tolerant in the sandy, gravelly, and lean soils where
          common milkweed struggles. It is also what makes butterfly weed effectively permanent
          once established: the root cannot be divided or moved without killing it.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">A caterpillar eats the leaves, absorbs the toxins, and carries them through metamorphosis into its wings</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Butterfly_Weed_Asclepias_tuberosa_and_Monarch_Caterpillar_2056px.jpg/960px-Butterfly_Weed_Asclepias_tuberosa_and_Monarch_Caterpillar_2056px.jpg"
              alt="Monarch caterpillar (Danaus plexippus) feeding on butterfly weed (Asclepias tuberosa) leaves — the banded yellow, white, and black larva on orange-flowered stem"
              loading="lazy"
            />
            <figcaption>
              A monarch caterpillar on butterfly weed. As it feeds, it sequesters the plant&apos;s
              cardenolides into its own tissues. The chemical is still present in the adult butterfly
              that emerges weeks later, making it toxic to birds that eat it.
              <span className="photo-credit"> Derek Ramsey&nbsp;&middot;&nbsp;CC BY-SA 4.0 via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Monarch caterpillars (<em>Danaus plexippus</em>) feed exclusively on milkweed species.
            As the caterpillar consumes butterfly weed leaves, it does not digest the cardenolides —
            it stores them in specialized tissue. By the time the caterpillar enters its chrysalis,
            the cardenolide concentration in its body is measurably higher than in the surrounding
            plant material. The pupal casing holds the stored toxins through the transformation.
            The adult monarch that emerges carries the cardenolides in its wings and abdomen.
          </p>
          <p>
            The cardenolide load varies by milkweed species. Common milkweed (<em>Asclepias syriaca</em>)
            produces higher concentrations than butterfly weed. Monarchs from butterfly weed carry
            moderate cardenolide loads — still enough to cause significant nausea in most avian
            predators. Blue jays in controlled studies eat monarchs, vomit, and reliably avoid
            monarchs afterward. A jay that learned from a single monarch in July will pass near
            migrating monarchs in September without striking. The protective memory formed during
            the caterpillar&apos;s feeding in June transfers through the chrysalis and into the
            winter migration.
          </p>
          <p>
            Black-headed grosbeak and black-backed oriole are among the few bird species documented
            eating monarchs without ill effect — they apparently tolerate cardenolides or feed
            selectively on body parts with lower concentrations. Most other birds that sample
            monarchs do not repeat the experience.
          </p>
        </section>

        <section aria-labelledby="taproot-heading">
          <h2 id="taproot-heading">The taproot grows 18 inches down in its first two years — and the plant does not appear above ground until late May</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Asclepias_tuberosa_pod_opening.jpg/960px-Asclepias_tuberosa_pod_opening.jpg"
              alt="Butterfly weed (Asclepias tuberosa) seed pod splitting open — long spindle-shaped green-to-brown pod with white silky seed fibers beginning to emerge"
              loading="lazy"
            />
            <figcaption>
              Butterfly weed seed pod opening in October. Each pod holds 50&ndash;60 seeds attached
              to fine white silk. When the pod splits, seeds disperse on wind currents and can travel
              100 yards or more from the parent plant. Seedlings that land nearby emerge the
              following May — late, with no visible growth through winter.
              <span className="photo-credit"> Public domain (CC0) via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Butterfly weed&apos;s taproot is visible as a thickening at the soil surface on young
            plants. By the end of the first growing season it commonly reaches 12 to 18&nbsp;inches.
            The root draws moisture from below the zone where surface soils dry out in July and
            August, which is why butterfly weed survives summer drought conditions that stress
            common milkweed. Sandy and gravelly soils — poor conditions for most garden plants —
            suit it well. It does not tolerate wet or constantly moist soil.
          </p>
          <p>
            The same root makes transplanting after the first season difficult. If the taproot
            breaks off when disturbed, the plant does not reliably regrow. Butterfly weed should
            be purchased as a container plant and planted in its permanent location in late May
            or June. Once established, it should not be moved.
          </p>
          <p>
            The plant disappears entirely above ground in October after the stems die back. It has
            no visible above-ground presence through winter. In spring it re-emerges late — often
            not appearing above the soil surface until late May, three to four weeks after common
            milkweed and six to eight weeks after other perennials have begun growing. A homeowner
            who forgets its location can dig into the taproot while planting annuals in April or
            May, without any visual indication the root is there.
          </p>
          <p>
            The seed pods form in August and September and split open in October, releasing 50 to
            60 seeds per pod on silk-like fibers. Seeds disperse on wind and can travel over
            100&nbsp;yards. A plant that produces a good seed crop in September will have seedlings
            appearing within 6&nbsp;feet the following May. Those seedlings emerge late alongside
            the parent plant and are easily mistaken for weeds in their first year — small stems
            with pointed leaves, no flowers until year two or three.
          </p>
        </section>

        <section aria-labelledby="milkweed-bugs-heading">
          <h2 id="milkweed-bugs-heading">Large milkweed bugs, red milkweed beetles, and the whole community that assembles on a single plant in July</h2>
          <p>
            Butterfly weed does not support only monarchs. Large milkweed bugs (<em>Oncopeltus
            fasciatus</em>) — orange-and-black insects about half an inch long — cluster on the
            seed pods in August to pierce the seeds and drink their contents. They are toxic to
            birds for the same reason monarchs are: they sequester cardenolides from the plant.
            Their orange-and-black coloration is the same warning signal as the monarch&apos;s
            wings. A predator that learns to avoid monarchs also learns to avoid milkweed bugs —
            the two species share the plant and share its chemical defense.
          </p>
          <p>
            Red milkweed beetles (<em>Tetraopes tetrophthalmus</em>) chew through the base of
            the stem before feeding to cut off the latex flow — even though butterfly weed&apos;s
            latex is already minimal. The behavior appears to be retained from common milkweed
            ancestors and continues in this species out of what may be inherited habit. The
            beetles lay their eggs at the base of the plant; the larvae overwinter in the taproot
            before emerging the following summer.
          </p>
          <p>
            Bumblebees, sweat bees, and swallowtail butterflies forage the orange flowers in June
            and July. Hummingbird clearwing moths hover at the same clusters — sometimes in the
            same hour as adult monarchs, giving a single butterfly weed plant three separately
            arrived orange-winged visitors within a few feet of each other.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Buy it now in a container, plant it in full sun, and mark the spot before the stems disappear in October</h2>
          <ol className="step-list">
            <li>
              <strong>Buy a container plant in late May or June and plant in the sunniest location you have.</strong>{' '}
              Butterfly weed (<em>Asclepias tuberosa</em>) is available at native plant nurseries in
              4-inch and quart containers from late April through June. It requires at least 6&nbsp;hours
              of direct sun per day — more is better. Plant in the permanent location: sandy, rocky,
              or lean soil in full sun. Do not amend with compost or fertilizer; rich soil encourages
              top growth at the expense of taproot development. Do not plant in clay or wet soil.
            </li>
            <li>
              <strong>Water once a week for the first month, then stop.</strong>{' '}
              Butterfly weed establishes its taproot through its first summer. Water once per week
              in the absence of rain for the first four weeks after planting. After the first month,
              the taproot reaches deep enough to find moisture independently. The plant will wilt in
              extreme July heat during its first summer — this is normal and does not mean it needs
              water. Over-watering in lean soil can cause root rot.
            </li>
            <li>
              <strong>Leave the seed pods standing through October, then cut to 6&nbsp;inches.</strong>{' '}
              Butterfly weed produces long spindle-shaped seed pods in August that split and disperse
              seeds in October. The dry stems and empty pods provide winter structure that overwintering
              insects use for shelter and egg-laying. Leave the plant standing after the stems die back
              in fall. Cut back to 6&nbsp;inches in early April before the new growth emerges — not in
              autumn, and not before the seeds have dispersed.
            </li>
            <li>
              <strong>Mark its location in October with a stake or stone.</strong>{' '}
              Butterfly weed shows no above-ground growth from October through late May. The taproot is
              alive through winter, but there is nothing visible to indicate where it is. Place a
              small stake at the crown after cutting the stems back in April, and leave it in place
              through May. The plant is easily disturbed by anyone planting annuals or digging in the
              bed in April or early May without knowing the root is there.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">What arrives at butterfly weed across the season — caterpillars in July, bugs on the pods in August, migrants in September</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('why-monarchs')}>
                Monarch Butterfly
              </button>{' '}
              &mdash; lays eggs on butterfly weed leaves in June and July; the caterpillar feeds
              for two weeks before forming a chrysalis; the cardenolides absorbed from the leaves
              transfer through metamorphosis and remain in the adult butterfly&apos;s wings through
              the fall migration to Mexico
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hummingbird-clearwing-moth')}>
                Hummingbird Clearwing Moth
              </button>{' '}
              &mdash; hovers at butterfly weed flowers in June and July; its proboscis length is
              matched to the flower tube depth; it visits the same clusters as adult monarchs and
              bumblebees and is often mistaken for a small hummingbird at first glance
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-bumble-bee')}>
                American Bumble Bee
              </button>{' '}
              &mdash; forages butterfly weed flowers in June and July; bumblebees are among the
              primary pollinators of <em>Asclepias</em> species; their foraging transfers the
              sticky pollen masses that are the plant&apos;s cross-pollination mechanism
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('tiger-swallowtail')}>
                Eastern Tiger Swallowtail
              </button>{' '}
              &mdash; nectars at butterfly weed flowers; the large wingspan visible from 30 feet
              against the orange clusters is a reliable July scene in any yard that has established
              this plant in full sun
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('coral-hairstreak')}>
                Coral Hairstreak
              </button>{' '}
              &mdash; nectars on butterfly weed and dogbane during its six-week July flight window;
              a patch of butterfly weed planted within 50 feet of a wild plum or black cherry
              keeps adults foraging in the range where females lay eggs on bark in late July;
              the Coral Hairstreak has no tails &mdash; in their place, a row of coral-orange
              spots runs the full lower hindwing edge
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('common-milkweed')}>
                Common Milkweed
              </button>{' '}
              &mdash; taller and spreads aggressively by rhizome; produces higher cardenolide loads
              than butterfly weed; suited to moist fertile soils where butterfly weed will not grow;
              the two planted together cover both dry and moist conditions in the same yard
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('swamp-milkweed')}>
                Swamp Milkweed
              </button>{' '}
              &mdash; grows in wet or seasonally flooded areas where butterfly weed cannot survive;
              pink flowers on taller stems; attracts a slightly different pollinator community;
              the three milkweed species together extend monarch habitat across a full range of
              soil conditions in the same neighborhood
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
