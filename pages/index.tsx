import { Text, Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import useTranslate from 'hooks/useTranslate';
import Link from 'next/link';
import { useRouter } from 'next/router';
type Map = {
  blog: {
    map: StringConstructor;
  };
};

const Index: React.FC<Map> = ({ blog }) => {
  const t = useTranslate();
  const { locale } = useRouter();
  return (
    <main>
      <div>
        <Link href="/JavaScript">
          <a>Java</a>
        </Link>
        <p>test</p>
        {blog.map((blog: any) => (
          <dl key={blog.id}>
            <dt className="dateST">
              <div>{blog.data}</div>
            </dt>
            {/* <Link href={`/docs/url/${data.slug}`}> */}
            <a>
              <div>{locale === 'ja' ? blog.title.ja : blog.title.en}</div>
            </a>
            {/* </Link> */}
          </dl>
        ))}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://127.0.0.1:5000/');
  const data = await res.json();

  return {
    props: {
      blog: data.item,
    },
  };
};

export default Index;
