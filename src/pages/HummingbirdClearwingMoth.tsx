import type { Page } from '../App'

interface HummingbirdClearwingMothProps {
  onNavigate: (page: Page) => void
}

export default function HummingbirdClearwingMoth({ onNavigate }: HummingbirdClearwingMothProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/-_7853_%E2%80%93_Hemaris_thysbe_%E2%80%93_Hummingbird_Clearwing_Moth_-_19291853560.jpg/1280px--_7853_%E2%80%93_Hemaris_thysbe_%E2%80%93_Hummingbird_Clearwing_Moth_-_19291853560.jpg"
          alt="A Hummingbird Clearwing Moth hovering at a flower with its mostly transparent wings blurred by motion, showing its chunky olive-green and red-brown body"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Wildreturn&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:-_7853_%E2%80%93_Hemaris_thysbe_%E2%80%93_Hummingbird_Clearwing_Moth_-_19291853560.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Hummingbird Clearwing Moth</h1>
        <p className="hero__lead">
          The Hummingbird Clearwing Moth is a day-flying hawk moth that genuinely looks
          like a small hummingbird. It hovers in front of flowers, beats its wings
          rapidly, and extends a long proboscis to reach nectar — exactly the way a
          hummingbird does, but it is a moth with a wingspan of 1.5 to 2.25 inches.
          Its wings are mostly clear — the scales rub off on the first flight,
          leaving transparent &quot;windows.&quot; Most people who see one for the first time
          are convinced they have seen a hummingbird. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Hummingbird Clearwing Moths hover and dart between flowers with a humming
            wing sound audible at close range. They fly rapidly from flower to flower,
            hovering a few seconds at each, extending a proboscis that can be 1.5 times
            the length of the body. Native wildflowers with tubular or deep flowers
            are favorites: native beebalm (Monarda), native phlox, native thistles,
            viburnum, and native azaleas are all heavily used. Unlike actual hummingbirds,
            they do not perch at flowers — they hover throughout the entire visit.
            They are active from morning through late afternoon on warm, sunny days. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Hemaris_thysbe.jpg/1280px-Hemaris_thysbe.jpg"
            alt="A Hummingbird Clearwing Moth at rest showing its chunky green and burgundy body, feathery antennae, and the red-brown wing borders"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            At rest, the Hummingbird Clearwing Moth&apos;s body structure is clearly that
            of a moth — the striped abdomen, the feathery antennae, and the wing
            shape are distinctive. The red-brown borders of the otherwise-clear wings
            are visible at rest in a way they are not during hovering flight.
            <span className="photo-credit"> Photo: Lonniehuffman&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Hemaris_thysbe.jpg" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Hummingbird Clearwing Moths overwinter as pupae in leaf litter and soil.
            Adults emerge in late spring — May in most of the eastern US — and are
            present through August, with two generations in much of the range. Females
            lay eggs on viburnum, honeysuckle, cherries, and hawthorn; caterpillars
            are green with a small horn at the rear end and feed on leaves before
            dropping to the ground to pupate. Adults live only a few weeks but are
            conspicuous feeders at wildflowers through their entire adult life. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Hummingbird Clearwing Moth is common and not of conservation concern
            across eastern North America. [1] Its use of widespread native shrubs —
            viburnum, hawthorn, cherries — as caterpillar host plants makes it broadly
            resilient. The primary limiting factor in suburban areas is the availability
            of native wildflowers with tubular flowers for adult nectar. Where native
            beebalm, phlox, and other native wildflowers grow, Hummingbird Clearwings
            reliably appear. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant native beebalm (Monarda fistulosa or Monarda didyma). Native beebalm
              is the single most reliable plant for attracting Hummingbird Clearwing
              Moths; they visit it more consistently than almost any other wildflower.
              It blooms in July and August, exactly when clearwing activity peaks. [2]
            </li>
            <li>
              Plant native phlox species. Wild blue phlox (Phlox divaricata) and native
              garden phlox (Phlox paniculata) are heavily used for nectar — their
              tubular flowers are sized perfectly for the clearwing&apos;s proboscis. [2]
            </li>
            <li>
              Plant native viburnum. Viburnums (Viburnum lentago, V. dentatum, V. prunifolium)
              are key host plants for clearwing caterpillars AND excellent wildlife shrubs
              in their own right — they support dozens of other moth and butterfly species
              and produce berries eaten by migratory birds. [2]
            </li>
            <li>
              Leave leaf litter undisturbed under trees through spring. Hummingbird
              Clearwing Moths pupate in loose soil and leaf litter in fall. Deep leaf
              removal in autumn or early spring can destroy overwintering pupae before
              adults emerge. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('ruby-throated-hummingbird')}>
            <span className="neighbor-name">Ruby-throated Hummingbird</span>
            <span className="neighbor-note">The animal the clearwing moth is most often mistaken for — both hover at flowers, extend a long tongue or proboscis for nectar, and visit the same native wildflowers like beebalm and phlox.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('cecropia-moth')}>
            <span className="neighbor-name">Cecropia Moth</span>
            <span className="neighbor-note">A member of the same moth order; the Cecropia and Clearwing represent opposite ends of the hawk moth spectrum — one of the largest night-flying moths versus one of the smallest day-flying ones.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-bumble-bee')}>
            <span className="neighbor-name">American Bumble Bee</span>
            <span className="neighbor-note">Shares the same native beebalm and phlox patches for nectar; clearwings, bumble bees, and hummingbirds can often be seen at the same beebalm clump simultaneously in July.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('tiger-swallowtail')}>
            <span className="neighbor-name">Eastern Tiger Swallowtail</span>
            <span className="neighbor-note">Visits the same native milkweed and phlox patches; a summer garden with native beebalm and phlox typically attracts clearwings, swallowtails, and hummingbirds at the same time.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Hemaris_thysbe/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Hummingbird Clearwing Moth</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Hemaris-thysbe" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Hummingbird Clearwing Moth</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
