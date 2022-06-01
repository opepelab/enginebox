import Link from 'next/link';
import ActiveLink from 'components/Custom/ActiveLink';

const Translate = () => {
  return (
    <>
      <ActiveLink href="" locale="ja" activeClassName="border">
        <a>日本語</a>
      </ActiveLink>
      /
      <ActiveLink href="" locale="en" activeClassName="border">
        <a>English</a>
      </ActiveLink>
    </>
  );
};

export default Translate;
