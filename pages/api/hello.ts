import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;
  res.json({
    item: [
      {
        id: 1,
        title: {
          ja: '変数を学ぼう',
          en: 'Variable',
        },
        body: 'x = ~',
      },
      {
        id: 2,
        title: {
          ja: '関数を学ぼう',
          en: 'Learn functions',
        },
        body: `関数は最初にconstで代入する関数を宣言する。<br/>
        <code>const Index = ({引数}) => { return (戻り値)}</code> \n
        アロー関数だとこんな感じだ。
        関数の動きの基本は。
        引数を受けとって戻り値に返す。
        これだけだ。
        returnの中は関数から戻されるから日本語で(戻り値)とも言うんだ。

        アロー関数を書かない正規関数で書くと

        function Index (引数) {
          return (
            戻り値	
            )
        }
        こんな感じだ。
        引数っていうのはこれから先ずっと出てくる概念だから重要だぞ。
        今回紹介した文法はJavaScriptとTypeScriptの文法になる。`,
      },
    ],
  });
};
