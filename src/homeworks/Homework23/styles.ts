import styled from "styled-components";

export const Homework23Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 70px;
  width: 100%;
  height: 100%;
  gap: 100px;
  background-color: black;
`;

export const CreatePersonCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  min-height: 500px;
  height: fit-content;
  width: fit-content;
  padding: 40px;
  gap: 20px;
  background-color: white;
`;

export const PersonCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  min-height: 400px;
  height: fit-content;
  width: fit-content;
  padding: 60px;
  gap: 30px;
  background-color: white;
`;

export const PersonInfoSmall = styled.p`
  font-size: 16px;
  color: grey;
`;

export const PersonInfoBig = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

export const PersonInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
