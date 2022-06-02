// import { Text, Box, Heading } from '@chakra-ui/react';
// import { GetStaticProps } from 'next';
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
  const From = locale === 'ja';
  return (
    <>
      <main>
        <div>
          <div className="Index">
            <ul className="HomeList">
              <li>
                <Link href="/JS">
                  <a>JavaScript</a>
                </Link>
              </li>
              <li>
                <Link href="/TS">
                  <a>TypeScript</a>
                </Link>
              </li>
              <li>
                <Link href="/RT">
                  <a>React</a>
                </Link>
              </li>
              <li>
                <Link href="/NT">
                  <a>Next.js</a>
                </Link>
              </li>
              <li>
                <Link href="/ND">
                  <a>Node.js . {t.Built}</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* {blog.map((blog: any) => (
          <dl key={blog.id}>
            <dt className="dateST">
              <div>{blog.data}</div>
            </dt> */}
          {/* <Link href={`/docs/url/${data.slug}`}> */}
          {/* <a>
              <div>{From ? blog.title.ja : blog.title.en}</div>
            </a> */}
          {/* </Link> */}
          {/* </dl>
        ))} */}
        </div>
      </main>
    </>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch('http://127.0.0.1:5000/');
//   const data = await res.json();

//   return {
//     props: {
//       blog: data.item,
//     },
//   };
// };

export default Index;
