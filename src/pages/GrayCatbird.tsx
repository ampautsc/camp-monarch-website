import type { Page } from '../App'

interface GrayCatbirdProps {
  onNavigate: (page: Page) => void
}

export default function GrayCatbird({ onNavigate }: GrayCatbirdProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gray_catbird_%2885315%29.jpg/960px-Gray_catbird_%2885315%29.jpg"
          alt="Adult gray catbird perched among vegetation showing slate-gray plumage, black cap, long tail, and rust-colored undertail coverts"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Gray_Catbird_in_the_grass.jpg/960px-Gray_Catbird_in_the_grass.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Rhododendrites&nbsp;&middot;&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Gray_catbird_(85315).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Gray Catbird</h1>
        <p className="hero__lead">
          The sound from the hawthorn at the back of the yard in May is not a cat. A gray
          catbird &mdash; slate gray, black-capped, smaller than a robin &mdash; has landed
          inside the thicket and is singing from somewhere within it. The bird is audible from
          ten feet away and invisible. That is deliberate. The catbird positions itself inside
          the shrub&apos;s leaf canopy, where foliage breaks line-of-sight in every direction.
          The genus name is <em>Dumetella</em> &mdash; Latin for &ldquo;small thornbush-dweller.&rdquo;
        </p>
        <p className="hero__lead">
          A female catbird arriving from the Caribbean in early May looks at the thickest
          available shrub, approaches from below, and presses upward through the branching
          structure at three to six feet. She is measuring whether the branch forks are dense
          enough to anchor a nest cup. A hedge pruned to vertical stubs in April has no such
          forks. She passes it over and moves on.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="song-heading">
          <h2 id="song-heading">The phrase sung once</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Dumetella_carolinensis-calling.jpg/960px-Dumetella_carolinensis-calling.jpg"
              alt="Gray catbird with bill open mid-call perched among green foliage, showing slate-gray plumage and black cap"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gray_catbird_%2885315%29.jpg/960px-Gray_catbird_%2885315%29.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              A gray catbird calling from inside a shrub. The catbird almost never sings from
              an exposed branch &mdash; it positions itself within the canopy where foliage
              scatters the sound and makes locating the singer difficult even from close range.
              <span className="photo-credit"> Photo: Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            The gray catbird&apos;s song differs from its two closest relatives in one
            structural way. A northern mockingbird repeats each phrase three to four times
            before moving to the next. A brown thrasher repeats each phrase exactly twice.
            The catbird sings each phrase once and moves immediately to the next. The result
            is a continuous, non-repeating stream of squeaks, whistles, raspy mews, and
            mimicry that can run uninterrupted for ten minutes or more.
          </p>
          <p>
            <em>Dumetella carolinensis</em> is a mimic: it draws phrases from other birds
            it has heard, from tree frogs, from mechanical sounds &mdash; and assembles them
            in a running sequence that differs across individuals and is never repeated within
            a single bird&apos;s performances. The catlike mew that gives the species its name
            is one phrase among many, woven into the song and also delivered standalone as an
            alarm call when a predator approaches the nest.
          </p>
          <p>
            Because the catbird sings from inside the shrub, the sound arrives from no clear
            direction. It bounces off leaf mass and branch structure in a way that makes
            triangulating the source difficult even from a few feet away. A pair can carry out
            an entire nesting season in a yard hawthorn and go unnoticed by the homeowner
            except as a meowing sound from the direction of the hedge.
          </p>
        </section>

        <section aria-labelledby="nesting-heading">
          <h2 id="nesting-heading">What the female finds inside the thicket</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Gray_Catbird_nest_and_egg.jpg/960px-Gray_Catbird_nest_and_egg.jpg"
              alt="Gray catbird nest woven into a cedar shrub four feet above the ground, holding one smooth light-blue egg"
              loading="lazy"
            />
            <figcaption>
              A gray catbird nest inside a cedar shrub at four feet, holding a single light-blue
              egg. The nest is built over five to six days and woven directly into a branching
              fork &mdash; not resting on a flat surface, but anchored in the crook of multiple
              living stems. Without that fork structure, the nest cannot be built at that height.
              <span className="photo-credit"> Photo: Wikimedia Commons / Public domain</span>
            </figcaption>
          </figure>
          <p>
            Gray catbirds build a bulky cup of twigs, bark strips, dried grass, and leaves,
            lined with fine rootlets and plant fiber. The outer structure looks loose from
            below, but the nest is woven into a living branch fork so that its weight
            distributes across multiple stems. Both birds contribute to construction over
            five to six days. The finished cup is 4 to 5 inches across, and the eggs &mdash;
            three to five per clutch &mdash; are plain, unmarked light blue with no pattern
            on the shell.
          </p>
          <p>
            The typical nesting height is 3 to 6 feet inside a dense shrub: hawthorn,
            spicebush, native viburnum, elderberry, multiflora rose, or bramble. The female
            selects the site by approaching from below and pressing upward into the branching
            layer. She is testing whether stems fork and cross with enough density that the
            nest cup can be anchored without resting on a single branch that might flex or
            bend under weight.
          </p>
          <p>
            Most spring hedge pruning in the upper Midwest and Northeast happens between
            late March and mid-May. Gray catbirds arrive on their breeding grounds between
            late April and mid-May. A shrub pruned to primary stubs in April has only
            dead-end cuts at the 3-to-6-foot height &mdash; not the forking branch structure
            the female tests for. A shrub that grew through the previous season undisturbed
            has dozens of eligible forks at the right height. The pruning schedule and the
            catbird&apos;s arrival window coincide at almost exactly the same week every year.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three things that keep catbirds nesting in your yard</h2>

          <figure className="species-content-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Gray_Catbird_in_the_grass.jpg/960px-Gray_Catbird_in_the_grass.jpg"
              alt="Gray catbird standing in grass near a shrub edge, showing the full slate-gray body, black cap, and rufous undertail coverts"
              loading="lazy"
            />
            <figcaption>
              A gray catbird at a shrub edge. Catbirds forage between berry-producing native
              shrubs and the leaf-litter zones where beetles and earthworms are accessible.
              The shrub edge &mdash; not the lawn interior or the tree canopy &mdash; is the
              catbird&apos;s operating zone. Where that edge disappears, so does the bird.
              <span className="photo-credit"> Photo: Wikimedia Commons / Public domain</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Hold spring pruning on dense shrubs until mid-July.</strong>{' '}
              Gray catbirds arrive in late April or early May and begin nesting within two
              weeks of arrival. By mid-July most pairs have completed their second brood and
              the young have fledged. Pruning after July 15 removes no active nesting
              structure. Pruning in April removes the branch forks the female inspects before
              she commits to the site. In yards where dense shrubs are pruned every April,
              catbirds may be heard singing but will not produce young.
            </li>
            <li>
              <strong>Plant at least one dense native shrub and leave it unpruned.</strong>{' '}
              Spicebush (<em>Lindera benzoin</em>), native viburnums (<em>Viburnum lentago</em>,{' '}
              <em>Viburnum prunifolium</em>), elderberry (<em>Sambucus canadensis</em>), and
              native hawthorns (<em>Crataegus</em> spp.) grow to the right height and density
              and produce fruit catbirds eat through summer and fall. A single unpruned
              spicebush reaching 6 to 8 feet is enough to support a nesting attempt. Find
              what grows in your region at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Leave fruit on native shrubs through October.</strong>{' '}
              Gray catbirds eat heavily from elderberries, native viburnums, dogwood drupes,
              and serviceberries before and during fall migration. Approximately half their
              summer diet is fruit, and the berry crop on native shrubs in August and September
              is the catbird&apos;s primary pre-migration fuel. Shrubs cut for tidiness before
              fruiting removes this resource at the point catbirds need it most.
            </li>
          </ol>
        </div>

        <section aria-labelledby="cowbird-heading">
          <h2 id="cowbird-heading">The egg it will not raise</h2>
          <p>
            Brown-headed cowbirds lay single eggs in the nests of other songbirds. The cowbird
            chick hatches early, grows fast, and outcompetes the host species&apos; own young
            for parental feeding. Most small songbirds cannot recognize the cowbird egg and
            raise the cowbird chick in place of their own.
          </p>
          <p>
            Gray catbirds reject cowbird eggs at rates documented as among the highest for
            any host species in North America. In field studies where cowbird eggs were placed
            experimentally in catbird nests, catbirds removed or pecked open the majority
            within 24 to 48 hours. The mechanism is exact-match recognition: a catbird learns
            the precise color, size, and surface texture of its own eggs, which are plain,
            unmarked light blue. A cowbird egg &mdash; slightly different in size, ground
            color, or speckle pattern &mdash; fails the match, and the catbird rolls or
            pecks it out.
          </p>
          <p>
            The nest&apos;s position inside a dense thicket further reduces cowbird
            parasitism rates. Cowbirds locate host nests by watching from elevated perches
            while the host birds carry nesting material. A catbird nest inside a hawthorn
            at four feet, with multiple layers of foliage blocking sightlines, is harder
            to observe than an open-cup nest in a tree with clear sight angles from above.
            The catbird&apos;s insistence on interior nesting provides passive protection
            that works alongside the active egg-recognition behavior.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The catbird&apos;s shrub thicket is shared habitat.</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('brown-thrasher')}>
              Brown Thrashers
            </button>{' '}
            nest at the same height in the same shrubs.{' '}
            <button className="link-button" onClick={() => onNavigate('fireflies')}>
              Firefly larvae
            </button>{' '}
            overwinter in the leaf litter at the base of those shrubs. The same dense native
            planting that brings a catbird in May supports a community of species through
            all four seasons. Start the shrub layer at{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or meet more yard neighbors in the{' '}
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
