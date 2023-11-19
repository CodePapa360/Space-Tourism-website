import styled, { css } from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

const Hero = styled.h1.withConfig({
  shouldForwardProp: (prop) => "size" !== prop,
})`
  text-transform: uppercase;
  font-family: "Bellefair", serif;
  font-size: 4rem;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 5rem;
  }

  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 1.8rem !important;
    `}
`;

export default Hero;
