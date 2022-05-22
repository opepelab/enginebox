import { Text, Box } from "@chakra-ui/react";
import { GetStaticProps } from "next";

type Map = {
  data: {
    map: StringConstructor;
  };
};

const Index: React.FC<Map> = ({ data }) => {
  return (
    <main>
      <div>
        <Text>tes</Text>
        {data.map((data: any) => (
          <dl key={data.id}>
            {/* <dt className="dateST">
              <Date dateString={data.date} />
            </dt> */}
            {/* <Link href={`/docs/url/${data.slug}`}> */}
            <a>
              <div>{data.title}</div>
            </a>
            {/* </Link> */}
          </dl>
        ))}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:8080/getjson/");
  const data = await res.json();

  return {
    props: {
      blog: data.items,
    },
  };
};

export default Index;
