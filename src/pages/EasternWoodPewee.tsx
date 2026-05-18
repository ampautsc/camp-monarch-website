import type { Page } from '../App'

interface EasternWoodPeweeProps {
  onNavigate: (page: Page) => void
}

export default function EasternWoodPewee({ onNavigate }: EasternWoodPeweeProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Contopus_virens_-Eastern_Wood-Pewee_-_Canada.jpg/960px-Contopus_virens_-Eastern_Wood-Pewee_-_Canada.jpg"
          alt="Eastern Wood-Pewee perched on a bare dead branch against open sky — small olive-gray flycatcher with two pale wing bars, upright posture, and slightly peaked crown, motionless between sallying flights"
          className="species-hero-image"
          style={{ objectPosition: 'center 30%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Contopus_virens_-_Eastern_wood_pewee.jpg/960px-Contopus_virens_-_Eastern_wood_pewee.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Wikimedia Commons&nbsp;&middot;&nbsp;CC BY-SA 3.0
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Wood-Pewee</h1>
        <p className="hero__lead">
          From somewhere in the canopy — 40 feet up, invisible against the oak leaves — a long
          descending whistle slides down the scale: <em>pee-a-weeeee</em>. Three seconds of
          silence. Then it comes again from a slightly different branch. The Eastern Wood-Pewee
          calls all morning, through the heat of the afternoon, and into the evening. You hear
          it far more than you see it, because it hunts from the top of the canopy and almost
          never comes down.
        </p>
        <p className="hero__lead">
          <em>Contopus virens</em> is a flycatcher — it hunts entirely in the air, launching
          from a stationary perch to intercept a flying insect, then returning to the same
          branch to scan and launch again. Its entire foraging strategy depends on one specific
          structural feature of the landscape: dead branches at 20 to 50 feet, inside or at
          the edge of mature tree canopy, with unobstructed sight lines into the surrounding
          airspace.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="dead-branch-heading">
          <h2 id="dead-branch-heading">Dead wood at 30 feet — what the perch actually does</h2>
          <p>
            An Eastern Wood-Pewee hunts by sallying: it sits motionless on a perch, watching
            the airspace below and in front of it. When a flying insect crosses — a moth, a
            beetle, a fly — the pewee launches in a short curved arc, catches it in its slightly
            hooked bill, and returns to the same branch to begin watching again. The whole
            flight takes less than two seconds. The bird may repeat this dozens of times per
            hour from a single perch.
          </p>
          <p>
            Dead branches at 20 to 50 feet give the pewee two things a leafy branch cannot.
            First, an unobstructed sight line into the surrounding airspace — no foliage
            blocking the approach angles from any direction. Second, a clear launch path in
            any direction toward an intercept point below. A dead snag at that height is not
            where the pewee rests between meals. It is the instrument around which the bird's
            entire foraging geometry is organized.
          </p>
          <p>
            In fragmented suburban landscapes, dead snags at 30 to 50 feet are exactly what
            gets removed first — for aesthetics, or because a tree service flags all dead wood
            as a hazard. When the snag comes down, the pewee loses the perch that made the
            territory productive and has to find another. In a yard where every large tree has
            been cleaned of dead branches, there may be nothing left to find.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">37% fewer pewees — where that number points</h2>
          <p>
            USGS Breeding Bird Survey data shows Eastern Wood-Pewee populations have declined
            roughly 37% since 1966. The steepest losses are in the eastern United States,
            and they correlate with the loss of mature forest with complex canopy structure —
            large, old trees with dead branches and open understory.
          </p>
          <p>
            Young forests don't provide what pewees need. A 20-year-old stand has small-diameter
            trees and no dead snags at height. A yard with 60-year-old oaks and maples — trees
            that have had time to grow dead limbs, hollow pockets, and open crown structure —
            is the specific structural habitat that has become rare in the suburban landscape.
          </p>
          <p>
            Pesticide use compounds it. Pewees eat flying insects — flies, beetles, wasps, moths,
            ants. Research in Europe found a 76% decline in flying insect biomass over 27 years
            in monitored nature reserves. A pewee sitting on a dead branch over a pesticide-treated
            lawn is hunting a landscape where most of the prey has already been removed.
          </p>
        </section>

        <section aria-labelledby="nest-heading">
          <h2 id="nest-heading">Lichen on the outside — a nest that looks like a branch knot</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Contopus_virens_-_Eastern_wood_pewee.jpg/640px-Contopus_virens_-_Eastern_wood_pewee.jpg"
              alt="Eastern Wood-Pewee on a branch showing the two pale wing bars and olive-gray upperparts that distinguish it from the Eastern Phoebe, which has no wing bars"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Contopus_virens_-Eastern_Wood-Pewee_-_Canada.jpg/640px-Contopus_virens_-Eastern_Wood-Pewee_-_Canada.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              Two pale wing bars identify the pewee in the field. The Eastern Phoebe — a
              common confusion species — has none. The pewee also sits bolt upright and
              still between sallies; the phoebe bobs its tail continuously.
              <span className="photo-credit"> Photo: Wikimedia Commons / CC BY-SA 3.0</span>
            </figcaption>
          </figure>
          <p>
            Eastern Wood-Pewees build their nest on top of a horizontal branch — not in a
            cavity, not in a nestbox, not in a shrub. The female constructs a shallow open
            cup from grass, plant fibers, and bark strips, then covers the outside entirely
            with lichen flakes collected from nearby bark and attached with spider silk. The
            finished nest looks like a thickened knot on the branch. Most people walk under
            it all summer without knowing it is there.
          </p>
          <p>
            She lays 2 to 3 cream-colored eggs with a ring of brown speckles near the larger
            end and incubates them for 12 to 13 days. The nest sits at 20 to 40 feet — often
            above a small gap in the canopy, which gives the returning parents a clear landing
            approach and a sight line from which to watch for predators.
          </p>
          <p>
            Pewees raise one brood per year, and nesting starts unusually late — often not
            until mid-June. By August the adults and fledglings begin moving south toward
            wintering grounds in South America, crossing the Gulf of Mexico and reaching
            Bolivia, Peru, and Colombia by October.
          </p>
        </section>

        <section aria-labelledby="yard-heading">
          <h2 id="yard-heading">Which branch to leave — before the tree service arrives</h2>
          <p>
            Most tree services will remove every dead branch above a certain diameter on
            request. The default assumption is that dead wood is either a hazard or an
            eyesore. A dead limb at 35 feet over open lawn poses almost no risk to structures
            below, but it is exactly what a Wood-Pewee uses as a foraging platform.
          </p>
          <p>
            Before scheduling any canopy work, ask specifically which branches the arborist
            considers a genuine structural hazard — not just dead, but dead and positioned
            to fall on a building or a place where people stand regularly. The distinction
            is real. A dead horizontal limb over the back corner of the lawn is not the same
            risk as a cracked limb directly above the roof.
          </p>
          <p>
            Large native trees take 40 to 60 years to grow to the height and branch structure
            a pewee requires. A mature oak or maple that is removed cannot be replaced on any
            timeline relevant to the current generation of birds. If that tree has dead branches
            at height, those branches are the functional habitat — not a maintenance problem.
          </p>
          <button
            className="cta-button"
            style={{ marginTop: '1rem' }}
            onClick={() => onNavigate('habitat-layers')}
          >
            See how the canopy layer connects to the layers below in the Habitat Layers guide →
          </button>
        </section>

        <section aria-labelledby="id-heading">
          <h2 id="id-heading">Pee-a-wee: identifying the bird you can hear but cannot find</h2>
          <p>
            The song — a slow, descending <em>pee-a-weeeee</em>, followed after a pause by a
            rising <em>pee-yur</em> — carries 200 to 300 yards through the canopy. Males sing
            from their arrival in early May through most of August, including during the hottest
            hours of midday when most other species have gone quiet. If you hear a long,
            two-note whistle from somewhere in the tree canopy that sounds like it starts
            confident and ends unresolved, it is almost certainly a Wood-Pewee.
          </p>
          <p>
            The bird is small — sparrow-sized, 5 to 6 inches long — and olive-gray above with
            pale underparts. Two distinct pale wing bars set it apart from the Eastern Phoebe,
            which has none. The pewee also holds still between sallies — its posture between
            flights is motionless and upright, while the phoebe continuously bobs its tail
            downward. When you spot it, it will be on a dead branch or exposed snag, turning
            its head slowly from side to side, scanning.
          </p>
        </section>

        <section aria-label="Photo attribution" style={{ marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Photos: Wikimedia Commons, CC BY-SA 3.0.
            Population data: USGS Breeding Bird Survey; Cornell Lab of Ornithology eBird; IUCN Red List.
          </p>
        </section>
      </div>
    </>
  )
}
