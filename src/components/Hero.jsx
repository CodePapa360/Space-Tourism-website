import styled from "styled-components";

const Hero = styled.h1.withConfig({
  shouldForwardProp: (prop) => "size" !== prop,
})`
  text-transform: uppercase;
  font-size: ${(props) => (props.size === "small" ? "1.8rem" : "4rem")};
  font-family: "Bellefair", serif;
`;

export default Hero;
