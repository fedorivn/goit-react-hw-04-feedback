import styled from '@emotion/styled';

export const Container = styled.div``;
export const Button = styled.button`
  text-align: center;
  margin-right: 10px;
  background-color: white;
  color: rgb(27, 113, 242);
  cursor: pointer;
  width: 75px;
  height: 30px;
  border: rgb(27, 113, 242);
  box-shadow: 0 8px 8px -4px lightblue;
  border-radius: 5px;

  &:hover {
   
    color: white;
    background-color: rgb(27, 113, 242);
    transition: color, background-color, 1s;
  }
`;

export const ButtonsList = styled.ul`
  padding-left: 75px;
`;
