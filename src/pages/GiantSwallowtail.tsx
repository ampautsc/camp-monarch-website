import type { Page } from '../App'

interface GiantSwallowtailProps {
  onNavigate: (page: Page) => void
}

export default function GiantSwallowtail({ onNavigate }: GiantSwallowtailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Giant_Swallowtail%2C_Shirleys_Bay.jpg"
          alt="Giant Swallowtail butterfly (Papilio cresphontes) perched with wings spread — black wings crossed by two diagonal rows of yellow spots, hindwings with a yellow-orange crescent near the tails and a faint blue iridescent wash, wingspan reaching five inches"
          className="species-hero-image"
          style={{ objectPosition: 'center 30%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: D. Gordon E. Robertson&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Giant_Swallowtail,_Shirleys_Bay.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Giant Swallowtail</h1>
        <p className="hero__lead">
          The caterpillar rests on a hoptree leaf in the middle of the afternoon, stretched out along
          the midrib, motionless. It is white and brown and slightly irregular — the shape and
          proportions of a fresh bird dropping. The match is close enough that most people walk past
          it without pausing. When the caterpillar is touched, a bright orange forked organ pushes
          out from behind its head and releases a smell that no bird would investigate twice.
          It then closes back into the skin as if it were never there.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">Papilio cresphontes: black wings with two diagonal yellow bands, up to six and a half inches across</h2>
          <p>
            The Giant Swallowtail is the largest butterfly in eastern North America. Its wingspan
            ranges from four to six and a half inches — the upper end larger than a human hand.
            The wings are black with two broken rows of yellow spots: one running diagonally from
            the forewing tip toward the body, one crossing the hindwing. On the underside, the yellow
            is more extensive, the black reduced to borders and veins. The hindwings carry short
            tails and a yellow-orange crescent near the inner margin on each side.
          </p>
          <p>
            Males patrol forest edges, hilltops, and open corridors — returning to the same perch
            or the same stretch of trail repeatedly over the course of an afternoon. When a female
            passes through, the male leaves to follow her; after mating or losing her, he returns
            to the same patrol route. Adults nectar on milkweed, butterfly weed, and phlox; they
            also visit mud puddles and damp sand to collect minerals.
          </p>
          <p>
            Two generations fly each year in the northern Midwest — adults on the wing from late
            April through June, and a second generation from late July through September. The
            Giant Swallowtail's range has been expanding northward over the past two decades; it
            is now a regular sighting in Michigan, Wisconsin, and southern Ontario where it was
            uncommon before 2000.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">The caterpillar is white and brown in the proportions of a songbird dropping — and carries a backup</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/Giant_Swallowtail_Larva.jpg"
              alt="Giant Swallowtail caterpillar (Papilio cresphontes) resting on a leaf — white and brown irregular markings that closely resemble a bird dropping, with a smooth white saddle and darker brown at the front and rear ends"
              loading="lazy"
            />
            <figcaption>
              A late-instar Giant Swallowtail caterpillar on a leaf. The white saddle area and irregular
              brown ends match a fresh bird dropping in size, shape, and surface texture. This caterpillar
              is roughly two inches long — the scale at which songbird droppings land on leaves. The
              disguise works because birds learn to skip over droppings, not because droppings are invisible.
              <span className="photo-credit"> Photo: leppyone&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Giant_Swallowtail_Larva.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Young Giant Swallowtail caterpillars are dark brown with a white saddle — resembling
            a bird dropping almost immediately after hatching. As the caterpillar grows through its
            five instars, the markings shift: the final two instars are predominantly white with
            brown-olive patches at the head and rear. The proportions match a songbird dropping at
            the two-inch scale.
          </p>
          <p>
            The caterpillar rests exposed on the upper surface of leaves during the day — not hidden
            under leaves, not tucked into crevices. It stays still. Birds scanning foliage
            for caterpillars learn to pass over bird droppings, which are inedible. The caterpillar
            exploits that learned behavior.
          </p>
          <p>
            When a predator makes contact, the caterpillar deploys a second defense: the osmeterium,
            a bright orange or reddish forked gland that pushes out from behind the head through a slit
            in the skin. The organ releases isobutyric acid and 2-methylbutyric acid — compounds that smell
            strongly of rancid butter or sour vomit at close range. Birds and small mammals move away.
            The osmeterium retracts in under a second and leaves no visible trace. All swallowtail
            caterpillars carry this organ; few predators encounter it more than once.
          </p>
        </section>

        <section aria-labelledby="host-heading">
          <h2 id="host-heading">Hoptree and prickly ash: the two native citrus-family shrubs the caterpillar feeds on</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/544703028/large.jpg"
              alt="Hoptree (Ptelea trifoliata) branch showing trifoliate leaves — three leaflets joined at a single stem — and small clusters of white-green flowers in late May"
              loading="lazy"
            />
            <figcaption>
              Hoptree (<em>Ptelea trifoliata</em>), one of two native Midwest host plants for the
              Giant Swallowtail caterpillar. It grows as a large shrub or small understory tree in
              forest edges and disturbed woodlands across the Midwest. The leaves are trifoliate
              and aromatic when crushed — the citrus-family chemistry that Giant Swallowtail females
              detect when searching for egg-laying sites. Its hop-scented disc-shaped fruit clusters
              persist through winter.
              <span className="photo-credit"> Photo: danielatha&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/302247794" target="_blank" rel="noopener noreferrer">iNaturalist obs. 302247794</a>&nbsp;· CC0</span>
            </figcaption>
          </figure>
          <p>
            Giant Swallowtail females in the northeastern United States and Midwest lay eggs almost
            exclusively on two native plants: hoptree (<em>Ptelea trifoliata</em>) and prickly ash
            (<em>Zanthoxylum americanum</em>). Both belong to the Rutaceae — the citrus family —
            and both contain the alkaloid chemistry that Giant Swallowtail caterpillars can
            metabolize and sequester. The female locates these plants by detecting their volatile
            compounds from the air; she then lands, presses her feet against the leaves to
            confirm the chemistry, and deposits a single egg on the upper surface of a leaf.
          </p>
          <p>
            Hoptree grows as a multi-stemmed shrub or small tree to 20 feet in moist to dry
            woodland edges and disturbed areas across the Midwest. Its leaves are trifoliate —
            three leaflets joined at a single stem — and release a strong citrus-like smell when
            crushed. In late May it produces small clusters of white-green flowers followed by
            hop-shaped papery fruits that persist into winter. It tolerates shade and competes in
            the understory of older plantings.
          </p>
          <p>
            Prickly ash is a thorny native shrub that spreads by root sprouts and forms thickets
            in rocky, dry, or disturbed soils. Its paired thorns and compound leaves with 11 to
            19 small leaflets make it distinctive. It is one of the first native shrubs to leaf
            out in spring — by late March in the Midwest — and its berries provide fall food for
            thrushes and waxwings. Both hoptree and prickly ash are underrepresented at most
            native plant nurseries; they are not showy plants, but they host the larval stage of
            one of the largest butterflies in North America.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant hoptree or prickly ash — a single shrub starts the cycle</h2>
          <ol className="step-list">
            <li>
              <strong>Get a hoptree (<em>Ptelea trifoliata</em>) from a native plant nursery.</strong>{' '}
              Hoptree is the easier plant to site — it tolerates part to full shade, grows in
              moist to dry soil, and reaches 10 to 20 feet without becoming invasive. It is not
              widely stocked; search native nurseries or ask to order it specifically. A single
              plant three to four feet tall is large enough to host caterpillars within two years.
              Find a nursery near you with{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Consider prickly ash (<em>Zanthoxylum americanum</em>) for a dry or rocky spot.</strong>{' '}
              Prickly ash tolerates poor soils and drought better than hoptree. It spreads slowly
              by root sprouts, which can be desirable in a hedge or wildlife border and is easily
              managed by cutting sprouts. Its thorns make it good cover for nesting songbirds.
            </li>
            <li>
              <strong>Leave any caterpillar that looks like a bird dropping on the leaves.</strong>{' '}
              Giant Swallowtail caterpillars rest exposed on leaf surfaces during the day. They
              are not hiding — they are relying on the disguise. Moving them or removing them
              eliminates the generation. The caterpillar that seems unremarkable on a hoptree leaf
              in July becomes a butterfly with a five-inch wingspan in August.
            </li>
            <li>
              <strong>Skip pesticide applications on hoptree and prickly ash from May through September.</strong>{' '}
              The female lays a single egg per leaf, and the young caterpillars are small and
              inconspicuous. A standard pyrethroid application to control aphids or other insects
              on these plants kills Giant Swallowtail caterpillars in the same spray. If aphid
              pressure is severe on other nearby plants, treat those plants only and exclude the
              host shrubs.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">What shares the hoptree edge and the milkweed bloom with the Giant Swallowtail</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('tiger-swallowtail')}>
                Eastern Tiger Swallowtail
              </button>{' '}
              &mdash; shares the hoptree forest edge as adult patrol territory; also feeds on
              butterfly weed and milkweed alongside the Giant Swallowtail in late summer;
              the Tiger Swallowtail caterpillar uses tulip poplar and cherry while the Giant's
              caterpillar uses hoptree and prickly ash — two different larval ecologies using
              the same edge habitat as adults
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('black-swallowtail')}>
                Black Swallowtail
              </button>{' '}
              &mdash; also a large black-and-yellow butterfly of open edges and meadows, appearing
              at the same season as the Giant; the Black Swallowtail's caterpillar feeds on carrots,
              dill, golden alexanders, and other carrot-family plants, not citrus-family plants —
              the two species occupy the same adult habitat through different larval chemistry
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spicebush-swallowtail')}>
                Spicebush Swallowtail
              </button>{' '}
              &mdash; another large swallowtail of forest edges and shaded corridors; its
              caterpillar uses spicebush and sassafras and builds a silk-sealed leaf tube during
              the day; like the Giant Swallowtail caterpillar, it relies on visual camouflage
              and a chemical deterrent rather than concealment
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('butterfly-weed')}>
                Butterfly Weed
              </button>{' '}
              &mdash; <em>Asclepias tuberosa</em>, one of the adult Giant Swallowtail's preferred
              nectar plants in June and July; a yard with hoptree in the edge and butterfly weed
              in the open area provides both larval host and adult nectar in the same space —
              the caterpillar grows on the shrub, the adult refuels on the flower
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('common-milkweed')}>
                Common Milkweed
              </button>{' '}
              &mdash; Giant Swallowtail adults nectar on milkweed heads through July and August;
              milkweed patches in open areas adjacent to hoptree shrubs draw adults from a
              distance and give them a reason to remain in the yard through the second brood
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Add hoptree or prickly ash and connect it to what's already in your yard.</strong>{' '}
            Find native shrubs with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , see what else shares the forest edge in the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            , and read how host plants fit into a layered yard with{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-layers')}>
              Habitat Layers
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
