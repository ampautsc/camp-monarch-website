import { useState, useRef, useEffect } from 'react'
import type { Page } from '../App'

interface NavProps {
  current: Page
  onNavigate: (page: Page) => void
}

interface NavGroup {
  id: string
  label: string
  // If page is set, clicking the label navigates directly (no dropdown)
  page?: Page
  children?: { id: Page; label: string }[]
}

const groups: NavGroup[] = [
  {
    id: 'home',
    label: 'Home',
    page: 'home',
  },
  {
    id: 'why',
    label: 'Why It Matters',
    children: [
      { id: 'why-monarchs',  label: 'Why Monarchs?' },
      { id: 'the-migration', label: 'The Migration' },
      { id: 'monarch-life',  label: "The Monarch's Life" },
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
      { id: 'the-first-year',       label: 'The First Year' },
      { id: 'raise-a-monarch',      label: 'Raise a Monarch' },
    ],
  },
  {
    id: 'yard',
    label: 'In Your Yard',
    children: [
      { id: 'fireflies',   label: 'Fireflies' },
      { id: 'box-turtles', label: 'Box Turtles' },
      { id: 'native-bees', label: 'Native Bees' },
      { id: 'log-a-sighting', label: 'Log a Sighting' },
    ],
  },
  {
    id: 'start',
    label: 'Get Started',
    children: [
      { id: 'take-action', label: 'Take Action' },
      { id: 'faq',         label: 'FAQ' },
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Close on Escape
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
        ðŸ¦‹ Camp Monarch
      </div>

      <div className="site-nav__links">
        {groups.map(group => {
          const active = isGroupActive(group, current)
          const isOpen = open === group.id

          return (
            <div key={group.id} className="site-nav__group">
              <button
                className={`site-nav__link${active ? ' active' : ''}`}
                onClick={() => handleGroupClick(group)}
                aria-expanded={group.children ? isOpen : undefined}
                aria-haspopup={group.children ? 'true' : undefined}
                aria-current={active && group.page ? 'page' : undefined}
              >
                {group.label}
                {group.children && (
                  <span className={`site-nav__chevron${isOpen ? ' open' : ''}`} aria-hidden="true">â–¾</span>
                )}
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
