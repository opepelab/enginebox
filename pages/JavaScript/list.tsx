import { Text, Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import useTranslate from 'hooks/useTranslate';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Map = {
  docs: {
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

const List: React.FC<Map> = ({ docs }) => {
  return (
    <div>
      <main>
        <Box>
          <Text>Test</Text>
        </Box>
        {docs.map((props: Content) => (
          <dl key={props.id}>
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
  const res = await fetch('https://enginebox.vercel.app/api/hello');
  const data = await res.json();

  return {
    props: {
      docs: data,
    },
  };
};

export default List;
