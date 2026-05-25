import type { Page } from '../App'

interface HackberryEmperorProps {
  onNavigate: (page: Page) => void
}

export default function HackberryEmperor({ onNavigate }: HackberryEmperorProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/43334140/large.jpeg"
          alt="Hackberry Emperor butterfly (Asterocampa celtis) with wings fully open — orange-tan upper wings with dark spots and a cluster of white spots near the forewing tip, scalloped outer wing margins — perched on bark"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Hackberry_Emperor_%28Asterocampa_celtis%29_%2826854714895%29.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Carolyn Gritzmaker&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/photos/43334140" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>No Hackberry Emperor caterpillar has ever been documented developing on any plant other than hackberry — the butterfly's range and the tree's range are the same map</h1>
        <p className="hero__lead">
          In July, an orange butterfly with dark spots lands on your forearm while you're working
          in the yard and doesn't leave. It holds still while you look at it. It stays when you
          move your arm. It is a Hackberry Emperor (<em>Asterocampa celtis</em>), and it is
          drinking sodium dissolved in your sweat. Adults of this species do not visit flowers.
          They seek dissolved minerals wherever moisture collects — tree sap, rotting fruit, mud,
          and human skin. The hackberry it hatched from is within 100 meters of where you're
          standing.
        </p>
        <p className="hero__lead">
          The butterfly's common name and the host plant's common name are identical. Remove
          every hackberry from a property and no Hackberry Emperor will breed there. Add a
          hackberry and leave the leaf litter at its base undisturbed each fall, and the
          first generation may appear within two years of the tree establishing.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="identification-heading">
          <h2 id="identification-heading">Orange-tan wings, white spots near the forewing tip, and scalloped margins — the butterfly that never visits a flower</h2>
          <p>
            The Hackberry Emperor's upper wings are orange to tawny brown with dark brown spots
            arranged in irregular rows. Near the tip of each forewing, three to five white spots
            form a distinct cluster visible from several feet away. The outer margins of both
            wings are scalloped. The underside of the hindwing is pale gray with darker wavy
            lines — when the butterfly rests with wings closed on bark, it disappears against
            the surface. Adult wingspan runs from 1.75 to 2.5 inches.
          </p>
          <p>
            Adults fly from late May through September in two overlapping broods across most
            of the Midwest and East. Males perch on tree trunks, fences, and walls to watch
            for females and will chase any passing object — other butterflies, birds, and people —
            before returning to the same perch. Both sexes are drawn to any warm, dark surface
            and are frequently found on wooden picnic tables, outdoor furniture, painted walls,
            and parked vehicles in yards near hackberry.
          </p>
          <p>
            The closely related Tawny Emperor (<em>Asterocampa clyton</em>) also uses hackberry
            exclusively but lacks the white forewing spots and has stronger tawny-orange tones.
            In yards with hackberry, both species may be present through summer. The American
            Snout (<em>Libytheana carinenta</em>) — the third hackberry-only butterfly — carries
            two elongated labial palps projecting forward from the face, giving the butterfly
            a distinctive long-nosed profile visible from three feet away.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">The August caterpillar feeds through September, curls into the leaf litter at the base of the host tree in October, and does not move again until May</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Hackberry_Emperor_%28Asterocampa_celtis%29_%2826854714895%29.jpg"
              alt="Hackberry Emperor butterfly (Asterocampa celtis) perched on a person's arm, wings spread, drinking sodium from the skin surface — orange-tan wings with dark spots clearly visible"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/43334140/large.jpeg'
              }}
            />
            <figcaption>
              A Hackberry Emperor on a person's arm. Adults seek dissolved minerals rather than
              nectar — they land on human skin, tree sap flows, rotting fruit, and wet soil.
              They stay put for several minutes while feeding and will not leave unless physically
              displaced. This is how most people encounter the species before knowing its name.
              <span className="photo-credit"> Photo: USFWS Midwest Region&nbsp;&middot;&nbsp;
                <a href="https://commons.wikimedia.org/wiki/File:Hackberry_Emperor_(Asterocampa_celtis)_(26854714895).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
                &nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            A female Hackberry Emperor lays eggs in small clusters on the upper surface of
            hackberry leaves, typically in late May and again in July. The caterpillar is
            pale green with a faint yellow lateral stripe and branching spines at both
            ends — one pair at the head, one at the tail. Young caterpillars rest along
            the midrib of the leaf they are feeding on, aligned with the leaf axis, making
            them difficult to see from above against the hackberry leaf surface.
          </p>
          <p>
            The spring brood caterpillars feed from May through June and produce adults in
            June and July. The summer brood begins in July and feeds through September.
            Caterpillars from the summer brood do not complete development before cold
            arrives — they enter diapause as late instars in October. The overwintering
            caterpillar descends the trunk or falls with a curled leaf to the ground, shelters
            in the leaf litter or a bark crevice at the base of the host tree, and stays there
            through winter.
          </p>
          <p>
            The caterpillar overwinters within roughly ten meters of where the egg was laid.
            It does not travel to a separate overwintering site — it drops to the base of
            the same tree and stays. In May, the same caterpillar resumes feeding on the
            hackberry leaves above it, completes its final instars, and pupates to produce
            the season's first adults.
          </p>
          <p>
            A rake moving through the leaf layer under a hackberry in November picks up
            overwintering Hackberry Emperor caterpillars with the leaves and removes them
            from the property. The caterpillar's winter shelter and the spot where it will
            resume feeding in spring are separated by less distance than a garden rake
            can cover in a single stroke.
          </p>
        </section>

        <section aria-labelledby="sodium-heading">
          <h2 id="sodium-heading">Sap flows, fermenting fruit, and skin — the three mineral sources that replace flowers for this species</h2>
          <p>
            Adult Hackberry Emperors obtain carbohydrates and minerals from sources most
            butterflies bypass. Tree sap flows at wounds, broken branches, and insect damage
            sites are a primary food. Rotting and fermenting fruit — apples, mulberries, wild
            plums — that has fallen and begun breaking down on the ground draws adults through
            warm afternoons in late summer. Wet soil and gravel paths, where minerals dissolve
            in surface water, draw adults to puddle in groups.
          </p>
          <p>
            Human sweat triggers the landing-on-people behavior that produces most yard
            encounters with this species. An adult will approach a person working near a
            hackberry, land on an exposed arm or shoulder, extend its proboscis, and begin
            feeding. It will not leave unless moved. Multiple adults may land on the same
            person simultaneously when several are flying near the same tree.
          </p>
          <p>
            No flowers in your yard need to supply this species. The hackberry provides
            the caterpillar host. Sap flows, fruit drop, and soil moisture supply the adult.
            A yard with a hackberry — with its leaf litter intact and no systemic insecticide
            in the root zone — provides the complete cycle from egg to overwintering larva
            to adult without additional planting.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that keep the Hackberry Emperor through its full cycle</h2>
          <ol className="step-list">
            <li>
              <strong>Leave the leaf litter at the base of hackberry trees from October through May.</strong>{' '}
              Hackberry Emperor caterpillars from the summer brood shelter in curled leaves
              and bark crevices at the base of the host tree from October through April.
              They travel no more than ten meters from where the egg was laid before entering
              winter dormancy. Raking the leaf layer beneath a hackberry in autumn removes
              those caterpillars from the property. Leave the litter undisturbed through
              at least late April.
            </li>
            <li>
              <strong>Don't remove self-seeded hackberry saplings from fence rows and property edges.</strong>{' '}
              Cedar waxwings, robins, and flickers deposit hackberry seeds wherever they
              perch after eating the fruit. A hackberry growing in a fence row or at a
              property edge was placed there by a bird. The corky-ridged bark that develops
              within five years of germination is the identification mark. A hackberry four
              inches in diameter already supports Hackberry Emperor egg-laying. Most
              homeowners who remove these trees do not know what they have.
            </li>
            <li>
              <strong>Let fallen fruit decompose on the ground under fruit trees through October.</strong>{' '}
              Fermenting apples, pears, and crabapples on the ground in September and October
              draw adult Hackberry Emperors, Red Admirals, Eastern Commas, and Question Marks
              to fuel before winter. Removing fallen fruit in September eliminates the resource
              during its peak use window.
            </li>
            <li>
              <strong>Apply no systemic insecticide to hackberry or adjacent soil from May through September.</strong>{' '}
              Hackberry Emperor females lay eggs from May through August. First-instar
              caterpillars are a few millimeters long and pale green against the hackberry
              leaf — invisible without deliberate search. A systemic treatment absorbed
              through the roots or bark during the growing season kills caterpillar generations
              on that tree for the season. If pest management is needed near the hackberry,
              confirm whether the treatment zone reaches the tree before applying.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">What shares the hackberry leaf, the bark crevice, and the fallen fruit</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hackberry')}>
                Hackberry
              </button>{' '}
              &mdash; the exclusive caterpillar host; no Hackberry Emperor egg has been
              documented on any other plant; a property without hackberry will not produce
              a breeding Hackberry Emperor regardless of what else grows there
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('question-mark')}>
                Question Mark
              </button>{' '}
              &mdash; also uses hackberry as a caterpillar host alongside stinging nettle;
              adult Question Marks overwinter in bark crevices on the same large-diameter
              trees where Hackberry Emperor caterpillars overwinter in the leaf litter below;
              both species fuel on the same fermenting fruit in September and October
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-comma')}>
                Eastern Comma
              </button>{' '}
              &mdash; uses hackberry alongside stinging nettle as a caterpillar host; adult
              Eastern Commas and Hackberry Emperors share bark-perching and fruit-feeding
              behavior on summer afternoons and are often found on the same fallen apple
              or crabapple at the same time
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('mourning-cloak')}>
                Mourning Cloak
              </button>{' '}
              &mdash; also lays eggs on hackberry across the Midwest, though more commonly
              on willow and birch; adult Mourning Cloaks and Hackberry Emperors share sap
              flows and fermenting fruit in late summer; both overwinter on the same large
              hackberry trunks — the Mourning Cloak between loose bark, the Hackberry
              Emperor caterpillar in the leaf litter below
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('cedar-waxwing')}>
                Cedar Waxwing
              </button>{' '}
              &mdash; consumes hackberry fruit in large flocks during fall migration in
              September and October, then deposits hackberry seeds in its droppings wherever
              it perches — creating new hackberry seedlings in yards and fence rows that
              produce the next generation of Hackberry Emperor host trees
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('red-admiral')}>
                Red Admiral
              </button>{' '}
              &mdash; another species that fuels on fermenting fruit and sap flows rather
              than nectar; Red Admirals and Hackberry Emperors are frequently found on the
              same fallen apple or crabapple in late summer; Red Admirals use stinging
              nettle rather than hackberry for their caterpillar host
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The Hackberry Emperor's entire life happens within 100 meters of one tree.</strong>{' '}
            Understand why the leaf litter under that tree is the caterpillar's winter home
            with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , find which other butterflies share the same bark and fruit with the{' '}
            <button className="link-button" onClick={() => onNavigate('species-gallery')}>
              Species Gallery
            </button>
            , and see what else a hackberry supports with{' '}
            <button className="link-button" onClick={() => onNavigate('hackberry')}>
              Hackberry
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
