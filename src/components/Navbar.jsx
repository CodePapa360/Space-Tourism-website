import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNavBar>
      <Logo to="/home">
        <img src="/images/shared/logo.svg" alt="Logo" />
      </Logo>

      <Line></Line>

      <MenuButton onClick={() => setIsOpen((open) => !open)}>
        <img
          src={`/images/shared/icon-${isOpen ? "close" : "hamburger"}.svg`}
          alt="Menu"
        />
      </MenuButton>

      {isOpen && <Overlay onClick={() => setIsOpen((open) => !open)}></Overlay>}

      <Navigation className={isOpen ? "open" : ""}>
        <ul>
          <li>
            <NavItem onClick={() => setIsOpen((open) => !open)} to="/home">
              Home
            </NavItem>
          </li>
          <li>
            <NavItem
              onClick={() => setIsOpen((open) => !open)}
              to="/destination"
            >
              Destination
            </NavItem>
          </li>
          <li>
            <NavItem onClick={() => setIsOpen((open) => !open)} to="/crew">
              Crew
            </NavItem>
          </li>
          <li>
            <NavItem
              onClick={() => setIsOpen((open) => !open)}
              to="/technology"
            >
              Technology
            </NavItem>
          </li>
        </ul>
      </Navigation>
    </StyledNavBar>
  );
}

export default Navbar;
////////////////
/////STYLES/////
////////////////

const StyledNavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 2rem 0 0 2rem;
  }
`;

const Navigation = styled.nav.withConfig({
  shouldForwardProp: (prop) => "isOpen" !== prop,
})`
  --width: 13rem;
  position: fixed;
  top: 0;
  right: calc(-1 * var(--width));
  height: 100dvh;
  width: 100%;
  max-width: var(--width);
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  z-index: 100;

  &.open {
    right: 0;
  }

  @media screen and (min-width: 768px) {
    right: 0;
    position: relative;
    max-width: unset;
    height: auto;
    width: auto;
  }

  ul {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      margin-top: 0;
      padding: 0 5rem;
    }
  }
`;

const NavItem = styled(NavLink)`
  display: inline-block;
  border-bottom: 3px solid transparent;
  padding-top: 1rem;
  padding-bottom: 0.3rem;

  @media screen and (min-width: 768px) {
    padding: 1.5rem 1rem;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
  }

  &.active {
    border-bottom: 3px solid white;
  }
`;

const MenuButton = styled.span`
  z-index: 200;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  width: 3rem;
  margin-right: 2rem;

  img {
    width: 100%;
  }
`;

const Line = styled.span`
  margin-left: auto;
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    margin-right: -2rem;
    z-index: 20;
    height: 2px;
    flex-grow: 1;
    background-color: #ffffff5e;
  }
`;

const Overlay = styled.span`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100dvw;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  transition: all 0.3s ease;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
