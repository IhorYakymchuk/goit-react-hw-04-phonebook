import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 22px;
  font-weight: 500;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  max-width: 500px;
  padding: 2px 5px 2px 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  background-color: rgb(210, 205, 220);
  box-shadow: 2px 2px 4px rgb(95, 93, 93);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const Button = styled.button`
  margin: 5px;
  color: rgb(234, 226, 226);
  width: 70px;
  line-height: 1.5rem;
  background: rgb(47, 97, 112);
  border: none;
  border-radius: 5px;
  box-shadow: rgb(27, 56, 65) 2px 2px 2px;
  cursor: pointer;
  transition: all 150ms ease 0s;
  &:hover,
  &:focus {
    background: rgb(60, 128, 196);
    box-shadow: rgb(18, 97, 175) 2px 5px 5px;
  }
`;
