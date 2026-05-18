import { useState, useRef, useEffect } from 'react'
import type { Page } from '../App'

interface NavProps {
  current: Page
  onNavigate: (page: Page) => void
}

interface NavGroupSection {
  label: string
  items: { id: Page; label: string }[]
}

interface NavGroup {
  id: string
  label: string
  page?: Page
  children?: { id: Page; label: string }[]
  sections?: NavGroupSection[]
  featuredItem?: { id: Page; label: string }
  alignRight?: boolean
}

const groups: NavGroup[] = [
  { id: 'home', label: 'Home', page: 'home' },
  { id: 'matters', label: 'Why It Matters', page: 'why-monarchs' },
  {
    id: 'plants',
    label: 'Plants & Wildflowers',
    featuredItem: { id: 'plants-finder', label: 'Plant Finder (350+ Plants)' },
    sections: [
      {
        label: 'Browse',
        items: [
          { id: 'plants-by-family',      label: 'By Family' },
          { id: 'plants-by-conditions',  label: 'By Conditions' },
          { id: 'plants-species-index',  label: 'Full Species Index' },
        ],
      },
      {
        label: 'Plan Your Yard',
        items: [
          { id: 'plants-by-purpose',     label: 'By Purpose' },
          { id: 'plants-starter-plants', label: 'Starter Plants (Top 25)' },
          { id: 'plants-bloom-calendar', label: 'Bloom Calendar' },
        ],
      },
      {
        label: 'Plant Profiles',
        items: [
          { id: 'plants-milkweeds',      label: 'Milkweeds' },
          { id: 'virginia-bluebell',     label: 'Virginia Bluebell' },
          { id: 'wild-columbine',        label: 'Wild Columbine' },
          { id: 'golden-alexanders',     label: 'Golden Alexanders' },
          { id: 'common-milkweed',       label: 'Common Milkweed' },
          { id: 'swamp-milkweed',        label: 'Swamp Milkweed' },
          { id: 'new-jersey-tea',        label: 'New Jersey Tea' },
          { id: 'black-eyed-susan',      label: 'Black-eyed Susan' },
          { id: 'buttonbush',            label: 'Buttonbush' },
          { id: 'canada-goldenrod',      label: 'Canada Goldenrod' },
          { id: 'purple-coneflower',     label: 'Purple Coneflower' },
          { id: 'joe-pye-weed',          label: 'Joe Pye Weed' },
          { id: 'ironweed',              label: 'Ironweed' },
          { id: 'partridge-pea',         label: 'Partridge Pea' },
          { id: 'prairie-dropseed',      label: 'Prairie Dropseed' },
          { id: 'new-england-aster',     label: 'New England Aster' },
          { id: 'wild-bergamot',         label: 'Wild Bergamot' },
        ],
      },
    ],
  },
  {
    id: 'neighbors',
    label: 'Meet Your Neighbors',
    alignRight: true,
    featuredItem: { id: 'species-gallery', label: 'All Species — Photo Gallery' },
    sections: [
      {
        label: 'Butterflies & Moths',
        items: [
          { id: 'monarch-life',               label: 'Monarch Butterfly' },
          { id: 'tiger-swallowtail',          label: 'Tiger Swallowtail' },
          { id: 'black-swallowtail',          label: 'Black Swallowtail' },
          { id: 'great-spangled-fritillary',  label: 'Great Spangled Fritillary' },
          { id: 'leonards-skipper',           label: "Leonard's Skipper" },
          { id: 'polyphemus-moth',            label: 'Polyphemus Moth' },
          { id: 'luna-moth',                  label: 'Luna Moth' },
          { id: 'cecropia-moth',              label: 'Cecropia Moth' },
        ],
      },
      {
        label: 'Insects',
        items: [
          { id: 'fireflies',            label: 'Fireflies' },
          { id: 'native-bees',          label: 'Native Bees' },
          { id: 'american-bumble-bee',  label: 'American Bumble Bee' },
          { id: 'green-darner',         label: 'Green Darner' },
        ],
      },
      {
        label: 'Amphibians & Reptiles',
        items: [
          { id: 'box-turtles',     label: 'Box Turtles' },
          { id: 'gray-tree-frogs', label: 'Gray Tree Frogs' },
          { id: 'spring-peeper',   label: 'Spring Peeper' },
          { id: 'toad',            label: 'American Toad' },
          { id: 'garter-snake',    label: 'Garter Snake' },
        ],
      },
      {
        label: 'Mammals',
        items: [
          { id: 'eastern-chipmunk',  label: 'Eastern Chipmunk' },
          { id: 'little-brown-bat',  label: 'Little Brown Bat' },
          { id: 'virginia-opossum',  label: 'Virginia Opossum' },
        ],
      },
      {
        label: 'Birds',
        items: [
          { id: 'downy-woodpecker',           label: 'Downy Woodpecker' },
          { id: 'baltimore-oriole',           label: 'Baltimore Oriole' },
          { id: 'northern-cardinal',          label: 'Northern Cardinal' },
          { id: 'eastern-bluebird',           label: 'Eastern Bluebird' },
          { id: 'black-capped-chickadee',     label: 'Black-capped Chickadee' },
          { id: 'ruby-throated-hummingbird',  label: 'Ruby-throated Hummingbird' },
          { id: 'american-goldfinch',         label: 'American Goldfinch' },
          { id: 'american-robin',             label: 'American Robin' },
          { id: 'indigo-bunting',             label: 'Indigo Bunting' },
          { id: 'dark-eyed-junco',            label: 'Dark-eyed Junco' },
          { id: 'common-nighthawk',           label: 'Common Nighthawk' },
          { id: 'chimney-swift',              label: 'Chimney Swift' },
          { id: 'purple-martin',              label: 'Purple Martin' },
          { id: 'wood-thrush',                label: 'Wood Thrush' },
          { id: 'brown-thrasher',             label: 'Brown Thrasher' },
          { id: 'eastern-towhee',             label: 'Eastern Towhee' },
          { id: 'carolina-wren',              label: 'Carolina Wren' },
          { id: 'eastern-screech-owl',        label: 'Eastern Screech Owl' },
          { id: 'red-tailed-hawk',            label: 'Red-tailed Hawk' },
          { id: 'eastern-meadowlark',         label: 'Eastern Meadowlark' },
          { id: 'american-kestrel',           label: 'American Kestrel' },
        ],
      },
    ],
  },
  {
    id: 'do',
    label: 'What To Do',
    children: [
      { id: 'plant-milkweed',         label: 'Plant Milkweed' },
      { id: 'choose-a-plant',         label: 'Choose a Plant' },
      { id: 'native-plant-near-me',   label: 'Find Plants Near Me' },
      { id: 'waystation-guide',       label: 'Waystation Guide' },
      { id: 'raise-a-monarch',        label: 'Raise a Monarch' },
      { id: 'log-a-sighting',         label: 'Log a Sighting' },
      { id: 'take-action',            label: 'Take Action' },
      { id: 'the-first-year',         label: 'The First Year' },
      { id: 'habitat-transformation', label: 'From Lawn to Habitat' },
      { id: 'water-for-wildlife',     label: 'Water for Wildlife' },
      { id: 'leave-the-leaves',       label: 'Leave the Leaves' },
      { id: 'invasive-plants',        label: 'Remove Invasive Plants' },
      { id: 'hoa-guide',             label: 'Navigating HOA Rules' },
      { id: 'pesticide-guide',       label: 'Pesticides & Your Habitat' },
      { id: 'spring-checklist',       label: 'Spring Checklist' },
      { id: 'habitat-score',          label: 'Yard Check' },
    ],
  },
  {
    id: 'learn',
    label: 'Learn',
    // Last item — open right-aligned so it doesn't clip past the viewport edge
    alignRight: true,
    children: [
      { id: 'seasonal-calendar', label: 'Seasonal Calendar' },
      { id: 'the-migration',     label: 'The Migration' },
      { id: 'why-monarchs',      label: 'Why It Matters' },
      { id: 'talking-points',    label: 'Talking Points' },
      { id: 'faq',               label: 'FAQ' },
    ],
  },
]

const megaDropdownStyle = {
  width: 'min(640px, calc(100vw - 2.5rem))',
  maxWidth: 'calc(100vw - 2.5rem)',
  overflowX: 'hidden',
} as const

const megaDropdownItemStyle = {
  whiteSpace: 'normal',
  overflowWrap: 'anywhere',
  lineHeight: 1.4,
} as const

function isGroupActive(group: NavGroup, current: Page): boolean {
  if (group.page) return group.page === current
  if (group.featuredItem?.id === current) return true
  if (group.children?.some(c => c.id === current)) return true
  if (group.sections?.some(s => s.items.some(i => i.id === current))) return true
  return false
}

export default function Nav({ current, onNavigate }: NavProps) {
  const [open, setOpen] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(null)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  function handleGroupClick(group: NavGroup) {
    if (group.page) {
      onNavigate(group.page)
      setOpen(null)
    } else {
      setOpen(open === group.id ? null : group.id)
    }
  }

  function handleChildClick(page: Page) {
    onNavigate(page)
    setOpen(null)
  }

  return (
    <nav className="site-nav" ref={navRef} aria-label="Main navigation">
      <div
        className="site-nav__brand"
        onClick={() => { onNavigate('home'); setOpen(null) }}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && onNavigate('home')}
      >
        <img src="/logo.png" alt="" aria-hidden="true" style={{ height: '2rem', width: 'auto', display: 'block' }} />
        Camp Monarch
      </div>

      <div className="site-nav__links">
        {groups.map(group => {
          const active = isGroupActive(group, current)
          const isOpen = open === group.id
          const hasDropdown = !!(group.children || group.sections)
          const alignClass = group.alignRight ? ' site-nav__dropdown--right' : ''

          return (
            <div key={group.id} className="site-nav__group">
              <button
                className={`site-nav__link${active ? ' active' : ''}${hasDropdown ? ' site-nav__link--has-dropdown' : ''}${hasDropdown && isOpen ? ' open' : ''}`}
                onClick={() => handleGroupClick(group)}
                aria-expanded={hasDropdown ? isOpen : undefined}
                aria-haspopup={hasDropdown ? 'true' : undefined}
                aria-current={active && group.page ? 'page' : undefined}
              >
                {group.label}
              </button>

              {/* Standard flat dropdown (e.g. What To Do, Learn) */}
              {group.children && isOpen && (
                <div
                  className={`site-nav__dropdown${alignClass}`}
                  role="menu"
                >
                  {group.children.map(child => (
                    <button
                      key={child.id}
                      className={`site-nav__dropdown-item${current === child.id ? ' active' : ''}`}
                      onClick={() => handleChildClick(child.id)}
                      role="menuitem"
                      aria-current={current === child.id ? 'page' : undefined}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Categorized scrollable dropdown (Meet Your Neighbors) */}
              {group.sections && isOpen && (() => {
                const featured = group.featuredItem
                return (
                  <div
                    className={`site-nav__dropdown site-nav__dropdown--mega${alignClass}`}
                    role="menu"
                    style={megaDropdownStyle}
                  >
                    {featured && (
                      <button
                        className={`site-nav__dropdown-item site-nav__dropdown-item--all${current === featured.id ? ' active' : ''}`}
                        onClick={() => handleChildClick(featured.id)}
                        role="menuitem"
                        aria-current={current === featured.id ? 'page' : undefined}
                        style={megaDropdownItemStyle}
                      >
                        {featured.label}
                      </button>
                    )}
                    <div className="site-nav__mega-grid">
                      {group.sections.map(section => (
                        <div key={section.label} className="site-nav__dropdown-section">
                          <span className="site-nav__section-head">{section.label}</span>
                          {section.items.map(item => (
                            <button
                              key={item.id}
                              className={`site-nav__dropdown-item${current === item.id ? ' active' : ''}`}
                              onClick={() => handleChildClick(item.id)}
                              role="menuitem"
                              aria-current={current === item.id ? 'page' : undefined}
                              style={megaDropdownItemStyle}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })()}
            </div>
          )
        })}
      </div>
    </nav>
  )
}
