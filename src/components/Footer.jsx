import styled from "styled-components";
import Attribution from "./Attribution";

function Footer() {
  return (
    <StyledFooter>
      <Attribution />
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  margin-top: auto;
`;
