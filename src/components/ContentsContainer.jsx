import styled from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

const ContentsContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  text-align: center;
  gap: 2rem;
  margin-block: 1rem;
  margin-inline: auto;
  padding-inline: 1rem;

  @media screen and (min-width: ${breakpoints.sm}) {
    margin-block: 3rem;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    text-align: left;
    gap: 4rem;
    margin-block: 4rem;
  }
`;

export default ContentsContainer;
