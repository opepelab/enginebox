import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

type Content = {
  docs: {
    item: {
      title: string;
      body: string;
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
  return (
    <div>
      <div>
        <h1 className="h1">{docs.item.title}</h1>
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: docs.item.body }} /> */}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  const paths = data.item.map((items: Paths) => ({
    params: { slug: items.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const data = fetch(`http://localhost:3000/api/hello/${slug}`);

  return {
    props: {
      docs: data.item,
    },
  };
};

export default Slug;
