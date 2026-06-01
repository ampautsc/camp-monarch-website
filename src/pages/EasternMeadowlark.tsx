import type { Page } from '../App'

interface EasternMeadowlarkProps {
  onNavigate: (page: Page) => void
}

export default function EasternMeadowlark({ onNavigate }: EasternMeadowlarkProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sturnella_magna1.jpg/960px-Sturnella_magna1.jpg"
          alt="Eastern meadowlark perched on a wooden fence post showing its brilliant yellow breast and bold black V-collar — the bird whose flute-like song was the morning soundtrack of American suburbs and farmland until grassland conversion and lawn culture silenced it across most of its former range"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: USFWS&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Sturnella_magna1.jpg" target="_blank" rel="noopener noreferrer">Public Domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Meadowlark</h1>
        <p className="hero__lead">
          The Eastern Meadowlark used to be the morning voice of American suburbs. Its two-note
          flute call carried from fence posts along open lots, school athletic fields, and highway
          margins across the eastern United States. You can still find the song in nature
          recordings from the 1960s and 1970s, woven into suburban soundscapes before the fields
          shrank and the grass was cut short. The population has fallen 75 percent since 1966.
          Every one of them went quiet for the same reason.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="biology-heading">
          <h2 id="biology-heading">Built to read an open field</h2>
          <p>
            Despite its name, the Eastern Meadowlark is not a lark. It belongs to the blackbird
            family — <em>Icteridae</em> — the same group as orioles, red-winged blackbirds, and
            bobolinks. The scientific name, <em>Sturnella magna</em>, means &ldquo;great
            starling,&rdquo; a 17th-century misclassification that stuck. What it actually is: a
            medium-sized ground bird shaped by millions of years of open-country living, with a
            body plan optimized for walking through tall grass, probing into the soil, and
            disappearing into brown streaked camouflage the moment it crouches.
          </p>
          <p>
            The male&apos;s spring plumage is a contradiction — invisible from above, unmistakable
            from below. The brown-streaked back blends seamlessly into dry grass. The underparts
            are chrome yellow with a bold black V-collar that crosses the breast. When a male
            throws back his head to sing from a fence post, the yellow flashes against the
            sky like a signal fire. The song itself carries far: two to eight clear, flute-like
            whistles that descend slightly in pitch, often phrased as <em>see-you, see-yeer</em>
            or <em>spring is here, spring is here</em> in the ornithological mnemonic tradition.
            Each male knows 50 to 100 distinct song types and delivers them in long unbroken
            sequences at rates exceeding 200 songs per hour at dawn during the peak breeding period
            in May.
          </p>

          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sturnella_magna_-singing-8b.jpg/960px-Sturnella_magna_-singing-8b.jpg"
              alt="Male Eastern meadowlark singing from a fence post with bill pointed skyward — the bird delivers 50-100 distinct song types at rates of 200 songs per hour during peak breeding season in May"
              loading="lazy"
            />
            <figcaption>
              A male Eastern Meadowlark at full song on a fence post. The bill pointed skyward, the
              yellow throat fully exposed. Males sing from prominent perches at field edges, rotating
              among several posts within their territory. The song carries 400 to 500 meters in open
              habitat — enough to hold a 3-to-15-acre territory without ever landing near a rival.
              This display happens every morning from April through July in healthy grassland. In most
              eastern suburban neighborhoods, it no longer happens at all.
              <span className="photo-credit"> Photo: Andy Reago &amp; Chrissy McClarren&nbsp;·&nbsp;<a href="https://www.flickr.com/photos/wildreturn/16811826161/" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <p>
            Nesting happens on the ground, built entirely by the female. She selects a site in
            dense grass with a clear view in multiple directions — not for aesthetics, but
            because she can detect an approaching predator from 20 to 30 meters. The nest is
            a domed cup woven from dried grass stems, with a side entrance and a concealed
            grass-covered tunnel approach that hides it from aerial view. The whole structure
            blends so completely with the surrounding vegetation that biologists routinely walk
            past active nests within arm&apos;s reach. Incubation takes 13 to 15 days. The
            chicks leave the nest after 11 to 12 days but cannot fly for another week —
            they scatter into the surrounding grass and are tended by both parents until they
            can sustain themselves.
          </p>
          <p>
            The diet reflects the open-ground niche directly. During breeding season, 70 percent
            of the food is insects: grasshoppers, crickets, ground beetles, caterpillars, and
            earthworms. A foraging meadowlark walks deliberately through grass, probing the
            ground with its bill, using a behavior called &ldquo;gaping&rdquo; — inserting the
            closed bill into soil or plant stems and forcing it open with strong jaw muscles to
            expose hidden insects. In winter, the diet shifts to seeds and grain — milo, corn,
            native grasses — and the birds congregate in flocks of 20 to 100 on open agricultural
            fields and fallow grassland.
          </p>
        </section>

        <section aria-labelledby="decline-heading">
          <h2 id="decline-heading">Grassland is America's most endangered habitat</h2>
          <p>
            The North American Breeding Bird Survey, conducted annually since 1966, documents an
            Eastern Meadowlark decline of approximately 75 percent over that period — a loss of
            roughly 70 million breeding individuals in six decades. The species remains common
            enough to seem fine in parts of its range, which is part of why the decline has not
            generated the alarm that it warrants. Partners in Flight lists the Eastern Meadowlark
            on its Red Watch List, meaning the decline trajectory is severe enough to indicate
            risk of extinction without course correction. The North American grassland bird
            guild as a whole has experienced steeper collective declines than any other bird
            group on the continent — worse than forest birds, worse than shorebirds, worse
            than wetland birds.
          </p>
          <p>
            The primary driver is habitat conversion. More than 99 percent of the original
            tallgrass prairie of the central United States is gone — plowed for row crops or
            developed. The shortgrass and mixed-grass prairies of the Great Plains have lost
            50 to 70 percent of their extent. The meadow and fallow-field grasslands that once
            occurred in the eastern United States wherever agriculture broke from forest cover
            have largely been replaced by either intensive crops, which mow or cultivate during
            nesting season, or suburban lawn, which provides nothing at all. Eastern Meadowlarks
            require a minimum of 25 to 30 contiguous acres of suitable grassland habitat for a
            viable breeding territory. A suburban yard, a park lawn, a roadside strip — none of
            these meets the threshold.
          </p>
          <p>
            The mowing calendar is a compounding factor. Traditional small-scale hay farming cut
            once in late July, after most ground-nesting birds had finished breeding. Commercial
            hay operations today often cut two to four times between May and September, with the
            first cut in late May or early June — directly into peak incubation and early chick
            development. A meadowlark nest that survived ground predators for two weeks of
            incubation is destroyed in seconds by a mowing pass. Many pairs attempt two or
            three nests in a season; in intensively managed agricultural fields, none succeeds.
          </p>
          <p>
            Pesticide application over agricultural grassland has reduced the insect prey base
            substantially. Grasshoppers, the meadowlark&apos;s primary summer food, are among
            the organisms most directly impacted by systemic insecticide use. Broadcast
            application of neonicotinoids and organophosphates on adjacent crop fields
            suppresses grasshopper and beetle populations in the surrounding grassland matrix.
            A meadowlark territory with suppressed insect biomass produces fewer chicks,
            and chicks that do fledge are smaller and less likely to survive their first winter.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that help Eastern Meadowlarks</h2>

          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Schizachyrium_scoparium_-_little_bluestem.jpg/960px-Schizachyrium_scoparium_-_little_bluestem.jpg"
              alt="Little bluestem grass in autumn color — a native prairie grass that creates the dense, tall grass structure Eastern Meadowlarks and dozens of other grassland species need for nesting, foraging, and overwintering"
              loading="lazy"
            />
            <figcaption>
              Little bluestem (<em>Schizachyrium scoparium</em>), a native prairie grass that
              grows 2 to 4 feet tall, requires no fertilizer or irrigation once established, and
              provides the kind of dense, layered grass structure that ground-nesting birds and
              grassland insects depend on. A 100-square-foot planting supports the insect
              community that feeds grassland birds in surrounding areas. Let it stand through
              the winter — the seed heads feed finches and the dried stems shelter overwintering
              insects.
              <span className="photo-credit"> Photo: USFWS&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Schizachyrium_scoparium_-_little_bluestem.jpg" target="_blank" rel="noopener noreferrer">Public Domain</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>

          <ol className="step-list">
            <li>
              <strong>Plant a native meadow strip in place of turf.</strong>{' '}
              Your yard alone cannot host a meadowlark — the territory requirement is 25 to 30 acres.
              But a planting of little bluestem, Indian grass, native coneflowers, and black-eyed
              Susans — even 100 to 200 square feet — builds the grasshopper, cricket, and beetle
              population that meadowlarks and other grassland birds harvest in surrounding habitat.
              Each native meadow patch in a neighborhood is a contribution to the regional insect
              base. Multiple patches across a block or a road corridor start to aggregate into
              something ecologically meaningful. Find native grasses and wildflowers for your
              region at{' '}
              <button className="link-button" onClick={() => onNavigate('native-plant-near-me')}>
                Find Plants Near Me
              </button>
              .
            </li>
            <li>
              <strong>Delay any tall-grass or meadow mowing until after July 15.</strong>{' '}
              Eastern Meadowlarks and dozens of other ground-nesting birds — including dark-eyed
              juncos, savannah sparrows, and grasshopper sparrows — complete their first brood by
              mid-July. If you have an area of unmowed grass kept above 8 inches, or a field edge,
              or a rain garden with tall native grass, hold the first cut until after July 15.
              A second cut can happen in late August. Letting any portion stand through winter
              provides overwintering insect habitat and seed for birds into March.
            </li>
            <li>
              <strong>Eliminate broadcast insecticide application across your property.</strong>{' '}
              Grasshoppers and ground beetles are the meadowlark&apos;s primary food source from
              April through August. Systemic insecticide application — whether for mosquitoes,
              grubs, or general pest suppression — reduces the invertebrate biomass available to
              every ground-foraging bird, reptile, and amphibian in the area. See the full
              breakdown of which pesticides are most damaging and which alternatives exist at the{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticides &amp; Your Habitat guide
              </button>
              .
            </li>
            <li>
              <strong>Support local land conservancies protecting grassland.</strong>{' '}
              The most effective action for Eastern Meadowlark recovery is grassland preservation
              and active management at landscape scale — 50, 500, or 5,000 acres with appropriate
              fire or grazing regimes to maintain open structure. The National Audubon Society&apos;s
              Important Bird Area program, The Nature Conservancy&apos;s grassland restoration
              work, and local land trusts purchasing former farmland from retiring agricultural
              families are where meadowlark populations stabilize and recover. Contributing to
              those organizations or participating in local land trust work translates directly
              into meadowlark habitat at the scale the species requires.
            </li>
          </ol>
        </div>

        <section aria-labelledby="connection-heading">
          <h2 id="connection-heading">The grassland web your neighborhood has lost</h2>
          <p>
            The Eastern Meadowlark is disappearing for the same reason the{' '}
            <button className="link-button" onClick={() => onNavigate('american-bumble-bee')}>
              American Bumble Bee
            </button>{' '}
            is disappearing — grassland conversion has eliminated the habitat and insect
            communities they depend on. Both species evolved in a landscape of native grass,
            wildflower, and open soil that covered millions of acres east of the Mississippi
            and is now almost entirely gone. Their declines are not independent events; they
            are the same event viewed from two different points in the food web.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('american-robin')}>
              American Robin
            </button>{' '}
            and the{' '}
            <button className="link-button" onClick={() => onNavigate('dark-eyed-junco')}>
              Dark-eyed Junco
            </button>{' '}
            both forage in open ground, both require undisturbed soil and leaf layers for
            winter food, and both are affected by the same insecticide regimes that suppress the
            grassland invertebrate community meadowlarks depend on. A yard that stops pesticide
            use and leaves native plant debris in place is supporting the base of the food web
            for all three species simultaneously.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('garter-snake')}>
              Garter Snake
            </button>{' '}
            uses meadow edges for thermoregulation — basking at the boundary of tall grass and
            open ground in early morning — and hunts the same grasshoppers and invertebrates
            the meadowlark eats. In a yard with a native meadow strip, the garter snake
            community that previously had nothing to use on a mowed lawn finds structure, prey,
            and cover concentrated in a small area. The meadow strip is not just for meadowlarks;
            it functions as habitat infrastructure for every ground-layer species in the system.
          </p>
          <p>
            The{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-towhee')}>
              Eastern Towhee
            </button>
            {' '}works the shrubby edge immediately adjacent to the meadowlark&apos;s open
            grassland — the dense thicket where the grass gives way to shrubs. The meadowlark
            needs 25 to 30 acres of open ground; the towhee needs a dense hedge or brush pile.
            A native meadow bordered by a row of native shrubs serves both: the meadowlark
            finds its grasshopper and beetle base in the open strip; the towhee finds nesting
            cover and leaf-litter foraging substrate in the shrubs at the margin. Both species
            are losing the same transitional landscape — the unmanaged edge between grass and
            shrub that once existed wherever old fields were left alone, and is now gone from
            most suburban properties entirely.
          </p>
          <p>
            The actions that help the meadowlark — native plantings, delayed mowing, no
            broadcast pesticides, land conservation support — are the same actions that move
            the needle for grassland insects, ground-foraging birds, and reptiles across the
            eastern landscape. The meadowlark is a diagnostic species: its presence signals
            that the grassland insect community is intact. Its absence signals the system has
            already failed. Most eastern yards crossed that threshold decades ago. The question
            now is whether it can be reversed, block by block and neighborhood by neighborhood,
            before the species slides from common-but-declining to genuinely rare.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build the native plant base that grassland birds and insects depend on.</strong>{' '}
            Start with plants at{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , understand the full transformation from turf to habitat at{' '}
            <button className="link-button" onClick={() => onNavigate('habitat-transformation')}>
              From Lawn to Habitat
            </button>
            , and meet every other species sharing your landscape in the{' '}
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
