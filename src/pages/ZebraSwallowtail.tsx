import type { Page } from '../App'

interface ZebraSwallowtailProps {
  onNavigate: (page: Page) => void
}

export default function ZebraSwallowtail({ onNavigate }: ZebraSwallowtailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Zebra_Swallowtail_-_Eurytides_marcellus%2C_Mason_Neck%2C_Virginia_%2835477400636%29.jpg/1280px-Zebra_Swallowtail_-_Eurytides_marcellus%2C_Mason_Neck%2C_Virginia_%2835477400636%29.jpg"
          alt="A Zebra Swallowtail butterfly with wings spread showing its bold black and white stripes, the long hindwing tails, and the red spots near the base of the hindwing"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={921}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Judy Gallagher&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Zebra_Swallowtail_-_Eurytides_marcellus,_Mason_Neck,_Virginia_(35477400636).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Zebra Swallowtail</h1>
        <p className="hero__lead">
          The Zebra Swallowtail is one of the most distinctive butterflies in eastern
          North America — its wings are striped black and white like a zebra, with
          long, graceful tails on the hindwings and vivid red spots near the body.
          Wingspan is 2.5 to 4 inches. Its flight is fast and swooping, and it is
          difficult to confuse with any other butterfly. It is tied entirely to pawpaw
          (Asimina triloba) for caterpillar development — no pawpaw, no Zebra
          Swallowtail — making its presence a direct indicator of native pawpaw in
          the landscape. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Zebra Swallowtails are fast, erratic fliers that move rapidly between
            forest edge, open areas, and stream corridors where pawpaw grows. Adults
            nectar on a variety of native wildflowers — native milkweeds, native
            thistles, native phlox, blueberries, and redbud are favorites. Males
            congregate at mud puddles in stream edges to drink mineral-rich water, and
            groups of five to fifteen males can sometimes be found puddling together
            in late April and May — one of the most reliable ways to see this species.
            The long hindwing tails flutter as the butterfly flies, mimicking the
            antennae of a larger insect and possibly confusing predators about which
            end is the head. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Zebra_Swallowtail_-_Eurytides_marcellus%2C_Eastern_Neck_National_Wildlife_Refuge%2C_Rock_Hall%2C_Maryland%2C_June_18%2C_2022_%2852979196541%29.jpg/1280px-Zebra_Swallowtail_-_Eurytides_marcellus%2C_Eastern_Neck_National_Wildlife_Refuge%2C_Rock_Hall%2C_Maryland%2C_June_18%2C_2022_%2852979196541%29.jpg"
            alt="A Zebra Swallowtail butterfly nectaring on a flower from a slightly different angle showing the underside striping and the long elegant hindwing tails"
            width={1280}
            height={1280}
            loading="lazy"
            style={{ objectPosition: 'center top' }}
          />
          <figcaption>
            There are multiple generations of Zebra Swallowtails per year, and they
            vary in size: the first spring generation (March–May) is smaller with shorter
            tails; the summer and fall generations are larger with dramatically longer
            tails. The largest fall adults can have hindwing tails nearly two inches long.
            <span className="photo-credit"> Photo: Judy Gallagher&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Zebra_Swallowtail_-_Eurytides_marcellus,_Eastern_Neck_National_Wildlife_Refuge,_Rock_Hall,_Maryland,_June_18,_2022_(52979196541).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Zebra Swallowtails overwinter as pupae. Adults emerge in early spring —
            sometimes as early as late March — coinciding with the opening of pawpaw
            flower buds. There are two to three generations per year. Females lay
            single green eggs on the underside of young pawpaw leaves; the caterpillars
            are green with yellow and black banding. Pawpaw leaves contain acetogenins —
            compounds toxic to many insects — but Zebra Swallowtail caterpillars are
            immune and sequester them, making the adult butterfly itself distasteful
            to predators. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Zebra Swallowtail is common in areas with pawpaw, uncommon where pawpaw
            is absent, and absent entirely from regions beyond the pawpaw&apos;s native range.
            [1] It is not of conservation concern where pawpaw is present, but its
            tight host plant specialization means that any reduction in native pawpaw
            from forest understory — due to deer overbrowsing, invasive shrubs, or
            development — directly translates to reduced Zebra Swallowtail populations.
            Planting pawpaw is one of the most targeted actions an individual can take
            for this species. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant pawpaw (Asimina triloba). Pawpaw is the only caterpillar host plant
              for the Zebra Swallowtail. It is a native understory tree that produces
              the largest edible fruit native to North America — delicious, tropical-tasting,
              and excellent wildlife food. It spreads into colonies via root sprouts
              and needs a cross-pollinator (two genetically different plants) to fruit.
              [2]
            </li>
            <li>
              Protect existing pawpaw patches from deer. Deer heavily browse young
              pawpaw sprouts and have significantly reduced pawpaw regeneration in many
              forests. Where deer pressure is high, fencing or tree tubes protect new
              plantings until they are tall enough to escape browsing. [2]
            </li>
            <li>
              Create or protect muddy stream and seep edges. Males congregate at mud
              puddles to drink mineral-rich water. A moist, muddy area with bare soil
              near a stream bank or garden water feature — left intentionally unplanted
              or mulched — provides puddling habitat that draws males and makes the
              species easy to observe. [2]
            </li>
            <li>
              Plant native milkweed for adult nectar. Zebra Swallowtails strongly
              prefer native common milkweed (Asclepias syriaca) and butterfly weed
              (Asclepias tuberosa) for nectar; a milkweed patch near a pawpaw stand
              supports both the adult nectar needs and caterpillar host in the same
              area. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('pawpaw')}>
            <span className="neighbor-name">Pawpaw</span>
            <span className="neighbor-note">The only caterpillar host plant for Zebra Swallowtails — without native pawpaw, this butterfly cannot breed. Pawpaw also produces edible fruit and supports many other wildlife species.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('spicebush-swallowtail')}>
            <span className="neighbor-name">Spicebush Swallowtail</span>
            <span className="neighbor-note">Another large woodland-edge swallowtail; Spicebush Swallowtails use the forest understory year-round while Zebra Swallowtails follow pawpaw patches through the floodplain forest.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
            <span className="neighbor-name">Eastern Tiger Swallowtail</span>
            <span className="neighbor-note">The most common large swallowtail; Zebra and Tiger Swallowtails are frequently seen together nectaring at native wildflowers during the Zebra Swallowtail&apos;s brief spring flight.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('ruby-throated-hummingbird')}>
            <span className="neighbor-name">Ruby-throated Hummingbird</span>
            <span className="neighbor-note">Competes for nectar from native milkweeds and woodland wildflowers with Zebra Swallowtails in the same forest-edge habitat; both arrive in mid-April after overwintering or migrating.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Eurytides_marcellus/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Zebra Swallowtail</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Eurytides-marcellus" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Zebra Swallowtail</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
