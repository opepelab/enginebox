import Link from 'next/link';
import ActiveLink from 'components/Custom/ActiveLink';
import Reactive from './Custom/Reactive';

const Translate = () => {
  return (
    <div className="Toggle">
      <Reactive url="" locale="ja" on={'border'} off="borderNoHave" mount={''}>
        <a>日本語</a>
      </Reactive>
      /
      <Reactive url="" locale="en" on={'border'} off="borderNoHave" mount={''}>
        <a>English</a>
      </Reactive>
    </div>
  );
};

export default Translate;
