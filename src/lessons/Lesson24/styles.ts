import styled from "styled-components";

import { colors } from "styles/colors";

export const Lesson24Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 70px;
  width: 100%;
  height: 100%;
  gap: 100px;
  background-color: ${colors.primary};
`;

export const Text = styled.p`
  font-size: 20px;
  color: black;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  width: 100%;
  height: fit-content;
  padding: 10px;
  background-color: white;
`;