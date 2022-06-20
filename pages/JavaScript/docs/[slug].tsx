import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';

type Content = {
  docs: {
    id: number;
    title: {
      ja: string;
      en: string;
    };
    body: {
      ja: string;
      en: string;
    };
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Slug: React.FC<Content> = ({ docs }) => {
  const { locale } = useRouter();
  const From = locale === 'ja';
  return (
    <div>
      <main>
        <h1>{From ? docs.title.ja : docs.title.en}</h1>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://enginebox.vercel.app/api/hello');
  const data = await res.json();

  const paths = data.map((item: IParams) => ({
    params: { slug: item.slug },
    // locale: 'ja',
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }
  const slug = context.params.slug;

  if (typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }
  const res = await fetch(`https://enginebox.vercel.app/api/hello/?${slug}`);
  const data = await res.json();

  return {
    props: {
      docs: data,
    },
  };
};

export default Slug;

{
  /* <div dangerouslySetInnerHTML={{ __html: docs.body.ja }} /> */
}
{
  /* <div dangerouslySetInnerHTML={{ __html: docs.body.ja }} /> */
}
