import { Text, Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import useTranslate from 'hooks/useTranslate';

type Map = {
  blog: {
    map: StringConstructor;
  };
};

const Js: React.FC<Map> = ({ blog }) => {
  const t = useTranslate();
  return (
    <div>
      <main>
        <Box>
          <Text>Test</Text>
        </Box>
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
