import type { Page } from '../App'

interface GreatSpangledFritillaryProps {
  onNavigate: (page: Page) => void
}

export default function GreatSpangledFritillary({ onNavigate }: GreatSpangledFritillaryProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Speyeria_cybele_Great_Spangled_Fritillary_8.9.2008.jpg/960px-Speyeria_cybele_Great_Spangled_Fritillary_8.9.2008.jpg"
          alt="Great Spangled Fritillary butterfly showing tawny orange wings with black markings resting on vegetation"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: MONGO&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Speyeria_cybele_Great_Spangled_Fritillary_8.9.2008.jpg" target="_blank" rel="noopener noreferrer">Public domain</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Great Spangled Fritillary</h1>
        <p className="hero__lead">
          A great spangled fritillary female lays her eggs in August — not on violet leaves,
          but on bark fragments, dry stems, and soil in the vicinity of wherever violets grow.
          The egg hatches in fall. The larva immediately crawls into dead leaves and stops moving.
          It does not eat. It waits through November, December, January, February. In March or
          April it wakes up and begins searching for a violet leaf. That first meal has to arrive
          within a few days. If the violets are gone — killed by herbicide the previous autumn, or
          not yet regrown after an early-spring mow — the larva starves during its first week out
          of dormancy.
        </p>
        <p className="hero__lead">
          The common blue violet growing in your lawn corner is the only food source for that
          larva. Broadleaf herbicide labels list it as a target weed. The two facts exist in the
          same yard at the same time.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="egg-biology-heading">
          <h2 id="egg-biology-heading">The egg laid in August, the search in April</h2>
          <p>
            <em>Speyeria cybele</em>, the great spangled fritillary, is one of the largest
            fritillaries in North America, with a wingspan between 2.5 and 4 inches. Adults fly
            from June through September across most of the eastern and central United States.
            They are the big tawny-orange butterflies that show up on milkweed, joe-pye weed, and
            purple coneflower through midsummer — often noticed but rarely named.
          </p>
          <p>
            The female produces one generation per year. In late summer she seeks out areas where
            violets grow and deposits eggs individually on nearby plant material — bark, dead stems,
            loose soil — not on the violet leaf itself. When the egg hatches in September or October,
            the newly emerged larva does something unusual: it moves toward leaf litter and enters
            diapause before it has eaten anything at all. The entire winter passes in this state.
            The larva is alive but inactive, fueled only by the yolk it absorbed inside the egg.
          </p>
          <p>
            In March or April, as temperatures rise, the larva breaks dormancy and immediately
            begins moving. It needs to locate a violet leaf before its energy reserves run out.
            Viola sororia, the common blue violet, is the primary host. The larva feeds nocturnally,
            concealing itself in leaf litter during the day. It passes through six instars between
            April and June, then pupates. The adult emerges in late June and the pattern repeats.
          </p>
        </section>

        <section aria-labelledby="violet-heading">
          <h2 id="violet-heading">Common blue violet: lawn weed or the only larval food</h2>
          <figure className="species-content-photo species-content-photo--left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Viola_sororia_in_Wisconsin.jpg/960px-Viola_sororia_in_Wisconsin.jpg"
              alt="Common blue violet Viola sororia blooming in a Wisconsin yard — low purple flowers and heart-shaped leaves growing among lawn grasses"
              loading="lazy"
            />
            <figcaption>
              Common blue violet (<em>Viola sororia</em>) is the primary larval host plant of the great
              spangled fritillary. The same plant appears in most broadleaf herbicide guides as a
              target weed. Where lawn herbicides eliminate violet patches, the larva that overwinters
              nearby wakes in spring to find nothing to eat.
              <span className="photo-credit"> Photo: James Steakley&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/3.0" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            Viola sororia is native to eastern North America and grows in lawns, roadsides, woodland
            edges, and disturbed ground. Most homeowners encounter it as a low-growing plant that
            spreads into turfgrass and resists mowing. Lawn herbicide programs treat it as a
            broadleaf weed to eliminate. Autumn is the recommended application window — September or
            October — because the plant is actively translocating nutrients then and herbicide
            penetrates most effectively.
          </p>
          <p>
            That same window is when the fritillary egg has just hatched and the larva is settling
            into dormancy in the leaf litter nearby. The herbicide treatment kills the violet before
            the larva even takes its first bite. In spring the larva emerges from dormancy and
            searches the ground where the plant was. There is nothing there. The larva cannot
            relocate to a different yard.
          </p>
          <p>
            Other fritillary species — variegated fritillary, meadow fritillary, and aphrodite
            fritillary — also use violets as larval host plants. A single patch of common blue
            violet growing undisturbed through spring can support multiple species simultaneously.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Violets untreated, mowing delayed through April, leaf litter through winter, and tall native nectar within 50 feet</h2>

          <figure className="species-content-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spinus-great-spangled-fritillary-2015-07-n048074-w.jpg/960px-Spinus-great-spangled-fritillary-2015-07-n048074-w.jpg"
              alt="Great Spangled Fritillary butterfly nectaring on a native wildflower in a meadow setting"
              loading="lazy"
            />
            <figcaption>
              Great spangled fritillary adults nectar on milkweed, joe-pye weed, ironweed, purple
              coneflower, and black-eyed Susan from June through September. They share these native
              flowers with monarchs, tiger swallowtails, and native bees. The same yard that supports
              a monarch fueling stop also supports a fritillary.
              <span className="photo-credit"> Photo: Spinus Nature Photography&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/3.0" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Leave common blue violet in at least one untreated area.</strong>{' '}
              Even a corner patch of 4–6 square feet that receives no herbicide treatment can function
              as a larval nursery. Violets spread slowly by rhizome; an untreated patch will not take
              over a lawn in a season.
            </li>
            <li>
              <strong>Delay any mowing near violet patches until after mid-April.</strong>{' '}
              Larvae feed nocturnally on violet leaves from March through May. Early mowing that cuts
              the violet canopy before larvae finish feeding removes the food source during the active
              growth stage. Mowing after mid-April, when larvae have had several weeks to feed and
              grow, reduces the loss.
            </li>
            <li>
              <strong>Leave a light layer of leaf litter near violet patches through March.</strong>{' '}
              Fritillary larvae overwinter inside fallen leaves and loose organic matter directly on the
              soil surface. Raking this layer in autumn removes the overwintering microhabitat. Leaving
              a thin layer — even just an inch of loose leaves — in the areas where violets grow gives
              the dormant larvae shelter through the cold months.
            </li>
            <li>
              <strong>Plant milkweed, ironweed, or Joe-Pye weed within 50 feet of the violet patch.</strong>{' '}
              Female Great Spangled Fritillaries emerge in June and spend four to six weeks nectaring
              on tall native wildflowers before returning to lay eggs on violets in August and September.
              A female nectaring on common milkweed 40 feet from a violet patch encounters the violets
              while foraging. The same milkweed patch that attracts monarchs in July attracts fritillary
              females at the same time, on the same flowers. A yard with tall summer nectar but no
              violet patch pulls females in without giving them a place to complete their life cycle;
              a violet patch with no nectar nearby may not hold a female long enough for egg deposition.
            </li>
          </ol>
        </div>

        <section aria-labelledby="underwing-heading">
          <h2 id="underwing-heading">Silver spots on the underwing</h2>
          <figure className="species-content-photo" style={{ margin: '1rem 0 2rem' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Argynne.jpg/960px-Argynne.jpg"
              alt="Great Spangled Fritillary showing its hindwing underside with distinctive silver spots in a pale yellowish-buff band"
              loading="lazy"
            />
            <figcaption>
              The hindwing underside of the great spangled fritillary carries a row of large silver
              spots in a pale buff band — the field mark that separates this species from the
              several similar fritillaries flying at the same time. When a fritillary lands on a
              flower and closes its wings, the silver spots become visible.
              <span className="photo-credit"> Photo: Dreamdan&nbsp;·&nbsp;<a href="https://creativecommons.org/licenses/by-sa/3.0" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>&nbsp;via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            When a great spangled fritillary lands on a flower and closes its wings, the
            hindwing underside shows a distinctive pattern: large, metallic silver spots arranged in
            a broad pale band near the outer margin. This is the identification mark that separates
            it from aphrodite fritillary and other similar species flying in July and August. On the
            upper side, both sexes show the tawny orange base color with black postmedian spots.
            Females are slightly darker than males.
          </p>
          <p>
            Sightings submitted to iNaturalist help document where breeding populations persist
            and where they have disappeared. In many parts of the Midwest, fritillary reports have
            dropped noticeably over the past 20 years as suburban lawns have expanded and native
            meadow edges have been converted to maintained turf. An observation from your yard
            — particularly a female — is evidence that violets and leaf litter nearby are still
            functional habitat.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Great spangled fritillaries nectar on the same plants monarchs use.</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('plant-milkweed')}>
              Plant milkweed
            </button>
            {' '}to build a shared summer fueling station,{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              choose native nectar plants
            </button>
            {' '}that serve both species from June through September, keep the larval overwintering layer intact with{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves
            </button>
            , and stop the broadleaf herbicide that kills violet host plants with the{' '}
            <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
              Pesticides &amp; Your Habitat guide
            </button>
            .
          </p>
        </div>

        <section aria-labelledby="connections-heading">
          <h2 id="connections-heading">Related pages</h2>
          <div className="neighbor-grid">
            <button className="neighbor-card" onClick={() => onNavigate('leonards-skipper')}>
              <span className="neighbor-name">Leonard's Skipper</span>
              <span className="neighbor-note">Flies August to September — the window that opens just as the fritillary season closes; both species overwinter as larvae in the ground layer through winter</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('joe-pye-weed')}>
              <span className="neighbor-name">Joe-Pye Weed</span>
              <span className="neighbor-note">Opens mid-July through September; fritillary adults nectar on it during the same window they are flying and laying their fall eggs</span>
            </button>
            <button className="neighbor-card" onClick={() => onNavigate('ironweed')}>
              <span className="neighbor-name">Ironweed</span>
              <span className="neighbor-note">Opens in August alongside goldenrod; named in the same late-summer native flowers where fritillaries and monarchs both nectar</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
