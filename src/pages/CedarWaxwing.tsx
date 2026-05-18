import type { Page } from '../App'

interface CedarWaxwingProps {
  onNavigate: (page: Page) => void
}

export default function CedarWaxwing({ onNavigate }: CedarWaxwingProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Cedar_Waxwing.jpg/960px-Cedar_Waxwing.jpg"
          alt="Adult Cedar Waxwing perched on a branch — sleek gray-brown plumage grading to a yellow-tipped tail, raised brown crest, black mask from bill to nape, and small red waxy droplets on the secondary wing feathers"
          className="species-hero-image"
          style={{ objectPosition: 'center 30%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Cedar_Waxwing_%28Bombycilla_cedrorum%29_%286756999697%29.jpg/960px-Cedar_Waxwing_%28Bombycilla_cedrorum%29_%286756999697%29.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Kevin Cole&nbsp;&middot;&nbsp;CC BY 2.0 via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Cedar Waxwing</h1>
        <p className="hero__lead">
          In late October a flock of 20 or 30 sleek crested birds descends on a backyard
          serviceberry. They don&apos;t scatter — they work through the branches in sequence,
          each bird picking berries and occasionally passing one beak-to-beak to the bird
          beside it. They strip the shrub in 12 minutes. Then they lift off together and
          are gone. You might not see them again for three weeks — or at all that winter.
        </p>
        <p className="hero__lead">
          The Cedar Waxwing — <em>Bombycilla cedrorum</em> — holds no winter territory. It
          roams in nomadic flocks of 10 to 100, tracking fruit availability across hundreds
          of miles through fall and winter. Whether your yard falls in the flock&apos;s route
          depends entirely on whether it has anything worth stopping for.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="wax-tips-heading">
          <h2 id="wax-tips-heading">Red droplets on the secondary feathers, earned one winter at a time</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Cedar_Waxwing_%28Bombycilla_cedrorum%29_%286756999697%29.jpg/960px-Cedar_Waxwing_%28Bombycilla_cedrorum%29_%286756999697%29.jpg"
              alt="Cedar Waxwing close-up showing the full face and wing — brown crest, black mask with white border, bright yellow tail-band edge, and the small red waxy droplets visible on the folded secondary feathers"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Cedar_Waxwing.jpg/480px-Cedar_Waxwing.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              The Cedar Waxwing&apos;s plumage blends so smoothly that the bird
              looks poured rather than assembled — warm brown fading to gray at
              the wings, lemon yellow at the tail tip. The red droplets on the
              folded secondary feathers are visible at close range. A bird with
              six red tips has survived at least three full molts and three winters.
              <span className="photo-credit"> Photo: Channel City Camera Club&nbsp;·&nbsp;CC BY 2.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Four field marks read cleanly at 20 feet: a raised brown crest; a black mask
            running from the bill through and behind the eye; a bright yellow terminal band
            on the tail; and the one that gives the bird its name — small red droplets sealed
            to the tips of the secondary wing feathers. These droplets are not wax in the
            household sense. The feather shaft extends past the vane and extrudes a hardened
            secretion of keratin and red pigment, which cements to the feather tip like a wax
            seal on a letter. The number of tips grows with each annual molt. A Cedar Waxwing
            in its first fall carries none. A bird with eight tips has come through four
            winters and four complete molt cycles.
          </p>
          <p>
            Nest studies and captive-choice experiments have found that female Cedar Waxwings
            pair more readily with males carrying more wax tips. The signal cannot be
            counterfeited — a bird has exactly as many tips as it has survived molt cycles.
            No first-year bird can wear the pattern of a five-year survivor. The tips function
            as a ledger of continued existence displayed on the folded wing.
          </p>
        </section>

        <section aria-labelledby="nomadic-heading">
          <h2 id="nomadic-heading">No fixed address — the flock follows whatever is ripe across hundreds of miles</h2>
          <p>
            Almost every songbird species familiar from backyard feeders holds a fixed winter
            home range. The male Northern Cardinal in January is the same male Northern Cardinal
            that nested in May. The Black-capped Chickadee working the same branch every morning
            knows that branch — its location in the neighborhood flock hierarchy, the bark
            crevices that reliably hold insect eggs, the order of shrubs worth visiting after a
            snowfall. It returns because it remembers.
          </p>
          <p>
            Cedar Waxwings accumulate none of this. Outside breeding season they form flocks
            with no consistent membership, no fixed daily circuit, and no winter home. A flock
            descends on a fruiting shrub, strips it, and moves on. The same flock may have been
            in a city park 40 miles north the week before and will shift to a different property
            — or a different county — within days. They do not learn your yard. They encounter
            it, assess it, and either stop or don&apos;t. Their presence in any given yard in
            November is not a sign of residency. It is a sign that your yard contained something
            the flock&apos;s route happened across.
          </p>
          <p>
            Within the flock, Cedar Waxwings pass berries beak-to-beak down a perched line —
            a behavior documented even when all birds have equal access to the fruit. Researchers
            studying the behavior under controlled conditions found that passing continues when
            food is plentiful, which rules out a purely competitive foraging explanation.
            The current interpretation is that it functions as pair-bond maintenance between
            established mates — a way of reinforcing the social connection during the months
            when breeding cues are absent.
          </p>
        </section>

        <section aria-labelledby="fermentation-heading">
          <h2 id="fermentation-heading">Sixteen minutes from berry to seed — and, occasionally, longer</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Cedar_Waxwing_-_Bombycilla_cedrorum_%286832789561%29.jpg/960px-Cedar_Waxwing_-_Bombycilla_cedrorum_%286832789561%29.jpg"
              alt="Cedar Waxwing perched in a fruiting shrub, reaching toward a cluster of small red berries with bill extended"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Cedar_Waxwing.jpg/480px-Cedar_Waxwing.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              Cedar Waxwings move berries through the gut in as little as 16 minutes
              — fast enough to process a large berry crop while still foraging. This
              throughput rate also makes them one of the most effective seed
              dispersers in temperate North America: seeds from a stripped
              winterberry shrub may be deposited a mile away by nightfall.
              <span className="photo-credit"> Photo: Channel City Camera Club&nbsp;·&nbsp;CC BY 2.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Cedar Waxwings move fruit through the digestive tract in as little as 16 minutes
            from ingestion to seed excretion. This throughput rate allows a flock to process
            the full caloric content of a berry crop while continuing to forage. They eat
            until there is nothing left — not because they are greedy in any evaluative sense,
            but because their digestive system is calibrated for volume rather than selectivity.
          </p>
          <p>
            This becomes a problem with berries that have overripened or begun to ferment.
            The sugars in mountain ash, pyracantha, or crabapple fruit that have been through
            multiple freeze-thaw cycles produce enough ethanol to impair a bird weighing 30
            grams. Cedar Waxwings have been found lying beneath berry trees in late fall —
            alive but unable to fly, sitting on the ground under the same shrub that knocked
            them down. In most documented cases the birds recover once the fermented material
            clears their gut. Wildlife rehabilitators receiving Cedar Waxwings in October and
            November regularly identify fermented berry ingestion as the cause of admission.
          </p>
          <p>
            Through the breeding season — May into July — adults shift to insects. Nestlings
            in the first days of life cannot digest raw fruit; they require the protein that
            only insects deliver. Adult Cedar Waxwings in late May catch insects on the wing
            by sallying from a perch, exactly like a flycatcher. By the time nestlings fledge
            and begin foraging on their own, midsummer berries are ripening and the adults
            have already moved back to fruit.
          </p>
        </section>

        <section aria-labelledby="actions-heading">
          <h2 id="actions-heading">What makes a yard visible to a nomadic flock in November</h2>
          <p>
            A Cedar Waxwing flock finds fruit by sight while moving. The plants that stop a
            flock on a property are those carrying fruit in volume through November and into
            January — after the earlier-fruiting shrubs have been stripped by September
            migrants, and before the deep winter when crabapple and winterberry represent the
            last food available in the landscape.
          </p>
          <ol className="action-list">
            <li>
              <strong>Winterberry holly (<em>Ilex verticillata</em>)</strong> — native shrub,
              6 to 10 feet, tolerates wet to moist soils, bright red berries holding from
              October through January or later. Requires both male and female plants; one male
              pollinates up to five females within about 50 feet. A well-fruited winterberry
              in December draws Cedar Waxwings, Hermit Thrushes, and American Robins to the
              same branch.
            </li>
            <li>
              <strong>Arrowwood viburnum (<em>Viburnum dentatum</em>)</strong> — native shrub,
              6 to 8 feet, blue-black berries ripening in August and September. The early
              timing catches fall migration waxwing flocks before the later-fruiting species
              come in. A property with both arrowwood and winterberry has fruit available from
              August through January — the full migration-and-wintering window.
            </li>
            <li>
              <strong>Pagoda dogwood (<em>Cornus alternifolia</em>)</strong> — native understory
              tree, 15 to 25 feet, dark blue-black berries in August. Dogwood berries are among
              the highest-fat native fruits — roughly 35% fat by dry weight. A migrant bird
              stopping in a yard with pagoda dogwood in late August can double its fat reserves
              in three to four days of feeding.
            </li>
            <li>
              <strong>Native crabapple (<em>Malus</em> species)</strong> — small tree, 15 to 20
              feet, fruit persisting through December. Crabapples that hold through hard freezes
              serve as the last food standing for Cedar Waxwings and Northern Mockingbirds once
              everything else is gone. Choose a variety with small persistent fruit under 1 inch
              — large-fruited ornamental crabapples tend to drop too early to serve as winter food.
            </li>
          </ol>
        </section>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Who else strips the same winter shrubs</h2>
          <p>
            A yard with winterberry, native viburnum, and crabapple in November is not waiting
            for one species. Cedar Waxwings, Hermit Thrushes, American Robins, and
            Yellow-rumped Warblers use the same fruiting shrubs, often on the same days. Each
            arrives differently — the waxwing in a nomadic flock that will not return on any
            schedule, the thrush as a quiet individual that wintered on the same block last year,
            the robin in loose migratory flocks following the fruit south, the warbler alone
            or in small groups, working the shrub surface for berries the others missed.
          </p>
          <ul>
            <li>
              <button className="link-button" onClick={() => onNavigate('hermit-thrush')}>
                Hermit Thrush
              </button>
              {' — '}Establishes a small individual winter territory anchored to a native
              fruiting shrub and returns to the same yard in consecutive winters. When a Cedar
              Waxwing flock strips the winterberry in 12 minutes, the thrush — too small and
              too solitary to compete — watches from the adjacent brush and waits.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('yellow-rumped-warbler')}>
                Yellow-rumped Warbler
              </button>
              {' — '}The only warbler that overwinters regularly in the eastern US, because it
              produces digestive enzymes that crack the wax coating on bayberry and myrtle
              berries — a food source other warblers cannot use. The waxwing and the warbler
              overlap on the same winter shrub patches by different chemical routes.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('american-robin')}>
                American Robin
              </button>
              {' — '}Does not fully migrate in winter so much as relocate to wherever fruit
              persists. Flocks of 50 to 200 robins descend on a crabapple or winterberry in
              January and can clear it within a day. Cedar Waxwing and robin flocks often
              move through an area in loose association, both tracking the same fruit
              concentrations.
            </li>
            <li>
              <button className="link-button" onClick={() => onNavigate('buttonbush')}>
                Buttonbush
              </button>
              {' — '}Native shrub for wet edges and rain gardens; seed heads persist through
              fall and draw waxwings along with other species. Pairs naturally with winterberry
              in any yard where drainage is slow.
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
