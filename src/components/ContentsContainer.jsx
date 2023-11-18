import styled, { css } from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

const ContentsContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => "dir" !== prop,
})`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  grid-template-areas:
    "image"
    "text";
  text-align: center;
  gap: 2rem;
  margin-block: 1rem;
  margin-inline: auto;
  padding-inline: 1rem;

  > :first-child {
    grid-area: image;
  }

  > :last-child {
    grid-area: text;
  }

  @media screen and (min-width: ${breakpoints.sm}) {
    margin-block: 3rem;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "image text";

    ${(props) =>
      props.dir === "rtl" &&
      css`
        grid-template-areas: "text image";
      `}

    text-align: left;
    gap: 4rem;
    margin-block: 4rem;
  }
`;

export default ContentsContainer;
