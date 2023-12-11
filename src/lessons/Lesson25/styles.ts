import styled from "styled-components";

import { colors } from "styles/colors";

export const Lesson25Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 70px;
  width: 100%;
  height: 100%;
  gap: 100px;
  background-color: ${colors.primary};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 470px;
  min-height: 470px;
  padding: 40px;
  border-radius: 8px;
  background-color: white;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: rgb(123, 54, 247);
`;
