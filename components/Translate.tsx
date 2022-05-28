import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslate from 'hooks/useTranslate';

const Translate = () => {
  const t = useTranslate();
  const { locale } = useRouter();
  return (
    <>
      <Link href="" locale="ja" className="bt">
        日本語
      </Link>
      /
      <Link href="" locale="en">
        English
      </Link>
    </>
  );
};

export default Translate;
