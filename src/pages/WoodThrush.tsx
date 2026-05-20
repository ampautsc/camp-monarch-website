import type { Page } from '../App'

interface WoodThrushProps {
  onNavigate: (page: Page) => void
}

export default function WoodThrush({ onNavigate }: WoodThrushProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Wood_thrush_%28Hylocichla_mustelina%29_Peten.jpg"
          alt="Wood Thrush singing from a shaded forest interior, chest spots visible — its flute-like song is an indicator of forest health"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Charles J. Sharp · <a href="https://commons.wikimedia.org/wiki/File:Wood_thrush_(Hylocichla_mustelina)_Peten.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons */}
          Photo: Charles J. Sharp&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Wood_thrush_(Hylocichla_mustelina)_Peten.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Wood Thrush</h1>
        <p className="hero__lead">
          The Wood Thrush sings two notes simultaneously — each produced by a
          separate chamber in its throat — and braids them into something that
          sounds like a flute playing in a cathedral. Most people who grew up
          near a forest edge remember hearing it. Most have noticed, without
          quite knowing why, that it has gone quiet.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="song-heading">
          <h2 id="song-heading">The voice: two chambers, one song</h2>
          <p>
            The Wood Thrush (<em>Hylocichla mustelina</em>) is a medium-sized
            thrush — about 7.5 inches, slightly smaller than an American Robin,
            with a rusty-brown back, white breast heavily spotted in dark brown,
            and a large dark eye. It arrives from its wintering grounds in
            Central American lowland forests in late April or early May and
            immediately begins singing. The song is what most people recognize.
          </p>
          <p>
            Birds produce sound using a syrinx — a forked vocal organ at the
            base of the trachea. Most birds use both forks together. The Wood
            Thrush uses them independently, producing two simultaneous notes in
            different keys and modulating both in real time. What the listener
            hears as a single fluid melody is actually two voices performing in
            counterpoint — a musical structure that took human composers
            centuries to develop, executed automatically by a 1.5-ounce bird
            that learned it from its father.
          </p>
          <p>
            Males produce up to a dozen distinct phrase types and combine them
            in varied sequences across a dawn chorus that can last two hours.
            Females use the complexity and variety of a male&apos;s repertoire to
            evaluate his age, territory quality, and fitness. A male with a
            large repertoire has survived multiple migrations — which predicts
            territory and foraging quality. The song is not decoration; it is
            a biological résumé.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">62% gone: what happened to the forest flute</h2>
          <p>
            The North American Breeding Bird Survey, which has tracked breeding
            bird populations since 1966, shows a 62% decline in Wood Thrush
            across its range through 2019. In some states, declines exceed 80%.
            The species is still findable by a birder in the right habitat, but
            the baseline has shifted so dramatically that most Americans have no
            reference point for what &ldquo;common&rdquo; once meant.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Wood_Thrush.jpg"
                  alt="Wood Thrush perched in forest understory — spotted breast and russet back visible, the quintessential deep-woods songbird"
                  loading="lazy"
                />
                <figcaption>
                  The Wood Thrush nests in forest interior — not edge, not suburb, not a yard with scattered trees. A breeding pair requires roughly two acres of continuous canopy. Forest fragmentation forces pairs into edge habitat where Brown-headed Cowbirds parasitize their nests at rates approaching 80% in fragmented landscapes.
                  <span className="photo-credit"> Photo: Wildreturn · <a href="https://commons.wikimedia.org/wiki/File:Wood_Thrush.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            Three forces drive the decline.
          </p>
          <p>
            The first is forest fragmentation. The Wood Thrush is an
            area-sensitive species: it needs large blocks of continuous forest
            to breed successfully. In fragmented forest patches, it encounters
            the brown-headed cowbird — a brood parasite that lays its eggs in
            other birds&apos; nests and lets them raise its offspring. Cowbirds
            follow forest edges, and a fragmented landscape is almost entirely
            edge. In heavily fragmented areas, cowbirds parasitize 30 to 50%
            of Wood Thrush nests. The thrush incubates the cowbird egg, hatches
            a cowbird chick, and feeds it — often to the exclusion of its own
            young, which are outcompeted by the larger cowbird nestling. A
            breeding pair in fragmented forest may produce fewer than 0.5
            fledglings per season. A pair in interior forest may produce 2 to 3.
          </p>
          <p>
            The second is caterpillar collapse. A Wood Thrush pair raising one
            brood needs 6,000 to 9,000 caterpillars over the breeding season.
            Yards and suburban forest patches dominated by non-native trees —
            Norway maple, Bradford pear — and invasive shrubs produce a
            fraction of the caterpillar biomass of native-dominated landscapes.
            A native oak supports 534 caterpillar species. Norway maple supports
            fewer than 10. The thrush cannot hunt what the trees don&apos;t grow.
          </p>
          <p>
            The third is winter habitat loss. The Wood Thrush winters in lowland
            tropical forests in southern Mexico and Central America — forests
            that have been dramatically reduced by agricultural expansion over
            the same decades that its breeding range has declined. Research
            using light-level geolocators shows that individual birds return to
            the same wintering territory each year. If that territory is cleared,
            the bird arrives on the breeding grounds later and lighter — with a
            measurable effect on breeding success.
          </p>
        </section>

        <section aria-labelledby="foraging-heading">
          <h2 id="foraging-heading">How it eats: leaf litter, caterpillars, and native fruit</h2>
          <p>
            The Wood Thrush forages almost entirely on the forest floor. It
            walks slowly through leaf litter, tossing leaves aside with a quick
            sideways flick of its bill, and snaps up the invertebrates
            underneath: earthworms, beetles, millipedes, spiders, ants, and —
            most critically in breeding season — soft-bodied caterpillars.
            Caterpillars are the highest-value food item because they are
            high-calorie, soft-bodied, and abundant in native forest in spring
            and early summer. They are what makes rapid nestling growth possible.
          </p>
          <p>
            In late summer and fall, the Wood Thrush shifts to native berries —
            spicebush, serviceberry, native dogwood, and wild grape — for the
            fat reserves that fuel migration. Spicebush (<em>Lindera benzoin</em>)
            is particularly important: its lipid-rich berries ripen just as fall
            migration begins, and research has shown that thrushes in good
            spicebush habitat depart in better condition and arrive at wintering
            grounds with more fat reserves than birds from areas without it.
          </p>
          <p>
            A Wood Thrush foraging in your yard needs leaf litter it can
            actually toss — not a blower-cleared substrate. It needs a shrub
            layer that hosts caterpillars in spring. It needs native fruit in
            late summer. And it needs no insecticides, because a single
            spray-service application eliminates the invertebrate community
            it depends on for weeks.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that support Wood Thrush</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Fallen_leaves.jpg" alt="Fallen autumn leaves creating forest floor habitat" loading="lazy" />
            <figcaption>
              Wood thrushes flip through surface leaf litter in a specific foraging motion, detecting earthworms and beetles by sound and touch. The deeper the litter layer, the richer the invertebrate community beneath it. Compacted bare soil under ornamental mulch produces nothing a thrush can use.
              <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;<a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant native understory trees and shrubs.</strong>{' '}
              The Wood Thrush&apos;s caterpillar supply depends directly on which
              trees are growing in and near your yard. Native oaks, cherries,
              serviceberries, and viburnums each host hundreds of caterpillar
              species. Native spicebush and dogwood provide critical fall
              migration fuel. Adding even one or two native trees or shrubs per
              season measurably expands the caterpillar habitat the thrush
              depends on. The &ldquo;Choose a Plant&rdquo; tool can match native species
              to your site conditions.
            </li>
            <li>
              <strong>Leave the leaf litter.</strong>{' '}
              A raked, bare yard is biologically empty to a Wood Thrush.
              Leaf litter is where it finds food: earthworms, beetles, spiders,
              and caterpillars overwintering in the duff. Leaving leaves in
              place under trees and shrubs — even partially — restores the
              foraging layer. Shredded leaves in beds also improve soil
              biology, which increases earthworm density directly.
            </li>
            <li>
              <strong>Remove invasive shrubs.</strong>{' '}
              Japanese barberry, burning bush, and Japanese honeysuckle form
              dense ground-level thickets that physically block Wood Thrush
              foraging and host negligible caterpillar populations compared to
              the native shrubs they displace. A yard with a dense barberry
              hedge produces less caterpillar biomass and less usable foraging
              substrate than the same yard with viburnum and spicebush.
              Removal is the highest-leverage single action for improving
              existing forest-edge habitat quality.
            </li>
            <li>
              <strong>Eliminate insecticides.</strong>{' '}
              Broad-spectrum insecticides — including mosquito spray services,
              grub treatments, and soil drenches — collapse the invertebrate
              community the Wood Thrush depends on. A single spray-service
              application eliminates flying insects for two to four weeks.
              Ground-applied systemics reduce beetle and earthworm populations
              for months. The thrush cannot hunt what the yard has killed.
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighborhood-heading">
          <h2 id="neighborhood-heading">Why your yard matters even without a forest</h2>
          <p>
            Most suburban yards are too small to support nesting Wood Thrush
            directly — the species needs larger connected forest for breeding.
            But that does not mean a suburban yard has no role. Wood Thrush use
            suburban habitat during migration — both spring arrival and fall
            departure — as refueling sites. The quality of that habitat affects
            how much fat they carry into the breeding season and how quickly
            they rebuild reserves after breeding.
          </p>
          <p>
            More importantly: suburban forest fragments are often connected,
            patch to patch, through corridors of yards and green spaces. The
            aggregate quality of those yards — how many native trees, how much
            leaf litter, how much caterpillar biomass — determines whether
            the forest patches function as connected breeding habitat or
            isolated islands. A neighborhood that collectively plants native
            trees and removes invasive shrubs across dozens of properties is
            creating forest interior in a way that no single yard can accomplish
            alone.
          </p>
          <p>
            The Wood Thrush does not know what a backyard is. It knows whether
            the forest is dense enough, the leaf litter thick enough, the
            caterpillars numerous enough to raise young. The cumulative
            decisions of homeowners along a forest edge determine what it finds.
          </p>
        </section>

        <section aria-labelledby="species-links-heading">
          <h2 id="species-links-heading">Who shares this habitat</h2>
          <p>
            The leaf litter and native shrub layer that Wood Thrush needs is
            the same habitat that supports firefly larvae, which overwinter in
            the duff. Eastern chipmunks cache seeds in the same layer. Spring
            peepers breed in the moist woodland pools the thrush uses during
            migration. American toads forage the same invertebrate community.
            A yard managed for Wood Thrush is a yard managed for all of them.
          </p>
          <ul>
            <li>
              <button className="link-button" onClick={() => onNavigate('fireflies')}>
                Fireflies
              </button>
              {' — '}Larvae overwinter in the same leaf litter Wood Thrush forages through.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('eastern-chipmunk')}>
                Eastern Chipmunk
              </button>
              {' — '}Uses the same moist forest floor; caches the same native shrub seeds.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('spring-peeper')}>
                Spring Peeper
              </button>
              {' — '}Breeds in the same moist woodland patches during Wood Thrush&apos;s arrival window.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('toad')}>
                American Toad
              </button>
              {' — '}Shares the invertebrate foraging niche on the forest floor.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('northern-mockingbird')}>
                Northern Mockingbird
              </button>
              {' — '}Carries Wood Thrush phrases in its song library for life. In areas where
              Wood Thrushes have been gone for twenty years, young mockingbirds never hear that
              phrase — the repertoire reflects the neighbor list, and the neighbor list has changed.
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to build Wood Thrush habitat?</strong>{' '}
            Start with native plants using{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , protect the foraging layer with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , and remove what doesn&apos;t belong with{' '}
            <button className="link-button" onClick={() => onNavigate('invasive-plants')}>
              Remove Invasive Plants
            </button>
            . See how the floor, shrub layer, and canopy a Wood Thrush needs simultaneously fit together as a spatial system in the{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-layers')}>
              Habitat Layers guide
            </button>
            .
          </p>
        </div>
      </div>
    </>
  )
}
