import { useLocation, useNavigate } from "react-router-dom";
import { LikeIcon } from "assets";
import {
  LayoutWrapper,
  Header,
  Footer,
  Main,
  NavContainer,
  StyledLink,
  StyledNavLink,
  NavContainerCol,
  LogoContainer,
  LogoImg
} from "./styles";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);
  return (
    <LayoutWrapper>
      <Header>
      <LogoContainer onClick={() => navigate("/")}>
          <LogoImg src={LikeIcon} />
          {/* Logo */}
          </LogoContainer>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
            to="/users"
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
            to="/about"
          >
            About
          </StyledNavLink>
          <StyledNavLink
            to={"/clients"}
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
          >
            Clients
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <NavContainerCol>
          <StyledLink to={"/"}>Home</StyledLink>
          <StyledLink to={"/users"}>Users</StyledLink>
          <StyledLink to={"/about"}>About</StyledLink>
          <StyledLink to={"/clients"}>Clients</StyledLink>
        </NavContainerCol>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
