import type { Page } from '../App'

interface HackberryProps {
  onNavigate: (page: Page) => void
}

export default function Hackberry({ onNavigate }: HackberryProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/10/Hackberry_bark_%28Celtis_occidentalis%29.jpg"
          alt="Hackberry (Celtis occidentalis) trunk showing the distinctive corky, warty bark ridges — irregular projections arranged in no particular pattern — that make hackberry identifiable at a distance in any season"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/58704048/large.jpeg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Adam Shaw&nbsp;&middot;&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Hackberry_bark_(Celtis_occidentalis).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Trees</div>
        <h1>Hackberry</h1>
        <p className="hero__lead">
          A butterfly lands on your arm while you're weeding in July — orange and tan with dark
          spots, medium-sized, completely unafraid. It sits there drinking sodium from your skin
          and won't leave until you shake your arm. That butterfly is a Hackberry Emperor
          (<em>Asterocampa celtis</em>), and the tree it hatched from is probably 30 feet away.
          The caterpillar fed on hackberry leaves from June through September, then curled into
          the leaf litter at the base of the tree in October and spent the winter there. If you
          raked those leaves in November, the caterpillar went with them.
        </p>
        <p className="hero__lead">
          Hackberry (<em>Celtis occidentalis</em>) reaches 40 to 60 feet in the eastern United
          States and grows on roadsides, fence rows, and disturbed woodland edges. Its bark
          develops irregular corky ridges — thick, warty projections that give the trunk a
          texture unlike any other common eastern tree. More than 80 species of caterpillars feed
          on its leaves. Most homeowners have one in their yard or neighborhood and don't know
          what it is.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fieldmarks-heading">
          <h2 id="fieldmarks-heading">Corky bark ridges, asymmetric leaf base, and nipple galls — the three marks that don't appear together on any other eastern tree</h2>
          <p>
            The bark on a mature hackberry is the easiest field mark in any season. It develops
            irregular corky ridges that project outward from the trunk in no consistent pattern —
            thick, warty, and rough, looking almost like something pressed into the bark from
            outside. Young trees develop small bumps; older trees produce pronounced ridges 1 to 2
            centimeters tall. No other common eastern tree produces this bark texture.
          </p>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Pachypsylla_celtidisumbilicus_galls.jpg"
              alt="Hackberry leaves showing hackberry nipple galls — small pointed projections on the upper leaf surface produced when a psyllid nymph induces the leaf tissue to form a gall chamber around it"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/1/10/Hackberry_bark_%28Celtis_occidentalis%29.jpg'
              }}
            />
            <figcaption>
              Hackberry nipple galls on the upper surface of hackberry leaves. Each pointed
              projection is a gall chamber produced when a psyllid nymph induces the leaf tissue
              to enclose it. The galls appear on nearly every hackberry leaf every summer and
              do not harm the tree.
              <span className="photo-credit"> Photo: Polinizador&nbsp;&middot;&nbsp;
                <a href="https://commons.wikimedia.org/wiki/File:Pachypsylla_celtidisumbilicus_galls.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
                &nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            The leaves are 2 to 4 inches long, oval to lanceolate, with a slightly rough upper
            surface. The base attaches to the stem at an angle — one side of the leaf margin
            starts higher on the stem than the other, producing an asymmetric base. This oblique
            base appears on elm leaves as well, but hackberry leaves have a coarser texture and
            three main veins emerging from the base rather than one midrib.
          </p>
          <p>
            By June, the upper surface of hackberry leaves develops hackberry nipple galls —
            small conical projections, 2 to 4 millimeters tall, produced when a native psyllid
            (genus <em>Pachypsylla</em>) induces the leaf tissue to form a gall chamber around
            its developing nymph. A single hackberry leaf in July may carry twenty or thirty of
            these projections. They do not harm the leaf's function or the tree's growth. A leaf
            covered in nipple galls is a confirmed hackberry identification — no other common
            eastern tree produces this specific gall formation.
          </p>
          <p>
            In September and October, hackberry produces clusters of small drupes, 6 to 9
            millimeters in diameter, turning from green to orange-red to dark purple as they
            ripen. The drupes hang from the branch on a short stem and persist into winter on
            some trees. The pit inside each drupe is hard and smooth, similar to a cherry pit
            at one-sixth the size.
          </p>
        </section>

        <section aria-labelledby="caterpillars-heading">
          <h2 id="caterpillars-heading">Eighty-five caterpillar species, two that eat nothing else</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/43334140/large.jpeg"
              alt="Hackberry Emperor butterfly (Asterocampa celtis) with wings open — orange-tan upper wings with dark spots and white spots near the wingtip, scalloped outer wing margins — perched on bark"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/58704048/large.jpeg'
              }}
            />
            <figcaption>
              The Hackberry Emperor (<em>Asterocampa celtis</em>) feeds exclusively on hackberry
              leaves as a caterpillar. The adult drinks sodium from sap, rotting fruit, mud, and
              human skin — it lands on people working near hackberry trees and remains there for
              minutes at a time. The common name of this butterfly is the exact name of the only
              plant its caterpillar eats.
              <span className="photo-credit"> Photo: Carolyn Gritzmaker&nbsp;&middot;&nbsp;
                <a href="https://www.inaturalist.org/photos/43334140" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
              </span>
            </figcaption>
          </figure>
          <p>
            More than 85 species of Lepidoptera caterpillars feed on hackberry leaves across its
            eastern range. Two are obligate specialists — the Hackberry Emperor (<em>Asterocampa
            celtis</em>) and the American Snout (<em>Libytheana carinenta</em>) — both of which
            lay eggs on hackberry and on no other plant. Remove hackberry from a property and
            both species disappear from it entirely.
          </p>
          <p>
            The Hackberry Emperor female lays eggs in clusters on the upper surface of hackberry
            leaves, usually in late May and again in July. The caterpillar is green with a
            branched horn at each end. It feeds on hackberry leaves through summer, building a
            body large enough to survive winter as a caterpillar. Late-season caterpillars from
            the July–August brood enter diapause in October, shelter in curled leaves or bark
            crevices at the base of the host tree, and remain dormant through winter. In May,
            they resume feeding, pupate, and emerge as adults in June.
          </p>
          <p>
            The adult Hackberry Emperor seeks sodium rather than nectar as its primary energy
            source. It lands on rotting fruit, tree sap, dung, wet soil, and human skin — any
            surface with dissolved minerals and moisture. On a warm day in July near a hackberry,
            one or two adults will fly out to investigate a person working nearby and land on
            arms or clothing to drink. They remain in place for several minutes unless disturbed.
            This is how most people encounter the species without knowing its name.
          </p>
          <p>
            The American Snout underwent mass migration events in Texas when drought stress
            changes hackberry leaf chemistry in late summer — hundreds of millions of adults
            have been counted in single pulses triggered by these chemistry changes. Across the
            Midwest and East, snout populations are lower but the same host specificity holds:
            no hackberry, no snout. The adult has elongated labial palps that project forward
            from the face, giving the butterfly a distinctive long-nosed profile visible in
            the field.
          </p>
          <p>
            Question Marks and Eastern Commas use hackberry as a secondary caterpillar host
            alongside stinging nettle and hops. In yards where stinging nettle is absent,
            hackberry becomes the primary available host for both species through the spring
            and summer broods.
          </p>
        </section>

        <section aria-labelledby="fruit-heading">
          <h2 id="fruit-heading">Dark purple drupes in October — eaten by more than 50 bird species during and after migration</h2>
          <p>
            Hackberry fruit ripens from September into October and persists on some trees
            through winter. The drupes are small — roughly the size of a peppercorn when ripe —
            with a thin skin over sweet pulp surrounding a hard pit. The lipid content runs higher
            than most native shrub fruits, which makes them a dense energy source for migrating
            birds building fat reserves for long-distance flights.
          </p>
          <p>
            In September and October, flocks of cedar waxwings, American robins, northern
            flickers, brown thrashers, and yellow-rumped warblers pass through yards with
            hackberry fruit, stopping for extended feeding periods before continuing south.
            Northern mockingbirds and eastern bluebirds eat the fruit into winter on trees
            where it persists. Gray catbirds take the fruit in late summer before moving south.
            The fruit window on a mature hackberry overlaps with the monarch migration by several
            weeks in September, when both the butterfly and the bird movement pass through the
            same yard at the same time.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that make a hackberry work through its full cycle</h2>
          <ol className="step-list">
            <li>
              <strong>Leave the leaf litter at the base of hackberry trees from October through May.</strong>{' '}
              Hackberry Emperor caterpillars from the late summer brood overwinter in curled
              leaves and bark crevices at the base of the host tree. A caterpillar may travel
              no more than 10 feet from the spot where the egg was laid before entering winter
              diapause. Raking the leaf layer beneath a hackberry in autumn removes those
              caterpillars from the property. Leave the leaf litter in place through April.
            </li>
            <li>
              <strong>Don't cut the hackberry tree you didn't plant.</strong>{' '}
              Hackberry germinates readily from seed and is frequently found growing in fence
              rows and along property edges where birds deposited fruit. A hackberry 4 inches
              in diameter already supports multiple generations of Hackberry Emperors and
              American Snouts. The bark — irregular corky ridges projecting outward from the
              trunk — is the identification mark. Most property owners who cut these trees do
              not know what they have.
            </li>
            <li>
              <strong>Let the October fruit hang until birds have taken it.</strong>{' '}
              The dark purple drupes that ripen through September and October are consumed by
              cedar waxwings, robins, flickers, and warblers during fall migration. On trees
              where fruit persists, bluebirds and mockingbirds take it into December after
              most other native fruit is gone. Trimming branches with fruit in September or
              October removes the food source during its peak use window.
            </li>
            <li>
              <strong>Don't treat hackberry nipple galls as a plant disease.</strong>{' '}
              The small pointed projections on hackberry leaf surfaces in summer are galls
              produced by a native psyllid that completes its life cycle on hackberry and
              nowhere else. The galls do not harm the tree, reduce fruit production, or spread
              to other plants. Systemic insecticides applied to control the gall-forming psyllid
              kill the insects but do not remove existing galls, and disrupt other insects
              feeding on the same leaf surface.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">What uses the hackberry leaf, the bark crevice, and the fruit</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('question-mark')}>
                Question Mark
              </button>{' '}
              &mdash; uses hackberry as a secondary caterpillar host alongside stinging nettle;
              in yards where nettle is absent, hackberry is the primary available host for the
              spring and summer broods; both species share the same late-summer fruit-and-sap
              fueling period before entering overwintering roosts in bark
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-comma')}>
                Eastern Comma
              </button>{' '}
              &mdash; also uses hackberry as a secondary caterpillar host alongside stinging
              nettle; Eastern Commas and Question Marks lay eggs on the same hackberry leaves
              through the same brood windows; both overwinter as adults in bark crevices while
              Hackberry Emperor caterpillars overwinter in the leaf litter at the base of the
              same tree
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('mourning-cloak')}>
                Mourning Cloak
              </button>{' '}
              &mdash; documented on hackberry as a caterpillar host across its range, though
              more commonly found on willow and birch; in yards where only hackberry is present,
              Mourning Cloak females will use it; both species overwinter as adults in bark
              crevices on the same large-diameter trees
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cedar-waxwing')}>
                Cedar Waxwing
              </button>{' '}
              &mdash; consumes hackberry fruit in large numbers during fall migration in September
              and October; flocks arrive and move through yards with hackberry in the same window
              that monarchs pass through; the hackberry fruit window and the monarch migration
              window overlap by several weeks in September
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-robin')}>
                American Robin
              </button>{' '}
              &mdash; takes hackberry fruit through October and into winter on trees where it
              persists; in late fall, robins gather in foraging flocks and move between hackberry
              and other persistent-fruit trees including winterberry holly and crabapples; a yard
              with hackberry and winterberry holly together extends the window for fall robin
              flocks by several weeks
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('white-oak')}>
                White Oak
              </button>{' '}
              &mdash; hackberry and white oak together cover more than 500 caterpillar species
              between them; both are large-canopy trees that tolerate a range of soil conditions;
              both produce food that persists from late fall into winter — hackberry drupes,
              white oak acorns; planting both on a property builds the caterpillar-to-bird food
              chain at each stage from egg to adult
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Find other large-canopy natives that anchor the caterpillar food chain.</strong>{' '}
            Understand why leaf litter at the base of trees keeps overwintering caterpillars alive
            with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , find native host plants for your conditions with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , and see which butterflies share the hackberry bark and fruit with the{' '}
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
