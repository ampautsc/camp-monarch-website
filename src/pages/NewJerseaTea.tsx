import type { Page } from '../App'

interface NewJerseaTeaProps {
  onNavigate: (page: Page) => void
}

export default function NewJerseaTea({ onNavigate }: NewJerseaTeaProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/522976006/large.jpg"
          alt="New Jersey Tea in full bloom — clusters of small white flowers rising above oval toothed leaves on a low woody shrub, photographed in Perrysville, Indiana"
          className="species-hero-image"
          style={{ objectPosition: 'center 40%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: kent_ozment&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/290701996" target="_blank" rel="noopener noreferrer">iNaturalist obs. 290701996</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1><em>Erynnis martialis</em> lays her eggs on New Jersey Tea and on no other plant genus in the eastern United States.</h1>
        <p className="hero__lead">
          The Mottled Duskywing skipper (<em>Erynnis martialis</em>) is a small brown butterfly
          with white-spotted forewings. In the 1800s naturalists recorded it from Nova Scotia to
          Nebraska, south through the Appalachians and Ozarks. Today it is listed as endangered
          or rare in every northeastern state where it once flew. Its decline tracks almost
          exactly with the clearing of open rocky woods, limestone glades, and dry oak savannas —
          the thin-soiled places where <em>Ceanothus americanus</em> grows.
        </p>
        <p className="hero__lead">
          New Jersey Tea (<em>Ceanothus americanus</em>) is a native shrub two to four feet tall
          with dense oval leaves and upright clusters of small white flowers that open in May and
          June. It grows in dry, rocky, or sandy soil with full to partial sun — the conditions
          that stop most other plants. Root nodules with <em>Frankia</em> bacteria fix atmospheric
          nitrogen, so the shrub builds its own fertility and does not require fertilizer or
          amended soil.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="skipper-heading">
          <h2 id="skipper-heading">A skipper that cannot breed without this shrub — and returned where the shrub came back</h2>
          <p>
            Female <em>Erynnis martialis</em> search out <em>Ceanothus</em> plants to lay
            their eggs. The larvae feed on the leaves through summer, drop into the leaf
            litter to overwinter, and pupate the following spring. No member of this skipper's
            breeding range in the East uses a different larval host — <em>Ceanothus</em> is
            the entire larval food base in this part of North America.
          </p>
          <p>
            In Missouri, where glade and savanna habitat has been maintained or restored,{' '}
            <em>Erynnis martialis</em> populations persist in counties where native{' '}
            <em>Ceanothus</em> grows on limestone outcrops. Conservation surveys in the
            Midwest have documented recolonization of restored sites within a few years of{' '}
            <em>Ceanothus</em> establishment. The skipper is not gone from the landscape
            permanently — it is absent from the places where its plant is absent.
          </p>
        </section>

        <section aria-labelledby="nitrogen-heading">
          <h2 id="nitrogen-heading">Root nodules fix atmospheric nitrogen — the shrub improves the soil it grows in</h2>
          <p>
            New Jersey Tea forms root nodules with <em>Frankia</em> bacteria, the same
            type of actinomycete nitrogen fixation found in alder and bayberry. The nodules
            pull nitrogen from the air and convert it into a form the plant and the surrounding
            soil can use. A mature shrub in thin, nutrient-poor soil does not need fertilizer —
            it manufactures its own, and adds to the soil around it year after year.
          </p>
          <p>
            This is why New Jersey Tea grows on dry limestone outcrops, sandy ridge tops,
            and gravelly banks where other shrubs cannot get established. The limiting factor
            in those sites is often not moisture — it is nitrogen. <em>Ceanothus</em> sidesteps
            that constraint entirely. In a yard with compacted or depleted soil, the shrub
            establishes without soil amendment and builds fertility as it matures.
          </p>
        </section>

        <section aria-labelledby="bees-heading">
          <h2 id="bees-heading">Dense white flower clusters open in May and June, between spring ephemerals and summer prairie flowers</h2>
          <p>
            New Jersey Tea blooms from May through July, peaking in June. The individual
            florets are a few millimeters across, but they are massed in dense panicles
            that cover the top of the shrub. The bloom timing fills a gap in the native plant
            calendar: after spring ephemerals and before mid-summer wildflowers open.
            During those weeks, the shrub draws bumblebees, small sweat bees, and mining
            bees that work the flower clusters continuously.
          </p>
          <p>
            Monarchs moving north in late May and early June pass through the region during
            the New Jersey Tea bloom window. The flowers provide nectar while migratory adults
            are still traveling before they begin laying eggs on milkweed. In a yard where
            milkweed is not yet in flower and summer wildflowers have not opened, New Jersey
            Tea is one of the few shrubs offering accessible nectar in that window.
          </p>
        </section>

        <section aria-labelledby="growing-heading">
          <h2 id="growing-heading">Dry, rocky, or sandy soil — well-drained is the one requirement</h2>
          <p>
            New Jersey Tea grows in USDA zones 4 through 8. It requires well-drained soil
            and will not survive in wet or poorly drained sites — the deep taproot rots
            where moisture stands for weeks. In average garden soil with reasonable drainage
            it grows at a moderate rate, reaching two to three feet in three to four years.
            In dry or rocky soil — the conditions most plants reject — it establishes with
            less competition from neighbors and proves durable once the taproot has set.
          </p>
          <p>
            The taproot also means the shrub does not transplant easily once established.
            Container-grown plants from a native plant nursery establish readily when planted
            in spring while the soil is still cool. After the first growing season, established
            plants tolerate summer drought without irrigation. No pruning is required to keep
            the shrub in bounds — it grows slowly and does not spread by runners.
          </p>
          <p>
            Native plant nurseries and native plant sales in the Midwest and Northeast carry
            New Jersey Tea as one-gallon containers in spring, usually from April through
            June. Plants purchased while blooming — in May or June — can be confirmed in the
            field; the dense white flower clusters on a low shrub are not easily confused with
            anything else. Plants establish through summer and typically bloom in their first
            or second season after planting.
          </p>
        </section>

        <section aria-labelledby="context-heading">
          <h2 id="context-heading">New Jersey Tea fills the May–June bloom gap before milkweed opens</h2>
          <p>
            New Jersey Tea blooms before common milkweed, which typically opens in late June.
            In a yard where the sequence runs from New Jersey Tea (May–June) through milkweed
            (June–July) and wild bergamot (July–August) to goldenrod and aster (August–October),
            nectar is available from May through hard frost — a full six months. The early June
            slot is otherwise empty in most yards.
          </p>
          <p>
            For <em>Erynnis martialis</em>, the equation reduces to one question: is the
            shrub there? If it is, she can breed. If it is not, she cannot. A two-foot plant
            in dry, sunny soil is enough to put the host back into the local landscape. The
            shrub does not ask for good soil. It asks for a place to put down a taproot that
            will not stay wet.
          </p>
        </section>
      </div>
    </>
  )
}
