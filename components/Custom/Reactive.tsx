import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type RNode = {
  children: ReactNode;
  url: string;
  // state: boolean | null;
  on: string;
  off: string;
  locale: string;
};

const Reactive: React.FC<RNode> = ({ children, url, on, off, locale }) => {
  const router = useRouter();
  return (
    <Link href={url} locale={locale}>
      <a className={router.locale === locale ? on : off}>{children}</a>
    </Link>
  );
};

export default Reactive;
