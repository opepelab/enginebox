import Link from 'next/link';
import ActiveLink from 'components/Custom/ActiveLink';
import Reactive from './Custom/Reactive';

const Translate = () => {
  return (
    <div className="Toggle">
      <Reactive url="" locale="ja" on={'border'} off="borderNoHave">
        日本語 /
      </Reactive>
      <Reactive url="" locale="en" on={'border'} off="borderNoHave">
        English
      </Reactive>
    </div>
  );
};

export default Translate;
