import 'page/styles';

import { ColorsConsumer } from 'contexts';
import { ColorList } from 'components/ColorList/ColorList';

export default function Page() {
  return (
    <div>
      <ColorsConsumer>
        {({ colors, fetchColors }) => <ColorList colors={colors} fetchColors={fetchColors} />}
      </ColorsConsumer>
    </div>
  );
}
