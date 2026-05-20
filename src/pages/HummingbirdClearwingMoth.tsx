import type { Page } from '../App'

interface HummingbirdClearwingMothProps {
  onNavigate: (page: Page) => void
}

export default function HummingbirdClearwingMoth({ onNavigate }: HummingbirdClearwingMothProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Hummingbird_Clearwing_-_Hemaris_thysbe%2C_Occoquan_Bay_National_Wildlife_Refuge%2C_Woodbridge%2C_Virginia%2C_September_3%2C_2019_%2853240099446%29.jpg/960px-Hummingbird_Clearwing_-_Hemaris_thysbe%2C_Occoquan_Bay_National_Wildlife_Refuge%2C_Woodbridge%2C_Virginia%2C_September_3%2C_2019_%2853240099446%29.jpg"
          alt="Hummingbird Clearwing Moth hovering in mid-air at a cluster of flowers, wings beating fast enough to blur completely, olive-green thorax and dark red-banded abdomen visible, proboscis extended toward a flower tube"
          className="species-hero-image"
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Hemaris_thysbe-hovering_nectaring.jpg/960px-Hemaris_thysbe-hovering_nectaring.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Judy Gallagher&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Hummingbird_Clearwing_-_Hemaris_thysbe,_Occoquan_Bay_National_Wildlife_Refuge,_Woodbridge,_Virginia,_September_3,_2019_(53240099446).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Hummingbird Clearwing Moth</h1>
        <p className="hero__lead">
          Something is hovering at the bee balm — wings beating too fast to see, body suspended
          in place, a long uncurled tube reaching into each flower head in turn before the animal
          darts sideways to the next one. The body is olive-green and dark red, roughly the size
          of a large bumblebee. It is not a hummingbird. It is a moth —{' '}
          <em>Hemaris thysbe</em>, the Hummingbird Clearwing — and it flies in full daylight
          from mid-morning through late afternoon.
        </p>
        <p className="hero__lead">
          The confusion with hummingbirds is not unreasonable. A Ruby-throated Hummingbird and
          a Hummingbird Clearwing Moth are not related — one is a bird, one is an insect — but
          both hover in front of tubular flowers, both extend a long feeding apparatus to reach
          nectar pooled at the base of each tube, and both appear at the same patch of bee balm
          in July. They arrived at this strategy from separate directions, with no shared
          ancestry close enough to matter. Planting the native flowers that attract one
          means the other arrives in the same season.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="wings-heading">
          <h2 id="wings-heading">Scales that fall on the first flight, patches that stay clear</h2>
          <p>
            Most moths are covered in tiny overlapping scales — the same structures that produce
            the wing patterns on a luna moth or a cecropia moth. When a Hummingbird Clearwing
            emerges from its pupa, its wings are fully scaled. On its first flight, scales shed
            from two specific patches on each forewing: one region near the base and one covering
            a large central area. Those patches do not regrow. For the rest of its adult life —
            typically 30 to 40 days — those areas of the wing stay transparent, which is where
            the clearwing name comes from and why the wings in flight appear to show exposed,
            bee-like membrane.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Hemaris_thysbe_-_MHNT_CUT_2010_0_509_-_Enfield_Maine_USA_-_female_dorsal.jpg/500px-Hemaris_thysbe_-_MHNT_CUT_2010_0_509_-_Enfield_Maine_USA_-_female_dorsal.jpg"
              alt="Pinned Hummingbird Clearwing Moth specimen, dorsal view — olive-green thorax, dark maroon banding across the abdomen, and two large transparent patches on each forewing where scales were shed on the first flight"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Hemaris_thysbe-hovering_nectaring.jpg/960px-Hemaris_thysbe-hovering_nectaring.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              The transparent patches on each forewing are permanent — scales shed on the first
              flight are gone for good. The olive-green thorax and dark maroon abdominal banding
              are visible in hovering flight, but the overall shape and the blurred-wing posture
              are what most observers notice first. In a side-by-side comparison with a
              Ruby-throated Hummingbird, the clearwing is roughly half the body length.
              <span className="photo-credit"> Photo: Didier Descouens&nbsp;·&nbsp;
                <a href="https://commons.wikimedia.org/wiki/File:Hemaris_thysbe_-_MHNT_CUT_2010_0_509_-_Enfield_Maine_USA_-_female_dorsal.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
                &nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            In flight, the Hummingbird Clearwing beats its wings at roughly 25 to 40 strokes per
            second — faster than the human eye can track, producing the same blurred-wing
            appearance a hummingbird shows. A Ruby-throated Hummingbird beats at around 50
            strokes per second; the clearwing is somewhat slower, but the visual difference
            is not obvious to a person watching from a few feet away. Both animals hold
            stationary position in front of a flower by continuous adjustment, and both shift
            between flowers with the same rapid sideways dart.
          </p>
          <p>
            The clearwing is one of only a few moths that fly during daylight hours. Most sphinx
            moths — the family <em>Sphingidae</em>, to which clearwings belong — fly at dusk or
            after dark. Clearwings fly from mid-morning through early afternoon and again in
            late afternoon. In a yard where Ruby-throated Hummingbirds visit regularly, a
            clearwing moth and a hummingbird may work the same bee balm patch in sequence,
            within minutes of each other, on the same July morning.
          </p>
        </section>

        <section aria-labelledby="convergence-heading">
          <h2 id="convergence-heading">Two lineages, 400 million years apart, at the same flower</h2>
          <p>
            Birds and insects diverged from any shared ancestor roughly 400 million years ago.
            Hummingbirds appear in the fossil record about 30 million years ago. Sphinx moths
            are estimated to have appeared around 90 million years ago. Neither group is
            descended from the other. Both developed hovering flight, daytime activity, and
            a long retractable tube for reaching nectar at the base of deep flowers — not
            because one learned from the other, but because the same niche existed and each
            lineage found it from a separate starting point.
          </p>
          <p>
            The flowers where both appear are tubular — phlox, bee balm, native honeysuckle,
            cardinal flower — with nectar pooled deep inside a long narrow tube and pollen
            positioned where it contacts the forehead of a hovering hummingbird and the
            body of a hovering moth. Both pollinators are too large or too differently shaped
            to crawl into the flower as a bee would; both are adapted for hovering contact
            without landing. The same floral architecture that rewards a hummingbird also
            rewards a clearwing moth.
          </p>
          <p>
            In a yard with bee balm blooming in July, both may appear in the same morning.
            A hummingbird typically works through a patch in a circuit it repeats across
            the day; a clearwing covers the same plants less systematically, hovering longer
            at individual flowers before moving on. Watching both in the same yard in
            the same season happens wherever the native plants are there to support them.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">Viburnum in May, a green caterpillar with a horn, a pupa in the litter</h2>
          <p>
            Female Hummingbird Clearwing Moths lay eggs singly on the undersides of host plant
            leaves. The primary hosts used in yards across the eastern United States include
            arrowwood viburnum (<em>Viburnum dentatum</em>), hawthorn (<em>Crataegus</em> spp.),
            wild cherry and plum (<em>Prunus</em> spp.), and snowberry (<em>Symphoricarpos</em>
            spp.). The egg is small and pale green and hatches within a week.
          </p>
          <p>
            The caterpillar is green — matching the color of the leaves it feeds on — and
            carries a curved horn at the tail end, a feature shared across the sphinx moth
            family. Early instars feed on the undersides of leaves; later instars, which
            can reach 50 mm in length, feed more openly. After 3 to 4 weeks of feeding the
            caterpillar drops to the ground and pupates in a loose cocoon at the soil surface
            or in the upper layer of leaf litter. There are two generations per year across
            most of the eastern range: adults fly in May and June from pupae that overwintered,
            and again in July and August from the summer generation.
          </p>
          <p>
            Arrowwood viburnum pruned heavily in mid-May — exactly when females from the
            overwintered generation are laying eggs on new leaf growth — removes the host
            foliage those first-generation caterpillars need. Viburnum tolerates the pruning
            without lasting harm, but the timing eliminates that cohort from the property
            for the year. Shifting major viburnum pruning to late July or August, after
            the first generation has descended to pupate, keeps both the plant and the
            clearwing population intact through the growing season.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Bee balm in full sun, native phlox along a path, and viburnum unpruned through June</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Monarda-fistulosa.jpg/500px-Monarda-fistulosa.jpg"
              alt="Wild bergamot (Monarda fistulosa) in bloom — a rounded head of pale lavender tubular flowers, each tube narrow and long, the architecture that requires a hovering animal to reach the nectar pooled at the base"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Monarda_fistulosa_flowers1.jpg/500px-Monarda_fistulosa_flowers1.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              Wild bergamot (<em>Monarda fistulosa</em>) blooms July through September and is
              one of the plants Hummingbird Clearwing Moths visit most consistently. The tubular
              flower architecture means bees land on the flower head and work from the outside,
              while clearwings and hummingbirds hover in front of each tube. A patch of three
              or more plants in full sun produces enough bloom to draw clearwings back to the
              same spot on consecutive days through midsummer.
              <span className="photo-credit"> Photo: Hardyplants&nbsp;·&nbsp;Public domain via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Plant wild bergamot or bee balm in full sun.</strong>{' '}
              Wild bergamot (<em>Monarda fistulosa</em>) and scarlet bee balm (<em>Monarda
              didyma</em>) are the two native bee balms of the eastern US. Both produce
              tubular flowers that Hummingbird Clearwing Moths visit from July through
              September. Wild bergamot tolerates dry soil and full sun and spreads slowly
              by rhizome; scarlet bee balm prefers moister sites. Both are available from
              native plant nurseries in one-gallon containers and establish in the first
              growing season. A patch of three or more plants produces enough bloom to
              draw clearwings consistently through midsummer.
            </li>
            <li>
              <strong>Plant tall phlox or meadow phlox where it will get afternoon sun.</strong>{' '}
              Tall phlox (<em>Phlox paniculata</em>) and meadow phlox (<em>Phlox maculata</em>)
              both produce large clusters of tubular flowers from July through August and
              draw clearwing moths on warm afternoons. Place phlox within sight of a window
              or along a path that gets used during the day — clearwings return to the same
              plants at predictable times and can be watched closely at close range while
              they are actively feeding.
            </li>
            <li>
              <strong>Leave arrowwood viburnum unpruned through late June.</strong>{' '}
              If arrowwood viburnum is in the yard, delay major pruning until after the
              first week of July. Females from the spring generation are laying eggs on
              new viburnum leaf growth through May and early June. Caterpillars from those
              eggs feed through late June before dropping to the soil to pupate. Pruning
              before early July removes the leaf growth those caterpillars are using.
              Viburnum tolerates late summer pruning and shapes well after the first
              generation has completed its development.
            </li>
            <li>
              <strong>No broad-spectrum insecticide on or near flowering plants in summer.</strong>{' '}
              Hummingbird Clearwing Moths are killed by pyrethrin, permethrin, and
              organophosphate applications on or near the plants they visit.
              Sprays aimed at mosquitoes, aphids, or Japanese beetles on adjacent plants
              affect clearwings that move through the treated area within hours of
              application. On viburnum, the caterpillar consumes some leaf area through
              June — the plant regrows fully without any control measures, and the
              caterpillar feeding on the leaves is the source of the adults that will
              arrive at the bee balm in August.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('ruby-throated-hummingbird')}>
              <span className="neighbor-name">Ruby-throated Hummingbird</span>
              <span className="neighbor-note">Visits the same tubular flowers using the same hovering strategy — bee balm, phlox, and native honeysuckle planted for clearwings will draw hummingbirds in the same season; both appear at the same plants in July, sometimes within minutes of each other on the same morning</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('arrowwood-viburnum')}>
              <span className="neighbor-name">Arrowwood Viburnum</span>
              <span className="neighbor-note">One of the primary larval host plants — females from the spring generation lay eggs on new arrowwood leaf growth in May and June; leaving viburnum unpruned through early July keeps the first-generation caterpillars on the plant through their full development</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('wild-bergamot')}>
              <span className="neighbor-name">Wild Bergamot</span>
              <span className="neighbor-note">One of the most consistently visited adult nectar plants — tubular flower architecture requires hovering to reach the nectar; a patch of wild bergamot in full sun blooming in July and August is the most predictable way to see clearwings in a yard</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('luna-moth')}>
              <span className="neighbor-name">Luna Moth</span>
              <span className="neighbor-note">Another large native moth in the same yards — Luna Moths fly at night where clearwings fly during the day; both are present in any yard with native host trees and undisturbed leaf litter for overwintering pupae, but the two species never share active hours</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
              <span className="neighbor-name">American Bumble Bee</span>
              <span className="neighbor-note">Visits the same bee balm and phlox as clearwing moths but uses a different feeding method — bumble bees land on the flower head and work from the outside; clearwings and hummingbirds hover in front of each tube; the same native planting draws all three to the same patch through midsummer</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('polyphemus-moth')}>
              <span className="neighbor-name">Polyphemus Moth</span>
              <span className="neighbor-note">Another native moth sharing host plants with the clearwing — Polyphemus caterpillars feed on wild cherry, oak, and maple; clearwing caterpillars feed on viburnum, hawthorn, and wild cherry; a yard with a wild cherry tree may host caterpillars of both species feeding on the same tree in the same summer</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
