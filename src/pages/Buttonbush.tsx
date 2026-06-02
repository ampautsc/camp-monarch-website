import type { Page } from '../App'

interface ButtonbushProps {
  onNavigate: (page: Page) => void
}

export default function Buttonbush({ onNavigate }: ButtonbushProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/86076649/large.jpeg"
          alt="Buttonbush spherical white flower heads in bloom at Indiana Dunes State Park, July 2020"
          className="species-hero-image"
          style={{ objectPosition: 'center 50%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: mikeburdsall&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/54107538" target="_blank" rel="noopener noreferrer">iNaturalist obs. 54107538</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Buttonbush opens in July with spherical flower heads covered in protruding anthers. Its roots grow in standing water.</h1>
        <p className="hero__lead">
          Buttonbush (<em>Cephalanthus occidentalis</em>) is a native shrub that grows along stream
          banks, pond edges, and wet depressions where standing water persists through spring and
          into summer. In July and August it opens white, 1-inch flower heads — each one a tight
          sphere of 200 or more individual florets, pollen-bearing anthers protruding from each one.
          A single shrub in full bloom can carry 40 to 60 of these spheres at once.
        </p>
        <p className="hero__lead">
          Most homeowners avoid the low corner of their yard where water collects. Buttonbush was
          shaped by exactly that kind of site. It does not just tolerate wet soil — it grows in
          three to four feet of standing water during flood periods and dries out over summer. A
          wet corner that kills conventional shrubs is the right place for Buttonbush.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="florets-heading">
          <h2 id="florets-heading">200 florets per sphere, anthers protruding — pollen accessible from any angle without probing a tube</h2>
          <p>
            Each Buttonbush flower head is not a single flower. It is a sphere packed with 200 or
            more individual florets, each one a narrow tube with a single anther extending roughly
            5 mm above the petal opening. When those anthers are arranged across the surface of a
            1-inch ball, the result is pollen exposed in every direction — no tube to enter, no
            deep structure to navigate.
          </p>
          <p>
            This matters for short-tongued bees. Bumblebees and honeybees can reach into most
            tubular flowers, but dozens of native bee species have tongue lengths under 4 mm and
            cannot access nectar or pollen in flowers like bergamot, lobelia, or most mints.
            Buttonbush florets expose their anthers above the tube. A bee with a 2 mm tongue
            harvests Buttonbush pollen the same as a bumblebee does — by landing on the sphere's
            surface and working across it.
          </p>
          <p>
            A single flower head stays in active pollen production for three to four weeks. The
            florets at the sphere's outer edge open first; as they finish, florets toward the center
            are still in bud. A bee working a Buttonbush sphere in mid-July is in a different active
            zone than one working the same sphere two weeks later. The opening sequence is visible in
            the sphere at any given moment — some florets upright with full anthers, others spent,
            others still sealed.
          </p>
        </section>

        <section aria-labelledby="wet-corner-heading">
          <h2 id="wet-corner-heading">Roots in standing water — the low corner that drains in summer is the right site</h2>
          <p>
            Buttonbush grows naturally at the water's edge. In its native habitat, root systems sit
            in saturated soil from early spring through summer, sometimes submerged under a foot or
            more of water during flood events. The shrub's vascular tissue is adapted to move oxygen
            to roots in anaerobic conditions — the same mechanism that allows swamp maples and
            willows to survive flooded sites.
          </p>
          <p>
            In a yard: a low depression that holds standing water for two to six weeks after a rain
            event and then dries down gradually through summer is a candidate. A rain garden with a
            wet zone in the center, a downspout discharge area, a slope base that collects runoff —
            any of these sites can support Buttonbush. It grows 6 to 10 feet tall over several
            years and can be cut back hard in late winter to control size without killing the plant.
          </p>
          <p>
            Planted in average garden soil with no seasonal wet period, Buttonbush survives but grows
            slowly. The same shrub in a wet corner reaches full height in four to five years and
            blooms reliably each July without irrigation.
          </p>
        </section>

        <section aria-labelledby="timing-heading">
          <h2 id="timing-heading">July to late August — the seven-week window between spring bloomers and fall goldenrod</h2>
          <p>
            Wild Columbine, New Jersey Tea, and Common Milkweed all open before mid-July. Canada
            Goldenrod and New England Aster don't open until late August at the earliest. Between
            those two points — from early July to late August — the number of open native flowers
            in most yards drops. Buttonbush, Swamp Milkweed, Purple Coneflower, and Wild Bergamot
            carry the mid-summer bloom sequence.
          </p>
          <p>
            Monarchs moving south in August and September pass through during Buttonbush's bloom
            window. An adult monarch nectaring on Buttonbush works the same way bees do — landing
            on the sphere's surface and moving across it, feeding from floret to floret. Sphinx
            moths visit Buttonbush flowers at dusk and into the night; they hover in front of the
            sphere and probe each floret with a long proboscis without landing.
          </p>
          <p>
            Ruby-throated Hummingbirds visit Buttonbush through the same weeks they visit Swamp
            Milkweed — July and August. The floret tube length on Buttonbush is short enough that a
            hummingbird reaching in for nectar also contacts the anthers and picks up pollen on its
            bill, which it carries to the next sphere.
          </p>
        </section>

        <section aria-labelledby="seeds-heading">
          <h2 id="seeds-heading">Ball-shaped seed clusters in September — Wood Ducks and teal work the water surface below</h2>
          <p>
            After flowering, each Buttonbush sphere develops into a hard, brown cluster of small
            drupes — seeds with a thin fleshy coat. The clusters ripen in September and remain on
            the branch tips through winter, visible as brown knobs on bare gray stems. They don't
            drop on their own; they wait for disturbance — a bird landing, ice weight, wind.
          </p>
          <p>
            Wood Ducks, teal, and other dabbling waterfowl consume Buttonbush drupes by working
            the water surface below shrubs growing at the pond edge. Seeds that fall into the water
            float briefly and are picked up by waterfowl before sinking. A Buttonbush growing over
            a backyard pond or rain garden presents the same opportunity — seeds falling into the
            water in October or November are available to any passing bird.
          </p>
          <p>
            The brown seed clusters stay on the shrub through late winter. Cut them off in late
            February before new growth begins, or leave them — both are fine. New leaves emerge
            later than most native shrubs, in late May. The shrub looks bare into early June and
            then leafs out quickly; this late timing is normal.
          </p>
        </section>

        <section aria-labelledby="context-heading">
          <h2 id="context-heading">Buttonbush in the twelve-native sequence — mid-summer wet-site specialist opening in July</h2>
          <p>
            In a Camp Monarch garden, Buttonbush fills the July–August wet-site slot alongside
            Swamp Milkweed. Both prefer the same low, moist conditions. Both open in the same weeks.
            Together they extend the mid-summer bloom for bees, moths, hummingbirds, and migrating
            monarchs through the gap between spring and fall.
          </p>
          <p>
            Not every yard has a wet corner suited to Buttonbush. A yard on well-drained sandy soil
            may not. But a yard with any persistent low spot, any area where a downspout or roof
            run-off reaches the ground, or any slope that collects water has a candidate site —
            and Buttonbush is one of the few native shrubs that turns that problem spot into a
            productive bloom in the middle of summer.
          </p>
          <div className="connections">
            <h3>Plants and species connected to Buttonbush</h3>
            <ul>
              <li>
                <button className="link-button" onClick={() => onNavigate('native-bees')}>
                  Native Bees
                </button>{' '}
                — short-tongued native bees that cannot reach deep into tubular flowers harvest
                pollen from Buttonbush florets; the exposed anthers are accessible from the surface
                of the sphere without probing
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('american-bumble-bee')}>
                  American Bumble Bee
                </button>{' '}
                — a declining native bumblebee species documented foraging on Buttonbush flower
                heads in July and August; one of many bumblebee species that visits the spheres
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('swamp-milkweed')}>
                  Swamp Milkweed
                </button>{' '}
                — blooms in the same July–August window and shares the wet-site preference; planting
                both together in a low corner doubles the mid-summer nectar availability for
                monarchs, bees, and hummingbirds
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('ruby-throated-hummingbird')}>
                  Ruby-throated Hummingbird
                </button>{' '}
                — probes Buttonbush floret tubes in July and August; the short tube length allows
                contact with the protruding anthers, transferring pollen to the bill between visits
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('american-woodcock')}>
                  American Woodcock
                </button>{' '}
                — uses moist thicket edges where Buttonbush grows as daytime cover and nesting
                habitat; the wet margins and standing-water zones that suit Buttonbush are the same
                ground the woodcock probes at night for earthworms
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
