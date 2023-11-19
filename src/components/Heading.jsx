import styled from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

const Heading = styled.h1.withConfig({
  shouldForwardProp: (prop) => "index" !== prop,
})`
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1rem;
  letter-spacing: 2px;

  &::before {
    content: "${(props) => props.index}";
    margin-right: 0.5rem;
    opacity: 0.6;
  }
`;

export default Heading;
