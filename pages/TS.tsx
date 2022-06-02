import { Text, Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

type Map = {
  blog: {
    map: StringConstructor;
  };
};

const Ts: React.FC<Map> = ({ blog }) => {
  return (
    <div>
      <main>
        <Box>
          <Text>tes</Text>
        </Box>
      </main>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("http://127.0.0.1:5000/");
//   const data = await res.json();

//   return {
//     props: {
//       blog: data.item,
//     },
//   };
// };

export default Ts;
