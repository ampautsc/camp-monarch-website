import type { Page } from '../App'

interface EasternCommaProps {
  onNavigate: (page: Page) => void
}

export default function EasternComma({ onNavigate }: EasternCommaProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/334405655/large.jpg"
          alt="Eastern Comma butterfly (Polygonia comma) with wings open — orange and black upper wings with irregular dark spots and ragged, scalloped outer wing margins"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          onError={(e) => {
            const img = e.currentTarget
            img.onerror = null
            img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/52520976/large.jpg'
          }}
        />
        <div className="species-hero-image-credit">
          Photo: Richard Littauer&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/photos/334405655" target="_blank" rel="noopener noreferrer">CC BY via iNaturalist</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Eastern Comma</h1>
        <p className="hero__lead">
          In late February, before any flower has opened, a butterfly emerges from a gap
          in the bark of a large oak and flies to a wound seeping sap on the trunk three
          feet away. The wings are orange and black with ragged, angular margins. Fold them
          and the butterfly is gone — the underside is mottled bark-brown, and pressed flat
          against a log, it reads as wood grain. Look at the underside of the hindwing in
          direct sunlight: a single silver curved line, alone, no dot beneath it. That curve
          is a comma. This butterfly spent the last four months sealed in the same bark gap
          it just left.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="fieldmarks-heading">
          <h2 id="fieldmarks-heading">Orange wings, scalloped margins, and the silver comma on the hindwing underside — no dot</h2>
          <p>
            The Eastern Comma's upper wings are orange with irregular dark spots, the same
            color scheme as the closely related Question Mark. The outer wing margins are
            scalloped and jagged — not the smooth arc of a Painted Lady or the tapered
            point of a Tiger Swallowtail, but an irregular silhouette that breaks the
            butterfly's outline into bark-and-leaf shapes when the wings are folded.
            Wingspan runs approximately 1.75 to 2.5 inches, slightly smaller on average
            than the Question Mark.
          </p>
          <p>
            The single distinguishing field mark is on the underside of the hindwing: a
            small silver curved line — a comma — with nothing below it. The Question Mark
            carries that same curve plus a separate silver dot beneath it, forming the
            question mark. If the dot is absent, the butterfly is an Eastern Comma. Both
            marks are the size of a grain of rice and visible only in direct light at close
            range, but once you know to look, the difference is clear.
          </p>
          <p>
            Two seasonal color forms exist, as in the Question Mark. Summer-form adults
            (emerging June–July) have hindwings that are largely black on the upper surface
            with a narrow orange border. Winter-form adults (emerging late summer, destined
            to overwinter) have hindwings that are more uniformly orange, matching the
            forewing color. The butterfly on a bark log in October and the butterfly at a
            sap wound in March may be the same individual, five or six months apart, in
            the same body.
          </p>
        </section>

        <section aria-labelledby="caterpillar-heading">
          <h2 id="caterpillar-heading">Stinging nettle and hops — the caterpillar builds a leaf tent and feeds inside it</h2>
          <figure className="species-content-photo species-content-photo--right">
            <img
              src="https://inaturalist-open-data.s3.amazonaws.com/photos/52520986/large.jpg"
              alt="Eastern Comma butterfly (Polygonia comma) with wings folded showing the cryptic mottled gray-brown underside — the silver comma mark on the hindwing underside is a single curved line with no dot beneath it"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                img.onerror = null
                img.src = 'https://inaturalist-open-data.s3.amazonaws.com/photos/52520976/large.jpg'
              }}
            />
            <figcaption>
              With wings folded, the Eastern Comma's mottled gray-brown underside matches
              dead bark and wood grain. The silver comma on the hindwing underside — a single
              curved line with no dot beneath it — is visible only in direct light at close
              range. An identical-looking butterfly with a dot below the comma is a Question Mark.
              <span className="photo-credit"> CC0 public domain via iNaturalist</span>
            </figcaption>
          </figure>
          <p>
            The female lays pale green eggs singly on the underside of host plant leaves,
            usually near the growing tip. Stinging nettle (<em>Urtica dioica</em>) is the
            most commonly used host, followed by hops (<em>Humulus lupulus</em>), false
            nettle (<em>Boehmeria cylindrica</em>), hackberry, and less frequently elm.
            A patch of stinging nettle in a sunny disturbed corner — along a fence, at
            the edge of a brushy area — is used by Eastern Commas, Question Marks, and
            Red Admirals through the same season. Three different butterfly species, one plant.
          </p>
          <p>
            The caterpillar constructs a leaf shelter by pulling the edges of a leaf
            together with silk and feeding from inside the folded structure. It is solitary —
            each caterpillar builds and occupies its own leaf tent. Early instars are pale
            with rows of branching spines; later instars darken and the spines become more
            pronounced. The caterpillar reaches roughly an inch before leaving the host plant
            to form a spiny brown chrysalis on a nearby twig or vertical surface.
          </p>
          <p>
            Two broods develop in the upper Midwest. The spring brood comes from eggs laid
            by adults emerging from winter roost in March and April. A summer brood emerges
            in July and August and produces the winter-form adults — orange-winged, carrying
            the silver comma — that will enter bark roosts the following October and survive
            until the next spring.
          </p>
        </section>

        <section aria-labelledby="overwintering-heading">
          <h2 id="overwintering-heading">Behind loose bark from October through March — same gap, same tree, year after year</h2>
          <p>
            In September and October, Eastern Comma adults shift from nectar to higher-calorie
            resources: fermenting fruit on the ground, sap seeping from bark wounds, and
            occasionally carrion and dung. These provide the carbohydrates for fat storage
            before winter. By late October in the upper Midwest, adults have located roost sites.
          </p>
          <p>
            The roost is a gap — the space beneath a loose plate of bark on a large oak,
            hickory, or elm; the inside of a hollow tree section; a crevice in a woodpile.
            Wings fold flat, bark-colored underside facing out. The body fluids carry elevated
            glycerol concentrations that lower the freezing point, protecting cells during hard
            freezes. On mild midwinter days, a roosting adult may emerge briefly to search for
            sap or rotting fruit, then return to the same gap before temperatures drop again
            at night.
          </p>
          <p>
            When daytime temperatures hold above 50°F in March or April, adults emerge and
            find the first available carbohydrates: sap running from wounds in maple, elm, and
            birch. A yard in early April has no open flowers yet. The Eastern Comma drinking
            from a sap wound on a maple trunk in late March spent the winter in the bark of
            the same tree or a neighboring one. Question Marks roost in the same gaps and
            emerge on the same mild late-winter days — in a yard with large-diameter hardwoods,
            both species use the same trees.
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>Four things that carry an Eastern Comma from October through April</h2>
          <ol className="step-list">
            <li>
              <strong>Leave loose-barked logs and leaf piles in place through April.</strong>{' '}
              Eastern Commas roost inside bark crevices and hollow sections of large-diameter
              trunks. A loose-barked log at the back of the yard, or a pile of leaves against
              a fence base, provides the insulated gap that separates a live butterfly from a
              dead one in January. Moving or chipping this material in November, or again in
              March before daytime temperatures have consistently reached 50°F, ends roosts
              that are still occupied.
            </li>
            <li>
              <strong>Leave fermenting fruit on the ground in late fall and again in early spring.</strong>{' '}
              Rotting apples, crabapples, and pears on the ground in October give Eastern Commas,
              Question Marks, and Mourning Cloaks the carbohydrates for overwintering fat storage.
              The same fruit, re-fermenting the following March, is the first carbohydrate source
              before any flower opens. Raking this fruit in autumn removes the resource during
              the two weeks it matters most.
            </li>
            <li>
              <strong>Don't remove stinging nettle from fence lines and disturbed corners.</strong>{' '}
              Stinging nettle is the primary caterpillar host for Eastern Commas, Question Marks,
              and Red Admirals across the Midwest. A patch in a sunny disturbed corner supports
              multiple generations of all three species through a single summer. Gloves and long
              sleeves handle the sting; the nettle can be cut back to the ground after August
              to keep it from spreading.
            </li>
            <li>
              <strong>Don't seal tree wounds in late winter.</strong>{' '}
              Sap running from wounds in maple, elm, and birch in March is the first available
              carbohydrate for adults emerging from winter roost. Eastern Commas, Question Marks,
              Mourning Cloaks, and Red Admirals all use these flows before any flower opens.
              Modern arboricultural practice does not recommend sealing most tree wounds — trees
              compartmentalize injuries more effectively without sealant — so letting sap run
              in spring costs nothing. Find native nectar plants for later in the season with{' '}
              <button className="link-button" onClick={() => onNavigate('choose-a-plant')}>
                Choose a Plant
              </button>
              .
            </li>
          </ol>
        </div>

        <section aria-labelledby="neighbors-heading">
          <h2 id="neighbors-heading">Who shares the bark in October and the nettle patch in July</h2>
          <ul className="neighbor-list">
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hackberry')}>
                Hackberry
              </button>{' '}
              &mdash; a secondary caterpillar host for Eastern Commas alongside stinging nettle;
              in yards where nettle is absent, hackberry is the primary available host for the
              spring and summer broods; the Hackberry Emperor butterfly overwinters as a
              caterpillar in the leaf litter at the base of hackberry trees while Eastern Commas
              overwinter as adults in the bark above — two overwintering strategies on the same
              tree
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('question-mark')}>
                Question Mark
              </button>{' '}
              &mdash; the nearest relative in the genus; both overwinter as adults in the same
              bark crevices and emerge on the same mild late-winter days to visit the same sap
              flows; the single difference visible in the field is the silver dot beneath the
              comma on the hindwing underside — dot present means Question Mark, dot absent
              means Eastern Comma; both lay eggs on stinging nettle in the same brood windows
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('red-admiral')}>
                Red Admiral
              </button>{' '}
              &mdash; shares stinging nettle as the primary caterpillar host; Eastern Commas
              and Red Admirals lay eggs on the same nettle patches through the same brood windows
              in May and July; both fuel on fermenting fruit and sap in early spring; a single
              nettle patch in a sunny disturbed corner produces all three Polygonia-group species
              through one summer
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('mourning-cloak')}>
                Mourning Cloak
              </button>{' '}
              &mdash; also overwinters as an adult in bark crevices and hollow trees; Eastern
              Commas, Question Marks, and Mourning Cloaks emerge on the same mild late-winter
              days and visit the same sap wounds in March and April before any flower opens;
              Mourning Cloaks use willow and birch rather than nettle as caterpillar hosts,
              so a yard with both plant groups supports all three overwintering species
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('canada-goldenrod')}>
                Canada Goldenrod
              </button>{' '}
              &mdash; winter-form adults fuel on goldenrod in late August and September before
              entering overwintering roost; Eastern Commas and Question Marks appear in the
              late-summer goldenrod community alongside Monarchs, Painted Ladies, and American
              Bumble Bees; the goldenrod is the last significant nectar source before the shift
              to fermenting fruit and sap
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('pearl-crescent')}>
                Pearl Crescent
              </button>{' '}
              &mdash; also orange-and-black, also fuels on goldenrod in late summer; the Pearl
              Crescent is smaller with smooth wing margins and passes winter as a caterpillar
              in leaf litter rather than as an adult behind bark — two different overwintering
              strategies in the same late-summer yard, each requiring a different physical
              structure to work
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('hackberry-emperor')}>
                Hackberry Emperor
              </button>{' '}
              &mdash; breeds only on hackberry; the caterpillar overwinters in leaf litter at the base of hackberry trunks while Eastern Commas overwinter as adults in the bark above — the Hackberry Emperor's overwintering site and the Eastern Comma's winter roost are separated by less than the length of a rake stroke on the same tree
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('tawny-emperor')}>
                Tawny Emperor
              </button>{' '}
              &mdash; stacks 100 to 500 eggs in one mass on a single hackberry leaf; the hatching cohort feeds as a group through the early instars, then scatters to individual leaves and overwinters in the same leaf litter where Eastern Comma adults roost above in the bark; both species fuel on fermenting fruit and sap flows as adults in late summer
            </li>
            <li>
              <button className="neighbor-link" onClick={() => onNavigate('american-snout')}>
                American Snout
              </button>{' '}
              &mdash; a third hackberry-only butterfly that visits goldenrod and asters for nectar in the same late-summer window when Eastern Commas fuel before winter roost; in wet years, Snout adults build to migration-size populations and move south in October while Eastern Commas remain in the same yard behind bark until spring
            </li>
          </ul>
        </section>

        <div className="action-panel" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Build the winter survival structure alongside the nettle and the sap.</strong>{' '}
            Understand why bark logs and leaf piles protect overwintering adults with the{' '}
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