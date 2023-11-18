import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

function TabNav({ type, contents }) {
  return (
    <NavContainer type={type}>
      <NavLinks type={type}>
        {contents.map((cont) => (
          <li key={cont.name}>
            <TabNavItem type={type} to={cont.name}>
              {type !== "dotted" && cont.name}
            </TabNavItem>
          </li>
        ))}
      </NavLinks>
    </NavContainer>
  );
}

export default TabNav;

const NavContainer = styled.nav.withConfig({
  shouldForwardProp: (prop) => "type" !== prop,
})`
  ${(props) =>
    props.type === "dotted" &&
    css`
      order: -1;
      margin-top: 0;

      @media screen and (min-width: ${breakpoints.md}) {
        order: unset;
        margin-top: 4rem;
      }
    `}
`;

const NavLinks = styled.ul.withConfig({
  shouldForwardProp: (prop) => "type" !== prop,
})`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  ${(props) =>
    props.type === "dotted" &&
    css`
      gap: 1rem;
      margin-bottom: 0;
    `}

  @media screen and (min-width: ${breakpoints.md}) {
    justify-content: flex-start;
  }
`;

const TabNavItem = styled(NavLink)`
  padding: 1rem 0.5rem;
  border-bottom: 3px solid transparent;
  display: inline-block;

  &:hover {
    border-bottom-color: #ffffff73;
  }

  &.active {
    border-bottom-color: white;
  }

  ${(props) =>
    props.type === "dotted" &&
    css`
      padding: 0;
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background-color: #ffffff71;

      &:hover {
        background-color: #ffffffb0;
      }

      &.active {
        background-color: white;
      }
    `}
`;
