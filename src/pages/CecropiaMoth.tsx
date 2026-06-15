import type { Page } from '../App'

interface CecropiaMothProps {
  onNavigate: (page: Page) => void
}

export default function CecropiaMoth({ onNavigate }: CecropiaMothProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Hyalophora_cecropia_adult_female_sjh.JPG/1280px-Hyalophora_cecropia_adult_female_sjh.JPG"
          alt="A Cecropia Moth resting with wings spread, showing its red and brown banded wings with white kidney-shaped spots and red body"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={960}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Kugamazog&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Hyalophora_cecropia_adult_female_sjh.JPG" target="_blank" rel="noopener noreferrer">CC BY-SA 2.5</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Cecropia Moth</h1>
        <p className="hero__lead">
          The Cecropia Moth is the largest native moth in North America, with a
          wingspan that can reach 6 inches (15 cm). Its wings are deep red-brown
          with white and red banding, and each wing has a prominent crescent-shaped
          white spot. Adults have no functional mouths and cannot eat — they live
          only one to two weeks, surviving entirely on energy stored as caterpillars,
          and spend that time entirely on finding a mate. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Cecropia Moths are entirely nocturnal. Females emerge from their cocoons
            in late May or June and release pheromones from a gland at the tip of
            the abdomen. Males detect these signals through large, feathery antennae
            and can follow a pheromone trail from more than a mile away. Mating
            occurs before dawn. After mating, females lay flattened oval eggs in
            rows on the leaves of host trees — black cherry, sugar maple, white
            birch, elderberry, and many others. An adult cecropia&apos;s entire life is
            a single task: find a mate and lay eggs. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Hyalophora_cecropia_adult.jpg/1280px-Hyalophora_cecropia_adult.jpg"
            alt="A Cecropia Moth with wings fully spread showing the detailed red, brown, and white wing pattern and feathery antennae"
            width={1280}
            height={960}
            loading="lazy"
          />
          <figcaption>
            The large feathery antennae visible on male Cecropia Moths are organs for
            detecting pheromones — they can perceive a single molecule of a female&apos;s
            scent from more than a mile away.
            <span className="photo-credit"> Photo: Jacy Lucier&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Hyalophora_cecropia_adult.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Cecropia caterpillars hatch in June and feed through August, reaching
            about 4 inches (10 cm) in length — bright green with rows of red, yellow,
            and blue knobbed tubercles. In late summer they spin a large, tough silk
            cocoon fastened lengthwise to a branch or twig, where they spend the
            winter as a pupa. Adults emerge in late May through June. There is one
            generation per year. The entire adult life — from emergence to egg-laying —
            lasts one to two weeks. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            Cecropia Moths have no formal IUCN listing but have declined dramatically
            since the 1980s and are now rarely seen where they were once common. The
            primary cause is a parasitoid fly, Compsilura concinnata, that was
            deliberately introduced across North America between 1906 and 1986 to
            control the gypsy moth. The fly now attacks more than 180 non-target
            species, parasitizing Cecropia caterpillars before they can reach the
            cocoon stage. Light pollution also disrupts mating: male moths following
            pheromone trails at night are diverted by bright artificial lights,
            circling the light instead of finding females. [1][2]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant host trees — black cherry (Prunus serotina), sugar maple, white
              birch, elderberry, and lilac are all used by Cecropia caterpillars.
              Native host trees near the house make it possible for eggs laid on the
              foliage to survive to the cocoon stage. [2]
            </li>
            <li>
              Turn off or put outdoor lights on motion sensors in late May and June.
              Male moths searching for mates at night are pulled off course by
              bright white lights; even a single porch light can prevent a male from
              locating the female that produced the pheromone trail it was following.
              [2]
            </li>
            <li>
              Leave dead branches on trees through spring. Cecropia cocoons are
              attached to branches, and winter or early spring pruning removes
              overwintering pupae before they can emerge as adults. [2]
            </li>
            <li>
              If you find a large silk cocoon attached to a branch in fall or winter,
              leave it undisturbed. It contains a cecropia, polyphemus, or luna moth
              pupa. Moving or cutting it detaches it from the branch and kills the
              insect inside. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('luna-moth')}>
            <span className="neighbor-name">Luna Moth</span>
            <span className="neighbor-note">A sister giant silk moth with the same lifecycle, the same host trees, and the same parasitoid threat from the introduced fly Compsilura concinnata.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('polyphemus-moth')}>
            <span className="neighbor-name">Polyphemus Moth</span>
            <span className="neighbor-note">Another giant silk moth, North America&apos;s second largest, sharing the same nocturnal world, the same woodland habitat, and the same threats.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-screech-owl')}>
            <span className="neighbor-name">Eastern Screech-Owl</span>
            <span className="neighbor-note">A nocturnal predator of the same woodland edges that Cecropia Moths navigate in darkness; large moths are significant prey for screech-owls.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('scarlet-tanager')}>
            <span className="neighbor-name">Scarlet Tanager</span>
            <span className="neighbor-note">Feeds on caterpillars in the same mature forest canopy where Cecropia caterpillars spend the summer on cherry, maple, and birch.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Hyalophora_cecropia/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Cecropia Moth</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Hyalophora-cecropia" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Cecropia Moth</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
