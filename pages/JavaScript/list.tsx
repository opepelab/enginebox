// import { Text, Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import useTranslate from 'hooks/useTranslate';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAllPostData } from 'lib/client';

type Map = {
  posts: {
    map: StringConstructor;
  };
};

type Content = {
  title: string;
  id: number;
  slug: string;
  // title: {
  //   ja: string;
  //   en: string;
  // };
};

const List: React.FC<Map> = ({ posts }) => {
  return (
    <div>
      <main>
        {posts.map((props: Content) => (
          <dl>
            <Link href={`/JavaScript/docs/${props.slug}`}>
              <a className="Center">{props.title}</a>
            </Link>
          </dl>
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostData();

  return {
    props: {
      posts,
    },
  };
};

export default List;
