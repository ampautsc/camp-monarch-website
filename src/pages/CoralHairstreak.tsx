import type { Page } from '../App'

interface CoralHairstreakProps {
  onNavigate: (page: Page) => void
}

export default function CoralHairstreak({ onNavigate }: CoralHairstreakProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/210898298/large.jpg"
          alt="Coral Hairstreak butterfly perched with wings closed, showing the warm brown underside with a row of coral-orange spots along the lower hindwing edge and no tails at the hindwing rear corner"
          className="species-hero-image"
          style={{ objectPosition: 'center 45%' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/84512584/large.jpeg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: bevlynn99&nbsp;&middot;&nbsp;
          <a href="https://www.inaturalist.org/observations/124427843" target="_blank" rel="noopener noreferrer">CC BY-NC via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Butterflies</div>
        <h1>Every other hairstreak in the eastern United States carries two white-tipped tails at the hindwing rear corner — the Coral Hairstreak has none, and in their place a row of coral-orange spots runs along the lower hindwing edge where a predator reading the wing from the wrong end would look first.</h1>
        <p className="hero__lead">
          The Coral Hairstreak (<em>Satyrium titus</em>) is a small brown butterfly, wingspan
          just under an inch, that rests with wings pressed flat and closed. The upper wing
          surface is dark brown. The underside is warm brown, crossed by a faint white postmedian
          line, with a single row of coral to orange-red spots running along the entire lower
          hindwing edge. At the rear corner of the hindwing, where every related species carries
          a pair of thread-thin tails, the Coral Hairstreak has nothing — a blunt rear edge
          instead of the extended filaments that give the hairstreak family its name.
        </p>
        <p className="hero__lead">
          In late July or August, a female lays a single flat egg pressed against the bark of a
          wild plum or black cherry stem and leaves. That egg sits on the bark from August through
          the following May — through September, through every freeze of winter, through February
          ice, through the slow thaw of early spring — and hatches in May when the plum or cherry
          flower buds first begin to open. The egg spends roughly nine months on the bark. The
          entire flight season for the adults that laid those eggs lasted about six weeks.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="no-tails-heading">
          <h2 id="no-tails-heading">What the tails on a hairstreak do — and what the Coral Hairstreak does instead</h2>
          <p>
            Most hairstreaks in the genus <em>Satyrium</em> and in related genera operate a
            passive misdirection system at the hindwing rear corner. Two filament-thin tails —
            one longer, one shorter — extend past the wing edge and oscillate slightly when the
            butterfly moves. Beside the base of the tails sits an orange or blue eyespot. The
            combination reads as a second head: two antennae above an eye, positioned at the end
            of the wing that points away from the actual head. A bird that strikes at that corner
            contacts the detachable wing tip while the butterfly's body is a full wing length
            away.
          </p>
          <p>
            The Coral Hairstreak shed the tails. What it kept — and what no other eastern
            hairstreak has in the same configuration — is the row of coral spots spanning the
            full lower hindwing edge. Those spots sit at the same relative location where the
            eyespot on a tailed hairstreak sits, extended across more of the wing margin. Whether
            the coral row functions as a distributed distraction target or simply as leftover
            chemistry from the ancestral eyespot is not settled. What is measurable: specimens
            collected in late summer show hindwing damage along the coral-spot margin at higher
            rates than on the forewing, which suggests the spot row is doing something structural —
            drawing attacks — even without the tails to amplify it.
          </p>
        </section>

        <section aria-labelledby="egg-bark-heading">
          <h2 id="egg-bark-heading">The egg on the bark — nine months pressed against wild plum in August, then a caterpillar that feeds on flower buds in May</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/84512584/large.jpeg"
              alt="Coral Hairstreak butterfly at rest with wings fully closed, showing the warm brown underside, the row of coral-orange spots along the lower hindwing margin, and the blunt tailless rear corner of the hindwing"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/520374343/large.jpg'
              }}
            />
            <figcaption>
              The Coral Hairstreak at rest with wings closed. The row of coral-orange spots
              runs the full width of the lower hindwing edge. The rear corner is blunt and
              tailless — the most immediate field mark separating this species from the Gray
              Hairstreak, Eastern Tailed-Blue, and every other common hairstreak in the same
              eastern range.
              <span className="photo-credit"> geraldm &middot; CC BY-NC via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            Host plants are members of the genus <em>Prunus</em>: wild plum (<em>Prunus americana</em>),
            black cherry (<em>Prunus serotina</em>), chokecherry (<em>Prunus virginiana</em>), and
            Canada plum (<em>Prunus nigra</em>). A female in late July or August flies low along
            woody edges and presses her feet against stems and bark to identify the correct host.
            When she locates it, she lays one egg — a flattened disk roughly one millimeter
            across — pressed directly against the bark surface, not on a leaf or bud. Then she
            moves on.
          </p>
          <p>
            The egg stays on the bark through the entire winter. It does not enter a visible
            dormancy the way a chrysalis does — it simply waits, a compressed disk sealed against
            rough bark, surviving whatever temperature comes. Colder winters in the northern part
            of the range produce longer egg-on-bark intervals: an egg laid in Wisconsin in August
            may wait ten months before hatching. An egg laid in Virginia in late August may hatch
            in nine.
          </p>
          <p>
            When the egg hatches in May, the tiny caterpillar's first food is flower buds. The
            plum or cherry is just coming into bloom, and the caterpillar moves to the bud
            clusters and feeds there before the flowers fully open. As the season progresses,
            later-instar caterpillars feed on developing fruits as well. The caterpillar is pale
            green, matching the color of the young buds it feeds on, and is rarely noticed in
            the field without deliberate searching. By late June the caterpillar pupates in
            leaf litter at the base of the host tree. Adults emerge in late June or early July.
          </p>
        </section>

        <section aria-labelledby="dogbane-heading">
          <h2 id="dogbane-heading">Dogbane, butterfly weed, milkweed — the nectar plants adults concentrate on during a six-week flight window</h2>
          <p>
            The Coral Hairstreak produces one brood per year. Adults fly from late June through
            early August across most of the eastern United States, with peak numbers in July.
            The species is single-brooded even at the southern end of its range, where many
            related hairstreaks produce two or three generations in a season.
          </p>
          <p>
            Adult Coral Hairstreaks nectar with clear preference on dogbane (<em>Apocynum
            cannabinum</em>) and{' '}
            <button className="link-button" onClick={() => onNavigate('butterfly-weed')}>
              butterfly weed
            </button>
            {' '}(<em>Asclepias tuberosa</em>). In fields where both are present, adults
            concentrate on the flat-topped dogbane flower clusters, moving between individual
            florets with short hops. Milkweed species,{' '}
            <button className="link-button" onClick={() => onNavigate('wild-bergamot')}>
              wild bergamot
            </button>
            , and red clover also serve as nectar sources. Adults are most visible in July on
            warm days when dogbane and butterfly weed are both in bloom simultaneously.
          </p>
          <p>
            Males fly in rising loops above wild plum and black cherry thickets and along woody
            field edges, intercepting other males and patrolling for females. The patrol flight
            is low — typically below eye level — and rapid enough that the brown butterfly can
            be mistaken for a moth in quick movement. At rest, males perch on leaves in direct
            sun with wings closed. Both sexes are easier to find nectaring on dogbane than
            in flight.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Plant wild plum at the yard edge — one shrubby tree provides the host bark for egg-laying in August and the flower buds the hatched caterpillar needs the following May</h2>
          <ol className="step-list">
            <li>
              <strong>Plant wild plum (<em>Prunus americana</em>) at a sunny yard edge.</strong>{' '}
              Wild plum is a native shrub-to-small-tree that grows in full sun at woodland
              edges and fence lines. It tolerates poor soil, spreads by root suckers to form a
              small thicket over time, and flowers in early spring before its leaves emerge —
              the white flowers are among the first nectar sources of the year for native bees.
              A planting of two or three wild plum at a south-facing fence line provides the
              bark surface where female Coral Hairstreaks lay eggs in late July and the bud
              clusters the hatched caterpillars need in May.
            </li>
            <li>
              <strong>Leave existing black cherry trees at yard edges undisturbed.</strong>{' '}
              <button className="link-button" onClick={() => onNavigate('black-cherry')}>
                Black cherry
              </button>
              {' '}(<em>Prunus serotina</em>) is one of the most ecologically connected native
              trees in the eastern United States — a host for over 450 caterpillar species,
              including the Coral Hairstreak. A black cherry at the back corner of a yard,
              left with its lower branches intact, provides the bark surface for Coral Hairstreak
              eggs each August and, in fall, fruit that American Robins, Cedar Waxwings, and
              thrushes strip from the branches in a single afternoon.
            </li>
            <li>
              <strong>Plant{' '}
              <button className="link-button" onClick={() => onNavigate('butterfly-weed')}>
                butterfly weed
              </button>
              {' '}near the host planting for adult nectar.</strong>{' '}
              Butterfly weed (<em>Asclepias tuberosa</em>) flowers in July — the same six-week
              window as the Coral Hairstreak flight season. A patch planted within 50 feet of a
              wild plum or black cherry gives adults a reason to stay in the area and increases
              the probability that females locate the host bark when they are ready to lay eggs.
            </li>
            <li>
              <strong>Avoid spraying stone fruit trees in late July and August.</strong>{' '}
              Coral Hairstreak females are laying eggs on bark in late July and August. Those
              eggs are pressed directly against the bark surface and are not visible without a
              hand lens. Broad-spectrum insecticide applied to plum or cherry bark for scale or
              aphid management during late summer will contact eggs that appear to be bare bark.
              If pest management on stone fruit is needed, time applications before late July
              or after the adults finish flying in August.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who shares the wild plum thicket — the birds, insects, and butterflies connected through the same small native tree</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('black-cherry')}>
                Black Cherry
              </button>{' '}
              &mdash; a primary Coral Hairstreak host plant; a single mature black cherry in
              bloom in April carries the flower buds a Coral Hairstreak caterpillar will feed
              on in May, and the developing fruits that later instars use before pupating in
              late June; the same tree produces fall fruit for American Robins, Cedar Waxwings,
              and migratory thrushes
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('butterfly-weed')}>
                Butterfly Weed
              </button>{' '}
              &mdash; the adult Coral Hairstreak's primary nectar source during its six-week
              July flight window; a patch of butterfly weed within 50 feet of a wild plum
              keeps adults foraging in the area long enough for females to locate the host
              bark and lay
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('gray-hairstreak')}>
                Gray Hairstreak
              </button>{' '}
              &mdash; shares the same woodland-edge habitat and summer flight period; the Gray
              Hairstreak carries two white-tipped tails and uses over 200 host plant species;
              the Coral Hairstreak has no tails and uses only <em>Prunus</em>; both species
              nectar on the same milkweed and coneflower patches in July
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('eastern-tailed-blue')}>
                Eastern Tailed-Blue
              </button>{' '}
              &mdash; a small tailed butterfly that flies in the same open edges and garden
              beds where the Coral Hairstreak nectars in summer; the Eastern Tailed-Blue carries
              the full false-head structure — two tails and an orange spot — that the Coral
              Hairstreak abandoned; both species appear in July gardens at the same time
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('viceroy')}>
                Viceroy
              </button>{' '}
              &mdash; its caterpillar feeds on willow and poplar, but adults nectar on many of
              the same flowers as the Coral Hairstreak; both species are present in field edges
              with black cherry and wild plum in July; the Viceroy is roughly five times the
              wingspan of the Coral Hairstreak — easy to separate in the field but both may
              nectar on the same plant simultaneously
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The Coral Hairstreak's breeding season lasts six weeks in summer — the egg it lays in August waits nine months for the plum leaves to open.</strong>{' '}
            Wild plum and black cherry at a yard edge are the habitat it needs. Browse native
            woody plants in{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or see all the butterflies that use native trees as larval hosts in{' '}
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
