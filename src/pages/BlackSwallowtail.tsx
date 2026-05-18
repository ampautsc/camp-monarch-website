import type { Page } from '../App'

interface BlackSwallowtailProps {
  onNavigate: (page: Page) => void
}

export default function BlackSwallowtail({ onNavigate }: BlackSwallowtailProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Pristine_Black_Swallowtail.jpg/960px-Pristine_Black_Swallowtail.jpg"
          alt="Female Black Swallowtail butterfly resting on a flower — black wings with two rows of yellow spots and blue scaling across the hindwing"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: Kenneth Dwain Harrelson&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Pristine_Black_Swallowtail.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Black Swallowtail</h1>
        <p className="hero__lead">
          The caterpillar eating your parsley is a Black Swallowtail. It will eat for about
          three weeks, hang itself from a stem, shed its skin, and emerge eleven days later
          as a large black butterfly with rows of yellow spots and a sweep of blue across
          the hindwing. What looks like a pest in the herb garden is a butterfly that
          belongs here.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="host-plants-heading">
          <h2 id="host-plants-heading">Parsley, dill, fennel — and a native host before the herb garden is planted</h2>
          <p>
            Black Swallowtail females (<em>Papilio polyxenes</em>) lay eggs on plants in
            the carrot family (Apiaceae): dill, parsley, fennel, and carrots in the
            vegetable garden, and Queen Anne's Lace along lawn edges and roadsides. In yards
            with native plantings, they also use Golden Alexanders (<em>Zizia aurea</em>),
            a native spring wildflower that blooms in April — before most herb gardens are
            even planted. Golden Alexanders is the Apiaceae host this butterfly used before
            European herbs arrived.
          </p>
          <p>
            A female finds a host plant by drumming her feet on the leaves. Chemoreceptors
            on her tarsi detect the volatile compounds specific to Apiaceae. When she gets
            a signal, she lays one egg — roughly the size of a pinhead — on the underside
            of a leaf or stem. She rarely lays two eggs on the same plant. Larvae from
            the same clutch will compete; the larger caterpillar eats the smaller one.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">Bird dropping, orange fork, and three weeks of eating</h2>
          <p>
            The egg hatches in four to nine days. The first-instar caterpillar is black
            with a white saddle — a close replica of a bird dropping at the size and scale
            when it is most vulnerable to predators. It eats its eggshell immediately
            after hatching, then begins on the leaf tissue.
          </p>
          <p>
            By the fourth and fifth instar, the caterpillar reaches one to two inches: bright
            green with black transverse bands, each band carrying a row of yellow-orange spots.
            Every instar carries an osmeterium — a forked orange gland folded behind the head.
            When the caterpillar is grabbed or prodded, it extends the osmeterium and releases
            a sharp, resinous smell. The smell contains terpene compounds absorbed from
            Apiaceae host tissue; it confuses wasps and tachinid flies long enough for the
            caterpillar to escape.
          </p>

          <figure className="species-content-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Papilio_polyxenes_%28black_swallowtail%29_caterpillar_on_Anthem_graveolens_%28dill%29.jpg/960px-Papilio_polyxenes_%28black_swallowtail%29_caterpillar_on_Anthem_graveolens_%28dill%29.jpg"
              alt="Black Swallowtail caterpillar on dill — fifth instar with bright green body, black bands, and yellow-orange spots along each segment"
              loading="lazy"
            />
            <figcaption>
              The fifth-instar Black Swallowtail caterpillar on dill (<em>Anethum graveolens</em>).
              After about twenty days of feeding through five instars, the caterpillar stops
              eating, purges its gut, and searches for a pupation site. It attaches to a stem
              in a J-shape, sheds its skin one final time, and hardens into a chrysalis.
              Chrysalis color — green or brown — is set by the local gene pool, not by the
              color of the attachment surface; most pupae in a location will be the color that
              matches the dominant background there.
              <span className="photo-credit"> Photo: Agdipasquale&nbsp;·&nbsp;<a href="https://creativecommons.org/publicdomain/zero/1.0/deed.en" target="_blank" rel="noopener noreferrer">CC0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            After about twenty days of feeding, the caterpillar stops eating, purges its gut,
            and searches for a pupation site on or near the host plant. It attaches by a silk
            girdle around its middle and a silk pad at its base, then sheds its skin one final
            time. The chrysalis that remains is held upright by the girdle — an adaptation
            that gives the butterfly's large wings room to unfold when it emerges. Inside,
            the transformation from caterpillar to adult takes about ten to fourteen days in
            summer, or overwinters until the following spring.
          </p>
        </section>

        <section aria-labelledby="threats-heading">
          <h2 id="threats-heading">Bt spray in the herb garden removes the caterpillars you cannot see</h2>
          <p>
            <em>Bacillus thuringiensis</em> subspecies <em>kurstaki</em> (Bt) is a bacterial
            spray marketed for caterpillar control in vegetable gardens. Caterpillars that eat
            treated foliage stop feeding and die within a few days. Bt does not distinguish
            Black Swallowtail larvae from pest species. A single application to parsley or
            dill during the growing season removes every caterpillar present on those plants.
          </p>
          <p>
            Tachinid fly parasitism adds a second pressure. <em>Compsilura concinnata</em>,
            a fly introduced from Europe in 1906 to control spongy moth, parasitizes Black
            Swallowtail caterpillars as one of more than 200 documented host species. The fly
            deposits a larva on or inside the caterpillar; the fly larva consumes the
            caterpillar from inside before it can pupate. In landscapes where both insecticide
            use and tachinid fly populations are high, local swallowtail reproduction can
            drop to near zero in a given season.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Three things that let the cycle finish</h2>

          <figure className="species-content-photo">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/269029704/large.jpeg"
              alt="Golden Alexanders flat-topped yellow umbel clusters in bloom — native carrot-family wildflower that Black Swallowtail females use as a larval host in April"
              loading="lazy"
            />
            <figcaption>
              Golden Alexanders (<em>Zizia aurea</em>) blooms in April before herb gardens are
              planted. Black Swallowtail females lay eggs on its leaves in the same window that
              <em> Andrena ziziae</em> — a specialist bee — collects pollen from its flowers.
              One planting supports two independent life cycles simultaneously.
              <span className="photo-credit"> Photo: benclary1&nbsp;·&nbsp;<a href="https://www.inaturalist.org/observations/155622812" target="_blank" rel="noopener noreferrer">iNaturalist obs. 155622812</a>&nbsp;· CC0</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Grow dill or parsley as a host plant.</strong>{' '}
              Plant a dedicated patch knowing caterpillars will arrive. A single dill
              plant can carry two to four larvae through to pupation without being
              destroyed — dill grows fast enough to replace what the caterpillars eat.
            </li>
            <li>
              <strong>Add Golden Alexanders as a native Apiaceae host.</strong>{' '}
              It blooms in April before the herb garden is planted, hosts
              early-season larvae, and supports <em>Andrena ziziae</em> — a specialist
              mining bee — at the same time.{' '}
              <button className="link-button" onClick={() => onNavigate('golden-alexanders')}>
                See the Golden Alexanders profile →
              </button>
            </li>
            <li>
              <strong>Skip Bt and insecticides near Apiaceae.</strong>{' '}
              Check by hand. A caterpillar on parsley will finish in about three weeks
              and not return as a caterpillar. The adult butterfly that emerges will
              nectar on flowers.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Species and plants connected to the Black Swallowtail</h2>
          <div className="connections">
            <ul>
              <li>
                <button className="link-button" onClick={() => onNavigate('golden-alexanders')}>
                  Golden Alexanders
                </button>{' '}
                — native Apiaceae host plant that blooms in April; Black Swallowtail females
                lay on it before herb gardens are planted; the same plant hosts
                <em> Andrena ziziae</em>, a specialist mining bee that reads the same
                soil-temperature trigger as the plant's bloom
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('tiger-swallowtail')}>
                  Tiger Swallowtail
                </button>{' '}
                — shares nectar sources including joe-pye weed, ironweed, and native
                phlox; Tiger Swallowtail larvae use host trees (tulip poplar, wild
                cherry) while Black Swallowtail larvae use herbaceous Apiaceae — two
                butterfly species that can be supported in the same yard with different
                plantings
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('native-bees')}>
                  Native Bees
                </button>{' '}
                — <em>Andrena ziziae</em> is one of the specialist bees that uses
                Apiaceae pollen; a yard with Golden Alexanders supports both the bee
                and the Black Swallowtail on the same plant in the same April window
              </li>
            </ul>
          </div>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to add a native Apiaceae host?</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('golden-alexanders')}>
              Golden Alexanders
            </button>
            {' '}blooms in April and supports both Black Swallowtail larvae and a
            specialist native bee, or{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              choose a native plant
            </button>
            {' '}to see what fits your yard conditions.
          </p>
        </div>
      </div>
    </>
  )
}
