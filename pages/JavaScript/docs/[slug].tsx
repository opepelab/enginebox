import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';

type Content = {
  docs: {
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

type Paths = {
  slug: string;
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
        <div>
          <h1 className="h1">{docs.title.ja}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: docs.body.ja }} />
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://enginebox.vercel.app/api/hello');
  const data = await res.json();

  const paths = data.items.map((item: Paths) => ({
    params: { slug: item.slug },
    locale: 'ja',
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params as IParams;
  const res = await fetch(`https://enginebox.vercel.app/api/hello?${slug}`);
  const data = await res.json();

  return {
    props: {
      docs: data.items,
    },
  };
};

export default Slug;
