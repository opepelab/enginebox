import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import ActiveLink from 'components/Custom/ActiveLink';

type RNode = {
  children: ReactNode;
  url: string;
  // state: boolean | null;
  on: string;
  off: string;
  mount: string;
  locale: string;
};

const Reactive: React.FC<RNode> = ({ children, url, on, off, mount, locale }) => {
  const router = useRouter();
  return (
    <ActiveLink href={url} activeClassName={mount} locale={locale}>
      <a className={router.locale === locale ? on : off}>{children}</a>
    </ActiveLink>
  );
};

export default Reactive;
