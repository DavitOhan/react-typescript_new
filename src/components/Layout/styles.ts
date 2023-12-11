import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { colors } from "styles/colors";

export const LayoutWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 20px;
  color: ${colors.white};
`;

export const NavContainerCol = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  color: ${colors.white};
`;

export const StyledLink = styled(Link)`
  color: white;
  font-size: 16px;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 20px;
  color: ${colors.black};
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 150px;
  padding: 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;