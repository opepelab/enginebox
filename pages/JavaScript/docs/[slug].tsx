import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';

type Content = {
  docs: {
    id: number;
    title: string;
  };
};

type Str = {
    slug: string;
}


const Slug: React.FC<Content> = ({ docs }) => {
  return (
    <div>
      <main>
        <p>{docs.title}</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://127.0.0.1:5000/');
  const data = await res.json();

  const paths: string[] = data.map((item: Str) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
// ⏫パスの中身はあってるっぽい
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const res = await fetch(`http://127.0.0.1:5000/${slug}/`, {
    headers: {
      Accept: "application/json; charset=UTF-8",
      'User-Agent': '*',
    },
  });

  // const data =  JSON.stringify(res);
  // const data = await JSON.parse(stringified);
  const data = await res.text();
  // const data = await JSON.parse(JSON.stringify(res))

  return {
    props: {
      docs: data,
    },
  };
};

export default Slug;

// {
//   headers : { 
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//    }
// }