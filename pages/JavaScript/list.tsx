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

const Js: React.FC<Map> = ({ blog }) => {
  const t = useTranslate();
  const { locale } = useRouter();
  const From = locale === 'ja';
  return (
    <div>
      <main>
        <Box>
          <Text>Test</Text>
        </Box>
        {blog.map((props: any) => (
          <dl key={props.id}>
            <Link href={`/JavaScript/docs/${props.slug}`}>
              <a className="Center">{From ? props.title.ja : props.title.en}</a>
            </Link>
          </dl>
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  return {
    props: {
      blog: data.item,
    },
  };
};

export default Js;
