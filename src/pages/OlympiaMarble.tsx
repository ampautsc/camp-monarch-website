import type { Page } from '../App'

interface OlympiaMarbleProps {
  onNavigate: (page: Page) => void
}

export default function OlympiaMarble({ onNavigate }: OlympiaMarbleProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/9829593/large.jpeg"
          alt="Olympia Marble butterfly (Euchloe olympia) — a small white butterfly with orange-tipped antennae, gray forewing tip, and brilliant green-mottled hindwing underside visible at rest"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/281586708/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Alexander Harman&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/9829593" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Olympia Marble</h1>
        <p className="hero__lead">
          In late April, on a warm limestone outcrop in Ohio or a cedar glade in Tennessee,
          a small white butterfly with green-marbled underwings appears for the first time
          that year. It is the Olympia Marble (<em>Euchloe olympia</em>). By early June
          it is gone — not migrated, not in a second generation elsewhere, just gone.
          The species produces one brood per year. By July there is not a single adult
          flying anywhere in its range. Through summer and autumn the Olympia Marble
          exists only as a pupa attached to a stem of rock cress on a rocky ledge,
          waiting for the following April.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fieldmarks-heading">
          <h2 id="fieldmarks-heading">The hindwing underside carries a mosaic of yellow-green mottling along every vein — no other small white butterfly in eastern North America shows this pattern</h2>
          <p>
            The Olympia Marble has a wingspan of 1.25 to 1.75 inches — smaller than a Cabbage
            White, smaller than a Checkered White. The upper forewing surface is white with a
            gray patch at the tip and a small dark cell spot near the center. At a glance, from
            above, it reads as a nondescript little white butterfly. The identification is made
            when the butterfly lands and closes its wings: the hindwing underside shows a dense
            yellow-green marbling along the wing veins, creating a mosaic pattern that covers
            much of the wing surface. No other common white butterfly in the eastern United
            States shares this pattern. A Cabbage White at rest shows pale yellow-green but
            without the heavy vein mottling. A West Virginia White shows faint scaling without
            the yellow-green color. The Olympia Marble's marbled underside is unmistakable at
            close range or in a photograph.
          </p>
          <p>
            The antennae tip orange — a detail visible in the field when the butterfly rests
            with wings folded. The male patrols low over rocky ground and dry open slopes,
            making short rapid flights between perches. Both sexes nectar on early-blooming
            wildflowers: wild columbine, spring cress, and toothwort are frequently used
            where they grow near the host plant habitat. The Olympia Marble is almost never
            far from a rocky or gravelly exposure — it does not establish in shaded woodland
            understory, in moist meadows, or in dense cultivated plantings.
          </p>
          <p>
            Females spend most of their adult lives moving across rocky outcrops, limestone
            pavements, dry gravelly banks, and cedar glade margins, evaluating every small
            mustard-family plant they encounter. Males search for females at rocky hilltops
            and prominent ledge exposures where both sexes converge. In April and May,
            on the right rocky site in Ohio, Indiana, Illinois, or the Tennessee cedar barrens,
            multiple individuals may be visible at once — the only time of year the species
            is visible at all.
          </p>
        </section>

        <section aria-labelledby="hostplants-heading">
          <h2 id="hostplants-heading">She searches limestone outcrops for native rock cress — tarsal receptors in her feet confirm the plant chemistry before she places a single pale egg</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/509965889/large.jpg"
              alt="Olympia Marble butterfly (Euchloe olympia) nectaring on a flower, showing the white upper wing surface with gray forewing tip markings"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/196449077/large.jpg'
              }}
            />
            <figcaption>
              The Olympia Marble nectaring on an early-blooming wildflower. Adults spend most
              of their six-week flight period searching for mates and host plants across rocky
              outcrops and dry open ground — the same habitat where native rock cress and
              spring cress grow in thin soil over limestone.
              <span className="photo-credit"> CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            The Olympia Marble evaluates host plants using the same glucosinolate-detection
            mechanism shared by all pierid butterflies: tarsal receptors in the front legs
            press against the leaf or stem surface, reading the sulfur-bearing compounds that
            identify mustard-family plants. When the chemistry matches, the female pauses,
            drums her feet, and deposits a single pale green egg on the leaf or stem. The egg
            turns orange before hatching.
          </p>
          <p>
            The primary host plants are native rock cresses: <em>Boechera grahamii</em>
            (Graham's rock cress) and related species in the genus <em>Boechera</em> and{' '}
            <em>Arabis</em>, along with <em>Arabis lyrata</em> (lyre-leaved rock cress) and
            various <em>Cardamine</em> (spring cress) species. These are small, unobtrusive
            plants that grow in thin soil on limestone outcrops, rocky ledges, gravel banks,
            and dry cedar glade margins — the same substrates where the Olympia Marble flies.
            In the Great Lakes alvar habitat (open limestone pavement), <em>Arabis lyrata</em>
            grows in the soil-filled cracks between exposed rock and is the species most
            commonly used by local Olympia Marble populations.
          </p>
          <p>
            The caterpillar is gray-green with white lateral stripes and a yellow dorsal line —
            cryptic on the gray-green stems and seed pods it feeds on. It feeds on leaves,
            flowers, and developing seed pods, completing larval development in three to four
            weeks. The pupa forms on a stem or leaf debris in the habitat and remains attached
            through summer, autumn, and winter. A pupa on a stem that gets cut in October
            does not produce a butterfly in April.
          </p>
        </section>

        <section aria-labelledby="window-heading">
          <h2 id="window-heading">April to early June — the entire year's adult population flies, mates, and lays every egg in six weeks, then the generation ends</h2>
          <p>
            Most butterflies in the eastern United States produce multiple broods across a
            season. The Cabbage White flies from early March to late October, cycling through
            three to five generations. The Pearl Crescent produces three broods. The Painted
            Lady can produce multiple generations in a single year. The Olympia Marble
            produces one. In a given location in Ohio or Indiana, adults emerge from their
            overwintering pupae in mid-April, fly through the last days of May, and are
            entirely gone before the summer solstice. In Tennessee's cedar barrens they
            may appear as early as late March and finish by late May. In the northern part
            of the range — northern Ontario, the Lake Huron alvar islands — they may extend
            into mid-June.
          </p>
          <p>
            That single brood means every event that matters for the species' survival in a
            given location happens in a six-week window: emergence, mating, host plant
            search, oviposition, larval development, pupation. If conditions in those six
            weeks are cold and wet enough to prevent flight, that year's generation produces
            fewer eggs. If the rock cress plants in the habitat die back early from drought,
            larvae hatching in late May find no food. If the habitat gets mowed or cleared
            in April before adults have finished laying, that site's contribution to the
            population is gone for the year.
          </p>
          <p>
            The range extends from the Appalachian Plateau west through the Great Lakes states,
            the Ozarks, and the central Great Plains to eastern Wyoming and Colorado.
            In the northeast — New York, New England — populations are scattered and small,
            associated with limestone outcrops and alvar habitat that is itself uncommon.
            New Hampshire and New York list the species as threatened. The core of the
            range is the limestone-underlain states of the Midwest: Ohio, Indiana, Illinois,
            Missouri, and Kansas, where cedar glades, rocky outcrops, and dry prairies
            still support the rock cress plants this butterfly requires.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Leave the rock cress on the rocky edge — and don't clear dry limestone corners in fall or early spring</h2>
          <ol className="step-list">
            <li>
              <strong>Leave native rock cress and spring cress standing on any rocky, gravelly, or dry limestone exposure in the yard.</strong>{' '}
              <em>Arabis lyrata</em> (lyre-leaved rock cress), <em>Cardamine</em> species,
              and related small mustard-family plants volunteer in thin soil on rocky edges,
              gravel paths, and dry banks. They grow as rosettes the first year and bolt to
              flower in April and May. Most homeowners pull them before they seed — they look
              like weeds in early spring. Left standing, they self-seed in the same rocky
              corner year after year and become the host plant material the Olympia Marble
              searches for in late April.
            </li>
            <li>
              <strong>Do not clear or cut dry rocky edges in October through March.</strong>{' '}
              The Olympia Marble overwinters as a pupa attached to plant stems in the same
              rocky habitat where the adults flew. Autumn clearing of dried plant debris
              in a rocky outcrop or dry gravelly bank removes the overwintering pupae
              along with the stems they are attached to. If you have a dry rocky corner
              where Olympia Marbles have been seen, leave the standing dried vegetation
              undisturbed through winter. Cut it back after mid-May when adults have
              finished laying and new pupae are forming.
            </li>
            <li>
              <strong>Delay mowing rocky or gravelly dry-ground strips until after May 15.</strong>{' '}
              In locations where the species still exists, adults are on the wing from mid-April
              through late May. A mowing pass in early May through a rocky edge with rock cress
              plants removes the host plants while females are actively searching and laying.
              Delaying that cut by two to three weeks costs almost nothing in yard maintenance
              but preserves the oviposition window the species depends on.
            </li>
            <li>
              <strong>Do not spray mustard-family volunteers on rocky edges with herbicide or Bt.</strong>{' '}
              Rock cress and spring cress are the plants the Olympia Marble evolved with —
              they are not garden weeds in a rocky habitat. A spray application at the
              rocky edge kills the host plants before larvae can complete development,
              and any contact insecticide or Bt application in the vicinity of a rocky
              outcrop in April or May can reach adult butterflies nectaring on nearby
              wildflowers. See{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticide Guide
              </button>{' '}
              for the case on why hand-weeding and cutting outperform sprays for invasive
              plants in sensitive habitats.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">On limestone outcrops and cedar glade margins in April and May — who else flies and blooms alongside the Olympia Marble</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('checkered-white')}>
                Checkered White
              </button>{' '}
              &mdash; another native white butterfly that uses native mustard-family host plants
              in open dry habitat; while the Olympia Marble is restricted to rocky outcrops
              and cedar glades and flies only in spring, the Checkered White occupies dry
              open fields and disturbed ground from April to October; both are outnumbered in
              most yards by the introduced Cabbage White, which competes for the same host
              plant chemistry
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('west-virginia-white')}>
                West Virginia White
              </button>{' '}
              &mdash; a third native white butterfly that flies only in spring, in wooded
              ravines and creek drainages with toothwort; the Olympia Marble and West
              Virginia White share the single-brood spring-only life cycle and the
              dependence on native mustard-family host plants, but they occupy different
              habitats within the same landscape — rocky open outcrops versus shaded
              woodland stream banks
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('spring-azure')}>
                Spring Azure
              </button>{' '}
              &mdash; a small blue butterfly that appears on the same warm April days as the
              Olympia Marble; Spring Azure uses early-blooming shrubs and perennials and
              is found across a wider range of habitats than the Olympia Marble, but
              both are first-of-spring species that disappear before summer
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('wild-columbine')}>
                Wild Columbine
              </button>{' '}
              &mdash; a native wildflower of rocky outcrops and dry wooded slopes that blooms
              in April and May at the same time the Olympia Marble is flying; Wild Columbine
              grows in thin soil on ledges and rocky banks — the same substrate where
              rock cress grows and where Olympia Marbles search for host plants;
              planting Wild Columbine in a rocky exposure provides adult nectaring plants
              adjacent to potential host plant habitat
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cabbage-white')}>
                Cabbage White
              </button>{' '}
              &mdash; the introduced white butterfly that arrived from Europe in the 1860s and
              now occupies every field, garden, and roadside across North America; it uses
              the same glucosinolate-detection chemistry as the Olympia Marble and all
              other pierids, but thrives in the dense brassica plantings and introduced
              weedy mustards that the Olympia Marble's native rock cress hosts do not
              form in disturbed agricultural areas
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Leave the rock cress. Leave the dry corner uncut through winter.</strong>{' '}
            Those two decisions preserve the only six weeks of the year when the Olympia
            Marble can use the habitat at all. Find native rocky-ground and dry-soil plants
            to add alongside in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or browse the full native butterfly collection in the{' '}
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
