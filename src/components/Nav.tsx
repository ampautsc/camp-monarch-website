import { useState, useRef, useEffect } from 'react'
import type { Page } from '../App'

interface NavProps {
  current: Page
  onNavigate: (page: Page) => void
}

interface NavGroup {
  id: string
  label: string
  page?: Page
  children?: { id: Page; label: string }[]
}

const groups: NavGroup[] = [
  { id: 'home', label: 'Home', page: 'home' },
  { id: 'matters', label: 'Why It Matters', page: 'why-monarchs' },
  {
    id: 'neighbors',
    label: 'Meet Your Neighbors',
    children: [
      { id: 'species-gallery',   label: 'All Species — Photo Gallery' },
      { id: 'monarch-life',      label: 'Monarch Butterfly' },
      { id: 'fireflies',         label: 'Fireflies' },
      { id: 'box-turtles',       label: 'Box Turtles' },
      { id: 'native-bees',       label: 'Native Bees' },
      { id: 'gray-tree-frogs',   label: 'Gray Tree Frogs' },
      { id: 'downy-woodpecker',  label: 'Downy Woodpecker' },
      { id: 'baltimore-oriole',  label: 'Baltimore Oriole' },
      { id: 'northern-cardinal', label: 'Northern Cardinal' },
      { id: 'eastern-bluebird',       label: 'Eastern Bluebird' },
      { id: 'black-capped-chickadee', label: 'Black-capped Chickadee' },
      { id: 'ruby-throated-hummingbird', label: 'Ruby-Throated Hummingbird' },
      { id: 'american-goldfinch', label: 'American Goldfinch' },
      { id: 'american-robin', label: 'American Robin' },
      { id: 'indigo-bunting', label: 'Indigo Bunting' },
      { id: 'tiger-swallowtail', label: 'Tiger Swallowtail' },
      { id: 'polyphemus-moth', label: 'Polyphemus Moth' },
      { id: 'luna-moth', label: 'Luna Moth' },
      { id: 'green-darner', label: 'Green Darner' },
      { id: 'garter-snake', label: 'Garter Snake' },
      { id: 'dark-eyed-junco', label: 'Dark-eyed Junco' },
      { id: 'eastern-chipmunk', label: 'Eastern Chipmunk' },
      { id: 'spring-peeper', label: 'Spring Peeper' },
      { id: 'toad', label: 'American Toad' },
      { id: 'little-brown-bat', label: 'Little Brown Bat' },
      { id: 'wood-thrush', label: 'Wood Thrush' },
      { id: 'eastern-screech-owl', label: 'Eastern Screech Owl' },
    ],
  },
  {
    id: 'do',
    label: 'What To Do',
    children: [
      { id: 'plant-milkweed',       label: 'Plant Milkweed' },
      { id: 'choose-a-plant',       label: 'Choose a Plant' },
      { id: 'native-plant-near-me', label: 'Find Plants Near Me' },
      { id: 'waystation-guide',     label: 'Waystation Guide' },
      { id: 'raise-a-monarch',      label: 'Raise a Monarch' },
      { id: 'log-a-sighting',       label: 'Log a Sighting' },
      { id: 'take-action',          label: 'Take Action' },
      { id: 'the-first-year',       label: 'The First Year' },
      { id: 'habitat-transformation', label: 'From Lawn to Habitat' },
      { id: 'water-for-wildlife',   label: 'Water for Wildlife' },
      { id: 'leave-the-leaves',     label: 'Leave the Leaves' },
      { id: 'invasive-plants',      label: 'Remove Invasive Plants' },
      { id: 'hoa-guide',             label: 'Navigating HOA Rules' },
      { id: 'pesticide-guide',       label: 'Pesticides & Your Habitat' },
      { id: 'spring-checklist',     label: 'Spring Checklist' },
      { id: 'habitat-score',         label: 'Yard Check' },
    ],
  },
  {
    id: 'learn',
    label: 'Learn',
    children: [
      { id: 'seasonal-calendar', label: 'Seasonal Calendar' },
      { id: 'the-migration', label: 'The Migration' },
      { id: 'why-monarchs',  label: 'Why It Matters' },
      { id: 'talking-points', label: 'Talking Points' },
      { id: 'faq',           label: 'FAQ' },
    ],
  },
]

function isGroupActive(group: NavGroup, current: Page): boolean {
  if (group.page) return group.page === current
  return group.children?.some(c => c.id === current) ?? false
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
        Camp Monarch
      </div>

      <div className="site-nav__links">
        {groups.map(group => {
          const active = isGroupActive(group, current)
          const isOpen = open === group.id

          return (
            <div key={group.id} className="site-nav__group">
              <button
                className={`site-nav__link${active ? ' active' : ''}${group.children ? ' site-nav__link--has-dropdown' : ''}${group.children && isOpen ? ' open' : ''}`}
                onClick={() => handleGroupClick(group)}
                aria-expanded={group.children ? isOpen : undefined}
                aria-haspopup={group.children ? 'true' : undefined}
                aria-current={active && group.page ? 'page' : undefined}
              >
                {group.label}
              </button>

              {group.children && isOpen && (
                <div className="site-nav__dropdown" role="menu">
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
            </div>
          )
        })}
      </div>
    </nav>
  )
}
