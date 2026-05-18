-- Habitat Hero seed exchange tables
-- Run in: https://supabase.com/dashboard/project/tphtbkodkfynyljbncen/sql
--
-- Creates: stewards, seed_requests, seed_request_items
-- Enables RLS on all three tables so each steward sees only their own data.

-- ============================================================
-- 1. stewards  (one record per physical address)
-- ============================================================
create table if not exists public.stewards (
  id                 uuid        primary key default gen_random_uuid(),
  user_id            uuid        references auth.users(id) on delete cascade not null unique,
  email              text,
  full_name          text        not null,
  street             text        not null,
  city               text        not null,
  state              text        not null,
  zip                text        not null,
  address_normalized text        not null unique,
  sun_exposure       text        not null
                                 check (sun_exposure in ('full-sun', 'part-sun', 'mostly-shade')),
  yard_size          text        not null
                                 check (yard_size in ('balcony', 'small', 'medium', 'large', 'acre-plus')),
  token_balance      integer     not null default 6 check (token_balance >= 0),
  created_at         timestamptz not null default now()
);

alter table public.stewards enable row level security;

create policy steward_select on public.stewards
  for select using (auth.uid() = user_id);

create policy steward_insert on public.stewards
  for insert with check (auth.uid() = user_id);

create policy steward_update on public.stewards
  for update using (auth.uid() = user_id);

-- ============================================================
-- 2. seed_requests  (one active request per steward per season)
-- ============================================================
create table if not exists public.seed_requests (
  id                 uuid        primary key default gen_random_uuid(),
  steward_id         uuid        references public.stewards(id) on delete cascade not null,
  season             text        not null,
  status             text        not null default 'submitted'
                                 check (status in ('submitted', 'assigned', 'confirmed',
                                                   'fulfilled', 'released', 'cancelled')),
  requested_tokens   integer     not null check (requested_tokens between 1 and 6),
  submitted_at       timestamptz not null default now(),
  fulfillment_due_at timestamptz,
  notes              text
);

alter table public.seed_requests enable row level security;

create policy seed_request_select on public.seed_requests
  for select using (
    steward_id in (select id from public.stewards where user_id = auth.uid())
  );

create policy seed_request_insert on public.seed_requests
  for insert with check (
    steward_id in (select id from public.stewards where user_id = auth.uid())
  );

-- ============================================================
-- 3. seed_request_items  (individual packets within a request)
-- ============================================================
create table if not exists public.seed_request_items (
  id          uuid    primary key default gen_random_uuid(),
  request_id  uuid    references public.seed_requests(id) on delete cascade not null,
  collection  text    not null,
  seed_name   text    not null,
  token_cost  integer not null default 1,
  status      text    not null default 'requested'
                      check (status in ('requested', 'fulfilled', 'unavailable'))
);

alter table public.seed_request_items enable row level security;

create policy seed_request_item_select on public.seed_request_items
  for select using (
    request_id in (
      select sr.id from public.seed_requests sr
      join public.stewards s on sr.steward_id = s.id
      where s.user_id = auth.uid()
    )
  );

create policy seed_request_item_insert on public.seed_request_items
  for insert with check (
    request_id in (
      select sr.id from public.seed_requests sr
      join public.stewards s on sr.steward_id = s.id
      where s.user_id = auth.uid()
    )
  );
