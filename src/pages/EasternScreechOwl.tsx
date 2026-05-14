import type { Page } from '../App'

interface EasternScreechOwlProps {
  onNavigate: (page: Page) => void
}

export default function EasternScreechOwl({ onNavigate }: EasternScreechOwlProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Screech Owl</h1>
        <p className="hero__lead">
          One is probably roosting in your neighborhood right now — in a tree
          cavity, a nest box, or a dense cedar. Smaller than a coffee mug, with
          camouflage so precise it disappears into bark. Most people who share a
          yard with one have never seen it.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">A ghost in the suburbs</h2>
          <p>
            The Eastern Screech Owl (<em>Megascops asio</em>) is eight inches
            tall and weighs between 4.3 and 8.6 ounces — roughly the weight of
            a large apple. It is strictly nocturnal, virtually silent for most
            of the year, and cryptically colored in either rufous red or gray —
            two color morphs that blend perfectly into the bark of the trees
            they roost in. On a winter afternoon, a Screech Owl sitting at the
            entrance to a tree cavity looks indistinguishable from a knot of
            wood. They are common across the entire eastern United States, yet
            they are among the least-observed birds in the country.
          </p>
          <p>
            They hunt by listening. From a perch at a woodland edge — or a
            suburban oak — they detect the rustle of a mouse, the movement of a
            cricket, the surface disturbance of a crayfish at a stream edge.
            They drop in near silence, a feature of owl flight enabled by
            comb-like serrations on the leading edge of their primary feathers
            that break up turbulence before it becomes audible. Their prey list
            is long: mice, voles, shrews, small birds, earthworms, crayfish,
            large insects, and occasionally small fish. They cache surplus prey
            in tree cavities for lean nights, returning to the same hollow the
            way a person returns to a pantry.
          </p>
          <p>
            Their name is a misnomer — the call they actually produce is a
            descending whinny and a long tremolo whistle, heard mainly in late
            winter and early spring as pairs reassert territory. For the rest of
            the year they are silent neighbors, present and hunting in yards
            where their owners have no idea an owl exists.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">38 percent gone since 1970</h2>
          <p>
            The Eastern Screech Owl is not listed as endangered, which makes its
            population trajectory easy to overlook. Partners in Flight estimates
            a 38 percent decline in North American breeding populations since
            1970. The Breeding Bird Survey shows consistent negative trends
            across most of the species' range. A bird that was common in 1970 is
            measurably less common today — and it is not recovering.
          </p>
          <p>
            The causes are familiar: habitat loss, fragmentation, and pesticides.
            Screech Owls depend on tree cavities for nesting — natural cavities
            in old hardwoods that take decades to form. As mature trees are
            removed from yards, suburbs are cleared before development, and
            dead snags are cut down for tidiness, the cavity supply shrinks.
            European Starlings and House Sparrows compete aggressively for the
            remaining openings.
          </p>
          <p>
            But the most acute documented threat in suburban environments is
            rodenticide secondary poisoning. When a mouse or vole consumes
            anticoagulant rodent poison — the kind sold in hardware stores and
            used by pest control companies — it does not die immediately. It
            continues moving for hours or days, bioaccumulating the toxin in
            its tissues. When a Screech Owl eats that mouse, it ingests the
            accumulated poison. A 2023 study in{' '}
            <em>Science of the Total Environment</em> found anticoagulant
            rodenticides in 96 percent of tested raptors from suburban
            landscapes. Screech Owls eat rodents for a living. In neighborhoods
            with active rodenticide use, they are being silently eliminated by
            the very tool homeowners use to control the prey the owl needs.
          </p>
        </section>

        <section aria-labelledby="habitat-heading">
          <h2 id="habitat-heading">What they need from a yard</h2>
          <p>
            Eastern Screech Owls are habitat generalists — they survive in
            woodland edges, suburban parks, mature residential lots, stream
            corridors, and rural farmland. What they cannot substitute is the
            combination of nest cavities and prey density. A yard without cavity
            structures gives them nowhere to breed. A yard where pesticides have
            eliminated the insect and small-rodent base gives them nothing to
            hunt.
          </p>
          <p>
            They are among the most willing cavity nesters in North America to
            use nest boxes. Screech Owl boxes have been occupied within weeks of
            installation in areas where owls are present. The dimensions are
            specific: 8-by-8-inch interior floor, 16 inches deep, 3-inch
            entrance hole. Placement matters — boxes mounted 10 to 30 feet high
            on a tree trunk or post, with partial shade and near edge habitat,
            are colonized most reliably. The owl will use the box for year-round
            roosting, not just for spring nesting.
          </p>
          <p>
            Artificial light at night is a meaningful deterrent. Screech Owls
            avoid bright illumination while hunting — it disrupts prey detection
            and exposes the owl to Great Horned Owls and Red-tailed Hawks that
            will kill them. A yard with motion-activated lighting used only when
            needed is dramatically more hospitable than a yard with all-night
            illumination near trees and shrub edges.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that support Eastern Screech Owls</h2>
          <ol className="step-list">
            <li>
              <strong>Install a nest box.</strong>{' '}
              An 8-by-8-inch interior box with a 3-inch entrance hole, mounted
              10 to 30 feet high, gives a Screech Owl a place to breed and roost
              year-round. In suburban areas with resident owl populations, a
              correctly placed box has roughly a 50 percent chance of occupancy
              within two years. Install in late summer or fall so the box
              weathers and becomes familiar before spring nesting begins. Mount
              on a tree or post — not a building wall in direct sun, which
              overheats the interior.
            </li>
            <li>
              <strong>Stop using rodenticides.</strong>{' '}
              Anticoagulant rodent poisons kill the predators that control
              rodents — owls, hawks, and foxes far more effective at long-term
              rodent management than any poison. A Screech Owl pair hunting a
              quarter-acre lot removes dozens of rodents per month. Poison
              removes the owl. Snap traps, exclusion, and habitat modification
              control rodents without entering the food chain and killing the
              predator that does the work for free.
            </li>
            <li>
              <strong>Keep mature trees and plant native understory.</strong>{' '}
              Natural tree cavities form in old hardwoods — oaks, maples, and
              beeches — that take 50 to 100 years to develop the heartwood decay
              that creates nesting voids. Every mature tree removed eliminates
              cavity habitat that takes generations to replace. Native understory
              plants — serviceberry, elderberry, native dogwoods — support the
              insects and small prey that Screech Owls hunt.
            </li>
            <li>
              <strong>Reduce light pollution near foraging areas.</strong>{' '}
              Switch outdoor lights to warm-spectrum LEDs, use motion activation,
              and avoid all-night illumination near trees and shrub edges where
              owls hunt. A dark, prey-rich edge is what a Screech Owl is looking
              for. The owl does not know what a yard is — it knows whether the
              edge it is hunting has enough darkness and prey density to be worth
              returning to each night.
            </li>
          </ol>
        </div>

        <section aria-labelledby="night-heading">
          <h2 id="night-heading">The owl you already have</h2>
          <p>
            Eastern Screech Owls are not wilderness species. They live in the
            same neighborhoods as the people reading this page. They roost in
            the ornamental arborvitae. They hunt along the fence line. They
            raise young in the old oak that leans over the garage. They have
            adapted to every change in the suburban landscape — except the ones
            that removed cavities, eliminated prey, and replaced darkness with
            permanent light.
          </p>
          <p>
            A nest box takes an afternoon to install. Stopping rodenticide use
            is a single decision. Leaving mature trees standing is a default,
            not an action. The owl already in your neighborhood — the one that
            has been hunting your yard for years without your knowing — can raise
            young there next spring if those three things are in place. The
            barrier is not effort. It is knowing the owl is there.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build the habitat Screech Owls depend on.</strong>{' '}
            Eliminate pesticides and rodenticides with the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , restore prey habitat with{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-transformation')}>
              From Lawn to Habitat
            </button>
            , and add the native plants that feed the insects owls hunt with{' '}
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
