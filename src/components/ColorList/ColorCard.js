import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ColorPreview = styled.div`
  width: 200px;
  height: 200px;
  background: ${props => props.color};
  border-radius: 10px;
`;

export default function ColorCard({ color }) {
  return (
    <Wrapper>
      <h2>{color.name}</h2>
      <ColorPreview color={color.color} />
    </Wrapper>
  );
}
