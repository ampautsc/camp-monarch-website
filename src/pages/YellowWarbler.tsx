import type { Page } from '../App'

interface YellowWarblerProps {
  onNavigate: (page: Page) => void
}

export default function YellowWarbler({ onNavigate }: YellowWarblerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Setophaga_petechia_-Ithaca%2C_New_York%2C_USA-8.jpg/960px-Setophaga_petechia_-Ithaca%2C_New_York%2C_USA-8.jpg"
          alt="Male Yellow Warbler perched on a thin branch — all-yellow plumage with rusty-red streaks running down the chest, small rounded bill, bright dark eye set in a clean yellow face"
          className="species-hero-image"
          style={{ objectPosition: 'center 25%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Dendroica_petechia_-male_in_Galveston%2C_Texas%2C_USA-8.jpg/960px-Dendroica_petechia_-male_in_Galveston%2C_Texas%2C_USA-8.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: PEHart&nbsp;&middot;&nbsp;CC BY-SA 2.0 via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Yellow Warbler</h1>
        <p className="hero__lead">
          In the first week of May, a small bird the color of a ripe lemon arrives in the shrub
          layer of yards across the eastern United States. The male — roughly the size of a house
          sparrow — has rusty-red streaks down a yellow chest and sings a bright, rapid phrase
          from exposed branch tips in the outer canopy throughout the morning. He repeats the song
          hundreds of times per day. Two weeks later, if there is a suitable shrub on the property,
          a nest slightly larger than a golf ball is woven into the fork of a branch somewhere inside it.
        </p>
        <p className="hero__lead">
          That nest is invisible from outside the shrub. The female builds it into a tight Y-fork
          of a branch 2 to 6 feet off the ground, inside the canopy where foliage screens it from
          above and on the sides. From a sidewalk, from behind a fence, or from the cab of a
          landscaping truck, there is nothing to see. The nest is there. The eggs are there. The
          30-day window before the chicks fledge is running. The hedge trimmer does not know any
          of this.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="nest-heading">
          <h2 id="nest-heading">A cup woven into the Y-fork, walls thin enough to see light through</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Dendroica_petechia_-male_in_Galveston%2C_Texas%2C_USA-8.jpg/960px-Dendroica_petechia_-male_in_Galveston%2C_Texas%2C_USA-8.jpg"
              alt="Male Yellow Warbler perched in shrub foliage showing the bright yellow-green plumage and faint red-streaked breast visible at close range"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Setophaga_petechia_-Ithaca%2C_New_York%2C_USA-8.jpg/960px-Setophaga_petechia_-Ithaca%2C_New_York%2C_USA-8.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              The male sings from exposed perches in the outer shrub canopy from dawn through
              mid-morning. The rusty-red streaks on the chest are the mark that distinguishes
              him from other yellow birds in the yard — goldfinches and orioles lack them.
              <span className="photo-credit"> Photo: Dominic Sherony / CC BY-SA 2.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            The female Yellow Warbler selects a site in a shrub or small tree where two or three
            branches meet in a tight fork, cradling the nest cup on three sides rather than
            leaving it balanced on a single branch. She builds alone, carrying plant fibers, dry
            grasses, and cattail or thistle down to the site over 4 to 5 days. She weaves the
            fibers into the fork from the outside in, forming a compact cup with walls roughly
            half an inch thick. When the finished nest is held up to the light, the walls are
            thin enough in places to be translucent.
          </p>
          <p>
            The nest sits 2 to 6 feet off the ground in the large majority of recorded cases.
            The shrubs and small trees most frequently used include willows, alders, wild roses,
            elderberries, and dogwoods — plants with multi-stemmed branching structure and
            flexible branch forks that hold the nest cup securely. A forsythia, a lilac, or a
            mock orange with similar branching geometry presents the same nesting opportunity.
            The female is not selecting based on plant species. She is selecting based on fork
            geometry and canopy coverage above and around the site.
          </p>
          <p>
            She lays 4 to 5 eggs over 4 to 5 days, incubates them for 11 to 13 days, and feeds
            the nestlings for 9 to 11 days before they fledge. From the time she begins building
            to the day the last chick leaves the nest is roughly 28 to 30 days. That window runs
            from roughly mid-May through late June in the mid-Atlantic and Midwest — which is
            precisely when most homeowners decide the shrubs need trimming.
          </p>
        </section>

        <section aria-labelledby="cowbird-heading">
          <h2 id="cowbird-heading">Cowbird egg found — nest floor raised, everything below buried</h2>
          <p>
            Brown-headed Cowbirds lay their eggs in the nests of other species rather than
            incubating their own clutch. Yellow Warblers are among the most frequently parasitized
            songbirds in eastern North America. When a female Yellow Warbler returns to her nest
            and finds a cowbird egg in it, she does something that no other commonly parasitized
            songbird does with this frequency: she builds a new floor over the entire clutch —
            her own eggs included — and begins laying again on top of it.
          </p>
          <p>
            The cowbird egg and the warbler eggs beneath the new floor will not hatch. The warbler
            is not reasoning through this — she responds to the presence of a foreign egg by
            covering it, and her own eggs happen to be in the way. Ornithologists have found
            Yellow Warbler nests with as many as six layered floors, representing six separate
            cowbird parasitism events in a single season, each one answered with a new floor
            and a fresh clutch.
          </p>
          <p>
            Brown-headed Cowbirds are more common in fragmented suburban landscapes than in
            contiguous forest, because they need both forest-edge nesting habitat and open
            ground for feeding. Yards with native shrub cover near forest edges see more
            parasitism attempts than woodland interiors. The warbler&apos;s floor-building
            response lets it recover from repeated disturbance without abandoning the site —
            at the cost of the eggs already laid.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>What Yellow Warblers need from your yard</h2>

          <figure className="species-content-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Setophaga_petechia_-Ithaca%2C_New_York%2C_USA-8.jpg/960px-Setophaga_petechia_-Ithaca%2C_New_York%2C_USA-8.jpg"
              alt="Yellow Warbler male in full breeding plumage on a branch, showing the round head, small insectivore bill, and bright yellow plumage with rusty-red chest streaks"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Dendroica_petechia_-male_in_Galveston%2C_Texas%2C_USA-8.jpg/960px-Dendroica_petechia_-male_in_Galveston%2C_Texas%2C_USA-8.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              The male&apos;s song — &ldquo;sweet sweet sweet I&apos;m so sweet,&rdquo; as the
              common mnemonic renders it — is one of the most frequently heard warbler songs in
              shrubby yards from May through July. If you hear it in your yard, the female has
              likely already chosen a nest site nearby.
              <span className="photo-credit"> Photo: PEHart / CC BY-SA 2.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Do not trim shrubs between May 1 and July 31.</strong>{' '}
              The Yellow Warbler&apos;s 30-day nesting window runs from mid-May through late June
              across most of the eastern U.S. A hedge trimmed on any day in that range may destroy
              a nest that is invisible from outside the shrub. The single most effective thing a
              homeowner can do for shrub-nesting birds is to cut the trimming season to before
              May 1 or after August 1. If a shrub must be shaped during summer for a specific
              reason, inspect the interior branch forks at 2 to 6 feet before cutting. See the
              full argument for timing yard work around nesting windows at{' '}
              <button className="link-button" onClick={() => onNavigate('seasonal-calendar')}>
                Seasonal Calendar
              </button>
              .
            </li>
            <li>
              <strong>Plant native shrubs with multi-stemmed branching structure.</strong>{' '}
              Willows, alders, elderberries, and native dogwoods provide the forked branch
              structure Yellow Warblers use for nest anchoring and the caterpillar-hosting foliage
              they need for feeding nestlings. The caterpillar density on a native willow or
              elderberry is documented to be 40 to 100 times higher per unit of canopy area than
              on most non-native ornamental shrubs. Find species growing in your hardiness zone at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Leave the interior branching of dense native shrubs intact.</strong>{' '}
              Yellow Warblers and the{' '}
              <button className="link-button" onClick={() => onNavigate('gray-catbird')}>
                Gray Catbird
              </button>
              ,{' '}
              <button className="link-button" onClick={() => onNavigate('song-sparrow')}>
                Song Sparrow
              </button>
              , and{' '}
              <button className="link-button" onClick={() => onNavigate('northern-cardinal')}>
                Northern Cardinal
              </button>
              {' '}all nest in the shrub layer. All need the internal branch architecture that
              a dense, unpruned native shrub provides. A shrub cut back to a smooth globe each
              spring loses the forked interior branching that makes it a nesting site.
            </li>
            <li>
              <strong>Reduce or eliminate broad-spectrum insecticide use near shrubs.</strong>{' '}
              Yellow Warblers feed their nestlings almost exclusively on soft-bodied insects and
              caterpillars. A single brood of four nestlings requires several hundred insect
              deliveries over 9 to 11 days. Insecticide applications that reduce caterpillar
              and aphid populations on shrubs remove the prey the female needs to sustain
              nestling growth. The connection between pesticide use and songbird nest failure
              runs through this mechanism — not through direct exposure of adults, but through
              prey removal during the nestling period. The full picture is at{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticide Guide
              </button>
              .
            </li>
          </ol>
        </div>

        <section aria-labelledby="id-heading">
          <h2 id="id-heading">All-yellow body, red streaks on the chest, small bill — arrives in early May</h2>
          <p>
            A male Yellow Warbler in breeding plumage is almost entirely yellow: yellow back,
            yellow wings with yellow edges on the flight feathers, yellow underparts. The chest
            carries narrow rusty-red streaks running vertically from throat to belly. No other
            yellow bird commonly seen in eastern yards combines an all-yellow body with red
            breast streaks and a thin insectivore&apos;s bill. American Goldfinches have black
            wings. Female orioles are larger and carry a thicker bill. Palm Warblers are yellow
            below but have a chestnut cap and pump their tail constantly while perched.
          </p>
          <p>
            The female is yellow-green above and pale yellow below, with faint or absent streaking.
            She moves quickly through dense shrub interior, usually within 5 feet of the ground
            while building or feeding nestlings — well below the singing perches the male uses.
          </p>
          <p>
            Yellow Warblers arrive in the eastern U.S. in late April and early May, having spent
            the winter in Central and South America. They breed across nearly all of North America
            except the Gulf Coast and the deep Southeast. In a yard with native shrubs, the
            male&apos;s song — starting in early May and continuing with decreasing frequency into
            July — is the most common first sign that a pair has settled nearby. By the time a
            homeowner locates the singing bird, the female has often already begun building.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The shrub layer the Yellow Warbler nests in supports several other species at the same time.</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('gray-catbird')}>
              Gray Catbirds
            </button>
            {' '}build in dense multi-stemmed shrubs at 3 to 6 feet — the same height range and
            branching structure. The{' '}
            <button className="link-button" onClick={() => onNavigate('song-sparrow')}>
              Song Sparrow
            </button>
            {' '}often nests lower, at 1 to 3 feet, inside the same shrub clump. What all three
            need from the same shrub is not just nest structure but caterpillar-hosting foliage
            within 50 to 100 feet of the nest — the prey that feeds nestlings through fledging.
            See how the shrub layer connects to the floor below and the canopy above in the{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-layers')}>
              Habitat Layers guide
            </button>
            , or see what the shrub layer supports across the full bird community at{' '}
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
