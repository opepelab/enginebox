import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200);
    res.send({
      items: [
        {
          id: 1,
          slug: 'variable',
          title: 'ヴァリアブル',
        },
        {
          id: 2,
          slug: 'function',
          title: 'ファンクション',
        },
      ],
    });
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' });
  }
}
