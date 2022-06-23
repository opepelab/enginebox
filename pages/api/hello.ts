import { NextApiRequest, NextApiResponse } from 'next';

type Res = {
  items: {
    id: number;
    slug: string;
    title: string;
}[]
}

export default function (req: NextApiRequest, res: NextApiResponse<Res>) {
  res.status(200).json({
    items: [
    {
      id: 1,
      slug: "variable",
      title: "ヴァリアブル",
    },
    {
      id: 2,
      slug: "function",
      title: "ファンクション",
    },
  ]
}
  );
}
