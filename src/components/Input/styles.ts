import styled from "styled-components";

interface InputComponentProps {
  $error: string | undefined;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: black;
`;

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 50px;
  padding: 20px;
  border: ${({ $error }) => (!!$error ? "1px solid red" : "1px solid black")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: fit-content;
  color: red;
`;
