import type { Page } from '../App'

interface AmericanKestrelProps {
  onNavigate: (page: Page) => void
}

export default function AmericanKestrel({ onNavigate }: AmericanKestrelProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Falco-sparverius-001.jpg/960px-Falco-sparverius-001.jpg"
          alt="Male American kestrel perched on a branch, showing slate-blue wings, russet back and tail, white cheek with two bold black mustache marks — North America's smallest falcon and one of the most colorful birds on the continent, now down 47 percent from its 1966 population"
          className="species-hero-image"
          style={{ objectPosition: 'center 30%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Simon Pierre Barrette&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Falco-sparverius-001.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Kestrel</h1>
        <p className="hero__lead">
          Perched on a telephone wire at the edge of a field, the American Kestrel looks like
          someone painted a bird with a fine brush — russet and slate-blue, black-masked, the
          size of a robin but carrying the bearing of a predator. It is North America&apos;s
          smallest falcon, and it has been sitting on those wires and fence posts in the margins
          of suburban life for decades. The population has fallen 47 percent since 1966. Most
          people who grew up in rural or suburban areas noticed it without knowing its name.
          Many have stopped noticing because the birds are no longer there.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">A falcon built for open ground</h2>
          <p>
            Despite its small size, the American Kestrel is a true falcon — <em>Falco
            sparverius</em> — in the same family as the Peregrine Falcon and Merlin. The
            male&apos;s plumage is unmistakable: slate-blue wings contrast sharply with a
            russet back and tail, the white face carries two bold vertical black mustache
            marks (called malar stripes), and a single black spot marks each side of the head
            behind the eye. The female is streaked russet-brown overall, with the same facial
            markings. The two sexes look so different that early ornithologists classified
            them as separate species. At 9 to 12 inches from bill to tail, it weighs about as
            much as a golf ball — roughly 4 ounces.
          </p>
          <p>
            The kestrel&apos;s most distinctive behavior is hovering. When hunting, it faces
            into the wind, beats its wings in a rapid shallow stroke, and holds itself
            perfectly stationary 20 to 30 feet above the ground while scanning below. The
            hover lasts 10 to 30 seconds before the bird drops to a lower altitude or dives
            at prey. No other North American falcon uses this technique as consistently. The
            vision that makes it possible is also extraordinary: kestrels can see into the
            ultraviolet spectrum, and vole urine fluoresces UV-bright. A hunting kestrel
            reads the landscape for urine trails, following fresh runs through grass to their
            source — a detection system invisible to human eyes, written in light.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/AmericanKestrel02.jpg/960px-AmericanKestrel02.jpg"
              alt="Female American kestrel perched in the open showing streaked russet-brown plumage — the female's heavily barred pattern provides camouflage during the long weeks she incubates eggs alone in a tree cavity"
              loading="lazy"
            />
            <figcaption>
              A female American Kestrel. Females incubate the 4 to 6 eggs alone for 30 days
              while the male brings food. The clutch is laid directly on the cavity floor —
              kestrels carry no nesting material. The rufous-brown barring that looks plain
              from a distance resolves up close into remarkably fine detail, a product of the
              same pressure that gives many ground-nesting and cavity birds cryptic resting
              plumage. Pairs often return to the same cavity in consecutive years.
              <span className="photo-credit"> Photo: Steve Hillebrand&nbsp;·&nbsp;USFWS&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:AmericanKestrel02.jpg" target="_blank" rel="noopener noreferrer">Public Domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            During summer, kestrels eat primarily large insects — grasshoppers and crickets
            above all, supplemented by beetles, dragonflies, and cicadas. A foraging kestrel
            in a productive grassland may catch and eat 4 to 6 grasshoppers per hour. In late
            summer through winter, when insect prey crashes, the diet shifts to small mammals —
            primarily meadow voles and deer mice — along with small lizards and, occasionally,
            small birds caught in midair. Prey is carried to a perch and consumed or cached
            in vegetation for later retrieval.
          </p>
          <p>
            Nesting requires a cavity. Kestrels cannot excavate their own holes and depend
            entirely on spaces made by others: abandoned woodpecker excavations, natural tree
            hollows created by decay, rock crevices, and cavities in buildings and bridge
            structures. They readily accept nest boxes built to the right specifications.
            The clutch of 4 to 6 eggs is laid directly on whatever material already lines
            the cavity — wood chips, sawdust, or bare wood. Incubation takes 30 days.
            The chicks fledge at 28 to 31 days but remain dependent on the adults for
            feeding for several more weeks before dispersing.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">Losing ground on two fronts at once</h2>
          <p>
            The North American Breeding Bird Survey shows an American Kestrel population
            decline of approximately 47 percent between 1966 and the present. The American
            Kestrel Partnership, which manages more than 1,400 monitored nest boxes across
            the continent, documents steepest declines in eastern North America — in some
            states and provinces, local populations have fallen 60 to 80 percent over the
            same period. The kestrel has been added to the Partners in Flight Watch List and
            several state-level species of special concern lists. The decline is accelerating
            in areas where it was already severe.
          </p>
          <p>
            Two primary forces are driving the decline simultaneously. The first is habitat.
            Kestrels require open terrain for hunting — meadows, grasslands, fallow fields,
            roadsides, agricultural edges, and any unmanaged area that supports the dense
            grasshopper and vole populations they depend on. This is the same habitat that
            has been eliminated across eastern North America at rates exceeding 99 percent
            of original extent. The second is nest sites. Kestrels depend on tree cavities
            that were once abundant in hedgerows, woodlot edges, and old orchard trees —
            exactly the structures removed when fields are consolidated, roadsides are
            cleared, and suburban landscaping replaces agricultural margins.
          </p>
          <p>
            The European Starling, introduced to North America in 1890, directly competes
            with kestrels for cavity nest sites. Starlings are larger, earlier-nesting, and
            aggressive — pairs will evict kestrels from any cavity the starling decides to
            claim. In areas with high starling densities, unguarded kestrel nest boxes are
            frequently taken over before the kestrels return in spring. The same nest box
            competition affects Eastern Bluebirds and other cavity nesters; it is not
            coincidental that bluebird recovery programs and kestrel recovery programs use
            nearly identical management approaches.
          </p>
          <p>
            Rodenticide contamination adds a third pressure. Kestrels hunting voles in
            suburban and agricultural margins consume rodents that have ingested second-generation
            anticoagulant rodenticides from bait stations. Studies of rehabilitated and
            found-dead kestrels in multiple northeastern states found anticoagulant residues
            in 50 to 80 percent of individuals tested. Birds that do not die acutely from
            rodenticide exposure develop impaired coagulation — they bleed from minor injuries
            and are more likely to die from the physical demands of migration, territorial
            fighting, and chick rearing.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>A nest box at the meadow edge, no bait stations, and at least half an acre of uncut ground</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/American_Kestrel_Nest_Box.jpg/960px-American_Kestrel_Nest_Box.jpg"
              alt="American kestrel nest box mounted on a wooden post in an open field — a simple wooden box with a 3-inch entrance hole replaces the tree cavities that have been lost across most of the kestrel's former range"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/American_kestrel_%28Falco_sparverius%29_-_Breeding_pair.jpg/960px-American_kestrel_%28Falco_sparverius%29_-_Breeding_pair.jpg'
              }}
            />
            <figcaption>
              A kestrel nest box installed at the edge of an open field. The standard
              specification from the American Kestrel Partnership: 9&Prime;&times;9&Prime;
              interior floor, 12 inches of depth below the entrance, a 3-inch circular hole
              placed 9 inches above the floor, 1 to 2 inches of clean wood shavings on the
              floor, and no perch peg below the hole (perch pegs give starlings an advantage).
              Mount it 10 to 30 feet high on a pole or dead tree, facing away from prevailing
              storms, at the edge of open hunting ground at least half an acre in extent.
              <span className="photo-credit"> American Kestrel Partnership / Public Domain</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Install a kestrel nest box at the edge of open ground.</strong>{' '}
              A properly built and placed nest box directly replaces the lost tree cavities
              that are the primary nesting bottleneck in most of the kestrel&apos;s range.
              The American Kestrel Partnership provides free building plans at
              kestrel.msi.umt.edu — the specifications are simple enough for a single
              afternoon of woodworking. Mount the box on a pole (not a tree, where predators
              climb easily) 10 to 30 feet high, facing any direction except directly into
              prevailing storms, within sight of at least half an acre of open, minimally-mowed
              ground. Monitor it each spring: if starlings begin nesting before kestrels
              return, remove the starling nest (starlings are an invasive species with no
              federal protection); the kestrels may still claim the box after the starlings
              are displaced. Report your nest box data to the American Kestrel Partnership
              for use in the continent-wide population study.
            </li>
            <li>
              <strong>Maintain open hunting territory — including unmowed areas and edge perches.</strong>{' '}
              Kestrels scan from elevated perches before diving. A lone dead tree, a wooden
              fence post, a utility wire at the field edge — any prominent perch near open
              ground functions as hunting infrastructure. If you have a field margin, a rain
              garden with tall native grass, or a stretch of unmowed lawn edge, let it grow.
              Even a half-acre of tall grass and native meadow plants builds the grasshopper
              and vole populations that support kestrels. Combine a nest box with a native
              meadow planting at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>{' '}
              and you have addressed both the nesting and hunting habitat deficits simultaneously.
            </li>
            <li>
              <strong>Eliminate rodenticide bait stations from your property.</strong>{' '}
              Second-generation anticoagulant rodenticides — brodifacoum, bromadiolone,
              difethialone — are present in 50 to 80 percent of kestrels sampled in the
              northeastern United States. Every bait station placed for mice or voles in
              suburban yards is a potential source of sub-lethal or lethal rodenticide
              for kestrels, owls, and hawks hunting the same area. Snap traps placed in
              enclosed bait stations physically prevent non-target species from reaching
              the mechanism while eliminating rodents without secondary poisoning risk.
              Read the full analysis of rodenticide alternatives at the{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticides &amp; Your Habitat guide
              </button>
              .
            </li>
            <li>
              <strong>Participate in citizen science monitoring.</strong>{' '}
              The American Kestrel Partnership&apos;s nest box monitoring program is one of
              the most productive citizen science datasets in North American raptor biology.
              Installing and monitoring a nest box generates data on clutch size, fledgling
              count, and occupancy trends that feed directly into population modeling.
              Reporting kestrel sightings through eBird and iNaturalist during breeding
              season helps document presence in areas not covered by fixed monitoring routes,
              particularly in suburban and exurban habitats where BBS transects are sparse.
              The combination of nest box data and point-count observations is currently
              the primary tool researchers use to distinguish local decline from range
              contraction across the species&apos; eastern strongholds.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The cavity nesters your yard has room for</h2>
          <p>
            The American Kestrel and the{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-bluebird')}>
              Eastern Bluebird
            </button>{' '}
            share the same adversary. Both are native cavity nesters whose nest sites were
            taken over by European Starlings after starling populations expanded across
            North America through the 20th century. Both species reversed local declines
            where people systematically installed and monitored nest boxes designed to
            exclude starlings — a 1.5-inch hole for bluebirds, a 3-inch hole for kestrels.
            The lesson from bluebird recovery applies directly to kestrel conservation:
            the limiting factor in the suburban and agricultural landscape is nest sites,
            not food, and that factor is addressable at the scale of an individual yard.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('red-tailed-hawk')}>
              Red-tailed Hawk
            </button>{' '}
            faces the same rodenticide accumulation pathway. Both species hunt small mammals
            in the same suburban and agricultural margins where anticoagulant bait stations
            are concentrated. Both arrive at prey that has already ingested a sublethal dose.
            Eliminating rodenticide bait stations from a property reduces the contamination
            burden for every rodent-hunting raptor using the surrounding half-mile — not just
            the species you happen to see most often.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('american-bumble-bee')}>
              American Bumble Bee
            </button>{' '}
            and the kestrel share the same habitat requirement at opposite ends of the food
            web. Both depend on native grassland and meadow structure — the bumble bee for
            nesting in undisturbed ground and foraging on native wildflowers, the kestrel
            for the grasshopper and vole populations that native meadow sustains. A half-acre
            of native meadow planting — little bluestem, Indian grass, native coneflowers,
            prairie dropseed — supports both the pollinator community the bumble bee needs
            and the prey base the kestrel hunts. The same action, directed at the same
            half-acre of ground, supports the two ends of the food web simultaneously.
          </p>
          <p>
            The Eastern Screech Owl uses a similarly sized cavity — a 3-inch nest box
            entrance also fits the screech owl&apos;s needs, though{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-screech-owl')}>
              Eastern Screech Owl
            </button>{' '}
            boxes are typically mounted lower in tree cover rather than on open poles. In
            a yard with both open grassland and mature tree canopy, installing a kestrel
            box at the meadow edge and a screech owl box in the tree line creates nesting
            habitat for two native cavity-nesting raptors from the same afternoon of work.
          </p>
          <p>
            The natural supply of 3-inch cavities across eastern North America comes almost
            entirely from the{' '}
            <button className="link-button" onClick={() => onNavigate('northern-flicker')}>
              Northern Flicker
            </button>
            . The Flicker excavates a new hole each spring and abandons it in July. Where
            suburban dead-wood removal has eliminated Flicker excavations, a kestrel nest
            box is the replacement. Where a standing dead snag and a resident Flicker pair
            remain, the kestrel may not need one.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build the open habitat and nest infrastructure that cavity nesters depend on.</strong>{' '}
            Find native meadow plants at{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , understand the full transformation from turf to grassland at{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-transformation')}>
              From Lawn to Habitat
            </button>
            , and explore every other species using your landscape in the{' '}
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
