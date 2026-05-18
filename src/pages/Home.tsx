import { useEffect, useMemo, useState } from 'react'
import type { Page } from '../App'

interface HomeProps {
  onNavigate: (page: Page) => void
}

// Photo sources: Wikimedia Commons (CC BY-SA). Attribution at bottom of page.
// vis-004: verified thumbnail URLs from Wikimedia Commons API 2026-05-09.
// TODO: download and host in /public/ for production performance.
const CARD_PHOTOS = {
  plantMilkweed: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Monarch_Butterfly_Danaus_plexippus_Butterfly_Weed_1650px.jpg/960px-Monarch_Butterfly_Danaus_plexippus_Butterfly_Weed_1650px.jpg',
  logSighting: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Danaus_plexippus_caterpillar_on_milkweed.jpg/960px-Danaus_plexippus_caterpillar_on_milkweed.jpg',
  trackMigration: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Monarchs_overwintering_Angangueo_site_in_Mexico.jpg',
  nativeWildflowers: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Solidago_canadensis_20050815_04.jpg/960px-Solidago_canadensis_20050815_04.jpg',
}

const HERO_PHOTO_URL = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Angangueo_monarchs.jpg'

const INAT_MONARCH_TAXON_ID = 48662
const INAT_US_PLACE_ID = 1
const FALLBACK_MONARCH_SIGHTINGS = 1466

function monthStartIso(date: Date): string {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1)).toISOString().slice(0, 10)
}

function formatSightings(count: number): string {
  return new Intl.NumberFormat('en-US').format(count)
}

// Neighbor species preview photos — Wikimedia Commons
const NEIGHBOR_PHOTOS = {
  fireflies: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Photuris_lucicrescens.jpg',
  screechOwl: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Eastern_Screech_Owl.jpg',
  boxTurtle: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Eastern_Box_Turtle%2C_North_Carolina%2C_US_imported_from_iNaturalist_photo_71168521_%28cropped%29.jpg',
  chickadee: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Poecile-atricapilla-001.jpg',
}

// Seasonal right-now content — 2 items max on homepage (bta-004, bta-005)
type SeasonalItem = { label: string; detail: string }
type SeasonalContent = { header: string; items: [SeasonalItem, SeasonalItem] }

function getSeasonalContent(month: number): SeasonalContent {
  // Spring: March (2), April (3), May (4)
  if (month >= 2 && month <= 4) {
    return {
      header: 'Spring migration: what to watch for right now',
      items: [
        {
          label: 'Milkweed is emerging.',
