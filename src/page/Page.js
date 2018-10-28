import 'page/styles';

import { ColorsConsumer } from 'contexts';
import { ColorList } from 'components/ColorList/ColorList';
import Container from 'components/Container';

export default function Page() {
  return (
    <Container>
      <ColorsConsumer>
        {({ colors, fetchColors }) => <ColorList colors={colors} fetchColors={fetchColors} />}
      </ColorsConsumer>
    </Container>
  );
}
