import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Icon from '@/components/ui/icon';
import { speciesProfiles, type SpeciesProfile } from '@/data/speciesProfiles';
import { profileImageSrc, profileImageAlt } from '@/lib/speciesProfileImage';
import { cn } from '@/lib/utils';

type FilterGroup = {
  label: string;
  options: string[];
};

type SortOption = 'name-asc' | 'name-desc' | 'season-asc' | 'season-desc';

type SpeciesCardProps = {
  species: SpeciesProfile;
};

const FILTER_GROUPS: FilterGroup[] = [
  {
    label: 'Class',
    options: ['Insect', 'Bird', 'Reptile', 'Amphibian', 'Mammal'],
  },
  {
    label: 'Yard support',
    options: ['Nest boxes', 'Host plants', 'Native plants', 'Leaf litter', 'Water source'],
  },
  {
    label: 'Season',
    options: ['Spring', 'Summer', 'Fall', 'Winter'],
  },
];

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'name-asc', label: 'Name (A–Z)' },
  { value: 'name-desc', label: 'Name (Z–A)' },
  { value: 'season-asc', label: 'Season (earliest first)' },
  { value: 'season-desc', label: 'Season (latest first)' },
];

const SEASON_ORDER: Record<string, number> = {
  Spring: 1,
  Summer: 2,
  Fall: 3,
  Winter: 4,
};

function normalizeTag(tag: string) {
  return tag.trim().toLowerCase();
}

function getPrimarySeason(species: SpeciesProfile) {
  const seasonTag = species.tags.find((tag) => normalizeTag(tag) in Object.fromEntries(Object.keys(SEASON_ORDER).map((key) => [key.toLowerCase(), true])));
  if (!seasonTag) return Number.MAX_SAFE_INTEGER;
  const match = Object.keys(SEASON_ORDER).find((key) => normalizeTag(key) === normalizeTag(seasonTag));
  return match ? SEASON_ORDER[match] : Number.MAX_SAFE_INTEGER;
}

function matchesFilters(species: SpeciesProfile, activeFilters: Set<string>) {
  if (activeFilters.size === 0) return true;
  const speciesTags = new Set(species.tags.map(normalizeTag));
  return Array.from(activeFilters).every((filter) => speciesTags.has(filter));
}

function sortSpecies(items: SpeciesProfile[], sortBy: SortOption) {
  const sorted = [...items];

  switch (sortBy) {
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case 'season-asc':
      return sorted.sort((a, b) => {
        const seasonDiff = getPrimarySeason(a) - getPrimarySeason(b);
        return seasonDiff !== 0 ? seasonDiff : a.name.localeCompare(b.name);
      });
    case 'season-desc':
      return sorted.sort((a, b) => {
        const seasonDiff = getPrimarySeason(b) - getPrimarySeason(a);
        return seasonDiff !== 0 ? seasonDiff : a.name.localeCompare(b.name);
      });
    case 'name-asc':
    default:
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
}

function SpeciesCard({ species }: SpeciesCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-moss/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand/30">
        <img
          src={profileImageSrc(species)}
          alt={profileImageAlt(species)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {species.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-sand px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-moss"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex-1">
          <h2 className="font-display text-2xl text-moss">{species.name}</h2>
          <p className="mt-1 text-sm italic text-charcoal/70">{species.scientificName}</p>
          <p className="mt-4 text-sm leading-6 text-charcoal/80">{species.hero.description}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={species.path}
            className="inline-flex items-center gap-2 rounded-full bg-butterfly px-4 py-2 text-sm font-semibold text-charcoal transition hover:bg-butterfly/90"
          >
            View profile
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full border border-moss/15 px-4 py-2 text-sm text-charcoal/70">
            <Icon name="Leaf" className="h-4 w-4 text-moss" />
            {species.actions.length} yard actions
          </span>
        </div>
      </div>
    </article>
  );
}

export default function SpeciesGallery() {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpecies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const visible = speciesProfiles.filter((species) => {
      const matchesQuery =
        query.length === 0 ||
        species.name.toLowerCase().includes(query) ||
        species.scientificName.toLowerCase().includes(query) ||
        species.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesQuery && matchesFilters(species, activeFilters);
    });

    return sortSpecies(visible, sortBy);
  }, [activeFilters, searchQuery, sortBy]);

  const activeFilterCount = activeFilters.size;

  function toggleFilter(option: string) {
    setActiveFilters((current) => {
      const next = new Set(current);
      const normalized = normalizeTag(option);
      if (next.has(normalized)) {
        next.delete(normalized);
      } else {
        next.add(normalized);
      }
      return next;
    });
  }

  function clearFilters() {
    setActiveFilters(new Set());
    setSearchQuery('');
    setSortBy('name-asc');
  }

  return (
    <>
      <SEO
        title="Species Gallery | Camp Monarch"
        description="Browse Camp Monarch species profiles to find birds, insects, reptiles, mammals, and amphibians you can support in a home habitat."
        path="/species-gallery"
      />

      <main className="min-h-screen bg-sand/35 pb-20 pt-16 sm:pt-20">
        <section className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-moss/70">Species gallery</p>
            <h1 className="mt-4 font-display text-4xl text-moss sm:text-5xl">Find the wildlife your yard can support</h1>
            <p className="mt-5 text-lg leading-8 text-charcoal/80">
              Every profile in Camp Monarch is chosen because a homeowner can actually help. Use the gallery to browse by animal class,
              season, or the kind of yard support each species needs.
            </p>
          </header>

          <section className="rounded-[2rem] border border-moss/10 bg-white/95 p-5 shadow-sm sm:p-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="grid flex-1 gap-4 sm:grid-cols-[minmax(0,1fr)_220px]">
                <label className="flex flex-col gap-2 text-sm font-medium text-charcoal">
                  Search species
                  <div className="relative">
                    <Icon name="Search" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/45" />
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Monarch, firefly, box turtle…"
                      className="w-full rounded-2xl border border-moss/15 bg-white py-3 pl-11 pr-4 text-sm text-charcoal outline-none transition focus:border-moss/40 focus:ring-2 focus:ring-butterfly/30"
                    />
                  </div>
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-charcoal">
                  Sort by
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value as SortOption)}
                    className="rounded-2xl border border-moss/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-moss/40 focus:ring-2 focus:ring-butterfly/30"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-sand px-4 py-2 text-sm font-medium text-charcoal/80">
                  {filteredSpecies.length} species shown
                </span>
                {(activeFilterCount > 0 || searchQuery || sortBy !== 'name-asc') && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 rounded-full border border-moss/15 px-4 py-2 text-sm font-semibold text-moss transition hover:border-moss/35 hover:bg-moss/5"
                  >
                    <Icon name="RotateCcw" className="h-4 w-4" />
                    Reset
                  </button>
                )}
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {FILTER_GROUPS.map((group) => (
                <div key={group.label} className="rounded-3xl border border-moss/10 bg-sand/30 p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-moss/70">{group.label}</h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {group.options.map((option) => {
                      const normalized = normalizeTag(option);
                      const active = activeFilters.has(normalized);

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleFilter(option)}
                          className={cn(
                            'rounded-full border px-4 py-2 text-sm font-medium transition',
                            active
                              ? 'border-moss bg-moss text-white shadow-sm'
                              : 'border-moss/15 bg-white text-charcoal hover:border-moss/30 hover:bg-moss/5'
                          )}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {filteredSpecies.length > 0 ? (
            <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredSpecies.map((species) => (
                <SpeciesCard key={species.slug} species={species} />
              ))}
            </section>
          ) : (
            <section className="rounded-[2rem] border border-dashed border-moss/20 bg-white/85 px-6 py-14 text-center shadow-sm">
              <div className="mx-auto max-w-xl">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-butterfly/30 text-moss">
                  <Icon name="Binoculars" className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-3xl text-moss">No species match those filters</h2>
                <p className="mt-3 text-base leading-7 text-charcoal/75">
                  Try clearing one filter or searching for a broader term. Many species share the same yard supports, even if they belong to
                  different classes.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss/90"
                >
                  Clear all filters
                  <Icon name="ArrowRight" className="h-4 w-4" />
                </button>
              </div>
            </section>
          )}
        </section>
      </main>
    </>
  );
}
