import type { Page } from '../App'

interface AmericanLadyProps {
  onNavigate: (page: Page) => void
}

export default function AmericanLady({ onNavigate }: AmericanLadyProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/366_American_Lady_-_Vanessa_virginiensis%2C_Merrimac_Farm_Wildlife_Management_Area%2C_Aden%2C_Virginia.jpg/1280px-366_American_Lady_-_Vanessa_virginiensis%2C_Merrimac_Farm_Wildlife_Management_Area%2C_Aden%2C_Virginia.jpg"
          alt="An American Lady butterfly with wings fully open showing its orange and black upperwing pattern with the distinctive white spot on the forewing orange area"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={818}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Judy Gallagher&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:366_American_Lady_-_Vanessa_virginiensis,_Merrimac_Farm_Wildlife_Management_Area,_Aden,_Virginia.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>American Lady</h1>
        <p className="hero__lead">
          The American Lady is a close relative of the Painted Lady, with similar orange
          and black patterning — but the two are easy to tell apart on the underside:
          the American Lady has two large eyespots on the hindwing underside while the
          Painted Lady has four small ones. On the upperwing, the American Lady has a
          distinctive small white spot inside the orange area of the forewing that the
          Painted Lady lacks. Wingspan is 1.75 to 2.6 inches. It is common in open,
          sunny areas across eastern North America. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            American Ladies are fast, energetic fliers of open sunny areas. Adults
            nectar on a variety of native wildflowers — native asters, native thistles,
            milkweeds, goldenrod, and native clovers are favorites. They are among the
            most common butterflies at native wildflower gardens through summer. Males
            perch on the ground or low vegetation in sunny spots, sometimes for hours,
            challenging any other butterfly that flies through. The two large eyespots
            on the hindwing underside are the most reliable field mark: they resemble
            owl eyes and have been documented as a predator-startling defense. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/American_lady_on_purple_coneflower_%2874770%29.jpg/1280px-American_lady_on_purple_coneflower_%2874770%29.jpg"
            alt="An American Lady butterfly nectaring on purple coneflower showing the orange and black wing pattern from above"
            width={1280}
            height={948}
            loading="lazy"
          />
          <figcaption>
            American Ladies are highly attracted to native coneflowers (Echinacea),
            which bloom at the peak of the summer flight period. The combination of
            open landing platform and abundant nectar makes coneflowers one of the
            most productive butterfly-watching plants in the native garden.
            <span className="photo-credit"> Photo: Rhododendrites&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:American_lady_on_purple_coneflower_(74770).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            American Ladies overwinter as adults in the South and migrate north in
            spring; they cannot reliably survive cold northern winters. Two to three
            generations are produced each year, with adults present from April through
            October. Caterpillars feed on pussytoes (Antennaria), pearly everlasting
            (Anaphalis), and other plants in the aster family — typically making silk
            nests of tied leaves that are the easiest way to locate caterpillars.
            Unlike the Painted Lady, which uses dozens of host plants, the American
            Lady specializes on this narrow group of plants with woolly leaves. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The American Lady is common and not of conservation concern. [1] Its
            population varies year to year depending on spring immigration from southern
            overwintering populations. It is less abundant in the north than the Painted
            Lady in most years but far more regular. The most significant limitation in
            the suburban landscape is loss of pussytoes and pearly everlasting — native
            plants of old fields and dry, open ground that are declining as developed
            landscapes mature. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant pussytoes (Antennaria plantaginifolia or A. neglecta). Pussytoes
              is the primary caterpillar host plant for American Lady. It is a low-growing
              native groundcover for dry, sunny, well-drained soil — perfect for dry
              slopes, rock gardens, and thin lawn margins. It rarely grows in standard
              garden beds but thrives in the spare corners where little else grows. [2]
            </li>
            <li>
              Plant pearly everlasting (Anaphalis margaritacea). Pearly everlasting is
              an alternative host plant, slightly taller than pussytoes, native to dry
              open areas and disturbed ground. Its white papery flowers are also a
              nectar source and dry beautifully for arrangements. [2]
            </li>
            <li>
              Plant native purple coneflower (Echinacea purpurea). Coneflower is one
              of the most reliable nectar plants for American Ladies and many other
              summer butterflies. Its flat, open flower heads are easy landing platforms
              and it blooms for weeks in July and August. [2]
            </li>
            <li>
              Allow old-field plants to grow on dry, sunny margins. American Lady host
              plants — pussytoes, everlastings — are old-field natives that thrive
              where the soil is thin, dry, and compacted. A dry sunny bank or slope
              that is mowed only once a year in late fall can support these plants
              and the butterflies that depend on them. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('painted-lady')}>
            <span className="neighbor-name">Painted Lady</span>
            <span className="neighbor-note">The closest relative and lookalike — tell them apart by the hindwing underside (2 large eyespots = American Lady; 4 small = Painted Lady) and the small white spot inside the orange forewing area of the American Lady.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-admiral')}>
            <span className="neighbor-name">Red Admiral</span>
            <span className="neighbor-note">A fellow Vanessa butterfly often seen in the same open gardens; Red Admirals visit the same native wildflowers and share the fast, territorial flight style common to all Vanessa species.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('purple-coneflower')}>
            <span className="neighbor-name">Purple Coneflower</span>
            <span className="neighbor-note">One of the most reliable nectar plants for American Ladies — a native garden with purple coneflower in bloom in July reliably draws American Ladies, Painted Ladies, and many other summer butterflies.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('canada-goldenrod')}>
            <span className="neighbor-name">Canada Goldenrod</span>
            <span className="neighbor-note">A premier late-summer and fall nectar source for American Ladies nectaring before fall departure; goldenrod blooming in September is essential fuel for many migrating and late-season butterfly species.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Vanessa_virginiensis/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: American Lady</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Vanessa-virginiensis" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — American Lady</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
