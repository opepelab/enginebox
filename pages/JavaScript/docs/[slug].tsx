import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import fetch from 'node-fetch';

type Content = {
  docs: {
    id: number;
    title: string;
  };
};

type Str = {
  slug: string;
};

type ID = {
  id: number;
  slug: string;
  body: string;
  title: string;
};

const Slug: React.FC<Content> = ({ docs }) => {
  return (
    <div>
      <main>
        <p>{docs.title}</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api-server-kynp76vkbq-an.a.run.app');
  const repos: any = await res.json();

  const paths = repos.map((item: ID) => `/JavaScript/docs/${item.slug}`);

  return {
    paths,
    fallback: false,
  };
};
// ⏫パスの中身はあってるっぽい
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = String(context.params?.id);
  const res = await fetch(`https://api-server-kynp76vkbq-an.a.run.app?/${slug}`, { method: 'GET' });

  // const stringified = JSON.stringify(res);
  // const data = await JSON.parse(stringified);
  const json: any = await res.json();
  const stars = json.stargazers_count;
  // const data = await JSON.parse(JSON.stringify(res))

  return {
    props: {
      docs: stars,
    },
  };
};

export default Slug;

// {
//   headers : {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//    }
// }
