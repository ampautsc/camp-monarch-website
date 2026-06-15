import type { Page } from '../App'

interface SpringAzureProps {
  onNavigate: (page: Page) => void
}

export default function SpringAzure({ onNavigate }: SpringAzureProps) {
  return (
    <>
      <div className="species-hero-image-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Spring_azure_%28Celastrina_ladon%29_female.jpg/1280px-Spring_azure_%28Celastrina_ladon%29_female.jpg"
          alt="A Spring Azure butterfly at rest with wings closed showing the pale blue underside with small dark spots, resting on a twig against a blurred green background"
          className="species-hero-image"
          style={{ objectPosition: 'center center' }}
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
        />
        <div className="species-hero-image-credit">
          Photo: Charles J. Sharp&nbsp;·&nbsp;
          <a href="https://commons.wikimedia.org/wiki/File:Spring_azure_(Celastrina_ladon)_female.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          &nbsp;via Wikimedia Commons
        </div>
      </div>

      <section className="hero">
        <div className="hero__eyebrow">Meet Your Neighbors</div>
        <h1>Spring Azure</h1>
        <p className="hero__lead">
          The Spring Azure is one of the first butterflies of the year — a tiny flash
          of pale blue that appears in forest edges and woodland paths as early as
          March, while many trees are still bare. Males are a soft, luminous blue on
          the upperwing; females are blue with a dark border. Wings closed, both sexes
          are pale whitish-gray with a delicate pattern of dark spots. Wingspan is
          just 0.75 to 1.25 inches, making it one of the smallest butterflies in
          eastern North America. It is a hairstreak relative and belongs to the gossamer-wing
          family. [1]
        </p>
      </section>

      <div className="page">
        <section aria-labelledby="day-heading">
          <h2 id="day-heading">A day in the life</h2>
          <p>
            Spring Azures are butterflies of edges — they flutter low along the margins
            of forests, woodland paths, streams, and hedgerows. Males establish loose
            territories and pursue females and other small insects that enter their
            area, often spiraling upward with another individual and then settling
            again. Adults visit early-blooming native wildflowers and shrubs for
            nectar: flowering dogwood, native cherry blossoms, wild plum, and native
            blueberries are favorites. The flight is low and fluttering, and the tiny
            pale blue butterflies are easy to overlook in dappled light — a stillness
            followed by a flash of blue is often how they are first noticed. [1]
          </p>
        </section>

        <figure className="species-content-photo species-content-photo--right">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Spring_Azure_%28Celastrina_ladon%29_%2816936597290%29.jpg/1280px-Spring_Azure_%28Celastrina_ladon%29_%2816936597290%29.jpg"
            alt="A Spring Azure butterfly on a flower showing the pale blue upperwing with the dark outer border of the female"
            width={1280}
            height={853}
            loading="lazy"
          />
          <figcaption>
            Spring Azure caterpillars have an unusual relationship with ants — the
            caterpillar has a specialized organ (the dorsal nectary organ) that
            produces a sugary secretion ants consume. In return, ants guard the
            caterpillars from parasitoid wasps and other predators, a relationship
            called mutualistic myrmecophily found in many gossamer-wing butterflies.
            <span className="photo-credit"> Photo: Andrew C&nbsp;·&nbsp;<a href="https://commons.wikimedia.org/wiki/File:Spring_Azure_(Celastrina_ladon)_(16936597290).jpg" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>&nbsp;via Wikimedia Commons</span>
          </figcaption>
        </figure>

        <section aria-labelledby="year-heading">
          <h2 id="year-heading">Through the year</h2>
          <p>
            Spring Azures overwinter as pupae and emerge very early — sometimes as
            early as mid-March in the mid-Atlantic. They breed on the flowers and
            flower buds of native dogwood, New Jersey tea, wild cherry, and native
            blueberries; the caterpillar is often found inside or attached to flowers
            rather than on leaves. Multiple generations occur through summer, but the
            spring generation is the most numerous and conspicuous. Later-season azures
            (summer, fall) were historically considered the same species but are now
            recognized as separate species in the same complex, including Summer Azure
            (Celastrina neglecta). [1]
          </p>
        </section>

        <section aria-labelledby="status-heading">
          <h2 id="status-heading">How it&apos;s doing</h2>
          <p>
            The Spring Azure is common across eastern North America and not of
            conservation concern. [1] Its use of multiple native tree and shrub hosts —
            dogwood, wild cherry, blueberries, New Jersey tea — gives it broad
            resilience. Its early flight period means it is most vulnerable to unusual
            late frosts that damage early-season wildflowers before adults can nectar
            and females can lay eggs. [1]
          </p>
        </section>

        <div className="action-panel">
          <h2 style={{ marginTop: 0 }}>How you can help</h2>
          <ol className="step-list">
            <li>
              Plant flowering dogwood (Cornus florida). Flowering dogwood is one of the
              premier host plants for Spring Azure caterpillars, which feed on the
              developing flowers and flower buds. It also supports dozens of other
              caterpillar species, provides berries for migratory birds, and is one of
              the most beautiful native trees for a landscape. [2]
            </li>
            <li>
              Plant New Jersey tea (Ceanothus americanus). This is one of the most
              reliable Spring Azure host plants — caterpillars feed on its flowers in
              June. New Jersey tea is a native shrub for dry, sunny, well-drained
              conditions that blooms white and attracts a spectacular diversity of
              native bees in addition to azure caterpillars. [2]
            </li>
            <li>
              Plant native blueberries (Vaccinium species). Native highbush and lowbush
              blueberries are host plants for Spring Azure and support dozens of other
              butterfly and moth species. Their early spring blooms provide nectar for
              Spring Azures when few other wildflowers are available. [2]
            </li>
            <li>
              Leave woodland leaf litter undisturbed through March. Spring Azure pupae
              overwinter in leaf litter at the base of host plants. Raking up all leaf
              litter in spring can destroy overwintering pupae before adults emerge in
              March and April. A thin layer of native leaf litter under trees and shrubs
              benefits Spring Azures and many other overwintering insects. [2]
            </li>
          </ol>
        </div>

        <div className="neighbor-grid">
          <button className="neighbor-card" onClick={() => onNavigate('eastern-tailed-blue')}>
            <span className="neighbor-name">Eastern Tailed-Blue</span>
            <span className="neighbor-note">A close relative in the gossamer-wing family — slightly smaller with a small tail on the hindwing; Eastern Tailed-Blues appear later in spring and prefer open fields rather than the woodland edges the Spring Azure prefers.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('eastern-comma')}>
            <span className="neighbor-name">Eastern Comma</span>
            <span className="neighbor-note">Emerges from adult overwintering at about the same time as Spring Azures hatch from their pupae — both are among the first butterflies seen each year, often in the same March or April woodland edge.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('new-jersey-tea')}>
            <span className="neighbor-name">New Jersey Tea</span>
            <span className="neighbor-note">One of the most important caterpillar host plants for Summer Azure and related species; planting New Jersey tea supports the entire azure complex through the summer generation.</span>
          </button>
          <button className="neighbor-card" onClick={() => onNavigate('serviceberry')}>
            <span className="neighbor-name">Serviceberry</span>
            <span className="neighbor-note">Blooms at the same time Spring Azures emerge in early spring; its nectar supports newly-emerged adults when few other wildflowers are available, and birds eat its berries in early summer.</span>
          </button>
        </div>

        <section aria-labelledby="sources-heading">
          <h2 id="sources-heading">Learn more and sources</h2>
          <ol>
            <li><a href="https://animaldiversity.org/accounts/Celastrina_ladon/" target="_blank" rel="noopener noreferrer">University of Michigan Museum of Zoology — Animal Diversity Web: Spring Azure</a></li>
            <li><a href="https://www.butterfliesandmoths.org/species/Celastrina-ladon" target="_blank" rel="noopener noreferrer">Butterflies and Moths of North America — Spring Azure</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}
