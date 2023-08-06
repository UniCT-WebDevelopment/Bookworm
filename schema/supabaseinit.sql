/** Create books table */
create table if not exists public.books(
	id bigint generated always as identity primary key,
	api_id text not null unique,
	title text not null,
	author text not null,
	hq_image text not null,
);

/** Create collections table */
create table if not exists public.collections(
	id bigint generated always as identity primary key,
	name text
);

/** Create collection_book_associations table */
create table if not exists public.collection_book_associations(
	id bigint generated always as identity primary key,
	book_id bigint not null references public.books(id) on delete cascade,
	collection_id bigint not null references public.collections(id) on delete cascade,
);


/** Create public profiles table */
create table if not exists public.profiles(
	id bigint primary key
);

alter table public.profiles add column if not exists username text not null unique;
alter table public.profiles add column if not exists email text not null unique;
alter table public.profiles add column if not exists favorite_genre text;

/** Create reviews table */
create table if not exists reviews (
	id bigint generated always as identity primary key,
	user_id bigint not null references public.profiles(id) on delete cascade,
	book_id text not null,
	usernames text not null references public.profiles(username) on delete cascade,
	book_title text not null,
	book_author text not null,
	created_at timestamp not null default now(),
	content text not null
);

/** Create throughts table */
create table if not exists throughts (
	id bigint generated always as identity primary key,
	user_id bigint not null references public.profiles(id) on delete cascade,
	created_at timestamp not null default now(),
	content text not null
);

/** Create policies - read only */
create policy book_read_all on public.books for select using (true);
create policy collections_read_all on public.collections for select using (true);
create policy collection_book_associations_read_all on public.collection_book_associations for select using (true);
create policy profiles_read_all on public.profiles for select using (true);

/** Create policies - read all only, write only for auth users */
create policy reviews_read_all on public.reviews for select using (true);
create policy reviews_write_auth on public.reviews for insert to authenticated with check (true);

create policy throughts_read_all on public.throughts for select using (true);
create policy throughts_write_auth on public.throughts for insert to authenticated with check (true);

/** Connect auth.users to profiles using function and trigger */
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
	insert into public.profiles (id, username, email, favorite_genre)
	values (new.id, new.raw_user_meta_data->>'username', new.email, new.raw_user_meta_data->>'favorite_genre');
	return new;
end;
$$;

create trigger on_auth_user_created
	after insert on auth.users
	for each row execute procedure public.handle_new_user();
