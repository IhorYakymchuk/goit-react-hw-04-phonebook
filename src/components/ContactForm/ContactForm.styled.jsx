import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddingForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 500px;
  margin-bottom: 40px;
  padding: 20px;

  background-color: rgb(214, 219, 247);
  box-shadow: 2px 3px 4px rgb(95, 93, 93);
  border-radius: 4px;
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
`;

export const Input = styled(Field)`
  max-width: 400px;
  outline: transparent;
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px 4px rgb(95, 93, 93);

  &::placeholder {
    font-size: 14px;
    color: rgb(47, 46, 46);
  }
`;

export const ErrWrapper = styled.span`
  font-size: 14px;
  color: red;
  position: absolute;
  bottom: -20px;
`;

export const Button = styled.button`
  display: block;
  font-size: 16px;
  width: 150px;
  border: 1px solid rgb(125, 138, 162);
  border-radius: 4px;
  padding: 5px 10px;
  background-color: rgb(109, 171, 190);
  cursor: pointer;
  box-shadow: 2px 3px 5px rgb(88, 80, 80);

  &:hover,
  &:focus {
    background: rgb(60, 128, 196);
    box-shadow: rgb(18, 97, 175) 2px 5px 5px;
    color: white;
  }

  &:disabled {
    background-color: white;
    color: rgb(118, 112, 112);
    cursor: auto;
  }
`;
