import type { Page } from '../App'

interface QuestionMarkProps {
  onNavigate: (page: Page) => void
}

export default function QuestionMark({ onNavigate }: QuestionMarkProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Question_Mark_Butterfly%2C_Polygonia_interrogationis%2C_dorsal_%28cropped%29.jpg"
          alt="Question Mark butterfly (Polygonia interrogationis) with wings open — orange-yellow upper wings with irregular dark spots, scalloped and ragged outer wing margins, resting on rough bark in October"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Polygonia_interrogationis_P1410392a.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: D. Gordon E. Robertson&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Question_Mark_Butterfly,_Polygonia_interrogationis,_dorsal_(cropped).jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Question Mark</h1>
        <p className="hero__lead">
          On a fence post in October, wings folded flat against the wood, this butterfly looks
          like a torn piece of dead oak leaf wedged into a crack. The outer wing edges are
          scalloped and ragged — not the smooth curve of a Monarch. The underside is mottled
          gray-brown, bark-colored. If the wings open for a moment, orange and black appear;
          when they close, the butterfly is invisible again. Look at the underside of the hindwing
          in direct light: a small silver curved line sits above a silver dot. The butterfly was
          named for that mark. It is resting in that spot because in three or four weeks, it will
          seal itself into a gap beneath loose bark on a nearby oak and spend the winter there.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fieldmarks-heading">
          <h2 id="fieldmarks-heading">Orange wings with scalloped margins — the silver question mark on the hindwing underside</h2>
          <p>
            The Question Mark's upper wings are orange-yellow with irregular dark spots along
            the costal margin and toward the outer edges. The wing margins are scalloped and
            angular — the outer edge makes a jagged, irregular profile, not the rounded arc of
            a Painted Lady or the tapered point of a Tiger Swallowtail. A short violet-blue
            blush often traces along the hindwing upper surface. Wingspan runs 2.25 to 3 inches.
          </p>
          <p>
            The underside tells a different story. Both wings are mottled gray-brown and tan,
            with thin dark lines that trace a pattern matching dead leaf veins and bark grain.
            On the underside of the hindwing alone, in polished silver, sits a curved line above
            a separate round dot — a question mark roughly the size of a grain of rice. No other
            butterfly in North America carries this exact mark. The closely related Eastern Comma
            carries only the curve, without the dot beneath it.
          </p>
          <p>
            Two seasonal color forms exist. Adults that emerge in June and July have hindwings
            that are mostly black on the upper surface, with a narrow orange border. Adults that
            emerge in late summer and overwinter have hindwings that are largely orange, matching
            the forewing color. The butterfly on your fence post in October and the butterfly
            visiting a maple sap wound in April are the same individual, in the same body,
            seven months apart.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">Stinging nettle, hops, and elm — the caterpillar builds a leaf shelter and feeds inside it</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/48/Polygonia_interrogationis_-_question_mark_-_XL.jpg"
              alt="Question Mark butterfly (Polygonia interrogationis) with wings folded showing the cryptic mottled gray-brown underside — the silver question mark is visible on the hindwing as a curved line above a round dot"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Question_Mark_Butterfly%2C_Polygonia_interrogationis%2C_dorsal_%28cropped%29.jpg'
              }}
            />
            <figcaption>
              Wings folded, the Question Mark disappears against bark, wood, and dead leaves.
              The silver question mark on the hindwing underside — a curved line above a round
              dot — is visible only in direct light at close range. This cryptic pattern is
              why a butterfly resting on a log ten feet away reads as bark, not animal.
              <span className="photo-credit"> Photo: USGS Bee Inventory · public domain via Wikimedia Commons</span>
            </figcaption>
          </figure>
          <p>
            The female lays single pale green eggs on the underside of leaves, usually near the
            growing tip of the host plant. Stinging nettle (<em>Urtica dioica</em>) is the most
            commonly used host across the range, followed by American elm, hackberry, false nettle
            (<em>Boehmeria cylindrica</em>), and hops (<em>Humulus lupulus</em>). In Midwest
            yards, a patch of stinging nettle in a sunny disturbed corner — along a fence, at
            the edge of a brushy area — is used across multiple generations through summer.
          </p>
          <p>
            The caterpillar builds a leaf shelter. It pulls the edges of a leaf together with
            silk threads and feeds from inside the folded structure. Early instars are pale with
            rows of branching spines. Later instars darken to a yellowish or cream body with
            reddish-brown or black spines. The caterpillar reaches approximately 1.25 inches
            before leaving the host plant to form a spiny brown chrysalis on a twig or vertical
            structure nearby.
          </p>
          <p>
            Two broods develop in the upper Midwest. A spring brood (April–May) comes from
            eggs laid by overwintering adults. A summer brood (July–August) produces the
            winter-form adults — orange-winged, carrying the silver mark — that will spend the
            next seven months roosting in bark and emerging again the following spring.
          </p>
        </section>

        <section aria-labelledby="overwintering-heading">
          <h2 id="overwintering-heading">Behind loose bark from October through March — glycerol in the blood, wings flat against the wood</h2>
          <p>
            In September and October, Question Mark adults shift away from nectar and toward
            higher-calorie resources: fermenting fruit on the ground, sap seeping from bark
            wounds, and occasionally carrion. These provide the fuel for winter fat storage.
            By late October in the upper Midwest, adults have found roost sites.
          </p>
          <p>
            The roost is a gap — the space beneath a plate of loose bark on a large oak, hickory,
            or elm trunk; the inside of a hollow tree; a crevice in stacked firewood. Closed wings
            flush against the surface, bark-colored underside facing out. Body fluids with elevated
            glycerol concentration lower the freezing point below that of pure water, protecting
            cells during hard freezes. On mild midwinter days, a roost adult may briefly emerge
            to search for a sap flow or rotting fruit, then return to the same gap before
            temperatures drop again at night.
          </p>
          <p>
            When daytime temperatures hold reliably above 50°F in March or April, adults emerge
            and seek early resources. Tree sap running from wounds in maple, elm, and birch
            is the first available carbohydrate — a southern Wisconsin yard in early April
            has no open flowers yet. The butterfly drinking sap from a wound on a maple trunk
            in late March spent the winter three feet below, in the bark.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that carry a Question Mark from October through April</h2>
          <ol className="step-list">
            <li>
              <strong>Leave loose-barked logs and leaf piles in place through April.</strong>{' '}
              Question Marks roost inside bark crevices and hollow sections of large-diameter
              trunks. A loose-barked log at the back of the yard, or a pile of leaves against a
              fence base, provides the insulated gap that separates a live butterfly from a dead
              one in January. Moving or shredding this material in November, or again in March
              before daytime temperatures have consistently reached 50°F, disturbs adults that
              have not yet emerged.
            </li>
            <li>
              <strong>Leave fermenting fruit on the ground in late fall and again in early spring.</strong>{' '}
              Rotting apples, crabapples, and pears on the ground in October give Question Marks
              and Mourning Cloaks carbohydrates for overwintering fat storage. The same fruit,
              re-fermenting after months on the ground, is available in March before the first
              flower opens. Raking this fruit in November removes the resource during the two
              weeks it is most needed.
            </li>
            <li>
              <strong>Don't remove stinging nettle from fence lines and disturbed corners.</strong>{' '}
              Stinging nettle is the primary caterpillar host for Question Marks, Eastern Commas,
              and Red Admirals across the Midwest. A patch in a sunny disturbed corner supports
              multiple generations of all three species through a single summer. Gloves and long
              sleeves handle the sting; the nettle can be cut back to the ground after August to
              keep it contained.
            </li>
            <li>
              <strong>Don't seal tree wounds in late winter.</strong>{' '}
              Sap running from wounds in maple, elm, and birch in March is the first available
              carbohydrate for adults emerging from winter roost. Question Marks, Mourning Cloaks,
              Eastern Commas, and Red Admirals all use these flows before any flower opens.
              Wound sealants stop the flow. Modern arboricultural practice does not recommend
              sealing most injuries — trees compartmentalize wounds more effectively without
              sealant — so letting sap run in spring costs nothing. Find native nectar plants for
              later in the season with{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>
              .
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who shares the bark in October and the sap flow in March</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hackberry')}>
                Hackberry
              </button>{' '}
              &mdash; a secondary caterpillar host for Question Marks alongside stinging nettle;
              in yards where nettle is absent, hackberry becomes the primary available host for
              the spring and summer broods; the Hackberry Emperor butterfly overwinters as a
              caterpillar in the leaf litter at the base of the same hackberry trees where
              Question Marks overwinter as adults in the bark
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('mourning-cloak')}>
                Mourning Cloak
              </button>{' '}
              &mdash; overwinters as an adult in the same bark crevices and hollow trees; both
              species emerge on the same mild late-winter days and visit the same sap flows and
              rotting fruit in March and April before any flower opens; Mourning Cloaks lay their
              caterpillar eggs on willow and birch rather than nettle, so a yard with both plants
              supports both species through egg, caterpillar, and adult
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('red-admiral')}>
                Red Admiral
              </button>{' '}
              &mdash; shares stinging nettle as the primary caterpillar host; Question Marks and
              Red Admirals lay eggs on the same nettle patches through the same brood windows
              in May and July; both fuel on fermenting fruit and sap in early spring; a single
              nettle patch in a sunny disturbed corner produces both species through a single summer
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('canada-goldenrod')}>
                Canada Goldenrod
              </button>{' '}
              &mdash; winter-form adults fuel on goldenrod in late August and September before
              entering overwintering roost; Question Marks appear in the late-summer goldenrod
              community alongside Monarchs, Painted Ladies, and American Bumble Bees; the goldenrod
              is the last significant nectar source before the species shifts to fermenting fruit
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('pearl-crescent')}>
                Pearl Crescent
              </button>{' '}
              &mdash; also orange-and-black with a mottled underwing; also fuels on goldenrod in
              late summer; the Pearl Crescent is smaller with smooth wing margins and passes
              winter as a caterpillar inside leaf litter rather than as an adult behind bark —
              two overwintering strategies in the same late-summer yard that each require a
              different physical structure to work
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('viceroy')}>
                Viceroy
              </button>{' '}
              &mdash; also orange-and-black and also found in yards with willows and wet corners;
              Viceroys overwinter as caterpillars inside a rolled willow leaf rather than as
              adults in bark — the Viceroy's rolled leaf hibernaculum and the Question Mark's
              bark-gap roost are both destroyed by the same late-autumn yard cleanup
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build the winter survival structure alongside the nectar sequence.</strong>{' '}
            Understand why leaf piles and bark logs protect overwintering adults with the{' '}
            <button className="link-button" onClick={() => onNavigate('leave-the-leaves')}>
              Leave the Leaves guide
            </button>
            , find native host plants and nectar sources with{' '}
            <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
              Choose a Plant
            </button>
            , and see which butterflies share the late-summer goldenrod with the{' '}
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
