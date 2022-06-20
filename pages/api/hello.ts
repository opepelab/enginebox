import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.json([
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
}
