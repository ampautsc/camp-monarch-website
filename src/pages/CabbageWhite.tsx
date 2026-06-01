import type { Page } from '../App'

interface CabbageWhiteProps {
  onNavigate: (page: Page) => void
}

export default function CabbageWhite({ onNavigate }: CabbageWhiteProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/1179645/large.jpg"
          alt="Cabbage White butterfly (Pieris rapae) — a small white butterfly with a black-tipped forewing and a single round black spot, wings open on a flower"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/303721649/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Jon Sullivan&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/1179645" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Cabbage White</h1>
        <p className="hero__lead">
          In May, small white butterflies appear in gardens across North America before almost anything else.
          They fly with an irregular, bouncing motion — low, quick turns, then a pause on a flower.
          The male has a single black dot near the center of the forewing; the female has two.
          This butterfly is not native. Before 1860, it did not exist on this continent.
          In forty years it spread from Quebec to California, and it has been the most abundant
          butterfly in North America by individual count every summer since.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fieldmarks-heading">
          <h2 id="fieldmarks-heading">The male has one black spot on the forewing; the female has two — the fastest field distinction between sexes</h2>
          <p>
            The Cabbage White has a wingspan of 1.25 to 1.75 inches. Both sexes are white above,
            with a charcoal-gray tip on the forewing and one or two round black spots on the forewing
            face. The male carries one spot near the center. The female carries two — one at center,
            one lower near the inner edge — and shows heavier gray dusting along the outer wing margins.
            The underside of the hindwing on both sexes is pale yellow-green, visible when the butterfly
            rests with wings folded together above the body.
          </p>
          <p>
            In flight, the Cabbage White is smaller than most swallowtails and moves with a distinctive
            jerky, erratic path — rapid wingbeats interrupted by quick direction changes, then a brief
            glide. Male Cabbage Whites patrol territories in gardens and open ground, chasing other males
            and intercepting females. In a sunny garden in early May, you can watch two males perform
            short aerial spirals before one retreats.
          </p>
          <p>
            The species is on the wing from early March through November across most of the United States,
            into December along the Gulf Coast. Multiple overlapping broods cycle through the season —
            three to five at mid-latitudes, up to six further south. It overwinters as a pupa,
            and the adults that emerge in March are among the first butterflies flying each spring,
            ahead of most native species in every region.
          </p>
        </section>

        <section aria-labelledby="introduction-heading">
          <h2 id="introduction-heading">A ship reached Quebec around 1860, and by 1900 the species had reached every state in the country</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/664987082/large.jpg"
              alt="Cabbage White caterpillar (Pieris rapae) — a velvety green caterpillar with a faint yellow dorsal stripe, feeding on a green leaf"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/663764240/large.jpg'
              }}
            />
            <figcaption>
              The Cabbage White caterpillar is green and velvety, with a faint yellow stripe running
              along the back. Full-grown at about three-quarters of an inch, it is nearly invisible
              against a kale leaf or cabbage head. It is usually found first by the irregular holes
              and dark frass pellets it leaves behind before the caterpillar itself is located.
              <span className="photo-credit"> CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            <em>Pieris rapae</em> originated in Eurasia and was established across Europe, North Africa,
            and Asia long before European settlement of the Americas. The first confirmed North American
            record was at Quebec City around 1860. Whether it arrived as eggs on imported produce or
            in a deliberate release was never documented. Within two decades the species had spread through
            the northeastern United States. By 1890 it had reached the Pacific Coast. By 1900 it was
            present in every state and Canadian province where Brassica crops were grown.
          </p>
          <p>
            The speed of the expansion was driven by two kinds of habitat that did not exist in North
            America before European settlement: large-scale cultivation of Brassica crops — cabbage,
            broccoli, kale, turnips, mustard greens — and the spread of introduced weed species in the
            mustard family, particularly wild mustard, field pennycress, and garlic mustard. All are
            host plants for Cabbage White caterpillars. None are native to North America. The butterfly
            and its food sources arrived on the same ships across the same century.
          </p>
          <p>
            The Cabbage White female uses chemical receptors in her feet to evaluate potential host plants.
            When she lands on a plant containing glucosinolates — the compounds that give mustard-family
            plants their sharp taste — she identifies it as a suitable site and deposits a single ribbed,
            pale yellow egg on the underside of a leaf. She moves on after each egg, distributing her
            clutch across multiple plants. The caterpillar hatches, feeds, and completes development in
            two to three weeks before pupating. The whole lifecycle from egg to adult takes three to four
            weeks in warm weather, allowing multiple generations to stack before frost.
          </p>
        </section>

        <section aria-labelledby="native-whites-heading">
          <h2 id="native-whites-heading">Three native white butterflies existed in eastern North America before 1860 — all three are now contracting</h2>
          <p>
            Before the Cabbage White arrived, three native pierid butterflies occupied visually similar
            niches across eastern and central North America.
          </p>
          <p>
            The <strong>West Virginia White</strong> (<em>Pieris virginiensis</em>) is a forest species
            found in eastern deciduous woodland from the southern Appalachians to southern Canada.
            Its only documented host plants are native toothworts — <em>Cardamine diphylla</em>,
            <em> C. concatenata</em>, and related species that grow in rich, moist woodland understory.
            The West Virginia White cannot use Brassica crops and cannot complete its lifecycle on garlic
            mustard, which releases allelochemicals that attract egg-laying females but then kill the
            hatching caterpillars. As garlic mustard has spread through the West Virginia White's woodland
            range since the 1980s, populations have contracted or disappeared across large parts of its
            former territory.
          </p>
          <p>
            The <strong>Checkered White</strong> (<em>Pontia protodice</em>) is a native of open,
            disturbed ground and dry prairies. The male carries a black-and-white checkered pattern on
            the upper forewing that makes it visually distinct from the Cabbage White. It uses native
            mustard-family plants — pepper-weed, spectacle-pod, purple mustard — and was once common
            from coast to coast in open, disturbed edge habitat. In the eastern United States its numbers
            have declined substantially as Cabbage White competition displaced it from the same open
            ground edges where it once bred.
          </p>
          <p>
            The <strong>Olympia Marble</strong> (<em>Euchloe olympia</em>) is a spring-only species
            of open rocky ground and cedar glades. Both sexes are white with a distinctive green
            marbling pattern on the hindwing underside — the identification mark when the butterfly
            rests with wings closed. It flies in a narrow window from April through May and has a
            single annual brood. It uses native rock cress and other mustard-family species in limestone
            openings. It is now listed as threatened or rare by several eastern states.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Remove garlic mustard, protect native toothwort, and hand-pick rather than spray</h2>
          <ol className="step-list">
            <li>
              <strong>Pull garlic mustard (<em>Alliaria petiolata</em>) from wooded edges and disturbed ground starting in April.</strong>{' '}
              Garlic mustard is a biennial — rosette in year one, flowering stalk in year two. It spreads
              through woodland understory and releases compounds into the soil that suppress native plant
              germination. Critically, it emits chemical cues that attract West Virginia White females to lay
              eggs, but then kills the caterpillars that hatch from those eggs. A wooded edge cleared of
              garlic mustard and left with native <em>Cardamine</em> species becomes functional West Virginia
              White breeding habitat again. Pull before seed set (late April through May) to prevent the
              next year's cohort. Bag and remove the plants — garlic mustard seeds stay viable in the soil
              for up to five years. See{' '}
              <button className="link-button" onClick={() => onNavigate('invasive-plants')}>
                Invasive Plants
              </button>{' '}
              for removal technique details.
            </li>
            <li>
              <strong>Leave native toothwort (<em>Cardamine diphylla</em> or <em>C. concatenata</em>) standing in any shaded area of the yard.</strong>{' '}
              Toothwort grows in rich, moist woodland soil, blooms white in early spring before tree
              leaf-out, then disappears completely underground by June. It is the sole larval host
              for the West Virginia White. A shaded foundation planting, a woodland garden strip, or
              the edge of a tree canopy can support toothwort if the soil stays moist. Leave it
              undisturbed through May when West Virginia White females are laying eggs and the caterpillars
              are feeding. After the leaves disappear in June, the plant takes up no above-ground space
              until the following spring.
            </li>
            <li>
              <strong>Hand-pick Cabbage White caterpillars from vegetable garden brassicas rather than spraying.</strong>{' '}
              Look on leaf undersides for the faint yellow-striped green caterpillar, or find it by
              the small irregular holes and dark frass pellets it leaves on leaf surfaces. A spray of
              any kind — Bt, pyrethrin, or a synthetic insecticide — eliminates every caterpillar in
              reach, including native moth larvae, native bee larvae foraging nearby, and any other
              species present. Hand-picking is selective. A few leaf holes from Cabbage White caterpillars
              does not threaten the harvest — the damage is cosmetic on most brassica crops.
            </li>
            <li>
              <strong>Add native plants that attract the broader butterfly community, not just Cabbage Whites.</strong>{' '}
              A patch of{' '}
              <button className="link-button" onClick={() => onNavigate('wild-bergamot')}>
                Wild Bergamot
              </button>
              ,{' '}
              <button className="link-button" onClick={() => onNavigate('purple-coneflower')}>
                Purple Coneflower
              </button>
              , or{' '}
              <button className="link-button" onClick={() => onNavigate('golden-alexanders')}>
                Golden Alexanders
              </button>{' '}
              in a sunny corner supports tiger swallowtails, fritillaries, and native skippers that
              do not thrive on brassica-heavy yards. The Cabbage White will still visit these flowers
              for nectar, but the ratio of native to introduced butterflies shifts as native floral
              resources increase. Use{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>{' '}
              to find what works in your soil and light conditions.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who shares the early-spring garden and the mustard-family habitat</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-bergamot')}>
                Wild Bergamot
              </button>{' '}
              &mdash; a native mint-family perennial that blooms lavender in midsummer, drawing in
              native butterflies, skippers, and bumblebees; a yard with Wild Bergamot in flower
              in July hosts a different set of visitors than a yard of brassica crops and lawn —
              the contrast in species diversity becomes visible within a single season of planting
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('golden-alexanders')}>
                Golden Alexanders
              </button>{' '}
              &mdash; one of the first native wildflowers to bloom each spring; flowers in April
              and May at the same time Cabbage Whites are already active; hosts Black Swallowtail
              caterpillars and provides early nectar for native bees — a single plant does multiple
              jobs in the early-season yard before most flowers open
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('black-swallowtail')}>
                Black Swallowtail
              </button>{' '}
              &mdash; another butterfly that uses carrot-family plants (Golden Alexanders, Queen
              Anne's Lace, dill, parsley) — it shares vegetable gardens with the Cabbage White but
              uses a completely different set of host plants; a garden with both parsley and kale
              provides breeding habitat for both species, and the two caterpillars are easily told
              apart: Black Swallowtail is striped green, yellow, and black while Cabbage White is
              plain green
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('pearl-crescent')}>
                Pearl Crescent
              </button>{' '}
              &mdash; a small orange-and-black native butterfly that flies in the same open garden
              habitats as Cabbage White from spring through fall; where native asters are growing,
              Pearl Crescent females are laying eggs — it breeds in yards with aster patches and
              is one of the first signs that a yard's native planting is producing results beyond
              nectar visitors
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('invasive-plants')}>
                Invasive Plants
              </button>{' '}
              &mdash; garlic mustard is the introduced mustard-family plant most directly tied to
              Cabbage White abundance and West Virginia White decline — the invasive plants guide
              covers identification, pull timing, and disposal for the most commonly established
              invasive species in eastern yards
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('olympia-marble')}>
                Olympia Marble
              </button>{' '}
              &mdash; the third native white butterfly described above: a spring-only species of
              limestone outcrops and cedar glade margins with marbled green hindwing undersides, a
              single annual brood, and a flight window that closes by early June; while the Cabbage
              White flies all season on weedy mustards, the Olympia Marble makes one brief April
              appearance on native rock cress and then its adult generation is gone until next year
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The white butterfly story comes down to habitat.</strong>{' '}
            More native plants means more native butterflies alongside the Cabbage White, not fewer.
            Start with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}to find native mustard-family and early-blooming alternatives, or browse the full
            butterfly lineup in the{' '}
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
