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
  return (
    <div>
      <main>
        <h1>{docs.title.ja}</h1>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://enginebox.vercel.app/api/hello');
  const data = await res.json();

  const paths = data.items.map((item: IParams) => ({
    params: { slug: item.slug },
    locale: 'ja',
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params as IParams;
  const res = await fetch(`https://enginebox.vercel.app/api/hello/${slug}`);
  const data = await res.json();

  return {
    props: {
      docs: data.items,
    },
  };
};

export default Slug;

{
  /* <div dangerouslySetInnerHTML={{ __html: docs.body.ja }} /> */
}

// const { locale } = useRouter();
// const From = locale === 'ja';
