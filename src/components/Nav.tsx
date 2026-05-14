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
      { id: 'green-darner', label: 'Green Darner' },
      { id: 'garter-snake', label: 'Garter Snake' },
      { id: 'dark-eyed-junco', label: 'Dark-eyed Junco' },
      { id: 'eastern-chipmunk', label: 'Eastern Chipmunk' },
      { id: 'spring-peeper', label: 'Spring Peeper' },
      { id: 'toad', label: 'American Toad' },
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
