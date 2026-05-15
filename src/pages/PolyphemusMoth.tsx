import type { Page } from '../App'

interface PolyphemusMothProps {
  onNavigate: (page: Page) => void
}

export default function PolyphemusMoth({ onNavigate }: PolyphemusMothProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Polyphemus_Moth_Antheraea_polyphemus.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Polyphemus Moth with wings spread revealing large eyespot on hindwings — a 6-inch wingspan predator-deterrent evolved over millions of years"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: [User:Kadoka1]Template:Stephen Lody Photography · <a href="https://commons.wikimedia.org/wiki/File:Polyphemus_Moth_Antheraea_polyphemus.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a> via Wikimedia Commons */}
          Photo: [User:Kadoka1]Template:Stephen Lody Photography&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Polyphemus_Moth_Antheraea_polyphemus.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Polyphemus Moth</h1>
        <p className="hero__lead">
          One of the largest moths in North America — a six-inch wingspan, four
          enormous eyespots, and a life so brief the adult never eats. It hatches,
          finds a mate, lays eggs, and is gone in a week or two. Everything it needs
          is in the trees outside your window.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">Named for the Cyclops</h2>
          <p>
            The Polyphemus Moth (<em>Antheraea polyphemus</em>) is a giant silk moth,
            member of the family Saturniidae. Its wingspan reaches four to six inches,
            making it one of the most visually commanding insects in North America.
            The name comes from Polyphemus, the one-eyed Cyclops of Greek mythology —
            a reference to the single large eyespot on each hindwing, surrounded by a
            ring of blue, black, and yellow that mimics the eye of a large vertebrate
            predator well enough to startle a bird into dropping the moth mid-attack.
          </p>
          <p>
            The wings themselves are a study in camouflage. At rest with wings closed,
            the moth disappears into bark or leaf litter — brown, tan, and russet in
            patterns that break up its outline against any woody surface. Open the
            wings and the eyespots flash. The combination of cryptic rest posture and
            sudden aposematic display is among the most sophisticated anti-predator
            strategies in the insect world.
          </p>
          <p>
            Adult Polyphemus Moths have vestigial mouthparts. They cannot eat. From the
            moment they emerge from the cocoon, they live entirely on fat reserves
            accumulated during their caterpillar stage — reserves that must last long
            enough to find a mate, produce eggs, and die. The females emit a
            pheromone plume detectable by males over distances of a mile or more,
            using feathered antennae that are among the most sensitive chemical
            receptors in the animal kingdom. A male can locate a female
            in complete darkness across an open field. The urgency encoded in those
            antennae is the urgency of an animal with one week left to live.
          </p>
        </section>

        <section aria-labelledby="trees-heading">
          <h2 id="trees-heading">What the caterpillar needs</h2>
          <p>
            The caterpillar stage is where the Polyphemus Moth&apos;s fate is decided.
            The larvae feed on a broad range of native hardwood trees and shrubs:
            oaks, maples, birches, cherries, willows, and sweetgum are among the
            preferred hosts. The caterpillar is bright green with metallic silver
            spots and grows to nearly three inches long before spinning its dense
            papery cocoon, often secured to a twig or wrapped in a leaf that falls
            to the ground in autumn.
          </p>
              <figure className="species-content-photo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Antheraea_polyphemus.jpg"
                  alt="Polyphemus Moth wings fully spread, showing the large hindwing eyespots that mimic the eyes of a much larger animal"
                  loading="lazy"
                />
                <figcaption>
                  The Polyphemus Moth keeps its eyespots hidden beneath its forewings at rest. When a predator disturbs it, it drops the forewings suddenly — the flash of two large "eyes" startles most birds long enough for escape. The adult has no functional mouth and lives only long enough to find a mate. Its caterpillar feeds exclusively on native oaks, maples, and birches.
                  <span className="photo-credit"> Photo: Mike Boone · <a href="https://commons.wikimedia.org/wiki/File:Antheraea_polyphemus.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            The connection to native trees is not incidental. Polyphemus caterpillars,
            like most Saturniid silk moths, cannot complete development on non-native
            ornamental trees — the chemistry is wrong, the leaf timing is mismatched,
            the nutritional profile does not fit. A yard or neighborhood planted
            entirely with Bradford pears, burning bush, and Japanese maples supports
            a Polyphemus caterpillar population near zero, regardless of how many
            moths are passing through as adults. The tree list matters: native oaks
            and maples are not interchangeable with ornamental substitutes.
          </p>
          <p>
            The same canopy trees that host Polyphemus caterpillars host hundreds of
            other native moth and butterfly species. A single native oak supports
            over 500 caterpillar species. That caterpillar biomass is the
            foundation of the food web that supports every insectivorous bird in the
            neighborhood — Wood Thrushes, Baltimore Orioles, Black-capped Chickadees,
            and Eastern Screech Owls all depend on the insects that only native trees
            can produce at sufficient scale.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">Light is destroying the mating system</h2>
          <p>
            Polyphemus Moths and other giant silk moths are strongly phototactic —
            drawn to artificial light sources with a pull they cannot override. This
            is not a minor behavioral quirk. A moth that encounters a porch light or
            streetlamp will circle it for hours, sometimes until dawn, expending the
            fat reserves that were meant to power a week of mate-searching. It may
            never reach a female. Males drawn to lights in residential areas
            frequently die there — wings tattered, fat stores exhausted — before
            contributing to the next generation.
          </p>
          <p>
            The problem compounds at the population level. In suburban and urban
            landscapes, artificial light is everywhere. Moths emerging into a
            neighborhood grid of porch lights, streetlamps, and illuminated buildings
            face a mating landscape where the artificial signals drown out the
            pheromone plumes they evolved to follow. The result is reduced mating
            success, lower egg output, and declining populations in areas that still
            have the host trees the caterpillars need.
          </p>
          <p>
            Pesticides add a second layer of pressure. Broad-spectrum insecticides —
            including Bt-based products applied for gypsy moth control — kill
            Saturniid caterpillars alongside their intended targets. The caterpillars
            are large, slow-moving, and highly visible on foliage; they are also
            exquisitely sensitive to the neurotoxic compounds in common yard
            pesticides. A single spray event in June can eliminate an entire local
            cohort of Polyphemus larvae before any reproduce.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that support Polyphemus Moths</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Fallen_leaves.jpg" alt="Autumn leaves covering ground beneath trees" loading="lazy" />
            <figcaption>
              Polyphemus cocoons fall to the ground in autumn and overwinter in the leaf layer beneath their host oaks and maples. A single unraked section beneath a mature tree is enough. The insulating depth that keeps them viable through winter is built from what you choose not to remove.
              <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;<a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant native oaks and maples.</strong>{' '}
              A single native oak supports more caterpillar biomass than any other
              tree genus in eastern North America. Even a young oak sapling
              produces host value within a few seasons of planting. Native red
              maple, silver maple, and sugar maple are similarly productive hosts.
              If you have space for one new tree, make it a native oak or maple —
              the investment pays dividends in insects, birds, and moths for
              decades.
            </li>
            <li>
              <strong>Turn off or redirect outdoor lights during moth season.</strong>{' '}
              June through August is peak Polyphemus emergence in most of eastern
              North America. Switching porch lights and decorative exterior lights
              to motion-activation during these months reduces the artificial light
              trap effect. Warm-spectrum (amber/yellow) LEDs are less attractive to
              moths than cool-white or blue-spectrum lights. Directing fixtures
              downward instead of broadcasting light upward and outward also
              substantially reduces moth attraction.
            </li>
            <li>
              <strong>Stop broad-spectrum pesticide use.</strong>{' '}
              Caterpillars are the most vulnerable stage. Avoid pyrethroid, organophosphate,
              and neonicotinoid applications to trees and shrubs during the June
              through August caterpillar season. If you are managing for a specific
              pest, use targeted controls and avoid broadcast sprays that contact
              foliage where Saturniid caterpillars feed. The large green caterpillar
              you find on your oak in July is worth keeping — it will become something
              extraordinary.
            </li>
            <li>
              <strong>Leave cocoons and leaf litter in place through winter.</strong>{' '}
              Polyphemus cocoons overwinter attached to twigs or in leaf litter on
              the ground. Raking all leaves, blowing debris out of garden beds,
              and removing fallen leaves bagged to the curb removes the overwintering
              habitat of every moth in that cohort. Leave a section of your yard
              undisturbed from October through May. The moths that emerge from that
              litter in June are the return on that single act of restraint.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The week that accounts for everything</h2>
          <p>
            An adult Polyphemus Moth lives approximately one week. In that week, it
            must navigate by pheromone across a landscape increasingly saturated with
            artificial light. It must find a mate without eating, without resting for
            long, without the margin that a longer life would provide. Everything that
            will sustain the next generation depends on the conditions in that week
            and the trees that supported the caterpillar for the six weeks before it.
          </p>
          <p>
            The gap between what a Polyphemus Moth needs and what most suburban
            landscapes provide is not large. It needs native canopy trees, reduced
            artificial light in summer, and an absence of broad-spectrum pesticides
            during caterpillar season. None of those require extraordinary effort.
            They require knowing that the moth exists, knowing what it needs, and
            making the modest choices that follow from that knowledge.
          </p>
          <p>
            When a Polyphemus Male crosses your yard in late June on his way toward
            a female a quarter-mile away, he is using the same olfactory map his
            ancestors used in forests that once covered this continent. He does not
            know about your porch light. He only knows the direction of the signal —
            and whether the night is dark enough to follow it.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build habitat that supports Polyphemus Moths and all native insects.</strong>{' '}
            Eliminate pesticides with the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , restore native canopy with{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-transformation')}>
              From Lawn to Habitat
            </button>
            , and find the right native trees to plant with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
