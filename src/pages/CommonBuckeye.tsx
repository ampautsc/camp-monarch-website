import type { Page } from '../App'

interface CommonBuckeyeProps {
  onNavigate: (page: Page) => void
}

export default function CommonBuckeye({ onNavigate }: CommonBuckeyeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/25328482/large.jpg"
          alt="Common Buckeye butterfly (Junonia coenia) — orange-brown butterfly with wings spread open, showing four prominent eyespots with blue, orange, and black rings"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/50074612/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Erika Mitchell&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/25328482" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Common Buckeye</h1>
        <p className="hero__lead">
          A butterfly lands on bare soil at the edge of a gravel path and flattens its wings in the
          sun. Four eyespots open toward you: one large blue-ringed circle on each forewing, two
          smaller ones on the hindwing. The male may have been holding that patch of ground for the
          past hour, lifting off to investigate anything that moved, then returning to the same spot
          within seconds. The caterpillar that became this adult had two orange spots near its head
          that made it look like a larger animal's face. Both stages of the same insect are running
          the same trick.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fieldmarks-heading">
          <h2 id="fieldmarks-heading">One large blue-ringed eyespot on each forewing, two on the hindwing — all four face outward when the wings open on bare ground</h2>
          <p>
            The Common Buckeye (<em>Junonia coenia</em>) carries four eyespots on the upper wing
            surface. The large forewing eyespot has a white bar above it and rings of orange, black,
            and blue. The two hindwing eyespots are smaller, with purple and black rings. Two pale
            orange or cream bars cross the forewing between the eyespot and the wing base. Wingspan
            runs from 2 to 2.75 inches. Both sexes look similar from above.
          </p>
          <p>
            A fall form flies in September and October with reddish-pink hindwings where the summer
            form shows brown. Both forms perch with wings flat in full sun. Males select bare soil,
            gravel paths, dry garden edges, or worn spots in the lawn and hold the position against
            other males. An intruder causes a short spiral flight before the male returns to the same
            perch. A homeowner who notices a butterfly reappearing on the same stone or path section
            over and over on a warm September afternoon is watching territory defense.
          </p>
          <p>
            The Common Buckeye lives year-round across the southern United States and moves north
            each spring, reaching southern Canada by midsummer. Adults in the Midwest and Northeast
            complete two to three generations between June and October. None overwinter in the north.
            Fall numbers peak in August and September as adults from the second and third broods move
            south ahead of the first frosts.
          </p>
        </section>

        <section aria-labelledby="host-heading">
          <h2 id="host-heading">The caterpillar is near-black with branching spines and two orange spots at its head — the false-eye pattern the adult carries on its wings, miniaturized</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/123418501/large.jpg"
              alt="Common Buckeye caterpillar (Junonia coenia) — dark, spiny caterpillar with orange and blue spots on the abdomen, feeding on a plantain leaf"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/111043173/large.jpg'
              }}
            />
            <figcaption>
              The Common Buckeye caterpillar is near-black with rows of branching spines and orange
              and blue spots along the abdomen. Two orange spots at the anterior end point forward
              like eyes. The adult's four wing eyespots carry the same visual signal at a different
              scale — both stages of the animal use the same deterrent.
              <span className="photo-credit"> CC0 via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            The Common Buckeye uses several host plants across its range. In eastern gardens and
            disturbed ground, the most commonly used hosts are plantains — common plantain
            (<em>Plantago major</em>) and English plantain (<em>P. lanceolata</em>), both of which
            are introduced species that grow in compacted soil, lawn edges, and pavement cracks
            throughout the range. Native plantain species (<em>Plantago rugelii</em> and others)
            also serve as hosts in open meadow conditions. The caterpillar also uses native false
            foxglove (<em>Agalinis</em> spp.) and related plants in the snapdragon family growing
            in dry open areas.
          </p>
          <p>
            The caterpillar feeds on the leaf surface without building a shelter. It is near-black
            with rows of branching black spines running down the back and sides and a row of orange
            and iridescent blue spots along the abdomen. At the front end, two raised orange spots
            point forward like eyes. A small predator approaching the caterpillar from the head
            encounters a face pattern rather than a feeding insect. The adult's four wing eyespots
            repeat the pattern: when the wings open suddenly in front of a bird, four eye-like
            circles appear where the bird expected a leaf surface.
          </p>
          <p>
            The chrysalis forms on stems or leaf surfaces near the host plant and ranges from pale
            green to tan or grey, blending with dried plant material. The Common Buckeye completes
            two to three generations per year in the northern part of its range.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Leave plantain in a sunny open area and allow one bare-ground perch site — those two together cover the caterpillar's host and the male's territory in the same small space</h2>
          <ol className="step-list">
            <li>
              <strong>Leave common plantain (<em>Plantago major</em>) or English plantain (<em>P. lanceolata</em>) growing in open, sunny disturbed areas.</strong>{' '}
              Both introduced plantain species serve as host plants for the Common Buckeye caterpillar.
              Both grow in compacted soil, lawn margins, gravel, and path edges — exactly the open
              sunny ground the caterpillar uses. Mowing these patches removes the host. A 10 to 20
              square foot section of plantain in a dry, sunny corner supports multiple caterpillars
              through June and September when the two annual broods hatch in the northern range.
            </li>
            <li>
              <strong>Plant native false foxglove (<em>Agalinis purpurea</em>) in a dry, open meadow or garden edge.</strong>{' '}
              False foxglove is an annual native that blooms in September and October with small
              pink tubular flowers. It grows in open, dry, nutrient-poor soil — a dry edge where
              grass thins and mulch is unnecessary. It self-seeds reliably once established and
              is almost never carried in garden centers, though native plant nurseries can source
              it. The September bloom overlaps with the peak fall Buckeye flight. Find native
              plants through{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>
              .
            </li>
            <li>
              <strong>Allow a 2 to 4 square foot bare-ground patch in a sunny spot.</strong>{' '}
              Male Common Buckeyes perch on bare soil, flat stones, dry gravel, or worn turf in
              full sun and hold the position for hours. A garden where every surface is mulched,
              planted, or covered in grass gives the male no anchor point. A cleared area at the
              base of a fence post, a flat dry stone in an open corner, or an unmulched edge
              along a sunny path all serve as perch sites. The male lifts off, circles, and
              returns within seconds throughout the afternoon.
            </li>
            <li>
              <strong>Plant purple coneflower and ironweed within 20 feet of the plantain patch.</strong>{' '}
              Common Buckeye adults nectar at open-faced composite flowers through August, September,
              and October. Purple coneflower (<em>Echinacea purpurea</em>) and ironweed (<em>Vernonia</em>{' '}
              spp.) carry both species through the fall flight peak. When nectar plants, host
              plants, and a bare perch site sit within 20 feet of each other, the full Buckeye
              cycle — adult feeding, egg-laying, caterpillar development — can run through the
              season in a small backyard area.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who else uses open sunny edges, bare ground, and late-summer composites in the same garden</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('pearl-crescent')}>
                Pearl Crescent
              </button>{' '}
              &mdash; a smaller orange butterfly that shares the open-ground, sunny-edge habitat
              the Buckeye uses; uses native asters as host plants; both species perch on bare
              ground and nectar at composites from August through October; frequently seen on the
              same coneflower and aster patches in late summer
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('painted-lady')}>
                Painted Lady
              </button>{' '}
              &mdash; a migratory butterfly with four small eyespots on the hindwing underside
              (vs. the Buckeye's four large upper-surface spots); present in extremely variable
              numbers year to year depending on migration pressure from the southwest; both
              species nectar at the same composites and can appear on the same flower heads in
              late August
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('purple-coneflower')}>
                Purple Coneflower
              </button>{' '}
              &mdash; one of the primary nectar plants for Common Buckeye adults through the
              fall migration; a single clump in a sunny open garden also draws Pearl Crescents
              and Painted Ladies through the same weeks; seed heads persist through winter and
              feed goldfinches after the butterflies have moved south
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('ironweed')}>
                Ironweed
              </button>{' '}
              &mdash; tall native perennial with intense purple flowers that bloom in late August
              and September, overlapping with the Common Buckeye fall flight peak; grows in open
              meadow conditions; planting ironweed and false foxglove together creates a late-season
              nectar corridor through the weeks when Buckeye numbers are highest before the migration
              south
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; a native annual legume that grows in the dry, open, sunny conditions
              alongside the plantain and bare-ground edges the Buckeye uses; its extrafloral
              nectaries draw ants and predatory wasps that patrol the stems, incidentally
              creating a predator-dense environment around host plants in the same open area;
              seeds through fall and holds dried structure through winter
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Open ground with plantain, coneflower, and one bare perch site brings the Buckeye's whole cycle into a single garden corner.</strong>{' '}
            Browse host and nectar plants in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , see the full open-meadow community in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            , and find which other species share the late-summer composite patch.
          </p>
        </div>
      </div>
    </>
  )
}
