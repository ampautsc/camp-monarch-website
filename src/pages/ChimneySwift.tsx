import type { Page } from '../App'

interface ChimneySwiftProps {
  onNavigate: (page: Page) => void
}

export default function ChimneySwift({ onNavigate }: ChimneySwiftProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Chaetura_pelagica%2C_by_Lake_Erie%2C_Cleveland%2C_Ohio%2C_USA_339593191.jpg"
          alt="Chimney swift in flight over Lake Erie — a cigar-shaped aerial insectivore that lives almost entirely on the wing, eating over 1,000 insects per day and declining 65% since 1966"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Adam Jackson&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/339593191" target="_blank" rel="noopener noreferrer">CC0</a>
          &nbsp;via iNaturalist / Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Chimney Swift</h1>
        <p className="hero__lead">
          A chimney swift lives almost entirely in the air. It bathes, drinks, gathers nesting
          material, and even mates on the wing. Its feet, tiny and hook-like, cannot support its
          weight — they grip vertical surfaces only to roost or tend a nest. Every other moment
          of its existence, it is airborne. Each bird consumes roughly 1,000 insects per day.
          The population has fallen 65 percent since 1966.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">Built to never land</h2>
          <p>
            <em>Chaetura pelagica</em> — the species name means &ldquo;sea dweller&rdquo; — belongs
            to a family so specialized for aerial life that its closest relatives are not other
            birds at all, but hummingbirds. The body is five inches long, cigar-shaped, with
            barely any neck and a tail so short the wings extend well past it. Thirteen-inch
            wings give the bird an angular, stiff-flapping flight that looks mechanical — the
            old nickname is &ldquo;flying cigar.&rdquo; The feet have four forward-pointing toes,
            each tipped with a sharp curved claw, that allow the bird to cling to vertical surfaces
            but cannot be spread to bear weight the way most birds stand. If a chimney swift
            lands on flat ground, it cannot take off. It must always launch from a vertical grip.
          </p>
          <p>
            A swift foraging over a neighborhood in July is hunting a continuous stream of small
            flying insects — mosquitoes, gnats, midges, flying ants, termite alates, small
            moths, and aphids — catching them with an open bill while flying at speeds of 20
            to 30 miles per hour. Studies using gut content analysis found that a single adult
            takes approximately 1,000 insects per day. A nesting pair with chicks feeds more
            intensively; a family unit of four to five birds occupying one chimney removes
            an estimated 12,000 insects per day from the surrounding quarter-mile of airspace.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Chaetura_pelagica_-Perryville%2C_Missouri%2C_USA_-chimney-8_%281%29.jpg"
              alt="Chimney swifts clinging to the interior brick wall of a chimney — the rough masonry surface their claw-tipped toes grip is structurally equivalent to the hollow tree snags they used before European settlement cleared the eastern forests"
              loading="lazy"
            />
            <figcaption>
              Chimney swifts roosting on a brick chimney interior in Perryville, Missouri. The
              rough masonry surface is the key — their claw-tipped toes require grip that smooth
              stainless liner or concrete block cannot provide. Before Europeans arrived, hollow
              sycamores and standing snags provided the same structure. When forests were cleared,
              swifts moved into chimneys. Now both are disappearing simultaneously.
              <span className="photo-credit"> Photo: Greg Schechter&nbsp;·&nbsp;<a href="https://www.flickr.com/photos/gregthebusker/5058612509/" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Nesting begins in May after the birds return from their wintering grounds in the
            upper Amazon basin of South America — a migration route that was not confirmed
            scientifically until the 1940s, when a bird banded in the eastern United States
            was recovered in Peru. A mated pair begins building a bracket nest of small twigs
            snapped from treetops during flight, cemented together and to the vertical wall
            using the birds&apos; own saliva. The nest takes three to four weeks to complete and
            holds three to five eggs. Both parents incubate the eggs and feed the chicks.
            The young can fly within a month of hatching. By October, all swifts have departed
            for South America. They leave no trace in the chimney except the small bracket nest,
            which is inert and does not accumulate the debris that causes odors or fire risk.
          </p>
          <p>
            The evening descent into a chimney at dusk is one of the more striking wildlife
            spectacles available in a suburban yard. As light fades, swifts begin circling over
            the chimney in a tightening spiral, the group growing as birds return from foraging
            across a wide area. The chittering call fills the air. Then, in rapid succession,
            they pour down into the chimney in a stream — sometimes 50, sometimes several
            hundred birds at a migration staging stop — twisting and tumbling as they enter the
            opening. The performance takes only a few minutes and happens every evening from
            May through September at active chimneys.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">From hollow trees to chimneys — and losing both</h2>
          <p>
            The USGS Breeding Bird Survey, conducted annually since 1966, found that chimney
            swift populations in the United States declined by approximately 65 percent between
            1966 and the early 2020s. In Canada, the decline is steeper and the species is listed
            as Threatened under the federal Species at Risk Act. Partners in Flight placed the
            chimney swift on its Watch List as a &ldquo;Common Bird in Steep Decline&rdquo; — a
            category for species still present but losing numbers fast enough to become rare
            within decades.
          </p>
          <p>
            The collapse has a historical root that goes back to European colonization. Before
            settlement, chimney swifts nested in hollow trees — standing dead snags and large
            cavity trees throughout the eastern forest. As colonization proceeded and the eastern
            forests were cleared, hollow trees disappeared. But the settlers also built brick and
            stone chimneys, and swifts made a continent-scale behavioral shift: they moved into
            human-built structures. The rough masonry interior of a brick chimney is structurally
            close enough to the interior of a hollow sycamore that swifts colonized chimneys
            readily. The species became so associated with chimneys that the common name was
            updated to reflect the new nesting habit.
          </p>
          <p>
            For roughly two centuries this adaptation held. Brick chimneys were the standard
            construction across eastern North America, and the chimney swift population was
            large and stable. The postwar period changed both sides of the equation. Modern
            construction replaced brick with concrete block and poured concrete — smooth
            surfaces that swifts cannot grip. Fire codes and insurance requirements drove
            widespread installation of stainless steel chimney liners — gripless cylinders
            that functionally block nesting access. And as old brick buildings were demolished,
            retrofitted, or capped to prevent animal entry, both the original hollow trees and
            their chimney substitutes disappeared at the same time.
          </p>
          <p>
            The aerial insect crash of the last three decades compounded the habitat loss.
            Studies published since 2010 have documented insect abundance declines of 50 to
            75 percent in many regions over the same period the Breeding Bird Survey has
            tracked aerial insectivore declines. Fewer insects means smaller foraging success
            per unit time in the air, slower chick growth, and lower reproductive output. The
            chimney swift is declining for the same reason common nighthawks, purple martins,
            barn swallows, and little brown bats are declining — the aerial prey base that
            once supported millions of insectivorous animals above eastern North America has
            contracted sharply.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that help chimney swifts</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Nesting_tower_for_Chimney_Swift_GUEJ080501-24.jpg"
              alt="Chimney swift nesting tower — a 16-inch square rough-interior wooden tower on a 12-foot pole, the standard replacement cavity when masonry chimneys are no longer available"
              loading="lazy"
            />
            <figcaption>
              A chimney swift tower provides the same nesting cavity that hollow trees and brick
              chimneys once provided. The interior must be rough — rough-sawn wood or scored
              concrete. Smooth plywood or plastic is useless. Standard dimensions: 16 inches
              square interior, 24 inches tall, mounted on a 12-to-15-foot pole in an open area
              away from tree canopies that make entry difficult. Chimney Swift International
              offers free detailed plans at chimneyswifts.org.
              <span className="photo-credit"> Photo: Jean-Sébastien Guénette&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Nesting_tower_for_Chimney_Swift_GUEJ080501-24.jpg" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>If you have a masonry chimney, keep it uncapped from May through September.</strong>{' '}
              Chimney swifts arrive from South America in late April and depart by early October.
              A chimney cap installed during those months blocks nesting and roosting access to a
              pair that may have used that chimney for years. Have the chimney inspected and
              swept by a certified chimney sweep in March or April — before the swifts arrive —
              and leave it uncapped through the nesting season. A nesting swift pair causes no
              structural damage and leaves only a small twig-and-saliva bracket nest that is
              easy to remove after October.
            </li>
            <li>
              <strong>Install a chimney swift tower if you have no usable chimney.</strong>{' '}
              The most effective design uses rough-sawn cedar or Douglas fir boards with a
              16&nbsp;&times;&nbsp;16-inch interior cavity and 24-inch height, mounted on a
              12-to-15-foot pole in an open area clear of overhanging trees. Swifts need
              unobstructed airspace above the opening to enter and exit at speed. The interior
              surface must be rough — they cannot grip smooth plywood or metal. Free plans are
              available from Chimney Swift International at chimneyswifts.org. Installation before
              May gives birds time to discover and investigate the tower in the first season.
            </li>
            <li>
              <strong>Turn off exterior lights between 9&nbsp;PM and midnight from June through August.</strong>{' '}
              Artificial light at night draws flying insects toward light sources and kills them,
              depleting the aerial insect prey that swifts and other aerial insectivores depend on
              during peak foraging hours. A single poorly-shielded floodlight can trap and kill
              hundreds of flying insects per night. Chimney swifts, common nighthawks, and little
              brown bats all forage in low light at dusk and post-dusk; reducing artificial light
              in that window directly benefits the prey base they share. See{' '}
              <button className="link-button" onClick={() => onNavigate('little-brown-bat')}>
                Little Brown Bat
              </button>{' '}
              and{' '}
              <button className="link-button" onClick={() => onNavigate('common-nighthawk')}>
                Common Nighthawk
              </button>{' '}
              for the full light-pollution picture.
            </li>
            <li>
              <strong>Plant native flowering trees that support insect populations.</strong>{' '}
              Wild cherry, serviceberry, native oaks, elderberry, and native willows support the
              caterpillar and flying insect biomass that swifts harvest above and around your yard.
              A suburban block with three or four mature native trees has measurably more aerial
              insect activity than one planted entirely with non-native ornamentals. Find what grows
              near you at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The aerial insectivore web above your yard</h2>
          <p>
            The chimney swift belongs to a guild of aerial insectivores — species that feed by
            catching insects in continuous flight — that also includes the{' '}
            <button className="link-button" onClick={() => onNavigate('common-nighthawk')}>
              common nighthawk
            </button>
            , the{' '}
            <button className="link-button" onClick={() => onNavigate('little-brown-bat')}>
              little brown bat
            </button>
            , purple martins, barn swallows, and tree swallows. Every member of this guild has
            declined 50 to 72 percent since 1966. They are declining together for shared reasons:
            aerial insect collapse, light pollution disrupting night foraging, and loss of
            cavity nesting sites.
          </p>
          <p>
            The insects being removed from the air above your yard in summer are the same insects
            that hatch from the native trees planted for{' '}
            <button className="link-button" onClick={() => onNavigate('black-capped-chickadee')}>
              chickadees
            </button>{' '}
            and{' '}
            <button className="link-button" onClick={() => onNavigate('wood-thrush')}>
              wood thrushes
            </button>
            . The flying ants and termite alates that swifts harvest in June are the same prey that
            American toads and{' '}
            <button className="link-button" onClick={() => onNavigate('gray-tree-frogs')}>
              gray tree frogs
            </button>{' '}
            hunt at ground level in the same week. The chimney swift is a skimmer reading the
            insect abundance of your neighborhood from above. When it returns year after year to
            a chimney, it is reading a signal that the insect web below is still intact.
          </p>
          <p>
            When a pair of swifts returns in late April and begins circling the chimney, they are
            completing a 5,000-mile round trip from Amazonian Peru to the same nesting site they
            used last year — guided by landmarks, star patterns, and magnetic cues honed over
            millions of years. Whether they find the chimney still open, and whether the insects
            are there to sustain a colony through August, depends entirely on what the neighborhood
            around that chimney looks like in 2025 and beyond.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build the insect-rich, light-reduced, cavity-available yard that aerial insectivores need.</strong>{' '}
            Start with plants at{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , understand how pesticides reduce the aerial insect web at the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , and meet every other species sharing your airspace in the{' '}
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
