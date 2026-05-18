import type { Page } from '../App'

interface LittleBrownBatProps {
  onNavigate: (page: Page) => void
}

export default function LittleBrownBat({ onNavigate }: LittleBrownBatProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/88/Little_Brown_Myotis_%28cropped%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Little Brown Bat in flight over still water at dusk, mouth open in mid-echolocation — consuming up to 1,000 mosquito-sized insects per hour"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: SMBishop · <a href="https://commons.wikimedia.org/wiki/File:Little_Brown_Myotis_(cropped).JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a> via Wikimedia Commons */}
          Photo: SMBishop&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Little_Brown_Myotis_(cropped).JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Little Brown Bat</h1>
        <p className="hero__lead">
          Before 2006, the Little Brown Bat was one of the most common mammals
          in North America. A single bat eats up to 1,200 mosquito-sized insects
          per hour. Then a fungus arrived from Europe, and in less than two
          decades it erased millions of them. What is left is still using your
          yard.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="numbers-heading">
          <h2 id="numbers-heading">What one bat does in a single night</h2>
          <p>
            The Little Brown Bat (<em>Myotis lucifugus</em>) is a small,
            colonial insectivore — 3 inches long, weighing about as much as
            five pennies. It hunts entirely by echolocation, emitting calls
            at 40–80 kHz that bounce off flying insects and return as precise
            location data processed faster than any sensor humans have built.
          </p>
          <p>
            A nursing female may eat her entire body weight in insects — up to
            8 grams, roughly 3,000 insects — in a single night. Even at rest,
            a single Little Brown Bat consumes 600 to 1,200 mosquito-sized
            insects per hour of active foraging. A maternity colony of 150
            bats, roosting in a single attic or bat house, removes millions
            of insects from the surrounding landscape every night from May
            through September. That service — delivered for free, without
            chemicals, without side effects — is one of the most efficient
            forms of pest control in North America.
          </p>
          <p>
            The insects they target include mosquitoes, moths, beetles,
            midges, and crane flies. Many of the moths they catch are the
            adults of crop and garden pests. A study published in{' '}
            <em>Science</em> in 2011 estimated that insectivorous bats
            provide $3.7 billion in agricultural pest suppression annually
            in the United States alone.
          </p>
        </section>

        <section aria-labelledby="wns-heading">
          <h2 id="wns-heading">White-nose syndrome: a continent-scale collapse</h2>
          <p>
            In 2006, a caver in New York noticed bats with white powder on their
            muzzles. Within two years, bat populations in the cave systems of
            the northeastern United States had crashed by 80 to 90 percent.
            The cause was <em>Pseudogymnoascus destructans</em> — Pd — an
            invasive fungus from Europe that colonizes the skin of hibernating
            bats, disrupting their torpor and causing them to burn their fat
            reserves mid-winter. They wake repeatedly, fly outside in
            February, and die of starvation.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/26/Little_brown_bat.jpg"
                  alt="Little Brown Bat at rest, wings folded against its body — the typical daytime roosting posture in a crevice or hollow tree"
                  loading="lazy"
                />
                <figcaption>
                  A bat's wing is a modified hand — the membrane stretches between five elongated finger bones. Using echolocation calls at frequencies above human hearing, a little brown bat can locate and intercept a moth or gnat in complete darkness. White-nose syndrome, a fungal disease spreading since 2006, has killed over 90% of some hibernating colonies in a decade.
                  <span className="photo-credit"> Photo: U.S. Fish and Wildlife Service · <a href="https://commons.wikimedia.org/wiki/File:Little_brown_bat.jpg" target="_blank" rel="noopener noreferrer">Public domain</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            By 2024, Pd had spread to 39 states, eight Canadian provinces,
            and continues to expand westward. The USGS estimates that more
            than 6.7 million bats have died from white-nose syndrome. In
            some hibernacula that once held tens of thousands of Little Brown
            Bats, fewer than a hundred now return each winter. The IUCN
            reclassified <em>Myotis lucifugus</em> as Endangered in 2018.
          </p>
          <p>
            Pd has no approved cure. Researchers are testing probiotic
            bacteria, UV light exposure at hibernacula entrances, and
            antifungal treatments — some showing promise — but population
            recovery will take decades even if a breakthrough comes. The
            bats that are still flying in your yard represent survivors of
            a catastrophe that most people have never heard of.
          </p>
        </section>

        <section aria-labelledby="habitat-heading">
          <h2 id="habitat-heading">The roost needs 80–100°F heat; the foraging route needs an insect base pesticides haven't erased</h2>
          <p>
            Little Brown Bats use three distinct habitat types across the year.
            In summer, maternity colonies of females and young roost in warm
            structures — often attics, behind shutters, under roof shingles,
            or in tree cavities — where temperatures reach 80–100°F and allow
            rapid pup development. Males typically roost alone in cooler
            crevices. In fall, both sexes gather at swarming sites near
            hibernacula to mate. In winter, they hibernate in caves, mines,
            and occasionally deep wall voids, returning to the same sites
            each year.
          </p>
          <p>
            The foraging habitat they depend on is directly connected to the
            ecological health of the surrounding landscape. Bats hunt over
            open water, woodland edges, and structurally diverse vegetation.
            They follow corridors of trees. They avoid bright artificial
            lights, which suppress insect emergence and disrupt their
            foraging behavior. Lawns treated with broad-spectrum insecticides
            are biological deserts — no moths, no beetles, no crane flies,
            nothing to hunt.
          </p>
          <p>
            A yard with native trees, shrubs, a water source, and no
            pesticides produces the insect density that makes the bat's
            nightly commute worthwhile. The bat does not need the yard to
            be a refuge; it needs it to be productive. Productivity comes
            from ecological diversity, not from a single plant choice.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that support Little Brown Bats</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Bat_boxes_-_geograph.org.uk_-_1149465.jpg" alt="Multiple bat boxes mounted on a wooden structure" loading="lazy" />
            <figcaption>
              Bat boxes mounted in clusters — south-facing, 12–20 feet above ground, away from tree canopy — create the heat-retaining maternity roosts that nursing females need. A colony of 20 bats can consume 20,000 mosquitoes in a single night.
              <span className="photo-credit"> Photo: Morley Sewell&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/2.0" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Install a bat house.</strong>{' '}
              A properly sited bat house can attract a maternity colony within
              one to two seasons. Mount it 12 to 15 feet high on a pole or
              building — not a tree, which blocks solar heating and provides
              predator access. The house needs 6 to 8 hours of direct sun
              daily and should face south or southeast. Install two houses
              back-to-back to give bats temperature options. Houses within a
              quarter mile of water are colonized far more reliably than those
              in dry upland sites.
            </li>
            <li>
              <strong>Provide open water near foraging habitat.</strong>{' '}
              Little Brown Bats drink on the wing, skimming the surface of
              ponds, birdbaths, and rain gardens. Any water feature with an
              open, unobstructed approach allows this. A birdbath that is also
              sited near native trees and shrubs becomes a dual-use resource:
              bathing for birds, drinking approach for bats. Keep the water
              clean; bats will not approach water with heavy algae cover.
            </li>
            <li>
              <strong>Stop killing the insects they eat.</strong>{' '}
              Broad-spectrum insecticides, broadcast mosquito sprays, and
              systemic pesticides applied to plants reduce the insect base
              that bats require. A yard with no flying insects is a yard
              that does not support bats. Native plants support five to ten
              times more insect biomass than exotic ornamentals —
              which means a yard shifting toward native plantings is directly
              increasing the bat food supply.
            </li>
            <li>
              <strong>Reduce outdoor lighting near foraging habitat.</strong>{' '}
              Artificial light at night suppresses moth emergence, disrupts
              insect movement patterns, and concentrates light-attracted
              insects in ways that misalign with bat foraging routes.
              Switching outdoor fixtures to warm-spectrum LEDs, using
              motion-activated lights, and avoiding all-night illumination
              near native plantings preserves the insect emergence that
              bats depend on.
            </li>
          </ol>
        </div>

        <section aria-labelledby="tolerance-heading">
          <h2 id="tolerance-heading">The bat in the attic: what to do and what not to do</h2>
          <p>
            A maternity colony in an attic is a group of breeding females that
            have chosen your structure as their summer roost. Their presence is
            legal to tolerate and ecologically valuable to keep. However, if
            exclusion is necessary, the timing matters enormously.
          </p>
          <p>
            Bats should never be excluded between June 1 and August 15.
            During this period, flightless pups are present. Exclusion
            during this window traps pups inside or separates them from
            nursing mothers, killing the young. Exclusion should happen
            in May before pups are born, or in August after they are
            flying — using one-way exclusion devices that let bats exit
            but not re-enter, then sealing all gaps once the colony has
            relocated. A bat house installed before exclusion gives the
            colony an immediate alternative roost site and substantially
            increases the odds that the colony stays nearby rather than
            dispersing.
          </p>
          <p>
            Bat droppings (guano) are not hazardous at the levels typical
            of a small maternity colony. The risk of rabies from incidental
            contact with a bat is real but extremely low — less than 1
            percent of wild bats carry rabies. If you find a bat on the
            ground or a child or pet has had contact, contact your local
            health department. Otherwise: let the colony work.
          </p>
        </section>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The survivor in your yard</h2>
          <p>
            Every Little Brown Bat foraging over a suburban yard tonight has
            survived a disease that has killed the majority of its species.
            It found enough insects to return night after night. It navigated
            around your outdoor lights. It found a roost warm enough to raise
            a single pup — bats have only one pup per year, which means
            recovery is measured in decades, not seasons.
          </p>
          <p>
            The collective decision of millions of homeowners to maintain
            pesticide-free insect habitat, provide bat houses, and reduce
            light pollution near foraging corridors is the difference between
            a population that stabilizes and one that continues to decline.
            The bat does not know what a bat house is. It knows whether your
            yard is worth returning to.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Want to build the habitat that supports bats?</strong>{' '}
            Start by eliminating pesticides with the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , then add native plants with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , and create water with the{' '}
            <button className="link-button" onClick={() => onNavigate('water-for-wildlife')}>
              Water for Wildlife guide
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
