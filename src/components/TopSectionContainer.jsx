import styled, { css } from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

const TopSectionContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => "type" !== prop,
})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 25rem;
  padding-inline: 1rem;

  ${(prop) =>
    prop.type === "technology" &&
    css`
      flex-direction: column;
      flex-direction: column-reverse;

      gap: 2rem;

      @media screen and (min-width: ${breakpoints.md}) {
        flex-direction: row;
        flex-direction: row-reverse;
        max-width: auto;
      }
    `}

  @media screen and (min-width: ${breakpoints.md}) {
    max-width: auto;
  }
`;

export default TopSectionContainer;
