# Bookworm: a Next.js app

Bookworm is a simple web app that allows you to keep track of the books you've read. It's built with [Next.js](https://nextjs.org/), TypeScript, and Tailwind CSS.
It uses [Supabase](https://supabase.io/) to store user data. Uses Google Books API to fetch book data.

This project is a work in progress. I'm building it to learn Next.js and Tailwind CSS, and to experiment with Supabase. I'm also using it as a way to keep track of the books I've read.

Feel free to contribute to the project by opening a pull request or an issue.

## Demo

You can see a demo of the app [here](https://makapx.github.io/bookworm-nextjs/).

## Getting Started

### Clone the repo

```bash
git clone git@github.com:makapx/bookworm-nextjs.git
```

### Setup Supabase

Create a Supabase account [here](https://app.supabase.io/).

#### Create a Supabase project

Create a new Supabase project and name it whatever you want. Free plan is enough for this project.

#### Create a Supabase table
Copy and paste the SQL code from `schema/supabaseinit.sql` into the SQL editor and click `Run`.
This will create all necessary tables for the app to work and set up the necessary policies.

#### Add your own content to Supabase
Populate books and collections tables with your own data.

### Install dependencies

```bash
npm install
```


### Setup environment variables

Create a `.env.local` file in the root of the project and add the following environment variables:

```bash
GOOGLE_BOOKS_API_VOLUMES_URL=https://www.googleapis.com/books/v1/volumes
GOOGLE_BOOKS_API_FRONT_COVER_URL=https://books.google.com/books/publisher/content/images/frontcover

NEXT_PUBLIC_SUPABASE_URL=<YOUR_SUPABASE_URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<YOUR_SUPABASE_ANON_KEY>
```

Use the Supabase URL and anon key from your Supabase project.

### Run the development server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Debug mode

Please follow the Next.js [debugging guide](https://nextjs.org/docs/advanced-features/debugging) to enable debug mode.