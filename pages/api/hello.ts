import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200);
    res.send([
      {
        id: 1,
        slug: 'variable',
        title: 'するぐいちー',
        body: {
          ja: 'てすとー',
          en: 'testoer',
        },
      },
      {
        id: 2,
        slug: 'functions',
        title: 'するぐつー',
        body: {
          ja: 'テスト',
          en: 'test',
        },
      },
    ]);
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' });
  }
}
