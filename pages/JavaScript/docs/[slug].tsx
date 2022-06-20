import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';

type Content = {
  docs: {
    id: number;
    title: string;

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
        <h1>{docs.title}</h1>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://enginebox.vercel.app/api/hello');
  const data = await res.json();

  const paths: string[] = data.map((item: IParams) => ({
    params: { slug: item.slug.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
// ⏫パスの中身はあってるっぽい
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params as IParams;
  const data = await fetch(`https://enginebox.vercel.app/api/hello/${slug}`);
  // const data = await res.json();

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
