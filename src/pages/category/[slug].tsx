import { useRouter } from 'next/router'

const GenreDynamiquePage = () => {
  const router = useRouter()
  return (
      <div>
          <h1>Genre Dynamique Page</h1>
          <p>
            Slug: {router.query.slug}
          </p>
      </div>
  );
};

export default GenreDynamiquePage;
