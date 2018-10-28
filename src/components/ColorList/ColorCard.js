import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
`;

const ColorPreview = styled.div`
  width: 200px;
  height: 200px;
  background: ${props => props.color};
`;

export default function ColorCard({ color }) {
  return (
    <Wrapper>
      <div>{color.name}</div>
      <ColorPreview color={color.color} />
    </Wrapper>
  );
}
