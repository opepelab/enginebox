import { Text, Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

type Map = {
  blog: {
    map: StringConstructor;
  };
};

const Index: React.FC<Map> = ({ blog }) => {
  return (
    <main>
      <div>
        <Text>tes</Text>
        {/* {blog.map((blog: any) => (
          <dl key={blog.id}> */}
        {/* <dt className="dateST">
              <Date dateString={data.date} />
            </dt> */}
        {/* <Link href={`/docs/url/${data.slug}`}> */}
        {/* <a>
              <div>{blog.title}</div>
            </a> */}
        {/* </Link> */}
        {/* </dl>
        ))} */}
      </div>
    </main>
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

export default Index;
