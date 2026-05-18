import type { Page } from '../App'

// Photo data — Wikimedia Commons (CC BY-SA) and iNaturalist open-data (CC BY-NC).
// Verified 2026-05-13. Attribution listed by bottom of page.
// vis-001, vis-002, vis-003, vis-004: real subject photography, card-top strip format.
const PHOTO_FALLBACK =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540"><rect width="100%" height="100%" fill="%23e8f5e9"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="48" fill="%234caf50">🌿</text></svg>'

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface Species {
  id: string
  name: string
  scientificName: string
  emoji: string
  shortDesc: string
  status: 'common' | 'declining' | 'endangered'
  photo: string
  photoCredit: string
  page: Page | null
  habitatTags: string[]
}

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const SPECIES: Species[] = [
  {
    id: 'monarch',
    name: 'Monarch Butterfly',
    scientificName: 'Danaus plexippus',
    emoji: '🦋',
    shortDesc:
      'Iconic long-distance migrator whose survival depends entirely on milkweed in your yard.',
    status: 'endangered',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg/960px-Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg',
    photoCredit: 'Kenneth Dwain Harrelson / CC BY-SA 3.0',
    page: 'monarch',
    habitatTags: ['milkweed', 'open-meadow', 'garden'],
  },
  {
    id: 'firefly',
    name: 'Firefly',
    scientificName: 'Photinus pyralis',
    emoji: '✨',
    shortDesc:
      'Summer-night magic that\'s quietly vanishing as lawns replace the tall grass fireflies need.',
    status: 'declining',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Firefly_in_the_Pacific_Northwest.jpg/960px-Firefly_in_the_Pacific_Northwest.jpg',
    photoCredit: 'Yikrazuul / CC BY 3.0',
    page: 'fireflies',
    habitatTags: ['tall-grass', 'edge', 'woodland'],
  },
  {
    id: 'bumble-bee',
    name: 'American Bumble Bee',
    scientificName: 'Bombus pensylvanicus',
    emoji: '🐝',
    shortDesc:
      'Once abundant across the East, now functionally gone from much of its range.',
    status: 'endangered',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bombus_pensylvanicus_-_American_bumble_bee_%2846069085671%29.jpg/960px-Bombus_pensylvanicus_-_American_bumble_bee_%2846069085671%29.jpg',
    photoCredit: 'USGS Native Bee Inventory and Monitoring Lab / CC BY 2.0',
    page: 'american-bumble-bee',
    habitatTags: ['meadow', 'garden', 'open-land'],
  },
  {
    id: 'box-turtle',
    name: 'Eastern Box Turtle',
    scientificName: 'Terrapene carolina',
    emoji: '🐢',
    shortDesc:
      'A garden elder that can outlive you — if roads and lawn mowers don\'t get them first.',
    status: 'declining',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Eastern_box_turtle_virginia.jpg/960px-Eastern_box_turtle_virginia.jpg',
    photoCredit: 'Ltshears / CC BY-SA 3.0',
    page: 'box-turtles',
    habitatTags: ['woodland', 'edge', 'leaf-litter'],
  },
  {
    id: 'american-toad',
    name: 'American Toad',
    scientificName: 'Anaxyrus americanus',
    emoji: '🐸',
    shortDesc:
      'Eats thousands of insects a summer — a free, living pest-control service that needs moist refuge.',
    status: 'common',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/AmericanToad.jpg/960px-AmericanToad.jpg',
    photoCredit: 'Brian Gratwicke / CC BY 2.0',
    page: 'toad',
    habitatTags: ['garden', 'woodland-edge', 'near-water'],
  },
  {
    id: 'spring-peeper',
    name: 'Northern Spring Peeper',
    scientificName: 'Pseudacris crucifer',
    emoji: '🐸',
    shortDesc:
      'Tiny frog, enormous chorus — the first wild sound of spring in the East.',
    status: 'common',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Spring_peeper_shot.jpg/960px-Spring_peeper_shot.jpg',
    photoCredit: 'Brian Gratwicke / CC BY 2.0',
    page: 'spring-peeper',
    habitatTags: ['wetland', 'woodland', 'vernal-pool'],
  },
  {
    id: 'gray-treefrog',
    name: 'Eastern Gray Treefrog',
    scientificName: 'Hyla versicolor',
    emoji: '🐸',
    shortDesc:
      'Masters of camouflage that breed in backyard water features and devour garden pests.',
    status: 'common',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Hyla_versicolor_on_glass.jpg/960px-Hyla_versicolor_on_glass.jpg',
    photoCredit: 'Fredlyfish4 / CC BY-SA 3.0',
    page: 'gray-tree-frogs',
    habitatTags: ['woodland', 'garden', 'near-water'],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

const STATUS_STYLES: Record<Species['status'], { badge: string; label: string }> = {
  common: { badge: 'bg-emerald-100 text-emerald-800', label: 'Stable' },
  declining: { badge: 'bg-amber-100 text-amber-800', label: 'Declining' },
  endangered: { badge: 'bg-red-100 text-red-800', label: 'Endangered' },
}

function SpeciesCard({
  species,
  onNavigate,
}: {
  species: Species
  onNavigate: (page: Page) => void
}) {
  const { badge, label } = STATUS_STYLES[species.status]

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
      {/* Card-top photo strip */}
      <div className="relative h-36 overflow-hidden bg-stone-100">
        <img
          src={species.photo}
          alt={species.name}
          onError={(e) => {
            ;(e.target as HTMLImageElement).src = PHOTO_FALLBACK
          }}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <span
          className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-semibold ${badge}`}
        >
          {label}
        </span>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="text-base font-semibold text-stone-900 leading-snug">
            {species.emoji} {species.name}
          </h3>
          <p className="text-xs italic text-stone-400 mt-0.5">{species.scientificName}</p>
        </div>

        <p className="text-sm text-stone-600 leading-relaxed flex-1">{species.shortDesc}</p>

        {/* Habitat tags */}
        <ul className="flex flex-wrap gap-1.5" aria-label="Habitat tags">
          {species.habitatTags.map((tag) => (
            <li
              key={tag}
              className="px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-xs font-medium"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* CTA */}
        {species.page ? (
          <button
            onClick={() => onNavigate(species.page as Page)}
            className="mt-auto w-full py-2 px-4 rounded-lg bg-green-700 hover:bg-green-800 text-white text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            Learn more →
          </button>
        ) : (
          <div className="mt-auto w-full py-2 px-4 rounded-lg bg-stone-100 text-stone-400 text-sm font-semibold text-center cursor-not-allowed">
            Page coming soon
          </div>
        )}
      </div>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main page
// ─────────────────────────────────────────────────────────────────────────────

export default function SpeciesGallery({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      {/* Hero */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900">
          Wildlife Worth Protecting
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          These species live — or once lived — in backyards across the eastern United States. Each
          one tells you something about the health of the land around it.
        </p>
      </header>

      {/* Gallery grid */}
      <section aria-label="Species gallery">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {SPECIES.map((species) => (
            <li key={species.id}>
              <SpeciesCard species={species} onNavigate={onNavigate} />
            </li>
          ))}
        </ul>
      </section>

      {/* Photo attribution */}
      <section aria-label="Photo credits" className="border-t border-stone-200 pt-8">
        <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-3">
          Photo Credits
        </h2>
        <ul className="text-xs text-stone-400 space-y-1">
          {SPECIES.filter((s) => s.photo !== PHOTO_FALLBACK).map((s) => (
            <li key={s.id}>
              <strong>{s.name}</strong>: {s.photoCredit}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-stone-400">
          All photographs are sourced from Wikimedia Commons or iNaturalist under Creative Commons
          licenses (CC BY 2.0, CC BY-SA 3.0, or CC BY-NC 4.0). No modifications were made.
        </p>
      </section>
    </div>
  )
}
