import { Link } from "react-router-dom";
import styled from "styled-components";

export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
`;
