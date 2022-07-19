import fetch from 'node-fetch';
const apiUrl = 'https://api-server-kynp76vkbq-an.a.run.app';

export async function getAllPostData() {
  const res = await fetch(apiUrl);
  const posts = Object(await res.json());
  return posts;
}

type StrSlug = {
  slug: string;
};

export async function getPostIds() {
  const res = await fetch(apiUrl);
  const posts = Object(await res.json());

  return posts.map((post: StrSlug) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
}

export async function getPostData(slug: string) {
  const res = await fetch(`${apiUrl}/${slug}`);
  const post = Object(await res.json());

  return {
    post,
  };
}
