import type { Page } from '../App'

interface LunaMothProps {
  onNavigate: (page: Page) => void
}

export default function LunaMoth({ onNavigate }: LunaMothProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Actias_luna-male.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original"
          alt="Luna Moth resting on tree bark with pale green wings fully spread, long elegant tails trailing — wings are a single night of adult life"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: David notMD · <a href="https://commons.wikimedia.org/wiki/File:Actias_luna-male.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> via Wikimedia Commons */}
          Photo: David notMD&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Actias_luna-male.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Luna Moth</h1>
        <p className="hero__lead">
          Pale green wings, sweeping hindwing tails, eyespots that glow like
          moons — one of the most beautiful insects in North America. The adult
          has no mouth. It exists for one purpose only: to find a mate in the
          dark. Everything it needs is in the hardwood canopy of your yard.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">Named for the moon</h2>
          <p>
            The Luna Moth (<em>Actias luna</em>) is a giant silk moth in the
            family Saturniidae. Its wingspan reaches four to four and a half
            inches, and its trailing hindwing tails add another inch or two of
            rippling, translucent green. The pale celadon coloring is not
            decoration — it is camouflage. Against the underside of a leaf or
            a pale birch trunk, a resting Luna Moth is nearly invisible. The
            name <em>luna</em> refers to the moon-shaped eyespots on each
            hindwing, ringed in yellow and edged in black.
          </p>
          <p>
            The hindwing tails serve a second purpose beyond visual camouflage.
            Luna Moths are among the species most studied for anti-bat
            adaptations. The long, spiraling tails create an acoustic false
            target: when a bat hunts by echolocation, the tails return a signal
            that mimics the moth&apos;s body. A bat attacking the tail instead
            of the thorax gives the moth a chance to escape. Studies have shown
            Luna Moths with intact tails survive bat attacks at significantly
            higher rates than those with tails removed.
          </p>
          <p>
            Like all Saturniid silk moths, adult Luna Moths have vestigial
            mouthparts. They cannot eat or drink. From the moment the adult
            chews through its cocoon, it lives on fat reserves built during its
            caterpillar stage — reserves that must sustain a week to ten days
            of mate-searching, reproduction, and death. A female lays her eggs
            in small clusters on host tree leaves and dies shortly after. A
            male spends his nights navigating toward the female&apos;s pheromone
            plume with comb-like antennae that are among the most sensitive
            chemical detectors in the animal kingdom.
          </p>
        </section>

        <section aria-labelledby="trees-heading">
          <h2 id="trees-heading">What the caterpillar needs</h2>
          <p>
            Luna Moth caterpillars are host-plant specialists. They develop on a
            short list of native hardwood trees: black walnut, hickory,
            sweetgum, persimmon, white birch, and American beech are the primary
            hosts across their range. The caterpillar is brilliant green and
            grows to nearly three inches long over five instars, feeding on
            leaves from late spring through summer before spinning a thin,
            papery cocoon among fallen leaves on the ground.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Actias_luna_4th_instar_sjh.JPG"
                  alt="Luna Moth caterpillar in its fourth instar — bright green with yellow-tipped spines, preparing to spin a papery cocoon in leaf litter"
                  loading="lazy"
                />
                <figcaption>
                  The caterpillar feeds on walnut, sweet gum, persimmon, birch, and hickory for several weeks, then spins a papery cocoon in the leaf litter on the forest floor. When it emerges as an adult, it has no functional mouth. The adult lives, on average, seven days. Its only purpose is reproduction.
                  <span className="photo-credit"> Photo: Kugamazog · <a href="https://commons.wikimedia.org/wiki/File:Actias_luna_4th_instar_sjh.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            The dependency on native hardwoods is absolute. Like other Saturniid
            silk moths, Luna caterpillars cannot complete development on
            non-native ornamental trees — the phenology is wrong, the leaf
            chemistry does not match their gut flora, and the nutritional
            composition fails to build the fat reserves the adults will need. A
            neighborhood replanted entirely with ornamental pears, crepe myrtles,
            and Japanese maples supports no Luna Moth caterpillars regardless of
            how many adults pass through on warm spring nights.
          </p>
          <p>
            Native black walnut — often dismissed as a &quot;problem tree&quot;
            because of juglone toxicity near vegetable gardens — is one of the
            highest-value Luna Moth host trees in the eastern half of North
            America. So are hickories, which are slow to establish but nearly
            unsurpassed in ecological value: a single mature shagbark hickory
            supports hundreds of caterpillar species and produces mast crops
            that feed mammals and birds through winter. The trees that Luna Moths
            need are the trees that hold the food web together.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">How light and pesticides break the cycle</h2>
          <p>
            Luna Moths are strongly attracted to artificial light — drawn to
            porch lights, streetlamps, and illuminated windows with the same
            phototactic pull that affects all giant silk moths. A male that
            circles a light source for hours loses fat reserves irreplaceable
            once the adult emerges. He may exhaust himself before he reaches a
            female. In densely lit suburbs, the light density is high enough
            that significant numbers of emerging males never successfully mate.
          </p>
          <p>
            The problem is seasonal and concentrated. In the mid-Atlantic and
            Midwest, the peak adult flight in the first brood falls in
            April and May. A second brood in the South emerges June through July.
            These are the windows when artificial light does the most damage to
            mating success. Turning off or redirecting outdoor lights during
            these weeks is not a trivial reduction in impact — it removes a
            significant barrier during the only period that matters for that
            generation.
          </p>
          <p>
            Pesticides represent a second, often more total, threat. Aerial
            sprays applied for spongy moth (formerly gypsy moth) control —
            including Bt (<em>Bacillus thuringiensis</em>) formulations —
            kill Luna caterpillars alongside their intended targets. Bt is
            broadly promoted as &quot;safe&quot; because it is derived from a
            bacterium, but it is non-selective for lepidopteran larvae: any
            caterpillar that ingests treated foliage is killed. In areas under
            active aerial spray programs, Luna Moth caterpillar populations can
            be functionally eliminated from an entire region for a season.
            Ground-applied broad-spectrum insecticides create the same outcome
            at smaller scales — a single spray event on a host tree in June
            removes that tree&apos;s contribution to the local Luna Moth
            population for the year.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that support Luna Moths</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Fallen_leaves.jpg" alt="Autumn leaves lying on garden ground" loading="lazy" />
            <figcaption>
              Luna moth cocoons spin onto twigs above the leaf litter, and the pupae overwinter inside. Removing autumn leaves removes the insulating layer those pupae depend on to survive below-zero nights. The simplest intervention is also the most complete: don't rake here.
              <span className="photo-credit"> Photo: Public domain&nbsp;·&nbsp;<a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank" rel="noopener noreferrer">Public domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant native hardwood host trees.</strong>{' '}
              Black walnut, shagbark hickory, sweetgum, and white birch are the
              highest-value Luna Moth hosts in eastern North America. Even a
              young tree planted today will begin producing caterpillar habitat
              within a few seasons. Hickories and walnuts are long-lived
              investments — trees that will support insects, birds, and moths
              for a century or more. If your yard has room for one new canopy
              tree, a native walnut or hickory is among the highest-impact
              choices you can make.
            </li>
            <li>
              <strong>Reduce outdoor lighting during May and June.</strong>{' '}
              April through July is the primary Luna Moth adult flight window
              across most of eastern North America. Switching porch lights and
              decorative exterior fixtures to motion-activation during these
              months significantly reduces the artificial light trap. Warm-amber
              LED bulbs are less attractive to moths than cool-white or
              blue-white spectra. Directing fixtures downward rather than
              broadcasting light outward and upward reduces the total light
              footprint without sacrificing function.
            </li>
            <li>
              <strong>Stop broad-spectrum insecticide use on host trees.</strong>{' '}
              Avoid pyrethroid, organophosphate, and Bt sprays on walnut,
              hickory, sweetgum, and birch during the caterpillar season (May
              through August). The large green caterpillar you find on your
              black walnut in July is a Luna Moth larva. It will not harm the
              tree. Leave it. If you are in an area participating in aerial
              spray programs, consider opting out of municipal applications
              where local programs permit exemption.
            </li>
            <li>
              <strong>Leave leaf litter under host trees through spring.</strong>{' '}
              Luna Moth cocoons overwinter in fallen leaves on the ground
              beneath their host trees. Raking, blowing, and bagging leaf litter
              in fall destroys that cohort. A circle of undisturbed leaf litter
              beneath your walnut or hickory from October through May is
              sufficient to protect overwintering pupae. The moths that emerge
              from that ground in April and May are the return on that one
              act of restraint.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">Seven days, one purpose</h2>
          <p>
            An adult Luna Moth has approximately seven to ten days from emergence
            to death. In that window, it must navigate a landscape increasingly
            disrupted by artificial light, avoid bats with acoustic trickery, and
            locate a mate entirely by scent across whatever distance the wind
            carries the pheromone plume. It does this without eating, without
            drinking, and without any second chance. The caterpillar that
            fed through summer is the only fuel there is.
          </p>
          <p>
            Luna Moths are not rare in the way that a bird with a 200-mile range
            is rare. They are widespread — present in every state east of the
            Great Plains. But &quot;present&quot; and &quot;reproducing
            successfully&quot; are not the same thing in a landscape of porch
            lights, ornamental trees, and annual pesticide applications. The gap
            between where Luna Moths exist and where they can actually complete
            their life cycle is growing. That gap is the size of a yard.
          </p>
          <p>
            When a female deposits her eggs in clusters of four or five on a
            black walnut leaf on a warm May night, she is doing what Luna Moths
            have done on this continent for tens of thousands of years. The leaf
            is the same. The chemistry of the caterpillar&apos;s digestion is the
            same. The only thing that has changed is the landscape around the
            tree — and whether anyone thought to leave the leaf litter beneath it.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build a yard that supports Luna Moths and the whole food web.</strong>{' '}
            Remove pesticides with the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            , protect overwintering pupae with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , add native host trees with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , and see what else is out there with the{' '}
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
