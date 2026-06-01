import type { Page } from '../App'

interface AmericanWoodcockProps {
  onNavigate: (page: Page) => void
}

export default function AmericanWoodcock({ onNavigate }: AmericanWoodcockProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/344580602/large.jpg"
          alt="American Woodcock standing on a woodland path in early March in Cuyahoga Falls, Ohio — the large dark eyes sit on the sides of the head near the top of the skull, and the long bill points forward and slightly down"
          className="species-hero-image"
          style={{ objectPosition: 'center 30%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: rawcomposition&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/195811353" target="_blank" rel="noopener noreferrer">iNaturalist obs. 195811353</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Birds</div>
        <h1>On warm evenings in March, a male American Woodcock stands in a dark clearing and calls — then spirals 200 feet straight up on twittering wings and drops back down within three feet of where he started.</h1>
        <p className="hero__lead">
          The American Woodcock (<em>Scolopax minor</em>) is a chunky, short-legged shorebird
          that lives in the forest, not the shore. Its mottled brown-and-black plumage reads
          as dead leaves from six feet away. Its bill is nearly as long as its head and body
          combined. Both eyes sit on the sides of the head near the top of the skull, giving
          the bird an almost unobstructed 360° field of view — including directly behind.
        </p>
        <p className="hero__lead">
          For most of the year the woodcock is invisible: a nighttime feeder in brushy thickets
          and moist forest edges, disappearing into cover before first light. But from late
          February through May, at dusk and again before dawn, males come out into small openings
          and perform a display called the sky dance. This is the one window when most people
          ever see or hear one.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="bill-heading">
          <h2 id="bill-heading">The tip of the bill opens and closes underground while the base stays shut — how a woodcock grabs an earthworm it cannot see</h2>
          <p>
            A woodcock spends much of its adult life with its bill buried in soft soil, probing
            for earthworms. The bill reaches 2 to 3 inches below the surface — but pulling a
            worm from that depth without opening the entire bill in soil is a problem most
            long-billed birds cannot solve. The woodcock's upper bill is flexible at the tip, a
            condition called rhynchokinesis. Muscles allow the tip to bend upward while the
            bill stays closed at the base. The tip acts as a prehensile forceps that grasps
            a worm underground without excavating or retracting the bill first.
          </p>
          <p>
            The sensing mechanism sits in pits at the bill tip — Herbst corpuscles, the same
            pressure receptors that help other birds detect underwater movement. When an
            earthworm moves anywhere within a few centimeters of the bill tip, the soil
            displacement registers as a signal. The bird does not smell the worm or hear it.
            It feels the worm move through the ground.
          </p>
          <p>
            Because earthworms move toward the surface after rain and in warm weather, woodcock
            feeding activity peaks on nights following rain events in spring. The same wet
            conditions that bring earthworms within reach are why woodcocks need soft, moist
            soil — compacted or chemically treated soil locks earthworms deeper than the bill
            can reach or drives them away entirely.
          </p>
        </section>

        <figure className="species-content-photo">
          <img
            src="https://inaturalist-open-data.s3.amazonaws.com/photos/277509667/large.jpg"
            alt="American Woodcock standing in dead leaves in Massachusetts in May, the mottled brown and black plumage breaking up the bird's outline so it reads as leaf debris rather than a bird"
            loading="lazy"
          />
          <figcaption>
            The woodcock's pattern fragments its own outline. The broad buff stripe across the
            crown, the barred flanks, and the irregular dark patches across the back eliminate
            the silhouette of a bird against the forest floor. A person walking two steps from
            a sitting woodcock will usually not see it until it flushes — at which point it
            makes a twittering sound and vanishes into the cover at the edge of the clearing.
            <span className="photo-credit"> Photo: danjwilder&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/160589960" target="_blank" rel="noopener noreferrer">iNaturalist obs. 160589960</a>&nbsp;· CC0 / No Rights Reserved</span>
          </figcaption>
        </figure>

        <section aria-labelledby="skydance-heading">
          <h2 id="skydance-heading">The peenting, the spiral, the twittering descent — what the sky dance sounds like and what it means when you hear it from your yard</h2>
          <p>
            Sometime in late February or early March — on the first evenings warm enough that
            earthworm activity increases near the surface — male woodcocks move to small openings
            near their brushy cover and begin displaying. The sequence runs identically each
            evening from dusk until full dark, and again from before first light until sunrise.
          </p>
          <p>
            The male stands in the opening and gives a buzzy, nasal call: <em>peent</em>. He
            repeats it at roughly two-second intervals, turning slightly between calls. After
            several minutes, he launches nearly vertically. Three narrow outer primary feathers
            vibrate as air rushes through them on the climb, making a twittering sound not from
            his throat but from his wings. He spirals upward to 200 to 300 feet. At the peak,
            the twittering stops and the bird shifts to liquid chirping notes while dropping in
            a zigzag descent. He lands back at nearly the same patch of ground — within three
            to six feet of where he started.
          </p>
          <p>
            Then he peents again and repeats the whole cycle, for 30 to 45 minutes.
          </p>
          <p>
            A male that has a suitable clearing and nearby cover will use the same site for weeks
            or months, returning each evening through the spring. If you hear a woodcock peenting
            from a brushy margin near your yard, the bird has chosen that clearing as a territory.
            That means suitable cover and moist soil are within 50 meters of the calling site.
          </p>
        </section>

        <section aria-labelledby="habitat-heading">
          <h2 id="habitat-heading">Young forest and thicket, not old growth — the weedy margins most homeowners schedule for clearing</h2>
          <p>
            Woodcocks are not old-growth forest birds. They need young, shrubby habitat: thickets
            of native dogwood, alder, elderberry, and buttonbush where the canopy is open enough
            for the sky dance flight and the soil is moist enough to hold earthworms close to
            the surface year-round.
          </p>
          <p>
            Nesting happens in the thicket itself. The female scrapes a shallow depression at the
            base of a shrub or against a fallen log and lays four eggs. The chicks can walk within
            hours of hatching. She leads them each night to moist feeding areas and back to cover
            before dawn.
          </p>
          <p>
            What has been lost is not old-growth forest but the weedy, overgrown thicket edges
            that most American suburbs have systematically eliminated since the 1950s. An
            unmaintained hedge that escaped the lawn for a decade, a wet margin behind a garage
            where native shrubs colonized, a brushy slope the homeowner has not gotten around to
            clearing — each of these is candidate woodcock habitat. Clearing removes it permanently.
          </p>
        </section>

        <figure className="species-content-photo">
          <img
            src="https://inaturalist-open-data.s3.amazonaws.com/photos/178456464/large.jpg"
            alt="American Woodcock close view in North Carolina in February showing the eye positioned very high on the skull, almost at the top of the head, and the long bill extending forward"
            loading="lazy"
          />
          <figcaption>
            The eye sits so high on the skull that the woodcock has roughly 360° binocular
            vision — including a field directly above the head while the bill is buried in
            soil. The bird watches for aerial predators while feeding underground without
            raising its head. The eye position is not incidental to the foraging posture;
            both evolved together.
            <span className="photo-credit"> Photo: gillydilly&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/106250002" target="_blank" rel="noopener noreferrer">iNaturalist obs. 106250002</a>&nbsp;· CC0 / No Rights Reserved</span>
          </figcaption>
        </figure>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">40% gone since 1968 — the annual survey that tracks the peent count along the same roads every spring</h2>
          <p>
            The U.S. Fish and Wildlife Service has run the Woodcock Singing-Ground Survey since
            1968: observers stop at fixed points along rural roads at dusk in April and count
            calling males for the same three minutes each year. Since the survey began, the count
            has declined approximately 1% per year across the eastern United States — more than
            40% of the breeding population that existed when the survey started.
          </p>
          <p>
            The decline tracks fastest in areas where young forest and brushy habitat have been
            eliminated: the suburban fringe, where thickets have been replaced by maintained
            lawns and ornamental plantings with no native shrub structure. Mature forest is also
            unsuitable: the canopy closes off the openings the sky dance requires, and the soil
            under a dense hardwood stand dries and compacts compared to the moist thicket floor.
          </p>
          <p>
            Soil insecticide use is an additional pressure. Earthworms are the primary food
            source for adults and the food source that chicks are led to in their first weeks.
            Lawn treatments with imidacloprid and other systemic pesticides drive earthworms
            deeper into the soil or kill them. A yard with chemically treated soil may have
            no earthworms at any depth a woodcock bill can reach.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Stop clearing the thicket, plant three native shrubs, stop soil insecticides, and go out at dusk in March</h2>
          <ol className="step-list">
            <li>
              <strong>Stop clearing the brushy thicket edge.</strong>{' '}
              If you have an area at the back of your yard where native shrubs or young trees
              have colonized over the years, leave it. What looks like an overgrown area is the
              structural combination of cover, foraging ground, and display space that a woodcock
              needs. Mowing or clearing removes the cover element and typically eliminates the
              moisture in the soil that keeps earthworms accessible at shallow depth through the
              season.
            </li>
            <li>
              <strong>Plant Buttonbush, Elderberry, or native dogwood in a moist corner.</strong>{' '}
              These are the three most common native shrubs in documented woodcock thicket habitat
              across the eastern United States. All three tolerate wet soil, grow dense enough to
              provide cover, and need little maintenance once established. Three to five shrubs of
              mixed species in a naturally moist corner of the yard creates the beginning of thicket
              structure within two to three growing seasons.
            </li>
            <li>
              <strong>Stop applying soil insecticides.</strong>{' '}
              Imidacloprid, chlorpyrifos, and other systemic soil treatments reduce earthworm
              populations. Read labels on any grub or lawn pest control product — if the label
              says to drench the soil, the treatment will reach earthworms at the depths a
              woodcock probes. Biological alternatives for grubs (Milky Spore, Heterorhabditis
              nematodes) do not harm earthworms.
            </li>
            <li>
              <strong>Go out at dusk in late February or March and listen for the peent call.</strong>{' '}
              Stand near any moist, shrubby area 20 to 30 minutes after sunset. The call is
              a buzzy, nasal sound — nothing else in the same habitat makes it. Once you have
              heard it, you will recognize it. The sky dance that follows the peenting lasts 30
              to 45 minutes. A male peenting from the same clearing on multiple evenings has
              chosen that site as a territory and is using cover and moist soil within 50 meters.
              That means the habitat is there. It just needs to be left alone.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('buttonbush')}>
              <span className="neighbor-name">Buttonbush</span>
              <span className="neighbor-note">Grows in standing water and moist thickets — the shrub that builds the wet-margin cover woodcocks use for daytime shelter and nesting</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('elderberry')}>
              <span className="neighbor-name">Elderberry</span>
              <span className="neighbor-note">Another thicket-forming native shrub in moist edges — provides cover structure for woodcock nesting and draws 70+ bird species with its August berries</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('wood-thrush')}>
              <span className="neighbor-name">Wood Thrush</span>
              <span className="neighbor-note">Shares the young forest and thicket habitat; also depends on earthworms and soil invertebrates under undisturbed leaf litter</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('whip-poor-will')}>
              <span className="neighbor-name">Whip-poor-will</span>
              <span className="neighbor-note">Another nocturnal bird displaying at dusk in spring at shrubby forest edges — the same habitat type, the same season, the same erasure from suburban thicket clearing</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('fireflies')}>
              <span className="neighbor-name">Fireflies</span>
              <span className="neighbor-note">Firefly larvae overwinter in the same moist leaf litter that keeps earthworm populations accessible near the surface — both species require the same undisturbed ground</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('common-nighthawk')}>
              <span className="neighbor-name">Common Nighthawk</span>
              <span className="neighbor-note">Another aerial displayer at dusk in spring — hunts open sky while the woodcock works the clearing below, both timed to the same warm March and April evenings</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
