import type { Page } from '../App'

interface SpringAzureProps {
  onNavigate: (page: Page) => void
}

export default function SpringAzure({ onNavigate }: SpringAzureProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/643023766/large.jpg"
          alt="Spring Azure butterfly (Celastrina ladon) — a small pale blue butterfly perched with wings spread, showing the blue upperside with thin dark borders"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/120612483/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Arlo Sitimans&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/643023766" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Spring Azure</h1>
        <p className="hero__lead">
          In late March in Virginia, and late April in southern Ontario, the first blue butterfly
          of the year appears at the edge of a tree line or a suburban backyard. It is smaller
          than a quarter — wings the color of the sky in early morning, pale and slightly washed
          out above, mottled gray-white below. The Spring Azure (<em>Celastrina ladon</em>)
          emerges before most trees have leafed out, often while daffodils are still blooming.
          Its emergence is not set by a calendar. It is set by the timing of the trees it
          depends on for reproduction.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="flower-buds-heading">
          <h2 id="flower-buds-heading">The female lays eggs on flower buds — the larva eats the developing flower, not the leaf</h2>
          <p>
            The Spring Azure female does not search for leaves. She searches for flower buds
            on specific host plants: principally flowering dogwood (<em>Cornus florida</em>),
            gray dogwood (<em>Cornus racemosa</em>), wild cherry (<em>Prunus serotina</em>),
            and several species of viburnum. She lands on a bud cluster, taps the surface
            with her feet to taste the plant's chemical signature, and presses a single pale
            green egg against the bud. The egg hatches in four to five days. The larva that
            emerges feeds on the petals, pollen, and developing seeds of the flower — it is a
            flower-eating caterpillar, not a leaf-eating one.
          </p>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/65089911/large.jpg"
              alt="Spring Azure butterfly nectaring on small white spring wildflowers, showing the pale blue wings from above"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/361397004/large.jpg'
              }}
            />
            <figcaption>
              A Spring Azure nectaring on spring wildflowers. Adults feed during their brief
              adult lifespan of one to two weeks while the female spends much of that time
              searching for the blooming host trees where she deposits her eggs.
              <span className="photo-credit"> CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            Because the larva eats flowers rather than leaves, the female's viable reproductive
            window is the precise period when her host plants are in bloom. Flowering dogwood
            opens for roughly three to four weeks, starting when daytime temperatures hold
            consistently above 55°F — late March to late April in the mid-Atlantic states, and
            two to three weeks later in the Great Lakes region and southern Canada. A female
            Spring Azure flying before or after that window cannot reproduce on dogwood. She
            must locate blooming host-plant flowers within her adult lifespan of one to two weeks.
          </p>
          <p>
            The caterpillar pupates in early summer and the pupa overwinters in the leaf litter
            below its host tree. The adult that emerges in March or April spent roughly eight
            months in that pupa, waiting. In the northern part of the range, there is one brood
            each spring. In more southern states, a second generation emerges in early summer —
            slightly different in wing markings and primarily using viburnum and meadowsweet as
            host plants. That summer generation was once classified as the same species, and is
            now recognized as the Summer Azure (<em>Celastrina neglecta</em>).
          </p>
        </section>

        <section aria-labelledby="dogwood-anthracnose-heading">
          <h2 id="dogwood-anthracnose-heading">Dogwood anthracnose arrived from Asia in the 1970s — flowering dogwood has been dying in eastern forests since</h2>
          <p>
            Flowering dogwood (<em>Cornus florida</em>) grows naturally from southern Quebec to
            northern Florida and west to eastern Kansas. For most of the twentieth century, it
            formed the understory layer in eastern deciduous forest, conspicuous in April by
            its white bracts. Then, in the late 1970s, a fungal pathogen appeared in the
            northeastern United States.
          </p>
          <p>
            <em>Discula destructiva</em> — dogwood anthracnose — was not present in North America
            before that decade. It arrived, most likely in contaminated ornamental plant imports,
            and spread through the Appalachian and mid-Atlantic region with little resistance
            from the native trees. <em>Cornus florida</em> had no prior evolutionary exposure
            to the pathogen and died in large numbers. Surveys in parts of Virginia and West
            Virginia during the 1980s and 1990s documented mortality rates above 50% in some
            forest stands. The disease continues to move through forest populations where moisture
            and shade create conditions favorable to the pathogen.
          </p>
          <p>
            A homeowner who plants native <em>Cornus florida</em> in a yard with good air
            circulation and morning sun — the conditions that limit anthracnose — is adding
            host-plant capacity that the forest has been losing for fifty years. A single
            mature dogwood can bloom annually for decades. The Spring Azure female finds it
            in April and lays eggs on the flower clusters. The larvae complete development in
            the flowers before the tree sets its red fruit in June.
          </p>
        </section>

        <section aria-labelledby="kousa-heading">
          <h2 id="kousa-heading">Kousa dogwood blooms in June — after the Spring Azure's breeding window has closed</h2>
          <p>
            Garden centers in the United States sell more Kousa dogwood (<em>Cornus kousa</em>)
            — a species from Japan and Korea — than native <em>Cornus florida</em>. Kousa
            dogwood is marketed for its resistance to anthracnose and its later bloom period:
            late May through June, after the native species has finished. Its flowers appear
            after the leaves open, as white bracts above the foliage rather than the white
            display on bare branches of the native species.
          </p>
          <p>
            Spring Azures are not documented using Kousa dogwood as a larval host. The native
            species — <em>Cornus florida</em> and <em>Cornus racemosa</em> — are the documented
            hosts in the eastern United States. Even if a female were to attempt oviposition on
            Kousa dogwood, the bloom period falls outside the spring brood's flight window in
            most of its range. A yard that has Kousa dogwood but no native dogwood or wild cherry
            gives the Spring Azure female nothing to lay eggs on in April.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant native dogwood where morning sun reaches the branches — and leave wild cherry standing at the yard edge</h2>
          <ol className="step-list">
            <li>
              <strong>Plant flowering dogwood (<em>Cornus florida</em>) or gray dogwood (<em>Cornus racemosa</em>) in a position with morning sun and good air circulation.</strong>{' '}
              <em>Cornus florida</em> prefers well-drained soil with afternoon shade — the
              classic understory position beneath taller deciduous trees. It does not thrive
              in full sun in the mid-Atlantic south of Philadelphia; in warmer zones it needs
              afternoon protection. <em>Cornus racemosa</em> tolerates wet and disturbed soil
              and grows north into the Great Lakes region and New England. Both bloom in April,
              timed to the Spring Azure's flight period. Use{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>{' '}
              to find native dogwood nursery sources and placement conditions by region.
            </li>
            <li>
              <strong>Leave volunteer wild cherry (<em>Prunus serotina</em>) at the property edge where it occurs naturally.</strong>{' '}
              Wild cherry volunteers readily along fence lines and wooded edges. Many homeowners
              remove it as a weed tree. Before cutting a wild cherry, check whether its position
              allows it to stay — it is a documented Spring Azure host plant in spring, and its
              fruit is consumed by more than 40 bird species in late summer, including migratory
              thrushes and warblers. A wild cherry left standing at the property edge provides
              both spring butterfly breeding habitat and a late-summer bird feeding station. See{' '}
              <button className="link-button" onClick={() => onNavigate('black-cherry')}>
                Black Cherry
              </button>{' '}
              for wildlife value and identification details.
            </li>
            <li>
              <strong>Plant native viburnum to extend the breeding window past dogwood's bloom.</strong>{' '}
              Arrowwood viburnum (<em>Viburnum dentatum</em>) and nannyberry (<em>Viburnum lentago</em>)
              are both documented Spring Azure host plants and bloom in May, after flowering dogwood
              has finished. They extend the window when the female can find suitable oviposition
              sites. Both shrubs also provide late-season fruit for thrushes and waxwings. See{' '}
              <button className="link-button" onClick={() => onNavigate('arrowwood-viburnum')}>
                Arrowwood Viburnum
              </button>{' '}
              for growing conditions and placement.
            </li>
            <li>
              <strong>Leave the leaf litter undisturbed under dogwood and wild cherry from fall through March.</strong>{' '}
              Spring Azure pupae overwinter in the leaf litter at the base of their host trees.
              The pupa that will become a March or April butterfly is buried in leaves raked from
              the previous autumn. Clearing the leaf litter from under a dogwood in October or
              November removes that overwintering stage. Leave the leaves undisturbed under host
              trees through the end of March, when the adults have already emerged. See{' '}
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>{' '}
              for the full case for leaf litter as overwintering habitat across dozens of species.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">April woodland-edge neighbors — who flies and blooms alongside the Spring Azure</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('henrys-elfin')}>
                Henry's Elfin
              </button>{' '}
              &mdash; another small March–April butterfly whose caterpillar eats only the
              flowers and seed pods of Eastern Redbud; adults fly the same early-spring
              window as Spring Azures and overwinter as pupae in the leaf litter;
              planting native redbud alongside flowering dogwood brings both species to the
              same early-spring yard
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('west-virginia-white')}>
                West Virginia White
              </button>{' '}
              &mdash; another spring-only butterfly with a narrow host-plant window; emerges
              in April to fly through woodland understory while toothwort is in bloom; Spring
              Azures and West Virginia Whites fly together in rich moist forest with intact
              spring ephemeral ground cover and where neither garlic mustard nor anthracnose
              has yet arrived
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('arrowwood-viburnum')}>
                Arrowwood Viburnum
              </button>{' '}
              &mdash; a documented Spring Azure host plant that blooms in May after dogwood has
              finished, extending the window when the female can find oviposition sites; attracts
              dozens of native bee species when in bloom and provides late-season fruit consumed
              by migratory thrushes
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('black-cherry')}>
                Black Cherry
              </button>{' '}
              &mdash; wild cherry (<em>Prunus serotina</em>) is a Spring Azure host plant and one
              of the most wildlife-productive native trees in eastern North America; supports over
              400 species of caterpillars and provides late-summer fruit consumed by 47 bird
              species including warblers, thrushes, and flycatchers passing through in migration
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>{' '}
              &mdash; Spring Azure pupae overwinter in the leaf litter below host trees through
              winter; autumn raking around the base of dogwood and wild cherry removes these
              overwintering pupae; the same leaf litter holds firefly larvae, ovenbird nesting
              material, and overwintering bumblebee queens
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('golden-alexanders')}>
                Golden Alexanders
              </button>{' '}
              &mdash; one of the earliest native wildflowers to bloom in April and May; Spring
              Azures and other early butterflies nectar on its small yellow flower clusters;
              grows in woodland-edge beds in the same partial-shade conditions where native
              dogwoods thrive
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>One native dogwood, one wild cherry left at the yard edge, and leaf litter left
            undisturbed under both through March — that is Spring Azure habitat in a yard.</strong>{' '}
            Browse the woodland and edge plants in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>{' '}
            to find dogwood and viburnum nursery sources, or see the full gallery of spring
            woodland-edge species in{' '}
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
