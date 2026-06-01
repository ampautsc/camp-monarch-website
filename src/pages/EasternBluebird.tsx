import type { Page } from '../App'

interface EasternBluebirdProps {
  onNavigate: (page: Page) => void
}

export default function EasternBluebird({ onNavigate }: EasternBluebirdProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/00/Sialia_sialis_-Michigan%2C_USA_-pair-8c.jpg"
          alt="Male Eastern Bluebird with sky-blue back and rust-orange breast perched on a wooden nest box in a pesticide-free meadow"
          className="species-hero-image"
          style={{ objectPosition: 'top center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          {/* Photo: Sandysphotos2009 · <a href="https://commons.wikimedia.org/wiki/File:Sialia_sialis_-Michigan%2C_USA_-pair-8c.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a> via Wikimedia Commons */}
          Photo: Sandysphotos2009&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Sialia_sialis_-Michigan%2C_USA_-pair-8c.jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Bluebird</h1>
        <p className="hero__lead">
          The Eastern Bluebird is Missouri&apos;s state bird — a small thrush with
          sky-blue wings and a rust-colored chest that catches you off guard when
          it lands on a fence post in early March. Most people who see one for the
          first time think they have discovered something rare. They have not. The
          bluebird was common before European settlement. It declined because the
          open meadow habitat it requires was replaced by manicured lawns, and the
          cavity nest sites it depends on were taken over by introduced starlings and
          house sparrows. When you put up a nest box in a pesticide-free yard with
          open foraging ground, you are not doing bluebirds a favor. You are restoring
          a condition they were promised.
        </p>
      </section>

      

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">A family that rewards attention</h2>
          <p>
            Eastern Bluebirds (<em>Sialia sialis</em>) are cavity nesters — they cannot
            excavate their own holes and depend entirely on existing cavities or nest boxes.
            Breeding pairs raise two to three broods per year, from late March through
            August, with four to six eggs per clutch. Incubation takes thirteen to fourteen
            days; chicks fledge at approximately seventeen to twenty-one days. Both parents
            feed nestlings, which are raised almost entirely on insects — caterpillars,
            beetles, grasshoppers, and earthworms during wet conditions — not the wild
            berries that adults rely on in winter.
          </p>
          <p>
            A successful nest box can produce six to eighteen fledglings in a single
            season from one pair. That is not a small number in a landscape where most
            yards produce nothing at all. Post-fledging family groups remain together
            through the summer and into fall, foraging communally on wild fruits — dogwood,
            viburnum, holly, native sumac. In Missouri and much of the Midwest, bluebirds
            are year-round residents. In the northernmost parts of the range, they are
            partially migratory. The pair that fledges young in your yard in June may be
            the same pair overwintering in your area in January.
          </p>
          <p>
            Lifespan in the wild is typically six to ten years. The oldest recorded
            Eastern Bluebird lived approximately ten years. That is a long life for a small
            bird, and it carries a consequence: a nest box maintained and monitored over a
            decade can connect you to the same individual bird across multiple seasons. The
            bluebird at your box is not interchangeable with the bluebird at the next box.
            It is a specific animal, with a specific territory, that you have made possible.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">What happened to them — and why it matters</h2>
          <p>
            Eastern Bluebird populations declined sharply through the early twentieth
            century, reaching a low point by the 1970s. The causes were not mysterious:
            loss of open farmland and orchards removed the foraging habitat they require;
            the introduction of European Starlings and House Sparrows into North America
            created cavity competitors that outcompete bluebirds at natural nest sites;
            and pesticide use eliminated the insect populations that nestlings depend on
            for protein during the first weeks of life.
          </p>
              <figure className="species-content-photo species-content-photo--right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/47/Eastern_bluebird_at_nest_box.jpg"
                  alt="Eastern Bluebird male perched at the entrance hole of a nest box, about to enter with food for nestlings"
                  loading="lazy"
                />
                <figcaption>
                  Bluebirds lost most of their natural tree-hole nesting sites to European Starlings after 1890. The nest box trail programs of the 1970s reversed the population collapse — bluebirds went from regional rarity to common within two decades. The box is not decoration. It is a replacement for the dead trees we removed.
                  <span className="photo-credit"> Photo: William H. Majoros · <a href="https://commons.wikimedia.org/wiki/File:Eastern_bluebird_at_nest_box.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a> via Wikimedia Commons</span>
                </figcaption>
              </figure>

          <p>
            The recovery since the 1970s is one of conservation&apos;s genuine success
            stories — and it was built almost entirely by volunteers putting up and monitoring
            nest boxes on bluebird trails. The{' '}
            <a
              href="https://www.nabluebirdsociety.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              North American Bluebird Society
            </a>{' '}
            estimates that volunteers maintain more than one million nest boxes across the
            continent. The species is not endangered, and that absence of endangered status
            is a direct result of human effort applied at scale. The lesson is uncomfortable
            and important: species do not recover on their own in a landscape humans have
            fundamentally altered. Recovery requires people who notice, who act, and who
            keep showing up.
          </p>
          <p>
            That recovery is also fragile. Neonicotinoid insecticides — now the most widely
            used pesticides in North America — are taken up systemically by plants and
            persist in plant tissue, pollen, nectar, and soil. Sublethal exposure disrupts
            the foraging behavior of insect-eating birds, and the insect populations that
            bluebird nestlings require are dramatically reduced in landscapes treated with
            systemic pesticides. A nest box in a chemically managed yard may attract a
            pair that attempts to breed, and fails to fledge young, because the food supply
            is gone. The box matters. The yard that surrounds it matters more.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How to bring bluebirds back to your yard</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Male_and_Female_Eastern_Bluebirds_at_a_nesting_box.jpg" alt="Male and female Eastern Bluebirds perched at a mounted nest box" loading="lazy" />
            <figcaption>
              A bluebird box mounted on a smooth metal pole — with a predator baffle — is one of the highest-return wildlife investments available to a suburban yard. Bluebirds claim nest boxes quickly when open habitat exists nearby. This pair is already evaluating theirs.
              <span className="photo-credit"> Photo: Wcedmisten&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by/4.0" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Install a nest box with the correct dimensions.</strong>{' '}
              Eastern Bluebirds require a box with a 1.5-inch entrance hole — large enough
              for bluebirds, small enough to exclude starlings. The box should be mounted
              on a smooth metal pole (not a tree or fence post) with a predator guard
              below it, four to six feet above the ground, in an open area with short
              grass or bare ground within fifty feet. Face the entrance east or southeast.
              The{' '}
              <a
                href="https://www.nabluebirdsociety.org/nest-box-plans/"
                target="_blank"
                rel="noopener noreferrer"
              >
                North American Bluebird Society
              </a>{' '}
              provides free box plans.
            </li>
            <li>
              <strong>Monitor the box weekly during nesting season.</strong>{' '}
              Monitoring is what separates a decoration from a functional nest box.
              Check the box weekly from late March through August. Remove House Sparrow
              nests (loose grass, no structure) immediately — they displace bluebirds and
              are not protected by law. Record what you find: number of eggs, hatching
              date, fledging date. One season of monitoring turns the box from a thing
              you hung in the yard into an ongoing relationship.
            </li>
            <li>
              <strong>Stop using insecticides in the area surrounding the box.</strong>{' '}
              Bluebird nestlings are fed insects during the first three weeks of life.
              The caterpillars, beetles, and earthworms a breeding pair needs to feed
              two to three broods of young are not available in chemically managed
              landscapes. Systemic pesticides — applied to soil, plants, or as lawn
              treatments — persist and accumulate. Stopping insecticide use in the foraging
              area around the box is not optional if the goal is fledged young.
            </li>
            <li>
              <strong>Plant native fruiting shrubs for winter food.</strong>{' '}
              After the breeding season, bluebirds shift to fruit. Native dogwoods
              (<em>Cornus</em> spp.), native hollies (<em>Ilex</em> spp.), native
              viburnums (<em>Viburnum</em> spp.), and native sumacs (<em>Rhus</em> spp.)
              produce fruit that bluebirds eat from late summer through winter. These same
              shrubs support the insect communities that nestlings need in spring. A shrub
              border of native fruiting species serves bluebirds across the entire year.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The connection to monarchs</h2>
          <p>
            Eastern Bluebirds and Monarch Butterflies share the same habitat requirement:
            open ground, native wildflowers, and a landscape managed without systemic
            pesticides. Bluebirds forage on the ground and from low perches over open
            areas — the same open meadow structure where native milkweed establishes
            and monarchs nectar on their way north. A yard with native wildflowers in an
            open bed, native shrubs at the edges, and no insecticide treatments is exactly
            the yard that supports both.
          </p>
          <p>
            This is not a coincidence of preference. Both species evolved in open native
            plant communities and both are harmed by the same changes to suburban landscapes:
            the replacement of open habitat with turf grass, the elimination of native
            plants, and the application of insecticides that collapse the insect food web.
            What you do to restore bluebird foraging habitat — allow open ground, grow
            native wildflowers, stop pesticides — is the same as what you do to support
            monarchs.
          </p>
          <p>
            The bluebird is also a useful argument for people who are not yet moved by
            monarch conservation. The visual impact of a bluebird at a nest box is
            immediate in a way that a butterfly egg on a milkweed leaf is not. If someone
            in your neighborhood installs a bluebird box and stops using pesticides to
            support it, the monarch habitat follows. The species are not separate causes.
            They are the same cause in different colors.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('american-kestrel')}>
              American Kestrel
            </button>{' '}
            faces the same hole-size problem bluebirds solved. European Starlings —
            introduced to North America in 1890 — claim any cavity they find suitable,
            evicting the original occupant. The entrance diameter determines who keeps the
            site: a 1.5-inch hole admits a bluebird and a starling cannot fit through it;
            a 3-inch hole admits a kestrel. The monitoring routine that bluebird trail
            volunteers built in the 1970s — checking boxes weekly, removing invasive nests
            before they become established — is the same routine kestrel recovery programs
            now recommend for the same reason. A yard already running a bluebird box program
            has the skill the kestrel needs. The kestrel&apos;s population has fallen 47
            percent since 1966; it has not yet had its bluebird-trail moment.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Ready to take the next step?</strong>{' '}
            Stop pesticide use in the yard surrounding the box with the{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('pesticide-guide')}
            >
              Pesticides &amp; Your Habitat guide
            </button>
            {' '}— neonicotinoids applied to soil and plants eliminate the beetles and caterpillars nestlings eat. Then{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('choose-a-plant')}
            >
              choose a native plant
            </button>
            {' '}to build the fruiting shrub layer bluebirds use year-round, or{' '}
            <button
              className="link-button"
              onClick={() => onNavigate('plant-milkweed')}
            >
              plant milkweed
            </button>
            {' '}to expand the open pollinator habitat they forage over.
          </p>
        </div>
      </div>
    </>
  )
}
