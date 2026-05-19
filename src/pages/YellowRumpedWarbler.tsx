import type { Page } from '../App'

interface YellowRumpedWarblerProps {
  onNavigate: (page: Page) => void
}

export default function YellowRumpedWarbler({ onNavigate }: YellowRumpedWarblerProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Setophaga_coronata_coronata_CT1.jpg/960px-Setophaga_coronata_coronata_CT1.jpg"
          alt="Yellow-rumped Warbler perched on a branch in fall plumage, showing gray-brown streaked back, white throat and eyebrow stripe, and the yellow rump patch at the base of the tail"
          className="species-hero-image"
          style={{ objectPosition: 'center 30%' }}
          loading="eager"
          onError={e => {
            const img = e.currentTarget
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Yellow-rumped_Warbler_-_Setophaga_coronata_%28Myrtle%29_%2833047939928%29.jpg/960px-Yellow-rumped_Warbler_-_Setophaga_coronata_%28Myrtle%29_%2833047939928%29.jpg'
            img.onerror = null
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Cephas&nbsp;&middot;&nbsp;CC BY-SA 3.0 via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Yellow-rumped Warbler</h1>
        <p className="hero__lead">
          In late October a small gray-brown bird lands in your burning bush, picks off several
          berries, then flies to the spirea, picks a few more, and disappears into the
          neighbor&apos;s hedge. The next morning it runs the same circuit. By the end of the
          week the burning bush is stripped. You catch the flash of butter-yellow at the base
          of its tail each time it takes flight. That is the Yellow-rumped Warbler. It will be
          back in March.
        </p>
        <p className="hero__lead">
          <em>Setophaga coronata</em> &mdash; the eastern subspecies is called the Myrtle
          Warbler for the myrtle berry. In fall the bird is streaked gray-brown with a white
          throat and pale eyebrow stripe. The breeding male arriving in May is charcoal-black
          with a white wing patch and four yellow patches: crown, each flank, and rump. In all
          plumages and all seasons, the rump patch holds. It is the field mark that works at
          any distance where you can see the bird at all.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="enzyme-heading">
          <h2 id="enzyme-heading">The enzyme other warblers don&apos;t carry</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Yellow-rumped_Warbler_-_Setophaga_coronata_%28Myrtle%29_%2833047939928%29.jpg/960px-Yellow-rumped_Warbler_-_Setophaga_coronata_%28Myrtle%29_%2833047939928%29.jpg"
              alt="Yellow-rumped Warbler in breeding plumage showing the charcoal-black chest patch, white wing bars, and yellow crown, flank, and rump patches"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Setophaga_coronata_coronata_CT1.jpg/480px-Setophaga_coronata_coronata_CT1.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              A Yellow-rumped Warbler in breeding plumage. The yellow crown, flanks, and rump
              are all visible at once in spring. By October the same bird is streaked
              gray-brown, but the rump patch persists through every plumage. When the bird
              flushes from a hedge and the yellow flashes at the tail base, that is the
              consistent ID in any season.
              <span className="photo-credit"> Photo: Andy Reago &amp; Chrissy McClarren / CC BY 2.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            The waxy coating on wax myrtle and American bayberry berries passes through most
            birds&apos; intestines undigested &mdash; the fat locked inside the glyceride
            layer stays inaccessible. The Yellow-rumped Warbler produces digestive enzymes
            that break down those glycerides and extract their caloric content. No other
            wood-warbler species in eastern North America does this.
          </p>
          <p>
            The consequence shows up in winter range. All other wood-warblers that breed in
            the eastern US retreat to Central America or the Caribbean by November.
            Yellow-rumped Warblers winter as far north as Long Island and coastal New England,
            feeding on bayberry and wax myrtle on barrier islands and in coastal shrublands.
            The bird leaving your yard in November may stop 200 miles away, not 3,000.
          </p>
          <p>
            When wax myrtle and bayberry are replaced by ornamental burning bush or
            cotoneaster &mdash; both invasive in the eastern US &mdash; the birds get calories
            but not fat density. The berry crop goes fast. The warblers strip it in a week and
            keep moving south. A yard with a mature native bayberry holds the migrants for
            three to four weeks.
          </p>
        </section>

        <section aria-labelledby="bayberry-window-heading">
          <h2 id="bayberry-window-heading">October, bayberry, and the window that aligns</h2>
          <p>
            Yellow-rumped Warblers are among the last wood-warblers to leave the eastern US
            each fall because they can fuel on what is still available when other species have
            gone. Their peak migration through the mid-Atlantic and northeast runs October into
            early November &mdash; almost exactly when American bayberry fruit reaches peak
            production.
          </p>
          <p>
            Wax myrtle (<em>Morella cerifera</em>) in the southeast and American bayberry
            (<em>Morella pensylvanica</em>) in the north and mid-Atlantic produce their
            berries in September and October and hold them on the shrub through January. A
            bayberry hedge on a coastal barrier island carries wintering flocks of
            Yellow-rumped Warblers through February. The same shrubs that fuel the fall
            migration fuel the birds that decide not to leave at all.
          </p>
          <p>
            A bayberry transplanted from a one-gallon pot produces its first berries in 3 to
            5 years. One mature shrub produces enough fruit to supply a stopping flock. Two
            plants in proximity will cross-pollinate and increase berry set. The shrub
            tolerates poor soil, dry conditions, and salt spray. It fixes nitrogen. It spreads
            slowly by root suckers and forms a dense hedge over 5 to 10 years. It needs to
            be planted, and then it does what it does.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Bayberry, no burning bush, standing stems, and no September insecticides</h2>

          <figure className="species-content-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Yellow-rumped_Warbler_in_Prospect_Park_%2880543%29.jpg/960px-Yellow-rumped_Warbler_in_Prospect_Park_%2880543%29.jpg"
              alt="Yellow-rumped Warbler perched in low scrubby vegetation, showing fall plumage with gray-brown streaks and the yellow rump patch"
              loading="lazy"
              onError={e => {
                const img = e.currentTarget
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Setophaga_coronata_coronata_CT1.jpg/640px-Setophaga_coronata_coronata_CT1.jpg'
                img.onerror = null
              }}
            />
            <figcaption>
              A Yellow-rumped Warbler working through low scrub in fall. The birds forage at
              shrub level and in the canopy, picking insects from bark and stems as well as
              pulling berries. A yard with native shrubs that retain their bark-dwelling
              invertebrates through October gives the warbler both food sources in the same
              stop.
              <span className="photo-credit"> Photo: Rhododendrites / CC BY-SA 4.0 / Wikimedia Commons</span>
            </figcaption>
          </figure>
          <ol className="step-list">
            <li>
              <strong>Plant American bayberry (zones 3&ndash;7) or wax myrtle (zones 6&ndash;9) in a sunny spot with average to dry soil.</strong>{' '}
              Both shrubs carry male and female flowers on separate plants. One male plant per
              two or three females gives the females enough pollen to set fruit. Plant in fall
              for the best establishment rate. Bayberry tolerates sandy, poor, and salty soils
              where little else grows. It spreads slowly by root suckers and forms a dense hedge
              over 5 to 10 years. See{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>
              {' '}for bayberry availability by region.
            </li>
            <li>
              <strong>Remove burning bush from the areas where you want fall migrants.</strong>{' '}
              Burning bush (<em>Euonymus alatus</em>) is invasive in the eastern US, dispersed
              by birds into forest edges where it outcompetes native shrubs. Its berries feed
              migrants but do not carry the fat density of bayberry. Warblers strip the crop
              faster and leave sooner. Replacing burning bush with native bayberry or
              serviceberry converts the same visual hedge into a richer stopover. See{' '}
              <button className="link-button" onClick={() => onNavigate('invasive-plants')}>
                Invasive Plants
              </button>
              {' '}for what to replace it with.
            </li>
            <li>
              <strong>Leave dead native plant stems standing through October.</strong>{' '}
              Yellow-rumped Warblers arrive as insect foragers before the berry crop is ready.
              In September they pursue caterpillars and aphids sheltering in bark and on seed
              heads. Native perennial stems &mdash; coneflower, wild aster, native sunflower
              &mdash; carry insects that bayberry does not. The warbler eating insects in your
              plant stems on September 20 is the same bird eating your bayberry berries in
              late October. See{' '}
              <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
                Leave the Leaves
              </button>
              {' '}for why standing stems matter beyond this species.
            </li>
            <li>
              <strong>Avoid insecticide applications on native shrubs between September 1 and November 1.</strong>{' '}
              Yellow-rumped Warblers arrive in mid-Atlantic and northeastern yards in September
              as insect foragers, weeks before the bayberry crop is ready. They pull insects
              from bark crevices, glean aphids and scale from stems, and take caterpillars from
              native shrub foliage. A shrub treated with broad-spectrum or systemic insecticide
              in late summer has already had its insect community suppressed by the time the
              first warblers land. The same shrub untreated carries the bird through the
              September gap before bayberry fruit matures. See the{' '}
              <button className="link-button" onClick={() => onNavigate('pesticide-guide')}>
                Pesticide Guide
              </button>
              {' '}for what to avoid and when.
            </li>
          </ol>
        </div>

        <section aria-labelledby="diet-switch-heading">
          <h2 id="diet-switch-heading">Caterpillars in June, wax in October</h2>
          <p>
            During breeding season in the northern boreal forest, the Yellow-rumped Warbler
            eats almost entirely insects. Caterpillars, gnats, beetles, flying ants &mdash;
            the same diet as all wood-warblers during nesting. The berry diet is a fall and
            winter adaptation, not a year-round behavior. A bird working through native plant
            stems in your yard on a September afternoon is hunting insects, not looking for
            berries yet.
          </p>
          <p>
            The diet shift tracks the food supply. As insect populations collapse with the
            first hard frosts, the warblers shift to berries. The Yellow-rumped Warbler makes
            this shift later in the season and sustains it longer than any other eastern
            warbler &mdash; September insects, October berries, January bayberry in mild
            coastal winters. The digestive adaptation that processes wax-coated berries may
            also contribute to a general ability to extract fat from a wider variety of food
            types than other warblers manage.
          </p>
          <p>
            The return in spring is early &mdash; March and April, before the oaks leaf out,
            before most warblers have left their wintering grounds. The early arrivals refuel
            on the same bayberry shrubs they used in November. The last bayberry berries of
            winter feed the first warblers of spring on the same stems.
          </p>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>The Yellow-rumped Warbler shares the berry hedge with several yard neighbors.</strong>{' '}
            <button className="link-button" onClick={() => onNavigate('american-robin')}>
              American Robins
            </button>
            {' '}eat from bayberry and wax myrtle in late fall and early winter when earthworms
            go deep.{' '}
            <button className="link-button" onClick={() => onNavigate('gray-catbird')}>
              Gray Catbirds
            </button>
            {' '}stop at the same shrubs during their southbound migration in September, ahead
            of the warbler peak.{' '}
            <button className="link-button" onClick={() => onNavigate('eastern-towhee')}>
              Eastern Towhees
            </button>
            {' '}scratch the leaf litter directly below the bayberry shrubs while the warblers
            pick at the branches above. A bayberry hedge at the edge of your property is
            functional stopover habitat for all of them, and the shrub requires nothing from
            you once established. Start the hedge at{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            {' '}or see all birds in the{' '}
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
