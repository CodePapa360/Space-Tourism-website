import styled from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

const ImageContainer = styled.div`
  max-height: 12rem;
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${breakpoints.md}) {
    max-height: 22rem;
  }

  img {
    height: 100%;
    width: auto;
  }
`;

export default ImageContainer;
