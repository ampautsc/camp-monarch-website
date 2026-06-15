import type { Page } from '../App'

interface RedFoxProps {
  onNavigate: (page: Page) => void
}

export default function RedFox({ onNavigate }: RedFoxProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Red_fox_%28Vulpes_vulpes_crucigera%29_Skalnate_Pleso_2.jpg/1280px-Red_fox_%28Vulpes_vulpes_crucigera%29_Skalnate_Pleso_2.jpg"
          alt="A Red Fox sitting in a field, showing its rusty-red fur, white chin, and large bushy tail with a white tip"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Charles J. Sharp&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Red_fox_(Vulpes_vulpes_crucigera)_Skalnate_Pleso_2.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Red Fox</h1>
        <p className="hero__lead">
          The Red Fox is the most widely distributed wild carnivore in the world, found
          across North America, Europe, Asia, Australia, and North Africa. In eastern North
          America it has rusty-red fur on the back and sides, a white chin and belly, black
          legs and feet, and a large bushy tail always tipped in white. It is most active
          at dusk and dawn and is highly adaptable, living in forests, farms, meadows, and
          suburban neighborhoods. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Red Foxes hunt primarily by hearing and smell. Their most distinctive hunting
            technique — called mousing or mouse-jumping — involves listening for prey
            beneath snow or leaf litter, then leaping high into the air and diving nose-
            first to pin the animal below. They eat voles, mice, rabbits, birds, frogs,
            earthworms, insects, berries, and carrion. They cache excess food, covering it
            with soil or leaves, and return to it later. They are solitary hunters but
            raise pups as a family unit. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Portrait_of_a_red_fox_in_Rautas_fj%C3%A4llurskog.jpg/1280px-Portrait_of_a_red_fox_in_Rautas_fj%C3%A4llurskog.jpg"
            alt="A close portrait of a Red Fox showing its amber eyes, pointed muzzle, and large ears"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            Red Foxes have large, mobile ears that can rotate independently to pinpoint
            sounds underground — the same hearing system that lets them locate mice beneath
            a foot of snow.
            <span className="photo-credit"> Photo: ClaudiaTen&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Portrait_of_a_red_fox_in_Rautas_fj%C3%A4llurskog.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Red Foxes mate in January and February. The female (vixen) gives birth to a
            litter of two to seven kits in a den in March or April, often enlarging an
            existing groundhog or woodchuck burrow. Both parents provision the pups with
            food. Kits begin emerging from the den around four weeks and are weaned at
            eight to ten weeks. By late summer the family disperses. Red Foxes do not
            hibernate and remain active throughout winter. A pair often uses the same
            territory for multiple years. [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Red Fox is abundant and not of conservation concern. [2] The IUCN lists
            it as Least Concern. [3] Vehicle collisions and mange (caused by a parasitic
            mite) are significant mortality sources. In some suburban areas, well-meaning
            but harmful feeding of foxes by humans can cause them to lose appropriate
            wariness of people. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Do not feed Red Foxes. Feeding teaches them to associate people with food,
              which leads to bold behavior that puts them at risk and can result in
              removal by animal control. [4]
            </li>
            <li>
              Skipping second-generation anticoagulant rodenticides prevents secondary
              poisoning of foxes that eat poisoned mice and voles. These toxins accumulate
              in foxes and cause prolonged suffering and death. [4]
            </li>
            <li>
              A native meadow, unmowed field edge, or diverse lawn with voles and mice
              supports fox hunting habitat. Foxes are highly effective rodent controllers
              in agricultural and suburban areas. [4]
            </li>
            <li>
              Respecting active dens — staying back and keeping dogs away from May through
              August — allows the pups to develop without stress during their most
              vulnerable weeks. [4]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-cottontail')}>
            <span className="neighbor-name">Eastern Cottontail</span>
            <span className="neighbor-note">The most important prey species for Red Foxes in the east; the two have shared the same edges and meadows for millennia.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-gray-squirrel')}>
            <span className="neighbor-name">Eastern Gray Squirrel</span>
            <span className="neighbor-note">A regular prey item, especially juveniles in their first weeks after leaving the nest.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('red-tailed-hawk')}>
            <span className="neighbor-name">Red-tailed Hawk</span>
            <span className="neighbor-note">A fellow apex predator of the same suburban and agricultural landscape; the two occasionally compete for the same prey.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('american-kestrel')}>
            <span className="neighbor-name">American Kestrel</span>
            <span className="neighbor-note">Hunts the same open meadows and field edges where foxes mouse-jump for voles.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Vulpes_vulpes/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Red Fox</a></li>
            <li><a href="https://animaldiversity.org/accounts/Vulpes_vulpes/" target="_blank" rel="noopener noreferrer">Animal Diversity Web: Red Fox (status information)</a></li>
            <li><a href="https://www.iucnredlist.org/species/23062/166119490" target="_blank" rel="noopener noreferrer">IUCN Red List — Red Fox</a></li>
            <li><a href="https://www.birds.cornell.edu/home/seven-simple-actions-to-help-birds/" target="_blank" rel="noopener noreferrer">Cornell Lab of Ornithology — Seven Simple Actions to Help Birds (and Wildlife)</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
