import type { Page } from '../App'

interface OvenbirdProps {
  onNavigate: (page: Page) => void
}

export default function Ovenbird({ onNavigate }: OvenbirdProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Ovenbird_RWD2.jpg"
          alt="Ovenbird standing on a mossy log, facing right — olive-brown back, white breast heavily streaked with dark brown, orange crown stripe bordered by two black stripes visible on top of the head"
          className="species-hero-image"
          style={{ objectPosition: 'center 30%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Dick Daniels&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Ovenbird_RWD2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Ovenbird</h1>
        <p className="hero__lead">
          A warbler that walks the forest floor, calls louder than anything else in the
          woods, and builds a domed nest invisible in the leaf litter — one that cannot
          move when the mower comes through. Down 52% since 1966. The line where your
          lawn meets the trees is where the problem begins.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">A nest built inside the leaf litter, not on top of it</h2>
          <p>
            The ovenbird (<em>Seiurus aurocapilla</em>) belongs to the wood-warbler
            family despite looking nothing like one. Where most warblers glean insects
            from branches overhead, the ovenbird walks — does not hop — across the
            forest floor, turning over dead leaves with its bill and picking up beetles,
            earthworms, pill bugs, and snails from the duff layer beneath.
          </p>
          <p>
            The crown has three stripes: a broad orange-rust band down the center,
            bordered on each side by a narrower black line. The back is olive-brown,
            the chest white with dense dark streaking — a pattern that reads as forest-floor
            shadow when the bird stands still. The orange crown is often half-hidden
            unless the bird raises it in alarm or display.
          </p>
          <p>
            The nest is on the ground, inside the leaf litter. The female carries grass
            stems, rootlets, dead leaves, and bark fiber and weaves them into a domed
            structure roughly the size of a softball, with a low side entrance that opens
            toward the ground. She then covers the outside with additional dead leaves
            from the surrounding forest floor, matching the texture and color of the duff
            so precisely that a person can walk within two feet of a nest and not see it.
            Nineteenth-century naturalists named the bird for this nest: the curved roof
            and side door resemble the clay ovens Dutch colonists used to bake bread.
          </p>
          <p>
            The call is "teacher teacher teacher teacher teacher," each repetition louder
            than the last, audible from over 200 meters in still air. The male sings from
            low perches or from the ground itself, sometimes for hours through a May morning.
            In a patch of mature forest with a breeding pair, the call dominates everything else.
          </p>
        </section>

        <section aria-labelledby="cowbird-heading">
          <h2 id="cowbird-heading">The cowbird waits at every edge you mow to</h2>
          <p>
            Brown-headed cowbirds do not build nests. The female finds other birds&apos;
            active nests, watches from a nearby perch until the owners leave, flies in,
            removes one host egg, and lays one of her own in under 60 seconds. The host
            raises the cowbird chick, which hatches a day earlier than ovenbird nestlings
            and grows faster, outcompeting or displacing the host&apos;s own young.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Ovenbird%281%29.jpg"
              alt="Ovenbird standing on the forest floor among dead leaves, showing the streaked breast and walking posture — the bird is low to the ground, feet slightly spread, mid-step"
              loading="lazy"
            />
            <figcaption>
              The ovenbird walks rather than hops, picking through the duff layer for
              earthworms, snails, and insects. This ground-level life — foraging on the
              forest floor, nesting in the leaf litter — is also what makes the bird most
              exposed to mowing at the treeline, autumn raking, and the cowbirds that
              patrol from every mowed edge.
              <span className="photo-credit"> Photo: Mdf · <a href="https://commons.wikimedia.org/wiki/File:Ovenbird(1).jpg" target="_blank" rel="noopener noreferrer">Public Domain</a> via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Cowbirds are edge specialists. They forage in open areas — lawns, pastures,
            roadsides — and patrol into adjacent woodland from those openings to look for
            host nests. In unbroken forest interior, more than 150 meters from the nearest
            edge, cowbird parasitism of ovenbird nests runs 5 to 10 percent. In fragmented
            suburban forest, where edges occur every few hundred feet, parasitism rates
            reach 60 to 70 percent.
          </p>
          <p>
            A lawn mowed to the treeline gives cowbirds a staging area immediately
            adjacent to ovenbird nesting territory. A buffer of tall grass, shrubs, and
            undisturbed leaf litter 15 to 20 feet wide between the lawn edge and the
            forest pulls the cowbird&apos;s entry point back from the nesting area and
            reduces how far it can efficiently patrol into the interior. The nest
            does not move. The edge does.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">52% gone — forest patches too small to hold interior</h2>
          <p>
            North American Breeding Bird Survey data shows a 52 percent decline in
            ovenbird numbers from 1966 to the present. The steepest drops run through
            the mid-Atlantic and Great Lakes regions — areas where woodlands exist as
            isolated fragments surrounded by residential and agricultural land.
          </p>
          <p>
            Forest fragmentation removes interior. An ovenbird pair requires a patch of
            contiguous forest large enough to put their nest more than 100 meters from
            any edge. Researchers estimate the minimum territory size at 5 to 20 acres
            of unbroken canopy, depending on how much surrounding development contributes
            to the edge effect. Most suburban woodlots fall below this threshold. The
            trees are there. The interior is not.
          </p>
          <p>
            Acid rain, which peaked across the northeastern United States in the 1970s
            and 1980s, leached calcium from forest soils and collapsed snail populations
            across large areas of the Appalachians. Snails and the calcium-rich
            invertebrates in the duff layer are a primary food source for breeding
            ovenbirds and the shell material their nestlings need for bone development.
            Experiments adding calcium back to depleted soils through lime application
            have increased ovenbird territory density in treated plots — evidence that
            soil chemistry reaches from the ground into the nest.
          </p>
        </section>

        <section aria-labelledby="actions-heading">
          <h2 id="actions-heading">Four things that widen or narrow the edge</h2>
          <ul className="actions-list">
            <li>
              <strong>Leave a buffer at the treeline.</strong> A strip of unmowed grass,
              shrubs, and undisturbed leaf litter 15 to 20 feet wide between the lawn and
              the forest edge narrows the cowbird staging area and leaves the duff layer
              intact where ground-nesting birds require it. Mow it once in early spring if
              needed for access, then leave it until after July.
            </li>
            <li>
              <strong>Don&apos;t rake under trees in fall.</strong> The duff layer —
              matted dead leaves, decaying material, and the invertebrate community living
              inside it — is the resource ovenbirds and other ground-feeding birds work
              through all season. Autumn raking and leaf blowing removes it entirely.
              What it leaves behind is bare mineral soil with nothing in it.
            </li>
            <li>
              <strong>Keep cats indoors May through July.</strong> A ground-nesting bird
              that relies on camouflage rather than escape flight is taken by outdoor
              cats at higher rates than any tree-nesting species. Ovenbird adults sit
              motionless on the nest until a predator is within one or two steps. An
              outdoor cat working a forest edge during breeding season will find it.
            </li>
            <li>
              <strong>Stop applying grub-control products and broad-spectrum insecticides within 20 feet of the treeline.</strong>{' '}
              Ovenbirds forage for earthworms, beetle larvae, snails, and ants from the duff
              layer at the forest edge. Grub-control products containing imidacloprid — the most
              widely sold residential lawn treatment — are water-soluble and move laterally
              through the soil into the adjacent forest floor. Earthworm populations in areas
              treated with imidacloprid drop measurably within weeks of application. The buffer
              zone you leave unmowed should also receive no pesticide applications. See the full
              picture at the{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticides &amp; Your Habitat guide
              </button>
              .
            </li>
          </ul>

          <figure className="species-content-photo species-content-photo--center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Ovenbird_by_Dan_Pancamo.jpg/960px-Ovenbird_by_Dan_Pancamo.jpg"
              alt="Ovenbird in leaf litter on the forest floor, surrounded by dead leaves and debris — the natural habitat where it both nests and forages"
              loading="lazy"
            />
            <figcaption>
              The ovenbird spends most of its life within two feet of the ground. It nests
              on the ground, forages on the ground, and during breeding season rarely
              flies further than one low perch to the next. A lawn that runs to the treeline
              is not a yard with a forest edge — it is a yard with a cowbird patrol route
              running directly to the ovenbird&apos;s nest.
              <span className="photo-credit"> Photo: Dan Pancamo · <a href="https://commons.wikimedia.org/wiki/File:Ovenbird_by_Dan_Pancamo.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a> via Wikimedia Commons</span>
            </figcaption>
          </figure>
        </section>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Other species working the same forest floor</h2>
          <p>
            The ovenbird shares its dependence on mature forest interior and intact duff
            with several other ground-associated species. The buffer at the treeline, the
            leaf litter left in fall, the cats kept inside — each one helps more than
            one bird.
          </p>
          <ul className="species-connections">
            <li>
              <button className="link-button" onClick={() => onNavigate('wood-thrush')}>
                Wood Thrush
              </button>
              {' '} — ground feeder in mature forest interior; same cowbird parasitism
              pressures, same sensitivity to fragmentation, down 62% since 1966.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('hermit-thrush')}>
                Hermit Thrush
              </button>
              {' '} — forages in leaf litter for the same invertebrates; overwinters in
              the southeastern US where the ovenbird winters; both need the duff intact.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('eastern-wood-pewee')}>
                Eastern Wood-Pewee
              </button>
              {' '} — aerial insectivore hunting above the forest floor the ovenbird walks;
              same mature-forest interior habitat, same fragmentation pressures.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('scarlet-tanager')}>
                Scarlet Tanager
              </button>
              {' '} — requires intact forest canopy above the same ground the ovenbird
              uses; both disappear from fragments below 10 acres.
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The leaf layer the ovenbird walks is the same layer firefly larvae, box turtle hatchlings, and fritillary caterpillars depend on through winter.</strong>{' '}
            Read why autumn raking affects a dozen species simultaneously at{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
