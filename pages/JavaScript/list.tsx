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
  id: number;
  slug: string;
  title: {
    ja: string;
    en: string;
  };
};

const List: React.FC<Map> = ({ docs }) => {
  const t = useTranslate();
  const { locale } = useRouter();
  const From = locale === 'ja';
  return (
    <div>
      <main>
        <Box>
          <Text>Test</Text>
        </Box>
        {docs.map((props: Content) => (
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
  const res = await fetch('https://enginebox.vercel.app/api/hello');
  const data = await res.json();

  return {
    props: {
      docs: data.items,
    },
  };
};

export default List;
