import type { Page } from '../App'

interface CloudlessSulphurProps {
  onNavigate: (page: Page) => void
}

export default function CloudlessSulphur({ onNavigate }: CloudlessSulphurProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cloudless_sulphur_%28Phoebis_sennae%29_male.jpg/1280px-Cloudless_sulphur_%28Phoebis_sennae%29_male.jpg"
          alt="A male Cloudless Sulphur butterfly with wings open showing its pure bright yellow upperwing with a small black dot on the forewing"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={857}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Anne Toal&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Cloudless_sulphur_(Phoebis_sennae)_male.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Cloudless Sulphur</h1>
        <p className="hero__lead">
          The Cloudless Sulphur is the largest and most recognizable of the North
          American sulphur butterflies. Males are a brilliant, uniform lemon yellow
          with a single small black spot on the forewing; females are yellow to greenish
          with a more heavily marked border. Wingspan is 2.25 to 3.25 inches.
          It is a strong, fast migrant that moves south in tremendous numbers each
          fall — lines of yellow butterflies streaming purposefully southward along
          coastlines and ridges are a reliable fall spectacle across the East. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Cloudless Sulphurs are fast, purposeful fliers. They visit a wide variety
            of wildflowers for nectar, with a strong preference for tubular red or
            orange flowers — native cardinal flower (Lobelia cardinalis), native
            thistles, bougainvillea, and hibiscus are heavily used. Their long proboscis
            reaches deep flowers that smaller butterflies cannot access. In fall,
            migrating adults funnel along the Atlantic Coast and can be seen by the
            hundreds moving through coastal areas and dunes. They do not form
            aggregations like Monarchs but fly individually in the same direction with
            obvious purpose. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Cloudless_Sulphur_%28Phoebis_sennae%29_%2836612979900%29.jpg/1280px-Cloudless_Sulphur_%28Phoebis_sennae%29_%2836612979900%29.jpg"
            alt="A Cloudless Sulphur butterfly nectaring with wings partially open showing the bright yellow coloring and the intricate silvery-green underside markings"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            At rest or nectaring, Cloudless Sulphurs often hold wings partly open,
            revealing the intricate underside pattern: silvery-green with small
            brown spots and a double silver dot on the hindwing. This pattern provides
            camouflage when roosting among yellow-green leaves and seed pods.
            <span className="photo-credit"> Photo: Andrew Cannizzaro&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Cloudless_Sulphur_(Phoebis_sennae)_(36612979900).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Cloudless Sulphurs breed year-round in Florida and the Gulf states, and
            migrate north each spring and summer to breed across the eastern US. They
            cannot survive cold winters and do not overwinter north of the Gulf Coast.
            Caterpillars feed on native Senna species — wild senna (Senna hebecarpa),
            partridge pea (Chamaecrista fasciculata), and Maryland senna. The caterpillar
            is yellow-green with a black-spotted yellow side stripe, providing superb
            camouflage on senna leaves. Fall migration southward is one of the most
            visible butterfly migrations in eastern North America. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Cloudless Sulphur is common and not of conservation concern. [1] Its
            abundance in the north varies year to year depending on the strength of
            the northern breeding push from the Gulf states. In good years, fall
            migrations can be spectacular; in poor years almost no northward movement
            occurs. The most reliable way to attract Cloudless Sulphurs is to plant
            native Senna species as host plants and native red or tubular wildflowers
            for adult nectar. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant wild senna (Senna hebecarpa or S. marilandica). Wild senna is a
              tall native perennial with yellow flowers that is the primary caterpillar
              host plant for Cloudless Sulphur north of the Gulf states. It grows in
              full sun in average to moist soil and reaches four to six feet — a dramatic
              addition to the back of a native garden bed. [2]
            </li>
            <li>
              Plant partridge pea (Chamaecrista fasciculata). This native annual Senna
              relative is the easiest Senna to establish from seed. It blooms yellow in
              summer and supports Cloudless Sulphur and several other sulphur species
              as caterpillar host plant; it also fixes nitrogen in the soil. [2]
            </li>
            <li>
              Plant native cardinal flower (Lobelia cardinalis) for fall migrant nectar.
              Cloudless Sulphurs strongly prefer tubular red and orange flowers, and
              cardinal flower is the single best late-season nectar plant for fall migrants.
              It thrives in moist soil and partial shade along stream banks and wet areas.
              [2]
            </li>
            <li>
              Watch for fall migrants in September and October. Cloudless Sulphur
              migration is one of the most accessible butterfly migrations in eastern
              North America — look along south-facing slopes, coastal dunes, and forest
              edges on clear days in September and October for streams of yellow
              butterflies moving purposefully southward. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('painted-lady')}>
            <span className="neighbor-name">Painted Lady</span>
            <span className="neighbor-note">Shares the same migratory strategy — breeding in the south and sending immigrants north each spring, unable to survive northern winters; both species have spectacular fall southward movements.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('common-buckeye')}>
            <span className="neighbor-name">Common Buckeye</span>
            <span className="neighbor-note">Another southern-breeding migratory butterfly that appears in the north through summer; Buckeyes and Cloudless Sulphurs often share open, sunny late-summer gardens.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('wild-senna')}>
            <span className="neighbor-name">Wild Senna</span>
            <span className="neighbor-note">The primary caterpillar host plant for Cloudless Sulphur in the mid-Atlantic and northeast — planting wild senna is the single most effective action to support this species locally.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('partridge-pea')}>
            <span className="neighbor-name">Partridge Pea</span>
            <span className="neighbor-note">A native annual Senna relative that also serves as a caterpillar host for Cloudless Sulphur and is among the easiest native wildflowers to establish from seed in sunny, disturbed areas.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Phoebis_sennae/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Cloudless Sulphur</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Phoebis-sennae" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Cloudless Sulphur</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
