import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

function TabNav({ type, contents }) {
  return (
    <nav>
      <NavLinks>
        {contents.map((cont) => (
          <li key={cont.name}>
            <TabNavItem to={cont.name}>{cont.name}</TabNavItem>
          </li>
        ))}
      </NavLinks>
    </nav>
  );
}

export default TabNav;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1px;
  justify-content: center;

  margin-bottom: 2rem;

  @media screen and (min-width: ${breakpoints.md}) {
    justify-content: flex-start;
  }
`;

const TabNavItem = styled(NavLink)`
  padding: 1rem 0.5rem;
  /* background-color: red; */
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom-color: #ffffff73;
  }

  &.active {
    border-bottom-color: white;
  }
`;
