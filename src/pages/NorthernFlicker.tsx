import type { Page } from '../App'

interface NorthernFlickerProps {
  onNavigate: (page: Page) => void
}

export default function NorthernFlicker({ onNavigate }: NorthernFlickerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Northern_Flicker_%28Red-shafted%29.jpg/960px-Northern_Flicker_%28Red-shafted%29.jpg"
          alt="Northern Flicker perched on weathered wood showing the spotted breast, barred brown back, and the black crescent bib that marks this ground-feeding woodpecker"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Elaine R. Wilson&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Northern_Flicker_(Red-shafted).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Northern Flicker</h1>
        <p className="hero__lead">
          Every other woodpecker in North America drills into bark for food.
          The Northern Flicker drills into the ground.
          Its tongue reaches two inches past its bill tip, coated in sticky mucus, barbed —
          built for ant tunnels, not wood.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="tongue-heading">
          <h2 id="tongue-heading">A tongue longer than the bill, wrapped around the skull</h2>
          <p>
            The Northern Flicker (<em>Colaptes auratus</em>) has a bill curved slightly
            downward — not for chipping bark, but for probing soil. When it pushes that bill
            into the ground above an ant colony, a tongue anchored at the nostril uncoils from
            around the back of the skull and extends two inches past the bill tip into the
            gallery below. The tongue is coated in sticky mucus and barbed at the tip.
            It does not stab. It feels for ants moving in the dark, adheres to them,
            and retracts with them attached.
          </p>
          <p>
            A Flicker working an active ant colony can extract hundreds of ants per visit.
            Over a breeding season, ants make up roughly 45 percent of its diet —
            a higher proportion than any other North American woodpecker. On peak
            foraging days, a single bird consumes up to 5,000 ants.
          </p>
          <p>
            Flickers also engage in anting: they press live ants against their feathers or
            roll in active mounds, letting the insects crawl through the plumage. The formic
            acid the ants release appears to kill feather mites. The birds are not just
            eating ants — they are using them as a maintenance tool.
          </p>
        </section>

        <section aria-labelledby="identification-heading">
          <h2 id="identification-heading">Yellow underwings, black bib, red nape crescent</h2>
          <p>
            In the East, the Flicker announces itself in flight: the undersides of the wings
            and tail flash brilliant yellow as it rises from the grass. On the ground, the
            spotted breast, barred brown back, and large black crescent across the chest
            separate it from every other bird foraging in short turf. Males carry a black
            mustache stripe; females do not. Both sexes show a red crescent on the back of
            the head — a patch absent in the closely related Red-shafted Flicker of the West,
            which shows salmon-red under the wings instead of yellow.
          </p>

          <figure className="species-content-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Northern_Flicker.jpg/960px-Northern_Flicker.jpg"
              alt="Northern Flicker on the ground, spotted breast visible, bill angled downward toward the soil as it probes for ants"
              loading="lazy"
            />
            <figcaption>
              A Northern Flicker foraging at ground level. The downward-curved bill, spotted
              chest, and barred back are visible. In flight this bird flashes brilliant
              yellow (East) or salmon-red (West) beneath its wings — the color most people
              notice when one lifts from the lawn unexpectedly.
              <span className="photo-credit"> Photo: Ken Thomas&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Northern_Flicker.jpg" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Flickers are year-round residents across much of the country, though northern
            populations shift south in winter. The bird foraging in your yard in January
            stayed because the food supply held. A yard with intact ant colonies in
            unmowed edges or loose-soil patches holds Flickers through cold months.
            A yard that received granular grub or ant treatment the previous summer
            typically will not.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">40 percent fewer since 1966</h2>
          <p>
            The North American Breeding Bird Survey has tracked Northern Flicker populations
            since 1966. The count is down approximately 40 percent from that baseline.
            The decline is steepest in regions where residential lawn management intensified
            most — widespread granular pesticide application, conversion of mixed ground
            cover to uniform turf, and removal of dead wood from suburban properties.
          </p>
          <p>
            Imidacloprid-based grub treatments — sold under names like BioAdvanced and
            others — move from granules into the soil and remain active for months.
            They target Japanese beetle larvae in the top two inches of soil, but ant
            colonies in the same zone absorb the compound through the food chain.
            Flickers that forage repeatedly on treated ground accumulate sublethal doses
            across a breeding season. Studies of imidacloprid exposure in woodpeckers
            and corvids show reduced foraging efficiency and impaired navigation at
            doses well below those that cause acute mortality. A yard treated for grubs
            every two to three years maintains a compromised Flicker food supply
            even in the years between treatments.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three yard changes that bring Northern Flickers back</h2>

          <figure className="species-content-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Snag_at_the_Wildlife_Garden_%2842263673541%29.jpg"
              alt="Standing dead tree in a garden with exposed dead wood — the kind of snag that woodpeckers excavate for nest cavities"
              loading="lazy"
            />
            <figcaption>
              Flickers excavate nest cavities in dead snags — a 3-inch entrance hole,
              13 to 16 inches deep. After one breeding season, the pair abandons it.
              Eastern Bluebirds, Tree Swallows, and Eastern Screech Owls move in
              during the years that follow. One standing dead tree initiates a nesting
              succession that runs for a decade without any additional effort.
              <span className="photo-credit"> Photo: Ross Dunn&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/2.0" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Stop granular grub and ant treatments.</strong>{' '}
              Products containing imidacloprid, chlorpyrifos, or bifenthrin — applied
              as lawn granules for grub or fire ant control — remain active in soil
              for months and move through the ant food chain to the Flicker. If
              Japanese beetle grubs are the actual problem,{' '}
              <em>Bacillus popilliae</em> (milky spore) is a bacterial alternative
              that targets beetle larvae without reaching the ant layer. Apply once;
              it persists for years.
            </li>
            <li>
              <strong>Let lawn edges naturalize.</strong>{' '}
              The border between mowed lawn and an unmowed strip holds ant colonies at
              much higher density than uniform turf. Native ground covers — wild violets,
              creeping thyme, native sedges — hold soil moisture and give ant colonies
              the stable temperature they need underground. A 3-foot unmowed strip along
              a fence line is enough to support a foraging Flicker.
            </li>
            <li>
              <strong>Leave one standing dead snag.</strong>{' '}
              Flickers excavate nest cavities in dead wood from March through May.
              After the breeding season, they abandon the hole. Eastern Bluebirds,
              Tree Swallows, and Eastern Screech Owls move into those cavities in
              the years that follow. A single standing snag starts a nesting
              succession that runs for a decade without any additional work.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The same yard the monarch needs</h2>
          <p>
            A yard where Northern Flickers forage has made the same decisions that
            make it usable for monarchs: pesticide use reduced or stopped, ground cover
            diverse rather than uniform, dead wood left standing. The Flicker works the
            soil surface. The monarch caterpillar feeds in the plant layer above it.
            They do not interact — but they fail together. A yard managed for total
            pest elimination is hostile to both.
          </p>
          <p>
            When a Flicker works the edge of your lawn, the ant colonies under that
            patch are intact. The soil food web is functioning. The chemical pause has
            held long enough that the insect layer recovered. That same patch of ground
            is where milkweed planted nearby will give a monarch caterpillar its best
            chance — because the surrounding soil is not still releasing the compounds
            that impair insect development at sublethal doses.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to take the next step?</strong>{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('habitat-layers')}
            >
              Explore habitat layers
            </button>
            {' '}to see how ground, shrub, and canopy layers connect, or{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('leave-the-leaves')}
            >
              learn about leaf litter
            </button>
            {' '}and how autumn cleanup decisions affect the insects that feed every bird in your yard.
          </p>
        </div>
      </div>
    </>
  )
}
