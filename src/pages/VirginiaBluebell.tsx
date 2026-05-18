import type { Page } from '../App'

interface VirginiaBluebellProps {
  onNavigate: (page: Page) => void
}

export default function VirginiaBluebell({ onNavigate }: VirginiaBluebellProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/364590990/large.jpg"
          alt="Virginia Bluebell in bloom — nodding clusters of blue flowers with pink buds at McIntire Park, Charlottesville, Virginia, April 2024"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: lemasney&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/206152960" target="_blank" rel="noopener noreferrer">iNaturalist obs. 206152960</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Virginia Bluebell flowers in April, turns yellow by May, and disappears by June.<br />The bare soil it leaves behind is not empty ground.</h1>
        <p className="hero__lead">
          Virginia Bluebell (<em>Mertensia virginica</em>) is a spring ephemeral — a plant that
          completes its entire visible life in 8 to 10 weeks each year, then stores the season's
          energy in an underground rhizome and goes dormant until the following March. The leaves
          turn yellow and fall. The soil above looks empty all summer. The plant is alive below
          ground.
        </p>
        <p className="hero__lead">
          Most homeowners who see the leaves yellowing in May assume the plant is dying and dig
          it up. That removes the rhizome. The plant does not return the following spring.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="senescence-heading">
          <h2 id="senescence-heading">Yellow leaves in May — the plant pulling energy back into its root</h2>
          <p>
            Virginia Bluebell pushes above the soil in late March, before most deciduous trees
            have leafed out. At that point, the forest floor receives 60 to 80 percent of full
            sunlight. By late May, when the canopy has closed, that figure drops to 5 to 15
            percent. The plant's entire photosynthetic window is the six weeks between those
            two dates.
          </p>
          <p>
            When the flowers have finished and the seeds have formed, the plant begins pulling
            carbon from its leaves back into the rhizome below ground. This process —
            senescence — is visible as yellowing. By the time the leaves fall, that transfer
            is complete. The rhizome holds all the reserves the plant will need to send up new
            growth in March. What looks like a dying plant is a plant that just finished its year.
          </p>
          <p>
            If you dig into the soil beneath a vanished bluebell patch in July or August and
            find a fleshy, carrot-shaped root, the plant is alive. If you disturb that root —
            by digging, by planting annuals on top of the patch, or by rototilling — the plant
            does not return.
          </p>
        </section>

        <section aria-labelledby="color-heading">
          <h2 id="color-heading">Pink buds, blue flowers — the color shift happens inside each petal as the flower opens</h2>
          <p>
            Virginia Bluebell flowers open pink in bud and shift to blue as they mature. The
            change happens in the cell vacuoles inside each petal: as the flower opens, the pH
            rises and the anthocyanin pigments shift from red wavelengths toward blue. A single
            cluster at peak bloom shows both colors at once — older open flowers in blue-purple,
            younger buds still pink at the tips.
          </p>
          <p>
            This color difference is visible to bumblebees, which distinguish between the two
            stages. Open blue flowers have accumulated nectar at the base of the tube. Pink buds
            have not. Bumblebee queens foraging in April bypass the buds and work the open
            flowers.
          </p>
          <p>
            Ruby-throated Hummingbirds arrive in the Midwest in mid-April — the same weeks when
            Virginia Bluebell is at peak bloom. The flower tubes are roughly 10 to 15 mm long,
            a length accessible to a hummingbird's bill. Before Wild Columbine opens later in
            April, Virginia Bluebell may be the only native flower in a woodland garden that a
            newly arrived hummingbird can reach.
          </p>
        </section>

        <section aria-labelledby="spring-azures-heading">
          <h2 id="spring-azures-heading">Spring Azures in April — the first butterfly of the woodland season nectaring before almost anything else has bloomed</h2>
          <p>
            Spring Azure butterflies (<em>Celastrina ladon</em>) fly in their first generation in
            March and April. In woodland and riparian settings, they appear before most other
            butterflies — small, pale blue, flickering low over the leaf litter. Virginia Bluebell
            blooms during those same weeks and provides nectar while almost no other native
            wildflower has opened.
          </p>
          <p>
            Spring Azures lay eggs on flowering shrubs — dogwood, New Jersey Tea, viburnums, wild
            cherry — not on Virginia Bluebell. But adults visit bluebell flowers for nectar
            throughout April, moving between the wildflower patches on the woodland floor and
            the shrubs where females will deposit eggs.
          </p>
        </section>

        <section aria-labelledby="growing-heading">
          <h2 id="growing-heading">Moist soil, spring sun, summer shade — and a marked spot where the plant went dormant</h2>
          <p>
            Virginia Bluebell grows naturally along river floodplains and moist woodland edges —
            places where soil holds water through spring and dries somewhat in summer under
            deciduous canopy. It tolerates temporary flooding. It does not tolerate dry
            conditions during its March–May growth period.
          </p>
          <p>
            In a yard: plant rhizomes in fall, one to two inches deep, in a spot that receives
            dappled or full sun in April before surrounding deciduous trees leaf out, then
            partial to full shade through summer. A north-facing slope under oaks or maples
            often works. A spot that gets afternoon sun in late March but is shaded by June
            is better than a spot in full sun year-round.
          </p>
          <p>
            Mark the location clearly when the plant goes dormant — a labeled stake, a ring
            of stones, a note on a garden map. Avoid placing summer annuals over the patch.
            Avoid rototilling the area. Virginia Bluebell spreads slowly by self-seed over
            several years; undisturbed plantings become loose colonies of a dozen or more
            plants.
          </p>
        </section>

        <section aria-labelledby="context-heading">
          <h2 id="context-heading">Virginia Bluebell opens in March — three to five weeks before Wild Columbine</h2>
          <p>
            In the eleven-native bloom sequence for a Camp Monarch garden, Virginia Bluebell
            opens the season earliest — often by mid-March in warmer years, reliably by early
            April. Wild Columbine follows in mid-April. New Jersey Tea blooms in May and June.
            The sequence continues through summer and into October.
          </p>
          <p>
            For a yard trying to support Ruby-throated Hummingbirds from their arrival in
            mid-April through their departure in September, the gap before Wild Columbine opens
            is the narrowest window. Virginia Bluebell covers those two to four weeks. It does
            not repeat after going dormant. Whether a yard has bluebell nectar available in the
            third week of April depends entirely on whether the rhizomes were planted the
            previous fall and left undisturbed.
          </p>
          <div className="connections">
            <h3>Plants and species connected to Virginia Bluebell</h3>
            <ul>
              <li>
                <button className="link-button" onClick={() => onNavigate('ruby-throated-hummingbird')}>
                  Ruby-throated Hummingbird
                </button>{' '}
                — arrives in mid-April; Virginia Bluebell blooms in the same weeks, before most other native nectar sources have opened
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('wild-columbine')}>
                  Wild Columbine
                </button>{' '}
                — blooms two to four weeks after Virginia Bluebell, carrying the early-spring nectar sequence forward for hummingbirds and Spring Azures
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('native-bees')}>
                  Native Bees
                </button>{' '}
                — bumblebee queens emerging in late March and April visit Virginia Bluebell flowers; they work the open blue flowers and bypass the still-closed pink buds
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
