import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({
    items: [
      {
        id: 1,
        slug: 'variable',
        title: {
          ja: '変数を学ぼう',
          en: 'Variable',
        },
        body: {
          ja: 'てすとー',
          en: 'testoer',
        },
      },
      {
        id: 2,
        slug: 'functions',
        title: {
          ja: '関数を学ぼう',
          en: 'Learn functions',
        },
        body: {
          ja: 'テスト',
          en: 'test',
        },
      },
      {
        id: 3,
        slug: 'functions',
        title: {
          ja: '休憩することを覚えよう',
          en: 'Variable',
        },
        body: {
          ja: 'てすつ',
          en: 'testier',
        },
      },
    ],
  });
};
