import styled from 'styled-components';

export default styled.button`
  display: inline-block;
  background-color: #7b38d8;
  border-radius: 20px;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;

  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  &:hover span {
    padding-right: 25px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`;
