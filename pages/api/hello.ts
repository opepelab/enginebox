import { NextApiRequest, NextApiResponse } from 'next';

type Res = {
  slug: string;
  title: string;
}[];

export default function (req: NextApiRequest, res: NextApiResponse<Res>) {
  res.status(200).json([
    {
      "slug": "variable",
      "title": "ヴァリアブル",
    },
    {
      "slug": "function",
      "title": "ファンクション",
    },
  ]);
}
