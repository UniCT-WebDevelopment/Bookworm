# Bookworm: a Next.js app

Bookworm is a simple web app that allows you to keep track of the books you've read. It's built with [Next.js](https://nextjs.org/), TypeScript, and Tailwind CSS.
It uses [Supabase](https://supabase.io/) as a backend to store user data and [Prisma](https://www.prisma.io/nextjs) as cache to reduce the number of requests to the Google Books API.

This project is a work in progress. I'm building it to learn Next.js and Tailwind CSS, and to experiment with Supabase and Prisma. I'm also using it as a way to keep track of the books I've read.

Feel free to contribute to the project by opening a pull request or an issue.

## Getting Started

### Setup environment variables

Create a `.env.local` file in the root of the project and add the following environment variables:

```bash
GOOGLE_BOOKS_API_VOLUMES_URL=https://www.googleapis.com/books/v1/volumes
GOOGLE_BOOKS_API_FRONT_COVER_URL=https://books.google.com/books/publisher/content/images/frontcover

NEXT_PUBLIC_SUPABASE_URL=<YOUR_SUPABASE_URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<YOUR_SUPABASE_ANON_KEY>
```


Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Debug mode

Please follow the Next.js [debugging guide](https://nextjs.org/docs/advanced-features/debugging) to enable debug mode.