import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      id: 1,
      slug: 'variable',
      title: 'テストだよ tstt',
      // body: {
      //   ja: 'てすとー',
      //   en: 'testoer',
      // },
    },
    // {
    //   id: 2,
    //   slug: 'functions',
    //   title: {
    //     ja: '関数を学ぼう',
    //     en: 'Learn functions',
    //   },
    //   body: {
    //     ja: 'テスト',
    //     en: 'test',
    //   },
    // },
  ]);
};
