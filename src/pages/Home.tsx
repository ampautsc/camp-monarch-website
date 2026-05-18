import type { Page } from '../App'

interface HomeProps {
  onNavigate: (page: Page) => void
}

// Photo sources: Wikimedia Commons (CC BY-SA). Attribution at bottom of page.
// vis-004: verified thumbnail URLs from Wikimedia Commons API 2026-05-09.
// TODO: download and host in /public/ for production performance.
const CARD_PHOTOS = {
  plantMilkweed: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Monarch_Butterfly_Caterpillar_on_Milkweed_Plant.jpg/320px-Monarch_Butterfly_Caterpillar_on_Milkweed_Plant.jpg',
  findMilkweed: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Asclepias_tuberosa_0001.jpg/320px-Asclepias_tuberosa_0001.jpg',
  stopPesticides: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Monarch_Butterfly_Danaus_plexippus_Resting_1800px.jpg/320px-Monarch_Butterfly_Danaus_plexippus_Resting_1800px.jpg',
  spreadTheWord: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Danaus_plexippus_on_Asclepias_tuberosa_1.jpg/320px-Danaus_plexippus_on_Asclepias_tuberosa_1.jpg',
}

const NEIGHBOR_PHOTOS = {
  fireflies: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Firefly_2_%28Lampyridae%29.jpg/320px-Firefly_2_%28Lampyridae%29.jpg',
  boxTurtles: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Box_turtle_Eastern_2.jpg/320px-Box_turtle_Eastern_2.jpg',
  bumblebees: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Bombus_huntii_-_Penstemon_strictus_-_Bald_Mountain.jpg/320px-Bombus_huntii_-_Penstemon_strictus_-_Bald_Mountain.jpg',
  hummingbirds: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Ruby-throated_Hummingbird_-_Archilochus_colubris%2C_Merrimac_Farm_Wildlife_Management_Area%2C_Nokesville%2C_Virginia_%2849111455388%29.jpg/320px-Ruby-throated_Hummingbird_-_Archilochus_colubris%2C_Merrimac_Farm_Wildlife_Management_Area%2C_Nokesville%2C_Virginia_%2849111455388%29.jpg',
  swallowTails: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Papilio_polyxenes_%28Black_Swallowtail%29%2C_male.jpg/320px-Papilio_polyxenes_%28Black_Swallowtail%29%2C_male.jpg',
  cecropia: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cecropia_Moth_%28Hyalophora_cecropia%29.jpg/320px-Cecropia_Moth_%28Hyalophora_cecropia%29.jpg',
  northernFlicker: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Northern_Flicker_%28Red-shafted%29.jpg/320px-Northern_Flicker_%28Red-shafted%29.jpg',
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__body">

          {/* Hero headline + lead */}
          <div className="hero__text">
            <h1>Monarch caterpillars eat only milkweed.<br />That plant has nearly vanished from American farmland.</h1>
            <p className="hero__lead">
          In the 1990s, hundreds of millions of monarchs reached Mexico each fall.<sup><a href="https://xerces.org/monarchs/eastern-monarch-conservation" target="_blank" rel="noreferrer" className="cite">[1]</a></sup><br />
          Last winter, about 60 million did.<sup><a href="https://xerces.org/press/eastern-monarch-butterfly-numbers-increase-but-remain-below-historic-levels" target="_blank" rel="noreferrer" className="cite">[2]</a></sup>
        </p>
          </div>

          {/* Hero CTA cards */}
          <div className="hero__actions">

            <button className="action-card" onClick={() => onNavigate('plant-milkweed')}>
              <div className="action-card__image-wrap">
                <img
                  src={CARD_PHOTOS.plantMilkweed}
                  alt="Monarch caterpillar on milkweed plant"
                  className="action-card__img"
                />
              </div>
              <div className="action-card__body">
                <h3>Plant milkweed</h3>
                <p>The host plant monarchs cannot survive without — and one of the best things any yard can offer.</p>
              </div>
            </button>

            <button className="action-card" onClick={() => onNavigate('find-milkweed')}>
              <div className="action-card__image-wrap">
                <img
                  src={CARD_PHOTOS.findMilkweed}
                  alt="Asclepias tuberosa with bright orange flower clusters"
                  className="action-card__img"
                />
              </div>
              <div className="action-card__body">
                <h3>Find the right species for your county</h3>
                <p>Asclepias tuberosa thrives in Ohio. It struggles in the Pacific Northwest. The right species depends on your county. This page finds it.</p>
              </div>
            </button>

            <button className="action-card" onClick={() => onNavigate('stop-pesticides')}>
              <div className="action-card__image-wrap">
                <img
                  src={CARD_PHOTOS.stopPesticides}
                  alt="Monarch butterfly resting with wings spread"
                  className="action-card__img"
                />
              </div>
              <div className="action-card__body">
                <h3>Stop using pesticides</h3>
                <p>Most residential pesticides eliminate monarchs and their larvae on contact. The lawn looks the same without them.</p>
              </div>
            </button>

            <button className="action-card" onClick={() => onNavigate('spread-the-word')}>
              <div className="action-card__image-wrap">
                <img
                  src={CARD_PHOTOS.spreadTheWord}
                  alt="Monarch butterfly feeding on milkweed flower"
                  className="action-card__img"
                />
              </div>
              <div className="action-card__body">
                <h3>Spread the word</h3>
                <p>Most people don't know the population has dropped 80%. Habitat is a corridor. A conversation with a neighbor matters.</p>
              </div>
            </button>

          </div>{/* /.hero__actions */}
        </div>{/* /.hero__body */}
      </section>

      {/* ── WHY IT MATTERS ───────────────────────────────── */}
      <section aria-labelledby="why-heading" style={{ marginTop: '2.5rem' }}>
        <h2 id="why-heading">Why the monarch population is collapsing</h2>
        <div className="fact-grid">

          <div className="fact-card">
            <h3>Milkweed loss</h3>
            <p>Since 1996, the U.S. has lost an estimated <strong>165 million acres</strong> of monarch habitat — largely due to herbicide-resistant crops eliminating milkweed from agricultural land.</p>
          </div>

          <div className="fact-card">
            <h3>Pesticide exposure</h3>
            <p>Neonicotinoids — the world's most widely used class of insecticides — persist in soil and pollen. A treated plant can remain lethal to monarch larvae for <strong>months</strong> after application.</p>
          </div>

          <div className="fact-card">
            <h3>Climate disruption</h3>
            <p>Shifting temperatures misalign monarch migration with milkweed availability. Warmer winters allow <em>Ophryocystis elektroscirrha</em> (OE) — a debilitating monarch parasite — to survive in year-round southern populations.</p>
          </div>

          <div className="fact-card">
            <h3>Habitat fragmentation</h3>
            <p>Monarchs travel up to 3,000 miles. A corridor of milkweed and nectar plants is the infrastructure that migration runs on. Suburban lawns and roadsides are where that infrastructure is mostly missing.</p>
          </div>

        </div>
      </section>

      {/* ── MEET YOUR NEIGHBORS — preview the species gallery; routes homepage traffic to 50 species pages */}
      <section aria-labelledby="neighbors-heading" style={{ marginTop: '2.5rem' }}>
        <h2 id="neighbors-heading">Your yard is already home to more than you know</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          50 species raise young in backyards — in leaf litter, hollow logs, loose soil, and shallow ground nests.
          Each one is doing something right now in your yard that your next decision will either allow or prevent.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>

          <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('fireflies')}>
            <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
              <img src={NEIGHBOR_PHOTOS.fireflies} alt="Firefly perched on plant stem at dusk" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>Fireflies</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Larvae hunt soil insects for two years before their one-summer flash. Leaf litter is where they live until then.</p>
            </div>
          </div>

          <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('box-turtles')}>
            <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
              <img src={NEIGHBOR_PHOTOS.boxTurtles} alt="Eastern box turtle on forest floor" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>Box Turtles</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A box turtle's home range is smaller than most yards. They navigate by memory — the same log, the same berry patch, decade after decade.</p>
            </div>
          </div>

          <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('bumblebees')}>
            <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
              <img src={NEIGHBOR_PHOTOS.bumblebees} alt="Bumblebee on purple wildflower" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>Bumblebees</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A queen overwinters alone underground, then builds a colony from scratch each spring. She is looking for your yard right now.</p>
            </div>
          </div>

          <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('hummingbirds')}>
            <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
              <img src={NEIGHBOR_PHOTOS.hummingbirds} alt="Ruby-throated hummingbird in flight" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>Hummingbirds</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A ruby-throated hummingbird weighs less than a nickel. It crosses the Gulf of Mexico nonstop — 500 miles in 18 hours — and lands in your yard needing nectar.</p>
            </div>
          </div>

          <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('swallowtails')}>
            <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
              <img src={NEIGHBOR_PHOTOS.swallowTails} alt="Black swallowtail butterfly with wings open" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>Swallowtails</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Black swallowtail caterpillars eat parsley and dill — herbs already in most kitchen gardens. The butterfly is there if the plant is.</p>
            </div>
          </div>

          <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('cecropia-moth')}>
            <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
              <img src={NEIGHBOR_PHOTOS.cecropia} alt="Cecropia moth with wings spread showing red and white banding" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>Cecropia Moth</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>North America's largest moth — wingspan up to 7 inches. Adults don't eat. They live only to find a mate, and they do it in the dark, guided by scent across miles.</p>
            </div>
          </div>

          <div className="fact-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0', cursor: 'pointer' }} onClick={() => onNavigate('northern-flicker')}>
            <div style={{ height: '160px', overflow: 'hidden', background: '#e8ede8' }}>
              <img src={NEIGHBOR_PHOTOS.northernFlicker} alt="Northern flicker woodpecker perched showing spotted breast" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>Northern Flicker</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A woodpecker that abandoned trees for the ground. It hunts ants — thousands per day — using a tongue that wraps around the back of its skull.</p>
            </div>
          </div>

        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button className="cta-button" onClick={() => onNavigate('species-gallery')}>
            Meet all 50 neighbors →
          </button>
        </div>
      </section>

      {/* ── ATTRIBUTION ───────────────────────────────── */}
      <section aria-label="Photo attribution" style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
        <details>
          <summary style={{ cursor: 'pointer', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Photo credits</summary>
          <ul style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.6 }}>
            <li>Monarch caterpillar: <a href="https://commons.wikimedia.org/wiki/File:Monarch_Butterfly_Caterpillar_on_Milkweed_Plant.jpg" target="_blank" rel="noreferrer">USGS Bee Inventory and Monitoring Lab</a>, Public Domain</li>
            <li>Asclepias tuberosa: <a href="https://commons.wikimedia.org/wiki/File:Asclepias_tuberosa_0001.jpg" target="_blank" rel="noreferrer">Raul654</a>, CC BY-SA 3.0</li>
            <li>Monarch resting: <a href="https://commons.wikimedia.org/wiki/File:Monarch_Butterfly_Danaus_plexippus_Resting_1800px.jpg" target="_blank" rel="noreferrer">Cody Hough</a>, CC BY-SA 3.0</li>
            <li>Monarch on milkweed: <a href="https://commons.wikimedia.org/wiki/File:Danaus_plexippus_on_Asclepias_tuberosa_1.jpg" target="_blank" rel="noreferrer">Derek Ramsey</a>, CC BY-SA 2.5</li>
            <li>Firefly: <a href="https://commons.wikimedia.org/wiki/File:Firefly_2_(Lampyridae).jpg" target="_blank" rel="noreferrer">Art Farmer</a>, CC BY-SA 2.0</li>
            <li>Box turtle: <a href="https://commons.wikimedia.org/wiki/File:Box_turtle_Eastern_2.jpg" target="_blank" rel="noreferrer">Moondigger</a>, CC BY-SA 2.5</li>
            <li>Bumblebee: <a href="https://commons.wikimedia.org/wiki/File:Bombus_huntii_-_Penstemon_strictus_-_Bald_Mountain.jpg" target="_blank" rel="noreferrer">USGS Bee Lab</a>, Public Domain</li>
            <li>Hummingbird: <a href="https://commons.wikimedia.org/wiki/File:Ruby-throated_Hummingbird_-_Archilochus_colubris,_Merrimac_Farm_Wildlife_Management_Area,_Nokesville,_Virginia_(49111455388).jpg" target="_blank" rel="noreferrer">Judy Gallagher</a>, CC BY 2.0</li>
            <li>Swallowtail: <a href="https://commons.wikimedia.org/wiki/File:Papilio_polyxenes_(Black_Swallowtail),_male.jpg" target="_blank" rel="noreferrer">Judy Gallagher</a>, CC BY 2.0</li>
            <li>Cecropia moth: <a href="https://commons.wikimedia.org/wiki/File:Cecropia_Moth_(Hyalophora_cecropia).jpg" target="_blank" rel="noreferrer">Peterwchen</a>, CC BY-SA 3.0</li>
            <li>Northern Flicker: <a href="https://commons.wikimedia.org/wiki/File:Northern_Flicker_(Red-shafted).jpg" target="_blank" rel="noreferrer">Alan D. Wilson</a>, CC BY-SA 3.0</li>
          </ul>
        </details>
      </section>

    </main>
  )
}
