import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import fetch from 'node-fetch';
import { getPostData, getPostIds } from '../../lib/client';

type Content = {
  post: {
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

const Slug: React.FC<Content> = ({ post }) => {
  return (
    <div>
      <main>
        <p>{post.title}</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostIds();
  return {
    paths,
    fallback: false,
  };
};
// ⏫パスの中身はあってるっぽい
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = String(context.params?.id);
  const { post: post } = await getPostData(slug);

  return {
    props: {
      post,
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
