import { NextApiRequest, NextApiResponse } from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({
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
    res.status(500).json({ error: 'failed to fetch data' });
  }
}
