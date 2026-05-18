import type { Page } from '../App'

interface GoldenAlexandersProps {
  onNavigate: (page: Page) => void
}

export default function GoldenAlexanders({ onNavigate }: GoldenAlexandersProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://inaturalist-open-data.s3.amazonaws.com/photos/269029704/large.jpeg"
          alt="Golden Alexanders flat-topped yellow umbel clusters, Chapel Hill, North Carolina, April 2023"
          className="species-hero-image"
          style={{ objectPosition: 'center 60%' }}
          loading="eager"
        />
        <div className="species-hero-image-credit">
          Photo: benclary1&nbsp;·&nbsp;
          <a href="https://www.inaturalist.org/observations/155622812" target="_blank" rel="noopener noreferrer">iNaturalist obs. 155622812</a>
          &nbsp;· CC0 / No Rights Reserved
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Native Plants</div>
        <h1>Golden Alexanders opens flat-topped yellow clusters in April, each small umbel with a central floret that sits directly on the stem — a structural feature shared by no other yellow-flowered member of the carrot family in the eastern United States.</h1>
        <p className="hero__lead">
          Golden Alexanders (<em>Zizia aurea</em>) is a native wildflower in the carrot family
          (Apiaceae) that blooms April through May across the central and eastern United States.
          It grows in moist to average soil in full sun to part shade, reaches 1 to 3 feet tall,
          and returns from its roots each spring. The yellow compound umbels appear before common
          milkweed has leafed out, before Wild Bergamot or Purple Coneflower has opened — making
          it one of the earliest pollen and nectar sources available in spring.
        </p>
        <p className="hero__lead">
          A small mining bee, <em>Andrena ziziae</em>, collects pollen exclusively from
          <em> Zizia</em> flowers and no other plant. She emerges from her underground nest in
          April, timed to when Golden Alexanders opens. Black Swallowtail butterflies lay eggs
          on its leaves.
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="sessile-heading">
          <h2 id="sessile-heading">The stalkless floret in the center of each cluster — one diagnostic detail that separates Zizia from introduced carrot-family plants</h2>
          <p>
            In most members of the carrot family — Wild Parsnip, Queen Anne's Lace, Water Hemlock —
            every individual floret in each small sub-cluster (umbellet) sits on its own thin
            stalk. In <em>Zizia</em>, the central floret of each umbellet has no stalk at all. It
            sits directly on the stem of the sub-cluster. This sessile central floret is a
            taxonomic character that holds across the genus and distinguishes <em>Zizia</em> from
            every introduced yellow Apiaceae a homeowner is likely to encounter.
          </p>
          <p>
            This matters practically because the native Apiaceae in a yard carry different
            ecological relationships than the introduced ones. Queen Anne's Lace (<em>Daucus
            carota</em>) arrived from Europe; it supports some of the same insects but arrived
            after the relationships that evolved here. A homeowner who can identify Golden
            Alexanders by the sessile central floret can distinguish what is native from what
            is not — and make planting decisions accordingly.
          </p>
          <p>
            The flat-topped cluster, a common Apiaceae shape, is one of the more accessible flower
            architectures for short-tongued bees: the nectar and pollen sit near the surface.
            Longer-tongued species can reach them too. This makes the umbel broadly accessible
            across bee body sizes while still providing a specific resource for the species that
            evolved to depend on it.
          </p>
        </section>

        <section aria-labelledby="andrena-heading">
          <h2 id="andrena-heading">Andrena ziziae — named after this plant, emerged from underground in April, carrying pollen from no other source</h2>
          <p>
            <em>Andrena ziziae</em> is a small native mining bee, roughly half the size of a
            honey bee, that digs her nesting tunnel in bare or sparsely vegetated ground in
            early spring. She is oligolectic on <em>Zizia</em>: she collects pollen from
            <em> Zizia</em> flowers and from no other plant genus. Her larval provisions — the
            pollen-and-nectar balls her larvae eat underground — are made entirely of Zizia
            pollen. She cannot substitute dandelion, clover, or any other flower that happens
            to be blooming when she emerges.
          </p>
          <p>
            Her emergence from her overwintering nest happens in April, triggered by soil
            temperature reaching a threshold accumulated over the warming days of late March
            and April. Golden Alexanders opens on the same trigger — the same accumulation of
            warm soil temperature that starts root and shoot activity in spring also times the
            opening of the flowers. Both the bee and the plant are reading the same signal.
            In years when warm weather comes early, both emerge early. In cold springs, both
            are later.
          </p>
          <p>
            This synchrony is what makes the relationship function. If Golden Alexanders is
            not present in or near the bee's foraging range — roughly 300 to 600 meters from
            her nest — she flies, finds nothing she can use, and her nest cells remain empty
            or under-provisioned. She cannot adapt by switching to another flower. Her tongue
            length, her olfactory receptors, her behavior are all calibrated to Zizia. A yard
            with Golden Alexanders in April is a yard where <em>Andrena ziziae</em> can
            complete her year.
          </p>
        </section>

        <section aria-labelledby="swallowtail-heading">
          <h2 id="swallowtail-heading">The caterpillar that looks like a parsley worm on a native plant instead of a garden herb</h2>
          <p>
            Black Swallowtail females lay eggs on plants in the carrot family. In gardens, the
            most visible hosts are usually dill, parsley, and fennel — all introduced Apiaceae
            from Europe and the Mediterranean. The caterpillar that shows up on these plants —
            green and black-banded with yellow dots along each segment — is the "parsley worm"
            that gardeners commonly find and remove.
          </p>
          <p>
            That same caterpillar on Golden Alexanders in a yard is a Black Swallowtail larva
            on its native host plant, in the range where this butterfly evolved. The caterpillar
            does not distinguish between native Zizia and introduced parsley. The female butterfly
            does not either — she lays on both. But in a yard with Golden Alexanders, the larvae
            appear on a plant with no economic consequence, in a context where they are not in
            competition with the vegetable garden.
          </p>
          <p>
            Ozark Swallowtail and Anise Swallowtail females also use native Apiaceae as larval
            hosts where their ranges overlap with Zizia's. All three species produce the same
            green-and-black banded caterpillar.
          </p>
        </section>

        <section aria-labelledby="site-heading">
          <h2 id="site-heading">Moist to average soil, full sun to part shade — a wider growing range than most early-spring natives</h2>
          <p>
            Golden Alexanders tolerates more variable conditions than most native spring wildflowers.
            Virginia Bluebell requires moist woodland soil and disappears by June. Wild Columbine
            prefers well-drained soil and resents standing water. Golden Alexanders grows in moist
            to average soil, full sun to part shade — conditions that cover most yard margins, the
            edge of a shrub border, the north-facing side of a fence, a rain garden edge that dries
            by July.
          </p>
          <p>
            The plant reaches 1 to 3 feet tall, forms a clump, and spreads slowly by rhizome over
            several years. It does not reseed aggressively. Unlike some Apiaceae, it does not
            produce a taproot that makes transplanting difficult — it can be divided in fall or
            early spring if a clump becomes crowded.
          </p>
          <p>
            The foliage stays attractive through summer after the bloom period ends — compound
            leaves with toothed leaflets, medium green, without the invasive quality of Queen
            Anne's Lace or Wild Parsnip that tends to take over disturbed ground. A clump of
            three to five plants provides enough bloom surface to support an <em>Andrena
            ziziae</em> nesting female through her April provisioning period.
          </p>
        </section>

        <section aria-labelledby="context-heading">
          <h2 id="context-heading">Golden Alexanders as the fifteenth native — April larval host and early-bee pollen source the sequence was missing</h2>
          <p>
            The Camp Monarch planting sequence had no April larval host plant between Virginia
            Bluebell (March–May, hummingbird nectar source, rhizome plant) and Wild Columbine
            (April–May, Columbine Duskywing host). Golden Alexanders blooms in the same April–May
            window but provides a different resource: native Apiaceae leaf tissue for Black
            Swallowtail larvae, and a pollen source for <em>Andrena ziziae</em> that neither
            Bluebell nor Columbine provides.
          </p>
          <p>
            A yard with all three April–May plants — Bluebell, Columbine, and Golden Alexanders —
            covers three separate ecological relationships in the same four-week window: early
            hummingbird migration nectar, Columbine Duskywing larval host, Black Swallowtail
            larval host, and a specialist mining bee whose entire reproductive season happens in
            those weeks.
          </p>
          <div className="connections">
            <h3>Plants and species connected to Golden Alexanders</h3>
            <ul>
              <li>
                <button className="link-button" onClick={() => onNavigate('wild-columbine')}>
                  Wild Columbine
                </button>{' '}
                — fellow April–May bloomer; Wild Columbine serves the Columbine Duskywing skipper
                while Golden Alexanders serves Black Swallowtail larvae and <em>Andrena ziziae</em>;
                the two plants bloom in the same weeks and fill different roles
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('tiger-swallowtail')}>
                  Tiger Swallowtail
                </button>{' '}
                — Tiger Swallowtails nectar on Golden Alexanders umbels in April and May; both
                Tiger and Black Swallowtail adults can visit the same plant in the same afternoon
                while one is nectaring and the other is laying eggs
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('new-jersey-tea')}>
                  New Jersey Tea
                </button>{' '}
                — blooms immediately after Golden Alexanders closes in May–June; planting both
                extends the specialist bee and butterfly larval host sequence from April through June
                without a gap
              </li>
              <li>
                <button className="link-button" onClick={() => onNavigate('virginia-bluebell')}>
                  Virginia Bluebell
                </button>{' '}
                — co-blooms with Golden Alexanders through April and May; Bluebell draws
                Ruby-throated Hummingbirds while Golden Alexanders draws <em>Andrena ziziae</em>
                — two species with opposite needs, served by two plants opening at the same time
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
