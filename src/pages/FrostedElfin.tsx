import type { Page } from '../App'

interface FrostedElfinProps {
  onNavigate: (page: Page) => void
}

export default function FrostedElfin({ onNavigate }: FrostedElfinProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/505718538/large.jpg"
          alt="Frosted Elfin (Callophrys irus) adult resting with wings closed on dry leaf litter — brown hindwing underside with jagged dark line, white-frosted outer margin, and short stubby tail, Virginia"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/11499071/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: kirk_gardner&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/505718538" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies &amp; Hairstreaks</div>
        <h1>A Frosted Elfin female lands on a Baptisia stem, walks toward the tip where the flower buds cluster, and lays one egg inside an unopened bud — the hatching caterpillar will eat the bud from within before the flower can open</h1>
        <p className="hero__lead">
          The Frosted Elfin (<em>Callophrys irus</em>) is a small hairstreak butterfly with one
          of the shortest flight windows of any butterfly in North America — three to four weeks
          in late April and May. Adults are thumbnail-sized, brown with a faint orange wash on the
          upperside. At rest with wings closed, the hindwing underside shows a jagged dark band,
          a tiny stubby tail, and the wash of white-gray scales near the outer margin that gives
          the species its name. The frosting rubs away with age; an older adult looks nearly
          uniform brown. By June, every Frosted Elfin alive in a given landscape has already
          pupated and gone underground for another eleven months.
        </p>
        <p className="hero__lead">
          Unlike most hairstreaks, the Frosted Elfin caterpillar cannot feed on leaves. It feeds
          exclusively on flower buds, open flowers, and developing seed pods — floral tissue that
          exists for four to six weeks per year. In landscapes where the host plant does not bloom,
          Frosted Elfin caterpillars have nothing to eat and cannot complete development. NatureServe
          rates the species G2 — globally imperiled — and more than 25 states list it as endangered
          or threatened. The populations that remain are in managed preserves and in yards where
          someone deliberately planted Wild Blue Indigo or Wild Lupine and lets the flowers stand.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">The caterpillar hatches inside a flower bud and feeds on floral tissue — it cannot survive on leaves and has no alternative once the seed pods harden</h2>
          <p>
            The egg is laid in the crook of an unopened bud. After hatching, the larva bores
            into the bud and feeds on the reproductive tissue inside. As the season progresses
            and the flowers give way to developing seed pods, older caterpillars shift to the
            pods and eat the immature seeds. By midsummer, the pods mature and harden, becoming
            unsuitable. Caterpillars that have not finished development by then do not complete it.
          </p>
          <p>
            The Frosted Elfin caterpillar can shift its body color to match the plant material it
            is eating — green when feeding among leaves, yellow-green or cream when working
            through flowers. A larva on a flower stalk is nearly invisible without close
            inspection. Checking a blooming Baptisia in May requires parting the flower clusters
            and looking into the base of each one, where a small, smooth caterpillar may be
            resting against the petals.
          </p>
          <p>
            The number of caterpillars a single plant can support depends on how densely it blooms.
            An established Baptisia crown with 30 or 40 flower stalks can carry several larvae
            simultaneously. A young crown in its first two or three years, still building root
            reserves, may produce only a handful of stalks — enough for one or two caterpillars,
            if any. A Frosted Elfin yard needs a plant that has been in the ground long enough
            to bloom reliably every spring.
          </p>
          <p>
            After feeding finishes, the mature larva drops to the soil and pupates in the leaf
            litter and loose debris at the base of the host plant. The pupa overwinters there
            through the fall, winter, and early spring — eleven months in the ground for every
            three weeks as an adult on the wing.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">The Frosted Elfin's host plants grow in dry sandy barrens, open rock outcrops, and dry prairies — the exact habitats cleared first when eastern and midwestern land was farmed and developed</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/662261310/large.jpg"
              alt="Frosted Elfin (Callophrys irus) adult perched on a stem at Camp Edwards, Sandwich, Massachusetts — showing the brown-orange upperside with forewing spots visible"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/11499071/large.jpg'
              }}
            />
            <figcaption>
              Frosted Elfin adults perch on low stems and branches within a few meters of the
              host plant stand. Males use these perches to watch for females during the
              three-to-four-week flight window in late April and May.
              <span className="photo-credit"> CC BY via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            The Frosted Elfin uses two host plants across its range: Wild Lupine
            (<em>Lupinus perennis</em>) in the sandy pine barrens of the northeast, and Wild Blue
            Indigo (<em>Baptisia australis</em>) across the midwest and south. Both plants grow in
            dry, open, low-competition soils with full sun — the same conditions found in pine
            barrens, sand flats, and dry prairies. These habitats were the first to be plowed,
            developed, or suppressed by fire exclusion as European settlement moved through the
            region. As the host plants disappeared from the land, the butterfly disappeared with them.
          </p>
          <p>
            NatureServe G2 means estimated total occurrences of fewer than 1,000 and a high risk
            of extinction range-wide without intervention. In New Jersey, remaining populations
            exist almost entirely inside managed pine barren preserves where prescribed burning is
            used to keep the canopy open enough for Lupine to persist. In Ohio and Indiana, records
            show the species at sites with established Baptisia populations and absent from
            comparable sites a few miles away where the plant was not found.
          </p>
          <p>
            The decline is not reversing on its own. Most counties where the Frosted Elfin
            once flew no longer have populations. The butterfly does not recolonize on its own
            once a landscape has been cleared — flight distances are short, and there is no
            source population nearby to disperse from. Creating host plant habitat in a yard
            does not guarantee arrival, but it adds a point to a shrinking map.
          </p>
        </section>

        <section aria-labelledby="adult-heading">
          <h2 id="adult-heading">Adults are on the wing for three weeks in late April and May — they perch near the host plant with wings closed, and at rest blend into last year's brown leaf litter</h2>
          <p>
            The adult Frosted Elfin is one of the smallest butterflies in eastern North America —
            wingspan 2.5 to 3 centimeters. Males are brown with an orange-tawny wash on the
            forewing upperside; females are duller brown. Both sexes at rest hold the wings
            closed, showing only the underside, which carries the jagged dark band, the black
            dot near the hindwing tail, and the frosted white-gray margin. In good light, fresh
            adults are distinctive. Worn adults are easily overlooked against dried grass or bark.
          </p>
          <p>
            Males establish perch sites on stems or low branches within a meter or two of the
            host plant, watching for females. A perching male launches brief intercept flights
            at passing insects and returns to the same stem. Mating and oviposition happen within
            the same small area — a stand of blooming Wild Blue Indigo or Wild Lupine becomes
            the entire active range of the adult during the flight period. Survey records in
            New Jersey's pine barrens show adults captured within 50 meters of the nearest
            Lupine stand.
          </p>
          <p>
            Adults feed very little compared to most butterflies. Frosted Elfin adults are not
            regular visitors to flower beds — they are not looking for nectar sources across the
            yard. The host plant stand is the center of their world for the three weeks they are
            flying. A yard with established, blooming Wild Blue Indigo and undisturbed leaf litter
            at the base of the plant is not a waystation for the Frosted Elfin — it is a complete
            habitat where the full life cycle can run.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant Wild Blue Indigo in full sun and let it establish until it blooms — then leave the flower stalks standing through June and the leaf litter undisturbed through April</h2>
          <ol className="step-list">
            <li>
              <strong>Plant Wild Blue Indigo in full sun and give it three years to bloom.</strong>{' '}
              The Frosted Elfin caterpillar feeds on flowers and seed pods, not leaves. A young
              Baptisia crown that has not yet begun blooming does not yet support the caterpillar.
              Plant in well-drained soil with full sun, avoid fertilizer (Baptisia is a nitrogen
              fixer and does not need supplemental nitrogen), and expect the first reliable bloom
              in year three or four after planting.
            </li>
            <li>
              <strong>Do not cut or deadhead the flower stalks in May and June.</strong>{' '}
              Frosted Elfin caterpillars feed on the flowers and developing seed pods from late
              April through June. Removing the stalks during that window removes the food source.
              Leave the stalks standing through at least late June — by then, any caterpillars
              that survived have finished feeding and dropped to the ground.
            </li>
            <li>
              <strong>Leave the leaf litter and loose soil at the base of the plant undisturbed from September through late March.</strong>{' '}
              The pupa overwinters in the debris at the root crown. A fall cleanup that strips
              the ground beneath the plant removes it. Leave the dead material in place through
              winter. Cut the dead Baptisia stalks to the ground in late March, before new
              growth emerges, and let the cuttings lie for a week before removing them, to give
              any pupae in the thatch time to settle before the litter is disturbed.
            </li>
            <li>
              <strong>Avoid systemic insecticide in or near the Baptisia bed from April through July.</strong>{' '}
              Systemic products absorbed through the roots enter the floral tissue. A caterpillar
              feeding on chemically-treated flowers or seed pods ingests the insecticide. Contact
              sprays applied to foliage or blooms during the flight window can kill eggs and
              young larvae before they are visible to the eye.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">What shares a yard with Frosted Elfin — the host plants it depends on and the butterfly that uses the same plant at the same time of year</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-blue-indigo')}>
                Wild Blue Indigo
              </button>{' '}
              &mdash; the primary host plant in the midwest and south; the elfin needs the
              plant to bloom, not merely to survive; a non-blooming first-year crown does not
              yet support the caterpillar; established crowns with 30 or more flower stalks can
              carry several caterpillars simultaneously
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-lupine')}>
                Wild Lupine
              </button>{' '}
              &mdash; the primary host plant in northeast pine barrens; populations in New Jersey,
              Long Island, and coastal New England use <em>Lupinus perennis</em> flowers and pods
              in the same role that Wild Blue Indigo plays in the midwest; grows in sandy, acidic
              full-sun soils; also the only host plant for the Karner Blue, a federally endangered
              butterfly
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-indigo-duskywing')}>
                Wild Indigo Duskywing
              </button>{' '}
              &mdash; a second Baptisia specialist that lays on the leaves, not the flowers;
              its caterpillar rolls and feeds inside leaflets from late April through summer;
              where Wild Blue Indigo grows and blooms, both the elfin (inside the buds) and the
              duskywing (inside the rolled leaves) may be present on the same plant at the same
              time in May
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('gray-hairstreak')}>
                Gray Hairstreak
              </button>{' '}
              &mdash; a generalist hairstreak that includes Baptisia flower clusters and
              developing seed pods among its larval hosts; lays on the same structures the elfin
              uses, but the gray hairstreak also uses dozens of other plant families and is not
              dependent on Baptisia's presence
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-senna')}>
                Wild Senna
              </button>{' '}
              &mdash; a companion legume that blooms July through August after Wild Blue Indigo
              has finished; hosts Cloudless Sulphur, Sleepy Orange, and Little Yellow caterpillars
              through late summer; planting both legumes in the same bed keeps butterfly host
              material available from May through September
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('partridge-pea')}>
                Partridge Pea
              </button>{' '}
              &mdash; an annual legume that colonizes dry, open, well-drained ground — the same
              conditions Wild Blue Indigo needs; hosts Cloudless Sulphur and Sleepy Orange; fills
              the sunny edge of a Baptisia bed without shading the host plant
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>More than 25 states list the Frosted Elfin as endangered — and the remaining populations are in places where someone kept the host plant in the ground.</strong>{' '}
            Plant Wild Blue Indigo or Wild Lupine, let it bloom, and leave the litter beneath it alone. Find the
            host plants at{' '}
            <button className="link-button" onClick={() => onNavigate('wild-blue-indigo')}>
              Wild Blue Indigo
            </button>
            {' '}and{' '}
            <button className="link-button" onClick={() => onNavigate('wild-lupine')}>
              Wild Lupine
            </button>
            {' '}or browse the full species network in the{' '}
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
