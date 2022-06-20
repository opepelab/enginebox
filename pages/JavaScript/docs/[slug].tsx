import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';

type Content = {
  docs: {
    title: string;
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Slug: React.FC<Content> = ({ docs }) => {
  return (
    <div>
      <main>
        <h1>{docs.title}</h1>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://enginebox.vercel.app/api/hello');
  const data = await res.json();

  const paths: string[] = data.items.map((item: IParams) => ({
    params: { slug: item.slug.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
// ⏫パスの中身はあってるっぽい
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const res = await fetch(`https://enginebox.vercel.app/api/hello/${slug}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  });
  const data = await res.json();

  return {
    props: {
      docs: data.items ?? null,
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

// const { locale } = useRouter();
// const From = locale === 'ja';
